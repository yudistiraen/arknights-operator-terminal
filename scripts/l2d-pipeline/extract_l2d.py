"""Extracts a dynamic illustration ("L2D" toggle, actually Spine 3.8) from the local PC client.

For one `arts/dynchars/<bundle>.ab` it writes into --out-dir:
  <stem>.skel, <stem>.atlas            — the `dyn_illust_*` Spine data (atlas page names get `#` → `_`)
  dyn_illust_<...>.png                 — atlas page texture(s), alpha-premultiplied
  <stem>-bg.png                        — optional static backdrop (see --backdrop), alpha-premultiplied
and prints the `l2d: { ... }` object to paste into the operator's skin.

Why the post-processing:
  - Client textures are straight alpha with colour left in fully transparent pixels, while
    SpineViewer draws with premultipliedAlpha=true. Unpremultiplied pages render as white boxes
    and smeared streaks, so every page is premultiplied here.
  - Some bundles ship the alpha channel as a separate `<texture>[alpha]` texture (colour page
    fully opaque); it's merged back in, or every region renders as an opaque box. That colour
    page is already premultiplied, so it's unpremultiplied first — premultiplying it a second
    time darkens every semi-transparent edge into a thin dark outline (visible on faces).
  - The in-game background is not in the Spine data: it's MeshRenderer quads in the bundle's
    Unity prefab (alongside particle effects, which aren't reproduced). --backdrop names those
    quads; they're composited in sortingOrder into one PNG positioned in skeleton world units
    (transforms are taken relative to the skeleton GameObject, ×1/SkeletonData scale). Each
    quad's own `_DissolveTex`/`_WeightTex` (when it isn't the main texture) is multiplied into
    its alpha as a mask.

Find candidate backdrop layers with --list (renderers drawn behind the skeleton have a negative
sortingOrder; big quads named bg/BG are the usual backdrop, the rest are effects).

Requirements: Python 3.10+, `pip install UnityPy Pillow`.
Usage:
  python scripts/l2d-pipeline/extract_l2d.py char_391_rosmon_2 --list
  python scripts/l2d-pipeline/extract_l2d.py char_391_rosmon_2 \
      --out-dir public/operators/rosmontis/l2d --stem rosmontis-e2 --backdrop water/BG
"""

import argparse
import importlib.util
import json
from pathlib import Path

import UnityPy
from PIL import Image, ImageChops, ImageMath
from UnityPy.helpers.MeshHelper import MeshHandler

PROJECT_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_CLIENT = 'F:/YostarGames/Arknights_EN'
DYNCHARS_SUBDIR = 'Arknights_Data/PersistentData/Bundles/arts/dynchars'
# Builtin Unity Quad (MeshFilter points outside the bundle): ±0.5 in XY, UV 0..1.
BUILTIN_QUAD = ([(-0.5, -0.5), (0.5, -0.5), (-0.5, 0.5), (0.5, 0.5)], [(0, 0), (1, 0), (0, 1), (1, 1)])
MASK_TEXTURE_KEYS = ('_DissolveTex', '_WeightTex')
BACKDROP_PIXELS_PER_UNIT = 1.0

# Registers the LZ4AK decompressor (bundle compression flag 4) as a side effect.
_voice_spec = importlib.util.spec_from_file_location(
    'gen_title_voices', PROJECT_ROOT / 'scripts/voice-pipeline/gen_title_voices.py')
_voice_module = importlib.util.module_from_spec(_voice_spec)
_voice_spec.loader.exec_module(_voice_module)


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

    def image(self, texture):
        """Texture as straight-alpha RGBA. Split-alpha bundles ship an opaque colour page that is
        already premultiplied (black outside shapes, edges darkened in proportion to alpha) plus
        a separate `<name>[alpha]` texture — merge and unpremultiply so it matches the others."""
        image = texture.image.convert('RGBA')
        alpha_texture = self.textures.get(f'{texture.m_Name}[alpha]')
        if alpha_texture is not None:
            alpha = alpha_texture.image.convert('L').resize(image.size, Image.LANCZOS)
            image = unpremultiply(image.convert('RGB'), alpha)
        return image

    def spine_name(self):
        return next(name[:-len('.skel')] for name in self.text_assets if name.startswith('dyn_illust') and name.endswith('.skel'))

    def renderers(self):
        """Yields every MeshRenderer under the skeleton GameObject with its matrix relative to it."""
        def walk(transform, path, parent_matrix, is_root):
            game_object = safe_read(transform.m_GameObject)
            if is_root:
                matrix, name = IDENTITY, ''
            else:
                matrix = matrix_multiply(parent_matrix, trs_matrix(transform.m_LocalPosition, transform.m_LocalRotation, transform.m_LocalScale))
                name = f'{path}/{game_object.m_Name}' if path else game_object.m_Name
                parts = components_of(game_object)
                if 'MeshRenderer' in parts:
                    yield name, game_object.m_IsActive, matrix, parts
            for child in transform.m_Children:
                yield from walk(safe_read(child), name, matrix, False)
        yield from walk(self.skeleton_root, '', IDENTITY, True)


