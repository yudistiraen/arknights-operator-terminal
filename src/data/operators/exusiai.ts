import type { Operator, OperatorAlter } from '../../types'

const exusiai: Operator = {
  name: 'Exusiai', fileNo: 'PL03', class: 'Sniper', branch: 'Marksman', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Penguin Logistics', position: 'Ranged', race: 'Sankta', gender: 'Female', birthplace: 'Laterano',
  birthday: 'December 24th', height: '159 cm', combatExp: '2 years', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: '幻象黑兔',
  cv: { JP: 'Manaka Iwami', CN: 'Shujin Cai', EN: 'Shannon Tarbet', KR: 'Lee Ji-hyun' },
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1673, atk: 540, def: 161, res: 0, block: 1, cost: 14, aspd: '1s', rdp: '70s' },
  range: {
    base: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
    e1: [
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
    ],
    e2: [
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Fast Cartridge', desc: 'ASPD +12', elite: 'E2' },
    { name: "Angel's Blessings", desc: 'ATK +6%; Max HP +10%; The same buff is given to a random ally when Exusiai is deployed', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Charging Mode', icon: '/operators/exusiai/skill-1.png', activation: 'Auto', recovery: 'Offensive',
      desc: 'Shoots 3 times in a row in the next attack, dealing 145% of ATK damage with every shot', spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: 'Shoots 3 times in a row in the next attack, dealing 105% of ATK damage with every shot', spInit: 0, sp: 5 },
        { level: '2', desc: 'Shoots 3 times in a row in the next attack, dealing 107% of ATK damage with every shot', spInit: 0, sp: 5 },
        { level: '3', desc: 'Shoots 3 times in a row in the next attack, dealing 109% of ATK damage with every shot', spInit: 0, sp: 5 },
        { level: '4', desc: 'Shoots 3 times in a row in the next attack, dealing 113% of ATK damage with every shot', spInit: 0, sp: 4 },
        { level: '5', desc: 'Shoots 3 times in a row in the next attack, dealing 115% of ATK damage with every shot', spInit: 0, sp: 4 },
        { level: '6', desc: 'Shoots 3 times in a row in the next attack, dealing 117% of ATK damage with every shot', spInit: 0, sp: 4 },
        { level: '7', desc: 'Shoots 3 times in a row in the next attack, dealing 121% of ATK damage with every shot', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Shoots 3 times in a row in the next attack, dealing 129% of ATK damage with every shot', spInit: 0, sp: 4 },
        { level: 'M2', desc: 'Shoots 3 times in a row in the next attack, dealing 137% of ATK damage with every shot', spInit: 0, sp: 4 },
        { level: 'M3', desc: 'Shoots 3 times in a row in the next attack, dealing 145% of ATK damage with every shot', spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Shooting Mode', icon: '/operators/exusiai/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Shoots 4 times in a row, dealing 125% of ATK damage with every shot', spInit: 25, sp: 35, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Shoots 4 times in a row, dealing 100% of ATK damage with every shot', spInit: 15, sp: 45, dur: '15s' },
        { level: '2', desc: 'Shoots 4 times in a row, dealing 100% of ATK damage with every shot', spInit: 15, sp: 44, dur: '15s' },
        { level: '3', desc: 'Shoots 4 times in a row, dealing 100% of ATK damage with every shot', spInit: 15, sp: 43, dur: '15s' },
        { level: '4', desc: 'Shoots 4 times in a row, dealing 105% of ATK damage with every shot', spInit: 15, sp: 42, dur: '15s' },
        { level: '5', desc: 'Shoots 4 times in a row, dealing 105% of ATK damage with every shot', spInit: 15, sp: 41, dur: '15s' },
        { level: '6', desc: 'Shoots 4 times in a row, dealing 105% of ATK damage with every shot', spInit: 15, sp: 40, dur: '15s' },
        { level: '7', desc: 'Shoots 4 times in a row, dealing 110% of ATK damage with every shot', spInit: 18, sp: 39, dur: '15s' },
        { level: 'M1', desc: 'Shoots 4 times in a row, dealing 115% of ATK damage with every shot', spInit: 20, sp: 38, dur: '15s' },
        { level: 'M2', desc: 'Shoots 4 times in a row, dealing 120% of ATK damage with every shot', spInit: 22, sp: 37, dur: '15s' },
        { level: 'M3', desc: 'Shoots 4 times in a row, dealing 125% of ATK damage with every shot', spInit: 25, sp: 35, dur: '15s' },
      ],
    },
    {
      name: 'Overloading Mode', icon: '/operators/exusiai/skill-3.png', activation: 'Auto', recovery: 'Auto',
      desc: 'Shoots 5 times in a row; Slight Attack Interval reduction; ATK increases to 110%\nAutomatically activated', spInit: 20, sp: 30, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Shoots 5 times in a row\nAutomatically activated', spInit: 20, sp: 50, dur: '15s' },
        { level: '2', desc: 'Shoots 5 times in a row\nAutomatically activated', spInit: 20, sp: 48, dur: '15s' },
        { level: '3', desc: 'Shoots 5 times in a row\nAutomatically activated', spInit: 20, sp: 46, dur: '15s' },
        { level: '4', desc: 'Shoots 5 times in a row; Very minor Attack Interval reduction\nAutomatically activated', spInit: 20, sp: 44, dur: '15s' },
        { level: '5', desc: 'Shoots 5 times in a row; Very minor Attack Interval reduction\nAutomatically activated', spInit: 20, sp: 42, dur: '15s' },
        { level: '6', desc: 'Shoots 5 times in a row; Very minor Attack Interval reduction\nAutomatically activated', spInit: 20, sp: 40, dur: '15s' },
        { level: '7', desc: 'Shoots 5 times in a row; Minor Attack Interval reduction\nAutomatically activated', spInit: 20, sp: 38, dur: '15s' },
        { level: 'M1', desc: 'Shoots 5 times in a row; Minor Attack Interval reduction; ATK increases to 103%\nAutomatically activated', spInit: 20, sp: 36, dur: '15s' },
        { level: 'M2', desc: 'Shoots 5 times in a row; Minor Attack Interval reduction; ATK increases to 107%\nAutomatically activated', spInit: 20, sp: 34, dur: '15s' },
        { level: 'M3', desc: 'Shoots 5 times in a row; Slight Attack Interval reduction; ATK increases to 110%\nAutomatically activated', spInit: 20, sp: 30, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Exusiai's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    marx: { code: 'MAR-X', name: "Exusiai's Surprise", stages: [
      { stage: 1, hp: '+110', atk: '+27', effect: 'New trait: Increases ATK to 110% when attacking aerial targets' },
      { stage: 2, hp: '+160', atk: '+35', effect: "Angel's Blessings improved: ATK +6%; Max HP +10%; same buff given to two random allies when deployed" },
      { stage: 3, hp: '+190', atk: '+41', effect: "Angel's Blessings improved: ATK +8%; Max HP +14%; same buff given to two random allies when deployed" },
    ]},
    mary: { code: 'MAR-Y', name: 'Welcome to Penguin Logistics', stages: [
      { stage: 1, atk: '+26', def: '+26', effect: 'New trait: When there are ground enemies within range, ASPD +8' },
      { stage: 2, atk: '+37', def: '+37', effect: "Fast Cartridge improved: ASPD +12; continuous attacks ignore up to 150 DEF (each attack +6, resets after 5s without attacking)" },
      { stage: 3, atk: '+43', def: '+43', effect: "Fast Cartridge improved: ASPD +12; continuous attacks ignore up to 250 DEF (each attack +10, resets after 5s without attacking)" },
    ]},
  },
  story: `The red-headed, good-looking, lovely, and cheerful Sankta from Laterano Lemuel, better known by her codename "Exusiai," is working for Penguin Logistics as an armed courier/escort, and is known for her love of apple pies, parties, and guns. With her trusty submachine gun firing Originium bullets (or rubber bullets to avoid legal trouble) at a rapid rate toward her enemies, Exusiai can be counted upon to provide supporting fire. Still, her naughty and playful attitude is sometimes extreme. In the past, for example, she literally bombed her school no less than 17 times in over three years!\n\nExusiai's optimism and cheerfulness, inherited from her parents, act as the means to overcome her life's obstacles. Even after her older sister Lemuen fell into a coma following a mission that went wrong, Exusiai appears to have moved on with her life. Having known Mostima since childhood, Exusiai left Laterano to find her when the former went off the grid after becoming a Legatus. Mostima proved to be elusive, intentionally avoiding a direct meeting with Exusiai, and the latter inadvertently traveled around Terra while following former's trail. When Mostima went to Lungmen to join Penguin Logistics, Exusiai embarked on a journey to Lungmen and joined them as well. She patiently waited for Mostima's return for almost four years, in order to learn more about the incident behind her sister's injury and Mostima's fall.`,
  profile: `Exusiai is a citizen of Laterano and as such, is entitled to the privileges listed in Clauses 1-13 of the Laterano Constitution. She is an employee of Penguin Logistics who specializes in covert communication, armed escort, and other undercover activities. We suspect she is a Messenger. While contracted with Penguin Logistics, she serves as a liaison to Rhodes Island, assisting us with our operations.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. As this time, this Operator is believed to be non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator Exusiai showed no symptoms of Oripathy.\n\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Exusiai sometimes delivers packages with Originium content, but it has not caused infection to date.`,
    },
    {
      title: 'Archive File 1',
      content: `She is different from most Laterano in that she is an unabashed optimist.\nProficient in various means of entertainment, she's the member of the team who always manages to keep herself upbeat, no matter the situation.\nHer generosity ends up being the primary reason why she's broke all the time.`,
    },
    {
      title: 'Archive File 2',
      content: `The gun is a unique mid and long-range weapon rumored to be discovered by Laterano, thereby becoming one of its symbols.\nIts killing power isn't exceptional, but it's better suited to the average Laterano citizen's temperament than cold steel, thus becoming the weapon of choice in Laterano. Everyone now carries at least one for personal protection.\nExusiai may seem laid-back, but her marksmanship ranks among the top at Rhodes Island. On one hand, she lacks the attention span for things other than maintaining and operating her gun. On the other hand, her innate marksmanship talents, including visual tracking and timing, are the envy of all sharpshooters.`,
    },
    {
      title: 'Archive File 3',
      content: `While Exusiai goes against what anyone might expect of a Laterano, what's even more unbelievable is that she never endured a difficult childhood thanks to a peculiar hobby, nor did she decide to rebel due to some unfortunate circumstance.\nShe loves only happy things and grew up a happy person, simple as that.\nJudging from her background, maybe the Laterano aren't as close-minded as popularly portrayed...`,
    },
    {
      title: 'Archive File 4',
      content: `Even with a halo and wings, people often forget Exusiai is a Laterano. Only when the topic swirls around religion does she react with the piety so characteristic of the Laterano.\nFew places outside Laterano hold such primordial, pristine faith, and because of that, very few notice Exusiai's piety.\nBut those who do will realize the same person holds such progressive values and at the same time retains reverence for her faith, without any apparent contradictions.\nAlso, only by observing Exusiai from this perspective could one realize that behind her wicked smirk lies an pure soul.`,
    },
    {
      title: 'Promotion Record',
      content: `Exusiai is my polar opposite. She seems to get along fine with anyone, but lets very few people close to her.\n— Texas`,
    },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/penguin-logistics.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/exusiai/base.png', chibiSrc: '/operators/exusiai/chibi.webm', chibiMoveSrc: '/operators/exusiai/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'e2', label: 'Elite 2', src: '/operators/exusiai/e2.png', chibiSrc: '/operators/exusiai/chibi.webm', chibiMoveSrc: '/operators/exusiai/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'skin1', label: 'City Rider', src: '/operators/exusiai/skin1.png', chibiSrc: '/operators/exusiai/chibi-skin1.webm', chibiMoveSrc: '/operators/exusiai/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'skin2', label: 'Wild Operation', src: '/operators/exusiai/skin2.png', chibiSrc: '/operators/exusiai/chibi-skin2.webm', chibiMoveSrc: '/operators/exusiai/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'skin3', label: 'Midnight Delivery', src: '/operators/exusiai/skin3.png', chibiSrc: '/operators/exusiai/chibi-skin3.webm', chibiMoveSrc: '/operators/exusiai/chibi-move-skin3.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '尾鱼' },
  ],
  portrait: '/operators/exusiai/portrait.png',
  portraitFocus: { y: 0, x: 28, zoom: 330 },
}

