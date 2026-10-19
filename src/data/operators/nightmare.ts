import type { Operator } from '../../types'
import nightmareVoice from '../voices/nightmare'

const nightmare: Operator = {
  name: 'Nightmare', fileNo: 'VC03', class: 'Caster', branch: 'Core Caster', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Victoria', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Victoria',
  birthday: 'June 1st', height: '156 cm', combatExp: '6 months', infectionStatus: 'Infected', illustrator: 'Lpip',
  cv: { JP: 'Rie Takahashi', CN: 'Zhang Hong', EN: 'Triya Leong', KR: 'Lee Sae-ah' },
  voice: nightmareVoice,
  trait: 'Deals Arts damage',
  tags: ['DPS', 'Healing', 'Slow'],
  stats: { hp: 1510, atk: 622, def: 120, res: 20, block: 1, cost: 20, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [[1,1,1],[2,1,1],[1,1,1]],
    e1: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Dual Personality', desc: 'Obtains 40% Physical and Arts Dodge when equipped with skill 1; Obtains 15% ATK when equipped with skill 2', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Drain Soul', icon: '/operators/nightmare/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Each attack restores the HP of at most 2 allies by 100% of ATK', spInit: 50, sp: 80, dur: '60s', rank: 'M3',
      note: 'Drain Soul can heal friendly units with full HP.',
      levels: [
        { level: '1', desc: 'Each attack restores the HP of at most 1 allies by 40% of damage dealt to enemies', spInit: 30, sp: 80, dur: '60s' },
        { level: '2', desc: 'Each attack restores the HP of at most 1 allies by 45% of damage dealt to enemies', spInit: 30, sp: 80, dur: '60s' },
        { level: '3', desc: 'Each attack restores the HP of at most 1 allies by 50% of damage dealt to enemies', spInit: 30, sp: 80, dur: '60s' },
        { level: '4', desc: 'Each attack restores the HP of at most 1 allies by 55% of damage dealt to enemies', spInit: 35, sp: 80, dur: '60s' },
        { level: '5', desc: 'Each attack restores the HP of at most 1 allies by 60% of damage dealt to enemies', spInit: 35, sp: 80, dur: '60s' },
        { level: '6', desc: 'Each attack restores the HP of at most 1 allies by 65% of damage dealt to enemies', spInit: 35, sp: 80, dur: '60s' },
        { level: '7', desc: 'Each attack restores the HP of at most 1 allies by 70% of damage dealt to enemies', spInit: 40, sp: 80, dur: '60s' },
        { level: 'M1', desc: 'Each attack restores the HP of at most 2 allies by 80% of damage dealt to enemies', spInit: 43, sp: 80, dur: '60s' },
        { level: 'M2', desc: 'Each attack restores the HP of at most 2 allies by 90% of damage dealt to enemies', spInit: 46, sp: 80, dur: '60s' },
        { level: 'M3', desc: 'Each attack restores the HP of at most 2 allies by 100% of damage dealt to enemies', spInit: 50, sp: 80, dur: '60s' },
      ],
    },
    {
      name: 'Night Phantom', icon: '/operators/nightmare/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Applies the Nightmare effect to up to 5 enemies within range: Decreases the Movement Speed of affected enemies by -60% for 10 seconds, and makes them suffer True damage proportional to the distance they move during this effect', spInit: 0, sp: 20, rank: 'M3',
      note: 'Night Phantom prioritizes aerial enemies over ground ones.',
      levels: [
        { level: '1', desc: `Applies the Nightmare effect to up to 3 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 5 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 30 },
        { level: '2', desc: `Applies the Nightmare effect to up to 3 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 5 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 29 },
        { level: '3', desc: `Applies the Nightmare effect to up to 3 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 5 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 28 },
        { level: '4', desc: `Applies the Nightmare effect to up to 3 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 6 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 27 },
        { level: '5', desc: `Applies the Nightmare effect to up to 3 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 6 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 26 },
        { level: '6', desc: `Applies the Nightmare effect to up to 3 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 6 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 25 },
        { level: '7', desc: `Applies the Nightmare effect to up to 3 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 7 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 24 },
        { level: 'M1', desc: `Applies the Nightmare effect to up to 4 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 8 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 23 },
        { level: 'M2', desc: `Applies the Nightmare effect to up to 4 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 9 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 22 },
        { level: 'M3', desc: `Applies the Nightmare effect to up to 5 enemies within range:\nDecreases the Movement Speed of affected enemies by -60% for 10 seconds, and makes them suffer True damage proportional to the distance they move during this effect`, spInit: 0, sp: 20 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Nightmare's Badge", desc: 'Appointed as Caster Operator to exercise Core Caster responsibilities' },
    ccry: { code: 'CCR-Y', name: 'The Double', stages: [
      { stage: 1, atk: '+30', aspd: '+3', effect: 'New trait: Gain 1 SP when normal attacks hit an elite or leader enemy.' },
      { stage: 2, atk: '+40', aspd: '+4', effect: 'Dual Personality improved: Obtains 45% Physical and Arts Dodge when equipped with skill 1; Obtains 18% ATK when equipped with skill 2' },
      { stage: 3, atk: '+50', aspd: '+5', effect: 'Dual Personality improved: Obtains 50% Physical and Arts Dodge when equipped with skill 1; Obtains 20% ATK when equipped with skill 2' },
    ]},
  },
  story: `[Gloria]\nAttempting to analyze Gloria is a long and difficult process ("Gloria," her real name, is used in this report at her own request). In many therapy sessions, she clearly felt anxiety and panic, refusing to answer any questions in one session, leaving communication at a standstill. Using flowers and aromatherapy to relax her has been extremely effective thus far. After she understood the significance of her treatment and that none of the content of her sessions would be made public, her true meek nature gradually started to show.`,
  profile: 'A Victorian medical student whose Oripathy infection split her mind in two: the meek, gentle Gloria and the aggressive, combat-capable "Nightmare." Rhodes Island has yet to reconcile the two personalities into one.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 16%\nSurveillance is recommended for rare cases like this.\n\n[Blood Originium-Crystal Density] 0.33u/L\nInfection is in mid-stage and continues to spread. First-level medical plan recommended. Pathological Monitoring Protocol Label: Red (signed by Dr. Kal'tsit, see medical file for more detail).` },
    { title: 'Archive File 2', content: `[Gloria's Background]\nGloria was born in a small, artsy city in Victoria. Her mother worked at the local hospital. Gloria did not show interest in Originium until middle school. Although she has shown a unique talent for it in her tests at Rhodes Island, she still does not want to deal with it.\nGloria worked hard to become a medical student, either due to her mother's expectation or her own desire. However, her infection disrupted her future plans. Today, Gloria is still unable to recall how she got infected (it is worth noting her sessions all alluded to an alternate personality, "Nightmare," and it seemed only "Nightmare" could recall how it happened).\nAccording to our intel, Gloria had at least six months of combat experience before joining Rhodes Island. Her militant "Nightmare" personality seems to be the one behind the stint.` },
    { title: 'Archive File 3', content: `[Gloria's Arts and Staff]\nBecause of her studies on the medical application of Originium and her experiences as an infected, she can use medical arts to heal her teammates while also adept at combat arts. Her ability to do many types of arts is the basis for her role at Rhodes Island.\nAccording to Gloria's own account, the staff her father left her has its own power. A number of tests done by warlock Operators has found the staff can increase the effectiveness of healing arts, but they must be performed in a manner similar to hypnosis. Feedback from test subjects also indicated they almost always dreamed in this hypnotized state.` },
    { title: 'Archive File 4', content: `[Gloria and Nightmare]\nIt is not unusual for Oripathy to cause Multiple Personality Disorder, but Gloria, who is currently on a conservative treatment plan, is different from other Operators in stable condition. Her condition has a major hurdle: In moments where Gloria loses control, the very aggressive Nightmare takes over.\nHowever, studies have indicated that Nightmare is the dominant personality and is very much awake inside Gloria. They have even seen Nightmare trying to regain control over her body.\nThe medical team was unable to assimilate Gloria and Nightmare into one personality despite counseling.\nNote: Dr. Kal'tsit made this statement about Gloria:\n"Integrating her personalities is her only option."\nHowever, she did not specify which personality would become dominant after assimilation.` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/core-caster-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/nightmare/base.png', chibiSrc: '/operators/nightmare/chibi.webm', illustrator: 'Lpip' },
    { id: 'e2', label: 'Elite 2', src: '/operators/nightmare/e2.png', chibiSrc: '/operators/nightmare/chibi.webm', illustrator: 'Lpip' },
    { id: 'skin1', label: 'Light and Shadow', src: '/operators/nightmare/skin1.png', chibiSrc: '/operators/nightmare/chibi-skin1.webm', illustrator: 'Lpip' },
    { id: 'skin2', label: 'The Ferry Girl', src: '/operators/nightmare/skin2.png', chibiSrc: '/operators/nightmare/chibi-skin2.webm', illustrator: 'Yukuso' },
  ],
  portrait: '/operators/nightmare/portrait.png',
  portraitFocus: { y: -0.8, x: 61.5, zoom: 266 },
}

export default nightmare
