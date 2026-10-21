// Browser re-creation of a dynamic illustration's Unity ParticleSystems, from the JSON written by
// scripts/l2d-pipeline/particles.py. It simulates the modules the L2D effects actually use (emission
// rate + bursts, shape, start values, velocity/force/gravity/clamp/noise, colour/size/rotation over
// lifetime, texture sheets) and draws billboard / stretched / mesh particles through the Spine
// batcher, so they interleave with the skeleton and the composited overlay layers. Positions are in
// skeleton units; an emitter pinned to a bone (spine-unity BoneFollower) follows it every frame.

type Curve = { m: number; s: number; n: number; a?: number[]; b?: number[] }
type Gradient = { m: number; a: number[]; b: number[]; ga?: number[][]; gb?: number[][] }

interface SystemData {
  name: string
  order: number
  /** Emitter local units -> skeleton (or bone-local) units: [a, b, c, d, e, f, tx, ty] = 2x3 linear + translation. */
  m: number[]
  duration: number
  looping: boolean
  prewarm: boolean
  speed: number
  worldSpace: boolean
  scaling: number
  delay: Curve
  max: number
  lifetime: Curve
  startSpeed: Curve
  startSize: Curve
  startSizeY?: Curve
  startColor: Gradient
  startRotation: Curve
  startRotationX?: Curve
  startRotationY?: Curve
  flipRotation: number
  gravity: Curve
  texture: number
  uvScale: number[]
  uvOffset: number[]
  tint: number[]
  blend: 'alpha' | 'add' | 'multiply'
  render: { mode: number; align: number; lengthScale: number; velocityScale: number; pivot: number[]; mesh?: number | null }
  bone?: string
  followRotation?: boolean
  emission?: { rate: Curve; bursts: { time: number; count: Curve; cycles: number; interval: number; probability: number }[] }
  shape?: {
    type: number; radius: number; thickness: number; angle: number; arc: number; length: number; donut: number
    position: number[]; rotation: number[]; scale: number[]; box: number[]
    randomDirection: number; sphericalDirection: number; randomPosition: number; points?: number[]
  }
  velocity?: { x: Curve; y: Curve; z: Curve; world: boolean; speedModifier?: Curve | null; radial?: Curve | null }
  force?: { x: Curve; y: Curve; z: Curve; world: boolean }
  clamp?: { limit: Curve; dampen: number; drag?: Curve | null }
  noise?: { strength: Curve; frequency: number; scroll: Curve; octaves: number; position?: Curve | null }
  colorOverLifetime?: Gradient
  sizeOverLifetime?: { x: Curve; y: Curve; separate: boolean }
  rotationOverLifetime?: { z: Curve; x?: Curve; y?: Curve }
  sheet?: { x: number; y: number; type: number; frame: Curve; start: Curve; cycles: number; row: number; rowMode: number; timeMode: number; fps: number }
}

export interface ParticleDocument {
  textures: string[]
  meshes: { v: number[]; uv: number[]; t: number[] }[]
  systems: SystemData[]
}

interface Particle {
  x: number; y: number; vx: number; vy: number
  age: number; life: number
  size: number; sizeY: number
  rotation: number; rotationX: number; rotationY: number
  colour: number[]
  /** Per-particle randoms for the "random between" curve modes. */
  seeds: number[]
  frameStart: number; row: number
  /** Spawned already in skeleton space (world-space simulation of a bone-pinned emitter). */
  world: boolean
}

const UNITY_GRAVITY = 9.81
const PREWARM_STEP = 1 / 30
const MAX_PREWARM = 6

function sampleArray(samples: number[], time: number) {
  const position = Math.min(1, Math.max(0, time)) * (samples.length - 1)
  const index = Math.floor(position)
  const fraction = position - index
  return index >= samples.length - 1 ? samples[samples.length - 1] : samples[index] * (1 - fraction) + samples[index + 1] * fraction
}

