import type { Operator } from '../../types'
import { RangeGrid } from '../ui/RangeGrid'

export function TalentsPanel({ operator }: { operator: Operator }) {
  const summon = operator.summon

  return (
    <div className="grid gap-3">
      {operator.talents.map((talent) => (
        <div key={talent.name} className="bg-white/[0.06] border border-white/[0.08] p-4">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-display text-sm font-semibold text-ak-accent-bright">{talent.name}</h4>
            <span className="text-[9px] px-1.5 py-0.5 bg-white/[0.06] border border-white/[0.1] text-white/40 font-display">{talent.elite}</span>
          </div>
          <p className="text-xs text-white/45 leading-relaxed">{talent.desc}</p>
        </div>
      ))}

      {summon && (
        <>
          <div className="flex items-center gap-3 mt-2">
            <div className="h-px flex-1 bg-gradient-to-r from-ak-accent/30 to-transparent" />
            <span className="font-display text-[10px] text-ak-accent/60 uppercase tracking-[0.15em]">Summon Unit</span>
            <div className="h-px flex-1 bg-gradient-to-l from-ak-accent/30 to-transparent" />
          </div>

          <div className="bg-white/[0.04] border border-ak-accent/15 p-4">
            <div className="flex items-center gap-3 mb-3">
              <img src={summon.icon} alt={summon.name} className="w-10 h-10 rounded bg-white/[0.06] border border-white/[0.08] object-contain p-0.5" />
              <div>
                <h4 className="font-display text-sm font-semibold text-white/90">{summon.name}</h4>
                <span className="text-[10px] text-white/40 font-display">{summon.position} &middot; {summon.trait}</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-x-3 gap-y-2 mb-3 py-3 border-t border-b border-white/[0.06]">
              {([
                ['HP', summon.stats.hp],
                ['ATK', summon.stats.atk],
                ['DEF', summon.stats.def],
                ['RES', summon.stats.res],
                ['Block', summon.stats.block],
                ['Cost', summon.stats.cost],
                ['ASPD', summon.stats.aspd],
                ['RDP', summon.stats.rdp],
              ] as const).map(([statLabel, statValue]) => (
                <div key={statLabel} className="text-center">
                  <div className="font-display text-[9px] text-white/30 uppercase tracking-wider">{statLabel}</div>
                  <div className="font-display text-xs text-white/70 font-semibold mt-0.5">{statValue}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <RangeGrid grid={summon.range} />
                <span className="font-display text-[9px] text-white/25 tracking-wider">Range</span>
              </div>
              {summon.note && (
                <p className="text-[10px] text-white/35 leading-relaxed flex-1">{summon.note}</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
