import type { Operator } from '../../types'

const liskarm: Operator = {
  name: 'Liskarm', fileNo: 'BS02', class: 'Defender', branch: 'Sentry Protector', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Blacksteel', position: 'Melee', race: 'Vouivre', gender: 'Female', birthplace: 'Vouivre',
  birthday: 'May 18th', height: '156 cm', combatExp: '3 years', infectionStatus: 'Medical tests confirm uninfected status.', illustrator: 'TOKI',
  cv: { JP: 'Yui Ishikawa', CN: 'Ruoyu Zhang', EN: 'Megan Maczko', KR: 'Yi Sae-ah' },
  trait: 'Blocks 3 enemies and attacks from long range',
  tags: ['Defense', 'DPS'],
  stats: { hp: 3240, atk: 470, def: 755, res: 0, block: 3, cost: 22, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[0, 2, 1, 1, 0]],
    e1: [[0, 2, 1, 1, 0]],
    e2: [[0, 2, 1, 1, 0]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Tactical Defense', desc: 'Restores 1 Skill Point to this Operator and a random ally in the surrounding tiles when attacked', elite: 'E1' },
    { name: 'Thunder Resistance', desc: 'RES +10', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Charged Defense', icon: '/operators/liskarm/skill-1.png', activation: 'Auto', recovery: 'Defensive Recovery',
      desc: 'Blocks the next source of damage; DEF +100% for 8 seconds\nAutomatically activated', spInit: 0, sp: 18, rank: 'M3',
      levels: [
        { level: '1', desc: 'Blocks the next source of damage; DEF +40% for 8 seconds\nAutomatically activated', spInit: 0, sp: 24 },
        { level: '2', desc: 'Blocks the next source of damage; DEF +45% for 8 seconds\nAutomatically activated', spInit: 0, sp: 24 },
        { level: '3', desc: 'Blocks the next source of damage; DEF +50% for 8 seconds\nAutomatically activated', spInit: 0, sp: 24 },
        { level: '4', desc: 'Blocks the next source of damage; DEF +60% for 8 seconds\nAutomatically activated', spInit: 0, sp: 22 },
        { level: '5', desc: 'Blocks the next source of damage; DEF +65% for 8 seconds\nAutomatically activated', spInit: 0, sp: 22 },
        { level: '6', desc: 'Blocks the next source of damage; DEF +70% for 8 seconds\nAutomatically activated', spInit: 0, sp: 22 },
        { level: '7', desc: 'Blocks the next source of damage; DEF +80% for 8 seconds\nAutomatically activated', spInit: 0, sp: 20 },
        { level: 'M1', desc: 'Blocks the next source of damage; DEF +85% for 8 seconds\nAutomatically activated', spInit: 0, sp: 20 },
        { level: 'M2', desc: 'Blocks the next source of damage; DEF +90% for 8 seconds\nAutomatically activated', spInit: 0, sp: 20 },
        { level: 'M3', desc: 'Blocks the next source of damage; DEF +100% for 8 seconds\nAutomatically activated', spInit: 0, sp: 18 },
      ],
    },
    {
      name: 'Counter Arc', icon: '/operators/liskarm/skill-2.png', activation: 'Manual', recovery: 'Defensive Recovery',
      desc: 'Attack Interval increases, ATK +200%, attacks deal Arts damage to at most 4 enemies and have 25% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 34, dur: '20s', rank: 'M3',
      note: "Counter Arc increases Liskarm's attack interval by 70%, extending it to 2.04 seconds (before modifiers).",
      levels: [
        { level: '1', desc: 'Attack Interval increases, ATK +85%, attacks deal Arts damage to at most 3 enemies and have 10% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 44, dur: '20s' },
        { level: '2', desc: 'Attack Interval increases, ATK +90%, attacks deal Arts damage to at most 3 enemies and have 10% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 43, dur: '20s' },
        { level: '3', desc: 'Attack Interval increases, ATK +95%, attacks deal Arts damage to at most 3 enemies and have 10% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 42, dur: '20s' },
        { level: '4', desc: 'Attack Interval increases, ATK +105%, attacks deal Arts damage to at most 3 enemies and have 15% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 41, dur: '20s' },
        { level: '5', desc: 'Attack Interval increases, ATK +110%, attacks deal Arts damage to at most 3 enemies and have 15% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 40, dur: '20s' },
        { level: '6', desc: 'Attack Interval increases, ATK +115%, attacks deal Arts damage to at most 3 enemies and have 15% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 39, dur: '20s' },
        { level: '7', desc: 'Attack Interval increases, ATK +125%, attacks deal Arts damage to at most 3 enemies and have 20% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 38, dur: '20s' },
        { level: 'M1', desc: 'Attack Interval increases, ATK +150%, attacks deal Arts damage to at most 3 enemies and have 20% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 37, dur: '20s' },
        { level: 'M2', desc: 'Attack Interval increases, ATK +175%, attacks deal Arts damage to at most 3 enemies and have 20% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 36, dur: '20s' },
        { level: 'M3', desc: 'Attack Interval increases, ATK +200%, attacks deal Arts damage to at most 4 enemies and have 25% chance to Stun the hit targets for 1 seconds\nLiskarm is Stunned for 5 seconds after the skill duration', spInit: 0, sp: 34, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Liskarm's Badge", desc: 'Appointed as Defender Operator to exercise Sentry Protector responsibilities' },
    sptx: { code: 'SPT-X', name: "Stunner's Storage", stages: [
      { stage: 1, atk: '+38', def: '+30', effect: 'New trait: Reveals Invisible enemies within range' },
      { stage: 2, atk: '+47', def: '+38', effect: 'Tactical Defense improved: When this unit is attacked, restores 1 SP to this unit and a random ally within the surrounding tiles, with a 30% chance to restore 1 additional SP to this unit' },
      { stage: 3, atk: '+52', def: '+43', effect: 'Tactical Defense improved: When this unit is attacked, restores 1 SP to this unit and a random ally within the surrounding tiles, with a 60% chance to restore 1 additional SP to this unit' },
    ]},
  },
  story: `Liskarm is a pragmatic yet determined Vouivre from Blacksteel's B.P.R.S. unit. Alongside Franka, she is among the Blacksteel personnel contracted by Rhodes Island where she serves in security and defense roles, utilizing a handgun and a Flash Shield — ballistic shield capable of emitting intensely bright light and paralyzing electric shocks through Originium Arts — in combat. Liskarm also dreams to form her own mercenary force in order to restore peace in her homeland, the Vouivre Alliance.`,
  profile: `Liskarm is an employee of the BlackSteel International Private Security Consultants. She provides security and defense services for multinational corporations, government agencies and organizations without border regions, and has accumulated rich practical experience in conflict zones.\nShe is currently providing professional security and advice to Rhodes Island during the security and consulting period.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed clear outline of internal organs without any unusual dark spot. No unusual traces of Originium particles present in her system, no signs of infection, confirming her as Non-infected.\n\n[Cell-Originium Assimilation] 0%\nOperator Liskarm showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.10u/L\nOperator Liskarm frequently battled in Originium-polluted areas but has not yet been infected to date due to proper protective measures.` },
    { title: 'Archive File 1', content: `"By the books", "as pragmatic as one gets" are how all people who worked with Liskarm describe her.\nIt's always the same steady rhythm to her fighting: Attack, advance, ascertain situation, timely communication with allies, review strategy, rinse and repeat.\nAs Franka's mission partner, Liskarm considers Franka's combat style is rather risky. She cannot comprehend why Franka would deliberately seek out thrills in combat. But Liskarm stays true to her obligations as a partner and always reminds Franka of the correct standard operating procedure, trying to nip potential recklessness on Franka's part in the bud.\nShe can and will endure the tongue-lashing from Franka afterward, since nothing is more important than survival.` },
    { title: 'Archive File 2', content: `Liskarm's Flash Shield is actually an enlarged Arts staff fixture, activated only by Liskarm's own unique talent.\nWhen activated, the shield emits over 54,000,000 lumen of intense light, plus destructive electrical shock covering a conic area 5 meters in radius. It is terrifyingly devastating when released in small, confined spaces.\nHowever, these Arts drain a lot of energy from Liskarm, exhausting her completely. Therefore, Blacksteel commanders often paired her with a melee specialist. Currently, Franka assumes that role.\nLiskarm has repeatedly complained to the superiors about reining Franka in, since after every lightning strike, Franka would take advantage of a sapped, immobile Liskarm with pranks.\nNote: When she uses the electricity-based powers, her horns illuminate in a turquoise glow.` },
    { title: 'Archive File 3', content: `When her partner Franka's infection was confirmed, Liskarm immediately requested to be reassigned to Rhodes Island to be with her.\nLiskarm felt Franka would want someone she knew for company. As well, she has gotten used to working with Franka in combat and believed Franka felt the same, too.\nHowever, Franka denied it and even requested that Liskarm be sent back. To her, she couldn't wait to get rid of the babysitter, only to see her (former) partner going through protocols at Human Resources the next day. That's just not cool.\nAccording to witness accounts from many Operators, the two Blacksteel Operators jostled each other coming out of HR, both threatening to complain to the other's superior.` },
    { title: 'Archive File 4', content: `Liskarm wants to form her own security contractor business in the future. Working for Blacksteel Worldwide is only the first step to that goal.\nBecause Liskarm is lacking in physical stature, and the fact that her race was not reputed to be skilled in either fighting or in Originium Arts, no one ever expected much out of the small Vouivre girl from the sticks. Even she agreed with that outlook at one point.\nBut her steady-does-it and stubbornly patient personality always compelled her to devote more time and effort than her peers in fulfilling her goals. When she was an intern with Blacksteel, Liskarm tagged along on every battle she could, started at the bottom and made her way up to become a reliable, competent security specialist.\nLiskarm's hometown is located in an area controlled by the Vouivre Alliance, a small city primarily relying on mining, quarrying and stone processing. To maintain viability of these industries, the city often operated in the deserts and mountains near the mines and quarries--where nomadic robbers and their mercenary cohorts roamed.\nTo counter potential plunders, the city formed a defense force, but inadequate training and poor equipment forced it to turn to the more reputable security contractors.\nThe contractors who fiddled with newfangled weapon and gear, speaking to each other in foreign languages, repelling invaders in the blink of an eye were her very first memory of this business.\nShe didn't do it for money or thrill of combat. She just wanted to use her weapons to bring peace, not chaos, to the people.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/sentry-protector-branch.png', factionIcon: '/icons/factions/blacksteel.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/liskarm/base.png', chibiSrc: '/operators/liskarm/chibi.webm', chibiMoveSrc: '/operators/liskarm/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 1 }, chibiDetailFraming: { scale: 1, offsetXPercent: -1, offsetYPercent: 2 }, illustrator: 'TOKI' },
    { id: 'e2', label: 'Elite 2', src: '/operators/liskarm/e2.png', chibiSrc: '/operators/liskarm/chibi.webm', chibiMoveSrc: '/operators/liskarm/chibi-move.webm', chibiFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: 1 }, chibiDetailFraming: { scale: 1, offsetXPercent: -1, offsetYPercent: 2 }, illustrator: 'TOKI' },
    { id: 'skin1', label: 'Spring Vouivre', src: '/operators/liskarm/skin1.png', chibiSrc: '/operators/liskarm/chibi-skin1.webm', chibiMoveSrc: '/operators/liskarm/chibi-move-skin1.webm', chibiFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: 1 }, chibiDetailFraming: { scale: 1, offsetXPercent: -2, offsetYPercent: 2 }, illustrator: 'TOKI' },
    { id: 'skin2', label: 'Overload', src: '/operators/liskarm/skin2.png', chibiSrc: '/operators/liskarm/chibi-skin2.webm', chibiMoveSrc: '/operators/liskarm/chibi-move-skin2.webm', chibiFraming: { scale: 1.6, offsetXPercent: 0, offsetYPercent: -15 }, chibiDetailFraming: { scale: 1.5, offsetXPercent: 5, offsetYPercent: -15 }, illustrator: 'Cenm0' },
  ],
  portrait: '/operators/liskarm/portrait.png',
  portraitFocus: { y: -1.7, x: 42.8, zoom: 301 },
}

export default liskarm
