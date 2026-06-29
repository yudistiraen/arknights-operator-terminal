import { notFound } from 'next/navigation'
import { OPERATORS } from '../../../data/operators'
import { findOperatorIndexBySlug } from '../../../lib/operators'
import { OperatorTerminal } from '../../../components/OperatorTerminal'

interface OperatorPageProps {
  params: Promise<{ name: string }>
  searchParams: Promise<{ alter?: string }>
}

export default async function OperatorPage({ params, searchParams }: OperatorPageProps) {
  const { name } = await params
  const { alter } = await searchParams
  const operatorIndex = findOperatorIndexBySlug(decodeURIComponent(name))

  if (operatorIndex === -1) notFound()

  return (
    <OperatorTerminal
      initialOperatorIndex={operatorIndex}
      initialAlter={alter === 'true'}
    />
  )
}

export function generateStaticParams() {
  return OPERATORS.map(op => ({
    name: op.name.toLowerCase().replace(/\s+/g, '-'),
  }))
}
