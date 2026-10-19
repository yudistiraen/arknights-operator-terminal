import type { Operator } from '../../types'
import andreanaVoice from '../voices/andreana'

const andreana: Operator = {
  name: 'Andreana', fileNo: 'II04', class: 'Sniper', branch: 'Deadeye', rarity: 5, level: 70, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Abyssal Hunters', position: 'Ranged', race: 'Aegir', gender: 'Female', birthplace: 'Iberia',
  birthday: 'November 16th', height: '166 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'LLC',
  cv: { JP: 'Kaoru Sakura', CN: 'Shen Yin (credited as "Sherry Brown" in EN)', EN: 'Laura Carrero', KR: 'Hong Soo-jeong' },
  voice: andreanaVoice,
  trait: 'Prioritizes attacking the enemy with lowest DEF within range first',
  tags: ['DPS', 'Slow'],
  stats: { hp: 1798, atk: 1110, def: 128, res: 0, block: 1, cost: 21, aspd: '2.7s', rdp: '70s' },
  range: { base: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]], e1: [[1, 1, 1, 0, 0], [1, 1, 1, 1, 0], [2, 1, 1, 1, 1], [1, 1, 1, 1, 0], [1, 1, 1, 0, 0]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Flawed' },
  talents: [
    { name: 'Abyssal Intuition', desc: 'When this unit is in the squad, all Abyssal Hunters Operators gain +6 ASPD', elite: 'E1' },
    { name: 'Abyssal Intuition', desc: 'When this unit is in the squad, all Abyssal Hunters Operators gain +8 (+2) ASPD', elite: 'E1 (Potential 5)' },
    { name: 'Abyssal Intuition', desc: 'When this unit is in the squad, all Abyssal Hunters Operators gain +12 ASPD', elite: 'E2' },
    { name: 'Abyssal Intuition', desc: 'When this unit is in the squad, all Abyssal Hunters Operators gain +14 (+2) ASPD', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'ATK Up γ', icon: '/operators/andreana/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +100%', spInit: 15, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +30%`, spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: `ATK +35%`, spInit: 0, sp: 40, dur: '30s' },
        { level: '3', desc: `ATK +40%`, spInit: 0, sp: 40, dur: '30s' },
        { level: '4', desc: `ATK +45%`, spInit: 5, sp: 37, dur: '30s' },
        { level: '5', desc: `ATK +50%`, spInit: 5, sp: 37, dur: '30s' },
        { level: '6', desc: `ATK +55%`, spInit: 5, sp: 37, dur: '30s' },
        { level: '7', desc: `ATK +60%`, spInit: 10, sp: 35, dur: '30s' },
        { level: 'M1', desc: `ATK +75%`, spInit: 10, sp: 34, dur: '30s' },
        { level: 'M2', desc: `ATK +90%`, spInit: 10, sp: 33, dur: '30s' },
        { level: 'M3', desc: `ATK +100%`, spInit: 15, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Interdictive Sniping Tactics', icon: '/operators/andreana/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +240%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -40% for 6 seconds', spInit: 15, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +130%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -20% for 3 seconds`, spInit: 10, sp: 40, dur: '30s' },
        { level: '2', desc: `ATK +140%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -20% for 3 seconds`, spInit: 10, sp: 39, dur: '30s' },
        { level: '3', desc: `ATK +150%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -20% for 3 seconds`, spInit: 10, sp: 38, dur: '30s' },
        { level: '4', desc: `ATK +160%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -20% for 3 seconds`, spInit: 11, sp: 37, dur: '30s' },
        { level: '5', desc: `ATK +170%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -20% for 3 seconds`, spInit: 11, sp: 36, dur: '30s' },
        { level: '6', desc: `ATK +180%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -20% for 3 seconds`, spInit: 11, sp: 35, dur: '30s' },
        { level: '7', desc: `ATK +190%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -30% for 4 seconds`, spInit: 12, sp: 34, dur: '30s' },
        { level: 'M1', desc: `ATK +205%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -35% for 4 seconds`, spInit: 13, sp: 33, dur: '30s' },
        { level: 'M2', desc: `ATK +220%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -35% for 5 seconds`, spInit: 14, sp: 32, dur: '30s' },
        { level: 'M3', desc: `ATK +240%, but normal attacks no longer target enemies below 50% HP; Attacks slow enemies hit by -40% for 6 seconds`, spInit: 15, sp: 30, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Andreana's Badge", desc: 'Appointed as Sniper Operator to exercise Deadeye responsibilities' },
    deax: { code: 'DEA-X', name: 'Gunsmithing Toolkit', stages: [
      { stage: 1, hp: '+70', atk: '+65', effect: 'New trait: The further away the enemy, the higher the damage dealt (min. 1 tile, max. 4.5 tiles), up to an increase of 15%' },
      { stage: 2, hp: '+95', atk: '+81', effect: 'Abyssal Intuition improved: When this unit is in the squad, all Abyssal Hunter Operators gain +17 ASPD' },
      { stage: 3, hp: '+121', atk: '+91', effect: 'Abyssal Intuition improved: When this unit is in the squad, all Abyssal Hunter Operators gain +20 ASPD' },
    ]},
  },
  story: `Andreana, Sniper Operator of Rhodes Island, will assist other Operators from a distance.`,
  profile: `Born in Iberia, Andreana serves as a bodyguard to Operator Incandescence. The two joined Rhodes Island together.\nShe came with a strong foundation as a sniper. After receiving professional training, she has served well as a Sniper Operator.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Andreana has no signs of Originium infections.\n\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Andreana rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `A laid-back Iberian.\nShe tends to be slow to speak, and shows little on her face. When Andreana first came to Rhodes Island, she was mistaken for the quiet, uncommunicative type. But after getting to know her, and seeing how caring this great listener is, that impression quickly collapsed.` },
    { title: 'Archive File 2', content: `While Andreana speaks often of Iberia, she and Incandescence came to us through a branch office in Rim Billiton.\nOf course, this is to be expected, considering Rhodes Island does not and cannot have an office in Iberia. In fact, there's only one kind of Iberian we find outside Iberia, as far as we know—the ones who decided to leave. Incandescence, Andreana and their respective families left Iberia together to settle in Rim Billiton. The two submitted their resumes to Rhodes Island not long after.\nAs for why they brought their families, Andreana appears troubled when posed with the question. She insisted on learning to shoot, despite her family's objections. That troubled their relationship and she ran away from home, where she met Incandescence. But in the end, family ties are tough to break. The two families ultimately made contact and agreed to leave Iberia as a group.` },
    { title: 'Archive File 3', content: `Andreana's hobbies certainly draw the eye. Particularly the gun she is never seen without.\nWhen she first joined Rhodes Island, her weapon perplexed many of our operators who were familiar with guns—"She's an Iberian who looks like a Laterano?" "Did she rob a Laterano?" "Such a badass?" "Iberians can use guns too?" Such questions swirled around endlessly. After all, Blacksteel's guns are assumed to be some kind of corporate secret, but a non-Laterano freelance mercenary strutting around with a huge gun gets people talking.\nOf course, everything becomes clear once you see her shoot an inkball out of that thing. Apparently, it's a modified crossbow made to look like a gun. Because Andreana is a committed firearms enthusiast.\nAccording to her, Laterano culture has had a strong influence on the Iberians, who often display an affection for it. After seeing one of the statues in church as a child, Andreana fell in love with the weapons, and devoted herself to mechanical engineering in hopes of making a crossbow in the style of a gun, since she lacks the affinity for Originium Arts necessary to use a real one herself.\nBut there is a point here worth examining, and one Andreana herself did not realize. She mentioned that she was dragged into court over the weapon several times, only to be chastised when it became clear it was not a real gun. That seems reasonable. But with the limited information we have, the Iberian courts should be very powerful. And for such an organization to grab her "several times" for something known to be harmless the first time indicates that they may have been using it as a pretense to find something else.\nHowever, since we lack reliable intelligence about the internal politics of a country closed so long to outsiders, we are not able to form any concrete judgments about the situation. And since, at least according to Andreana herself, she has not been harmed or unnecessarily interrogated, we leave the matter to speculation.` },
    { title: 'Archive File 4', content: `[Classified Log]\nIt was clear that while the medical staff, including even Warfarin, were unfamiliar, Kal'tsit had a detailed knowledge of both Skadi and Specter. She seems equally familiar with Andreana. And just like the others, she has determined that her presence at Rhodes Island would not be adverse. Or at least that the benefits of them joining us would outweigh the potential harm. Otherwise, they would have been found inadmissible.\nAs for me, I don't know what the story is. Haha, Kal'tsit actually said it would be okay to tell me, but I refused. Knowing too much can get you in trouble. I'll leave this one to Kal'tsit.\nWhat I took from her is that the difference between Andreana on one side and Specter and Skadi on the other is something like that between a drop of ink into clear water and a proper inkwell. The drop of ink is itself an infringement on the dignity of life, to the point that Kal'tsit expressed clear disdain for it: "There are those who have reached their hands into places they do not belong. Those for whom this stupidity is very much in character."\n—■■■` },
    { title: 'Promotion Record', content: `Regarding what Andreana mentioned, facing the strange body conditions of the two operators, Skadi and Specter, along with the problem of flawed Originium Arts in her and the two operators, the Medical Department continuously conducted medical checkups for her using different methods and approaches.\nFrom the findings, other than repeatedly coming to the conclusion that her physique is far stronger than an average person, there are no new results. Using Doctor Warfarin's words, 'What, at this level, there's completely no way to compare to Skadi's body.' Although these words inevitably brought about ambiguity, but indeed compared to Skadi, Andreana's physique can be explained by a more advantageous puberty process— After all, some are born stronger than others. It can be only said that letting her be a sniper operator may be a waste of talent. But this is a personal choice, and Rhodes Island will not deliberately interfere.\nAnyway, after confirming that there are no abnormalities with her body, this issue concluded with nothing definite. Just that to be safe, the Medical Department will still suggest that Andreana regularly receive examinations.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/deadeye-branch.png', factionIcon: '/icons/factions/abyssal-hunters.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/andreana/base.png', chibiSrc: '/operators/andreana/chibi.webm', illustrator: 'LLC' },
    { id: 'e2', label: 'Elite 2', src: '/operators/andreana/e2.png', chibiSrc: '/operators/andreana/chibi.webm', illustrator: 'LLC' },
    { id: 'skin1', label: 'Silent Arrow', src: '/operators/andreana/skin1.png', chibiSrc: '/operators/andreana/chibi-skin1.webm', illustrator: 'LLC' },
  ],
  portrait: '/operators/andreana/portrait.png',
  portraitFocus: { y: -9.6, x: 55.9, zoom: 289 },
  
}

export default andreana
