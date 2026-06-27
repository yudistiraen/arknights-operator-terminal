import type { Operator } from '../../types'
import { ExamBar } from '../ui/ExamBar'

export function PhysicalExamPanel({ operator }: { operator: Operator }) {
  return (
    <div className="grid gap-2.5">
      {Object.entries(operator.physicalExam).map(([examLabel, examValue]) => (
        <ExamBar key={examLabel} label={examLabel} value={examValue} />
      ))}
    </div>
  )
}
