import { Suspense } from 'react'
import { Footer } from '../../components/Footer'
import { OperatorRouter } from '../../components/OperatorRouter'

export default function OperatorPage() {
  return (
    <div>
      <Suspense>
      <OperatorRouter />
    </Suspense>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
    
  )
}
