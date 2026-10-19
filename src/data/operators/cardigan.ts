import type { Operator } from '../../types'
import cardiganVoice from '../voices/cardigan'

const cardigan: Operator = {
  name: 'Cardigan', fileNo: 'PA45', class: 'Defender', branch: 'Protector', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Op Reserve A4', position: 'Melee', race: 'Perro', gender: 'Female', birthplace: 'Leithanien',
  birthday: 'August 2nd', height: '156 cm', combatExp: 'Half a year', infectionStatus: 'Non-infected', illustrator: '一立里子',
  cv: { JP: 'Azumi Asakura', CN: 'Z-kun', EN: 'Anjali Kunapaneni', KR: 'Lee Jae-hyun' },
  voice: cardiganVoice,
  trait: 'Blocks 3 enemies',
  tags: ['Defense'],
  stats: { hp: 2430, atk: 305, def: 475, res: 0, block: 3, cost: 18, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Normal' },
  talents: [{ name: 'Max HP Up', desc: 'Max HP +12%', elite: 'E1' }],
  skills: [{
    name: 'Regeneration α', icon: '/operators/cardigan/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'Restores HP by 40% of Max HP', spInit: 10, sp: 20, rank: 'Rank 7',
    levels: [
      { level: '1', desc: 'Restores HP by 20% of Max HP', spInit: 0, sp: 26 },
      { level: '2', desc: 'Restores HP by 23% of Max HP', spInit: 0, sp: 25 },
      { level: '3', desc: 'Restores HP by 25% of Max HP', spInit: 0, sp: 24 },
      { level: '4', desc: 'Restores HP by 30% of Max HP', spInit: 5, sp: 23 },
      { level: '5', desc: 'Restores HP by 32% of Max HP', spInit: 5, sp: 22 },
      { level: '6', desc: 'Restores HP by 35% of Max HP', spInit: 5, sp: 21 },
      { level: '7', desc: 'Restores HP by 40% of Max HP', spInit: 10, sp: 20 },
    ],
  }],
  modules: {},
  story: `The young Leithanian Perro Merry is a former member of the Leithanien Bobsled Patrol Team, which she joined to make up for her failure to become a skier. At some point, Merry met Steward and Adnachiel and quickly befriended them. However, the three got caught in a snowstorm while hiking, which caused both Steward and Adnachiel to suffer frostbite and even worsened their Oripathy. After five hours of desperate searching for medical aid, Merry finally found Rhodes Island requesting to become an operator in exchange for the duo's treatment. She picks up the codename "Cardigan" and works as a member of Op Reserve A4, where she acts as a defender. However, Cardigan is also infamous for her hyperactive behavior, which has caused many problems for her teammates now and then.`,
  profile: `Cardigan is a member of Op Reserve Team A4 and a citizen of Leithanien. Before taking up her current position, she was a member of the Bobsled Patrol Team. After an exceptional performance on her tests, she received permission to join Rhodes Island.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Medical tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n[Blood Originium-Crystal Density] 0.09u/L\nPhysical data reveal this Operator to be in a roughly healthy state.`,
    },
    {
      title: 'Archive File 1',
      content: `[Cardigan]\nCardigan is a proactive and confident Operator who carries out both daily tasks and combat missions with vigor. As a member of Op Reserve Team A4, Cardigan is very fond of all her teammates.`,
    },
    {
      title: 'Archive File 2',
      content: `[Cardigan's History 1]\nCardigan was born the oldest of five children in the frigid northern region of Leithanien to a mother and father who worked in the forests. Growing up in a comfortable and relaxed household, she had harmonious and intimate relationships with all her family members. When she was a child, she dreamed of becoming a professional skier. With her family's support, she took a shot at her dream, but ultimately failed to succeed. She quit ski training and was recruited by a bobsled patrol team. It was during this time that Cardigan underwent defensive and tactical training.`,
    },
    {
      title: 'Archive File 3',
      content: `[Cardigan's History 2]\nBefore she was recruited by Rhodes Island, she left her hometown, curious about city life. She made her way to the center of Leithanien to seek work, but due to its focus on Arts and her lack of talent for it, as well as her love of sport, she felt the city wasn't a good fit for her. During her stay in Leithanien, she met fellow travelers Steward and Adnachiel and formed a deep friendship with them. Even after the two of them became infected, Cardigan continued to put all her effort into helping her friends make it through, and contacted Rhodes Island to seek treatment for them.`,
    },
    {
      title: 'Archive File 4',
      content: `[Cardigan's...]\nA list of broken items.\n\nSofa back leather 14 square centimeters. Cause of damage: Weapon wasn't unequipped and its edge cut everything up.\nMedic Operator Ansel's office chair legs. Cause of damage: Got over-excited and lost balance. Chair legs bent as a result.\nA 90*120cm tactics book. Cause of damage: Over-excitement resulted in book getting broken with a hammer.\n\nSignature of person responsible: Cardigan. Signature of team leader: Melantha.\n\nOutcome: After finance personnel calculate damage, they inform the responsible party that payment will be deducted from their salary in 12 equal installments for compensation. Responsible party has been handed over to team leader for Op Reserve Team discipline and re-education.`,
    },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/op-reserve-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/cardigan/base.png', chibiSrc: '/operators/cardigan/chibi.webm', illustrator: '一立里子' },
    { id: 'skin1', label: 'Cheerful Guardian', src: '/operators/cardigan/skin1.png', chibiSrc: '/operators/cardigan/chibi-skin1.webm', illustrator: '一立里子' },
    { id: 'skin2', label: 'Sunny Day', src: '/operators/cardigan/skin2.png', chibiSrc: '/operators/cardigan/chibi-skin2.webm', illustrator: '一立里子' },
  ],
  portrait: '/operators/cardigan/portrait.png',
  portraitFocus: { y: -3.7, x: 44.2, zoom: 296 },
}

export default cardigan
