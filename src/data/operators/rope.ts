import type { Operator } from '../../types'

const rope: Operator = {
  name: 'Rope', fileNo: 'RB02', class: 'Specialist', branch: 'Hookmaster', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Lungmen', position: 'Melee', race: 'Cautus', gender: 'Female', birthplace: 'Rim Billiton',
  birthday: 'April 4th', height: '155 cm', combatExp: '2 years', infectionStatus: 'Infection confirmed by medical examination.', illustrator: 'm9nokuro',
  cv: { JP: 'Chiyuki Miura (from 2024/05/01); Ayumi Fujimura (until 2024/05/01)', CN: 'Zhang Qi (credited as "Kiliki" in EN)', EN: 'Claire Morgan', KR: 'Lee Sae-byeok' },
  trait: 'Can Shift enemies by using skills\nCan be deployed on Ranged Tiles',
  tags: ['Shift'],
  stats: { hp: 1720, atk: 728, def: 325, res: 0, block: 2, cost: 12, aspd: '1.8s', rdp: '70s' },
  range: {
    base: [[2,1,1]],
    e1: [[2,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Auditory Training', desc: 'Obtains 15% Physical Dodge', elite: 'E1' },
    { name: 'Auditory Training', desc: 'Obtains 19% (+4%) Physical Dodge', elite: 'E1 (Potential 5)' },
    { name: 'Auditory Training', desc: 'Obtains 30% Physical Dodge', elite: 'E2' },
    { name: 'Auditory Training', desc: 'Obtains 34% (+4%) Physical Dodge', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Hook Shot', icon: '/operators/rope/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'The next attack deals 190% of ATK Physical damage to its target and drags it towards this unit greatly', spInit: 0, sp: 5, rank: 'M3',
      note: "Hook Shot's pull has a force of 0/0/0/1/1/1/1/1/1/2.",
      levels: [
        { level: '1', desc: 'The next attack deals 100% of ATK Physical damage to its target and drags it towards this unit slightly', spInit: 0, sp: 7 },
        { level: '2', desc: 'The next attack deals 110% of ATK Physical damage to its target and drags it towards this unit slightly', spInit: 0, sp: 7 },
        { level: '3', desc: 'The next attack deals 120% of ATK Physical damage to its target and drags it towards this unit slightly', spInit: 0, sp: 7 },
        { level: '4', desc: 'The next attack deals 130% of ATK Physical damage to its target and drags it towards this unit moderately', spInit: 0, sp: 6 },
        { level: '5', desc: 'The next attack deals 140% of ATK Physical damage to its target and drags it towards this unit moderately', spInit: 0, sp: 6 },
        { level: '6', desc: 'The next attack deals 150% of ATK Physical damage to its target and drags it towards this unit moderately', spInit: 0, sp: 6 },
        { level: '7', desc: 'The next attack deals 160% of ATK Physical damage to its target and drags it towards this unit moderately', spInit: 0, sp: 5 },
        { level: 'M1', desc: 'The next attack deals 170% of ATK Physical damage to its target and drags it towards this unit moderately', spInit: 0, sp: 5 },
        { level: 'M2', desc: 'The next attack deals 180% of ATK Physical damage to its target and drags it towards this unit moderately', spInit: 0, sp: 5 },
        { level: 'M3', desc: 'The next attack deals 190% of ATK Physical damage to its target and drags it towards this unit greatly', spInit: 0, sp: 5 },
      ],
    },
    {
      name: 'Double Hook', icon: '/operators/rope/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'The next attack deals 225% of ATK Physical damage to up to 2 target and drags them towards this unit greatly', spInit: 10, sp: 15, rank: 'M3',
      range: [[2,1,1,1,1]],
      note: "Double Hook's pull has a force of 0/0/0/1/1/1/1/1/1/2. Arts damage during the pull scales with the distance traveled if the HOK-X module's Stage 1 trait is unlocked.",
      levels: [
        { level: '1', desc: 'The next attack deals 120% of ATK Physical damage to up to 2 target and drags them towards this unit slightly', spInit: 10, sp: 25 },
        { level: '2', desc: 'The next attack deals 130% of ATK Physical damage to up to 2 target and drags them towards this unit slightly', spInit: 10, sp: 24 },
        { level: '3', desc: 'The next attack deals 140% of ATK Physical damage to up to 2 target and drags them towards this unit slightly', spInit: 10, sp: 23 },
        { level: '4', desc: 'The next attack deals 150% of ATK Physical damage to up to 2 target and drags them towards this unit moderately', spInit: 10, sp: 22 },
        { level: '5', desc: 'The next attack deals 160% of ATK Physical damage to up to 2 target and drags them towards this unit moderately', spInit: 10, sp: 21 },
        { level: '6', desc: 'The next attack deals 170% of ATK Physical damage to up to 2 target and drags them towards this unit moderately', spInit: 10, sp: 20 },
        { level: '7', desc: 'The next attack deals 180% of ATK Physical damage to up to 2 target and drags them towards this unit moderately', spInit: 10, sp: 19 },
        { level: 'M1', desc: 'The next attack deals 195% of ATK Physical damage to up to 2 target and drags them towards this unit moderately', spInit: 10, sp: 18 },
        { level: 'M2', desc: 'The next attack deals 210% of ATK Physical damage to up to 2 target and drags them towards this unit moderately', spInit: 10, sp: 17 },
        { level: 'M3', desc: 'The next attack deals 225% of ATK Physical damage to up to 2 target and drags them towards this unit greatly', spInit: 10, sp: 15 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Rope's Badge", desc: 'Appointed as Specialist Operator to exercise Hookmaster responsibilities' },
    hokx: { code: 'HOK-X', name: 'Tin Casket', stages: [
      { stage: 1, hp: '+100', atk: '+22', effect: 'New trait: While being pulled, enemies take Arts damage proportional to the distance traveled' },
      { stage: 2, hp: '+160', atk: '+27', effect: 'Auditory Training improved: Gains 35% Physical Dodge' },
      { stage: 3, hp: '+200', atk: '+31', effect: 'Auditory Training improved: Gains 40% Physical Dodge' },
    ]},
  },
  profile: `Rope is a cat burglar from the slums of Lungmen, who got caught during a botched caper. Sent to Rhodes Island on a special recommendation from Madam Ch'en after Lungmen formed a partnership with the island.\nResponsible for intelligence gathering. Uses a rope and grappling hook in combat to disorient the enemy.`,
  story: `Enduring a harsh life in the Lungmen slums after being kicked out by her parents, which turned her into a street urchin before running afoul with the Lungmen Guard Department, Rope the Infected Cautus was enlisted to Rhodes Island under Ch'en's recommendation, making use of her grappling hook and skills as a thief to disrupt the enemies' formations. However, she can't get off her habit of stealing things right under one's noses, so watch your wallet while around Rope...`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n[Cell-Originium Assimilation] 18%\nWhile only a few vestiges of infection are visible on surface, internal organs have been severely compromised.\n[Blood Originium-Crystal Density] 0.30u/L\nBy the time she joined Rhodes Island, Operator Rope had already missed the best window of opportunity for treatment. Malnutrition and environmental factors put her health in imminent danger.\nCurrently, given proper care, she is in stable condition. I hope she will continue to take better care of herself.\n— Silence` },
    { title: 'Archive File 1', content: `A coy thief.\nShe smiles at everyone, but it's a polite, distant smile.\nPilfering is second nature to her. She will sometimes pickpocket someone without even realizing it. At least she knows to give it back now.` },
    { title: 'Archive File 2', content: `Rope doesn't begrudge her parents. She knows sometimes a poor family just has to abandon a child or two. At least her parents cried when they kicked her out of the house.\nRope doesn't hate the world either, knowing that no matter how much she curses the gods, won't give her what she needs to eat. Not to mention all the worse things she's seen from her years in the slums.\nOf course, Rope never had any problem stealing. She knew it was wrong, but what could she do?` },
    { title: 'Archive File 3', content: `Rope actually loved prison, since her meals were taken care of, and she got a free bed out of the deal. If it wasn't for the rehabilitation classes, she would've gotten herself caught on purpose.\nOf course, she'd still slip up occasionally, but she knew every one of the guards and they were impressed with her thieving skills.\nShe did wonder if they might actually hire her as a cop. What she never expected was getting "sold" to a place called Rhodes Island.` },
    { title: 'Archive File 4', content: `Rope still isn't used to life on the island.\nShe gets food, clothes, and a roof over her head. Plus there's a lot of freaks and weirdos here. Nobody looks down on her because of her background, and even when she does steal from them, they just want her to return it with an apology.\nWith all that, she doesn't need to use any of the survival skills she honed in the slum. It's all very foreign to her.\nBut it feels... not too bad.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/hookmaster-branch.png', factionIcon: '/icons/factions/lungmen.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/rope/base.png', chibiSrc: '/operators/rope/chibi.webm', chibiMoveSrc: '/operators/rope/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'e2', label: 'Elite 2', src: '/operators/rope/e2.png', chibiSrc: '/operators/rope/chibi.webm', chibiMoveSrc: '/operators/rope/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'skin1', label: "Imp's House", src: '/operators/rope/skin1.png', chibiSrc: '/operators/rope/chibi-skin1.webm', chibiMoveSrc: '/operators/rope/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'skin2', label: 'Summer Flowers FA008', src: '/operators/rope/skin2.png', chibiSrc: '/operators/rope/chibi-skin2.webm', chibiMoveSrc: '/operators/rope/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
  ],
}

export default rope
