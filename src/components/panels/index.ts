import type { Operator } from '../../types'
import { AttributePanel } from './AttributePanel'
import { SkillsPanel } from './SkillsPanel'
import { TalentsPanel } from './TalentsPanel'
import { ProfilePanel } from './ProfilePanel'
import { PhysicalExamPanel } from './PhysicalExamPanel'
import { VoicePanel } from './VoicePanel'
import { TraitPanel } from './TraitPanel'
import { ModulesPanel } from './ModulesPanel'
import { StoryPanel } from './StoryPanel'

export interface PanelConfig {
  title: string
  accent: string
  Component: React.ComponentType<{ operator: Operator }>
}

export const PANEL_CONFIGS: Record<string, PanelConfig> = {
  attribute: { title: 'Attribute', accent: 'bg-ak-accent', Component: AttributePanel },
  skills: { title: 'Skills', accent: 'bg-ak-accent', Component: SkillsPanel },
  talents: { title: 'Talents', accent: 'bg-ak-infected', Component: TalentsPanel },
  profile: { title: 'Profile', accent: 'bg-white/60', Component: ProfilePanel },
  physexam: { title: 'Physical Exam', accent: 'bg-[#22c55e]', Component: PhysicalExamPanel },
  voice: { title: 'Voice Actors', accent: 'bg-ak-accent', Component: VoicePanel },
  trait: { title: 'Trait', accent: 'bg-ak-gold', Component: TraitPanel },
  modules: { title: 'Modules', accent: 'bg-ak-gold', Component: ModulesPanel },
  story: { title: 'Story', accent: 'bg-ak-infected', Component: StoryPanel },
}
