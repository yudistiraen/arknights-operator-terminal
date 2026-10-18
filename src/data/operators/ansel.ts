import type { Operator } from '../../types'

const ansel: Operator = {
  name: 'Ansel', fileNo: 'PA43', class: 'Medic', branch: 'Medic', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A4', position: 'Ranged', race: 'Cautus', gender: 'Male', birthplace: 'Rim Billiton',
  birthday: 'January 31st', height: '163 cm', combatExp: 'Half a year', infectionStatus: 'Non-infected', illustrator: '一立里子',
  cv: { JP: 'Mayumi Kaneko', CN: 'Zi Mao', EN: 'Claire Morgan', KR: 'Ahn Hyun-seo' },
  trait: 'Restores the HP of allies',
  tags: ['Healing'],
  stats: { hp: 1135, atk: 407, def: 109, res: 0, block: 1, cost: 17, aspd: '2.85s', rdp: '70s' },
  range: { base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]], e1: [[1,1,1,1,0],[2,1,1,1,0],[1,1,1,1,0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Additional Healing', desc: '15% chance to heal 1 extra ally', elite: 'E1' }],
  skills: [{
    name: 'Healing Range Up', icon: '/operators/ansel/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'Range +2 tiles; ATK +40%', spInit: 10, sp: 35, rank: 'Rank 7', dur: '25s',
    levels: [
      { level: '1', desc: 'Range +1 tiles; ATK +5%', spInit: 10, sp: 45, dur: '19s' },
      { level: '2', desc: 'Range +1 tiles; ATK +10%', spInit: 10, sp: 44, dur: '20s' },
      { level: '3', desc: 'Range +1 tiles; ATK +15%', spInit: 10, sp: 43, dur: '21s' },
      { level: '4', desc: 'Range +2 tiles; ATK +20%', spInit: 10, sp: 40, dur: '22s' },
      { level: '5', desc: 'Range +2 tiles; ATK +25%', spInit: 10, sp: 39, dur: '23s' },
      { level: '6', desc: 'Range +2 tiles; ATK +30%', spInit: 10, sp: 38, dur: '24s' },
      { level: '7', desc: 'Range +2 tiles; ATK +40%', spInit: 10, sp: 35, dur: '25s' },
    ],
  }],
  modules: {},
  story: `The compassionate young Rim Billitoner Cautus Ansel decided to study medicine for the sake of helping people after his parents passed away, having lost his mother to lung disease, and his father to overwork. As the second-youngest of his siblings, he was sent to live with his father's older brother, while his younger sister was sent to their father's younger brother. Meanwhile, their older brothers were already old enough to work. His uncle and brothers opposed his choice, with his uncle preferring that Ansel work in the company he works for as well. However, with his sister's support, Ansel persevered, intent on studying medicine and finally going to Rhodes Island.\n\nBeginning as a medical intern in Rhodes Island, he gradually became a member of Op Reserve Team A4, where he currently works as a field medic.`,
  profile: `Ansel is a member of the Reserve Op Team A4 and a citizen of RIM Billiton. Before officially taking up his post, he was a member of the Rhodes Island pharmaceutical intern staff. After excelling on multiple tests, he was permitted to join the Rhodes Island medic team.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n[Blood Originium-Crystal Density] 0.09u/L\nPhysical data reveal this Operator to be in a basically healthy state.`,
    },
    {
      title: 'Archive File 1',
      content: `Ansel maintains a very calm demeanor. No matter how complicated the situation, he gives priority to providing timely medical support. This calm personality makes the enemy even question whether or not he is taking part in the battle. Very few people can care for the wounded in a well-ordered manner while there are explosions and collapsing roofs all around them. Of course, this is also because Ansel is very strict with his own rules as a medical practitioner. He works hard to follow established medical regulations and doesn't hesitate to let others know if they are violating them.`,
    },
    {
      title: 'Archive File 2',
      content: `Ansel was born in a city in Rim Billiton that is, like so many of them, famous for mining. He has three older brothers and one younger sister. After his mother passed away due to infection, his exhausted father gave him to his sonless brother to adopt. Despite growing up in such an environment without a steady household to live in, he nevertheless grew into a gentle and responsible man. When Ansel realized that most of the workers around him were in poor health due to overwork, he decided to become a medic, hoping to one day alleviate some of the suffering in the world.`,
    },
    {
      title: 'Archive File 3',
      content: `During his time at medical school, Ansel sent his resume to several large medical companies and research institutes in Rim Billiton, but he lacked the money required for further study. His sparse resume was rejected by almost all of the companies. Of the two companies that did not reject his resume, Ansel chose the newly established Rhodes Island Pharmaceutical Company for his internship. During the half-year internship period, Ansel proved himself to be diligent, patient, and attentive to medicine, which earned him recognition from one of the company's top doctors, Dr. Kal'tsit.`,
    },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/op-reserve-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/ansel/base.png', chibiSrc: '/operators/ansel/chibi.webm', illustrator: '一立里子' },
    { id: 'skin1', label: 'Holiday HDm06', src: '/operators/ansel/skin1.png', chibiSrc: '/operators/ansel/chibi-skin1.webm', illustrator: '一立里子' },
    { id: 'skin2', label: 'Nighttime Café', src: '/operators/ansel/skin2.png', chibiSrc: '/operators/ansel/chibi-skin2.webm', illustrator: '一立里子' },
  ],
  portrait: '/operators/ansel/portrait.png',
  portraitFocus: { y: -6.5, x: 43.6, zoom: 311 },
}

export default ansel
