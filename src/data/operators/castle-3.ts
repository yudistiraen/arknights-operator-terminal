import type { Operator } from '../../types'

const castle3: Operator = {
  name: 'Castle-3', fileNo: 'RCX3', class: 'Guard', branch: 'Dreadnought', rarity: 1, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Robot', gender: 'Male', birthplace: 'Columbia',
  birthday: 'December 10th', height: '167 cm', combatExp: '3 years', infectionStatus: 'Massive wear on outer casing, structure intact, normal durability. Generator and chassis in good condition. Weapon system operational. Slight damage on battery casing but operational. ECU in good condition.', illustrator: 'TOKI',
  cv: { JP: 'Atsushi Abe', CN: 'Yang Ma', EN: 'Christian Banas', KR: 'Choi Seung-hoon' },
  trait: 'Blocks 1 enemy and ignores the Deployment Limit, but has a long Redeployment Time',
  tags: ['Support', 'Robot'],
  stats: { hp: 1191, atk: 353, def: 90, res: 0, block: 1, cost: 3, aspd: '1.5s', rdp: '200s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Top Speed': '23 km/h', Climb: 'Normal', Brake: 'Normal', Mobility: 'Normal', Endurance: 'Excellent', 'Structural Integrity': 'Standard' },
  talents: [{ name: 'Tactical Configuration 6', desc: 'Increases the ATK and DEF of all [Melee] allies by 20% for 20 seconds after deployment', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `Castle-3, a modified Raythean Thor Exist-Plus six-wheeled autonomous combat robot, was custom-built by Closure to be used as one of Rhodes Island's operation platforms. Castle-3 is programmed with a self-aware masculine A.I. that adores his creator, calling her "Master Closure," and is seen as one of R.I.'s mascots alongside his "siblings" Lancet-2 and THRM-EX.\nCastle-3 has considerable experience assisting R.I. operators both on and off the battlefield and asks operators on field missions with him to record the number of hostiles he defeats by scratching tally marks into his outer casing, which accounts for some of the superficial damage to his exterior. While he maintains that his platform is incapable of "learning," he picked this habit up from an operator who died on a mission with him, exhibiting some degree of flexibility (or perhaps sentimentality) in his programming. Eventually, Castle-3 began to doubt whether he would remain in service for long due to his aging platform but, fortunately, he was able to alleviate that concern thanks to the Doctor's encouragement, Chiave's support, and upgrades from Closure, and will continue to serve R.I. for as long as his frame holds out.`,
  profile: `Castle-3 is a custom Raythean-Plus six-wheeled operations platform built by Closure. A likeable mascot for Rhodes Island, his mundane disposition means he is largely ignored.\nThe solid blocky appearance of Castle-3 gives off a trustworthy, dependable impression.\nThe marks on his casing may represent kills, but who made the marks if he has no hands?`,
  records: [
    { title: 'Archive File', content: `He does not mind Closure's modifications, and is even quite pleased with the upgrade. His settings were changed to make Closure his favorite person, so he's satisfied with anything "Master Closure" chooses to do.` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/dreadnought-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/castle-3/base.png', chibiSrc: '/operators/castle-3/chibi.webm', chibiMoveSrc: '/operators/castle-3/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.7, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TOKI' },
    { id: 'skin1', label: 'SUM019.ver', src: '/operators/castle-3/skin1.png', chibiSrc: '/operators/castle-3/chibi-skin1.webm', chibiMoveSrc: '/operators/castle-3/chibi-move-skin1.webm', chibiFraming: { scale: 1.3, offsetXPercent: 1.7, offsetYPercent: 1.6 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TOKI' },
  ],
}

export default castle3
