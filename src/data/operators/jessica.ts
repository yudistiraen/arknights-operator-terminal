import type { Operator } from '../../types'
import jessicaVoice from '../voices/jessica'

const jessica: Operator = {
  name: 'Jessica', fileNo: 'BS03', class: 'Sniper', branch: 'Marksman', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment', 'TR-3'],
  faction: 'Blacksteel', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Victoria',
  birthday: 'March 3rd', height: '147 cm', combatExp: '2 years', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: 'm9nokuro',
  cv: { JP: 'Ryō Hirohashi', CN: 'Hou Xiaofei (credited as "Fifi" in EN)', EN: 'Yuuki Luna (from 2023/09/05); Rebecca LaChance (until 2023/09/05)', KR: 'Kim Ha-young' },
  voice: jessicaVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS', 'Survival'],
  stats: { hp: 1320, atk: 475, def: 154, res: 0, block: 1, cost: 12, aspd: '1s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Fast Cartridge', desc: 'ASPD +6', elite: 'E1' },
    { name: 'Fast Cartridge', desc: 'ASPD +12', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Power Strike β', icon: '/operators/jessica/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'Increases the ATK of next attack to 230%', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: 'Increases the ATK of next attack to 170%', spInit: 0, sp: 5 },
        { level: '2', desc: 'Increases the ATK of next attack to 175%', spInit: 0, sp: 5 },
        { level: '3', desc: 'Increases the ATK of next attack to 180%', spInit: 0, sp: 5 },
        { level: '4', desc: 'Increases the ATK of next attack to 185%', spInit: 0, sp: 4 },
        { level: '5', desc: 'Increases the ATK of next attack to 190%', spInit: 0, sp: 4 },
        { level: '6', desc: 'Increases the ATK of next attack to 195%', spInit: 0, sp: 4 },
        { level: '7', desc: 'Increases the ATK of next attack to 200%', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Increases the ATK of next attack to 210%', spInit: 0, sp: 4 },
        { level: 'M2', desc: 'Increases the ATK of next attack to 220%', spInit: 0, sp: 4 },
        { level: 'M3', desc: 'Increases the ATK of next attack to 230%', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Smokescreen', icon: '/operators/jessica/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%; 75% chance to dodge Physical and Arts attacks', spInit: 20, sp: 40, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%; 75% chance to dodge Physical and Arts attacks', spInit: 10, sp: 50, dur: '20s' },
        { level: '2', desc: 'ATK +25%; 75% chance to dodge Physical and Arts attacks', spInit: 10, sp: 49, dur: '20s' },
        { level: '3', desc: 'ATK +30%; 75% chance to dodge Physical and Arts attacks', spInit: 10, sp: 48, dur: '20s' },
        { level: '4', desc: 'ATK +35%; 75% chance to dodge Physical and Arts attacks', spInit: 10, sp: 47, dur: '21s' },
        { level: '5', desc: 'ATK +40%; 75% chance to dodge Physical and Arts attacks', spInit: 10, sp: 46, dur: '21s' },
        { level: '6', desc: 'ATK +45%; 75% chance to dodge Physical and Arts attacks', spInit: 10, sp: 45, dur: '21s' },
        { level: '7', desc: 'ATK +50%; 75% chance to dodge Physical and Arts attacks', spInit: 15, sp: 44, dur: '22s' },
        { level: 'M1', desc: 'ATK +60%; 75% chance to dodge Physical and Arts attacks', spInit: 15, sp: 43, dur: '23s' },
        { level: 'M2', desc: 'ATK +70%; 75% chance to dodge Physical and Arts attacks', spInit: 15, sp: 42, dur: '24s' },
        { level: 'M3', desc: 'ATK +80%; 75% chance to dodge Physical and Arts attacks', spInit: 20, sp: 40, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Jessica's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    mary: { code: 'MAR-Y', name: "Jessica's Order", stages: [
      { stage: 1, atk: '+20', def: '+20', effect: 'New trait: When there are ground enemies within range, ASPD +8' },
      { stage: 2, atk: '+25', def: '+25', effect: 'Fast Cartridge improved: ASPD +14, ATK +3%' },
      { stage: 3, atk: '+30', def: '+30', effect: 'Fast Cartridge improved: ASPD +16, ATK +6%' },
    ]},
  },
  profile: `A fully enlisted Operator from Blacksteel, stationed at Rhodes Island as part of an exchange training program.`,
  story: `Jessica Brynley appears to be an insecure and anxious girl from the outside, but she is actually the youngest daughter of Raythean's CEO Bonny Brynley and an heiress of the company. To prove herself like her three talented siblings, Jessica decided to choose the hard way and joined Blacksteel as one of its operatives. Difficulties almost led to her resignation until Jessica was introduced by Liskarm to join the B.P.R.S. Following Franka's Oripathy, she followed them to Rhodes Island as part of a partnership between Blacksteel and Rhodes Island. Despite her nervousness, Jessica proves to be a competent and trustworthy combatant using her handgun.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests on this Operator show clear outlines of internal organs, with no abnormal dark spots or shadows. No unusual traces of Originium particles present in the circulatory system, no signs of infection, confirming this operator as uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Jessica showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Jessica rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `A panicky Operator dispatched from Blacksteel, Jessica is a reliable, combat-effective asset and full-time Blacksteel mercenary. But she suffers from such crippling insecurity that Vanilla, a Blacksteel apprentice, seems more dependable in battle.` },
    { title: 'Archive File 2', content: `Perhaps thanks to her timidity, Blacksteel executives would often scoop Jessica up and subject her to tests of new equipment and devices. Even after arriving at Rhodes Island, Operators would ask Jessica to demonstrate their new equipment before they'd be willing to use it.\nIn a way, it shows how naturally trustworthy Jessica is.` },
    { title: 'Archive File 3', content: `A part of Jessica's insecurity stems from selective perception.\nIn actuality, Jessica has the skills to hold at least the middle rank in an organization of any scale. In her time with Blacksteel as well as Rhodes Island, there has never been a blemish on her record.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/blacksteel.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/jessica/base.png', chibiSrc: '/operators/jessica/chibi.webm', chibiMoveSrc: '/operators/jessica/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 0.4, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'e2', label: 'Elite 2', src: '/operators/jessica/e2.png', chibiSrc: '/operators/jessica/chibi.webm', chibiMoveSrc: '/operators/jessica/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 0.4, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'skin1', label: 'Iron Block', src: '/operators/jessica/skin1.png', chibiSrc: '/operators/jessica/chibi-skin1.webm', chibiMoveSrc: '/operators/jessica/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: 0.1, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'skin2', label: 'Ash', src: '/operators/jessica/skin2.png', chibiSrc: '/operators/jessica/chibi-skin2.webm', chibiMoveSrc: '/operators/jessica/chibi-move-skin2.webm', chibiFraming: { scale: 1.35, offsetXPercent: -1.4, offsetYPercent: 0.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'skin3', label: 'Clivia', src: '/operators/jessica/skin3.png', chibiSrc: '/operators/jessica/chibi-skin3.webm', chibiMoveSrc: '/operators/jessica/chibi-move-skin3.webm', chibiFraming: { scale: 1.31, offsetXPercent: 0.4, offsetYPercent: 2.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
  ],
  portrait: '/operators/jessica/portrait.png',
  portraitFocus: { y: -2.4, x: 36.6, zoom: 319 },
}

export default jessica
