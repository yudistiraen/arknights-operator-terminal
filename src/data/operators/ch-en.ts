import type { Operator, OperatorAlter } from '../../types'

const chenStory = `To the public, Ch'en Hui-chieh appears to be a stern Lung officer of the Lungmen Guard Department. However, she is more than meets the eye. Not only is she the niece of Lungmen's governor Wei Yenwu, but also the younger half-sister of Talulah Artorius, the leader of the infamous Reunion Movement. The sisters got separated after Talulah left Lungmen with Kashchey twenty years ago, an event Ch'en would later regard as an abduction. Since then, Ch'en had been training diligently to protect Lungmen, hoping to see her sister again one day. She put aside her hatred for her uncle, who she believed was responsible for her mother's disastrous remarriage, learning from him how to use Chi Xiao (赤霄, lit. "Crimson Firmament"), the legendary Dragon-Slaying Sword of Yan. As time passed, she achieved most of her goals, shaping her into a person with a strong sense of justice.\n\nAs the Special Inspection Unit Chief of the L.G.D., Ch'en is a trustworthy leader known for her brilliant tactics and mastery of swordplay. Those who know her privately consider her headstrong and perhaps somewhat stubborn. She has a rivalry with her childhood friends, Lin Yühsia, daughter of the criminal leader of Lungmen's underworld, and Swire, her fellow L.G.D. colleague. Despite this, she shows her caring side to those she trusts, both Swire and her colleague and long-time partner Hoshiguma.\n\nAnother incident in her lifetime would forever change her view of her uncle and the city: She contracted Oripathy along with her senior, Nine, three years ago (the year 1094) when she got injured during a mission by an Originium bomb. She managed to keep her position at the L.G.D. thanks to Wei's influence. However, the more Ch'en dove into the inner workings of the city, especially the neglected slums, the more she uncovered her uncle's hypocrisy. Indeed, during the Chernobog-Lungmen crisis, she saw the persecution of the Infected firsthand when Wei ordered his Shadow Guards to purge the slums. Ch'en chose to betray Wei's orders, and by extension Lungmen, by going to Chernobog to stop its incoming collision with the city.\n\nFollowing the fiery battle against Talulah that ended the crisis, Ch'en resigned from her position at the L.G.D. and joined Rhodes Island. During her stay in R.I., she gained many new experiences, such as the Dossoles affair during her summer vacation and her trip to Victoria with her former classmate Bagpipe. She learned to accept that not every story is black or white and has begun to question her long-standing motto of achieving justice by any means necessary. Nevertheless, she still has a long journey of learning and discovery ahead of her.`

const chenProfile = `Ch'en, head of the Lungmen Guard Department's Special Inspection Unit, graduated from the Royal Victorian Guard School with superb grades and outstanding achievements. During her time with the Department, she cracked down on crime, fought violent offenders, tracked down armed fugitives, and brought down international criminals.\nNow works at Rhodes Island, providing on-site tactical command.`

const chenRecords = [
  {
    title: 'Clinical Analysis',
    content: `[At the request of the Lungmen Guard Department, this information will not be made public.]\nShe did come in for a physical examination, but her files have been confiscated. I have no way to get them. Why? I was told not to.\n–– Medic Operator R.T.`,
  },
  {
    title: 'Archive File 1',
    content: `[Originium Overview]\nCh'en has never been seen using Originium, which led many to suspect she didn't have a talent for it. Indeed, she did struggle to control her Originium ability, blasting the occasional hole in a wall, blowing files everywhere, and causing more collateral damage than might otherwise be acceptable. Using Originium for too long tires her out. After discussion with the tech staff, it was decided Ch'en lacked the necessary conduit to control her Originium power. Without one, Ch'en could never master it.\nI saw her test results. The thinner the staff, the better she is at assimilation. But what's the point? Maybe if you had something shaped like a sword, it might work for her. But who would want to use it for that? A sword is for slashing! We're going to need a lot more work on this...\n–– Caster D`,
  },
  {
    title: 'Archive File 2',
    content: `Ch'en graduated from the Royal Victorian Guard School with straight A's in all mandatory subjects and glowing recommendations from her professors. After returning to Lungmen, she almost immediately joined the Guard Department.\nNo one knows anything about her life prior to enrolling in the L.G.D. School, and no one questions her ability, dedication, or hatred of her enemies. Police officers working with Ch'en often complained about her demeanor—too strict and too harsh. Everyone thought that this harsh character would disappear in the struggle for power, and she would soften up after being worn down by endless incidents.\nSurprisingly, both crime and casualty rates have declined in the past two years, and the younger generation of officers began being promoted faster and more substantively. Ch'en was promoted and joined one of the most important teams in the Department, the Special Inspection Unit.\nMembers of this unit are generally not allowed to serve more than two years – to protect their lives and reduce their stress. Perhaps this position isn't suitable to serve for a long time: old inspectors' careers always seem to end with heroic sacrifice.\nCh'en did not retreat. She doesn't even know how to back down.\nShe became the fastest promoted officer in the history of the Lungmen police force, and also the youngest Special Inspector in the Department. Those who ridiculed her were impressed by her perseverance. After all, planning for the future is one thing. Planning every day is another.\nWhy was she so hard? Why live life this way? No one can could understand.\nThere are often small pieces of paper that have been ripped apart or angrily crumbled in Ch'en's trash bin.`,
  },
  {
    title: 'Archive File 3',
    content: `Of course, Ch'en is not a total workaholic.\nOfficers who know her say she is almost perfect. She operates efficiently, scheduling her time wisely such that she can exercise and tend to her hobbies. Every minute of her day is filled with meaningful activities.\nAnd yet this worries her colleagues even more. It is common for her to cancel her days off and to work overtime on into the night. It's also common for a mountain of paperwork to disappear one day only for her to get called into an urgent meeting when she is about to go see a movie.\nShe is mechanically efficient. People naturally ask her,\n"Are you stressed?"\n"No reason to be."\nNo one has ever gotten a different answer out of her.\nCh'en lives this way every day, always doing what she can for Lungmen and honing her skills. She is always getting better, and the sky is the limit.\nBut what exactly is she pursuing?\nEven her friends wouldn't say they understand Ch'en. She tries to do it all.`,
  },
  {
    title: 'Archive File 4',
    content: `[Classified Log]\n"Your father has cut ties with you. He doesn't have anything to do with me, either, but neither of us care.\nDo you want to leave?\nYou can, but I have something to tell you before you go.\nI actually know who that old person is.\nBut I forget a lot of things — like that night you and your friend had a little adventure. It's easy to forget.\nIt's my fault. I made an unforgivable mistake.\nI will forget.\nIf you want to leave, I will send you to a city that is safe, rich, and stable. You would have a peaceful life there.\nAnd you will say goodbye to everything here. The home you hate, the street you hate, the people you don't like.\nIt's just that you will lose your opportunity to know the truth. The facts are dangerous, and I can't have innocent people getting involved.\nAngry? You're angry with me? You hate me?\nWell, of course. Let me be who you hate. Hate a powerless person like me.\nHere is your other choice.\nYou choose to stay.\nFrom now on, I would train you. You would be free to hate me and even try to kill me, if you want.\nHow could you not? Of course you can. You would be a natural.\nYour body and mind both belong to you. I can teach you right from wrong, and if you do well, you should work with Originium on your own.\nDon't forget it, just do it.\nBeing able to do things right is worth the hard work. Having to fix a mistake could be fatal.\nEven I don't know what is in store for us in the city. It is full of opportunity. Anything can happen.\nIt doesn't matter if you don't understand now, you will later.\nHey, I still remember. I remember that last thing you said.\n"Do you persist, or do you give up?\nChoose."\n...Simulation over...\nReturning to main interface...`,
  },
]

