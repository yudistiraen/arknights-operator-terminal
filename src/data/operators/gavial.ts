import type { Operator, OperatorAlter } from '../../types'
import gavialTheInvincibleVoice from '../voices/gavial/gavial-the-invincible'
import gavialVoice from '../voices/gavial'

const gavial: Operator = {
  name: 'Gavial', fileNo: 'IU07', class: 'Medic', branch: 'Medic', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Credit Store'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Archosauria', gender: 'Female', birthplace: 'Undisclosed',
  birthday: 'May 1st', height: '163 cm', combatExp: '8 years', infectionStatus: 'Originium crystals are visible on the skin. Infection confirmed by medical examination.', illustrator: 'LLC',
  cv: { JP: 'Ayaka Suwa', CN: 'Chen Chaoqun', EN: 'Natalie Winter', KR: 'Kim Yu-rim' },
  voice: gavialVoice,
  trait: 'Restores the HP of allies',
  tags: ['Healing'],
  stats: { hp: 1580, atk: 480, def: 182, res: 0, block: 1, cost: 18, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
    e1: [
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
    ],
    e2: [
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Battlefield Medic', desc: "After Gavial is deployed, all [Medic] Operators' ATK +10% and DEF +100, lasting 15 seconds", elite: 'E2' },
  ],
  skills: [
    {
      name: "Vitality Restoration", icon: '/operators/gavial/skill-1.png', activation: "Auto", recovery: 'Auto Recovery',
      desc: "Buffs the target ally in the next healing, restoring HP by 35% of Gavial's ATK (by 70% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 5 seconds\nCan store 3 charge(s)", spInit: 0, sp: 8, rank: 'M3',
      note: "HP is restored once per second, calculated from Gavial's ATK at activation; not amplified by PHY-Y if Gavial is no longer on the field.",
      levels: [
        { level: "1", desc: "Buffs the target ally in the next healing, restoring HP by 20% of Gavial's ATK (by 40% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 4 seconds\nCan store 1 charge(s)", spInit: 0, sp: 10 },
        { level: "2", desc: "Buffs the target ally in the next healing, restoring HP by 21% of Gavial's ATK (by 42% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 4 seconds\nCan store 1 charge(s)", spInit: 0, sp: 10 },
        { level: "3", desc: "Buffs the target ally in the next healing, restoring HP by 22% of Gavial's ATK (by 44% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 4 seconds\nCan store 1 charge(s)", spInit: 0, sp: 10 },
        { level: "4", desc: "Buffs the target ally in the next healing, restoring HP by 23% of Gavial's ATK (by 46% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 4 seconds\nCan store 1 charge(s)", spInit: 0, sp: 9 },
        { level: "5", desc: "Buffs the target ally in the next healing, restoring HP by 24% of Gavial's ATK (by 48% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 4 seconds\nCan store 1 charge(s)", spInit: 0, sp: 9 },
        { level: "6", desc: "Buffs the target ally in the next healing, restoring HP by 25% of Gavial's ATK (by 50% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 4 seconds\nCan store 1 charge(s)", spInit: 0, sp: 9 },
        { level: "7", desc: "Buffs the target ally in the next healing, restoring HP by 26% of Gavial's ATK (by 52% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 4 seconds\nCan store 2 charge(s)", spInit: 0, sp: 9 },
        { level: "M1", desc: "Buffs the target ally in the next healing, restoring HP by 29% of Gavial's ATK (by 58% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 5 seconds\nCan store 2 charge(s)", spInit: 0, sp: 9 },
        { level: "M2", desc: "Buffs the target ally in the next healing, restoring HP by 32% of Gavial's ATK (by 64% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 5 seconds\nCan store 2 charge(s)", spInit: 0, sp: 9 },
        { level: "M3", desc: "Buffs the target ally in the next healing, restoring HP by 35% of Gavial's ATK (by 70% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 5 seconds\nCan store 3 charge(s)", spInit: 0, sp: 8 },
      ],
    },
    {
      name: "Vitality Restoration - Wide Range", icon: '/operators/gavial/skill-2.png', activation: "Manual", recovery: 'Auto Recovery',
      desc: "Buffs all allies within range immediately, restoring HP by 30% of Gavial's ATK (by 80% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 10 seconds", spInit: 50, sp: 60, rank: 'M3',
      note: "HP is restored once per second, calculated from Gavial's ATK at activation; not amplified by PHY-Y if Gavial is no longer on the field.",
      levels: [
        { level: "1", desc: "Buffs all allies within range immediately, restoring HP by 15% of Gavial's ATK (by 38% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 7 seconds", spInit: 30, sp: 60 },
        { level: "2", desc: "Buffs all allies within range immediately, restoring HP by 16% of Gavial's ATK (by 40% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 7 seconds", spInit: 31, sp: 60 },
        { level: "3", desc: "Buffs all allies within range immediately, restoring HP by 17% of Gavial's ATK (by 42% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 7 seconds", spInit: 32, sp: 60 },
        { level: "4", desc: "Buffs all allies within range immediately, restoring HP by 18% of Gavial's ATK (by 44% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 7 seconds", spInit: 35, sp: 60 },
        { level: "5", desc: "Buffs all allies within range immediately, restoring HP by 19% of Gavial's ATK (by 46% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 7 seconds", spInit: 36, sp: 60 },
        { level: "6", desc: "Buffs all allies within range immediately, restoring HP by 20% of Gavial's ATK (by 48% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 7 seconds", spInit: 37, sp: 60 },
        { level: "7", desc: "Buffs all allies within range immediately, restoring HP by 21% of Gavial's ATK (by 50% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 7 seconds", spInit: 40, sp: 60 },
        { level: "M1", desc: "Buffs all allies within range immediately, restoring HP by 24% of Gavial's ATK (by 60% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 8 seconds", spInit: 43, sp: 60 },
        { level: "M2", desc: "Buffs all allies within range immediately, restoring HP by 27% of Gavial's ATK (by 70% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 9 seconds", spInit: 46, sp: 60 },
        { level: "M3", desc: "Buffs all allies within range immediately, restoring HP by 30% of Gavial's ATK (by 80% of Gavial's ATK when the target's HP is lower than 50%) per second, lasting 10 seconds", spInit: 50, sp: 60 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Gavial's Badge", desc: 'Appointed as Medic Operator to exercise Medic responsibilities' },
    phyy: { code: 'PHY-Y', name: '"Follow Your Doctor\'s Orders"', stages: [
      { stage: 1, hp: '+30', atk: '+25', effect: 'New trait: Healing increased by 15% when healing a ground unit' },
      { stage: 2, hp: '+50', atk: '+30', effect: "Battlefield Medic improved: After deployment, all [Medic] Operators' ATK +10% and DEF +100, lasting 20 seconds" },
      { stage: 3, hp: '+70', atk: '+35', effect: "Battlefield Medic improved: After deployment, all [Medic] Operators' ATK +10% and DEF +100, lasting 25 seconds" },
    ]},
  },
  story: "Gavial hails from the Wilderness Will tribe that inhabits the jungles of Acahualla in Sargon. Although she was abandoned by her parents since as a baby, her tribesmen kindly raised her and let her grow up alongside them. As a child, Gavial also met both Tomimi and Zumama. The former would become her loyal friend and the latter would be her close rival. \n\nHowever, at some point in her past, Gavial contracted Oripathy after rescuing Tomimi from an Originium-infested iron mine. Even though her tribesmen did not discriminate against the Infected, Gavial was treated as fragile due to her illness. This treatment frustrated her and the little girl dared to challenge them by participating the Mahuizzotia festival. Her surprising victory once again won back their respect, paving her way to become the next Great Chief and even a candidate as a Lord Ameer in the future.\n\nBy the time she grew up, Gavial left Acahualla to study medicine, which she realized was her calling. After working as a mercenary doctor for some time, she became a medical staff of Rhodes Island after meeting Warfarin and Kal'tsit. Her precise decision in times of crises makes her a professional combat medic where she could also use her superb fighting skills on the battlefield. On the other hand, Gavial is also feared by others due to her preference for primitive methods in solving problems such as healing her patients through brute force.",
  profile: "Gavial is a former mercenary, forced to leave home after contracting Oripathy and ultimately joining Rhodes Island after a period of instability.\nAbove-average in physical strength, destructive prowess and tactical skills, she nonetheless opted to be a combat medic.",
  records: [
    {
      title: "Clinical Analysis",
      content: "Imaging tests for this Operator showed blurry outlines of internal organs with visible dark spots. Unusually high concentrations of Originium particles were present in her circulatory system, indicating infection and confirming her as Infected at this stage.\n\n[Cell-Originium Assimilation] 15%\nMinor infection, nothing to be concerned about!\n\n[Blood Originium-Crystal Density] 0.26u/L\nI know my own body the best, of course. Rhodes Island's course of treatment has been effective in controlling and stabilizing the disease. However, physical performance has been affected considerably, down peak levels. Guess it's time to do some rehab...\n— Gavial",
    },
    {
      title: "Archive File 1",
      content: "Gavial is a doctor who defies all conventional definitions of the word, people assume she'd sooner smash someone's head in with her staff than use it to heal the sick.\nShe is straightforward, and it becomes clear she is a very dedicated physician only after frequent contact. Until then, she often has a lot of work to do to convince patients of her skills.\nGenerally will not let anyone touch her tail.",
    },
    {
      title: "Archive File 2",
      content: "To most people, the Archosauria are a warrior race, all of whom are combat ready. Thus, a physician like Gavial is indeed a one-of-a-kind anomaly.\nWhat's even more curious is that while she does possess the natural aptitude for healing that is so rare in an Archosaurian, that is not to say she should shy away from battle. Quite the opposite, her overall fighting prowess is rather remarkable. So why did she choose to become a healer? Fortunately, she doesn't mind elaborating on her past:\nShe was one of the most renowned warriors of her tribe, but once she realized she has the talent for healing Arts, she chose to save lives rather than end them.\n...Yes, it was simple as that, just like Gavial. Even when she was ostracized and eventually exiled from her home, she's never wavered or regretted it.",
    },
    {
      title: "Archive File 3",
      content: "How Gavial came to contract Oripathy, she explained it as succinctly as how she became a healer:\nRan into a mining area to save lives and got infected herself.\nShe speaks of getting ostracized by her kin for becoming a healer and the discrimination she faced due to her infection as if they were trivial matters.\nShe finds it fulfilling to be here at Rhodes Island, treating wounds and illnesses.\nWe all owe Gavial our respect, and should learn from her generous spirit.",
    },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/gavial/base.png', chibiSrc: '/operators/gavial/chibi.webm', chibiMoveSrc: '/operators/gavial/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.6, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "LLC" },
    { id: 'e2', label: "Elite 2", src: '/operators/gavial/e2.png', chibiSrc: '/operators/gavial/chibi.webm', chibiMoveSrc: '/operators/gavial/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.6, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "LLC" },
    { id: 'skin1', label: "Combat Medic", src: '/operators/gavial/skin1.png', chibiSrc: '/operators/gavial/chibi-skin1.webm', chibiMoveSrc: '/operators/gavial/chibi-move-skin1.webm', chibiFraming: { scale: 1.31, offsetXPercent: 1.9, offsetYPercent: 3.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "LLC" },
  ],
  portrait: '/operators/gavial/portrait.png',
}

const gavialInvincible: OperatorAlter = {
  name: 'Gavial the Invincible', fileNo: 'RF22', class: 'Guard', branch: 'Centurion', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Limited Headhunting - Carnival'],
  voice: gavialTheInvincibleVoice,
  position: 'Melee', trait: 'Attacks all blocked enemies',
  tags: ['Nuker', 'DPS', 'Survival'],
  illustrator: 'LLC',
  stats: { hp: 2906, atk: 816, def: 451, res: 0, block: 3, cost: 24, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [
      [2,1],
    ],
    e1: [
      [2,1],
    ],
    e2: [
      [2,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Battleaxe', desc: 'Increases ATK and DEF by 10%, increased by a further 4% for each blocked enemy', elite: 'E2' },
    { name: 'Medical Background', desc: "Increases this unit's healing received by 20%, increased to 40% when under half HP", elite: 'E2' },
  ],
  skills: [
    {
      name: "Precise Thrashing", icon: '/operators/gavial/invincible/skill-1.png', activation: "Manual", recovery: 'Auto Recovery',
      desc: "ATK +80%, each attack restores HP to this unit equal to 40% of the damage dealt", spInit: 10, sp: 25, dur: "25s", rank: 'M3',
      levels: [
        { level: "1", desc: "ATK +30%, each attack restores HP to this unit equal to 25% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "2", desc: "ATK +35%, each attack restores HP to this unit equal to 25% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "3", desc: "ATK +40%, each attack restores HP to this unit equal to 25% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "4", desc: "ATK +45%, each attack restores HP to this unit equal to 30% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "5", desc: "ATK +50%, each attack restores HP to this unit equal to 30% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "6", desc: "ATK +55%, each attack restores HP to this unit equal to 30% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "7", desc: "ATK +60%, each attack restores HP to this unit equal to 35% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "M1", desc: "ATK +65%, each attack restores HP to this unit equal to 35% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "M2", desc: "ATK +70%, each attack restores HP to this unit equal to 35% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
        { level: "M3", desc: "ATK +80%, each attack restores HP to this unit equal to 40% of the damage dealt", spInit: 10, sp: 25, dur: "25s" },
      ],
    },
    {
      name: "Chainsaw Assault", icon: '/operators/gavial/invincible/skill-2.png', activation: "Manual", recovery: 'Auto Recovery',
      desc: "Attack Range expands, ATK +180%, DEF +50%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 35, dur: "40s", rank: 'M3', range: [[0,1,1],[2,1,1],[0,1,1]],
      note: "Pull force 1.",
      levels: [
        { level: "1", desc: "Attack Range expands, ATK +80%, DEF +30%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 45, dur: "30s" },
        { level: "2", desc: "Attack Range expands, ATK +90%, DEF +30%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 44, dur: "31s" },
        { level: "3", desc: "Attack Range expands, ATK +100%, DEF +30%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 43, dur: "32s" },
        { level: "4", desc: "Attack Range expands, ATK +110%, DEF +35%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 42, dur: "33s" },
        { level: "5", desc: "Attack Range expands, ATK +120%, DEF +35%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 41, dur: "34s" },
        { level: "6", desc: "Attack Range expands, ATK +130%, DEF +35%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 40, dur: "35s" },
        { level: "7", desc: "Attack Range expands, ATK +140%, DEF +40%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 39, dur: "36s" },
        { level: "M1", desc: "Attack Range expands, ATK +150%, DEF +40%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 38, dur: "37s" },
        { level: "M2", desc: "Attack Range expands, ATK +165%, DEF +40%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 37, dur: "38s" },
        { level: "M3", desc: "Attack Range expands, ATK +180%, DEF +50%; When attacking unblocked enemies, pulls them towards this unit moderately", spInit: 25, sp: 35, dur: "40s" },
      ],
    },
    {
      name: "Soul of the Jungle", icon: '/operators/gavial/invincible/skill-3.png', activation: "Manual", recovery: 'Auto Recovery',
      desc: "ATK +140%, ASPD +100, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 25, sp: 35, dur: "25s", rank: 'M3',
      note: "The damage delay is calculated after most other damage mitigation effects.",
      levels: [
        { level: "1", desc: "ATK +70%, ASPD +40, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 20, sp: 40, dur: "25s" },
        { level: "2", desc: "ATK +75%, ASPD +40, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 20, sp: 40, dur: "25s" },
        { level: "3", desc: "ATK +80%, ASPD +40, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 20, sp: 40, dur: "25s" },
        { level: "4", desc: "ATK +85%, ASPD +60, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 20, sp: 40, dur: "25s" },
        { level: "5", desc: "ATK +90%, ASPD +60, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 20, sp: 40, dur: "25s" },
        { level: "6", desc: "ATK +95%, ASPD +60, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 20, sp: 40, dur: "25s" },
        { level: "7", desc: "ATK +100%, ASPD +80, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 21, sp: 39, dur: "25s" },
        { level: "M1", desc: "ATK +110%, ASPD +80, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 22, sp: 38, dur: "25s" },
        { level: "M2", desc: "ATK +120%, ASPD +80, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 23, sp: 37, dur: "25s" },
        { level: "M3", desc: "ATK +140%, ASPD +100, Block +2; While this skill is active, this unit only takes 50% of incoming damage, with the remaining amount dealt as HP loss over 20 seconds after this skill ends", spInit: 25, sp: 35, dur: "25s" },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Gavial the Invincible's Badge", desc: 'Appointed as Guard Operator to exercise Centurion responsibilities' },
    cenx: { code: 'CEN-X', name: 'The Binding of Gavial', stages: [
      { stage: 1, hp: '+150', atk: '+45', def: '+23', effect: 'Trait improved: Attacks all blocked enemies; ATK is increased to 110% when attacking blocked enemies' },
      { stage: 2, hp: '+180', atk: '+60', def: '+29', effect: 'Battleaxe improved: Increases ATK and DEF by 13%, increased by a further 4% for each blocked enemy' },
      { stage: 3, hp: '+200', atk: '+73', def: '+34', effect: 'Battleaxe improved: Increases ATK and DEF by 13%, increased by a further 5% for each blocked enemy' },
    ]},
    ceny: { code: 'CEN-Y', name: 'Sanding and Polishing', stages: [
      { stage: 1, hp: '+155', atk: '+21', def: '+50', effect: 'New trait: While above 50% HP, reduces the amount of Physical damage taken by 20%' },
      { stage: 2, hp: '+180', atk: '+26', def: '+63', effect: "Medical Background improved: Enemies blocked by this unit receive 5% Physical Fragility; increases this unit's healing received by 25%, increased to 50% when under half HP" },
      { stage: 3, hp: '+200', atk: '+29', def: '+71', effect: "Medical Background improved: Enemies blocked by this unit receive 10% Physical Fragility; increases this unit's healing received by 30%, increased to 60% when under half HP" },
    ]},
  },
  profile: "Gavial remains a member of the Rhodes Island Medical Department, but whenever Rhodes Island needs her combat prowess instead of her medical knowledge, she won't hesitate to pick up her battleaxe and charge toward her enemies.",
  records: [
    {
      title: "Clinical Analysis",
      content: "Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 15.3%\nThis hasn't changed much since I joined Rhodes Island. Nothing to worry about.\n\n[Blood Originium-Crystal Density] 0.27u/L\nI know my own body better than anyone, but it's thanks to all the other operators at Medical that I've been able to keep my Oripathy under control so well. Maybe I should invite everyone to Acahualla for a vacation one of these days.\n–Gavial",
    },
    {
      title: "Archive File 1",
      content: "Most Operators have remarked that Gavial made a very strong impression with her outfit when she returned from Acahualla. At first, there were rumors that it was the equipment she inherited from her tribe before her decision to study medicine. Soon, though, the rumors got out of hand. In the end, people were gossiping that \"Gavial once used the axe to cut open a waterfall at the highest cliff in Acahualla, creating a new landmark there.\" Although the origins of such absurd rumors cannot be ascertained, Operator Tomimi seemed to really take a liking to them, and added her own fuel to the fire as the story mutated.\nTomimi's personal interests aside, the fact is that it was Operator Eunectes who forged Gavial's new equipment. When the two of them received Tomimi's message that Acahualla could be facing a disaster, Gavial made the request for new gear. Eunectes then quickly fabricated the entire set, from the weapons and armor to even the accessories, out of the finest materials, yet it is the imposing yet easy-to-wield battleaxe that Gavial instantly took a liking to.",
    },
    {
      title: "Archive File 2",
      content: "Although the disaster that Tomimi said in her letter would affect all of Acahualla was more or less fabricated by Stitch Canvas (now Rhodes Island Operator Minimalist), the Durin city beneath Acahualla, Zeruertza, was indeed facing a calamity. Fortunately, thanks to the combined efforts of the local residents and the Rhodes Island Operators present, the Zeruertza citizens were all able to evacuate to the surface before it was too late, and no lives were lost during the incident.\nIt's worth mentioning that Gavial played a pivotal leadership role during the handling of the crisis. She was the first to propose having the Durins evacuate to the surface, persuaded the plan's opponents, was one of the last to evacuate, and even maintained order when the Durins built their settlement on the surface, ensuring that the construction would be completed on time. Operators not involved with the incident have all expressed disbelief upon hearing that it was Gavial who talked her opponents over, but to those who experienced the events personally, her identity as both a warrior and a doctor had come together, and it all seemed to happen perfectly naturally, with nothing feeling strange about it whatsoever.\n\"What were we supposed to do? She's Gavial.\"",
    },
    {
      title: "Archive File 3",
      content: "That said, our Medical Department personnel nonetheless noticed a subtle change in Gavial. Not that she's become more melancholic or moody or anything like that, but she's now more confident and talkative than ever, and enjoys talking about her homeland more.\nTo be clear, she's never had anything against talking about her hometown, even back when she first joined Rhodes Island. However, she simply viewed it as the place she was from, and nothing more. She had no reason to avoid the topic, but also no reason to bring it up, so if Rhodes Island wasn't going to dig any deeper, she would naturally have no reason to ever discuss Acahualla.\nYet ever since her bizarre rainforest vacation, Rhodes Island has started to see more and more Acahuallan Operators join its ranks, and Gavial has started to open up about her home more as well, which has led to us learning more about the region by the day. This was a forest that was once considered no man's land, but is home to all sorts of tribes, big and small–such as the battle-obsessed Tiacauh. However, it has also been slowly and irreversibly industrializing... and has now seen several hundred thousand Durins pouring in from underground. With all these factors coming together, even the planner with the greatest foresight in the world would find themselves struck with a headache when trying to imagine Acahualla's future.\nBut Gavial doesn't think so at all.\nIn her eyes, she, Tomimi, Zumama, Inam, and all the valiant Tiacauh will be able to overcome any challenges that Acahualla might face. She has her friends' complete, unreserved trust, and she too wholeheartedly trusts her friends. No matter how difficult the path forward is, even if she must really break open a waterfall at the tallest cliff in Acahualla, that wouldn't be entirely unrealistic with her friends' full support. And so, why not take pride in her homeland?\nOf course, there's little she can do about the fact that her friends trusts her fists far more than her medical acumen. Perhaps that's a good worry to have, though.",
    },
    {
      title: "Archive File 4",
      content: "[Classified Log]\nIn the short term, the Durins' move to the surface does not seem to have had much of an apparent effect on Acahualla. Thanks to their ingenious camouflage, they have thus far been able to hide Acahualla's industrialization from the agents of Sargon's rulers, even causing them to return to the court prior to the arrival of the first wave of Durins. This has led to Inam successfully receiving recognition as Acahualla's lord ameer, earning her equal standing with the other lords ameer who thirst for territory, population, and production capacity, and thus ensuring Acahualla's laws and principles remain intact, all while keeping Sargon's highest ranks oblivious to the changes that the territory has seen.\nIf both the surface Tiacauh and the underground Durins are able to live alongside each other peacefully, the status quo should last for a very long time. However, there is no going back to Zeruertza. The sudden surge in population will undoubtedly exhaust Acahualla's resources at a dramatic pace, and Eunectes's tribe has already benefited greatly from Durin technologies. In the long term, there is no way the changes that have occurred in Acahualla can stay hidden forever. There will come a day when they must confront these external pressures.\nIt's hard to say just how much thought Gavial had given the idea before she suggested the Durins evacuate to the surface, but she evidently understood the gravity and responsibility that the decision entailed. Otherwise, considering how rarely she does so, she would not have hesitated like she did when the Acahualla lord ameer candidacy was being decided. She is, after all, a member of Rhodes Island's Medical Department. She would be in quite a difficult position if she had to choose between her ideal of treating her patients and the future of Acahualla.\nIn her time of need, her friends stepped up and helped her out of her predicament, but that doesn't mean Gavial gave up on balancing the scales. She simply chose the most comfortable and suitable solution for both herself and Acahualla.\nIf anyone has any doubts about this conclusion, they can very well pay Acahualla a visit themselves and listen to its people sing Gavial's praises, gaze upon the monument in the center of Acahualla that's growing both larger and further from completion every day, and get a feel for themselves just how much unity Gavial's name can bring to Acahualla. And that's not even counting her own personal strength.\nIf Acahualla ever finds itself facing some kind of nigh insurmountable threat, Gavial will undoubtedly drop everything to return to her homeland and forge a new path, with her fists and battleaxe.",
    },
    {
      title: "Promotion Record",
      content: "[Urgent]\nTo Inam:\nI really think we should be building something more practical than monuments and statues with the stones we have, but you said the Tiacauh are clamoring too loudly for them, and I can understand. I wouldn't want to go against them either, if that's what they want.\nYou also said the Tiacauh held a vote, like the Durin, over the finer details, like how many people they are making statues for, what poses they would take, and whatnot. And even though they ended up brawling over everything anyway, that's still a step in the right direction.\nThat said!\nNo way will I accept them giving my statue a thick tail!\nI'll say this again. Even if those thick-tailers get their way in both the vote and the fight afterward, I am not signing off on a thick tail! This is a huge decision. You guys gotta at least take my feelings about being immortalized with a thick tail into account.\nMake sure you include the final decision over the statue's tail with the next letter. If the thick-tailers are still in the lead, I'm gonna have to take a vacation to come persuade everyone back in Acahualla!\nGavial",
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/centurion-branch.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/gavial/invincible/base.png', chibiSrc: '/operators/gavial/invincible/chibi.webm', chibiMoveSrc: '/operators/gavial/invincible/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 4.5, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "LLC" },
    { id: 'e2', label: "Elite 2", src: '/operators/gavial/invincible/e2.png', chibiSrc: '/operators/gavial/invincible/chibi.webm', chibiMoveSrc: '/operators/gavial/invincible/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 4.5, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "LLC", l2d: { skel: '/operators/gavial/l2d/invincible-e2.skel', atlas: '/operators/gavial/l2d/invincible-e2.atlas', backdrop: { src: '/operators/gavial/l2d/invincible-e2-bg.png', x: -830, y: 120, width: 1699.6, height: 2079.1 }, overlays: [{ src: '/operators/gavial/l2d/invincible-e2-fg1.png', x: -1092.4, y: 28.6, width: 2129.5, height: 1790 }] } },
    { id: 'skin1', label: "Holiday HD26", src: '/operators/gavial/invincible/skin1.png', chibiSrc: '/operators/gavial/invincible/chibi-skin1.webm', chibiMoveSrc: '/operators/gavial/invincible/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: 0.2, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "SculLhunter" },
  ],
  portrait: '/operators/gavial/invincible/portrait.png',
}

gavial.alter = [gavialInvincible]

export default gavial
