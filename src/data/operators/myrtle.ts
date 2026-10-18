import type { Operator } from '../../types'

const myrtle: Operator = {
  name: 'Myrtle', fileNo: 'R108', class: 'Vanguard', branch: 'Standard Bearer', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Durin', gender: 'Female', birthplace: 'Unknown',
  birthday: 'December 13th', height: '131 cm', combatExp: 'None', infectionStatus: 'Non-infected', illustrator: '咩煲',
  cv: { JP: 'Shino Shimoji', CN: 'Gin', EN: 'Hollie Taylor', KR: 'Chung Yu-joung' },
  trait: 'Cannot block enemies during the skill duration',
  tags: ['DP-Recovery', 'Healing'],
  stats: { hp: 1565, atk: 520, def: 300, res: 0, block: 1, cost: 10, aspd: '1.3s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Glistening', desc: 'All [Vanguard] Operators recover 25 HP per second while Myrtle is deployed', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Support β', icon: '/operators/myrtle/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 13, sp: 22, dur: '8s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 8, sp: 31, dur: '8s' },
        { level: '2', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 8, sp: 30, dur: '8s' },
        { level: '3', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 8, sp: 29, dur: '8s' },
        { level: '4', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 9, sp: 28, dur: '8s' },
        { level: '5', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 9, sp: 27, dur: '8s' },
        { level: '6', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 9, sp: 26, dur: '8s' },
        { level: '7', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 10, sp: 25, dur: '8s' },
        { level: 'M1', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 11, sp: 24, dur: '8s' },
        { level: 'M2', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 12, sp: 23, dur: '8s' },
        { level: 'M3', desc: 'Stops attacking and recovers 14 DP over the skill duration', spInit: 13, sp: 22, dur: '8s' },
      ],
    },
    {
      name: 'Healing Wings', icon: '/operators/myrtle/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 50% of Myrtle's ATK", spInit: 10, sp: 24, dur: '16s', rank: 'M3',
      note: 'Healing Wings causes Myrtle to heal one friendly unit within range every second equal to the corresponding amount while it is active.',
      levels: [
        { level: '1', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 25% of Myrtle's ATK`, spInit: 5, sp: 35, dur: '16s' },
        { level: '2', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 25% of Myrtle's ATK`, spInit: 5, sp: 34, dur: '16s' },
        { level: '3', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 25% of Myrtle's ATK`, spInit: 5, sp: 33, dur: '16s' },
        { level: '4', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 30% of Myrtle's ATK`, spInit: 6, sp: 31, dur: '16s' },
        { level: '5', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 30% of Myrtle's ATK`, spInit: 6, sp: 30, dur: '16s' },
        { level: '6', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 30% of Myrtle's ATK`, spInit: 6, sp: 29, dur: '16s' },
        { level: '7', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 35% of Myrtle's ATK`, spInit: 7, sp: 27, dur: '16s' },
        { level: 'M1', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 40% of Myrtle's ATK`, spInit: 8, sp: 26, dur: '16s' },
        { level: 'M2', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 45% of Myrtle's ATK`, spInit: 9, sp: 25, dur: '16s' },
        { level: 'M3', desc: `Stops attacking and recovers 16 DP over the skill duration, healing a nearby friendly unit's HP equal to 50% of Myrtle's ATK`, spInit: 10, sp: 24, dur: '16s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Myrtle's Badge", desc: 'Appointed as Vanguard Operator to exercise Standard Bearer responsibilities' },
    beax: { code: 'BEA-X', name: 'Private Collections', stages: [
      { stage: 1, hp: '+100', def: '+23', effect: 'Trait improved: Cannot block enemies during the skill duration, but grants +1 Block to an Operator in front of this unit' },
      { stage: 2, hp: '+130', def: '+30', effect: 'Glistening improved: All Vanguard Operators recover 28 HP per second while this unit is deployed' },
      { stage: 3, hp: '+150', def: '+35', effect: 'Glistening improved: All Vanguard Operators recover 30 HP per second while this unit is deployed' },
    ]},
  },
  story: `This Durin girl is full of energy.\nBecause she previously lived only underground, she is very curious about the world up here.\nShe likes group operations and likes to be where everyone else is. Some of the older operators show a deep fondness for her.`,
  profile: 'A cheerful, curious Durin who left the underground world for a new life and somehow talked her way into becoming a Rhodes Island operator. Beloved by the veterans for her energy and surprisingly reliable command presence in the field.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nMyrtle shows no signs of Oripathy infection.\n\n[Blood Originium-Crystal Density] 0.12u/L\nMyrtle very rarely comes into contact with Originium.\n\nMyrtle's physical examination indicators are all standard.` },
    { title: 'Archive File 2', content: `Durin brought Myrtle back to the base one day, completely unannounced. According to Durin, she suddenly felt a burst of "inspiration" while she was sleeping. She went out for a walk and found Myrtle.\nRegardless of whatever it was that inspired Durin, Myrtle's proved to be a fully capable Rhodes Island operator. She had also expressed a desire to find work. Thus, through means no one quite understood, Rhodes Island added a new operator to our ranks.\nIn addition, the reason Myrtle left her homeland is similar to that of many of the Durins who come above ground - she was simply looking for a new life.` },
    { title: 'Archive File 3', content: `Somewhat regrettably, Myrtle's induction into Rhodes Island has not yet resulted in any greater understanding of the underground world.\nIn fact, despite the many Durin who have come up from the underground world, their descriptions have never given us any real impression of what it's like down there.\nPerhaps the underground world is too large.\nAnyway, the addition of Myrtle is not without its benefits. At the very least, she has reversed everyone's impressions of the Durin people. After all, up until now, Durin had let us believe that most Durins are lazy and sleep all the time.` },
    { title: 'Archive File 4', content: `The most noteworthy thing about Miss Myrtle is the apple that she always carries in her hand. While it may appear to be an ordinary apple at first glance, her combat style reveals that it is much more than that.\nAfter soliciting my advice for their studies, Rhodes Island researchers were surprised to find extremely complex but precise structures inside the apple that can transform to most efficiently release Miss Myrtle's powers.\nThis design is becoming more popular as a form of expression, conceptually similar to how Casters will channel their Arts through mediums that they are most comfortable with. However, this apple differs subtly from these more 'popular' forms.\nAccording to a researcher who has long been obsessed with making Arts-related devices, the mechanism behind this apple felt as if it was derived from 'faith'.` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/standard-bearer-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/myrtle/base.png', chibiSrc: '/operators/myrtle/chibi.webm', illustrator: '咩煲' },
    { id: 'e2', label: 'Elite 2', src: '/operators/myrtle/e2.png', chibiSrc: '/operators/myrtle/chibi.webm', illustrator: '咩煲' },
    { id: 'skin1', label: 'Light Gold Celebration', src: '/operators/myrtle/skin1.png', chibiSrc: '/operators/myrtle/chibi-skin1.webm', illustrator: '咩煲' },
    { id: 'skin2', label: 'Summer Flowers FA062', src: '/operators/myrtle/skin2.png', chibiSrc: '/operators/myrtle/chibi-skin2.webm', illustrator: '咩煲' },
    { id: 'skin3', label: 'Bustling Festival', src: '/operators/myrtle/skin3.png', chibiSrc: '/operators/myrtle/chibi-skin3.webm', illustrator: '咩煲' },
  ],
  portrait: '/operators/myrtle/portrait.png',
  portraitFocus: { y: 21.1, x: 50.6, zoom: 341 },
}

export default myrtle
