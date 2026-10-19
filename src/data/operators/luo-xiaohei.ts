import type { Operator } from '../../types'
import luoXiaoheiVoice from '../voices/luo-xiaohei'

const luoXiaohei: Operator = {
  name: 'Luo Xiaohei', fileNo: 'R161', class: 'Guard', branch: 'Lord', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Event Reward'],
  faction: 'Yan', position: 'Melee', race: 'Feline', gender: 'Male', birthplace: 'Unknown',
  birthday: 'November 1st', height: 'Unknown', combatExp: 'Unknown', infectionStatus: 'Non-infected', illustrator: '九日九号',
  cv: { JP: 'Kana Hanazawa', CN: 'Shanxin', EN: '', KR: '' },
  voice: luoXiaoheiVoice,
  trait: 'Can launch Ranged Attacks that deal 80% of normal ATK',
  tags: ['DPS'],
  stats: { hp: 2040, atk: 698, def: 325, res: 10, block: 2, cost: 17, aspd: '1.3s', rdp: '70s' },
  range: {
    base: [[1,1,0],[2,1,1],[1,1,0]],
    e1: [[1,1,0,0],[2,1,1,1],[1,1,0,0]],
    e2: [[1,1,0,0],[2,1,1,1],[1,1,0,0]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': '■■' },
  talents: [
    { name: 'Executor-in-Training', desc: 'When dealing lethal damage, leave the enemy with 1 HP and inflict Critically Wounded (gives +2 SP to the attacker when killed); Luo Xiaohei will not attack Critically Wounded targets', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Tail Afterimage', icon: '/operators/luo-xiaohei/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Can switch between the original state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +40, gains 45% Physical Dodge, and attacks all blocked enemies', spInit: 0, sp: 10, rank: 'M3', range: [
      [0,1,0],
      [1,2,1],
      [0,1,0],
    ], note: 'Luo Xiaohei cannot attack aerial enemies with Tail Afterimage, but his attacks are always treated as melee attacks (and thus not subject to his trait). His attacks hit multiple targets in range equal to his block count.',
      levels: [
        { level: '1', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, gains 20% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: '2', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, gains 25% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: '3', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, gains 30% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: '4', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +10, gains 30% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: '5', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +15, gains 30% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: '6', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +20, gains 30% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: '7', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +25, gains 35% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: 'M1', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +30, gains 35% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: 'M2', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +35, gains 35% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
        { level: 'M3', desc: `Can switch between initial state and the following state:\nAttack range becomes 4 adjacent tiles, ASPD +40, gains 45% Physical Dodge, and attacks all blocked enemies`, spInit: 0, sp: 10 },
      ],
    },
    {
      name: 'Broken Blade', icon: '/operators/luo-xiaohei/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +70%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 200 enemy DEF when target HP is below 50%', spInit: 15, sp: 35, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +10%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 100 enemy DEF when target HP is below 50%', spInit: 0, sp: 45, dur: '15s' },
        { level: '2', desc: 'ATK +15%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 110 enemy DEF when target HP is below 50%', spInit: 0, sp: 45, dur: '15s' },
        { level: '3', desc: 'ATK +20%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 120 enemy DEF when target HP is below 50%', spInit: 0, sp: 45, dur: '15s' },
        { level: '4', desc: 'ATK +25%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 130 enemy DEF when target HP is below 50%', spInit: 5, sp: 43, dur: '17s' },
        { level: '5', desc: 'ATK +30%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 140 enemy DEF when target HP is below 50%', spInit: 5, sp: 43, dur: '17s' },
        { level: '6', desc: 'ATK +35%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 150 enemy DEF when target HP is below 50%', spInit: 5, sp: 43, dur: '17s' },
        { level: '7', desc: 'ATK +40%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 160 enemy DEF when target HP is below 50%', spInit: 10, sp: 40, dur: '20s' },
        { level: 'M1', desc: 'ATK +50%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 170 enemy DEF when target HP is below 50%', spInit: 10, sp: 39, dur: '20s' },
        { level: 'M2', desc: 'ATK +60%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 180 enemy DEF when target HP is below 50%', spInit: 10, sp: 37, dur: '20s' },
        { level: 'M3', desc: 'ATK +70%, ranged attacks no longer reduce ATK, target 1 more enemy, and add an additional attack that ignores 200 enemy DEF when target HP is below 50%', spInit: 15, sp: 35, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Luo Xiaohei's Badge", desc: 'Appointed as Guard Operator to exercise Lord responsibilities' },
    lory: { code: 'LOR-Y', name: 'Ball of Yarn', stages: [
      { stage: 1, hp: '+65', atk: '+25', def: '+15', effect: 'New trait: ASPD +12 when there are 2 or more enemies in attack range.' },
      { stage: 2, hp: '+83', atk: '+35', def: '+20', effect: 'Executor-in-Training improved: Increases damage dealt to enemies below half HP by 8%; when dealing lethal damage, leaves the enemy with 1 HP and inflicts Critically Wounded (gives +2 SP to the attacker when killed); Luo Xiaohei will not attack Critically Wounded targets.' },
      { stage: 3, hp: '+100', atk: '+40', def: '+25', effect: 'Executor-in-Training improved: Increases damage dealt to enemies below half HP by 12%; when dealing lethal damage, leaves the enemy with 1 HP and inflicts Critically Wounded (gives +2 SP to the attacker when killed); Luo Xiaohei will not attack Critically Wounded targets.' },
    ]},
  },
  story: `Luo Xiaohei is a cat Spirit who masters powerful space-manipulation ability at a young age such as teleportation and creating a spiritual domain along with his unique trait of splitting his long tail into four independent chibis named Heixiu (黑咻). After his homeland was deforested, Xiaohei was saved by the human immortal Wuxian, his future master who taught him to wield the spiritual power of metal manipulation. On one occasion, Xiaohei was tasked by Wuxian to steal the Shining Pearl from Laojun, but he was severely injured by Diting while escaping, causing him to lose much of his power and forcing him to be stuck in his cat form for a long time. In the midst of his hunger and misery, the little girl Luo Xiaobai mistook him as a stray cat and brought him under her care before he could return to his human form. And thus starts Xiaohei's slice-of-life stories where he faces many hilarious moments from his deity counterparts to his human and animal companions.\n\nXiaohei's story in Terra is an accidental one. He, Xiaobai, her cousin Ah Gen, and his Chamecavy companion Biu were on a search for an Originium Slug that accidentally came to their world. However, things went haywire as they were instead transferred to Terra, forcing them to be separated. While Xiaobai and Ah Gen eventually sought help from Rhodes Island, Xiaohei was brought under the care of Lee's Detective Agency where Mr. Lee treated him as his new "son". After the gang finally reunited, R.I. is currently sheltering them while helping the kids to find their way home.`,
  profile: `Luo Xiaohei, a small feline friend recommended by Lee. Kind, but not weak. Brave, yet not reckless. After some tests, he formally joined Rhodes Island as a guard operator.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nXiaohei shows no sign of Originium infection.\n[Blood Originium-Crystal Density] Undisclosed\nThe Medical Department has agreed not to disclose the relevant data.` },
    { title: 'Archive File 1', content: `Though Xiaohei is still young, he possesses combat prowess far beyond his age. He came to Rhodes Island accompanied by his friends Xiaobai and Ah Gen, along with a rare creature named Biu. When the three first arrived, they were unwilling to fully disclose their experiences due to their wariness of strangers and the new environment. However, by piecing together the clues that they invariably let slip, it can be determined that Xiaohei and his friend Ah Gen have an extremely special ability to cast Arts without the use of Originium, and this ability–that they call "Spirit Ability"–has never been recorded in any official Terran records. This attracted many curious operators to attempt to learn it as well, but without exception they all failed to do so.\nIt appears that Xiaohei's Spirit Ability can not only alter the physical properties of metals and freely manipulate them at high speeds, he can also track enemies based on the position of metallic objects and cause interference by vibrating metal pieces to create noise. Besides this, he also has an astonishing long-range teleportation ability, which lets him quickly change his and other operators' location in a short amount of time. Whether it be casting range or strength, Xiaohei's abilities are truly remarkable, but he is still young and has yet to receive any systemic education. It can be said that he has a great amount of untapped potential.` },
    { title: 'Archive File 2', content: `Xiaohei will only reveal his childish side in front of close friends. When in public, he usually behaves in a reticent manner. His cute outer appearance has drawn many people to him with the intention of making friends. Though the stony face he puts on when interacting with others has deterred many people, it's not a sign of his rejection, but merely his attempt at showing off a reliable side of himself. Most of the time, that little bundle of black leaping onto your shoulder is enough to tell you that he's already begun to accept you as a partner. If you find yourself with a conspicuous lack of little black bundles, please try to recall if you have recently rubbed his ears without permission.\nXiaohei spends most of his time together with his friends Xiaobai and Ah Gen. Unlike the quiet Xiaohei, the lively Xiaobai and talkative Ah Gen are much easier to approach, and befriending them may increase Xiaohei's affection towards you. Besides that, sparring with him in the Training Room is a surefire way to get closer, especially if you bring along some tasty snacks and share them with him.` },
    { title: 'Archive File 3', content: `Xiaohei will occasionally mention his master, Wuxian. When talking about Wuxian, his tone is always filled with respect and pride. It's clear from the way he speaks of him that Wuxian's every word and action has greatly influenced the ignorant Xiaohei, and that his greatest dream is to become an enforcer of the mysterious "Hall for Spirits" just like his master Wuxian. It's difficult to imagine the amount of effort and hard work Xiaohei has put in towards his goal. However, after meeting Xiaobai and Ah Gen, he has put a lot more thought into the things he wants to do, wishing to study and play with his friends, or travel to faraway places and meet many new people. Regarding these dreams, we are willing to provide as much assistance as possible to support his growth into the person he wishes to become.\n[Note]\nThough Xiaohei has performed well in missions, not faltering even when facing powerful enemies, we are reluctant to allow him to participate in combat. As he becomes more experienced in battle and more proficient in his skills, we find our unease only growing. He is at the age when children are most receptive to knowledge, and no matter what, we do not wish for his classes to take place on the battlefield.` },
    { title: 'Archive File 4', content: `In the process of teaching Xiaohei, I have come to realize that even if he lacks knowledge regarding Originium and Oripathy, when discussing the discriminated Infected and Catastrophe-struck refugees, he will always sincerely sympathize with their pain and suffering. However, these emotions do not appear to stem solely from his kind nature. At least part of it seems to be because they strongly resonate with some of his past experiences.\nAfter consulting with my superior, I have come to an agreement with the other instructors not to investigate his past, nor to intentionally carry out a psychological intervention. On assessment, we believe that his current state is ideal. When faced with both the good and bad intentions of strangers, he is always able to face them calmly and respond in a positive manner. Moreover, when interacting with his companions, the responsibility he displays and the sense of justice he espouses astonish us all.\n––Excerpt from "Operator Training Diary"` },
    { title: 'Promotion Record', content: `"Spirit animal?"\n"... Doctor, that's actually not my spirit animal." Xiaohei says as he wrings his shirt nervously.\n"Um, I trust you, Doctor, so it's okay to tell you."\n"Actually, that cat... That's me."\nAn unbelievable thing happens right in front of you. Xiaohei's body shrinks until it finally turns into a small black cat sitting on the floor in front of you, its big round eyes staring right into yours.\n"Meow!"\nThough you had many questions for him, you were not able to ask a single one, as the way he gently rubs against your ankles makes you want to do nothing but pet his furry little head.` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/lord-branch.png', factionIcon: '/icons/factions/yan.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/luo-xiaohei/base.png', chibiSrc: '/operators/luo-xiaohei/chibi.webm', illustrator: '九日九号' },
    { id: 'e2', label: 'Elite 2', src: '/operators/luo-xiaohei/e2.png', chibiSrc: '/operators/luo-xiaohei/chibi.webm', illustrator: '九日九号' },
  ],
  portrait: '/operators/luo-xiaohei/portrait.png',
  portraitFocus: { y: 35.6, x: 45.5, zoom: 262 },
}

export default luoXiaohei
