import type { Operator } from '../../types'

export function VoicePanel({ operator }: { operator: Operator }) {
  return (
    <div className="grid gap-3">
      {Object.entries(operator.cv).map(([language, actorName]) => (
        <div key={language} className="flex items-center justify-between bg-gc-base border border-gc-line px-4 h-11">
          <span className="font-data text-[11px] text-gc-dim uppercase tracking-[0.14em] w-8">{language}</span>
          <span className="font-body text-sm text-gc-ink font-medium">{actorName}</span>
        </div>
      ))}
    </div>
  )
}
