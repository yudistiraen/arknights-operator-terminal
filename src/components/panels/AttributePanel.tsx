import type { Operator } from '../../types'
import { StatBar } from '../ui/StatBar'
import { RangeGrid } from '../ui/RangeGrid'

export function AttributePanel({ operator }: { operator: Operator }) {
  const secondaryStats = [
    ['Block', operator.stats.block],
    ['Cost', operator.stats.cost],
    ['ASPD', operator.stats.aspd],
    ['RDP', operator.stats.rdp],
  ] as const

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-white/40 font-display">E{operator.elite} LV{operator.level}</span>
        <span className="text-xs text-white/40 font-display">Trust {operator.trust} / 200</span>
      </div>
      <div className="grid gap-3">
        <StatBar label="HP" value={operator.stats.hp} max={3000} color="bg-gradient-to-r from-[#22c55e] to-[#4ade80]" delay={0.1} />
        <StatBar label="ATK" value={operator.stats.atk} max={1000} color="bg-gradient-to-r from-[#ef4444] to-[#f87171]" delay={0.2} />
        <StatBar label="DEF" value={operator.stats.def} max={800} color="bg-gradient-to-r from-ak-accent to-ak-accent-bright" delay={0.3} />
        <StatBar label="RES" value={operator.stats.res} max={30} color="bg-gradient-to-r from-ak-infected to-[#c084fc]" delay={0.4} />
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/[0.08]">
        {secondaryStats.map(([statLabel, statValue]) => (
          <div key={statLabel} className="text-center">
            <div className="font-display text-[10px] text-white/40 uppercase tracking-wider mb-1">{statLabel}</div>
            <div className="font-display text-base text-white/80 font-bold">{statValue}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between mb-3">
          <span className="font-display text-[11px] text-white/40 uppercase tracking-wider">Attack Range</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-10">
            <RangeGrid grid={operator.range.base} />
            <RangeGrid grid={operator.range.e1} />
          </div>
          <div className="flex gap-10">
            <span className="font-display text-[10px] text-white/30 tracking-wider w-[92px] text-center">Base</span>
            <span className="font-display text-[10px] text-white/30 tracking-wider w-[112px] text-center">E1 / E2</span>
          </div>
        </div>
      </div>
    </>
  )
}
