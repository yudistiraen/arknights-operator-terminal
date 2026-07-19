'use client'

import { forwardRef, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

interface SplashScreenProps {
  onEnter: () => void
}

const BOOT_LINES = [
  'PRTS TERMINAL v3.7.2',
  'ESTABLISHING UPLINK .......... OK',
  'LOADING OPERATOR DATABASE .... 100%',
  'AUTH: DOCTOR // ACCESS GRANTED',
]

export const SplashScreen = forwardRef<HTMLDivElement, SplashScreenProps>(
  function SplashScreen({ onEnter }, ref) {
    const contentRef = useRef<HTMLDivElement>(null)
    const glowRef = useRef<HTMLDivElement>(null)
    const moveFns = useRef<{
      contentX: (value: number) => void
      contentY: (value: number) => void
      glowX: (value: number) => void
      glowY: (value: number) => void
    } | null>(null)

    const [lineCount, setLineCount] = useState(0)
    const bootDone = lineCount >= BOOT_LINES.length

    useEffect(() => {
      if (lineCount >= BOOT_LINES.length) return
      const timer = setTimeout(() => setLineCount(count => count + 1), lineCount === 0 ? 400 : 260)
      return () => clearTimeout(timer)
    }, [lineCount])

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onEnter()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onEnter])

    useGSAP(() => {
      if (!contentRef.current || !glowRef.current) return
      moveFns.current = {
        contentX: gsap.quickTo(contentRef.current, 'x', { duration: 0.8, ease: 'power3.out' }),
        contentY: gsap.quickTo(contentRef.current, 'y', { duration: 0.8, ease: 'power3.out' }),
        glowX: gsap.quickTo(glowRef.current, 'x', { duration: 1.2, ease: 'power3.out' }),
        glowY: gsap.quickTo(glowRef.current, 'y', { duration: 1.2, ease: 'power3.out' }),
      }
    })

    const handleMouseMove = (event: React.MouseEvent) => {
      const fns = moveFns.current
      if (!fns) return
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1
      fns.contentX(normalizedX * -7)
      fns.contentY(normalizedY * -5)
      fns.glowX(normalizedX * 150)
      fns.glowY(normalizedY * 110)
    }

    return (
      <div
        ref={ref}
        className="group fixed inset-0 z-100 bg-ak-bg flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        onClick={onEnter}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,164,201,0.04)_0%,transparent_70%)]" />
        <div
          ref={glowRef}
          className="absolute w-135 h-135 rounded-full pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-270px',
            marginTop: '-270px',
            background: 'radial-gradient(circle, rgba(59,164,201,0.10) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

        <div ref={contentRef} className="relative flex flex-col items-center gap-6">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-ak-accent/40 to-transparent" />
          <Image src="/Arknights_logo.webp" alt="Arknights" width={415} height={116} priority className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-ak-accent/30" />
            <span className="font-display text-[11px] text-ak-accent-bright/60 tracking-[0.3em] uppercase">Operator Terminal</span>
            <div className="w-8 h-px bg-ak-accent/30" />
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-ak-accent/40 to-transparent" />
          <span
            className={`flex items-center gap-2.5 font-display text-[10px] text-white/25 tracking-[0.2em] uppercase ${bootDone ? 'opacity-100 animate-[pulse-glow_2s_ease-in-out_infinite]' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.6s' }}
          >
            <span
              className="text-ak-accent-bright/50 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
              style={{ transition: 'opacity 0.25s, transform 0.25s' }}
              aria-hidden
            >
              [
            </span>
            Click or Press Enter
            <span
              className="text-ak-accent-bright/50 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
              style={{ transition: 'opacity 0.25s, transform 0.25s' }}
              aria-hidden
            >
              ]
            </span>
          </span>
        </div>

        {/* Boot log readout */}
        <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 pointer-events-none select-none">
          {BOOT_LINES.slice(0, lineCount).map((line, index) => {
            const isLastVisible = index === lineCount - 1
            return (
              <p key={line} className="font-display text-[9px] md:text-[10px] tracking-[0.15em] text-ak-accent/45 leading-relaxed">
                <span className="text-ak-accent/25">&gt; </span>
                {line}
                {isLastVisible && !bootDone && (
                  <span className="inline-block w-1.5 h-2.5 ml-1 bg-ak-accent/60 align-middle animate-[exam-blink_0.8s_step-end_infinite]" />
                )}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
)
