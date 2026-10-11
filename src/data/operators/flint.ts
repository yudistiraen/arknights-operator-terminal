import type { Operator } from '../../types'

const flint: Operator = {
  name: 'Flint', fileNo: 'SG06', class: 'Guard', branch: 'Fighter', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Sargon', position: 'Melee', race: 'Liberi', gender: 'Female', birthplace: 'Sargon',
  birthday: 'September 17th', height: '144 cm', combatExp: '15 years (Self-reported)', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'aZLing4',
  cv: { JP: 'Hibiku Yamamura', CN: 'Hou Xiaofei (credited as "Fifi" in EN)', EN: 'Akira Lee Watanabe', KR: 'Kwak Gyu-mi' },
  trait: 'Blocks 1 enemy',
  tags: ['DPS'],
  stats: { hp: 2495, atk: 620, def: 334, res: 0, block: 1, cost: 10, aspd: '0.78s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Featherweight', desc: 'Deals 20% more damage to enemies that are not blocked by this unit', elite: 'E1' },
    { name: 'Featherweight', desc: 'Deals 25% (+5%) more damage to enemies that are not blocked by this unit', elite: 'E1 (Potential 5)' },
    { name: 'Featherweight', desc: 'Deals 40% more damage to enemies that are not blocked by this unit', elite: 'E2' },
    { name: 'Featherweight', desc: 'Deals 45% (+5%) more damage to enemies that are not blocked by this unit', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Relentless', icon: '/operators/flint/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'Increases the ATK of the next attack to 230%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: 'Increases the ATK of the next attack to 130%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: '2', desc: 'Increases the ATK of the next attack to 140%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: '3', desc: 'Increases the ATK of the next attack to 150%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: '4', desc: 'Increases the ATK of the next attack to 160%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: '5', desc: 'Increases the ATK of the next attack to 170%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: '6', desc: 'Increases the ATK of the next attack to 180%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: '7', desc: 'Increases the ATK of the next attack to 190%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Increases the ATK of the next attack to 200%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: 'M2', desc: 'Increases the ATK of the next attack to 210%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
        { level: 'M3', desc: 'Increases the ATK of the next attack to 230%, pushes the target towards the attack direction slightly and Slows the target for 1 second', spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Display of Might', icon: '/operators/flint/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Cannot block enemies, ATK +55%, ASPD +55. Each attack Slows the target for 0.3 seconds', spInit: 25, sp: 35, rank: 'M3', dur: '20s',
      levels: [
        { level: '1', desc: 'Cannot block enemies, ATK +10%, ASPD +10. Each attack Slows the target for 0.3 seconds', spInit: 20, sp: 35, dur: '20s' },
        { level: '2', desc: 'Cannot block enemies, ATK +15%, ASPD +15. Each attack Slows the target for 0.3 seconds', spInit: 20, sp: 35, dur: '20s' },
        { level: '3', desc: 'Cannot block enemies, ATK +20%, ASPD +20. Each attack Slows the target for 0.3 seconds', spInit: 20, sp: 35, dur: '20s' },
        { level: '4', desc: 'Cannot block enemies, ATK +25%, ASPD +25. Each attack Slows the target for 0.3 seconds', spInit: 20, sp: 35, dur: '20s' },
        { level: '5', desc: 'Cannot block enemies, ATK +30%, ASPD +30. Each attack Slows the target for 0.3 seconds', spInit: 20, sp: 35, dur: '20s' },
        { level: '6', desc: 'Cannot block enemies, ATK +35%, ASPD +35. Each attack Slows the target for 0.3 seconds', spInit: 20, sp: 35, dur: '20s' },
        { level: '7', desc: 'Cannot block enemies, ATK +40%, ASPD +40. Each attack Slows the target for 0.3 seconds', spInit: 21, sp: 35, dur: '20s' },
        { level: 'M1', desc: 'Cannot block enemies, ATK +45%, ASPD +45. Each attack Slows the target for 0.3 seconds', spInit: 22, sp: 35, dur: '20s' },
        { level: 'M2', desc: 'Cannot block enemies, ATK +50%, ASPD +50. Each attack Slows the target for 0.3 seconds', spInit: 23, sp: 35, dur: '20s' },
        { level: 'M3', desc: 'Cannot block enemies, ATK +55%, ASPD +55. Each attack Slows the target for 0.3 seconds', spInit: 25, sp: 35, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Flint's Badge", desc: 'Appointed as Guard Operator to exercise Fighter responsibilities' },
    fgty: { code: 'FGT-Y', name: 'Meaning of Flowers', stages: [
      { stage: 1, hp: '+150', atk: '+30', effect: 'New trait: Blocks 1 enemy; Gains +10 ASPD when above 50% HP' },
      { stage: 2, hp: '+170', atk: '+45', effect: 'Featherweight improved: Deals 45% more damage to enemies that are not blocked by this unit' },
      { stage: 3, hp: '+185', atk: '+55', effect: 'Featherweight improved: Deals 50% more damage to enemies that are not blocked by this unit' },
    ]},
  },
  story: `A Sargonian Liberi from the Flint tribe of Acahualla, Kemar is a fistfighter whose punches are swift and effective. Although she is one of the tallest among her tribe, her stature is still too short compared to other Liberi outside Acahualla. After being defeated by Blaze during Gavial's visit to her homeland, Kemar developed a strong respect for the Feline and joined Rhodes Island alongside Zumama and Tomimi to follow Blaze's footsteps, adopting her tribe's name as her codename.\n\nFlint has been quickly adapting to the new environment, overcoming the initial language barrier with other R.I. personnel, and has proven to be a skilled boxer interested in horticulture. She is hoping to one day become a Catastrophe Messenger to see more of Terra and fight worthy foes.`,
  profile: `Flint, Sargon tribal warrior, began building her combat experience from the moment she was first able to put up her fists. She has mastered a martial arts style based on swift and precise punches.\nShe is currently here on the recommendation of a certain elite operator whose identity has been withheld, and became a Rhodes Island Guard Operator after passing the examination.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Flint shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.05u/L\nOperator Flint rarely comes into contact with Originium. She might not even know what Originium is in the first place.\nWhat am I supposed to be looking for? She's the picture of health!\n– Gavial`,
    },
    {
      title: 'Archive File 1',
      content: `The one Blaze brought back with her went and picked another fight with an Operator in the training center today.\nTo preface, Rhodes Island has built up a healthy collection of operators, each different in their own ways, with no shortage of misfits among them. There have been plenty of times where a single flippant comment made someone throw down right in the corridor. Sorting out all those scuffles is a pain, but the fact that they happen in the first place doesn't really surprise anyone. Operator Flint's case, however, is somewhat distinct from this.\nWe've had a lot of operators who've "compared notes" on physical combat with Flint testify that actually, the fights that unfolded between them were with both sides' mutual discretion and consent. No bad blood at play, no clash that sparked a conflict. In most situations, this short girl stares straight at her target, walks over to them, opens her mouth, and lets loose some strange syllabic utterances. The two then recognize something implicit in the other's gaze, and then put up their dukes.\n"I didn't understand what she was saying. But there was no wickedness in her eyes."–The words of Operator Broca.`,
    },
    {
      title: 'Archive File 2',
      content: `Prior to arriving at Rhodes Island, Operator Flint was completely unable to speak several common languages. According to Flint, her own tongue is a sort of native Sargon dialect, and one that has freely flourished and evolved in a region with no oversight. This makes it confounding for anyone to try and parse. Thus, following her arrival at Rhodes Island, studying common languages has become an important part of her schedule in order to facilitate smooth communication in day-to-day life.\nThe common languages are not particularly difficult to learn, and a persuasive word from Gavial to Flint about taking daily language courses proved to be key.\n"What, don't you wanna be able to chat up Blaze?"\nThat was all it took. It worked better than anything anyone else had to say, and Flint began to study seriously.\n[Voice Log]\n"So what do we do until she learns? There's nobody else around who can make sense of her native dialect. Do we just wave our hands at her?"\n"Oh. Don't you worry about that."\n"What's not to worry about?! Missions! What do we do about missions? Okay, do we use body language to give her orders in the middle of the battlefield, too?"\n"Relax, relax. All accounted for when they put the squad together, don't you worry. See, the Doctor's already kinda sorta picked up a little bit of that weird Sargon blah-blah whatever it is!"`,
    },
    {
      title: 'Archive File 3',
      content: `Operator Flint is a Liberi who was raised in the rainforest. The tribe of Liberi she comes from is naturally of small stature, and it's apparent that their physical fitness compared to other Liberi falls slightly short. One need not even start comparing them to the wealth of combative, healthily robust races surrounding them. This is why Flint's tribe has always had a relatively tough time living in the rainforest. These challenges persisted up until Flint reached the age where she could run and jump, at which point she promptly picked and won a fight with two Archosauria who substantially outclassed her. She beat them on their own ground.\nFlint's fists are fast and tricky. Where she falls short in terms of naturally endowed strength, her race's superiority in speed makes up handily for the deficiency. Her fighting style differs from any boxer with a grounding in theory. She wields her fists to knock her opponent down, pure and simple, and they carry an almost illusory sense of the freedom and danger of the rainforest.\nAs the tallest and strongest warrior in her tribe, Flint was always quite confident of her own build, even proud of it, until she came into contact with other, much taller peoples. Once she came to the realization that most of the entire outside world's population was of much greater stature than her, Flint was quick to give up her arrogance born of ignorance, and she began seeking out new challenges. She went to find those stronger than herself, challenge them, harden and mold herself, improve herself, until she could beat them.\nDo not underestimate her for her size. No Sargon warrior ever feared a challenge.\n[Addendum by file author]\nI will refrain from putting her relationship with the taller operators into words. On the other hand, she gets along with our operators of Durin origin. No question about that.`,
    },
    {
      title: 'Archive File 4',
      content: `One might expect that in their reverence for might and strength, the Tiacauh would be impulsive and unruly. But we must admit their conduct is full of great fervor, candor and a masterful valor. Operator Flint is an archetypal example of this.\nAs Flint sees it, there is nothing that can't be settled with her fists some way or another. Back in Flint's old stomping grounds, you'd often catch a glimpse of Tiacauh people who'd been wrestling with each other just a moment ago, who'd stood themselves up straight, shook hands and made peace with each other the very next second. After that handshake, they might wrap their arms around each other's shoulders and go off to eat together. Though, generally, they'll get into another fight because of something else altogether before they can sit down.\nIn addition, the Liberi people to which Flint belongs have a love for flowers that far exceeds the norm. Their preference is especially for lushly colored specimens, which can be often found adorning their homes. Operator Flint holds the fundamental notion that flowers are something found everywhere, and freely pickable as one wishes. Even now, living in Rhodes Island's colossus of rebar and iron sheeting, she continues to think so.\nAs Miss Perfumer's greenhouse steadily drew in the horticulture enthusiasts one after another, a great mystery reared its head. Flowers would often be picked without warning. As the days went on, the gardeners whose plants went missing ultimately formed an alliance, agreeing once and for all to teach the delinquent flower-picker a lesson they'd never forget.\nBefore they set out a real action plan, Operator Flamebringer's meticulously cultivated bonsai was burgled overnight—a crucial breakthrough. The concerned parties fought each other bitterly that next day, and finally, under the oppressive gaze of Dr. Gavial, they reluctantly shook hands and made their own peace.\nAt least Operator Flint now understands. Unlike the rainforest, abundant with vegetation, she should refrain from picking the flowers she finds growing within Rhodes Island. The greenhouse's keeper has allowed Flint the use of a small flowerbed. You can find the Tiacauh stooping next to it from time to time, her hands, so often closed in fists, carefully pulling the weeds, looking forward to seeing the flowers bloom.`,
    },
    {
      title: 'Promotion Record',
      content: `In Flint's opinion, most people think too much and force themselves too tightly, and she especially can't stand to look at those in Rhodes Island who always push themselves to work.\n"If you are tired, just go rest!"\nShe would say so, and when saying this, the warrior is often already ready to shield all dangers for the you who is resting.\nHowever, the warrior of the rainforest has not yet understood how vast Terra is. She still needs time to understand, on this land, there are many things that can be solved with her fists, and there are many things we are powerless against.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/fighter-branch.png', factionIcon: '/icons/factions/sargon.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/flint/base.png', chibiSrc: '/operators/flint/chibi.webm', chibiMoveSrc: '/operators/flint/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'aZLing4' },
    { id: 'e2', label: 'Elite 2', src: '/operators/flint/e2.png', chibiSrc: '/operators/flint/chibi.webm', chibiMoveSrc: '/operators/flint/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'aZLing4' },
    { id: 'skin1', label: 'Gorgeous Flower', src: '/operators/flint/skin1.png', chibiSrc: '/operators/flint/chibi-skin1.webm', chibiMoveSrc: '/operators/flint/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'aZLing4' },
  ],
  portrait: '/operators/flint/portrait.png',
  portraitFocus: { y: 2, x: 50, zoom: 280 },
}

export default flint
