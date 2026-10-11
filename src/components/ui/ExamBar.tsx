import { PHYSICAL_EXAM_RATINGS } from '../../constants'

interface ExamBarProps {
  label: string
  value: string
  isHighest: boolean
  shouldBlink: boolean
}

const MAX_SEGMENTS = 5

export function ExamBar({ label, value, isHighest, shouldBlink }: ExamBarProps) {
  const rating = PHYSICAL_EXAM_RATINGS[value] || 3
  const blinkStyle = { animation: 'exam-blink 1.5s ease-in-out infinite' }

  return (
    <div className="flex items-center gap-2">
      <span className="font-data text-[11px] text-gc-dim tracking-[0.06em] w-28 shrink-0">{label}</span>
      <div className="flex gap-0.5 flex-1">
        {Array.from({ length: MAX_SEGMENTS }, (_, index) => (
          <div
            key={index}
            className={`h-1.5 flex-1 ${
              index < rating
                ? isHighest && index === rating - 1 && shouldBlink ? 'bg-gc-signal' : 'bg-gc-text'
                : 'bg-gc-raised'
            }`}
            style={isHighest && shouldBlink && index === rating - 1 ? blinkStyle : undefined}
          />
        ))}
      </div>
      <span className="text-[11px] text-gc-ink w-20 text-right font-data uppercase tracking-[0.08em]">{value}</span>
    </div>
  )
}
