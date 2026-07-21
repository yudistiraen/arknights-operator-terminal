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

export interface OperatorSkin {
  id: string
  label: string
  src: string
  chibiSrc: string
  illustrator: string
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
