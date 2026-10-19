'use client'

import { useSearchParams } from 'next/navigation'
import { findOperatorIndexBySlug } from '../lib/operators'
import { OperatorList } from './OperatorList'
import { OperatorTerminal } from './OperatorTerminal'

export function OperatorRouter() {
  const searchParams = useSearchParams()
  // `operator=` is the legacy name of the `codeName=` param; kept so old links still resolve.
  const slug = searchParams.get('codeName') ?? searchParams.get('operator')
  const alterParam = searchParams.get('alter')
  // `alter=true` is the legacy form (operators with a single alter) and means the first one;
  // `alter=<n>` (1-based) selects the nth alter for operators with more than one.
  const initialAlterIndex = alterParam === 'true' ? 0 : alterParam ? Number(alterParam) - 1 : null
  const validInitialAlterIndex = initialAlterIndex !== null && Number.isInteger(initialAlterIndex) && initialAlterIndex >= 0 ? initialAlterIndex : null

  if (slug) {
    const index = findOperatorIndexBySlug(slug)
    if (index !== -1) {
      return <OperatorTerminal initialOperatorIndex={index} initialAlterIndex={validInitialAlterIndex} />
    }
  }

  return <OperatorList />
}
