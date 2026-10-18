import type { Operator } from '../../types'

const fang: Operator = {
  name: 'Fang', fileNo: 'PA11', class: 'Vanguard', branch: 'Pioneer', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A1', position: 'Melee', race: 'Kuranta', gender: 'Female', birthplace: 'Kazimierz',
  birthday: 'December 2nd', height: '158 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '下野宏铭',
  cv: { JP: 'Ryoko Shiraishi', CN: 'Chen Yanyi', EN: 'Norma Butikofer', KR: 'Kim Ha-ru' },
  trait: 'Blocks 2 enemies',
  tags: ['DP-Recovery'],
  stats: { hp: 1325, atk: 325, def: 310, res: 0, block: 2, cost: 11, aspd: '1.05s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Lightweight', desc: 'DP Cost -1', elite: 'E1' }],
  skills: [{
    name: 'Charge α', icon: '/operators/fang/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
    desc: 'Instantly gain 6 DP', spInit: 6, sp: 25, rank: 'Rank 7',
    levels: [
      { level: '1', desc: 'Instantly gains 6 Deployment Points.', spInit: 0, sp: 30 },
      { level: '2', desc: 'Instantly gains 6 Deployment Points.', spInit: 0, sp: 29 },
      { level: '3', desc: 'Instantly gains 6 Deployment Points.', spInit: 0, sp: 28 },
      { level: '4', desc: 'Instantly gains 6 Deployment Points.', spInit: 3, sp: 27 },
      { level: '5', desc: 'Instantly gains 6 Deployment Points.', spInit: 3, sp: 26 },
      { level: '6', desc: 'Instantly gains 6 Deployment Points.', spInit: 3, sp: 25 },
      { level: '7', desc: 'Instantly gains 6 Deployment Points.', spInit: 6, sp: 25 },
    ],
  }],
  modules: {},
  story: `A young Kazimierzian Kuranta raised in Columbia, Fang decided to follow many Kazimierzian immigrants and move to the country when she was 10 years old. Inspired by the Columbian Police Force's ideals of justice and equality, she later became a police cadet in Tkaronto who worked together with Kroos and Beagle, after the three of whom earned the highest grades in the Tkaronto Police Academy's history.\n\nWhen a Catastrophe titled "Blackwasp" hit the city, however, Fang and her friends risked their lives to save as many lives as possible in Tkaronto's Infected district —Plate #4, contracting Oripathy in the process. She then joined Rhodes Island together with her colleagues to escape discrimination as Infected within her police station and ultimately overcoming her grief for Plate #4's residents' deaths. In R.I., she is putting her police training and speed to good use as a vanguard and the leader of Op Reserve Team A1.`,
  profile: `Captain of Op Reserve Team A1. She has prior experience working with a Columbian garrison, and has proven herself to be outstanding in combat. After joining Rhodes Island, she had no problem adjusting to her current work. She joined the Operation Planning Group with its original members, Beagle and Kroos, and has worked hard to become its leading Operator.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Fusion Rate] 7.4%\nShe presents no obvious external symptoms of Oripathy.\n[Blood Crystal Density] 0.2 u/L\nDegree of infection is minor and physical symptoms are not yet present.`,
    },
    {
      title: 'Archive File 1',
      content: `Fang shows off a Kuranta's natural dominance in battle by always holding the most advantageous position at the critical moment. To strike a balance between power and control, Fang prefer to use a spear, which she applies with versatility in any situation. Fang acts impulsively and springs into action before others even finish talking.`,
    },
    {
      title: 'Archive File 2',
      content: `Immigrants from many nations came to the outskirts of Columbia. Fang, Kroos, and Beagle all met there after moving from their respective homelands. After realizing their common goals, they joined the city guard and underwent basic training together. The humorless Fang, the gentle Beagle, and the laid-back Kroos possess wildly different personalities yet rely on one another for support.`,
    },
    {
      title: 'Archive File 3',
      content: `Before an election day, a Catastrophe struck the outskirts of Columbia. In their efforts to aid others in escaping, all three Operators were infected with Oripathy. Fang suffered discrimination due to her condition and fell into deep despair. Kroos rallied the three of them and together they went to Rhodes Island.`,
    },
    {
      title: 'Archive File 4',
      content: `After arriving at Rhodes Island, Fang and her two companions as well as Hibiscus and Lava were all trained by Dobermann. The training was extraordinarily intense, and Kroos and Hibiscus seized every opportunity they could to goof off. Even Fang as their captain couldn't do anything to control them. Currently, Fang is training herself to be as intense and strict as her teacher, Dobermann. However, if the giddy expression on her face as she eats fruit is any indication, she's got a long way to go.`,
    },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/op-reserve-a1.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/fang/base.png', chibiSrc: '/operators/fang/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Cruciata', src: '/operators/fang/skin1.png', chibiSrc: '/operators/fang/chibi-skin1.webm', illustrator: '下野宏铭' },
  ],
  portrait: '/operators/fang/portrait.png',
  portraitFocus: { y: -6.8, x: 59.1, zoom: 289 },
  alter: {
    name: 'Fang the Fire-Sharpened', fileNo: 'RF04', class: 'Vanguard', branch: 'Charger', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Headhunting'],
    position: 'Melee', trait: 'Obtain 1 DP after this unit defeats an enemy; Refunds the original DP Cost when retreated',
    tags: ['DP-Recovery', 'DPS'],
    illustrator: '下野宏铭',
    stats: { hp: 2151, atk: 560, def: 353, res: 0, block: 1, cost: 12, aspd: '1s', rdp: '70s' },
    range: { base: [[2,1]], e1: [[2,1]] },
    physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
    talents: [
      { name: 'Lightweight Gambit', desc: 'Initial DP Cost -3; after retreating, the next Operator has DP Cost -1.', elite: 'E2' },
    ],
    skills: [
      {
        name: 'Impaler Lance', icon: '/operators/fang/alter/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
        desc: 'Next attack strikes twice with 180% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 3 charges.', spInit: 0, sp: 5, rank: 'M3',
        levels: [
          { level: '1', desc: `Next attack strikes twice with 120% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 1 charges.`, spInit: 0, sp: 7 },
          { level: '2', desc: `Next attack strikes twice with 125% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 1 charges.`, spInit: 0, sp: 7 },
          { level: '3', desc: `Next attack strikes twice with 130% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 1 charges.`, spInit: 0, sp: 7 },
          { level: '4', desc: `Next attack strikes twice with 135% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 1 charges.`, spInit: 0, sp: 6 },
          { level: '5', desc: `Next attack strikes twice with 140% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 1 charges.`, spInit: 0, sp: 6 },
          { level: '6', desc: `Next attack strikes twice with 145% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 1 charges.`, spInit: 0, sp: 6 },
          { level: '7', desc: `Next attack strikes twice with 150% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 2 charges.`, spInit: 0, sp: 5 },
          { level: 'M1', desc: `Next attack strikes twice with 160% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 2 charges.`, spInit: 0, sp: 5 },
          { level: 'M2', desc: `Next attack strikes twice with 170% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 2 charges.`, spInit: 0, sp: 5 },
          { level: 'M3', desc: `Next attack strikes twice with 180% ATK. If it defeats an enemy, restore +1 DP.\nCan store up to 3 charges.`, spInit: 0, sp: 5 },
        ],
      },
      {
        name: 'Stand Your Ground', icon: '/operators/fang/alter/skill-2.png', activation: 'Passive', recovery: 'Passive',
        desc: 'ATK +120%, DEF +40%, Blocked enemies +1, attacks all blocked enemies', spInit: 0, sp: 0, dur: '20s', rank: 'M3',
        note: 'Contrary to the wording, Fang the Fire-Sharpened does not need to block the enemies for her attacks with Stand Your Ground to hit them. Rather, the Fire-Sharpened\'s attacks hit multiple targets in range equal to her block count.',
        levels: [
          { level: '1', desc: 'ATK +70%, DEF +20%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '10s' },
          { level: '2', desc: 'ATK +75%, DEF +20%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '12s' },
          { level: '3', desc: 'ATK +80%, DEF +25%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '12s' },
          { level: '4', desc: 'ATK +85%, DEF +25%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '14s' },
          { level: '5', desc: 'ATK +85%, DEF +30%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '14s' },
          { level: '6', desc: 'ATK +90%, DEF +30%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '16s' },
          { level: '7', desc: 'ATK +95%, DEF +30%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '18s' },
          { level: 'M1', desc: 'ATK +100%, DEF +40%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '19s' },
          { level: 'M2', desc: 'ATK +110%, DEF +40%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '20s' },
          { level: 'M3', desc: 'ATK +120%, DEF +40%, Blocked enemies +1, attack all blocked enemies', spInit: 0, sp: 0, dur: '20s' },
        ],
      },
    ],
    modules: {
      original: { code: 'Original', name: "Fang the Fire-Sharpened's Badge", desc: 'Appointed as Vanguard Operator to exercise Charger responsibilities' },
      chgx: { code: 'CHG-X', name: 'The Dauntless', stages: [
        { stage: 1, atk: '+40', aspd: '+3', effect: 'Trait improved: Generates 2 DP after this unit defeats an enemy; Refunds the current DP Cost when retreated' },
        { stage: 2, atk: '+55', aspd: '+4', effect: 'Lightweight Gambit improved: Initial DP Cost -4; after retreating, the next Operator has DP Cost -1.' },
        { stage: 3, atk: '+65', aspd: '+5', effect: 'Lightweight Gambit improved: Initial DP Cost -4; after retreating, the next Operator has DP Cost -2.' },
      ]},
    },
    story: `A young Kazimierzian Kuranta raised in Columbia, Fang decided to follow many Kazimierzian immigrants and move to the country when she was 10 years old. Inspired by the Columbian Police Force's ideals of justice and equality, she later became a police cadet in Tkaronto who worked together with Kroos and Beagle, after the three of whom earned the highest grades in the Tkaronto Police Academy's history.\n\nWhen a Catastrophe titled "Blackwasp" hit the city, however, Fang and her friends risked their lives to save as many lives as possible in Tkaronto's Infected district —Plate #4, contracting Oripathy in the process. She then joined Rhodes Island together with her colleagues to escape discrimination as Infected within her police station and ultimately overcoming her grief for Plate #4's residents' deaths. In R.I., she is putting her police training and speed to good use as a vanguard and the leader of Op Reserve Team A1.`,
    profile: `After grueling training and many field missions, Fang has fulfilled her wish of passing her evaluation and formally becoming a Rhodes Island operator. Through first-hand experience, she has honed her mind and abilities, mastering both battlefield command and the communication skills required on the front lines. In times of crisis, she is no longer the impetuous girl she once was. She now has the skill and patience required to solve any issue.`,
    records: [
      {
        title: 'Clinical Analysis',
        content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n[Cell-Originium Assimilation] 8.4%\nClear Oripathy symptoms have not yet appeared on the surface of the body.\n[Blood Originium-Crystal Density] 0.21u/L\nOperator Fang has gone on field missions for quite a while now, and there is a risk that her Oripathy might worsen. She requires close attention.`,
      },
      {
        title: 'Archive File 1',
        content: `There have been many clear changes since Fang became a regular operator. She's grown taller, her taste in equipment leans even further towards practicality, and she goes on more field missions than before. The smile on her face has also dimmed somewhat, but that is not to say that she has become cold-hearted. She is simply more reserved, more reliable, and more resolute. She has experienced partings and witnessed tragedy, and is always trying her best to stay calm and cool-headed. Only in the most extraordinary of circumstances does her facade break. When asked about her changes, she said: "This is how a team captain should act."\nNot everything about Fang has changed, though. She's just as good at observing her teammates as she ever was, able to analyze their combat habits and preferred tactics. Her enthusiasm towards her work, her care for her teammates, and her adaptability in unexpected situations haven't changed either. Thanks to this, after formally becoming an operator, she was assigned to lead a field team of her own. She continues to learn and accumulate experience, taking on the duty of growing alongside her comrades.`,
      },
      {
        title: 'Archive File 2',
        content: `The reserve operators have noticed a female Kuranta hanging around the training room recently. At times, Instructor Dobermann will allow this operator named Fang to act as her assistant and help prepare exercises for them. At first, everyone was wary of this new instructor. The reason was simple: like Dobermann, she rarely spared time for jokes or small talk, and many first took her to be practically a clone of Dobermann. But in truth, this hard-to-approach assistant instructor was a kind-hearted veteran operator good at expressing her care for the younger generation.\nOne time, a reserve op team ended a combat exercise with only crushing defeats. That night, they nervously awaited Fang's admonishment—they were unfamiliar with her as she only returned to Rhodes Island between missions, and only saw her as assistant instructor. But the reality was the opposite of their expectations. Upon seeing her trainees lowering their heads in silent guilt over their mistakes in the mock combat, the first thing she did was tell them not to worry. Then, she took the time to break down what every trainee did right as well as where they were lacking, before concluding with a few suggestions for their daily training. Since then, she often talks to the trainees outside of training, and even gives advice on unrelated issues in their lives.\nTo go from a childish student to an operator able to command her own team, one needs not only a strict training regimen, but a resolute heart. As Fang would gladly share, that's something all Rhodes Island operators need to experience for themselves. After all, it took her own experiences to finally understand it herself. Ace had supported her over the years, along with many others like Dobermann. Their influence has had a profound effect on her growing up. Now, she takes up her calling as an operator in her own way.`,
      },
      {
        title: 'Archive File 3',
        content: `Ever since Fang started to go out on more missions, the time she spends on Rhodes Island has become ever more brief, but her sense of belonging has never burnt brighter. Every time she returns, she seeks out her old friends from Reserve Op Team A1 to chat about old times, but since everyone now has their own duties, it's rare for them to reunite. Fang always brings them back gifts after a mission, entrusting them to Logistics so the others can pick them up at their convenience. Since she started doing this, she's received more than a few in return. Beagle gave her a pauldron that she and the Engineering operators made during their defensive equipment research, and she wears it to this day. Lava gave her a peculiar Arts unit consisting of three loops, a design of her own make that came to her in a flash of inspiration. Fang wears it on her belt. Hibiscus gave her a purple ribbon she says can be used as a bandage in emergencies. Fang has pinned it to her chest. Kroos gave her two unusually-shaped badges, claiming they were the products of researching one of her "magic trick" traps. Fang has them attached to the strap of her lance. Through this peculiar display, the former members of A1 show their care for one another. No matter where she goes, Fang always wears them.`,
      },
      {
        title: 'Archive File 4',
        content: `The scar on Fang's waist came from an ordinary mission. There was nothing special about it, but she still remembers what happened that day.\nThe strange red light, the shrieking crowd, the Arts tracing arcs across the sky. It was a disaster.\nWell-trained mercenaries had attacked a village, one that Fang and her team happened to be staying in.\nShe shouted commands at her teammates, but could barely be heard above the clamor. They were scattered.\nShe sees herself in battle. She fights her way through the melee, rushing to high ground, where she fires a Rhodes Island signal flare.\nHer team puts their Arts to use against the mercenaries while providing the villagers a means of retreat.\nFlames, explosions, arrows, swords, blood, crumbling houses, shattered glass, weeping children.\nShe runs and runs, never stopping. From one end of the street to the other.\nShe sees mercenaries collapsing while she fights on. She shouts at her fellow operators, telling them to retreat and seek help.\nThe mercenaries rush her, but she does not fall back.\nAnd then. And then...\nShe jolts awake from her nightmare, the pain in her abdomen continuing to wrack her body, before falling into a deep sleep once more.\nThrough the haze of slumber, she sees the concern on Hibiscus's face, and hears a few indistinct words. Hibiscus's face slowly becomes clearer, and she begins to smile.\n"Sleep," she says. "You protected everyone, just like you always have. Now sleep. You did good."\nAmidst the fog of dreams, Fang does as she is told.`,
      },
      {
        title: 'Promotion Record',
        content: `During the rare opportunities they have to meet, Fang's old friends constantly ask her about her most recent missions. From her teammates to the mission objective, from preliminary plans to the after-action report, no detail escaped their barrage of questions. Beagle told her that it's because everyone wanted to know what brought about her change. Was it all the field missions? Doesn't seem like it. Was it her scar? Doesn't seem like it. Was it some life-changing event? Still no. So why? Everyone turned towards Fang. After a good deal of self-reflection, she gave her answer:\n"Maybe it was all of that together."`,
      },
    ],
    classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/charger-branch.png',
    skins: [
      { id: 'base', label: 'Base', src: '/operators/fang/alter/base.png', chibiSrc: '/operators/fang/alter/chibi.webm', illustrator: '下野宏铭' },
      { id: 'e2', label: 'Elite 2', src: '/operators/fang/alter/e2.png', chibiSrc: '/operators/fang/alter/chibi.webm', illustrator: '下野宏铭' },
      { id: 'skin1', label: 'A Pure Pianissimo', src: '/operators/fang/alter/skin1.png', chibiSrc: '/operators/fang/alter/chibi.webm', illustrator: '下野宏铭' },
    ],
    portrait: '/operators/fang/alter/portrait.png',
    portraitFocus: { y: -4.1, x: 55.9, zoom: 321 },
  },
}

export default fang
