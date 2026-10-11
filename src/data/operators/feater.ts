import type { Operator } from '../../types'

const feater: Operator = {
  name: 'FEater', fileNo: 'YD01', class: 'Specialist', branch: 'Push Stroker', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Lungmen', position: 'Melee', race: 'Ursus', gender: 'Female', birthplace: 'Yan',
  birthday: 'August 10th', height: '160 cm', combatExp: '11 years', infectionStatus: 'Infection confirmed by medical report.', illustrator: 'RAN',
  cv: { JP: 'Mie Sonozaki', CN: 'Xin Rui (credited as "Yue Xin" in EN)', EN: 'Ashleigh Haddad', KR: 'Song Ha-rim' },
  trait: 'Can attack all blocked enemies\nCan be deployed on Ranged Tiles',
  tags: ['Shift', 'Slow'],
  stats: { hp: 1845, atk: 640, def: 382, res: 0, block: 2, cost: 20, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Kung Fu', desc: 'Obtains 20% Physical Dodge', elite: 'E1' },
    { name: 'Kung Fu', desc: 'Obtains 23% (+3%) Physical Dodge', elite: 'E1 (Potential 5)' },
    { name: 'Kung Fu', desc: 'Obtains 40% Physical Dodge', elite: 'E2' },
    { name: 'Kung Fu', desc: 'Obtains 43% (+3%) Physical Dodge', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Raging Iron Fist', icon: '/operators/feater/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'The next attack pushes enemies towards the attack direction greatly and their Movement Speed -30% for 5 seconds', spInit: 0, sp: 5, rank: 'M3',
      note: "Raging Iron Fist's push has a force of 0/0/0/1/1/1/1/1/1/2.",
      levels: [
        { level: '1', desc: 'The next attack pushes enemies towards the attack direction slightly and their Movement Speed -15% for 3 seconds', spInit: 0, sp: 6 },
        { level: '2', desc: 'The next attack pushes enemies towards the attack direction slightly and their Movement Speed -16% for 3 seconds', spInit: 0, sp: 6 },
        { level: '3', desc: 'The next attack pushes enemies towards the attack direction slightly and their Movement Speed -17% for 3 seconds', spInit: 0, sp: 6 },
        { level: '4', desc: 'The next attack pushes enemies towards the attack direction moderately and their Movement Speed -18% for 4 seconds', spInit: 0, sp: 6 },
        { level: '5', desc: 'The next attack pushes enemies towards the attack direction moderately and their Movement Speed -19% for 4 seconds', spInit: 0, sp: 6 },
        { level: '6', desc: 'The next attack pushes enemies towards the attack direction moderately and their Movement Speed -20% for 4 seconds', spInit: 0, sp: 6 },
        { level: '7', desc: 'The next attack pushes enemies towards the attack direction moderately and their Movement Speed -21% for 4 seconds', spInit: 0, sp: 6 },
        { level: 'M1', desc: 'The next attack pushes enemies towards the attack direction moderately and their Movement Speed -24% for 5 seconds', spInit: 0, sp: 5 },
        { level: 'M2', desc: 'The next attack pushes enemies towards the attack direction moderately and their Movement Speed -27% for 5 seconds', spInit: 0, sp: 5 },
        { level: 'M3', desc: 'The next attack pushes enemies towards the attack direction greatly and their Movement Speed -30% for 5 seconds', spInit: 0, sp: 5 },
      ],
    },
    {
      name: 'Destructive Fist', icon: '/operators/feater/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies significantly, dealing 250% of ATK Physical damage and the targets' Movement Speed -30% for 5 seconds", spInit: 0, sp: 15, rank: 'M3',
      range: [[2,1,1,1,1]],
      note: "Destructive Fist's push has a force of 1/1/1/1/1/1/2/2/2/3.\nDestructive Fist affects the target and ground enemies in a radius of 0.9 tiles around them.",
      levels: [
        { level: '1', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies moderately, dealing 160% of ATK Physical damage and the targets' Movement Speed -15% for 3 seconds", spInit: 0, sp: 20 },
        { level: '2', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies moderately, dealing 165% of ATK Physical damage and the targets' Movement Speed -16% for 3 seconds", spInit: 0, sp: 20 },
        { level: '3', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies moderately, dealing 170% of ATK Physical damage and the targets' Movement Speed -17% for 3 seconds", spInit: 0, sp: 20 },
        { level: '4', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies moderately, dealing 175% of ATK Physical damage and the targets' Movement Speed -18% for 4 seconds", spInit: 0, sp: 19 },
        { level: '5', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies moderately, dealing 180% of ATK Physical damage and the targets' Movement Speed -19% for 4 seconds", spInit: 0, sp: 19 },
        { level: '6', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies moderately, dealing 185% of ATK Physical damage and the targets' Movement Speed -20% for 4 seconds", spInit: 0, sp: 19 },
        { level: '7', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies greatly, dealing 190% of ATK Physical damage and the targets' Movement Speed -21% for 4 seconds", spInit: 0, sp: 18 },
        { level: 'M1', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies greatly, dealing 210% of ATK Physical damage and the targets' Movement Speed -24% for 5 seconds", spInit: 0, sp: 17 },
        { level: 'M2', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies greatly, dealing 230% of ATK Physical damage and the targets' Movement Speed -27% for 5 seconds", spInit: 0, sp: 16 },
        { level: 'M3', desc: "Rushes forward immediately and targets the closest enemy in the frontal line; Knocks back all nearby enemies significantly, dealing 250% of ATK Physical damage and the targets' Movement Speed -30% for 5 seconds", spInit: 0, sp: 15 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "FEater's Badge", desc: 'Appointed as Specialist Operator to exercise Push Stroker responsibilities' },
    pusy: { code: 'PUS-Y', name: 'Shangshu-Style Homemade Chili Sauce', stages: [
      { stage: 1, hp: '+120', atk: '+25', def: '+25', effect: 'Trait improved: Simultaneously attacks all blocked enemies; When blocking 2 or more enemies, increases Shift level by 1. Can be deployed on ranged tiles' },
      { stage: 2, hp: '+150', atk: '+32', def: '+32', effect: 'Kung Fu improved: Obtains 47% Physical Dodge' },
      { stage: 3, hp: '+170', atk: '+35', def: '+35', effect: 'Kung Fu improved: Obtains 52% Physical Dodge' },
    ]},
  },
  profile: `A famous action movie star from Yan, FEater was forced to give up her film career after contracting Oripathy. She found a new purpose in life at Rhodes Island.`,
  story: `A Yanese Ursine martial artist, Wan Shêng-shêng was once a famous, critically acclaimed star of various Lungmen action movies, including the "Divine Palm of the Phantom Godfist" franchise. After a streak of bad luck — including the embezzlement of funds she had invested in a canceled movie adaptation of Qisi's wuxia novel "The Assenting Fist," and an accident on set that left her infected with Oripathy — Wan's career came to an abrupt end. She remained optimistic about her predicament and found a new life under the wing of Rhodes Island, where she became one of their combat specialists under the codename "FEater."\nIn Lungmen, Wan loses her savings after a business partner takes off with the money from a failed movie project, and considers going home to take over her father's tanghulu stall. While out looking for alcohol, she runs into a fan, and by chance crosses paths with him again the next day when he's caught robbing a friend's shop out of hunger. Wan pays his fine, chews him out, then buys him food anyway, all while brushing off warnings from the shopkeeper about the paparazzi. Left alone afterward, she admits that aside from a small reserve set aside for charity, her savings are all but gone — though she stays optimistic, noting she has an audition the next day. Not long after, Wan contracts Oripathy during a shoot and is rushed to the emergency room. Her Infection is kept secret from the public, but her billboards and advertisements are quietly taken down as her career comes to a halt.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles indicates signs of infection at this stage.\n[Cell-Originium Assimilation] 7.2%\nOriginium markings are present on the patient's right leg, but has not yet turned into crystallization.\n[Blood Originium-Crystal Density] 0.21 u/L\nInfection is still in an early stage, and no conspicuous physical changes are present at this time.` },
    { title: 'Archive File 1', content: `FEater studied martial arts for many years prior to entering the film industry. She is the heir to the Tie Yi Liu He Quan, the Universal Fist of the Iron Will, one of Yan's great martial arts traditions. FEater has mastered all Five Elements, Eight Strikes, and Twelve Forms of her art, giving her the ability to deal devastating blows in the blink of an eye.` },
    { title: 'Archive File 2', content: `After contracting Oripathy, FEater's acting career and aspirations came to a screeching halt. But she didn't give into depression like one might expect, since movies to her were just one vehicle for delivering righteousness. The optimistic former star quickly landed back on her feet.` },
    { title: 'Archive File 3', content: `Even after becoming a movie star, even having been a legendary martial arts master, FEater has always been someone very approachable. In fact, she is actually rather naive and gets along easily with other Operators. Her hobbies include movies, of course, as well as Yan food, and chugging alcohol with a friendly crowd.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/push-stroker-branch.png', factionIcon: '/icons/factions/lungmen.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/feater/base.png', chibiSrc: '/operators/feater/chibi.webm', chibiMoveSrc: '/operators/feater/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'RAN' },
    { id: 'e2', label: 'Elite 2', src: '/operators/feater/e2.png', chibiSrc: '/operators/feater/chibi.webm', chibiMoveSrc: '/operators/feater/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'RAN' },
    { id: 'skin1', label: 'Dojo Star', src: '/operators/feater/skin1.png', chibiSrc: '/operators/feater/chibi-skin1.webm', chibiMoveSrc: '/operators/feater/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'RAN' },
    { id: 'skin2', label: 'Gourmet', src: '/operators/feater/skin2.png', chibiSrc: '/operators/feater/chibi-skin2.webm', chibiMoveSrc: '/operators/feater/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'RAN' },
  ],
  portrait: '/operators/feater/portrait.png',
  portraitFocus: { y: 3, x: 43, zoom: 240 },
}

export default feater
