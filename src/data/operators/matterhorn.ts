import type { Operator } from '../../types'

const matterhorn: Operator = {
  name: 'Matterhorn', fileNo: 'JC03', class: 'Defender', branch: 'Protector', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Karlan Trade', position: 'Melee', race: 'Forte', gender: 'Male', birthplace: 'Kjerag',
  birthday: 'May 19th', height: '182 cm', combatExp: '6 years', infectionStatus: 'Non-infected', illustrator: '竜崎いち',
  cv: { JP: 'Shunsuke Takeuchi', CN: 'MinoruK', EN: 'Adam Diggle', KR: 'Jang Min-hyuck' },
  trait: 'Blocks 3 enemies',
  tags: ['Defense'],
  stats: { hp: 3620, atk: 375, def: 670, res: 20, block: 3, cost: 21, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2]],
    e1: [[2]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Flawed' },
  talents: [
    { name: 'Snowfield Guard', desc: 'RES +7', elite: 'E1' },
    { name: 'Snowfield Guard', desc: 'RES +15', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Stamina Enhancement',
      icon: '/operators/matterhorn/skill-1.png',
      activation: 'Manual',
      recovery: 'Auto Recovery',
      desc: 'Max HP +70%; Restores HP by 40 per second',
      spInit: 10,
      sp: 35,
      rank: 'M3',
      dur: '30s',
      note: 'The HP regeneration is unaffected by healing effect modifiers and can still heal Matterhorn even if he becomes unable to be healed.',
      levels: [
        { level: '1', desc: 'Max HP +20%; Restores HP by 20 per second', spInit: 0, sp: 45, dur: '25s' },
        { level: '2', desc: 'Max HP +23%; Restores HP by 20 per second', spInit: 0, sp: 44, dur: '25s' },
        { level: '3', desc: 'Max HP +26%; Restores HP by 20 per second', spInit: 0, sp: 43, dur: '25s' },
        { level: '4', desc: 'Max HP +30%; Restores HP by 25 per second', spInit: 5, sp: 42, dur: '27s' },
        { level: '5', desc: 'Max HP +33%; Restores HP by 25 per second', spInit: 5, sp: 41, dur: '27s' },
        { level: '6', desc: 'Max HP +36%; Restores HP by 25 per second', spInit: 5, sp: 40, dur: '27s' },
        { level: '7', desc: 'Max HP +40%; Restores HP by 30 per second', spInit: 5, sp: 39, dur: '27s' },
        { level: 'M1', desc: 'Max HP +50%; Restores HP by 33 per second', spInit: 5, sp: 38, dur: '28s' },
        { level: 'M2', desc: 'Max HP +60%; Restores HP by 36 per second', spInit: 5, sp: 37, dur: '29s' },
        { level: 'M3', desc: 'Max HP +70%; Restores HP by 40 per second', spInit: 10, sp: 35, dur: '30s' },
      ],
    },
    {
      name: 'Cold Resistance',
      icon: '/operators/matterhorn/skill-2.png',
      activation: 'Manual',
      recovery: 'Auto Recovery',
      desc: 'Max HP +50%; DEF +30%; RES +100%',
      spInit: 10,
      sp: 32,
      levels: [
        { level: '1', desc: 'Max HP +20%; DEF +10%; RES +50%', spInit: 0, sp: 50, dur: '25s' },
        { level: '2', desc: 'Max HP +23%; DEF +10%; RES +53%', spInit: 0, sp: 49, dur: '25s' },
        { level: '3', desc: 'Max HP +26%; DEF +10%; RES +56%', spInit: 0, sp: 48, dur: '25s' },
        { level: '4', desc: 'Max HP +30%; DEF +10%; RES +60%', spInit: 0, sp: 47, dur: '27s' },
        { level: '5', desc: 'Max HP +33%; DEF +10%; RES +63%', spInit: 0, sp: 46, dur: '27s' },
        { level: '6', desc: 'Max HP +36%; DEF +10%; RES +66%', spInit: 0, sp: 45, dur: '27s' },
        { level: '7', desc: 'Max HP +40%; DEF +15%; RES +70%', spInit: 5, sp: 44, dur: '27s' },
        { level: 'M1', desc: 'Max HP +43%; DEF +20%; RES +80%', spInit: 5, sp: 40, dur: '28s' },
        { level: 'M2', desc: 'Max HP +46%; DEF +25%; RES +90%', spInit: 5, sp: 36, dur: '29s' },
        { level: 'M3', desc: 'Max HP +50%; DEF +30%; RES +100%', spInit: 10, sp: 32, dur: '30s' },
      ],
      rank: 'M3',
      dur: '30s',
    },
  ],
  modules: {
    original: { code: 'Original', name: "Matterhorn's Badge", desc: "Operator Matterhorn has demonstrated a remarkable aptitude for preservation of the front and resilience against the enemy.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Defender Operator during field operations to exercise Protector responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named." },
    proy: { code: 'PRO-Y', name: "Father's Robe", stages: [
      { stage: 1, hp: '+200', def: '+30', effect: 'Trait improved: Blocks 4 enemies (Block +1)' },
      { stage: 2, hp: '+300', def: '+40', effect: 'Snowfield Guard improved: RES +18' },
      { stage: 3, hp: '+380', def: '+50', effect: 'Snowfield Guard improved: RES +20' },
    ]},
  },
  story: `A member of the Karlan Trade Co. LTD born in Kjerag. Matterhorn is part of the cooperation agreement between the Karlan Trade Co. and Rhodes Island, but he also helps carry out missions for the latter as well.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n[Blood Originium-Crystal Density] 0.12u/L\nThis Operator has rarely come into contact with Originium.`,
    },
    {
      title: 'Archive File 1',
      content: `Since he was young, Matterhorn was trained to be SilverAsh's bodyguard. His father and grandfather were honorable guards for SilverAsh's family. Naturally, this became his goal, as well. However, unlike military training during his father's time, he still had the opportunity to study other subjects. Almost subconsciously, he chose cooking.`,
    },
    {
      title: 'Archive File 2',
      content: `Compared to foreign nations that are rich in resources, Kjerag has very few edible varieties of plants and animals. Even a wealthy family like SilverAsh's usually only eats plain meals. However, once Matterhorn became a cook, everything changed. His mastery of the art of cooking is awe-inspiring. With just a handful of Kjerag ingredients, he can craft culinary delicacies untasted by native Kjerags. It's no wonder that the politicians of Kjerag used to hold meetings at the government's reception hall, but now they only want to meet at SilverAsh's home. The power of food is truly something to behold.`,
    },
    {
      title: 'Archive File 3',
      content: `After coming to Rhodes Island, Matterhorn's combat frequency and intensity have increased substantially. His equipment, especially his shield, are in constant need of repair. Matterhorn knows some ways to perform simple repairs in the heat of battle, but thorough maintenance requires the skills of an artisan. Upon being given a recommendation, Matterhorn met Vulcan. Surprised by each other's abilities, they quickly established a long-term relationship: Vulcan maintains Matterhorn's equipment while Matterhorn provides renumeration. When they have free time, they exchange culinary recipes and occasionally share meals together. They are a good example of what close friends should be.`,
    },
    {
      title: 'Archive File 4',
      content: `Matterhorn's ancestors were born in the norther region of Kjerag where the environment is harsh and people fight against nature day after day. To ensure the survival of the others, when northern Kjerags go out to fight, they are considered dead. This conviction has resulted in future generations of brave warriors like Matterhorn.`,
    },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/karlan-trade.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/matterhorn/base.png', chibiSrc: '/operators/matterhorn/chibi.webm', illustrator: '竜崎いち' },
    { id: 'e2', label: 'Elite 2', src: '/operators/matterhorn/e2.png', chibiSrc: '/operators/matterhorn/chibi.webm', illustrator: '竜崎いち' },
    { id: 'skin1', label: 'Beach Guard GT.001', src: '/operators/matterhorn/skin1.png', chibiSrc: '/operators/matterhorn/chibi-skin1.webm', illustrator: '竜崎いち' },
  ],
  portrait: '/operators/matterhorn/portrait.png',
  portraitFocus: { y: 2, x: 40, zoom: 290 },
}

export default matterhorn
