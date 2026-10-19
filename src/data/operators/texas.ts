import type { Operator } from '../../types'
import texasVoice from '../voices/texas'

const texas: Operator = {
  name: 'Texas', fileNo: 'PL02', class: 'Vanguard', branch: 'Pioneer', rarity: 5, level: 70, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment', 'Pinboard Missions (Phase 8)'],
  faction: 'Penguin Logistics', position: 'Melee', race: 'Lupo', gender: 'Female', birthplace: 'Columbia',
  birthday: 'June 1st', height: '161 cm', combatExp: '3 years', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: '幻象黑兔',
  cv: { JP: 'Azusa Tadokoro', CN: 'Menglu Yang', EN: 'Jessica Preddy', KR: 'Kim Chae-ha' },
  voice: texasVoice,
  trait: 'Blocks 2 enemies',
  tags: ['DP-Recovery', 'Crowd-Control'],
  stats: { hp: 1950, atk: 570, def: 343, res: 0, block: 2, cost: 13, aspd: '1.05s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Tactical Delivery', desc: 'Gains 1 extra DP when Texas is in the squad', elite: 'E1' },
    { name: 'Tactical Delivery', desc: 'Gains 2 extra DP when Texas is in the squad', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Charge γ', icon: '/operators/texas/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Instantly gains 12 Deployment Points.', spInit: 20, sp: 35, rank: 'M3',
      levels: [
        { level: '1', desc: `Instantly gains 12 Deployment Points.`, spInit: 10, sp: 44 },
        { level: '2', desc: `Instantly gains 12 Deployment Points.`, spInit: 10, sp: 43 },
        { level: '3', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 42 },
        { level: '4', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 41 },
        { level: '5', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 40 },
        { level: '6', desc: `Instantly gains 12 Deployment Points.`, spInit: 12, sp: 39 },
        { level: '7', desc: `Instantly gains 12 Deployment Points.`, spInit: 14, sp: 38 },
        { level: 'M1', desc: `Instantly gains 12 Deployment Points.`, spInit: 16, sp: 37 },
        { level: 'M2', desc: `Instantly gains 12 Deployment Points.`, spInit: 18, sp: 36 },
        { level: 'M3', desc: `Instantly gains 12 Deployment Points.`, spInit: 20, sp: 35 },
      ],
    },
    {
      name: 'Sword Rain', icon: '/operators/texas/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately gains 12 DP; Deals 170% ATK as Arts damage twice to all nearby enemies and Stuns them for 3 seconds', spInit: 30, sp: 40, rank: 'M3',
      range: [[0, 0, 1, 0, 0], [0, 1, 1, 1, 0], [1, 1, 2, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0]],
      levels: [
        { level: '1', desc: `Immediately gains 9 DP; Deals 105% ATK as Arts damage twice to all nearby enemies and Stuns them for 2 seconds`, spInit: 20, sp: 40 },
        { level: '2', desc: `Immediately gains 9 DP; Deals 110% ATK as Arts damage twice to all nearby enemies and Stuns them for 2 seconds`, spInit: 21, sp: 40 },
        { level: '3', desc: `Immediately gains 9 DP; Deals 115% ATK as Arts damage twice to all nearby enemies and Stuns them for 2 seconds`, spInit: 22, sp: 40 },
        { level: '4', desc: `Immediately gains 10 DP; Deals 120% ATK as Arts damage twice to all nearby enemies and Stuns them for 2 seconds`, spInit: 23, sp: 40 },
        { level: '5', desc: `Immediately gains 10 DP; Deals 125% ATK as Arts damage twice to all nearby enemies and Stuns them for 2 seconds`, spInit: 24, sp: 40 },
        { level: '6', desc: `Immediately gains 10 DP; Deals 130% ATK as Arts damage twice to all nearby enemies and Stuns them for 2 seconds`, spInit: 25, sp: 40 },
        { level: '7', desc: `Immediately gains 11 DP; Deals 135% ATK as Arts damage twice to all nearby enemies and Stuns them for 2 seconds`, spInit: 26, sp: 40 },
        { level: 'M1', desc: `Immediately gains 11 DP; Deals 140% ATK as Arts damage twice to all nearby enemies and Stuns them for 3 seconds`, spInit: 27, sp: 40 },
        { level: 'M2', desc: `Immediately gains 11 DP; Deals 155% ATK as Arts damage twice to all nearby enemies and Stuns them for 3 seconds`, spInit: 28, sp: 40 },
        { level: 'M3', desc: `Immediately gains 12 DP; Deals 170% ATK as Arts damage twice to all nearby enemies and Stuns them for 3 seconds`, spInit: 30, sp: 40 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Texas's Badge", desc: 'Appointed as Vanguard Operator to exercise Pioneer responsibilities' },
    soly: { code: 'SOL-Y', name: 'Private Field Supply Package', stages: [
      { stage: 1, hp: '+100', atk: '+35', def: '+15', effect: 'The first Deployment Cost -4' },
      { stage: 2, hp: '+130', atk: '+39', def: '+19', effect: 'While this unit is in the squad, start with 2 additional DP. Skills deal 10% more damage' },
      { stage: 3, hp: '+155', atk: '+42', def: '+22', effect: 'While this unit is in the squad, start with 2 additional DP. Skills deal 15% more damage' },
    ]},
  },
  story: `Texas, employee of Penguin Logistics, will give the squad a tactical advantage with her Originium Arts at the start of every battle.`,
  profile: `Texas is a Penguin Logistics staff member who is extraordinary skilled in single combat. She was assigned as liaison to Rhodes Island, where she assisted with many different operations.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed clear outline of internal organs without any unusual dark spot. No unusual traces of Originium particles present in her system, no signs of infection, confirming her as non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator Texas showed no symptoms of Oripathy.\n\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Texas sometimes delivers packages with Originium content, but it has not caused infection to date.` },
    { title: 'Archive File 1', content: `A taciturn messenger.\nAccording to her own account, she's not hiding anything, but just has nothing to say.\nThough she gives off the impression of preferring to be alone, she is often seen with her fellow Penguin Logistics members.` },
    { title: 'Archive File 2', content: `While Texas may be quiet, her fighting style is anything but. It's best described as tempestuous.\nAt Rhodes Island, Operators without formal training are actually the majority, but when it comes to the use of weapons, most will follow established protocols. Texas, however, doesn't.\nWhile she is a bit more reserved now, one can still see vestiges of an idea that she herself might not be aware of - her belief that the singular purpose of all weaponry is to kill.` },
    { title: 'Archive File 3', content: `Her Lupo origin, her conspicuous fur color, her notable combat style, and of course, her name, all point to her ties with the faded Texas family, a once-famous clan whose name is now forgotten to most.\nIf that's the case, Texas's past is probably astonishing beyond imagination, as indicated by the Texas name itself.\nOn one hand, even with Rhodes Island's intel network, very little is known about the family's fate. On the other hand, Texas never felt the need to elaborate her past, so there isn't a pressing need to delve into it. After all, her past may one day catch up to her, just as she predicts.` },
    { title: 'Archive File 4', content: `Although Texas never discusses her past, that's not the same as actively avoiding the topic. It's more like apathy.\nFrom the way she has adapted to her current life, it's obvious she isn't running from anything. Routine work, bickering colleagues, Lungmen, and Rhodes Island are now everything to her.\nWe could sum it up like this:\nWhen the past does catch up to her, she will face it with composure——unless it disrupts her present, then we'll witness the genuine rage inside her.` },
    { title: 'Promotion Record', content: `Texas is a handful. Even when she lets you get close, she won't spare more than a few words. It took me a long time to figure out whether we were cool or not.\nSigh. Anyone trying to be her friend is in for a reckoning.\n—Exusiai.` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/penguin-logistics.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/texas/base.png', chibiSrc: '/operators/texas/chibi.webm', illustrator: '幻象黑兔' },
    { id: 'e2', label: 'Elite 2', src: '/operators/texas/e2.png', chibiSrc: '/operators/texas/chibi.webm', illustrator: '幻象黑兔' },
    { id: 'skin1', label: 'Winter Messenger', src: '/operators/texas/skin1.png', chibiSrc: '/operators/texas/chibi-skin1.webm', illustrator: '幻象黑兔' },
    { id: 'skin2', label: 'Willpower', src: '/operators/texas/skin2.png', chibiSrc: '/operators/texas/chibi-skin2.webm', illustrator: '幻象黑兔' },
  ],
  portrait: '/operators/texas/portrait.png',
  portraitFocus: { y: -2.6, x: 61.3, zoom: 308 },
}

export default texas
