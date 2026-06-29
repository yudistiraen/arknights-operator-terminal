import { OPERATORS } from '../data/operators'

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export function findOperatorIndexBySlug(slug: string): number {
  return OPERATORS.findIndex(op => toSlug(op.name) === slug)
}
