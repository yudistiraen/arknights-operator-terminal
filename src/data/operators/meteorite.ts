import type { Operator } from '../../types'

const meteorite: Operator = {
  name: 'Meteorite', fileNo: 'ST03', class: 'Sniper', branch: 'Artilleryman', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Sarkaz', gender: 'Female', birthplace: 'Kazdel',
  birthday: 'August 30th', height: '170 cm', combatExp: '6 years', infectionStatus: 'Infection confirmed by medical examination.', illustrator: 'TOKI',
  cv: { JP: 'Risa Taneda', CN: 'Ke Zhong', EN: 'Hollie Taylor', KR: 'Kim So-young' },
  trait: 'Deals AOE Physical damage',
  tags: ['AoE', 'Debuff'],
  stats: { hp: 1505, atk: 865, def: 116, res: 0, block: 1, cost: 28, aspd: '2.8s', rdp: '70s' },
  range: {
    base: [
      [1, 1, 1, 1],
      [2, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    e1: [
      [1, 1, 1, 1, 0],
      [2, 1, 1, 1, 1],
      [1, 1, 1, 1, 0],
    ],
    e2: [
      [1, 1, 1, 1, 1],
      [2, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Blast Attachment Refit', desc: 'Has a 15% chance to increase the ATK of the current attack by 60% when using Normal Attacks and skills', elite: 'E1' },
    { name: 'Blast Attachment Refit', desc: 'Has a 30% chance to increase the ATK of the current attack by 60% when using Normal Attacks and skills', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Buckshot', icon: '/operators/meteorite/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'Attack AoE expands for the next attack, dealing 215% of ATK Physical damage', spInit: 0, sp: 3, rank: 'M3',
      note: 'Buckshot extends the area-of-effect of the attack that triggers it to 2 tiles.',
      levels: [
        { level: '1', desc: 'Attack AoE expands for the next attack, dealing 135% of ATK Physical damage', spInit: 0, sp: 5 },
        { level: '2', desc: 'Attack AoE expands for the next attack, dealing 140% of ATK Physical damage', spInit: 0, sp: 5 },
        { level: '3', desc: 'Attack AoE expands for the next attack, dealing 145% of ATK Physical damage', spInit: 0, sp: 5 },
        { level: '4', desc: 'Attack AoE expands for the next attack, dealing 150% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: '5', desc: 'Attack AoE expands for the next attack, dealing 155% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: '6', desc: 'Attack AoE expands for the next attack, dealing 160% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: '7', desc: 'Attack AoE expands for the next attack, dealing 170% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Attack AoE expands for the next attack, dealing 185% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: 'M2', desc: 'Attack AoE expands for the next attack, dealing 200% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: 'M3', desc: 'Attack AoE expands for the next attack, dealing 215% of ATK Physical damage', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'High-Explosive Shell', icon: '/operators/meteorite/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Immediately launches a firebomb, dealing 300% of ATK Physical damage to all hit targets within range and their DEF -330 for 10 seconds", spInit: 0, sp: 20, rank: 'M3',
      note: "High-Explosive Shell can only be used when there is at least one enemy in Meteorite's attack range.\nHigh-Explosive Shell targets aerial enemies over ground ones.",
      levels: [
        { level: '1', desc: "Immediately launches a firebomb, dealing 180% of ATK Physical damage to all hit targets within range and their DEF -130 for 10 seconds", spInit: 0, sp: 25 },
        { level: '2', desc: "Immediately launches a firebomb, dealing 190% of ATK Physical damage to all hit targets within range and their DEF -130 for 10 seconds", spInit: 0, sp: 25 },
        { level: '3', desc: "Immediately launches a firebomb, dealing 200% of ATK Physical damage to all hit targets within range and their DEF -130 for 10 seconds", spInit: 0, sp: 25 },
        { level: '4', desc: "Immediately launches a firebomb, dealing 210% of ATK Physical damage to all hit targets within range and their DEF -170 for 10 seconds", spInit: 0, sp: 24 },
        { level: '5', desc: "Immediately launches a firebomb, dealing 220% of ATK Physical damage to all hit targets within range and their DEF -170 for 10 seconds", spInit: 0, sp: 24 },
        { level: '6', desc: "Immediately launches a firebomb, dealing 230% of ATK Physical damage to all hit targets within range and their DEF -170 for 10 seconds", spInit: 0, sp: 24 },
        { level: '7', desc: "Immediately launches a firebomb, dealing 240% of ATK Physical damage to all hit targets within range and their DEF -210 for 10 seconds", spInit: 0, sp: 23 },
        { level: 'M1', desc: "Immediately launches a firebomb, dealing 260% of ATK Physical damage to all hit targets within range and their DEF -250 for 10 seconds", spInit: 0, sp: 22 },
        { level: 'M2', desc: "Immediately launches a firebomb, dealing 280% of ATK Physical damage to all hit targets within range and their DEF -290 for 10 seconds", spInit: 0, sp: 21 },
        { level: 'M3', desc: "Immediately launches a firebomb, dealing 300% of ATK Physical damage to all hit targets within range and their DEF -330 for 10 seconds", spInit: 0, sp: 20 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Meteorite's Badge", desc: `Operator Meteorite has demonstrated a remarkable aptitude for inflicting physical casualties on multitudes of enemies.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Sniper Operator during field operations to exercise Artilleryman responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    arty: { code: 'ART-Y', name: 'Tag of Nameless', stages: [
      { stage: 1, hp: '+100', atk: '+37', effect: 'New trait:\nAttacks ignore 100 DEF' },
      { stage: 2, hp: '+150', atk: '+52', effect: 'Blast Attachment Refit improved:\nNormal attacks and skills have a 40% chance to deal +60% damage' },
      { stage: 3, hp: '+180', atk: '+65', effect: 'Blast Attachment Refit improved:\nNormal attacks and skills have a 50% chance to deal +60% damage' },
    ]},
  },
  story: `Formerly known as "Blunt Wedge", the Sarkaz mercenary markswoman codenamed "Meteorite" was no stranger to conflict as she was orphaned amidst the civil wars that ravage her homeland Kazdel. Raised by a squad of Sarkaz mercenaries, she underwent harsh conditioning to become a warrior and mercenary. Despite her cold demeanor, she has a warm and caring heart. At one point, Meteorite met a Sarkaz teacher who taught her to read and write, who also helped her to cope with the battlefield. Although they only spent about two months together before parting ways, Meteorite mellowed out and later would follow the teacher's footsteps by teaching Sarkaz children under Rhodes Island's care. She became deeply concerned of the Sarkaz's welfare, participating in many military campaigns concerning the Sarkaz and following all related news. Having joined Rhodes Island, she stresses that her employment is temporary: she will continue to fight with them as long as it benefits the Sarkaz.\nMeteorite uses a grenade crossbow to cause widespread destruction among the enemy ranks. She was acquainted with Firewatch in the past, although the extent of their relationship remains unclear. To Meteorite, the story of Firewatch's group is one of many.`,
  profile: `Formerly a member of Firewatch's group, Meteorite is now a freelance mercenary. Other details of her history are unknown.\nNow serving as a sniper Operator for Rhodes Island, she uses the bowgun in her hands to exert lethality from afar.`,
  records: [
    { title: 'Clinical Analysis', content: `Medical tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Fusion Rate] 7%\nShe presents no obvious external symptoms of Oripathy.\n[Blood Crystal Density] 0.33u/L\nInfection has progressed to middle-term. Currently there is no evidence of spreading.` },
    { title: 'Archive File 1', content: `She is a Sarkaz who wears a cold expression but has a warm heart.\nShe doesn't speak very politely, but if you can get past her rude tone, you'll find her words to be heartfelt.\nShe follows all news concerning the Sarkaz.` },
    { title: 'Archive File 2', content: `It is a well-known fact that the Sarkaz people are ostracized from society at large, even those who are non-infected. The degree to which they are ostracized varies from place to place.\nThis touches upon some sensitive historical issues that are inconvenient to discuss here. All we can say is that in conclusion, the Sarkaz people are removed from the mainstream. They can often be described as cynical, self-contained, and they do this as they see fit.\nIn this sense, Meteorite is a different kind of Sarkaz. Although she wears a cold face because of the discrimination she's experienced, underneath her mask is a heart that's still warm, a fact that all Rhodes Island Operators have seen.` },
    { title: 'Archive File 3', content: `Like Firewatch herself, Meteorite doesn't talk about Firewatch's group's past.\nHowever, her reason is that it's not her place to talk about it. These matters should only come straight from the Doctor's mouth if they're supposed to mean anything.\nThough this may sound cruel, what's clear is that to Firewatch, the group's story is everything, but to Meteorite, it's just one of many.` },
    { title: 'Archive File 4', content: `Meteorite once confided to me in private that she might leave Rhodes Island one day.\nWhen I asked her why, she said that she's fighting for the Sarkaz people. And while she likes Rhodes Island, our goals aren't the same as hers, and that there would be a day where she would just get in Rhodes Island's way.\nHer expression at the time was very sad, and I didn't know how to comfort her. All I could tell her was the truth – that I also wanted to help the Sarkaz and that as long as it wasn't too much trouble, I'd help her too.\nMeteorite looked blank for a second and then she hugged me. She rubbed my head and said, you're such a fool, Amiya.\nAlthough I couldn't see her expression when she said this, I could sense that in the end, Meteorite won't leave.\n— Amiya` },
    { title: 'Promotion Record', content: `Unexpectedly, after receiving her promotion, Meteorite submitted a list of names. They were the aliases that she'd used in the past in various places as a freelance mercenary.\nAfter investigating this list, it was discovered that for several years, Meteorite had been fighting relentlessly, and had taken part in most military campaigns involving the Sarkaz.\nPresumably for Meteorite, this was her way of showing trust to Rhodes Island. In turn, Rhodes Island repaid the favor by providing her the best living arrangements.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/artilleryman-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/meteorite/base.png', chibiSrc: '/operators/meteorite/chibi.webm', chibiMoveSrc: '/operators/meteorite/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TOKI' },
    { id: 'e2', label: 'Elite 2', src: '/operators/meteorite/e2.png', chibiSrc: '/operators/meteorite/chibi.webm', chibiMoveSrc: '/operators/meteorite/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TOKI' },
    { id: 'skin1', label: 'Graphite', src: '/operators/meteorite/skin1.png', chibiSrc: '/operators/meteorite/chibi-skin1.webm', chibiMoveSrc: '/operators/meteorite/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TOKI' },
    { id: 'skin2', label: 'Summer Flower FA240', src: '/operators/meteorite/skin2.png', chibiSrc: '/operators/meteorite/chibi-skin2.webm', chibiMoveSrc: '/operators/meteorite/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '臼' },
  ],
  portrait: '/operators/meteorite/portrait.png',
}

export default meteorite
