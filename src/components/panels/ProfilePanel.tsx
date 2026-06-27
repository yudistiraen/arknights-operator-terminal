import type { Operator } from '../../types'

export function ProfilePanel({ operator }: { operator: Operator }) {
  const profileFields = [
    ['Race', operator.race],
    ['Gender', operator.gender],
    ['Birthplace', operator.birthplace],
    ['Birthday', operator.birthday],
    ['Height', operator.height],
    ['Combat Exp', operator.combatExp],
    ['Infection', operator.infectionStatus],
    ['Illustrator', operator.illustrator],
  ] as const

  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
      {profileFields.map(([fieldLabel, fieldValue]) => (
        <div key={fieldLabel} className="flex justify-between items-baseline border-b border-white/[0.06] pb-2">
          <span className="text-[10px] font-display text-white/40 uppercase tracking-wider">{fieldLabel}</span>
          <span className={`text-xs font-display font-semibold ${fieldValue === 'Infected' ? 'text-ak-infected' : 'text-white/80'}`}>{fieldValue}</span>
        </div>
      ))}
    </div>
  )
}
