import type { Operator } from '../../types'

export function TalentsPanel({ operator }: { operator: Operator }) {
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
    </div>
  )
}
