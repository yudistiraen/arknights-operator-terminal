import type { Operator } from '../../types'

const adnachiel: Operator = {
  name: 'Adnachiel', fileNo: 'PA44', class: 'Sniper', branch: 'Marksman', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A4', position: 'Ranged', race: 'Sankta', gender: 'Male', birthplace: 'Laterano',
  birthday: 'May 30th', height: '171 cm', combatExp: 'Half a year', infectionStatus: 'Infected', illustrator: '一立里子',
  cv: { JP: 'Kengo Kawanishi', CN: 'Ke Muqing', EN: 'Stefan Menaul', KR: 'Shim Kyu-hyuck' },
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1080, atk: 415, def: 134, res: 0, block: 1, cost: 11, aspd: '1s', rdp: '70s' },
  range: { base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]], e1: [[1,1,1,1,0],[2,1,1,1,0],[1,1,1,1,0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Shortcoming Breakthrough', desc: 'ASPD +8; Attacks ranged enemies first', elite: 'E1' }],
  skills: [{
    name: 'ATK Up α', icon: '/operators/adnachiel/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +50%', spInit: 0, sp: 40, rank: 'Rank 7', dur: '20s',
    levels: [
      { level: '1', desc: 'ATK +10%', spInit: 0, sp: 50, dur: '20s' },
      { level: '2', desc: 'ATK +15%', spInit: 0, sp: 50, dur: '20s' },
      { level: '3', desc: 'ATK +20%', spInit: 0, sp: 50, dur: '20s' },
      { level: '4', desc: 'ATK +30%', spInit: 0, sp: 45, dur: '20s' },
      { level: '5', desc: 'ATK +35%', spInit: 0, sp: 45, dur: '20s' },
      { level: '6', desc: 'ATK +40%', spInit: 0, sp: 45, dur: '20s' },
      { level: '7', desc: 'ATK +50%', spInit: 0, sp: 40, dur: '20s' },
    ],
  }],
  modules: {},
  story: `The Lateran Sankta Adnachiel, a former freelancer, joined Rhodes Island to receive treatment for his Oripathy after he and Steward were rescued by Cardigan during a snowstorm in Leithanien. Adnachiel is known for being friendly, humble, honest, and intelligent. He is currently serving as a marksman and as a member of Op Reserve A4. Unlike other Sankta combatants who use firearms, Adnachiel has yet to be permitted to use one and instead uses a crossbow in combat. According to Adnachiel, Sankta like him appear from time to time and their minds work a little differently from the ordinary Sankta. In order to win the right to carry a gun, they must agree to join the Curia and be bound by it.`,
  profile: `Adnachiel is a citizen of Laterano and enjoys rights one through thirteen afforded to all citizens of Laterano. Before his arrival at Rhodes Island, he worked as a freelancer. He received excellent results on a battery of tests and was assigned to Rhodes Island Op Reserve Team A4.\nHe has demonstrated great potential in the areas of rapid response, marksmanship, and support operations.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Medical tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 9%\nHe presents no obvious external symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.26u/L\nDegree of infection is minor and has not displayed any significant physical symptoms.`,
    },
    {
      title: 'Archive File 1',
      content: `Operators familiar with Adnachiel tend to use one word to describe the angel: bright. No matter how complicated the subject or advanced the technology involved, he seems to have no trouble mastering it in a short period of time.\n\nIn a show of humility, Adnachiel stands helpless in the face of loftier, theoretical topics, though everyone assumes he's just being modest. After all, as soft spoken and kind as he is, Adnachiel gives off the impression of being a clever and considerate young man. After meeting him, most operators come to understand his observant and sensitive personality. He always speaks to the true nature of things, but the scope of his theories is limited to that over which he has immediate control. Through his analyses, he can even predict the short-term future of his targets. He consistently rejects the titles of both "prophet" and "genius pretty boy," but rumors about him continue to proliferate.`,
    },
    {
      title: 'Archive File 2',
      content: `When he has free time between missions, Adnachiel often goes to the Rhodes Island Maintenance and Repair Workshop. Working as an intern assistant, Adnachiel's wrists are flexible and his attention to detail is meticulous. He has demonstrated an insatiable curiosity about Rhodes Island's equipment.`,
    },
    {
      title: 'Archive File 3',
      content: `Adnachiel has not yet completed the Laterano Firearms Usage Agreement. His most trusted piece of equipment is his personally modified crossbow (Laterano crossbows are very different from the metal crossbows mass produced by Raythean). As he is not sufficiently physically strong, Adnachiel's crossbow has a pedal on the front used to help pull back the string with his foot.`,
    },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/op-reserve-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/adnachiel/base.png', chibiSrc: '/operators/adnachiel/chibi.webm', illustrator: '一立里子' },
    { id: 'skin1', label: 'Traceless Walker', src: '/operators/adnachiel/skin1.png', chibiSrc: '/operators/adnachiel/chibi-skin1.webm', illustrator: '一立里子' },
  ],
  portrait: '/operators/adnachiel/portrait.png',
  portraitFocus: { y: 2.4, x: 55.6, zoom: 332 },
}

export default adnachiel
