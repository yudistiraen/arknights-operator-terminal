import type { Operator } from '../../types'
import greyyVoice from '../voices/greyy'

const greyy: Operator = {
  name: 'Greyy', fileNo: 'R119', class: 'Caster', branch: 'Splash Caster', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Bolívar', position: 'Ranged', race: 'Perro', gender: 'Male', birthplace: 'Bolívar',
  birthday: 'June 6th', height: '163 cm', combatExp: 'None', infectionStatus: 'Crystals visible on surface, infection confirmed by medical report.', illustrator: '我妻洛酱',
  cv: { JP: 'Mai Fuchigami', CN: 'Z-kun (credited as "Z" in EN)', EN: 'Maihan', KR: 'So Yeon' },
  voice: greyyVoice,
  trait: 'Deals AOE Arts damage',
  tags: ['AoE', 'Slow'],
  stats: { hp: 1537, atk: 699, def: 130, res: 20, block: 1, cost: 32, aspd: '2.9s', rdp: '70s' },
  range: {
    base: [[1,1,0],[2,1,1],[1,1,0]],
    e1: [[1,1,1],[2,1,1],[1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Electrostatic Field', desc: 'Slows the target for 0.4 seconds when attacking', elite: 'E1' },
    { name: 'Electrostatic Field', desc: 'Slows the target for 0.6 seconds when attacking', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Tactical Chant β', icon: '/operators/greyy/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ASPD +75', spInit: 10, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ASPD +15', spInit: 0, sp: 45, dur: '25s' },
        { level: '2', desc: 'ASPD +20', spInit: 0, sp: 45, dur: '25s' },
        { level: '3', desc: 'ASPD +25', spInit: 0, sp: 45, dur: '25s' },
        { level: '4', desc: 'ASPD +30', spInit: 0, sp: 40, dur: '25s' },
        { level: '5', desc: 'ASPD +35', spInit: 0, sp: 40, dur: '25s' },
        { level: '6', desc: 'ASPD +40', spInit: 0, sp: 40, dur: '25s' },
        { level: '7', desc: 'ASPD +45', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M1', desc: 'ASPD +55', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M2', desc: 'ASPD +65', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M3', desc: 'ASPD +75', spInit: 10, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Electrostatic Discharge', icon: '/operators/greyy/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "ASPD +80. The duration of the Talent's Slow increases to 2.0 times", spInit: 0, sp: 60, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: "ASPD +35. The duration of the Talent's Slow increases to 1.5 times", spInit: 0, sp: 60, dur: '20s' },
        { level: '2', desc: "ASPD +40. The duration of the Talent's Slow increases to 1.5 times", spInit: 0, sp: 60, dur: '21s' },
        { level: '3', desc: "ASPD +45. The duration of the Talent's Slow increases to 1.5 times", spInit: 0, sp: 60, dur: '22s' },
        { level: '4', desc: "ASPD +50. The duration of the Talent's Slow increases to 1.6 times", spInit: 0, sp: 60, dur: '23s' },
        { level: '5', desc: "ASPD +55. The duration of the Talent's Slow increases to 1.6 times", spInit: 0, sp: 60, dur: '24s' },
        { level: '6', desc: "ASPD +60. The duration of the Talent's Slow increases to 1.6 times", spInit: 0, sp: 60, dur: '25s' },
        { level: '7', desc: "ASPD +65. The duration of the Talent's Slow increases to 1.7 times", spInit: 0, sp: 60, dur: '26s' },
        { level: 'M1', desc: "ASPD +70. The duration of the Talent's Slow increases to 1.8 times", spInit: 0, sp: 60, dur: '27s' },
        { level: 'M2', desc: "ASPD +75. The duration of the Talent's Slow increases to 1.9 times", spInit: 0, sp: 60, dur: '28s' },
        { level: 'M3', desc: "ASPD +80. The duration of the Talent's Slow increases to 2.0 times", spInit: 0, sp: 60, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Greyy's Badge", desc: 'Appointed as Caster Operator to exercise Splash Caster responsibilities' },
    spcy: { code: 'SPC-Y', name: 'New Beginning', stages: [
      { stage: 1, hp: '+75', aspd: '+3', effect: 'Cost -8; New trait: Reduces Deployment Cost' },
      { stage: 2, hp: '+135', aspd: '+4', effect: 'Cost -8; Electrostatic Field improved: Slows the target for 0.8 seconds when attacking' },
      { stage: 3, hp: '+170', aspd: '+5', effect: 'Cost -8; Electrostatic Field improved: Slows the target for 1 second when attacking' },
    ]},
  },
  profile: `Greyy, approved for entry into Rhodes Island after passing a battery of exams, has great potential for the Arts.\nCurrently serving Rhodes Island as a Caster, working primarily in power supply maintenance.`,
  story: `A young Bolívarian Perro whose mother once worked for Volvort Kochinski as an electronics engineer, Greyy learned Arts from his mother with the desire to provide a power source to overcome power outages and his family's poverty. However, his father was arrested after an accident, and both his parents' whereabouts are currently unknown. Greyy has since joined Rhodes Island, where he is responsible for maintaining power supplies.\n\nAfter years of training under Mechanist, Greyy became a member of the Engineering Department, specializing in R&D and the application of new technologies, as well as participating in combat and technology testing whenever necessary. He has also developed a workaholic attitude, much to the concern of Mechanist and his R.I. colleagues. It is noted that after the mission related to Rhine Lab, both Greyy and Mechanist became somewhat depressed after learning about the Arts conductor that Dorothy and Ferdinand Clooney had a hand in developing.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests on this operator revealed only blurry outlines of internal organs with visible unusual dark spots. An abnormally high concentration of Originium particles are present in his circulatory system, with other signs of infection confirming him as Infected at this stage.\n[Cell-Originium Assimilation] 7.2%\nNo major symptoms of Oripathy have appeared the surface of the body, but testing revealed internal crystallization.\n[Blood Originium-Crystal Density] 0.3u/L\nAs the Infection is reproduced within the internal organs, the Originium content of the circulatory system is rather high.` },
    { title: 'Archive File 1', content: `Greyy was born in a city in Bolívar. His father was an unskilled worker and his mother worked in a care home. Both of them were in poor health. With both parents earning very little, the family barely made ends meet.\nGreyy's childhood was much different from that of his peers. He is introverted and practical like his father, and he is physically weak like his mother. However, Greyy has a knack for Arts. He would have had a promising career on the back of his talent, would that he didn't get infected.` },
    { title: 'Archive File 2', content: `Greyy is decently skilled in the use of electricity and Originium. By quickly increasing the voltage of an operating unit, he can make the positive and negative ions collide and create energy.\nHe learned about Originium from his mother, though he is unsure why an ordinary person like her would have had such a detailed knowledge of Arts.\nHe lived in a slum that suffered from regular blackouts. Because of this, Greyy decided to collect discarded Originium fragments near a smelting plant. He focused their energy into his staff to create a temporary light source.\nThe staff, of course, was also made using repurposed materials.` },
    { title: 'Archive File 3', content: `Greyy lost his family, so joining Rhodes Island has an extra special meaning for him. His mastery of electrical energy Arts got him a job maintaining the generators at Rhodes Island.\nGreyy is honest, quiet, deferential and always grateful that he gets to be of help to Rhodes Island.\nPerros are known for their loyalty. Even unlucky Perros who are infected, like Greyy, will cherish any companions who share the same difficult and lonely path.` },
    { title: 'Archive File 4', content: `[Classified Log]\nInformation about the whereabouts of Greyy's parents has not yet been obtained. Perhaps they have passed away. Perhaps they have been taken into quarantine. After all, his parents were both infected, so it is safe to say he probably caught the infection from them. In any case, it is imperative we help him adapt to life at Rhodes Island. Even if kids his age are aware of the fate of their loved ones, learning the truth can have a negative impact on their mental state. Taking care of these children, guiding them, and changing their destiny is your responsibility, Doctor. Certainly, your duties aren't easy. Sometimes even I think the load is too heavy for you to bear. But don't children like Greyy make you believe there's still hope?` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/splash-caster-branch.png', factionIcon: '/icons/factions/bolivar.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/greyy/base.png', chibiSrc: '/operators/greyy/chibi.webm', chibiMoveSrc: '/operators/greyy/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 2.7, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '我妻洛酱' },
    { id: 'e2', label: 'Elite 2', src: '/operators/greyy/e2.png', chibiSrc: '/operators/greyy/chibi.webm', chibiMoveSrc: '/operators/greyy/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 2.7, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '我妻洛酱' },
    { id: 'skin1', label: 'Eggcellent Craftsman', src: '/operators/greyy/skin1.png', chibiSrc: '/operators/greyy/chibi.webm', illustrator: '我妻洛酱' },
    { id: 'skin2', label: 'My Fellow Newsboy', src: '/operators/greyy/skin2.png', chibiSrc: '/operators/greyy/chibi-skin2.webm', chibiMoveSrc: '/operators/greyy/chibi-move-skin2.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.7, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '我妻洛酱' },
  ],
  portrait: '/operators/greyy/portrait.png',
  portraitFocus: { y: -3.9, x: 43.7, zoom: 287 },
}

export default greyy
