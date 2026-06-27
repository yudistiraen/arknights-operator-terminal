import { PHYSICAL_EXAM_RATINGS } from '../../constants'

interface ExamBarProps {
  label: string
  value: string
}

const MAX_SEGMENTS = 5

export function ExamBar({ label, value }: ExamBarProps) {
  const rating = PHYSICAL_EXAM_RATINGS[value] || 3

  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] text-white/40 w-28 shrink-0">{label}</span>
      <div className="flex gap-0.5 flex-1">
        {Array.from({ length: MAX_SEGMENTS }, (_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-sm ${
              index < rating
                ? 'bg-ak-accent/80 shadow-[0_0_4px_rgba(59,164,201,0.3)]'
                : 'bg-white/[0.06]'
            }`}
          />
        ))}
      </div>
      <span className="text-[11px] text-ak-accent-bright w-20 text-right font-display">{value}</span>
    </div>
  )
}
