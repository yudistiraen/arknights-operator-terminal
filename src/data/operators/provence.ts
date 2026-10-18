import type { Operator } from '../../types'

const provence: Operator = {
  name: 'Provence', fileNo: 'SR03', class: 'Sniper', branch: 'Heavyshooter', rarity: 5, level: 70, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Siracusa', position: 'Ranged', race: 'Lupo', gender: 'Female', birthplace: 'Siracusa',
  birthday: 'November 30th', height: '162 cm', combatExp: '1 year', infectionStatus: 'Showed physical signs of Originium, infection confirmed by medical examination.', illustrator: '渣念',
  cv: { JP: 'Akari Kageyama', CN: 'Xu Chen', EN: 'Xanthe Huynh', KR: 'Park Ji-yoon' },
  trait: 'High accuracy point-blank shot',
  tags: ['DPS'],
  stats: { hp: 1680, atk: 871, def: 215, res: 0, block: 1, cost: 19, aspd: '1.6s', rdp: '70s' },
  range: { base: [[1, 1, 0], [2, 1, 1], [1, 1, 0]], e1: [[1, 1, 1], [2, 1, 1], [1, 1, 1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: "Hunter's Arrow", desc: 'Has a 20% chance to increase the ATK of the current attack to 140% when attacking, and the chance increases to 50% when an enemy is in the frontal tile', elite: 'E1' },
    { name: "Hunter's Arrow", desc: 'Has a 20% chance to increase the ATK of the current attack to 150% (+10%) when attacking, and the chance increases to 50% when an enemy is in the frontal tile', elite: 'E1 (Potential 5)' },
    { name: "Hunter's Arrow", desc: 'Has a 20% chance to increase the ATK of the current attack to 180% when attacking, and the chance increases to 50% when an enemy is in the frontal tile', elite: 'E2' },
    { name: "Hunter's Arrow", desc: 'Has a 20% chance to increase the ATK of the current attack to 190% (+10%) when attacking, and the chance increases to 50% when an enemy is in the frontal tile', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: "Wolf's Eye", icon: '/operators/provence/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: 'ATK +25% every time the HP of the target falls by 20%', spInit: 0, sp: 0, rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +8% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: '2', desc: `ATK +9% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: '3', desc: `ATK +10% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: '4', desc: `ATK +12% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: '5', desc: `ATK +13% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: '6', desc: `ATK +14% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: '7', desc: `ATK +16% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: 'M1', desc: `ATK +19% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: 'M2', desc: `ATK +22% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
        { level: 'M3', desc: `ATK +25% every time the HP of the target falls by 20%`, spInit: 0, sp: 0 },
      ],
    },
    {
      name: 'Prey Seeker', icon: '/operators/provence/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +220%, but Normal Attack will not target enemies with over 80% HP', spInit: 0, sp: 30, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +130%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '20s' },
        { level: '2', desc: `ATK +135%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '20s' },
        { level: '3', desc: `ATK +140%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '20s' },
        { level: '4', desc: `ATK +145%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '25s' },
        { level: '5', desc: `ATK +150%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '25s' },
        { level: '6', desc: `ATK +155%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '25s' },
        { level: '7', desc: `ATK +160%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '30s' },
        { level: 'M1', desc: `ATK +180%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '31s' },
        { level: 'M2', desc: `ATK +200%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '32s' },
        { level: 'M3', desc: `ATK +220%, but Normal Attack will not target enemies with over 80% HP`, spInit: 0, sp: 30, dur: '35s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Provence's Badge", desc: 'Appointed as Sniper Operator to exercise Heavyshooter responsibilities' },
    arcx: { code: 'ARC-X', name: 'Tail-Care Suit', stages: [
      { stage: 1, atk: '+40', def: '+30', effect: 'New trait: Redeployment Time reduced by 25 seconds' },
      { stage: 2, atk: '+50', def: '+40', effect: 'Has a 20% chance to deal 185% damage when attacking. This chance is increased to 55% when attacking an enemy in the two tiles in front of this unit.' },
      { stage: 3, atk: '+55', def: '+45', effect: 'Has a 20% chance to deal 190% damage when attacking. This chance is increased to 60% when attacking an enemy in the two tiles in front of this unit.' },
    ]},
  },
  story: `Provence, Catastrophe Messenger of Rhodes Island, always keeps an eye on the movements of Catastrophes and the enemy.`,
  profile: `Provence is a Catastrophe Messenger. She has demonstrated superior combat capability in coordinated assaults and marksmanship.\nShe now serves as a sniper on a Rhodes Island squad, Provence is also tasked with investigating Catastrophe zones and providing early warnings of impending Catastrophes.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 18%\nPrimarily internal Originiumitis, also caused mutated tail.\n\n[Blood Originium-Crystal Density] 0.3u/L\nInfection entering mid-stage, though patient is currently in stable condition.` },
    { title: 'Archive File 1', content: `In the world of wilderness scouts, those who brave the wilds, watching for changes in weather forecast the approach of a Catastrophe, those who record previous Catastrophes and provide advance warnings for those that have yet to hit are called "Catastrophe Messenger."\nCompared to her jaded peers, numb to the effects of the many Catastrophes they have witnessed, Provence is much more compassionate and dedicated to her work. She is well aware of the damage and pain that Catastrophes bring. And saving the lives of those threatened by them is her impetus for doing what she does.\nWhile on the job, Provence always ensure her teammates are well taken care of. Her trick is to stay calm and relaxed, no matter what she faces, so that those who rely on her feel comfortable and safe. Provence has extensive experience braving the remote wilderness, even with very little in the way of provisions. Her survival instinct is more than keen enough to to react to any unexpected challenges, and to formulate an appropriate response.` },
    { title: 'Archive File 2', content: `Provence's greatest hope is to improve how people face the challenges posed by Catastrophes. A staunch environmentalist, she fights against waste and littering, while advocating for the conservation of resources, and directly improves the environment through her own actions.\nProvence is often seen busily hurrying between different uninhabited biomes and Rhodes Island, where she personally volunteers to clean and recycle waste in her spare time. She has also been known to take the time to politely and thoroughly lecture the less environmentally conscious of her fellow operators. Very few have been unmoved by her sincerity.` },
    { title: 'Archive File 3', content: `It is an uncommon occurrence, but when all her work is done, including the volunteer cleanup she does, Provence enjoys her time off by carefully grooming her tail.\nIf her tail is adequately fluffed, she has been known to drop into the store to shop for some fashionable gifts for herself and her friends (including some outfits to add to her wardrobe), play with the children of Rhodes Island, try out new cooking recipes (with ingredients foraged in the wild, of course), organize the occasional shindig with her chums, and other such things that strike her fancy. Such is Provence's ideal lifestyle.` },
    { title: 'Archive File 4', content: `"We got a storm brewing near the island. Don't worry, I'll handle the evacuation. I've been in this restaurant before!"\nBefore Provence finished speaking, she was already diving headfirst into another operation deep in the wilds.\nIn fact, she is always in danger.\nBecause in fact, she suffers from Oripathy.\nThe work she so deeply values lets her infection slip her mind, but she is well aware of her condition. Still, she takes an optimistic outlook on life.\nProvence's visit with the Doctor, however, has made her more aware of the seriousness of the overall situation.\nTo ease the Doctor's concerns and make the island safer, Provence continues to make regular trips into the wild.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/heavyshooter-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/provence/base.png', chibiSrc: '/operators/provence/chibi.webm', illustrator: '渣念' },
    { id: 'e2', label: 'Elite 2', src: '/operators/provence/e2.png', chibiSrc: '/operators/provence/chibi.webm', illustrator: '渣念' },
    { id: 'skin1', label: 'Holiday HD008', src: '/operators/provence/skin1.png', chibiSrc: '/operators/provence/chibi-skin1.webm', illustrator: '渣念' },
    { id: 'skin2', label: 'Wasteland Walker', src: '/operators/provence/skin2.png', chibiSrc: '/operators/provence/chibi-skin2.webm', illustrator: '渣念' },
  ],
  portrait: '/operators/provence/portrait.png',
  portraitFocus: { y: 0.4, x: 42.2, zoom: 324 },
}

export default provence
