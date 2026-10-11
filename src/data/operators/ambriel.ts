import type { Operator } from '../../types'

const ambriel: Operator = {
  name: 'Ambriel', fileNo: 'LT02', class: 'Sniper', branch: 'Deadeye', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Laterano', position: 'Ranged', race: 'Sankta', gender: 'Female', birthplace: 'Laterano',
  birthday: 'January 13th', height: '160 cm', combatExp: '1 year', infectionStatus: 'Confirmed uninfected by medical examination.', illustrator: 'm9nokuro',
  cv: { JP: 'Nozomi Nishida', CN: 'Liu Zhixiao', EN: 'Melody Peng', KR: 'Son Seon-young' },
  trait: 'Prioritizes attacking the enemy with lowest DEF within range first',
  tags: ['DPS', 'Slow'],
  stats: { hp: 1595, atk: 1052, def: 122, res: 0, block: 1, cost: 20, aspd: '2.7s', rdp: '70s' },
  range: { base: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]], e1: [[1, 1, 1, 0, 0], [1, 1, 1, 1, 0], [2, 1, 1, 1, 1], [1, 1, 1, 1, 0], [1, 1, 1, 0, 0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Precise Strike', desc: "Has a 25% chance to Stun target for 2 seconds when attacking an enemy outside this unit's normal Attack Range", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Snaring Shell', icon: '/operators/ambriel/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack Range +1 tile, and attacks Slow the target for 1.2 seconds', spInit: 10, sp: 25, dur: '36s', rank: 'M3',
      levels: [
        { level: '1', desc: `Attack Range +1 tile, and attacks Slow the target for 0.6 seconds`, spInit: 10, sp: 35, dur: '26s' },
        { level: '2', desc: `Attack Range +1 tile, and attacks Slow the target for 0.6 seconds`, spInit: 10, sp: 34, dur: '26s' },
        { level: '3', desc: `Attack Range +1 tile, and attacks Slow the target for 0.6 seconds`, spInit: 10, sp: 33, dur: '26s' },
        { level: '4', desc: `Attack Range +1 tile, and attacks Slow the target for 0.7 seconds`, spInit: 10, sp: 32, dur: '28s' },
        { level: '5', desc: `Attack Range +1 tile, and attacks Slow the target for 0.7 seconds`, spInit: 10, sp: 31, dur: '28s' },
        { level: '6', desc: `Attack Range +1 tile, and attacks Slow the target for 0.7 seconds`, spInit: 10, sp: 30, dur: '28s' },
        { level: '7', desc: `Attack Range +1 tile, and attacks Slow the target for 0.8 seconds`, spInit: 10, sp: 29, dur: '30s' },
        { level: 'M1', desc: `Attack Range +1 tile, and attacks Slow the target for 0.8 seconds`, spInit: 10, sp: 28, dur: '32s' },
        { level: 'M2', desc: `Attack Range +1 tile, and attacks Slow the target for 1 seconds`, spInit: 10, sp: 27, dur: '34s' },
        { level: 'M3', desc: `Attack Range +1 tile, and attacks Slow the target for 1.2 seconds`, spInit: 10, sp: 25, dur: '36s' },
      ],
    },
    {
      name: 'Radar Sweep', icon: '/operators/ambriel/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "ATK +100%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.", spInit: 10, sp: 25, dur: '40s', rank: 'M3',
      note: "Radar Sweep increases Ambriel's attack interval by 0.9 seconds.",
      levels: [
        { level: '1', desc: `ATK +40%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '26s' },
        { level: '2', desc: `ATK +40%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '27s' },
        { level: '3', desc: `ATK +40%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '28s' },
        { level: '4', desc: `ATK +50%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '30s' },
        { level: '5', desc: `ATK +50%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '31s' },
        { level: '6', desc: `ATK +50%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '32s' },
        { level: '7', desc: `ATK +60%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '34s' },
        { level: 'M1', desc: `ATK +70%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '36s' },
        { level: 'M2', desc: `ATK +80%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '38s' },
        { level: 'M3', desc: `ATK +100%, Attack Range becomes global, but Attack Interval increases a bit, and attack wind-up takes longer when attacking an enemy outside of this unit's original range.`, spInit: 10, sp: 25, dur: '40s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Ambriel's Badge", desc: 'Appointed as Sniper Operator to exercise Deadeye responsibilities' },
    deax: { code: 'DEA-X', name: 'Portable Radar Equipment', stages: [
      { stage: 1, hp: '+65', atk: '+55', effect: 'New trait: The further away the enemy, the higher the damage dealt (up to an increase of 15%)' },
      { stage: 2, hp: '+80', atk: '+68', effect: "Precise Strike improved: Has a 33% chance to Stun for 2.5 seconds when attacking an enemy outside this unit's normal Attack Range" },
      { stage: 3, hp: '+95', atk: '+81', effect: "Precise Strike improved: Has a 33% chance to Stun for 3 seconds when attacking an enemy outside this unit's normal Attack Range" },
    ]},
  },
  story: `A Sankta sharpshooter from the Pontifica Cohors Lateran, Ambriel has a carefree and easygoing attitude. She was enlisted as a Rhodes Island operator, proving to be a good sniper who utilizes an outdated yet simple and effective long rifle in combat.`,
  profile: `Ambriel is a citizen of Laterano. After many tests, she was allowed to join Rhodes Island, where her skills in ambushing and long-range sniping helped her perform well in asymmetric operations.\nShe now serves in the Rhodes Island sniper team, providing long-range support.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Ambriel shows no signs of Oripathy infection.\n\n[Blood Originium-Crystal Density] 0.13u/L\nOperator Ambriel rarely comes in contact with Originium.` },
    { title: 'Archive File 1', content: `Ambriel was born in Laterano. In accordance with the tactical philosophy of the Sankta, Ambriel uses only a gun as her combat weapon of choice. However, unlike most of the other Sankta warriors who pursued modern gun kata techniques, Ambriel chose an outdated but classic rifle. After a simple modification and the installation of additional parts, this long gun quickly proved its worth in subsequent battles.\nIn Ambriel's words, the only reason she chose this gun was to avoid trouble – she has no desire to engage in close combat with a shorter-ranged gun, nor did she want to lug around the unwieldy components of a modern sniper rifle.\nEven though she uses a weapon that is considered anachronistic for the modern battlefield, because of her low-key nature and relatively inconspicuous position, she basically gets her work done, and therefore the top brass has no reason to find any fault with her.` },
    { title: 'Archive File 2', content: `Despite being a Sankta, Ambriel doesn't seem much different from the ordinary person. She is easygoing and not too striking, not seeming out of place to others wherever she might appear. If not for the long gun she carries in her hands, she doesn't seem much different from a student who just left school.\nAfter taking a post in Rhodes Island, Ambriel did not exhibit any unique hobbies. She enjoys snacks and desserts, and likes watching simple TV shows and movies with themes that don't require much thought. On her off days, she sometimes meets and chats with other Sankta operators.\nWhen people did notice her, it was mostly about the gun in her hands. Since Operators thoroughly unfamiliar with gun kata would often proselytize its power and benefits, these conversations often escalated into controversy.\nIn this regard, Ambriel would quietly sit down and listen to these discussions, thinking silently to herself: "Good. Now fight."` },
    { title: 'Archive File 3', content: `An answer that you'll often get from Ambriel is: "I want something a bit more practical." However, even she doesn't have a good idea of what that "practicality" looks like.\nGenerally speaking, "practical" refers to a satisfactory salary, stable relationships, trendy products that are novel and interesting, intoxicating luxury goods, and glamorous decorations...\nIn summation, isn't that just materialism?` },
    { title: 'Archive File 4', content: `Operator Ambriel's personality is rather elusive, and even she has no idea what her personality is supposed to be. Perhaps she is simply accustomed to a life of stasis, and has not had an opportunity that really allows her to see herself clearly.\nAn opportunity like this is also a chance for a massive change.\nDoes Ambriel possess the will to change? Everything depends on the choice she makes.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/deadeye-branch.png', factionIcon: '/icons/factions/laterano.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/ambriel/base.png', chibiSrc: '/operators/ambriel/chibi.webm', illustrator: 'm9nokuro' },
    { id: 'e2', label: 'Elite 2', src: '/operators/ambriel/e2.png', chibiSrc: '/operators/ambriel/chibi.webm', illustrator: 'm9nokuro' },
    { id: 'skin1', label: 'Holiday HD29', src: '/operators/ambriel/skin1.png', chibiSrc: '/operators/ambriel/chibi-skin1.webm', illustrator: '水滴鱼' },
  ],
  portrait: '/operators/ambriel/portrait.png',
  portraitFocus: { y: -3, x:35, zoom: 270 }
}

export default ambriel
