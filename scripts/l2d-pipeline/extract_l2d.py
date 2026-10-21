"""Extracts a dynamic illustration ("L2D" toggle, actually Spine 3.8) from the local PC client.

For one `arts/dynchars/<bundle>.ab` it writes into --out-dir:
  <stem>.skel, <stem>.atlas            — the `dyn_illust_*` Spine data (atlas page names get `#` → `_`)
  dyn_illust_<...>.png                 — atlas page texture(s), alpha-premultiplied
  <stem>-bg.png                        — prefab layers drawn behind the skeleton
  <stem>-fg<part>[-<run>].png          — prefab layers drawn in front of (part of) the skeleton
and prints the `l2d: { ... }` object (backdrop + overlays) to paste into the operator's skin.

Why the post-processing:
  - Client textures are straight alpha with colour left in fully transparent pixels, while
    SpineViewer draws with premultipliedAlpha=true. Unpremultiplied pages render as white boxes
    and smeared streaks, so every page is premultiplied here.
  - Some bundles ship the alpha channel as a separate `<texture>[alpha]` texture (colour page
    fully opaque); it's merged back in, or every region renders as an opaque box. That colour
    page is already premultiplied, so it's unpremultiplied first — premultiplying it a second
    time darkens every semi-transparent edge into a thin dark outline (visible on faces).
  - Scenery is not all in the Spine data: much of it is MeshRenderer / SkinnedMeshRenderer
    meshes in the bundle's Unity prefab. Each mesh is rasterized triangle by triangle (skinned
    ones posed bone x bindpose) in skeleton world units (transforms relative to the skeleton
    GameObject, x1/SkeletonData scale) and composited per insertion point: sortingOrder below
    the skeleton -> backdrop, above it -> overlay, between the parts of a skeleton split by
    separatorSlotNames -> overlay drawn after that separator slot.
  - Blend mode and tint come from the material's shader (read from the client's shared shader
    bundles): Additive / AlphaBlend / Mask/Erase (cuts what's beneath; torn-paper edges),
    GrabPass distortion skipped; `_TintColor`/`_MainColor` scaled relative to the shader's own
    default (0.5 = neutral for the legacy-particle style shaders), `_RamTex` colour ramps,
    `_DissolveTex`/`_WeightTex`/`_MaskTex` as alpha masks.
  - ParticleSystems are not reproduced.

--auto takes every active idle layer (* in --list); tap/skill/intro branches (Interact, Special,
Start) and screen-filling tiled planes are left out. Add --layers / --exclude to adjust.

Requirements: Python 3.10+, `pip install UnityPy Pillow`.
Usage:
  python scripts/l2d-pipeline/extract_l2d.py char_391_rosmon_2 --list
  python scripts/l2d-pipeline/extract_l2d.py char_391_rosmon_2 \
      --out-dir public/operators/rosmontis/l2d --stem rosmontis-e2 --auto
"""

import argparse
import importlib.util
import json
import re
import struct
import sys
from pathlib import Path

import UnityPy
from PIL import Image, ImageChops, ImageDraw, ImageMath
from UnityPy.helpers import CompressionHelper
from UnityPy.helpers.MeshHelper import MeshHandler

from particles import export_particles

PROJECT_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_CLIENT = 'F:/YostarGames/Arknights_EN'
DYNCHARS_SUBDIR = 'Arknights_Data/PersistentData/Bundles/arts/dynchars'
# Builtin Unity Quad (MeshFilter points outside the bundle): ±0.5 in XY, UV 0..1.
BUILTIN_QUAD = ([(-0.5, -0.5), (0.5, -0.5), (-0.5, 0.5), (0.5, 0.5)], [(0, 0), (1, 0), (0, 1), (1, 1)], [(0, 1, 2), (1, 3, 2)])
MASK_TEXTURE_KEYS = ('_DissolveTex', '_WeightTex', '_MaskTex')
BACKDROP_PIXELS_PER_UNIT = 1.0
SHADER_BUNDLES = ('[uc]shaders.ab', 'shaders/other.ab', 'shaders/special.ab', 'shaders/standard.ab', 'shaders/standardblend.ab')
# UnityEngine.Rendering.BlendMode values used by the L2D shaders.
BLEND_ONE, BLEND_SRC_COLOR, BLEND_ONE_MINUS_SRC_ALPHA = 1, 3, 10
# Scene box (skeleton units) the composites are cropped to: a dynamic illustration spans roughly
# x ±1100, y -500..2100; some effect meshes are huge tiling planes (Ch'en Holungday `wave` is ±62000).
SCENE_BOX = (-1600.0, 1600.0, -900.0, 2500.0)

# Registers the LZ4AK decompressor (bundle compression flag 4) as a side effect.
_voice_spec = importlib.util.spec_from_file_location(
    'gen_title_voices', PROJECT_ROOT / 'scripts/voice-pipeline/gen_title_voices.py')
_voice_module = importlib.util.module_from_spec(_voice_spec)
_voice_spec.loader.exec_module(_voice_module)


