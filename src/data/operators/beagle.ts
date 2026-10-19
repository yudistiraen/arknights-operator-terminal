import type { Operator } from '../../types'
import beagleVoice from '../voices/beagle'

const beagle: Operator = {
  name: 'Beagle', fileNo: 'PA14', class: 'Defender', branch: 'Protector', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A1', position: 'Melee', race: 'Perro', gender: 'Female', birthplace: 'Bolivar',
  birthday: 'March 2nd', height: '154 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '下野宏铭',
  cv: { JP: 'Nana Harumura', CN: 'Wang Xiaotong', EN: 'Claire Morgan', KR: 'Lee Hyun-jin' },
  voice: beagleVoice,
  trait: 'Blocks 3 enemies',
  tags: ['Defense'],
  stats: { hp: 2035, atk: 295, def: 550, res: 0, block: 3, cost: 18, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'DEF Up', desc: 'DEF +10%', elite: 'E1' }],
  skills: [{
    name: 'DEF Up α', icon: '/operators/beagle/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'DEF +50%', spInit: 0, sp: 40, rank: 'Rank 7', dur: '30s',
    levels: [
      { level: '1', desc: 'DEF +10%', spInit: 0, sp: 50, dur: '30s' },
      { level: '2', desc: 'DEF +15%', spInit: 0, sp: 50, dur: '30s' },
      { level: '3', desc: 'DEF +20%', spInit: 0, sp: 50, dur: '30s' },
      { level: '4', desc: 'DEF +30%', spInit: 0, sp: 45, dur: '30s' },
      { level: '5', desc: 'DEF +35%', spInit: 0, sp: 45, dur: '30s' },
      { level: '6', desc: 'DEF +40%', spInit: 0, sp: 45, dur: '30s' },
      { level: '7', desc: 'DEF +50%', spInit: 0, sp: 40, dur: '30s' },
    ],
  }],
  modules: {},
  story: `The young Bolívarian Perro Beagle is a former Columbian police cadet who worked in Tkaronto with Fang and Kroos. Following a Catastrophe codenamed "The Blackwasp" that struck the city, Beagle contracted severe Oripathy, and she went with her colleagues to Rhodes Island for treatment. After becoming an R.I. operator to avoid discrimination as Infected, they formed the Op Reserve Team A1, where Beagle puts her police training to good use as a defender on the battlefield. Beagle is somewhat childish and clumsy, but she demonstrates that she is a capable combatant.`,
  profile: `A frontline Operator on Op Reserve Team A1. Beagle originally came to Rhodes Island with Fang and Kroos. Though immature in some respects, she has gradually displayed professionalism, resilience, and extreme talent. As a result, she has earned the recognition of others as a reliable Operator.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 8%\nShe presents no obvious external symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.21u/L\nDegree of infection is not yet severe and has not yet brought about a significant physical impact.`,
    },
    {
      title: 'Archive File 1',
      content: `Though she lacks flashy skills or the capacity for Arts, Beagle uses her endurance to establish a strong forward defense for her teammates. Though a bit clumsy, she believes that everything will work out as long as she continues to press forward tenaciously. So far, she has only been proven right in this regard.`,
    },
    {
      title: 'Archive File 2',
      content: `Her time in a Columbia outskirts garrison was one of the most difficult periods of her life, but also among the most precious. Beagle, along with her close companions Fang and Kroos, worked tirelessly to close the gap between them and the official team members. However, Beagle fell into a deep bout of self-loathing after being infected with Oripathy. She felt that she had become a burden on Fang and Kroos, and that it was her fault they lost everything.`,
    },
    {
      title: 'Archive File 3',
      content: `At their lowest point, Fang, Kroos, and Beagle faced expulsion and banishment from the garrison. On Kroos's recommendation, the three of them came to Rhodes Island together. On that day, Beagle resolved to repay the kindness of Fang, Kroos, and everyone who stood beside her.`,
    },
    {
      title: 'Archive File 4',
      content: `After witnessing everyone bicker, play, and express joy day after day, Beagle began to feel grateful and happy. Everyday, Beagle works hard to solve the disputes that arise between Hibiscus and Lava. She helps Fang find Kroos whenever she is slacking off. She even helps the senior members of Rhodes Island by doing chores in her free time. Time and time through and through, she enjoys every moment of her hard work.`,
    },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/op-reserve-a1.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/beagle/base.png', chibiSrc: '/operators/beagle/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Dreadnaught', src: '/operators/beagle/skin1.png', chibiSrc: '/operators/beagle/chibi-skin1.webm', illustrator: '下野宏铭' },
  ],
  portrait: '/operators/beagle/portrait.png',
  portraitFocus: { y: -10, x: 44.7, zoom: 243 },
}

export default beagle
