import type { Operator } from '../../types'

const togawaSakiko: Operator = {
  name: 'Togawa Sakiko', fileNo: 'AM01', class: 'Guard', branch: 'Lord', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Ave Mujica', position: 'Melee', race: 'Undisclosed', gender: 'Female', birthplace: 'Undisclosed',
  birthday: 'February 14th', height: '155 cm', combatExp: 'None', infectionStatus: 'Non-infected', illustrator: '〇亻',
  cv: { JP: 'Kanon Takao', CN: '', EN: '', KR: '' },
  trait: 'Can launch Ranged Attacks that deal 80% of normal ATK',
  tags: ['DPS', 'Crossover'],
  stats: { hp: 2356, atk: 785, def: 425, res: 10, block: 2, cost: 20, aspd: '1.3s', rdp: '70s' },
  range: {
    base: [
      [0,1,1],
      [2,1,1],
      [0,1,1],
    ],
    e1: [
      [0,1,1,1],
      [2,1,1,1],
      [0,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': '■■' },
  talents: [
    { name: 'Notes of Ode', desc: 'Sakiko Togawa can continuously attack, creating notes that pursue enemies; notes disappear shortly after floating out of her Attack Range; for every note on the field, Ave Mujica members ignore 3% DEF and 2% RES of the enemies (stacks up to 10 times)', elite: 'E2' },
    { name: 'Do Not Fear Forgetting', desc: 'Fever +3 whenever dealing damage to enemies; if another Ave Mujica member\'s Attack Range overlaps with Sakiko Togawa\'s, their attack range will be treated as an extension of her own; Operators within her Attack Range have ASPD +12', elite: 'E2' },
  ],
  skills: [
    {
      name: 'New Moon Awakening', icon: '/operators/togawa-sakiko/skill-1.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Performs 8 notes; the Arts damage dealt by each note starts at 100% ATK but gradually reduces to 5%; Can store 2 charges; releases 1 charge automatically when charges are full', spInit: 0, sp: 3, rank: 'M3',
      note: 'During Fever, this skill is continuously activated.',
      levels: [
        { level: '1', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 50% of ATK but gradually reduces to 3%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 5 },
        { level: '2', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 55% of ATK but gradually reduces to 3%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 5 },
        { level: '3', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 60% of ATK but gradually reduces to 3%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 5 },
        { level: '4', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 65% of ATK but gradually reduces to 4%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 4 },
        { level: '5', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 70% of ATK but gradually reduces to 4%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 4 },
        { level: '6', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 75% of ATK but gradually reduces to 4%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 4 },
        { level: '7', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 80% of ATK but gradually reduces to 4%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 4 },
        { level: 'M1', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 85% of ATK but gradually reduces to 5%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 3 },
        { level: 'M2', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 90% of ATK but gradually reduces to 5%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 3 },
        { level: 'M3', desc: `Performs 8 notes; the Arts damage dealt by each note starts at 100% of ATK but gradually reduces to 5%;
Can store 2 charges; releases 1 charge automatically when charges are full`, spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Full Moon Masquerade', icon: '/operators/togawa-sakiko/skill-2.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Swaps between performing on the piano (starting) and organ timbres. Piano: ATK +110%, notes fly faster, notes pierce enemies, dealing Physical damage. Organ: ASPD +140, notes deal Arts damage and fly slower. During Fever, the current timbre deals double strikes', spInit: 0, sp: 5, rank: 'M3',
      levels: [
        { level: '1', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +40%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +60, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: '2', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +45%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +65, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: '3', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +50%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +70, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: '4', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +60%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +80, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: '5', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +65%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +90, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: '6', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +70%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +100, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: '7', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +75%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +110, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: 'M1', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +80%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +120, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: 'M2', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +95%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +130, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
        { level: 'M3', desc: `Swap between performing on the piano (starting) and organ timbres.
Piano: ATK +110%, notes fly faster; notes pierce enemies, dealing Physical damage
Organ: ASPD +140, notes deal Arts damage and fly slower
During Fever, the current timbre deals double strikes`, spInit: 0, sp: 5 },
      ],
    },
    {
      name: 'Crescent Moon Echoes', icon: '/operators/togawa-sakiko/skill-3.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 220% of ATK as Physical and Arts damage respectively, which homes in on the enemy with the highest RES and DEF respectively. During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over', spInit: 34, sp: 42, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 140% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 28, sp: 48, dur: '25s' },
        { level: '2', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 145% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 28, sp: 48, dur: '25s' },
        { level: '3', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 150% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 28, sp: 48, dur: '25s' },
        { level: '4', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 155% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 28, sp: 47, dur: '25s' },
        { level: '5', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 160% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 29, sp: 47, dur: '25s' },
        { level: '6', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 170% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 29, sp: 47, dur: '25s' },
        { level: '7', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 180% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 30, sp: 46, dur: '25s' },
        { level: 'M1', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 190% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 31, sp: 45, dur: '25s' },
        { level: 'M2', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 205% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 32, sp: 44, dur: '25s' },
        { level: 'M3', desc: `Attack Range expands, performs on both piano and organ timbres at once, each timbre creating 2 notes that deal 220% of ATK as Physical and Arts damage respectively, which home in on the enemy with the highest RES or DEF respectively
During Fever, Ave Mujica members who receive fatal damage will not retreat until Fever is over`, spInit: 34, sp: 42, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Togawa Sakiko's Badge", desc: "Operator Sakiko Togawa has demonstrated a remarkable aptitude for wide-range enemy suppression in coordination with fellow members of Ave Mujica.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Guard Operator during field operations to exercise Lord responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named." },
    lory: { code: 'LOR-Y', name: 'A Silent Pact', stages: [
      { stage: 1, hp: '+180', atk: '+38', aspd: '+5', effect: 'New trait: ASPD +12 when there are 2 or more enemies in attack range' },
      { stage: 2, hp: '+250', atk: '+54', aspd: '+6', effect: 'Notes of Ode improved: Ave Mujica members ignore 4% DEF and 2% RES per note on field (stacks up to 12 times); when skill is active, ranged attacks no longer deal reduced damage' },
      { stage: 3, hp: '+300', atk: '+63', aspd: '+7', effect: 'Notes of Ode improved: Ave Mujica members ignore 5% DEF and 2.5% RES per note on field (stacks up to 12 times); when skill is active, ranged attacks no longer deal reduced damage' },
    ]},
  },
  profile: `Sakiko Togawa is the keyboardist of Ave Mujica. She lodges aboard Rhodes Island together with the rest of the band, and actively takes on tasks of all manner aboard the ship. Her musical training and dignified manner are incontrovertible proof of her excellent upbringing.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nSakiko Togawa shows no signs of Originium infection.\n\n[Blood Originium-Crystal Density] Undisclosed\nThe Medical Department has agreed not to disclose the relevant data.`,
    },
    {
      title: 'Archive File 1',
      content: `We took in the five members of Ave Mujica at Iris's request, her wish being that we provide them temporary refuge. Given their youth and how they were stranded somewhere unfamiliar so far from home, we communicated our intent that they get some much-needed rest. However, all of them expressed that they would rather help us in exchange for their room and board, and Sakiko in particular made clear her strong desire to undertake any and all work here.`,
    },
    {
      title: 'Archive File 2',
      content: `Sakiko is an active participant in a variety of work aboard the landship. Normally dignified and elegant, she shows no qualms about taking up simple communications assignments or manual labor tasks such as cleaning and transporting items; she carries out all her jobs without complaint. It is as though she already had a fair amount of experience with such work before coming to Rhodes Island. During work, she is always sunny and positive, while also showing care and concern for those around her. Her kind smile has left a deep impression on many operators.`,
    },
    {
      title: 'Archive File 3',
      content: `Sakiko came to Rhodes Island from the Castle of Dreams, and is almost never seen without the other members of Ave Mujica. The five of them, each thinking in different ways and pursuing different things, have been able to come together as a single band and work towards the same goal because of Sakiko.\n\nSakiko makes mistakes too, of course, but her strength is the ability to make decisions without fear. There would be no Ave Mujica without Sakiko's gentle strength.`,
    },
    {
      title: 'Archive File 4',
      content: `From the information we have, Sakiko was brought up in high society and received an excellent education from a young age, growing into a kind and affable young lady as a result. She formed her own band in emulation of a group of senior students who left a deep impression on her. Then misfortune struck; her father was forced to take the blame and resign after his company fell victim to fraud, and Sakiko was forced to quit her beloved band and work part-time odd jobs to support her broken household thereafter.\n\nStrong-minded and refusing to give up, Sakiko would not let others see her weakness, and formed Ave Mujica in order to cut ties with her past. In spite of this, the new band was not as smooth a venture as Sakiko envisioned, and conflict arose between an inflexible Sakiko and the other band members, who would not open themselves up to her. Through all the turmoil, however, Sakiko was surely the one most mired in suffering, squarely blaming herself and proceeding to repeat her past mistakes.\n\nAll that said, Sakiko has seemed somewhat changed from that in her time aboard Rhodes Island. One wonders if she owes it to her experiences at the Castle of Dreams.`,
    },
    {
      title: 'Promotion Record',
      content: `[Iris's Notes]\nSakiko is kind-hearted and forward-facing, cares deeply for her friends, and takes it upon herself to grapple with whatever faces her. As a result, however, she has a tendency to lose sight of what is happening around her, and in so doing, hurt her friends unawares.\n\nSakiko's conviction in her own decisions is firm. In her mind, she must bear the weight of the other members' lives on her shoulders, and running from this responsibility is not an option.\n\nThis is something far, far harder than she imagines it might be.\n\nShe can still be immature in places; she can still be weak and fearful, anxious that her decisions might hurt others. Moreover, she still harbors doubts that she truly can shoulder her bandmates' lives.\n\nIn the Castle of Dreams, Sakiko finally learned to believe in her own ability to fulfill her promises, but one must eventually wake up no matter how sweet the dream; she must come face to face with reality.\n\nSakiko will not remember what transpired here when she wakes from the dream and goes back to her old life. But I believe that a part of her experiences in the dream will stay with her and give her courage—\n\nThe courage for her to overcome all challenges, and continue to carry Ave Mujica atop her shoulders.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/lord-branch.png', factionIcon: '/icons/factions/ave-mujica.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/togawa-sakiko/base.png', chibiSrc: '/operators/togawa-sakiko/chibi.webm', chibiMoveSrc: '/operators/togawa-sakiko/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1, offsetXPercent: -1.2, offsetYPercent: -0.3 }, illustrator: '〇亻' },
    { id: 'e2', label: 'Elite 2', src: '/operators/togawa-sakiko/e2.png', chibiSrc: '/operators/togawa-sakiko/chibi.webm', chibiMoveSrc: '/operators/togawa-sakiko/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1, offsetXPercent: -1.2, offsetYPercent: -0.3 }, illustrator: '〇亻' },
    { id: 'skin1', label: 'Master of Melodia', src: '/operators/togawa-sakiko/skin1.png', chibiSrc: '/operators/togawa-sakiko/chibi-skin1.webm', chibiMoveSrc: '/operators/togawa-sakiko/chibi-move-skin1.webm', chibiFraming: { scale: 1.5, offsetXPercent: -16.7, offsetYPercent: -0.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: -3.5, offsetYPercent: -0.3 }, illustrator: 'Yukuso' },
  ],
  portrait: '/operators/togawa-sakiko/portrait.png',
  portraitFocus: { y: -9.2, x: 19.1, zoom: 297 },
}

export default togawaSakiko
