import type { Operator } from '../../types'
import dobermannVoice from '../voices/dobermann'

const dobermann: Operator = {
  name: 'Dobermann', fileNo: 'R100', class: 'Guard', branch: 'Instructor', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Perro', gender: 'Female', birthplace: 'Bolívar',
  birthday: 'May 27th', height: '163 cm', combatExp: '6 years', infectionStatus: 'Infected', illustrator: 'LLC',
  cv: { JP: 'Atsumi Tanezaki', CN: 'Gui Niang', EN: 'Lucy Montgomery', KR: 'Kim Hyun-ji' },
  voice: dobermannVoice,
  trait: 'Can attack enemies from range; When attacking enemies not blocked by self, increase ATK to 120%',
  tags: ['DPS', 'Support'],
  stats: { hp: 2024, atk: 602, def: 382, res: 0, block: 2, cost: 15, aspd: '1.05s', rdp: '70s' },
  range: {
    base: [[2,1,1]],
    e1: [[2,1,1]],
    e2: [[2,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Starter Instructor', desc: "All three-star Operators' ATK +10%", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Power Strike β', icon: '/operators/dobermann/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'Increases the ATK of next attack to 230%', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: 'Increases the ATK of next attack to 170%', spInit: 0, sp: 5 },
        { level: '2', desc: 'Increases the ATK of next attack to 175%', spInit: 0, sp: 5 },
        { level: '3', desc: 'Increases the ATK of next attack to 180%', spInit: 0, sp: 5 },
        { level: '4', desc: 'Increases the ATK of next attack to 185%', spInit: 0, sp: 4 },
        { level: '5', desc: 'Increases the ATK of next attack to 190%', spInit: 0, sp: 4 },
        { level: '6', desc: 'Increases the ATK of next attack to 195%', spInit: 0, sp: 4 },
        { level: '7', desc: 'Increases the ATK of next attack to 200%', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Increases the ATK of next attack to 210%', spInit: 0, sp: 4 },
        { level: 'M2', desc: 'Increases the ATK of next attack to 220%', spInit: 0, sp: 4 },
        { level: 'M3', desc: 'Increases the ATK of next attack to 230%', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Spur', icon: '/operators/dobermann/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%; The Talent becomes 3 times as effective', spInit: 40, sp: 70, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +30% and the effect of this unit's first Talent increases to 2.1 times`, spInit: 30, sp: 80, dur: '25s' },
        { level: '2', desc: `ATK +30% and the effect of this unit's first Talent increases to 2.2 times`, spInit: 30, sp: 79, dur: '25s' },
        { level: '3', desc: `ATK +30% and the effect of this unit's first Talent increases to 2.3 times`, spInit: 30, sp: 78, dur: '25s' },
        { level: '4', desc: `ATK +40% and the effect of this unit's first Talent increases to 2.4 times`, spInit: 32, sp: 77, dur: '25s' },
        { level: '5', desc: `ATK +40% and the effect of this unit's first Talent increases to 2.5 times`, spInit: 32, sp: 76, dur: '25s' },
        { level: '6', desc: `ATK +40% and the effect of this unit's first Talent increases to 2.6 times`, spInit: 32, sp: 75, dur: '25s' },
        { level: '7', desc: `ATK +50% and the effect of this unit's first Talent increases to 2.7 times`, spInit: 34, sp: 74, dur: '25s' },
        { level: 'M1', desc: `ATK +60% and the effect of this unit's first Talent increases to 2.8 times`, spInit: 36, sp: 73, dur: '25s' },
        { level: 'M2', desc: `ATK +70% and the effect of this unit's first Talent increases to 2.9 times`, spInit: 38, sp: 72, dur: '25s' },
        { level: 'M3', desc: `ATK +80% and the effect of this unit's first Talent increases to 3.0 times`, spInit: 40, sp: 70, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Dobermann's Badge", desc: 'Appointed as Guard Operator to exercise Instructor responsibilities' },
    insy: { code: 'INS-Y', name: 'Military Telescope', stages: [
      { stage: 1, atk: '+35', aspd: '+5', effect: 'New trait: Can also be deployed on Ranged tiles' },
      { stage: 2, hp: '+50', atk: '+45', aspd: '+5', effect: 'New talent: Training Obligations — When there are three-star Operators on the field, ASPD +10' },
      { stage: 3, hp: '+80', atk: '+53', aspd: '+5', effect: 'Training Obligations improved: When there are three-star Operators on the field, ASPD +15' },
    ]},
  },
  story: `The resident Perro drill instructor of Rhodes Island, Dobermann was a colonel of the Bolívarian Coalition Government who later defected to the True Bolívarians. However, she realized neither side intended to make her homeland a better place and that they were no different from the Singas dynasty. As a result of her realization and upon contracting Oripathy, she joined the politically neutral R.I. for treatment. In exchange, Dobermann became the instructor everyone in R.I. knows and respects, primarily training new recruits through a strict regimen emphasizing discipline. On the battlefield, Dobermann can also act and join the battle herself when needed, using her whip to lash enemies from a short distance away.`,
  profile: `Former Bolívarian military, Dobermann joined Rhodes Island as a drill instructor, primarily training entry-level Operators. She also assists with prisoner interrogation when necessary.\nProficient in military operations of various scales, Dobermann is a highly disciplined soldier and often leads the charge in battle as a guard.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 14%\nOperator Dobermann currently showed no conspicuous symptoms of infection.\n[Blood Originium-Crystal Density] 0.26u/L\nInfection still in early stages, no apparent threat to physical health detected as yet.` },
    { title: 'Archive File 1', content: `A stone-faced drill instructor.\nEvery new Operator joining Rhodes Island must endure Dobermann's "welcome," regardless of what glorious background they may come from. Even the rowdiest, most unruly recruit falls in line after her boot camp.` },
    { title: 'Archive File 2', content: `Dobermann isn't the only drill instructor at Rhodes Island. She oversees a squad of well-trained instructors in charge of various lessons and drills.\nNearly all of these officers were once low-level Operators taught by Dobermann herself and hand-picked through a rigorous process. It's not an exaggeration to say they have the island's future on their shoulders.` },
    { title: 'Archive File 3', content: `A career military woman, Dobermann is heavy on discipline. There are many strict rules under her training regimen and no transgression or violation is tolerated, which has put off many Operators.\nAt the same time, however, Dobermann cares about each Operator's diet, physical condition and even emotional state. She has never forced anyone to do more than what they were capable of doing. It's just that her commitment is a bit too subtle.\nNaturally, this stems from Dobermann's inability to properly express herself. Hopefully more people will come to understand her.` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/instructor-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/dobermann/base.png', chibiSrc: '/operators/dobermann/chibi.webm', illustrator: 'LLC' },
    { id: 'e2', label: 'Elite 2', src: '/operators/dobermann/e2.png', chibiSrc: '/operators/dobermann/chibi.webm', illustrator: 'LLC' },
    { id: 'skin1', label: 'Lieutenant', src: '/operators/dobermann/skin1.png', chibiSrc: '/operators/dobermann/chibi-skin1.webm', illustrator: 'LLC' },
  ],
  portrait: '/operators/dobermann/portrait.png',
  portraitFocus: { y: -0.8, x: 50.8, zoom: 325 },
}

export default dobermann
