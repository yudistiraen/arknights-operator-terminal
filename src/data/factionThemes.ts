export interface FactionTheme {
  accent: [number, number, number]
  secondary: [number, number, number]
}

const FACTION_THEMES: Record<string, FactionTheme> = {
  'Rhodes Island': { accent: [59, 164, 201], secondary: [100, 140, 200] },
  'Elite Op': { accent: [50, 110, 200], secondary: [80, 70, 180] },
  'Op Team A4': { accent: [60, 100, 170], secondary: [80, 90, 160] },
  'Reserve Op Team A1': { accent: [70, 130, 190], secondary: [90, 110, 170] },
  'Reserve Op Team A4': { accent: [70, 130, 190], secondary: [90, 110, 170] },
  'Reserve Op Team A6': { accent: [70, 130, 190], secondary: [90, 110, 170] },
  'S.W.E.E.P.': { accent: [160, 30, 40], secondary: [100, 20, 30] },

  'Babel': { accent: [130, 60, 190], secondary: [90, 40, 140] },

  'Ægir': { accent: [20, 150, 170], secondary: [10, 100, 130] },
  'Aegir': { accent: [20, 150, 170], secondary: [10, 100, 130] },
  'Abyssal Hunters': { accent: [15, 90, 140], secondary: [20, 60, 100] },

  'Bolívar': { accent: [190, 110, 50], secondary: [160, 80, 40] },
  'Bolivar': { accent: [190, 110, 50], secondary: [160, 80, 40] },

  'Columbia': { accent: [200, 160, 50], secondary: [170, 130, 40] },
  'Blacksteel Worldwide': { accent: [110, 130, 150], secondary: [80, 100, 120] },
  'Blacksteel': { accent: [110, 130, 150], secondary: [80, 100, 120] },
  'Rhine Lab': { accent: [60, 190, 210], secondary: [40, 150, 180] },
  'Siesta': { accent: [210, 140, 80], secondary: [190, 110, 60] },

  'Followers': { accent: [190, 160, 80], secondary: [160, 130, 60] },

  'Higashi': { accent: [190, 40, 50], secondary: [150, 30, 40] },

  'Iberia': { accent: [40, 60, 160], secondary: [30, 40, 120] },

  'Kazimierz': { accent: [210, 170, 60], secondary: [180, 140, 40] },
  'Pinus Sylvestris': { accent: [40, 150, 80], secondary: [30, 120, 60] },

  'Kjerag': { accent: [110, 180, 220], secondary: [80, 150, 200] },
  'Karlan Trade': { accent: [120, 170, 200], secondary: [90, 140, 170] },

  'Laterano': { accent: [210, 190, 110], secondary: [180, 160, 80] },

  'Leithanien': { accent: [150, 60, 200], secondary: [120, 40, 160] },

  'Minos': { accent: [190, 130, 50], secondary: [160, 100, 40] },

  'Rim Billiton': { accent: [170, 110, 60], secondary: [140, 80, 40] },

  'Sami': { accent: [40, 140, 90], secondary: [30, 110, 70] },

  'Sargon': { accent: [200, 170, 80], secondary: [170, 140, 60] },

  'Siracusa': { accent: [150, 50, 70], secondary: [120, 40, 60] },
  "Chiave's Gang": { accent: [140, 60, 80], secondary: [110, 40, 60] },

  'Ursus': { accent: [170, 40, 40], secondary: [130, 30, 30] },
  'Ursus Student Self-Governing Group': { accent: [160, 60, 60], secondary: [130, 50, 50] },

  'Victoria': { accent: [170, 50, 60], secondary: [140, 40, 50] },
  'Glasgow': { accent: [60, 140, 150], secondary: [40, 110, 120] },
  'Tara': { accent: [40, 130, 70], secondary: [30, 100, 50] },

  'Yan': { accent: [190, 90, 40], secondary: [160, 70, 30] },
  'Yan-Sui': { accent: [190, 160, 60], secondary: [160, 130, 40] },
  'Lungmen': { accent: [40, 170, 190], secondary: [30, 140, 160] },
  'Yan-Lungmen': { accent: [40, 170, 190], secondary: [30, 140, 160] },
  "Lee's Detective Agency": { accent: [80, 140, 160], secondary: [60, 110, 130] },
  'Lungmen Guard Department': { accent: [50, 90, 170], secondary: [40, 70, 140] },
  'Penguin Logistics': { accent: [210, 130, 40], secondary: [180, 100, 30] },

  'Ave Mujica': { accent: [140, 40, 160], secondary: [110, 30, 130] },
  "Laios's Party": { accent: [170, 130, 70], secondary: [140, 100, 50] },
  'Team Rainbow': { accent: [80, 120, 160], secondary: [60, 100, 140] },
}

const DEFAULT_THEME: FactionTheme = {
  accent: [59, 164, 201],
  secondary: [168, 85, 247],
}

export function getFactionTheme(faction: string): FactionTheme {
  return FACTION_THEMES[faction] ?? DEFAULT_THEME
}
