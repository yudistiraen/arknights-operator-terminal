import type { Operator } from '../../types'
import { RangeGrid } from '../ui/RangeGrid'

const RECOVERY_TAG_STYLES: Record<string, string> = {
  Auto: 'bg-ak-non-infected/20 text-ak-non-infected border-ak-non-infected/30',
  Offensive: 'bg-ak-orange/20 text-ak-orange-bright border-ak-orange/30',
  Defensive: 'bg-ak-gold/20 text-ak-gold-bright border-ak-gold/30',
}

function getRecoveryType(recovery: string) {
  return recovery.replace(/\s*Recovery$/i, '')
}

export function SkillsPanel({ operator }: { operator: Operator }) {
  return (
    <div className="grid gap-3">
      {operator.skills.map((skill) => {
        const recoveryType = getRecoveryType(skill.recovery)
        const recoveryTagStyle = RECOVERY_TAG_STYLES[recoveryType] ?? 'bg-white/10 text-white/40 border-white/20'

        return (
        <div key={skill.name} className="bg-white/[0.06] border border-white/[0.08] p-4">
          <div className="flex items-start gap-3">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 md:w-15 md:h-15 shrink-0 rounded object-contain bg-white/[0.04] border border-white/[0.08] p-1" />
            <div className="flex-1 min-w-0">
              <div className="flex max-sm:flex-col max-sm:items-start items-center gap-2 mb-1.5">
                <h4 className="font-display text-sm font-semibold text-white/85">{skill.name}</h4>
                <span className="font-display text-sm px-1.5 py-0.5 bg-ak-accent/20 text-ak-accent-bright border border-ak-accent/30 rounded-sm">{skill.rank}</span>
              </div>
              <p className="text-xs leading-relaxed text-white/45 mb-2">{skill.desc}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <span className={`font-display text-sm px-1.5 py-0.5 border rounded-sm ${recoveryTagStyle}`}>{recoveryType} Recovery</span>
                <span className="text-sm font-display text-white/40">{skill.activation} Trigger</span>
                <span className="text-sm font-display text-white/40">SP Init <span className="text-ak-accent-bright font-semibold">{skill.spInit}</span></span>
                <span className="text-sm font-display text-white/40">SP Cost <span className="text-ak-accent-bright font-semibold">{skill.sp}</span></span>
                {skill.dur && <span className="text-sm font-display text-white/40">Duration <span className="text-ak-gold-bright font-semibold">{skill.dur}</span></span>}
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
