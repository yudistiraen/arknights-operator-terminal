import type { Operator } from '../../types'
import brocaVoice from '../voices/broca'

const broca: Operator = {
  name: 'Broca', fileNo: 'SR27', class: 'Guard', branch: 'Centurion', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: "Chiave's Gang", position: 'Melee', race: 'Feline', gender: 'Male', birthplace: 'Siracusa',
  birthday: 'February 4th', height: '189 cm', combatExp: '5 years', infectionStatus: 'Originium crystals are distributed across the surface of his body, confirmed Infected by medical examination.', illustrator: 'Infukun',
  cv: { JP: 'Kosuke Toriumi', CN: 'Zhaokun Liu', EN: 'Jonathan Bullock', KR: 'Sung Wan-kyung' },
  voice: brocaVoice,
  trait: 'Attacks all blocked enemies',
  tags: ['AoE', 'Survival'],
  stats: { hp: 2335, atk: 842, def: 366, res: 0, block: 3, cost: 23, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2, 1]],
    e1: [[2, 1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Drill Strengthening', desc: 'Increases ATK and DEF by 6% when blocking 2 or more enemies', elite: 'E1' },
    { name: 'Drill Strengthening', desc: 'Increases ATK and DEF by 8% (+2%) when blocking 2 or more enemies', elite: 'E1 (Potential 5)' },
    { name: 'Drill Strengthening', desc: 'Increases ATK and DEF by 12% when blocking 2 or more enemies', elite: 'E2' },
    { name: 'Drill Strengthening', desc: 'Increases ATK and DEF by 14% (+2%) when blocking 2 or more enemies', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Galvanize', icon: '/operators/broca/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%, normal attacks deal Arts damage', spInit: 20, sp: 50, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%, normal attacks deal Arts damage', spInit: 0, sp: 50, dur: '25s' },
        { level: '2', desc: 'ATK +25%, normal attacks deal Arts damage', spInit: 1, sp: 50, dur: '25s' },
        { level: '3', desc: 'ATK +30%, normal attacks deal Arts damage', spInit: 2, sp: 50, dur: '25s' },
        { level: '4', desc: 'ATK +35%, normal attacks deal Arts damage', spInit: 5, sp: 50, dur: '26s' },
        { level: '5', desc: 'ATK +40%, normal attacks deal Arts damage', spInit: 6, sp: 50, dur: '26s' },
        { level: '6', desc: 'ATK +45%, normal attacks deal Arts damage', spInit: 7, sp: 50, dur: '26s' },
        { level: '7', desc: 'ATK +50%, normal attacks deal Arts damage', spInit: 10, sp: 50, dur: '27s' },
        { level: 'M1', desc: 'ATK +60%, normal attacks deal Arts damage', spInit: 13, sp: 50, dur: '28s' },
        { level: 'M2', desc: 'ATK +70%, normal attacks deal Arts damage', spInit: 16, sp: 50, dur: '29s' },
        { level: 'M3', desc: 'ATK +80%, normal attacks deal Arts damage', spInit: 20, sp: 50, dur: '30s' },
      ],
    },
    {
      name: 'High-Voltage Current', icon: '/operators/broca/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack Interval increases, Attack Range increases, ATK +190%, normal attacks deal Arts damage and Slow the targets for 1.0 seconds\nThis unit is Stunned for 5 seconds after the skill duration', spInit: 20, sp: 35, dur: '25s', rank: 'M3', range: [[2, 1, 1, 1]],
      note: "High-Voltage Current increases Broca's attack interval by 65%, extending it to 1.98 seconds (before modifiers).",
      levels: [
        { level: '1', desc: 'Attack Interval increases, Attack Range increases, ATK +80%, normal attacks deal Arts damage and Slow the targets for 0.7 seconds\nThis unit is Stunned for 8 seconds after the skill duration', spInit: 10, sp: 45, dur: '25s' },
        { level: '2', desc: 'Attack Interval increases, Attack Range increases, ATK +90%, normal attacks deal Arts damage and Slow the targets for 0.7 seconds\nThis unit is Stunned for 8 seconds after the skill duration', spInit: 11, sp: 44, dur: '25s' },
        { level: '3', desc: 'Attack Interval increases, Attack Range increases, ATK +100%, normal attacks deal Arts damage and Slow the targets for 0.7 seconds\nThis unit is Stunned for 8 seconds after the skill duration', spInit: 12, sp: 43, dur: '25s' },
        { level: '4', desc: 'Attack Interval increases, Attack Range increases, ATK +110%, normal attacks deal Arts damage and Slow the targets for 0.8 seconds\nThis unit is Stunned for 7 seconds after the skill duration', spInit: 13, sp: 42, dur: '25s' },
        { level: '5', desc: 'Attack Interval increases, Attack Range increases, ATK +120%, normal attacks deal Arts damage and Slow the targets for 0.8 seconds\nThis unit is Stunned for 7 seconds after the skill duration', spInit: 14, sp: 41, dur: '25s' },
        { level: '6', desc: 'Attack Interval increases, Attack Range increases, ATK +130%, normal attacks deal Arts damage and Slow the targets for 0.8 seconds\nThis unit is Stunned for 7 seconds after the skill duration', spInit: 15, sp: 40, dur: '25s' },
        { level: '7', desc: 'Attack Interval increases, Attack Range increases, ATK +140%, normal attacks deal Arts damage and Slow the targets for 0.9 seconds\nThis unit is Stunned for 6 seconds after the skill duration', spInit: 16, sp: 39, dur: '25s' },
        { level: 'M1', desc: 'Attack Interval increases, Attack Range increases, ATK +160%, normal attacks deal Arts damage and Slow the targets for 0.9 seconds\nThis unit is Stunned for 6 seconds after the skill duration', spInit: 17, sp: 38, dur: '25s' },
        { level: 'M2', desc: 'Attack Interval increases, Attack Range increases, ATK +170%, normal attacks deal Arts damage and Slow the targets for 1.0 seconds\nThis unit is Stunned for 6 seconds after the skill duration', spInit: 18, sp: 37, dur: '25s' },
        { level: 'M3', desc: 'Attack Interval increases, Attack Range increases, ATK +190%, normal attacks deal Arts damage and Slow the targets for 1.0 seconds\nThis unit is Stunned for 5 seconds after the skill duration', spInit: 20, sp: 35, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Broca's Badge", desc: 'Appointed as Guard Operator to exercise Centurion responsibilities' },
    cenx: { code: 'CEN-X', name: '"Buddies"', stages: [
      { stage: 1, hp: '+100', atk: '+30', def: '+18', effect: 'Trait improved: Attacks all blocked enemies; ATK is increased to 110% when attacking blocked enemies' },
      { stage: 2, hp: '+130', atk: '+42', def: '+22', effect: 'Drill Strengthening improved: Gains +15% ATK and DEF when blocking 2 or more enemies' },
      { stage: 3, hp: '+155', atk: '+50', def: '+24', effect: 'Drill Strengthening improved: Gains +17% ATK and DEF when blocking 2 or more enemies' },
    ]},
  },
  profile: `Broca, former Siracusan mafioso, later became a member of Chiave's gang.\nAfter a certain incident, he joined Rhodes Island along with the leader, Chiave, and now serves as a frontline attacker.`,
  story: `Broca, the calm Siracusan Feline, used to be a Mafia enforcer until his own famiglia double-crossed him, resulting in him nearly dying. Fortunately, he was rescued by Chiave and Aosta. He has since tagged along with the two, traveling across the barrenlands until the gang joined Rhodes Island. As an operator, he works as a craftsman responsible for R.I.'s logistics, and in combat, he wields a drill/buzzsaw hybrid infusible with Arts. All in all, he is a "man of action, not of words."`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal blurry outlines of this operator's internal organs, clouded with abnormal dark spots. His circulatory system shows an abnormally high rate of Originium particulate matter, with other signs of Oripathy infection, we can confirm that the Operator is Infected.\n[Cell-Originium Assimilation] 7%\nOriginium crystals are visible across the surface of his body, but not to a great extent. Symptoms have been effectively controlled.\n[Blood Originium-Crystal Density] 0.26u/L\nAlthough the current situation is relatively stable, due to the late treatment time, his condition may deteriorate.` },
    { title: 'Archive File 1', content: `A Feline male of few words.\nHis expressions are always menacing and make him seem unapproachable to most. However, if you communicate with him in-depth, you will find that he is a very honest person.\nThe reason for his expression seems to be that he was conditioned to do this during his time as a mafioso.` },
    { title: 'Archive File 2', content: `Even after joining Rhodes Island, Broca did not conceal his animus towards Rhodes Island, which caused some dissatisfaction among other Operators. However, this was not without reason.\nTo be more precise, his animus is not directed specifically at Rhodes Island, but towards all large organizations in general. According to Operator Aosta, who detailed his past experiences in the gang, the mafia family to which he originally belonged betrayed him, after which he was rescued by Chiave and Aosta.\nIt is not difficult to understand his loyalty to Operator Chiave and Operator Aosta, as well as his aversion to large organizations.\nWhile Rhodes Island by no means is an organization that easily abandons its members for immediate benefit, it may take some time for him to understand this.` },
    { title: 'Archive File 3', content: `Though he displayed remarkable prowess on the battlefield, even more surprising about Operator Broca is his talent for handicrafts.\nUnlike Aosta, who is skilled at sewing, he is adept at crafting. As long as suitable materials are available, he can make all kinds of tools and equipment according to requirements.\nAfter this was discovered and circulated by other Operators, Broca quickly became a star among his colleagues, taking jobs ranging from making costumes for certain holidays to more important operation requests.\nMore importantly, he gradually found his position at Rhodes Island by doing these things. Some Operators in Logistics Department even hoped that he could lay down his weapons in favor of a full-time production job.\nIn the end, upper management approved the purchase of a workstation for him, as well as other supporting facilities, in the hopes that he can continue to develop his specialty.` },
    { title: 'Archive File 4', content: `As Operator Broca himself stated, "I have nothing against taking orders, but I don't like fighting without knowing why I'm doing it." After learning to be less defensive towards Rhodes Island and gradually finding a sense of belonging, one can clearly feel the change in his attitude.\nThe enemies of Rhodes Island are now his enemies, the partners of Rhodes Island are now his partners, his relationship with the Doctor changed from that of suspicion to one of watchfulness, and he has also demonstrated his reliability to other Operators. As far as anyone can tell, he has completely integrated as a member of Rhodes Island.\nThough every new recruit to Rhodes Island agrees with our core philosophy and, as of right now, our ranks consist mostly of new members added over the last two years, few have truly come to regard Rhodes Island as "home." Of course, we do not require this of all our Operators. In principle, we do not mind becoming a springboard for our Operators, provided that they do not damage the interests of Rhodes Island in the process. However, because many of the old soldiers who truly loved Rhodes Island have been taken away by the flames of wars past, we do have a need to cultivate the next generation of those who can become our bedrock.\nOf course, this means that Rhodes Island will have to live up to its tenets, or do even better. Only this way can talents like Broca live in peace here. Only this way can we further traverse this bumpy road.` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/centurion-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/broca/base.png', chibiSrc: '/operators/broca/chibi.webm', chibiMoveSrc: '/operators/broca/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
    { id: 'e2', label: 'Elite 2', src: '/operators/broca/e2.png', chibiSrc: '/operators/broca/chibi.webm', chibiMoveSrc: '/operators/broca/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
    { id: 'skin1', label: 'Rest Between Sets', src: '/operators/broca/skin1.png', chibiSrc: '/operators/broca/chibi-skin1.webm', chibiMoveSrc: '/operators/broca/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
  ],
  portrait: '/operators/broca/portrait.png',
  portraitFocus: { y: -3.7, x: 62.3, zoom: 370 },
}

export default broca
