import { useState } from 'react'
import type { Operator } from '../../types'
import { FOCUS_RING } from '../ui/Console'

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
          <div key={fieldLabel} className="flex justify-between items-baseline border-b border-gc-line-soft pb-2">
            <span className="text-[10px] font-data text-gc-dim uppercase tracking-[0.14em]">{fieldLabel}</span>
            <span className={`text-xs font-data font-medium ${fieldLabel === 'Infection' ? fieldValue === 'Infected' ? 'text-ak-infected' : 'text-ak-non-infected' : 'text-gc-ink'}`}>{fieldValue}</span>
          </div>
        ))}
      </div>

      <div className="bg-gc-base border border-gc-line p-5">
        <p className="font-body text-[13px] leading-[1.7] text-gc-text whitespace-pre-line">{operator.profile}</p>
      </div>

      {operator.records && operator.records.length > 0 && (
        <div className="space-y-1">
          {operator.records.map((record, index) => {
            const isOpen = openIndex === index
            return (
              <div key={record.title} className="border border-gc-line overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between px-4 py-3 cursor-pointer ${isOpen ? 'bg-gc-invert' : 'bg-gc-base hover:bg-gc-raised active:bg-gc-panel'} ${FOCUS_RING}`}
                >
                  <span className={`text-[11px] font-data font-medium uppercase tracking-[0.12em] ${isOpen ? 'text-gc-void' : 'text-gc-ink'}`}>{record.title}</span>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gc-void' : 'text-gc-dim'}`}
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
                    <div className="px-4 py-4 bg-gc-panel">
                      <p className="font-body text-[13px] leading-[1.7] text-gc-text whitespace-pre-line">{record.content}</p>
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
