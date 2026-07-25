import type { WalkableChibi } from './operators'

export const MAX_WALKING_CHIBIS = 5
const COOKIE_NAME = 'walking-chibi-selection'
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

export interface WalkingToggleProps {
  isSelected: boolean
  disabled: boolean
  onToggle: () => void
}

export function getChibiId(chibi: Pick<WalkableChibi, 'operatorName' | 'skinId'>): string {
  return `${chibi.operatorName}::${chibi.skinId}`
}

function getOperatorNameFromChibiId(id: string): string {
  return id.split('::')[0]
}

/** Toggles `id` into/out of the selection, keeping the "one walking slot per operator" rule:
 * picking a different skin for an operator that's already selected replaces its slot instead of
 * adding a second one, and the MAX_WALKING_CHIBIS cap only blocks genuinely new operators. */
export function applyChibiSelectionToggle(selectedIds: string[], id: string): string[] {
  if (selectedIds.includes(id)) {
    return selectedIds.filter(existingId => existingId !== id)
  }
  const operatorName = getOperatorNameFromChibiId(id)
  const withoutThisOperator = selectedIds.filter(existingId => getOperatorNameFromChibiId(existingId) !== operatorName)
  const isNewOperator = withoutThisOperator.length === selectedIds.length
  if (isNewOperator && withoutThisOperator.length >= MAX_WALKING_CHIBIS) {
    return selectedIds
  }
  return [...withoutThisOperator, id]
}

/** Keeps only the first id per operator — cookies written before the one-slot-per-operator
 * rule existed (or ones edited by hand) could have more than one skin per operator. */
function dedupeByOperator(ids: string[]): string[] {
  const seenOperators = new Set<string>()
  const deduped: string[] = []
  for (const id of ids) {
    const operatorName = getOperatorNameFromChibiId(id)
    if (seenOperators.has(operatorName)) continue
    seenOperators.add(operatorName)
    deduped.push(id)
  }
  return deduped
}

/** Returns null when the cookie has never been set (so callers can fall back to a default
 * selection), as opposed to an empty array, which means the user explicitly deselected everything. */
export function readChibiSelectionCookie(): string[] | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`))
  if (!match) return null
  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]))
    if (!Array.isArray(parsed)) return null
    return dedupeByOperator(parsed.filter(id => typeof id === 'string')).slice(0, MAX_WALKING_CHIBIS)
  } catch {
    return null
  }
}

export function writeChibiSelectionCookie(ids: string[]): void {
  if (typeof document === 'undefined') return
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(ids))}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`
}
