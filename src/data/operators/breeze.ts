import type { Operator } from '../../types'

const breeze: Operator = {
  name: 'Breeze', fileNo: 'R132', class: 'Medic', branch: 'Multi-target', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Voucher Exchange'],
  faction: 'Victoria', position: 'Ranged', race: 'Vulpo', gender: 'Female', birthplace: 'Victoria',
  birthday: 'June 24th', height: '162 cm', combatExp: '1 year', infectionStatus: 'Infection confirmed by medical examination.', illustrator: '藻',
  cv: { JP: 'Haruna Ikezawa', CN: 'Chen Yujin (credited as "Jinni" in EN)', EN: 'Felecia Angelle', KR: 'Yoo Hye-ji' },
  trait: 'Restores the HP of 3 allies simultaneously',
  tags: ['Healing', 'Support'],
  stats: { hp: 1795, atk: 373, def: 153, res: 0, block: 1, cost: 17, aspd: '2.85s', rdp: '70s' },
  range: { base: [[1, 1, 1, 0], [1, 2, 1, 1], [1, 1, 1, 0]], e1: [[1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Flawed', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Medic Squad Protection', desc: "When this unit's skill is active, all Medic Operators gain status resistance", elite: 'E1' },
    { name: 'Medic Squad Protection', desc: "When this unit's skill is active, all Medic and Supporter Operators gain status resistance", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Cluster Therapy', icon: '/operators/breeze/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +140%, targets healed -1', spInit: 20, sp: 30, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +70%, targets healed -1`, spInit: 20, sp: 40, dur: '25s' },
        { level: '2', desc: `ATK +75%, targets healed -1`, spInit: 20, sp: 39, dur: '25s' },
        { level: '3', desc: `ATK +80%, targets healed -1`, spInit: 20, sp: 38, dur: '25s' },
        { level: '4', desc: `ATK +85%, targets healed -1`, spInit: 20, sp: 37, dur: '28s' },
        { level: '5', desc: `ATK +90%, targets healed -1`, spInit: 20, sp: 36, dur: '28s' },
        { level: '6', desc: `ATK +95%, targets healed -1`, spInit: 20, sp: 35, dur: '28s' },
        { level: '7', desc: `ATK +100%, targets healed -1`, spInit: 20, sp: 34, dur: '31s' },
        { level: 'M1', desc: `ATK +110%, targets healed -1`, spInit: 20, sp: 33, dur: '32s' },
        { level: 'M2', desc: `ATK +120%, targets healed -1`, spInit: 20, sp: 32, dur: '33s' },
        { level: 'M3', desc: `ATK +140%, targets healed -1`, spInit: 20, sp: 30, dur: '35s' },
      ],
    },
    {
      name: 'Widespread Therapy', icon: '/operators/breeze/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +250%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)', spInit: 60, sp: 80, dur: '45s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +110%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 40, sp: 80, dur: '35s' },
        { level: '2', desc: `ATK +120%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 40, sp: 80, dur: '36s' },
        { level: '3', desc: `ATK +130%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 40, sp: 80, dur: '37s' },
        { level: '4', desc: `ATK +150%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 44, sp: 80, dur: '38s' },
        { level: '5', desc: `ATK +160%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 44, sp: 80, dur: '39s' },
        { level: '6', desc: `ATK +170%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 44, sp: 80, dur: '40s' },
        { level: '7', desc: `ATK +190%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 48, sp: 80, dur: '41s' },
        { level: 'M1', desc: `ATK +210%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 52, sp: 80, dur: '42s' },
        { level: 'M2', desc: `ATK +230%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 56, sp: 80, dur: '43s' },
        { level: 'M3', desc: `ATK +250%, switch attack mode to firing a healing round to a friendly unit in range, healing the target and friendly units on the surrounding 8 tiles (healing amount is halved to surrounding units)`, spInit: 60, sp: 80, dur: '45s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Breeze's Badge", desc: 'Appointed as Medic Operator to exercise Multi-target Medic responsibilities' },
    rinx: { code: 'RIN-X', name: 'Surgical Instrument Kit', stages: [
      { stage: 1, hp: '+60', atk: '+30', effect: 'Trait improved: Attack Range expands' },
      { stage: 2, hp: '+80', atk: '+40', effect: "Medic Squad Protection improved: When this unit's skill is active, all Medic and Supporter Operators gain +10% Max HP and status resistance" },
      { stage: 3, hp: '+100', atk: '+47', effect: "Medic Squad Protection improved: When this unit's skill is active, all Medic and Supporter Operators gain +15% Max HP and status resistance" },
    ]},
  },
  story: `Grace Arizona, the only daughter of Henry and Beatrix Arizona, Victorian nobles based in County Toron, went against her parents' will out of her desire to help others and left the Arizona household after finishing her medical studies. She worked as the resident doctor for a band of Leithanian refugees, where she contracted Oripathy yet continued to help them. After encountering Rhodes Island, who later helped the refugees find a better place in their homeland, Grace joined them under the codename "Breeze," now acting as a field medic and skilled herbalist.`,
  profile: `Grace Arizona, the only daughter of a noble branch family in Victoria. She came into contact with Rhodes Island during the course of her advanced medical techniques study, and applied for a job at Rhodes Island. She excels in pharmacology and clinical theory, and now provides emergency battlefield medic services for Rhodes Island.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal blurry outlines of this operator's internal organs, clouded with abnormal dark spots. Her circulatory system shows an abnormally high rate of Originium particulate matter, with other signs of Oripathy infection, we can confirm that the operator is indeed Infected.\n\n[Somatic Cell-Originium Fusion Rate] 3%\nThe level of infection remains low, and has not yet had an effect on the body.\n\n[Blood Originium-Crystal Density] 0.21u/L\nAt this point, spread of the infection is steadily increasing, and we will need to proceed with a period of observation and control treatments.` },
    { title: 'Archive File 1', content: `Operator Breeze was born in one of Victoria's small border counties, to an ancient aristocratic family. Her clan was particularly rigid in their adherance to ancient rules of nobility, meaning they were left behind by the waves of development that swept over Victoria, giving Breeze certain ideas about leaving home. Like many young people looking for better lives, Breeze left Victoria to travel alone, against the fervent objections of her parents. Once she was free of her hometown, she began to realize the degree to which she had been shackled by aristocratic dogma. Little by little, Breeze began to experience what life truly was. And her talent for medicine taught her to focus on the present, pushing her to save more and more of the displaced innocents of the world.` },
    { title: 'Archive File 2', content: `Thanks to a period of foreign study in her early years, Breeze's medical prowess has not been limited in either clinical or theoretical respects. The young girl with the jet black staff strides through refugee camps and shelters all the year round. Although she is often mistaken for some kind of missionary cultist and sent away, her excellent healing Arts have saved many lives. Breeze does not rely too much on Originium Arts, nor does she rely too much on pharmacology or equipment. On the contrary, she does what she can on the fringes of the art, making especially good use of herbal medicines. She can often be seen out in the fields picking herbs with a big smile on her face, making her famous in many towns and villages. In a way, Breeze, who never considered herself part of the nobility, is fulfilling an aristocratic duty to the people. Maybe.` },
    { title: 'Archive File 3', content: `Wh- while it may not be right to compare her to Miss Franka, I think Miss Breeze is also something of a mischievous Vulpo girl. Since becoming friendly with me, she never misses an opportunity to tease or taunt me. Could this be some racial aptitude of the Vulpo? Addendum: While Miss Breeze will indeed tease her friends, it is only after they return fire, so to speak, that she considers it truly open season. Yes, although it can be hard to shoot back, after getting used to it, I think Miss Breeze is actually quite nice? I'm not sure if Liskarm actually needs this information...\n—Record of an anonymous operator.` },
    { title: 'Archive File 4', content: `The mighty oak will be felled by the storm, while only the little grass will remain.\nIn such times, it does not matter where Breeze's staff comes from. It may be the correct choice for her and her family to stay as they are. The world has little need of more strongmen or conspirators. It is unfortunate that she became Infected, but Breeze is still doing what she can for those common people who have yet to be crushed by the Catastrophes.\nI have nothing against people like Breeze. Not at all. She has chosen the object of her faith. She believes in hope, light, Rhodes Island, and you, Doctor. You cannot let such people down.` },
    { title: 'Promotion Record', content: `The truth is, when I left home, Dad slipped a "eulogy" into my bag, thinking I didn't know. Of course I knew. As big as my bag is, and that "eulogy" can't even be folded... But if I think about it, it's because of all those rules and traditions that I abandoned Dad and left the family to begin with, so how is it that I end up carrying around this family heirloom, our symbol of aristocratic dogma, right here on my person? That Dad, he really is a...` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/multi-target-medic-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/breeze/base.png', chibiSrc: '/operators/breeze/chibi.webm', illustrator: '藻' },
    { id: 'e2', label: 'Elite 2', src: '/operators/breeze/e2.png', chibiSrc: '/operators/breeze/chibi.webm', illustrator: '藻' },
    { id: 'skin1', label: 'Half-sweet Strawberry', src: '/operators/breeze/skin1.png', chibiSrc: '/operators/breeze/chibi.webm', illustrator: 'Studio Montagne' },
  ],
  portrait: '/operators/breeze/portrait.png',
  portraitFocus: { y: -7, x: 55, zoom: 260 },
}

export default breeze
