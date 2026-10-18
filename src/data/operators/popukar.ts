import type { Operator } from '../../types'

const popukar: Operator = {
  name: 'Popukar', fileNo: 'PA65', class: 'Guard', branch: 'Centurion', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A6', position: 'Melee', race: 'Cautus', gender: 'Female', birthplace: 'Rim Billiton',
  birthday: 'July 2nd', height: '144 cm', combatExp: '4 years', infectionStatus: 'Infected', illustrator: '下野宏铭',
  cv: { JP: 'Chiyo Ousaki', CN: 'Chen Yanyi', EN: 'Kayli Mills', KR: 'Ryu Jeom-hee' },
  trait: 'Attacks all blocked enemies',
  tags: ['AoE', 'Survival'],
  stats: { hp: 1858, atk: 545, def: 245, res: 0, block: 2, cost: 19, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [{ name: 'HP Up', desc: 'Max HP +6%; ATK +6%', elite: 'E1' }],
  skills: [{
    name: 'ATK Up α', icon: '/operators/popukar/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +50%', spInit: 0, sp: 40, rank: 'Rank 7', dur: '20s',
    levels: [
      { level: '1', desc: 'ATK +10%', spInit: 0, sp: 50, dur: '20s' },
      { level: '2', desc: 'ATK +15%', spInit: 0, sp: 50, dur: '20s' },
      { level: '3', desc: 'ATK +20%', spInit: 0, sp: 50, dur: '20s' },
      { level: '4', desc: 'ATK +30%', spInit: 0, sp: 45, dur: '20s' },
      { level: '5', desc: 'ATK +35%', spInit: 0, sp: 45, dur: '20s' },
      { level: '6', desc: 'ATK +40%', spInit: 0, sp: 45, dur: '20s' },
      { level: '7', desc: 'ATK +50%', spInit: 0, sp: 40, dur: '20s' },
    ],
  }],
  modules: {},
  story: `The youngest in Reserve Team A6 with tremendous destructive capabilities thanks to her chainsaw. The young Rim Billitonian could have had a good childhood, but she was sold by her parents to a lumber factory and had been working there without education or even safety precautions. She met Kal'tsit who personally brought her to Rhodes Island for treatment, which Ansel noted to be the first time he saw Kal'tsit visibly upset. Popukar became a member of Op Reserve A6 despite having failed her operator exam. Although she seems like a well-behaved child, Popukar can go berserk and exhibit destructive behavior, to the point that she could overpower the adults.`,
  profile: `Initially a patient at Rhodes Island, Popukar requested and passed the trial to become an Operator for Rhodes Island. She was assigned to Op Reserve Team A6.\nShe possesses tremendous destructive power, becoming the team's heavy.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 3%\nCrystallization visible on surface of body, with many symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.2u/L\nSubject is currently stabilized, but regular observation and treatment are required.`,
    },
    {
      title: 'Archive File 1',
      content: `A member of Op Reserve Team A6. Although not capable of complex reasoning, her infection bestowed on her an ability that made her a suitable Operator.\n\nThe source of a lot of problems for Team A6, most of these are unintentional. Because of her sincerity, she is also the easiest to forgive.`,
    },
    {
      title: 'Archive File 2',
      content: `Unlike most other members, Popukar was taken in by Dr. Kal'tsit personally.\n\nDr. Kal'tsit did not explain why she made this choice, only saying Popukar would stay on as a full-time member of Rhodes Island.\n\nHowever, Dr. Ansel said that was the first time he had ever seen Dr. Kal'tsit visibly upset.`,
    },
    {
      title: 'Archive File 3',
      content: `Although Popukar failed her Operator exam, she was allowed to work in logistics, rather than being cast out.\n\nAnd as it is so rare for an infection to make a patient stronger, even rarer to the extent of Popukar's infection, she is a very valuable case study.`,
    },
    {
      title: 'Archive File 4',
      content: `Popukar has gradually become one of the mascots of Rhodes Island. After all, no one could hate such an energetic little cutie — even if she occasionally engages in "minor" vandalism.\n\nMoreover, since joining A6, she has a much bigger family. Their shenanigans are just part of the Rhodes Island color nowadays.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/centurion-branch.png', factionIcon: '/icons/factions/op-reserve-a6.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/popukar/base.png', chibiSrc: '/operators/popukar/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: "Witch's Swing", src: '/operators/popukar/skin1.png', chibiSrc: '/operators/popukar/chibi-skin1.webm', illustrator: '3MO' },
  ],
  portrait: '/operators/popukar/portrait.png',
  portraitFocus: { y: -3.9, x: 64.6, zoom: 253 },
}

export default popukar
