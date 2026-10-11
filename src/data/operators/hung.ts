import type { Operator } from '../../types'

const hung: Operator = {
  name: 'Hung', fileNo: 'LM19', class: 'Defender', branch: 'Guardian', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: "Lee's Detective Agency", position: 'Melee', race: 'Perro', gender: 'Male', birthplace: 'Lungmen',
  birthday: 'July 1st', height: '183 cm', combatExp: '3 years', infectionStatus: 'Confirmed uninfected by medical examination.', illustrator: 'KuroBlood',
  cv: { JP: 'Satoshi Hino', CN: 'Lü Shujun (Mandarin); Lu Bin (Cantonese, credited as "Lost" in EN)', EN: 'Greg Chun', KR: 'Choi Nak-yoon' },
  trait: 'Can heal allies by using the skill',
  tags: ['Defense', 'Healing'],
  stats: { hp: 3023, atk: 442, def: 645, res: 10, block: 3, cost: 21, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2]],
    e1: [[2]],
    e2: [[2]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Gatekeeper', desc: 'DEF +6%', elite: 'E1' },
    { name: 'Gatekeeper', desc: 'DEF +6%, if the tile behind this unit is an elevated tile, the unit deployed on the elevated tile receives +75% healing', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Treatment Countermeasure', icon: '/operators/hung/skill-1.png', activation: 'Auto', recovery: 'Defensive Recovery',
      desc: 'The next attack instead heals an allied unit within range equal to 170% of ATK', spInit: 4, sp: 4, rank: 'M3',
      range: [[1,1,1],[1,2,1],[1,1,1]],
      levels: [
        { level: '1', desc: 'The next attack instead heals an allied unit within range equal to 100% of ATK', spInit: 0, sp: 6 },
        { level: '2', desc: 'The next attack instead heals an allied unit within range equal to 105% of ATK', spInit: 0, sp: 6 },
        { level: '3', desc: 'The next attack instead heals an allied unit within range equal to 110% of ATK', spInit: 0, sp: 6 },
        { level: '4', desc: 'The next attack instead heals an allied unit within range equal to 120% of ATK', spInit: 1, sp: 6 },
        { level: '5', desc: 'The next attack instead heals an allied unit within range equal to 125% of ATK', spInit: 1, sp: 6 },
        { level: '6', desc: 'The next attack instead heals an allied unit within range equal to 130% of ATK', spInit: 1, sp: 6 },
        { level: '7', desc: 'The next attack instead heals an allied unit within range equal to 140% of ATK', spInit: 2, sp: 5 },
        { level: 'M1', desc: 'The next attack instead heals an allied unit within range equal to 150% of ATK', spInit: 3, sp: 5 },
        { level: 'M2', desc: 'The next attack instead heals an allied unit within range equal to 160% of ATK', spInit: 4, sp: 5 },
        { level: 'M3', desc: 'The next attack instead heals an allied unit within range equal to 170% of ATK', spInit: 4, sp: 4 },
      ],
    },
    {
      name: 'Medical Mode Countermeasure', icon: '/operators/hung/skill-2.png', activation: 'Manual', recovery: 'Defensive Recovery',
      desc: 'ATK and DEF +80%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 18, sp: 20, dur: '30s', rank: 'M3',
      range: [[1,1,1],[1,2,1],[1,1,1]],
      note: "Although not stated in-game, Medical Mode Countermeasure increases Hung's attack interval by 1.3 seconds.",
      levels: [
        { level: '1', desc: 'ATK and DEF +30%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 10, sp: 25, dur: '20s' },
        { level: '2', desc: 'ATK and DEF +35%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 10, sp: 25, dur: '20s' },
        { level: '3', desc: 'ATK and DEF +40%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 10, sp: 25, dur: '20s' },
        { level: '4', desc: 'ATK and DEF +45%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 11, sp: 24, dur: '22s' },
        { level: '5', desc: 'ATK and DEF +50%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 11, sp: 24, dur: '22s' },
        { level: '6', desc: 'ATK and DEF +55%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 11, sp: 24, dur: '22s' },
        { level: '7', desc: 'ATK and DEF +60%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 12, sp: 23, dur: '24s' },
        { level: 'M1', desc: 'ATK and DEF +65%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 14, sp: 22, dur: '26s' },
        { level: 'M2', desc: 'ATK and DEF +70%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 16, sp: 21, dur: '28s' },
        { level: 'M3', desc: 'ATK and DEF +80%, stops attacking to focus on healing allied units within range, and restores 1 skill point to each healed target.', spInit: 18, sp: 20, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Hung's Badge", desc: 'Operator Hung has demonstrated the capacity for simultaneously treating allied forces while holding the battlefront.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Defender Operator during field operations to exercise Guardian responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.' },
    guay: { code: 'GUA-Y', name: 'Popular Sitcom Tapes', stages: [
      { stage: 1, hp: '+180', def: '+30', effect: 'New trait: Reduces damage taken by 15%' },
      { stage: 2, hp: '+260', def: '+38', effect: 'Gatekeeper improved: DEF +10%, if the tile behind this unit is a high ground tile, the unit deployed on the elevated tile receives +75% healing' },
      { stage: 3, hp: '+330', def: '+45', effect: 'Gatekeeper improved: DEF +13%, if the tile behind this unit is a high ground tile, the unit deployed on the elevated tile receives +75% healing' },
    ]},
  },
  story: `The Lungmenite Perro named Ko Hei-sing was originally a security guard for a company but was fired due to his easygoing and honest character. In the midst of his misery and hunger, he coincidentally encountered Lee in a noodle shop. After a series of events, he was brought under the care of Lee's Detective Agency. Within Mr. Lee's close-knit "family," he plays the role of a chef and an older brother to the younger Waai Fu and Aak.\nAs part of the Agency's partnership with Rhodes Island, he provides front-line protection for other Operators under the codename "Hung." Kind-hearted, considerate, and friendly, he gets along well with just about anybody. In the meantime, he is active in Rhodes Island's kitchen, showcasing the superb cooking skills he claims to have learned from Lee, and tries to mitigate the impact of Aak's nasty personality.`,
  profile: `Hung is a heavy defender from Lee's Detective Agency recommended to Rhodes Island by Mr. Lee.\nHe provides reliable front-line protection for other Operators with his massive physique and extreme strength.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Hung shows no signs of Oripathy infection.\n[Blood Originium-Crystal Density] 0.10u/L\nHas prior arrangement to receive regular inspections and medical treatment from Operator Aak. Though his methods may be crude, Operator Hung is undeniably quite healthy.` },
    { title: 'Archive File 1', content: `This easygoing Perro is a large man.\nTo be honest, others can tell from a glance that he is a kind-hearted person despite his massive size. He is always considerate of others, and gets along very well with just about anybody.` },
    { title: 'Archive File 2', content: `Though Hung is quite humble, his superb cooking speaks for itself.\nAnyone who has seen his culinary arts has showered him with praise.\nAs a native of Lungmen, he specializes in the area's local cuisine. In addition to being able to elevate ordinary home cooking to delicious heights, he also can concoct haute cuisine that otherwise only appears in five-star restaurants.\nSurprisingly, according to his own accounts, his cooking is entirely inherited from Old Lee, which really makes one wonder... Just what kind of culinary monstrosity is Mr. Lee?` },
    { title: 'Archive File 3', content: `According to his own recollection, Hung first worked as a guard for a certain company, but his easygoing personality made him prone to bullying, eventually getting him kicked from the company. He was then invited to the agency by Old Lee when he was suffering from hunger and never again can he leave the business. (Note: This description was from Hung himself)\nRegarding Mr. Lee and Lee's Detective Agency, while it is not suitable to describe the scope of business in detail, here is a brief summary: Lee's Detective Agency only takes investigative cases as a front, while actually accepting just about any type of work. They are known as the "House of Everything" within Lungmen's gray zone.\nAccording to his description of Mr. Lee, we can conclude that Lee concealed a darker secret from Hung. Though it is obvious that Hung is kind-hearted, he is no pedantic old man. He knows very well that you can't talk things through with everyone, and not every story can have a happy ending.` },
    { title: 'Archive File 4', content: `Hung rescued Aak from the aftermath of a gang war, at which point the two assumed their codenames. According to Mr. Lee, he chose the names on a whim at that time.\nHung treats Aak and Waai Fu as his younger brother and sister. In fact, Hung doubles as the liaison between Lee's Detective Agency and Rhodes Island, or in other words, serves as the guardian for the other two operators.\nOf course, that title is also nominal in nature, since Waai Fu and Aak are both sufficiently autonomous. That being the case, unless Hung himself makes a request, Rhodes Island will not deliberately arrange them to live together or to work together.\nNevertheless, Hung's worries about his younger brother are evident through his conversations with the Doctor. He wanted Aak to see the kindness in the world, but did not know how to do so himself, and so he chose to stay with him.\nEven though he hasn't realized it yet, despite Aak's somewhat nasty personality, Aak has fundamentally been influenced by Hung.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/guardian-branch.png', factionIcon: '/icons/factions/lees-detective-agency.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/hung/base.png', chibiSrc: '/operators/hung/chibi.webm', chibiMoveSrc: '/operators/hung/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'KuroBlood' },
    { id: 'e2', label: 'Elite 2', src: '/operators/hung/e2.png', chibiSrc: '/operators/hung/chibi.webm', chibiMoveSrc: '/operators/hung/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'KuroBlood' },
    { id: 'skin1', label: 'Just a Driver', src: '/operators/hung/skin1.png', chibiSrc: '/operators/hung/chibi-skin1.webm', chibiMoveSrc: '/operators/hung/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'KuroBlood' },
  ],
  portrait: '/operators/hung/portrait.png',
}

export default hung
