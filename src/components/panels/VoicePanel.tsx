import type { Operator } from '../../types'

export function VoicePanel({ operator }: { operator: Operator }) {
  return (
    <div className="grid gap-3">
      {Object.entries(operator.cv).map(([language, actorName]) => (
        <div key={language} className="flex items-center justify-between bg-white/[0.06] border border-white/[0.08] p-3">
          <span className="font-display text-xs text-white/40 uppercase tracking-wider w-8">{language}</span>
          <span className="font-display text-sm text-white/85 font-semibold">{actorName}</span>
        </div>
      ))}
    </div>
  )
}
