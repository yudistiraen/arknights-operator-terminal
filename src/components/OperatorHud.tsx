import Image from 'next/image'
import type { Operator } from '../types'
import { Stars } from './ui/Stars'

interface OperatorHudProps {
  operator: Operator
}

export function OperatorHud({ operator }: OperatorHudProps) {
  return (
    <div className="bottom-info absolute bottom-3 left-4 md:bottom-6 md:left-8 z-30">
      <div className="flex items-end gap-1.5 md:gap-2 mb-0.5 md:mb-1">
        <span className="font-data text-4xl md:text-7xl font-medium text-gc-ink leading-none tracking-[-0.04em] tabular-nums drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">{operator.level}</span>
        <span className="font-data text-[10px] md:text-xs text-gc-dim uppercase tracking-[0.14em] mb-1 md:mb-2">LV</span>
      </div>
      <div className="flex items-center gap-2 mb-1.5 md:mb-3 flex-wrap">
        <div className="flex items-center gap-1 md:gap-1.5 bg-gc-invert px-1.5 md:px-2 py-0.5 md:py-1">
          <Image src={operator.classIcon} alt={operator.class} width={16} height={16} className="w-3 h-3 md:w-4 md:h-4 object-contain invert" />
          <span className="font-data text-[8px] md:text-[11px] text-gc-void tracking-[0.14em] font-medium">{operator.class.toUpperCase()}</span>
        </div>
        {operator.tags.map((tag) => (
          <span
            key={tag}
            className="font-data text-[8px] md:text-[10px] text-gc-text tracking-[0.12em] uppercase bg-gc-void/60 border border-gc-line-strong px-1.5 md:px-2 py-0.5 md:py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="font-display max-w-125 text-[20px] md:text-[30px] text-gc-ink uppercase leading-[1.05] tracking-[-0.03em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] mb-1 md:mb-2">{operator.name}</h1>
      <div className="flex items-center gap-2 md:gap-3">
        <Stars count={operator.rarity} />
        <span className="text-[9px] md:text-[11px] text-gc-dim font-data tracking-[0.14em] uppercase">ID {operator.fileNo}</span>
      </div>
    </div>
  )
}