function evaluate(curve: Curve | undefined | null, time: number, random: number, fallback = 0) {
  if (!curve) return fallback
  switch (curve.m) {
    case 0: return curve.s
    case 1: return curve.s * sampleArray(curve.a!, time)
    case 2: {
      const low = sampleArray(curve.b!, time)
      const high = sampleArray(curve.a!, time)
      return curve.s * (low + (high - low) * random)
    }
    default: return curve.n + (curve.s - curve.n) * random
  }
}

function sampleGradient(samples: number[][], time: number) {
  const position = Math.min(1, Math.max(0, time)) * (samples.length - 1)
  const index = Math.floor(position)
  if (index >= samples.length - 1) return samples[samples.length - 1]
  const fraction = position - index
  return samples[index].map((value, channel) => value * (1 - fraction) + samples[index + 1][channel] * fraction)
}

function evaluateGradient(gradient: Gradient | undefined, time: number, random: number): number[] {
  if (!gradient) return [1, 1, 1, 1]
  switch (gradient.m) {
    case 0: return gradient.a
    case 1: return sampleGradient(gradient.ga!, time)
    case 2: return gradient.a.map((value, channel) => gradient.b[channel] + (value - gradient.b[channel]) * random)
    case 3: {
      const high = sampleGradient(gradient.ga!, time)
      const low = sampleGradient(gradient.gb!, time)
      return high.map((value, channel) => low[channel] + (value - low[channel]) * random)
    }
    default: return sampleGradient(gradient.ga!, random)
  }
}

// Smooth 2D value noise in [-1, 1].
function hash(x: number, y: number) {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
  return (value - Math.floor(value)) * 2 - 1
}

function valueNoise(x: number, y: number) {
  const x0 = Math.floor(x)
  const y0 = Math.floor(y)
  const fx = x - x0
  const fy = y - y0
  const sx = fx * fx * (3 - 2 * fx)
  const sy = fy * fy * (3 - 2 * fy)
  const top = hash(x0, y0) * (1 - sx) + hash(x0 + 1, y0) * sx
  const bottom = hash(x0, y0 + 1) * (1 - sx) + hash(x0 + 1, y0 + 1) * sx
  return top * (1 - sy) + bottom * sy
}

function randomUnitVector3(): [number, number, number] {
  const z = Math.random() * 2 - 1
  const angle = Math.random() * Math.PI * 2
  const radius = Math.sqrt(1 - z * z)
  return [radius * Math.cos(angle), radius * Math.sin(angle), z]
}

function normalize3(vector: number[]): [number, number, number] {
  const length = Math.hypot(vector[0], vector[1], vector[2]) || 1
  return [vector[0] / length, vector[1] / length, vector[2] / length]
}

/** Unity Euler rotation (Z, then X, then Y) applied to a vector. */
function rotateEuler(vector: number[], x: number, y: number, z: number): [number, number, number] {
  let [vx, vy, vz] = vector
  if (z) {
    const cos = Math.cos(z), sin = Math.sin(z)
    ;[vx, vy] = [vx * cos - vy * sin, vx * sin + vy * cos]
  }
  if (x) {
    const cos = Math.cos(x), sin = Math.sin(x)
    ;[vy, vz] = [vy * cos - vz * sin, vy * sin + vz * cos]
  }
  if (y) {
    const cos = Math.cos(y), sin = Math.sin(y)
    ;[vx, vz] = [vx * cos + vz * sin, -vx * sin + vz * cos]
  }
  return [vx, vy, vz]
}

class ParticleSystemSim {
  readonly data: SystemData
  particles: Particle[] = []
  private time = 0
  private delay: number
  private emitCarry = 0
  private previousPhase = 0
  private burstsFired = new Set<string>()
  private loop = 0
  private readonly maxLifetime: number
  /** Skeleton units per emitter unit, for sizes and world-unit quantities. */
  private readonly unitScale: number

