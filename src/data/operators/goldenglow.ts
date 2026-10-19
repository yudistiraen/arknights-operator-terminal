import type { Operator } from '../../types'
import goldenglowVoice from '../voices/goldenglow'

const goldenglow: Operator = {
  name: 'Goldenglow', fileNo: 'VC09', class: 'Caster', branch: 'Mech-Accord Caster', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Victoria', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Victoria',
  birthday: 'January 7th', height: '159 cm', combatExp: 'None', infectionStatus: 'Infected', illustrator: 'Namie',
  cv: { JP: 'Ayane Sakura', CN: 'Bai Deng', EN: 'Heather Nicol', KR: 'Jung Hye-won' },
  voice: goldenglowVoice,
  trait: "Controls a Drone to deal Arts damage to an enemy equal to 20% of ATK; when the Drone continuously attacks the same enemy, its damage will increase by 15% (up to 110% of ATK)",
  tags: ['DPS'],
  stats: { hp: 1480, atk: 331, def: 125, res: 20, block: 1, cost: 22, aspd: '1.3s', rdp: '70s' },
  range: {
    base: [[1,1,1],[2,1,1],[1,1,1]],
    e1: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: "Beacon's Wrath", desc: "When this unit's skill is active, Drones have a 10% chance to self-destruct when attacking (and then return to the Operator), dealing 300% of Goldenglow's ATK as Arts damage to enemies in a small area", elite: 'E1' },
    { name: 'Precise Redirection', desc: "Goldenglow and her Drones' attacks ignore 15 RES", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Scattering Sparks', icon: '/operators/goldenglow/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Drone +1, ATK +40% and ASPD +50. Releases Drones to attack enemies", spInit: 20, sp: 35, dur: '25s', rank: 'M3',
      note: 'The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs, or until the skill is over, then returns to the Operator.',
      levels: [
        { level: '1', desc: `Drone +1, ATK +20% and ASPD +20. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 10, sp: 45, dur: '25s' },
        { level: '2', desc: `Drone +1, ATK +22% and ASPD +23. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 10, sp: 45, dur: '25s' },
        { level: '3', desc: `Drone +1, ATK +24% and ASPD +26. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 10, sp: 45, dur: '25s' },
        { level: '4', desc: `Drone +1, ATK +26% and ASPD +29. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 15, sp: 40, dur: '25s' },
        { level: '5', desc: `Drone +1, ATK +28% and ASPD +32. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 15, sp: 40, dur: '25s' },
        { level: '6', desc: `Drone +1, ATK +30% and ASPD +35. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 15, sp: 40, dur: '25s' },
        { level: '7', desc: `Drone +1, ATK +32% and ASPD +38. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 15, sp: 35, dur: '25s' },
        { level: 'M1', desc: `Drone +1, ATK +34% and ASPD +42. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 20, sp: 35, dur: '25s' },
        { level: 'M2', desc: `Drone +1, ATK +36% and ASPD +46. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 20, sp: 35, dur: '25s' },
        { level: 'M3', desc: `Drone +1, ATK +40% and ASPD +50. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 20, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Surging Current', icon: '/operators/goldenglow/skill-2.png', activation: 'Passive', recovery: 'Auto Recovery',
      desc: 'Drone +1, ATK +60% and Attack Range expands. Releases Drones to attack enemies', spInit: 0, sp: 70, rank: 'M3',
      note: 'The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs, or until the skill is over, then returns to the Operator.',
      levels: [
        { level: '1', desc: `Drone +1, ATK +20% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 80, dur: '∞' },
        { level: '2', desc: `Drone +1, ATK +24% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 80, dur: '∞' },
        { level: '3', desc: `Drone +1, ATK +28% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 80, dur: '∞' },
        { level: '4', desc: `Drone +1, ATK +32% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 75, dur: '∞' },
        { level: '5', desc: `Drone +1, ATK +36% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 75, dur: '∞' },
        { level: '6', desc: `Drone +1, ATK +40% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 75, dur: '∞' },
        { level: '7', desc: `Drone +1, ATK +45% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 70, dur: '∞' },
        { level: 'M1', desc: `Drone +1, ATK +50% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 70, dur: '∞' },
        { level: 'M2', desc: `Drone +1, ATK +55% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 70, dur: '∞' },
        { level: 'M3', desc: `Drone +1, ATK +60% and Attack Range expands. Releases Drones to attack enemies
The Drone locks onto an enemy until the enemy is defeated or the Drone self-destructs, then returns to the Operator
Unlimited duration`, spInit: 0, sp: 70, dur: '∞' },
      ],
    },
    {
      name: 'Crystalline Shine', icon: '/operators/goldenglow/skill-3.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Stops attacking; Drone +2, ATK +80% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds", spInit: 17, sp: 35, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: `Stops attacking; Drone +2, ATK +25% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 5, sp: 50, dur: '30s' },
        { level: '2', desc: `Stops attacking; Drone +2, ATK +30% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 5, sp: 50, dur: '30s' },
        { level: '3', desc: `Stops attacking; Drone +2, ATK +35% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 5, sp: 50, dur: '30s' },
        { level: '4', desc: `Stops attacking; Drone +2, ATK +40% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 10, sp: 45, dur: '30s' },
        { level: '5', desc: `Stops attacking; Drone +2, ATK +45% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 10, sp: 45, dur: '30s' },
        { level: '6', desc: `Stops attacking; Drone +2, ATK +50% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 10, sp: 45, dur: '30s' },
        { level: '7', desc: `Stops attacking; Drone +2, ATK +55% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 15, sp: 40, dur: '30s' },
        { level: 'M1', desc: `Stops attacking; Drone +2, ATK +60% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 15, sp: 35, dur: '30s' },
        { level: 'M2', desc: `Stops attacking; Drone +2, ATK +70% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 17, sp: 35, dur: '30s' },
        { level: 'M3', desc: `Stops attacking; Drone +2, ATK +80% and Attack Range becomes global. Releases Drones to attack enemies and the Drones' attacks Slow the target for 0.5 seconds
The Drone locks onto an enemy until the enemy is defeated, the Drone self-destructs or until the skill is over, then returns to the Operator`, spInit: 17, sp: 35, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Goldenglow's Badge", desc: 'Appointed as Caster Operator to exercise Mech-Accord Caster responsibilities' },
    funx: { code: 'FUN-X', name: 'Industrious Wings', stages: [
      { stage: 1, hp: '+90', atk: '+22', effect: "New trait: Drone deals more damage when it attacks the same enemy again (base damage increased, deals up to 110% of Operator's ATK as damage)" },
      { stage: 2, hp: '+110', atk: '+32', effect: "Beacon's Wrath improved: Drones have a 10% chance to self-destruct when attacking, dealing 340% of Goldenglow's ATK as Arts damage to enemies in a small area" },
      { stage: 3, hp: '+125', atk: '+38', effect: "Beacon's Wrath improved: Drones have a 10% chance to self-destruct when attacking, dealing 360% of Goldenglow's ATK as Arts damage to enemies in a small area" },
    ]},
    funy: { code: 'FUN-Y', name: 'Dream Must Come True', stages: [
      { stage: 1, atk: '+30', aspd: '+5', effect: "Drone deals more damage when it attacks the same enemy again (deals up to 120% of Operator's ATK as damage)" },
      { stage: 2, atk: '+40', aspd: '+6', effect: "Precise Redirection improved: Self and Drones' attacks ignore 18 RES" },
      { stage: 3, atk: '+45', aspd: '+7', effect: "Precise Redirection improved: Self and Drones' attacks ignore 20 RES" },
    ]},
  },
  story: `Operator Goldenglow, real name Susie Glitter, was born in northern Victoria on the edge of the town of Boschendal. She was raised in poverty among many siblings, being the Glitters' sixth child. Possessing high Originium Arts assimilation, she was once referred to a local Caster institute for further studies, but was unable to complete them due to household economic factors. After her father's passing, she fell into Messenger work, but was accidentally infected on the job and became a sufferer of Oripathy. So as not to add to her family's economic burden, she traveled south from place to place, towards the city of Caladon. There she found employment and took up residence, coming into incidental contact with multiple Rhodes Island operators.\n\nAfter foiling a Caladon city councilor's plot, she was jointly recommended by Operators Quercus, Grani and Bitter Root. Upon passing the tests, she was taken in as a Rhodes Island Logistics Operator. Her main vocation is as a hairdresser, responsible for providing the Rhodes Island landship's operators and visitors with hairstyling services. At the same time, and at her own suggestion, a reserve Caster Operator course has been prepared for her to further explore, control, and stabilize her Originium Arts potential.`,
  profile: 'A hairdresser turned reserve Caster Operator, recommended to Rhodes Island after the events in Caladon. Cheerful and diligent, she is still learning to rein in the volatile static discharge caused by her own Originium Arts.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 4%\nNo crystals apparent on the skin for now, but got electrocuted plenty of times while conducting physical examination.\n\n[Blood Originium-Crystal Density] 0.27u/L\nNot too severe, condition can be stabilized just fine with the right treatment.\n\n"The static from Goldenglow's been getting stronger as of late. To any operator giving her treatment or a checkup, don't forget to do your antistatic prep!" –Hibiscus, arms numb` },
    { title: 'Archive File 2', content: `Goldenglow's Originium Arts showed signs of instability from a very early stage. After both infection with Oripathy and violent stimulation by a string of incidents in Caladon City, her Originium Arts began to fall out of control, expressed through continual and involuntary electrical discharge. In response to the nature of her Arts dysfunction, the workshop upgraded her staff to negate the negative effects of a static charge. Paired with a number of minor everyday measures, its basic impact on life was minimized. However, she won't be holding her staff 24/7, and the little tips are bound to fail at times–not to mention her intermittent desire to use static for small pranks on her friends. As such...\nAddressing the root issue calls for starting from the beginning: systematically learning the relevant theory on Arts usage. Currently, Goldenglow attends a classroom with a group of reserve Casters and children aboard the Island, reviewing, learning, and revising. For her, it's both strange and refreshing, and she's willing to commit to it. On top of which, she wholeheartedly looks forward to her achievements to come.\nHer life is full of hope.` },
    { title: 'Archive File 3', content: `With stability returning to her life, Goldenglow once again began saving up. This time, she wasn't looking to buy property, but to give her mother a surprise. In the past, life was full of hardships, but at present, she found herself able to contribute to the family finances. Her mother's reply came very quickly after she mailed her first payment. Aside from the standard greetings and expounding on the household's latest developments, there was (between the lines) a repeatedly emphasized concern. She was scared that her daughter, out on her own and Infected to boot, might be up to something dangerous. Especially given that she'd suddenly acquired a respectable sum of money. To lift her mother's worries, and considering Rhodes Island just so happened to be near Victoria's northern border when she sent her second remittance, she wrote a letter asking to either drop in back home, or, if her mother was just too worried, she could bring her brothers and sisters along to Rhodes Island, and the money this time would be their travel expenses, paid by Goldenglow herself. Thus, some weeks later, Rhodes Island had a group of Feline visitors aboard.\nGoldenglow met her family once again. And standing right at the front: an exhausted, fretful, and resolutely determined Feline woman.\nHer dear mother.` },
    { title: 'Archive File 4', content: `It's always moving when a mother and daughter reunite, and family reunions even more so. After Goldenglow inadvertently gave her mother a shock, yet was then embraced tightly, she lost the last of her self-control and fell to pieces, crying on the spot, not at all noticing that with the whole family all clumped together, they'd completely blocked an entire corridor of Rhodes Island.\nOn returning to the dormitories, she gave her mother a simple rundown of her situation at Rhodes Island, who remained skeptical of the organization. However, thanks to how they'd been treated so far and hearing it from her girl's own mouth, a weight finally fell from Mrs. Glitter's mind, and she immediately instructed her other children to bring out the local specialties they'd brought. Since Mrs. Glitter had eight children with her (not counting Goldenglow herself!), and each one had brought plenty of gifts for the journey, Goldenglow's dormitory was practically filled with a mountain of boxes.\nAs evening fell, the riot the family created finally wound down. Rhodes Island provided temporary dormitories for its visitors, and Goldenglow finally had time for a heart-to-heart with her mother.\nAfter her daughter's departure, Mrs. Glitter had found a higher-paying job, and as all her children gradually came of age, they'd properly begun to work and supplement the family income too. Though still far from well-off, the family finally had some money set aside, and could support their daughter's treatment costs. Before leaving, Mrs. Glitter contemplated bringing Goldenglow back home–after all, the two had a deep mother-daughter bond, and she wasn't going to see her daughter suffering out there. However, after taking in Rhodes Island's practical circumstances and hearing her daughter recount her experiences over the past few years, Mrs. Glitter decided to respect her daughter's wishes, and let her expand her horizons freely aboard Rhodes Island.\nAnd so, after obtaining her family's approval, Goldenglow officially decided on her own goals. She would work and study aboard Rhodes Island, and with that as the crux, imagine her future prospects with vast, wild abandon.\nThough this land remains grey, at least what Susie Glitter sees in this moment is a clear, sparkling future.` },
    { title: 'Promotion Record', content: `"I came up with the codename Goldenglow off the top of my head that day. I suppose you're wondering what her fair, pale looks have to do with a 'golden glow' though."\n"I thought about it carefully, and I think, it was probably the sight of Susie that evening, crackling all over. Left quite an impression on me."\n"It really was the first time I'd seen such... wrath."\n"A sort of unloading, a kind of hurt, a kind of sorrow."\n"It's lucky Rhodes Island could help her move on from all her past trials. It's about time we let her live a proper life now."\n"Su–erm. Goldenglow's very cheerful, and very easy to get along with. She's diligent in what she does, and lives life earnestly."\n"Though fate's always out to throw her into the fire–and it's tried several times–she's still by our sides, still the same darling, and that in itself explains plenty of questions."\n"The whole affair in Caladon left no small shadow lurking in her heart, and to this day you can stand by her side, and sense the aftermath of that state of mind, that burst of Arts."\n"In time, mark my words, she'll become a mighty Caster."\n"However, before Rhodes Island looks to foster her as a Caster, it's my own hope we make clear what her true wish is."\n"That's not something for Rhodes Island to decide for her. Even if she's unusually talented."\n–Extract from recording of Quercus's evaluation of Goldenglow` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/mech-accord-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/goldenglow/base.png', chibiSrc: '/operators/goldenglow/chibi.webm', illustrator: 'Namie' },
    { id: 'e2', label: 'Elite 2', src: '/operators/goldenglow/e2.png', chibiSrc: '/operators/goldenglow/chibi.webm', illustrator: 'Namie' },
    { id: 'skin1', label: 'Maiden For The Bright Night', src: '/operators/goldenglow/skin1.png', chibiSrc: '/operators/goldenglow/chibi-skin1.webm', illustrator: 'Namie' },
    { id: 'skin2', label: 'Summer Flowers FA394', src: '/operators/goldenglow/skin2.png', chibiSrc: '/operators/goldenglow/chibi-skin2.webm', illustrator: 'Namie' },
    { id: 'skin3', label: 'Party In The Garden', src: '/operators/goldenglow/skin3.png', chibiSrc: '/operators/goldenglow/chibi-skin3.webm', illustrator: 'Namie' },
  ],
  portrait: '/operators/goldenglow/portrait.png',
  portraitFocus: { y: 16.4, x: 49.7, zoom: 344 },
}

export default goldenglow
