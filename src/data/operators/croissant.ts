import type { Operator } from '../../types'
import croissantVoice from '../voices/croissant'

const croissant: Operator = {
  name: 'Croissant', fileNo: 'PL04', class: 'Defender', branch: 'Protector', rarity: 5, level: 70, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Penguin Logistics', position: 'Melee', race: 'Forte', gender: 'Female', birthplace: 'Minos',
  birthday: 'September 29th', height: '163 cm', combatExp: '1 year', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: '幻象黑兔',
  cv: { JP: 'Yurika Kubo', CN: 'Wen Liu', EN: 'Risa Mei', KR: 'Yang Jung-hwa' },
  voice: croissantVoice,
  trait: 'Blocks 3 enemies',
  tags: ['Defense', 'Shift'],
  stats: { hp: 3670, atk: 380, def: 770, res: 0, block: 3, cost: 22, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2]],
    e1: [[2]],
    e2: [[2]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Miracle Field', desc: 'Has a 10% chance to resist Physical and Arts Damage. The allies in the four surrounding grids obtain half of the effect', elite: 'E1' },
    { name: 'Miracle Field', desc: 'Has a 13% (+3%) chance to resist Physical and Arts Damage. The allies in the four surrounding grids obtain half of the effect', elite: 'E1 (Potential 5)' },
    { name: 'Miracle Field', desc: 'Has a 20% chance to resist Physical and Arts Damage. The allies in the four surrounding grids obtain half of the effect', elite: 'E2' },
    { name: 'Miracle Field', desc: 'Has a 23% (+3%) chance to resist Physical and Arts Damage. The allies in the four surrounding grids obtain half of the effect', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Auto Defense', icon: '/operators/croissant/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'DEF +70%; Talent effect increases to 200%\nAutomatically activated', spInit: 12, sp: 20, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: `DEF +20%; Talent effect increases to 110%
Automatically activated`, spInit: 0, sp: 30, dur: '20s' },
        { level: '2', desc: `DEF +20%; Talent effect increases to 120%
Automatically activated`, spInit: 0, sp: 29, dur: '20s' },
        { level: '3', desc: `DEF +20%; Talent effect increases to 130%
Automatically activated`, spInit: 0, sp: 28, dur: '20s' },
        { level: '4', desc: `DEF +30%; Talent effect increases to 140%
Automatically activated`, spInit: 4, sp: 27, dur: '23s' },
        { level: '5', desc: `DEF +30%; Talent effect increases to 150%
Automatically activated`, spInit: 4, sp: 26, dur: '23s' },
        { level: '6', desc: `DEF +30%; Talent effect increases to 160%
Automatically activated`, spInit: 4, sp: 25, dur: '23s' },
        { level: '7', desc: `DEF +40%; Talent effect increases to 170%
Automatically activated`, spInit: 8, sp: 24, dur: '26s' },
        { level: 'M1', desc: `DEF +50%; Talent effect increases to 180%
Automatically activated`, spInit: 8, sp: 23, dur: '27s' },
        { level: 'M2', desc: `DEF +60%; Talent effect increases to 190%
Automatically activated`, spInit: 8, sp: 22, dur: '28s' },
        { level: 'M3', desc: `DEF +70%; Talent effect increases to 200%
Automatically activated`, spInit: 12, sp: 20, dur: '30s' },
      ],
    },
    {
      name: 'Magnetic Hammer', icon: '/operators/croissant/skill-2.png', activation: 'Manual', recovery: 'Defensive Recovery',
      desc: 'Bumps nearby enemies away significantly, Stunning them for 4 seconds and dealing 480% ATK as Physical damage to them', spInit: 0, sp: 17, rank: 'M3',
      range: [
        [0,0,1,0,0],
        [0,1,2,1,0],
        [0,0,1,0,0],
      ],
      note: "Magnetic Hammer's push has a force of 1/1/1/1/1/1/2/2/2/3.",
      levels: [
        { level: '1', desc: 'Bumps nearby enemies away moderately, Stunning them for 2.5 seconds and dealing 240% ATK as Physical damage to them', spInit: 0, sp: 22 },
        { level: '2', desc: 'Bumps nearby enemies away moderately, Stunning them for 2.5 seconds and dealing 260% ATK as Physical damage to them', spInit: 0, sp: 22 },
        { level: '3', desc: 'Bumps nearby enemies away moderately, Stunning them for 2.5 seconds and dealing 280% ATK as Physical damage to them', spInit: 0, sp: 22 },
        { level: '4', desc: 'Bumps nearby enemies away moderately, Stunning them for 3 seconds and dealing 300% ATK as Physical damage to them', spInit: 0, sp: 21 },
        { level: '5', desc: 'Bumps nearby enemies away moderately, Stunning them for 3 seconds and dealing 320% ATK as Physical damage to them', spInit: 0, sp: 21 },
        { level: '6', desc: 'Bumps nearby enemies away moderately, Stunning them for 3 seconds and dealing 340% ATK as Physical damage to them', spInit: 0, sp: 21 },
        { level: '7', desc: 'Bumps nearby enemies away greatly, Stunning them for 3.5 seconds and dealing 360% ATK as Physical damage to them', spInit: 0, sp: 20 },
        { level: 'M1', desc: 'Bumps nearby enemies away greatly, Stunning them for 3.5 seconds and dealing 400% ATK as Physical damage to them', spInit: 0, sp: 19 },
        { level: 'M2', desc: 'Bumps nearby enemies away greatly, Stunning them for 3.5 seconds and dealing 440% ATK as Physical damage to them', spInit: 0, sp: 18 },
        { level: 'M3', desc: 'Bumps nearby enemies away significantly, Stunning them for 4 seconds and dealing 480% ATK as Physical damage to them', spInit: 0, sp: 17 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Croissant's Badge", desc: 'Appointed as Defender Operator to exercise Protector responsibilities' },
    proy: { code: 'PRO-Y', name: 'Combat Boots', stages: [
      { stage: 1, hp: '+180', def: '+50', effect: 'Trait improved: Blocks 4 enemies (Block +1)' },
      { stage: 2, hp: '+275', def: '+60', effect: 'Miracle Field improved: Has a 24% chance to resist Physical and Arts Damage. The allies in the four surrounding grids obtain half of the effect' },
      { stage: 3, hp: '+350', def: '+68', effect: 'Miracle Field improved: Has a 27% chance to resist Physical and Arts Damage. The allies in the four surrounding grids obtain half of the effect' },
    ]},
  },
  story: `A Minoan Forte employee of Penguin Logistics, Croissant hails from a family of businessmen and entrepreneurs, and is seeking to find ways to get rich quickly through various business ventures of her own with mixed results despite her strong business sense. Her carefree and complacent attitude earned Croissant a soft spot among her fellow Penguin Logistics employees Exusiai, Sora, and Texas. She is their resident specialist in escort protection and security, whose strength allows her to hold back any threats.`,
  profile: `Croissant, a member of Penguin Logistics, is a proficient defender who is able to hold back several enemies at once. She also possesses monstrous strength, able to send lesser enemies flying with her massive hammer.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed clear outline of internal organs without any unusual dark spot. No unusual traces of Originium particles present in her system, no signs of infection, confirming her as non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator Croissant has no sign of ore-infection.\n\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Croissant sometimes delivers packages or sells goods with Originium content, but it has not caused infection to date.` },
    { title: 'Archive File 1', content: `An energetic messenger.\nShe believes that the purpose of work is to improve one's quality of life, and that the contemporary lifestyle brought on by shopping is the best way of improving her life.\nShe isn't hung up about money, but she does enjoy living paycheck-to-paycheck while jumping on opportunities to make a quick profit. She can often be seen hawking goods in various places.` },
    { title: 'Archive File 2', content: `Messengers usually get two kinds of work: Delivering mail and messages, or transporting cargo.\nThe former requires speed; the latter, strength and endurance. In Penguin Logistics, Miss Croissant was an obvious stand-out in the latter.\nAlso notable, Croissant is extraordinarily strong even for a Forte. Swinging a hefty hammer in one hand while carrying a heavy shield in the other is as simple as breathing to her.` },
    { title: 'Archive File 3', content: `While not a big operation, Penguin Logistics is well-connected at all levels in Lungmen.\nThus, taking advantage of the channels back home, Croissant's irregular hawking ventures could be a treasure trove that just might offer rarities you wouldn't find anywhere else.\nOf course, don't let Croissant know if you did spot a valuable item, or she will wring your wallet.` },
    { title: 'Archive File 4', content: `Even as a Operator, Croissant has no plans to give up her hobbies and interests.\nShe knows an Operator will face unprecedented danger and see many unfortunate events. But nevertheless, she is still a city girl who counts her pennies.\nMaybe Rhodes Island recruits civilian Operators because they're not jaded and thus fearless, but it's definitely not because they should be exposed to the cruelty of the real world. It's more like the island have many unfortunate people who needed someone as adorable as Croissant to show them what a normal, blissful life is like.\nOf course, the unfortunate or hateful may begrudge the blessed, but at least it never happens at Rhodes Island.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/penguin-logistics.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/croissant/base.png', chibiSrc: '/operators/croissant/chibi.webm', chibiMoveSrc: '/operators/croissant/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'e2', label: 'Elite 2', src: '/operators/croissant/e2.png', chibiSrc: '/operators/croissant/chibi.webm', chibiMoveSrc: '/operators/croissant/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'skin1', label: 'Seven in the Morning', src: '/operators/croissant/skin1.png', chibiSrc: '/operators/croissant/chibi-skin1.webm', chibiMoveSrc: '/operators/croissant/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'skin2', label: 'Seeker SK03', src: '/operators/croissant/skin2.png', chibiSrc: '/operators/croissant/chibi-skin2.webm', chibiMoveSrc: '/operators/croissant/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
  ],
  portrait: '/operators/croissant/portrait.png',
  portraitFocus: { y: -10.6, x: 55.3, zoom: 259 },
}

export default croissant