  constructor(data: SystemData) {
    this.data = data
    this.delay = evaluate(data.delay, 0, Math.random())
    const lifetime = data.lifetime
    this.maxLifetime = lifetime.m === 3 ? Math.max(lifetime.s, lifetime.n) : lifetime.m === 0 ? lifetime.s : lifetime.s * Math.max(...(lifetime.a ?? [1]), ...(lifetime.b ?? [0]))
    const [a, b, c, d, e, f] = data.m
    this.unitScale = Math.max(Math.hypot(a, d), Math.hypot(b, e), Math.hypot(c, f)) || 100
  }

  /** Emitter units -> frame (skeleton or bone-local) units. */
  private toFrame(point: number[]) {
    const [a, b, c, d, e, f, tx, ty] = this.data.m
    return [a * point[0] + b * point[1] + c * point[2] + tx, d * point[0] + e * point[1] + f * point[2] + ty]
  }

  private toFrameVector(vector: number[]) {
    const [a, b, c, d, e, f] = this.data.m
    return [a * vector[0] + b * vector[1] + c * vector[2], d * vector[0] + e * vector[1] + f * vector[2]]
  }

  prewarm(frame: BoneFrame | null) {
    if (!this.data.looping && !this.data.prewarm) return
    const span = Math.min(MAX_PREWARM, Math.max(this.data.duration, this.maxLifetime))
    for (let elapsed = 0; elapsed < span; elapsed += PREWARM_STEP) this.update(PREWARM_STEP, frame)
  }

  update(deltaSeconds: number, frame: BoneFrame | null) {
    const data = this.data
    const dt = deltaSeconds * (data.speed || 1)
    this.time += dt
    const active = this.time - this.delay
    if (active >= 0) this.emit(active, dt, frame)
    this.step(dt)
  }

  private emit(active: number, dt: number, frame: BoneFrame | null) {
    const data = this.data
    const duration = Math.max(0.0001, data.duration)
    // Non-looping idle effects are retriggered by the illustration's animator in game; here they
    // replay once their particles have died out.
    const period = data.looping ? duration : duration + this.maxLifetime
    const loop = Math.floor(active / period)
    const phase = active - loop * period
    if (loop !== this.loop) {
      this.loop = loop
      this.burstsFired.clear()
      this.previousPhase = 0
    }
    if (phase <= duration && data.emission) {
      const rate = evaluate(data.emission.rate, phase / duration, Math.random())
      this.emitCarry += rate * dt
      const count = Math.floor(this.emitCarry)
      this.emitCarry -= count
      for (let index = 0; index < count; index++) this.spawn(phase / duration, frame)
      data.emission.bursts.forEach((burst, burstIndex) => {
        const cycles = burst.cycles > 0 ? burst.cycles : Math.ceil(duration / Math.max(burst.interval, 0.01))
        for (let cycle = 0; cycle < cycles; cycle++) {
          const time = burst.time + cycle * burst.interval
          const key = `${burstIndex}:${cycle}`
          if (time > phase) break
          if (this.burstsFired.has(key) || time < this.previousPhase - 1e-6) continue
          this.burstsFired.add(key)
          if (Math.random() > burst.probability) continue
          const count = Math.round(evaluate(burst.count, phase / duration, Math.random()))
          for (let index = 0; index < count; index++) this.spawn(phase / duration, frame)
        }
      })
    }
    this.previousPhase = phase
  }

