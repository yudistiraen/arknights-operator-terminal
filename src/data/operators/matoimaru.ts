import type { Operator } from '../../types'

const matoimaru: Operator = {
  name: 'Matoimaru', fileNo: 'HK01', class: 'Guard', branch: 'Dreadnought', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Higashi', position: 'Melee', race: 'Oni', gender: 'Female', birthplace: 'Higashi',
  birthday: 'January 3rd', height: '172 cm', combatExp: '3 years', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Airi Ōtsu', CN: 'Qiwen (credited as "Ellen Wang" in EN)', EN: 'Maddie Matsumoto', KR: 'Chae Min-ji' },
  trait: 'Blocks 1 enemy',
  tags: ['Survival', 'DPS'],
  stats: { hp: 3640, atk: 916, def: 156, res: 0, block: 1, cost: 17, aspd: '1.5s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Demonic Physique', desc: 'DEF -20%; Max HP +20%', elite: 'E2' },
    { name: 'Demonic Physique', desc: 'DEF -20%; Max HP +23% (+3%)', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Regeneration β', icon: '/operators/matoimaru/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Restores HP by 50% of Max HP', spInit: 10, sp: 20, rank: 'M3',
      levels: [
        { level: '1', desc: 'Restores HP by 20% of Max HP', spInit: 0, sp: 30 },
        { level: '2', desc: 'Restores HP by 23% of Max HP', spInit: 0, sp: 29 },
        { level: '3', desc: 'Restores HP by 26% of Max HP', spInit: 0, sp: 28 },
        { level: '4', desc: 'Restores HP by 30% of Max HP', spInit: 3, sp: 27 },
        { level: '5', desc: 'Restores HP by 33% of Max HP', spInit: 3, sp: 26 },
        { level: '6', desc: 'Restores HP by 36% of Max HP', spInit: 3, sp: 25 },
        { level: '7', desc: 'Restores HP by 40% of Max HP', spInit: 7, sp: 24 },
        { level: 'M1', desc: 'Restores HP by 43% of Max HP', spInit: 8, sp: 23 },
        { level: 'M2', desc: 'Restores HP by 46% of Max HP', spInit: 9, sp: 22 },
        { level: 'M3', desc: 'Restores HP by 50% of Max HP', spInit: 10, sp: 20 },
      ],
    },
    {
      name: 'Demonic Power', icon: '/operators/matoimaru/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'DEF reduces to 0; ATK +150%', spInit: 10, sp: 25, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: 'DEF reduces to 0; ATK +75%', spInit: 0, sp: 35, dur: '10s' },
        { level: '2', desc: 'DEF reduces to 0; ATK +80%', spInit: 0, sp: 35, dur: '10s' },
        { level: '3', desc: 'DEF reduces to 0; ATK +85%', spInit: 0, sp: 35, dur: '10s' },
        { level: '4', desc: 'DEF reduces to 0; ATK +90%', spInit: 0, sp: 32, dur: '11s' },
        { level: '5', desc: 'DEF reduces to 0; ATK +95%', spInit: 0, sp: 32, dur: '11s' },
        { level: '6', desc: 'DEF reduces to 0; ATK +100%', spInit: 0, sp: 32, dur: '11s' },
        { level: '7', desc: 'DEF reduces to 0; ATK +105%', spInit: 5, sp: 29, dur: '12s' },
        { level: 'M1', desc: 'DEF reduces to 0; ATK +120%', spInit: 6, sp: 28, dur: '13s' },
        { level: 'M2', desc: 'DEF reduces to 0; ATK +135%', spInit: 7, sp: 27, dur: '14s' },
        { level: 'M3', desc: 'DEF reduces to 0; ATK +150%', spInit: 10, sp: 25, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Matoimaru's Badge", desc: 'Appointed as Guard Operator to exercise Dreadnought responsibilities' },
    drey: { code: 'DRE-Y', name: 'Bamboo Ikebana', stages: [
      { stage: 1, hp: '+270', atk: '+35', effect: 'New trait: When defeated, does not retreat and recovers HP instead. However, Max HP -60% and ASPD +30 (Can only activate once every deployment)' },
      { stage: 2, hp: '+340', atk: '+45', effect: 'Demonic Physique improved: DEF -20%; Max HP +30%' },
      { stage: 3, hp: '+390', atk: '+55', effect: 'Demonic Physique improved: DEF -20%; Max HP +35%' },
    ]},
  },
  profile: `This nomadic warrior from the Far East joined Rhodes Island by sheer chance.\nWhat Matoimaru lacks in strategic acumen, she makes up with a mean giant sickle swing.`,
  story: `A wandering Higashinese Oni onna-musha, Matoimaru is known for being prone to went berserk like most of her kind. Joined Rhodes Island by chance, Matoimaru has been using her strength as a formidable melee combatant with her naginata slicing through her enemies. At the same time, she is taking ikebana classes to control her temper and train her character.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed clear outline of internal organs without any unusual dark spot. No unusual traces of Originium particles present in her system, no signs of infection, confirming this Operator as uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Matoimaru showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Matoimaru rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `Matoimaru is a magnificent warrior from the Far East.\nShe is simpleminded and prone to deception. She does catch on, but a new trick will fool her again.\nHer hobbies, at which she excels, are sparring, soccer, and floral arrangement. She has been known to organize events around these subjects, though her idea of organization is typically dragging people kicking and screaming into it.` },
    { title: 'Archive File 2', content: `The Oni are still a mystery to most people. Aside from living in the Far East, there seems to be little in common among the race.\nHowever, Matoimaru is yet even more different from other Oni: Her bloodlust makes her performance on the battlefield strikingly unique, though it seems she's not aware of this fact.` },
    { title: 'Archive File 3', content: `Many Operators think Matoimaru is crude and unrefined, but they are mistaken.\nThey just need to check out her floral arrangements, on display every Saturday at 3pm.\nThe beauty she can create is positively astonishing.` },
    { title: 'Archive File 4', content: `Matoimaru is obviously self-conscious about her flaws: She is not good at controlling her strength or at critical thinking.\nShe took up floral arrangement to refine herself and to show the others they don't need to fear her.\nDespite this, she's remains quite gullible. At least she has learned to question the idea that she must be a great thinker in order to survive.\nAs far as she is concerned, her ideal companion would be someone who won't deceive or betray her, and will stay with her and guide her. How wonderful that would be...` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/dreadnought-branch.png', factionIcon: '/icons/factions/higashi.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/matoimaru/base.png', chibiSrc: '/operators/matoimaru/chibi.webm', chibiMoveSrc: '/operators/matoimaru/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'e2', label: 'Elite 2', src: '/operators/matoimaru/e2.png', chibiSrc: '/operators/matoimaru/chibi.webm', chibiMoveSrc: '/operators/matoimaru/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'skin1', label: 'Frosted Steps', src: '/operators/matoimaru/skin1.png', chibiSrc: '/operators/matoimaru/chibi-skin1.webm', chibiMoveSrc: '/operators/matoimaru/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
  ],
}

export default matoimaru
