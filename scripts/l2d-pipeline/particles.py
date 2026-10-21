"""Exports a dynamic illustration's idle Unity ParticleSystems to JSON for the browser simulator
(src/lib/l2dParticles.ts). Used by extract_l2d.py --particles.

Each system is reduced to what the simulator understands: the emitter transform (relative to the
skeleton, or to the Spine bone a BoneFollower pins it to), the enabled modules with every
MinMaxCurve / MinMaxGradient sampled at CURVE_SAMPLES points, and the material as one
premultiplied texture + tint + blend mode (read from the shader, same rules as the mesh layers).
Sub-emitters, trails, collision, lights and the shaders' custom-data effects (dissolve/UV scroll
driven per particle) are not exported.
"""

import math

from PIL import Image

CURVE_SAMPLES = 17
# A `_RamTex` at least this big is an atlas the particle samples by UV, not a colour gradient.
ATLAS_RAMP_SIZE = 512


# ---- curves ----

def hermite(key0, key1, time):
    span = key1['time'] - key0['time']
    if span <= 0:
        return key1['value']
    out_slope, in_slope = key0['outSlope'], key1['inSlope']
    if math.isinf(out_slope) or math.isinf(in_slope):
        return key0['value']  # stepped key
    s = (time - key0['time']) / span
    s2, s3 = s * s, s * s * s
    return ((2 * s3 - 3 * s2 + 1) * key0['value'] + (s3 - 2 * s2 + s) * span * out_slope
            + (-2 * s3 + 3 * s2) * key1['value'] + (s3 - s2) * span * in_slope)


def evaluate_curve(curve, time):
    keys = curve['m_Curve']
    if not keys:
        return 1.0
    if time <= keys[0]['time']:
        return keys[0]['value']
    if time >= keys[-1]['time']:
        return keys[-1]['value']
    for key0, key1 in zip(keys, keys[1:]):
        if key0['time'] <= time <= key1['time']:
            return hermite(key0, key1, time)
    return keys[-1]['value']


def sample_curve(curve):
    return [round(evaluate_curve(curve, index / (CURVE_SAMPLES - 1)), 4) for index in range(CURVE_SAMPLES)]


def min_max_curve(value):
    """{m: mode, s: scalar, n: minScalar, a: maxCurve samples, b: minCurve samples}.
    Modes: 0 constant s, 1 s*a(t), 2 s*lerp(b(t), a(t), random), 3 lerp(n, s, random)."""
    mode = value['minMaxState']
    result = {'m': mode, 's': round(value['scalar'], 5), 'n': round(value['minScalar'], 5)}
    if mode in (1, 2):
        result['a'] = sample_curve(value['maxCurve'])
    if mode == 2:
        result['b'] = sample_curve(value['minCurve'])
    return result


def is_constant(value, constant):
    return value['minMaxState'] == 0 and abs(value['scalar'] - constant) < 1e-6


def evaluate_gradient(gradient, time):
    def keys(count, prefix):
        return [(gradient[f'{prefix}{index}'] / 65535, gradient[f'key{index}']) for index in range(count)]

    def blend(entries, channel_getter):
        if not entries:
            return 1.0
        if time <= entries[0][0]:
            return channel_getter(entries[0][1])
        for (time0, key0), (time1, key1) in zip(entries, entries[1:]):
            if time0 <= time <= time1:
                if gradient['m_Mode'] == 1 or time1 == time0:  # fixed
                    return channel_getter(key1)
                fraction = (time - time0) / (time1 - time0)
                return channel_getter(key0) * (1 - fraction) + channel_getter(key1) * fraction
        return channel_getter(entries[-1][1])

    colour_keys = keys(gradient['m_NumColorKeys'], 'ctime')
    alpha_keys = keys(gradient['m_NumAlphaKeys'], 'atime')
    return [round(blend(colour_keys, lambda key, name=name: key[name]), 4) for name in ('r', 'g', 'b')] + \
        [round(blend(alpha_keys, lambda key: key['a']), 4)]


def colour(value):
    return [round(value[name], 4) for name in ('r', 'g', 'b', 'a')]