def material_textures(material):
    textures = {}
    for key, env in material.m_SavedProperties.m_TexEnvs:
        texture = safe_read(env.m_Texture) if env.m_Texture.path_id else None
        if texture is not None:
            textures[key] = (texture, (env.m_Scale.x, env.m_Scale.y), (env.m_Offset.x, env.m_Offset.y))
    return textures


def mesh_geometry(parts):
    mesh = safe_read(parts['MeshFilter'].m_Mesh) if 'MeshFilter' in parts and parts['MeshFilter'].m_Mesh.path_id else None
    if mesh is None:
        return BUILTIN_QUAD
    handler = MeshHandler(mesh)
    handler.process()
    return [(vertex[0], vertex[1]) for vertex in handler.m_Vertices], [tuple(uv) for uv in handler.m_UV0]


def list_layers(bundle):
    rows = []
    for name, active, matrix, parts in bundle.renderers():
        renderer = parts['MeshRenderer']
        for material in filter(None, (safe_read(pointer) for pointer in renderer.m_Materials)):
            textures = material_textures(material)
            centre = (matrix[0][3] / bundle.skeleton_scale, matrix[1][3] / bundle.skeleton_scale)
            rows.append((renderer.m_SortingOrder, name, active, centre, {key: value[0].m_Name for key, value in textures.items()}))
    for order, name, active, centre, textures in sorted(rows, key=lambda row: row[0]):
        flag = '' if active else ' (inactive)'
        print(f'{order:>4}  {name}{flag}  centre=({centre[0]:.0f}, {centre[1]:.0f})  {textures}')


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


