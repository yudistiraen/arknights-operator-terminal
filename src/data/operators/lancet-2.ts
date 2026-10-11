import type { Operator } from '../../types'

const lancet2: Operator = {
  name: 'Lancet-2', fileNo: 'RCX2', class: 'Medic', branch: 'Medic', rarity: 1, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Robot', gender: 'Female', birthplace: 'Columbia',
  birthday: 'May 12th', height: '149 cm', combatExp: '2 years', infectionStatus: 'Slight wear on outer casing, structure intact, normal durability. Generator and chassis in good condition. Medical system operational. Medical supplies replenished. ECU in good condition.', illustrator: 'TOKI',
  cv: { JP: 'Asami Shimoda', CN: 'Guo Qi', EN: 'Melody Peng', KR: 'Lee So-eun' },
  trait: 'Restores the HP of allies and ignores the Deployment Limit, but has a long Redeployment Time',
  tags: ['Healing', 'Robot'],
  stats: { hp: 435, atk: 70, def: 27, res: 0, block: 1, cost: 3, aspd: '2.85s', rdp: '200s' },
  range: { base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]], e1: [[1,1,1,0],[2,1,1,1],[1,1,1,0]] },
  physicalExam: { 'Top Speed': '15 km/h', Climb: 'Normal', Brake: 'Normal', Mobility: 'Normal', Endurance: 'Excellent', 'Structural Integrity': 'Standard' },
  talents: [{ name: 'Support Spray 6', desc: 'Immediately restores the HP of all allies by 500 after deployment', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `Modified from a Raythean Exister-S62 six-wheeled battlefield triage robot, Lancet-2 plays a role in both medical support and Originium cleanup for Rhodes Island with a feminine, self-aware A.I. seemingly programmed to adore her creator, Closure, while not performing her tasks. Her rounded design makes her look cute, and although she can be depressing due to her heightened pessimism and self-deprecation, Lancet-2 is rather well-liked.`,
  profile: `Lancet-2 is a custom Raythean-S62 Model six-wheeled operations platform. Its rounded design has led Lancet-2 to be perceived as cute, making her something of a mascot. Although she has a rather pessimistic dispensation, she is still well-liked.\nAfter being modified by Closure, Lancet-2 is able to perform more medical duties around the island, and her equipment is geared towards disinfecting and cleaning Originium contamination.`,
  records: [
    { title: 'Archive File', content: `She is rather displeased with Closure's modifications. Her settings were changed to increase her personal opinion of Closure, and does not understand why that had to be the case. Closure thought her pessimism was funny, and thus increased the frequency and intensity of her self-deprecation.` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/lancet-2/base.png', chibiSrc: '/operators/lancet-2/chibi.webm', illustrator: 'TOKI' },
    { id: 'skin1', label: 'Shore Rescue Modification', src: '/operators/lancet-2/skin1.png', chibiSrc: '/operators/lancet-2/chibi-skin1.webm', illustrator: '过失帝国' },
  ],
  portrait: '/operators/lancet-2/portrait.png',
  portraitFocus: { y: 65, x: 60, zoom: 80 },
}

export default lancet2