  private shapeSample(): { position: number[]; direction: number[] } {
    const shape = this.data.shape
    if (!shape) return { position: [0, 0, 0], direction: [0, 0, 1] }
    const arc = (shape.arc || 360) * Math.PI / 180
    const radialFraction = () => {
      const inner = 1 - Math.min(1, Math.max(0, shape.thickness))
      return Math.sqrt(inner * inner + (1 - inner * inner) * Math.random())
    }
    let position: number[] = [0, 0, 0]
    let direction: number[] = [0, 0, 1]
    switch (shape.type) {
      case 0: case 1: case 2: case 3: { // sphere / hemisphere (+shells)
        const unit = randomUnitVector3()
        if (shape.type >= 2) unit[2] = Math.abs(unit[2])
        const radius = shape.radius * (shape.type === 1 || shape.type === 3 ? 1 : Math.cbrt(Math.random()))
        position = unit.map(value => value * radius)
        direction = unit
        break
      }
      case 4: case 7: case 8: case 9: { // cone base / shell / volume
        const angle = Math.random() * arc
        const fraction = shape.type === 7 || shape.type === 9 ? 1 : radialFraction()
        const radial = [Math.cos(angle) * fraction, Math.sin(angle) * fraction]
        const spread = shape.angle * Math.PI / 180
        direction = normalize3([radial[0] * Math.sin(spread), radial[1] * Math.sin(spread), Math.cos(spread)])
        position = [radial[0] * shape.radius, radial[1] * shape.radius, 0]
        if (shape.type >= 8) {
          const along = Math.random() * shape.length
          position = position.map((value, axis) => value + direction[axis] * along)
        }
        break
      }
      case 5: case 15: case 16: { // box
        position = [0, 1, 2].map(axis => (Math.random() - 0.5) * shape.scale[axis] / (shape.scale[axis] || 1))
        direction = [0, 0, 1]
        break
      }
      case 6: case 13: { // mesh emitter: a random vertex
        const points = shape.points ?? []
        if (points.length >= 3) {
          const vertex = Math.floor(Math.random() * (points.length / 3)) * 3
          position = [points[vertex], points[vertex + 1], points[vertex + 2]]
          direction = normalize3(position)
        }
        break
      }
      case 10: case 11: case 17: { // circle / circle edge / donut
        const angle = Math.random() * arc
        const fraction = shape.type === 10 ? radialFraction() : 1
        direction = [Math.cos(angle), Math.sin(angle), 0]
        position = [direction[0] * shape.radius * fraction, direction[1] * shape.radius * fraction, 0]
        break
      }
      case 12: { // single-sided edge along X
        position = [(Math.random() * 2 - 1) * shape.radius, 0, 0]
        direction = [0, 1, 0]
        break
      }
      case 18: { // rectangle
        position = [Math.random() - 0.5, Math.random() - 0.5, 0]
        direction = [0, 0, 1]
        break
      }
    }
    // Shape transform: scale, rotation (row-major 3x3), offset.
    const scaled = position.map((value, axis) => value * shape.scale[axis])
    const rotation = shape.rotation
    const rotate = (vector: number[]) => [0, 1, 2].map(row => rotation[row * 3] * vector[0] + rotation[row * 3 + 1] * vector[1] + rotation[row * 3 + 2] * vector[2])
    position = rotate(scaled).map((value, axis) => value + shape.position[axis])
    direction = rotate(direction)
    if (shape.randomDirection > 0) {
      const random = randomUnitVector3()
      direction = normalize3(direction.map((value, axis) => value + (random[axis] - value) * shape.randomDirection))
    }
    if (shape.sphericalDirection > 0) {
      const outward = normalize3(position)
      direction = normalize3(direction.map((value, axis) => value + (outward[axis] - value) * shape.sphericalDirection))
    }
    if (shape.randomPosition > 0) {
      const random = randomUnitVector3()
      position = position.map((value, axis) => value + random[axis] * shape.randomPosition * Math.random())
    }
    return { position, direction }
  }

  private spawn(emitterTime: number, frame: BoneFrame | null) {
    const data = this.data
    if (this.particles.length >= data.max) return
    const { position, direction } = this.shapeSample()
    const speed = evaluate(data.startSpeed, emitterTime, Math.random())
    let [x, y] = this.toFrame(position)
    let [vx, vy] = this.toFrameVector(direction.map(value => value * speed))
    const world = data.worldSpace && frame !== null
    if (world && frame) {
      ;[x, y] = frame.point(x, y)
      ;[vx, vy] = frame.vector(vx, vy)
    }
    const sizeRandom = Math.random()
    const size = evaluate(data.startSize, emitterTime, sizeRandom)
    const sheet = data.sheet
    const flip = Math.random() < data.flipRotation ? -1 : 1
    this.particles.push({
      x, y, vx, vy,
      age: 0,
      life: Math.max(0.01, evaluate(data.lifetime, emitterTime, Math.random())),
      size,
      sizeY: data.startSizeY ? evaluate(data.startSizeY, emitterTime, sizeRandom) : size,
      rotation: evaluate(data.startRotation, emitterTime, Math.random()) * flip,
      rotationX: evaluate(data.startRotationX, emitterTime, Math.random()),
      rotationY: evaluate(data.startRotationY, emitterTime, Math.random()),
      colour: evaluateGradient(data.startColor, emitterTime, Math.random()),
      seeds: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
      frameStart: sheet ? evaluate(sheet.start, 0, Math.random()) : 0,
      row: sheet ? (sheet.rowMode === 1 ? Math.floor(Math.random() * sheet.y) : sheet.row) : 0,
      world,
    })
  }