def bundle_cab_names(path):
    """CAB names inside a UnityFS bundle, from its header + directory block only (no data blocks)."""
    def read_cstring(data, offset):
        end = data.index(b'\0', offset)
        return data[offset:end].decode('utf-8', 'replace'), end + 1
    with open(path, 'rb') as handle:
        head = handle.read(512)
        if not head.startswith(b'UnityFS\0'):
            return []
        version = struct.unpack_from('>I', head, 8)[0]
        _player, offset = read_cstring(head, 12)
        _engine, offset = read_cstring(head, offset)
        _size, compressed, uncompressed, flags = struct.unpack_from('>qIII', head, offset)
        offset += 20
        if version >= 7:
            offset = (offset + 15) // 16 * 16
        handle.seek(-compressed, 2) if flags & 0x80 else handle.seek(offset)
        blob = handle.read(compressed)
    if flags & 0x3F:
        blob = CompressionHelper.DECOMPRESSION_MAP[flags & 0x3F](blob, uncompressed)
    position = 16
    block_count = struct.unpack_from('>i', blob, position)[0]
    position += 4 + block_count * 10
    node_count = struct.unpack_from('>i', blob, position)[0]
    position += 4
    names = []
    for _ in range(node_count):
        name, position = read_cstring(blob, position + 20)
        if name.startswith('CAB-') and '.' not in name:
            names.append(name)
    return names


def safe_read(pointer):
    try:
        return pointer.read()
    except Exception:
        return None


def premultiply(image):
    red, green, blue, alpha = image.convert('RGBA').split()
    return Image.merge('RGBA', [ImageChops.multiply(channel, alpha) for channel in (red, green, blue)] + [alpha])


def unpremultiply(colour, alpha):
    """Straight-alpha RGBA from premultiplied colour + alpha (rgb / a; F→L conversion clamps)."""
    alpha_float = alpha.convert('F')
    bands = [
        ImageMath.lambda_eval(lambda args: args['channel'] * 255 / (args['alpha'] + 0.5),
                              channel=band.convert('F'), alpha=alpha_float).convert('L')
        for band in colour.split()]
    return Image.merge('RGBA', bands + [alpha])


def components_of(game_object):
    found = {}
    for entry in game_object.m_Component:
        pointer = entry.component if hasattr(entry, 'component') else entry
        data = safe_read(pointer)
        if data is not None:
            found.setdefault(data.object_reader.type.name, data)
    return found


# ---- 3D transform math (row-major 4x4, column vectors) ----

def matrix_multiply(left, right):
    return [[sum(left[row][k] * right[k][column] for k in range(4)) for column in range(4)] for row in range(4)]


def trs_matrix(position, rotation, scale):
    x, y, z, w = rotation.x, rotation.y, rotation.z, rotation.w
    rotation_matrix = [
        [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
        [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
        [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)],
    ]
    scales = (scale.x, scale.y, scale.z)
    translation = (position.x, position.y, position.z)
    return [[rotation_matrix[row][column] * scales[column] for column in range(3)] + [translation[row]] for row in range(3)] + [[0, 0, 0, 1]]


IDENTITY = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]


def solve_affine(points, values):
    """Least-squares fit value = a*x + b*y + c over (x, y) points (normal equations, 3x3)."""
    sums = [[0.0] * 3 for _ in range(3)]
    rhs = [0.0] * 3
    for (x, y), value in zip(points, values):
        row = (x, y, 1.0)
        for i in range(3):
            rhs[i] += row[i] * value
            for j in range(3):
                sums[i][j] += row[i] * row[j]
    return solve_3x3(sums, rhs)


def solve_3x3(matrix, rhs):
    augmented = [matrix[i][:] + [rhs[i]] for i in range(3)]
    for column in range(3):
        pivot = max(range(column, 3), key=lambda row: abs(augmented[row][column]))
        augmented[column], augmented[pivot] = augmented[pivot], augmented[column]
        for row in range(3):
            if row != column and augmented[column][column]:
                factor = augmented[row][column] / augmented[column][column]
                augmented[row] = [a - factor * b for a, b in zip(augmented[row], augmented[column])]
    return [augmented[i][3] / augmented[i][i] if augmented[i][i] else 0.0 for i in range(3)]


# ---- bundle inspection ----

