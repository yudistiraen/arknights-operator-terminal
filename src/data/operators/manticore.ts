import type { Operator } from '../../types'
import manticoreVoice from '../voices/manticore'

const manticore: Operator = {
  name: 'Manticore', fileNo: 'SG01', class: 'Specialist', branch: 'Ambusher', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Sargon', position: 'Melee', race: 'Manticore', gender: 'Female', birthplace: 'Sargon',
  birthday: 'Unknown', height: '155 cm', combatExp: '1 year', infectionStatus: 'Infection confirmed by medical examination.', illustrator: '竜崎いち',
  cv: { JP: 'Ayaka Suwa', CN: 'Zi Mao (credited as "Kousou Mao" in EN)', EN: 'Haviland Stillwell', KR: 'Kim Bo-young' },
  voice: manticoreVoice,
  trait: 'Deals Damage to all targets within range\n50% chance to dodge Physical and Arts attacks and is less likely to be targeted by enemies',
  tags: ['DPS', 'Survival'],
  stats: { hp: 1630, atk: 871, def: 373, res: 30, block: 0, cost: 20, aspd: '3.5s', rdp: '70s' },
  range: {
    base: [
      [1, 1, 1, 0],
      [1, 2, 1, 1],
      [1, 1, 1, 0],
    ],
    e1: [
      [1, 1, 1, 0],
      [1, 2, 1, 1],
      [1, 1, 1, 0],
    ],
    e2: [
      [1, 1, 1, 0],
      [1, 2, 1, 1],
      [1, 1, 1, 0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Hidden Killer - Medium', desc: 'Stays Invisible normally. The first attack made gains +25% ATK and removes Invisibility. Regains Invisible state after not attacking for 6 seconds', elite: 'E1' },
    { name: 'Hidden Killer - Elite', desc: 'Stays Invisible normally. The first attack made gains +50% ATK and removes Invisibility. Regains Invisible state after not attacking for 5 seconds', elite: 'E2' },
    { name: 'Hidden Killer - Elite', desc: 'Stays Invisible normally. The first attack made gains +54% (+4%) ATK and removes Invisibility. Regains Invisible state after not attacking for 5 seconds', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Scorpion Venom', icon: '/operators/manticore/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: 'The Movement Speed of targets hit -50% for 5 seconds', spInit: 0, sp: 0, rank: 'M3',
      levels: [
        { level: '1', desc: 'The Movement Speed of targets hit -23% for 3 seconds', spInit: 0, sp: 0 },
        { level: '2', desc: 'The Movement Speed of targets hit -25% for 3 seconds', spInit: 0, sp: 0 },
        { level: '3', desc: 'The Movement Speed of targets hit -27% for 3 seconds', spInit: 0, sp: 0 },
        { level: '4', desc: 'The Movement Speed of targets hit -29% for 3.5 seconds', spInit: 0, sp: 0 },
        { level: '5', desc: 'The Movement Speed of targets hit -31% for 3.5 seconds', spInit: 0, sp: 0 },
        { level: '6', desc: 'The Movement Speed of targets hit -33% for 3.5 seconds', spInit: 0, sp: 0 },
        { level: '7', desc: 'The Movement Speed of targets hit -35% for 4 seconds', spInit: 0, sp: 0 },
        { level: 'M1', desc: 'The Movement Speed of targets hit -40% for 4 seconds', spInit: 0, sp: 0 },
        { level: 'M2', desc: 'The Movement Speed of targets hit -45% for 4 seconds', spInit: 0, sp: 0 },
        { level: 'M3', desc: 'The Movement Speed of targets hit -50% for 5 seconds', spInit: 0, sp: 0 },
      ],
    },
    {
      name: 'Toxic Overload', icon: '/operators/manticore/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack wind-up and Attack Interval increases. ATK +90% and hit targets are Stunned for 1 seconds', spInit: 10, sp: 20, dur: '40s', rank: 'M3',
      note: "Toxic Overload increases Manticore's attack interval by 1.7 seconds.",
      levels: [
        { level: '1', desc: 'Attack wind-up and Attack Interval increases. ATK +30% and hit targets are Stunned for 0.5 seconds', spInit: 0, sp: 20, dur: '31s' },
        { level: '2', desc: 'Attack wind-up and Attack Interval increases. ATK +35% and hit targets are Stunned for 0.5 seconds', spInit: 0, sp: 20, dur: '32s' },
        { level: '3', desc: 'Attack wind-up and Attack Interval increases. ATK +40% and hit targets are Stunned for 0.5 seconds', spInit: 0, sp: 20, dur: '33s' },
        { level: '4', desc: 'Attack wind-up and Attack Interval increases. ATK +45% and hit targets are Stunned for 0.6 seconds', spInit: 0, sp: 20, dur: '34s' },
        { level: '5', desc: 'Attack wind-up and Attack Interval increases. ATK +50% and hit targets are Stunned for 0.6 seconds', spInit: 0, sp: 20, dur: '35s' },
        { level: '6', desc: 'Attack wind-up and Attack Interval increases. ATK +55% and hit targets are Stunned for 0.6 seconds', spInit: 0, sp: 20, dur: '36s' },
        { level: '7', desc: 'Attack wind-up and Attack Interval increases. ATK +60% and hit targets are Stunned for 0.7 seconds', spInit: 5, sp: 20, dur: '37s' },
        { level: 'M1', desc: 'Attack wind-up and Attack Interval increases. ATK +70% and hit targets are Stunned for 0.8 seconds', spInit: 6, sp: 20, dur: '38s' },
        { level: 'M2', desc: 'Attack wind-up and Attack Interval increases. ATK +80% and hit targets are Stunned for 0.9 seconds', spInit: 8, sp: 20, dur: '39s' },
        { level: 'M3', desc: 'Attack wind-up and Attack Interval increases. ATK +90% and hit targets are Stunned for 1 seconds', spInit: 10, sp: 20, dur: '40s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Manticore's Badge", desc: 'Operator Manticore has demonstrated a remarkable aptitude for bodily concealment and enemy ambush.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Specialist Operator during field operations to exercise Ambusher responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.' },
    ambx: { code: 'AMB-X', name: 'Tail-Protection Training Tool', stages: [
      { stage: 1, atk: '+58', def: '+22', effect: "New trait:\nSlows the Movement Speed of enemies within this unit's Attack Range by 20%" },
      { stage: 2, atk: '+72', def: '+27', effect: 'Hidden Killer - Elite improved:\nStays Invisible normally. The first attack made gains +55% ATK and removes Invisibility. Regains Invisible state after not attacking for 5 seconds' },
      { stage: 3, atk: '+85', def: '+31', effect: 'Hidden Killer - Elite improved:\nStays Invisible normally. The first attack made gains +60% ATK and removes Invisibility. Regains Invisible state after not attacking for 5 seconds' },
    ]},
  },
  story: `As the only known representative of her eponymous race in Rhodes Island, the enigmatic girl from Sargon codenamed "Manticore" has a very vague background. All the available information suggests that she was a former assassin of a certain Padishah who was abandoned by her master. Nevertheless, the assassin had been wandering around Sargon's vast desert and encountered many people, including Elliot Glover the "Sand Soldier" of Ibut who took her into his village.\nManticore coincidentally hid herself in an R.I. aircraft, and she was accidentally found by Stormeye. As a matter of fact, R.I. took her under their wing to provide her a permanent home. Thanks to her training as an assassin, she is skilled in covert operations which includes infiltration and ambushes, allowing her to eliminate anyone with the sting on her venomous scorpion-like tail. However, she has an extremely cautious and shy attitude, making her hard to communicate with R.I.'s personnel.`,
  profile: `Much of Manticore's history is unknown. It is known that prior to her employment at Rhodes Island, she had engaged in the "removal" of others. She has excellent stealth, infiltration, and surprise attack skills.\nNow she is a special kind of Operator who provides these special services for Rhodes Island.`,
  records: [
    { title: 'Clinical Analysis', content: `Medical tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Fusion Rate] 12%\nOperator has no obvious ore lesions on the surface of her body. Tests have revealed the presence of crystals internally, however.\n[Blood Crystal Density] 0.32u/L\nDue to the presence of Originium within the Operator's internal organs, the Operator's internal crystal content is elevated.` },
    { title: 'Archive File 1', content: `Manticore is gentle, shy, and sometimes even gives others the feeling that she's afraid. She speaks in a hesitant tone and constant stammering are her primary characteristics. She rarely finishes a sentence in one attempt, and she appears very stiff when communicating with other Operators. She would probably be more comfortable talking to a rock.\nAdditionally, her rare invisibility ability has become a major hindrance when communicating with others. It has completely prevented her from improving her communication skills and adaptability. If necessary, it is recommended to suggest additional treatment solutions to help Manticore become functional in interpersonal communication.` },
    { title: 'Archive File 2', content: `Communication with Manticore is carried out by writing messages on paper. Due the ability to turn invisible that was acquired from ore infection (the report on this ability needs to be further collated), it has been confirmed through interactive experiments that her ability does not transfer to inanimate objects, so paper communication has become a suitable way to communicate with this Operator.\nAfter communication, Manticore likes to leave behind little gifts that emit the sweet smell of violets.` },
    { title: 'Archive File 3', content: `Manticore was born in Sargon. Because most of the background she provided could not be validated, Manticore's experience cannot be confirmed. What is known is that Manticore has undergone relatively comprehensive special operations training and has at least one year of operative experience under her belt.\nThe investigation into her special operations training unit was unsuccessful, and Sargon intelligence did not provide any valuable clues. Currently only unconfirmed and less than reliable intelligence from Sargon spies indicate there are a group of people who house Originium Arts users with special abilities in this area. These individuals are using special training methods to kill Sargon aristocrats or operatives from other nations.\nBecause on Manticore's vague background, she has been designated as a special type of ore infection patient at Rhodes Island. Any applications requesting use of Manticore in special operations or combat will first need to be submitted to Dr. Kal'tsit for approval.` },
    { title: 'Archive File 4', content: `[Manticore's Ability's Test Record]\nTest subject: Manticore.\nTest objective: To probe the usefulness of the subject's abilities and Originium Arts.\nTest content: To find Manticore while she is in hiding and to defend against her while she is in action.\nTest participants: An Operator who has worked with Manticore on several missions.\nRandomly select two Operators from all of the Operators available.\nAmong them must be at least one technician Operator or non-technician Operator with high Originium adaptability.\nTest results: The test took place on a terrain simulating a complex environment. During the test period, none of the three Operators were able to locate the whereabouts of Manticore. When Manticore went on the offensive, some of the Operators managed to defend against her attacks using their quick reaction times and combat experience, while Manticore managed to successfully attack the others.\nFeedback results: According to the explanations provided by the Operators, Manticore could not be captured using visual means. Some of the Operators with better Originium adaptability reported feeling a strange atmosphere that instantly made them as though they were in danger.\nThe above process has been recorded in its entirety. If you wish to view it, you must request it from the relevant department.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/ambusher-branch.png', factionIcon: '/icons/factions/sargon.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/manticore/base.png', chibiSrc: '/operators/manticore/chibi.webm', chibiMoveSrc: '/operators/manticore/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'e2', label: 'Elite 2', src: '/operators/manticore/e2.png', chibiSrc: '/operators/manticore/chibi.webm', chibiMoveSrc: '/operators/manticore/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'skin1', label: 'Invisible Dirge', src: '/operators/manticore/skin1.png', chibiSrc: '/operators/manticore/chibi-skin1.webm', chibiMoveSrc: '/operators/manticore/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'skin2', label: 'Under A Veil', src: '/operators/manticore/skin2.png', chibiSrc: '/operators/manticore/chibi-skin2.webm', chibiMoveSrc: '/operators/manticore/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
  ],
  portrait: '/operators/manticore/portrait.png',
  portraitFocus: { y: 10.7, x: 41.7, zoom: 319 },
}

export default manticore
