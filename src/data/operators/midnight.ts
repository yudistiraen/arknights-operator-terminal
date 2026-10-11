import type { Operator } from '../../types'

const midnight: Operator = {
  name: 'Midnight', fileNo: 'PA62', class: 'Guard', branch: 'Lord', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A6', position: 'Melee', race: 'Sarkaz', gender: 'Male', birthplace: 'Far East',
  birthday: 'May 20th', height: '187 cm', combatExp: 'None', infectionStatus: 'Infected', illustrator: '竜崎いち',
  cv: { JP: 'Hidenori Takahashi', CN: 'Ma Yang', EN: 'Alex Jordan', KR: 'Kang Ho-chul' },
  trait: 'Can launch Ranged Attacks that deal 80% of normal ATK',
  tags: ['DPS'],
  stats: { hp: 1653, atk: 547, def: 282, res: 10, block: 2, cost: 16, aspd: '1.3s', rdp: '70s' },
  range: { base: [[0,1,1],[2,0,1],[0,1,1]], e1: [[0,1,1,0],[2,0,1,1],[0,1,1,0]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [{ name: 'Targeting - Primary', desc: 'When attacking, has a 20% chance to increase the current damage of that attack to 150%', elite: 'E1' }],
  skills: [{
    name: 'Enchant Weapon α', icon: '/operators/midnight/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +35%; Damage dealt by Normal Attacks turn into Arts Damage', spInit: 30, sp: 70, rank: 'Rank 7', dur: '40s',
    levels: [
      { level: '1', desc: 'ATK +5%; Damage dealt by Normal Attacks turn into Arts damage', spInit: 20, sp: 80, dur: '30s' },
      { level: '2', desc: 'ATK +10%; Damage dealt by Normal Attacks turn into Arts damage', spInit: 20, sp: 79, dur: '31s' },
      { level: '3', desc: 'ATK +15%; Damage dealt by Normal Attacks turn into Arts damage', spInit: 20, sp: 78, dur: '32s' },
      { level: '4', desc: 'ATK +20%; Damage dealt by Normal Attacks turn into Arts damage', spInit: 25, sp: 75, dur: '35s' },
      { level: '5', desc: 'ATK +25%; Damage dealt by Normal Attacks turn into Arts damage', spInit: 25, sp: 74, dur: '36s' },
      { level: '6', desc: 'ATK +30%; Damage dealt by Normal Attacks turn into Arts damage', spInit: 25, sp: 73, dur: '37s' },
      { level: '7', desc: 'ATK +35%; Damage dealt by Normal Attacks turn into Arts damage', spInit: 30, sp: 70, dur: '40s' },
    ],
  }],
  modules: {},
  story: `A former Sarkaz host from Higashi, Yoru used to be very popular among the ladies — as a host — back in the day, earning him monikers like "the Demon King of Higashi". After contracting Oripathy thanks to a jealous rival host's machinations, he left the nightlife and went to Rhodes Island for treatment, eventually becoming a combat operator. As a member of Op Reserve A6 under the codename "Midnight", Yoru has proved himself to be a surprisingly competent combatant through his impressive swordsmanship skills. Amusingly, Yoru's charm has little effect on his fellow R.I. operators, especially not his team captain Orchid. However, despite his outward suave and laid-back attitude, he genuinely cares for others more than he lets on. His mother has been asking him to return home and visit his sick father, despite his father saying otherwise.`,
  profile: `Initially a patient at Rhodes Island, volunteered to become an Operator. He was assigned to Op Reserve Team A6 after completing his examination battery.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in his circulation, indicating signs of infection and confirming him as infected at this stage.\n\n[Cell-Originium Assimilation] 8%\nMedical readings indicate subject has many symptoms of Oripathy. Oddly, subject has no visible crystallization on body.\n[Blood Originium-Crystal Density] 0.30u/L\nInfection is spreading at a constant rate. Regular observation and treatment mandatory.`,
    },
    {
      title: 'Archive File 1',
      content: `A former host now assigned to Op Reserve Team A6.\n\nMidnight was the most popular producer at a prominent host club in the Far East. He broke earnings record several years in a row, and was known as the Devil of the Eastern Night.\n\nHe tends to speak boldly, even claiming he's here as God's gift to women.\n\nWhile he has never caused any real problems, he is still often a headache.`,
    },
    {
      title: 'Archive File 2',
      content: `Midnight doesn't know how he got infected. According to his own words, he was very quick to retire after his diagnosis.\n\nAfter retiring, he found Rhodes Island through prior connections and came for treatment.\n\nThen, after being in the program for a while, he made a peculiar request: He wanted work at Rhodes Island.`,
    },
    {
      title: 'Archive File 3',
      content: `Midnight finally became a member of A6.\n\nAt first, even in eccentric A6, Midnight was widely considered the most difficult person to get along with. But after a while, everyone realized he was actually kind and hardworking.\n\nEven then, there are still many people, such as Orchid, who can't handle his wild boasts.`,
    },
    {
      title: 'Archive File 4',
      content: `When Midnight cares about someone, he gives his whole heart, but that means only a few people can reciprocate on the same level.\n\nSince everyone is used to his hard work, they don't notice his exhaustion, which he wouldn't want them to notice, anyway. But it would be best for someone to check up on him once in a while.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/lord-branch.png', factionIcon: '/icons/factions/op-reserve-a6.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/midnight/base.png', chibiSrc: '/operators/midnight/chibi.webm', illustrator: '竜崎いち' },
    { id: 'skin1', label: 'Seventh Night', src: '/operators/midnight/skin1.png', chibiSrc: '/operators/midnight/chibi-skin1.webm', illustrator: '竜崎いち' },
  ],
  portrait: '/operators/midnight/portrait.png',
  portraitFocus: { y: -5, x: 60, zoom: 280 },
}

export default midnight
