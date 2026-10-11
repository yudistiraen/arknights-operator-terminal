import type { Operator } from '../../types'

const earthspirit: Operator = {
  name: 'Earthspirit', fileNo: 'LN01', class: 'Supporter', branch: 'Decel Binder', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Leithanien', position: 'Ranged', race: 'Caprinae', gender: 'Female', birthplace: 'Leithanien',
  birthday: 'April 5th', height: '161 cm', combatExp: 'None', infectionStatus: 'Showed physical signs of Originium poisoning, infection confirmed by medical examination.', illustrator: 'HUG',
  cv: { JP: 'Aoi Yuuki', CN: 'Zilan Qu', EN: 'Sarah Wiedenheft', KR: 'Chae Min-ji' },
  trait: 'Deals Arts damage and Slows the target for a short time',
  tags: ['Slow'],
  stats: { hp: 1205, atk: 480, def: 101, res: 20, block: 1, cost: 14, aspd: '1.9s', rdp: '70s' },
  range: { base: [[1,1,1,1],[1,2,1,1],[1,1,1,1]], e1: [[1,1,1,1],[1,2,1,1],[1,1,1,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [{ name: 'Geological Survey', desc: 'Extends Slow duration slightly', elite: 'E2' }],
  skills: [
    {
      name: 'ATK Up β', icon: '/operators/earthspirit/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%', spInit: 0, sp: 40, dur: '25s' },
        { level: '2', desc: 'ATK +25%', spInit: 0, sp: 40, dur: '25s' },
        { level: '3', desc: 'ATK +30%', spInit: 0, sp: 40, dur: '25s' },
        { level: '4', desc: 'ATK +35%', spInit: 0, sp: 37, dur: '25s' },
        { level: '5', desc: 'ATK +40%', spInit: 0, sp: 37, dur: '25s' },
        { level: '6', desc: 'ATK +45%', spInit: 0, sp: 37, dur: '25s' },
        { level: '7', desc: 'ATK +50%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M1', desc: 'ATK +60%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M2', desc: 'ATK +70%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M3', desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Quicksand Conversion', icon: '/operators/earthspirit/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking; Enemies within range are Slowed every 1.4 seconds', spInit: 15, sp: 40, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Stops attacking; Enemies within range are Slowed every 1.8 seconds', spInit: 0, sp: 60, dur: '25s' },
        { level: '2', desc: 'Stops attacking; Enemies within range are Slowed every 1.8 seconds', spInit: 0, sp: 58, dur: '25s' },
        { level: '3', desc: 'Stops attacking; Enemies within range are Slowed every 1.8 seconds', spInit: 0, sp: 56, dur: '25s' },
        { level: '4', desc: 'Stops attacking; Enemies within range are Slowed every 1.7 seconds', spInit: 5, sp: 54, dur: '25s' },
        { level: '5', desc: 'Stops attacking; Enemies within range are Slowed every 1.7 seconds', spInit: 5, sp: 52, dur: '25s' },
        { level: '6', desc: 'Stops attacking; Enemies within range are Slowed every 1.7 seconds', spInit: 5, sp: 50, dur: '25s' },
        { level: '7', desc: 'Stops attacking; Enemies within range are Slowed every 1.6 seconds', spInit: 10, sp: 48, dur: '25s' },
        { level: 'M1', desc: 'Stops attacking; Enemies within range are Slowed every 1.6 seconds', spInit: 10, sp: 46, dur: '25s' },
        { level: 'M2', desc: 'Stops attacking; Enemies within range are Slowed every 1.5 seconds', spInit: 10, sp: 44, dur: '25s' },
        { level: 'M3', desc: 'Stops attacking; Enemies within range are Slowed every 1.4 seconds', spInit: 15, sp: 40, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Earthspirit's Badge", desc: 'Appointed as Supporter Operator to exercise Decel Binder responsibilities' },
    decy: { code: 'DEC-Y', name: 'Application Forms, To Be Confirmed', stages: [
      { stage: 1, hp: '+90', def: '+20', effect: 'Trait improved: Attacks deal Arts damage, and Slow the enemy for a moderate period of time' },
      { stage: 2, hp: '+110', def: '+30', effect: 'Geological Survey improved: Extends the duration of Slow caused by the Trait' },
      { stage: 3, hp: '+130', def: '+38', effect: 'Geological Survey improved: Further the duration of Slow caused by the Trait' },
    ]},
  },
  story: `A Leithanian Caprinae Catastrophe Messenger and geologist, Glacier Wegenie, codenamed "Earthspirit", is currently lending her geological and Catastrophe expertise to Rhodes Island along with her aid in combat. A friend of Provence and mentor of Eyjafjalla, Glacier appears to suffer from schizophrenia since she claims to hear voices from the Originium piece embedded in her staff.`,
  profile: `Earthspirit is a geologist. She fills the gaps we have in fields such as environmental assessment, battlefield analysis, and terrain utilization.\nShe currently serves with a support squad performing geological surveys, early Catastrophe warnings and other related services for Rhodes Island.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests for this Operator showed blurry outlines of internal organs with visible dark spots. Unusually high concentrations of Originium particles were present in her circulatory system, indicating infection and confirming her as Infected at this stage.\n[Cell-Originium Assimilation] 14%\nOperator Earthspirit showed physical signs of crystal formation, with lesioned arms.\n[Blood Originium-Crystal Density] 0.31u/L\nInfection entering mid-stage, but still manageable.`,
    },
    {
      title: 'Archive File 1',
      content: `Operator Earthspirit is dedicated to her job. When she lowers her head to study a stone, it becomes the entire focus of her world. The joke is that even if you replaced Earthspirit's lunch with a pile of red clay, she wouldn't even notice until the end of the work day. And as much as her efforts pay off and her research bears fruit, she still makes sure to stop working at the proper time each day.\nShe is committed to maintaining a proper work-life balance by beginning and ending her research on time. Even since becoming Infected, she still keeps this commitment to what she considers a good lifestyle. Her professionalism and determination all stem from her personal approach to life, and she won't let anyone get in the way of that approach.\nOf course, there are times when it will be necessary to ask Earthspirit to work overtime, at which point we will have to pay her a substantial overtime bonus, as well as endure her eye rolling.\nStill, when you watch Earthspirit work, when you see her intense focus, and her meticulous appearance, you will know at once that she is one of the most professional Operators you could hope to meet.`,
    },
    {
      title: 'Archive File 2',
      content: `As a geological researcher, her passion for rocks began when she was still in school. According to Earthspirit, studying the soil composition of samples from different eras will help us better understand the history of the land (she used at least four descriptors for the "land" alone). The study of rocks is the most fundamental discipline in the field, and also the most important.\nEarthspirit's specialty is field surveys. She knows the formation, layout and history of all manner of different rocks and sediment, as well as what danger different forms of terrain could present to people. She never thought, though, that she would end up applying her expertise in battle.`,
    },
    {
      title: 'Archive File 3',
      content: `Earthspirit became infected while collecting Originium samples in the field. She seems rather apathetic towards her infection, however, because it failed to enhance her connection to Originium or any other geological formation. In fact, it has turned out to be a major hindrance to her work. She completely trusts the course of treatment offered to her because she hasn't the time to worry about her affliction.\nTo raise funds for her research, Earthspirit would also provide early Catastrophe warnings to towns and cities nearby while performing field surveys. Therefore making her a Herald of Catastrophe (despite her repeated insistence that it's only a second job, people still sought out her expertise).\nAmong the Heralds of Catastrophe, Earthspirit and Provence are friends (Provence still performs her duties as a Herald of Catastrophe while serving as a Rhodes Island Operator). Earthspirit also mentors volcanologist and fellow Caprinae, Eyjafjalla, on occasion.`,
    },
    {
      title: 'Archive File 4',
      content: `According to Earthspirit, the hunk of Originium on her staff often speaks to her. Before arriving at Rhodes Island, it was unintelligible chatter. But now she finds she can understand some of what it has to say.\nEarthspirit finds this unnerving, but since her staff was custom-enchanted with Leithanienn Arts and sonar projection added for geological surveys, she couldn't give it up. So she has to live with the voice and get used its chattering as part of her job.\nSince no one but Earthspirit can hear the voice and no other Operators have complained, treatment for chronic occupational stress-related tinnitus should be considered.`,
    },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/decel-binder-branch.png', factionIcon: '/icons/factions/leithanien.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/earthspirit/base.png', chibiSrc: '/operators/earthspirit/chibi.webm', illustrator: 'HUG' },
    { id: 'e2', label: 'Elite 2', src: '/operators/earthspirit/e2.png', chibiSrc: '/operators/earthspirit/chibi.webm', illustrator: 'HUG' },
    { id: 'skin1', label: 'Major Field', src: '/operators/earthspirit/skin1.png', chibiSrc: '/operators/earthspirit/chibi-skin1.webm', illustrator: 'HUG' },
  ],
  portrait: '/operators/earthspirit/portrait.png',
  portraitFocus: { y: 3, x: 72, zoom: 290 },
}

export default earthspirit