def min_max_gradient(value):
    """{m, a: max colour, b: min colour, ga/gb: gradient samples}. Modes: 0 colour a, 1 gradient
    ga(t), 2 random between colours, 3 random between gradients, 4 random point of gradient ga."""
    mode = value['minMaxState']
    result = {'m': mode, 'a': colour(value['maxColor']), 'b': colour(value['minColor'])}
    if mode in (1, 3, 4):
        result['ga'] = [evaluate_gradient(value['maxGradient'], index / (CURVE_SAMPLES - 1)) for index in range(CURVE_SAMPLES)]
    if mode == 3:
        result['gb'] = [evaluate_gradient(value['minGradient'], index / (CURVE_SAMPLES - 1)) for index in range(CURVE_SAMPLES)]
    return result


# ---- transforms ----

def invert_affine(matrix):
    """Inverse of a 4x4 affine matrix (rows 0..2 used)."""
    (a, b, c, tx), (d, e, f, ty), (g, h, i, tz) = matrix[0], matrix[1], matrix[2]
    determinant = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
    if abs(determinant) < 1e-12:
        return None
    inverse_linear = [
        [(e * i - f * h) / determinant, (c * h - b * i) / determinant, (b * f - c * e) / determinant],
        [(f * g - d * i) / determinant, (a * i - c * g) / determinant, (c * d - a * f) / determinant],
        [(d * h - e * g) / determinant, (b * g - a * h) / determinant, (a * e - b * d) / determinant],
    ]
    translation = (tx, ty, tz)
    rows = []
    for row in range(3):
        rows.append(inverse_linear[row] + [-sum(inverse_linear[row][k] * translation[k] for k in range(3))])
    return rows + [[0, 0, 0, 1]]


