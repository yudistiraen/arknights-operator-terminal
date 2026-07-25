export interface GameEvent {
  id: string
  name: string
  tag: string
  banner: string
  color: [number, number, number]
  startDate: string
  endDate: string
}

export interface OperatorCV {
  JP: string
  CN: string
  EN: string
  KR: string
}

export interface OperatorStats {
  hp: number
  atk: number
  def: number
  res: number
  block: number
  cost: number
  aspd: string
  rdp: string
}

export interface AttackRange {
  base: number[][]
  e1: number[][]
  e2?: number[][]
}

export interface Talent {
  name: string
  desc: string
  elite: string
}

// Skill level label: '1'..'7' are normal skill levels, 'M1'..'M3' are Elite 2 masteries.
export type SkillLevelLabel = '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'M1' | 'M2' | 'M3'

export interface SkillLevelData {
  level: SkillLevelLabel
  desc: string
  spInit: number
  sp: number
  dur?: string
}

export interface Skill {
  name: string
  icon: string
  activation: string
  recovery: string
  desc: string
  spInit: number
  sp: number
  rank: string
  dur?: string
  range?: number[][]
  note?: string
  // Optional per-level breakdown (Level 1-7, Mastery 1-3) so the UI can preview
  // skill values at levels other than the max (which the fields above represent).
  // Operators without this field fall back to the single max-level values above.
  levels?: SkillLevelData[]
}

export interface ModuleStage {
  stage: number
  hp?: string
  atk?: string
  def?: string
  res?: string
  aspd?: string
  effect: string
}

export interface BaseModule {
  code: string
  name: string
  desc: string
}

export interface StagedModule {
  code: string
  name: string
  stages: ModuleStage[]
}

export type OperatorModule = BaseModule | StagedModule

export interface OperatorSummon {
  name: string
  icon: string
  position: string
  trait: string
  stats: OperatorStats
  range: number[][]
  note?: string
}

export interface SkinL2D {
  skel: string
  atlas: string
  /** Slot name prefix identifying the operator's own body, e.g. 'w_' or 'W_'. Scenes with
   * other characters or elaborate backdrops name every group's slots with a distinct prefix
   * ("BG_", "H_", "Y_", ...) — this narrows camera framing to just the operator herself
   * instead of zooming out to fit the whole cast. Defaults to everything but "bg_"-prefixed
   * slots when omitted. */
  characterSlotPrefix?: string
  /** Manual camera fine-tuning layered on top of the auto-computed framing, same idea as
   * {@link Operator.portraitFocus} for static art. Offsets are in skeleton world units (not
   * pixels — scale varies per asset); zoom multiplies the auto viewport, so >1 zooms out and
   * <1 zooms in. Reach for this only when the automatic bounds don't center well. */
  focus?: { offsetX?: number; offsetY?: number; zoom?: number }
}

export interface OperatorSkin {
  id: string
  label: string
  src: string
  chibiSrc: string
  /** Walk-cycle chibi render, sourced separately from `chibiSrc` (see "Sub-rencana: Multi-state
   * chibi" in context.md). Only present once a skin has been through the render pipeline —
   * absent for the vast majority of skins, which just show `chibiSrc` as a static idle loop. */
  chibiMoveSrc?: string
  /** Chibi framing calibration for the WALKING MASCOT specifically (WalkingChibi.tsx). All three
   * values (`scale`, `offsetXPercent`, `offsetYPercent`) are applied together to the shared
   * wrapper around BOTH the idle and move layers — never to either video individually — so idle
   * and move always stay sized and positioned identically no matter what this is tuned to; there
   * is no separate per-layer correction to keep in sync by hand. This only works because idle and
   * move are rendered through the same pipeline/convention (see "Rencana Pengembangan: Asset
   * Pipeline dari ArknightsResource" in context.md), so their natural framing already roughly
   * matches — this field is a shared cosmetic nudge/size on top of that, not a fix for two
   * differently-cropped sources. If idle and move ever come from genuinely different pipelines
   * again (e.g. a raw wiki.gg idle paired with a re-rendered move), a shared transform can't
   * reconcile that — idle would need to be re-rendered to match move's convention instead (see
   * Togawa Sakiko / Amiya's history in context.md for exactly that fix). Percentage-based
   * (relative to the display box, not raw px), same idea as {@link SkinL2D.focus}. Do NOT
   * repurpose this for how the chibi looks in other contexts (e.g. the operator detail HUD box)
   * — that's a different, independent concern with its own field, {@link chibiDetailFraming}. */
  chibiFraming?: { scale: number; offsetXPercent: number; offsetYPercent: number }
  /** Chibi framing for the operator detail page's HUD preview box (CharacterArt.tsx) — purely
   * cosmetic centering within that specific box, unrelated to {@link chibiFraming}'s job of
   * matching the walking mascot's idle video to its move video. Falls back to the shared generic
   * default (calibrated for the old wiki.gg-style landscape videos) if unset. */
  chibiDetailFraming?: { scale: number; offsetXPercent: number; offsetYPercent: number }
  illustrator: string
  l2d?: SkinL2D
}

export interface OperatorVariant {
  class: string
  branch: string
  position: string
  trait: string
  stats: OperatorStats
  range: AttackRange
  talents: Talent[]
  skills: Skill[]
  modules: Record<string, OperatorModule>
  classIcon: string
  branchIcon: string
  skins: OperatorSkin[]
}

export interface OperatorAlter {
  name: string
  fileNo: string
  class: string
  branch: string
  rarity: number
  level: number
  elite: number
  trust: number
  how_to_get: string[]
  position: string
  trait: string
  tags: string[]
  illustrator: string
  stats: OperatorStats
  range: AttackRange
  physicalExam: Record<string, string>
  talents: Talent[]
  skills: Skill[]
  modules: Record<string, OperatorModule>
  story?: string
  classIcon: string
  branchIcon: string
  skins: OperatorSkin[]
  portrait: string
  portraitFocus?: PortraitFocus
}

export interface OperatorRecord {
  title: string
  content: string
}

// Overrides the roster card's default half-body crop for art where the face
// sits at a non-standard position (long hair, raised weapon, tilted pose, etc).
export interface PortraitFocus {
  x?: number
  y?: number
  zoom?: number
}

export interface Operator {
  name: string
  fileNo: string
  class: string
  branch: string
  rarity: number
  level: number
  elite: number
  trust: number
  how_to_get: string[]
  faction: string
  position: string
  race: string
  gender: string
  birthplace: string
  birthday: string
  height: string
  combatExp: string
  infectionStatus: string
  illustrator: string
  cv: OperatorCV
  trait: string,
  tags: string[]
  stats: OperatorStats
  range: AttackRange
  physicalExam: Record<string, string>
  talents: Talent[]
  skills: Skill[]
  modules: Record<string, OperatorModule>
  story?: string
  profile?: string
  records?: OperatorRecord[]
  classIcon: string
  branchIcon: string
  factionIcon: string
  skins: OperatorSkin[]
  variants?: OperatorVariant[]
  alter?: OperatorAlter
  portrait?: string
  summon?: OperatorSummon
  portraitFocus?: PortraitFocus
}
