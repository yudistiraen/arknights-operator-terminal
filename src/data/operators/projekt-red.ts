import type { Operator } from '../../types'
import projektRedVoice from '../voices/projekt-red'

const projektRed: Operator = {
  name: 'Projekt Red', fileNo: 'SW01', class: 'Specialist', branch: 'Executor', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'S.W.E.E.P.', position: 'Melee', race: 'Lupo', gender: 'Female',
  birthplace: 'Undisclosed', birthday: 'August 25th', height: '162 cm', combatExp: '9 years', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: 'infukun',
  cv: { JP: 'Ami Koshimizu', CN: 'Muyaruilin', EN: 'Jenny Yokobori', KR: 'Park Seen-he' },
  voice: projektRedVoice,
  trait: 'Significantly reduced Redeployment Time',
  tags: ['Fast-Redeploy', 'Crowd-Control'],
  stats: { hp: 1505, atk: 605, def: 302, res: 0, block: 1, cost: 9, aspd: '0.93s', rdp: '18s' },
  range: {
    base: [[2, 1]],
    e1: [[2, 1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Outstanding', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Chill', desc: 'Deals at least 20% of ATK damage every attack', elite: 'E1' },
    { name: 'Chill', desc: 'Deals at least 30% of ATK damage every attack', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Execution Mode', icon: '/operators/projekt-red/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, ATK +80%, and gain 50% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s', rank: 'M3',
      levels: [
        { level: '1', desc: 'After deployment, ATK +35%, and gain 20% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: '2', desc: 'After deployment, ATK +40%, and gain 20% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: '3', desc: 'After deployment, ATK +45%, and gain 20% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: '4', desc: 'After deployment, ATK +50%, and gain 30% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: '5', desc: 'After deployment, ATK +55%, and gain 30% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: '6', desc: 'After deployment, ATK +60%, and gain 30% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: '7', desc: 'After deployment, ATK +65%, and gain 40% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: 'M1', desc: 'After deployment, ATK +70%, and gain 40% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: 'M2', desc: 'After deployment, ATK +75%, and gain 40% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
        { level: 'M3', desc: 'After deployment, ATK +80%, and gain 50% Physical and Arts Dodge', spInit: 0, sp: 0, dur: '10s' },
      ],
    },
    {
      name: 'Wolfpack', icon: '/operators/projekt-red/skill-2.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, immediately deals 250% ATK as Physical damage to all nearby enemies and Stuns them for 3 seconds', spInit: 0, sp: 0, rank: 'M3',
      range: [[0, 1, 0], [1, 2, 1], [0, 1, 0]],
      note: 'Wolfpack does not affect aerial enemies.',
      levels: [
        { level: '1', desc: 'After deployment, immediately deals 140% ATK as Physical damage to all nearby enemies and Stuns them for 1 seconds', spInit: 0, sp: 0 },
        { level: '2', desc: 'After deployment, immediately deals 150% ATK as Physical damage to all nearby enemies and Stuns them for 1 seconds', spInit: 0, sp: 0 },
        { level: '3', desc: 'After deployment, immediately deals 160% ATK as Physical damage to all nearby enemies and Stuns them for 1 seconds', spInit: 0, sp: 0 },
        { level: '4', desc: 'After deployment, immediately deals 170% ATK as Physical damage to all nearby enemies and Stuns them for 1.5 seconds', spInit: 0, sp: 0 },
        { level: '5', desc: 'After deployment, immediately deals 180% ATK as Physical damage to all nearby enemies and Stuns them for 1.5 seconds', spInit: 0, sp: 0 },
        { level: '6', desc: 'After deployment, immediately deals 190% ATK as Physical damage to all nearby enemies and Stuns them for 1.5 seconds', spInit: 0, sp: 0 },
        { level: '7', desc: 'After deployment, immediately deals 200% ATK as Physical damage to all nearby enemies and Stuns them for 2 seconds', spInit: 0, sp: 0 },
        { level: 'M1', desc: 'After deployment, immediately deals 210% ATK as Physical damage to all nearby enemies and Stuns them for 2.3 seconds', spInit: 0, sp: 0 },
        { level: 'M2', desc: 'After deployment, immediately deals 230% ATK as Physical damage to all nearby enemies and Stuns them for 2.6 seconds', spInit: 0, sp: 0 },
        { level: 'M3', desc: 'After deployment, immediately deals 250% ATK as Physical damage to all nearby enemies and Stuns them for 3 seconds', spInit: 0, sp: 0 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Projekt Red's Badge", desc: `Operator Projekt Red has demonstrated a remarkable aptitude in repeated battlefield penetration.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Specialist Operator during field operations to exercise Executor responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    exey: { code: 'EXE-Y', name: 'Mystery Prop Pack', stages: [
      { stage: 1, atk: '+50', aspd: '+4', effect: 'New trait: When there are no allied units in the four adjacent tiles, ATK +10%' },
      { stage: 2, atk: '+65', aspd: '+4', effect: 'Chill improved: Deals at least 37% of ATK damage every attack' },
      { stage: 3, atk: '+74', aspd: '+4', effect: 'Chill improved: Deals at least 40% of ATK damage every attack' },
    ]},
  },
  story: `A Rhodes Island covert operations specialist part of S.W.E.E.P., all that is known about the enigmatic Lupo codenamed "Projekt Red" or simply "Red", is that she was raised by Caesar aka. "Grandma", one of the Signori del Lupi of the Siracusan wilderness, as a "Wolf Fang" that carries out La Signora's will in il Signori's ancient proxy war. Red's talents in assassination brings instinctual fear to not only the Siracusan mafiosi but also all Lupus, hence earning her the moniker "Wolf Hunter".\nFollowing her adoption by Kal'tsit, Red has been trained to be a skilled wetworks Operator and her presence is strong enough to strike fear onto R.I.'s personnel. While Red prefers to work alone and do things in her own way, she could work well with others as a team through her extraordinary skills such as wall-running.`,
  profile: `Projekt Red's real identity unknown and her background a mystery. She was taken in, raised, and protected by Dr. Kal'tsit. Extremely talented in high mobility warfare, special ops and stealth combat.\nProjekt Red now serves as a Specialist Operator for Rhodes Island under Dr. Kal'tsit's guidance.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed clear outline of internal organs without any unusual dark spot. No unusual traces of Originium particles present in her system, no signs of infection, confirming her as non-infected.\n[Cell-Originium Assimilation] 0%\nOperator Projekt Red showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.13u/L\nOperator Projekt Red has come into contact with Originium in many missions and the number of exposures is increasing. She must be warned of the potential risks.\nVarious physical examinations have returned normal results for Operator Projekt Red. I will handle the case file for this Operator after the process is complete.\n— Kal'tsit` },
    { title: 'Archive File 1', content: `Operator Projekt Red's behavior in combat is not easily understood. Projekt Red's style seems more concise and... barbaric compared to your typical Operator.\nIn daily life, Projekt Red is a mystery, seldom opening up to fellow Operators. They also question her background, based on her lack of education and socialization.\nAny mission requiring her presence signals great difficulty, with high potential casualties and losses, leading some Operators to nickname her "Reaper in a Red Riding Hood."\nBut with time, Projekt Red has started to show her innocent side and warmed up to some other Operators.\nMaybe everyone will get to really know and accept her one day, and Projekt Red will become a real part of our community.` },
    { title: 'Archive File 2', content: `To Projekt Red, she and other Lupus are not "wolves" as they are often called by the uninitiated.\nInitially, the medical staff viewed Projekt Red as a basic education problem, until she showed inexplicable cognitive abilities in several tests. When faced with an array of randomly arranged objects, Projekt Red would find a way to organize them.\nSome medic Operators believe this to be a result of color blindness, that a defect or mutation in her nervous system enabled Red to recognize details imperceptible to a normal Lupus. On the other hand, some Medics believe Projekt Red has a unique Originium talent that enhances her awareness far beyond normal.\nSince Medical suspended their testing, most Operators have begun to accept Operator Projekt Red's ability as unique.` },
    { title: 'Archive File 3', content: `[REVISED CLASSIFIED INFORMATION]\n#Prohibits all mention of Lupus Operators' violent reaction to Operator Projekt Red and remove such mentions from all public records.\n1. Classify all relevant medical examinations and testing as medical staff access only.\n2. Forbid review of and redaction of any relevant record.\n3. Destroy test data.\nAll above actions must be completed within 1-2 work days of signature.\nOrdered by: ■ ■ ·■ ■ ■ ■ ■ ■ ■\nApproved by: Dr. Kal'tsit, ■ ■ ■ ■ , Amiya` },
    { title: 'Archive File 4', content: `[Classified Log]\nShould we attempt to deepen our contact with "Grandma"?\nI think it's a very dangerous proposition.\nHow will it affect Projekt Red? How has "Grandma" affected Projekt Red? What kind of entity or collective is "Grandma," and how did it/they manage to affect her?\nWhat's obvious is, "Grandma" made Projekt Red who she is today. What she knows about the "wolves," how strongly other Lupus feel about her, and possibly many more secrets... Whatever "Grandma" has planned is tied intimately to Projekt Red's future.\nWhile I tried to formulate some contingencies before, ultimately I chose to destroy all files and research data.\nI must not be rash.\nThis has nothing to do with any risk assessment or theoretical study.\nEven though I cannot do nothing, I cannot be reckless, either.\nI must seize every second of the limited time frame we have to convince Projekt Red to acknowledge her existence.\nShe has the right to choose for herself.\n— Kal'tsit` },
    { title: 'Promotion Record', content: `Amiya agreed, we needed a top-secret, highly efficient team.\nProjekt Red is an invaluable member of such a team, having served as one of its first members.\nShe has issues, but that's not my problem, Kal'tsit will see to those.\nAll I'm here to do is sharpen her fangs and her knife.\nRhodes Island needs to take steps like this to ensure that sort of thing never happens again. The Doctor must accept this reality.\n— ■ ■ ■ ■` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/executor-branch.png', factionIcon: '/icons/factions/sweep.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/projekt-red/base.png', chibiSrc: '/operators/projekt-red/chibi.webm', chibiMoveSrc: '/operators/projekt-red/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'infukun' },
    { id: 'e2', label: 'Elite 2', src: '/operators/projekt-red/e2.png', chibiSrc: '/operators/projekt-red/chibi.webm', chibiMoveSrc: '/operators/projekt-red/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'infukun' },
    { id: 'skin1', label: 'Light Breeze LB01', src: '/operators/projekt-red/skin1.png', chibiSrc: '/operators/projekt-red/chibi-skin1.webm', chibiMoveSrc: '/operators/projekt-red/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'infukun' },
  ],
  portrait: '/operators/projekt-red/portrait.png',
  portraitFocus: { y: -0.7, x: 53.7, zoom: 365 },
}

export default projektRed
