import type { Operator } from '../../types'

const leto: Operator = {
  name: 'Leto', fileNo: 'USS5', class: 'Guard', branch: 'Lord', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Ursus Student Self-Governing Group', position: 'Melee', race: 'Ursus', gender: 'Female', birthplace: 'Ursus',
  birthday: 'March 30th', height: '167 cm', combatExp: '1.5 years', infectionStatus: 'Non-infected', illustrator: 'Skade',
  cv: { JP: 'Ayaka Asai', CN: 'Chen Yu', EN: 'Christina Sherman', KR: 'Lee Dal-lae' },
  trait: 'Can launch Ranged Attacks that deal 80% of normal ATK',
  tags: ['DPS', 'Support'],
  stats: { hp: 2280, atk: 680, def: 375, res: 10, block: 2, cost: 19, aspd: '1.3s', rdp: '70s' },
  range: {
    base: [[1,1,0],[2,1,1],[1,1,0]],
    e1: [[1,1,0,0],[2,1,1,1],[1,1,0,0]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Hurry Up Already!', desc: 'When skill is activated, [Ursus Student Self-Governing Group] Operators gain +21 ASPD for the duration', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Swift Strike γ', icon: '/operators/leto/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +45%; ASPD +45', spInit: 15, sp: 35, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%; ASPD +20', spInit: 0, sp: 45, dur: '35s' },
        { level: '2', desc: 'ATK +22%; ASPD +20', spInit: 0, sp: 44, dur: '35s' },
        { level: '3', desc: 'ATK +24%; ASPD +20', spInit: 0, sp: 43, dur: '35s' },
        { level: '4', desc: 'ATK +27%; ASPD +25', spInit: 5, sp: 42, dur: '35s' },
        { level: '5', desc: 'ATK +29%; ASPD +25', spInit: 5, sp: 41, dur: '35s' },
        { level: '6', desc: 'ATK +31%; ASPD +25', spInit: 5, sp: 40, dur: '35s' },
        { level: '7', desc: 'ATK +34%; ASPD +35', spInit: 10, sp: 39, dur: '35s' },
        { level: 'M1', desc: 'ATK +37%; ASPD +35', spInit: 10, sp: 38, dur: '35s' },
        { level: 'M2', desc: 'ATK +40%; ASPD +35', spInit: 10, sp: 37, dur: '35s' },
        { level: 'M3', desc: 'ATK +45%; ASPD +45', spInit: 15, sp: 35, dur: '35s' },
      ],
    },
    {
      name: 'Answer the Call', icon: '/operators/leto/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +115%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 16, sp: 28, dur: '25s', rank: 'M3',
      note: "The other U.S.S.G. Operators' skills will only be activated through Answer the Call if their activation conditions are met and the Operators themselves are neither disabled nor affected by Necrosis Damage.",
      levels: [
        { level: '1', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +20%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 6, sp: 52, dur: '25s' },
        { level: '2', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +30%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 7, sp: 49, dur: '25s' },
        { level: '3', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +40%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 8, sp: 46, dur: '25s' },
        { level: '4', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +50%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 9, sp: 43, dur: '25s' },
        { level: '5', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +60%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 10, sp: 40, dur: '25s' },
        { level: '6', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +70%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 11, sp: 37, dur: '25s' },
        { level: '7', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +80%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 12, sp: 35, dur: '25s' },
        { level: 'M1', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +90%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 14, sp: 32, dur: '25s' },
        { level: 'M2', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +100%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 14, sp: 30, dur: '25s' },
        { level: 'M3', desc: 'All [Ursus Student Self-Governing Group] Operators with skills ready activate their skills at the same time. Own ATK +115%, attack an extra target, and ranged attacks no longer reduce ATK', spInit: 16, sp: 28, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Leto's Badge", desc: 'Appointed as Guard Operator to exercise Lord responsibilities' },
    lory: { code: 'LOR-Y', name: 'The Old Clothes', stages: [
      { stage: 1, atk: '+40', def: '+25', effect: 'New trait: ASPD +12 when there are 2 or more enemies in attack range.' },
      { stage: 2, atk: '+52', def: '+39', effect: 'Hurry Up Already! improved: When skill is activated, [Ursus Student Self-Governing Group] Operators gain +27 ASPD for the duration.' },
      { stage: 3, atk: '+59', def: '+50', effect: 'Hurry Up Already! improved: When skill is activated, [Ursus Student Self-Governing Group] Operators gain +32 ASPD for the duration.' },
    ]},
  },
  story: `From the accounts of the various members of the Ursus Student Self-government Group, we've managed to piece together a rough picture of the events that took place. It's evident that, as a result of their experiences, the students have exhibited varying degrees of post-traumatic stress disorder after their onboarding at Rhodes Island, with one exception: Operator Leto.\n\nLeto does not shy away from the disaster she experienced, and appears to view that difficult time rather lightly. Trapped in the school, students struggling against one another, trying to survive in the ruined city... she seems to see the things she's been through as something of a heroic story with the USSG girls as the protagonists. She does not bring up the difficult or painful parts. Perhaps she genuinely believes that the hardships she overcame do not merit much mention. The only thing worth remembering in the end is that she and her comrades made it through, overcoming their difficulties together.\n\nAll's well that ends well.`,
  profile: 'A cheerful, battle-hardened member of the Ursus Student Self-Governing Group who shrugs off the trauma of Chernobog and instead treats it as a heroic story. Stays at Rhodes Island partly to fund her mother Tatyana\'s Oripathy treatment, partly for the thrill of field missions abroad.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Leto shows no signs of Originium infection.\n\n[Blood Originium-Crystal Density] 0.13u/L\nThe USSG girls were very lucky not to get infected back in Chernobog. But if they're going to be running all over the place, they'll want to be adding some extra protective measures when away from the ship.\n——Medic Operator` },
    { title: 'Archive File 2', content: `Rhodes Island has established a relatively comprehensive process for the placement of minors.\nFirst, we prioritize referring them to schools in various locations—depending mostly on Rhodes Island's current position—to facilitate the completion of the child's education. We would prefer the minors in question preserve their future prospects, after all.\nAlong with the other members of the USSG, Leto declined our proposal to attend another middle school in the Empire of Ursus. She chose instead to stay at Rhodes Island to work as an operator and receive instruction onboard. In addition to our courses, she was also "forced" by Istina and Rosa to undergo targeted small-group instruction, along with the similarly situated Zima and Gummy.\nUnlike Zima, Istina, and the others, Leto chose to stay for a more important reason—her mother. Tatyana Yevgenyevna Larina is currently undergoing Oripathy treatment at Rhodes Island. Under such circumstances, it is unsurprising that Leto chose to stay on as an operator, using her earnings to pay for her mother's treatment.` },
    { title: 'Archive File 3', content: `Operator Leto's background merits no further discussion. Her mother Tatyana has confirmed that Leto's father is from Kjerag. She was born and spent the first two years of her life in Kjerag, although she herself describes being raised by her mother alone on the snowy plains of Ursus. The Empire of Ursus has left a deep impression on her.\nDuring her childhood, she carried admiration and even hope for her father. But as she grew, she learned to earn her own respect, rather than wait for a father who would never appear. Her mother's free spirit also greatly influenced her.\nShe really doesn't care, and that's a good thing.\n\n[Oripathy Patient Record]\nTatyana Yevgenyevna Larina, female, Ursine explorer, has garnered a degree of fame among certain groups for her artifact excavations and mapping of uncharted regions.\nTwenty years ago, she lost contact with the outside world during an expedition, and later returned to Ursus with her daughter, whom she raised alone. Infected during the Chernobog Incident, she sought out Rhodes Island and found her daughter, Rosalind, now Operator Leto, whom we had rescued. Since then, Ms. Larina (senior) has chosen to stay at Rhodes Island for treatment.` },
    { title: 'Archive File 4', content: `Time flies, and it's been a few years since the USSG girls came to Rhodes Island. They were underage at the time, still immature in many ways. Now, they have grown up, and each have their own plans for the future. Their time spent at Rhodes Island has been a period of preparation, building strength for their respective futures. Operator Leto is no exception.\nHer talent for foreign languages, as well as her enthusiasm for the study thereof, has made her a popular choice for long-term field missions. The adventurous and challenge-seeking nature she's inherited from her mother has made her more than willing to be assigned such missions requiring visits to multiple countries. With the platform provided by Rhodes Island, Leto's footprints have covered the length and breadth of the lands over the past few years.` },
    { title: 'Promotion Record', content: `After some time, Leto finally gathers the courage to review her exams.\nLiterature: slightly better than last time. When it comes to the harder fields of math, physics, chemistry, and biology, she doesn't even need to look to know she'd just barely scraped by.\nNo way around it, Leto's completely hopeless in those subjects. But, as Sonya would say, she's not dumb, she just doesn't want to apply herself toward stuff she's not interested in.\nSocial sciences... satisfactory. That actually surprises her a bit. She didn't study at all, just answered based on her life experiences.\nUrsine Language—full marks! Ura!\nElective courses in Leithanian, Siracusan, and Kjerag tongues also came back with excellent grades. While her results in Mandarin Yanese are only decent, she just picked that one up not long ago, so she's happy enough.\nWith the exam paper in hand ready to show Mamochka, Leto can't help but start to plan in her head—\nWhere will she travel next?` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/lord-branch.png', factionIcon: '/icons/factions/ursus-student-self-governing-group.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/leto/base.png', chibiSrc: '/operators/leto/chibi.webm', illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/leto/e2.png', chibiSrc: '/operators/leto/chibi.webm', illustrator: 'Skade' },
  ],
  portrait: '/operators/leto/portrait.png',
  portraitFocus: { y: 6, x: 50, zoom: 290 },
}

export default leto
