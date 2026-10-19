import type { Operator } from '../../types'
import catapultVoice from '../voices/catapult'

const catapult: Operator = {
  name: 'Catapult', fileNo: 'PA63', class: 'Sniper', branch: 'Artilleryman', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A6', position: 'Ranged', race: 'Kuranta', gender: 'Female', birthplace: 'Kazimierz',
  birthday: 'August 8th', height: '163 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: 'm9nokuro',
  cv: { JP: 'Junko Minagawa', CN: 'Jing Liu', EN: 'Clare Louise Connolly', KR: 'Kang Sae-bom' },
  voice: catapultVoice,
  trait: 'Deals AOE Physical damage',
  tags: ['AoE'],
  stats: { hp: 1150, atk: 672, def: 85, res: 0, block: 1, cost: 23, aspd: '2.8s', rdp: '70s' },
  range: { base: [[1,1,1,1,0],[2,1,1,1,0],[1,1,1,1,0]], e1: [[1,1,1,1,0,0],[2,1,1,1,1,0],[1,1,1,1,0,0]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Lightweight', desc: 'DP Cost -1', elite: 'E1' }],
  skills: [{
    name: 'Blast Range Up α', icon: '/operators/catapult/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'Increases AOE of Normal Attacks to 200%', spInit: 0, sp: 45, rank: 'Rank 7', dur: '30s',
    levels: [
      { level: '1', desc: 'Increases AOE of Normal Attacks to 150%', spInit: 0, sp: 55, dur: '20s' },
      { level: '2', desc: 'Increases AOE of Normal Attacks to 150%', spInit: 0, sp: 53, dur: '22s' },
      { level: '3', desc: 'Increases AOE of Normal Attacks to 150%', spInit: 0, sp: 51, dur: '24s' },
      { level: '4', desc: 'Increases AOE of Normal Attacks to 175%', spInit: 0, sp: 50, dur: '25s' },
      { level: '5', desc: 'Increases AOE of Normal Attacks to 175%', spInit: 0, sp: 48, dur: '27s' },
      { level: '6', desc: 'Increases AOE of Normal Attacks to 175%', spInit: 0, sp: 46, dur: '29s' },
      { level: '7', desc: 'Increases AOE of Normal Attacks to 200%', spInit: 0, sp: 45, dur: '30s' },
    ],
  }],
  modules: {},
  story: `The young Kazimierzian Kuranta Arleta originally served in her local noble's private army until she got fed up with his greed and his exploitation of her fellow villagers. Therefore, in an act befitting her rebellious and impulsive nature, she blew up the noble's vault and returned the money to the townspeople by throwing it into the streets. She avoided the guards hunting her and sneaked out of town with the help of her friends and the Candle Knight. After she contracted Oripathy in the wilderness, she went to Rhodes Island to undergo treatment. She was later assigned to Op Reserve A6 under the codename "Catapult" (a nickname that originated from her friends back home), where she acts as a demolitions expert who provides indirect fire support with a grenade launcher. While she has the reputation of a troublemaker and slacker, often complaining about Dobermann's strict training techniques, Arleta is nevertheless a reliable operator with good morals.`,
  profile: `Originally a patient, Catapult was accepted by Rhodes Island because she was found to be incredibly observant in examinations.\nAssigned to Op Reserve Team A6.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 2%\nCrystallization is visible on body surface, with many symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.30u/L\nMid-stage infection but in stable condition. Regular observation and treatment required.`,
    },
    {
      title: 'Archive File 1',
      content: `She is a soldier in Op Reserve Team A6.\n\nThe problem child of A6, she loves to stick her nose where it doesn't belong and stir the pot.\n\nCatapult is a repeat offender who always gets into trouble and irritates Orchid in particular...`,
    },
    {
      title: 'Archive File 2',
      content: `She didn't make a big mess in the last city she served.\n\nThe mayor didn't step down, no one suspended the construction of the dam, and the vaults she blew up only accounted for a fraction of the city's revenue.\n\nJust a matter of time before the consequences finally kick in.`,
    },
    {
      title: 'Archive File 3',
      content: `Catapult actually enjoys hearing Orchid's critiques, and even deliberately makes her angry sometimes.\n\nBecause she knows Orchid means well, she makes trouble for her.`,
    },
    {
      title: 'Archive File 4',
      content: `Catapult often avoids responsibility and work. It is hard to say if this is because she is simply rebellious, or something left over from her time in the military, or both.\n\nBut she is a good girl, otherwise she wouldn't have blown up the vaults. Although she wasn't happy with it, she did the best she could. In addition, since her time at Rhodes Island, she has never neglected her duty.\n\nIf one day Rhodes Island disappoints her, she just might blow something up and leave. Hopefully, that day never comes.`,
    },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/artilleryman-branch.png', factionIcon: '/icons/factions/op-reserve-a6.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/catapult/base.png', chibiSrc: '/operators/catapult/chibi.webm', illustrator: 'm9nokuro' },
    { id: 'skin1', label: 'Holiday HD', src: '/operators/catapult/skin1.png', chibiSrc: '/operators/catapult/chibi-skin1.webm', illustrator: '二开' },
  ],
  portrait: '/operators/catapult/portrait.png',
  portraitFocus: { y: -1.4, x: 57.8, zoom: 333 },
}

export default catapult