class DynIllustBundle:
    def __init__(self, bundle_path):
        self.environment = UnityPy.load(str(bundle_path))
        self.skeleton_root = None
        self.skeleton_scale = 0.01
        self.text_assets = {}
        self.textures = {}
        for asset in self.environment.objects:
            kind = asset.type.name
            if kind == 'TextAsset':
                data = asset.read()
                self.text_assets[data.m_Name] = data
            elif kind == 'Texture2D':
                data = asset.read()
                self.textures[data.m_Name] = data
            elif kind == 'MonoBehaviour':
                data = asset.read()
                if data.m_Name.startswith('dyn_illust') and data.m_Name.endswith('_SkeletonData'):
                    self.skeleton_scale = asset.read_typetree().get('scale', self.skeleton_scale)
            elif kind == 'Transform':
                transform = asset.read()
                game_object = safe_read(transform.m_GameObject)
                if game_object and game_object.m_Name.startswith('dyn_illust') and not transform.m_Father.path_id:
                    self.skeleton_root = transform
        # Materials point into the client's shared shader bundles; loading them lets shader_info()
        # read each shader's name, declared properties and blend state.
        bundles_dir = Path(bundle_path).parents[2]
        for shader_bundle in SHADER_BUNDLES:
            if (bundles_dir / shader_bundle).exists():
                self.environment.load_file(str(bundles_dir / shader_bundle))
        # Effect materials also use the client's shared FX textures (refs/fx/texture/*.ab: fire,
        # star, flow, mask...), most of which only ship in the install's StreamingAssets.
        main_file = next(iter(self.environment.assets))
        wanted = {Path(external.path).name for external in main_file.externals}
        client_data = bundles_dir.parents[1]
        for root in (client_data / 'StreamingAssets/AB/Windows/refs', bundles_dir / 'refs'):
            for dependency in sorted(root.rglob('*.ab')) if root.exists() else []:
                if wanted & set(bundle_cab_names(dependency)):
                    self.environment.load_file(str(dependency))
        self._sibling_textures = {}

    def sibling_texture(self, texture, name):
        """A texture of the same asset file by name (split `[alpha]` pages of dependency bundles)."""
        if name in self.textures:
            return self.textures[name]
        asset_file = texture.object_reader.assets_file
        if asset_file not in self._sibling_textures:
            self._sibling_textures[asset_file] = {
                obj.read().m_Name: obj.read() for obj in asset_file.objects.values() if obj.type.name == 'Texture2D'}
        return self._sibling_textures[asset_file].get(name)

    def image(self, texture):
        """Texture as straight-alpha RGBA. Split-alpha bundles ship an opaque colour page that is
        already premultiplied (black outside shapes, edges darkened in proportion to alpha) plus
        a separate `<name>[alpha]` texture — merge and unpremultiply so it matches the others."""
        image = texture.image.convert('RGBA')
        alpha_texture = self.sibling_texture(texture, f'{texture.m_Name}[alpha]')
        if alpha_texture is not None:
            alpha = alpha_texture.image.convert('L').resize(image.size, Image.LANCZOS)
            image = unpremultiply(image.convert('RGB'), alpha)
        return image

    def skeleton_parts(self):
        """[(sortingOrder, last slot of that part)] in draw order. One entry (slot None) unless the
        SkeletonRenderer has separatorSlotNames, which split the slots across SkeletonPartsRenderer
        children; spine-unity closes a part *after* its separator slot."""
        root_parts = components_of(safe_read(self.skeleton_root.m_GameObject))
        separators = []
        if 'MonoBehaviour' in root_parts:
            separators = list(root_parts['MonoBehaviour'].object_reader.read_typetree().get('separatorSlotNames') or [])
        child_orders = []
        for child in self.skeleton_root.m_Children:
            child_parts = components_of(safe_read(safe_read(child).m_GameObject))
            if 'MeshRenderer' not in child_parts or 'MonoBehaviour' not in child_parts:
                continue
            # SkeletonPartsRenderer: assigned the page material at runtime (may be unset in the prefab).
            material = material_of(child_parts)
            if material is None or is_spine_part(material):
                child_orders.append(child_parts['MeshRenderer'].m_SortingOrder)
        if separators and len(child_orders) == len(separators) + 1:
            return list(zip(sorted(child_orders), separators + [None]))
        return [(root_parts['MeshRenderer'].m_SortingOrder if 'MeshRenderer' in root_parts else 0, None)]

    def spine_name(self):
        return next(name[:-len('.skel')] for name in self.text_assets if name.startswith('dyn_illust') and name.endswith('.skel'))

    def renderers(self):
        """Yields (name, active, matrix, parts) for every MeshRenderer / SkinnedMeshRenderer under the
        skeleton GameObject; matrix is relative to it. `active` follows the whole parent chain and
        the renderer's own enabled flag. For skinned renderers parts['MeshRenderer'] is the
        SkinnedMeshRenderer and parts['skinned'] is True."""
        self.transform_matrices = {}
        found = []

        def walk(transform, path, parent_matrix, parent_active, is_root):
            game_object = safe_read(transform.m_GameObject)
            if is_root:
                matrix, name, active = IDENTITY, '', True
            else:
                matrix = matrix_multiply(parent_matrix, trs_matrix(transform.m_LocalPosition, transform.m_LocalRotation, transform.m_LocalScale))
                name = f'{path}/{game_object.m_Name}' if path else game_object.m_Name
                active = parent_active and game_object.m_IsActive
                parts = components_of(game_object)
                renderer_kind = 'MeshRenderer' if 'MeshRenderer' in parts else 'SkinnedMeshRenderer' if 'SkinnedMeshRenderer' in parts else None
                if renderer_kind:
                    renderer = parts[renderer_kind]
                    parts = {**parts, 'MeshRenderer': renderer, 'skinned': renderer_kind == 'SkinnedMeshRenderer'}
                    found.append((name, active and bool(getattr(renderer, 'm_Enabled', True)), matrix, parts))
            self.transform_matrices[transform.object_reader.path_id] = matrix
            for child in transform.m_Children:
                walk(safe_read(child), name, matrix, active, False)
        walk(self.skeleton_root, '', IDENTITY, True, True)
        # Bones of skinned meshes can sit anywhere in the hierarchy, so all matrices are known first.
        yield from found


