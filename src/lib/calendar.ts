import { OPERATORS } from '../data/operators'
import type { Operator } from '../types'

const MONTH_NAMES: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3,
  May: 4, June: 5, July: 6, August: 7,
  September: 8, October: 9, November: 10, December: 11,
}

export interface BirthdayEntry {
  operator: Operator
  month: number
  day: number
  portrait: string
}

export function parseBirthday(birthday: string): { month: number; day: number } | null {
  const match = birthday.match(/^(\w+)\s+(\d+)/)
  if (!match) return null
  const month = MONTH_NAMES[match[1]]
  const day = parseInt(match[2])
  if (month === undefined || !day) return null
  return { month, day }
}

export function getAllBirthdays(): BirthdayEntry[] {
  const entries: BirthdayEntry[] = []
  for (const op of OPERATORS) {
    const parsed = parseBirthday(op.birthday)
    if (!parsed) continue
    entries.push({
      operator: op,
      month: parsed.month,
      day: parsed.day,
      portrait: op.skins[0]?.src ?? '',
    })
  }
  return entries
}

export function getBirthdaysForMonth(month: number): Map<number, BirthdayEntry[]> {
  const map = new Map<number, BirthdayEntry[]>()
  for (const entry of getAllBirthdays()) {
    if (entry.month !== month) continue
    const list = map.get(entry.day) ?? []
    list.push(entry)
    map.set(entry.day, list)
  }
  return map
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

export function getFirstDayOfWeek(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

export const MONTH_LABELS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export const DAY_LABELS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
