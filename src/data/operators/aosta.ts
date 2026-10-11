import type { Operator } from '../../types'

const aosta: Operator = {
  name: 'Aosta', fileNo: 'SR28', class: 'Sniper', branch: 'Spreadshooter', rarity: 5, level: 70, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: "Chiave's Gang", position: 'Ranged', race: 'Lupo', gender: 'Male', birthplace: 'Siracusa',
  birthday: 'May 9th', height: '177 cm', combatExp: '5 years', infectionStatus: 'Crystals have appeared on his body. Infection confirmed by medical examination.', illustrator: 'infukun',
  cv: { JP: 'Tatsuhisa Suzuki', CN: 'Wang Ning (Credited as "Kimi" in Global)', EN: 'Gianandrea Muià', KR: 'Lee Chang-min' },
  trait: 'Attacks all enemies within range, and deals 150% damage to enemies in the row directly in front of this unit.',
  tags: ['AoE'],
  stats: { hp: 2376, atk: 756, def: 192, res: 0, block: 1, cost: 31, aspd: '2.3s', rdp: '70s' },
  range: { base: [[0, 1, 0], [2, 1, 1], [0, 1, 0]], e1: [[0, 1, 1], [2, 1, 1], [0, 1, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Sharp Nails', desc: 'Attacks inflict Bleed to unblocked enemies, dealing 12% ATK as Arts damage (unaffected by Trait) every second for 3 seconds', elite: 'E1' },
    { name: 'Sharp Nails', desc: 'Attacks inflict Bleed to unblocked enemies, dealing 14% (+2%) ATK as Arts damage (unaffected by Trait) every second for 3 seconds', elite: 'E1 (Potential 5)' },
    { name: 'Sharp Nails', desc: 'Attacks inflict Bleed to unblocked enemies, dealing 18% ATK as Arts damage (unaffected by Trait) every second for 3 seconds', elite: 'E2' },
    { name: 'Sharp Nails', desc: 'Attacks inflict Bleed to unblocked enemies, dealing 20% (+2%) ATK as Arts damage (unaffected by Trait) every second for 3 seconds', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Swift Strike γ', icon: '/operators/aosta/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +45%; ASPD +45', spInit: 15, sp: 35, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +20%; ASPD +20`, spInit: 0, sp: 45, dur: '35s' },
        { level: '2', desc: `ATK +22%; ASPD +20`, spInit: 0, sp: 44, dur: '35s' },
        { level: '3', desc: `ATK +24%; ASPD +20`, spInit: 0, sp: 43, dur: '35s' },
        { level: '4', desc: `ATK +27%; ASPD +25`, spInit: 5, sp: 42, dur: '35s' },
        { level: '5', desc: `ATK +29%; ASPD +25`, spInit: 5, sp: 41, dur: '35s' },
        { level: '6', desc: `ATK +31%; ASPD +25`, spInit: 5, sp: 40, dur: '35s' },
        { level: '7', desc: `ATK +34%; ASPD +35`, spInit: 10, sp: 39, dur: '35s' },
        { level: 'M1', desc: `ATK +37%; ASPD +35`, spInit: 10, sp: 38, dur: '35s' },
        { level: 'M2', desc: `ATK +40%; ASPD +35`, spInit: 10, sp: 37, dur: '35s' },
        { level: 'M3', desc: `ATK +45%; ASPD +45`, spInit: 15, sp: 35, dur: '35s' },
      ],
    },
    {
      name: 'Shadow Nails', icon: '/operators/aosta/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Attack Interval increases, ATK +70% and every attack Binds the targets for 1.5 seconds. The damage multiplier of this unit's Talent is doubled", spInit: 25, sp: 50, dur: '25s', rank: 'M3',
      note: "Shadow Nails increases Aosta's attack interval by 50%, extending it to 3.45 seconds (before modifiers).",
      levels: [
        { level: '1', desc: `Attack Interval increases, ATK +20% and every attack Binds the targets for 0.8 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 11, sp: 60, dur: '20s' },
        { level: '2', desc: `Attack Interval increases, ATK +25% and every attack Binds the targets for 0.8 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 12, sp: 59, dur: '20s' },
        { level: '3', desc: `Attack Interval increases, ATK +30% and every attack Binds the targets for 0.8 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 13, sp: 58, dur: '20s' },
        { level: '4', desc: `Attack Interval increases, ATK +35% and every attack Binds the targets for 1 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 15, sp: 57, dur: '21s' },
        { level: '5', desc: `Attack Interval increases, ATK +40% and every attack Binds the targets for 1 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 16, sp: 56, dur: '21s' },
        { level: '6', desc: `Attack Interval increases, ATK +45% and every attack Binds the targets for 1 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 17, sp: 55, dur: '21s' },
        { level: '7', desc: `Attack Interval increases, ATK +50% and every attack Binds the targets for 1.2 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 19, sp: 54, dur: '22s' },
        { level: 'M1', desc: `Attack Interval increases, ATK +55% and every attack Binds the targets for 1.2 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 21, sp: 53, dur: '23s' },
        { level: 'M2', desc: `Attack Interval increases, ATK +60% and every attack Binds the targets for 1.2 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 23, sp: 52, dur: '24s' },
        { level: 'M3', desc: `Attack Interval increases, ATK +70% and every attack Binds the targets for 1.5 seconds. The damage multiplier of this unit's Talent is doubled`, spInit: 25, sp: 50, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Aosta's Badge", desc: 'Appointed as Sniper Operator to exercise Spreadshooter responsibilities' },
    rprx: { code: 'RPR-X', name: 'Emergency Kit', stages: [
      { stage: 1, hp: '+120', atk: '+35', effect: 'Trait improved: Attacks all enemies within range, and deals 160% damage to enemies in the row directly in front of this unit' },
      { stage: 2, hp: '+170', atk: '+44', effect: 'Sharp Nails improved: Attacks inflict Bleed to unblocked enemies, dealing 23% ATK as Arts damage (unaffected by Trait) every second for 4 seconds' },
      { stage: 3, hp: '+200', atk: '+50', effect: 'Sharp Nails improved: Attacks inflict Bleed to unblocked enemies, dealing 25% ATK as Arts damage (unaffected by Trait) every second for 5 seconds' },
    ]},
  },
  story: `Aosta, Sniper Operator of Rhodes Island, patiently waits for an opportunity to strike.`,
  profile: `Aosta, former Siracusan mafioso, later became a member of Chiave's gang.\nAfter a particular incident, he joined Rhodes Island along with his leader, Chiave, and is now active as a front-line attacker.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 5%\nSmall traces of infection are visible on the surface of the body.\n\n[Blood Originium-Crystal Density] 0.23u/L\nOperator Aosta didn't begin treatment until his infection had spread to a considerable extent. All other indicators are normal, which goes to show he leads a healthy lifestyle. Thanks to this, his condition isn't very severe.` },
    { title: 'Archive File 1', content: `Although he tends to keep quiet, Aosta is a dependable Lupo whose demeanor is almost impeccable.\nHe may sound a little street with his vocabulary at times, but it's hard to believe he used to be one of Chiave's underlings.\nHe's cautious, and he thinks his problems through. That has earned him excellent appraisals from all the operators he's teamed up with.` },
    { title: 'Archive File 2', content: `According to Aosta, his work ethic is a product of his time with Chiave.\nIndeed, Aosta is careful, if you're feeling generous, but less charitably, he's way too anxious. It's astonishing to see someone as young as him possess such a pessimistic personality, but when you look at Chiave, this perhaps may not be so strange.\nChiave made all the decisions about what to do, Aosta decided how to go about doing them, and Broca did all the hard work. It's clear they made it this far in no small part thanks to Aosta's meticulous planning.` },
    { title: 'Archive File 3', content: `Aosta is the most skilled in handicraft of this trio.\nMore specifically, he has experience in everything from simple origami to complex sewing. If there's anything he hasn't tried his hand at making before, he's able to make something fairly close after just a few glances.\nIt's a talent rarely seen here in Rhodes Island—we've also got no plans to hire a full-time tailor here—and that has made him hugely popular among our female operators. He's become far busier outside of his deployments. It doesn't seem like he minds at all, though. He's taken on a variety of requests, and he even seems to be enjoying the work.` },
    { title: 'Archive File 4', content: `Out of the three, Aosta is the only one who has an understanding of Siracusa's inner workings as a country.\nEven though he grew up in Siracusa and never traveled abroad, he still understood Siracusa's uniqueness. As we all know, the way Siracusa operates is fundamentally different from how other countries are run. There, the families run the show behind all public affairs.\nThanks to this unique characteristic, life in Siracusa is quite strange even in this diverse world, and Aosta understands clearly that the Siracusan lifestyle is not what people of other origins would consider normal.\nIt's difficult to say what makes a normal lifestyle and what doesn't. However, when the authorities avoid getting involved with the wars between families, it's safe to say that life in Siracusa can hardly be called normal.\nAosta knows so much about the environment he grew up in, and still manages to harbor such doubts about the place. You don't come across people like that often. The good thing about this is that he was able to adjust to life in Rhodes Island very quickly. Unlike Chiave, who took a very long time just to accept and follow the rules here.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/spreadshooter-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/aosta/base.png', chibiSrc: '/operators/aosta/chibi.webm', illustrator: 'infukun' },
    { id: 'e2', label: 'Elite 2', src: '/operators/aosta/e2.png', chibiSrc: '/operators/aosta/chibi.webm', illustrator: 'infukun' },
    { id: 'skin1', label: 'Light Gun Adjuster', src: '/operators/aosta/skin1.png', chibiSrc: '/operators/aosta/chibi-skin1.webm', illustrator: 'infukun' },
  ],
  portrait: '/operators/aosta/portrait.png',
  portraitFocus: { y: -5, x: 33, zoom: 295 }
}

export default aosta
