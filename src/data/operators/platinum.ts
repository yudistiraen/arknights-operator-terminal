import type { Operator } from '../../types'
import platinumVoice from '../voices/platinum'

const platinum: Operator = {
  name: 'Platinum', fileNo: 'KZ03', class: 'Sniper', branch: 'Marksman', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Kazimierz', position: 'Ranged', race: 'Kuranta', gender: 'Female',
  birthplace: 'Kazimierz', birthday: 'February 13th', height: '160 cm', combatExp: '6 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Skade',
  cv: { JP: 'Mizuki Kitajima', CN: 'Zhang Qi (credited as "Kiiki" in EN)', EN: 'Rosie Day', KR: 'Kim Chae-ha' },
  voice: platinumVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1550, atk: 505, def: 165, res: 0, block: 1, cost: 13, aspd: '1s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 0], [2, 1, 1, 1], [1, 1, 1, 0]],
    e1: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'All-Out Attack', desc: 'The longer the interval from the last attack is, the higher the ATK of the next attack will be (The longest interval is 2.5 seconds and the corresponding ATK increases to 140%)', elite: 'E1' },
    { name: 'All-Out Attack', desc: 'The longer the interval from the last attack is, the higher the ATK of the next attack will be (The longest interval is 2.5 seconds and the corresponding ATK increases to 180%)', elite: 'E2' },
  ],
  skills: [
    {
      name: 'ATK Up γ', icon: '/operators/platinum/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +100%', spInit: 15, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +30%', spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: 'ATK +35%', spInit: 0, sp: 40, dur: '30s' },
        { level: '3', desc: 'ATK +40%', spInit: 0, sp: 40, dur: '30s' },
        { level: '4', desc: 'ATK +45%', spInit: 5, sp: 37, dur: '30s' },
        { level: '5', desc: 'ATK +50%', spInit: 5, sp: 37, dur: '30s' },
        { level: '6', desc: 'ATK +55%', spInit: 5, sp: 37, dur: '30s' },
        { level: '7', desc: 'ATK +60%', spInit: 10, sp: 35, dur: '30s' },
        { level: 'M1', desc: 'ATK +75%', spInit: 10, sp: 34, dur: '30s' },
        { level: 'M2', desc: 'ATK +90%', spInit: 10, sp: 33, dur: '30s' },
        { level: 'M3', desc: 'ATK +100%', spInit: 15, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Pegasian Sight', icon: '/operators/platinum/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'ASPD reduces slightly, but ATK +100%; Range expands\nInfinite duration', spInit: 0, sp: 50, dur: '∞', rank: 'M3',
      note: "Pegasian Sight reduces Platinum's ASPD by 20.",
      levels: [
        { level: '1', desc: 'ASPD reduces slightly, but ATK +50%; Range expands\nInfinite duration', spInit: 0, sp: 70, dur: '∞' },
        { level: '2', desc: 'ASPD reduces slightly, but ATK +53%; Range expands\nInfinite duration', spInit: 0, sp: 69, dur: '∞' },
        { level: '3', desc: 'ASPD reduces slightly, but ATK +56%; Range expands\nInfinite duration', spInit: 0, sp: 68, dur: '∞' },
        { level: '4', desc: 'ASPD reduces slightly, but ATK +60%; Range expands\nInfinite duration', spInit: 0, sp: 67, dur: '∞' },
        { level: '5', desc: 'ASPD reduces slightly, but ATK +63%; Range expands\nInfinite duration', spInit: 0, sp: 66, dur: '∞' },
        { level: '6', desc: 'ASPD reduces slightly, but ATK +66%; Range expands\nInfinite duration', spInit: 0, sp: 65, dur: '∞' },
        { level: '7', desc: 'ASPD reduces slightly, but ATK +70%; Range expands\nInfinite duration', spInit: 0, sp: 63, dur: '∞' },
        { level: 'M1', desc: 'ASPD reduces slightly, but ATK +80%; Range expands\nInfinite duration', spInit: 0, sp: 59, dur: '∞' },
        { level: 'M2', desc: 'ASPD reduces slightly, but ATK +90%; Range expands\nInfinite duration', spInit: 0, sp: 55, dur: '∞' },
        { level: 'M3', desc: 'ASPD reduces slightly, but ATK +100%; Range expands\nInfinite duration', spInit: 0, sp: 50, dur: '∞' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Platinum's Badge", desc: `Operator Platinum has demonstrated a remarkable aptitude for maintaining distance whilst conducting suppressive fire against the enemy.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Sniper Operator during field operations to exercise Marksman responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    marx: { code: 'MAR-X', name: 'Solo Travel Kit', stages: [
      { stage: 1, hp: '+90', atk: '+25', effect: 'New trait:\nIncreases ATK to 110% when attacking aerial targets' },
      { stage: 2, hp: '+140', atk: '+33', effect: 'All-Out Attack improved:\nThe longer the interval from the last attack is, the higher the ATK of the next attack will be (The longest interval is 2.5 seconds and the corresponding ATK increases to 190%)' },
      { stage: 3, hp: '+170', atk: '+40', effect: 'All-Out Attack improved:\nThe longer the interval from the last attack is, the higher the ATK of the next attack will be (The longest interval is 2.5 seconds and the corresponding ATK increases to 200%)' },
    ]},
  },
  story: `Even though Centaurea had been dreaming about becoming a knightess, reality drains such passion away. Upon graduation, the white-haired Pegasus worked as a lesser celebrity until she was somehow appointed by the previous Platinum of the Armorless Union to become its member. However, Centaurea was forced to take up such title and leadership after the death of the predecessor (as well as her mentor) due to his betrayal of the Union to save his loved one. Time has made the current Platinum both an emotionless assassin and a tired salarywoman, yet she still struggled to get rid of the unfair desicions on her life made by both the Kazimierzian corporate directors and the two Lazurites Monique and Roy.\nAfter failing to eliminate the Nearl sisters during the 24th season of the Kazimierz Major, Centaurea concluded that enough is enough and decided to run away from the Union. Along her way, she accidentally bumped into the Doctor whom she tried to assassinate long ago. Nevertheless, Rhodes Island is willing to provide her shelter from the Union. As for Centaurea herself, she could finally let out a sigh of relief from her past burden.`,
  profile: `Platinum was formerly an assassin for the Kazimierz Armorless Union. The rest of her background is unknown. She has demonstrated considerable talent and special tactical accomplishments in mech fights, annihilation battles, and urban warfare.\nUnder the leadership of Dr. Kal'tsit, she is a Sniper Operator for Rhodes Island.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n[Blood Originium-Crystal Density] 0.11u/L\nThis Operator has rarely come into contact with Originium.\nPhysical indicators have all tested at normal levels. After the conclusion of the examination process, I have taken over this Operator's relevant investigation and data files.\n— Kal'tsit` },
    { title: 'Archive File 1', content: `The only information that's confirmed about Platinum is her hometown is Kazimierz. All other information that Platinum shares must be taken with a grain of salt which even includes medical data like chest size and weight. Platinum prefers to falsify this data (often through threats and blackmail) as she believes.\n"A girl should be allowed to have her secrets!"\nTherefore, most of the information in Platinum's file have no value.\nOf course, core records and non-public materials are still subject to close scrutiny.` },
    { title: 'Archive File 2', content: `The Knight-Assassins are a secret military force cultivated by the various forces of Kazimierz during political struggles with the rogue knights.\nAccording to rumors, in order to counter the rogue knights who were well verse in combat, the Knight Assassins utilized special assassination and guerrilla combat techniques. Consequently, they launched an relentless campaign of destruction against the rogue knights that refused to cooperate with the reigning powers.\nAlthough it is impossible to verify the authenticity of these rumors, Platinum does exhibit some of the skills that could be used to fight the Kazimierz knights. Both in aspects that can't be measured as well as her incredible bow skills, under special circumstances, Platinum poses a huge threat to armored targets.\nIn light of these findings, investigations into Platinum must continue.` },
    { title: 'Archive File 3', content: `In the end, Platinum chose to join the team directly led by Dr. Kal'tsit in order to develop her own strengths and to prove that her relationship with Rhodes Island was genuine. This is an acceptable result for Rhodes Island.\nAside from teasing other Operators, slipping away from her daily chores, and other minor rule violations, Platinum has proven that she has the essence of an outstanding Operator.\nEven so, Platinum needs to make sure she applies for "read permission" from the management department and not steal glances during the data compilation process.\nI hope Dr. Kal'tsit will consider putting an end to some of her more outrageous behaviors. \nThank you.` },
    { title: 'Archive File 4', content: `[Classified Log]\nEven though Platinum currently follows my instructions and orders, she seems to care little for Rhodes Island itself. Even from the perspective of the employment relationship, Rhodes Island's pay may not be able to satisfy her. As such, it is critical we seriously consider whether Platinum will remain loyal.\nOf course, according to my personal observations, the relationship between Platinum and Rhodes Island is mostly derived from her trust in the Doctor.\nIn other words, as long as Platinum's relationship with the Doctor is strong enough, she will continue to hold considerable value for Rhodes Island.\nThere are multiple ways we can go about removing the variable factors in this situation. Strengthening our relationship to dispel excessive notions of independence ought to be feasible.\n— Kal'tsit` },
    { title: 'Promotion Record', content: `Currently, all of the intelligence Rhodes Island has regarding the Armorless Union comes from Platinum herself and should not be regarded as the full truth.\nAt the same time, when conducting secret missions into the large cities of Kazimierz, attention must be paid to the next steps the Armorless Union takes. Rhodes Island should be vigilant of other groups of unknown alignment operating in the shadows.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/kazimierz.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/platinum/base.png', chibiSrc: '/operators/platinum/chibi.webm', chibiMoveSrc: '/operators/platinum/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/platinum/e2.png', chibiSrc: '/operators/platinum/chibi.webm', chibiMoveSrc: '/operators/platinum/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'skin1', label: 'Shining Dew SD05', src: '/operators/platinum/skin1.png', chibiSrc: '/operators/platinum/chibi-skin1.webm', chibiMoveSrc: '/operators/platinum/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
  ],
  portrait: '/operators/platinum/portrait.png',
  portraitFocus: { y: -0.2, x: 50.9, zoom: 325 },
}

export default platinum