const chen: Operator = {
  name: "Ch'en", fileNo: 'LM04', class: 'Guard', branch: 'Swordmaster', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Lungmen Guard Department', position: 'Melee', race: 'Lung', gender: 'Female', birthplace: 'Lungmen',
  birthday: 'July 7th', height: '168 cm', combatExp: '4 years', infectionStatus: 'Unknown', illustrator: '唯@W',
  cv: { JP: 'Shizuka Ishigami', CN: 'Jen Zhang', EN: 'Amy Lennox', KR: 'Chung Yu-joung' },
  trait: 'Normal attacks deal damage twice',
  tags: ['Nuker', 'DPS'],
  stats: { hp: 2880, atk: 610, def: 352, res: 0, block: 2, cost: 23, aspd: '1.3s', rdp: '70s' },
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
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Scolding', desc: 'Every 4 seconds when deployed, restores 1 Skill Point to all deployed allies that have an ATK Recovery or DEF Recovery skill.', elite: 'E2' },
    { name: 'Blade Art', desc: 'ATK +5%; DEF +5%; Physical Dodge +10%', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Sheathed Strike', icon: '/operators/chen/skill-1.png', activation: 'Auto', recovery: 'Offensive',
      desc: 'On the next attack, strike the enemy using the sheath, dealing 320% ATK as Physical damage and Stunning them for 1.5 seconds', spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: 'On the next attack, strike the enemy using the sheath, dealing 200% ATK as Physical damage and Stunning them for 1 seconds', spInit: 0, sp: 7 },
        { level: '2', desc: 'On the next attack, strike the enemy using the sheath, dealing 210% ATK as Physical damage and Stunning them for 1 seconds', spInit: 0, sp: 7 },
        { level: '3', desc: 'On the next attack, strike the enemy using the sheath, dealing 220% ATK as Physical damage and Stunning them for 1 seconds', spInit: 0, sp: 7 },
        { level: '4', desc: 'On the next attack, strike the enemy using the sheath, dealing 230% ATK as Physical damage and Stunning them for 1.25 seconds', spInit: 0, sp: 6 },
        { level: '5', desc: 'On the next attack, strike the enemy using the sheath, dealing 240% ATK as Physical damage and Stunning them for 1.25 seconds', spInit: 0, sp: 6 },
        { level: '6', desc: 'On the next attack, strike the enemy using the sheath, dealing 250% ATK as Physical damage and Stunning them for 1.25 seconds', spInit: 0, sp: 6 },
        { level: '7', desc: 'On the next attack, strike the enemy using the sheath, dealing 260% ATK as Physical damage and Stunning them for 1.5 seconds', spInit: 0, sp: 5 },
        { level: 'M1', desc: 'On the next attack, strike the enemy using the sheath, dealing 280% ATK as Physical damage and Stunning them for 1.5 seconds', spInit: 0, sp: 5 },
        { level: 'M2', desc: 'On the next attack, strike the enemy using the sheath, dealing 300% ATK as Physical damage and Stunning them for 1.5 seconds', spInit: 0, sp: 5 },
        { level: 'M3', desc: 'On the next attack, strike the enemy using the sheath, dealing 320% ATK as Physical damage and Stunning them for 1.5 seconds', spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Chi Xiao - Unsheath', icon: '/operators/chen/skill-2.png', activation: 'Manual', recovery: 'Offensive',
      desc: 'Deals 500% of ATK Physical damage and 500% of ATK Arts damage to at most 7 enemies in front of this unit', spInit: 20, sp: 20, rank: 'M3',
      range: [
        [1,1,0,0],
        [2,1,1,1],
        [1,1,0,0],
      ],
      levels: [
        { level: '1', desc: 'Deals 330% of ATK Physical damage and 330% of ATK Arts damage to at most 4 enemies in front of this unit', spInit: 10, sp: 27 },
        { level: '2', desc: 'Deals 340% of ATK Physical damage and 340% of ATK Arts damage to at most 4 enemies in front of this unit', spInit: 10, sp: 27 },
        { level: '3', desc: 'Deals 350% of ATK Physical damage and 350% of ATK Arts damage to at most 4 enemies in front of this unit', spInit: 10, sp: 27 },
        { level: '4', desc: 'Deals 370% of ATK Physical damage and 370% of ATK Arts damage to at most 5 enemies in front of this unit', spInit: 12, sp: 26 },
        { level: '5', desc: 'Deals 380% of ATK Physical damage and 380% of ATK Arts damage to at most 5 enemies in front of this unit', spInit: 12, sp: 26 },
        { level: '6', desc: 'Deals 390% of ATK Physical damage and 390% of ATK Arts damage to at most 5 enemies in front of this unit', spInit: 12, sp: 26 },
        { level: '7', desc: 'Deals 410% of ATK Physical damage and 410% of ATK Arts damage to at most 6 enemies in front of this unit', spInit: 14, sp: 25 },
        { level: 'M1', desc: 'Deals 440% of ATK Physical damage and 440% of ATK Arts damage to at most 6 enemies in front of this unit', spInit: 15, sp: 23 },
        { level: 'M2', desc: 'Deals 470% of ATK Physical damage and 470% of ATK Arts damage to at most 6 enemies in front of this unit', spInit: 16, sp: 21 },
        { level: 'M3', desc: 'Deals 500% of ATK Physical damage and 500% of ATK Arts damage to at most 7 enemies in front of this unit', spInit: 20, sp: 20 },
      ],
    },
    {
      name: 'Chi Xiao - Shadowless', icon: '/operators/chen/skill-3.png', activation: 'Manual', recovery: 'Offensive',
      desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 320% ATK as Physical damage and Stunning the target on the last hit for 4 seconds', spInit: 20, sp: 30, rank: 'M3',
      range: [
        [0,0,1,0,0],
        [0,1,1,1,0],
        [1,1,2,1,1],
        [0,1,1,1,0],
        [0,0,1,0,0],
      ],
      levels: [
        { level: '1', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 200% ATK as Physical damage and Stunning the target on the last hit for 2 seconds', spInit: 10, sp: 40 },
        { level: '2', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 210% ATK as Physical damage and Stunning the target on the last hit for 2 seconds', spInit: 10, sp: 40 },
        { level: '3', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 220% ATK as Physical damage and Stunning the target on the last hit for 2 seconds', spInit: 10, sp: 40 },
        { level: '4', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 230% ATK as Physical damage and Stunning the target on the last hit for 2.5 seconds', spInit: 10, sp: 38 },
        { level: '5', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 240% ATK as Physical damage and Stunning the target on the last hit for 2.5 seconds', spInit: 10, sp: 38 },
        { level: '6', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 250% ATK as Physical damage and Stunning the target on the last hit for 2.5 seconds', spInit: 10, sp: 38 },
        { level: '7', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 260% ATK as Physical damage and Stunning the target on the last hit for 3 seconds', spInit: 10, sp: 36 },
        { level: 'M1', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 280% ATK as Physical damage and Stunning the target on the last hit for 3 seconds', spInit: 13, sp: 34 },
        { level: 'M2', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 300% ATK as Physical damage and Stunning the target on the last hit for 3 seconds', spInit: 16, sp: 32 },
        { level: 'M3', desc: 'Seeks the closest enemy around and launches 10 slashes in a row, each dealing 320% ATK as Physical damage and Stunning the target on the last hit for 4 seconds', spInit: 20, sp: 30 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Ch'en's Badge", desc: 'Appointed as Guard Operator to exercise Swordmaster responsibilities' },
    swox: { code: 'SWO-X', name: 'Rhodes Island Standard Combat Sword', stages: [
      { stage: 1, atk: '+50', aspd: '+5', effect: 'New trait: Deals 10% more damage with skills' },
      { stage: 2, atk: '+65', aspd: '+6', effect: 'Scolding improved: Every 3 seconds when deployed, restores 1 SP to all deployed allies that have an ATK Recovery or DEF Recovery skill' },
      { stage: 3, atk: '+80', aspd: '+7', effect: "Scolding improved: Ch'en also recovers 1 additional SP to herself" },
    ]},
    swoy: { code: 'SWO-Y', name: 'Good Old School Days', stages: [
      { stage: 1, atk: '+52', def: '+28', effect: 'New trait: Attacks ignore 70 DEF' },
      { stage: 2, atk: '+68', def: '+36', effect: 'Blade Art improved: ATK +11%, DEF +11%, Physical dodge +15%' },
      { stage: 3, atk: '+85', def: '+42', effect: 'Blade Art improved: ATK +15%, DEF +15%, Physical dodge +18%' },
    ]},
  },
  story: chenStory,
  profile: chenProfile,
  records: chenRecords,
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/swordmaster-branch.png', factionIcon: '/icons/factions/lungmen-guard-department.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/chen/base.png', chibiSrc: '/operators/chen/chibi.webm', chibiMoveSrc: '/operators/chen/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'e2', label: 'Elite 2', src: '/operators/chen/e2.png', chibiSrc: '/operators/chen/chibi.webm', chibiMoveSrc: '/operators/chen/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'skin1', label: 'Ageless Afterglow', src: '/operators/chen/skin1.png', chibiSrc: '/operators/chen/chibi-skin1.webm', chibiMoveSrc: '/operators/chen/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'skin2', label: 'After Storm', src: '/operators/chen/skin2.png', chibiSrc: '/operators/chen/chibi-skin2.webm', chibiMoveSrc: '/operators/chen/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '伍秋秋秋秋' },
  ],
  portrait: '/operators/chen/portrait.png',
}

const chenHolungday: OperatorAlter = {
  name: "Ch'en the Holungday", fileNo: 'R112', class: 'Sniper', branch: 'Spreadshooter', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Limited Headhunting - Carnival'],
  position: 'Ranged', trait: 'Attacks all enemies within range, and deals 150% damage to enemies in the row directly in front of this unit.',
  tags: ['DPS', 'AoE'],
  illustrator: '唯@W',
  stats: { hp: 2501, atk: 773, def: 203, res: 0, block: 1, cost: 32, aspd: '2.3s', rdp: '70s' },
  range: {
    base: [
      [0,1,0],
      [2,1,1],
      [0,1,0],
    ],
    e1: [
      [0,1,1],
      [2,1,1],
      [0,1,1],
    ],
    e2: [
      [0,1,1],
      [2,1,1],
      [0,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Frugality', desc: "When deployed, Ch'en's ammo-based skills have 20% chance to not consume the corresponding ammo for each shot; Other Sniper Operators' ammo-based skills have 10% chance instead (only the highest effect of this type will be applied)", elite: 'E2' },
    { name: 'Vestiges of Vacation', desc: 'ASPD +8, when there is water terrain on the battlefield, the effect becomes ASPD +12', elite: 'E2' },
  ],
  skills: [
    {
      name: 'High-Pressure Splash', icon: '/operators/chen/holungday/skill-1.png', activation: 'Auto', recovery: 'Offensive',
      desc: "ATK +100%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 5, rank: 'M3',
      levels: [
        { level: '1', desc: "ATK +40%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 7 },
        { level: '2', desc: "ATK +45%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 7 },
        { level: '3', desc: "ATK +50%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 7 },
        { level: '4', desc: "ATK +55%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 6 },
        { level: '5', desc: "ATK +60%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 6 },
        { level: '6', desc: "ATK +65%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 6 },
        { level: '7', desc: "ATK +70%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 5 },
        { level: 'M1', desc: "ATK +80%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 5 },
        { level: 'M2', desc: "ATK +90%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 5 },
        { level: 'M3', desc: "ATK +100%, attacks apply this unit's Trait effect to all enemies within range\nSkill activation grants 4 ammo and the skill ends when all ammo is used (Can manually deactivate skill)", spInit: 0, sp: 5 },
      ],
    },
    {
      name: "'Night of Violet'", icon: '/operators/chen/holungday/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: 'ATK +80%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -35% and DEF -170 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 12, sp: 20, rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +35%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -10% and DEF -50 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 0, sp: 30 },
        { level: '2', desc: 'ATK +40%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -10% and DEF -50 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 0, sp: 29 },
        { level: '3', desc: 'ATK +45%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -10% and DEF -50 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 0, sp: 28 },
        { level: '4', desc: 'ATK +50%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -20% and DEF -100 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 5, sp: 27 },
        { level: '5', desc: 'ATK +55%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -20% and DEF -100 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 5, sp: 26 },
        { level: '6', desc: 'ATK +60%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -20% and DEF -100 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 5, sp: 25 },
        { level: '7', desc: 'ATK +65%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -30% and DEF -150 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 10, sp: 24 },
        { level: 'M1', desc: 'ATK +70%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -30% and DEF -150 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 11, sp: 23 },
        { level: 'M2', desc: 'ATK +75%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -35% and DEF -170 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 11, sp: 22 },
        { level: 'M3', desc: 'ATK +80%, attacks create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -35% and DEF -170 (Does not stack). Charged effect: Changes to 20 ammo\nSkill activation grants 8 ammo and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 12, sp: 20 },
      ],
    },
    {
      name: "'Holiday Storm'", icon: '/operators/chen/holungday/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Attack Range expands, ATK +100%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -45% and DEF -220 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 30, sp: 55, rank: 'M3',
      range: [
        [0,0,1],
        [0,1,1],
        [2,1,1],
        [0,1,1],
        [0,0,1],
      ],
      levels: [
        { level: '1', desc: 'Attack Range expands, ATK +40%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -20% and DEF -100 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 15, sp: 70 },
        { level: '2', desc: 'Attack Range expands, ATK +45%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -20% and DEF -100 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 15, sp: 70 },
        { level: '3', desc: 'Attack Range expands, ATK +50%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -20% and DEF -100 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 15, sp: 70 },
        { level: '4', desc: 'Attack Range expands, ATK +55%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -30% and DEF -150 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 20, sp: 65 },
        { level: '5', desc: 'Attack Range expands, ATK +60%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -30% and DEF -150 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 20, sp: 65 },
        { level: '6', desc: 'Attack Range expands, ATK +65%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -30% and DEF -150 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 20, sp: 65 },
        { level: '7', desc: 'Attack Range expands, ATK +70%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -40% and DEF -200 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 25, sp: 60 },
        { level: 'M1', desc: 'Attack Range expands, ATK +80%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -45% and DEF -220 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 27, sp: 58 },
        { level: 'M2', desc: 'Attack Range expands, ATK +90%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -45% and DEF -220 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 29, sp: 56 },
        { level: 'M3', desc: 'Attack Range expands, ATK +100%. Attacks deal damage twice, apply this unit\'s Trait effect to all enemies within range and create a layer of sticky liquid within Attack Range that lasts for 5 seconds. Ground enemies passing over the sticky liquid have Movement Speed -45% and DEF -220 (Does not stack). \nSkill activation grants 32 ammo (each attack consumes 2 ammo) and the skill ends when all ammo is used (Can manually deactivate skill)', spInit: 30, sp: 55 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Ch'en the Holungday's Badge", desc: 'Appointed as Sniper Operator to exercise Spreadshooter responsibilities' },
    rprx: { code: 'RPR-X', name: 'Beach Combat Suit', stages: [
      { stage: 1, atk: '+30', def: '+37', effect: 'Trait improved: Attacks all enemies within range, and deals 160% damage to enemies in the row directly in front of this unit' },
      { stage: 2, atk: '+45', def: '+42', effect: "Frugality improved: 23% chance to not consume ammo; other Sniper Operators 20%, other Ranged Operators 8%" },
      { stage: 3, atk: '+60', def: '+45', effect: "Frugality improved: 25% chance to not consume ammo; other Sniper Operators 20%, other Ranged Operators 12%" },
    ]},
    rpry: { code: 'RPR-Y', name: 'The Last Day of Holiday', stages: [
      { stage: 1, hp: '+135', atk: '+55', effect: 'New trait: Reduces Deployment Cost (-8)' },
      { stage: 2, hp: '+165', atk: '+80', effect: 'Vestiges of Vacation improved: ATK +10%, ASPD +8; water terrain: ATK +15%, ASPD +12' },
      { stage: 3, hp: '+180', atk: '+100', effect: 'Vestiges of Vacation improved: ATK +15%, ASPD +12; water terrain: ATK +28%, ASPD +20; battlefield counts as water terrain while a skill is active' },
    ]},
  },
  profile: `Ch'en, former Lungmen superintendent and former head of the L.G.D.'s Special Inspection Unit, graduated from the Victorian Royal Guard Academy with superb marks and outstanding achievements. During her time with the Department, she cracked down on crime, fought violent offenders, tracked down armed fugitives, and brought down international criminals.\nHaving resigned from the L.G.D., she is now officially a member of Rhodes Island. In accordance with her wishes, she is mainly assigned to provide field operators adequate support and on-location guidance.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 4%\nSmall amounts of Originium crystals have begun to appear on Operator Ch'en's body.\n\n[Blood Originium-Crystal Density] 0.18u/L\nAlthough Ch'en contracted Oripathy relatively early and has not received adequate treatment, thanks to her newly-formed extremely methodical lifestyle habits, Oripathy does not seem to have a significant impact on her health.\n\nI was wondering what's the big deal when they told me Lungmen confiscated Ch'en's physical report. Turns out it was no big deal at all. Lame.\n– Medic Operator Warfarin`,
    },
    {
      title: 'Archive File 1',
      content: `Ch'en really caught everyone by surprise when she came back from her holiday with that special gun of hers.\nWhat's even more of a surprise is how, after that, she's been showing up at the sniper operators' training grounds. Goes to show how serious she is.\nThe reason she chose to do this isn't anything that complicated either. She is trying to improve in a different area.\nIn principle, Rhodes Island asks its operators to work on their existing talents first. However, we certainly are not against someone like Ch'en trying to explore her own potential when she has already mastered her first skillset.\nThat said, there was a little interlude to our weapon tuning process for Ch'en.\nPer her personal account, the firearm that Tequila provided for her in Dossoles is geared for mid-range firing. In Laterano, it would be classified as an assault rifle. Her time with the firearm in Dossoles has convinced her that this attack style does not suit her. So, after a week of fiddling and watching our operators from Laterano use their firearms, she came up with this idea–She will use a shotgun for close quarters combat and explosives for mid- and long-range attacks.\nI have to say, in a way, it's just like Ch'en to choose such a combat style. Compared to the swordsmanship that she is used to, this method of combat is even cruder. In addition, although Ch'en has a solid foundation, compared to other Sniper operators, her shooting can hardly be called exemplary. As a result, her Combat Skill evaluation on her exams has taken a slight hit. Ch'en doesn't mind, however. After all, she likely chose this weapon because she wanted a more effective way of fighting. Besides, in the words of one of the instructors who supervised her exam:\n"It feels bad knowing she's actually much stronger without her gun."`,
    },
    {
      title: 'Archive File 2',
      content: `Thanks to the events that transpired at Chernobog, Ch'en, then a Lungmen police officer, has managed to leave everyone at Rhodes Island a fairly strong impression. Not only was she a core participant in the incident, but she was also intimately connected to Talulah. This is why most operators had a hard time figuring out how to approach her when she formally joined.\nCh'en certainly seems to be well aware of this herself, though she did not attempt to rectify it in anyway, at least not when she first came on board. More accurately, she didn't think there was anything about her that needed changing. After all, she was always put in charge of the missions she was assigned naturally, and she always did a great job there, too. Besides, given that she requested to be mainly assigned to field operations–she joined Rhodes Island because she wanted to follow us and see the world, after all–this didn't pose much of a problem.\nNonetheless, most operators agree that Ch'en has changed since she came back from Dossoles. This change is hard to describe; it's not a change in personality or style. It's just that, on the whole, Ch'en seems to be a little easier to get along with now.`,
    },
    {
      title: 'Archive File 3',
      content: `[Classified Log]\nDoctor, I have a favor I would like to ask.\nBecause of my responsibilities, I can't visit Rhodes Island often, and you are a very dependable person, so you are the only one whom I can turn to.\nIt's actually very simple, but the reason behind it is a little complicated, so I am afraid this letter is going to be a long one.\nI am certain that you already know about her trip to Dossoles. Thanks to Bolívar's unique circumstances and the political might of the city's mayor, Miss Candela Sanchez, Dossoles has become a truly unique city that stands out from its peers across the world.\nI'm certain you've noticed this yourself, but after her holiday there, Ch'en has clearly changed\nIt's been over half a year since everything that went down in Chernobog, and her trip has lasted almost just as long. I'm guessing that, during her journey with Rhodes Island, she's probably come to truly understand that she can't realize the objective she once had all by herself. But what of it? My guess is that she knew this in her heart before that as well. The only difference is that she probably didn't think the world was so terrible.\nIt was her time in Dossoles that really opened her eyes.\nCh'en has of course seen some bad things, but things can only get so bad in Lungmen when Chief Wei runs the place. Dossoles showed her that things can get much worse than she ever imagined. She found out for herself that this isn't something she can do much about.\nWhat can she do, then?\nDoctor, here's a sentence that I once read in a book, and it's fairly interesting: "When the environment we live in leaves much to be desired, how could we say that we ourselves are good?"\nI'm not saying Ch'en had the wrong idea or was going about it the wrong way. She was right, but the world isn't nearly as beautiful a place as she thought.\nI'm not saying I want her to be like me either. As a matter of fact, I don't want her to be like me, but at the very least, I want her to at least understand that tactfulness is not the same thing as maturity, and that the turmoils of this world do not mean that everything is so harsh. She's not afraid of the shadows, but if everything is really so clear cut that they are either out in the light or in the shadows, then most people wouldn't be so afraid. A swamp that you can't pluck yourself out of is far scarier than a cliff from which you can't see the bottom.\nCh'en will need to take that step, and, to her credit, she did try to take that step this time. She consulted me on quite a few things, and I told her a few things about how I handle and view this city.\nI could tell she was pondering whether it was right to take that step, but she took it nonetheless.\nBy now, I'm sure you can already tell what it is that I'm asking of you.\nWhen an idealist finds out the world may not be so black and white, when they decide to try to understand that dark side of humans in more detail, to face some kind of fundamental problem, can they really change their mindset right away? No, they might instead lose sight of themselves. The more resolute a person is, the harder they fall sometimes.\nThis could be the only time when Ch'en's bluntness works against her.\nAt the very least, it could keep her doubting herself and question the way she did things for a very long time. You might even have already heard her mention how there isn't an answer to anything. I am sure you are aware that this is her hesitancy speaking, not her resolve. The contradiction between procedural justice and actual justice will forever torment her. No one can help her find the answer to this question, but, at the very least, we can keep her from straying off the right path.\nI ask you this sincerely. Please help her before that actually happens.\n– Hoshiguma\nThis letter was placed on the Doctor's desk when Hoshiguma paid Rhodes Island a visit.`,
    },
    {
      title: 'Archive File 4',
      content: `Given that Ch'en was on vacation, there was no need for her to report to anyone the events that transpired in Dossoles. Yet, as soon as she returned to Rhodes Island, she spent a week writing a long, detailed report.\nHer report contained a detailed summary of her time in Dossoles, including her participation in the competition, her defusal of the crisis that emerged, as well as the assistance she provided the local police during her short stay and the lectures that she, Hoshiguma, and Swire held for the local officers to teach them how to better solve their cases. You will know everything you need to know about her trip to Dossoles as soon as you read this report.\nBut that's not all.\nCh'en also completed an excellent write-up on Bolívar and Dossoles, thanks to the many conversations she had with the locals about Bolívar, the three governments, and Dossoles as she worked her cases. This was no doubt helped by the fact she also kept herself well read on Bolívar's history, both during her time in Dossoles and after her return to Rhodes Island.\nTestament to her education at the Victorian Royal Guard Academy, not only was this an excellent, comprehensive write-up, her observation of their core problems was insightful and eye-opening. However, through this write-up, we can also tell that, the detailed research Ch'en has done has only given her even greater doubts about all the phenomena that this country and city represent. It is also apparent that she arrived at some conclusions prematurely. This perhaps has to do with that change in her mindset.\nAlthough her answer is definitely not entirely mature, that does not mean Ch'en herself is immature. Everyone has a path that they must walk. Some choose to give up before they reach the end, but Ch'en evidently is not one such person. This article is not a conclusion that she arrived at. Rather, it represents her musings, and she wishes to share her thoughts with Rhodes Island, whom she acknowledges, to work on this problem together. We at Rhodes Island are glad to see Ch'en place her trust in us, and we are glad to cooperate with her.`,
    },
    {
      title: 'Promotion Record',
      content: 'One day, I will pass judgment on her.',
    },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/spreadshooter-branch.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/chen/holungday/base.png', chibiSrc: '/operators/chen/holungday/chibi.webm', chibiMoveSrc: '/operators/chen/holungday/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'e2', label: 'Elite 2', src: '/operators/chen/holungday/e2.png', chibiSrc: '/operators/chen/holungday/chibi.webm', chibiMoveSrc: '/operators/chen/holungday/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'skin1', label: 'Ten Thousand Mountains', src: '/operators/chen/holungday/skin1.png', chibiSrc: '/operators/chen/holungday/chibi-skin1.webm', chibiMoveSrc: '/operators/chen/holungday/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'skin2', label: 'Holiday HD79', src: '/operators/chen/holungday/skin2.png', chibiSrc: '/operators/chen/holungday/chibi-skin2.webm', chibiMoveSrc: '/operators/chen/holungday/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '三目YYB' },
  ],
  portrait: '/operators/chen/holungday/portrait.png',
}

const chenDawnstreak: OperatorAlter = {
  name: "Ch'en the Dawnstreak", fileNo: 'YD30', class: 'Guard', branch: 'Arts Fighter', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Standard Headhunting'],
  position: 'Melee', trait: 'Deals Arts damage',
  tags: ['Nuker', 'DPS'],
  illustrator: '三目YYB',
  stats: { hp: 2910, atk: 670, def: 425, res: 15, block: 1, cost: 21, aspd: '1.25s', rdp: '70s' },
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
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Excellent', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'All-Seeing Eye', desc: 'ATK +13%, ASPD +13, and attacks deal Weakness damage', elite: 'E2' },
    { name: "To Know Time's Flow", desc: 'When not taking damage, every 7s restores a random amount of HP equal to 30% to 160% of ATK and dodges the next Physical or Arts attack received', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Chi Xiao - Fleeting Night', icon: '/operators/chen/dawnstreak/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: 'ATK +120%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 10, sp: 20, dur: '18s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +50%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 5, sp: 30, dur: '18s' },
        { level: '2', desc: 'ATK +55%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 5, sp: 29, dur: '18s' },
        { level: '3', desc: 'ATK +60%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 5, sp: 28, dur: '18s' },
        { level: '4', desc: 'ATK +65%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 6, sp: 27, dur: '18s' },
        { level: '5', desc: 'ATK +70%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 6, sp: 26, dur: '18s' },
        { level: '6', desc: 'ATK +75%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 6, sp: 25, dur: '18s' },
        { level: '7', desc: 'ATK +80%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 7, sp: 24, dur: '18s' },
        { level: 'M1', desc: 'ATK +90%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 8, sp: 23, dur: '18s' },
        { level: 'M2', desc: 'ATK +100%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 9, sp: 22, dur: '18s' },
        { level: 'M3', desc: 'ATK +120%, attacks hit twice, and attacks silence the target until the skill ends', spInit: 10, sp: 20, dur: '18s' },
      ],
    },
    {
      name: 'Chi Xiao - Shadowless Speed', icon: '/operators/chen/dawnstreak/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Slashes the nearest enemy 10 times, each slash dealing 480% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +300% and gains 60% Physical and Arts Dodge', spInit: 15, sp: 20, dur: '6s', rank: 'M3',
      range: [
        [0,0,1,0,0],
        [0,1,1,1,0],
        [1,1,2,1,1],
        [0,1,1,1,0],
        [0,0,1,0,0],
      ],
      levels: [
        { level: '1', desc: 'Slashes the nearest enemy 10 times, each slash dealing 350% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +200% and gains 30% Physical and Arts Dodge', spInit: 10, sp: 25, dur: '6s' },
        { level: '2', desc: 'Slashes the nearest enemy 10 times, each slash dealing 360% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +210% and gains 30% Physical and Arts Dodge', spInit: 10, sp: 25, dur: '6s' },
        { level: '3', desc: 'Slashes the nearest enemy 10 times, each slash dealing 370% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +220% and gains 30% Physical and Arts Dodge', spInit: 10, sp: 25, dur: '6s' },
        { level: '4', desc: 'Slashes the nearest enemy 10 times, each slash dealing 390% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +230% and gains 40% Physical and Arts Dodge', spInit: 11, sp: 24, dur: '6s' },
        { level: '5', desc: 'Slashes the nearest enemy 10 times, each slash dealing 400% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +240% and gains 40% Physical and Arts Dodge', spInit: 11, sp: 24, dur: '6s' },
        { level: '6', desc: 'Slashes the nearest enemy 10 times, each slash dealing 410% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +250% and gains 40% Physical and Arts Dodge', spInit: 11, sp: 24, dur: '6s' },
        { level: '7', desc: 'Slashes the nearest enemy 10 times, each slash dealing 430% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +260% and gains 50% Physical and Arts Dodge', spInit: 12, sp: 23, dur: '6s' },
        { level: 'M1', desc: 'Slashes the nearest enemy 10 times, each slash dealing 450% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +270% and gains 50% Physical and Arts Dodge', spInit: 13, sp: 22, dur: '6s' },
        { level: 'M2', desc: 'Slashes the nearest enemy 10 times, each slash dealing 460% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +280% and gains 50% Physical and Arts Dodge', spInit: 14, sp: 21, dur: '6s' },
        { level: 'M3', desc: 'Slashes the nearest enemy 10 times, each slash dealing 480% ATK as Arts damage; if the target is defeated, retargets to the next nearest enemy and adds +1 to remaining slash count; once all slashes end, if target has not been defeated and is on a deployable tile, Move to said tile, otherwise return to starting tile; afterward, ATK +300% and gains 60% Physical and Arts Dodge', spInit: 15, sp: 20, dur: '6s' },
      ],
    },
    {
      name: "Chi Xiao - Heaven's Plaint", icon: '/operators/chen/dawnstreak/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 580% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 210% ATK as Arts damage to up to 4 ground enemies', spInit: 18, sp: 25, dur: '20s', rank: 'M3',
      range: [
        [1,1,0,0],
        [2,1,1,1],
        [1,1,0,0],
      ],
      levels: [
        { level: '1', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 500% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 150% ATK as Arts damage to up to 3 ground enemies', spInit: 10, sp: 30, dur: '20s' },
        { level: '2', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 500% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 155% ATK as Arts damage to up to 3 ground enemies', spInit: 10, sp: 30, dur: '20s' },
        { level: '3', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 500% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 160% ATK as Arts damage to up to 3 ground enemies', spInit: 10, sp: 30, dur: '20s' },
        { level: '4', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 530% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 165% ATK as Arts damage to up to 3 ground enemies', spInit: 12, sp: 29, dur: '20s' },
        { level: '5', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 530% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 170% ATK as Arts damage to up to 3 ground enemies', spInit: 12, sp: 29, dur: '20s' },
        { level: '6', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 530% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 175% ATK as Arts damage to up to 3 ground enemies', spInit: 12, sp: 29, dur: '20s' },
        { level: '7', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 550% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 180% ATK as Arts damage to up to 3 ground enemies', spInit: 15, sp: 28, dur: '20s' },
        { level: 'M1', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 560% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 190% ATK as Arts damage to up to 4 ground enemies', spInit: 16, sp: 27, dur: '20s' },
        { level: 'M2', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 570% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 200% ATK as Arts damage to up to 4 ground enemies', spInit: 17, sp: 26, dur: '20s' },
        { level: 'M3', desc: 'On skill activation, unleashes a sword wave that travels forward and can change direction, dealing Arts damage to enemies it passes through equivalent to 6% of their current HP (minimum of 580% ATK as Arts damage); Attack Range expands, each attack deals 3 instances of 210% ATK as Arts damage to up to 4 ground enemies', spInit: 18, sp: 25, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Ch'en the Dawnstreak's Badge", desc: 'Appointed as Guard Operator to exercise Arts Fighter responsibilities' },
    aftx: { code: 'AFT-X', name: 'Remnant Pages of Memory', stages: [
      { stage: 1, hp: '+240', atk: '+30', effect: 'New trait: ASPD +8 when not blocking an enemy' },
      { stage: 2, hp: '+340', atk: '+48', effect: "To Know Time's Flow improved: every 6s restores 40% to 180% of ATK as HP and dodges the next attack" },
      { stage: 3, hp: '+420', atk: '+60', effect: "To Know Time's Flow improved: every 6s restores 50% to 200% of ATK as HP and dodges the next attack" },
    ]},
  },
  profile: `Ch'en, former Lungmen superintendent and former head of the L.G.D.'s Special Inspection Unit, graduated from the Victorian Royal Guard Academy with superb marks and outstanding achievements. During her time with the Department, she cracked down on crime, fought violent offenders, tracked down armed fugitives, and brought down international criminals.\nHaving resigned from the L.G.D., she is now officially a member of Rhodes Island. In accordance with her wishes, she is mainly assigned to provide field operators adequate support and on-location guidance.\nShe continues to fight on the frontlines as a Rhodes Island Operator.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 6%\nSmall traces of crystallization are visible on Operator Ch'en's body surface.\n\n[Blood Originium-Crystal Density] 0.21u/L\nCh'en's condition has deteriorated since her last checkup. We know her resolve and understand her reasons, but she must take better care of herself...\n— Sussurro\n\nYou know how she is. Oripathy or not, she'll never listen.\n— Warfarin`,
    },
    {
      title: 'Archive File 1',
      content: `"Broken shields have been melted down into plowshares. The fire in the furnace has changed.\nThe name Reunion is increasingly used to refer to a village, rather than a group of Infected.\nOversight? I have my duty as an operator of Rhodes Island, but this is also a personal commitment for me. What is different about Nine's 'fairness'? What judgment will Talulah receive? Will a reborn Reunion truly light a lasting fire of hope in the snowstorm? Someone must bear witness, and it should be me. It must be me."\nFollowing the Londinium incident, Ch'en traveled throughout Ursus, from the disputed region at the Ursus-Kazimierz Border, to the Grypherburg region, to the distant north... We later learned that Ch'en operated like a Messenger, braving martial law, harsh weather, and magnetic storms to cross the tundra, establishing the basic framework of an intelligence network for Rhodes Island. Outside of the task force that the Doctor and Amiya personally led, Ch'en was our most reliable and stable source of information in the Ursus region. Ch'en's aptitude in intelligence gathering, already on display in Lungmen, provided invaluable help to Rhodes Island.\n[Classified Log]\nCh'en did not conceal the fact that she met with Talulah's group, witnessing them unite a group of Infected on the tundra and establish a village by the name of Reunion. To Reunion, she was candid about her role, exercising oversight in her personal capacity, procuring necessary supplies, and sharing some Rhodes Island-compiled intel with them... Her stance raised some concerns amongst the operators—when the one we need to trust is the controversial figure at the heart of the Chernobog Incident, any interaction should be subject to greater scrutiny.\nIn the end, we gave Ch'en our tacit approval after extensive discussion. Ch'en has undoubtedly become an important and trustworthy member of Rhodes Island, demonstrating her oversight responsibility with concrete action, and helping the new Reunion take crucial first steps toward winning trust.\n"The children look forward to Hui-chieh's visits. Although supplies are never plentiful, they have been learning to sew teddy bears because they think she loves them after she was seen gazing at a teddy bear, lost in thought."\n"I know a lot of the resources and news that Ch'en brought came from Rhodes Island, and I understand your reservations about me. I can't guarantee that there will be a perfect ending, nor do I expect us to truly understand one another, but I guarantee that Reunion will not repeat its old mistakes. Your torch is not the only one that burns bright. There are those who carry it into the darkest night, so that it may illuminate others."`,
    },
    {
      title: 'Archive File 2',
      content: `A great snowstorm struck many places in Yan, the likes of which had not been seen for a century. The snow lasted months, covering the land in white, and making the bright red figure traveling upon it particularly conspicuous.\nRumors speak of a swordswoman who has been journeying across the land since last year, fighting for justice with her sword. She helped rebuild ruined houses in Baizao, punished bandits in Danyan, and cleared clogged water channels in Jiangqi... is she on some sort of quest? There are many differing opinions: some say she often asked those she helped where the local library was, and infer that she was seeking some secret tome that would allow her to break through a bottleneck in her training; others have seen her visit cemeteries, and believe her to be following the trail of a departed friend; and others claim that she often visited the sites where schools and colleges once stood, and hypothesize that she is a Tianshi, sent by the Ministry of Rites to investigate ancient sites... The only consensus is that there is no consensus.\nSome martial arts schools claimed her to be one of their students, only for the claim to be immediately shot down—"You're full of crap! She doesn't even know your dialect. How could she have studied there for decades?" Others have tried to challenge her to a duel. The first challenger recalls that she readily accepted his challenge, but he was stunned when she spoke a line straight out of a kung fu film. She was clearly unfamiliar with the modern-day martial arts landscape of Yan. Subsequent challengers were no longer met with the same flowery lines.\nMy investigation indicates that our heroine has moved north, and it remains to be seen whether we will see her emerge in Dahuang or Lungmen next. I would like to close this column with a word of advice... challenging her is really not for the faint of heart, or anyone who is not supremely confident in their skills!\n—Excerpt from Jianghu Monthly, Issue 02, 1103\n[Classified Log]\nCh'en's request for field assignment in Yan is hereby approved.\nThe Tomb of Sui incident carries tremendous significance for both Yan and Terra as a whole. For Yan, it meant the resolution of a thousand-year affliction; for Terra, it was a relief to know that the Jingyu Prime Vein was not being depleted at nearly the same rate as the Kolossal Prime Vein, even though neither Rhodes Island nor Yan has been able to conclusively determine the current state of the first Originium. That does not mean, however, that Yan can fully escape this Terra-wide crisis.\nWe had not previously made any association between Ch'en's matter and that of the Feranmuts. It was only when her identity and her "family matter" became known to us that we realized her "family matter" was, essentially, the family matter of Yan... Ch'en did not return to Yan's center of power following the resolution of the crisis at Baizao, instead opting to wander the lands in search of traces of a departed Sui proxy. Her reasons for taking up this responsibility are clearly linked to the writing knife that she obtained during her trip to Baizao.\n"From Baizao to Shangshu, to Yumen and Lungmen... from south to north, from the heartlands to the frontiers, I discovered many traces that the proxy left behind. If she managed to bring writing and history to such distant lands back then, perhaps the land of fairness and justice we are seeking really does exist after all."`,
    },
    {
      title: 'Archive File 3',
      content: `In the reports about the Tomb of Sui incident that the Yanese operators submitted, nothing caught our attention more than the account of Ch'en stopping Yumen with a single swing of her sword. According to Zuo Le, Ch'en cut power to all of Yumen in an instant using nothing more than a tiny writing knife, buying crucial time for him to neutralize the remaining artillery positions. Nian's account, on the other hand, was rather different: "She was muttering something like As sword of heaven's plaint, bid dawn as cast, then there was a gust of sandstorm, and then Yumen just stopped. What do you mean my statement was as vague and incomprehensible as my films? You can ask the others if you don't believe me—did you hear that, Shu? They don't believe me!" Her shouting caught the attention of the other Yanese operators present. Mr. Nothing heard the story, waved his fan, and walked away with a profound expression on his face.\nIt took only a few days for the legend of how Ch'en stopped Yumen with a single swing to spread throughout Rhodes Island. And so, the next time Ch'en returned to Rhodes Island and walked into the training room, she saw every pair of curious eyes in the room fixated on her... After learning what had happened, Ch'en agreed to do a demonstration in the outdoor training grounds. But she did not draw Chi Xiao—instead, she made the gesture of a sword with her fingers, turned her wrists, stepped forward, lowered her shoulder, and swung upwards lightly—there was no breathtaking aura, but the wind began to blow, stirring up sand and dust. A few seconds later, the sandstorm cleared, and the clouds parted to reveal the sun. It took a little while for the spectators to process what had just happened. The move seemed utterly unremarkable, yet clearly extraordinary. What made it so powerful? No one dared ask, seeing the solemn expression on Ch'en's face.\nObserving from the side, Qiubai and Yun Qingping revealed the secret—\n"It was like a ray of light breaking through the clouds, but still connected to the soil on the ground."\n"My master once said that mindset was the most important thing to the Chi Xiao style. The swing just now was very different from the traditional finishing move of Chi Xiao. If the philosophy of Lord Wei's sword is to strike with no regret, Miss Ch'en's sword represents the admission and acceptance of regret, to press forward regardless of regret."\n"That's what makes Ch'en different from Chief Wei."\n"What's that supposed to mean? Did you understand a word of that, stinking rat?"\n"...There was already a hint of that move in her sword when she was in Yumen."\n"Yumen? She was in Yumen when you were there? ...Hey, why aren't you saying anything? Why are you walking away? Did you really understand that? Wait up!"\n"Take it easy, Missy—the move sends the message that Ch'en never gives up partway."\nAs sword of heaven's plaint, bid dawn as cast. Never fear, never waver, long though the journey be. The light shines through when the clouds part. One must overcome the obstacles of one's own heart to fully comprehend the way of the sword. The sword begins and ends with the heart, but the spirit of the sword lingers. Those who fail to act because something seems impossible shall lose their spirit, and their sword lose its soul.\n—This segment has been rewritten many times; Ch'en says she is still working on it`,
    },
    {
      title: 'Archive File 4',
      content: `As Ch'en sent back more and more reports during her time in Ursus, we set up a dedicated storage area for them at the Doctor's suggestion. Reviewing these reports made us realize just how long Ch'en has been with us.\nFrom Summary of Conditions in Lungmen Slums and Tripartite Investigation Report of the Governments of Dossoles and Bolívar, to Development of Law and Order in Columbia and Challenges in Implementation and Overview of Victorian Dukes and Tara, to the recent reports on Ursus and Yan, these are not just raw intelligence collected by Ch'en, but also focused and astute observations and commentaries made by someone embarking on a long journey. They are of great significance to both Rhodes Island and Ch'en herself.\nThe fact that Ch'en is part of Yan's imperial bloodline is no longer a secret on Rhodes Island, but she has not been shunned or approached because of it. Perhaps it is because she has already left a deep impression fighting alongside the others as a former Lungmen cop, or perhaps it is because the significance of her bloodline pales in comparison to her experiences across Terra. While Ch'en keeps her distance from the Yanese government, it does not mean she no longer cares about the country. She has never truly left Yan—or rather, she has never truly left Lungmen. She is still searching for a land of fairness and justice, and she hopes that she will find it in the soil that she stands upon, but she is not bound by this land, nor by any other.\nFor us, the most valuable thing about Ch'en has never been her position, but her will and direction. She does not belong entirely to Rhodes Island, but her goal of seeking a land of fairness and justice aligns closely with Rhodes Island's mission. Operators who have gone on field missions with her say that there is a sort of certainty about Ch'en that is reassuring—she understands what she is seeking, and has never wavered. While the concepts of fairness and justice may differ somewhat from language to language and context to context, they ultimately point toward the same conviction: a belief in a better tomorrow. We all believe that Terra will become better than it is today.\n"Officer Ch'en—no, Ch'en is our comrade and kindred spirit, one of Rhodes Island's most important partners. Of that there is no doubt. Elite operator? Ahem... she understands what she wants all too well, and our paths will not necessarily always be aligned—of course, a consistent presence at headquarters or squad operation has never been a criterion for elite operator selection... Perhaps you could ask her yourself the next time she comes back?"`,
    },
    {
      title: 'Promotion Record',
      content: `I saw a village burned to the ground in the north. The charred remains stood out in the white snow. There were signs of fighting, and bodies of both uninfected and infected people. I'm not sure what happened there.\nAre such scenes a regular sight in Ursus?\nDid you see the same thing when you were in Ursus, all those years ago?\nReceived communication from Rhodes Island. Something has happened to the Doctor's team. HQ has sent a special task force to Ursus, and I have a feeling you'll run into them again.\nSecurity is really tightening in the Far North. I was thoroughly questioned and searched just walking into an ordinary hotel today.\nThere are a lot of movements from many different directions. I do not yet have a clear view... but I'll get to the bottom of it.\nReceived a letter from Madam Fumizuki yesterday...\nThe events in the Far North were just the beginning. Ursus is facing an even greater crisis. If the events truly have implications across all of Terra, as the Doctor predicted, Yan will not stand idly by, and Wei Yenwu certainly will not. He will do something.\nShould I...\nBack in Victoria, you encouraged me to do what I had already made up my mind to do. I found you again, but we still do not know the truth. Mother, your father, that pathetic man, and Wei Yenwu... We should have been told the truth about what happened. We have a right to know. Perhaps you don't care anymore, but I can't cast it aside so easily.\nSomeone told me that those old folks were young and ambitious once. What happened to them? Their ambitions grew rusty, and the only thing they have left is silence, keeping them from telling the truth... I must go back, to Lungmen, to Baizao. If they will not tell the truth, I will find it myself.\nI ran away many times, but I don't plan on running away forever—you didn't run away either, did you?\nHeaven burned red over Grypherburg that night... the fire on the ground burned for a long time. Buildings were collapsing, and other things were collapsing with them. The stubborn stone split apart in the fire, and light shone out through the crack... I still see the fire when I close my eyes, and it gives me the courage to walk toward the truth.\nI think I'm ready. I'm going back.\n...Can you hear it, Tal?\nI'm going back.\n[The letters are neatly folded, but were never sent.]`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/arts-fighter-branch.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/chen/dawnstreak/base.png', chibiSrc: '/operators/chen/dawnstreak/chibi.webm', chibiMoveSrc: '/operators/chen/dawnstreak/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '三目YYB' },
    { id: 'e2', label: 'Elite 2', src: '/operators/chen/dawnstreak/e2.png', chibiSrc: '/operators/chen/dawnstreak/chibi.webm', chibiMoveSrc: '/operators/chen/dawnstreak/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '三目YYB' },
  ],
  portrait: '/operators/chen/dawnstreak/portrait.png',
}

chen.alter = [chenHolungday, chenDawnstreak]

export default chen
