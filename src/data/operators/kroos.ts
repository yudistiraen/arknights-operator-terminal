import type { Operator } from '../../types'
import kroosVoice from '../voices/kroos'

const kroos: Operator = {
  name: 'Kroos', fileNo: 'PA12', class: 'Sniper', branch: 'Marksman', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A1', position: 'Ranged', race: 'Cautus', gender: 'Female', birthplace: 'Rim Billiton',
  birthday: 'November 22nd', height: '154 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '下野宏铭',
  cv: { JP: 'Azusa Tadokoro', CN: 'Su Wan', EN: 'Grace Hogg-Robinson', KR: 'Yang Jung-hwa' },
  voice: kroosVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1060, atk: 425, def: 126, res: 0, block: 1, cost: 11, aspd: '1s', rdp: '70s' },
  range: { base: [[0,1,1,1],[2,0,1,1],[0,1,1,1]], e1: [[0,1,1,1,1],[2,0,1,1,1],[0,1,1,1,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Targeting - Primary', desc: 'When attacking, has a 20% chance to increase the current damage of that attack to 150%', elite: 'E1' }],
  skills: [{
    name: 'Double Tap - Auto', icon: '/operators/kroos/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
    desc: 'The next attack shoots 2 in a row, dealing 140% of ATK in physical damage with each shot', spInit: 0, sp: 4, rank: 'Rank 7',
    levels: [
      { level: '1', desc: 'The next attack shoots 2 in a row, dealing 100% of ATK in physical damage with each shot.', spInit: 0, sp: 5 },
      { level: '2', desc: 'The next attack shoots 2 in a row, dealing 105% of ATK in physical damage with each shot.', spInit: 0, sp: 5 },
      { level: '3', desc: 'The next attack shoots 2 in a row, dealing 110% of ATK in physical damage with each shot.', spInit: 0, sp: 5 },
      { level: '4', desc: 'The next attack shoots 2 in a row, dealing 120% of ATK in physical damage with each shot.', spInit: 0, sp: 4 },
      { level: '5', desc: 'The next attack shoots 2 in a row, dealing 125% of ATK in physical damage with each shot.', spInit: 0, sp: 4 },
      { level: '6', desc: 'The next attack shoots 2 in a row, dealing 130% of ATK in physical damage with each shot.', spInit: 0, sp: 4 },
      { level: '7', desc: 'The next attack shoots 2 in a row, dealing 140% of ATK in physical damage with each shot.', spInit: 0, sp: 4 },
    ],
  }],
  modules: {},
  story: `A Columbian Cautus of Rim Billitoner descent, Kroos was a police cadet in Tkaronto working together with Fang and Beagle. Following a Catastrophe titled "Blackwasp" that led to their Oripathy, Kroos joined Rhodes Island together with her colleagues to escape the discrimination towards the Infected. Assigned to Op Reserve A1, Kroos puts her police training to good use in the field as a sharpshooter, and her happy, upbeat, and fun-loving attitude is actually the way for her to cope with her Oripathy.\n\nAfter years of strenuous training, Kroos become a skilled markswoman on par with R.I.'s veteran sharpshooters. However, by then, Op Reserve A1 had been disbanded, Beagle was W.I.A. during an operation in Bolívar, while Fang was wounded following a friendly fire incident during an operation in Rim Billiton. Consequently, Kroos is no longer the cheerful and jovial Cautus we knew and love; she occasionally becomes somber and stern, and her depression makes it difficult for her to take a peaceful, quiet nap.`,
  profile: `Originally from Rim Billiton. Kroos also received her training from the Columbian Garrison at Holmegard with Fang and Beagle. She is calm and constantly smiling as she maintains a gentle demeanor. However, she sometimes breaks her facade, revealing a sharp-tongued, ferocious side.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 8%\nShe presents no obvious external symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.23u/L\nDegree of infection is minor and physical symptoms are not yet present.`,
    },
    {
      title: 'Archive File 1',
      content: `Kroos prefers to put in the absolute minimum effort in life and on the battlefield, which is reflective of her weapon of choice - a modern crossbow. Despite her lazy work ethic, Kroos has become a skilled marksman and assists her fellow Operators by flanking the enemy and shooting them in the rear with deadly precision.`,
    },
    {
      title: 'Archive File 2',
      content: `Ever since she was a child, Kroos lacked initiative. But during training, she showed an exceptional talent for marksmanship. On the battlefield, she effortlessly locates ideal sniper nests and rains down a hail of precise and deadly fire while backed up by her teammates. Both Fang and Beagle trust Kroos with their lives and she is their support sniper of choice.`,
    },
    {
      title: 'Archive File 3',
      content: `While a member of the garrison, Kroos faced everything with a smile. Upon being infected with Oripathy and suffering discrimination, she had a complete change in mood. After angrily cursing out the other members of the garrison, she along with Fang and Beagle left the garrison for good. In order to find a way for the three of them to survive, Kroos searched far and wide before finally discovering their new home at Rhodes Island.`,
    },
    {
      title: 'Archive File 4',
      content: `The always smiling Kroos often leaves others with an affectionate impression but does so in order to avoid trouble. She enjoys finding quiet places to slack off and take naps. Although she is typically well-mannered and aloof, when something she cares about is on the line her persona shifts into a more ferocious persona. Even when she is talking, she occasionally displays hints of that ferocity. This facade works on Fang but not Beagle as Kroos cannot withstand her piercing gaze.`,
    },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/op-reserve-a1.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/kroos/base.png', chibiSrc: '/operators/kroos/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'the mag', src: '/operators/kroos/skin1.png', chibiSrc: '/operators/kroos/chibi-skin1.webm', illustrator: '下野宏铭' },
    { id: 'skin2', label: 'Moonlit Voyage', src: '/operators/kroos/skin2.png', chibiSrc: '/operators/kroos/chibi-skin2.webm', illustrator: '下野宏铭' },
  ],
  portrait: '/operators/kroos/portrait.png',
  portraitFocus: { y: 0.5, x: 25.1, zoom: 311 },
  alter: {
    name: 'Kroos the Keen Glint', fileNo: 'R170', class: 'Sniper', branch: 'Marksman', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Event Reward'],
    position: 'Ranged', trait: 'Attacks aerial enemies first',
    tags: ['DPS'],
    illustrator: 'm9nokuro',
    stats: { hp: 1520, atk: 577, def: 176, res: 0, block: 1, cost: 15, aspd: '1s', rdp: '80s' },
    range: {
      base: [[0,1,1,1],[2,0,1,1],[0,1,1,1]],
      e1: [[0,1,1,1,1],[2,0,1,1,1],[0,1,1,1,1]],
      e2: [[0,1,1,1,1],[2,0,1,1,1],[0,1,1,1,1]],
    },
    physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
    talents: [
      { name: 'Bullseye', desc: 'When attacking, has a 20% chance to deal 150% damage and Stun the target for 0.2 seconds', elite: 'E2' },
    ],
    skills: [
      {
        name: 'Traceless', icon: '/operators/kroos/alter/skill-1.png', activation: 'Manual', recovery: 'Offensive',
        desc: 'ATK +40%, attacks hit 2 times in a row and gain Camouflage', spInit: 10, sp: 15, dur: '15s', rank: 'M3',
        levels: [
          { level: '1', desc: 'ATK +10%, attacks hit 2 times in a row and gain Camouflage', spInit: 3, sp: 20, dur: '11s' },
          { level: '2', desc: 'ATK +13%, attacks hit 2 times in a row and gain Camouflage', spInit: 3, sp: 20, dur: '11s' },
          { level: '3', desc: 'ATK +16%, attacks hit 2 times in a row and gain Camouflage', spInit: 3, sp: 20, dur: '11s' },
          { level: '4', desc: 'ATK +20%, attacks hit 2 times in a row and gain Camouflage', spInit: 5, sp: 17, dur: '12s' },
          { level: '5', desc: 'ATK +23%, attacks hit 2 times in a row and gain Camouflage', spInit: 5, sp: 17, dur: '12s' },
          { level: '6', desc: 'ATK +26%, attacks hit 2 times in a row and gain Camouflage', spInit: 5, sp: 17, dur: '12s' },
          { level: '7', desc: 'ATK +30%, attacks hit 2 times in a row and gain Camouflage', spInit: 7, sp: 15, dur: '13s' },
          { level: 'M1', desc: 'ATK +33%, attacks hit 2 times in a row and gain Camouflage', spInit: 8, sp: 15, dur: '14s' },
          { level: 'M2', desc: 'ATK +36%, attacks hit 2 times in a row and gain Camouflage', spInit: 9, sp: 15, dur: '14s' },
          { level: 'M3', desc: 'ATK +40%, attacks hit 2 times in a row and gain Camouflage', spInit: 10, sp: 15, dur: '15s' },
        ],
      },
      {
        name: 'Silencer', icon: '/operators/kroos/alter/skill-2.png', activation: 'Manual', recovery: 'Auto',
        desc: 'Attack Interval reduces greatly and attacks hit 2 times in a row. After hitting a target 32 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 25, sp: 35, dur: '30s', rank: 'M3',
        levels: [
          { level: '1', desc: 'Attack Interval reduces slightly and attacks hit 2 times in a row. After hitting a target 40 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 10, sp: 50, dur: '22s' },
          { level: '2', desc: 'Attack Interval reduces slightly and attacks hit 2 times in a row. After hitting a target 40 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 11, sp: 49, dur: '22s' },
          { level: '3', desc: 'Attack Interval reduces slightly and attacks hit 2 times in a row. After hitting a target 40 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 12, sp: 48, dur: '22s' },
          { level: '4', desc: 'Attack Interval reduces and attacks hit 2 times in a row. After hitting a target 40 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 15, sp: 45, dur: '24s' },
          { level: '5', desc: 'Attack Interval reduces and attacks hit 2 times in a row. After hitting a target 40 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 16, sp: 44, dur: '24s' },
          { level: '6', desc: 'Attack Interval reduces and attacks hit 2 times in a row. After hitting a target 40 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 17, sp: 43, dur: '24s' },
          { level: '7', desc: 'Attack Interval reduces moderately and attacks hit 2 times in a row. After hitting a target 40 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 20, sp: 40, dur: '26s' },
          { level: 'M1', desc: 'Attack Interval reduces moderately and attacks hit 2 times in a row. After hitting a target 36 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 20, sp: 40, dur: '28s' },
          { level: 'M2', desc: 'Attack Interval reduces moderately and attacks hit 2 times in a row. After hitting a target 32 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 25, sp: 40, dur: '28s' },
          { level: 'M3', desc: 'Attack Interval reduces greatly and attacks hit 2 times in a row. After hitting a target 32 times, attacks hit 4 times in a row for the remainder of the skill duration', spInit: 25, sp: 35, dur: '30s' },
        ],
      },
    ],
    modules: {
      original: { code: 'Original', name: "Kroos the Keen Glint's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
      marx: { code: 'MAR-X', name: 'Truth or Dare', stages: [
        { stage: 1, hp: '+110', atk: '+22', effect: 'New trait: Increases ATK to 110% when attacking aerial targets' },
        { stage: 2, hp: '+160', atk: '+27', effect: 'Bullseye improved: When attacking, has a 20% chance to deal 160% damage and Stun the target for 0.2 seconds' },
        { stage: 3, hp: '+190', atk: '+31', effect: 'Bullseye improved: When attacking, has a 20% chance to deal 165% damage and Stun the target for 0.2 seconds' },
      ]},
    },
    story: `A Columbian Cautus of Rim Billitoner descent, Kroos was a police cadet in Tkaronto working together with Fang and Beagle. Following a Catastrophe titled "Blackwasp" that led to their Oripathy, Kroos joined Rhodes Island together with her colleagues to escape the discrimination towards the Infected. Assigned to Op Reserve A1, Kroos puts her police training to good use in the field as a sharpshooter, and her happy, upbeat, and fun-loving attitude is actually the way for her to cope with her Oripathy.\n\nAfter years of strenuous training, Kroos become a skilled markswoman on par with R.I.'s veteran sharpshooters. However, by then, Op Reserve A1 had been disbanded, Beagle was W.I.A. during an operation in Bolívar, while Fang was wounded following a friendly fire incident during an operation in Rim Billiton. Consequently, Kroos is no longer the cheerful and jovial Cautus we knew and love; she occasionally becomes somber and stern, and her depression makes it difficult for her to take a peaceful, quiet nap.`,
    profile: `Following extensive training and practical experience, Kroos has been smoothly promoted to formal Operator status, principally tasked with field missions. Under the guidance of Rhodes Island's Instructors and from tempering in the field, she has greatly matured, gaining her own insight into and views on firing techniques and concealing movements.`,
    records: [
      {
        title: 'Clinical Analysis',
        content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 10%\nVery fortunately, she continues to present no obvious external symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.25u/L\nOripathy shows signs of spread, owing to her undertaking of long-term field assignments. Close attention needs to be paid.`,
      },
      {
        title: 'Archive File 1',
        content: `After years of maturing, everyone can clearly see how Kroos has transformed. Is she taller? For a fact. Is her hair longer? Sure is. Have her tastes shifted? Seeing how she dresses now, you'd be right. Apart from those changes though, she still seems to be the same Kroos we know and love. She loves to play, laugh, and goof off. However, if you ever see her curled up in some corner, napping, pay careful attention to whether she really is off-guard. The old her would lazily greet you as you approach, still half-asleep. Now? Get just a little closer, and next second you'll find yourself caught in her trap. Then she'll shoot to her feet, free you from it, and tell you in that same old tone that it was just a little prank. But after seeing her proficiency at disassembling her traps, and that her crossbow was specially refitted with a bayonet, we're sure you'll realize at least one thing.\n\nNo longer is she Reserve Operator Kroos.`,
      },
      {
        title: 'Archive File 2',
        content: `Excerpts from Kroos' trapping notes: On "Magic Tricks"\n\n"Marathon Alarms"\nThis is that prank Fang and the rest pulled to get me out of bed, but now I finally get to use it on others! Wish I could see the looks on their faces when they wake up from their nap to find a few extra alarm clocks~\nNotes: Not to be used bedside or on people in deep sleeps, they'll wake up grumpy.\n......\nPeople stuck in combat situations get very sensitive to sounds. That's how they become part of the trap themselves, one after another. Can completely numb the enemy's senses, or alert teammates that they're coming. But not all that practical, on account of all the alarm clocks you'd need. Switch out for appropriate substitute based on the battlefield.\n\n"Invisible Warning Tape"\nThere's a lot of fun to be had with a roll of clear sticky tape. Most classic's when you stick strips all across a doorframe and lead a good friend into it. Watching them get stuck or even trip really brings a smile to your face!\nNotes: Target must however be chosen with care, and watch the mood they're in. If it doesn't turn out funny, apologize straight away.\n......\nAt first I used tactical rope, but nowadays this purpose-developed tripwire has the edge in concealment, weight and price. Based on real combat testing, this see-through thread gets exactly the effect you want, and even marries well with other traps. Gives you a level of lethality from the materials alone, and can be wound in a pinch to work as tactical rope. Considering how all-purpose it is, I should apply for a reel with Logistics next time I'm out on the field. Majorly useful.\n\n"Hollow Cake"\nPreparing this one's a pain in the rear, but especially funny. Hollow out a hole in a cake, fill it with other stuff and then re-cover. Wait for everyone's looks when they come to eat the cake and find "something nice" inside.\nNotes: Some people don't have very good teeth, so make sure not to stuff anything too hard in.\n......\nYou're not just limited to food when you pull this one in practical combat. Kettles, cupboards, supplies. Just use your thinker, and the world's full of stuff to use against your enemies.\n\n"Me"\nMy mates have always loved showing up next to me from out of nowhere to scare me, which got me thinking: if I use myself to draw their attention, won't it be even harder for them to notice all the little shadows where I've tucked my pranks?\nNotes: People have all their focus on you when they scare you, so you'd best not make any moves and give it away.\n......\nWhat does the enemy most want to see? Me, of course. Me, hurt. Me, dead. The instructors said: "No hunter hunts forever." There'll always come a day when a Sniper Operator becomes someone else's prey. So why not... treat myself as bait, and give the other guy a "nice surprise?" Right, no hunter hunts forever, but there are some hunters who'll disguise themselves as the prey.`,
      },
      {
        title: 'Archive File 3',
        content: `After passing the examination and becoming a formal Operator, Kroos is now qualified to accept solo missions. Her treatment of assignments is painstakingly conscientious. She can delicately sort out all manner of conflicting views, and she's more than fluent in communicating with her employers. She's never had a contract broken or an assignment failed. When on field missions with other operators, she rigorously abides by schedules and even raises her own views, all to ensure the mission succeeds perfectly. When on break from field work, she remains aboard Rhodes Island, where she'll assist the instructors by sharing her combat experiences with the reserve operators. Or perhaps she'll take part in some recon and solo operation training, either way keeping her itinerary full. The Kroos of today is a cheerful, good-humored, and self-disciplining woman; she's discarded her bad habits, and strived to excel at what she does. You've long since known that Kroos was worth trusting, but now you can rest easy while she's on almost any assignment, because you know she'll never betray your confidence.\n\nThe facts have proven as much.`,
      },
      {
        title: 'Archive File 4',
        content: `At this point, how long has Kroos gone without rest?\n\nIt all depends on how you define "rest." If it means closing her eyes and sleeping, she isn't much different from back then. But if rest means unloading her burdens and falling deep in dreamland without a care in the world?\n\nIn that case, it's been a very long time now.\n\nBecause of her mistake.\n\nOr put another way– what she's fixated on as her mistake.\n\nIn Rim Billiton, when Reserve Op Team A1 still operated together, a bolt skewered the body of a squadmate, and it left its eternal scar on Kroos' spirit too.\n\nIf only she hadn't been nervous, if only her shot hadn't strayed, if only she'd kept tighter aim, none of it would've happened.\n\nThis is what she tells herself.\n\nAgain and again.\n\nOn the battlefield, everything changes in the blink of an eye, and she'd already done the best she could. Everyone told her that.\n\nBut, after seeing that scar in front of her, she still can't forgive herself.\n\nShe should've done better.\n\nShe has to do better.\n\n......\n\nEver since then, her sleep's become unusually light.\n\nShe confirms the rustle of every blade of grass, every sound on the pavement, one by one.\n\nShe's scared.\n\nScared of her own negligence, of allowing another crisis to befall a comrade.\n\nShe's long since been unable to sleep soundly, even aboard Rhodes Island.\n\nAnd the reward she most hopes for at the end of a hard day's work has changed too, from a neverending dream, to a simple breather on a bench.\n\nThis, for her and her alone,\nis the price of maturity.`,
      },
      {
        title: 'Promotion Record',
        content: `Rhodes Island Workshop Armament Remodel Record\nClient Operator: Kroos\nClient Armament: Rhodes Island Standardized Crossbow\n\nRemodeling Entry 1\nDetails of remodeling: personalization adjustments\nResults of remodeling: added trinketry in every known color\nReason for remodeling: personal operator preference\n\nRemodeling Entry 2\nDetails of remodeling: sights\nResults of remodeling: removed optical sights, switched for iron sights\nReason for remodeling: personal operator use habit, (speculation) optical possibly obstructing field of view\n\nRemodeling Entry 3\nDetails of remodeling: personalization adjustments\nResults of remodeling: removed trinketry, added new trinketry onto crossbow body, used high friction material by operator request\nReason for remodeling: (speculation) personal operator preference changed\n\nRemodeling Entry 4\nDetails of remodeling: whole body\nResults of remodeling: used newest materials to increase strength of entire crossbow, improved load method, further boosting operator rate of rapid-fire\nReason for remodeling: operator proposed adjustments based on near-future fieldwork and change in style of weapon use\n\nRemodeling Entry 5\nDetails of remodeling: foregrip attachment\nResults of remodeling: installed bayonet on foregrip\nReason for remodeling: unclear, (speculation) for extreme cases where sniper operator has close combat needs`,
      },
    ],
    classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png',
    skins: [
      { id: 'base', label: 'Base', src: '/operators/kroos/alter/base.png', chibiSrc: '/operators/kroos/alter/chibi.webm', illustrator: 'm9nokuro' },
      { id: 'e2', label: 'Elite 2', src: '/operators/kroos/alter/e2.png', chibiSrc: '/operators/kroos/alter/chibi.webm', illustrator: 'm9nokuro' },
      { id: 'skin1', label: 'Along the Corridor', src: '/operators/kroos/alter/skin1.png', chibiSrc: '/operators/kroos/alter/chibi-skin1.webm', illustrator: 'm9nokuro' },
    ],
    portrait: '/operators/kroos/alter/portrait.png',
    portraitFocus: { y: 11.8, x: 50.6, zoom: 355 },
  },
}

export default kroos
