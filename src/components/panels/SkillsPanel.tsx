import { useState } from 'react'
import Image from 'next/image'
import type { Operator, SkillLevelLabel } from '../../types'
import { RangeGrid } from '../ui/RangeGrid'
import { FOCUS_RING } from '../ui/Console'

const RECOVERY_TAG_STYLES: Record<string, string> = {
  Auto: 'text-gc-ok border-gc-ok/40',
  Offensive: 'text-gc-alert border-gc-alert/40',
  Defensive: 'text-gc-signal border-gc-signal/40',
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
  // Selected = inverted fill; mastery levels use the signal yellow instead.
  const activeClass = isMastery ? 'bg-gc-signal border-gc-signal text-gc-void' : 'bg-gc-invert border-gc-invert text-gc-void'
  const idleClass = isMastery
    ? 'bg-gc-base border-gc-signal-dim text-gc-signal-dim hover:text-gc-signal hover:border-gc-signal'
    : 'bg-gc-base border-gc-line text-gc-dim hover:bg-gc-raised hover:border-gc-line-strong hover:text-gc-ink'

  return (
    <button
      type="button"
      onClick={() => onSelectLevel(level)}
      aria-pressed={isActive}
      className={`shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-data text-[10px] md:text-[11px] font-medium border cursor-pointer active:scale-90 ${FOCUS_RING} ${isActive ? activeClass : idleClass}`}
      style={{ transition: 'transform 0.15s cubic-bezier(0.22,1.2,0.36,1)' }}
    >
      {level}
    </button>
  )
}

function LevelSelector({ availableLevels, previewLevel, onSelectLevel }: LevelSelectorProps) {
  const normalLevels = NORMAL_SKILL_LEVELS.filter(level => availableLevels.has(level))
  const masteryLevels = MASTERY_SKILL_LEVELS.filter(level => availableLevels.has(level))

  return (
    <div className="bg-gc-base border border-gc-line p-3 flex flex-wrap items-center gap-3">
      <span className="font-data text-[10px] text-gc-dim uppercase tracking-[0.14em] shrink-0">Preview Level</span>
      <div className="flex flex-wrap items-center gap-1">
        {normalLevels.map(level => (
          <LevelButton key={level} level={level} isActive={level === previewLevel} isMastery={false} onSelectLevel={onSelectLevel} />
        ))}
        {masteryLevels.length > 0 && (
          <>
            <div className="w-px h-4 bg-gc-line mx-1" aria-hidden="true" />
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
  const [previewLevel, setPreviewLevel] = useState<SkillLevelLabel | null>(null)

  const skillWithLevelData = operator.skills.find(skill => (skill.levels?.length ?? 0) > 0)
  const availableLevels = new Set(skillWithLevelData?.levels?.map(levelData => levelData.level) ?? [])
  const hasLevelPreview = availableLevels.size > 0
  const maxLevel = skillWithLevelData?.levels?.at(-1)?.level
  const effectiveLevel = previewLevel && availableLevels.has(previewLevel) ? previewLevel : maxLevel

  return (
    <div className="grid gap-3">
      {hasLevelPreview && effectiveLevel && (
        <LevelSelector availableLevels={availableLevels} previewLevel={effectiveLevel} onSelectLevel={setPreviewLevel} />
      )}
      {operator.skills.map((skill) => {
        const recoveryType = getRecoveryType(skill.recovery)
        const recoveryTagStyle = RECOVERY_TAG_STYLES[recoveryType] ?? 'text-gc-dim border-gc-line'
        const activeLevelData = skill.levels?.find(levelData => levelData.level === effectiveLevel)
        const displayDesc = activeLevelData?.desc ?? skill.desc
        const displaySpInit = activeLevelData?.spInit ?? skill.spInit
        const displaySp = activeLevelData?.sp ?? skill.sp
        const displayDur = activeLevelData ? activeLevelData.dur : skill.dur
        const displayRankLabel = activeLevelData ? formatLevelLabel(activeLevelData.level) : skill.rank
        const isMasteryLevel = activeLevelData ? activeLevelData.level.startsWith('M') : skill.rank.startsWith('M')
        const rankBadgeStyle = isMasteryLevel
          ? 'bg-gc-signal text-gc-void border-gc-signal'
          : 'bg-gc-invert text-gc-void border-gc-invert'

        return (
        <div key={skill.name} className="bg-gc-base border border-gc-line p-4">
          <div className="flex items-start gap-3">
            <Image src={skill.icon} alt={skill.name} width={60} height={60} className="w-12 h-12 md:w-15 md:h-15 shrink-0 object-contain bg-gc-panel border border-gc-line-strong p-1" />
            <div className="flex-1 min-w-0">
              <div className="flex max-sm:flex-col max-sm:items-start items-center gap-2 mb-1.5">
                <h4 className="font-body text-[15px] font-semibold text-gc-ink">{skill.name}</h4>
                <span className={`font-data text-[11px] px-1.5 py-0.5 border tracking-[0.08em] ${rankBadgeStyle}`}>{displayRankLabel}</span>
              </div>
              <p className="font-body text-[13px] leading-[1.7] text-gc-text mb-3 whitespace-pre-line">{displayDesc}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <span className={`font-data text-[11px] px-1.5 py-0.5 border uppercase tracking-[0.1em] ${recoveryTagStyle}`}>{recoveryType} Recovery</span>
                <span className="text-[11px] font-data text-gc-dim uppercase tracking-[0.1em]">{skill.activation} Trigger</span>
                <span className="text-[11px] font-data text-gc-dim uppercase tracking-[0.1em]">SP Init <span className="text-gc-ink font-medium tabular-nums">{displaySpInit}</span></span>
                <span className="text-[11px] font-data text-gc-dim uppercase tracking-[0.1em]">SP Cost <span className="text-gc-ink font-medium tabular-nums">{displaySp}</span></span>
                {displayDur && <span className="text-[11px] font-data text-gc-dim uppercase tracking-[0.1em]">Duration <span className="text-gc-ink font-medium tabular-nums">{displayDur}</span></span>}
              </div>
              {skill.range && (
                <div className="mt-3 pt-3 border-t border-gc-line-soft flex flex-col items-center gap-2">
                  <span className="font-data text-[10px] text-gc-dim uppercase tracking-[0.14em] self-start">Range While Active</span>
                  <RangeGrid grid={skill.range} />
                </div>
              )}
              {skill.note && <p className="font-body text-[12px] text-gc-dim mt-2 leading-[1.7] border-t border-gc-line-soft pt-2">{skill.note}</p>}
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}
