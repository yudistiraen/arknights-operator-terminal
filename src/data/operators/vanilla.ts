import type { Operator } from '../../types'
import vanillaVoice from '../voices/vanilla'

const vanilla: Operator = {
  name: 'Vanilla', fileNo: 'BS04', class: 'Vanguard', branch: 'Pioneer', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Blacksteel', position: 'Melee', race: 'Vouivre', gender: 'Female', birthplace: 'Vouivre',
  birthday: 'February 16th', height: '172 cm', combatExp: '1 year', infectionStatus: 'Non-infected', illustrator: 'm9nokuro',
  cv: { JP: 'Shiori Sugiura', CN: 'Ruoyu Zhang', EN: 'Stephanie Sheh', KR: 'Kang Sae-bom' },
  voice: vanillaVoice,
  trait: 'Blocks 2 enemies',
  tags: ['DP-Recovery'],
  stats: { hp: 1270, atk: 405, def: 240, res: 0, block: 2, cost: 11, aspd: '1.05s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [{ name: 'ATK Up', desc: 'ATK +8%', elite: 'E1' }],
  skills: [{
    name: 'Command - Reinforcement', icon: '/operators/vanilla/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'Gain 6 Deployment Points; ATK +35%', spInit: 6, sp: 20, rank: 'Rank 7', dur: '10s',
    levels: [
      { level: '1', desc: 'Gain 6 Deployment Points; ATK +5%', spInit: 0, sp: 25, dur: '10s' },
      { level: '2', desc: 'Gain 6 Deployment Points; ATK +10%', spInit: 1, sp: 25, dur: '10s' },
      { level: '3', desc: 'Gain 6 Deployment Points; ATK +15%', spInit: 2, sp: 25, dur: '10s' },
      { level: '4', desc: 'Gain 6 Deployment Points; ATK +20%', spInit: 3, sp: 23, dur: '10s' },
      { level: '5', desc: 'Gain 6 Deployment Points; ATK +25%', spInit: 3, sp: 22, dur: '10s' },
      { level: '6', desc: 'Gain 6 Deployment Points; ATK +30%', spInit: 3, sp: 21, dur: '10s' },
      { level: '7', desc: 'Gain 6 Deployment Points; ATK +35%', spInit: 6, sp: 20, dur: '10s' },
    ],
  }],
  modules: {},
  story: `A Blacksteel trainee Operator, the Vouivre codenamed Vanilla was assigned to Rhodes Island as part of their partnership, where she now fights on the frontlines with her halberd. Outside the battlefield, Vanilla is better known as an ardent pet keeper who raises various Originium slugs. She has a trio of slugs named Puffball, Tiny, and Kuro, plus a Sargon Desert Metal Crab named Stout. Her hometown in Sargon was a poor place with few resources where children were raised to be great hunters. Vanilla eventually joined Blacksteel as a mercenary to earn money. Vanilla respects her Blacksteel seniors, Liskarm and Franka, and is also friends with Jessica.`,
  profile: `Vanilla is a Blacksteel trainee, currently training and studying as part of exchange program with Rhodes Island.\nShe has learned to use her race's combat abilities to her advantage, and performs well as a Vanguard.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed clear outline of internal organs without any unusual dark spot. No unusual traces of Originium particles present in her system, no signs of infection, confirming her as Non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator Vanilla showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Vanilla rarely comes into contact with Originium.`,
    },
    {
      title: 'Archive File 1',
      content: `Vanilla is a rather naive and inexperienced Operator sent to us from Blacksteel Worldwide.\n\nEven though she's only been with Blacksteel for a short time, her dedication impressed the executives enough for them to send her to Rhodes Island for additional training.\n\nShe stands much taller than Liskarm or Franka, but the three are often seen together.`,
    },
    {
      title: 'Archive File 2',
      content: `Vanilla is very protective of animals. A conversation about animals will always gets her out of her normally very thick shell. It may also be a reason she left home.\n\nBut because the animals she strives to protect include icky things like the Originium snail, her affection can unnerve some people.`,
    },
    {
      title: 'Archive File 3',
      content: `Because Vanilla was born in an isolated tribe, Blacksteel added a special common knowledge to her training regimen.\n\nAccording to Franka, Vanilla was at first startled by the automatic doors at the base.\n\nIn fact, Vanilla is not yet used to most of the technological equipment at Rhodes Island.`,
    },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/blacksteel.png',
  portraitFocus: { y: -5, x: 88, zoom:250 },
  skins: [
    { id: 'base', label: 'Base', src: '/operators/vanilla/base.png', chibiSrc: '/operators/vanilla/chibi.webm', illustrator: 'm9nokuro' },
    { id: 'skin1', label: 'The Zoophilist and Her Mollusca', src: '/operators/vanilla/skin1.png', chibiSrc: '/operators/vanilla/chibi-skin1.webm', illustrator: '3MO' },
  ],
  portrait: '/operators/vanilla/portrait.png',
}

export default vanilla
