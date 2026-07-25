import { getRosterEntries, type RosterEntry } from './operators'

export type RecruitCategory = 'class' | 'position' | 'affix' | 'qualification'

export interface RecruitTag {
  label: string
  norm: string
  category: RecruitCategory
}

// Canonical Arknights class order, not alphabetical — mirrors the in-game
// class tag ordering so the grid reads the way a returning player expects.
const CLASS_ORDER = ['Vanguard', 'Guard', 'Defender', 'Sniper', 'Caster', 'Medic', 'Supporter', 'Specialist']

const POSITION_ORDER = ['Melee', 'Ranged']

// Qualification tags. 'Robot' and 'Starter' come straight from an operator's
// own `tags[]` (1★ robots and the five 2★ starters carry them already).
// 'Senior Operator' and 'Top Operator' aren't stored per-operator — they're
// derived in getRecruitableEntries() from rarity (5★ / 6★) since that's all
// the in-game tag actually means.
const QUALIFICATION_ORDER = ['Robot', 'Senior Operator', 'Starter', 'Top Operator']

// Fixed Specialization vocabulary, matching the tag names and ordering used
// on https://arknights.wiki.gg/wiki/Recruitment. Kept as a closed list
// (rather than derived from data) so the picker stays stable even if an
// operator's free-form `tags[]` entries are renamed or a new one-off tag is
// added later. 'Robot' is intentionally excluded — the wiki lists it under
// the separate "Qualification" tag category, not Specialization.
const AFFIX_ORDER = [
  'Crowd-Control', 'Nuker', 'Healing', 'Support', 'DP-Recovery', 'DPS',
  'Survival', 'AoE', 'Defense', 'Slow', 'Debuff', 'Fast-Redeploy',
  'Shift', 'Summon', 'Elemental',
]

export function normalizeTag(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function buildCatalog(order: string[], category: RecruitCategory): RecruitTag[] {
  return order.map(label => ({ label, norm: normalizeTag(label), category }))
}

export const CLASS_TAGS: RecruitTag[] = buildCatalog(CLASS_ORDER, 'class')
export const POSITION_TAGS: RecruitTag[] = buildCatalog(POSITION_ORDER, 'position')
export const AFFIX_TAGS: RecruitTag[] = buildCatalog(AFFIX_ORDER, 'affix')
export const QUALIFICATION_TAGS: RecruitTag[] = buildCatalog(QUALIFICATION_ORDER, 'qualification')

export interface RecruitableEntry {
  entry: RosterEntry
  tagSet: Set<string>
}

// Combined, normalized tag pool per operator: class + position + free-form
// affix tags. This is what a selected filter chip is matched against —
// same "must appear somewhere in the pool" rule the in-game recruitment
// tag matching uses.
//
// Only operators actually pulled from the Recruitment tag system belong here —
// event/voucher/store/story-exclusive operators (`how_to_get` without
// 'Recruitment') never show up in a real recruitment slip, so they're
// filtered out before matching rather than just hidden in the UI.
export function getRecruitableEntries(): RecruitableEntry[] {
  return getRosterEntries()
    .filter(entry => entry.operator.how_to_get.includes('Recruitment'))
    .map(entry => {
      const raw = [entry.operator.class, entry.operator.position, ...(entry.operator.tags ?? [])]
      if (entry.operator.rarity === 5) raw.push('Senior Operator')
      if (entry.operator.rarity === 6) raw.push('Top Operator')
      return { entry, tagSet: new Set(raw.map(normalizeTag)) }
    })
}

export function matchesAllTags(tagSet: Set<string>, selected: RecruitTag[]): boolean {
  return selected.every(tag => tagSet.has(tag.norm))
}
