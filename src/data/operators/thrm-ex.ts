import type { Operator } from '../../types'

const thrmEx: Operator = {
  name: 'THRM-EX', fileNo: 'RCX4', class: 'Specialist', branch: 'Executor', rarity: 1, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', '7-2'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Robot', gender: 'Male', birthplace: 'Columbia',
  birthday: 'February 15th', height: '160 cm', combatExp: 'Less than 1 year', infectionStatus: 'Small amount of wear on outer casing, structure intact, normal durability. Generator and chassis in good condition. Weapon system operational. Energy supply is full and functional. ECU in good condition.', illustrator: 'TOKI',
  cv: { JP: 'Hikaru Midorikawa', CN: 'MinoruK (credited as "Yuxuan Liu" in EN)', EN: 'Michael Schwalbe', KR: 'Kim Yoon-gi' },
  trait: 'Does not attack and ignores the Deployment Limit, but has a long Redeployment Time',
  tags: ['Nuker', 'Robot'],
  stats: { hp: 1443, atk: 260, def: 443, res: 50, block: 0, cost: 3, aspd: '0.93s', rdp: '200s' },
  range: { base: [[1,1,1],[1,2,1],[1,1,1]], e1: [[1,1,1],[1,2,1],[1,1,1]] },
  physicalExam: { 'Top Speed': '22.2 km/h', Climb: 'Average', Brake: 'Average', Mobility: 'Average', Endurance: 'Flawed', 'Structural Integrity': 'Excellent' },
  talents: [{ name: 'Delayed Detonation 6', desc: '3 seconds after deployment, inflicts 400% ATK as Physical damage to enemies in the nearby 8 tiles and applies 30% Fragile effect for 8 seconds, then automatically retreats from battle', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `Modified and retrofitted from a Raythean Challenger Hellcat six-wheeled robot by Closure with assistance from Mayer for use by Rhodes Island as a "battlefield deterrent robot", THRM-EX (short for "Thermal-EX") has a masculine A.I. that, like his "brother" Castle-3, is — again — programmed to adore his creator when not performing its tasks. However, THRM-EX is known for usually showing a great degree of enthusiasm even amidst the heat of battle as if he is, literally, on fire.`,
  profile: `Thermal-EX (also known as THRM-EX) is a high-performance version of the Raythean Challenger™ Hellcat operating platform, jointly customized by Mayer and Closure. Between the two, Mayer was primarily responsible for the development and improvement of the weapon and energy supply systems. Thermal-EX is a rather peculiar presence and is extremely enthusiastic towards others, a characteristic that is beloved by some people and disliked by others. However, Thermal-EX remains undaunted, committed to using his incandescent personality to bring warmth to others in this frigid world.\nAs a new model, Thermal-EX's boasts a unique and aggressive appearance that can be somewhat intimidating. But he doesn't mind. After all, anyone can hear Thermal-EX's loud and warm greetings from a distance long before he's clearly visible. However, it seems like his vocabulary has been excessively bloated with words pertaining to "hot"...`,
  records: [
    { title: 'Archive File', content: `Thermal-EX is full of praise for everyone he knows, but his greatest praise is reserved for the work Mayer did to retrofit him, even eclipsing his attitude towards Closure's original decision to modify him. Consequently, it is difficult to discern what his personal preferences might be, because everything he says is dominated by appreciation and enthusiasm.\n"Unexpectedly, even some introverted and normally unsociable Operators are willing to spend the day with him and listen to his endless prattling... but this too is good. I've decided to scrap my plan to reconfigure his language prioritization logic." That's what Closure said.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/executor-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/thrm-ex/base.png', chibiSrc: '/operators/thrm-ex/chibi.webm', chibiMoveSrc: '/operators/thrm-ex/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.5, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TOKI' },
    { id: 'skin1', label: 'Dual-threat Quarterback', src: '/operators/thrm-ex/skin1.png', chibiSrc: '/operators/thrm-ex/chibi-skin1.webm', chibiMoveSrc: '/operators/thrm-ex/chibi-move-skin1.webm', chibiFraming: { scale: 1.33, offsetXPercent: 0.5, offsetYPercent: 1.7 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Anisotropy' },
  ],
}

export default thrmEx
