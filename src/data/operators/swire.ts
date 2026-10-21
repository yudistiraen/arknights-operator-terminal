import type { Operator } from '../../types'
import swireVoice from '../voices/swire'

const swire: Operator = {
  name: 'Swire', fileNo: 'LM08', class: 'Guard', branch: 'Instructor', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Lungmen Guard Department', position: 'Melee', race: 'Feline', gender: 'Female', birthplace: 'Lungmen',
  birthday: 'July 1st', height: '163 cm', combatExp: '3 years',
  infectionStatus: 'Non-infected as confirmed by medical report.',
  illustrator: '下野宏铭',
  cv: { JP: 'Sora Tokui', CN: 'Ying Xie', EN: 'Emma Ballantine', KR: 'Kim Yul' },
  voice: swireVoice,
  trait: 'Can attack enemies from range; When attacking enemies not blocked by self, increase ATK to 120%',
  tags: ['DPS', 'Support'],
  stats: { hp: 1914, atk: 656, def: 413, res: 0, block: 2, cost: 16, aspd: '1.05s', rdp: '70s' },
  range: { base: [[2, 1, 1]], e1: [[2, 1, 1]], e2: [[2, 1, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Melee Combat Guidance', desc: 'ATK of Melee allies in the 8 surrounding tiles +3% when Swire is deployed', elite: 'E0' },
    { name: 'Melee Combat Guidance', desc: 'ATK of Melee allies in the 8 surrounding tiles +6% when Swire is deployed', elite: 'E1' },
    { name: 'Melee Combat Guidance', desc: 'ATK of Melee allies in the 8 surrounding tiles +10% when Swire is deployed', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Command and Dispatch', icon: '/operators/swire/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: `The effect range of this unit's first Talent expands significantly and the effect increases to 2 times`, spInit: 20, sp: 40, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: `The effect range of this unit's first Talent expands and the effect increases to 2 times`, spInit: 20, sp: 60, dur: '15s' },
        { level: '2', desc: `The effect range of this unit's first Talent expands and the effect increases to 2 times`, spInit: 20, sp: 59, dur: '17s' },
        { level: '3', desc: `The effect range of this unit's first Talent expands and the effect increases to 2 times`, spInit: 20, sp: 58, dur: '19s' },
        { level: '4', desc: `The effect range of this unit's first Talent expands and the effect increases to 2 times`, spInit: 20, sp: 55, dur: '21s' },
        { level: '5', desc: `The effect range of this unit's first Talent expands and the effect increases to 2 times`, spInit: 20, sp: 54, dur: '23s' },
        { level: '6', desc: `The effect range of this unit's first Talent expands and the effect increases to 2 times`, spInit: 20, sp: 53, dur: '25s' },
        { level: '7', desc: `The effect range of this unit's first Talent expands significantly and the effect increases to 2 times`, spInit: 20, sp: 50, dur: '27s' },
        { level: 'M1', desc: `The effect range of this unit's first Talent expands significantly and the effect increases to 2 times`, spInit: 20, sp: 47, dur: '29s' },
        { level: 'M2', desc: `The effect range of this unit's first Talent expands significantly and the effect increases to 2 times`, spInit: 20, sp: 44, dur: '31s' },
        { level: 'M3', desc: `The effect range of this unit's first Talent expands significantly and the effect increases to 2 times`, spInit: 20, sp: 40, dur: '35s' },
      ],
    },
    {
      name: 'Cooperative Combat', icon: '/operators/swire/skill-2.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: `ATK +80% and the effect of this unit's first Talent increases to 3 times`, spInit: 20, sp: 45, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +30% and the effect of this unit's first Talent increases to 2.1 times`, spInit: 20, sp: 60, dur: '15s' },
        { level: '2', desc: `ATK +30% and the effect of this unit's first Talent increases to 2.2 times`, spInit: 20, sp: 59, dur: '15s' },
        { level: '3', desc: `ATK +30% and the effect of this unit's first Talent increases to 2.3 times`, spInit: 20, sp: 58, dur: '15s' },
        { level: '4', desc: `ATK +40% and the effect of this unit's first Talent increases to 2.4 times`, spInit: 20, sp: 55, dur: '18s' },
        { level: '5', desc: `ATK +40% and the effect of this unit's first Talent increases to 2.5 times`, spInit: 20, sp: 54, dur: '18s' },
        { level: '6', desc: `ATK +40% and the effect of this unit's first Talent increases to 2.6 times`, spInit: 20, sp: 53, dur: '18s' },
        { level: '7', desc: `ATK +50% and the effect of this unit's first Talent increases to 2.7 times`, spInit: 20, sp: 50, dur: '21s' },
        { level: 'M1', desc: `ATK +60% and the effect of this unit's first Talent increases to 2.8 times`, spInit: 20, sp: 49, dur: '23s' },
        { level: 'M2', desc: `ATK +70% and the effect of this unit's first Talent increases to 2.9 times`, spInit: 20, sp: 48, dur: '26s' },
        { level: 'M3', desc: `ATK +80% and the effect of this unit's first Talent increases to 3 times`, spInit: 20, sp: 45, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Swire's Badge", desc: 'Appointed as Guard Operator during field operations to exercise Instructor responsibilities' },
    insx: {
      code: 'INS-X', name: 'Self-defense Lipstick', stages: [
        { stage: 1, hp: '+120', atk: '+50', effect: 'Trait improved: Can attack enemies from range; When attacking enemies not blocked by self, increase ATK to 130%' },
        { stage: 2, hp: '+145', atk: '+65', effect: 'New talent: Keeping Pace - When there are Melee allies in the 8 surrounding tiles, recover 1 SP every 4 seconds' },
        { stage: 3, hp: '+170', atk: '+75', effect: 'Keeping Pace improved: When there are Melee allies in the 8 surrounding tiles, recover 1 SP every 3 seconds' },
      ],
    },
  },
  story: `Swire, Senior Superintendent of the Lungmen Guard Department. Now a special attache at Rhodes Island, providing on-site tactical command. The Heiress of the Lungmenite Billionare Family, and apple of everyone's eyes. Visible hard work accompanied with her natural gift made her climb up in rank, and her family's opulence allows her to take another route in affairs of the Guard Department. Though she did not directly participate in her family corporation, she is still proud of it, evident in the fact that she used it as her code name. However, her subordinates refer her as "Missy/Princess" more often. Due to their dire contrast in style and the competition between the two, Swire and Officer Ch'en often diverge in their ways to resolve events. She can't stand Ch'en's dullness, and the latter can't stand her unconventional measures.`,
  profile: `Swire, Senior Superintendent of the Lungmen Guard Department.\nNow a special attache at Rhodes Island, providing on-site tactical command.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests for this Operator showed clear outlines of internal organs without any unusual dark spots. No abnormal traces of Originium particles present in her system, no symptoms of Oripathy, confirming her as Uninfected.\n[Cell-Originium Assimilation] 0%\nNo signs of Oripathy present.\n[Blood Originium-Crystal Density] 0.13u/L\nSubject's vital indicators are all normal, suggesting she is rarely exposed to Originium.\nDo not worry, Miss Swire, the cost of medical examination in Rhodes Island is very low, you only need to contribute...\n— S.S.E., Medic Operator\nAny behavioral attempt to blackmail visitors actions will be dealt with severely.\n— Dr. Kal'tsit`,
    },
    {
      title: 'Archive File 1',
      content: `Swire has no aptitude for manipulating Originium. The most she can do is remote-pilot an Originium drone, but this is adequate for her needs.\nAdding a loudspeaker to such a drone lets her beam her voice to every officer in the field, a technique she has used to great effect!\nBut thinking about Swire's voice booming across a battlefield is rather intimidating...`,
    },
    {
      title: 'Archive File 2',
      content: `Although her police officers would never say anything in front of Swire, they gossip extensively about her.\n"Swire must be super rich!"\n"Her family business owns some property in Lungmen! And they have even more in Victoria!"\n"Why did she choose to be a police officer instead of inheriting the family business? What was she thinking?"\nThe officers would mutter amongst themselves behind Swire's back until they finished their mission or she lashed out at them. They were still fearful of Swire, as she always had her dreaded hammer in hand.\nNow the Rhodes Island Operators do more or less the same thing.\n"She sure is testy. And she's really mean." — A Lungmen police officer who asked to not be named.`,
    },
    {
      title: 'Archive File 3',
      content: `After speaking with Swire, most people find her as passionate as she is strict.\nSwire is fine paying necessary expenses, but if she thinks a bill is too high, becomes intensely suspicious. She will double check her accounts and circle any seemingly dubious charges.\nWhen she is angry, she deviates from her noble Victorian image. She will charge across the Lungmen street markets and no one can stop her.\nDespite this, everyone is still willing to work with her. Swire is not as aggressive as Ch'en, but her focus makes her a good boss. In addition, she is very happy to share when she is in a good mood, and she will often pay everyone who's gone the extra mile out of her own pocket.\n"She really works hard with you. She works like that with everyone." — A Lungmen police officer who asked to not be named`,
    },
    {
      title: 'Archive File 4',
      content: `I still remember that one kidnapping case.\nIt must've been before the Guard Department was founded, and Wei Yenwu had decided to clean up Lungmen. This kidnapping was the big thing in that campaign.\nThe kidnappers were really something. They had serious firepower, enough to wipe out all our detectives. If we screwed up, they would've killed the hostage and all our effort would've been for nothing.\nThe hostage's grandfather was a tough old man who seemed to be Victorian nobility. I think the kidnappers had some reason to go after this kid and it wasn't ransom. They wanted their story to be streamed to the public so Wei Yenwu would look weak. They weren't just ordinary kidnappers. It wasn't that simple.\nThe rescue mission was planned by Wei Yenwu and this kid's grandfather. They used a secret special ops team. It's beside the point, but that team was the prototype for the Guard Department's Special Inspection Unit. There were a lot of tabloids and novels written about them.\nAnyway, they pulled it off. The ringleader was executed and most of his accomplices were killed on the spot.\nThe hostage? She was just a little girl. The kidnappers clearly didn't think about how traumatic the experience would be for her.\nShe didn't end up seeing anything gruesome. She saw a Lungmen police officer rushing out. She saw the heavy Christmas snowfall. She saw the street lamps and the Christmas tree outside the abandoned building. That's pretty good.\nI hope the officers left a good impression on her.\nHow do I know all this? Some old police officers told me about it. Everyone's really proud of that mission!\nHey, don't ask me! I got nothing to hide.\n— A Lungmen Guard Department supervisor`,
    },
    {
      title: 'Promotion Record',
      content: `When did she break the habit of stuffing everything in her bag? And when should I forgive her for walking off with my bag, leaving me with nothing but a couple tubes of lipstick and a bottle of foundation to execute an arrest with?\n— An officer who does not want to be named but is named "Ch'en."`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/instructor-branch.png', factionIcon: '/icons/factions/lungmen-guard-department.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/swire/base.png', chibiSrc: '/operators/swire/chibi.webm', chibiMoveSrc: '/operators/swire/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.6, offsetYPercent: 3.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'e2', label: 'Elite 2', src: '/operators/swire/e2.png', chibiSrc: '/operators/swire/chibi.webm', chibiMoveSrc: '/operators/swire/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.6, offsetYPercent: 3.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Honor and Splendor', src: '/operators/swire/skin1.png', chibiSrc: '/operators/swire/chibi-skin1.webm', chibiMoveSrc: '/operators/swire/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: 0.8, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
  ],
  portrait: '/operators/swire/portrait.png',
  portraitFocus: { y: -7.1, x: 41.5, zoom: 295 },
  alter: {
    name: 'Swire the Elegant Wit', fileNo: 'LM22', class: 'Specialist', branch: 'Merchant', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Standard Headhunting'],
    position: 'Melee',
    trait: 'Has reduced Redeployment Time, but DP Cost is not refunded upon retreating; While deployed, 3 DP are consumed every 3 seconds (automatically retreats without sufficient DP)',
    tags: ['Fast-Redeploy', 'Nuker'],
    illustrator: '下野宏铭',
    stats: { hp: 2360, atk: 810, def: 457, res: 0, block: 1, cost: 9, aspd: '1s', rdp: '25s' },
    range: { base: [[2, 1]], e1: [[2, 1]], e2: [[2, 1]] },
    physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
    talents: [
      { name: 'Big Spendthrift', desc: `While a skill is active, gains 1 Coin each time DP is consumed by this unit's Trait (can be spent through skills)`, elite: 'E0' },
      { name: 'Big Spendthrift', desc: `While a skill is active, gains 1 Coin each time DP is consumed by this unit's Trait (can be spent through skills), and +3% ATK (stacks up to 5 times)`, elite: 'E1' },
      { name: 'Big Spendthrift', desc: `Gains 1 Coin upon skill activation (can be spent through skills). While a skill is active, gains 1 Coin each time DP is consumed by this unit's Trait, and +4% ATK (stacks up to 8 times)`, elite: 'E2' },
      { name: 'Cash Claps Calamity', desc: `Upon receiving lethal damage, as long as enough DP is available, consumes 5 DP to restore this unit's HP to 70%; the cost of this Talent doubles every time it is activated`, elite: 'E2' },
    ],
    skills: [
      {
        name: 'Loyalty and Generosity', icon: '/operators/swire/alter/skill-1.png', activation: 'Passive', recovery: 'Passive',
        desc: `Spends 1 Coin: the next attack restores HP equal to 80% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0, rank: 'M3', range: [[1, 1, 1], [1, 2, 1], [1, 1, 1]],
        note: 'Loyalty and Generosity is considered active until Swire the Elegant Wit leaves the map.',
        levels: [
          { level: '1', desc: `Spends 1 Coin: the next attack restores HP equal to 25% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 1 Coin may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '2', desc: `Spends 1 Coin: the next attack restores HP equal to 30% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 1 Coin may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '3', desc: `Spends 1 Coin: the next attack restores HP equal to 35% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 1 Coin may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '4', desc: `Spends 1 Coin: the next attack restores HP equal to 40% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 2 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '5', desc: `Spends 1 Coin: the next attack restores HP equal to 45% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 2 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '6', desc: `Spends 1 Coin: the next attack restores HP equal to 50% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 2 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '7', desc: `Spends 1 Coin: the next attack restores HP equal to 55% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 2 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: 'M1', desc: `Spends 1 Coin: the next attack restores HP equal to 60% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: 'M2', desc: `Spends 1 Coin: the next attack restores HP equal to 70% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: 'M3', desc: `Spends 1 Coin: the next attack restores HP equal to 80% of ATK to a friendly unit within the surrounding 8 tiles with less than 70% HP\nA maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
        ],
      },
      {
        name: `"Courtesy Gift"`, icon: '/operators/swire/alter/skill-2.png', activation: 'Passive', recovery: 'Passive',
        desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 200% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 5 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0, rank: 'M3', range: [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 2, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
        note: 'The range is not displayed in-game, but included here for the sake of clarity.',
        levels: [
          { level: '1', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 140% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '2', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 145% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '3', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 150% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '4', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 155% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '5', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 160% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '6', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 165% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 3 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: '7', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 170% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 4 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: 'M1', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 180% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 4 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: 'M2', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 190% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 5 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
          { level: 'M3', desc: `Spends 1 Coin to place a Champagne Bomb on a ground tile within range that is passable and can be deployed upon; the Champagne Bomb deals 200% of ATK as Physical damage to the first target it comes in contact with, and Slows for 2 seconds\nThe Champagne Bomb deals additional damage after having been deployed for 3 seconds; a maximum of 5 Coins may be held while this Skill is equipped`, spInit: 0, sp: 0 },
        ],
      },
      {
        name: 'Lavish and Prodigal', icon: '/operators/swire/alter/skill-3.png', activation: 'Auto', recovery: 'Auto Recovery',
        desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 150% of ATK as Physical damage and knocks the target back moderately\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞', rank: 'M3',
        levels: [
          { level: '1', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 80% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: '2', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 85% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: '3', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 90% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: '4', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 100% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: '5', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 105% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: '6', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 110% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: '7', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 120% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: 'M1', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 130% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: 'M2', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 140% of ATK as Physical damage and knocks the target back slightly\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
          { level: 'M3', desc: `Attacks hit twice, and gain 1 Coin upon defeating an enemy; when skill is manually deactivated, all Coins will be spent to randomly attack enemies in a frontal area. Each Coin spent in this manner hits once for 150% of ATK as Physical damage and knocks the target back moderately\nUnlimited duration, can be manually deactivated at any time; a maximum of 10 Coins may be held while this Skill is equipped`, spInit: 0, sp: 5, dur: '∞' },
        ],
      },
    ],
    modules: {
      original: { code: 'Original', name: "Swire the Elegant Wit's Badge", desc: 'Appointed as Specialist Operator during field operations to exercise Merchant responsibilities' },
      merx: {
        code: 'MER-X', name: '"Be Resplendent and Outstanding"', stages: [
          { stage: 1, hp: '+130', atk: '+25', def: '+35', effect: 'Trait improved: Has reduced Redeployment Time, but DP Cost is not refunded upon retreating; While deployed, 2 DP are consumed every 3 seconds (automatically retreats without sufficient DP)' },
          { stage: 2, hp: '+180', atk: '+35', def: '+43', effect: 'Big Spendthrift improved: Gains 1 Coin upon skill activation (can be spent through skills). While a skill is active, gains 1 Coin each time DP is consumed by this unit\'s Trait, and +5% ATK (stacks up to 8 times)' },
          { stage: 3, hp: '+200', atk: '+40', def: '+50', effect: 'Big Spendthrift improved: Gains 2 Coins upon skill activation (can be spent through skills). While a skill is active, gains 1 Coin each time DP is consumed by this unit\'s Trait, and +5% ATK (stacks up to 8 times)' },
        ],
      },
      mery: {
        code: 'MER-Y', name: "Director Swire's Lungmen Food Guide", stages: [
          { stage: 1, atk: '+57', def: '+44', effect: 'New trait: ATK +4% whenever Trait cost is paid, stacking up to 5 times' },
          { stage: 2, atk: '+71', def: '+53', effect: 'Cash Claps Calamity improved: Upon receiving lethal damage, as long as enough DP is available, consumes 5 DP to restore this unit\'s HP to 70%; the cost of this Talent increases by 5 every time it is activated' },
          { stage: 3, atk: '+81', def: '+60', effect: 'Cash Claps Calamity improved: Upon receiving lethal damage, as long as enough DP is available, consumes 3 DP to restore this unit\'s HP to 70%; the cost of this Talent increases by 3 every time it is activated' },
        ],
      },
      iswa: {
        code: 'ISW-α', name: "Swire the Elegant Wit's Specialized Badge", stages: [
          { stage: 1, hp: '+160', atk: '+45', effect: 'New trait: In Integrated Strategies, DP consumed when deployed or on the battlefield -30%, and for every 1 DP consumed by this unit, the shortest remaining Redeployment Timer in the Deployment Waiting Zone -2s' },
          { stage: 2, hp: '+260', atk: '+65', effect: 'Big Spendthrift improved: Gains 1 Coin upon skill activation (can be spent through skills). While a skill is active, gains 1 Coin each time DP is consumed by this unit\'s Trait, and +4% ATK (stacks up to 8 times); in Integrated Strategies, Coin limit +5, and gains 1 additional Coin and 2 ATK stacks whenever Trait consumes DP' },
          { stage: 3, hp: '+320', atk: '+80', effect: 'Big Spendthrift improved: Gains 1 Coin upon skill activation (can be spent through skills). While a skill is active, gains 1 Coin each time DP is consumed by this unit\'s Trait, and +4% ATK (stacks up to 8 times); in Integrated Strategies, Coin limit +5, every Originium Ingot owned increases ATK stack limit by 1 (max to 60 stacks), and gains 1 additional Coin and 3 ATK stacks whenever Trait consumes DP' },
        ],
      },
    },
    story: `Swire, Senior Superintendent of the Lungmen Guard Department. Now a special attache at Rhodes Island, providing on-site tactical command. The Heiress of the Lungmenite Billionare Family, and apple of everyone's eyes. Visible hard work accompanied with her natural gift made her climb up in rank, and her family's opulence allows her to take another route in affairs of the Guard Department. Though she did not directly participate in her family corporation, she is still proud of it, evident in the fact that she used it as her code name. However, her subordinates refer her as "Missy/Princess" more often. Due to their dire contrast in style and the competition between the two, Swire and Officer Ch'en often diverge in their ways to resolve events. She can't stand Ch'en's dullness, and the latter can't stand her unconventional measures.`,
    profile: `Swire, Commissioner of the Lungmen Guard Department.\nReturning from her holiday in Siesta, she is currently providing Rhodes Island assistance in her capacity as a private individual, and based on her own judgment.`,
    records: [
      {
        title: 'Clinical Analysis',
        content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Swire shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.13u/L\nOperator Swire rarely comes into contact with Originium.`,
      },
      {
        title: 'Archive File 1',
        content: `Compared to before her promotion to L.G.D. Commissioner, Swire has had little opportunity to visit Rhodes Island, and the few visits she does make have been relatively shorter. In the Training Room, she often simply gives a few words of advice to the training operators, and completely dodges any mention of Lungmen when conversing our operators. At most she occasionally brings up the logistics company she and Bison founded together in Siesta, as well as her magnum opus there—the waterpark.\nBut ever since she was promoted to commissioner, she rarely seems to show up together with Operator Hoshiguma.\nSome veteran operators couldn't help but wonder if her promotion created a rift between the two, but every time the subject is brought up, she would suddenly get emotional and complain that although Hoshiguma seems like last person to mind such formalities, she'd always call her "Commissioner Swire," both in public and private. Even when the two of them happen to bump into each other at the elevators, Hoshiguma intentionally avoids her with a solemn expression, instead of accompanying her. This has left Swire dumbfounded. Although Hoshiguma has always dismissed this as a method to avoid arousing suspicion, Swire clearly did not accept this answer.\nOut of an abundance of caution, our operators now restrict the topics of their everyday conversations to Lungmen's dining scene. Supposedly, Swire recommends places ranging from local street stalls to high end restaurants with exorbitant prices. While on deployment in Lungmen, our operators sometimes catch her having late night snacks at the street stalls. They would merely wave at each other before going back to their meals, with the lights of the L.G.D. Commissioner's office illuminating the night sky in the distance.`,
      },
      {
        title: 'Archive File 2',
        content: `Swire isn't one to shy away from talking about her investments in Siesta.\nShe once just happened to walk by Engineering with her waterpark expansion blueprints in tow and ask for some free tips, completely going against any business logic. She also met up with Snowsant as she was returning from a field mission, told her she "wanted the chief designer to participate in the ribbon cutting ceremony," and shoved a few more designs into her hands while she was at it.\nUnder her leadership, her waterpark was successfully built to blueprint, and has proven to be no less exciting than the Obsidian Festival. It draws crowds of visitors with no end in sight, and there are even plans to expand. Thanks to this one trip, Snowsant managed to finally amass the funding she's been trying to obtain for years—as well as a multitude of design patents—while Swire and Bison have at last found their footing in Terra's cutthroat international logistics and trade industry.\nMountaincomm Trade is currently in a period of stable expansion, and their international business's success in Siesta has given the two young entrepreneurs the confidence to continue. Their next stop, Lungmen—Yan's most important commercial port—is also waiting to be taken to new heights. Though compared to their ultimate goal of connecting all the lands together, the two of them are merely taking a small step forward. However, this one, firm step has already roused the echoes of time.\n"What's the point in following the older generation's asses only to fight over what they leave behind? If I'm getting into business, I may as well break into a new market. I can do more than uphold the order in Lungmen. I have the power to build it."\nThe many parties within the Lungmen Chamber of Commerce are even now bickering amongst themselves. Even the scaffolding used to build Siesta's new towers is covered with their corporations' names in large letters. Siesta is facing a transition, and so is Swire. And both have satisfactory answers to offer.`,
      },
      {
        title: 'Archive File 3',
        content: `On her journey home from Siesta, Swire received a total of three letters.\nOne was neat and stately, with heavy strokes that nearly penetrate the paper.\n"Adams has read your last letter. He was elated, and he both approves of the Mountaincomm Trade business and has high expectations of you."\n......\n"However, considering that you now hold an important position, it is paramount that you exercise prudence, maintain the appropriate demeanor, and refrain from making any ostentatious displays in public. This should go without saying. Now that your vacation is over, I must ask that you return to your duties at the L.G.D. with all haste."\n"Further, your grandfather's condition has been deteriorating by the day. He is eager to see his granddaughter. Please pay him a visit as soon as possible."\n—Wei Yenwu\nAnother has beautiful handwriting, and even the paper itself gives off a pleasant aroma.\n"I heard that your grandfather coughed up blood and fainted while watching your childhood tapes. I visited him in the hospital, but he was asleep. The doctor wasn't very optimistic about his condition."\n"I know you two have never gotten along, but blood is thicker than water. There must be something he wants to tell you before he goes. Stop playing around all day and come back to see him as soon as you can. Think of it as giving yourself closure. You owe yourself that much. Don't end up regretting your decisions."\n— Lin Yühsia\nAnother letter has strokes as heavy as the first, though its handwriting is much cruder. The sender also practically dove towards Swire with the letter.\n"Nei zek laan taan mao, I heard you pissed nei ah je off so much that he just up and zau maai?!"\n—Hoshiguma\nSwire held Hoshiguma down, and then continued her journey to Lungmen.\nThe conversation in that extravagant sickroom between Swire and Old Mr. Schwire, her grandfather, will forever remain a secret to everyone else. However, the moment she closed the door, a satisfied laugh could be heard in the hallway, creeping through the door.\nA few months later, Swire, his heir apparent, announced she would leave the Schwire Group. That afternoon, she attended the Lungmen Guard Department's promotion ceremony and was promoted to the role of commissioner—the police chief.`,
      },
      {
        title: 'Archive File 4',
        content: `There is a desk in the L.G.D. senior superintendents' office that has sat empty for two years. Thanks to Swire's promotion, there will now be another empty desk. When the last senior superintendent left, she didn't take any of her belongings with her. This time, Swire put them all away in a paper box labeled with the name of their owner: Ch'en Hui-chien.\nCatalogue of Desktop Items\nCh'en Hui-chieh:\nFelt-tip pen, previous years' documents pertaining to the Lungmen Infected, water cup.\nSwire:\nBusiness contract, letter from Lin, evidence bag, L.G.D. holiday attendance schedule, police work policy adjustment suggestions, situation analyses...\nAlso a bowl of finball soup, still hot; I'll bring it over in a moment.\nThe officers sometimes privately discuss how Swire's leadership compares to Ch'en's. Superintendent Ch'en always led the charge, and always capably divvied up the tasks among everyone. Those who worked under her would breathe a long sigh after missions and find themselves unable to loosen up for the better part of a day. On the other hand, Swire requires everyone to handle multiple tasks at once, but all the officers agree that, even at their most busy, the work is never unmanageable. No matter how many problems there are, they can always feel a clear through line in their work. This line threads together every problem and reaches the core of it all. But long story short, "It's like both of them have eight brains each. If I were in their position, I'd be dead the first day on the job."\nAside from her work at the L.G.D., Mountaincomm Trade, which Swire founded with Bison, has expanded rapidly from only a small factory in a corner of Lungmen, allowing the city to gain an even firmer foothold in Terra's international trade as Yan's premier city of commerce. Lungmen's public order and economy are both undergoing rapid development. Swire still sits in her office, and her desk is just as messy and cluttered as before, but no one would ever claim that she got where she is because of the Schwire Group's backing, or that she took over for somebody. She is where she deserves to be, and is doing a terrific job, too.\n"Young Ch'en's chase may have guided her onto a different path, but it's clear that this girl is a better fit for the role... The kids have their own paths to walk, and they're all well on their way now. Remember how you were worried sick all those years ago? Now you'll admit they're capable, right?"\n"She is indeed doing a fine job. I can rest easy knowing the L.G.D. is in her capable hands."\n"You should watch your back, though. She might even be eyeing your Lungmen Chief seat."\n"She'll have to work much harder for it, then. Us old bones aren't THAT old yet—Hey, your beard got in my bowl!"\n—A casual conversation between two old men drinking tea in Lungmen's night market`,
      },
      {
        title: 'Promotion Record',
        content: `Lungmen Guard Department Letter of Appointment\nPer resolution, Beatrix Schwire is hereby appointed the Commissioner of the Lungmen Guard Department.\nIt is my wish that you uphold the public order in Lungmen and the peace enjoyed by its citizenry.\nSigned\nWei Yenwu, Chief of Lungmen\nSwire holds the thin letter of appointment in her hand and solemnly puts it away in her drawer. The thinness of the paper and the simplicity of its words weighed heavily in her hands.`,
      },
    ],
    classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/merchant-branch.png',
    skins: [
      { id: 'base', label: 'Base', src: '/operators/swire/alter/base.png', chibiSrc: '/operators/swire/alter/chibi.webm', chibiMoveSrc: '/operators/swire/alter/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: -0.1, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
      { id: 'e2', label: 'Elite 2', src: '/operators/swire/alter/e2.png', chibiSrc: '/operators/swire/alter/chibi.webm', chibiMoveSrc: '/operators/swire/alter/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: -0.1, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
      { id: 'skin1', label: 'Rhythmic Blocks', src: '/operators/swire/alter/skin1.png', chibiSrc: '/operators/swire/alter/chibi-skin1.webm', chibiMoveSrc: '/operators/swire/alter/chibi-move-skin1.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.4, offsetYPercent: 2.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    ],
    portrait: '/operators/swire/alter/portrait.png',
    portraitFocus: { y: -3.4, x: 43.7, zoom: 354 },
    summon: {
      name: 'Champagne Bomb',
      icon: '/operators/swire/alter/champagne-bomb.png',
      position: 'Melee',
      trait: `Deployed on an open melee tile within the two tiles adjacent to Swire the Elegant Wit through her second skill, "Courtesy Gift" (consumes 1 Coin per Bomb). Detonates on contact with an enemy, dealing Physical damage and Slowing them; deals additional damage after having been deployed for 3 seconds.`,
      stats: { hp: 1000, atk: 100, def: 0, res: 0, block: 0, cost: 0, aspd: '1s', rdp: '0s' },
      range: [[2]],
      note: 'Invulnerable, cannot be healed. The range is not displayed in-game.',
    },
  },
}

export default swire
