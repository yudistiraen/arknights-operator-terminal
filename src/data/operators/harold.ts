import type { Operator } from '../../types'

const harold: Operator = {
  name: 'Harold', fileNo: 'VC27', class: 'Medic', branch: 'Wandering Medic', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Event Reward'],
  faction: 'Victoria', position: 'Ranged', race: 'Feline', gender: 'Male', birthplace: 'Victoria',
  birthday: 'September 21st', height: '190 cm', combatExp: '41 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: '一千',
  cv: { JP: 'Takumi Yamazaki', CN: 'Dong Shengzhang', EN: 'Greg Haiste', KR: 'Seok Seung-hoon' },
  trait: 'Restores the HP of allied units and recovers Elemental Injury by 50% of ATK (can recover Elemental Injury of unhurt allied units)',
  tags: ['Healing'],
  stats: { hp: 1378, atk: 376, def: 98, res: 10, block: 1, cost: 17, aspd: '2.85s', rdp: '80s' },
  range: {
    base: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
    e1: [[1,1,1,0],[1,1,1,1],[2,1,1,1],[1,1,1,1],[1,1,1,0]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Excellent' },
  talents: [{ name: 'I Am the Camp', desc: 'Targets within Attack Range that have taken more than 50% Elemental Injury take 15% less Elemental Injury', elite: 'E2' }],
  skills: [
    {
      name: 'Healing Up γ', icon: '/operators/harold/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +90%', spInit: 20, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +40%', spInit: 20, sp: 40, dur: '30s' },
        { level: '2', desc: 'ATK +45%', spInit: 20, sp: 40, dur: '30s' },
        { level: '3', desc: 'ATK +50%', spInit: 20, sp: 40, dur: '30s' },
        { level: '4', desc: 'ATK +55%', spInit: 20, sp: 35, dur: '30s' },
        { level: '5', desc: 'ATK +60%', spInit: 20, sp: 35, dur: '30s' },
        { level: '6', desc: 'ATK +65%', spInit: 20, sp: 35, dur: '30s' },
        { level: '7', desc: 'ATK +70%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M1', desc: 'ATK +75%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M2', desc: 'ATK +80%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M3', desc: 'ATK +90%', spInit: 20, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Triage', icon: '/operators/harold/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ASPD +100, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 250%', spInit: 18, sp: 30, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ASPD +40, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 120%', spInit: 10, sp: 40, dur: '25s' },
        { level: '2', desc: 'ASPD +45, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 130%', spInit: 10, sp: 40, dur: '25s' },
        { level: '3', desc: 'ASPD +50, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 140%', spInit: 10, sp: 40, dur: '25s' },
        { level: '4', desc: 'ASPD +55, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 160%', spInit: 13, sp: 37, dur: '25s' },
        { level: '5', desc: 'ASPD +60, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 180%', spInit: 13, sp: 37, dur: '25s' },
        { level: '6', desc: 'ASPD +70, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 190%', spInit: 13, sp: 37, dur: '25s' },
        { level: '7', desc: 'ASPD +80, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 200%', spInit: 15, sp: 35, dur: '25s' },
        { level: 'M1', desc: 'ASPD +90, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 220%', spInit: 15, sp: 34, dur: '25s' },
        { level: 'M2', desc: 'ASPD +90, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 230%', spInit: 15, sp: 32, dur: '25s' },
        { level: 'M3', desc: 'ASPD +100, prioritize healing the target that has taken the most Elemental Injury. When healing targets with more than 50% Elemental Injury, Elemental Injury healed is increased to 250%', spInit: 18, sp: 30, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Harold's Badge", desc: 'Appointed as Medic Operator to exercise Wandering Medic responsibilities' },
    wdmx: { code: 'WDM-X', name: 'Legs Care Kit', stages: [
      { stage: 1, hp: '+70', atk: '+20', effect: 'Trait improved: Restores the HP of allied units and recovers Elemental Injury by 60% of ATK (can recover Elemental Injury of unhurt allied units)' },
      { stage: 2, hp: '+80', atk: '+27', effect: 'I Am the Camp improved: Targets within Attack Range that have taken more than 50% Elemental Injury take 20% less Elemental Injury' },
      { stage: 3, hp: '+90', atk: '+32', effect: 'I Am the Camp improved: Targets within Attack Range that have taken more than 50% Elemental Injury take 23% less Elemental Injury' },
    ]},
  },
  story: `Harold, the Viscount of Craigavon is the current head of House Craigavon, a subordinate house to House Caster which the Duke of Caster belongs to. Enlisted to the Victorian Army in the 1050s, Harold is a veteran of the Battle of the Four Emperors and participated in conflicts against Gaulish Empire remnants in House Caster's name until he lost his right leg after stepping on a landmine, which has since replaced by a prosthetic leg. While recovering in a field hospital filled with wounded soldiers, Harold came to realize that war is a painful and exhausting endeavor, leading to him studying medicine and became a military surgeon so he could care for his fellow soldiers.\n\nAfter his retirement from the Victorian Army, Harold was bequeathed his title and the lordship of County Barre, with many of his wartime comrades becoming part of his personal retinue. Compared to many of the other Victorian nobles who craved only wealth and power, Harold's experience in war taught him to be a more humble and venerable man, in addition to being a caring husband to his wife, and father to his daughter Olivia.`,
  profile: `A Victorian viscount belonging to a branch of House Caster. His house holds territory in the northern parts of Victoria and is known for their martial prowess. A veteran soldier, having led troops against the remnants of Gaul and answered the Duke of Caster's call to war, he is also an experienced field medic.\nHarold joined Rhodes Island of his own volition following the disclosure of the above information. At his own request, he currently serves as a medic in various operations.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Harold shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Harold rarely comes into contact with Originium.`,
    },
    {
      title: 'Archive File 1',
      content: `Regardless of what impression Harold's background left on Rhodes Island leadership, his arrival certainly left an impression on many operators.\nThe sight of a well-dressed Victorian noble who had just elegantly introduced himself in impeccable King's Victorian bringing out a burdenbeast foal and introducing it with a completely different level of passion is bound to leave an indelible mark on the memory.\nThe first thing he did after that was request a burdenbeast pen. While there was some befuddlement over him claiming to be a veterinarian, it soon became clear that he was serious about being a vet here, given how much time he spends in the pen and the number of veterinary and ecology-related papers he has published in Rhodes Island's internal newsgroup.\nToday, his name is widely known amongst Rhodes Island's pet owners, who have seen their beloved pets become happier and healthier under Harold's care, and learned more about animals under his tutelage.\nNot everything has been smooth sailing for him at Rhodes Island, however.\nIt was a sunny afternoon, and Harold was explaining burdenbeast facts to operators visiting the pen.\nHe asked for a volunteer to demonstrate milking, and he got one: Siege, who happened to be at Rhodes Island that day.\nFor the first time since he arrived, Harold looked uncomfortable. Though he quickly recovered and began instructing her on milking, it was obvious to everyone that his movements were stiffer than usual.\nVery well, I admit it, I was startled at first. But then I realized I was just an old man who came here to get his men's illnesses treated and enjoy some peace and quiet. What Her Royal Highness gets up to and where is none of my business, is it? Oh, Her Royal Hi—I mean, Siege said she was interested in the habits of burdenbeasts. I should get the materials together now. Ta-ta!`,
    },
    {
      title: 'Archive File 2',
      content: `[Operation Log]\nMay 23\nDoctor told me that Harold's family asked us to keep a close eye on his sleep and diet, and especially to limit his alcohol intake. I was therefore asked to have a look at his room at night.\nI had said hi to him earlier in the evening, when I saw him heading into his room from the corridor, so I thought he'd gone to bed when I saw a bump under the blanket, only to realize that it was a pillow and that he had snuck out.\nI frantically searched everywhere, only to find him in the cafeteria, where he was drinking with the soldiers he brought with him to Rhodes Island. I was fuming, of course, but he didn't seem the slightest bit agitated when he saw me, instead calling me over.\nThey explained that one of the soldiers had been having nightmares of the war. Harold told me that he put the pillow there so I wouldn't worry. They'd gotten up in the middle of the night to comfort their comrade by having a drink with him.\nI sat down with them and listened to their war stories, and how their comrade came down with his condition. It was moving.\nHarold said they didn't drink because they wanted to; they drank to drown their sorrows. I can't help but feel sorry for them. Maybe I can talk to the Doctor, see if we can relax things a little...\nCome to the control room and check out the security footage, when you can. They were very much enjoying themselves until they noticed you, at which point they exchanged a look and put on that pity play. Then they started partying again as soon as you left.\nCan't have been the first time they put on that act either, given how smooth the whole thing was. No wonder the Doctor gave me a heads-up.\n– Closure\n[Operation Log]\nMay 24\nThanks for the heads-up, Closure! I won't be fooled again.\nNothing happened today.\nYou might've fooled me too, if there weren't a few more hidden cameras Harold didn't know about.\nYou got so touched by their stories that you ended up drinking with them all night!\nWe need a different person on this job, Doctor. The kids don't stand a chance against these old slicksters.\n– Closure`,
    },
    {
      title: 'Archive File 3',
      content: `"General, I heard you plan to assault the pass from the front. May I offer my opinion?"\n"You're that medic they were talking about? Are you questioning my strategy?"\n"No, of course not, just making a few observations. See, this is the lay of the land, with one pass through the middle, and three tiny trails providing access from the side.\nIf I were the enemy, and I was facing a commander known for her frontal assaults, I would strengthen my defense down the middle, while sending people down the trails to flank the enemy."\n"Makes sense. Are you suggesting I split the squad and send people to attack down the trails?"\n"No, no, only third-rate tacticians think that variety is the ultimate goal of tactics. But only the most cunning can fool everyone, because you can't help but leave traces of their own work."\n"I don't get it."\n"It's simple. Would you be willing to split your squad if I suggested it?"\n"No, that would be boring."\n"Exactly. I just wanted to remind you of the potential risks. As a leader, you should be aware of all the dangers you face, and face them together with those by your side."\n"How should I continue the assault from the front, then?"\n"It's simple. Have some people lie in wait atop the cliffs, and throw down roadblocks from above when the enemy comes around to attack you from behind. That would both cut them off from their main force and protect your rear.\nNaturally, your retreat will be cut off too, but the fact that the enemy has split their troops simply makes them more vulnerable to a frontal assault by your main force. Victory is yours as long as you can defeat them before their troops can return to reinforce."\n"Sounds like a great idea! Let's go with that. I thought you were just a doctor, Harold. Where did you learn all this?"\n"To tell the truth, I've led troops into battle before, but I found medicine to be far more interesting."\n"That so? Well, I love battles, and so do the other kids."\n"I would love war too, if all wars were as adorable. In any case, good luck, General Myrtle."\nWhy is Harold getting along so well with Myrtle and her group of wargaming children?`,
    },
    {
      title: 'Archive File 4',
      content: `Oh, it's my turn?\nWhat were we talking about again?\nAh, yes, each of us tells a story about ourselves. Spare me the look of anticipation, please. They say I've seen a lot, but it's nothing compared to what you've seen.\nWait, what's that vintage you just took out? Alright, very well, here's one I save for special occasions.\nWhen I was young, I didn't have the slightest doubt about my duty. I believed I was fighting for Victoria, for the greater good, until I lost my leg.\nThere's really nothing remarkable about the story. I stepped on a mine, lost a leg, spent a few months in bed, then went back to the frontlines after getting a prosthetic limb. It's a rare soldier who isn't missing a piece here or there, but I rarely tell people what I was thinking at the time.\nWhile I was lying in the doctor's tent like a mannikin, I saw for the first time my comrades being brought in, moaning in pain. Some of them recovered, others were taken away still moaning in pain, and yet others ended up with a white cloth draped over their face.\nFor the first time, I realized that when you stripped away the glamorous exterior of glory, all that's left is the pained cries of the soldiers, and hands dropping weakly off the sides of beds.\nThat was when I started to feel exhausted by war.\n...We've come this far, Doctor. Let me say a little more.\nI still remember the puzzled gazes upon me when I stepped into the world of high society for the first time. They were sharper than any sword and threatened to impale me, but I took it on the chin and kept walking.\nTo give your life for your country is an honor, but it should be by choice. No one was born to be sent to their death.\nThe reason I'm still working so hard at this age is to find a place for the poor bastards who've stuck it out with me all these years with so little to show for it, and to set my own mind at ease.\nNow, don't give me that look, I'm thankful that Rhodes Island is willing to accept a bunch of old invalids like us, with all the limbs we don't have. Besides, your burden's hardly any lighter than mine. Who's pitying who here?\nAs someone who's been there, though, the only advice I can give you is this: There's no greater happiness than being able to eat, drink, walk, and sleep. To have a few true friends, and a couple stiff drinks.\nA toast to your health, that we may see the sun rise again tomorrow.`,
    },
    {
      title: 'Promotion Record',
      content: `Come now, Doctor, it's not as if we only met yesterday. Do you truly believe that I'm a noble at heart? Just the thought of it is more chilling than a bottle of the stiff stuff straight out of the fridge.\nThese cans and bottles? Well, you know, you need the right perfumes and mouthwash for when you've drunk so much that you don't dare go home and face your wife's wrath. And you need the right cosmetics for when you're down with a hangover, but have a banquet to get to that you can't miss.\nI learned this from the other nobles, of course. It's only when I became part of high society that I realized that being dressed in the finest livery doesn't make you any nobler than my foul-mouthed men.\nCome, have a seat, and let me tell you what these are for. First, this bottle of perfume. Oh, I remember how it practically saved my life from my wife...`,
    },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/wandering-medic-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/harold/base.png', chibiSrc: '/operators/harold/chibi.webm', illustrator: '一千' },
    { id: 'e2', label: 'Elite 2', src: '/operators/harold/e2.png', chibiSrc: '/operators/harold/chibi.webm', illustrator: '一千' },
    { id: 'skin1', label: 'Inviting Snow', src: '/operators/harold/skin1.png', chibiSrc: '/operators/harold/chibi-skin1.webm', illustrator: '一千' },
  ],
  portrait: '/operators/harold/portrait.png',
  portraitFocus: { y: 2.2, x: 42.3, zoom: 414 },
}

export default harold
