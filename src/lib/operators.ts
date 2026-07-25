import { OPERATORS } from '../data/operators'
import type { Operator, OperatorSkin } from '../types'

export interface WalkableChibi {
  operatorName: string
  skinId: string
  idleSrc: string
  moveSrc: string
  framing: NonNullable<OperatorSkin['chibiFraming']>
}

// Skins that have been through the multi-state chibi render pipeline (see "Sub-rencana:
// Multi-state chibi" in context.md) — both chibiMoveSrc and chibiFraming are required since
// a walk-cycle video without calibrated framing would mis-align against its idle loop.
//
// Class-change variants (e.g. Amiya Guard/Medic) are tagged under their base operator's name
// — not a name of their own, OperatorVariant doesn't have one — so they compete for the same
// one walking slot as the operator's primary form instead of counting as a separate operator.
// Their skin ids are namespaced with the variant's class (`guard:base`) since a variant's own
// `skins[].id` values (`base`, `skin1`, ...) reuse the same ids as the primary form's skins.
export function getWalkableChibis(): WalkableChibi[] {
  const walkable: WalkableChibi[] = []
  OPERATORS.forEach(operator => {
    operator.skins.forEach(skin => {
      if (skin.chibiMoveSrc && skin.chibiFraming) {
        walkable.push({
          operatorName: operator.name,
          skinId: skin.id,
          idleSrc: skin.chibiSrc,
          moveSrc: skin.chibiMoveSrc,
          framing: skin.chibiFraming,
        })
      }
    })
    operator.variants?.forEach(variant => {
      variant.skins.forEach(skin => {
        if (skin.chibiMoveSrc && skin.chibiFraming) {
          walkable.push({
            operatorName: operator.name,
            skinId: `${variant.class.toLowerCase()}:${skin.id}`,
            idleSrc: skin.chibiSrc,
            moveSrc: skin.chibiMoveSrc,
            framing: skin.chibiFraming,
          })
        }
      })
    })
  })
  return walkable
}

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
