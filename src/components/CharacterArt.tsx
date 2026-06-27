import { forwardRef } from 'react'
import type { Operator } from '../types'

interface CharacterArtProps {
  operator: Operator
  skinSrc: string
}

export const CharacterArt = forwardRef<HTMLImageElement, CharacterArtProps>(
  function CharacterArt({ operator, skinSrc }, ref) {
    return (
      <div className="absolute inset-y-0 left-0 w-[58%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ak-bg z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ak-bg via-ak-bg/70 to-transparent z-10" />
        <div className="char-art absolute inset-0 z-0 flex items-center justify-center">
          <img ref={ref} src={skinSrc} alt={operator.name} className="max-h-[92%] max-w-[90%] w-auto h-auto object-contain drop-shadow-[0_0_40px_rgba(59,164,201,0.1)]" />
        </div>
        <div className="hud-item absolute bottom-8 right-20 z-20 flex items-center gap-3 bg-ak-panel/60 backdrop-blur-sm border border-ak-border/30 px-4 py-2.5">
          <img src={operator.factionIcon} alt={operator.faction} className="w-6 h-6 object-contain drop-shadow-[0_0_4px_rgba(212,168,67,0.4)]" />
          <div className="flex flex-col">
            <span className="font-display text-[11px] text-ak-gold-bright tracking-wider font-semibold">{operator.faction}</span>
            <span className="font-display text-[9px] text-white/35 tracking-wider">{operator.birthplace}</span>
          </div>
        </div>
      </div>
    )
  }
)
