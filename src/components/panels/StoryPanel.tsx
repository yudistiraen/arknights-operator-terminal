import type { Operator } from '../../types'

export function StoryPanel({ operator }: { operator: Operator }) {
  if (!operator.story) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xs text-white/30 font-display tracking-wider uppercase">Coming Soon</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-xs leading-[1.8] text-white/50 whitespace-pre-line">{operator.story}</p>
    </div>
  )
}
