import type { Operator } from '../../types'
import { PHYSICAL_EXAM_RATINGS } from '../../constants'
import { ExamBar } from '../ui/ExamBar'

export function PhysicalExamPanel({ operator }: { operator: Operator }) {
  const entries = Object.entries(operator.physicalExam)
  const maxRating = Math.max(...entries.map(([, v]) => PHYSICAL_EXAM_RATINGS[v] || 3))

  return (
    <div className="grid gap-2.5">
      {entries.map(([examLabel, examValue]) => {
        const rating = PHYSICAL_EXAM_RATINGS[examValue] || 3
        return (
          <ExamBar
            key={examLabel}
            label={examLabel}
            value={examValue}
            isHighest={rating === maxRating}
            shouldBlink={maxRating > 4}
          />
        )
      })}
    </div>
  )
}