  private step(dt: number) {
    const data = this.data
    const alive: Particle[] = []
    const worldUnit = 100
    for (const particle of this.particles) {
      particle.age += dt
      const t = particle.age / particle.life
      if (t >= 1) continue
      const [r0, r1, r2, r3, r4] = particle.seeds
      if (data.force) {
        const force = [evaluate(data.force.x, t, r0), evaluate(data.force.y, t, r0), evaluate(data.force.z, t, r0)]
        const [fx, fy] = data.force.world ? [force[0] * worldUnit, force[1] * worldUnit] : this.toFrameVector(force)
        particle.vx += fx * dt
        particle.vy += fy * dt
      }
      const gravity = evaluate(data.gravity, t, r1)
      if (gravity) particle.vy -= UNITY_GRAVITY * gravity * worldUnit * dt
      if (data.clamp) {
        const limit = evaluate(data.clamp.limit, t, r2) * this.unitScale
        const speed = Math.hypot(particle.vx, particle.vy)
        if (speed > limit && speed > 0) {
          const target = speed - (speed - limit) * data.clamp.dampen
          particle.vx *= target / speed
          particle.vy *= target / speed
        }
        const drag = evaluate(data.clamp.drag, t, r2)
        if (drag) {
          particle.vx *= Math.max(0, 1 - drag * dt)
          particle.vy *= Math.max(0, 1 - drag * dt)
        }
      }
      let extraX = 0
      let extraY = 0
      if (data.velocity) {
        const modifier = evaluate(data.velocity.speedModifier, t, r3, 1)
        const velocity = [evaluate(data.velocity.x, t, r3), evaluate(data.velocity.y, t, r3), evaluate(data.velocity.z, t, r3)].map(value => value * modifier)
        ;[extraX, extraY] = data.velocity.world ? [velocity[0] * worldUnit, velocity[1] * worldUnit] : this.toFrameVector(velocity)
      }
      if (data.noise) {
        const strength = evaluate(data.noise.strength, t, r4) * evaluate(data.noise.position, t, r4, 1) * this.unitScale
        const frequency = data.noise.frequency / this.unitScale
        const scroll = evaluate(data.noise.scroll, t, r4) * this.time
        extraX += valueNoise(particle.x * frequency + scroll, particle.y * frequency) * strength
        extraY += valueNoise(particle.x * frequency + 31.4, particle.y * frequency + scroll) * strength
      }
      particle.x += (particle.vx + extraX) * dt
      particle.y += (particle.vy + extraY) * dt
      if (data.rotationOverLifetime) {
        particle.rotation += evaluate(data.rotationOverLifetime.z, t, r0) * dt
        if (data.rotationOverLifetime.x) particle.rotationX += evaluate(data.rotationOverLifetime.x, t, r0) * dt
        if (data.rotationOverLifetime.y) particle.rotationY += evaluate(data.rotationOverLifetime.y, t, r0) * dt
      }
      alive.push(particle)
    }
    this.particles = alive
  }

