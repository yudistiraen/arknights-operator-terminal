import type { Operator } from '../../types'
import myrrhVoice from '../voices/myrrh'

const myrrh: Operator = {
  name: 'Myrrh', fileNo: 'R104', class: 'Medic', branch: 'Medic', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Vulpo', gender: 'Female', birthplace: 'Unknown',
  birthday: 'May 5th', height: '143 cm', combatExp: 'None', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: 'Xiaye Hongming',
  cv: { JP: 'Kana Yuuki', CN: 'Z-kun (credited as "Z" in EN)', EN: 'Angel Lin', KR: 'Kang Eun-ae' },
  voice: myrrhVoice,
  trait: 'Restores the HP of allies',
  tags: ['Healing'],
  stats: { hp: 1420, atk: 465, def: 131, res: 0, block: 1, cost: 18, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'First Aid Kit', desc: "Immediately restores the HP of all allies by 100% of Myrrh's ATK after deployment", elite: 'E1' },
    { name: 'First Aid Kit', desc: "Immediately restores the HP of all allies by 110% (+10%) of Myrrh's ATK after deployment", elite: 'E1 (Potential 5)' },
    { name: 'First Aid Kit', desc: "Immediately restores the HP of all allies by 150% of Myrrh's ATK after deployment", elite: 'E2' },
    { name: 'First Aid Kit', desc: "Immediately restores the HP of all allies by 160% (+10%) of Myrrh's ATK after deployment", elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Dual Healing', icon: '/operators/myrrh/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: "The next heal is increased to 125% of ATK and can target 1 extra ally\nCan store 3 charges", spInit: 0, sp: 8, rank: 'M3',
      levels: [
        { level: '1', desc: 'The next heal is increased to 100% of ATK and can target 1 extra ally\nCan store 1 charges', spInit: 0, sp: 10 },
        { level: '2', desc: 'The next heal is increased to 102% of ATK and can target 1 extra ally\nCan store 1 charges', spInit: 0, sp: 10 },
        { level: '3', desc: 'The next heal is increased to 104% of ATK and can target 1 extra ally\nCan store 1 charges', spInit: 0, sp: 10 },
        { level: '4', desc: 'The next heal is increased to 106% of ATK and can target 1 extra ally\nCan store 2 charges', spInit: 0, sp: 9 },
        { level: '5', desc: 'The next heal is increased to 108% of ATK and can target 1 extra ally\nCan store 2 charges', spInit: 0, sp: 9 },
        { level: '6', desc: 'The next heal is increased to 110% of ATK and can target 1 extra ally\nCan store 2 charges', spInit: 0, sp: 9 },
        { level: '7', desc: 'The next heal is increased to 112% of ATK and can target 1 extra ally\nCan store 3 charges', spInit: 0, sp: 9 },
        { level: 'M1', desc: 'The next heal is increased to 116% of ATK and can target 1 extra ally\nCan store 3 charges', spInit: 0, sp: 8 },
        { level: 'M2', desc: 'The next heal is increased to 120% of ATK and can target 1 extra ally\nCan store 3 charges', spInit: 0, sp: 8 },
        { level: 'M3', desc: 'The next heal is increased to 125% of ATK and can target 1 extra ally\nCan store 3 charges', spInit: 0, sp: 8 },
      ],
    },
    {
      name: 'Medic Field', icon: '/operators/myrrh/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +65%; Can heal 1 extra ally', spInit: 20, sp: 50, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +5%; Can heal 1 extra ally', spInit: 5, sp: 65, dur: '25s' },
        { level: '2', desc: 'ATK +10%; Can heal 1 extra ally', spInit: 5, sp: 65, dur: '25s' },
        { level: '3', desc: 'ATK +15%; Can heal 1 extra ally', spInit: 5, sp: 65, dur: '25s' },
        { level: '4', desc: 'ATK +20%; Can heal 1 extra ally', spInit: 10, sp: 60, dur: '25s' },
        { level: '5', desc: 'ATK +25%; Can heal 1 extra ally', spInit: 10, sp: 60, dur: '25s' },
        { level: '6', desc: 'ATK +30%; Can heal 1 extra ally', spInit: 10, sp: 60, dur: '25s' },
        { level: '7', desc: 'ATK +35%; Can heal 1 extra ally', spInit: 15, sp: 55, dur: '25s' },
        { level: 'M1', desc: 'ATK +45%; Can heal 1 extra ally', spInit: 17, sp: 53, dur: '25s' },
        { level: 'M2', desc: 'ATK +55%; Can heal 1 extra ally', spInit: 18, sp: 52, dur: '25s' },
        { level: 'M3', desc: 'ATK +65%; Can heal 1 extra ally', spInit: 20, sp: 50, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Myrrh's Badge", desc: 'Appointed as Medic Operator to exercise Medic responsibilities' },
    phyx: { code: 'PHY-X', name: '"Brevity of Life"', stages: [
      { stage: 1, hp: '+50', aspd: '+3', effect: 'New trait: When healing allied units with less than 50% HP, increases heal amount by 15%' },
      { stage: 2, hp: '+80', aspd: '+4', effect: "First Aid Kit improved: Immediately restores the HP of all allies by 170% of Myrrh's ATK after deployment" },
      { stage: 3, hp: '+100', aspd: '+5', effect: "First Aid Kit improved: Immediately restores the HP of all allies by 180% of Myrrh's ATK after deployment" },
    ]},
  },
  profile: `Myrrh, birthplace Unknown, apothecary. Showed great promise in the arts and science of medicine research.\nCurrently a member of the Rhodes Island medical staff and provides pharmaceutical services.`,
  story: `Adelaide the Vulpo apothecary and herbalist and her friend Harmonia (not to be confused with Harmonie) hails from a woodland tribe and the latter contracted Oripathy after an accident in one of their adventures. Together, the two came to Rhodes Island for Harmonia's treatment and became Operators there, where Adelaide adopts the codename "Myrrh" recommended by Kal'tsit. Despite utilizing premodern pharmaceutical methods, Myrrh's medicine is proven to be quite effective.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Assimilation] 0%\nOperator Myrrh showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.19u/L\nCompared to other non-infected Operators, Myrrh showed a higher concentration of crystal density in her blood. More intense daily test protocol recommended.` },
    { title: 'Archive File 1', content: `Although an ordinary medic, Operator Myrrh takes this responsibility very seriously. She goes work early and comes home late every day, giving her all to provide other Operators with quality medicine. Myrhh has unique insights into the pharmaceutical sciences, and is always keen to seek out new ingredients in nature. But she struggles with interpersonal communication. Terminally awkward with all but her closest friends, Myrrh demonstrates an inability to maintain strong and lasting relationships.` },
    { title: 'Archive File 2', content: `After officially becoming a member of Rhodes Island, Operator Myrrh exhibited her precious positivity. Compared to other experienced Operators, Myrrh was much less savvy when it came to familiarity with job protocols or combat. But she worked her way through that toughest time, especially with her pal Harmonia still recuperating, which only further steeled her resolve to make it on the island.\nMyrrh did integrate much faster than other new recruits in some areas. She grasped the island's complicated structural layout and access system without much effort, almost never getting lost. She also made valid suggestions for obtaining unique resources in certain remote regions. All that had the island quickly taking notice of her.` },
    { title: 'Archive File 3', content: `Operator Myrrh's herbal mix was deemed a great medicine, but it has all the drawbacks of a premodern pharmaceutical: Uniquely indigenous ingredients, complicated creation processes, extremely bitter taste, and even elements of witchcraft as part of the recipe. The modern medical community saw it as a relic doomed to obsolescence.\nBut at Myrrh's insistence, Dr. Kal'tsit developed a special training course with modern technology specifically for her. The training has produced positive results.\nMyrrh quickly mastered a simplified pharmaceutical process and applied it to her work. While the result remains bitter, the remedies she offered have garnered positive feedback for their effectiveness.\nWith assistance from the convalescent home personnel, Operator Myrrh is now striving to overcome that final drawback of her medicine.` },
    { title: 'Archive File 4', content: `As for her own and her friend Harmonia's background, Myrrh has never given a straight answer. She spoke of "ruins" and "secret worlds," perhaps to throw others off the trail, or it could be that she had no understanding of them at all. What is known is the pair came from a region lacking the protection of a sovereign state, relying on strict rules of secrecy to prevent its location or status from becoming known to outsiders. That has stifled investigation into the subject.\nAccording to Myrrh's own account, her friend Harmonia got infected during an exploratory mission on which Myrrh made a mistake. But Myrrh has not provided any details about the adventure or the cause for of Harmonia's infection. During interviews, it became clear that Myrrh has suffered memory loss due to trauma and is unable to reconstruct the event.\nNote: No information regarding Harmonia's symptom and prognosis are available through the archive. The patient is currently undergoing treatment as an ordinary infected, but has declined all consultations and inquiries.` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/myrrh/base.png', chibiSrc: '/operators/myrrh/chibi.webm', chibiMoveSrc: '/operators/myrrh/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
    { id: 'e2', label: 'Elite 2', src: '/operators/myrrh/e2.png', chibiSrc: '/operators/myrrh/chibi.webm', chibiMoveSrc: '/operators/myrrh/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
    { id: 'skin1', label: 'Bitter Herbs', src: '/operators/myrrh/skin1.png', chibiSrc: '/operators/myrrh/chibi-skin1.webm', chibiMoveSrc: '/operators/myrrh/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
  ],
  portrait: '/operators/myrrh/portrait.png',
  portraitFocus: { y: -8, x: 63.7, zoom: 258 },
}

export default myrrh
