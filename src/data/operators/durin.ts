import type { Operator } from '../../types'

const durin: Operator = {
  name: 'Durin', fileNo: 'A44', class: 'Caster', branch: 'Core Caster', rarity: 2, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op A4', position: 'Ranged', race: 'Durin', gender: 'Female', birthplace: 'Durin',
  birthday: 'December 15th', height: '131 cm', combatExp: '2 years', infectionStatus: 'Non-infected', illustrator: 'Skade',
  cv: { JP: 'Akari Kageyama', CN: 'Menglu Yang', EN: 'Emma Ballantine', KR: 'Yang Jung-hwa' },
  trait: 'Deals Arts damage',
  tags: ['Starter'],
  stats: { hp: 952, atk: 340, def: 62, res: 10, block: 1, cost: 12, aspd: '1.6s', rdp: '70s' },
  range: { base: [[1,1,1],[2,1,1],[1,1,1]], e1: [[1,1,1],[2,1,1],[1,1,1]] },
  physicalExam: { 'Physical Strength': 'Feeble', Mobility: 'Normal', Endurance: 'Flawed', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [{ name: 'Lucky Lass', desc: '50% Arts Dodge', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `The mysterious Durin girl hailing from the underground world and a close friend of Myrtle is supposed to be a prodigious Arts user. However, she is more well-known for her narcolepsy and laziness, which causes her to spend most of her time sleeping. Although Durin's sleepiness does not affect her work performance, it makes others think her people are super lazy until Myrtle's appearance dismisses such a stereotype. It turns out that her narcolepsy is a born defect; what can she do other than keep sleeping all day long...`,
  profile: `Durin serves on Rhodes Island Op Reserve Team A4.\nShe has a tremendous aptitude for Arts but is unable to fully realize her potential due to her physiology.\nExtremely narcoleptic, she is able to fall asleep at just about any place or time despite averaging more hours of sleep than most operators. Despite this, she makes very few mistakes in her work.`,
  records: [
    { title: 'Clinical Analysis', content: `Radiological exam scan showed clear outlines of internal organs with no abnormality detected. Originium Particle Test of the circulation system indicated no Oripathy. The subject is confirmed as non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator Durin showed no signs of Oripathy.\n[Blood Originium-Crystal Density] 0.18u/L\nOperator Durin has come into frequent contact with processed Originium, but so far no abnormalities have been detected.` },
    { title: 'Archive File 1', content: `Modus Operandi: She takes advantage of her small stature to launch surprise attacks.\nSOP: She finds somewhere more comfortable to sleep.` },
    { title: 'Archive File 2', content: `Thanks to her peculiar origins, Durin eats a slightly different diet than most operators, though this does not mean she eats any less. Despite her small stature, she is known to wolf down an entire meal before her fellow operators have taken more than a few bites. She then promptly seeks out a place to sleep.` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/core-caster-branch.png', factionIcon: '/icons/factions/op-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/durin/base.png', chibiSrc: '/operators/durin/chibi.webm', illustrator: 'Skade' },
  ],
  portrait: '/operators/durin/portrait.png',
  portraitFocus: { y: -10, x: 68, zoom: 220 },
}

export default durin
