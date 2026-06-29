import { useState } from 'react'
import type { Operator } from '../../types'

export function ProfilePanel({ operator }: { operator: Operator }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {profileFields.map(([fieldLabel, fieldValue]) => (
          <div key={fieldLabel} className="flex justify-between items-baseline border-b border-white/[0.06] pb-2">
            <span className="text-[10px] font-display text-white/40 uppercase tracking-wider">{fieldLabel}</span>
            <span className={`text-xs font-display font-semibold ${fieldLabel === 'Infection' ? fieldValue === 'Infected' ? 'text-ak-infected' : 'text-ak-non-infected' : 'text-white/80'}`}>{fieldValue}</span>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.04] border border-white/[0.06] p-5">
        <p className="text-xs leading-[1.8] text-white/50 whitespace-pre-line italic">{operator.lore}</p>
      </div>

      {operator.records && operator.records.length > 0 && (
        <div className="space-y-1">
          {operator.records.map((record, index) => {
            const isOpen = openIndex === index
            return (
              <div key={record.title} className="border border-white/[0.06] overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <span className="text-[11px] font-display font-semibold text-white/70 uppercase tracking-wider">{record.title}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-white/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 py-4 bg-white/[0.02]">
                      <p className="text-xs leading-[1.8] text-white/50 whitespace-pre-line">{record.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
