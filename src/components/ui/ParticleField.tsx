'use client'

import { useEffect, useId } from 'react'

// particles.js default demo config, with links off, slower drift and no pointer
// interaction — it's ambient atmosphere behind the Terra map, never a control.
const PARTICLE_CONFIG = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 2, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: false, mode: 'repulse' }, onclick: { enable: false, mode: 'push' }, resize: true },
  },
  retina_detect: true,
}

export function ParticleField({ className = '' }: { className?: string }) {
  const containerId = `particles-${useId().replace(/[^a-zA-Z0-9-]/g, '')}`

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let instance: ParticlesJsInstance | undefined
    let isCancelled = false

    import('particles.js').then(() => {
      if (isCancelled || !document.getElementById(containerId)) return
      // destroypJS() nulls the shared window.pJSDom, so re-seed it if a previous unmount did.
      if (!window.pJSDom) window.pJSDom = []
      window.particlesJS(containerId, PARTICLE_CONFIG)
      instance = window.pJSDom.at(-1)
    })

    return () => {
      isCancelled = true
      if (!instance) return
      const survivors = (window.pJSDom ?? []).filter(other => other !== instance)
      instance.pJS.fn.vendors.destroypJS()
      window.pJSDom = survivors
    }
  }, [containerId])

  return <div id={containerId} aria-hidden className={`pointer-events-none ${className}`} />
}
