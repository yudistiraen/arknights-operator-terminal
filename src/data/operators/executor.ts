import type { Operator } from '../../types'

const executor: Operator = {
  name: 'Executor', fileNo: 'LT01', class: 'Sniper', branch: 'Spreadshooter', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Laterano', position: 'Ranged', race: 'Sankta', gender: 'Male', birthplace: 'Laterano',
  birthday: 'July 7th', height: '181 cm', combatExp: '5 years', infectionStatus: 'Confirmed uninfected by medical examination.', illustrator: 'Skade',
  cv: { JP: 'Takashi Kondō', CN: 'Lengquan Yeyue (credited as "Ji Huang" in EN)', EN: 'Eliah Mountjoy', KR: 'Kim Young-sun' },
  trait: 'Attacks all enemies within range, and deals 150% damage to enemies in the row directly in front of this unit.',
  tags: ['AoE'],
  stats: { hp: 2330, atk: 785, def: 185, res: 0, block: 1, cost: 31, aspd: '2.3s', rdp: '70s' },
  range: {
    base: [[0,1,0],[2,1,1],[0,1,0]],
    e1: [[0,1,1],[2,1,1],[0,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Final Modification', desc: 'Attacks ignore 80 DEF', elite: 'E1' },
    { name: 'Final Modification', desc: 'Attacks ignore 95 (+15) DEF', elite: 'E1 (Potential 5)' },
    { name: 'Final Modification', desc: 'Attacks ignore 160 DEF', elite: 'E2' },
    { name: 'Final Modification', desc: 'Attacks ignore 175 (+15) DEF', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: "Muzzle's Elegy", icon: '/operators/executor/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "ATK +70%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 25, sp: 45, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: "ATK +20%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 11, sp: 45, dur: '25s' },
        { level: '2', desc: "ATK +25%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 12, sp: 45, dur: '26s' },
        { level: '3', desc: "ATK +30%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 13, sp: 45, dur: '27s' },
        { level: '4', desc: "ATK +35%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 15, sp: 45, dur: '28s' },
        { level: '5', desc: "ATK +40%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 16, sp: 45, dur: '29s' },
        { level: '6', desc: "ATK +45%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 17, sp: 45, dur: '30s' },
        { level: '7', desc: "ATK +50%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 19, sp: 45, dur: '31s' },
        { level: 'M1', desc: "ATK +55%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 21, sp: 45, dur: '32s' },
        { level: 'M2', desc: "ATK +60%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 23, sp: 45, dur: '33s' },
        { level: 'M3', desc: "ATK +70%, attacks apply this unit's Trait effect to all enemies within range.", spInit: 25, sp: 45, dur: '35s' },
      ],
    },
    {
      name: 'Final Journey', icon: '/operators/executor/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Normal attacks strike twice, and the attack interval is significantly shortened', spInit: 35, sp: 70, dur: '20s', rank: 'M3',
      note: "Final Journey reduces Executor's attack interval by 0.2/0.2/0.2/0.5/0.5/0.5/0.7/0.7/0.9/0.9 seconds.",
      levels: [
        { level: '1', desc: 'Normal attacks strike twice, and the attack interval is slightly shortened', spInit: 21, sp: 80, dur: '15s' },
        { level: '2', desc: 'Normal attacks strike twice, and the attack interval is slightly shortened', spInit: 22, sp: 79, dur: '15s' },
        { level: '3', desc: 'Normal attacks strike twice, and the attack interval is slightly shortened', spInit: 23, sp: 78, dur: '15s' },
        { level: '4', desc: 'Normal attacks strike twice, and the attack interval is shortened by a small amount', spInit: 25, sp: 77, dur: '16s' },
        { level: '5', desc: 'Normal attacks strike twice, and the attack interval is shortened by a small amount', spInit: 26, sp: 76, dur: '16s' },
        { level: '6', desc: 'Normal attacks strike twice, and the attack interval is shortened by a small amount', spInit: 27, sp: 75, dur: '16s' },
        { level: '7', desc: 'Normal attacks strike twice, and the attack interval is moderately shortened', spInit: 29, sp: 74, dur: '17s' },
        { level: 'M1', desc: 'Normal attacks strike twice, and the attack interval is moderately shortened', spInit: 31, sp: 73, dur: '18s' },
        { level: 'M2', desc: 'Normal attacks strike twice, and the attack interval is significantly shortened', spInit: 33, sp: 72, dur: '19s' },
        { level: 'M3', desc: 'Normal attacks strike twice, and the attack interval is significantly shortened', spInit: 35, sp: 70, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Executor's Badge", desc: 'Appointed as Sniper Operator to exercise Spreadshooter responsibilities' },
    rprx: { code: 'RPR-X', name: "Executor's Satchel", stages: [
      { stage: 1, atk: '+38', aspd: '+3', effect: 'New trait: Attacks all enemies within range, and deals 160% damage to enemies in the row directly in front of this unit.' },
      { stage: 2, atk: '+46', aspd: '+4', effect: 'Final Modification improved: Attacks ignore 190 DEF' },
      { stage: 3, atk: '+52', aspd: '+5', effect: 'Final Modification improved: Attacks ignore 210 DEF' },
    ]},
  },
  profile: `Executor is a citizen of Laterano, serving as an executor of the Laterano Notarial Hall, responsible for applying Rights of the Laterano Citizen numbered One through Thirteen. He is well versed in many languages and legal frameworks.\nExecutor has been contracted to Rhodes Island, where he executes functions related to the rights of Laterano citizens.`,
  story: `Federico Giallo is the son of two civil servants from the Laterano Notarial Hall who unfortunately lost their lives in a mission fifteen years ago (Terran year 1084). Fortunately, the young boy was taken in by Marcello and Luciana Giallo, the former being his father's cousin, and he stayed with his cousin Arturia for a brief period. Nevertheless, his stay left an unforgettable mark on his life, as he witnessed the awakening of Arturia's emotional amplification Arts, which led to the unfortunate tragedy of Luciana and, later, Arturia's downfall. Upon becoming an executor of the Notarial Hall, he swore to himself that he would be the one to apprehend Arturia, who had went astray in her pursuit of understanding the meaning of emotion. This quest eventually led to her quiet collaboration with the Witch King's Remnants.\nFederico's robotic personality starkly contrasts with the typically cheerful and easygoing nature of other Sankta, often making others wary of him. At times, he can be ruthless, acting solely on cold logic without sympathy. However, it is precisely this trait that the Law deems worthy of his canonization as a Saint, the most honored title in Laterano, akin to a Pope. His logical reasoning could guarantee the survival of the Sankta race in the impending "Apocalypse," while his cold heart serves as the counter to Arturia's over-amplified emotion. Federico the Saint can be relied on, a well-trusted leader in times of grave crises.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Executor shows no signs of Oripathy infection.\n[Blood Originium-Crystal Density] 0.13u/L\nHas anyone researched the correlation between interpersonal relationships and crystal density? Maybe we should do this as our next task?\n–– Medic Operator T.O.` },
    { title: 'Archive File 1', content: `The Laterano Notarial Hall is one of the official organs of Laterano state power. On the one hand, the Hall imposes fees on the citizens of Laterano, urging them to perform various legal obligations, including but not limited to management of estate property, childrearing and guardianship, and execution of notarized contracts; On the other hand, the Hall also performs various services guaranteeing the rights and benefits of Laterano citizenship.\nAs such, the Notarial Hall requires a diverse and unique staff. Civil servants are dispatched to various city-states to supervise, execute, and oversee official functions.\nOperator Executor is one such employee. They are known as "executors," and carry out the will of the Laterano Notarial Hall.` },
    { title: 'Archive File 2', content: `The records of the Notarial Hall are open, fair, and transparent. Honestly, upon first inspecting Executor's records and commission, the human resources department found it quite ordinary.\n"October 12: the designated property was delivered to the appropriate heir.\nMarch 5: the company that violated the notarized contract was shuttered.\nJune 2: Moneys disbursed by the appropriate party in accordance with the contract.\nJuly 9: In accordance with the wishes of the citizens..."\nThe majority of the tasks performed by Executor were mundane, if not boring, suitable for a low-level bureaucrat.\nIn fact, 41 non-Laterano citizens died in the course of executing the first item (all had been sentenced to death or greater than 200 years in prison), while six civilian buildings were damaged in the execution of the second item. The third item saw the death of a Laterano citizen serving as the chief executive of a city state guard unit. And the fourth item nearly caused a war...\nMost of Executor's mission record is like this.\nIt is clear that the Notarial Hall deploys its executors only to the most challenging of missions.` },
    { title: 'Archive File 3', content: `Operator Executor is a man slow to speak, who rarely smiles. The people of Rhodes Island have long understood this.\nIt is also widely believed that Executor lacks common sense, but such an assertion would need to first be scientifically demonstrated. Human resources does not accept such biased evaluations.\nExecutor has indicated that his problem is not that he does not understand the facts, rather that he does not understand the meaning that others attribute to them. Our studies have shown that Executor's lack of empathic ability is not illustrative of psychopathic tendencies, rather it indicates a sort of mechanical absorption of information, with an overstimulated nervous system reaching similar conclusions. Adding more information to his mind does not result in the formation of secondary conceptions.\nOf course, the medical operators responsible for examination of Executor's brain activity have not yet reached a consensus.\nA small number of operators suspect that Executor is not in fact human, but rather a humanoid robot spy sent by Closure. Closure has denied such charges, but she too believes that Executor is not a human being.\nFor his part, Executor has never responded to the rumors. He just silently accepts his tasks and completes them whenever he is told "this is a task that should be prioritized."\nNaturally, he puts his Notarial tasks first.\nSuch is the origin of his name: he decisively eliminates all obstacles and executes the will of the Laterano citizenry. The Executor.` },
    { title: 'Archive File 4', content: `[Classified Log]\nExecutor gave me the incorrect impression that Laterano's laws exist not only as statutes. Indeed, it is true that the Notarial Hall comprises one piece of the Laterano legal apparatus, and the executors attest to an important fact: Laterano takes its responsibility to its citizens very seriously, treating it as a binding contract.\nBut the Laterano people's adherence to the law, or even fear of it, goes behind an executor's power to instill.\nI speak not of the power of religion. The political entities founded on deeply held beliefs go beyond Laterano alone, and the uniqueness of their citizenry cannot be attributed to piety or self-discipline alone.\nThis is also not to say that executors, including Executor, are not themselves strong. Last week, I saw him tear out the aorta of a vicious beast with his bare hands, spraying his partner with blood. That was not the first time an operator came crying to me that "Executor is terrifying," and it certainly won't be the last.\nBut for the hands of its few lawyers, executors, wandering judges, and the Pope himself, Laterano can do little more than proclaim that the law must be followed.\nIn addition to its temporal statutes, Laterano must have another, higher order of law that we cannot perceive. Rather than saying the executor is one piece of the Laterano legal apparatus, it would be more appropriate to say that the executor is the physical manifestation that Laterano created to befit the name of the law. At least that's my opinion.\nAll I want to know is what Executor meant by "the statute that takes effect once a shot is fired". Given what he said, I have to wonder if this "law" might be some kind of Originium Art.\nThis is the first time I have ever seen Kal'tsit at a loss for words. She appeared to have something to say, but turns and left with a cold laugh. The whole time we were discussing Laterano law, she kept a hand over her mouth and an eyebrow raised. It was really odd.\nI hope my curiosity hasn't gotten us in trouble.\n– Caster Operator L.A.O.` },
    { title: 'Promotion Record', content: `"You really want him? Think it over. Everyone in the dorm has told you how bad he is!"\n"Why do you guys want to get in the way of my happy future with him? It doesn't matter what he's like now, I believe in the power of love!"\n"He doesn't think about intimacy like you do. He's such a glass-half-empty kind of guy. It makes you want to give up..."\n"You guys are a bunch of cowards. Just get out of my way and let me give it a shot! How do you even know he's that kind of person?"\n"I know! Everybody here knows!"\n"Huh?"\n"Hey."\n"Spit it out, one of you did something. Who was it?!"\n"Um, her. Her. Her. Her."\n"What about you?"\n"I... I just took him out for a drink. Nothing else. Really."\n"......"\n"......"\n"So everybody here did it?! I'm the odd man out here?!"\n"I mean he helped fix the backup systems, it was really hot..."\n"So that's it? Give up?"\n"We all gave up."\n– Dialog from a certain engineering operators' dormitory.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/spreadshooter-branch.png', factionIcon: '/icons/factions/laterano.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/executor/base.png', chibiSrc: '/operators/executor/chibi.webm', illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/executor/e2.png', chibiSrc: '/operators/executor/chibi.webm', illustrator: 'Skade' },
    { id: 'skin1', label: 'Titleless Code', src: '/operators/executor/skin1.png', chibiSrc: '/operators/executor/chibi-skin1.webm', illustrator: 'Skade' },
  ],
  portrait: '/operators/executor/portrait.png',
  portraitFocus: { y: 0, x: 50, zoom: 320 },

}

export default executor
