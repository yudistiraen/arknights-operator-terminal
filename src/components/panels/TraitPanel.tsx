import type { Operator } from '../../types'

export function TraitPanel({ operator }: { operator: Operator }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <span className="font-data text-xs text-gc-ink tracking-[0.08em]">{operator.branch} {operator.class}</span>
        <span className="font-data text-[11px] text-gc-dim">&middot; {operator.position}</span>
      </div>
      <div className="bg-gc-base border border-gc-line p-4">
        <p className="font-body text-sm leading-[1.7] text-gc-ink">{operator.trait}</p>
      </div>
    </>
  )
}
