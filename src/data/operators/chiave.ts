import type { Operator } from '../../types'
import chiaveVoice from '../voices/chiave'

const chiave: Operator = {
  name: 'Chiave', fileNo: 'SR26', class: 'Vanguard', branch: 'Pioneer', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: "Chiave's Gang", position: 'Melee', race: 'Vulpo', gender: 'Male', birthplace: 'Siracusa',
  birthday: 'September 9th', height: '182 cm', combatExp: '6 years', infectionStatus: 'Crystals are present on the surface of his body. Confirmed Infected by medical examination.', illustrator: 'Infukun',
  cv: { JP: 'Wataru Hatano', CN: 'Zhang Tongming', EN: 'Jacopo Calatroni', KR: 'Kim Ji-yul' },
  voice: chiaveVoice,
  trait: 'Blocks 2 enemies',
  tags: ['DP-Recovery', 'DPS'],
  stats: { hp: 1824, atk: 592, def: 342, res: 0, block: 2, cost: 13, aspd: '1.05s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Technical Expertise', desc: 'When deployed, all [Robot] Operators have -60% Redeployment Time; For every [Robot] Operator currently deployed, this unit gains +7% ATK and DEF', elite: 'E1' },
    { name: 'Technical Expertise', desc: 'When deployed, all [Robot] Operators have -60% Redeployment Time; For every [Robot] Operator currently deployed, this unit gains +9% (+2%) ATK and DEF', elite: 'E1 (Potential 5)' },
    { name: 'Technical Expertise', desc: 'When deployed, all [Robot] Operators have -75% Redeployment Time; For every [Robot] Operator currently deployed, this unit gains +11% ATK and DEF', elite: 'E2' },
    { name: 'Technical Expertise', desc: 'When deployed, all [Robot] Operators have -75% Redeployment Time; For every [Robot] Operator currently deployed, this unit gains +13% (+2%) ATK and DEF', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Charge γ', icon: '/operators/chiave/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Instantly gains 12 Deployment Points.', spInit: 20, sp: 35, rank: 'M3',
      levels: [
        { level: '1', desc: 'Instantly gains 12 Deployment Points.', spInit: 10, sp: 44 },
        { level: '2', desc: 'Instantly gains 12 Deployment Points.', spInit: 10, sp: 43 },
        { level: '3', desc: 'Instantly gains 12 Deployment Points.', spInit: 12, sp: 42 },
        { level: '4', desc: 'Instantly gains 12 Deployment Points.', spInit: 12, sp: 41 },
        { level: '5', desc: 'Instantly gains 12 Deployment Points.', spInit: 12, sp: 40 },
        { level: '6', desc: 'Instantly gains 12 Deployment Points.', spInit: 12, sp: 39 },
        { level: '7', desc: 'Instantly gains 12 Deployment Points.', spInit: 14, sp: 38 },
        { level: 'M1', desc: 'Instantly gains 12 Deployment Points.', spInit: 16, sp: 37 },
        { level: 'M2', desc: 'Instantly gains 12 Deployment Points.', spInit: 18, sp: 36 },
        { level: 'M3', desc: 'Instantly gains 12 Deployment Points.', spInit: 20, sp: 35 },
      ],
    },
    {
      name: 'Blazing Wire Stripper', icon: '/operators/chiave/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately gains 13 DP; Deals 350% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -20% for 8 seconds', spInit: 35, sp: 45, dur: '8s', rank: 'M3',
      range: [[0,0,1,0,0],[0,1,1,1,0],[1,1,2,1,1],[0,1,1,1,0],[0,0,1,0,0]],
      levels: [
        { level: '1', desc: 'Immediately gains 10 DP; Deals 220% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -10% for 5 seconds', spInit: 25, sp: 45, dur: '5s' },
        { level: '2', desc: 'Immediately gains 10 DP; Deals 230% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -10% for 5 seconds', spInit: 26, sp: 45, dur: '5s' },
        { level: '3', desc: 'Immediately gains 10 DP; Deals 240% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -10% for 5 seconds', spInit: 27, sp: 45, dur: '5s' },
        { level: '4', desc: 'Immediately gains 11 DP; Deals 250% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -10% for 6 seconds', spInit: 28, sp: 45, dur: '6s' },
        { level: '5', desc: 'Immediately gains 11 DP; Deals 260% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -10% for 6 seconds', spInit: 29, sp: 45, dur: '6s' },
        { level: '6', desc: 'Immediately gains 11 DP; Deals 270% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -10% for 6 seconds', spInit: 30, sp: 45, dur: '6s' },
        { level: '7', desc: 'Immediately gains 12 DP; Deals 280% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -10% for 7 seconds', spInit: 31, sp: 45, dur: '7s' },
        { level: 'M1', desc: 'Immediately gains 12 DP; Deals 300% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -13% for 7 seconds', spInit: 32, sp: 45, dur: '7s' },
        { level: 'M2', desc: 'Immediately gains 12 DP; Deals 320% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -16% for 7 seconds', spInit: 33, sp: 45, dur: '7s' },
        { level: 'M3', desc: 'Immediately gains 13 DP; Deals 350% Arts damage to all nearby enemies, and reduces the RES of enemies hit by -20% for 8 seconds', spInit: 35, sp: 45, dur: '8s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Chiave's Badge", desc: 'Appointed as Vanguard Operator to exercise Pioneer responsibilities' },
    soly: { code: 'SOL-Y', name: 'Homemade Jack', stages: [
      { stage: 1, atk: '+37', def: '+30', effect: 'New trait: The first Deployment Cost -4' },
      { stage: 2, atk: '+40', def: '+33', effect: 'Technical Expertise improved: When deployed, all [Robot] Operators have -78% Redeployment Time; For every [Robot] Operator currently deployed, this unit gains +13% ATK and DEF' },
      { stage: 3, atk: '+42', def: '+35', effect: 'Technical Expertise improved: When deployed, all [Robot] Operators have -80% Redeployment Time; For every [Robot] Operator currently deployed, this unit gains +15% ATK and DEF' },
    ]},
  },
  profile: `Chiave, former employee of a mechanic shop in a small city in Siracusa, later became the leader of his own gang.\nAfter a certain incident, he led two of his men to join Rhodes Island and is now active as a front-line attacker.`,
  story: `Chiave, a reckless Siracusan Vulpo and a self-taught mechanic, once worked at a mechanical shop and formed a street gang together with Aosta and Broca. After things went south for them due to contracting Oripathy, Chiave and his buddies wandered around the barrens for a time until they joined Rhodes Island, where he makes good use of his mechanical engineering skills to help Closure in maintaining the R.I. robots.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n[Cell-Originium Assimilation] 5%\nOriginium crystals are present on the surface of the body, but in small quantities. The disease progression has been effectively controlled.\n[Blood Originium-Crystal Density] 0.21u/L\nAlthough condition is currently relatively stable, it may deteriorate due to late treatment.` },
    { title: 'Archive File 1', content: `This Vulpo is a man who always carries around a hearty smile.\n"No respect for people or the law." It is said that these words were used to describe his attitude when he first joined Rhodes Island and met Dr. Kal'tsit. He spent the rest of his first day in the infirmary.\nHe will do whatever pops up in his mind. Although what he does is often laughable, there seems to be some magic within him that compels others to join him on his absurd antics.` },
    { title: 'Archive File 2', content: `Compared with Broca's hostility and Aosta's caution, Chiave, as their leader, was basically the first one to get integrated into Rhodes Island. On his second day, he basically already was accustomed to the general mood around the ship.\nAccording to his own account, he dropped out of school and worked as the employee of a mechanic shop in the city, of course privately participating in some local gang activities.\nThat is, until he met Aosta. The two struck up a congenial relationship and worked together, later rescuing Broca and recruiting him to join. The three moved together until they were rescued by a nearby Rhodes Island during a chase.` },
    { title: 'Archive File 3', content: `As a result of his experience working as a mechanic, Chiave is the best at modifying weapons among the three.\nUnlike the impression his appearances give to other people, he is quite accomplished within his profession. Whether working directly on modern vehicles or souping them up, he maintains an impressive skillset. As an extension of his interests, he also has some knowledge in electrical appliances.\nHowever, unlike Broca, though Chiave is generally well-liked among other operators, he is often described as "having a bad rap."\nBecause of his tendencies to push the boundaries in all aspects of life and work, he often adds truly head-scratching modifications to the things he's working on. Even when working on other peoples' things, he shows little regard for that and has caused some truly ridiculous outcomes. Now, everyone is a bit more cautious about handing their personal belongings over to him for retrofitting.` },
    { title: 'Archive File 4', content: `Aosta's terse evaluation of Chiave probably sums it up best — "He's not gonna live long like this."\nIt must be pointed out that Chiave is not an extraordinarily strong man: he doesn't possess profound strategic wisdom, nor does he have exceptional combat prowess. He is very ordinary in many respects, and the sum of his combat effectiveness can be regarded as average at best. He is prone to flights of fancy, and often does things half-heartedly. To be frank, it would not be surprising if he was found dead in a ditch on the side of the road one day.\nHowever, this is what's astounding about him.\nLet's do something a bit dramatic to illustrate the point— Everyone in the room will say "Chiave? Oh, that arrogant guy." But without fail, most people will smile and add another sentence — "But that's just the kind of person he is." And some of these people will not hesitate to help him when they learn that he is in trouble. This is a good indicator of Chiave's popularity. He always leaves a deep impression upon others that makes it impossible to truly hate him.\nOf course, speaking from another angle, if he really was to suddenly leave us prematurely, most people would probably get over it pretty quickly, because "that's just the kind of person he is."\nThat is the contradictory and fascinating person that Chiave is.` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/chiave/base.png', chibiSrc: '/operators/chiave/chibi.webm', chibiMoveSrc: '/operators/chiave/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: -1.8, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
    { id: 'e2', label: 'Elite 2', src: '/operators/chiave/e2.png', chibiSrc: '/operators/chiave/chibi.webm', chibiMoveSrc: '/operators/chiave/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: -1.8, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
    { id: 'skin1', label: 'One-man Racing Team', src: '/operators/chiave/skin1.png', chibiSrc: '/operators/chiave/chibi-skin1.webm', chibiMoveSrc: '/operators/chiave/chibi-move-skin1.webm', chibiFraming: { scale: 1.27, offsetXPercent: -0.5, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
  ],
  portrait: '/operators/chiave/portrait.png',
  portraitFocus: { y: 2, x: 47.9, zoom: 399 },
}

export default chiave
