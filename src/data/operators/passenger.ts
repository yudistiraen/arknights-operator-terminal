import type { Operator } from '../../types'
import passengerVoice from '../voices/passenger'

const passenger: Operator = {
  name: 'Passenger', fileNo: 'SG07', class: 'Caster', branch: 'Chain', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Sargon', position: 'Ranged', race: 'Liberi', gender: 'Male', birthplace: 'Columbia',
  birthday: 'September 1st', height: '187 cm', combatExp: '16 years', infectionStatus: 'Originium crystals distributed across surface of body, confirmed Infected by medical examination.', illustrator: 'Skade',
  cv: { JP: 'Takahiro Sakurai', CN: 'Zhang Fuzheng', EN: 'Stephen Spencer', KR: 'Yoon Dong-gi' },
  voice: passengerVoice,
  trait: 'Attacks deal Arts damage and jump between 3 enemies. Each jump deals 15% less damage and inflicts a brief Slow',
  tags: ['DPS'],
  stats: { hp: 1558, atk: 689, def: 130, res: 20, block: 1, cost: 33, aspd: '2.3s', rdp: '70s' },
  range: {
    base: [
      [1,1,1],
      [2,1,1],
      [1,1,1],
    ],
    e1: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
    e2: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Mechanism Analysis', desc: 'When attacking enemies with 80% or more HP, Passenger will deal 20% increased damage to them for 3 seconds', elite: 'E1' },
    { name: 'Lone Soldier', desc: 'When there are no enemies in the surrounding 4 tiles, ATK +8%', elite: 'E2' },
  ],
  skills: [
    {
      name: "Touch of Static", icon: '/operators/passenger/skill-1.png', activation: 'Auto', recovery: 'Auto',
      desc: "Increases the ATK of the next attack to 250%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 5, rank: 'M3',
      levels: [
        { level: '1', desc: "Increases the ATK of the next attack to 150%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 7 },
        { level: '2', desc: "Increases the ATK of the next attack to 160%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 7 },
        { level: '3', desc: "Increases the ATK of the next attack to 170%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 7 },
        { level: '4', desc: "Increases the ATK of the next attack to 180%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 6 },
        { level: '5', desc: "Increases the ATK of the next attack to 190%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 6 },
        { level: '6', desc: "Increases the ATK of the next attack to 200%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 6 },
        { level: '7', desc: "Increases the ATK of the next attack to 210%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 6 },
        { level: 'M1', desc: "Increases the ATK of the next attack to 220%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 6 },
        { level: 'M2', desc: "Increases the ATK of the next attack to 230%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 6 },
        { level: 'M3', desc: "Increases the ATK of the next attack to 250%; The attack will jump between at most 4 enemies and the duration of the Slow is increased to 1.5 seconds", spInit: 0, sp: 5 },
      ],
    },
    {
      name: "Focus Command", icon: '/operators/passenger/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: "Attack Range +1 tile, ATK +30%, Attack Interval decreases moderately. Increase the maximum number of jumps to 5", spInit: 20, sp: 40, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: "Attack Range +1 tile, ATK +10%, Attack Interval decreases slightly. Increase the maximum number of jumps to 5", spInit: 10, sp: 50, dur: '25s' },
        { level: '2', desc: "Attack Range +1 tile, ATK +10%, Attack Interval decreases slightly. Increase the maximum number of jumps to 5", spInit: 11, sp: 49, dur: '26s' },
        { level: '3', desc: "Attack Range +1 tile, ATK +10%, Attack Interval decreases slightly. Increase the maximum number of jumps to 5", spInit: 12, sp: 48, dur: '27s' },
        { level: '4', desc: "Attack Range +1 tile, ATK +15%, Attack Interval decreases a little. Increase the maximum number of jumps to 5", spInit: 13, sp: 47, dur: '28s' },
        { level: '5', desc: "Attack Range +1 tile, ATK +15%, Attack Interval decreases a little. Increase the maximum number of jumps to 5", spInit: 14, sp: 46, dur: '29s' },
        { level: '6', desc: "Attack Range +1 tile, ATK +15%, Attack Interval decreases a little. Increase the maximum number of jumps to 5", spInit: 15, sp: 45, dur: '30s' },
        { level: '7', desc: "Attack Range +1 tile, ATK +20%, Attack Interval decreases. Increase the maximum number of jumps to 5", spInit: 16, sp: 44, dur: '31s' },
        { level: 'M1', desc: "Attack Range +1 tile, ATK +25%, Attack Interval decreases. Increase the maximum number of jumps to 5", spInit: 17, sp: 43, dur: '32s' },
        { level: 'M2', desc: "Attack Range +1 tile, ATK +30%, Attack Interval decreases. Increase the maximum number of jumps to 5", spInit: 18, sp: 42, dur: '33s' },
        { level: 'M3', desc: "Attack Range +1 tile, ATK +30%, Attack Interval decreases moderately. Increase the maximum number of jumps to 5", spInit: 20, sp: 40, dur: '35s' },
      ],
    },
    {
      name: "Glorious Shards", icon: '/operators/passenger/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 150% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 30, rank: 'M3', range: [[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,1,0],[1,1,1,2,1,1,1],[0,1,1,1,1,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]],
      levels: [
        { level: '1', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 100% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 35 },
        { level: '2', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 105% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 35 },
        { level: '3', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 110% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 35 },
        { level: '4', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 115% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 35 },
        { level: '5', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 120% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 35 },
        { level: '6', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 125% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 35 },
        { level: '7', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 130% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 34 },
        { level: 'M1', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 135% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 33 },
        { level: 'M2', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 140% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 32 },
        { level: 'M3', desc: "Immediately generates a lightning storm centered on the target with the highest HP within a wide range, lasting for 4 seconds; Deals an additional attack equal to 150% ATK to a random enemy within the lightning storm every 0.5 seconds; Can store 2 charges", spInit: 0, sp: 30 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Passenger's Badge", desc: 'Appointed as Caster Operator during field operations to exercise Chain Caster responsibilities' },
    chax: { code: 'CHA-X', name: 'Electromagnetic Regulator', stages: [
      { stage: 1, atk: '+65', aspd: '+5', effect: 'New trait: Attacks jump between 4 enemies, and each jump deals only 10% less damage' },
      { stage: 2, atk: '+80', aspd: '+5', effect: 'Lone Soldier improved: When there are no enemies in the surrounding 4 tiles, ATK +8% and own SP recovery rate +0.15/second' },
      { stage: 3, atk: '+90', aspd: '+5', effect: 'Lone Soldier improved: When there are no enemies in the surrounding 4 tiles, ATK +8% and own SP recovery rate +0.25/second' },
    ]},
    chay: { code: 'CHA-Y', name: 'Gold of Crowns', stages: [
      { stage: 1, hp: '+20', atk: '+70', effect: "New trait: Each jump no longer deals reduced damage, and the Slow duration is shortened" },
      { stage: 2, hp: '+40', atk: '+85', effect: 'Mechanism Analysis improved: When attacking enemies with 80% or more HP, Passenger will deal 25% increased damage to them for 4 seconds' },
      { stage: 3, hp: '+60', atk: '+100', effect: 'Mechanism Analysis improved: When attacking enemies with 70% or more HP, Passenger will deal 28% increased damage to them for 4 seconds' },
    ]},
  },
  story: "A young prodigy in Originium-related science and the student of Professor Thorne, the Columbian Liberi named Elliot Glover suddenly went off the grid while participating in a scientific project in the Ibut Region of Sargon together with the \"Sand Soldiers\" of Blaine Formative. After being saved by Kal'tsit during a bloody raid from the Padishah's forces, the two journeyed around the oasis villages until he decided to stay with an ancient soothsayer. To stop his enemies from searching for the blueprint of an ancient mass destruction weapon, Elliot purposefully became an Infected by destroying its component.\n\nAfter the two's separation twenty-two years ago, the young man had become a Sargonian black market leader who was involved in technology-related trade. He also took the opportunity to get revenge for his dead professor by killing the lord ameer of Ibut. Trying to run away from the lord's forces, he contacted Rhodes Island not only to treat his lifelong Oripathy but also to meet the person who once saved him. Since then, Elliot has been working as both an R.I. Engineering Department staff and a combatant utilizing his mastery of Originium-based technology to defeat his foes. He takes the codename of \"Passenger,\" symbolizing a nameless traveler hailing from a distant, unsettled past across Sargon's golden sands.",
  profile: "Operator Passenger was born in Columbia. He graduated at age thirteen with exceptional marks, at which point he was recruited by Professor Thorne to work as a research assistant in his study of applied Originium engineering and began a course of study at the Blaine Formative Technologies Research Institute. A project took him to Sargon nearly twenty years ago, at which point he disappeared. Eventually, he came into contact with Rhodes Island, operating around the black market in the Ibut region. He arrived as an Infected seeking treatment, and has since been brought into active service as an operator for the Engineering Department.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n[Cell-Originium Assimilation] 7%\nThe operator's forehead shows some crystal distribution. The actual infection may be more severe than expected due to the location of the Originium crystals.\n[Blood Originium-Crystal Density] 0.29u/L\nOperator Passenger spent considerable time in a harsh environment working with Originium machinery without proper safety or infection response measures. The outlook of his disease is not optimistic.\nA thorough examination revealed no clear complications, but we're not out of the woods yet. That formation on the operator's forehead leaves me worried that Passenger's condition could suddenly and rapidly deteriorate at some point. I hope he'll actively cooperate with our course of treatment to prevent the worst from happening. —Medic Operator"
    },
    {
      "title": "Archive File 1",
      "content": "The Engineering Department reverse-engineered the various self-propelled machines Passenger brought with him, to eye-opening results.\nFor several reasons, Passenger was unable to get the cutting-edge Columbian lab materials he needed in Sargon, so his Arts Unit is extremely primitive. Even so, he was still able to independently develop an effective mechanical device, realizing a variety of self-propelled weapons with impressive energy output.\nWhen asked about his technology, Passenger does not shy away from the topic. It is a prototype from some experimental excavation in Columbia, which researchers believe has to do with ancient Sarkaz witchcraft. They appear to have used a rare form of Arts to enrich Originium, with several enriched crystals marking the perimeter. A Columbian institute involved in the project anticipated a breakthrough to a whole new energy source and went to work quickly. Passenger did not reveal what happened next.\nBut it is worth noting that many engineering operators like to give names and other personifying features to their creations, while others distinguish them with numerical designations. But this operator does not so treat his machinery. His usage borders on the wasteful, scrapping them without hesitation after a single test. Does he have no heart?"
    },
    {
      "title": "Archive File 2",
      "content": "Operator Passenger's performance at Rhodes Island has been more than satisfactory.\nNaturally, this is a good thing! Some operators are known to make trouble!\nBut Passenger's history as the \"Sand Soldier\" of Sargon, while seemingly only the leader of a little black market operation, of which there are many in Sargon, has proven quite valuable. He has the skills, as well as the wealth, and brought with him a stable source of supplies and mercenary, Messenger, and caravan contacts, legal and otherwise, in the Ibut region.\nThis too, is good. But he's provided this all essentially free of charge! Free! Do you know what that means? It's unsettling!\nThe engineering operators say he's nothing near a ferociously dedicated machinist, even with incredible technical skill... Not only that, but he has little interest in the plight of the Infected. His room is suspiciously immaculate, neat to the point that he may have some pathology. Likewise, he has a tendency to tinker with parts of the room, scattering metal shavings across the floor. Baffling.\nBy the way, the only device he ever named was a special energy charging device he calls \"Thorne.\"\nOh, I'm babbling on again, forgive me for this potentially rude question...\nWhat is it this man cares for? What does he live for?"
    },
    {
      "title": "Archive File 3",
      "content": "Passenger.\nIt's almost a parody of a name one might give oneself. But the truth is it, he does not know where he is going, he is just along for the ride.\nHe has openly admitted his involvement in several horrific murders in Sargon, having spent twenty years there on a quest for revenge.\nGranted, revenge is not a particularly rare motivation. But this Elliot, a young research assistant of Columbian origin, spent decades transforming himself into a man of Sargon. He has cultivated contacts, wealth, and power in the Ibut region. His unique black market brought local nobles and foreign businessmen alike into his orbit. And after getting his revenge, all that he built over twenty years, he simply discarded.\nA black marketeer, starting as a lowly assistant, rose to prominence, and gave it all up in an instant. He could have lived like the Lord Ameer of Ibut after getting his revenge. This has some in HR worried about Elliot's intentions after changing his name and coming to Rhodes Island.\nWhen pressed on this point, Elliot, Operator Passenger himself, shot a hole through our doubts. He stared at the black coffee in his hand for a moment before giving his answer:\n\"I hate Sargon. I hate the sand. I hate everything about it. And I always have.\""
    },
    {
      "title": "Archive File 4",
      "content": "Doctor, Kal'tsit, Sesa.\nSince his arrival at Rhodes Island, only these three individuals seem to have caught his attention.\nAdmittedly, he is polite and meticulous in his work. But after meeting a target from the Engineering Department or returning victorious from a mission, there is no emotional change in his eyes at all.\nHe does not keep secrets, except for the most crucial ones. He describes his experiences and current situation clearly and concisely to anyone who asks, as if he has the speech memorized. Not everyone can face his past with such an attitude. After the fire that brought his revenge to completion, he felt relief, but what was to come next? Where does he go after leaving behind the golden sands of Sargon?\nPassenger once described Dr. Kal'tsit as his savior. Though I never saw a hint of gratitude in his trademark smile as he said it. He clearly trusts Dr. Kal'tsit on some level, and if Kal'tsit never said another word about how they met in Sargon, he would never share anything personal about her.\nAs for Sesa, Passenger is dangerously concerned with Sesa. Only a very few people, including the Doctor, know that Sesa is investigating a certain Columbian military contractor. Unfortunately, Sesa's \"incomplete revenge\" fits all the elements of Passenger's attention. He is even eager to help Sesa piece together the truth. If it were not for the limitations placed on Rhodes Island Operators, it is hard to imagine what Sesa and Passenger might be able to exact on that Columbian corporation.\nThe main reason why Passenger has not acted more rashly thus far is the Doctor. No matter what his feelings toward the Doctor may be, his primary interest seems to be in actions and accomplishments. He may feel some kinship with the Doctor over their unique life experiences, or he may find comfort in having a commander to give him orders and direction. Either way, we will watch this development carefully.\nAs he said, he left Columbia, he left Sargon, and now he is at Rhodes Island. Wherever he is in the world, he is but a passenger—an outsider, along for the ride."
    },
    {
      "title": "Promotion Record",
      "content": "I was only a stone's throw from death. Kal'tsit gave me this opportunity, Old Isin gave me this power. I had my revenge on those who tried to control my destiny. I won. I spent countless hours and exhausted countless prospects. I took back control by annihilating fate.\nNow, it is time for me to make my break with the past. But what do I do next? Where do I go?\nDoctor, I hope you can tell me, on Kal'tsit's behalf. How much time do I have left before Oripathy takes me? How can I use this time to make my death mean something?\nYou are my commander now.\nI am at your disposal."
    }
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/chain-branch.png', factionIcon: '/icons/factions/sargon.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/passenger/base.png', chibiSrc: '/operators/passenger/chibi.webm', chibiMoveSrc: '/operators/passenger/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.7, offsetYPercent: 2.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'e2', label: "Elite 2", src: '/operators/passenger/e2.png', chibiSrc: '/operators/passenger/chibi.webm', chibiMoveSrc: '/operators/passenger/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.7, offsetYPercent: 2.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'skin1', label: "Dream in a Moment", src: '/operators/passenger/skin1.png', chibiSrc: '/operators/passenger/chibi-skin1.webm', chibiMoveSrc: '/operators/passenger/chibi-move-skin1.webm', chibiFraming: { scale: 1.29, offsetXPercent: -0.1, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
  ],
  portrait: '/operators/passenger/portrait.png',
  portraitFocus: { y: 1.9, x: 63.9, zoom: 399 },
}

export default passenger