def material_textures(material):
    textures = {}
    for key, env in material.m_SavedProperties.m_TexEnvs:
        texture = safe_read(env.m_Texture) if env.m_Texture.path_id else None
        if texture is not None:
            textures[key] = (texture, (env.m_Scale.x, env.m_Scale.y), (env.m_Offset.x, env.m_Offset.y))
    return textures


def matrix_of(bind_pose):
    return [[getattr(bind_pose, f'e{row}{column}') for column in range(4)] for row in range(4)]


def transform_point(matrix, x, y, z):
    return tuple(matrix[row][0] * x + matrix[row][1] * y + matrix[row][2] * z + matrix[row][3] for row in range(2))


def mesh_geometry(parts, bundle, matrix):
    """(world XY per vertex in skeleton units, UV per vertex, triangles). Skinned meshes are posed
    with the prefab's bone transforms (rest pose of the idle animation): world = bone x bindpose x v."""
    unit = 1 / bundle.skeleton_scale
    if parts.get('skinned'):
        renderer = parts['MeshRenderer']
        mesh = safe_read(renderer.m_Mesh) if renderer.m_Mesh.path_id else None
    else:
        mesh = safe_read(parts['MeshFilter'].m_Mesh) if 'MeshFilter' in parts and parts['MeshFilter'].m_Mesh.path_id else None
    if mesh is None:
        vertices, uvs, triangles = BUILTIN_QUAD
        return [tuple(value * unit for value in transform_point(matrix, x, y, 0)) for x, y in vertices], uvs, triangles
    handler = MeshHandler(mesh)
    handler.process()
    triangles = [triangle for submesh in handler.get_triangles() for triangle in submesh]
    uvs = [tuple(uv) for uv in handler.m_UV0 or []]
    if parts.get('skinned'):
        skin_matrices = []
        for bone_pointer, bind_pose in zip(parts['MeshRenderer'].m_Bones, mesh.m_BindPose):
            bone = safe_read(bone_pointer)
            bone_matrix = bundle.transform_matrices.get(bone.object_reader.path_id, IDENTITY) if bone else IDENTITY
            skin_matrices.append(matrix_multiply(bone_matrix, matrix_of(bind_pose)))
        weights = getattr(handler, 'm_BoneWeights', None)
        positions = []
        for index, (x, y, z) in enumerate(handler.m_Vertices):
            bone_indices = handler.m_BoneIndices[index] if handler.m_BoneIndices else (0,)
            bone_weights = weights[index] if weights else [1.0 / len(bone_indices)] * len(bone_indices)
            world_x = world_y = 0.0
            for bone_index, weight in zip(bone_indices, bone_weights):
                if weight and bone_index < len(skin_matrices):
                    point = transform_point(skin_matrices[bone_index], x, y, z)
                    world_x += weight * point[0]
                    world_y += weight * point[1]
            positions.append((world_x * unit, world_y * unit))
    else:
        positions = [tuple(value * unit for value in transform_point(matrix, x, y, z)) for x, y, z in handler.m_Vertices]
    return positions, uvs, triangles


def material_of(parts):
    return next(filter(None, (safe_read(pointer) for pointer in parts['MeshRenderer'].m_Materials)), None)


def material_numbers(material):
    floats = {key: value for key, value in material.m_SavedProperties.m_Floats}
    colours = {key: (value.r, value.g, value.b, value.a) for key, value in material.m_SavedProperties.m_Colors}
    return floats, colours


def is_spine_part(material):
    main = material_textures(material).get('_MainTex')
    return main is not None and main[0].m_Name.startswith('dyn_illust')


# Branches that only play on tap/skill, never in the idle loop the viewer shows.
NON_IDLE_BRANCHES = ('Interact Only Effects', 'Special Only Effects', 'Start Only Effects')


# Same thing as a prefab-instance name: char_1013_chen2_Special(Clone), char_2015_dusk_Interact(Clone)...
NON_IDLE_PREFAB = re.compile(r'_(Special|Interact|Start)[^/]*\(Clone\)')


def is_auto_layer(name, active, textures):
    return (active and '_MainTex' in textures and not textures['_MainTex'].startswith('dyn_illust')
            and not any(branch in name for branch in NON_IDLE_BRANCHES) and not NON_IDLE_PREFAB.search(name))


def list_layers(bundle):
    rows = []
    for name, active, matrix, parts in bundle.renderers():
        renderer = parts['MeshRenderer']
        for material in filter(None, (safe_read(pointer) for pointer in renderer.m_Materials)):
            textures = material_textures(material)
            centre = (matrix[0][3] / bundle.skeleton_scale, matrix[1][3] / bundle.skeleton_scale)
            rows.append((renderer.m_SortingOrder, name, active, centre, {key: value[0].m_Name for key, value in textures.items()}))
    print(f'skeleton parts (sortingOrder, last slot): {bundle.skeleton_parts()}')
    for order, name, active, centre, textures in sorted(rows, key=lambda row: row[0]):
        flag = '' if active else ' (inactive)'
        auto = '*' if is_auto_layer(name, active, textures) else ' '
        print(f'{auto}{order:>4}  {name}{flag}  centre=({centre[0]:.0f}, {centre[1]:.0f})  {textures}')
    print('(* = picked by --auto)')


