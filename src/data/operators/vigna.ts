import type { Operator } from '../../types'

const vigna: Operator = {
  name: 'Vigna', fileNo: 'R105', class: 'Vanguard', branch: 'Charger', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Columbia', position: 'Melee', race: 'Sarkaz', gender: 'Female', birthplace: 'Kazdel',
  birthday: 'December 12th', height: '142 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '下野宏铭',
  cv: { JP: 'Asami Shimoda', CN: 'Zhang Anqi', EN: 'Julia Gu', KR: 'Ahn Hyun-seo' },
  trait: 'Obtain 1 DP after this unit defeats an enemy; Refunds the original DP Cost when retreated',
  tags: ['DPS', 'DP-Recovery'],
  stats: { hp: 1845, atk: 558, def: 351, res: 0, block: 1, cost: 11, aspd: '1s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Fierce Stabbing', desc: "When attacking, has a 10% chance to increase the current damage of that attack by 100%. The chance increases to 30% when Vigna's skill is active.", elite: 'E2' },
  ],
  skills: [
    {
      name: 'ATK Up β', icon: '/operators/vigna/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
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
      name: 'Hammer-On', icon: '/operators/vigna/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack Interval increases a bit; ATK +200%', spInit: 10, sp: 25, dur: '30s', rank: 'M3', note: "Hammer-On increases Vigna's attack interval by 0.5 seconds.",
      levels: [
        { level: '1', desc: 'Attack Interval increases a bit; ATK +90%', spInit: 0, sp: 35, dur: '20s' },
        { level: '2', desc: 'Attack Interval increases a bit; ATK +100%', spInit: 0, sp: 35, dur: '20s' },
        { level: '3', desc: 'Attack Interval increases a bit; ATK +110%', spInit: 0, sp: 35, dur: '20s' },
        { level: '4', desc: 'Attack Interval increases a bit; ATK +120%', spInit: 0, sp: 32, dur: '22s' },
        { level: '5', desc: 'Attack Interval increases a bit; ATK +130%', spInit: 0, sp: 32, dur: '22s' },
        { level: '6', desc: 'Attack Interval increases a bit; ATK +140%', spInit: 0, sp: 32, dur: '22s' },
        { level: '7', desc: 'Attack Interval increases a bit; ATK +150%', spInit: 5, sp: 28, dur: '25s' },
        { level: 'M1', desc: 'Attack Interval increases a bit; ATK +165%', spInit: 5, sp: 27, dur: '26s' },
        { level: 'M2', desc: 'Attack Interval increases a bit; ATK +180%', spInit: 5, sp: 26, dur: '27s' },
        { level: 'M3', desc: 'Attack Interval increases a bit; ATK +200%', spInit: 10, sp: 25, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Vigna's Badge", desc: 'Appointed as Vanguard Operator to exercise Charger responsibilities' },
    chgy: { code: 'CHG-Y', name: 'The Greatrock', stages: [
      { stage: 1, hp: '+80', atk: '+40', effect: "New trait: When attacking enemies with less than 40% of their max HP, increase ATK to 115%" },
      { stage: 2, hp: '+95', atk: '+55', effect: 'Fierce Stabbing improved: When attacking, has a 15% chance to increase ATK by +100%. The chance increases to 35% when a skill is active.' },
      { stage: 3, hp: '+110', atk: '+65', effect: 'Fierce Stabbing improved: When attacking, has a 20% chance to increase ATK by +100%. The chance increases to 40% when a skill is active.' },
    ]},
  },
  story: `'We Sarkaz can bear any burden! Weak words like 'compromise' do not, I repeat, do not exist in our vocabulary!'\n—Vigna\nThe quote above was added to her file at her insistence.\n\nOperator Vigna was born in Kazdel, though she had lived in Columbia with her parents ever since she could remember. The constant moving, uneasy childhood and rough streets of Columbia gave rise to Vigna's unruly side.\n\nAs a Sarkaz, Vigna saw a lot of discrimination against people like her, and often got into scuffles standing up against it. Of course, there were Sarkaz sympathizers, but they were few and far between.\n\nVigna saw clearly the prejudice rooted in misunderstanding and closed-mindedness. It depressed her. But for the sake of her parents and others who still support her, she has not once lowered her little head.`,
  profile: 'A hot-blooded young Sarkaz vanguard from Columbia who channels her frustrations into rock music and a heavily modified lance. Impulsive, defiant, and always looking for the next fight worth having.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 5%\nInfection will spread if unchecked at current progression, regular checkups and control needed.\n\n[Blood Originium-Crystal Density] 0.16u/L\nSince Sarkaz are susceptible to Oripathy, it is necessary for Operator Vigna to undergo regular tests and other assessments.\n—Silence` },
    { title: 'Archive File 2', content: `'To be alive is to want your voice heard, right? Here, take this electric guitar, we'll use it to... uh, yeah, express ourselves! Use it to express how we feel!'\n—Vigna\nThe quote above was, once again, added to the Operator's file at her insistence.\nRock-and-roll was viewed as pure noise by traditional musicians at its inception. But then an iconic band from Columbia performed in loud, roaring concerts and officially ushered in the revolutionary new era of music.\nThere is no bias in the world of rock, everyone has the right to express their thoughts and feeling in song.\nOperator Vigna saved up enough for a concert ticket. She was electrified all night by the wail of the guitars.` },
    { title: 'Archive File 3', content: `'I don't think there's ever an unusable weapon! People who say that just don't know the right way to use it. Anyway, since it's here, might as well use it!'\nThe above quote explains why Vigna chose the lance as her weapon.\nThis particular lance model never took off because of its unusual shape and esoteric features making it hard to master. Most of the lances were left to collect dust in the storehouse. Even though Vigna had enough cash for a better weapon, she saw the lance in the corner and right off the bat knew she had to have it.\nWielding the lance requires great strength and skill, so Vigna doubled her daily training regimen. And to improve the power of the lance, she contacted the original manufacturer and custom-ordered a new model in pursuit of the perfect build.\nAfter her modifications, her lance is now a light, keen, durable, and powerful weapon. Vigna herself has also stepped up her own personal combat training in order to improve her mastery over the unique tool.\nVigna has never felt she could or would ever quit. Every practice session, every battle all gave her an important sense of improvement, and she knew she wasn't even close to her limits.` },
    { title: 'Archive File 4', content: `Operator Vigna followed every step of Rhodes Island's recruitment protocol, from the submission of her resume, through the in-person interview, evaluation exams, all the way up to ultimately meeting the requirements and winning the approval of the top executives.\nAs for why she chose Rhodes Island, her answer was simple:\n'Life here will be exciting. Very, very exciting, I can feel it!'` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/charger-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/vigna/base.png', chibiSrc: '/operators/vigna/chibi.webm', illustrator: '下野宏铭' },
    { id: 'e2', label: 'Elite 2', src: '/operators/vigna/e2.png', chibiSrc: '/operators/vigna/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Holiday HD01', src: '/operators/vigna/skin1.png', chibiSrc: '/operators/vigna/chibi-skin1.webm', illustrator: '下野宏铭' },
    { id: 'skin2', label: 'Black Wave', src: '/operators/vigna/skin2.png', chibiSrc: '/operators/vigna/chibi-skin2.webm', illustrator: '下野宏铭' },
  ],
  portrait: '/operators/vigna/portrait.png',
  portraitFocus: { y: -6.5, x: 38.4, zoom: 269 },
}

export default vigna
