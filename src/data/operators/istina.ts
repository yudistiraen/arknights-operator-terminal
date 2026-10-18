import type { Operator } from '../../types'

const istina: Operator = {
  name: 'Istina', fileNo: 'USS2', class: 'Supporter', branch: 'Decel Binder', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Ursus Student Self-Governing Group', position: 'Ranged', race: 'Ursus', gender: 'Female', birthplace: 'Ursus',
  birthday: 'September 22nd', height: '156 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Skade',
  cv: { JP: 'Aoi Yuuki', CN: 'Z-kun (credited as "Z" in EN)', EN: 'Risa Mei', KR: 'Kim Ga-ryeong' },
  trait: 'Deals Arts damage and Slows the target for a short time',
  tags: ['Slow', 'DPS'],
  stats: { hp: 1280, atk: 583, def: 104, res: 20, block: 1, cost: 15, aspd: '1.9s', rdp: '70s' },
  range: {
    base: [
      [1, 1, 1, 1],
      [1, 2, 1, 1],
      [1, 1, 1, 1],
    ],
    e1: [
      [1, 1, 1, 1],
      [1, 2, 1, 1],
      [1, 1, 1, 1],
    ],
    e2: [
      [1, 1, 1, 1],
      [1, 2, 1, 1],
      [1, 1, 1, 1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Explorer', desc: 'DEF -35%; ASPD +18', elite: 'E2' },
    { name: 'Explorer', desc: 'DEF -35%; ASPD +21 (+3)', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Concentration', icon: '/operators/istina/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Very Significant Attack Interval reduction', spInit: 20, sp: 40, dur: '30s', rank: 'M3',
      note: "Concentration reduces Istina's attack interval by 0.8/0.8/0.8/0.9/0.9/0.9/1/1/1/1.1 seconds.",
      levels: [
        { level: '1', desc: 'Small Attack Interval reduction', spInit: 20, sp: 50, dur: '20s' },
        { level: '2', desc: 'Small Attack Interval reduction', spInit: 20, sp: 49, dur: '21s' },
        { level: '3', desc: 'Small Attack Interval reduction', spInit: 20, sp: 48, dur: '22s' },
        { level: '4', desc: 'Moderate Attack Interval reduction', spInit: 20, sp: 47, dur: '23s' },
        { level: '5', desc: 'Moderate Attack Interval reduction', spInit: 20, sp: 46, dur: '24s' },
        { level: '6', desc: 'Moderate Attack Interval reduction', spInit: 20, sp: 45, dur: '25s' },
        { level: '7', desc: 'Significant Attack Interval reduction', spInit: 20, sp: 44, dur: '26s' },
        { level: 'M1', desc: 'Significant Attack Interval reduction', spInit: 20, sp: 43, dur: '27s' },
        { level: 'M2', desc: 'Significant Attack Interval reduction', spInit: 20, sp: 42, dur: '28s' },
        { level: 'M3', desc: 'Very Significant Attack Interval reduction', spInit: 20, sp: 40, dur: '30s' },
      ],
    },
    {
      name: 'Literature Storm', icon: '/operators/istina/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +75%; Range expands; Attacks 2 extra targets', spInit: 30, sp: 50, dur: '25s', rank: 'M3',
      range: [
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
      ],
      levels: [
        { level: '1', desc: 'ATK +20%; Range expands; Attacks 1 extra target', spInit: 0, sp: 50, dur: '20s' },
        { level: '2', desc: 'ATK +20%; Range expands; Attacks 1 extra target', spInit: 3, sp: 50, dur: '20s' },
        { level: '3', desc: 'ATK +20%; Range expands; Attacks 1 extra target', spInit: 6, sp: 50, dur: '20s' },
        { level: '4', desc: 'ATK +25%; Range expands; Attacks 2 extra targets', spInit: 10, sp: 50, dur: '22s' },
        { level: '5', desc: 'ATK +25%; Range expands; Attacks 2 extra targets', spInit: 13, sp: 50, dur: '22s' },
        { level: '6', desc: 'ATK +25%; Range expands; Attacks 2 extra targets', spInit: 16, sp: 50, dur: '22s' },
        { level: '7', desc: 'ATK +30%; Range expands; Attacks 2 extra targets', spInit: 20, sp: 50, dur: '25s' },
        { level: 'M1', desc: 'ATK +45%; Range expands; Attacks 2 extra targets', spInit: 23, sp: 50, dur: '25s' },
        { level: 'M2', desc: 'ATK +60%; Range expands; Attacks 2 extra targets', spInit: 26, sp: 50, dur: '25s' },
        { level: 'M3', desc: 'ATK +75%; Range expands; Attacks 2 extra targets', spInit: 30, sp: 50, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Istina's Badge", desc: 'Operator Istina has demonstrated a remarkable aptitude for impeding the enemy.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Supporter Operator during field operations to exercise Decel Binder responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.' },
    decy: { code: 'DEC-Y', name: 'Reading Notes', stages: [
      { stage: 1, hp: '+90', aspd: '+3', effect: 'New trait: Attacks deal Arts damage, and Slow the enemy for a moderate period of time' },
      { stage: 2, hp: '+120', aspd: '+4', effect: "Explorer improved: DEF -35%; ASPD +21. While this unit's skill is active, further increase ASPD by 5" },
      { stage: 3, hp: '+160', aspd: '+5', effect: "Explorer improved: DEF -35%; ASPD +21. While this unit's skill is active, further increase ASPD by 10" },
    ]},
  },
  story: `An Ursus student from Peterheim Middle School in Chernobog, Anna Morozova witnessed numerous atrocities committed by her fellow students while they were trapped there during the Reunion-instigated uprising, including the death of her best friend Vika. Anna managed to escape from Chernobog alongside Natalya Rostova, Lada, Rosalind, and Sonya and sought refuge in Rhodes Island as part of the Ursus Student Self-Governing Group. Since her arrival at Rhodes Island, she has taken up the codename "Istina" and is currently practicing various Originium Arts she learnt from countless books to stop her enemies from hurting her fellow students. Additionally, she is using her vast knowledge to assist R.I.'s intelligence and information processing services.\nTraumatized by the events in Chernobog, Istina suffers from PTSD. She avoids talking about her times in Chernobog but has taken part in a form of exposure therapy by recording herself speak about her experiences. The teddy bear she carries all the time is the only memento she has from her friend Vika who fell to her death. Istina's guilt stems from her hesitance and refusal to help Vika due to the latter's opposition towards Zima's leadership at the time.`,
  profile: `Before the Chernobog incident, Istina was a middle school student. In school, she wrote many articles about Originium Arts. Her areas of expertise: masters of Arts, investigative articles, and sociology.\nIn a number of tests, she has demonstrated excellent control-type Originium Arts. She has been approved to assist in battle. She also provides intel and data processing services for Rhodes Island.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n[Blood Originium-Crystal Density] 0.1u/L\nThis Operator has rarely come into contact with Originium.` },
    { title: 'Archive File 1', content: `Istina is cool-headed and rational, though somewhat introverted. She often absorbs herself in her hobbies: the meticulous study of more profound Originium Arts, the study of the latest social theories, observation of others and their relationships, and fashion.\nOver the course of her multiple interactions with the Ursus Student Group, Istina displayed rare communication abilities and an assured manner, and gave clear and focused answers. We are certain that Istina intends to hold proactive exchanges with Rhodes Island, and may be a positive factor in communication with the Ursus Student Self-Governing Group.` },
    { title: 'Archive File 2', content: `It is now known that the 'Ursus Student Self-Governing Group' was originally proposed by Istina. The group's establishment helped the Ursus students work together and get past the initial phase of isolation and mutual distrust.\nDuring consultation, Istina keenly answered several questions concerning Zima. Istina believes that although Zima is rude and sometimes unreasonable, she attaches great importance to her companions in the Self-Governing Group and is a competent leader. And if she could add her own input during operations, this would be even better.\nWhile discussing Zima, the Doctor made many pointed remarks, but Istina gave opposing opinions. Istina believes that Zima will not become a destabilizing force for Rhodes Island, and that to believe that her amibitions extend only as far as Rhodes Island would be to underestimate her.` },
    { title: 'Archive File 3', content: `Istina was born in Chernobog, a city in the Empire of Ursus. Her parents were both employed in local agencies. During the periodic riots by student organizations, Istina declined to participate and instead chose to read quietly. As she had no interest in the loud music and partying of her peers, she began to read some particularly interesting books coming out of Londinium, Victoria at the time. From these, she started to reevalute everything she thought she knew, and began to see everything in a new light.` },
    { title: 'Archive File 4', content: `With regard to her whereabouts during the Chernobog incident, Istina modestly and succinctly declined to answer, but she showed several changes of emotion in doing so. On account of Rhodes Island's current policies and the need to protect certain company secrets, investigations into the Ursus Student Self-Governing Group have temporarily ceased.\nIn view of the background investigation into the Ursus Student Groups, there is no need to question Istina's background. Because of this, it is advisable to use psychologically founded methods to communicate with Ursus students. Future options for cooperation should be provided based on the suitability and independence of the student union members.\nNote: Based on Istina's intense level of interest in the books in the Doctor's office, it is advisable to give her a degree of reading privileges.` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/decel-binder-branch.png', factionIcon: '/icons/factions/ursus-student-self-governing-group.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/istina/base.png', chibiSrc: '/operators/istina/chibi.webm', chibiMoveSrc: '/operators/istina/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/istina/e2.png', chibiSrc: '/operators/istina/chibi.webm', chibiMoveSrc: '/operators/istina/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'skin1', label: 'Bibliosmia', src: '/operators/istina/skin1.png', chibiSrc: '/operators/istina/chibi-skin1.webm', chibiMoveSrc: '/operators/istina/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
  ],
  portrait: '/operators/istina/portrait.png',
  portraitFocus: { y: -2.5, x: 50.6, zoom: 293 },
}

export default istina
