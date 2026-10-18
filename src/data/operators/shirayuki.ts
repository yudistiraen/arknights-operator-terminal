import type { Operator } from '../../types'

const shirayuki: Operator = {
  name: 'Shirayuki', fileNo: 'LM10', class: 'Sniper', branch: 'Artilleryman', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Higashi', position: 'Ranged', race: 'Anaty', gender: 'Female', birthplace: 'Higashi',
  birthday: 'July 20th', height: '154 cm', combatExp: '3 years', infectionStatus: 'Confirmed non-infected by medical examination.', illustrator: '阿鬼',
  cv: { JP: 'Nana Harumura', CN: 'Ke Zhong', EN: 'Rae Lim', KR: 'Min Ah' },
  trait: 'Deals AOE Physical damage',
  tags: ['AoE', 'Slow'],
  stats: { hp: 1630, atk: 867, def: 100, res: 0, block: 1, cost: 27, aspd: '2.8s', rdp: '70s' },
  range: { base: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]], e1: [[1, 1, 1, 1, 0], [2, 1, 1, 1, 1], [1, 1, 1, 1, 0]], e2: [[1, 1, 1, 1, 1], [2, 1, 1, 1, 1], [1, 1, 1, 1, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Heavy Shuriken', desc: 'Attack Interval increases slightly, but ATK +20%', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Shuriken', icon: '/operators/shirayuki/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Range +2 tiles', spInit: 10, sp: 15, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: `Range +2 tiles`, spInit: 0, sp: 32, dur: '25s' },
        { level: '2', desc: `Range +2 tiles`, spInit: 0, sp: 31, dur: '25s' },
        { level: '3', desc: `Range +2 tiles`, spInit: 0, sp: 30, dur: '25s' },
        { level: '4', desc: `Range +2 tiles`, spInit: 5, sp: 27, dur: '25s' },
        { level: '5', desc: `Range +2 tiles`, spInit: 5, sp: 26, dur: '25s' },
        { level: '6', desc: `Range +2 tiles`, spInit: 5, sp: 25, dur: '25s' },
        { level: '7', desc: `Range +2 tiles`, spInit: 10, sp: 22, dur: '25s' },
        { level: 'M1', desc: `Range +2 tiles`, spInit: 10, sp: 21, dur: '25s' },
        { level: 'M2', desc: `Range +2 tiles`, spInit: 10, sp: 20, dur: '25s' },
        { level: 'M3', desc: `Range +2 tiles`, spInit: 10, sp: 15, dur: '25s' },
      ],
    },
    {
      name: 'Fatal Shuriken', icon: '/operators/shirayuki/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Throws giant spinning shurikens, the target's Movement Speed reduces by 35% for a short time and dealing 80% of ATK Arts damage to the target per second", spInit: 0, sp: 25, dur: '25s', rank: 'M3',
      note: 'The shuriken has a hitbox of 0.75 tiles and can damage enemies in its path as it travels.',
      levels: [
        { level: '1', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 22% for a short time and dealing 50% of ATK Arts damage to the target per second`, spInit: 0, sp: 35, dur: '25s' },
        { level: '2', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 23% for a short time and dealing 50% of ATK Arts damage to the target per second`, spInit: 0, sp: 34, dur: '25s' },
        { level: '3', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 24% for a short time and dealing 50% of ATK Arts damage to the target per second`, spInit: 0, sp: 33, dur: '25s' },
        { level: '4', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 25% for a short time and dealing 60% of ATK Arts damage to the target per second`, spInit: 0, sp: 32, dur: '25s' },
        { level: '5', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 26% for a short time and dealing 60% of ATK Arts damage to the target per second`, spInit: 0, sp: 31, dur: '25s' },
        { level: '6', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 27% for a short time and dealing 60% of ATK Arts damage to the target per second`, spInit: 0, sp: 30, dur: '25s' },
        { level: '7', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 28% for a short time and dealing 70% of ATK Arts damage to the target per second`, spInit: 0, sp: 29, dur: '25s' },
        { level: 'M1', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 30% for a short time and dealing 70% of ATK Arts damage to the target per second`, spInit: 0, sp: 28, dur: '25s' },
        { level: 'M2', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 32% for a short time and dealing 70% of ATK Arts damage to the target per second`, spInit: 0, sp: 27, dur: '25s' },
        { level: 'M3', desc: `Throws giant spinning shurikens, the target's Movement Speed reduces by 35% for a short time and dealing 80% of ATK Arts damage to the target per second`, spInit: 0, sp: 25, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Shirayuki's Badge", desc: 'Appointed as Sniper Operator to exercise Artilleryman responsibilities' },
    arty: { code: 'ART-Y', name: 'Shuriken', stages: [
      { stage: 1, hp: '+80', aspd: '+3', effect: 'New trait: Attacks ignore 100 DEF' },
      { stage: 2, hp: '+120', atk: '+20', aspd: '+4', effect: 'New trait: Improves own SP recovery rate by +0.2/second for 10 seconds after defeating an enemy' },
      { stage: 3, hp: '+160', atk: '+30', aspd: '+5', effect: 'New trait: Improves own SP recovery rate by +0.3/second for 10 seconds after defeating an enemy' },
    ]},
  },
  story: `Shirayuki is an Anaty shinobi who previously served as a warrior for the southern Mitsumoto clan of Higashi. Following a failed assassination attempt onto Princess Fumizuki of the northern Kougon clan, she admired her determination and decided to follow her until the very end, ultimately becoming her praetorian guard following Fumizuki's marriage with Lungmen's chief executive Wei Yenwu. Under Fumizuki's recommendation, Shirayuki is currently lending her service to Rhodes Island to support and oversee Ch'en during Lungmen's cooperation with R.I. With a giant shuriken and her past experience as a war veteran, she is truly a stealthy but dangerous assassin on the battlefield.`,
  profile: `Formerly the personal bodyguard of Lady Fumizuki, wife of Lungmen's Chief Wei Yenwu, Shirayuki was sent to Rhodes Island to serve the Doctor in the same role, after the Lungmen Guard Department partnered with the company. She uses large shurikens as her weapons of choice, and is well-versed in covert ops and intelligence gathering. She protects the Doctor from behind the scenes.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator Shirayuki showed no symptoms of Oripathy.\n\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Shirayuki rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `A reserved ninja who is incredibly succinct with her words, never saying two words when just one will do.\nYou never know where she is until she is needed by the Doctor with unerring, possibly even eerie, dependability.\nHer hobby is apparently watching snow by the coast, but it's not known if her preference is the coast, watching snow, or a necessary combination of the two.` },
    { title: 'Archive File 2', content: `Large shurikens are Shirayuki's weapon of choice.\nThere are many shapes and sizes of shurikens, but no matter the type, throwing weapons are always difficult to wield effectively.\nUndoubtedly, Shirayuki is an expert at using them, exhibiting accuracy and lethality that most normal people would find impossible given the unwieldiness of these weapons.` },
    { title: 'Archive File 3', content: `The ninja is commonly held as one of the national symbols of the Far East.\nThese mysterious assassins can allegedly walk on walls, burrow underground, and kill from impossible angles. They are said to value loyalty above all else.\nA ninja, upon pledging fealty, will serve his lord unwaveringly. And that is exactly what Dr. Kal'tsit is having an issue with--ShiraYuki's loyalty lies with Madam Fumizuki, not the good Doctor at Rhodes Island.` },
    { title: 'Archive File 4', content: `Of course, the true purpose of ShiraYuki's presence at Rhodes Island is not to protect the Doctor, that much is certain. That was just a pretext for Rhodes Island to accept her.\nStill, that does raise some questions.\nEven though it's ostensibly a partnership, Lungmen and Rhodes Island hold different views and objectives. Still, the Governor sent off his wife's personal bodyguard to protect the Doctor. Whether for surveillance or a show of power, it was very blunt, even unnecessary.\nSupposedly, Madam Fumizuki doesn't involve herself in politics, but it's hard to imagine she has no ulterior motive with this move.\nSo then, what are ShiraYuki's orders after all?` },
    { title: 'Promotion Record', content: `The princess said blind loyalty is nigh-impossible to find. But here you are, and I like it.\n—Shirayuki` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/artilleryman-branch.png', factionIcon: '/icons/factions/higashi.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/shirayuki/base.png', chibiSrc: '/operators/shirayuki/chibi.webm', illustrator: '阿鬼' },
    { id: 'e2', label: 'Elite 2', src: '/operators/shirayuki/e2.png', chibiSrc: '/operators/shirayuki/chibi.webm', illustrator: '阿鬼' },
    { id: 'skin1', label: 'Wind of Breaking Blade', src: '/operators/shirayuki/skin1.png', chibiSrc: '/operators/shirayuki/chibi-skin1.webm', illustrator: '阿鬼' },
  ],
  portrait: '/operators/shirayuki/portrait.png',
  portraitFocus: { y: -7.9, x: 4.7, zoom: 265 },
}

export default shirayuki
