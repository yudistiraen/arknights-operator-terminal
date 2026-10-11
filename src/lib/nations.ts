// Nation ids match scripts/terra-map/extract-grid.mjs's NATION_LIST and the
// terra-grid.json tile data it produces. Operator.birthplace strings are the
// human-readable names shown on the source map, so normalizing both to the
// same bare-lowercase form links an operator to its home nation's map tiles.
export function normalizeNationId(name: string): string {
  return name.toLowerCase().replace(/[^a-z]/g, '')
}

export const NATION_LABELS: Record<string, string> = {
  sami: 'Sami',
  ursus: 'Ursus',
  higashi: 'Higashi',
  kazimierz: 'Kazimierz',
  yan: 'Yan',
  bolivar: 'Bolívar',
  columbia: 'Columbia',
  kazdel: 'Kazdel',
  leithanien: 'Leithanien',
  kjerag: 'Kjerag',
  siracusa: 'Siracusa',
  victoria: 'Victoria',
  minos: 'Minos',
  laterano: 'Laterano',
  rimbilliton: 'Rim Billiton',
  siesta: 'Siesta',
  sargon: 'Sargon',
  iberia: 'Iberia',
}

// White-on-transparent emblems in public/icons/factions/, named in kebab-case.
// Kazdel has no emblem asset yet, so callers fall back to a plain marker.
const NATIONS_WITHOUT_ICON = new Set(['kazdel'])
const NATION_ICON_FILE_OVERRIDES: Record<string, string> = { rimbilliton: 'rim-billiton' }

export function getNationIcon(nationId: string): string | null {
  if (NATIONS_WITHOUT_ICON.has(nationId) || !NATION_LABELS[nationId]) return null
  return `/icons/factions/${NATION_ICON_FILE_OVERRIDES[nationId] ?? nationId}.png`
}
