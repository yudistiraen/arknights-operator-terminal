import type { Operator } from '../../types'

export function TraitPanel({ operator }: { operator: Operator }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <span className="font-display text-xs text-ak-accent-bright">{operator.branch} {operator.class}</span>
        <span className="text-[10px] text-white/40">&middot; {operator.position}</span>
      </div>
      <div className="bg-white/[0.06] border border-white/[0.08] p-4">
        <p className="text-sm leading-relaxed text-white/80">{operator.trait}</p>
      </div>
    </>
  )
}