const exusiaiNewCovenant: OperatorAlter = {
  name: 'Exusiai the New Covenant', fileNo: 'PL08', class: 'Specialist', branch: 'Geek', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Limited Headhunting - Celebration'],
  position: 'Ranged', trait: 'Continually loses HP over time',
  tags: ['DPS', 'Support'],
  illustrator: '幻象黑兔',
  stats: { hp: 2150, atk: 708, def: 150, res: 10, block: 1, cost: 13, aspd: '1.3s', rdp: '70s' },
  range: {
    base: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
    e1: [
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
    ],
    e2: [
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Firepower FM', desc: "When deployed, recovers 6% HP whenever an allied Operator consumes ammo; in addition, there is a 25% chance to bombard the enemies within that Operator's Attack Range, dealing 150% of Exusiai the New Covenant's ATK as Physical splash damage", elite: 'E1' },
    { name: 'Covenant of Bullets', desc: 'When deployed, Operators with ammo-type skills gain ATK +9%; effect is doubled for [Laterano] Operators', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Sweeping the Skies', icon: '/operators/exusiai/new-covenant/skill-1.png', activation: 'Auto', recovery: 'Offensive',
      desc: 'Each attack deals 250% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 8, sp: 12, rank: 'M3',
      levels: [
        { level: '1', desc: 'Each attack deals 150% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 0, sp: 12 },
        { level: '2', desc: 'Each attack deals 160% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 0, sp: 12 },
        { level: '3', desc: 'Each attack deals 170% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 0, sp: 12 },
        { level: '4', desc: 'Each attack deals 180% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 3, sp: 12 },
        { level: '5', desc: 'Each attack deals 190% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 3, sp: 12 },
        { level: '6', desc: 'Each attack deals 200% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 3, sp: 12 },
        { level: '7', desc: 'Each attack deals 210% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 5, sp: 12 },
        { level: 'M1', desc: 'Each attack deals 220% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 6, sp: 12 },
        { level: 'M2', desc: 'Each attack deals 230% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 7, sp: 12 },
        { level: 'M3', desc: 'Each attack deals 250% of ATK as Physical damage, and prioritizes attacking aerial units; if manually deactivated, fires all remaining ammo at random enemies within Attack Range\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 8, sp: 12 },
      ],
    },
    {
      name: 'Shootoholic', icon: '/operators/exusiai/new-covenant/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 250% Max HP which decays; Attack Interval reduces, each attack deals 300% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 25, sp: 30, rank: 'M3',
      levels: [
        { level: '1', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 150% Max HP which decays; Attack Interval reduces, each attack deals 200% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 20, sp: 30 },
        { level: '2', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 150% Max HP which decays; Attack Interval reduces, each attack deals 210% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 20, sp: 30 },
        { level: '3', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 150% Max HP which decays; Attack Interval reduces, each attack deals 220% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 20, sp: 30 },
        { level: '4', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 180% Max HP which decays; Attack Interval reduces, each attack deals 230% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 22, sp: 30 },
        { level: '5', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 180% Max HP which decays; Attack Interval reduces, each attack deals 240% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 22, sp: 30 },
        { level: '6', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 180% Max HP which decays; Attack Interval reduces, each attack deals 250% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 22, sp: 30 },
        { level: '7', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 200% Max HP which decays; Attack Interval reduces, each attack deals 270% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 23, sp: 30 },
        { level: 'M1', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 220% Max HP which decays; Attack Interval reduces, each attack deals 280% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 23, sp: 30 },
        { level: 'M2', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 230% Max HP which decays; Attack Interval reduces, each attack deals 290% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 23, sp: 30 },
        { level: 'M3', desc: "Steals 70 ASPD from 1 allied Operator within Attack Range (lasts until skill ends or Exusiai the New Covenant leaves the field), and both this unit and the targeted Operator gain a Barrier equal to 250% Max HP which decays; Attack Interval reduces, each attack deals 300% of ATK as Physical damage\nSkill activation grants 35 ammo and the skill ends when all ammo is used (Can manually deactivate skill); if ASPD is successfully Stolen, grants an additional 5 ammo", spInit: 25, sp: 30 },
      ],
    },
    {
      name: 'Guaranteed Success!', icon: '/operators/exusiai/new-covenant/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: 'ATK +30%, and attacks hit 5 times for 160% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 30, sp: 35, rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +10%, and attacks hit 5 times for 100% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 20, sp: 35 },
        { level: '2', desc: 'ATK +12%, and attacks hit 5 times for 105% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 20, sp: 35 },
        { level: '3', desc: 'ATK +13%, and attacks hit 5 times for 110% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 20, sp: 35 },
        { level: '4', desc: 'ATK +15%, and attacks hit 5 times for 115% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 22, sp: 35 },
        { level: '5', desc: 'ATK +16%, and attacks hit 5 times for 120% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 22, sp: 35 },
        { level: '6', desc: 'ATK +18%, and attacks hit 5 times for 125% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 22, sp: 35 },
        { level: '7', desc: 'ATK +20%, and attacks hit 5 times for 135% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 25, sp: 35 },
        { level: 'M1', desc: 'ATK +22%, and attacks hit 5 times for 150% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 27, sp: 35 },
        { level: 'M2', desc: 'ATK +25%, and attacks hit 5 times for 155% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 28, sp: 35 },
        { level: 'M3', desc: 'ATK +30%, and attacks hit 5 times for 160% of ATK per hit; if Delivery Coordinates are on the field, deals a single instance of Physical splash damage equal to 250% of ATK at its location and deploys the ground Operator with the longest Redeployment Time there, granting that Operator 6 SP\nGains Delivery Coordinates after deployment; skill activation grants 50 ammo, each attack consumes 5 ammo, and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 30, sp: 35 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Exusiai the New Covenant's Badge", desc: 'Appointed as Specialist Operator to exercise Geek responsibilities' },
    geex: { code: 'GEE-X', name: 'Convenience Kit for New Friends', stages: [
      { stage: 1, hp: '+100', atk: '+50', effect: 'New trait: Increases SP recovery rate by +0.25/second while above 80% HP' },
      { stage: 2, hp: '+160', atk: '+58', effect: "Firepower FM improved: 30% chance to bombard, dealing 165% of ATK as Physical splash damage" },
      { stage: 3, hp: '+210', atk: '+65', effect: "Firepower FM improved: 35% chance to bombard, dealing 185% of ATK as Physical splash damage" },
    ]},
  },
  summon: {
    name: 'Delivery Coordinates',
    icon: '/operators/exusiai/new-covenant/summon-delivery-coordinates.png',
    position: 'Low',
    trait: 'Cannot be attacked or healed. Deployed by Guaranteed Success! — when the skill ends, deploys the ground Operator with the longest Redeployment Time at its location.',
    stats: { hp: 3000, atk: 0, def: 0, res: 0, block: 0, cost: 0, aspd: '5s', rdp: '70s' },
    range: [[2]],
    note: 'Invulnerable, cannot be actively healed. Summoned by Guaranteed Success! at Elite 2.',
  },
  profile: `Exusiai is a citizen of Laterano entitled to the rights listed in Clauses 1 through 13 of the Laterano Constitution. She has provided communications and armed escort services to Rhodes Island during the contract period. At her request, her registration has been updated to reflect her current status as a veteran employee of Penguin Logistics and owner-founder of Apple Pie Logistics in Laterano.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Exusiai shows no signs of Originium infections.\n\n[Blood-Originium Crystal Density] 0.13u/L\nOperator Exusiai sometimes delivers packages with Originium content, but it has not caused infection to date.`,
    },
    {
      title: 'Archive File 1',
      content: `[St. Theodore's Comprehensive School Board Meeting Minutes]\nMostima claims that Lemuel 'accidentally' burned her middle school diploma in Lungmen, and that she was 'forced' to complete the university prep course in high school. The graduation ceremony she held for herself before she left the Holy City had a significant impact on the school's order and the public security responsibilities of the Pontifica Cohors... However, we were all witnesses to the excitement that day, when she hacked a hundred confessionals and had them charge into the campus to join her performance. There is no doubt that Lemuel submitted an outstanding 'final project'.\nConsidering her grades and respect for ceremony, the board has decided to request permission from the Curia to issue her a graduation diploma.\nExusiai was born to an ordinary family in Laterano. Normally, she would have completed her prep course and gone to university, studying intercity net security or faith assistive engineering. In other words, lived a proper, fulfilling life, like millions of her Lateran brethren. That is, if she had not left Laterano at the age of seventeen.\nIn order to discover the truth behind Lemuen's injuries, she followed the newly-appointed Legatus Mostima out of the Holy City. For the next two years, Mostima avoided directly meeting Exusiai, perhaps because she had yet to recover from the trauma of becoming fallen, or perhaps she was simply unsure how to approach the sister of her friend. However, they never cut off their relationship completely, and traveled the sands of Sargon and the salt flats of Iberia, through one city after another, until they arrived at Lungmen and met Penguin Logistics.\nExusiai always speaks of this with an air of 'life outside Laterano is so much fun,' as though she had simply gone to an amusement park, but we all know how difficult the adjustment can be for a Sankta leaving the Holy City for the first time—away from her kin, her empathy and Signa Creditorum useless, and her living habits decidedly out-of-place. When she got her job at Penguin Logistics, she began meeting many new people, and dealt with things she could not have imagined before. The changes that occurred in Exusiai's life may pale in comparison to the tragedies that take place on Terra every day, but would be more than enough to turn the faith of a former denizen of paradise upside down. Yet Exusiai has never changed; she always has a bright smile on her face, is always confident while shouting 'Guaranteed success', and is unafraid of adventure, even while far from home.`,
    },
    {
      title: 'Archive File 2',
      content: `'Apple Pie Logistics'? Croissant! Grab Exusiai and tie her to the sofa! I gotta check if that lightbulb on her head's gone and blown a fuse!\n—Emperor\n\nNo, the boss isn't actually angry. Just look at his face, half smiling and half worried—he still has her employment contract, which means Apple Pie Logistics is just an affiliate of Penguin Logistics. He couldn't be happier that his employees are conquering new territory for him! As for why he's worried, well, she'll certainly have less time to help plan his parties for him.\n— Sora\n\nYes, I saw Exusiai. Cooperation between the Truckers' Union and a new logistics company sponsored by the Lateran Curia can only be a good thing for both Nuova Volsinii and Laterano. Yes, she said her real goal is to 'keep her friendships alive forever by working together'... And yes, I signed the memorandum.\nOf course she's not heartless. No one's more sensitive than her. To her, positivity is both an instinct and a responsibility that she's subconsciously placed on herself. She feels like she has an obligation to make everyone around her happy. She may have been one of the last to join Penguin Logistics, but she's also its heart and soul.\n— Texas the Omertosa\n\nThe Law, faith... everything in Laterano changed after that incident. The people who remained had enough on their hands already, dealing with the truth and rebuilding the Holy City's order, but there's even more trouble brewing outside. For all its efforts in the first Summit of Nations, Laterano was only able to convince a limited number of factions to accept its proposal. And now, when all eyes are on it, it's even more important that it not turn away. It needs more channels of communication with the outside... an international logistics company, for example. That's how Apple Pie Logistics was born.\nAs for 'Why Exusiai?'—\nSetting aside the fact that she's the sister of a cardinal... she has a background in logistics, and at a time when the concepts of angels and demons are being reexamined, who better to play the role of ambassador than someone always wearing an infectious smile? I mean, can you imagine Federico or Oren on the job?\n— Mostima`,
    },
    {
      title: 'Archive File 3',
      content: `The first time I clearly felt that a change was about to come over me was the day I spoke for the first time. You were next to my bed, fending off my attempts to play tug-of-war with your hair, and betting on what my first words would be with our parents. They kept updating their guesses and were even noisier than the comfort bell by my crib. From time to time, you would interrupt them to ask them for a milk bottle or a baby toy.\nThe sight of their bright eyes staring at me made me a little uneasy, so I turned my head and met your gaze. You were too close, and your pink eyes looked a little blurry. Then I started feeling emotions that didn't belong to myself. It took a long time for me to realize that it was 'expectation'. You had as much of it as our parents, but you were also a little uneasy, a little doubtful. To you, I was the stranger in the family... That was when I felt the urge to say hello to you, and tell you that we'd get along great. What a strange and wonderful feeling! The next instant, I heard my own voice say, 'Sis,' and this light began to appear above my head.\nThe first time I really felt that I needed to become strong was the day I picked up my patron firearm. Master Pag put the assembled gun in my hand, and we took a picture together in front of a saint's statue. When the shutter was pressed, I shouted excitedly, 'I want to have so many adventures!' Then I noticed that made you clutch your rifle tighter.\nI remembered that I had skipped class the day before—to fly a kite on top of the Basilica—when I accidentally caused an explosion, forcing you to leave your end-of-school-year ceremony to pick me up.\nYou must've given yourself a little more responsibility when I yelled that wish, and I didn't want to make you worry.\nThe first time I felt the change in Sankta empathy after the calamity was when I was playing Super Music Tycoon with the boss. We were in a heated match when I suddenly felt an incredible wave of emotions come over me. Next thing I knew, I was standing up and had flipped the board over. Boss yelled at me for being a sore loser since he was only a few steps away from winning, but then he suddenly looked shocked and asked me why I was crying. It's a little embarrassing to say this, but I think that was the first time I ever cried in my life, even though I didn't know why.\nLater, I found out that it was the first time you managed to walk a full circle around the room at the hospital in Stevonus, without using any drugs or devices. It meant your therapy was going to succeed, and you'd go back to living a normal life one day. You were happy for yourself, and at that moment I fully felt how hard things had been for you, and how precious life was. Lungmen is so far away from Laterano, but our empathy still worked, something we couldn't even imagine before. In most cases, our empathy was a lot less distinct after the calamity, but my empathy with you, our parents, and my Sankta friends seems to have grown much stronger, and isn't even limited by distance.\nWhich is why I'm starting to get worried, sis. What if you start to feel bothered by me?`,
    },
    {
      title: 'Archive File 4',
      content: `Exusiai gave the HR staff handling the case a considerable shock, twice.\nThe first thing she did when she returned to Rhodes Island was not to try to set a new light-gun shooting record with Operator Aosta, but to deliver a gift to Rhodes Island on behalf of the Lateran Curia, the automated confessional CONFESS-47. Then the HR operator learned that she had played a large part in the improvement of these confessionals—her proposed upgrades helped her earn first place in her faith assistive engineering class during her university prep studies at St. Theodore's Comprehensive School. CONFESS-47 showed us the place where her signature could be found on its chassis, which is also present on all other confessionals from the same batch—a reward from the Lateran Curia.\nBefore HR could recover from the shock of meeting 'Exusiai the Engineer', she had begun talking about the process of improving the confessionals—\n'It's complicated—what's the optimal size? Too large, and the feeling of privacy is lost, not to mention the negative impact on traffic; too small, and it gives people claustrophobia. How smart should its system be? It can't be too serious, but too many entertainment functions and it'd feel like some weird, fancy karaoke box. Should the internal furnishings be distinct from traditional confessionals? Imagine our friends in the city having to go into a car from time to time, confessing their sins or seeking comfort from something that doesn't actually exist—basically a bunch of secrets that are hard for someone to say out loud, but which they have to let out... They should feel that a weight's been lifted from their shoulders when they walk out of that car.\n'Drawing the blueprint was the easy part. I spent a lot of time talking to people and visited practically every church in Laterano, bothering both the priests and layfolk there.\n'Anyway, take good care of CONFESS-47, and I'm sure it'll take good care of you!'\nIt may be blasphemous, but in my opinion, faith assistive equipment like automated confessionals and halo/wing calibrators aren't like taking medicine for a cold, where just by using them your faith is suddenly unshakable and your understanding of the Law complete. They're more like prayer. Prayer by itself doesn't do anything—it's the process that really matters, giving us an opportunity to think of one another. The design and use of faith assistive equipment is the process by which we strengthen our faith. The result has never been what's important.\n—Exusiai's proposal on improving automated confessionals\n\nI recommend that the Curia increase investment in faith assistive engineering. The young people are coming up with all sorts of novel ideas in the field, and Laterano needs to keep their creativity vibrant. Besides, now more than ever we need both prayer and confession, now that the very foundation of our faith has been turned upside down.\n—Conversation between the Pope and the Cardinal of the Fourth Tribunal, at an afternoon cactus tart session in late 1101`,
    },
    {
      title: 'Promotion Record',
      content: `[How to make an apple pie]\nStep 1: Soften butter at room temperature\nStep 2: Mix the softened butter with flour and sugar\nStep 3: Mix with water and knead into dough\nNote: These three steps may take some time. Starting at 8pm in Lungmen will allow you to catch L.G.D. shows on prime-time TV while you work. Start around 4pm if you're in Laterano—that's when impromptu explosions typically happen, making for good background music.\n......\nStep 5: Cut the apple into small pieces and sauté with sugar\nNote: Whatever the amount of sugar that other recipes call for, add four times as much. Only twice as much if there are any friends who need to watch their sugar—celebs like Sora who need to watch their figures.\n......\nStep 12: Shape the pie crust by hand\nNote: A gun's stock can be used as a rolling pin, if cleaned. Using different types of gun stocks results in different thicknesses. I have a lot of guns, which is why my apple pies have so much variety. I've never told my two bosses this secret.\n......\nStep 20: Bake in an oven for 25 minutes\nNote: There's no need to keep watching the oven while the pie bakes, but overbaking affects the texture, so plan your activities accordingly. Last time I took the chance to run a delivery from The Ends of the Earth to the slums and resolved a conflict between two small gangs, which was pretty much the limit.\n......\nStep 23: Pray, and tuck in!`,
    },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/geek-specialist-branch.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/exusiai/new-covenant/base.png', chibiSrc: '/operators/exusiai/new-covenant/chibi.webm', chibiMoveSrc: '/operators/exusiai/new-covenant/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'e2', label: 'Elite 2', src: '/operators/exusiai/new-covenant/e2.png', chibiSrc: '/operators/exusiai/new-covenant/chibi.webm', chibiMoveSrc: '/operators/exusiai/new-covenant/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'skin1', label: 'The Legend Seeker', src: '/operators/exusiai/new-covenant/skin1.png', chibiSrc: '/operators/exusiai/new-covenant/chibi-skin1.webm', chibiMoveSrc: '/operators/exusiai/new-covenant/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
  ],
  portrait: '/operators/exusiai/new-covenant/portrait.png',
  portraitFocus: { y: 0, x: 46.7, zoom: 341 },
}

exusiai.alter = [exusiaiNewCovenant]

export default exusiai
