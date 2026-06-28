import type { Operator } from '../types'
import { Stars } from './ui/Stars'

interface OperatorHudProps {
  operator: Operator
}

export function OperatorHud({ operator }: OperatorHudProps) {
  return (
    <div className="bottom-info absolute bottom-3 left-4 md:bottom-6 md:left-8 z-30">
      <div className="flex items-end gap-1.5 md:gap-2 mb-0.5 md:mb-1">
        <span className="font-display text-4xl md:text-7xl font-bold text-white leading-none tracking-tighter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">{operator.level}</span>
        <span className="font-display text-xs md:text-base text-ak-text-muted uppercase tracking-widest mb-1 md:mb-2">LV</span>
      </div>
      <div className="flex items-center gap-2 mb-1.5 md:mb-3">
        <div className="flex items-center gap-1 md:gap-1.5 bg-ak-panel/80 backdrop-blur-sm px-1.5 md:px-2 py-0.5 md:py-1 border border-ak-border/40">
          <img src={operator.classIcon} alt={operator.class} className="w-3 h-3 md:w-4 md:h-4 object-contain" />
          <span className="font-display text-[8px] md:text-[12px] text-ak-accent-bright tracking-wider">{operator.class.toUpperCase()}</span>
        </div>
      </div>
      <h1 className="font-display text-xl md:text-4xl font-bold text-white tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] mb-0.5 md:mb-1">{operator.name}</h1>
      <div className="flex items-center gap-2 md:gap-3">
        <Stars count={operator.rarity} />
        <span className="text-[9px] md:text-[11px] text-ak-text-muted font-display tracking-wider">ID: {operator.fileNo}</span>
      </div>
    </div>
  )
}
