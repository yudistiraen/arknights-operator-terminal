import Image from 'next/image'
import type { Operator } from '../../types'
import { RangeGrid } from '../ui/RangeGrid'

export function TalentsPanel({ operator }: { operator: Operator }) {
  const summons = operator.summon ? (Array.isArray(operator.summon) ? operator.summon : [operator.summon]) : []

  return (
    <div className="grid gap-3">
      {operator.talents.map((talent) => (
        <div key={talent.name} className="bg-gc-base border border-gc-line p-4">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-body text-[15px] font-semibold text-gc-ink">{talent.name}</h4>
            <span className="text-[10px] px-1.5 py-0.5 border border-gc-line-strong text-gc-text font-data tracking-[0.08em]">{talent.elite}</span>
          </div>
          <p className="font-body text-[13px] text-gc-text leading-[1.7]">{talent.desc}</p>
        </div>
      ))}

      {summons.length > 0 && (
        <>
          <div className="flex items-center gap-3 mt-2">
            <div className="h-px flex-1 bg-gc-line" />
            <span className="font-data text-[10px] text-gc-dim uppercase tracking-[0.14em]">
              {summons.length > 1 ? 'Summon Units' : 'Summon Unit'}
            </span>
            <div className="h-px flex-1 bg-gc-line" />
          </div>

          {summons.map((summon) => (
            <div key={summon.name} className="bg-gc-base border border-gc-line-strong p-4">
              <div className="flex items-center gap-3 mb-3">
                <Image src={summon.icon} alt={summon.name} width={40} height={40} className="w-10 h-10 bg-gc-base border border-gc-line object-contain p-0.5" />
                <div>
                  <h4 className="font-body text-[15px] font-semibold text-gc-ink">{summon.name}</h4>
                  <span className="text-[10px] text-gc-dim font-data">{summon.position} &middot; {summon.trait}</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-x-3 gap-y-2 mb-3 py-3 border-t border-b border-gc-line">
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
                    <div className="font-data text-[9px] text-gc-dim uppercase tracking-wider">{statLabel}</div>
                    <div className="font-data text-xs text-gc-ink font-semibold mt-0.5">{statValue}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <RangeGrid grid={summon.range} />
                  <span className="font-data text-[9px] text-gc-ghost tracking-wider">Range</span>
                </div>
                {summon.note && (
                  <p className="text-[10px] text-gc-dim leading-relaxed flex-1">{summon.note}</p>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
