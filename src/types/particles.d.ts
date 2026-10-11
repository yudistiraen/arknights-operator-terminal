// particles.js 2.0.0 ships no types and works through window globals.
declare module 'particles.js'

interface ParticlesJsInstance {
  pJS: { fn: { vendors: { destroypJS: () => void } }; canvas: { el: HTMLCanvasElement } }
}

interface Window {
  particlesJS: (tagId: string, params: Record<string, unknown>) => void
  pJSDom: ParticlesJsInstance[] | null
}
