import type { Operator } from '../../types'

const zima: Operator = {
  name: 'Zima', fileNo: 'USS1', class: 'Vanguard', branch: 'Pioneer', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Ursus Student Self-Governing Group', position: 'Melee', race: 'Ursus', gender: 'Female', birthplace: 'Ursus',
  birthday: 'July 29th', height: '162 cm', combatExp: 'Half a year', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Skade',
  cv: { JP: 'Ami Koshimizu', CN: 'You Fei (credited as "Certain" in EN)', EN: 'Amy Lennox', KR: 'Lee Myung-hi' },
  trait: 'Blocks 2 enemies',
  tags: ['DP-Recovery', 'Support'],
  stats: { hp: 2150, atk: 470, def: 420, res: 0, block: 2, cost: 13, aspd: '1.05s', rdp: '70s' },
  range: {
    base: [[2, 1]],
    e1: [[2, 1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Spearheader', desc: 'DP Cost -1', elite: 'E1' },
    { name: 'Spearheader', desc: "All [Vanguard] Operators' DP Cost -1 when Zima is in the squad", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Charge γ', icon: '/operators/zima/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Instantly gains 12 Deployment Points.', spInit: 20, sp: 35, rank: 'M3',
      levels: [
        { level: '1', desc: `Instantly gains 12 Deployment Points.`, spInit: 10, sp: 44 },
        { level: '2', desc: `Instantly gains 12 Deployment Points.`, spInit: 10, sp: 43 },
        { level: '3', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 42 },
        { level: '4', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 41 },
        { level: '5', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 40 },
        { level: '6', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 39 },
        { level: '7', desc: `Instantly gains 12 Deployment Points.`, spInit: 14, sp: 38 },
        { level: 'M1', desc: `Instantly gains 12 Deployment Points.`, spInit: 16, sp: 37 },
        { level: 'M2', desc: `Instantly gains 12 Deployment Points.`, spInit: 18, sp: 36 },
        { level: 'M3', desc: `Instantly gains 12 Deployment Points.`, spInit: 20, sp: 35 },
      ],
    },
    {
      name: "Ursus's Roar", icon: '/operators/zima/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Gradually gains 12 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +60%; Gains 1 extra DP when killing an enemy", spInit: 20, sp: 35, dur: '10s', rank: 'M3',
      levels: [
        { level: '1', desc: `Gradually gains 9 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +25%; Gains 1 extra DP when killing an enemy`, spInit: 10, sp: 45, dur: '10s' },
        { level: '2', desc: `Gradually gains 9 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +30%; Gains 1 extra DP when killing an enemy`, spInit: 10, sp: 44, dur: '10s' },
        { level: '3', desc: `Gradually gains 9 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +35%; Gains 1 extra DP when killing an enemy`, spInit: 10, sp: 43, dur: '10s' },
        { level: '4', desc: `Gradually gains 10 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +35%; Gains 1 extra DP when killing an enemy`, spInit: 12, sp: 42, dur: '10s' },
        { level: '5', desc: `Gradually gains 10 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +40%; Gains 1 extra DP when killing an enemy`, spInit: 12, sp: 41, dur: '10s' },
        { level: '6', desc: `Gradually gains 10 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +45%; Gains 1 extra DP when killing an enemy`, spInit: 12, sp: 40, dur: '10s' },
        { level: '7', desc: `Gradually gains 11 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +45%; Gains 1 extra DP when killing an enemy`, spInit: 14, sp: 39, dur: '10s' },
        { level: 'M1', desc: `Gradually gains 11 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +50%; Gains 1 extra DP when killing an enemy`, spInit: 16, sp: 38, dur: '10s' },
        { level: 'M2', desc: `Gradually gains 11 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +55%; Gains 1 extra DP when killing an enemy`, spInit: 18, sp: 37, dur: '10s' },
        { level: 'M3', desc: `Gradually gains 12 DP over the skill duration\nAll Vanguard Operators' ATK and DEF +60%; Gains 1 extra DP when killing an enemy`, spInit: 20, sp: 35, dur: '10s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Zima's Badge", desc: 'Appointed as Vanguard Operator to exercise Pioneer responsibilities' },
    solx: { code: 'SOL-X', name: 'A Graduation Gift for Генерал Мороз', stages: [
      { stage: 1, hp: '+180', def: '+32', effect: 'Trait improved: Blocks 2 enemies; Gains +8% ATK and DEF while blocking enemies' },
      { stage: 2, hp: '+225', def: '+35', effect: 'Spearheader improved: While this unit is in the squad, reduces the DP Cost of all Vanguard Operators by 1, and further reduces the DP Cost of this unit by 1' },
      { stage: 3, hp: '+260', def: '+37', effect: 'Spearheader improved: While this unit is in the squad, reduces the DP Cost of all Vanguard Operators by 1, and further reduces the DP Cost of Pioneer-branch Operators by 1' },
    ]},
  },
  story: `An Ursus student from Peterheim Middle School in Chernobog whose rough but decisive manner earned her the moniker "General Zima." Sonya Mikhailovna was trapped together with other students during the Chernobog uprising, becoming a sort of leader to the commoner students. However, she was responsible for worsening the conflict between the commoner and aristocrat students by accidentally setting a fire in the school's storehouse, which resulted in the destruction of the aristocrat students' food supply. As the situation became out of control, Sonya was forced to kill (or at least order the deaths of) unruly students. Sonya managed to escape from the chaos alongside Anna Morozova, Natalya Rostova, Lada, and Rosalind, and sought refuge in Rhodes Island as the leader of the Ursus Student Self-Governing Group. Since then, she has picked up the codename "Zima" and is currently making use of her fighting skills with her hand axe. In spite of her rude attitude, Zima gets along well with her U.S.S.G. comrades and the Rhodes Island staff.\n\nThe experience of the massacre and her guilt over the fire cause Zima to live with severe PTSD. She often experiences nightmares related to the events in Chernobog, and her own conscience keeps forcing her to regret her actions.`,
  profile: 'Before the Chernobog incident, Zima was a middle school student. In school, she displayed a peculiar interest in fighting and violence. Multiple tests have shown she has the strength and solid constitution characteristic of the Ursus race. Currently, she leads a squad of Vanguard Operator.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n\n[Blood Originium-Crystal Density] 0.1u/L\nThis Operator has rarely come into contact with Originium.` },
    { title: 'Archive File 1', content: `Zima defies most people's preconceived notions what an Ursus should be, expecting her to be irascible and sensitive. When she has something to say, she says it directly, and doesn't much consider what kind of impact it's going to leave her targets. What is certain is that Zima feels her words and actions are acceptable. Even so, as soon as she feels like one of her friends is being bullied or treated unfairly, she will stick up for them regardless of the circumstances.\nAs a result, childish jokes should be kept to a minimum in her presence. As for dealing with young Operators, a flexible attitude must be maintained.\nThe short of it is that Operators should watch what they say around Zima. They should be somewhat honest, but also help Zima understand that she and Rhodes Island share mutual interests.` },
    { title: 'Archive File 2', content: `Zima was born in the city of Chernobog in the Empire of Ursus. Reports have indicated that in recent years, student groups have become a popular for young Ursus to organize. Influenced by the cultures of countries like Victoria and Columbia, they spend all day immersed in rock music, beer, and fight clubs. The leader of every group of students has their own nickname. Zima's first nickname was, appropriately, "Zima," a nickname given to her by the leader of the eastern campus's student group after she defeated him. A separate group called her "General" (a derisive in-joke within that group – Ursans often joke that "General" is equivalent to someone who is incompetent and untrustworthy). However, after the annihilation of all the other student groups around the campus, people began to merge the two nicknames, and called her "General Zima."` },
    { title: 'Archive File 3', content: `It is clear that ever since the Chernobog incident, the surviving Ursus students have gathered in a loose group around Zima called the "Ursus Student Self-Governing Group." According to reports from some Operators, the students use Istina's room as a place to gather. They call it "The Classroom." We should maintain a schedule of periodic observations of this group's daily activities.` },
    { title: 'Archive File 4', content: `Zima's recent reading list:\nNikolamina – Fine summer reading!\nJump! – Special Edition – One of the year's Top Ten Recommendations\nThe Death of Ilyich, the Suspect – (Recommended Genre: Detective Literature)\nFriedrich's Theory of War – (Volkhov Press, reissued in October)\n......\nDespite how she seems, Zima does not show any indication of poor reading skills. The breadth of the genres she reads has left us with a deep impression. Perhaps we need to re-consider what we think of as popular literature among the middle school female population.` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/ursus-student-self-governing-group.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/zima/base.png', chibiSrc: '/operators/zima/chibi.webm', chibiMoveSrc: '/operators/zima/chibi-move.webm', chibiFraming: { scale: 1.1, offsetXPercent: 0, offsetYPercent: 2 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 2 }, illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/zima/e2.png', chibiSrc: '/operators/zima/chibi.webm', chibiMoveSrc: '/operators/zima/chibi-move.webm', chibiFraming: { scale: 1.1, offsetXPercent: 0, offsetYPercent: 2 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 2 }, illustrator: 'Skade' },
    { id: 'skin1', label: 'Ready to Go', src: '/operators/zima/skin1.png', chibiSrc: '/operators/zima/chibi-skin1.webm', chibiMoveSrc: '/operators/zima/chibi-move-skin1.webm', chibiFraming: { scale: 1.1, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1, offsetXPercent: 8, offsetYPercent: 2 }, illustrator: 'Skade' },
    { id: 'skin2', label: 'Ursus IO79', src: '/operators/zima/skin2.png', chibiSrc: '/operators/zima/chibi-skin2.webm', chibiMoveSrc: '/operators/zima/chibi-move-skin2.webm', chibiFraming: { scale: 1.1, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1, offsetXPercent: -1, offsetYPercent: 2 }, illustrator: 'Skade' },
  ],
  portrait: '/operators/zima/portrait.png',
  portraitFocus: { y: -9, x: 40.1, zoom: 276 },
}

export default zima
