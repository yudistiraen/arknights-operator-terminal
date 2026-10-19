import type { Operator } from '../../types'
import stewardVoice from '../voices/steward'

const steward: Operator = {
  name: 'Steward', fileNo: 'PA42', class: 'Caster', branch: 'Core Caster', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A4', position: 'Ranged', race: 'Vulpo', gender: 'Male', birthplace: 'Kjerag',
  birthday: 'December 24th', height: '172 cm', combatExp: 'Half a year', infectionStatus: 'Infected', illustrator: '一立里子',
  cv: { JP: 'Chihiro Suzuki', CN: 'Pei Zhang', EN: 'Gregg Lowe', KR: 'Han Man-joong' },
  voice: stewardVoice,
  trait: 'Deals Arts damage',
  tags: ['DPS'],
  stats: { hp: 1100, atk: 520, def: 90, res: 15, block: 1, cost: 18, aspd: '1.6s', rdp: '70s' },
  range: { base: [[1,1,1,0],[2,1,1,0],[1,1,1,0]], e1: [[1,1,1,0],[2,1,1,1,10],[1,1,1,0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Armor Break', desc: 'ATK +6%; Attacks enemies with the highest DEF first', elite: 'E1' }],
  skills: [{
    name: 'Power Strike α', icon: '/operators/steward/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
    desc: 'Increases the ATK of next attack to 190%', spInit: 0, sp: 4, rank: 'Rank 7',
    levels: [
      { level: '1', desc: 'Increases the ATK of next attack to 150%', spInit: 0, sp: 5 },
      { level: '2', desc: 'Increases the ATK of next attack to 155%', spInit: 0, sp: 5 },
      { level: '3', desc: 'Increases the ATK of next attack to 160%', spInit: 0, sp: 5 },
      { level: '4', desc: 'Increases the ATK of next attack to 170%', spInit: 0, sp: 4 },
      { level: '5', desc: 'Increases the ATK of next attack to 175%', spInit: 0, sp: 4 },
      { level: '6', desc: 'Increases the ATK of next attack to 180%', spInit: 0, sp: 4 },
      { level: '7', desc: 'Increases the ATK of next attack to 190%', spInit: 0, sp: 4 },
    ],
  }],
  modules: {},
  story: `Born in the southern territory of Kjerag to a family with the same surname as his codename, Steward's talent for Originium Arts was left buried in the snow. When the Silverash clan declared a new economic policy that brought merchants from various countries to Kjerag, Steward freelanced as a guide and local servicer, as well as a model to help market goods. It is mentioned that he learned Arts from a psychic whose casting method is similar to Lava's. At one point, he befriended Adnachiel and Cardigan, but contracted Oripathy along with the former while traveling in Leithanien. Cardigan's desperate search for medical aid led them to receive help from a Rhodes Island Operator. After an exceptional performance on his tests, he joined Rhodes Island and now serves on a reserve team, Op Reserve A4.`,
  profile: `Steward is a member of Op Reserve Team A4 and a citizen of Kjerag. Before he officially took the position, he worked as a freelancer. After an exceptional performance on his tests, he received permission to join Rhodes Island and now serves on the reserve team.\nHe shows promise in the areas of Arts support, navigation, and combat support.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Medical tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 9%\nHe presents no obvious external symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.3u/L\nInfection has progressed to middle-term. Currently there is no evidence of spreading.`,
    },
    {
      title: 'Archive File 1',
      content: `Steward was born in the southern territory of Kjerag and spent his childhood being educated at home. He has a calm temperament that stands out amongst his peers and has a certain talent for Originium Arts. However, given the snowy environment and the high cost of studying Arts, this talent went uncultivated and was left buried among the heavy snow of Kjerag.`,
    },
    {
      title: 'Archive File 2',
      content: `The southern territory of Kjerag has long acted as the exit point for all of Kjerag. When the Silverash family declared a new economic policy, merchants from Columbia, Leithanien, and RIM Billiton launched several investment plans. During this period, Steward took the initiative to become a guide and local servicer for the business activities of merchants from all over the world. He also worked part-time as a model to help market goods. The brand new goods coming out of Columbia left a deep impression on Steward, and Steward's excellent service has garnered the praise of many merchants.`,
    },
    {
      title: 'Archive File 3',
      content: `Snow Blue Wand\nQuality Guaranteed by: Supervisor of the Leithanien Arts Society\nManufacturer: Rudolf Bros. Wand Workshop\nProduct Number: ADD-143.\n\nThe Snow Blue wand used by Steward.\n\nProof of a Caster's mastery of Arts. Its handle has been engraved with the words "Legendary Future."\n\nWhen you use it, you can hear the whistling of snow.`,
    },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/core-caster-branch.png', factionIcon: '/icons/factions/op-reserve-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/steward/base.png', chibiSrc: '/operators/steward/chibi.webm', illustrator: '一立里子' },
    { id: 'skin1', label: 'Snowstorm Invitation', src: '/operators/steward/skin1.png', chibiSrc: '/operators/steward/chibi-skin1.webm', illustrator: '一立里子' },
  ],
  portrait: '/operators/steward/portrait.png',
  portraitFocus: { y: -4.7, x: 69, zoom: 311 },
}

export default steward