def ramp_lut(texture_entry, bundle):
    """256-entry colour lookups from the middle row of a `_RamTex` gradient."""
    ramp = bundle.image(texture_entry[0]).convert('RGBA')
    row = ramp.height // 2
    luts = [[], [], []]
    for index in range(256):
        pixel = ramp.getpixel((min(ramp.width - 1, index * ramp.width // 256), row))
        for channel in range(3):
            luts[channel].append(pixel[channel])
    return luts


def shader_info(material):
    """(shader name, {declared property: default value}, blend) where blend is 'alpha', 'add', 'erase',
    'multiply' or 'skip' (screen-grab distortion, nothing drawable on its own)."""
    floats, _colours = material_numbers(material)
    shader = safe_read(material.m_Shader) if material.m_Shader.path_id else None
    parsed = getattr(shader, 'm_ParsedForm', None)
    if parsed is None:
        # Shader bundle unavailable: fall back to the material's own _DstBlend.
        return None, None, 'add' if floats.get('_DstBlend') == BLEND_ONE else 'alpha'
    name = parsed.m_Name
    properties = {prop.m_Name: tuple(getattr(prop, f'm_DefValue_{index}_') for index in range(4)) for prop in parsed.m_PropInfo.m_Props}
    passes = parsed.m_SubShaders[0].m_Passes
    if any(render_pass.m_Type == 2 for render_pass in passes) or 'GrabPass' in name:
        return name, properties, 'skip'
    if 'Mask/Erase' in name:
        return name, properties, 'erase'
    state = passes[-1].m_State
    blend_state = state.rtBlend[0] if hasattr(state, 'rtBlend') else state.rtBlend0

    def value(field):
        if field.name and field.name != '<noninit>':
            return floats.get(field.name, field.val)
        return field.val
    source_blend, destination_blend = value(blend_state.srcBlend), value(blend_state.destBlend)
    if destination_blend == BLEND_ONE:
        return name, properties, 'add'
    if destination_blend == BLEND_SRC_COLOR and source_blend == 0:
        return name, properties, 'multiply'
    return name, properties, 'alpha'


def apply_ramp(image, ramp_entry, material, bundle):
    """Torappu Ram shaders: one channel of the main texture (`_RamTexChannel`, default R) indexes
    the `_RamTex` gradient. Their FX textures are often opaque greyscale, where that channel is
    the shape too — then it becomes the alpha (else Exusiai NC's shards draw as solid boxes)."""
    floats, _colours = material_numbers(material)
    channel = int(floats.get('_RamTexChannel', 0))
    bands = image.split()
    source = bands[channel] if 0 <= channel < 3 else Image.merge('RGB', bands[:3]).convert('L')
    luts = ramp_lut(ramp_entry, bundle)
    alpha = bands[3]
    if alpha.getextrema()[0] >= 250:
        alpha = source
    return Image.merge('RGBA', [source.point(lut) for lut in luts] + [alpha])


def tint_factors(material, properties):
    """Colour multiplier from `_Color` / `_MainColor` / `_TintColor`, each relative to the shader's
    own default: Unity legacy-particle shaders (and Torappu's Disturb/Ram family) default to grey
    0.5 and compute 2 x colour, while e.g. Dissolve(CustomData) defaults `_MainColor` to 1.0 and
    multiplies it as is. Only properties the shader declares count — materials keep stale values
    from earlier shaders (Ch'en Holungday's clouds carry a leftover `_MainColor` of 1.0)."""
    floats, colours = material_numbers(material)
    factors = [1.0, 1.0, 1.0, 1.0]
    for key in ('_Color', '_MainColor', '_TintColor'):
        if key not in colours or (properties is not None and key not in properties):
            continue
        default = properties[key] if properties is not None else (1.0, 1.0, 1.0, 1.0)
        neutral_colour = default[0] if default[0] == default[1] == default[2] and default[0] > 0 else 1.0
        neutral_alpha = default[3] if default[3] > 0 else 1.0
        for channel in range(3):
            factors[channel] *= colours[key][channel] / neutral_colour
        factors[3] *= colours[key][3] / neutral_alpha
    if properties is not None and '_Opacity' in properties:
        factors[3] *= floats.get('_Opacity', properties['_Opacity'][0])
    return factors


def collect_layers(bundle, layer_names, auto, exclude):
    layers = []
    for name, active, matrix, parts in bundle.renderers():
        material = material_of(parts)
        if material is None or is_spine_part(material):
            continue
        textures = material_textures(material)
        texture_names = {key: value[0].m_Name for key, value in textures.items()}
        wanted = any(name == want or name.endswith('/' + want) for want in layer_names)
        if auto and is_auto_layer(name, active, texture_names):
            wanted = True
        if any(name == skip or name.endswith('/' + skip) for skip in exclude):
            wanted = False
        if not wanted or '_MainTex' not in textures:
            continue
        # World XY per vertex (z dropped: the camera looks down -Z).
        corners, uvs, triangles = mesh_geometry(parts, bundle, matrix)
        shader_name, properties, blend = shader_info(material)
        if blend == 'skip':
            continue
        if not uvs:
            if blend != 'erase':
                continue  # UV-less mesh: a vertex-colour/shader-only effect, nothing to sample
            # UV-less Mask/Erase meshes (Ch'en Holungday's torn-paper edges): the polygon is the mask.
            uvs = None
        explicit = any(name == want or name.endswith('/' + want) for want in layer_names)
        span = max(max(x for x, _ in corners) - min(x for x, _ in corners), max(y for _, y in corners) - min(y for _, y in corners))
        if not explicit and span > 4 * (SCENE_BOX[1] - SCENE_BOX[0]):
            # Screen-filling tiled planes (Ch'en Holungday `wave`, ±62000 units) are scrolling
            # shimmer in-game; frozen they're a flat sheet of colour over everything.
            print(f'  skipped (screen-filling plane): {name}')
            continue
        if (not explicit and shader_name and '/Dissolve/' in shader_name
                and bundle.image(textures['_MainTex'][0]).getchannel('A').getextrema()[0] >= 250):
            # Opaque texture whose shape only comes from a scrolling/animated dissolve mask;
            # frozen, it's just a square (Gavial Invincible's flowing-sand quads).
            print(f'  skipped (animated dissolve quad): {name}')
            continue
        if blend == 'multiply':
            print(f'  note: {name} uses a multiply shader, composited as alpha-over')
        layers.append({
            'name': name, 'order': parts['MeshRenderer'].m_SortingOrder,
            'corners': corners, 'uvs': uvs,
            'triangles': triangles, 'textures': textures, 'tint': tint_factors(material, properties),
            'shader': shader_name, 'blend': blend, 'additive': blend == 'add',
        })
    missing = [want for want in layer_names if not any(layer['name'] == want or layer['name'].endswith('/' + want) for layer in layers)]
    if missing:
        raise SystemExit(f'layers not found: {missing} (see --list)')
    return layers


def group_layers(layers, skeleton_parts):
    """Splits layers by where they draw relative to the skeleton: before part 0 -> backdrop,
    between part k-1 and k -> after part k-1's last slot, past the last part -> over everything.
    Equal sortingOrder counts as after the part (Unity breaks those ties by draw distance; the
    effects sit in front in every bundle checked) — except erase masks, which cut the scenery
    around the operator, never the operator (Ch'en Holungday's order-0 masks would behead her)."""
    groups = {}
    for layer in layers:
        if layer['blend'] == 'erase':
            position = sum(1 for order, _slot in skeleton_parts if order < layer['order'])
        else:
            position = sum(1 for order, _slot in skeleton_parts if order <= layer['order'])
        groups.setdefault(position, []).append(layer)
    return groups


def composite_layers(bundle, layers, output_path, erase_into_canvas=False):
    xs = [x for layer in layers for x, _ in layer['corners']]
    ys = [y for layer in layers for _, y in layer['corners']]
    min_x, max_x = max(min(xs), SCENE_BOX[0]), min(max(xs), SCENE_BOX[1])
    min_y, max_y = max(min(ys), SCENE_BOX[2]), min(max(ys), SCENE_BOX[3])
    width = round((max_x - min_x) * BACKDROP_PIXELS_PER_UNIT)
    height = round((max_y - min_y) * BACKDROP_PIXELS_PER_UNIT)
    # Premultiplied float canvas, so additive layers (premultiplied colour, zero alpha) and
    # alpha-over layers share one PNG that SpineViewer draws with ONE, ONE_MINUS_SRC_ALPHA.
    canvas = [Image.new('F', (width, height), 0.0) for _ in range(4)]

    def to_pixel(x, y):
        return (x - min_x) * BACKDROP_PIXELS_PER_UNIT, (max_y - y) * BACKDROP_PIXELS_PER_UNIT

    for layer in sorted(layers, key=lambda layer: layer['order']):
        corner_pixels = [to_pixel(x, y) for x, y in layer['corners']]

        def rasterize(texture_entry):
            """Texture mapped onto the mesh triangle by triangle (exact affine UV per triangle, so
            curved/skinned meshes work), transparent outside the mesh."""
            output = Image.new('RGBA', (width, height), (0, 0, 0, 0))
            if layer['uvs'] is None:
                draw = ImageDraw.Draw(output)
                for triangle in layer['triangles']:
                    draw.polygon([corner_pixels[index] for index in triangle], fill=(255, 255, 255, 255))
                return output
            texture, (scale_u, scale_v), (offset_u, offset_v) = texture_entry
            image = bundle.image(texture)
            for triangle in layer['triangles']:
                points = [corner_pixels[index] for index in triangle]
                texels = [((layer['uvs'][index][0] * scale_u + offset_u) * image.width,
                           (1 - (layer['uvs'][index][1] * scale_v + offset_v)) * image.height) for index in triangle]
                left = max(0, int(min(x for x, _ in points)) - 1)
                top = max(0, int(min(y for _, y in points)) - 1)
                right = min(width, int(max(x for x, _ in points)) + 2)
                bottom = min(height, int(max(y for _, y in points)) + 2)
                if right <= left or bottom <= top:
                    continue
                # Solve texel = A * (pixel + 0.5) + B from the three corners (pixel relative to the box).
                fit_x = solve_affine([(x - left, y - top) for x, y in points], [u for u, _ in texels])
                fit_y = solve_affine([(x - left, y - top) for x, y in points], [v for _, v in texels])
                coefficients = (fit_x[0], fit_x[1], fit_x[2] + 0.5 * (fit_x[0] + fit_x[1]),
                                fit_y[0], fit_y[1], fit_y[2] + 0.5 * (fit_y[0] + fit_y[1]))
                patch = image.transform((right - left, bottom - top), Image.AFFINE, coefficients, resample=Image.BICUBIC)
                mask = Image.new('L', patch.size, 0)
                ImageDraw.Draw(mask).polygon([(x - left, y - top) for x, y in points], fill=255)
                output.paste(patch, (left, top), mask)
            return output

        textures = layer['textures']
        main_texture = textures['_MainTex']
        red, green, blue, alpha = rasterize(main_texture).split()
        if '_RamTex' in textures:
            luts = ramp_lut(textures['_RamTex'], bundle)
            luminance = Image.merge('RGB', (red, green, blue)).convert('L')
            red, green, blue = (luminance.point(lut) for lut in luts)
        for key in MASK_TEXTURE_KEYS:
            if key in textures and textures[key][0].m_Name != main_texture[0].m_Name:
                alpha = ImageChops.multiply(alpha, rasterize(textures[key]).convert('L'))

        tint = layer['tint']
        alpha_fraction = ImageMath.lambda_eval(lambda args: args['a'] * (min(1.0, tint[3]) / 255.0), a=alpha.convert('F'))
        colours = [ImageMath.lambda_eval(lambda args, factor=tint[index]: args['c'] * factor * args['a'],
                                         c=band.convert('F'), a=alpha_fraction)
                   for index, band in enumerate((red, green, blue))]
        if layer['blend'] == 'erase' and erase_into_canvas:
            canvas = [ImageMath.lambda_eval(lambda args: args['d'] * (1 - args['a']), d=band, a=alpha_fraction) for band in canvas]
        elif layer['additive']:
            canvas[:3] = [ImageMath.lambda_eval(lambda args: args['d'] + args['s'], d=dest, s=src)
                          for dest, src in zip(canvas[:3], colours)]
        else:
            canvas[:3] = [ImageMath.lambda_eval(lambda args: args['s'] + args['d'] * (1 - args['a']), d=dest, s=src, a=alpha_fraction)
                          for dest, src in zip(canvas[:3], colours)]
            canvas[3] = ImageMath.lambda_eval(lambda args: args['a'] * 255 + args['d'] * (1 - args['a']), d=canvas[3], a=alpha_fraction)

    # Already premultiplied; convert('L') clamps to 0..255.
    Image.merge('RGBA', [band.convert('L') for band in canvas]).save(output_path, optimize=True)
    return {'x': round(min_x, 1), 'y': round(min_y, 1), 'width': round(max_x - min_x, 1), 'height': round(max_y - min_y, 1)}


# ---- extraction ----

def safe_texture_name(name):
    return name.replace('#', '_')


def extract_spine(bundle, out_dir, stem):
    spine_name = bundle.spine_name()
    skel = bundle.text_assets[f'{spine_name}.skel'].m_Script
    (out_dir / f'{stem}.skel').write_bytes(skel.encode('utf-8', 'surrogateescape') if isinstance(skel, str) else bytes(skel))
    atlas_text = bundle.text_assets[f'{spine_name}.atlas'].m_Script
    if not isinstance(atlas_text, str):
        atlas_text = bytes(atlas_text).decode('utf-8')
    lines = atlas_text.splitlines()
    page_names = [lines[index - 1].strip() for index, line in enumerate(lines) if line.startswith('size:') and index > 0]
    for page_name in page_names:
        texture = bundle.textures[page_name[:-len('.png')]]
        premultiply(bundle.image(texture)).save(out_dir / safe_texture_name(page_name), optimize=True)
        atlas_text = atlas_text.replace(page_name, safe_texture_name(page_name))
    (out_dir / f'{stem}.atlas').write_text(atlas_text.lstrip('\n'), encoding='utf-8', newline='\n')
    return page_names


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('bundle', help='bundle name without .ab, e.g. "char_1001_amiya2_sale#16"')
    parser.add_argument('--client', default=DEFAULT_CLIENT)
    parser.add_argument('--list', action='store_true', help='list renderer layers and exit')
    parser.add_argument('--out-dir', help='e.g. public/operators/amiya/l2d')
    parser.add_argument('--stem', help='output file stem, e.g. amiya-guard-myriad')
    parser.add_argument('--layers', '--backdrop', nargs='*', default=[], help='renderer names/path suffixes to composite')
    parser.add_argument('--auto', action='store_true', help='also take every active idle layer with a texture (* in --list)')
    parser.add_argument('--exclude', nargs='*', default=[], help='renderer names/path suffixes to leave out')
    parser.add_argument('--particles', action='store_true', help='export idle ParticleSystems for the browser simulator')
    args = parser.parse_args()

    bundle = DynIllustBundle(Path(args.client) / DYNCHARS_SUBDIR / f'{args.bundle}.ab')
    if args.list:
        list_layers(bundle)
        return
    if not args.out_dir or not args.stem:
        parser.error('--out-dir and --stem are required unless --list')

    out_dir = (PROJECT_ROOT / args.out_dir).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)
    for stale in [*out_dir.glob(f'{args.stem}-fg*.png'), *out_dir.glob(f'{args.stem}-bg.png'),
                  *out_dir.glob(f'{args.stem}-p*.png'), *out_dir.glob(f'{args.stem}-particles.json')]:
        stale.unlink()
    extract_spine(bundle, out_dir, args.stem)
    public_prefix = '/' + out_dir.relative_to(PROJECT_ROOT / 'public').as_posix()
    snippet = f"l2d: {{ skel: '{public_prefix}/{args.stem}.skel', atlas: '{public_prefix}/{args.stem}.atlas'"
    layers = collect_layers(bundle, args.layers, args.auto, args.exclude)
    skeleton_parts = bundle.skeleton_parts()

    # Draw items per insertion point (0 = before the skeleton, k = after part k-1), in sortingOrder:
    # ('layer', layer) or ('particles', system index). Particles follow mesh layers of equal order.
    items = {}
    for position, group in group_layers(layers, skeleton_parts).items():
        items.setdefault(position, []).extend((layer['order'], 0, 'layer', layer) for layer in group)
    if args.particles:
        document, placements = export_particles(sys.modules[__name__], bundle, out_dir, args.stem, public_prefix, args.exclude)
        for order, index, name in placements:
            position = sum(1 for part_order, _slot in skeleton_parts if part_order <= order)
            items.setdefault(position, []).append((order, 1, 'particles', index))
        if document['systems']:
            (out_dir / f'{args.stem}-particles.json').write_text(json.dumps(document, separators=(',', ':')), encoding='utf-8')
            snippet += f", particles: '{public_prefix}/{args.stem}-particles.json'"
            print(f"  {args.stem}-particles.json: {len(document['systems'])} systems, {len(document['textures'])} textures")

    overlays = []
    for position in sorted(items):
        entries = [(kind, value) for _order, _rank, kind, value in sorted(items[position], key=lambda item: (item[0], item[1]))]
        # Runs: consecutive mesh layers of the same erase-ness become one PNG (erase masks cut through
        # everything drawn before them, so they can't share one); consecutive particle systems one group.
        runs = []
        for kind, value in entries:
            key = ('erase' if kind == 'layer' and value['blend'] == 'erase' else 'layer') if kind == 'layer' else 'particles'
            if runs and runs[-1][0] == key:
                runs[-1][1].append(value)
            else:
                runs.append((key, [value]))
        if position == 0:
            # Nothing is drawn before the backdrop: bake all its mesh layers (erase masks included)
            # into one PNG; particles behind the skeleton follow it.
            mesh_layers = [value for kind, value in entries if kind == 'layer']
            particle_ids = [value for kind, value in entries if kind == 'particles']
            runs = ([('layer', mesh_layers)] if mesh_layers else []) + ([('particles', particle_ids)] if particle_ids else [])
        after_slot = skeleton_parts[position - 1][1] if position > 0 else None
        placement = (f", afterSlot: '{after_slot}'" if after_slot else '') + (', before: true' if position == 0 else '')
        image_runs = sum(1 for key, _ in runs if key != 'particles')
        image_index = 0
        for key, run in runs:
            if key == 'particles':
                overlays.append(f'{{ particles: [{", ".join(str(index) for index in run)}]{placement} }}')
                continue
            image_index += 1
            suffix = f'-{image_index}' if image_runs > 1 else ''
            file_name = f'{args.stem}-bg.png' if position == 0 else f'{args.stem}-fg{position}{suffix}.png'
            rect = composite_layers(bundle, run, out_dir / file_name, erase_into_canvas=position == 0)
            fields = f"src: '{public_prefix}/{file_name}', x: {rect['x']:g}, y: {rect['y']:g}, width: {rect['width']:g}, height: {rect['height']:g}"
            if position == 0:
                snippet += f', backdrop: {{ {fields} }}'
            else:
                overlays.append(f'{{ {fields}{placement}' + (", blend: 'erase'" if key == 'erase' else '') + ' }')
            print(f'  {file_name}{" (erase)" if key == "erase" else ""}: ' + ', '.join(layer['name'].split('fixed/')[-1] for layer in run))
    if overlays:
        snippet += ', overlays: [' + ', '.join(overlays) + ']'
    print(snippet + ' }')
    print(json.dumps({'spine': bundle.spine_name(), 'skeletonScale': bundle.skeleton_scale}))


if __name__ == '__main__':
    main()