  /** Hands this system's quads/meshes to `emitMesh` as Spine batcher vertices: x, y, rgba, uv, and
   * a zero dark colour when the batcher uses two-colour tint. */
  draw(emitMesh: (vertices: number[], indices: number[]) => void, frame: BoneFrame | null, meshes: ParticleDocument['meshes'], twoColorTint: boolean) {
    const data = this.data
    const sizeScale = data.scaling === 2 ? 100 : this.unitScale
    const mesh = data.render.mode === 4 && data.render.mesh != null ? meshes[data.render.mesh] : null
    for (const particle of this.particles) {
      const t = particle.age / particle.life
      const [r0, r1] = particle.seeds
      const overLifetime = evaluateGradient(data.colorOverLifetime, t, r0)
      const red = particle.colour[0] * overLifetime[0] * data.tint[0]
      const green = particle.colour[1] * overLifetime[1] * data.tint[1]
      const blue = particle.colour[2] * overLifetime[2] * data.tint[2]
      const alpha = Math.min(1, Math.max(0, particle.colour[3] * overLifetime[3] * data.tint[3]))
      if (alpha <= 0.002) continue
      let width = particle.size * sizeScale
      let height = particle.sizeY * sizeScale
      if (data.sizeOverLifetime) {
        const sizeX = evaluate(data.sizeOverLifetime.x, t, r1, 1)
        width *= sizeX
        height *= data.sizeOverLifetime.separate ? evaluate(data.sizeOverLifetime.y, t, r1, 1) : sizeX
      }
      if (Math.abs(width) < 0.01 && Math.abs(height) < 0.01) continue

      // Texture-sheet frame -> UV rectangle (Unity v up).
      let u0 = 0, v0 = 0, uSpan = 1, vSpan = 1
      const sheet = data.sheet
      if (sheet) {
        const rows = sheet.type === 1 ? 1 : sheet.y
        const total = sheet.x * rows
        let frameIndex: number
        if (sheet.timeMode === 2) frameIndex = Math.floor(particle.age * sheet.fps)
        else {
          const cycleTime = (t * (sheet.cycles || 1)) % 1
          frameIndex = Math.floor((evaluate(sheet.frame, cycleTime, r0) + particle.frameStart) * total)
        }
        frameIndex = ((frameIndex % total) + total) % total
        const column = frameIndex % sheet.x
        const row = sheet.type === 1 ? particle.row : Math.floor(frameIndex / sheet.x)
        uSpan = 1 / sheet.x
        vSpan = 1 / sheet.y
        u0 = column * uSpan
        v0 = 1 - (row + 1) * vSpan
      }
      const toTexture = (u: number, v: number) => {
        const unityU = (u0 + u * uSpan) * data.uvScale[0] + data.uvOffset[0]
        const unityV = (v0 + v * vSpan) * data.uvScale[1] + data.uvOffset[1]
        return [unityU, 1 - unityV]
      }

      const premultiplied = [red * alpha, green * alpha, blue * alpha, alpha]
      const vertices: number[] = []
      const place = (localX: number, localY: number, u: number, v: number) => {
        let x = particle.x + localX
        let y = particle.y + localY
        if (frame && !particle.world) [x, y] = frame.point(x, y)
        const [textureU, textureV] = toTexture(u, v)
        vertices.push(x, y, premultiplied[0], premultiplied[1], premultiplied[2], premultiplied[3], textureU, textureV)
        if (twoColorTint) vertices.push(0, 0, 0, 0)
      }

      if (mesh) {
        const indices = mesh.t
        for (let index = 0; index < mesh.v.length / 3; index++) {
          const scaled = [mesh.v[index * 3] * particle.size, mesh.v[index * 3 + 1] * particle.sizeY, mesh.v[index * 3 + 2] * particle.size]
          const rotated = rotateEuler(scaled, particle.rotationX, particle.rotationY, -particle.rotation)
          const [localX, localY] = data.render.align === 2
            ? this.toFrameVector(rotated)
            : [rotated[0] * sizeScale, rotated[1] * sizeScale]
          const sizeFactor = data.sizeOverLifetime ? evaluate(data.sizeOverLifetime.x, t, r1, 1) : 1
          place(localX * sizeFactor, localY * sizeFactor, mesh.uv[index * 2], mesh.uv[index * 2 + 1])
        }
        emitMesh(vertices, indices)
        continue
      }

      let axisX: number[], axisY: number[]
      let centreOffsetX = 0, centreOffsetY = 0
      if (data.render.mode === 1) {
        // Stretched billboard: long axis along the velocity, extending back from the particle.
        const speed = Math.hypot(particle.vx, particle.vy)
        const directionX = speed > 0 ? particle.vx / speed : 1
        const directionY = speed > 0 ? particle.vy / speed : 0
        const length = width * data.render.lengthScale + speed * data.render.velocityScale
        axisX = [directionX * length, directionY * length]
        axisY = [-directionY * height, directionX * height]
        centreOffsetX = -directionX * length * 0.5
        centreOffsetY = -directionY * length * 0.5
      } else {
        // Unity's billboard rotation turns clockwise on screen.
        const angle = -particle.rotation
        const cos = Math.cos(angle), sin = Math.sin(angle)
        axisX = [cos * width, sin * width]
        axisY = [-sin * height, cos * height]
      }
      const pivotX = -data.render.pivot[0]
      const pivotY = -data.render.pivot[1]
      const corner = (cx: number, cy: number) => {
        const localU = cx - 0.5 + pivotX
        const localV = cy - 0.5 + pivotY
        place(axisX[0] * localU + axisY[0] * localV + centreOffsetX, axisX[1] * localU + axisY[1] * localV + centreOffsetY, cx, cy)
      }
      corner(0, 0)
      corner(1, 0)
      corner(1, 1)
      corner(0, 1)
      emitMesh(vertices, QUAD_INDICES)
    }
  }
}

