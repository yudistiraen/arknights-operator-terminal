import type { Operator } from '../../types'

const hellagur: Operator = {
  name: 'Hellagur', fileNo: 'AZ01', class: 'Guard', branch: 'Soloblade', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Ursus', position: 'Melee', race: 'Liberi (Hippogryph)', gender: 'Male', birthplace: 'Ursus',
  birthday: 'May 5th', height: '193 cm', combatExp: '44 years', infectionStatus: 'Infected', illustrator: 'Liduke',
  cv: { JP: 'Show Hayami', CN: 'Liu Ruoban', EN: 'Paul Herzberg', KR: 'Si Young-jun' },
  trait: "Can't be healed by other units. Recovers 70 self HP every time this operator attacks an enemy",
  tags: ['DPS', 'Survival'],
  stats: { hp: 3825, atk: 762, def: 334, res: 0, block: 1, cost: 26, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Waxing Moon', desc: 'Gains up to +100 ASPD Tenacity (reaches maximum bonus when losing 70% Max HP)', elite: 'E0' },
    { name: 'Ingenious Strategist', desc: 'Regenerate 60 HP per second when this unit is not blocking an enemy', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Crescent Moon', icon: '/operators/hellagur/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'The ATK of next attack increases to 175%, attacking twice consecutively', spInit: 0, sp: 2, rank: 'M3',
      levels: [
        { level: '1', desc: 'The ATK of next attack increases to 110%, attacking twice consecutively', spInit: 0, sp: 4 },
        { level: '2', desc: 'The ATK of next attack increases to 115%, attacking twice consecutively', spInit: 0, sp: 4 },
        { level: '3', desc: 'The ATK of next attack increases to 120%, attacking twice consecutively', spInit: 0, sp: 4 },
        { level: '4', desc: 'The ATK of next attack increases to 125%, attacking twice consecutively', spInit: 0, sp: 3 },
        { level: '5', desc: 'The ATK of next attack increases to 130%, attacking twice consecutively', spInit: 0, sp: 3 },
        { level: '6', desc: 'The ATK of next attack increases to 135%, attacking twice consecutively', spInit: 0, sp: 3 },
        { level: '7', desc: 'The ATK of next attack increases to 145%, attacking twice consecutively', spInit: 0, sp: 3 },
        { level: 'M1', desc: 'The ATK of next attack increases to 155%, attacking twice consecutively', spInit: 0, sp: 3 },
        { level: 'M2', desc: 'The ATK of next attack increases to 165%, attacking twice consecutively', spInit: 0, sp: 3 },
        { level: 'M3', desc: 'The ATK of next attack increases to 175%, attacking twice consecutively', spInit: 0, sp: 2 },
      ],
    },
    {
      name: 'Half Moon', icon: '/operators/hellagur/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 15, sp: 25, dur: '13s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 0, sp: 35, dur: '10s' },
        { level: '2', desc: 'ATK +25%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 0, sp: 34, dur: '10s' },
        { level: '3', desc: 'ATK +30%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 0, sp: 33, dur: '10s' },
        { level: '4', desc: 'ATK +35%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 5, sp: 32, dur: '11s' },
        { level: '5', desc: 'ATK +40%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 5, sp: 31, dur: '11s' },
        { level: '6', desc: 'ATK +45%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 5, sp: 30, dur: '11s' },
        { level: '7', desc: 'ATK +50%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 10, sp: 29, dur: '12s' },
        { level: 'M1', desc: 'ATK +60%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 11, sp: 28, dur: '12s' },
        { level: 'M2', desc: 'ATK +70%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 12, sp: 27, dur: '12s' },
        { level: 'M3', desc: 'ATK +80%, changes attack to twice attack, obtaining 75% Physical Dodge', spInit: 15, sp: 25, dur: '13s' },
      ],
    },
    {
      name: 'Full Moon', icon: '/operators/hellagur/skill-3.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +100%, attack range +2 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 35, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +40%, attack range +1 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 45, dur: '12s' },
        { level: '2', desc: 'ATK +45%, attack range +1 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 45, dur: '12s' },
        { level: '3', desc: 'ATK +50%, attack range +1 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 45, dur: '12s' },
        { level: '4', desc: 'ATK +55%, attack range +1 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 43, dur: '13s' },
        { level: '5', desc: 'ATK +60%, attack range +1 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 43, dur: '13s' },
        { level: '6', desc: 'ATK +65%, attack range +1 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 43, dur: '13s' },
        { level: '7', desc: 'ATK +70%, attack range +1 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 41, dur: '14s' },
        { level: 'M1', desc: 'ATK +80%, attack range +2 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 39, dur: '14s' },
        { level: 'M2', desc: 'ATK +90%, attack range +2 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 37, dur: '14s' },
        { level: 'M3', desc: 'ATK +100%, attack range +2 tiles, can attack up to 3 targets simultaneously', spInit: 15, sp: 35, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Hellagur's Badge", desc: 'Appointed as Guard Operator to exercise Soloblade responsibilities' },
    sblx: { code: 'SBL-X', name: 'Zouhou, a Sheath for Contempt', stages: [
      { stage: 1, hp: '+230', atk: '+35', effect: 'New trait: Gains 25% Sanctuary when HP is below 50%' },
      { stage: 2, hp: '+300', atk: '+75', effect: 'Waxing Moon improved: Gains up to +120 ASPD Tenacity (reaches maximum bonus when losing 60% Max HP)' },
      { stage: 3, hp: '+350', atk: '+90', effect: 'Waxing Moon improved: Gains up to +130 ASPD Tenacity (reaches maximum bonus when losing 50% Max HP)' },
    ]},
    sbly: { code: 'SBL-Y', name: 'Горячий Снег', stages: [
      { stage: 1, atk: '+55', def: '+30', effect: 'New trait: When defeated, does not retreat and instead recovers 30% HP (can only activate once every deployment)' },
      { stage: 2, atk: '+75', def: '+55', effect: 'Ingenious Strategist improved: Regenerates 70 HP per second when not blocking an enemy, or when HP is below 30%' },
      { stage: 3, atk: '+90', def: '+60', effect: 'Ingenious Strategist improved: Regenerates 80 HP per second when not blocking an enemy, or when HP is below 30%' },
    ]},
  },
  story: `It is unknown when Rhodes Island operators began referring to Hellagur as "General." Although Hellagur has never revealed his identity to anyone else, members of the Ursus Infected Underground have always regarded him as legendary. This has led all operators to take an interest in these rumors.\n\nOf course, as an Azazel infected, Hellagur himself has said that he is more adept at helping the clinic continue its operations rather than developing its medical technology, influence, and scale.\n\nIn fact, Hellagur does indeed guarantee Azazel's status. For many years, Azazel has been an important pillar of support for the Chernobog infected. Most of the local infected are grateful for Azazel's efforts.\n\nBut maintaining a benevolent, neutral stance cannot protect this clinic in times of political turmoil. After all, they are too influential. Whether by trying to remain neutral or actively trying to topple a certain party, they inevitably put either tangible or intangible pressure on one side or the other.\n\nIt would be better to say that being able to escape the Chernobog incident unscathed proves that Hellagur possesses acute foresight. Hellagur has his own opinions of the chain of events that might lead to the clinic's destruction, but said he is unable to divulge more information until more definitive evidence presents itself.`,
  profile: 'Leader of the black market Infected clinic Azazel in Chernobog, known to Rhodes Island operators only as "the General." A veteran of the Ursus civil war who guards a mysterious past and an equally mysterious ward, Neon.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 13%\nAs leader of the infected clinic Azazel, Hellagur's infection symptoms are manifestly present.\n\n[Blood Originium-Crystal Density] 0.21u/L\nConcentration is currently within a manageable category. Perhaps Azazel does indeed have unique technology for slowing down the spread of infection.\n\nHonestly, who isn't interested in the technology Azazel uses to treat this disease? Of course, it is pointless to ask the General. He doesn't understand any of it.\n— Medic J.A` },
    { title: 'Archive File 2', content: `Hellagur maintains an intense hostility toward Ursus authorities. Part of this hatred is derived from his desire to protect the clinic, and the other part is due to reasons unknown.\nThough Hellagur is by no means a defeatist, he still has taken a hardline attitude toward operations in the Ursus area.\nHowever, when analyzing the military power of Ursus, he has said "No political entity should come into direct conflict with Ursus. Even if its corruption and fanaticism will eventually destroy it, it's still the most fearsome force in the land."\nFrom this point of view it could be said that as an infected himself, Hellagur's opinions on many matters are far more critical than those of other infected.\nAll strategically-minded operators have their own thoughts on the situation, and they're all well aware of Rhodes Island's true circumstances in it. Hellagur's relationship with Ursus may make a small number of operators distrustful. But operators who attended the strategic meetings all understand Hellagur's true intentions.\nBut Hellagur's words contain no contradictions. He believes that as an infected, he is already on Ursus's opposing side —\n"However, once Ursus looks at you, you will know the difference between being an enemy of Ursus, and Ursus regarding you as one."` },
    { title: 'Archive File 3', content: `[Classified Log]\nAfter analyzing a large amount of information and many pieces of intelligence, we have inferred some facts. Now we will list out some psychological analysis of the subject, for personnel reference only.\n\n"Over the course of his life, he has suffered two traumas that he is still struggling with.\nThe first trauma was when he watched a long-time friend pass away in front of his very eyes. His friend was the commander of the enemy army, the target of his mission, and was identified as a core figure in the enemy army by Ursus.\nThe second trauma was when a terrible battle broke out between him and the person he trusted the most. After the battle, he was still standing, but the fate of the other person is unknown, as if he died in some unknown alley somewhere.\n\nThe first time, his friend entrusted him with a blade called 'Kudarikiri,' and a young infected girl named Neon.\nThe second time, the person he trusted left him a black market clinic called 'Azazel,' as well as a conviction.\n\nHellagur knew his friend had plotted Ursus's defeat, but Hellagur would not blame him.\nHellagur knew that the child he trusted had instigated the entire betrayal and injured all of the infected in the clinic, but Hellagur would not hate this child.\n\nHe often refers to himself as a warrior. Perhaps this is because he doesn't know how to face everything Ursus has done to him.\nMaybe a little bit of hope is the only motivation he has to keep on living."\n\nAlthough these conclusions unavoidably contain some of the opinions of the individual who collected this intelligence, we still trust in her ability to organize clues.\nOur response to the incident depends on the decision itself, but at the very least, we may already understand the reason why the General often merely sighs at Miss Neon's improper behavior.` },
    { title: 'Archive File 4', content: `[Classified File]\nAlthough the General has never clearly state his name, but I have guessed his former identity.\nHe displayed outstanding talent in the decisive battle of the Four Emperors. He earned a major reputation during the Tenth Urcha War. An Ursus soldier with these kinds of achievements is rare indeed.\nDuring the Bloodpeak Campaign, he established a glowing military record but then vanished without a trace. There is only one high-ranking Ursus commander that meets these conditions.\nAs for how I made the inference, well, it's just a guess! Over several decades, Ursus has executed over a hundred commanders. The few left alive can be counted on one hand. Consult a registry of names to get the answer!\nThis isn't over. His experience, his country, the things he cares about will all drag him down eventually. When the time comes, it may not be up to us whether we need to pull him down or not.\n—— ■■■` },
    { title: 'Promotion Record', content: `"What are you willing to lose to heal her?"\n"Everything but her."\n"I want your dignity, sir. Everything the Ursus Empire took from us, we're going to peel off your body."\n"I'm not sure my body has any dignity left."\n"It does, sir. Welcome. You are now one of us."` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/soloblade-branch.png', factionIcon: '/icons/factions/ursus.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/hellagur/base.png', chibiSrc: '/operators/hellagur/chibi.webm', illustrator: 'Liduke' },
    { id: 'e2', label: 'Elite 2', src: '/operators/hellagur/e2.png', chibiSrc: '/operators/hellagur/chibi.webm', illustrator: 'Liduke' },
    { id: 'skin1', label: 'Octopath Illusion', src: '/operators/hellagur/skin1.png', chibiSrc: '/operators/hellagur/chibi-skin1.webm', illustrator: 'Liduke' },
  ],
  portrait: '/operators/hellagur/portrait.png',
  portraitFocus: { y: -5, x: 45, zoom: 300 },
}

export default hellagur
