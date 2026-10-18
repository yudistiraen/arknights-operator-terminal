import type { Operator } from '../../types'

const perfumer: Operator = {
  name: 'Perfumer', fileNo: 'MN03', class: 'Medic', branch: 'Multi-target Medic', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Vulpo', gender: 'Female', birthplace: 'Minos',
  birthday: 'January 30th', height: '158 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: 'Lanzi',
  cv: { JP: 'Rie Takahashi', CN: 'Yang Donghui', EN: 'Sam Slade', KR: 'Lee Hyun-jin' },
  trait: 'Restores the HP of up to 3 allies simultaneously.',
  tags: ['Healing'],
  stats: { hp: 1560, atk: 320, def: 145, res: 0, block: 1, cost: 16, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[1,2,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[1,2,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: "Lavender's Fragrance", desc: "Restores the HP of all allies by 5% of Perfumer's ATK per second. The HP restoration is unaffected by healing effect modifiers and can still heal friendly units even if they become unable to be healed.", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Healing Up β', icon: '/operators/perfumer/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +70%', spInit: 10, sp: 30, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +15%', spInit: 10, sp: 40, dur: '25s' },
        { level: '2', desc: 'ATK +20%', spInit: 10, sp: 40, dur: '25s' },
        { level: '3', desc: 'ATK +25%', spInit: 10, sp: 40, dur: '25s' },
        { level: '4', desc: 'ATK +30%', spInit: 10, sp: 35, dur: '25s' },
        { level: '5', desc: 'ATK +35%', spInit: 10, sp: 35, dur: '25s' },
        { level: '6', desc: 'ATK +40%', spInit: 10, sp: 35, dur: '25s' },
        { level: '7', desc: 'ATK +50%', spInit: 10, sp: 32, dur: '25s' },
        { level: 'M1', desc: 'ATK +55%', spInit: 10, sp: 32, dur: '25s' },
        { level: 'M2', desc: 'ATK +60%', spInit: 10, sp: 32, dur: '25s' },
        { level: 'M3', desc: 'ATK +70%', spInit: 10, sp: 30, dur: '25s' },
      ],
    },
    {
      name: 'Fine Blending', icon: '/operators/perfumer/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ASPD -50; ATK +250%', spInit: 20, sp: 60, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ASPD -50; ATK +150%', spInit: 20, sp: 60, dur: '30s' },
        { level: '2', desc: 'ASPD -50; ATK +160%', spInit: 20, sp: 60, dur: '30s' },
        { level: '3', desc: 'ASPD -50; ATK +170%', spInit: 20, sp: 60, dur: '30s' },
        { level: '4', desc: 'ASPD -50; ATK +180%', spInit: 20, sp: 60, dur: '30s' },
        { level: '5', desc: 'ASPD -50; ATK +190%', spInit: 20, sp: 60, dur: '30s' },
        { level: '6', desc: 'ASPD -50; ATK +200%', spInit: 20, sp: 60, dur: '30s' },
        { level: '7', desc: 'ASPD -50; ATK +210%', spInit: 20, sp: 60, dur: '30s' },
        { level: 'M1', desc: 'ASPD -50; ATK +220%', spInit: 20, sp: 60, dur: '30s' },
        { level: 'M2', desc: 'ASPD -50; ATK +230%', spInit: 20, sp: 60, dur: '30s' },
        { level: 'M3', desc: 'ASPD -50; ATK +250%', spInit: 20, sp: 60, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Perfumer's Badge", desc: 'Appointed as Medic Operator to exercise Multi-target Medic responsibilities' },
    riny: { code: 'RIN-Y', name: "Aegean's Kiss", stages: [
      { stage: 1, hp: '+55', atk: '+25', effect: 'Trait improved: Restores the HP of 4 allied units simultaneously' },
      { stage: 2, hp: '+75', atk: '+35', effect: "Lavender's Fragrance improved: When deployed, restores the HP of all allies by 6% of Perfumer's ATK each second" },
      { stage: 3, hp: '+90', atk: '+40', effect: "Lavender's Fragrance improved: When deployed, restores the HP of all allies by 6.5% of Perfumer's ATK each second" },
    ]},
  },
  story: `Lena's uncanny sense of smell made her who she is today. She can sniff out a particular good at the marketplace, or track down any individual at Rhodes Island with her nose alone. She could probably earn a decent living off those abilities, but her perfectionist bent ultimately led her to the craft of medicinal perfumes. It's a challenge for Lena, but one she accepted and dominated through her diligence and commitment to the idea that combining perfume with modern medicine would open up new possibilities (especially in the field of psychology).`,
  profile: 'Manager of the Convalescence Garden greenhouse aboard Rhodes Island, where she distills medicinal perfumes to soothe operators struggling with the mental toll of Oripathy. Gentle, patient, and endlessly curious about scent.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging test on this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulatory system, indicating infection and confirming her as Infected at this stage.\n\n[Cell-Originium Assimilation] 3%\nMinor infection, no signs of crystal formation.\n\n[Blood Originium-Crystal Density] 0.2u/L\nNo immediate physical threat, more observation required.` },
    { title: 'Archive File 2', content: `Lena was raised in a prosperous family without having to work for a living, allowing her to pursue her passions with little to no risk. She loved nature, plants, and especially the smell of flowers and sunshine. Choosing becoming a perfumer was her way of expressing that passion.\nLena worked hard and dedicated herself to her perfumes, eventually deciding to develop her own business without help from her family. In the early stages, she struggled due to her inexperience. Nothing was going right. But with pride and confidence befitting the member of a prestigious clan, she turned setbacks into motivation and pushed past the lows.\nWhenever she lifted up one of her plants with mud-covered hands, she would feel invigorated by the scent of a brand new aroma.` },
    { title: 'Archive File 3', content: `While working at the Convalescence Garden at Rhodes Island, she, with Dr. Kal'tsit's permission, converted an unused space into a little greenhouse. She moved her plants there and set up a perfume workshop.\nThe aromatic blends she made with different plants could elicit intense feelings and even hallucinations. She used it as an auxiliary therapy that proved helpful to the mentally ill patients partially affected by Oripathy.` },
    { title: 'Archive File 4', content: `While running the Convalescence Garden, Lena's gentleness, patience and understanding, as well as the intoxicating aromas of her perfumes, made her a favorite among the operators.\nWith assistance from the medical staff, Lena started accepting some patients needing therapy. The most notable case has been Operator Nightmare, a weak Feline suffering from a split personality caused by Oripathy. Under Lena's care, Nightmare's condition has come under control and the two are now great friends.\nAmong the crowd frequenting the greenhouse, the Doctor caught Lena's notice. Lena has made it a personal mission to care for the Doctor.` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/multi-target-medic-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/perfumer/base.png', chibiSrc: '/operators/perfumer/chibi.webm', illustrator: 'Lanzi' },
    { id: 'e2', label: 'Elite 2', src: '/operators/perfumer/e2.png', chibiSrc: '/operators/perfumer/chibi.webm', illustrator: 'Lanzi' },
    { id: 'skin1', label: 'Species Planatarum', src: '/operators/perfumer/skin1.png', chibiSrc: '/operators/perfumer/chibi-skin1.webm', illustrator: 'Lanzi' },
    { id: 'skin2', label: 'Leisurely Afternoon', src: '/operators/perfumer/skin2.png', chibiSrc: '/operators/perfumer/chibi-skin2.webm', illustrator: 'Lanzi' },
  ],
  portrait: '/operators/perfumer/portrait.png',
  portraitFocus: { y: -1.7, x: 61.2, zoom: 279 },
}

export default perfumer
