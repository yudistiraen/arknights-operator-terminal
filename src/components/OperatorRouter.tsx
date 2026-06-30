'use client'

import { useSearchParams } from 'next/navigation'
import { findOperatorIndexBySlug } from '../lib/operators'
import { OperatorList } from './OperatorList'
import { OperatorTerminal } from './OperatorTerminal'

export function OperatorRouter() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('operator')
  const isAlter = searchParams.get('alter') === 'true'

  if (slug) {
    const index = findOperatorIndexBySlug(slug)
    if (index !== -1) {
      return <OperatorTerminal initialOperatorIndex={index} initialAlter={isAlter} />
    }
  }

  return <OperatorList />
}
