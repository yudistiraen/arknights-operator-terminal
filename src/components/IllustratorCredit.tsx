import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface IllustratorCreditProps {
  illustrator: string
  triggerKey: string
}

export function IllustratorCredit({ illustrator, triggerKey }: IllustratorCreditProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const scanRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const textElement = textRef.current
    const scanElement = scanRef.current
    if (!textElement || !scanElement) return

    const timeline = gsap.timeline()
    timeline
      .set(textElement, { clipPath: 'inset(0 100% 0 0)' })
      .set(scanElement, { opacity: 1, left: '0%' })
      .to(scanElement, { left: '100%', duration: 0.6, ease: 'power2.inOut' })
      .to(textElement, { clipPath: 'inset(0 0% 0 0)', duration: 0.6, ease: 'power2.inOut' }, '<')
      .to(scanElement, { opacity: 0, duration: 0.2 }, '-=0.1')
  }, { dependencies: [triggerKey] })

  return (
    <div className="hud-item absolute bottom-1 left-1/2 -translate-x-1/2 md:bottom-2 z-30 flex items-center gap-1.5 md:gap-2">
      <span className="font-display text-sm text-white/35 tracking-[0.15em] uppercase">Illust.</span>
      <span className="relative inline-block overflow-hidden">
        <span ref={textRef} className="font-display text-sm text-ak-accent/80 tracking-wider">
          {illustrator}
        </span>
        <span
          ref={scanRef}
          className="absolute top-0 bottom-0 w-px bg-ak-accent shadow-[0_0_6px_rgba(59,164,201,0.8),0_0_12px_rgba(59,164,201,0.4)] opacity-0"
        />
      </span>
    </div>
  )
}
