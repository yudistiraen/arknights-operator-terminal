import type { Operator } from '../../types'
import op12fVoice from '../voices/12f'

const op12f: Operator = {
  name: '12F', fileNo: 'R303', class: 'Caster', branch: 'Splash Caster', rarity: 2, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Savra', gender: 'Male', birthplace: 'Unknown',
  birthday: 'March 3rd', height: '181 cm', combatExp: '5 years', infectionStatus: 'Non-infected', illustrator: 'Hai Mao',
  cv: { JP: 'Atsushi Kakehashi', CN: 'MinoruK', EN: 'James Phoon', KR: 'Kim Young-sun' },
  voice: op12fVoice,
  trait: 'Deals AOE Arts damage',
  tags: ['Starter'],
  stats: { hp: 1461, atk: 432, def: 50, res: 10, block: 1, cost: 24, aspd: '2.9s', rdp: '70s' },
  range: { base: [[1,1,0],[2,1,1],[1,1,0]], e1: [[1,1,0],[2,1,1],[1,1,0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Dodge Rate Up', desc: '50% Physical Dodge', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `Nothing is known about the Savra with the alias 12F, except that he worked as a mercenary and was involved in several conflicts around Terra. He is skilled in offensive Originium Arts. Despite his taciturn appearance, he is friendly. 12F joined Rhodes Island alongside Owl.`,
  profile: `12F was the alias commonly used by this Operator in his mercenary work. By his own account, he vacillated between different factions and was involved in the several famous battles over the past few years.\nThe few verifiable documents we have confirmed that 12F was indeed present for these conflicts, either as a regular mercenary or security for a local facility.\nHe joined Rhodes Island with Owl, having been admitted for his unique combat experience as well as his experience in general. Now a standard Arts Operator assigned to normal duty.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests on this Operator show clear outlines of internal organs, with no abnormal dark spots or shadows. No unusual traces of Originium particles present in the circulatory system, no signs of infection, confirming him as uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator 12F showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.09u/L\nOperator 12F rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `Originium Power Assessment: Despite his extensive combat experience, 12F's Originium power was not decisive in any of his battles, as his own accounts confirm. But his grasp of Originium power is slightly better than your typical caster, and maybe factor into his continued survival.` },
    { title: 'Archive File 2', content: `12F appears very stern and abrasive, but feedback from most Operators who have worked with this inconspicuous caster has been positive. The comments include "Didn't hold up the squad," "helped smooth over internal conflicts," "provided timely assistance," "made unexpectedly good suggestions."` },
    { title: 'Archive File 3', content: `12F gets along with many Operators. In contrast, his closest friend, Operator Owl, has few other friends at Rhodes Island. 12F often makes concerted efforts to speak to Owl at places she frequents. Because the medical department is too busy to keep up on Owl's state of mind, F12 has been providing regular reports.` },
    { title: 'Archive File 4', content: `12F has described many of his battles in detail, but reports that he's forgotten what his home and family looked like. "12F" was the designation he was given for his first mission. That was when he met Owl, who was on the opposing side. He was gravely wounded but lived long enough to become a prisoner of war.` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/splash-caster-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/12f/base.png', chibiSrc: '/operators/12f/chibi.webm', illustrator: 'Hai Mao' },
  ],
  portrait: '/operators/12f/portrait.png',
  portraitFocus: { y: -5, x: 60, zoom: 220 },
}

export default op12f
