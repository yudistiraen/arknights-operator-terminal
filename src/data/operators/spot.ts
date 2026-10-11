import type { Operator } from '../../types'

const spot: Operator = {
  name: 'Spot', fileNo: 'PA64', class: 'Defender', branch: 'Guardian', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A6', position: 'Melee', race: 'Rebbah', gender: 'Male', birthplace: 'Sargon',
  birthday: 'April 30th', height: '169 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '阿鬼',
  cv: { JP: 'Atsushi Abe', CN: 'Zhao Yang', EN: "Hyoie O'Grady", KR: 'Kim Ji-yul' },
  trait: 'Can heal allies by using the skill',
  tags: ['Defense', 'Healing'],
  stats: { hp: 1833, atk: 350, def: 472, res: 10, block: 3, cost: 17, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Smoke Installation', desc: 'Heals an ally and then provides 20% Physical Dodge for 3 seconds', elite: 'E1' }],
  skills: [{
    name: 'Secondary Healing Mode', icon: '/operators/spot/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +45%; Stops attacking and focuses on healing surrounding allies', spInit: 25, sp: 40, rank: 'Rank 7', dur: '25s',
    levels: [
      { level: '1', desc: 'ATK +15%; Stops attacking and focuses on healing surrounding allies', spInit: 15, sp: 40, dur: '15s' },
      { level: '2', desc: 'ATK +20%; Stops attacking and focuses on healing surrounding allies', spInit: 15, sp: 40, dur: '16s' },
      { level: '3', desc: 'ATK +25%; Stops attacking and focuses on healing surrounding allies', spInit: 15, sp: 40, dur: '17s' },
      { level: '4', desc: 'ATK +30%; Stops attacking and focuses on healing surrounding allies', spInit: 20, sp: 40, dur: '20s' },
      { level: '5', desc: 'ATK +35%; Stops attacking and focuses on healing surrounding allies', spInit: 20, sp: 40, dur: '21s' },
      { level: '6', desc: 'ATK +40%; Stops attacking and focuses on healing surrounding allies', spInit: 20, sp: 40, dur: '22s' },
      { level: '7', desc: 'ATK +45%; Stops attacking and focuses on healing surrounding allies', spInit: 25, sp: 40, dur: '25s' },
    ],
  }],
  modules: {},
  story: `Bukar Bornu was previously a member of a stoic Sargonian military family, with his father being a strict and unforgiving general. Bornu deserted his squad during a sudden ambush after he became unable to bear his superior's criticisms of his lax character, and his father punishing him for his love of reading comics. He contracted Oripathy after escaping into the wilderness, and after joining Rhodes Island to treat his illness, Bornu has since become a member of the Op Reserve A6 under the codename "Spot" who utilizes his previous combat experience to serve as a Defender. While he feels like he could never become a true hero, like those in his favorite comics, he has become one for his team at R.I., where he found his new home and family. Taciturn and straightforward, Bornu could amusingly be seen as relatively "normal" compared to the other members of A6.`,
  profile: `Originally a Sargon soldier, Spot took the initiative and came to Rhodes Island seeking employment himself. After passing the examination battery, he was assigned to Op Reserve Team A6.\nHe has a lot of experience as guard; and serves as the defensive specialist on the team.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in his circulation, indicating signs of infection and confirming him as infected at this stage.\n\n[Cell-Originium Assimilation] 3%\nCrystallization visible on surface of body, with many symptoms of Oripathy difficult to spot due to skin and hair color.\n[Blood Originium-Crystal Density] 0.30u/L\nInfection is currently spreading at a constant rate. Regular observation and treatment required.`,
    },
    {
      title: 'Archive File 1',
      content: `A member of Op Reserve Team A6 who used to be a Sargon soldier.\n\nHe rarely speaks and has little reason to. On the rare occasion he does open his mouth, he tends to be brutally direct. Among the ostentatious members of Team A6, he is truly the odd man out.`,
    },
    {
      title: 'Archive File 2',
      content: `A fan of superheroes and pulp action, Spot loves to read comics and has an impressive collection.\n\nHe has filled a whole shelf with his comic books, and other Operators often borrow them from him.`,
    },
    {
      title: 'Archive File 3',
      content: `Although Sargon is a developed country with no shortage of modern entertainment in its cities, the Sargonians always seem a bit withdrawn.\n\nSpot himself seemingly has no interest in anything other than comics and fashion. Every once in a while, he will ask Orchid to give him a Sargonian hairstyle.`,
    },
    {
      title: 'Archive File 4',
      content: `Spot's personality is largely the product of a stoic family.\n\nSargonian military families have no patience for laziness. Unwilling to conform to his family's wishes, he became closed off, aggressive, and eventually ran away from home.`,
    },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/guardian-branch.png', factionIcon: '/icons/factions/op-reserve-a6.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/spot/base.png', chibiSrc: '/operators/spot/chibi.webm', illustrator: '阿鬼' },
    { id: 'skin1', label: 'Professional', src: '/operators/spot/skin1.png', chibiSrc: '/operators/spot/chibi-skin1.webm', illustrator: '阿鬼' },
  ],
  portrait: '/operators/spot/portrait.png',
  portraitFocus: { y: -5, x: 50, zoom:230 },
}

export default spot
