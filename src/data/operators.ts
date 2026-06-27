import type { Operator } from '../types'

export const OPERATORS: Operator[] = [
  {
    name: 'Rosmontis', fileNo: 'RE45', class: 'Sniper', branch: 'Flinger', rarity: 6, level: 90, elite: 2, trust: 200,
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
      { id: 'base', label: 'Base', src: '/rosmontis-base.png', chibiSrc: '/rosmontis-chibi.webm' },
      { id: 'e2', label: 'Elite 2', src: '/rosmontis-e2.png', chibiSrc: '/rosmontis-chibi.webm' },
      { id: 'skin1', label: 'Become Anew', src: '/rosmontis-skin1.png', chibiSrc: '/rosmontis-chibi-skin1.webm' },
      { id: 'skin2', label: 'An Airy Dream', src: '/rosmontis-skin2.png', chibiSrc: '/rosmontis-chibi.webm' },
    ],
  },
  {
    name: 'Mon3tr', fileNo: 'RI08', class: 'Medic', branch: 'Chain Medic', rarity: 6, level: 90, elite: 2, trust: 200,
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
      { id: 'base', label: 'Base', src: '/mon3tr-base.png', chibiSrc: '/mon3tr-chibi.webm' },
      { id: 'e2', label: 'Elite 2', src: '/mon3tr-e2.png', chibiSrc: '/mon3tr-chibi.webm' },
      { id: 'skin1', label: 'Sharpened Blades', src: '/mon3tr-skin1.png', chibiSrc: '/mon3tr-chibi-skin1.webm' },
    ],
  },
  {
    name: 'Logos', fileNo: 'RE03', class: 'Caster', branch: 'Core Caster', rarity: 6, level: 90, elite: 2, trust: 200,
    faction: 'Elite Op', position: 'Ranged', race: 'Sarkaz', gender: 'Male', birthplace: 'Kazdel',
    birthday: 'September 5th', height: '178 cm', combatExp: '12 years', infectionStatus: 'Infected', illustrator: 'Skade',
    cv: { JP: 'Jun Fukuyama', CN: 'Liang Dawei', EN: 'Kyle McCarley', KR: 'Son Su-ho' },
    trait: 'Deals Arts damage',
    stats: { hp: 1663, atk: 761, def: 119, res: 20, block: 1, cost: 21, aspd: '1.6s', rdp: '70s' },
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
    },
    physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Outstanding', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Outstanding', 'Originium Arts': '■■' },
    talents: [
      { name: 'Lexical Evolution', desc: 'When attacking a target, there is a 40% chance to deal 60% ATK as Arts damage to a random target in attack range and Slow it for 0.8s', elite: 'E2' },
      { name: 'Requiem Aeternam', desc: 'Attacks inflict -10 RES and Arts damage taken +150 on targets for 5s', elite: 'E2' },
    ],
    skills: [
      { name: 'Perish', icon: '/logos-skill-1.png', activation: 'Auto', recovery: 'Auto', desc: 'Attack range expands and ATK +100%. Immediately defeats enemies in range with HP below 150% of Logos\' ATK, and deals Arts damage equal to the HP of the defeated unit to another random target', spInit: 0, sp: 60, rank: 'M3', note: 'The instant defeat deals 9999999 True damage that ignores dodge, Shield, and Barrier. Unlimited duration.' },
      { name: 'Synecdoche', icon: '/logos-skill-2.png', activation: 'Manual', recovery: 'Auto', desc: 'RES +70. Attacks lock on to a target, dealing 75% ATK as Arts damage every 0.5s. Gradually increases damage up to 3x and reduces Movement Speed to 40% (max after 5s). Resets on skill interrupt or target defeat', spInit: 20, sp: 30, dur: '20s', rank: 'M3' },
      { name: 'Extended Acuity', icon: '/logos-skill-3.png', activation: 'Manual', recovery: 'Auto', desc: 'Attack range expands, ATK +300%, attacks strike 4 targets at once; enemy projectile speed in attack range is greatly reduced, and all projectiles are removed when skill expires', spInit: 30, sp: 45, dur: '30s', rank: 'M3', note: 'Reduces enemy projectile speed by 95%. Also works on Gramophone projectiles.' },
    ],
    modules: {
      original: { code: 'Original', name: "Logos's Badge", desc: 'Appointed as Caster Operator to exercise Core Caster responsibilities' },
      ccry: { code: 'CCR-Y', name: 'Semantics Paradigm Encyclopedia', stages: [
        { stage: 1, atk: '+35', res: '+5', effect: 'New trait: Gain 1 SP when normal attacks hit an elite or leader enemy' },
        { stage: 2, atk: '+50', res: '+5', effect: 'Lexical Evolution improved: 40% chance to deal 63% ATK as Arts damage to 2 random targets in attack range and Slow them for 0.8s' },
        { stage: 3, atk: '+60', res: '+5', effect: 'Lexical Evolution improved: 40% chance to deal 65% ATK as Arts damage to 2 random targets in attack range and Slow them for 0.8s' },
      ]},
      ccrd: { code: 'CCR-Δ', name: 'A Pen Collection from the Convallis', stages: [
        { stage: 1, hp: '+100', atk: '+36', effect: 'New trait: When dealing Arts damage, deals an additional 8% as Necrosis damage' },
        { stage: 2, hp: '+140', atk: '+54', effect: 'Lexical Evolution improved: 50% chance to deal 60% ATK as Arts damage to a random target and Slow for 0.8s. If under Necrosis burst, also deals Elemental damage equal to 40% ATK' },
        { stage: 3, hp: '+170', atk: '+67', effect: 'Lexical Evolution improved: 60% chance to deal 60% ATK as Arts damage to a random target and Slow for 0.8s. If under Necrosis burst, also deals Elemental damage equal to 60% ATK' },
      ]},
    },
    lore: `A long time ago, when the young river bed was not yet covered in waves.\nA lone traveler had lost his way in the Convallis.\nHe sipped on dew and fed on dust, until a beautiful Banshee appeared before him.\n\n"Why do you not ask the sun where you should go, traveler?"\n"My eyes are ruined, and I wish not to gaze up at a foreign land where I may not dwell."\n\n"Why do you reject the guide's invitation to lead you to a new home, traveler?"\n"He is the embodiment of lies. With his honeyed words he stole my bag and my walking stick."\n\n"Yet you speak to me. Do you not fear my curse, that I would feed upon you?"\n"Sing a dirge for me, then. Let my hungry memories gaze upon home for the last time."\n\n"No, wretched-yet-brave one, come with me, and let the song of the Banshees lend you sight and heal your wounds."\n\nThe enchanting mist kisses the traveler's lips and takes his hand, leading him into the depths of the Convallis.`,
    classIcon: '/caster-class.png', branchIcon: '/core-caster-branch.png', factionIcon: '/elite-op.png',
    skins: [
      { id: 'base', label: 'Base', src: '/logos-base.png', chibiSrc: '/logos-chibi.webm' },
      { id: 'e2', label: 'Elite 2', src: '/logos-e2.png', chibiSrc: '/logos-chibi.webm' },
      { id: 'skin1', label: 'Radiant Serenity', src: '/logos-skin1.png', chibiSrc: '/logos-chibi-skin1.webm' },
    ],
  },
  {
    name: 'Młynar', fileNo: 'KZ08', class: 'Guard', branch: 'Liberator', rarity: 6, level: 90, elite: 2, trust: 200,
    faction: 'Kazimierz', position: 'Melee', race: 'Kuranta', gender: 'Male', birthplace: 'Kazimierz',
    birthday: 'December 3rd', height: '191 cm', combatExp: '17 years', infectionStatus: 'Non-infected', illustrator: 'Ryuuzaki Ichi',
    cv: { JP: 'Rikiya Koyama', CN: 'Wang Yuhang', EN: 'Anthony Howell', KR: 'Choi Hyun-soo' },
    trait: 'Normally does not attack and has 0 Block; When skill is inactive, ATK gradually increases up to +200% over 40 seconds. ATK is reset when the skill ends',
    stats: { hp: 4266, atk: 385, def: 502, res: 15, block: 3, cost: 12, aspd: '1.2s', rdp: '70s' },
    range: {
      base: [
        [0,1],
        [2,1],
        [0,1],
      ],
      e1: [
        [0,1],
        [2,1],
        [0,1],
      ],
    },
    physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Outstanding', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Excellent' },
    talents: [
      { name: 'Wanderer', desc: 'ATK increased to 110% when attacking. If there are 3 or more enemies nearby, ATK increased to 115%, and take 15% less damage', elite: 'E2' },
      { name: 'Unmoved', desc: 'More likely to be attacked while deployed. When any Kazimierz Operator is attacked, reflect 15% of Młynar\'s ATK as True Damage', elite: 'E2' },
    ],
    skills: [
      { name: 'Unvoiced Anger', icon: '/mlynar-skill-1.png', activation: 'Manual', recovery: 'Auto', desc: 'Attacks deal 200% ATK as Physical damage, DEF +60%', spInit: 15, sp: 30, dur: '30s', rank: 'M3' },
      { name: 'Unresolved Sorrow', icon: '/mlynar-skill-2.png', activation: 'Manual', recovery: 'Auto', desc: 'Attack interval increases, attack range increased, attacks deal 190% ATK as Physical damage twice. If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Can be manually deactivated', spInit: 10, sp: 25, dur: '20s', rank: 'M3', note: 'Attack interval increased by 0.3s. Trait lock does not trigger on hostile device kills.' },
      { name: 'Unbrilliant Glory', icon: '/mlynar-skill-3.png', activation: 'Manual', recovery: 'Auto', desc: 'Attack range increased, Trait effect increases by 2x (Trait multiplier -10% per enemy defeated), attacks hit 5 targets for 180% ATK as Physical damage. When enemy in range attacked by Kazimierz Operator, deal extra 12% of Młynar\'s ATK as True damage', spInit: 20, sp: 42, dur: '28s', rank: 'M3', note: 'Can target aerial enemies. True damage dealt before attack damage, considered dealt by Młynar.' },
    ],
    modules: {
      original: { code: 'Original', name: "Młynar's Badge", desc: 'Appointed as Guard Operator to exercise Liberator responsibilities' },
      libx: { code: 'LIB-X', name: '"Man in Scabbard"', stages: [
        { stage: 1, hp: '+225', atk: '+18', aspd: '+5', effect: 'New trait: Directly gains +100% charge after deployment' },
        { stage: 2, hp: '+270', atk: '+27', aspd: '+6', effect: 'Wanderer improved: ATK increased to 115% when attacking. If 3+ enemies nearby, ATK increased to 120%, and take 20% less damage' },
        { stage: 3, hp: '+360', atk: '+35', aspd: '+7', effect: 'Wanderer improved: ATK increased to 120% when attacking. If 3+ enemies nearby, ATK increased to 125%, and take 25% less damage' },
      ]},
    },
    lore: `[An old letter]\n\nI don't care, Father. Must knights prove themselves through victory? The men in the arenas never seem more brilliant simply because they manage to maul more of their opponents.\n\nKnights should stand with those in distress, those with nothing but the clothes on their backs. This alone I will always believe in. When you stand with the weak, failure is hardly unheard of. Rather than relishing in victory, I would rather believe that the spirit of the knighthood also encompasses the endurance of failure.\n\nIt's just as our family motto goes, "Fear neither hardship nor darkness."\n\n...\n\nPerhaps Młynar was merely thinking in silence, or perhaps he mumbled these words to himself.\n\nThanks to the excellent soundproof car windows manufactured by Mieszko, no one heard a word he spoke in that underground garage. He silently returns the sword into its scabbard, and takes out a stack of newspapers that had previously acted as a seat cushion. He reads them without thinking, with no concern for their date, or where he had previously started or stopped reading. He fills himself with their words, like inflating a balloon man.`,
    classIcon: '/guard-class.png', branchIcon: '/liberator-branch.png', factionIcon: '/kazimierz.png',
    skins: [
      { id: 'base', label: 'Base', src: '/mlynar-base.png', chibiSrc: '/mlynar-chibi.webm' },
      { id: 'e2', label: 'Elite 2', src: '/mlynar-e2.png', chibiSrc: '/mlynar-chibi.webm' },
      { id: 'skin1', label: 'W Dali', src: '/mlynar-skin1.png', chibiSrc: '/mlynar-chibi-skin1.webm' },
      { id: 'skin2', label: 'Roar Against The Wilds', src: '/mlynar-skin2.png', chibiSrc: '/mlynar-chibi-skin2.webm' },
    ],
  },
]
