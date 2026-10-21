import type { Operator } from '../../types'
import hazeVoice from '../voices/haze'

const haze: Operator = {
  name: 'Haze', fileNo: 'VC02', class: 'Caster', branch: 'Core Caster', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Victoria', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Victoria',
  birthday: 'January 2nd', height: '158 cm', combatExp: 'Half a year', infectionStatus: 'Infection confirmed by medical examination.', illustrator: 'Skade',
  cv: { JP: 'Ru Thing', CN: 'Ke Zhong', EN: 'Ratana', KR: 'Lee Seul' },
  voice: hazeVoice,
  trait: 'Deals Arts damage',
  tags: ['DPS', 'Debuff'],
  stats: { hp: 1420, atk: 583, def: 110, res: 20, block: 1, cost: 19, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [[1,1,1],[2,1,1],[1,1,1]],
    e1: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Black Mist', desc: "Attacks reduce the target's RES by 10% for 1 second", elite: 'E1' },
    { name: 'Black Mist', desc: "Attacks reduce the target's RES by 13% (+3%) for 1 second", elite: 'E1 (Potential 5)' },
    { name: 'Black Mist', desc: "Attacks reduce the target's RES by 20% for 1 second", elite: 'E2' },
    { name: 'Black Mist', desc: "Attacks reduce the target's RES by 23% (+3%) for 1 second", elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'ATK Up β', icon: '/operators/haze/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%', spInit: 0, sp: 40, dur: '25s' },
        { level: '2', desc: 'ATK +25%', spInit: 0, sp: 40, dur: '25s' },
        { level: '3', desc: 'ATK +30%', spInit: 0, sp: 40, dur: '25s' },
        { level: '4', desc: 'ATK +35%', spInit: 0, sp: 37, dur: '25s' },
        { level: '5', desc: 'ATK +40%', spInit: 0, sp: 37, dur: '25s' },
        { level: '6', desc: 'ATK +45%', spInit: 0, sp: 37, dur: '25s' },
        { level: '7', desc: 'ATK +50%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M1', desc: 'ATK +60%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M2', desc: 'ATK +70%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M3', desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Crimson Eyes', icon: '/operators/haze/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Max HP -75%; ATK +60%; ASPD +60', spInit: 0, sp: 25, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Max HP -75%; ATK +15%; ASPD +35', spInit: 0, sp: 35, dur: '25s' },
        { level: '2', desc: 'Max HP -75%; ATK +20%; ASPD +35', spInit: 0, sp: 35, dur: '25s' },
        { level: '3', desc: 'Max HP -75%; ATK +25%; ASPD +35', spInit: 0, sp: 35, dur: '25s' },
        { level: '4', desc: 'Max HP -75%; ATK +30%; ASPD +40', spInit: 0, sp: 35, dur: '25s' },
        { level: '5', desc: 'Max HP -75%; ATK +35%; ASPD +40', spInit: 0, sp: 35, dur: '25s' },
        { level: '6', desc: 'Max HP -75%; ATK +40%; ASPD +40', spInit: 0, sp: 35, dur: '25s' },
        { level: '7', desc: 'Max HP -75%; ATK +45%; ASPD +45', spInit: 0, sp: 30, dur: '25s' },
        { level: 'M1', desc: 'Max HP -75%; ATK +50%; ASPD +50', spInit: 0, sp: 30, dur: '25s' },
        { level: 'M2', desc: 'Max HP -75%; ATK +55%; ASPD +55', spInit: 0, sp: 30, dur: '25s' },
        { level: 'M3', desc: 'Max HP -75%; ATK +60%; ASPD +60', spInit: 0, sp: 25, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Haze's Badge", desc: 'Appointed as Caster Operator to exercise Core Caster responsibilities' },
    ccrx: { code: 'CCR-X', name: "The Witch's Hat", stages: [
      { stage: 1, atk: '+20', def: '+15', effect: "New trait: Ignore 10 of target's RES" },
      { stage: 2, atk: '+30', def: '+20', effect: "Black Mist improved: Attacks reduce the target's RES by 24% for 1 second" },
      { stage: 3, atk: '+40', def: '+25', effect: "Black Mist improved: Attacks reduce the target's RES by 27% for 1 second" },
    ]},
  },
  profile: `Haze is an Operator from Victoria, where she did time in an Infected quarantine lockup. She finally escaped after multiple attempts, eventually joining Rhodes Island under an alias.`,
  story: `Haze is the 113th and only surviving member of the Witch Forest, a coven of Victorian casters which was destroyed when their headquarters were bombarded by the Victorian army. She has since become a wandering vigilante who escaped from quarantine facilities at least seventeen times and helped others in need, especially the other Infected, as dedicated by the Witches' code. As her Oripathy entered its later stages, Haze settled in Caladon to burn out her remaining time in a blaze of glory, but after a coincidental meeting with Susie Glitter (Goldenglow) and helping her out, she was taken into Rhodes Island for further treatment in exchange for lending her service as one of their casters.\n\nAs the last witch of the Witch Forest, Haze shows impressive aptitude in Originium Arts, with her signature ability allowing her to create a dark fog that disorients her enemies and making them more susceptible to her Arts.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n[Cell-Originium Assimilation] 16%\nNo visible signs of crystal formation, but comparatively worse internal contamination.\n[Blood Originium-Crystal Density] 0.36u/L\nInfection entering mid-stage, crystals are starting to enhance the host's Originium abilities.` },
    { title: 'Archive File 1', content: `Haze is able to cast Dark Fog Arts, a spell unique to her. The versatile mist can obscure vision, damage, kill, or enhance Haze's own abilities.` },
    { title: 'Archive File 2', content: `Haze has a habit of palming things from those around her. While she never steals money or keys, no trifling trinkets are safe with her around. Such trivial thievery wouldn't normally get anyone in serious trouble, but upon getting picked up for a minor infraction, her infection was discovered, so the authorities dumped her into a cell for the Infected.` },
    { title: 'Archive File 3', content: `Her prison was especially built to hold Infected criminals. To break out and breathe free once more, she had to climb the towering quarantine wall and evade all security measures in between. Haze is the only one to have managed such a feat, with the Victorian Police still hunting her to this day.` },
    { title: 'Archive File 4', content: `Haze makes no secret of her fondness for feline creatures. Even though these same cute animals led to her infection, she still feeds and cares for them. So it's no surprise Haze gets along with other Felines like Mousse.` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/core-caster-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/haze/base.png', chibiSrc: '/operators/haze/chibi.webm', chibiMoveSrc: '/operators/haze/chibi-move.webm', chibiFraming: { scale: 1.32, offsetXPercent: -2.3, offsetYPercent: 4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/haze/e2.png', chibiSrc: '/operators/haze/chibi.webm', chibiMoveSrc: '/operators/haze/chibi-move.webm', chibiFraming: { scale: 1.32, offsetXPercent: -2.3, offsetYPercent: 4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'skin1', label: 'The Nursing Home Creepshow', src: '/operators/haze/skin1.png', chibiSrc: '/operators/haze/chibi-skin1.webm', chibiMoveSrc: '/operators/haze/chibi-move-skin1.webm', chibiFraming: { scale: 1.32, offsetXPercent: 1.3, offsetYPercent: 3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '水滴鱼' },
  ],
  portrait: '/operators/haze/portrait.png',
  portraitFocus: { y: -6, x: 55.6, zoom: 254 },
}

export default haze
