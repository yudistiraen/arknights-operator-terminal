import { forwardRef, useState, useEffect } from 'react'
import Image from 'next/image'
import type { Operator, SkinL2D } from '../types'
import { SpineViewer } from './SpineViewer'

interface CharacterArtProps {
  operator: Operator
  skinSrc: string
  chibiSrc: string
  l2d?: SkinL2D
  showL2D: boolean
}

export const CharacterArt = forwardRef<HTMLImageElement, CharacterArtProps>(
  function CharacterArt({ operator, skinSrc, chibiSrc, l2d, showL2D }, ref) {
    const [chibiError, setChibiError] = useState(false)
    useEffect(() => { setChibiError(false) }, [chibiSrc])

    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ak-bg z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ak-bg via-ak-bg/70 to-transparent z-10" />
        <div className="char-art absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[90%] h-[92%]">
            {/* Image stays mounted even while the L2D layer covers it (just hidden via visibility,
                not opacity — GSAP's playArtTransition animates this element's inline opacity, which
                would fight a Tailwind opacity class) — switchSkin/switchOperator in OperatorTerminal
                animate via this ref, so unmounting it while L2D is active would null the ref and
                silently break navigation while viewing L2D. */}
            <Image
              ref={ref}
              src={skinSrc}
              alt={operator.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 55vw"
              className={`object-contain drop-shadow-[0_0_40px_rgba(59,164,201,0.1)] ${l2d && showL2D ? 'invisible' : ''}`}
            />
            {l2d && showL2D && (
              <SpineViewer l2d={l2d} className="absolute inset-0 w-full h-full drop-shadow-[0_0_40px_rgba(59,164,201,0.1)]" />
            )}
          </div>
        </div>
        <div className="hud-item absolute bottom-4 right-4 md:bottom-8 md:right-20 z-20 flex flex-col items-center gap-2 md:gap-5">
          <div className="relative w-20 h-20 md:w-35 md:h-35 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-ak-panel/40 backdrop-blur-sm border border-ak-border/30 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(59,164,201,0.06)_0%,transparent_70%)]" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ak-accent/40" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ak-accent/40" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ak-accent/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ak-accent/40" />
            {chibiError ? (
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <span className="font-display text-xs text-white/20 tracking-wider">-Data Not Found-</span>
              </div>
            ) : (
              <video
                key={chibiSrc}
                src={chibiSrc}
                autoPlay
                loop
                muted
                playsInline
                onError={() => setChibiError(true)}
                className="relative z-10 w-full h-full object-cover scale-110 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] -translate-y-2 md:-translate-y-4"
              />
            )}
          </div>
          <div className="w-fit flex items-center gap-1.5 md:gap-3 bg-ak-panel/60 backdrop-blur-sm border border-ak-border/30 px-2 md:px-4 py-1.5 md:py-2.5">
            <Image src={operator.factionIcon} alt={operator.faction} width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 object-contain drop-shadow-[0_0_4px_rgba(212,168,67,0.4)]" />
            <div className="flex flex-col">
              <span className="font-display text-[8px] md:text-sm text-ak-gold-bright tracking-wider font-semibold">{operator.faction}</span>
              <span className="font-display text-[7px] md:text-xs text-white/35 tracking-wider hidden md:block">{operator.birthplace}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
