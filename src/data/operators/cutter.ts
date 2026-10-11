import type { Operator } from '../../types'

const cutter: Operator = {
  name: 'Cutter', fileNo: 'R144', class: 'Guard', branch: 'Swordmaster', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Columbia', position: 'Melee', race: 'Vulpo', gender: 'Female', birthplace: 'Columbia',
  birthday: 'May 2nd', height: '155 cm', combatExp: '3 years', infectionStatus: 'Originium crystals are distributed inside the body, confirmed Infected by medical examination.', illustrator: '下野宏铭',
  cv: { JP: 'Sayuri Yahagi', CN: 'Su Wan (credited as "Sue" in EN)', EN: 'Kristen Li', KR: 'Esther Won' },
  trait: 'Normal attacks deal damage twice',
  tags: ['Nuker', 'DPS'],
  stats: { hp: 2320, atk: 641, def: 325, res: 0, block: 2, cost: 21, aspd: '1.3s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Photoetched Marks', desc: 'When dealing damage, has 12% chance to recover 1 additional SP', elite: 'E1' },
    { name: 'Photoetched Marks', desc: 'When dealing damage, has 20% chance to recover 1 additional SP', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Redshift', icon: '/operators/cutter/skill-1.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 340% of ATK as physical damage.', spInit: 5, sp: 11, rank: 'M3', range: [[1, 1, 0, 0], [2, 1, 1, 1], [1, 1, 0, 0]],
      note: 'Redshift will not target enemies that are not in the skill\'s range but blocked by Cutter, and can target aerial enemies. If there are no enemies within Redshift\'s range when the skill is used, it will be interrupted and Cutter gets the SP consumed back.',
      levels: [
        { level: '1', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 200% of ATK as physical damage.`, spInit: 5, sp: 16 },
        { level: '2', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 210% of ATK as physical damage.`, spInit: 5, sp: 16 },
        { level: '3', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 220% of ATK as physical damage.`, spInit: 5, sp: 16 },
        { level: '4', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 240% of ATK as physical damage.`, spInit: 5, sp: 15 },
        { level: '5', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 250% of ATK as physical damage.`, spInit: 5, sp: 15 },
        { level: '6', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 260% of ATK as physical damage.`, spInit: 5, sp: 15 },
        { level: '7', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 280% of ATK as physical damage.`, spInit: 5, sp: 14 },
        { level: 'M1', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 300% of ATK as physical damage.`, spInit: 5, sp: 13 },
        { level: 'M2', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 320% of ATK as physical damage.`, spInit: 5, sp: 12 },
        { level: 'M3', desc: `Immediately attacks random enemies within range 4 times with throwing knives, each knife dealing 340% of ATK as physical damage.`, spInit: 5, sp: 11 },
      ],
    },
    {
      name: 'Crimson Crescent', icon: '/operators/cutter/skill-2.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Deals 450% Physical damage to up to 6 nearby enemies\nDamage is doubled against aerial enemies', spInit: 5, sp: 12, rank: 'M3', range: [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 2, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]],
      levels: [
        { level: '1', desc: `Deals 300% Physical damage to up to 5 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 0, sp: 17 },
        { level: '2', desc: `Deals 310% Physical damage to up to 5 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 0, sp: 17 },
        { level: '3', desc: `Deals 320% Physical damage to up to 5 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 0, sp: 17 },
        { level: '4', desc: `Deals 340% Physical damage to up to 5 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 1, sp: 16 },
        { level: '5', desc: `Deals 350% Physical damage to up to 5 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 1, sp: 16 },
        { level: '6', desc: `Deals 360% Physical damage to up to 5 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 1, sp: 16 },
        { level: '7', desc: `Deals 380% Physical damage to up to 6 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 2, sp: 15 },
        { level: 'M1', desc: `Deals 400% Physical damage to up to 6 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 3, sp: 14 },
        { level: 'M2', desc: `Deals 420% Physical damage to up to 6 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 4, sp: 13 },
        { level: 'M3', desc: `Deals 450% Physical damage to up to 6 nearby enemies\nDamage is doubled against aerial enemies`, spInit: 5, sp: 12 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Cutter's Badge", desc: 'Appointed as Guard Operator to exercise Swordmaster responsibilities' },
    swoy: { code: 'SWO-Y', name: 'Replaceable Tool Set', stages: [
      { stage: 1, hp: '+100', atk: '+40', effect: 'New trait: Attacks ignore 70 DEF' },
      { stage: 2, hp: '+130', atk: '+55', effect: 'Photoetched Marks improved: When dealing damage, has 30% chance to recover 1 additional SP' },
      { stage: 3, hp: '+150', atk: '+65', effect: 'Photoetched Marks improved: When dealing damage, has 33% chance to recover 1 additional SP' },
    ]},
  },
  story: `A young Columbian Vulpo from a low-class background, Cutter became a principled mercenary under the tutelage of a wandering swordsman who decided to mentor her after finding her as an orphan and seeing her holding a knife in a death grip. The swordsman quietly left after Cutter became self-sufficient, leaving behind only the pendant that now hangs around her neck, a carved protective charm she cherishes deeply.\n\nCutter then worked as a mercenary for a time before traveling to Rhodes Island for Oripathy treatment in exchange for lending her swordsmanship. Cutter became interested in cooking because she had been eating nothing but MREs during her time as a mercenary. However, her cooking skills were so poor that they caused problems in the Rhodes Island cafeteria. This changed when Sideroca stepped in as her instructor; thanks to this, Cutter showed significant progress in learning to cook.`,
  profile: `Cutter, a mercenary who has long been active in the fringes of Columbia's controlled territories, has come seeking medical treatment. She has shown excellent close-quarters combat capabilities across several operations.\nShe currently serves in one of Rhodes Island's Guard squads, having participated in many VIP escort jobs among others.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 4%\nCutter's condition is currently stable.\n\n[Blood Originium-Crystal Density] 0.23u/L\nCutter's bloodstream crystal circulation level is stable.` },
    { title: 'Archive File 1', content: `Operator Cutter comes from a rural area in southwestern Columbia. According to our investigation, this area was often affected by Catastrophes, rendering the land barren and unproductive. Unable to make a living or work the land, many locals have no choice but to provide their labor to prospective employers, and with high enough compensation, are willing to do almost anything. The tenuous grasp of Columbian authorities over this remote region has led to a chronic lack of proper policing, resulting in this area gaining notoriety as a chaotic and lawless land.\nCutter, who grew up under such an environment, chose to stake out her own lot in life to support herself like so many of her peers; but unlike many, she also established a set of rules to abide by, dictating what she would and would not do.` },
    { title: 'Archive File 2', content: `On a normal day, this mercenary from a chaotic land is quite at ease and can even be described as being in a daze. This characteristic is particularly evident after she has spent some time basking in the sun, a state that couldn't be more different from when she wields her blade on the battlefield.\nIn addition, it's worth mentioning that Cutter also has a baffling fondness for cooking, given that her results are often far from satisfactory.\nAfter a string of incidents such as accidentally eviscerating a cutting board, causing the fire alarm to go off after stewing unknown substances, and causing the toaster to explode, the Operators who frequently utilize the kitchen petitioned to restrict her access to the facility, resulting in her being banned.\nEven those most empathetic to the dejected Cutter still unanimously praised the ban.` },
    { title: 'Archive File 3', content: `Through our investigation, we've determined the following to be Operator Cutter's personal code of conduct:\n#Never kill innocents.\n#Never participate in fraud or the trafficking of persons.\n#If a bystander suffers losses to property during the task, then appropriate compensation must be paid afterwards.\n\nAs a result of these constraints, Cutter makes a lot less money than those who are far less skilled than she is, and this has complicated her living situation. Despite that, she never compromised or abandoned her code. One might surmise that this was a product of her chaotic environment, or perhaps due to a certain teacher she references in conversation.\nAccording to Cutter, her teacher was a wandering swordsman who travelled the world. This teacher not only raised her after her parents died fighting on the streets, but also taught her how to wield a blade. Under this person's tutelage, Cutter did not get swallowed by the lawlessness and wanton violence that claimed so many of her fellow villagers; instead, she became the principled mercenary that she is today.\nCutter's teacher quietly left after confirming that she could be self-sufficient, only leaving behind the pendant that now hangs around her neck – a carved protective charm that she cherishes immensely.` },
    { title: 'Archive File 4', content: `[Classified Log]\nAfter investigation, we found that the armed clash that took the lives of Cutter's parents was caused by the interruption of a local gang's illegal transactions. This damage to their interests triggered immediate retaliation against the interrupting party, dragging in many uninvolved residents. Many people were killed as a result, including Cutter's parents.\nLater eyewitness accounts from those who were present at the time testified that the actual instigators of the gang violence were not locals, but rather people they had never seen before.\n\nPlease exercise discretion in deciding whether or not to disclose the above records to Cutter.` },
    { title: 'Promotion Record', content: `Columbians do not value the idea of karma, but they do understand that no matter what they do, there will be consequences.` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/swordmaster-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/cutter/base.png', chibiSrc: '/operators/cutter/chibi.webm', illustrator: '下野宏铭' },
    { id: 'e2', label: 'Elite 2', src: '/operators/cutter/e2.png', chibiSrc: '/operators/cutter/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Wiping Knife', src: '/operators/cutter/skin1.png', chibiSrc: '/operators/cutter/chibi-skin1.webm', illustrator: '百慕大飞鱼' },
  ],
  portrait: '/operators/cutter/portrait.png',
  portraitFocus: { y: -2, x: 37, zoom: 250 }
}

export default cutter
