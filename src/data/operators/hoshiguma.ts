import type { Operator, OperatorAlter } from '../../types'

const hoshiguma: Operator = {
  name: 'Hoshiguma', fileNo: 'LM05', class: 'Defender', branch: 'Protector', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Lungmen Guard Department', position: 'Melee', race: 'Oni', gender: 'Female', birthplace: 'Higashi',
  birthday: 'January 20th', height: '184 cm', combatExp: '7 years', infectionStatus: 'Uninfected, confirmed by medical examination.', illustrator: 'infukun',
  cv: { JP: 'Kiyono Yasuno', CN: 'Chen Yu', EN: 'Meaghan Martin', KR: 'Lee Sae-byeok' },
  trait: 'Blocks 3 enemies',
  tags: ['Defense', 'DPS'],
  stats: { hp: 3850, atk: 430, def: 723, res: 0, block: 3, cost: 23, aspd: '1.2s', rdp: '70s' },
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
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Outstanding', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Tactical Armor', desc: '25% chance to resist damage', elite: 'E2' },
    { name: 'Special Operation Strategy', desc: 'When deployed, allied Defender Operators gain +6% DEF', elite: 'E2' },
  ],
  skills: [
    {
      name: "Warpath", icon: '/operators/hoshiguma/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: "DEF +80%; ATK +40%", spInit: 20, sp: 40, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: "DEF +35%; ATK +10%", spInit: 20, sp: 50, dur: '20s' },
        { level: '2', desc: "DEF +40%; ATK +10%", spInit: 20, sp: 49, dur: '21s' },
        { level: '3', desc: "DEF +45%; ATK +10%", spInit: 20, sp: 48, dur: '22s' },
        { level: '4', desc: "DEF +50%; ATK +20%", spInit: 20, sp: 47, dur: '23s' },
        { level: '5', desc: "DEF +55%; ATK +20%", spInit: 20, sp: 46, dur: '24s' },
        { level: '6', desc: "DEF +60%; ATK +20%", spInit: 20, sp: 45, dur: '25s' },
        { level: '7', desc: "DEF +65%; ATK +30%", spInit: 20, sp: 44, dur: '26s' },
        { level: 'M1', desc: "DEF +70%; ATK +30%", spInit: 20, sp: 43, dur: '27s' },
        { level: 'M2', desc: "DEF +75%; ATK +30%", spInit: 20, sp: 42, dur: '28s' },
        { level: 'M3', desc: "DEF +80%; ATK +40%", spInit: 20, sp: 40, dur: '30s' },
      ],
    },
    {
      name: "Thorns", icon: '/operators/hoshiguma/skill-2.png', activation: 'Passive', recovery: 'Passive',
      desc: "DEF +30%\nDeals 100% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0, rank: 'M3',
      levels: [
        { level: '1', desc: "DEF +5%\nDeals 50% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: '2', desc: "DEF +7%\nDeals 55% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: '3', desc: "DEF +9%\nDeals 60% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: '4', desc: "DEF +13%\nDeals 65% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: '5', desc: "DEF +15%\nDeals 70% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: '6', desc: "DEF +17%\nDeals 75% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: '7', desc: "DEF +21%\nDeals 80% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: 'M1', desc: "DEF +24%\nDeals 85% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: 'M2', desc: "DEF +27%\nDeals 90% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
        { level: 'M3', desc: "DEF +30%\nDeals 100% of ATK as Physical damage to targets that attack Hoshiguma", spInit: 0, sp: 0 },
      ],
    },
    {
      name: "Saw of Strength", icon: '/operators/hoshiguma/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "ATK +140%; DEF +90%; Cuts all targets in the frontal tile with the shield", spInit: 30, sp: 50, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: "ATK +65%; DEF +40%; Cuts all targets in the frontal tile with the shield", spInit: 20, sp: 60, dur: '25s' },
        { level: '2', desc: "ATK +70%; DEF +40%; Cuts all targets in the frontal tile with the shield", spInit: 20, sp: 59, dur: '25s' },
        { level: '3', desc: "ATK +75%; DEF +40%; Cuts all targets in the frontal tile with the shield", spInit: 20, sp: 58, dur: '25s' },
        { level: '4', desc: "ATK +80%; DEF +50%; Cuts all targets in the frontal tile with the shield", spInit: 23, sp: 57, dur: '25s' },
        { level: '5', desc: "ATK +85%; DEF +50%; Cuts all targets in the frontal tile with the shield", spInit: 23, sp: 56, dur: '25s' },
        { level: '6', desc: "ATK +90%; DEF +50%; Cuts all targets in the frontal tile with the shield", spInit: 23, sp: 55, dur: '25s' },
        { level: '7', desc: "ATK +95%; DEF +60%; Cuts all targets in the frontal tile with the shield", spInit: 26, sp: 54, dur: '25s' },
        { level: 'M1', desc: "ATK +110%; DEF +70%; Cuts all targets in the frontal tile with the shield", spInit: 27, sp: 53, dur: '25s' },
        { level: 'M2', desc: "ATK +125%; DEF +80%; Cuts all targets in the frontal tile with the shield", spInit: 28, sp: 52, dur: '25s' },
        { level: 'M3', desc: "ATK +140%; DEF +90%; Cuts all targets in the frontal tile with the shield", spInit: 30, sp: 50, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Hoshiguma's Badge", desc: 'Appointed as Defender Operator to exercise Protector responsibilities' },
    prox: { code: 'PRO-X', name: 'Amulet', stages: [
      { stage: 1, hp: '+125', def: '+85', effect: 'New trait: DEF +20% when blocking an enemy' },
      { stage: 2, hp: '+165', def: '+115', effect: 'Special Operation Strategy improved: friendly Defender Operators gain 9% DEF, and this unit additionally gains 4% DEF' },
      { stage: 3, hp: '+200', def: '+140', effect: 'Special Operation Strategy improved: friendly Defender Operators gain 11% DEF, and this unit additionally gains 6% DEF' },
    ]},
    proy: { code: 'PRO-Y', name: 'Gifts From Friends', stages: [
      { stage: 1, atk: '+50', def: '+70', effect: 'Trait improved: Blocks 4 enemies' },
      { stage: 2, atk: '+62', def: '+90', effect: 'Tactical Armor improved: 30% chance to resist damage, ATK +20% for 3 sec after a successful resist (does not stack)' },
      { stage: 3, atk: '+70', def: '+100', effect: 'Tactical Armor improved: 32% chance to resist damage, ATK +35% for 5 sec after a successful resist (does not stack)' },
    ]},
  },
  story: "The Oni woman Hoshiguma was born in Higashi to a clan of Oni. After her father was killed during the First Kajimachi Conflict, she was adopted by Tessai, her father's wakagashira in the Kinsekikai, where she would grow up to become Kinsekikai's wakagashira herself. In 1078, she lost her mind while trying to stop Kinbee from killing a Diet member candidate and ended up killing some of her yakuza siblings. After coming to her senses, Hoshiguma found the Diet member candidate dead next to her. Believing herself to be responsible, Hoshiguma accepted the blame for the murder and was subsequently banished from Mitsukue. As a parting gift, she was given given the \"Hannya,\" a shield made by Tessai in hopes of suppressing an Oni's fighting madness.\n\nAfter departing her hometown, Hoshiguma would then stay at Lungmen, where she became a member of Leungyi Society, one of Lungmen's triad gang. Her action at the gang would then attract the attention of Mr. Lin, who hired her to be his enforcer, handling all Lungmen's triad gangs in exchange for the safety of the member of Leungyi Society. After gaining some heat while working for Mr. Lin, Hoshiguma accepted an offer made by Wei Yenwu to join the Lungmen Guard Department. There, she would slowly climb the rank, before she eventually joined the Special Inspection Unit, with Ch'en as her superior and Swire; where she is frequently tasked with mediating arguments between the two. Later on, after finally handling her past problem, Hoshiguma would be promoted to be the chief of the L.G.D Special Inspection Unit.\n\nAs an L.G.D. operator, Hoshiguma is known for her imposing physique, her iconic shield, and her fierce yet level-headed approach in combat. Away from the battlefield, she is also an ardent motorcyclist who often races with Madam Fumizuki.",
  profile: "Hoshiguma is an elite Operator from the Special Ops Team of the L.G.D.\nThere are several charges against her on record.\nAfter intervention from Chief Wei Yenwu, L.G.D. made an exception to admit her into its Special Ops division based on her exceptional abilities and field performance. She exhibited remarkable professionalism in handling violent crime, protecting VIPs, disaster response and emergency rescue.\nCurrently a defender assisting Rhodes Island operations, Hoshiguma provides tactical execution and command support.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non- infected.\n[Cell-Originium Assimilation] 0%\nOperator Hoshiguma showed no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Hoshiguma rarely comes into contact with Originium."
    },
    {
      "title": "Archive File 1",
      "content": "A towering female Oni.\nUnlike Madam Ch'en, she dresses very casually but easily reminds others of her post with her speech and demeanor.\nShe loves to drink, but no one has seen her inebriated to date."
    },
    {
      "title": "Archive File 2",
      "content": "As ranks go, Madam Ch'en is Hoshiguma's superior. But based on service history, Hoshiguma joined the L.G.D. before Ch'en and the two are long-time colleagues, so it's little wonder the line between them is almost invisible.\nWhat is unexpected is that Hoshiguma knows more about Lungmen than Ch'en. She has extensive knowledge about its criminal underworld, law enforcement, politics, economics, education, and foreign policy among others, and is unafraid to hold strong opinions about those topics.\nShe is indeed a rare combination of martial and scholarly talent."
    },
    {
      "title": "Archive File 3",
      "content": "Hoshiguma is no less aggressive than her kin in battle, usually the fiercest and most courageous on the field.\nHowever, she also possesses a quality most Oni sorely lack – composure.\nHer self-discipline is discernible in her speech and demeanor, as well as in battle. She has fully conquered the recklessness in her Oni blood.\nThis may have perhaps stemmed from her past."
    },
    {
      "title": "Archive File 4",
      "content": "According to L.G.D. record, Hoshiguma was already an anomaly even when was part of the criminal underworld. She never preyed on the weak, was always righteous, loyal and helpful, and could drink anyone under the table... In short, a throwback to the martial heroes of the East's long-forgotten history.\nIt's likely that these qualities allowed her to break tradition and gain a position in the L.G.D.\nBut it's also clear from the files that Hoshiguma is no different now than when she first arrived at Lungmen, so the question remains how did she manage to gain her composure and knowledge, and why did she work for criminals in Lungmen?\nEven if these stories took place before she arrived in Lungmen, she is still shrouded in mystery."
    },
    {
      "title": "Promotion Record",
      "content": "I am willing to lend this person, Hoshiguma, to you.\nSince we want to get off on a right foot, let me give you a piece of advice, Doctor.\nIf you think that she's a reasonable person, that just proves that you do not fully understand her.\nThat shield... Well, until she tells you where that shield came from...\nYou don't know the real her.\n— Wei Yenwu"
    }
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/lungmen-guard-department.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/hoshiguma/base.png', chibiSrc: '/operators/hoshiguma/chibi.webm', chibiMoveSrc: '/operators/hoshiguma/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "infukun" },
    { id: 'e2', label: "Elite 2", src: '/operators/hoshiguma/e2.png', chibiSrc: '/operators/hoshiguma/chibi.webm', chibiMoveSrc: '/operators/hoshiguma/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "infukun" },
    { id: 'skin1', label: "Patrolling Ronin", src: '/operators/hoshiguma/skin1.png', chibiSrc: '/operators/hoshiguma/chibi-skin1.webm', chibiMoveSrc: '/operators/hoshiguma/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "infukun" },
    { id: 'skin2', label: "Seeker SK97", src: '/operators/hoshiguma/skin2.png', chibiSrc: '/operators/hoshiguma/chibi-skin2.webm', chibiMoveSrc: '/operators/hoshiguma/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "infukun" },
  ],
  portrait: '/operators/hoshiguma/portrait.png',
}

const hoshigumaBreacher: OperatorAlter = {
  name: 'Hoshiguma the Breacher', fileNo: 'LM23', class: 'Defender', branch: 'Arts Protector', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Limited Headhunting - Carnival'],
  position: 'Melee', trait: 'Normal attacks deal Arts damage while the skill is active',
  tags: ['DPS', 'Survival'],
  illustrator: '树豚',
  stats: { hp: 3551, atk: 667, def: 561, res: 15, block: 3, cost: 26, aspd: '1.6s', rdp: '70s' },
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
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Outstanding', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Gouka', desc: "When HP drops to 0, enters 'Ātmagrāha': cannot be healed by allies, damage received will accumulate, and once accumulated damage reaches 200% of Max HP, Hoshiguma the Breacher will be defeated; after 5 seconds without receiving damage, recovers 5% HP every second; once HP is greater than 0, leaves 'Ātmagrāha'", elite: 'E2' },
    { name: 'Oni Battle Stance', desc: 'Gains up to +50 RES and 35% ATK Tenacity (reaches maximum bonus when losing 70% of Max HP)', elite: 'E2' },
  ],
  skills: [
    {
      name: "Bitter Karma", icon: '/operators/hoshiguma/breacher/skill-1.png', activation: 'Auto', recovery: 'Defensive',
      desc: "ATK +70%, DEF +70%, deals 175% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15, rank: 'M3',
      levels: [
        { level: '1', desc: "ATK +25%, DEF +25%, deals 70% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: '2', desc: "ATK +30%, DEF +30%, deals 80% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: '3', desc: "ATK +35%, DEF +35%, deals 90% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: '4', desc: "ATK +40%, DEF +40%, deals 100% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: '5', desc: "ATK +45%, DEF +45%, deals 110% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: '6', desc: "ATK +50%, DEF +50%, deals 120% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: '7', desc: "ATK +55%, DEF +55%, deals 130% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: 'M1', desc: "ATK +60%, DEF +60%, deals 145% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: 'M2', desc: "ATK +65%, DEF +65%, deals 160% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
        { level: 'M3', desc: "ATK +70%, DEF +70%, deals 175% of ATK as Arts damage to targets that attack Hoshiguma the Breacher\nUnlimited duration", spInit: 0, sp: 15 },
      ],
    },
    {
      name: "Anadi-Avidya", icon: '/operators/hoshiguma/breacher/skill-2.png', activation: 'Auto', recovery: 'Offensive',
      desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 90% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 130% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 15% of the damage dealt by the shield", spInit: 0, sp: 6, rank: 'M3',
      note: "Anadi-Avidya activates even if there are no enemies within range, and its healing is unconditional. The shield rotates counter-clockwise around Hoshiguma the Breacher, slowed by 80% while in contact with an enemy.",
      levels: [
        { level: '1', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 40% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 50% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 10% of the damage dealt by the shield", spInit: 0, sp: 10 },
        { level: '2', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 45% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 60% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 10% of the damage dealt by the shield", spInit: 0, sp: 10 },
        { level: '3', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 50% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 70% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 10% of the damage dealt by the shield", spInit: 0, sp: 9 },
        { level: '4', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 55% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 80% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 10% of the damage dealt by the shield", spInit: 0, sp: 9 },
        { level: '5', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 60% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 90% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 10% of the damage dealt by the shield", spInit: 0, sp: 8 },
        { level: '6', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 65% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 100% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 10% of the damage dealt by the shield", spInit: 0, sp: 8 },
        { level: '7', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 70% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 110% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 15% of the damage dealt by the shield", spInit: 0, sp: 7 },
        { level: 'M1', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 75% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 120% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 15% of the damage dealt by the shield", spInit: 0, sp: 7 },
        { level: 'M2', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 80% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 125% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 15% of the damage dealt by the shield", spInit: 0, sp: 6 },
        { level: 'M3', desc: "Hoshiguma the Breacher launches her shield while hitting all blocked enemies 3 times per attack, each hit dealing 90% of ATK; the shield flies one loop around this unit; the shield Slows enemies on contact, dealing 130% of ATK as Arts damage every 0.5s, while Hoshiguma the Breacher recovers HP equal to 15% of the damage dealt by the shield", spInit: 0, sp: 6 },
      ],
    },
    {
      name: "Hell Itself", icon: '/operators/hoshiguma/breacher/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Attack Range expands, Max HP +100%, ATK +230%, hitting up to 3 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 37, sp: 45, dur: '32s', rank: 'M3', range: [[0,1,1,1,0],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[0,1,1,1,0]],
      note: "While Hell Itself is active, attacks can target aerial enemies. Hoshiguma the Breacher can neither recover SP nor trigger Gouka within the 11-second immortality period after Hell Itself is deactivated.",
      levels: [
        { level: '1', desc: "Attack Range expands, Max HP +40%, ATK +120%, hitting up to 2 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 25, sp: 60, dur: '32s' },
        { level: '2', desc: "Attack Range expands, Max HP +45%, ATK +130%, hitting up to 2 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 26, sp: 60, dur: '32s' },
        { level: '3', desc: "Attack Range expands, Max HP +50%, ATK +140%, hitting up to 2 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 27, sp: 60, dur: '32s' },
        { level: '4', desc: "Attack Range expands, Max HP +55%, ATK +150%, hitting up to 2 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 28, sp: 55, dur: '32s' },
        { level: '5', desc: "Attack Range expands, Max HP +60%, ATK +160%, hitting up to 2 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 29, sp: 55, dur: '32s' },
        { level: '6', desc: "Attack Range expands, Max HP +65%, ATK +170%, hitting up to 2 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 30, sp: 55, dur: '32s' },
        { level: '7', desc: "Attack Range expands, Max HP +70%, ATK +180%, hitting up to 2 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 31, sp: 50, dur: '32s' },
        { level: 'M1', desc: "Attack Range expands, Max HP +80%, ATK +190%, hitting up to 3 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 33, sp: 48, dur: '32s' },
        { level: 'M2', desc: "Attack Range expands, Max HP +90%, ATK +210%, hitting up to 3 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 35, sp: 47, dur: '32s' },
        { level: 'M3', desc: "Attack Range expands, Max HP +100%, ATK +230%, hitting up to 3 enemies twice per attack; for 11s upon manually deactivating the skill, Hoshiguma the Breacher retains skill bonuses and becomes undefeatable, attacks hitting 4 times, fatal damage taken by allied Operators within this unit's attack range is redirected to her, and she automatically retreats after the 11s period\nCan manually deactivate skill (skill can be interrupted at any time)", spInit: 37, sp: 45, dur: '32s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Hoshiguma the Breacher's Badge", desc: 'Appointed as Defender Operator to exercise Arts Protector responsibilities' },
    astx: { code: 'AST-X', name: 'No Trace', stages: [
      { stage: 1, hp: '+190', atk: '+55', effect: 'New trait: On skill activation, normal attacks deal Arts damage. When attacking and being attacked, deals extra 10% of ATK as Arts damage to target' },
      { stage: 2, hp: '+275', atk: '+70', effect: 'Oni Battle Stance improved: maximum bonus reached when losing 60% of Max HP; grants an additional +10% ATK when reaching max Tenacity bonus' },
      { stage: 3, hp: '+325', atk: '+80', effect: 'Oni Battle Stance improved: maximum bonus reached when losing 50% of Max HP; grants an additional +15% ATK when reaching max Tenacity bonus' },
    ]},
  },
  profile: "Hoshiguma, chief of the L.G.D. Special Inspection Unit. She remains a defender operator of Rhodes Island, with no change in her main role.\nThe extent of her combat experience has been amended in her records after she told the Doctor about her early days in Higashi and gave permission for some parts of it to be communicated to us.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Assimilation] 0%\nOperator Hoshiguma shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.13u/L\nThere is no significant change in Operator Hoshiguma's circumstances. Fluctuations are within normal boundaries. Continue to observe proper protection in everyday duties."
    },
    {
      "title": "Archive File 1",
      "content": "After she returned from Higashi, and before she took over the leadership of the L.G.D. Special Inspection Unit, Hoshiguma's first visit back to Rhodes Island was greeted with a mob of questions from other operators who had worked with her before:\n\"Did you change jobs, Hoshiguma/Operator Hoshiguma/Madame Oni?\"\nThe misunderstanding was cleared up quickly. She came with Swire's permission, and was here to sign a cooperation agreement with Rhodes Island on a personal basis. The L.G.D. needed a channel of communications with Rhodes Island, and Hoshiguma was the best choice, given her new role at the SIU and what she had gone through with Rhodes Island together.\nHer outfit, her sword, and the rather changed appearance of Hannya had little to do with her new role. According to her, she had simply gone back to Mitsukue to get some stuff while \"Missy\" was on vacation in Siesta.\nAs for \"avoiding suspicion\", the pair certainly had more to keep in mind, but the unusual respect and solemnness that Hoshiguma showed when she saw Swire could not be explained with just \"avoiding suspicion\".\nWe eventually found out the reason in a chance encounter between the pair—\n\"You just wanted to see me feeling awkward, didn't you?!\"\n\"I-It's not what you think, Missy, at least not entirely—\"\n\"Not entirely?\"\n\"Well, mostly not—\"\n\"That's a black mark on your record! No more vacations until you submit all the reports you have piled up!\""
    },
    {
      "title": "Archive File 2",
      "content": "A subtle change seems to have come over Hoshiguma. She will do things that surprise others from time to time, such as openly making fun of Swire, clearly expressing her disapproval of Lungmen's less savory aspects, and on one occasion, placing her hand on the shoulder of someone who was abusing a medic. She said nothing, just smiled, and the troublemaker left the ward without argument.\nThe way she fights has changed as well. In addition to protecting more vulnerable comrades, she also charges into the fray, disintegrating enemy lines in a frenzied rampage. Some operators found Hoshiguma's new style to be terrifying at first, but they soon realize that she remains as protective as ever. She has never harmed a comrade in her rampages, and more importantly remained the same Madame Oni even when it seemed she had lost all reason: loyal, kind, a heavy drinker, as learned as she is strong.\n[Classified Log]\nThere are many Higashinese accounts of how the Oni lose their reason in battle, cutting down anyone in their way, friend or foe. This perception is not unfounded. It is fundamentally the same as a Vampire's affinity for blood, or a Cyclops's ability to foresee misfortune. Without a Royal Court, however, these powers were never properly studied and refined, and the Oni had to explore how to live with their nature on their own. It is said that the temples may have engaged in such research, but their legacy is not witchcraft, but wisdom and a unique faith. Without the presence of a Royal Court, however, the Oni were able to integrate themselves into Higashinese society, making them unique amongst the Sarkaz of Terra.\nYes, the Oni are a branch of the Sarkaz. For the people of Higashi, this is something that might never occur to them their entire lives, but would feel entirely natural if someone pointed it out. Following customs, avoiding troubling others, blending in... this is the way of things in Higashi. Be it out of benevolence or some other reason, certain things are better left unsaid.\nThis ambiguity gives the Oni a kind of protection. In Accounts of Long Ago and a Digest of Records, they were known as \"man-oni\", mentioned alongside the Ægirian \"sharkfolk\". Their stories of loyalty and mystique cannot be separated from Higashi without cutting off a big part of Higashinese tradition.\nThat said, just because they are not outsiders does not mean there are no complaints about them. The popular conception of the Oni is one of anger and violence, and there are many stereotypes about them: barbaric, cunning, uncouth, corrupt, etc. These are often contradictory, and rarely mentioned within earshot of an Oni. The intercity net is another matter though. Mentioning such things on the intercity net is likely to incite an angry response, but one could always say, \"Why are you so angry? Are you one of those rotten Oni too?\"\n—From the essay collection Gazes, written by a Victorian Sarkaz living in Higashi"
    },
    {
      "title": "Archive File 3",
      "content": "[From a volunteer-maintained encyclopedia]\nThe First Kajimachi Conflict\nThe First Kajimachi Conflict refers a violent conflict that occurred in Kajimachi in 1073. Stragglers who remained in Southern Court territory after the Bloodpeak Campaign attacked the Kinsekikai, attempting to take over Kajimachi. The Kinsekikai won a hard-fought victory, but the founding chairman of the Kinsekikai was killed in the struggle, along with the entire immediate family of Tessai, who was his chief lieutenant.\nAfter fending off the attacks, Tessai, as the new chairman of the Kinsekikai, began hunting down those involved in the attacks, resulting in the largest and longest violent conflict in Mitsukue's history. Some see it as an act of revenge by Tessai for the killing of his family, while others see it as Tessai expanding his own influence.\nThe Second Kajimachi Conflict\nThe Second Kajimachi Conflict refers to a series of murders, violent conflicts, and disappearances that occurred around Kajimachi in 1078. The first phase involved the killing of legislator candidate Shinjirou Koretou by the Kinsekikai and its subsequent internal conflict; the second phase involved the intensification of the Kinsekikai exclusion movement that Shinjirou Koretou had spearheaded, resulting in several conflicts between the Kinsekikai and nearby residents; the third phase involved the Kinsekikai's admission that Hoshiguma, wakagashira at that time, had committed the murder and Hoshiguma's subsequent disappearance, with Kinbee Harada (later known as Kouhei Mifune), then-wakagashira-hosa to the Kinsekikai's second-in-command, bringing the events to a close by mediating between the Kinsekikai and nearby residents.\nSome believe that the aftermath of the conflict continues to this day, with Hoshiguma continuing to commit numerous murders in the shadows, but such claims lack evidence and conflict with police records and other verified sources. See also \" Kaidan of Mitsukue-taisha\"\nThe Third Kajimachi Conflict (cached)\nThe Third Kajimachi Conflict refers to a series of attempted kidnappings, violent conflicts, murders, media manipulation, and assaults that occurred around Kajimachi and Nita Street in 1099. It began with the sudden reappearance of Hoshiguma, the former second-in-command of the Kinsekikai who had gone missing after being suspected of murder, after the statue of limitations had passed. Her return triggered a violent struggle between Kouhei Mifune, the Kinsekikai's de facto leader, and Tessai, the nominal chairman of the Kinsekikai whose authority had long been undermined. The entertainer Momoka Hanyuu was also known to be involved in the incident. Tessai was killed in the struggle, while Mifune was arrested. Hoshiguma voluntarily departed Mitsukue after reaching an agreement with Mitsukue police, and Momoka Hanyuu departed the Kinseki Talent Agency to continue her activities independently. The incident also dispelled the myths around most of the Kaidan of Mitsukue-taisha.\nMurder of the Kinsekikai Chairman (Active Page)\n(Redirected from \"The Third Kajimachi Conflict\"\nThe murder of the Kinsekikai chairman occurred in Kajimachi in 1099, when Kouhei Mifune murdered Tessai, chairman of the Kinsekikai. Mifune, who had been in conflict with Tessai over the Kinsekikai's succession and future, humiliated Tessai, forced a crippling debt upon him, and murdered him at his own residence. Mifune was subsequently arrested by the police.\nThis page is locked.\nTessai\nTessai (born 1033), Oni, retired soldier and Mitsukue-taisha entrepreneur. Second chairman of the Kinsekikai organization.\nThis page is locked.\nKouhei Mifune\nKouhei Mifune (born 1045), Phidia, Mitsukue-taisha businessman and entrepreneur, member of the Kinsekikai organization.\nThis page is locked.\nHoshiguma\nThis page does not exist."
    },
    {
      "title": "Archive File 4",
      "content": "[Tessai's Diary]\nVisited Haruuji Arimagawa for the fifth time and concluded the transaction. I finally gained the secret scroll that his ancestor had obtained from the temple's via less-than-scrupulous means. The paper is yellow and brittle, but the ink has not faded, and I was able to recognize part of the cursive script used. It appears authentic. More importantly, the Arimagawa clan is no longer the noble house that once claimed the position of high minister. Haruuji is merely an ordinary man, making ends meet by selling off family possessions. He would not dare deceive me.\nIt will not be long before I can no longer wield a hammer at the forge. I must personally oversee the production of crystalline components; it is not a task I can entrust to anyone else. Hoshiguma is not suited for it; Shimasu and Sanoguchi say they want to learn, but they are merely going through the motions. Kinbee has put in the work, but he has a long way to go. He will be a competent assistant for Hoshiguma when she takes over the position of chairman.\n......\nKinbee told me that Hoshiguma and Shimasu almost got into a fight. Fortunately, Hoshiguma was able to hold back; a feud between clan-siblings would have to be dealt with according to the rules, and even Hoshiguma would be no exception. Regarding Hoshiguma, her father [scrawled out]\nThe matter of the shield cannot wait. I have had a monk translate the scroll. Other than the scripture at the beginning, neither a preface nor a summary, the rest is undoubtedly instructions for weapon-crafting.\n......\n\"Hannya.\"\nThis word, found in the beginning of the opening scripture, has occupied my mind of late as I worked at the forge. The monk told me that \"Hannya\" was a wisdom that transcended the mortal realm and liberated one from all troubles. But he does not know why the word became the name of the terrifying \"Face of Hannya\".\nBut it is that same face that always comes back to me whenever I swing my hammer. The rage as he drew his sword against Tetsuya, against Hoshiguma, against me. The fear as he fell to the ground. The despair in those last moments of lucidity, as he realized what he had done.\nI told Hoshiguma many times that the dastardly deserter was the only one to blame. It was not her father's fault, and certainly not her fault. She understood. She knew I did not blame her. And she knew that I could not help but hate Susa.\nHe killed Tetsuya. He had held Tetsuya in his arms and gave him his old stethoscope as a toy. He had given Tetsuya his injection when Tetsuya had a fever, and bought him the latest trending drink in town, which not even Hoshiguma had tried. Apart from Setsuko and myself, he was the dearest person to Tetsuya, dearer than even Tetsuya's own grandmother. If I did the same and pulled my sword against Hoshiguma—\n......\nIs there no liberation for the Oni, other than death?\nI was never freed. I exacted vengeance upon all the Oni who dared set foot in Kajimachi that night. I watched them cry helplessly, watched them go mad, watched them die, but I was never free.\nI told myself that I was forging this shield for Hoshiguma, so that she would never repeat your mistake. But perhaps... it was always my own liberation that I was seeking.\nWere you free at the end of it all, Susa?"
    },
    {
      "title": "Promotion Record",
      "content": "My surname?\nI asked Uncle Tessai after my father's death. People called him Tessai, called my father Susa, and called me Hoshiguma. None of us had surnames. Other people did; Aunt Setsuko's surname was Inaba, but she no longer had one after she married Uncle Tessai.\nIt's not a particularly interesting story. Are you sure you want to hear it?\nWell, I guess I can tell you over a drink.\nThe widely-accepted explanation is that the practice of the Oni using only a given name began after Seisaku Onishoubu's death. Many of his descendants joined the temples and discarded their real names in favor of dharma names, in order to avoid trouble. On the other hand, there are also people who falsely claim to be descendants of Onishoubu, including some who truly worship him.\nThe problem is that you could walk into a room with a bunch of Oni, call out the name Saburo, and have three or four of them turn around to look at you. Which created problems for everything from taxation to battlefield command. That's why the Northern Court issued the \"Obligation of Surnames for All People\"; the Southern Court had similar laws, essentially demanding that the Oni respect the tradition of the \"surname bestowed by the Sumeragimi\", and restore their original surnames. The problem is that too much time had passed, and it was unclear who was trying to avoid trouble, and who was trying to benefit by association. Besides, both sides prohibited Oni without surnames from claiming the name of Onishoubu, and many people simply didn't cooperate. The whole thing basically went away quietly.\nUncle Tessai said both my family and his were branches of the Onishoubu clan; mine specialized in medicine and divination, while his specialized in weapons and armor. If we were to restore our surnames, we would call ourselves \"Jigokuin\" or \"Toujiin\"... I don't quite remember. I wouldn't take everything Uncle Tessai said at face value either. That bit about medicine and divination and weapons and armor might just have been him projecting us onto our ancestors.\nWhat? ...Hah, no. Just like how Missy gets angry when I call her \"commissioner\", I'd rather you didn't add some weird surname to \"Hoshiguma\". Names like \"Susa\" and \"Hoshiguma\" don't really fit well with a surname anyway.\nLast time I came to Rhodes Island, there was a Sarkaz historian who thought I might be related to the famous Qui'lon after he saw my blue flames... Personally, I don't believe it. I do believe that his migration to the east brought the Anasa and Oni to Yan and Higashi, but I don't see the point in further speculation. It's not like Missy would increase my pay if I was Qui'lon's descendant.\n...What do you mean \"I didn't expect you to actually be as well-read as Wei Yenwu said\"? We see each other for the first time in ages, and all you can do is tease me? It's getting late, and the training room's free. How about you fulfill my wish, and Uncle Tessai's?\nTsk, you still can't hold your drink.\nAlright, stop trying to act tough, Ch'en. I'll take you back to your room."
    }
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/arts-protector-branch.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/hoshiguma/breacher/base.png', chibiSrc: '/operators/hoshiguma/breacher/chibi.webm', chibiMoveSrc: '/operators/hoshiguma/breacher/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "树豚" },
    { id: 'e2', label: "Elite 2", src: '/operators/hoshiguma/breacher/e2.png', chibiSrc: '/operators/hoshiguma/breacher/chibi.webm', chibiMoveSrc: '/operators/hoshiguma/breacher/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "树豚" },
    { id: 'skin1', label: "An Ultimate Flash", src: '/operators/hoshiguma/breacher/skin1.png', chibiSrc: '/operators/hoshiguma/breacher/chibi-skin1.webm', chibiMoveSrc: '/operators/hoshiguma/breacher/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "树豚" },
  ],
  portrait: '/operators/hoshiguma/breacher/portrait.png',
}

hoshiguma.alter = [hoshigumaBreacher]

export default hoshiguma
