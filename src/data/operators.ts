import type { Operator } from '../types'

export const OPERATORS: Operator[] = [
  {
    name: 'Rosmontis', class: 'Sniper', branch: 'Flinger', rarity: 6, level: 90, elite: 2, trust: 200,
    faction: 'Elite Op', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Columbia',
    birthday: 'July 6th', height: '142 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '唯@W',
    cv: { JP: 'Yui Ogura', CN: 'Zhang Ruoyu', EN: 'Hayden Daviau', KR: 'Yoon Eun-seo' },
    trait: 'Attacks deal two instances of Physical damage to ground enemies in a small area (The second instance is a shockwave that has half the normal ATK)',
    stats: { hp: 1944, atk: 748, def: 275, res: 15, block: 1, cost: 25, aspd: '2.1s', rdp: '70s' },
    range: {
      base: [
        [1,1,1,1],
        [2,1,1,1],
        [1,1,1,1],
      ],
      e1: [
        [0,0,1,1,1],
        [0,1,1,1,1],
        [2,1,1,1,1],
        [0,1,1,1,1],
        [0,0,1,1,1],
      ],
    },
    physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Outstanding' },
    talents: [
      { name: 'Armaments of Annihilation', desc: 'Attacks ignore 160 DEF', elite: 'E2' },
      { name: 'Stable Esthesia', desc: 'When deployed, grants +8% ATK to this unit and a random deployed Caster Operator', elite: 'E2' },
    ],
    skills: [
      { name: 'Expanded Cognition', icon: '/skill-1.png', activation: 'Auto', recovery: 'Offensive', desc: 'The next attack deals an additional hit equal to 180% ATK as Arts damage', spInit: 0, sp: 2, rank: 'M3' },
      { name: 'Nociceptor Inhibition', icon: '/skill-2.png', activation: 'Manual', recovery: 'Auto', desc: 'ATK +55%, splash area expands, each attack causes 2 additional shockwaves; 20% chance to Stun for 1.5s', spInit: 20, sp: 30, dur: '40s', rank: 'M3', note: 'Increases attack interval by 50% (3.15s). Splash radius extends to 1.5 tiles.' },
      { name: '"As You Wish"', icon: '/skill-3.png', activation: 'Manual', recovery: 'Auto', desc: 'ATK +75%, attacks up to 2 blocked enemies; deploys 2 Tactical Equipment, Stun 3s, DEF -160', spInit: 35, sp: 60, dur: '30s', rank: 'M3', note: 'Reduces attack interval by 50% (1.05s). Can target blocked aerial enemies. Tactical Equipment prioritizes tiles near high-aggression enemies.' },
    ],
    modules: {
      original: { code: 'Original', name: "Rosmontis's Badge", desc: 'Appointed as Sniper Operator to exercise Flinger responsibilities' },
      bomx: { code: 'BOM-X', name: '"Notes"', stages: [
        { stage: 1, hp: '+175', atk: '+55', effect: 'Trait improved: Attacks deal three instances of Physical damage to ground enemies in a small area (The second and third instances are shockwaves that have half the normal ATK)' },
        { stage: 2, hp: '+250', atk: '+65', effect: 'Armaments of Annihilation improved: Attacks ignore 190 DEF' },
        { stage: 3, hp: '+275', atk: '+75', effect: 'Armaments of Annihilation improved: Attacks ignore 220 DEF' },
      ]},
      isw: { code: 'ISW-α', name: "Rosmontis's Specialized Badge", stages: [
        { stage: 1, atk: '+45', aspd: '+5', effect: 'New trait: In Integrated Strategies, attacks deal 1 additional instance of 100% ATK as Arts damage' },
        { stage: 2, atk: '+70', aspd: '+6', effect: 'Stable Esthesia improved: Grants +8% ATK to self and a random Caster; in IS, also benefits from Caster Collectibles, and when any Sniper or Caster is deployed, 1 Tactical Equipment is summoned' },
        { stage: 3, atk: '+90', aspd: '+7', effect: 'Stable Esthesia improved: Grants +8% ATK to self and a random Caster; in IS, also benefits from Caster Collectibles, and when any Sniper or Caster is deployed, 1 stronger Tactical Equipment with special effects is summoned' },
      ]},
    },
    lore: `"Outcast, I'm a little concerned. After returning from the Chernobog core city, Rosmontis has been carrying out her missions with extreme aggression."\n\n"Isn't it normal to adjust the mission objectives in our line of work? Pith, you oughta trust Rosmontis's judgement."\n\n"Have you heard? Surviving witnesses refer to her as the 'Scourge of Minos.' Fortunately, the girl herself doesn't remember any of it."\n\n"Memories aren't always useful experiences, sometimes they can be heavy burdens. Since her opinions aren't colored by her own prejudices, Rosmontis might be even more impartial than we are. She's like a mirror that can't be stained."\n\n"She's awake now, Pith. We can ask her ourselves."\n\nHello Outcast.\n\n"Hello, Rosmontis."\n\nAre you leaving, Outcast?\n\n"Yes, I'm off to Victoria for a little something. But Pith is right, I'll be gone, Kal'tsit will be gone, and someday, we'll all be gone."\n\nWill Amiya be gone too?\n\n"Could be. Nobody knows the future. Judge Rosmontis, Your Little Honor, can you look after yourself for us?"\n\nYes, I promise. I promise everyone that I'll write everything down. I remember the stories you and Pith told me. I won't forget.\n\nIf I ever turn bad... no, no matter what I become in the future. I'll document it all, I'll look over it carefully.\n\nThe last one I will judge will be me, myself.`,
    classIcon: '/sniper-class.png', branchIcon: '/flinger-branch.png', factionIcon: '/elite-op.png',
    skins: [
      { id: 'base', label: 'Base', src: '/rosmontis-base.png' },
      { id: 'e2', label: 'Elite 2', src: '/rosmontis-e2.png' },
      { id: 'skin1', label: 'Become Anew', src: '/rosmontis-skin1.png' },
      { id: 'skin2', label: 'An Airy Dream', src: '/rosmontis-skin2.png' },
    ],
  },
  {
    name: 'Mon3tr', class: 'Medic', branch: 'Chain Medic', rarity: 6, level: 90, elite: 2, trust: 200,
    faction: 'Rhodes Island', position: 'Ranged', race: 'Undisclosed', gender: 'Female', birthplace: 'Rhodes Island',
    birthday: 'July 25th', height: '158 cm', combatExp: 'Undisclosed', infectionStatus: 'Non-infected', illustrator: '伍秋秋秋秋',
    cv: { JP: 'Fūka Izumi', CN: 'Chen Yixuan', EN: 'Molly Harris', KR: 'Lee Myung-ho' },
    trait: 'Restores HP of allies, bouncing between 3 allies. Healing reduced by 25% per bounce.',
    stats: { hp: 2235, atk: 558, def: 221, res: 0, block: 1, cost: 18, aspd: '2.85s', rdp: '70s' },
    range: {
      base: [
        [1,1,1],
        [1,2,1,1],
        [1,1,1],
      ],
      e1: [
        [1,1,1,1],
        [1,2,1,1],
        [1,1,1,1],
      ],
    },
    physicalExam: { 'Physical Strength': 'Flawed', Mobility: 'Outstanding', Endurance: 'Flawed', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Flawed' },
    talents: [
      { name: 'Self-Repair', desc: 'Can deploy a Reconstruction on ground within attack range; grants surrounding allies ATK +15%; Reconstruction performs additional healing bounce that does not weaken', elite: 'E2' },
      { name: 'Tactical Coordination', desc: 'Whenever Mon3tr or Reconstruction heals a target, grants Mon3tr and target ASPD +20 for 10 seconds', elite: 'E2' },
    ],
    skills: [
      { name: 'Stratagem: Hyperpressurized Link', icon: '/mon3tr-skill-1.png', activation: 'Auto', recovery: 'Offensive', desc: 'The next heal is increased to 200% of ATK, and bounce count per heal +1', spInit: 0, sp: 2, rank: 'M3' },
      { name: 'Stratagem: Overload', icon: '/mon3tr-skill-2.png', activation: 'Manual', recovery: 'Offensive', desc: 'Prioritizes healing Reconstruction; whenever it is healed, it performs a bouncing heal; Talent 2 effect increases to 2.8 times', spInit: 13, sp: 15, dur: '30s', rank: 'M3', note: 'Reconstruction heal triggers 0.6s after initial heal. Can heal Reconstruction at full HP.' },
      { name: 'Stratagem: Meltdown', icon: '/mon3tr-skill-3.png', activation: 'Manual', recovery: 'Offensive', desc: 'Moves to Reconstruction position. ATK +330%, Block +2, Max HP +5000, attacks all blocked enemies with True damage, heals self for 50% ATK. Loses 80 HP/s. Returns on end or lethal damage.', spInit: 11, sp: 15, dur: '25s', rank: 'M3', note: 'Attack interval reduced by 1.5s. Survives lethal damage with 1 HP. Reconstruction retreats when used.' },
    ],
    modules: {
      original: { code: 'Original', name: "Mon3tr's Badge", desc: 'Appointed as Medic Operator to exercise Chain Medic responsibilities' },
      xahx: { code: 'XAH-X', name: 'Ten Thousand Years of Memories', stages: [
        { stage: 1, atk: '+40', def: '+30', effect: 'Trait improved: Healing reduced by 15% per bounce (instead of 25%)' },
        { stage: 2, atk: '+55', def: '+35', effect: 'Self-Repair improved: Reconstruction grants surrounding allies ATK +20%' },
        { stage: 3, atk: '+65', def: '+40', effect: 'Self-Repair improved: Reconstruction grants surrounding allies ATK +25%; next bounce also does not weaken' },
      ]},
    },
    lore: `"You're hurt."\n\nAs you leaf through the documents, the paper slices open your skin at one particularly tricky angle.\n\nIt's no big deal. You didn't even feel it.\n\nAt least, not until Mon3tr comes in with a new stack of documents.\n\nAt first, she simply stops and looks around, left and right, like she senses something wrong in the office.\n\nWhen she grabs your wrist, snatches away your pen, and flips your hand over, you finally see the cut on your index finger.\n\nAfter using a cotton swab to disinfect the wound, she gently yet deftly plasters on a band-aid. Once done, she cups your hand in hers, mumbling something to herself as she softly pats your palm.\n\n"Does it still hurt?"\n\nYou shake your head, showing her your formerly-injured finger as you give it a good rub with another, doing your best to assuage her worries.\n\n"But my memories tell me that bleeding hurts a lot. What does it feel like?"\n\nHer heart is now calmed, but her tone of voice takes a turn for the strange as she "warns" you that any bodily abnormalities must be reported to her ASAP.`,
    classIcon: '/medic-class.png', branchIcon: '/chain-medic-branch.png', factionIcon: '/rhodes-island.png',
    skins: [
      { id: 'base', label: 'Base', src: '/mon3tr-base.png' },
      { id: 'e2', label: 'Elite 2', src: '/mon3tr-e2.png' },
      { id: 'skin1', label: 'Sharpened Blades', src: '/mon3tr-skin1.png' },
    ],
  },
]
