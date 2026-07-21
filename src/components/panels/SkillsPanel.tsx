import { useState } from 'react'
import Image from 'next/image'
import type { Operator, SkillLevelLabel } from '../../types'
import { RangeGrid } from '../ui/RangeGrid'

const RECOVERY_TAG_STYLES: Record<string, string> = {
  Auto: 'bg-ak-non-infected/20 text-ak-non-infected border-ak-non-infected/30',
  Offensive: 'bg-ak-orange/20 text-ak-orange-bright border-ak-orange/30',
  Defensive: 'bg-ak-gold/20 text-ak-gold-bright border-ak-gold/30',
}

const NORMAL_SKILL_LEVELS: SkillLevelLabel[] = ['1', '2', '3', '4', '5', '6', '7']
const MASTERY_SKILL_LEVELS: SkillLevelLabel[] = ['M1', 'M2', 'M3']

function getRecoveryType(recovery: string) {
  return recovery.replace(/\s*Recovery$/i, '')
}

function formatLevelLabel(level: SkillLevelLabel) {
  return level.startsWith('M') ? level : `Lv.${level}`
}

interface LevelSelectorProps {
  availableLevels: Set<SkillLevelLabel>
  previewLevel: SkillLevelLabel
  onSelectLevel: (level: SkillLevelLabel) => void
}

function LevelButton({ level, isActive, isMastery, onSelectLevel }: { level: SkillLevelLabel, isActive: boolean, isMastery: boolean, onSelectLevel: (level: SkillLevelLabel) => void }) {
  const activeClass = isMastery
    ? 'bg-ak-gold/25 border-ak-gold/60 text-ak-gold-bright shadow-[0_0_10px_rgba(212,168,67,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]'
    : 'bg-ak-accent/20 border-ak-accent/50 text-ak-accent-bright shadow-[0_0_10px_rgba(59,164,201,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]'
  const idleClass = isMastery
    ? 'bg-ak-gold/[0.06] border-ak-gold/20 text-ak-gold/50 hover:bg-ak-gold/15 hover:border-ak-gold/40 hover:text-ak-gold-bright'
    : 'bg-white/[0.05] border-white/[0.1] text-white/40 hover:bg-white/[0.12] hover:border-white/[0.2] hover:text-white/75'

  return (
    <button
      type="button"
      onClick={() => onSelectLevel(level)}
      aria-pressed={isActive}
      className={`shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-display text-[10px] md:text-[11px] font-bold border rounded-sm cursor-pointer active:scale-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6] ${isActive ? activeClass : idleClass}`}
      style={{ transition: 'background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s cubic-bezier(0.34,1.56,0.64,1)' }}
    >
      {level}
    </button>
  )
}

function LevelSelector({ availableLevels, previewLevel, onSelectLevel }: LevelSelectorProps) {
  const normalLevels = NORMAL_SKILL_LEVELS.filter(level => availableLevels.has(level))
  const masteryLevels = MASTERY_SKILL_LEVELS.filter(level => availableLevels.has(level))

  return (
    <div className="bg-white/[0.04] border border-white/[0.08] p-3 flex flex-wrap items-center gap-3">
      <span className="font-display text-[10px] text-white/40 uppercase tracking-wider shrink-0">Preview Level</span>
      <div className="flex flex-wrap items-center gap-1">
        {normalLevels.map(level => (
          <LevelButton key={level} level={level} isActive={level === previewLevel} isMastery={false} onSelectLevel={onSelectLevel} />
        ))}
        {masteryLevels.length > 0 && (
          <>
            <div className="w-px h-4 bg-white/10 mx-1" aria-hidden="true" />
            {masteryLevels.map(level => (
              <LevelButton key={level} level={level} isActive={level === previewLevel} isMastery={true} onSelectLevel={onSelectLevel} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export function SkillsPanel({ operator }: { operator: Operator }) {
  const [previewLevel, setPreviewLevel] = useState<SkillLevelLabel>('M3')

  const skillWithLevelData = operator.skills.find(skill => (skill.levels?.length ?? 0) > 0)
  const availableLevels = new Set(skillWithLevelData?.levels?.map(levelData => levelData.level) ?? [])
  const hasLevelPreview = availableLevels.size > 0

  return (
    <div className="grid gap-3">
      {hasLevelPreview && (
        <LevelSelector availableLevels={availableLevels} previewLevel={previewLevel} onSelectLevel={setPreviewLevel} />
      )}
      {operator.skills.map((skill) => {
        const recoveryType = getRecoveryType(skill.recovery)
        const recoveryTagStyle = RECOVERY_TAG_STYLES[recoveryType] ?? 'bg-white/10 text-white/40 border-white/20'
        const activeLevelData = skill.levels?.find(levelData => levelData.level === previewLevel)
        const displayDesc = activeLevelData?.desc ?? skill.desc
        const displaySpInit = activeLevelData?.spInit ?? skill.spInit
        const displaySp = activeLevelData?.sp ?? skill.sp
        const displayDur = activeLevelData ? activeLevelData.dur : skill.dur
        const displayRankLabel = activeLevelData ? formatLevelLabel(activeLevelData.level) : skill.rank
        const isMasteryLevel = activeLevelData ? activeLevelData.level.startsWith('M') : skill.rank.startsWith('M')
        const rankBadgeStyle = isMasteryLevel
          ? 'bg-ak-gold/20 text-ak-gold-bright border-ak-gold/30'
          : 'bg-ak-accent/20 text-ak-accent-bright border-ak-accent/30'

        return (
        <div key={skill.name} className="bg-white/[0.06] border border-white/[0.08] p-4">
          <div className="flex items-start gap-3">
            <Image src={skill.icon} alt={skill.name} width={60} height={60} className="w-12 h-12 md:w-15 md:h-15 shrink-0 rounded object-contain bg-white/[0.04] border border-white/[0.08] p-1" />
            <div className="flex-1 min-w-0">
              <div className="flex max-sm:flex-col max-sm:items-start items-center gap-2 mb-1.5">
                <h4 className="font-display text-sm font-semibold text-white/85">{skill.name}</h4>
                <span className={`font-display text-sm px-1.5 py-0.5 border rounded-sm ${rankBadgeStyle}`}>{displayRankLabel}</span>
              </div>
              <p className="text-xs leading-relaxed text-white/45 mb-2 whitespace-pre-line">{displayDesc}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <span className={`font-display text-sm px-1.5 py-0.5 border rounded-sm ${recoveryTagStyle}`}>{recoveryType} Recovery</span>
                <span className="text-sm font-display text-white/40">{skill.activation} Trigger</span>
                <span className="text-sm font-display text-white/40">SP Init <span className="text-ak-accent-bright font-semibold">{displaySpInit}</span></span>
                <span className="text-sm font-display text-white/40">SP Cost <span className="text-ak-accent-bright font-semibold">{displaySp}</span></span>
                {displayDur && <span className="text-sm font-display text-white/40">Duration <span className="text-ak-gold-bright font-semibold">{displayDur}</span></span>}
              </div>
              {skill.range && (
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col items-center gap-2">
                  <span className="font-display text-[10px] text-white/40 uppercase tracking-wider self-start">Range While Active</span>
                  <RangeGrid grid={skill.range} />
                </div>
              )}
              {skill.note && <p className="text-[10px] text-white/30 mt-2 leading-relaxed border-t border-white/[0.06] pt-2">{skill.note}</p>}
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}
