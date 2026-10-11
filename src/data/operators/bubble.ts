import type { Operator } from '../../types'

const bubble: Operator = {
  name: 'Bubble', fileNo: 'R146', class: 'Defender', branch: 'Protector', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Sargon', position: 'Melee', race: 'Cerato', gender: 'Female', birthplace: 'Sargon',
  birthday: 'March 19th', height: '135 cm', combatExp: 'None', infectionStatus: 'Confirmed Infected by medical examination.', illustrator: 'Cenm0',
  cv: { JP: 'Hikaru Akao', CN: 'Mihu zzZ (credited as "Misty" in EN)', EN: 'Ama Lee', KR: 'Bang Yeon-ji' },
  trait: 'Blocks 3 enemies',
  tags: ['Defense'],
  stats: { hp: 3416, atk: 370, def: 720, res: 0, block: 3, cost: 21, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Flawed', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Spiked Shield', desc: 'Enemies that attacked Bubble have their ATK reduced by 5% for 5 seconds', elite: 'E1' },
    { name: 'Spiked Shield', desc: 'Enemies that attacked Bubble have their ATK reduced by 8% for 5 seconds', elite: 'E2' },
  ],
  skills: [
    {
      name: 'DEF Up β', icon: '/operators/bubble/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'DEF +80%', spInit: 10, sp: 35, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: `DEF +20%`, spInit: 0, sp: 45, dur: '35s' },
        { level: '2', desc: `DEF +25%`, spInit: 0, sp: 45, dur: '35s' },
        { level: '3', desc: `DEF +30%`, spInit: 0, sp: 45, dur: '35s' },
        { level: '4', desc: `DEF +35%`, spInit: 5, sp: 40, dur: '35s' },
        { level: '5', desc: `DEF +40%`, spInit: 5, sp: 40, dur: '35s' },
        { level: '6', desc: `DEF +45%`, spInit: 5, sp: 40, dur: '35s' },
        { level: '7', desc: `DEF +50%`, spInit: 5, sp: 38, dur: '35s' },
        { level: 'M1', desc: `DEF +60%`, spInit: 5, sp: 37, dur: '35s' },
        { level: 'M2', desc: `DEF +70%`, spInit: 5, sp: 36, dur: '35s' },
        { level: 'M3', desc: `DEF +80%`, spInit: 10, sp: 35, dur: '35s' },
      ],
    },
    {
      name: '"Beaten Up"', icon: '/operators/bubble/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking; DEF +120% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 50% DEF as physical damage to the target', spInit: 0, sp: 45, dur: '25s', rank: 'M3',
      note: '"Beaten Up" increases Bubble\'s aggression level by 1.',
      levels: [
        { level: '1', desc: `Stops attacking; DEF +45% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 30% DEF as physical damage to the target`, spInit: 0, sp: 50, dur: '25s' },
        { level: '2', desc: `Stops attacking; DEF +50% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 30% DEF as physical damage to the target`, spInit: 0, sp: 50, dur: '25s' },
        { level: '3', desc: `Stops attacking; DEF +55% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 30% DEF as physical damage to the target`, spInit: 0, sp: 50, dur: '25s' },
        { level: '4', desc: `Stops attacking; DEF +65% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 40% DEF as physical damage to the target`, spInit: 0, sp: 50, dur: '25s' },
        { level: '5', desc: `Stops attacking; DEF +70% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 40% DEF as physical damage to the target`, spInit: 0, sp: 50, dur: '25s' },
        { level: '6', desc: `Stops attacking; DEF +75% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 40% DEF as physical damage to the target`, spInit: 0, sp: 50, dur: '25s' },
        { level: '7', desc: `Stops attacking; DEF +85% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 40% DEF as physical damage to the target`, spInit: 0, sp: 49, dur: '25s' },
        { level: 'M1', desc: `Stops attacking; DEF +95% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 50% DEF as physical damage to the target`, spInit: 0, sp: 48, dur: '25s' },
        { level: 'M2', desc: `Stops attacking; DEF +105% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 50% DEF as physical damage to the target`, spInit: 0, sp: 47, dur: '25s' },
        { level: 'M3', desc: `Stops attacking; DEF +120% and increase the likelihood of being targeted by enemy attacks. When attacked, deal 50% DEF as physical damage to the target`, spInit: 0, sp: 45, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Bubble's Badge", desc: 'Appointed as Defender Operator to exercise Protector responsibilities' },
    prox: { code: 'PRO-X', name: "Bubble's Shining Sword", stages: [
      { stage: 1, hp: '+180', def: '+50', effect: 'New trait: DEF +20% when blocking an enemy' },
      { stage: 2, hp: '+220', def: '+60', effect: 'Spiked Shield improved: Enemies that attack Bubble have their ATK reduced by 10% for 5 seconds' },
      { stage: 3, hp: '+250', def: '+65', effect: 'Spiked Shield improved: Enemies that attack Bubble have their ATK reduced by 12% for 5 seconds' },
    ]},
  },
  story: `Bubble, a young Sargonian Cerato girl from a warrior tribe and the only known representative of her race in Rhodes Island, was sent to R.I. by her father to treat her Oripathy under the guise of a "training" to encourage her. There, she serves as a defender wielding a spike-lined shield to bash and charge at her enemies like a rampaging rhinoceros. She is a fan of Gavial and known as a troublemaker by other R.I. personnel due to her reckless approach in combat and hyperactive manner, putting the Cerato in the same shoes as her friend Ceobe.`,
  profile: `A young warrior girl from a tribe of Sargon Ceratos, she is inexperienced, with no knowledge of the norms and customs for interacting with others. Her father sent her to Rhodes Island, ostensibly for "training," but actually to treat her Oripathy.\nShe uses a massive shield as a weapon, relying on charging and bashing tactics. She needs Rhodes Island training to ensure she doesn't make any catastrophic mistakes in actual combat.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 2%\nHer left leg shows clear signs of infection.\n\n[Blood Originium-Crystal Density] 0.24u/L\nInfection remains mild, but the patient is often uncooperative with treatment, and there is a possibility her situation could worsen.\n\n"I hope we don't get too many more difficult patients like her..."` },
    { title: 'Archive File 1', content: `Bubble is the daughter of a Sargon tribal warrior. Our operators made some arrangements with her father before she came to Rhodes Island. We understand she suffered direct contact with Originium while playing in the wilderness, and failure to quickly clean the wound resulted in an irreversible infection. Bubble's father asked that we accept her for treatment, but so as not to embarrass her, he requested that we register her as a reserve operator and note her purpose at Rhodes Island as "special training." After her tests, she became a reserve operator.` },
    { title: 'Archive File 2', content: `Bubble makes a lot of trouble for the adults around her, but she's exceedingly popular among children. She is playful, principled, and particularly good at embellishing her "adventures," which never fail to draw the kids in for a listen. Even the clever children who know her stories are exaggerated still enjoy listening to Bubble, because those stories are indeed very well-told.\nBubble has lots of friends, but she is closest to Ceobe. The two hit it off from the first time they met, and one always goes looking for the other whenever she has free time. As for what they talk about, it's what kids always love to talk about:\n"My favorite hero could beat up your favorite hero."\nBubble doesn't like to study, but that hasn't kept her from learning all kinds of new phrases, techniques, and rhetorical flourishes to describe her own father during her talks with Ceobe. But the funny thing is that no matter how much vocabulary they prepare beforehand, their arguments always descend into: "I'm big!" "I'm bigger!" "I'm way bigger!" Punctuated with exaggerated gestures, such confrontations can last an entire afternoon.\nI suppose that's just how kids are.\nLooks like they're having fun.` },
    { title: 'Archive File 3', content: `Bubble has not yet grown accustomed to the cramped quarters of Rhodes Island. She is used to life on the wide open plains of Sargon, running across the vast prairies of the wilderness. So when she first came to Rhodes Island, Bubble had an instinctive rejection of the environment. And one way she acted out against our environment was to rampage through the ship, wrecking things.\nDon't underestimate Bubble because of her size. She's trampled robots, crashed through security doors, broken down partition walls, and never once injured herself. Should you ever see her preparing to break into a run, stop her immediately and bring her to the nearest treadmill. Or toss her into the training room, which is the safest and most effective way to deal with a "Bubble Crisis."\nBubble also likes to run around the battlefield during combat. Thanks to her man-sized spiked shield, she is impervious to any threat she can charge straight through. But she tends not to consider that she could still be attacked from the side or the rear, and it is necessary to have other operators cover her. Until she is able to fully comply with dispatch or complete her Defender examination, her deployments will be limited to lower threat missions.` },
    { title: 'Archive File 4', content: `As the daughter of a tribal warrior, Bubble is used to the expectation that she will be a warrior just like her father. Because of her bottomless respect for her father, Bubble has been working to emulate him since she was small. But we have to ask: is Bubble really suited to that kind of life?\nWhen other children in the tribe were learning the importance of combat skills, Bubble was rushing around, charging into things. She has far more strength and endurance than children of her same cohort, but combat prowess is more than just strength. In the words of her father: "This girl will not be a warrior."\nIt is perhaps because he recognized this that her father did not permit Bubble to conceal her wounds and carry on with her life, and instead sent her away from the tribe, away from Sargon, and off to a new future of her own making.\n"At least here, she can have a happy life." It's hard to imagine such words came from a fierce tribal Cerato warrior, his body well over two meters tall covered head to toe in tattoos and totems. Not long after that conversation, our newly arrived Bubble came crashing through the reception room door. Her father apologized profusely to the operator on duty, all the while holding the crying Bubble by her ear. An hour later, after the operator saw off Bubble's father, the young girl helped herself to a snack: the leaves of our potted plant.\nIt seems Bubble has a lot of growing up to do.` },
    { title: 'Promotion Record', content: `All our Medic Operators know the futility of trying to get control of a grumpy Bubble. Putting a stop to a charging Cerato is like stopping a hulk of agricultural machinery with a brick on its accelerator.\nBut Gavial has done it.\nNot only can Gavial get Bubble under control, but she has no trouble administering injections to the girl. After attempting to resist Gavial several times, to no avail, Bubble has resigned herself to her fate.\nSubsequently, Bubble came to understand Gavial's "glorious accomplishments" and has since come to worship her.\nAnd Bubble has been more amenable of late.\nThanks, Gavial!\nWhat's more, Bubble has started studying some close combat techniques. When asked why, she replied:\n"I want to pound Kay flat!"\nWe know that when Bubble and Ceobe get into one of their "My Papa could beat up Vulcan" sessions, they sometimes get too into it and the conflict turns physical. They have never drawn weapons and do not escalate beyond shoving.\nIn terms of raw power, Bubble is a bit stronger than Ceobe, but Ceobe's extensive experience and conditioned reflexes always put Bubble at a disadvantage, and the noisy little firecracker usually finds herself overwhelmed.\nSo Bubble started training. And property damage due to Bubble has also enjoyed a significant reduction.\nMaybe it won't be long before we can declare "Bubble Crises" a thing of the past.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/sargon.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/bubble/base.png', chibiSrc: '/operators/bubble/chibi.webm', illustrator: 'Cenm0' },
    { id: 'e2', label: 'Elite 2', src: '/operators/bubble/e2.png', chibiSrc: '/operators/bubble/chibi.webm', illustrator: 'Cenm0' },
    { id: 'skin1', label: 'The Wind Rider', src: '/operators/bubble/skin1.png', chibiSrc: '/operators/bubble/chibi.webm', illustrator: '香煎蟹黄' },
  ],
  portrait: '/operators/bubble/portrait.png',
  portraitFocus: { y: -2, x: 10, zoom: 220 }
}

export default bubble
