import type { Operator } from '../../types'

const angelina: Operator = {
  name: 'Angelina', fileNo: 'SR02', class: 'Supporter', branch: 'Decel Binder', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Siracusa', position: 'Ranged', race: 'Vulpo', gender: 'Female', birthplace: 'Siracusa',
  birthday: 'May 14th', height: '162 cm', combatExp: 'None', infectionStatus: 'Infected', illustrator: 'LM7',
  cv: { JP: 'Ayaka Ohashi', CN: 'He Yuwei', EN: 'Lizzie Waterworth', KR: 'Lee So-eun' },
  trait: 'Deals Arts damage and Slows the target for a short time',
  tags: ['Slow', 'DPS', 'Support'],
  stats: { hp: 1385, atk: 542, def: 120, res: 25, block: 1, cost: 16, aspd: '1.9s', rdp: '70s' },
  range: {
    base: [[1,1,1,1],[1,2,1,1],[1,1,1,1]],
    e1: [[1,1,1,1],[1,2,1,1],[1,1,1,1]],
    e2: [[1,1,1,1],[1,2,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Accelerator Field', desc: "All allies' ASPD +7", elite: 'E2' },
    { name: 'Part-time Job', desc: 'Restores the HP of all allies by 20 per second when the skill is not activated', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Arcane Staff - Quick Charge Mode', icon: '/operators/angelina/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'ATK +110%\nAutomatically activated', spInit: 0, sp: 10, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +40%
Automatically activated`, spInit: 0, sp: 10, dur: '20s' },
        { level: '2', desc: `ATK +45%
Automatically activated`, spInit: 0, sp: 10, dur: '21s' },
        { level: '3', desc: `ATK +50%
Automatically activated`, spInit: 0, sp: 10, dur: '22s' },
        { level: '4', desc: `ATK +60%
Automatically activated`, spInit: 0, sp: 10, dur: '25s' },
        { level: '5', desc: `ATK +65%
Automatically activated`, spInit: 0, sp: 10, dur: '26s' },
        { level: '6', desc: `ATK +70%
Automatically activated`, spInit: 0, sp: 10, dur: '27s' },
        { level: '7', desc: `ATK +80%
Automatically activated`, spInit: 0, sp: 10, dur: '30s' },
        { level: 'M1', desc: `ATK +90%
Automatically activated`, spInit: 0, sp: 10, dur: '31s' },
        { level: 'M2', desc: `ATK +100%
Automatically activated`, spInit: 0, sp: 10, dur: '33s' },
        { level: 'M3', desc: `ATK +110%
Automatically activated`, spInit: 0, sp: 10, dur: '35s' },
      ],
    },
    {
      name: 'Arcane Staff - Particle Mode', icon: '/operators/angelina/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 45% of ATK\nCannot use Normal Attack when the skill is not activated', spInit: 10, sp: 15, dur: '30s', rank: 'M3',
      note: "Arcane Staff - Particle Mode multiplies Angelina's attack interval by 0.15, reducing it to 0.285 seconds (before modifiers).",
      levels: [
        { level: '1', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 30% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 0, sp: 20, dur: '20s' },
        { level: '2', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 30% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 1, sp: 20, dur: '21s' },
        { level: '3', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 30% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 2, sp: 20, dur: '22s' },
        { level: '4', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 35% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 3, sp: 20, dur: '23s' },
        { level: '5', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 35% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 4, sp: 20, dur: '24s' },
        { level: '6', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 35% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 5, sp: 20, dur: '25s' },
        { level: '7', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 40% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 6, sp: 20, dur: '26s' },
        { level: 'M1', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 40% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 7, sp: 19, dur: '27s' },
        { level: 'M2', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 40% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 8, sp: 18, dur: '28s' },
        { level: 'M3', desc: `Attack Interval reduces dramatically, but the Arts damage dealt by every attack is only 45% of ATK
Cannot use Normal Attack when the skill is not activated`, spInit: 10, sp: 15, dur: '30s' },
      ],
    },
    {
      name: 'Arcane Staff - Anti-Gravity Mode', icon: '/operators/angelina/skill-3.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Applies Weightless to all enemies on the battlefield, expands Attack Range, ATK +150%, and can attack 5 enemies\nCannot use normal attacks while skill is inactive', spInit: 10, sp: 25, dur: '25s', rank: 'M3',
      range: [
        [1,1,1,0,0],
        [1,1,1,1,0],
        [1,2,1,1,1],
        [1,1,1,1,0],
        [1,1,1,0,0],
      ],
      levels: [
        { level: '1', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +75% ATK, and can attack 4 enemies
Cannot use normal attacks while skill is inactive`, spInit: 0, sp: 25, dur: '10s' },
        { level: '2', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +80% ATK, and can attack 4 enemies
Cannot use normal attacks while skill is inactive`, spInit: 0, sp: 25, dur: '11s' },
        { level: '3', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +85% ATK, and can attack 4 enemies
Cannot use normal attacks while skill is inactive`, spInit: 0, sp: 25, dur: '12s' },
        { level: '4', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +90% ATK, and can attack 4 enemies
Cannot use normal attacks while skill is inactive`, spInit: 3, sp: 25, dur: '14s' },
        { level: '5', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +95% ATK, and can attack 4 enemies
Cannot use normal attacks while skill is inactive`, spInit: 3, sp: 25, dur: '15s' },
        { level: '6', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +100% ATK, and can attack 4 enemies
Cannot use normal attacks while skill is inactive`, spInit: 3, sp: 25, dur: '16s' },
        { level: '7', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +105% ATK, and can attack 5 enemies
Cannot use normal attacks while skill is inactive`, spInit: 6, sp: 25, dur: '18s' },
        { level: 'M1', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +120% ATK, and can attack 5 enemies
Cannot use normal attacks while skill is inactive`, spInit: 7, sp: 25, dur: '20s' },
        { level: 'M2', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +135% ATK, and can attack 5 enemies
Cannot use normal attacks while skill is inactive`, spInit: 8, sp: 25, dur: '22s' },
        { level: 'M3', desc: `Applies Weightless to all enemies on the battlefield, expands Attack Range, +150% ATK, and can attack 5 enemies
Cannot use normal attacks while skill is inactive`, spInit: 10, sp: 25, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Angelina's Badge", desc: 'Appointed as Supporter Operator to exercise Decel Binder responsibilities' },
    decx: { code: 'DEC-X', name: 'Experimental Anti-Gravity Module', stages: [
      { stage: 1, hp: '+60', atk: '+10', aspd: '+4', effect: 'New trait: SP recovery +0.2/sec when there are enemies within range' },
      { stage: 2, hp: '+80', atk: '+15', aspd: '+5', effect: 'Accelerator Field improved: All allies gain ASPD +7, allies within range gain another ASPD +3' },
      { stage: 3, hp: '+100', atk: '+20', aspd: '+6', effect: 'Accelerator Field improved: All allies gain ASPD +7, allies within range gain another ASPD +5' },
    ]},
    decy: { code: 'DEC-Y', name: 'Gravity Calibration Module', stages: [
      { stage: 1, hp: '+90', atk: '+35', effect: 'Trait improved: Attacks deal Arts damage, and Slow the enemy for a moderate period of time' },
      { stage: 2, hp: '+110', atk: '+45', effect: "Part-time Job improved: Restores the HP of all allies by 30 per second when this unit's skill is not active" },
      { stage: 3, hp: '+120', atk: '+50', effect: "Part-time Job improved: Restores the HP of all allies by 35 per second when this unit's skill is not active" },
    ]},
    iswa: { code: 'ISW-α', name: "Angelina's Specialized Badge", stages: [
      { stage: 1, atk: '+35', aspd: '+5', effect: 'New trait: In Integrated Strategies, all enemies on the field have Weight -1 while this unit is deployed' },
      { stage: 2, atk: '+51', aspd: '+6', effect: 'Accelerator Field improved: All allies gain +7 ASPD; in Integrated Strategies, enemies being shifted or Levitated while Angelina is on the field take 40% of her ATK as Arts damage every 0.5s' },
      { stage: 3, atk: '+65', aspd: '+7', effect: "Accelerator Field improved: All allies gain +7 ASPD; in Integrated Strategies, enemies being shifted or Levitated while Angelina is on the field take 60% of her ATK as Arts damage every 0.5s; when Angelina's skill is active, her attacks can Levitate the target for 3s; hitting the Levitated target refreshes the duration of Levitate" },
    ]},
  },
  story: `The Siracusan Vulpo Angelina Ajimu was once an ordinary schoolgirl from the nomadic city of Florentia. A lively and curious girl who always dreamed of exploring places beyond her hometown. That was until she contracted Oripathy in an accident where she was scratched by a truck carrying Originium explosives. Pressured by her condition and feeling that she would become a burden to her parents, she was forced to leave Florentia behind, but even then she became an easy prey for the famiglie. But everything changed when she met Martina, a local Messenger who not only helped her evade the mafia, but also allowed her to help delivering correspondence. In the brief time they spent together, Martina taught Angelina a very valuable lesson: Bad times will always pass, just as the sun always rises.\n\nSubsequently, Angelina was taken to Rhodes Island for treatment. Despite being a rookie, she works as a Messenger, and in her spare time, she trains her tactical anti-gravitic Originium Arts — which she learned from Martina and quickly mastered — making her capable in combat and a reliable field support unit. No matter how dire things might get, the happy-go-lucky Angelina will always look up with a smile.`,
  profile: `Real name Angelina Ajimu, she was a transporter responsible for delivering intelligence and special cargo around Siracusa.\nAs an apprentice caster Operator, she now provides logistical support, battlefield assistance, and tactical coordination for Rhodes Island.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 5%\nThe infection is consistently spreading. Regular observation and control are required.\n[Blood Originium-Crystal Density] 0.31u/L\nSubject has both visible crystallization and other symptoms of Oripathy. Although her condition is not serious, Angelina must keep to a course of treatment.\n– Medic Operator Warfarin` },
    { title: 'Archive File 1', content: `She may not realize it, but Angelina has a special knack for Arts! She can change how much an object weighs. I think if she gets the proper training, she could be amazing one day!` },
    { title: 'Archive File 2', content: `Having only just recently become a transporter, Angelina is full of hope for the future, much like other high schoolers. She spends much of her time studying or dressing up.\nShe likes dainty jewelry and young adult novels, and hides a secret love for older music. She could enjoy an ordinary, happy life.\nWhen Rhodes Island sought her out, she was gliding between skyscrapers in the middle of a dark night.` },
    { title: 'Archive File 3', content: `The world is unfair.\nAfter she suffering her infection, Angelina quietly faded from her old life.\nShe didn't linger or say her goodbyes. She just silently left her family, friends, and beloved hometown behind.\nYet she had not resigned herself to the typical fate of an Infected.\nEvery night, she ran, jumped, glided between buildings, practiced her Arts, and smuggled goods from one place to another.\nAs a courier, an Infected, or just a normal high-schooler, Angelina works hard, no matter what the future may look like.` },
    { title: 'Archive File 4', content: `Before she came to Rhodes Island and met the Doctor, Angelina kept these secrets hidden away in her heart.\nIt wasn't until Rhodes Island found her that she knew there was another life for the Infected. She is now a Rhodes Island Operator, and she may be able to go back to school.\nProbably.\nWhere will the path Angelina has chosen take her?\nEven she can't imagine.` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/decel-binder-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/angelina/base.png', chibiSrc: '/operators/angelina/chibi.webm', illustrator: 'LM7' },
    { id: 'e2', label: 'Elite 2', src: '/operators/angelina/e2.png', chibiSrc: '/operators/angelina/chibi.webm', illustrator: 'LM7' },
    { id: 'skin1', label: 'Distinguished Visitor', src: '/operators/angelina/skin1.png', chibiSrc: '/operators/angelina/chibi-skin1.webm', illustrator: 'LM7' },
    { id: 'skin2', label: 'Summer Flower FA017', src: '/operators/angelina/skin2.png', chibiSrc: '/operators/angelina/chibi-skin2.webm', illustrator: 'LM7' },
  ],
  portrait: '/operators/angelina/portrait.png',
  portraitFocus: { y: -3.4, x: 40.2, zoom: 290 },
}

export default angelina