def euler_matrix(degrees):
    """Unity Euler (applied Z, then X, then Y) as a 3x3 matrix."""
    x, y, z = (math.radians(value) for value in degrees)
    cx, sx, cy, sy, cz, sz = math.cos(x), math.sin(x), math.cos(y), math.sin(y), math.cos(z), math.sin(z)
    rotate_x = [[1, 0, 0], [0, cx, -sx], [0, sx, cx]]
    rotate_y = [[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]
    rotate_z = [[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]]

    def multiply(left, right):
        return [[sum(left[r][k] * right[k][c] for k in range(3)) for c in range(3)] for r in range(3)]
    return multiply(rotate_y, multiply(rotate_x, rotate_z))


# ---- export ----

class ParticleExporter:
    def __init__(self, extractor_module, bundle, out_dir, stem, public_prefix):
        self.e = extractor_module
        self.bundle = bundle
        self.out_dir = out_dir
        self.stem = stem
        self.public_prefix = public_prefix
        self.textures = []
        self.texture_index = {}
        self.meshes = []
        self.mesh_index = {}

    @staticmethod
    def drawn_texture(textures):
        """The texture whose UVs the particle samples. Usually `_MainTex`; but when `_RamTex` is a
        full atlas rather than a small gradient (Exusiai NC's red shards: mesh UVs pick a sprite out
        of angel2_bg_01 while `_MainTex` is just scrolling noise), it's the ram texture."""
        ramp = textures.get('_RamTex')
        if ramp is not None and min(ramp[0].m_Width, ramp[0].m_Height) >= ATLAS_RAMP_SIZE:
            return ramp, None
        return textures['_MainTex'], ramp

    def texture(self, material, textures):
        main, ramp = self.drawn_texture(textures)
        key = (main[0].m_Name, ramp[0].m_Name if ramp else None)
        if key not in self.texture_index:
            image = self.bundle.image(main[0]).convert('RGBA')
            if ramp:
                image = self.e.apply_ramp(image, ramp, material, self.bundle)
            file_name = f'{self.stem}-p{len(self.textures)}.png'
            # Particle textures are small; cap the big ones so the JSON's textures stay light.
            if max(image.size) > 512:
                image.thumbnail((512, 512), Image.LANCZOS)
            self.e.premultiply(image).save(self.out_dir / file_name, optimize=True)
            self.texture_index[key] = len(self.textures)
            self.textures.append(f'{self.public_prefix}/{file_name}')
        return self.texture_index[key]

    def mesh(self, mesh):
        if mesh is None:
            return None
        key = mesh.object_reader.path_id
        if key not in self.mesh_index:
            handler = self.e.MeshHandler(mesh)
            handler.process()
            triangles = [index for submesh in handler.get_triangles() for triangle in submesh for index in triangle]
            uvs = [tuple(uv) for uv in handler.m_UV0 or []]
            if not uvs or not triangles:
                return None
            self.mesh_index[key] = len(self.meshes)
            self.meshes.append({
                'v': [round(value, 4) for vertex in handler.m_Vertices for value in vertex[:3]],
                'uv': [round(value, 4) for uv in uvs for value in uv[:2]],
                't': triangles,
            })
        return self.mesh_index[key]

    def system(self, asset, name, matrix, follower, order):
        tree = asset.read_typetree()
        system = asset.read()
        game_object = self.e.safe_read(system.m_GameObject)
        parts = self.e.components_of(game_object)
        renderer = parts.get('ParticleSystemRenderer')
        if renderer is None or not renderer.m_Enabled:
            return None
        material = self.e.material_of({'MeshRenderer': renderer})
        if material is None:
            return None
        textures = self.e.material_textures(material)
        if '_MainTex' not in textures:
            return None
        shader_name, properties, blend = self.e.shader_info(material)
        if blend in ('skip', 'erase'):
            return None
        initial = tree['InitialModule']
        unit = 1 / self.bundle.skeleton_scale
        main_tex = self.drawn_texture(textures)[0]

        if follower is not None:
            relative = self.e.matrix_multiply(invert_affine(follower['matrix']) or self.e.IDENTITY, matrix)
        else:
            relative = matrix
        # Emitter local units -> skeleton units (or bone-local skeleton units), z dropped.
        linear = [[relative[row][column] * unit for column in range(3)] for row in range(2)]
        translation = [relative[0][3] * unit, relative[1][3] * unit]

        result = {
            'name': name.split('fixed/')[-1][-60:],
            'order': order,
            'm': [round(value, 4) for value in linear[0] + linear[1] + translation],
            'duration': round(tree['lengthInSec'], 4),
            'looping': bool(tree['looping']),
            'prewarm': bool(tree['prewarm']),
            'speed': round(tree['simulationSpeed'], 4),
            'worldSpace': tree['moveWithTransform'] == 1,
            'scaling': tree['scalingMode'],
            'delay': min_max_curve(tree['startDelay']),
            'max': initial['maxNumParticles'],
            'lifetime': min_max_curve(initial['startLifetime']),
            'startSpeed': min_max_curve(initial['startSpeed']),
            'startSize': min_max_curve(initial['startSize']),
            'startColor': min_max_gradient(initial['startColor']),
            'startRotation': min_max_curve(initial['startRotation']),
            'flipRotation': round(initial['randomizeRotationDirection'], 3),
            'gravity': min_max_curve(initial['gravityModifier']),
            'texture': self.texture(material, textures),
            'uvScale': [round(main_tex[1][0], 4), round(main_tex[1][1], 4)],
            'uvOffset': [round(main_tex[2][0], 4), round(main_tex[2][1], 4)],
            'tint': [round(value, 4) for value in self.e.tint_factors(material, properties)],
            'blend': blend,
            'render': {
                'mode': renderer.m_RenderMode,
                'align': renderer.m_RenderAlignment,
                'lengthScale': round(renderer.m_LengthScale, 4),
                'velocityScale': round(renderer.m_VelocityScale, 4),
                'pivot': [round(renderer.m_Pivot.x, 4), round(renderer.m_Pivot.y, 4), round(renderer.m_Pivot.z, 4)],
            },
        }
        if initial.get('size3D'):
            result['startSizeY'] = min_max_curve(initial['startSizeY'])
        if initial.get('rotation3D'):
            result['startRotationX'] = min_max_curve(initial['startRotationX'])
            result['startRotationY'] = min_max_curve(initial['startRotationY'])
        if follower is not None:
            result['bone'] = follower['bone']
            result['followRotation'] = bool(follower['followRotation'])
        if renderer.m_RenderMode == 4:
            mesh_pointer = renderer.m_Mesh
            result['render']['mesh'] = self.mesh(self.e.safe_read(mesh_pointer) if mesh_pointer.path_id else None)

        emission = tree['EmissionModule']
        if emission['enabled']:
            result['emission'] = {
                'rate': min_max_curve(emission['rateOverTime']),
                'bursts': [{
                    'time': round(burst['time'], 4),
                    'count': min_max_curve(burst['countCurve']),
                    'cycles': burst['cycleCount'],
                    'interval': round(burst['repeatInterval'], 4),
                    'probability': round(burst.get('probability', 1.0), 4),
                } for burst in emission['m_Bursts'][:emission['m_BurstCount']]],
            }
        shape = tree['ShapeModule']
        if shape['enabled']:
            shape_result = {
                'type': shape['type'],
                'radius': round(shape['radius']['value'], 5),
                'thickness': round(shape['radiusThickness'], 4),
                'angle': round(shape['angle'], 4),
                'arc': round(shape['arc']['value'], 4),
                'length': round(shape['length'], 4),
                'donut': round(shape['donutRadius'], 4),
                'position': [round(shape['m_Position'][axis], 5) for axis in 'xyz'],
                'rotation': [round(value, 5) for row in euler_matrix([shape['m_Rotation'][axis] for axis in 'xyz']) for value in row],
                'scale': [round(shape['m_Scale'][axis], 5) for axis in 'xyz'],
                'box': [round(shape['boxThickness'][axis], 4) for axis in 'xyz'],
                'randomDirection': round(shape['randomDirectionAmount'], 4),
                'sphericalDirection': round(shape['sphericalDirectionAmount'], 4),
                'randomPosition': round(shape['randomPositionAmount'], 4),
            }
            if shape['type'] in (6, 13) and shape['m_Mesh']['m_PathID']:
                mesh = next((obj.read() for obj in self.bundle.environment.objects
                             if obj.path_id == shape['m_Mesh']['m_PathID'] and obj.type.name == 'Mesh'), None)
                if mesh is not None:
                    handler = self.e.MeshHandler(mesh)
                    handler.process()
                    points = handler.m_Vertices[::max(1, len(handler.m_Vertices) // 64)]
                    shape_result['points'] = [round(value, 4) for vertex in points for value in vertex[:3]]
            result['shape'] = shape_result

        def curve_triplet(module, keys):
            return {key: min_max_curve(module[key]) for key in keys}

        velocity = tree['VelocityModule']
        if velocity['enabled']:
            result['velocity'] = {**curve_triplet(velocity, ('x', 'y', 'z')), 'world': bool(velocity['inWorldSpace']),
                                  'speedModifier': min_max_curve(velocity['speedModifier']) if 'speedModifier' in velocity else None,
                                  'radial': min_max_curve(velocity['radial']) if 'radial' in velocity else None}
        force = tree['ForceModule']
        if force['enabled']:
            result['force'] = {**curve_triplet(force, ('x', 'y', 'z')), 'world': bool(force['inWorldSpace'])}
        clamp = tree['ClampVelocityModule']
        if clamp['enabled']:
            result['clamp'] = {'limit': min_max_curve(clamp['magnitude']), 'dampen': round(clamp['dampen'], 4),
                               'drag': min_max_curve(clamp['drag']) if 'drag' in clamp else None}
        noise = tree['NoiseModule']
        if noise['enabled']:
            result['noise'] = {'strength': min_max_curve(noise['strength']), 'frequency': round(noise['frequency'], 4),
                               'scroll': min_max_curve(noise['scrollSpeed']), 'octaves': noise['octaves'],
                               'position': min_max_curve(noise['positionAmount']) if 'positionAmount' in noise else None}
        colour_module = tree['ColorModule']
        if colour_module['enabled']:
            result['colorOverLifetime'] = min_max_gradient(colour_module['gradient'])
        size = tree['SizeModule']
        if size['enabled']:
            result['sizeOverLifetime'] = {'x': min_max_curve(size['curve']), 'y': min_max_curve(size['y']), 'separate': bool(size['separateAxes'])}
        rotation = tree['RotationModule']
        if rotation['enabled']:
            result['rotationOverLifetime'] = {'z': min_max_curve(rotation['curve'])}
            if rotation['separateAxes']:
                result['rotationOverLifetime']['x'] = min_max_curve(rotation['x'])
                result['rotationOverLifetime']['y'] = min_max_curve(rotation['y'])
        uv = tree['UVModule']
        if uv['enabled'] and uv['mode'] == 0 and uv['tilesX'] * uv['tilesY'] > 1:
            result['sheet'] = {'x': uv['tilesX'], 'y': uv['tilesY'], 'type': uv['animationType'],
                               'frame': min_max_curve(uv['frameOverTime']), 'start': min_max_curve(uv['startFrame']),
                               'cycles': round(uv['cycles'], 4), 'row': uv['rowIndex'], 'rowMode': uv.get('rowMode', 0),
                               'timeMode': uv.get('timeMode', 0), 'fps': round(uv.get('fps', 30.0), 3)}
        return result


def find_follower(extractor_module, bundle, transform):
    """Nearest ancestor (or self) carrying a spine-unity BoneFollower: {bone, followRotation, matrix}."""
    e = extractor_module
    current = transform
    while current is not None:
        game_object = e.safe_read(current.m_GameObject)
        parts = e.components_of(game_object)
        if 'MonoBehaviour' in parts:
            try:
                tree = parts['MonoBehaviour'].object_reader.read_typetree()
            except Exception:
                tree = {}
            if 'boneName' in tree and tree.get('boneName'):
                return {'bone': tree['boneName'], 'followRotation': tree.get('followBoneRotation', 1),
                        'matrix': bundle.transform_matrices.get(current.object_reader.path_id, e.IDENTITY)}
        if current.object_reader.path_id == bundle.skeleton_root.object_reader.path_id:
            return None
        current = e.safe_read(current.m_Father) if current.m_Father.path_id else None
    return None


def export_particles(extractor_module, bundle, out_dir, stem, public_prefix, exclude):
    """Returns (json document, [(sortingOrder, system index)]) for the idle, active systems."""
    e = extractor_module
    list(bundle.renderers())  # fills bundle.transform_matrices
    exporter = ParticleExporter(e, bundle, out_dir, stem, public_prefix)
    systems = []
    placements = []
    for asset in bundle.environment.objects:
        if asset.type.name != 'ParticleSystem':
            continue
        system = asset.read()
        game_object = e.safe_read(system.m_GameObject)
        if game_object is None:
            continue
        transform = e.components_of(game_object).get('Transform')
        if transform is None or transform.object_reader.path_id not in bundle.transform_matrices:
            continue  # not under the skeleton GameObject
        # Path + active-in-hierarchy.
        names, active, current = [], True, transform
        while current is not None and current.object_reader.path_id != bundle.skeleton_root.object_reader.path_id:
            current_object = e.safe_read(current.m_GameObject)
            names.append(current_object.m_Name)
            active = active and current_object.m_IsActive
            current = e.safe_read(current.m_Father) if current.m_Father.path_id else None
        name = '/'.join(reversed(names))
        if not active or any(branch in name for branch in e.NON_IDLE_BRANCHES) or e.NON_IDLE_PREFAB.search(name):
            continue
        if any(name == skip or name.endswith('/' + skip) for skip in exclude):
            continue
        renderer = e.components_of(game_object).get('ParticleSystemRenderer')
        order = renderer.m_SortingOrder if renderer is not None else 0
        follower = find_follower(e, bundle, transform)
        exported = exporter.system(asset, name, bundle.transform_matrices[transform.object_reader.path_id], follower, order)
        if exported is None:
            continue
        placements.append((order, len(systems), name))
        systems.append(exported)
    document = {'textures': exporter.textures, 'meshes': exporter.meshes, 'systems': systems}
    return document, placements
