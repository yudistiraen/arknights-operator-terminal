import type { Operator } from '../../types'

const kafka: Operator = {
  name: 'Kafka', fileNo: 'CB06', class: 'Specialist', branch: 'Executor', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Columbia', position: 'Melee', race: 'Liberi', gender: 'Female', birthplace: 'Columbia',
  birthday: 'December 1st', height: '149 cm', combatExp: 'None', infectionStatus: 'Originium crystals distributed across surface of body, confirmed Infected by medical examination.', illustrator: 'NoriZC',
  cv: { JP: 'Miyu Tomita', CN: 'Xiao Sibai (credited as "Shi Haku" in EN)', EN: 'Abby Trott', KR: 'Woo Jeong-shin' },
  trait: 'Significantly reduced Redeployment Time',
  tags: ['Fast-Redeploy', 'Crowd-Control'],
  stats: { hp: 2025, atk: 525, def: 311, res: 0, block: 1, cost: 9, aspd: '0.93s', rdp: '18s' },
  range: {
    base: [[2, 1]],
    e1: [[2, 1]],
    e2: [[2, 1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Misdirection', desc: 'When skill is active, ATK +15%, Block becomes 0 and Kafka gains Camouflage', elite: 'E2' },
    { name: 'Misdirection', desc: 'When skill is active, ATK +18% (+3%), Block becomes 0 and Kafka gains Camouflage', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Cube of Absurdism', icon: '/operators/kafka/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 450% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s', rank: 'M3',
      range: [
        [0, 1, 0],
        [1, 2, 1],
        [0, 1, 0],
      ],
      note: "Only enemies within Cube of Absurdism's range when Kafka is deployed that will be put to Sleep.",
      levels: [
        { level: '1', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 250% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: '2', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 260% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: '3', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 270% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: '4', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 300% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: '5', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 310% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: '6', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 320% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: '7', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 350% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: 'M1', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 380% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: 'M2', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 410% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
        { level: 'M3', desc: 'After deployment, stops attacking for 5 seconds, and at the same time puts all surrounding ground enemies to Sleep. When the skill ends, deals 450% ATK as Arts damage to all surrounding ground enemies', spInit: 0, sp: 0, dur: '5s' },
      ],
    },
    {
      name: 'Shears of Surrealism', icon: '/operators/kafka/skill-2.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, immediately deals 400% ATK as Arts damage to all enemies within the frontal target tile; For the next 15 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '15s', rank: 'M3',
      note: 'Kafka will not attack enemies on the same tile as her while Shears of Surrealism is active.\nThe initial attack on deployment can affect aerial enemies.',
      levels: [
        { level: '1', desc: 'After deployment, immediately deals 200% ATK as Arts damage to all enemies within the frontal target tile; For the next 10 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '10s' },
        { level: '2', desc: 'After deployment, immediately deals 210% ATK as Arts damage to all enemies within the frontal target tile; For the next 10 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '10s' },
        { level: '3', desc: 'After deployment, immediately deals 220% ATK as Arts damage to all enemies within the frontal target tile; For the next 10 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '10s' },
        { level: '4', desc: 'After deployment, immediately deals 250% ATK as Arts damage to all enemies within the frontal target tile; For the next 11 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '11s' },
        { level: '5', desc: 'After deployment, immediately deals 260% ATK as Arts damage to all enemies within the frontal target tile; For the next 11 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '11s' },
        { level: '6', desc: 'After deployment, immediately deals 270% ATK as Arts damage to all enemies within the frontal target tile; For the next 11 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '11s' },
        { level: '7', desc: 'After deployment, immediately deals 300% ATK as Arts damage to all enemies within the frontal target tile; For the next 12 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '12s' },
        { level: 'M1', desc: 'After deployment, immediately deals 330% ATK as Arts damage to all enemies within the frontal target tile; For the next 13 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '13s' },
        { level: 'M2', desc: 'After deployment, immediately deals 360% ATK as Arts damage to all enemies within the frontal target tile; For the next 14 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '14s' },
        { level: 'M3', desc: 'After deployment, immediately deals 400% ATK as Arts damage to all enemies within the frontal target tile; For the next 15 seconds, continuously attacks ground units in that target tile with Arts damage', spInit: 0, sp: 0, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Kafka's Badge", desc: 'Operator Kafka has demonstrated a remarkable aptitude in repeated battlefield penetration.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Specialist Operator during field operations to exercise Executor responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.' },
    exey: { code: 'EXE-Y', name: "Rubik's Cube Pendant", stages: [
      { stage: 1, hp: '+80', atk: '+45', effect: 'New trait:\nWhen there are no allied units in the four adjacent tiles, ATK +10%' },
      { stage: 2, hp: '+100', atk: '+54', effect: 'Misdirection improved:\nWhen skill is active, ATK +22%, Block becomes 0 and gain Camouflage' },
      { stage: 3, hp: '+120', atk: '+60', effect: 'Misdirection improved:\nWhen skill is active, ATK +25%, Block becomes 0 and gain Camouflage' },
    ]},
  },
  story: `The mischievous Kafka is both an acquaintance of Dr. Olivia Silence and an orphan from Columbia who can be mistaken to be a child. By day, she worked as a gardener and by night, she became a gangster wandering around different factions. Thanks to her experience in dealing with gray zones and the underground world, Kafka became Silence's candidate to infiltrate Mansfield State Prison and plot a daring jailbreak for Anthony Simon. Despite the difficulties, Kafka's mission was a success.\nAfter the jailbreak, Silence found out that Kafka is suffering from Oripathy and has been keeping it all the time. Through her "persuasion," Kafka was brought under Rhodes Island's care and has since been lending her service to R.I. as a covert operations specialist who utilizes her quick acumen to catch her enemies off-guard.`,
  profile: `Former gardener from a Columbian city, joined Rhodes Island on Silence's referral.\nRobustly talented, keen-witted, and ever lively no matter the secret mission she's on.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 5%\nSmall amounts of crystals distributed across surface of Operator's body.\n[Blood Originium-Crystal Density] 0.19u/L\nPer the Operator's description, we can determine her Oripathy fundamentally took gradual shape over the course of her frequent, varied contact with strangers. Owing to her healthy lifestyle, nevertheless, her condition hasn't notably worsened, and she will be receiving further treatment.` },
    { title: 'Archive File 1', content: `A short Liberi girl with a grin permanently plastered on her face.\nHer conduct and manners are packed with deliberate good-kid acts that anyone can see through at a glance. Moreover, it's clear that she's fully aware of it herself, and she still does it on purpose with not the slightest intent of correcting the behavior; this is to the extent that Operators don't rumor her too well, though she doesn't seem concerned.\nHowever, she hates being taken as a small child due to her height; this will quickly wipe away her facade to reveal the boiling anger beneath.` },
    { title: 'Archive File 2', content: `From Kafka's own perspective, she had no initial plans to join Rhodes Island.\nFollowing the onboarding of Mountain and Robin, as well as Lotus, she intended to leave, but was deposited here by Silence.\nThe cause was her insistence upon keeping her Oripathy hidden from Silence, which was exposed at the time of her physical examination aboard Rhodes Island. Resulting dialogue within the Medical Department that day follows:\n"Kafka, the entire time, I never realized you contracted Oripathy! Why did you not tell me!?"\n"Tch. Busted, huh... I didn't wanna 'cause I KNEW you'd chew me out me like this..."\n"Regardless, you're coming with me to the Medical Department for a checkup!"\n"Wha? No, heck off! I'm going back to Columbia!"\n"That's not happening."\n"Waaagh, stop pullin' me! I don't got the cash to get treated in a place like this!"\n"I'll cover your costs. You have no cause to worry."\n"That ain't the problem here... aw, forget it, whatever..."\nTo sum up, once Kafka's exam results came out, under Silence's very firm demand, she ultimately agreed to stay at Rhodes Island, and in the end became an Operator.` },
    { title: 'Archive File 3', content: `After you realize Kafka's true identity, her good-kid act becomes a lot easier to explain.\nIn truth, beneath her guise as a gardener, she's wandered amongst the petty gangs of the city's underclass—as a gang member herself.\nOne could say, as an orphan, she grew up moving from place to place. One could say, as someone with gang dealings far and wide from childhood, she caught onto a survival philosophy of her own. That philosophy's embodiment—playing the good kid.\nShe absolutely does not care if people hate her for this mask of hers; really, it might make her happy. She doesn't want to be adored by very many, nor is she planning on adoring very many herself. This painstaking pretense is, as she sees it, the optimal tool for maintaining her sense of distance from others.\nIt's clear this approach stems from the day-to-day affairs of the gray zone—betrayal, deceit, bloodshed. In such surroundings, putting yourself first is the best approach.` },
    { title: 'Archive File 4', content: `It's also clear that to Kafka, Silence was a twist in her tapestry. Her attitude towards the Doctor is a similar twist, one we can pry into for limited insight.\nKafka and others like her will often avoid getting in too deep with any one person, as they'd be unable to maintain their mask. Plainly, though, as an Operator, Kafka has no way of avoiding frequent contact with the Doctor, and in the course of this, she understandably has times where she drops her own act.\nGoing by the Doctor's observations, Kafka's inherent nature doesn't surprise too many—in truth, to our many life-weathered operators, Kafka's pocketful of tricks barely does her justice—her personal loyalty, her strong empathy, her living in the moment, not letting the future grip her.\nThat is her, and if she considers the Doctor her number two friend, then Silence, whom she met by chance, is her number one.\nIt is beyond us to learn just what level of contact she and Silence had in the past. That said, even here at Rhodes Island, she'll mock Silence's rectitude on one hand while unable to stop worrying about her on the other. Regardless of anything, it brings a smile to one's face, and as little as it is, it's silently improved quite a few of our Operators' impressions of her.` },
    { title: 'Promotion Record', content: `When she received her second promotion, it caught us off guard that from Kafka's show of emotion, we could feel some kind of genuine sincerity.\nIt's understandable, though. All those who have paid a little attention to her can tell—when she'd just come to Rhodes Island, she was an artful dodger, unwilling to assume any responsibility. The present Kafka may well look the same as back then, but inside, she's long since changed.\nShe'll bring young children nice little surprises on the sly, and she'll aid those who need it without batting an eye; in off time between missions, she'll commonly show up in Perfumer's garden, and the two get along very well these days.\nIt's clear as day, she's found a place for herself in Rhodes Island now.\nJust as we'd determined at the start, though life in the Columbian gray zone made her unwilling by nature to bare her soul to others, that nature itself was kind all along. It leads us to suppose, even, that she only took on such a nature to keep herself alive, disguising herself—cheating herself."` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/executor-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/kafka/base.png', chibiSrc: '/operators/kafka/chibi.webm', chibiMoveSrc: '/operators/kafka/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'e2', label: 'Elite 2', src: '/operators/kafka/e2.png', chibiSrc: '/operators/kafka/chibi.webm', chibiMoveSrc: '/operators/kafka/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin1', label: 'Cardboard Fairy', src: '/operators/kafka/skin1.png', chibiSrc: '/operators/kafka/chibi-skin1.webm', chibiMoveSrc: '/operators/kafka/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
  ],
  portrait: '/operators/kafka/portrait.png',
  portraitFocus: { y: 2, x: 48.5, zoom: 324 },
}

export default kafka
