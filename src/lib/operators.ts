import { OPERATORS } from '../data/operators'
import type { Operator } from '../types'

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export function findOperatorIndexBySlug(slug: string): number {
  return OPERATORS.findIndex(op => toSlug(op.name) === slug)
}

export interface RosterEntry {
  operator: Operator
  operatorIndex: number
  isAlter: boolean
}

// Canonical roster order (rarity desc, name asc, alters as separate entries) shared
// by the operator list and the detail page's next/previous navigation, so both stay in sync.
export function getRosterEntries(): RosterEntry[] {
  const entries: RosterEntry[] = []
  OPERATORS.forEach((op, operatorIndex) => {
    entries.push({ operator: op, operatorIndex, isAlter: false })
    if (op.alter) {
      entries.push({ operator: { ...op, ...op.alter } as Operator, operatorIndex, isAlter: true })
    }
  })
  entries.sort((a, b) => {
    if (b.operator.rarity !== a.operator.rarity) return b.operator.rarity - a.operator.rarity
    return a.operator.name.localeCompare(b.operator.name)
  })
  return entries
}