def composite_backdrop(bundle, layer_names, output_path):
    layers = []
    for name, _active, matrix, parts in bundle.renderers():
        if not any(name == wanted or name.endswith('/' + wanted) for wanted in layer_names):
            continue
        material = next(filter(None, (safe_read(pointer) for pointer in parts['MeshRenderer'].m_Materials)))
        textures = material_textures(material)
        vertices, uvs = mesh_geometry(parts)
        unit = 1 / bundle.skeleton_scale
        # Local mesh XY → skeleton world XY (z dropped: the camera looks down -Z).
        world = [[matrix[row][0] * unit, matrix[row][1] * unit, matrix[row][3] * unit] for row in range(2)]
        u_fit = solve_affine(vertices, [uv[0] for uv in uvs])
        v_fit = solve_affine(vertices, [uv[1] for uv in uvs])
        corners = [(world[0][0] * x + world[0][1] * y + world[0][2], world[1][0] * x + world[1][1] * y + world[1][2]) for x, y in vertices]
        layers.append({'name': name, 'order': parts['MeshRenderer'].m_SortingOrder, 'world': world,
                       'u_fit': u_fit, 'v_fit': v_fit, 'corners': corners, 'textures': textures})
    missing = [wanted for wanted in layer_names if not any(layer['name'] == wanted or layer['name'].endswith('/' + wanted) for layer in layers)]
    if missing:
        raise SystemExit(f'backdrop layers not found: {missing} (see --list)')

    xs = [x for layer in layers for x, _ in layer['corners']]
    ys = [y for layer in layers for _, y in layer['corners']]
    min_x, max_x, min_y, max_y = min(xs), max(xs), min(ys), max(ys)
    width = round((max_x - min_x) * BACKDROP_PIXELS_PER_UNIT)
    height = round((max_y - min_y) * BACKDROP_PIXELS_PER_UNIT)
    canvas = Image.new('RGBA', (width, height), (0, 0, 0, 0))

    for layer in sorted(layers, key=lambda layer: layer['order']):
        (a, b, tx), (c, d, ty) = layer['world']
        determinant = a * d - b * c

        def output_to_uv(pixel_x, pixel_y):
            world_x = min_x + (pixel_x + 0.5) / BACKDROP_PIXELS_PER_UNIT
            world_y = max_y - (pixel_y + 0.5) / BACKDROP_PIXELS_PER_UNIT
            local_x = (d * (world_x - tx) - b * (world_y - ty)) / determinant
            local_y = (-c * (world_x - tx) + a * (world_y - ty)) / determinant
            u = layer['u_fit'][0] * local_x + layer['u_fit'][1] * local_y + layer['u_fit'][2]
            v = layer['v_fit'][0] * local_x + layer['v_fit'][1] * local_y + layer['v_fit'][2]
            return u, v

        def sample(texture_entry):
            texture, (scale_u, scale_v), (offset_u, offset_v) = texture_entry
            image = bundle.image(texture)

            def to_texture_pixel(pixel_x, pixel_y):
                u, v = output_to_uv(pixel_x, pixel_y)
                return (u * scale_u + offset_u) * image.width, (1 - (v * scale_v + offset_v)) * image.height
            origin = to_texture_pixel(0, 0)
            step_x = to_texture_pixel(1, 0)
            step_y = to_texture_pixel(0, 1)
            coefficients = (step_x[0] - origin[0], step_y[0] - origin[0], origin[0],
                            step_x[1] - origin[1], step_y[1] - origin[1], origin[1])
            return image.transform((width, height), Image.AFFINE, coefficients, resample=Image.BICUBIC)

        main_texture = layer['textures']['_MainTex']
        layer_image = sample(main_texture)
        for key in MASK_TEXTURE_KEYS:
            if key in layer['textures'] and layer['textures'][key][0].m_Name != main_texture[0].m_Name:
                mask = sample(layer['textures'][key]).convert('L')
                red, green, blue, alpha = layer_image.split()
                layer_image = Image.merge('RGBA', (red, green, blue, ImageChops.multiply(alpha, mask)))
        canvas.alpha_composite(layer_image)

    premultiply(canvas).save(output_path, optimize=True)
    return {'x': round(min_x, 1), 'y': round(min_y, 1), 'width': round(max_x - min_x, 1), 'height': round(max_y - min_y, 1)}


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('bundle', help='bundle name without .ab, e.g. "char_1001_amiya2_sale#16"')
    parser.add_argument('--client', default=DEFAULT_CLIENT)
    parser.add_argument('--list', action='store_true', help='list renderer layers (backdrop candidates) and exit')
    parser.add_argument('--out-dir', help='e.g. public/operators/amiya/l2d')
    parser.add_argument('--stem', help='output file stem, e.g. amiya-guard-myriad')
    parser.add_argument('--backdrop', nargs='*', default=[], help='renderer names/path suffixes to composite as the backdrop')
    args = parser.parse_args()

    bundle = DynIllustBundle(Path(args.client) / DYNCHARS_SUBDIR / f'{args.bundle}.ab')
    if args.list:
        list_layers(bundle)
        return
    if not args.out_dir or not args.stem:
        parser.error('--out-dir and --stem are required unless --list')

    out_dir = (PROJECT_ROOT / args.out_dir).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)
    extract_spine(bundle, out_dir, args.stem)
    public_prefix = '/' + out_dir.relative_to(PROJECT_ROOT / 'public').as_posix()
    snippet = f"l2d: {{ skel: '{public_prefix}/{args.stem}.skel', atlas: '{public_prefix}/{args.stem}.atlas'"
    if args.backdrop:
        rect = composite_backdrop(bundle, args.backdrop, out_dir / f'{args.stem}-bg.png')
        snippet += f", backdrop: {{ src: '{public_prefix}/{args.stem}-bg.png', x: {rect['x']:g}, y: {rect['y']:g}, width: {rect['width']:g}, height: {rect['height']:g} }}"
    print(snippet + ' }')
    print(json.dumps({'spine': bundle.spine_name(), 'skeletonScale': bundle.skeleton_scale}))


if __name__ == '__main__':
    main()
