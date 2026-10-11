import type { Operator } from '../../types'

export function StoryPanel({ operator }: { operator: Operator }) {
  if (!operator.story) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-[11px] text-gc-dim font-data tracking-[0.14em] uppercase">No story on file yet</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="font-body text-[13px] leading-[1.7] text-gc-text whitespace-pre-line">{operator.story}</p>
    </div>
  )
}
