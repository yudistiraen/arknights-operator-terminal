import type { Operator } from '../../types'

const arene: Operator = {
  name: 'Arene', fileNo: 'LT06', class: 'Guard', branch: 'Lord', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Laterano', position: 'Melee', race: 'Sankta', gender: 'Male', birthplace: 'Laterano',
  birthday: 'September 7th', height: '161 cm', combatExp: 'Half a year', infectionStatus: 'Crystals have appeared on his body. Infection confirmed by medical examination.', illustrator: 'umo_yszx',
  cv: { JP: 'Yoshitsugu Matsuoka', CN: 'Feng Xiu', EN: 'Kieran Regan', KR: 'Lee Kyung-tae' },
  trait: 'Can launch Ranged Attacks that deal 80% of normal ATK',
  tags: ['DPS'],
  stats: { hp: 2250, atk: 695, def: 340, res: 10, block: 2, cost: 18, aspd: '1.3s', rdp: '70s' },
  range: { base: [[1, 1, 0], [2, 1, 1], [1, 1, 0]], e1: [[1, 1, 0, 0], [2, 1, 1, 1], [1, 1, 0, 0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Structural Decomposition', desc: 'Prioritize attacking drones', elite: 'E0' },
    { name: 'Structural Decomposition', desc: 'Prioritize attacking drones; ATK +20% when attacking drones', elite: 'E1' },
    { name: 'Structural Decomposition', desc: 'Prioritize attacking drones; ATK +40% when attacking drones', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Just Kidding', icon: '/operators/arene/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Cannot block enemies. Attacks strike twice and deal 150% ATK as physical damage each', spInit: 15, sp: 25, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: `Cannot block enemies. Attacks strike twice and deal 100% ATK as physical damage each`, spInit: 0, sp: 37, dur: '15s' },
        { level: '2', desc: `Cannot block enemies. Attacks strike twice and deal 105% ATK as physical damage each`, spInit: 1, sp: 36, dur: '15s' },
        { level: '3', desc: `Cannot block enemies. Attacks strike twice and deal 110% ATK as physical damage each`, spInit: 2, sp: 35, dur: '15s' },
        { level: '4', desc: `Cannot block enemies. Attacks strike twice and deal 115% ATK as physical damage each`, spInit: 4, sp: 34, dur: '15s' },
        { level: '5', desc: `Cannot block enemies. Attacks strike twice and deal 120% ATK as physical damage each`, spInit: 6, sp: 33, dur: '15s' },
        { level: '6', desc: `Cannot block enemies. Attacks strike twice and deal 125% ATK as physical damage each`, spInit: 8, sp: 32, dur: '15s' },
        { level: '7', desc: `Cannot block enemies. Attacks strike twice and deal 130% ATK as physical damage each`, spInit: 10, sp: 31, dur: '15s' },
        { level: 'M1', desc: `Cannot block enemies. Attacks strike twice and deal 135% ATK as physical damage each`, spInit: 11, sp: 29, dur: '15s' },
        { level: 'M2', desc: `Cannot block enemies. Attacks strike twice and deal 140% ATK as physical damage each`, spInit: 12, sp: 27, dur: '15s' },
        { level: 'M3', desc: `Cannot block enemies. Attacks strike twice and deal 150% ATK as physical damage each`, spInit: 15, sp: 25, dur: '15s' },
      ],
    },
    {
      name: 'Deadly Prank', icon: '/operators/arene/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Range expands and ranged attacks no longer deal reduced damage. Attacks deal 160% ATK as Arts damage and target an additional enemy', spInit: 15, sp: 30, dur: '20s', rank: 'M3', range: [[1, 1, 1, 0], [2, 1, 1, 1], [1, 1, 1, 0]],
      levels: [
        { level: '1', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 110% ATK as Arts damage and target an additional enemy`, spInit: 0, sp: 40, dur: '15s' },
        { level: '2', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 115% ATK as Arts damage and target an additional enemy`, spInit: 0, sp: 40, dur: '15s' },
        { level: '3', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 120% ATK as Arts damage and target an additional enemy`, spInit: 0, sp: 40, dur: '15s' },
        { level: '4', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 125% ATK as Arts damage and target an additional enemy`, spInit: 5, sp: 38, dur: '17s' },
        { level: '5', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 130% ATK as Arts damage and target an additional enemy`, spInit: 5, sp: 38, dur: '17s' },
        { level: '6', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 135% ATK as Arts damage and target an additional enemy`, spInit: 5, sp: 38, dur: '17s' },
        { level: '7', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 140% ATK as Arts damage and target an additional enemy`, spInit: 10, sp: 35, dur: '20s' },
        { level: 'M1', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 145% ATK as Arts damage and target an additional enemy`, spInit: 10, sp: 34, dur: '20s' },
        { level: 'M2', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 150% ATK as Arts damage and target an additional enemy`, spInit: 10, sp: 32, dur: '20s' },
        { level: 'M3', desc: `Range expands and ranged attacks no longer deal reduced damage. Attacks deal 160% ATK as Arts damage and target an additional enemy`, spInit: 15, sp: 30, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Arene's Badge", desc: 'Appointed as Guard Operator to exercise Lord responsibilities' },
    lory: { code: 'LOR-Y', name: 'The Book of Arene', stages: [
      { stage: 1, hp: '+120', atk: '+33', effect: 'New trait: ASPD +12 when there are 2 or more enemies in attack range' },
      { stage: 2, hp: '+160', atk: '+39', effect: 'Structural Decomposition improved: Attacks Drone units first, and ATK +50% when attacking Drone units' },
      { stage: 3, hp: '+185', atk: '+45', effect: 'Structural Decomposition improved: Prioritizes attacking Drones; +55% ATK when attacking Drones.' },
    ]},
  },
  story: `The young Lateran Sankta Randall Hofstadter, aka. Arene, was born to a couple of respected Lateran scholars from an officially-sponsored insitute specialized in firearm research. But the dangerous nature of his parents' profession dragged them in all sorts of conflicts. Arene was exiled from his homeland years ago after contracting Oripathy in a inheritance-related incident, but his parents, in an effort to safeguard their son, sent him to Leithanien for further studies, where he also studied under the same professor as Eyjafjalla. Unfortunately, the researcher couple died in a recent incident involving an unknown force that attempted stealing Lateran firearms technology.\n\nUnlike other Sankta children, who admire guns, Arene viewed firearms as something that took his parents away, and he himself lost the opportunity to have his own gun after his infection. After their passing, he was taken to Rhodes Island, accompanied by a Notarial Hall executor. He showed an aptitude for using Originium Arts that are corrosive, and his frequent use of Arts causes his body to carry a faint fragrance. Although Arene's nonchalant and mischievous attitude is not a problem, the young Sankta still requires proper guidance and instruction.`,
  profile: `Operator Arene is a Laterano-born Sankta who was exiled from Laterano after contracting Oripathy during a Laterano firearm inheritance-related incident several years ago. After he departed Laterano, he left for Leithanien to pursue further studies.\nHaving passed a battery of examinations, he is currently serving as a Rhodes Island Guard Operator and receiving treatment.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 5%\nSmall traces of infection are visible on the surface of the body.\n\n[Blood Originium-Crystal Density] 0.23u/L\nOperator Arene has been receiving Oripathy-related treatment for a long time. As a result, his infection is well under control, with no trend of deterioration.` },
    { title: 'Archive File 1', content: `There are many regulations in Laterano law that lay out strict, detailed stipulations for how to care for citizens who contract Oripathy in many possible scenarios.\nWhen a Laterano citizen contracts Oripathy, he or she continues to enjoy all of the rights guaranteed to them as part of their citizenship. However, aside from a few special cases, they are typically not allowed to remain in Laterano territory. Compared to the strict regulations many other countries and territories have for the Infected, you could say that only getting exiled from Laterano is far more lenient. That being the case, if you become Infected in Laterano, you must forever leave your homeland, never again to set foot on the place you grew up. To many Lateranos, this is understandably an unbearable proposition.\nOn his own initiative, operator Arene studied in Leithanien for years after contracting Oripathy. Consequently, the hometown that he can no longer return to may very well have become nothing but a faint memory to him long ago.` },
    { title: 'Archive File 2', content: `Most people tend to have a rather ingrained impression of the Sankta. To them, the Sankta and their guns are inseparable concepts, and the Sankta, with their halos above their heads, are never ones to part with their precious firearms. And whenever a Sankta is unable to keep a gun due to whatever extraordinary circumstance, they would usually choose the next best thing they are allowed: long-ranged weapons like bows.\nIn most cases, one would be correct to make such assumptions. That being said, there are some occasional exceptions to the norm. Operator Arene is one such exception at Rhodes Island. He is one of the few Sankta here to forgo the use of firearms, instead opting to use Originium Arts as his primary means of attack.\nThe Originium Arts that Operator Arene utilizes are somewhat unusual: his Arts tend to be have toxic, disintegrative, and corrosive traits. As a result, he normally keeps away from crowds in order to mitigate any unnecessary risks. And just like the impression that others typically have of Operator Arene himself, his Originium Arts typically strike others as beautiful yet dangerous, amicable yet seclusive, and requiring extra care to approach.\nDue to his frequent use of Arts, Arene himself usually carries a faint aromatic fragrance. The fragrance's effect on others is alterable at will, and can either be rendered completely harmless or made dangerously toxic during the most crucial situations.` },
    { title: 'Archive File 3', content: `When Operator Arene first arrived at Rhodes Island, he was accompanied by a Notarial Hall executor.\nAccording to this chaperone of his, a colleague of Operator Executor's, both of Arene's parents were highly respected Laterano firearms researchers, and the two of them were frequently dragged into all kinds of Laterano firearm-related incidents thanks to their profession. It is precisely for this reason that, when Arene contracted Oripathy several years ago, his parents opted to send him, their one and only son, away from danger to Leithanien instead of keeping him close by.\nRegretfully, both of his parents were killed during a recent clandestine operation to steal Laterano firearms technology. Their will unfortunately brought Arene plenty of trouble as well—most people seem to believe that a parent would always leave every last thing they treasured to their children. In reality, the only thing that Arene's parents ever wished for was for their only son to live a peaceful life. They knew their research would undoubtedly be taken up by Laterano departments far more up to the task than him.\nEven though the crisis has mostly been averted thanks to Operator Arene's master plan, there still remains enough of a risk that, in spite of the young man's temperament, the poor executor had to escort Arene to Rhodes Island to seek his colleague's help, before taking a temporary leave to deal with some so-called problematic follow-up work.\nDuring his childhood, Arene's parents were often preoccupied with work and had little time to spend with their son, leaving him alone at home most of his childhood. Young children often have a hard time understanding their parents' passion for work. To the young Arene, it was guns that had stolen his parents' attention from him, and that became the source of his apathy against guns, normally admired by Sankta children far and wide. Furthermore, after his infection during the accident, he lost any opportunity to have his own gun.\nPerhaps because he departed Laterano at an early age, Arene tends to be a little sheepish around some of our other Laterano operators. Instead, he is more proactive in interacting with our Leithanien operators. One such example is Operator Eyjafjalla. The two of them had studied under the same famous professor at their university, just barely enough to make them old classmates.` },
    { title: 'Archive File 4', content: `When Arene first joined our ranks, it didn't take long for us to notice his completely nonchalant attitude and lack of restraint, likely a result of the environment he grew up in.\nAt first, none of us thought this was a problem. After all, we have operators with all kinds of personalities here at Rhodes Island, even some particularly freewheeling Sarkaz mercenaries that we had to reluctantly learn to tolerate. Compared to them, the young boy's tendency to play pranks on operators or his mildly sadistic attitude toward his enemies were hardly issues at all.\nHowever, when Arene brought an enemy combatant back with him after an operation and then half-jokingly suggested practicing new Originium Arts on him, it became obvious to us that it was perhaps not a good idea to afford our still-growing adolescent operators total, unrestricted freedom. Operator Arene should no longer be allowed to do whatever he pleases. The young, sensitive Sankta is in dire need of proper guidance and instruction that, cruicially, do not bore him.` },
    { title: 'Promotion Record', content: `This teenager calls you a teacher.\nHowever, both of you know that he does not mean it sincerely.\nWhat about now?\nPerhaps you can really teach him something. After all, he is still learning, and he needs someone to guide him onto the path he wants to take.` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/lord-branch.png', factionIcon: '/icons/factions/laterano.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/arene/base.png', chibiSrc: '/operators/arene/chibi.webm', illustrator: 'umo_yszx' },
    { id: 'e2', label: 'Elite 2', src: '/operators/arene/e2.png', chibiSrc: '/operators/arene/chibi.webm', illustrator: 'umo_yszx' },
    { id: 'skin1', label: 'Casual', src: '/operators/arene/skin1.png', chibiSrc: '/operators/arene/chibi-skin1.webm', illustrator: 'umo_yszx' },
    { id: 'skin2', label: 'Dangerous Invitation', src: '/operators/arene/skin2.png', chibiSrc: '/operators/arene/chibi-skin2.webm', illustrator: 'umo_yszx' },
  ],
  portrait: '/operators/arene/portrait.png',
  portraitFocus: { y: -2, x: 50, zoom: 290 }
}

export default arene
