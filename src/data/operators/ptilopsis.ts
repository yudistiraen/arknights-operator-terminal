import type { Operator } from '../../types'
import ptilopsisVoice from '../voices/ptilopsis'

const ptilopsis: Operator = {
  name: 'Ptilopsis', fileNo: 'RL04', class: 'Medic', branch: 'Multi-target Medic', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhine Lab', position: 'Ranged', race: 'Liberi', gender: 'Female',
  birthplace: 'Columbia', birthday: 'October 6th', height: '164 cm', combatExp: 'None', infectionStatus: 'Traces of Originium Crystals have been detected in her body, confirming she is infected.', illustrator: '竜崎いち',
  cv: { JP: 'Hisako Kanemoto', CN: 'Gui Niang (credited as "D. QQ" in EN)', EN: 'Heather Nicol', KR: 'Kim Sae-hae' },
  voice: ptilopsisVoice,
  trait: 'Restores the HP of 3 allies simultaneously',
  tags: ['Healing', 'Support'],
  stats: { hp: 1610, atk: 335, def: 150, res: 0, block: 1, cost: 17, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 0], [1, 2, 1, 1], [1, 1, 1, 0]],
    e1: [[1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Skill Aura', desc: 'When deployed, increases the SP recovery of all allies by 0.15/sec (only the highest effect of this type will be applied)', elite: 'E1' },
    { name: 'Skill Aura', desc: 'When deployed, increases the SP recovery of all allies by 0.3/sec (only the highest effect of this type will be applied)', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Healing Up γ', icon: '/operators/ptilopsis/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +90%', spInit: 20, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +40%', spInit: 20, sp: 40, dur: '30s' },
        { level: '2', desc: 'ATK +45%', spInit: 20, sp: 40, dur: '30s' },
        { level: '3', desc: 'ATK +50%', spInit: 20, sp: 40, dur: '30s' },
        { level: '4', desc: 'ATK +55%', spInit: 20, sp: 35, dur: '30s' },
        { level: '5', desc: 'ATK +60%', spInit: 20, sp: 35, dur: '30s' },
        { level: '6', desc: 'ATK +65%', spInit: 20, sp: 35, dur: '30s' },
        { level: '7', desc: 'ATK +70%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M1', desc: 'ATK +75%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M2', desc: 'ATK +80%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M3', desc: 'ATK +90%', spInit: 20, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Enkephalin', icon: '/operators/ptilopsis/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Range expands; reduces Attack Interval greatly', spInit: 85, sp: 100, dur: '40s', rank: 'M3',
      range: [[1, 1, 1, 1, 1], [1, 2, 1, 1, 1], [1, 1, 1, 1, 1]],
      note: "Enkhepalin reduces Ptilopsis' attack interval by 1.65/1.65/1.65/1.8/1.8/1.8/1.9/1.9/1.9/2.1 seconds.",
      levels: [
        { level: '1', desc: 'Range expands; reduces Attack Interval slightly', spInit: 65, sp: 100, dur: '30s' },
        { level: '2', desc: 'Range expands; reduces Attack Interval slightly', spInit: 65, sp: 100, dur: '31s' },
        { level: '3', desc: 'Range expands; reduces Attack Interval slightly', spInit: 65, sp: 100, dur: '32s' },
        { level: '4', desc: 'Range expands; reduces Attack Interval moderately', spInit: 70, sp: 100, dur: '33s' },
        { level: '5', desc: 'Range expands; reduces Attack Interval moderately', spInit: 70, sp: 100, dur: '34s' },
        { level: '6', desc: 'Range expands; reduces Attack Interval moderately', spInit: 70, sp: 100, dur: '35s' },
        { level: '7', desc: 'Range expands; reduces Attack Interval significantly', spInit: 75, sp: 100, dur: '36s' },
        { level: 'M1', desc: 'Range expands; reduces Attack Interval significantly', spInit: 78, sp: 100, dur: '37s' },
        { level: 'M2', desc: 'Range expands; reduces Attack Interval significantly', spInit: 82, sp: 100, dur: '38s' },
        { level: 'M3', desc: 'Range expands; reduces Attack Interval greatly', spInit: 85, sp: 100, dur: '40s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Ptilopsis's Badge", desc: `Operator Ptilopsis has demonstrated a remarkable aptitude for healing several teammates in a short period of time.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Medic Operator during field operations to exercise Multi-target Medic responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    rinx: { code: 'RIN-X', name: 'Medic Environment Analyze System', stages: [
      { stage: 1, hp: '+60', atk: '+30', effect: 'Trait improved: Attack Range expands' },
      { stage: 2, effect: 'Skill Aura improved: When deployed, increases the SP recovery of all allies by 0.3/sec; Allies within Attack Range gain 0.33/sec instead (only the highest effect of this type will be applied)' },
      { stage: 3, effect: 'Skill Aura improved: When deployed, increases the SP recovery of all allies by 0.3/sec; Allies within Attack Range gain 0.35/sec instead (only the highest effect of this type will be applied)' },
    ]},
  },
  story: `Joyce Moore, codenamed "Ptilopsis", once worked for Rhine Lab as a database maintenance staff until the Liberi voluntarily became the subject of an R.L. experiment to utilize Originium for creating an "organic computer" so she could remember her late friend Dellareed, the one who theorized that Originium can store past memories, and prove her theory by uncovering Terra's lost history. The experiment was a risky one, in which an Originium-based direct neural interface named "Device #9" was implanted right onto Joyce's brain. Fortunately, she survived, but the Device's presence affected her thought and speech patterns in which Joyce behaves as if she is a self-aware computer by making remarks that would be appropriately said by a machine. The Oripathy caused by the experiment also led to her suffering from narcolepsy.\nAfter the experiment, Joyce worked alongside Dr. Olivia Silence as her assistance. It was until the disastrous "Diαbolic Crisis" that led to her departure from the company alongside Silence after R.L. made a full collaboration with Rhodes Island under Kristen Wright's agreement. Since then, Joyce has been staying in R.I. as one of its medical staff and database managers to receive treatment for mitigating her health issues caused by the Device #9. Many R.I. members don't mind Joyce's eccentricity, instead finding her interesting.`,
  profile: `...\nI have chosen an accurate answer for you from 20,593 search results.\nOperator Ptilopsis. Formerly a data maintenance specialist at the Rhine Lab company. Has made considerable accomplishments in the domain of healing Originium Arts. Experienced in medical data maintenance, routine medical program applications, multi-project medical behavior, and other related fields.\nNow a member of the medical staff at Rhodes Island. She is also a member Dr. Silence's clinical team and assists with the treatment programs at Rhodes Islands.\n...`,
  records: [
    { title: 'Clinical Analysis', content: `......\nRelated medical test report retrieved.\n[Project Name] Operator: Ptilopsis.\n[Test Results] According to test results, this operator's internal organs exhibit abnormal shadows. Originium granules have been detected within the circulatory system. Typical Oripathy indicators have been detected. At this stage, it can be confirmed that this operator is Infected.\n[Cell-Originium Assimilation] 8%\nOre lesions are mostly internal. Infection level: Mild.\n[Blood Originium-Crystal Density] 0.43u/L\nSpread of Originium through the body: Slow. Infection Progress: Under control.\n......` },
    { title: 'Archive File 1', content: `......\nHello. Excuse me. Do you need any help?\n......\nIn response to your question, Ptilopsis replies: Correct. The conversation interface that you are communicating with is Ptilopsis herself.\nAs Rhodes Island's published data maintenance assistant, Ptilopsis has the authority for complete reference, free commenting, and some limited modification privileges.\nAt the same time, the Data Recording Officer is currently involved in the dialogue recording workflow procedure. All clearly defined searches will be recorded.\n......\nMessage has been clearly received.\nPtilopsis is currently a senior medical Operator at Rhodes Island. Like Dr. Silence, she is a former member of the Rhine Lab Project Department.\nAt present, it is our long-term decision and purpose to introduce modern medical technologies and related Originium Arts research as leading medical projects at Rhodes Island.\nPtilopsis has acted as assistant to Dr. Silence in compiling and presenting several Oripathy treatment programs and serves a critical role in data recording and analysis extraction.\nIn addition, Ptilopsis has also assisted to a certain extent with the daily protection of the infected Operator named Ifrit.\n......` },
    { title: 'Archive File 2', content: `......\nInitializing message exchange interface. I am Ptilopsis. How can I help you?\n......\nAre you looking for information on the status of Ptilopsis's illness?\nUnderstood. Please wait a moment.\nBased on your search keywords, I have found the following results:\nPtilopsis, confirmed infected.\nSymptoms: Narcolepsy.\nClinical observations: Without any indication...\n...\n......\n............\nWithout any indication, patient will suddenly fall into sleeping state.\n......Yes, after awakening, I have read the conversation record again, and have returned to the topic we were discussing before I fell asleep.\nDr. Silence has drawn up a treatment plan for my illness that has already been incorporated into my daily schedule.\nReturning to the previous topic.\nThe primary effects of Ptilopsis's ore infection present as intensification of her racial characteristics, hacked sleep mode functions, and disrupted biological nerve transmission.\nPtilopsis is unable to predict what kinds of major declines in her daily efficiency will come as a result of these disruptions.\nOn the other hand, the ore infection has a certain significance for Ptilopsis. Yes, we must not judge subjectively something that objectively exists.\nThe ore infection has given Ptilopsis a new perspective on everything before her; a new understanding.\nShe now sees herself, others, and this world in a new light. And also...she has a better appreciation for the sky above.\nEvery day I wonder, as the Originium granules course throughout my body, how to analyze and calculate the information they carry.\nAt the same time as they consume my natural resources, I should try to get some meaning out of them.\nFor Ptilopsis, this is the foremost question to ponder from here on.\n......` },
    { title: 'Archive File 3', content: `......\nPtilopsis has received your request, but has denied your viewing access.\nPtilopsis has denied your request to view information on the "Flame Demon Incident."\nYou are now allowed to read any classified information related to Rhine Lab.\nAll internal documents related to Ifrit, Silence, Saria, and any other Operator are encrypted.\nI personally recommend not to mention these subjects.\nI'm very sorry.\n......\nMe?\nYou what to know what role Ptilopsis plays in all of this?\nThat's simple. I can answer that.\nPtilopsis maintains a neutral stance at all times.\nI maintain unbiased data, eliminate uncertainty caused by emotions, and avoid fatal errors during calculation and operation.\nTherefore, when Ptilopsis judges that a Rhine Lab operation will put Ptilopsis's chosen outcome in jeopardy, Ptilopsis will clearly refuse the command.\nHowever, do understand that Rhine Lab's research holds possibilities for pushing this world into the future.\nThis cannot be vetoed simply because it has a dark side to it.\nThis is all the information I can share with you about Ptilopsis's position for the time being.` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/multi-target-medic-branch.png', factionIcon: '/icons/factions/rhine-lab.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/ptilopsis/base.png', chibiSrc: '/operators/ptilopsis/chibi.webm', chibiMoveSrc: '/operators/ptilopsis/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.7, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'e2', label: 'Elite 2', src: '/operators/ptilopsis/e2.png', chibiSrc: '/operators/ptilopsis/chibi.webm', chibiMoveSrc: '/operators/ptilopsis/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.7, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'skin1', label: 'Serenity', src: '/operators/ptilopsis/skin1.png', chibiSrc: '/operators/ptilopsis/chibi-skin1.webm', chibiMoveSrc: '/operators/ptilopsis/chibi-move-skin1.webm', chibiFraming: { scale: 1.27, offsetXPercent: 2, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'skin2', label: 'Among the Clouds', src: '/operators/ptilopsis/skin2.png', chibiSrc: '/operators/ptilopsis/chibi-skin2.webm', chibiMoveSrc: '/operators/ptilopsis/chibi-move-skin2.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.3, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
  ],
  portrait: '/operators/ptilopsis/portrait.png',
  portraitFocus: { y: -6.4, x: 70.9, zoom: 325 },
}

export default ptilopsis
