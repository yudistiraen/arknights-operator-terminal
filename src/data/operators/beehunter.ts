import type { Operator } from '../../types'

const beehunter: Operator = {
  name: 'Beehunter', fileNo: 'US10', class: 'Guard', branch: 'Fighter', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Ursus', position: 'Melee', race: 'Ursus', gender: 'Female', birthplace: 'Ursus',
  birthday: 'October 2nd', height: '163 cm', combatExp: '2 years', infectionStatus: 'Confirmed Infected by medical examination.', illustrator: 'toast',
  cv: { JP: 'Yuko Hara', CN: 'Mang Yin (credited as "Duduru" in EN)', EN: 'Emma Breezy', KR: 'Kwak Gyu-mi' },
  trait: 'Blocks 1 enemy',
  tags: ['DPS'],
  stats: { hp: 2435, atk: 573, def: 312, res: 0, block: 1, cost: 9, aspd: '0.78s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Normal' },
  talents: [
    { name: "Boxer's Concentration", desc: 'Each consecutive attack on the same target increases ATK by 3%, stacking up to 5 times. Stacks will be lost upon switching targets.', elite: 'E1' },
    { name: "Boxer's Concentration", desc: 'Each consecutive attack on the same target increases ATK by 5%, stacking up to 5 times. Stacks will be lost upon switching targets.', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Flexibility', icon: '/operators/beehunter/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: '60% chance to dodge Physical attacks', spInit: 0, sp: 0, rank: 'M3',
      levels: [
        { level: '1', desc: `20% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: '2', desc: `23% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: '3', desc: `26% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: '4', desc: `30% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: '5', desc: `33% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: '6', desc: `36% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: '7', desc: `40% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: 'M1', desc: `45% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: 'M2', desc: `50% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
        { level: 'M3', desc: `60% chance to dodge Physical attacks`, spInit: 0, sp: 0 },
      ],
    },
    {
      name: 'Soaring Fists', icon: '/operators/beehunter/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Significant Attack Interval reduction', spInit: 0, sp: 20, dur: '10s', rank: 'M3',
      note: "Soaring Fists reduces Beehunter's attack interval by 50%/50%/50%/55%/55%/55%/55%/60%/60%/60%, lowering it to 0.39/0.39/0.39/0.351/0.351/0.351/0.312/0.312/0.312 seconds (before modifiers).",
      levels: [
        { level: '1', desc: `Small Attack Interval reduction`, spInit: 0, sp: 40, dur: '10s' },
        { level: '2', desc: `Small Attack Interval reduction`, spInit: 0, sp: 39, dur: '10s' },
        { level: '3', desc: `Small Attack Interval reduction`, spInit: 0, sp: 38, dur: '10s' },
        { level: '4', desc: `Moderate Attack Interval reduction`, spInit: 0, sp: 35, dur: '10s' },
        { level: '5', desc: `Moderate Attack Interval reduction`, spInit: 0, sp: 34, dur: '10s' },
        { level: '6', desc: `Moderate Attack Interval reduction`, spInit: 0, sp: 33, dur: '10s' },
        { level: '7', desc: `Moderate Attack Interval reduction`, spInit: 0, sp: 30, dur: '10s' },
        { level: 'M1', desc: `Significant Attack Interval reduction`, spInit: 0, sp: 27, dur: '10s' },
        { level: 'M2', desc: `Significant Attack Interval reduction`, spInit: 0, sp: 24, dur: '10s' },
        { level: 'M3', desc: `Significant Attack Interval reduction`, spInit: 0, sp: 20, dur: '10s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Beehunter's Badge", desc: 'Appointed as Guard Operator to exercise Fighter responsibilities' },
    fgty: { code: 'FGT-Y', name: 'Strong Jaw', stages: [
      { stage: 1, hp: '+120', atk: '+30', effect: 'New trait: Blocks 1 enemy; Gains +10 ASPD when above 50% HP' },
      { stage: 2, hp: '+145', atk: '+40', effect: "Boxer's Concentration improved: Each consecutive attack on the same target increases ATK by 6%, stacking up to 5 times. Stacks will be lost upon switching targets" },
      { stage: 3, hp: '+170', atk: '+45', effect: "Boxer's Concentration improved: Each consecutive attack on the same target increases ATK by 7%, stacking up to 5 times. Stacks will be lost upon switching targets" },
    ]},
  },
  story: `The Ursus Shura Olav was raised by a boxing coach who saw her potential as a fistfighter. To fund her guardian's medical fees, Shura participated in underground boxing ring matches in Chernobog and almost became the champion had she not contracted Oripathy caused by her would-be opponent Yevgeny. In addition, the Reunion uprising caused the scene to break up. Since then, Shura initially worked as a bodyguard for Rhodes Island, but after encountering Yevgeny by accident and settling the score with him, she formally joined R.I. under the codename "Beehunter," taking the fight towards anyone who opposes her with her swift hooks and jabs.`,
  profile: `Former Ursus underground fighter, Beehunter joined Rhodes Island after the scene broke up.\nNow a guard who loves to show off her destructive prowess.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 1%\nSurveillance is recommended for rare cases like this.\n\n[Blood Originium-Crystal Density] 0.14u/L\nMinor infection currently showing no sign of spreading.` },
    { title: 'Archive File 1', content: `A freeform fighter.\nShe's the simple, easily fulfilled eat-sleep-repeat type.\nShe enjoys dried fish and honey. So much so, that if offered a compensation package with only those two items, she would actually mull it over.` },
    { title: 'Archive File 2', content: `Since her underground fighting circuit broke up and everyone involved went into hiding, Rhodes Island has had a hard time gathering records of her past.\nBeehunter doesn't remember her own childhood well. All she knows for certain is she's been making a living off underground fights since a very young age.\nHer ideals come from the underground fighting lifestyle: Live simply, be rude when you have to, solve problems with your fists, and live in the moment.` },
    { title: 'Archive File 3', content: `There are no rules in underground fights. Winning is all that matters.\nWhen fighting one-on-one, Beehunter can beat most opponents on talent alone.\nHowever, on the battlefield, we rarely have the luxury of a one-on-one fight. Certainly not one with no interference. In short, Beehunter's skillset is not well suited to Rhodes Island's work.` },
    { title: 'Archive File 4', content: `But Rhodes Island doesn't turn down such talent due to combat capabilities alone. Beehunter's... simplicity left her drill instructor baffled during her onboarding.\nIn the end, we decided to focus on her strengths: Take her opponents one at a time and knock them down as fast as possible.\nShe quite likes this tactic because she doesn't need to think. Still, she does need to learn to observe the flow of battle.` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/fighter-branch.png', factionIcon: '/icons/factions/ursus.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/beehunter/base.png', chibiSrc: '/operators/beehunter/chibi.webm', illustrator: 'toast' },
    { id: 'e2', label: 'Elite 2', src: '/operators/beehunter/e2.png', chibiSrc: '/operators/beehunter/chibi.webm', illustrator: 'toast' },
    { id: 'skin1', label: 'Honey Pilferer', src: '/operators/beehunter/skin1.png', chibiSrc: '/operators/beehunter/chibi-skin1.webm', illustrator: 'toast' },
  ],
  portrait: '/operators/beehunter/portrait.png',
  portraitFocus: { y: -7.1, x: 47.2, zoom: 314 },
}

export default beehunter
