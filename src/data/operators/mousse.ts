import type { Operator } from '../../types'

const mousse: Operator = {
  name: 'Mousse', fileNo: 'VC04', class: 'Guard', branch: 'Arts Fighter', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Victoria', position: 'Melee', race: 'Feline', gender: 'Female', birthplace: 'Victoria',
  birthday: 'August 19th', height: '154 cm', combatExp: 'Half a year', infectionStatus: 'Showed physical signs of Originium, infection confirmed by medical report.', illustrator: 'Iritoa',
  cv: { JP: 'Natsumi Takamori', CN: 'Yuqi Zhang', EN: 'Angel Lin', KR: 'Jo Kyoung-I' },
  trait: 'Deals Arts damage',
  tags: ['DPS'],
  stats: { hp: 2345, atk: 644, def: 357, res: 15, block: 1, cost: 20, aspd: '1.25s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [{ name: 'Combo', desc: 'Has a 20% chance to attack twice in a row when attacking', elite: 'E2' }],
  skills: [
    {
      name: 'Scratch', icon: '/operators/mousse/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: "ATK +75% for the next hit; The target's ATK -40% for 5 seconds", spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +30% for the next hit; The target's ATK -15% for 5 seconds`, spInit: 0, sp: 6 },
        { level: '2', desc: `ATK +35% for the next hit; The target's ATK -15% for 5 seconds`, spInit: 0, sp: 6 },
        { level: '3', desc: `ATK +40% for the next hit; The target's ATK -15% for 5 seconds`, spInit: 0, sp: 6 },
        { level: '4', desc: `ATK +45% for the next hit; The target's ATK -20% for 5 seconds`, spInit: 0, sp: 5 },
        { level: '5', desc: `ATK +50% for the next hit; The target's ATK -20% for 5 seconds`, spInit: 0, sp: 5 },
        { level: '6', desc: `ATK +55% for the next hit; The target's ATK -20% for 5 seconds`, spInit: 0, sp: 5 },
        { level: '7', desc: `ATK +60% for the next hit; The target's ATK -25% for 5 seconds`, spInit: 0, sp: 5 },
        { level: 'M1', desc: `ATK +65% for the next hit; The target's ATK -30% for 5 seconds`, spInit: 0, sp: 5 },
        { level: 'M2', desc: `ATK +70% for the next hit; The target's ATK -35% for 5 seconds`, spInit: 0, sp: 5 },
        { level: 'M3', desc: `ATK +75% for the next hit; The target's ATK -40% for 5 seconds`, spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Fury', icon: '/operators/mousse/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK and DEF +75%', spInit: 45, sp: 80, dur: '40s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK and DEF +27%', spInit: 20, sp: 80, dur: '40s' },
        { level: '2', desc: 'ATK and DEF +30%', spInit: 21, sp: 80, dur: '40s' },
        { level: '3', desc: 'ATK and DEF +33%', spInit: 22, sp: 80, dur: '40s' },
        { level: '4', desc: 'ATK and DEF +36%', spInit: 25, sp: 80, dur: '40s' },
        { level: '5', desc: 'ATK and DEF +39%', spInit: 26, sp: 80, dur: '40s' },
        { level: '6', desc: 'ATK and DEF +42%', spInit: 27, sp: 80, dur: '40s' },
        { level: '7', desc: 'ATK and DEF +45%', spInit: 30, sp: 80, dur: '40s' },
        { level: 'M1', desc: 'ATK and DEF +55%', spInit: 35, sp: 80, dur: '40s' },
        { level: 'M2', desc: 'ATK and DEF +65%', spInit: 40, sp: 80, dur: '40s' },
        { level: 'M3', desc: 'ATK and DEF +75%', spInit: 45, sp: 80, dur: '40s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Mousse's Badge", desc: 'Appointed as Guard Operator to exercise Arts Fighter responsibilities' },
    aftx: { code: 'AFT-X', name: 'Clawcure Set with Duality', stages: [
      { stage: 1, hp: '+160', atk: '+20', effect: 'New trait: ASPD +8 when not blocking an enemy' },
      { stage: 2, hp: '+190', atk: '+30', effect: 'Combo improved: Has a 23% chance to attack twice in a row when attacking' },
      { stage: 3, hp: '+220', atk: '+35', effect: 'Combo improved: Has a 25% chance to attack twice in a row when attacking' },
    ]},
  },
  story: `An apprentice baker from the affluent and Gaulish Selis family, Mousse was sent to Rhodes Island after contracting Oripathy. Her hands are mutated due to her infection, sometimes requiring her to wear a clawed glove to hide the change. The fourth of five siblings and a fan of the super idol Sora, the two-tailed Feline is often accompanied by creatures she refers to as kitties. She lends her service to Rhodes Island as a baker and combatant, making use of her clawed glove to deliver armor-piercing attacks to her foes.`,
  profile: `Mousse was an apprentice baker in Londinium, Victoria when she became infected with Oripathy. Her parents sent her to Rhodes Island for treatment.\nAt her request, Mousse was recruited as an Operator following psychological counseling and a battery of tests. Now a regular logistics staff member, she provides combat support.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n[Cell-Originium Assimilation] 15%\nOperator Mousse showed lesions and other side effects indicative of Oripathy on right hand, with unusual physical signs when symptoms occur.\n[Blood Originium-Crystal Density] 0.4u/L\nThe Operator has been infected for a long while and it has a considerable effect on the patient.`,
    },
    {
      title: 'Archive File 1',
      content: `Operator Mousse was born to a large, affluent family in Londinium, Victoria. Big families with many siblings are common in the bloodline. Her older brothers and sisters had already found their way into the leadership of major corporations, military forces, or Arts research, while Mousse never showed any promise in Originium manipulation or finance, the family's traditional trade. Despite that, her parents didn't love her any less and supported her the best they could. Though frankly, the family didn't have very high hopes for her.\nIn Victorian society, carousing wealthy socialites are the norm, but that just wasn't Mousse.`,
    },
    {
      title: 'Archive File 2',
      content: `Before the Originium panic hit Victoria, the tension in Londinium was already high. Mousse went to work for a bakery called "Valerie," specializing in baking cakes, bread, and afternoon tea snacks.\nMousse could not recall how she got infected, only that when her hands started mutating, her family quickly hid her in an isolated garden. This lonely, painful time was when she met the creatures she came to call "kitties." The "kitties" weren't infected and were her only friends.\nA half-year later, her family contacted Rhodes Island and a few Operators came to the garden for a thorough exam on Mousse. Once the family agreed to pay the appropriate fees for RI Pharmaceuticals to take her in, she was moved to the island for treatment.`,
    },
    {
      title: 'Archive File 3',
      content: `As for the creatures Operator Mousse dubbed "kitties," we have confirmed that they do not pose... imminent danger to Rhodes Island.\nAll speculation regarding these animals has proved to be groundless. They really are ordinary creatures. When Mousse is not around to supervise them, they roam the island, climb up to high places and look down on things below. They seem to leave footprints in the corridor, deliberately announcing their presence with their elegant paws. They have fur and parts matching those of a normal animal, with biological functions to match, as Operators who come across their droppings could attest––and a problem eventually solved with dedicated effort from Mousse, Jessica, Provence and several others.\nMousse has apologized for the trouble... with a sad expression reminiscent of her pets. Given her sincere apology and her promise to train the "kitties," such transgressions have been expunged from her official record.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/arts-fighter-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/mousse/base.png', chibiSrc: '/operators/mousse/chibi.webm', illustrator: 'Iritoa' },
    { id: 'e2', label: 'Elite 2', src: '/operators/mousse/e2.png', chibiSrc: '/operators/mousse/chibi.webm', illustrator: 'Iritoa' },
    { id: 'skin1', label: 'Campfire Cooking Smoke', src: '/operators/mousse/skin1.png', chibiSrc: '/operators/mousse/chibi-skin1.webm', illustrator: 'Iritoa' },
    { id: 'skin2', label: 'Hydration Time', src: '/operators/mousse/skin2.png', chibiSrc: '/operators/mousse/chibi.webm', illustrator: 'Iritoa' },
  ],
  portrait: '/operators/mousse/portrait.png',
  portraitFocus: { y: -1, x: 51, zoom: 299 },
}

export default mousse