const QUAD_INDICES = [0, 1, 2, 2, 3, 0]

/** Bone-local -> skeleton transform for an emitter pinned by a BoneFollower. */
class BoneFrame {
  constructor(private x: number, private y: number, private cos: number, private sin: number) {}
  point(x: number, y: number): [number, number] {
    return [this.x + this.cos * x - this.sin * y, this.y + this.sin * x + this.cos * y]
  }
  vector(x: number, y: number): [number, number] {
    return [this.cos * x - this.sin * y, this.sin * x + this.cos * y]
  }
}

export class ParticleField {
  private readonly systems: ParticleSystemSim[]
  private prewarmed = false

  constructor(private readonly document: ParticleDocument, private readonly textures: any[]) {
    this.systems = document.systems.map(system => new ParticleSystemSim(system))
  }

  private frameFor(system: ParticleSystemSim, skeleton: any): BoneFrame | null {
    const boneName = system.data.bone
    if (!boneName) return null
    const bone = skeleton.findBone(boneName)
    if (!bone) return null
    if (!system.data.followRotation) return new BoneFrame(bone.worldX, bone.worldY, 1, 0)
    const radians = bone.getWorldRotationX() * Math.PI / 180
    return new BoneFrame(bone.worldX, bone.worldY, Math.cos(radians), Math.sin(radians))
  }

  update(deltaSeconds: number, skeleton: any) {
    if (!this.prewarmed) {
      this.prewarmed = true
      for (const system of this.systems) system.prewarm(this.frameFor(system, skeleton))
    }
    const dt = Math.min(deltaSeconds, 0.1)
    for (const system of this.systems) system.update(dt, this.frameFor(system, skeleton))
  }

  /** Draws the given systems (indices into the document) with the scene renderer's batcher. */
  draw(renderer: any, gl: WebGLRenderingContext, systemIndices: number[], skeleton: any) {
    const batcher = renderer.batcher
    renderer.enableRenderer(batcher)
    for (const index of systemIndices) {
      const system = this.systems[index]
      if (!system || system.particles.length === 0) continue
      const texture = this.textures[system.data.texture]
      if (!texture) continue
      if (system.data.blend === 'add') batcher.setBlendMode(gl.ONE, gl.ONE)
      else batcher.setBlendMode(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      system.draw((vertices, indices) => batcher.draw(texture, vertices, indices), this.frameFor(system, skeleton), this.document.meshes, renderer.twoColorTint)
    }
  }
}
