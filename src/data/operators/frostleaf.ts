import type { Operator } from '../../types'

const frostleaf: Operator = {
  name: 'Frostleaf', fileNo: 'R123', class: 'Guard', branch: 'Lord', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Vulpo', gender: 'Female', birthplace: 'Columbia',
  birthday: 'May 1st', height: '157 cm', combatExp: '7 years', infectionStatus: 'Showed physical signs of Oripathy, infection confirmed by medical examination.', illustrator: '下野宏铭',
  cv: { JP: 'Ai Kakuma', CN: 'Ruan Congqing (credited as "Ruan" in EN)', EN: 'Ina Marie Smith', KR: 'Jang Mi' },
  trait: 'Can launch Ranged Attacks that deal 80% of normal ATK',
  tags: ['Slow', 'DPS'],
  stats: { hp: 2260, atk: 660, def: 323, res: 10, block: 2, cost: 18, aspd: '1.3s', rdp: '70s' },
  range: {
    base: [[1,1,0],[2,1,1],[1,1,0]],
    e1: [[1,1,0,0],[2,1,1,1],[1,1,0,0]],
    e2: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Covered Strike', desc: 'Range expands, but Attack Interval increases slightly', elite: 'E2' }],
  skills: [
    {
      name: 'Frost Tomahawk', icon: '/operators/frostleaf/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Deals 150% of ATK Physical damage in the next attack and the Movement Speed of targets -50% for 3 seconds', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: 'Deals 105% of ATK Physical damage in the next attack and the Movement Speed of targets -20% for 1.5 seconds', spInit: 0, sp: 5 },
        { level: '2', desc: 'Deals 110% of ATK Physical damage in the next attack and the Movement Speed of targets -23% for 1.5 seconds', spInit: 0, sp: 5 },
        { level: '3', desc: 'Deals 115% of ATK Physical damage in the next attack and the Movement Speed of targets -25% for 1.5 seconds', spInit: 0, sp: 5 },
        { level: '4', desc: 'Deals 120% of ATK Physical damage in the next attack and the Movement Speed of targets -28% for 2 seconds', spInit: 0, sp: 4 },
        { level: '5', desc: 'Deals 125% of ATK Physical damage in the next attack and the Movement Speed of targets -30% for 2 seconds', spInit: 0, sp: 4 },
        { level: '6', desc: 'Deals 130% of ATK Physical damage in the next attack and the Movement Speed of targets -33% for 2 seconds', spInit: 0, sp: 4 },
        { level: '7', desc: 'Deals 135% of ATK Physical damage in the next attack and the Movement Speed of targets -35% for 2.5 seconds', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Deals 140% of ATK Physical damage in the next attack and the Movement Speed of targets -40% for 2.5 seconds', spInit: 0, sp: 3 },
        { level: 'M2', desc: 'Deals 145% of ATK Physical damage in the next attack and the Movement Speed of targets -45% for 2.5 seconds', spInit: 0, sp: 3 },
        { level: 'M3', desc: 'Deals 150% of ATK Physical damage in the next attack and the Movement Speed of targets -50% for 3 seconds', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Ice Tomahawk', icon: '/operators/frostleaf/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ASPD +50; Each attack reduces the Movement Speed of the target by -50%, with a 40% chance to Bind it for 2 seconds', spInit: 0, sp: 50, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ASPD +5; Each attack reduces the Movement Speed of the target by -30%, with a 15% chance to Bind it for 1.5 seconds', spInit: 0, sp: 60, dur: '25s' },
        { level: '2', desc: 'ASPD +10; Each attack reduces the Movement Speed of the target by -32%, with a 15% chance to Bind it for 1.5 seconds', spInit: 0, sp: 59, dur: '25s' },
        { level: '3', desc: 'ASPD +15; Each attack reduces the Movement Speed of the target by -34%, with a 15% chance to Bind it for 1.5 seconds', spInit: 0, sp: 58, dur: '25s' },
        { level: '4', desc: 'ASPD +20; Each attack reduces the Movement Speed of the target by -36%, with a 20% chance to Bind it for 1.5 seconds', spInit: 0, sp: 57, dur: '25s' },
        { level: '5', desc: 'ASPD +25; Each attack reduces the Movement Speed of the target by -38%, with a 20% chance to Bind it for 1.5 seconds', spInit: 0, sp: 56, dur: '25s' },
        { level: '6', desc: 'ASPD +30; Each attack reduces the Movement Speed of the target by -40%, with a 20% chance to Bind it for 1.5 seconds', spInit: 0, sp: 55, dur: '25s' },
        { level: '7', desc: 'ASPD +35; Each attack reduces the Movement Speed of the target by -42%, with a 25% chance to Bind it for 1.5 seconds', spInit: 0, sp: 54, dur: '25s' },
        { level: 'M1', desc: 'ASPD +40; Each attack reduces the Movement Speed of the target by -44%, with a 30% chance to Bind it for 2 seconds', spInit: 0, sp: 53, dur: '25s' },
        { level: 'M2', desc: 'ASPD +45; Each attack reduces the Movement Speed of the target by -46%, with a 35% chance to Bind it for 2 seconds', spInit: 0, sp: 52, dur: '25s' },
        { level: 'M3', desc: 'ASPD +50; Each attack reduces the Movement Speed of the target by -50%, with a 40% chance to Bind it for 2 seconds', spInit: 0, sp: 50, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Frostleaf's Badge", desc: 'Appointed as Guard Operator to exercise Lord responsibilities' },
    lorx: { code: 'LOR-X', name: 'The Seamless Mixtape', stages: [
      { stage: 1, atk: '+34', def: '+22', effect: 'New trait: Attacks deal an additional 10% ATK as Arts damage.' },
      { stage: 2, atk: '+41', def: '+30', effect: 'Covered Strike improved: Range expands, and attacks have a 15% chance to inflict Cold for 1.5s, but Attack Interval increases slightly.' },
      { stage: 3, atk: '+50', def: '+35', effect: 'Covered Strike improved: Range expands, and attacks have a 25% chance to inflict Cold for 1.5s, but Attack Interval increases slightly.' },
    ]},
  },
  story: `A Columbian Infected Vulpine ex-child soldier, Frostleaf initially worked as a mercenary for Rhodes Island before becoming an official member, making use of her combat experience and skill with a rime-encrusted poleaxe in combat. During her early days of working under Rhodes Island, Frostleaf was illiterate but managed to overcome it after gaining an interest in listening to music, and became motivated to know the meaning of its lyrics. Now she spends her times off-duty listening to songs and learning fashion design.`,
  profile: `Frostleaf is a former Columbian Junior Army soldier, "retired" after her unit was destroyed. Came into contact with Rhodes Island later as a mercenary, before officially joining following a period of collaboration with the company.\nExtensive combat experience and undeniably skilled, Frostleaf is an excellent asset to Rhodes Island.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulatory system, indicating infection and confirming her as Infected at this stage.\n[Cell-Originium Assimilation] 16%\nThe infection has advanced to mid-stage. Crystal formations are clearly visible on the operator's arms.\n[Blood Originium-Crystal Density] 0.35u/L\nLikely owing to her previous affiliation, Frostleaf's Oripathy had spread to such a degree by the time she joined Rhodes Island that I could not be optimistic about her chances. However, her current course of treatment has put her in a relatively stable condition. Hooray. Hooray.\n–– Warfarin`,
    },
    {
      title: 'Archive File 1',
      content: `Frostleaf is something of a loner. One of our most combat experienced operators.\nShe dresses in hip, stylish outfits and enjoys to listening to music alone in a quiet corner.`,
    },
    {
      title: 'Archive File 2',
      content: `Frostleaf is one of the most experienced combatants in the entire company. The battlefield is like her own backyard.\nThat is not something to be terribly cheered about though, because it means, given her age, she never had a normal childhood.\nNot to mention, given Columbia's clashes with neighboring countries in the past decade and frequent skirmishes besides, one can easily imagine what kind of life Frostleaf has led.\nOlder operators still remember when Frostleaf first arrived, and report that she's a lot more outgoing now than she was then.`,
    },
    {
      title: 'Archive File 3',
      content: `Rhodes Island recruited Frostleaf back when she was a mercenary, but upon her official admission, Dr. Kal'tsit ordered her to take only one mission––convalescing as a patient.\nThat presented a huge quandary, since Frostleaf up to this point had known nothing but war.\nFortunately, with help from the island's diverse population, Frostleaf gradually learned to enjoy life outside combat, which has opened her eyes to a whole new world.`,
    },
    {
      title: 'Archive File 4',
      content: `After a considerable period of treatment and adapting to a life off the battlefield, Frostleaf thought she would return again to the world of war. She sought clearance from Dr. Kal'tsit but was denied a full release. Instead, Kal'tsit granted her permission for just one excursion.\nFrostleaf confidently strode into battle, eager to fight again, only to discover how difficult it had become for her to swing a weapon at an enemy. She later confessed that she was overwhelmed by the memory of her struggles in the Junior Army, something she thought she had completely left behind her.\nShe audibly wept on the field that day.\nFrom then on, Frostleaf slowly turned into what she is now: a music lover, a fashionista, and a bit of a loner.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/lord-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/frostleaf/base.png', chibiSrc: '/operators/frostleaf/chibi.webm', illustrator: '下野宏铭' },
    { id: 'e2', label: 'Elite 2', src: '/operators/frostleaf/e2.png', chibiSrc: '/operators/frostleaf/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Breaking the Ice', src: '/operators/frostleaf/skin1.png', chibiSrc: '/operators/frostleaf/chibi-skin1.webm', illustrator: '下野宏铭' },
  ],
  portrait: '/operators/frostleaf/portrait.png',
  portraitFocus: { y: 23, x: 47, zoom: 280 },
}

export default frostleaf
