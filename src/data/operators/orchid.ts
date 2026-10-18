import type { Operator } from '../../types'

const orchid: Operator = {
  name: 'Orchid', fileNo: 'PA61', class: 'Supporter', branch: 'Decel Binder', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A6', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Columbia',
  birthday: 'January 15th', height: '164 cm', combatExp: 'None', infectionStatus: 'Infected', illustrator: 'Skade',
  cv: { JP: 'Airi Ōtsu', CN: 'Ke Zhong', EN: 'Susie Riddell', KR: 'Yeo Min-jeong' },
  trait: 'Deals Arts damage and Slows the target for a short time',
  tags: ['Slow'],
  stats: { hp: 935, atk: 418, def: 83, res: 15, block: 1, cost: 12, aspd: '1.9s', rdp: '70s' },
  range: { base: [[1,1,1,1],[1,2,1,1],[1,1,1,1]], e1: [[1,1,1,1],[1,2,1,1],[1,1,1,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [{ name: 'Casting Speed Up', desc: 'ASPD +9', elite: 'E1' }],
  skills: [{
    name: 'Swift Strike α', icon: '/operators/orchid/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +25%; ASPD +25', spInit: 0, sp: 45, rank: 'Rank 7', dur: '25s',
    levels: [
      { level: '1', desc: 'ATK +6%; ASPD +10', spInit: 0, sp: 55, dur: '25s' },
      { level: '2', desc: 'ATK +9%; ASPD +10', spInit: 0, sp: 54, dur: '25s' },
      { level: '3', desc: 'ATK +12%; ASPD +10', spInit: 0, sp: 53, dur: '25s' },
      { level: '4', desc: 'ATK +15%; ASPD +15', spInit: 0, sp: 50, dur: '25s' },
      { level: '5', desc: 'ATK +19%; ASPD +15', spInit: 0, sp: 49, dur: '25s' },
      { level: '6', desc: 'ATK +22%; ASPD +15', spInit: 0, sp: 48, dur: '25s' },
      { level: '7', desc: 'ATK +25%; ASPD +25', spInit: 0, sp: 45, dur: '25s' },
    ],
  }],
  modules: {},
  story: `Orchid once worked as an editor for a Columbian fashion magazine before her sudden infection. As a matter of fact, she always wears an elaborate and expensive designer outfit despite being a field operative. She originally joined Rhodes Island as a desk worker, but now Orchid acts as the captain of Reserve Op Team A6 where she provides battlefield support to others with her Originium Arts. She has the reputation of being the "nagging mother" of her team since Orchid has to deal with her teammates' eccentricities all the time.`,
  profile: `Former editor of a Columbian fashion magazine, Orchid began treatment at Rhodes Island following Oripathy. She expressed her desire to become an Operator, passed the examination battery and was assigned to Reserve Op Team A6 as the squad leader. She manages the team and provides support with her Arts in combat.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 6%\nInfection is expected to spread given the current course. Regular observation and management required.\n[Blood Originium-Crystal Density] 0.23 u/L\nOperator Orchid displays conspicuous symptoms, but has cooperated with the treatment plan and has minimized the spread of the infection.`,
    },
    {
      title: 'Archive File 1',
      content: `Captain of Reserve Op Team A6, yearning to return to a normal life.\n\nHaving previously been an office worker, Orchid is one of the most "ordinary" Rhodes Islanders, but finds herself constantly troubled by the more colorful characters on her team. Her title might be captain, but she's more like the squad nanny.`,
    },
    {
      title: 'Archive File 2',
      content: `The former fashion magazine editor still has a nose for the trendy. She never bandwagons onto a fad, preferring to keep to her own vision. The way she dresses usually sets the style for the season at Rhodes Island.\n\nMore importantly, she knows all the tricks to cover up all the superficial symptoms of Oripathy, keeping the Infected looking the same as they ever did, and even bringing out their individual charms--just as she did for herself. She has been a godsend to many Oripathy sufferers, especially the ladies.\n\nAs such, Miss Orchid has become an icon to some of the girls on the island.`,
    },
    {
      title: 'Archive File 3',
      content: `A modern city girl like Orchid would have never volunteered herself for a highly dangerous job like that of an Operator.\n\nBut treatment at Rhodes Island isn't free (though there are discounts and payment plans), and she did lose her job. Ultimately, after a battery of exams, she decided to accept the position.\n\nOf course, if she knew she was to lead the freaks on A6, she probably would have had second thoughts.`,
    },
    {
      title: 'Archive File 4',
      content: `But when all is said and done, Orchid knows better than anyone that even though A6 is a freak show, they all have their hearts in the right place.\n\nHer egotistical but sincere Midnight, her deadly but well-meaning Popukar, her icy but caring Spot, and... then there's Catapult... Right, let's not talk about her. In any case, Orchid treasures her squadmates.`,
    },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/decel-binder-branch.png', factionIcon: '/icons/factions/op-reserve-a6.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/orchid/base.png', chibiSrc: '/operators/orchid/chibi.webm', illustrator: 'Skade' },
    { id: 'skin1', label: 'Twines of Time', src: '/operators/orchid/skin1.png', chibiSrc: '/operators/orchid/chibi-skin1.webm', illustrator: 'Liyu黎' },
  ],
  portrait: '/operators/orchid/portrait.png',
  portraitFocus: { y: -5.3, x: 46, zoom: 344 },
}

export default orchid
