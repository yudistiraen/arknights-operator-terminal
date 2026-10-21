import type { Operator } from '../../types'
import pineconeVoice from '../voices/pinecone'

const pinecone: Operator = {
  name: 'Pinecone', fileNo: 'CB09', class: 'Sniper', branch: 'Spreadshooter', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Columbia', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Columbia',
  birthday: 'March 12th', height: '148 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'TrNyteal',
  cv: { JP: 'Riho Tsuda', CN: 'Muyaruilin', EN: 'Molly Jenkins', KR: 'Bang Yeon-ji' },
  voice: pineconeVoice,
  trait: 'Attacks all enemies within range, and deals 150% damage to enemies in the row directly in front of this unit.',
  tags: ['AoE', 'DPS'],
  stats: { hp: 2200, atk: 667, def: 167, res: 0, block: 1, cost: 30, aspd: '2.3s', rdp: '70s' },
  range: {
    base: [[0,1,0],[2,1,1],[0,1,0]],
    e1: [[0,1,1],[2,1,1],[0,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Portable Energy Source', desc: 'Improves own SP recovery rate by +0.2/second for 60 seconds after deployment', elite: 'E1' },
    { name: 'Portable Energy Source', desc: 'Improves own SP recovery rate by +0.25 (+0.05)/second for 60 seconds after deployment', elite: 'E1 (Potential 5)' },
    { name: 'Portable Energy Source', desc: 'Improves own SP recovery rate by +0.45/second for 60 seconds after deployment', elite: 'E2' },
    { name: 'Portable Energy Source', desc: 'Improves own SP recovery rate by +0.5 (+0.05)/second for 60 seconds after deployment', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'RMA Spikes', icon: '/operators/pinecone/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Immediately launches an attack that deals 200% damage, ignoring 250 of the target's DEF\nCan store 3 charges", spInit: 0, sp: 9, rank: 'M3',
      levels: [
        { level: '1', desc: "Immediately launches an attack that deals 150% damage, ignoring 150 of the target's DEF\nCan store 1 charges", spInit: 0, sp: 12 },
        { level: '2', desc: "Immediately launches an attack that deals 155% damage, ignoring 160 of the target's DEF\nCan store 1 charges", spInit: 0, sp: 12 },
        { level: '3', desc: "Immediately launches an attack that deals 160% damage, ignoring 170 of the target's DEF\nCan store 1 charges", spInit: 0, sp: 12 },
        { level: '4', desc: "Immediately launches an attack that deals 165% damage, ignoring 180 of the target's DEF\nCan store 2 charges", spInit: 0, sp: 11 },
        { level: '5', desc: "Immediately launches an attack that deals 170% damage, ignoring 190 of the target's DEF\nCan store 2 charges", spInit: 0, sp: 11 },
        { level: '6', desc: "Immediately launches an attack that deals 175% damage, ignoring 200 of the target's DEF\nCan store 2 charges", spInit: 0, sp: 11 },
        { level: '7', desc: "Immediately launches an attack that deals 180% damage, ignoring 210 of the target's DEF\nCan store 3 charges", spInit: 0, sp: 10 },
        { level: 'M1', desc: "Immediately launches an attack that deals 185% damage, ignoring 220 of the target's DEF\nCan store 3 charges", spInit: 0, sp: 10 },
        { level: 'M2', desc: "Immediately launches an attack that deals 190% damage, ignoring 230 of the target's DEF\nCan store 3 charges", spInit: 0, sp: 10 },
        { level: 'M3', desc: "Immediately launches an attack that deals 200% damage, ignoring 250 of the target's DEF\nCan store 3 charges", spInit: 0, sp: 9 },
      ],
    },
    {
      name: 'Electrical Overcharge', icon: '/operators/pinecone/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'ATK +60%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s', rank: 'M3',
      note: 'The additional +20% ATK begins stacking from the second skill activation onward thus requiring 4 activations to reach max stacks.',
      levels: [
        { level: '1', desc: 'ATK +10%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: '2', desc: 'ATK +15%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: '3', desc: 'ATK +20%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: '4', desc: 'ATK +25%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: '5', desc: 'ATK +30%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: '6', desc: 'ATK +35%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: '7', desc: 'ATK +40%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: 'M1', desc: 'ATK +45%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: 'M2', desc: 'ATK +50%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
        { level: 'M3', desc: 'ATK +60%, Attack range decreases; Gains an additional +20% ATK each time this skill is used (Up to a max of 60%)', spInit: 0, sp: 30, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Pinecone's Badge", desc: 'Appointed as Sniper Operator to exercise Spreadshooter responsibilities' },
    rprx: { code: 'RPR-X', name: 'Mobile Powerbank', stages: [
      { stage: 1, atk: '+30', def: '+15', effect: 'Trait improved: Attacks all enemies within range, and deals 160% damage to enemies in the row directly in front of this unit.' },
      { stage: 2, atk: '+36', def: '+25', effect: 'Portable Energy Source improved: Improves own SP recovery rate by +0.5/second for 70 seconds after deployment' },
      { stage: 3, atk: '+40', def: '+30', effect: 'Portable Energy Source improved: Improves own SP recovery rate by +0.55/second for 75 seconds after deployment' },
    ]},
  },
  profile: `Pinecone is a former construction worker from Columbia. After she became involved in the Mansfield incident, she came to Rhodes Island to seek work alongside Mountain. Owing to her previous work experience, she is currently assigned to the Engineering Department as an assistant to some of our operators there.`,
  story: `A young Columbian Liberi construction worker hailing from a relatively peaceful background, Mina was an accomplice of Kafka in the Mansfield State Prison jailbreak who provided an escape route for her, Anthony Simon (Mountain) and Robin. Because she was looking for employment at the time, Mina decided to follow Anthony — whose family corporation, Simon Co., had helped her family in the past — as he took refuge in Rhodes Island. Currently, she is working as a construction specialist of R.I. and a field operative under the codename "Pinecone".`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Pinecone shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.14u/L\nIt is practically impossible for a Columbian workman to avoid coming in contact with Originium, and as testament to that fact, Operator Pinecone still keeps on her a few devices powered by Originium. Although there is hardly anything to complain about these devices' structures and applications, given how clumsy she is, it is advised that everyone at Engineering pay her some extra care.` },
    { title: 'Archive File 1', content: `Pinecone was born in an average Columbian laborer family. Like much of Columbia's laborers, her parents jumped on the Columbian exploration bandwagon. The wave they rode lasted far longer than anyone could have imagined, and the Columbians' desire to expand and the subsequent conquest continued day and night without cease. The laborers, made of flesh and blood, were simply not meant to keep up with these massive industrial machines—And so her parents chose to settle in a remote but quiet Columbian town, a place that was getting farther and farther away from the roars of the pioneers' machines by the day. This was where Pinecone was born one spring, and it was where she lived a brief but nonetheless happy childhood.` },
    { title: 'Archive File 2', content: `Pinecone accompanied Mountain when the latter came to Rhodes Island. According to Pinecone, she and her family are indebted to Mountain. Yet she didn't come to Rhodes Island because Mountain told her to or because she was seeking Rhodes Island's help for some sort of ulterior objective. She came here simply because she wanted reliable work.\nAlthough she may not look it given her cute appearance, as someone who was born in a family of laborers, Pinecone has a lot of tricks up her sleeve. She has a decent handle on a variety of crafts and chores, and ever since she became a Rhodes Island employee, she has been training under our Engineering operators. Under their tutelage, she has picked up everything almost at a lightning pace as though it's all in her blood.\nPinecone even managed to complete the training room's maintenance work in half the time it would take other Logistics operators, and when asked, she simply answered, "It all comes naturally to me... I guess? I'm not too sure myself... Anyway, I got it taken care of... I-Is there something wrong?"` },
    { title: 'Archive File 3', content: `Pinecone is a somewhat clumsy girl, and she oftentimes makes the rest of us wonder whether she is truly capable of handling all that exhausting and grimy work. Yet she always surprises the rest of us by finishing them unbelievably quickly with impeccable results. Although she knows almost nothing about more complex modern engineering techniques, she is very capable with simple repairs and maintenance work. Whenever there is no hot water at the showers or the fans have stopped working, you can count on her to take care of it all with feverish haste and a loud yawn. Because of her approachable personality, she rarely turns down any of the small requests she gets from other operators. That said, we would like certain operators to refrain from asking her to renovate the dormitories, as this requires prior authorization.\nPinecone seems to be rather content about her current living situation. At first, we were worried whether her close contact with our Infected operators would give her any undue mental stress, but according to Pinecone herself, back in her hometown, Infected explorers would come and go in droves month after month to participate in Columbia's Great Expansion. When she was asked what she thought of this "Great Expansion" herself, she gave a simple yet undeniably fascinating answer.\n"The city... is a glorious place."` },
    { title: 'Archive File 4', content: `A few years ago, a sudden, unexpected event shook Pinecone's family—Pinecone's father almost lost both his arms in a construction accident.\nIt isn't uncommon to find Columbian laborers wind up in disputes with the big corporations. The insurance industry, having been built atop these games of words and conspiracies, naturally had a way with words to weasel out of paying their benefits. Of course, it should come as no surprise that the insurance companies were unwilling to pay for a medical bill this expensive. And while all parties involved were still trying to pass the buck, the hospitals naturally refused to treat a workman who was unlikely to be able to pay for his treatment. The reason this tragedy occurred in the first place is that Pinecone's father had signed a contract that was manipulated, allowing the construction company to legally get away from paying him any compensation.\nWho could say a father who only ever wanted the best for his daughter and did everything to help her leave that small town was to blame? The contract he had to sign just to be hired as a construction worker was dozens of pages thick; it shouldn't be hard to tell where the problem actually lies.\nAll Pinecone could do was comfort her crying mother as her father signed his release forms, thus refusing any further treatment—Yet, out of nowhere, one of the material suppliers on the project sent them a substantial sum and footed the medical bill out of "humanitarian concerns." After that, the construction company's head honchos finally found the time to leave their offices and pay Pinecone's family a visit at the hospital, even promising to properly compensate her family. Naturally, Pinecone was bewildered by the company's sudden change in attitude after this secret benefactor came into the picture. She tried over and over to figure out who they were, but, after her constant probings, the construction company would only give her the name "Simon Co." "Simon" is a very common name in Columbia, and it took a very long time for Pinecone to find out who it was that helped her family.\nSimilarly, even though Mountain was certainly seething when the disgraceful labor dispute was brought up during a meeting, he didn't actually know whose family his subsequent tirade had saved.` },
    { title: 'Promotion Record', content: `[Classified Log]\nGiven Pinecone's age and upbringing, she shouldn't have been dragged into the whole Mansfield mess. I don't know if Kafka was throwing things at the wall to see what sticks or actually had something figured out. After all, my guess is that not even Kafka knew if Pinecone could actually have fulfilled her role in the plan.\nBut why did Pinecone say yes to Kafka's proposal? Would an innocent girl like her normally say yes when asked to apply to work in a prison and help a felon escape?\nThe answer is actually very simple.\nKafka figured out what it was when she was looking through the files, and immediately located Pinecone, who was at the time aimlessly looking for a job.\n"I've got a pretty nice job lined up for you... Well, there's a little more to it than that."\n"Remember how there was someone helped you out in that whole fiasco back then...?"\n"Now it's your turn to help him."` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/spreadshooter-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/pinecone/base.png', chibiSrc: '/operators/pinecone/chibi.webm', chibiMoveSrc: '/operators/pinecone/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 2.2, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TrNyteal' },
    { id: 'e2', label: 'Elite 2', src: '/operators/pinecone/e2.png', chibiSrc: '/operators/pinecone/chibi.webm', chibiMoveSrc: '/operators/pinecone/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 2.2, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TrNyteal' },
    { id: 'skin1', label: 'Sing a Song', src: '/operators/pinecone/skin1.png', chibiSrc: '/operators/pinecone/chibi-skin1.webm', chibiMoveSrc: '/operators/pinecone/chibi-move-skin1.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.2, offsetYPercent: 3.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TrNyteal' },
    { id: 'skin2', label: 'Season of Travel', src: '/operators/pinecone/skin2.png', chibiSrc: '/operators/pinecone/chibi-skin2.webm', chibiMoveSrc: '/operators/pinecone/chibi-move-skin2.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TrNyteal' },
  ],
  portrait: '/operators/pinecone/portrait.png',
  portraitFocus: { y: 3.1, x: 50.5, zoom: 298 },
}

export default pinecone
