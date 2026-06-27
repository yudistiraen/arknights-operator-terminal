import type { Operator } from '../../types'

export function LorePanel({ operator }: { operator: Operator }) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.06] p-5">
      <p className="text-xs leading-[1.8] text-white/50 whitespace-pre-line italic">{operator.lore}</p>
    </div>
  )
}
