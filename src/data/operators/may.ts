import type { Operator } from '../../types'
import mayVoice from '../voices/may'

const may: Operator = {
  name: 'May', fileNo: 'VC01', class: 'Sniper', branch: 'Marksman', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Victoria', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Victoria',
  birthday: 'May 1st', height: '151 cm', combatExp: 'Half a year', infectionStatus: 'Confirmed uninfected by medical examination.', illustrator: 'Xiaye Hongming',
  cv: { JP: 'Kaori Mizuhashi', CN: 'Liu Wen', EN: 'Lizzie Freeman', KR: 'Yoo Young' },
  voice: mayVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS', 'Slow'],
  stats: { hp: 1632, atk: 478, def: 105, res: 0, block: 1, cost: 12, aspd: '1s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Victorian Agent', desc: 'ATK +4%, ASPD +4', elite: 'E1' },
    { name: 'Victorian Agent', desc: 'ATK +5% (+1%), ASPD +5 (+1)', elite: 'E1 (Potential 5)' },
    { name: 'Victorian Agent', desc: 'ATK +7%, ASPD +7', elite: 'E2' },
    { name: 'Victorian Agent', desc: 'ATK +8% (+1%), ASPD +8 (+1)', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Paralyzing Shell', icon: '/operators/may/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'Increases the ATK of the next attack to 200%, and Slows the target for 2.5 seconds', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: 'Increases the ATK of the next attack to 135%, and Slows the target for 1.5 seconds', spInit: 0, sp: 5 },
        { level: '2', desc: 'Increases the ATK of the next attack to 140%, and Slows the target for 1.5 seconds', spInit: 0, sp: 5 },
        { level: '3', desc: 'Increases the ATK of the next attack to 145%, and Slows the target for 1.5 seconds', spInit: 0, sp: 5 },
        { level: '4', desc: 'Increases the ATK of the next attack to 150%, and Slows the target for 2 seconds', spInit: 0, sp: 4 },
        { level: '5', desc: 'Increases the ATK of the next attack to 155%, and Slows the target for 2 seconds', spInit: 0, sp: 4 },
        { level: '6', desc: 'Increases the ATK of the next attack to 160%, and Slows the target for 2 seconds', spInit: 0, sp: 4 },
        { level: '7', desc: 'Increases the ATK of the next attack to 170%, and Slows the target for 2 seconds', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Increases the ATK of the next attack to 180%, and Slows the target for 2.5 seconds', spInit: 0, sp: 4 },
        { level: 'M2', desc: 'Increases the ATK of the next attack to 190%, and Slows the target for 2.5 seconds', spInit: 0, sp: 4 },
        { level: 'M3', desc: 'Increases the ATK of the next attack to 200%, and Slows the target for 2.5 seconds', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Binding Shock', icon: '/operators/may/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack Interval increases a bit, ATK +120%, attacks Slow the target for 1 seconds and have 30% chance to Stun them for 1.2 seconds', spInit: 0, sp: 20, dur: '30s', rank: 'M3',
      note: "Binding Shock increases May's attack interval by 50%, extending it to 1.5 seconds (before modifiers).",
      levels: [
        { level: '1', desc: 'Attack Interval increases a bit, ATK +60%, attacks Slow the target for 0.8 seconds and have 30% chance to Stun them for 0.9 seconds', spInit: 0, sp: 30, dur: '25s' },
        { level: '2', desc: 'Attack Interval increases a bit, ATK +65%, attacks Slow the target for 0.8 seconds and have 30% chance to Stun them for 0.9 seconds', spInit: 0, sp: 29, dur: '25s' },
        { level: '3', desc: 'Attack Interval increases a bit, ATK +70%, attacks Slow the target for 0.8 seconds and have 30% chance to Stun them for 0.9 seconds', spInit: 0, sp: 28, dur: '25s' },
        { level: '4', desc: 'Attack Interval increases a bit, ATK +75%, attacks Slow the target for 0.8 seconds and have 30% chance to Stun them for 1 seconds', spInit: 0, sp: 27, dur: '26s' },
        { level: '5', desc: 'Attack Interval increases a bit, ATK +80%, attacks Slow the target for 0.8 seconds and have 30% chance to Stun them for 1 seconds', spInit: 0, sp: 26, dur: '26s' },
        { level: '6', desc: 'Attack Interval increases a bit, ATK +85%, attacks Slow the target for 0.8 seconds and have 30% chance to Stun them for 1 seconds', spInit: 0, sp: 25, dur: '26s' },
        { level: '7', desc: 'Attack Interval increases a bit, ATK +90%, attacks Slow the target for 0.9 seconds and have 30% chance to Stun them for 1 seconds', spInit: 0, sp: 24, dur: '27s' },
        { level: 'M1', desc: 'Attack Interval increases a bit, ATK +100%, attacks Slow the target for 0.9 seconds and have 30% chance to Stun them for 1.1 seconds', spInit: 0, sp: 23, dur: '28s' },
        { level: 'M2', desc: 'Attack Interval increases a bit, ATK +110%, attacks Slow the target for 0.9 seconds and have 30% chance to Stun them for 1.1 seconds', spInit: 0, sp: 22, dur: '29s' },
        { level: 'M3', desc: 'Attack Interval increases a bit, ATK +120%, attacks Slow the target for 1 seconds and have 30% chance to Stun them for 1.2 seconds', spInit: 0, sp: 20, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "May's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    marx: { code: 'MAR-X', name: "Novice Detective's Gift Bag", stages: [
      { stage: 1, atk: '+18', aspd: '+1', effect: 'New trait: Increases ATK to 110% when attacking aerial targets' },
      { stage: 2, atk: '+23', aspd: '+2', effect: 'Victorian Agent improved: ATK +10%, ASPD +7' },
      { stage: 3, atk: '+27', aspd: '+3', effect: 'Victorian Agent improved: ATK +12%, ASPD +7' },
    ]},
  },
  profile: `Claims to be a Victorian Royal Detective; claims to have cracked a number of cases, and thus has gained some fame; claims to have been dispatched to Rhodes Island on high recommendations from her boss.\nRegardless of what she claims to be, Ms. May is now serving Rhodes Island as a sniper.`,
  story: `Hailing from a family of Victorian detectives, Metis Geraldine is a rookie detective who never backs down from a case. After solving a murder case with the help from Heidi Thomson, Metis went to great lengths to uncover every detail she could about Emperor. This pursuit eventually brought her into contact with Rhodes Island, partner to Penguin Logistics at the time, where she claimed to be a "Royal Detective". Despite her unconvincing fabrications, Rhodes Island decided to keep Metis under their wing, with Kal'tsit issuing a special warning to not undermine the organization's interests. Although her performance leaves much to be desired, Metis's reliability and integrity as a detective allow her to serve Rhodes Island as a sniper.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator May shows no signs of Oripathy infection.\n[Blood Originium-Crystal Density] 0.13u/L\nOperator May sometimes comes in contact with Originium in the field, but this has not affected her health for the time being.\nUnexpectedly, she is not as rash as she appears. Little Ms. Detective will take proper protective measures before entering potentially dangerous locations according to basic protocols taught in school. It is good to see that they are effective.\n— Gavial, Medic Operator` },
    { title: 'Archive File 1', content: `A self-proclaimed detective who appears to be rash and impetuous.\nEven though she does exhibit some detective literacy, most likely having received professional training in investigation, tracking, counter-tracking, clue analysis, etc, she also emits an aura of unreliability, which can be a blessing in a sense.\nThough her performance in minor, day-to-day matters leaves much to be desired, she always steps up in critical moments and demonstrates her trustworthiness as a detective.` },
    { title: 'Archive File 2', content: `Ms. May seems to be excessively concerned about Penguin Logistics, and often attempts to approach Exusiai and other staff members to ask questions about the internal operations of Penguin Logistics.\nMs. Croissant seems to welcome this development, and has even established a fee schedule for her information. It is unknown whether Ms. May actually pays this intelligence fee, but she claims to have received "valuable intel" from "enthusiastic Operators" such as Exusiai and others, including but not limited to the following:\n1. Penguin Logistics is actually a food distribution company specializing in apple pie.\n2. Penguin Logistics is actually an idol group that performs part-time courier services.\n3. The boss of Penguin Logistics is actually a plushie toy.\n4. Penguin Logistics rarely takes time off, but overtime pays very generously.\n......\nIt's hard to say whether Ms. May believes this information.` },
    { title: 'Archive File 3', content: `Indeed, Ms. May's oral resume is fabricated.\nAccording to subsequent investigations, Victoria does not have the position of "Royal Detective," and Ms. May herself is not a member of any official Victorian institution. Her real purpose in approaching Rhodes Island seems to be investigating Penguin Logistics.\nEven though she acts as if her cover story is foolproof and when pressed upon the matter repeatedly, reiterates it as if buying into her own story, she compromised her own story even early in the interview process.\nDue to her pitiably clumsy acting, one cannot help but to feel sorry for her. With Dr. Kal'tsit's consent, she was allowed to act freely under the condition that she would not do anything to undermine Rhodes Island's interests. After all, no matter how you look at it, she's far from discovering anything resembling the truth about Penguin Logistics.` },
    { title: 'Archive File 4', content: `Ms. May's love for the detective profession is true.\nShe is descended from a famous family of detectives. She received an upbringing that nurtured this ever since she was a child. In her room are a large number of cop movies and various detective props. If you entered her room without knowing better, you might be led to believe that you just barged into a tough guy's room.\nThough Ms. May's performance still has much room for improvement, her dedication to the pursuit of truth deserves recognition.` },
    { title: 'Promotion Record', content: `Though she wouldn't admit it, Ms. May's joy upon receiving a promotion was almost palpable.\nAs long as she's been here, Ms. May has demonstrated confidence and optimism well beyond that of ordinary people, quickly adjusting her mentality in the face of whatever setback or failure she may have encountered. Outside evaluations also seem to have little effect upon her determination to pursue her goals. Nevertheless, in her mind, having her abilities be recognized by others may be the first step towards becoming a big detective.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/may/base.png', chibiSrc: '/operators/may/chibi.webm', chibiMoveSrc: '/operators/may/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.5, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
    { id: 'e2', label: 'Elite 2', src: '/operators/may/e2.png', chibiSrc: '/operators/may/chibi.webm', chibiMoveSrc: '/operators/may/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.5, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
    { id: 'skin1', label: 'Summer Flowers FA054', src: '/operators/may/skin1.png', chibiSrc: '/operators/may/chibi-skin1.webm', chibiMoveSrc: '/operators/may/chibi-move-skin1.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.5, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
  ],
  portrait: '/operators/may/portrait.png',
  portraitFocus: { y: -0.3, x: 35.2, zoom: 279 },
}

export default may
