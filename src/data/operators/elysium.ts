import type { Operator } from '../../types'
import elysiumVoice from '../voices/elysium'

const elysium: Operator = {
  name: 'Elysium', fileNo: 'R131', class: 'Vanguard', branch: 'Standard Bearer', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Liberi', gender: 'Male', birthplace: 'Iberia',
  birthday: 'May 8th', height: '187 cm', combatExp: '2 years', infectionStatus: 'Crystals have appeared on his body. Infection confirmed by medical examination.', illustrator: 'Skade',
  cv: { JP: 'Masahiro Yamanaka', CN: 'Yang Kaiqi', EN: 'Miguel Ferreño', KR: 'Nam Do-hyeong' },
  voice: elysiumVoice,
  trait: 'Cannot block enemies during the skill duration',
  tags: ['DP-Recovery', 'Support'],
  stats: { hp: 1618, atk: 523, def: 329, res: 0, block: 1, cost: 11, aspd: '1.3s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Sniper Support', desc: "When deployed, all [Sniper] Operators have -2 DP Cost and gain +20 ASPD when Elysium's skill is active", elite: 'E2' }],
  skills: [
    {
      name: 'Support γ', icon: '/operators/elysium/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 15, sp: 26, dur: '8s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 10, sp: 35, dur: '8s' },
        { level: '2', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 10, sp: 34, dur: '8s' },
        { level: '3', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 10, sp: 33, dur: '8s' },
        { level: '4', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 11, sp: 32, dur: '8s' },
        { level: '5', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 11, sp: 31, dur: '8s' },
        { level: '6', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 11, sp: 30, dur: '8s' },
        { level: '7', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 12, sp: 29, dur: '8s' },
        { level: 'M1', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 13, sp: 28, dur: '8s' },
        { level: 'M2', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 14, sp: 27, dur: '8s' },
        { level: 'M3', desc: 'Stops attacking and recovers 18 DP over the skill duration', spInit: 15, sp: 26, dur: '8s' },
      ],
    },
    {
      name: 'Monitor', icon: '/operators/elysium/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 4 nearby enemies.\nLocked enemies have -60% Movement Speed, -35% DEF, and lose Invisibility', spInit: 16, sp: 30, dur: '15s', rank: 'M3', range: [[0,1,1,1,0],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[0,1,1,1,0]],
      levels: [
        { level: '1', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 3 nearby enemies.\nLocked enemies have -60% Movement Speed, -20% DEF, and lose Invisibility`, spInit: 6, sp: 40, dur: '15s' },
        { level: '2', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 3 nearby enemies.\nLocked enemies have -60% Movement Speed, -20% DEF, and lose Invisibility`, spInit: 6, sp: 39, dur: '15s' },
        { level: '3', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 3 nearby enemies.\nLocked enemies have -60% Movement Speed, -20% DEF, and lose Invisibility`, spInit: 6, sp: 38, dur: '15s' },
        { level: '4', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 3 nearby enemies.\nLocked enemies have -60% Movement Speed, -22% DEF, and lose Invisibility`, spInit: 8, sp: 37, dur: '15s' },
        { level: '5', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 3 nearby enemies.\nLocked enemies have -60% Movement Speed, -22% DEF, and lose Invisibility`, spInit: 8, sp: 36, dur: '15s' },
        { level: '6', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 3 nearby enemies.\nLocked enemies have -60% Movement Speed, -22% DEF, and lose Invisibility`, spInit: 8, sp: 35, dur: '15s' },
        { level: '7', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 4 nearby enemies.\nLocked enemies have -60% Movement Speed, -25% DEF, and lose Invisibility`, spInit: 10, sp: 34, dur: '15s' },
        { level: 'M1', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 4 nearby enemies.\nLocked enemies have -60% Movement Speed, -28% DEF, and lose Invisibility`, spInit: 12, sp: 33, dur: '15s' },
        { level: 'M2', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 4 nearby enemies.\nLocked enemies have -60% Movement Speed, -31% DEF, and lose Invisibility`, spInit: 14, sp: 32, dur: '15s' },
        { level: 'M3', desc: `Stops attacking and recovers 20 DP over the skill duration. While this skill is active, Locks up to 4 nearby enemies.\nLocked enemies have -60% Movement Speed, -35% DEF, and lose Invisibility`, spInit: 16, sp: 30, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Elysium's Badge", desc: 'Appointed as Vanguard Operator to exercise Standard Bearer responsibilities' },
    beax: { code: 'BEA-X', name: 'Emergency Callbook', stages: [
      { stage: 1, hp: '+110', def: '+40', effect: 'Trait improved: Cannot block enemies during the skill duration, but grants +1 Block to an Operator in front of this unit' },
      { stage: 2, hp: '+130', def: '+50', effect: 'Sniper Support improved: When deployed, all Sniper Operators have -2 DP Cost and gain +23 ASPD while this unit\'s skill is active' },
      { stage: 3, hp: '+150', def: '+55', effect: 'Sniper Support improved: When deployed, all Sniper Operators have -2 DP Cost and gain +25 ASPD while this unit\'s skill is active' },
    ]},
  },
  story: `The handsome Iberian Liberi codename "Elysium" was previously a Catastrophe Messenger who traveled around Terra after leaving his hometown to avoid the ongoing oppression following the Profound Silence. Upon joining Rhodes Island, he became a member of the 3rd Special Operations Squad, serving under Elite Op Mantra and acting as her voice. Elysium utilizes a unique form of vocal Arts to facilitate high-speed, enclosed communication between R.I. forces on the field, especially during covert operations. He also acts as a mediator of intrapersonal relationships between Rhodes Island members outside the battlefield.`,
  profile: `Elysium, a Rhodes Island Operator from Iberia, mastered a rather unique form of voice-related Originium Arts. Caught trying to fill in 'Once in a lifetime hottie' on his resume profile, he was detained on the spot by members of the HR Department.\nNow deputy leader of the 3rd Special Operations Squad, Elysium is responsible for maintaining clear channels of communication on the battlefield and assisting squad members in covert operations.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n[Cell-Originium Assimilation] 7%\nA small amount of Originium crystals are present on the surface of Elysium's body. He emphatically claims that they are there for decoration, but how could anyone choose to adorn themselves so tastelessly?\n[Blood Originium-Crystal Density] 0.21u/L\nThe current condition is stable, and effective results have been obtained through focal treatment. Follow-up treatment should be adjusted appropriately depending on the patient's actual condition.\nElysium's condition has always been stable. Perhaps this is related to his confident, over-the-top optimism? I don't necessarily hate guys like him, but he does get on my nerves every now and then.\n— Gavial`,
    },
    {
      title: 'Archive File 1',
      content: `Although Elysium has always proclaimed that there is no way he could have been born in Iberia, he shares the characteristics of unfettered boldness and unrestrained freedom that are so prominent in that area.\nElysium has travelled the corners of the world alone, and has been to just about any place that you or I could name, including the kind of forlorn places that his codename suggests. According to his own account, he did consider becoming a messenger prior to joining Rhodes Island, a career plan that is now on hold.\nIn fact, Elysium's sense of direction is so strong that he can remember any place he's ever been to, as well as being able to mentally map out a course of action with surprising accuracy. However, the maps that he comes up with often are not cost-efficient or practical, and he sometimes has to simplify these routes to facilitate better understanding and realizability — and yet, none of this meticulousness is carried over to his daily life.`,
    },
    {
      title: 'Archive File 2',
      content: `Due to Elysium's unique utility, he is often transferred between various teams due to what the task requires.\nGenerally speaking, in addition to facilitating communication within the team, Elysium's most frequent job is to coordinate interpersonal relationships and arbitrate conflict. He values the relationships between team members far more than Operators who prefer to work alone; therefore, any conflict between members is the last thing he wants to see.\nElysium's mere presence during a mission is enough to improve a team's morale and facilitate a more relaxed atmosphere. Though he often fails to recognize his own contribution in maintaining the harmony of a team, he always manages to elicit some very memorable reactions. When operators with clashing personalities have to be assigned to the same team due to special circumstances, the operation leader will often consider adding Elysium to keep the operation moving forward smoothly.`,
    },
    {
      title: 'Archive File 3',
      content: `"Elysium and I joined at roughly the same time, so I know a few things about him.\nThere might be people out there who are inclined to believe that he doesn't work hard or take his responsibilities seriously because of his somewhat irreverent, joking tone.\nBut we've all come to realize that this is but another form of humility. A Special Ops team's line of work can be very dangerous, and Elysium's role during these operations is sometimes even more important. The transmission device he carries with him needs to be paired with his Originium Arts in order to achieve the greatest effect, and the tacit synergy between Elysium and his direct superior can sometimes be the key to victory.\nTo say that his job is to provide courage itself is, in my opinion, not an exaggeration. But this courage is not the flag-waving kind that gets people riled up before they charge off to war, but rather something more practical.\nWhen operators such as Elysium are present on the battlefield, the commander can better focus on understanding the overall situation, and individual operators can fight with the peace of mind that the operation plan is being executed. Some special operations even hinge on the state."\n– Dobermann`,
    },
    {
      title: 'Archive File 4',
      content: `Elysium has his own unique criteria for determining whether someone is trustworthy.\nIn the entirety of Rhodes Island, the person who Elysium trusts most is the leader of the 3rd Squad to which he is also assigned, and these sentiments are reciprocated. It can be said that the duo's unbreakable trust is a product of their ability to fit together in all aspects, as well as years of cultivating their relationship.\nAs the captain of one of Rhodes Island's special squads, the leader has a very special ability. This ability often provides unexpected and valuable effects in combat, but poses a hindrance in daily life. Only through Elysium's assistance is the leader able to normally communicate with others, and this responsibility may perhaps be the reason why Elysium chose to stay in Rhodes Island.\n"Even though it seems like he's always getting smacked around, they're actually on very good terms."\n"Smacked around? Is the leader of the 3rd Squad such a vicious person?"\n"Hmm, I wouldn't say that. The leader's actually an introverted person, despite trying to maintain a cool and calm appearance... Whatever happens, it's usually because Elysium is such a pain in the ass!"\n–Conversation between a member of the 3rd Squad and a member of the HR Department\nOnce Elysium has recognized someone as reliable, he will display his trust in his own special way, which may manifest in the form of nonsensical dialogue, or through increasingly preposterous bets. In this regard, "comrade" has a very special meaning for Elysium, and this is not a term that he uses lightly.\nTaking everything in consideration, none can deny that Elysium is an excellent teammate and a reliable partner on the battlefield, even if he can be a bit annoying.`,
    },
    {
      title: 'Promotion Record',
      content: `How high does he want to get promoted?\nIf that position would put him above the squad's captain, Elysium would turn down that opportunity.`,
    },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/standard-bearer-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/elysium/base.png', chibiSrc: '/operators/elysium/chibi.webm', illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/elysium/e2.png', chibiSrc: '/operators/elysium/chibi.webm', illustrator: 'Skade' },
    { id: 'skin1', label: 'Snowy Echo', src: '/operators/elysium/skin1.png', chibiSrc: '/operators/elysium/chibi-skin1.webm', illustrator: 'Skade' },
    { id: 'skin2', label: 'Shining Dew SDm11', src: '/operators/elysium/skin2.png', chibiSrc: '/operators/elysium/chibi-skin2.webm', illustrator: 'Skade' },
  ],
  portrait: '/operators/elysium/portrait.png',
  portraitFocus: { y: 6.5, x: 26.9, zoom: 387 },
}

export default elysium
