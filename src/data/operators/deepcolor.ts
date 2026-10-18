import type { Operator } from '../../types'

const deepcolor: Operator = {
  name: 'Deepcolor', fileNo: 'AA04', class: 'Supporter', branch: 'Summoner', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Ægir', position: 'Ranged', race: 'Undisclosed', gender: 'Female', birthplace: 'Undisclosed',
  birthday: 'June 12th', height: '163 cm', combatExp: 'None', infectionStatus: 'Non-infected', illustrator: 'REALMBW',
  cv: { JP: 'You Taichi', CN: 'Mihu zzZ', EN: 'Jenny Yokobori', KR: 'Kim Sae-hae' },
  trait: 'Deals Arts damage\nCan use Summons in battles',
  tags: ['Summon'],
  stats: { hp: 1350, atk: 403, def: 125, res: 15, block: 1, cost: 10, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [
      [1,1,1],
      [2,1,1],
      [1,1,1],
    ],
    e1: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
    e2: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Tentacle Summoner', desc: 'Can summon 4 Tentacles to help in combat', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Shadow Tentacle', icon: '/operators/deepcolor/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: "All Tentacles' ATK and DEF +60%; Restores 70 HP per second", spInit: 0, sp: 30, dur: '30s', rank: 'M3', note: 'The HP regeneration is unaffected by healing effect modifiers.',
      levels: [
        { level: '1', desc: `All Tentacles' ATK and DEF +15%; Restores 30 HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: `All Tentacles' ATK and DEF +20%; Restores 30 HP per second`, spInit: 0, sp: 39, dur: '30s' },
        { level: '3', desc: `All Tentacles' ATK and DEF +25%; Restores 30 HP per second`, spInit: 0, sp: 38, dur: '30s' },
        { level: '4', desc: `All Tentacles' ATK and DEF +30%; Restores 40 HP per second`, spInit: 0, sp: 37, dur: '30s' },
        { level: '5', desc: `All Tentacles' ATK and DEF +35%; Restores 40 HP per second`, spInit: 0, sp: 36, dur: '30s' },
        { level: '6', desc: `All Tentacles' ATK and DEF +40%; Restores 40 HP per second`, spInit: 0, sp: 35, dur: '30s' },
        { level: '7', desc: `All Tentacles' ATK and DEF +45%; Restores 50 HP per second`, spInit: 0, sp: 34, dur: '30s' },
        { level: 'M1', desc: `All Tentacles' ATK and DEF +50%; Restores 55 HP per second`, spInit: 0, sp: 33, dur: '30s' },
        { level: 'M2', desc: `All Tentacles' ATK and DEF +55%; Restores 60 HP per second`, spInit: 0, sp: 32, dur: '30s' },
        { level: 'M3', desc: `All Tentacles' ATK and DEF +60%; Restores 70 HP per second`, spInit: 0, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Visual Trap', icon: '/operators/deepcolor/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Range expands; Allies within range obtain 50% Physical Dodge', spInit: 60, sp: 80, dur: '55s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Range expands; Allies within range obtain 25% Physical Dodge', spInit: 40, sp: 80, dur: '25s' },
        { level: '2', desc: 'Range expands; Allies within range obtain 25% Physical Dodge', spInit: 42, sp: 80, dur: '28s' },
        { level: '3', desc: 'Range expands; Allies within range obtain 25% Physical Dodge', spInit: 44, sp: 80, dur: '31s' },
        { level: '4', desc: 'Range expands; Allies within range obtain 30% Physical Dodge', spInit: 46, sp: 80, dur: '34s' },
        { level: '5', desc: 'Range expands; Allies within range obtain 30% Physical Dodge', spInit: 48, sp: 80, dur: '37s' },
        { level: '6', desc: 'Range expands; Allies within range obtain 30% Physical Dodge', spInit: 50, sp: 80, dur: '40s' },
        { level: '7', desc: 'Range expands; Allies within range obtain 35% Physical Dodge', spInit: 52, sp: 80, dur: '43s' },
        { level: 'M1', desc: 'Range expands; Allies within range obtain 40% Physical Dodge', spInit: 54, sp: 80, dur: '47s' },
        { level: 'M2', desc: 'Range expands; Allies within range obtain 45% Physical Dodge', spInit: 56, sp: 80, dur: '51s' },
        { level: 'M3', desc: 'Range expands; Allies within range obtain 50% Physical Dodge', spInit: 60, sp: 80, dur: '55s' },
      ],
      range: [
      [1,1,1,0],
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
      [1,1,1,0],
    ] },
  ],
  modules: {
    original: { code: 'Original', name: "Deepcolor's Badge", desc: 'Appointed as Supporter Operator to exercise Summoner responsibilities' },
    sumy: { code: 'SUM-Y', name: 'Weird Palette', stages: [
      { stage: 1, hp: '+80', atk: '+20', effect: 'Trait improved: Can hold +3 additional summoned units and summoned unit deployment costs are reduced' },
      { stage: 2, hp: '+100', atk: '+30', effect: 'Tentacle Summoner improved: Can summon 4 Tentacles to help in combat. Tentacle Max HP +10%' },
      { stage: 3, hp: '+115', atk: '+35', effect: 'Tentacle Summoner improved: Can summon 4 Tentacles to help in combat. Tentacle Max HP +15%' },
    ]},
  },
  story: `"Where does Deepcolor get her paint?\nIs it ground up ores?\nIs it a product of modern manufacturing?\nI am not sure.\nBut that blue is very unsettling.\nDeeply unsettling.\n\nI watch her swish the paint in her palette together.\nIt forms the color she wants.\nI watch the paint entwine, making little noises.\n\nIs she preparing to paint? Or is this her Originium Arts?\nI am starting to be scared.\n\nShe seems to have noticed how disturbed I am.\nShe smiles and starts comforting me, telling me that this is just a part of her Arts.\nAs she says that, a tiny creature appears on her palette.\nShe tells me that this is her 'assistant.'\n\nThe critter may not seem like it's capable of making any sounds that are less than pleasant, but I seem to be able to hear some strange noises whispered into my ears.\n\nI do have to admit, though. It looks really cute.\nIt's leaping back and forth between the canvas and the paint every now and then.\nIt seems it's helping Deepcolor finish this painting.\n\n'So that's your assistant!'\nI can't help myself but to exclaim.\nShe nods.\nShe's smiling.\n\n......\n\nHow time flies; the painting has already been completed.\nShe hands the painting to me, and I pay her the commission we'd agreed upon.\n\n'You'll love this portrait for sure!'\nShe seems really happy.\n\nOf course, I am happy too. After all, what is there to be unhappy about when a painter hands you a freshly painted portrait, especially one so lifelike?\nThe colors are bright and vivid, and the expression is true and genuine.\nThis is magnificent!\n\nAs I mount the painting, a question suddenly comes to mind.\nThough it was on my mind just moments earlier, I immediately forgot about it when I laid my eyes on the painting.\n\n'Has she ever used any colors other than blue?'\n'Where did that discomforting noise come from?'\n\nWho cares?\nReally, who cares?!\nIt's not nice to pry into somebody else's secrets!\nEven if something might seem off, what does that have anything to do with me?"`,
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/summoner-branch.png', factionIcon: '/icons/factions/aegir.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/deepcolor/base.png', chibiSrc: '/operators/deepcolor/chibi.webm', illustrator: 'REALMBW' },
    { id: 'e2', label: 'Elite 2', src: '/operators/deepcolor/e2.png', chibiSrc: '/operators/deepcolor/chibi.webm', illustrator: 'REALMBW' },
    { id: 'skin1', label: 'Melodic Portrayal', src: '/operators/deepcolor/skin1.png', chibiSrc: '/operators/deepcolor/chibi-skin1.webm', illustrator: 'REALMBW' },
  ],
  portrait: '/operators/deepcolor/portrait.png',
  portraitFocus: { y: -6.3, x: 41.9, zoom: 279 },
  summon: {
    name: 'Tentacle',
    icon: '/operators/deepcolor/tentacle.png',
    position: 'Melee',
    trait: 'Blocks 1 enemy',
    stats: { hp: 2016, atk: 462, def: 335, res: 0, block: 1, cost: 5, aspd: '1.25s', rdp: '10s' },
    range: [[2]],
    note: 'Cannot be actively healed. Deployed through talent Tentacle Summoner. Up to 4 can be deployed at once (7 with SUM-Y module).',
  },
}

export default deepcolor
