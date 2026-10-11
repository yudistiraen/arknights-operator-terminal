import type { Operator } from '../../types'
import { StatBar } from '../ui/StatBar'
import { RangeGrid } from '../ui/RangeGrid'
import { PhysicalExamPanel } from './PhysicalExamPanel'

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
        <span className="font-data text-[11px] text-gc-ink tracking-[0.14em] uppercase">E{operator.elite} · LV {operator.level}</span>
        <span className="font-data text-[11px] text-gc-dim tracking-[0.14em] uppercase">Trust {operator.trust} / 200</span>
      </div>
      <div className="grid gap-3">
        <StatBar label="HP" value={operator.stats.hp} max={3000} color="bg-gc-text" delay={0.1} />
        <StatBar label="ATK" value={operator.stats.atk} max={1000} color="bg-gc-text" delay={0.2} />
        <StatBar label="DEF" value={operator.stats.def} max={800} color="bg-gc-text" delay={0.3} />
        <StatBar label="RES" value={operator.stats.res} max={30} color="bg-gc-text" delay={0.4} />
      </div>
      <div className="grid grid-cols-4 gap-px mt-5 bg-gc-line border border-gc-line">
        {secondaryStats.map(([statLabel, statValue]) => (
          <div key={statLabel} className="text-center bg-gc-base py-3">
            <div className="font-data text-[10px] text-gc-dim uppercase tracking-[0.14em] mb-1">{statLabel}</div>
            <div className="font-data text-base text-gc-ink font-medium tabular-nums">{statValue}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-gc-line">
        <div className="flex items-center justify-between mb-3">
          <span className="font-data text-[10px] text-gc-dim uppercase tracking-[0.14em]">Attack Range</span>
        </div>
        <div className="flex items-start justify-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <RangeGrid grid={operator.range.base} />
            <span className="font-data text-[10px] text-gc-dim tracking-wider">Base</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <RangeGrid grid={operator.range.e1} />
            <span className="font-data text-[10px] text-gc-dim tracking-wider">E1</span>
          </div>
          {operator.rarity >= 4 && operator.range.e2 && (
            <div className="flex flex-col items-center gap-2">
              <RangeGrid grid={operator.range.e2} />
              <span className="font-data text-[10px] text-gc-dim tracking-wider">E2</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-gc-line">
        <div className="flex items-center justify-between mb-3">
          <span className="font-data text-[10px] text-gc-dim uppercase tracking-[0.14em]">Physical Exam</span>
        </div>
        <PhysicalExamPanel operator={operator} />
      </div>
    </>
  )
}
