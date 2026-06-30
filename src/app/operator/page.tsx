import { Suspense } from 'react'
import { OperatorRouter } from '../../components/OperatorRouter'

export default function OperatorPage() {
  return (
    <Suspense>
      <OperatorRouter />
    </Suspense>
  )
}
