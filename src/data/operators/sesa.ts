import type { Operator } from '../../types'
import sesaVoice from '../voices/sesa'

const sesa: Operator = {
  name: 'Sesa', fileNo: 'R158', class: 'Sniper', branch: 'Artilleryman', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Sargon', position: 'Ranged', race: 'Vouivre', gender: 'Male',
  birthplace: 'Sargon', birthday: 'April 22nd', height: '189 cm', combatExp: 'None', infectionStatus: 'Confirmed uninfected by medical examination.', illustrator: '竜崎いち',
  cv: { JP: 'Yuuki Ono', CN: 'Xu Xiang (credited as "Ethan" in EN)', EN: 'Jack Ayres', KR: 'Ryu Seung-gon' },
  voice: sesaVoice,
  trait: 'Deals AOE Physical damage',
  tags: ['AoE', 'Debuff'],
  stats: { hp: 1655, atk: 918, def: 123, res: 0, block: 1, cost: 28, aspd: '2.8s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]],
    e1: [[1, 1, 1, 1, 0], [2, 1, 1, 1, 1], [1, 1, 1, 1, 0]],
    e2: [[1, 1, 1, 1, 1], [2, 1, 1, 1, 1], [1, 1, 1, 1, 1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Vulnerability Deconstruction', desc: 'When deployed, all blocked enemies take +7% Physical damage', elite: 'E1' },
    { name: 'Vulnerability Deconstruction', desc: 'When deployed, all blocked enemies take +14% Physical damage', elite: 'E2' },
  ],
  skills: [
    {
      name: 'ATK Up γ', icon: '/operators/sesa/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +100%', spInit: 15, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +30%', spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: 'ATK +35%', spInit: 0, sp: 40, dur: '30s' },
        { level: '3', desc: 'ATK +40%', spInit: 0, sp: 40, dur: '30s' },
        { level: '4', desc: 'ATK +45%', spInit: 5, sp: 37, dur: '30s' },
        { level: '5', desc: 'ATK +50%', spInit: 5, sp: 37, dur: '30s' },
        { level: '6', desc: 'ATK +55%', spInit: 5, sp: 37, dur: '30s' },
        { level: '7', desc: 'ATK +60%', spInit: 10, sp: 35, dur: '30s' },
        { level: 'M1', desc: 'ATK +75%', spInit: 10, sp: 34, dur: '30s' },
        { level: 'M2', desc: 'ATK +90%', spInit: 10, sp: 33, dur: '30s' },
        { level: 'M3', desc: 'ATK +100%', spInit: 15, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Delayed Concussive Parts', icon: '/operators/sesa/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attacks turn into delayed detonation grenades that deal 240% Physical damage, and decrease the ASPD of enemies hit by -20 for 3 seconds', spInit: 20, sp: 40, dur: '30s', rank: 'M3',
      note: 'The grenades do not track enemies and detonates after a delay of 2 seconds on impact.',
      levels: [
        { level: '1', desc: 'Attacks turn into delayed detonation grenades that deal 170% Physical damage, and decrease the ASPD of enemies hit by -3 for 3 seconds', spInit: 10, sp: 50, dur: '25s' },
        { level: '2', desc: 'Attacks turn into delayed detonation grenades that deal 175% Physical damage, and decrease the ASPD of enemies hit by -3 for 3 seconds', spInit: 10, sp: 49, dur: '25s' },
        { level: '3', desc: 'Attacks turn into delayed detonation grenades that deal 180% Physical damage, and decrease the ASPD of enemies hit by -3 for 3 seconds', spInit: 10, sp: 48, dur: '25s' },
        { level: '4', desc: 'Attacks turn into delayed detonation grenades that deal 190% Physical damage, and decrease the ASPD of enemies hit by -6 for 3 seconds', spInit: 12, sp: 47, dur: '26s' },
        { level: '5', desc: 'Attacks turn into delayed detonation grenades that deal 195% Physical damage, and decrease the ASPD of enemies hit by -6 for 3 seconds', spInit: 12, sp: 46, dur: '26s' },
        { level: '6', desc: 'Attacks turn into delayed detonation grenades that deal 200% Physical damage, and decrease the ASPD of enemies hit by -6 for 3 seconds', spInit: 12, sp: 45, dur: '26s' },
        { level: '7', desc: 'Attacks turn into delayed detonation grenades that deal 210% Physical damage, and decrease the ASPD of enemies hit by -10 for 3 seconds', spInit: 14, sp: 44, dur: '27s' },
        { level: 'M1', desc: 'Attacks turn into delayed detonation grenades that deal 220% Physical damage, and decrease the ASPD of enemies hit by -13 for 3 seconds', spInit: 16, sp: 43, dur: '28s' },
        { level: 'M2', desc: 'Attacks turn into delayed detonation grenades that deal 230% Physical damage, and decrease the ASPD of enemies hit by -16 for 3 seconds', spInit: 18, sp: 42, dur: '29s' },
        { level: 'M3', desc: 'Attacks turn into delayed detonation grenades that deal 240% Physical damage, and decrease the ASPD of enemies hit by -20 for 3 seconds', spInit: 20, sp: 40, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Sesa's Badge", desc: `Operator Sesa has demonstrated a remarkable aptitude for inflicting physical casualties on multitudes of enemies.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Sniper Operator during field operations to exercise Artilleryman responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    artx: { code: 'ART-X', name: '"Soul Resonance"', stages: [
      { stage: 1, atk: '+38', def: '+24', effect: 'New trait: Increases ATK to 110% when attacking blocked enemies' },
      { stage: 2, atk: '+50', def: '+35', effect: 'Vulnerability Deconstruction improved: When deployed, all blocked enemies take +18% Physical damage' },
      { stage: 3, atk: '+60', def: '+43', effect: 'Vulnerability Deconstruction improved: When deployed, all blocked enemies take +22% Physical damage' },
    ]},
  },
  story: `Born into a rich family from Sargon, the Vouivre man codenamed "Sesa" has been disguising himself as a gunsmith capable of tuning and modifying black market weapons for the highest bidder. He should not have been involved in such illegal trading, but an industrial accident that caused the death of his elder brother in Columbia forced him to embark on a long journey for vengeance. Currently, Sesa is lending his expertise both in gunsmithing and combat to Rhodes Island where he utilizes a custom-made grenade launcher capable of firing high-explosive concussive shells on the battlefield. He also shares a common topic with Elliot Glover where the two not only work together in Originium-based weapon research, but also to investigate the shady secret behind his brother's death.`,
  profile: `Rhodes Island Operator, Sesa, born in Sargon, provided modification services for local black market weaponry. The resume he provided was murky and proved impossible to follow up upon. After coming into direct contact with Rhodes Island in his line of work and confirming its existence, he voluntarily came to Rhodes Island to apply for a job.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Sesa shows no signs of Oripathy infection.\n[Blood Originium-Crystal Density] 0.19u/L\nDue to a long-term exposure to Originium through the modification of Originium-based equipment for illegal organizations without adequate protective measures, Operator Sesa may be at greater risk for infection. Regular inspections are required.` },
    { title: 'Archive File 1', content: `Sesa uses a grenade launcher which he claims has a "sublimated soul." In a private inspection, engineers found that this firearm had undergone sophisticated modifications to enhance the strength of its core Originium components, allowing people with even relatively mediocre Originium Arts to draw out most of its potential. This leaves little to doubt about his Originium engineering skills. As for why he prefers mysterious and esoteric expressions to describe his work, we continue to reserve our judgment at this time.` },
    { title: 'Archive File 2', content: `Sesa was born into a fairly wealthy traditional family in Sargon. He was a stereotypical honors student since childhood, and was smoothly admitted into a famous local polytechnic university.\nHis focus in learning made him particularly clumsy when socializing with others, and he was always written off as a typical nerd, useless for anything other than his good grades.\nHowever, he cared little about the opinions of those around him. He simply continued forward, striving to catch up to his esteemed older brother – a brilliant, sensible, eloquent, and proficient prodigy who had already secured various patents for his inventions. Sesa threw himself at his studies to be admitted to the same prestigious school as his brother with the hope of one day working with him.\nSesa's brother, seven years his elder, worked for a massive military contractor in Columbia after graduation, and put together the company's largest research lab. Six months before his graduation, Sesa finally arrived at the military laboratory for an internship. However, a cruel twist of fate separated the two brothers, when an explosion from an experimental accident claimed the life of his older brother. The sudden loss of his older brother shattered the goal he had poured himself into so ardently his whole life. With his excellent grades, he was still able to continue his education, but he immediately rejected an invitation to stay at the lab and left the college after barely graduating.\nSesa secluded himself in his room for a long time until one day, he left a letter to his father and departed.` },
    { title: 'Archive File 3', content: `When Sesa contacted Rhodes Island, he was modifying weapons for others in a black market weapon exchange. Needless to say, these were basically all illegal modifications. Beyond the obvious, however, it is important to note that modifying Originium firearms is extremely dangerous. From the fact that his modifications allow those who are not adept with Originium Arts to operate these weapons, one can surmise that Sesa must have made many unfathomable breakthroughs in his craftsmanship. His name soon became a mainstay in the black markets due to his reputation for excellent craftsmanship. Surprisingly, Sesa's own talent for Originium Arts is not enough for him to easily master the use of Originium equipment. In fact, he struggles to operate even the most basic of Originium weapons. For this somewhat famous weapon modifier, the reality seems a bit hard to believe as well, and this is perhaps the reason for the modifications he's made upon his own grenade launcher.\nLater, when we investigated the laboratory incident, we found that Sesa's late brother, as the leader of the military laboratory, was far more proficient in Originium Arts than Sesa.\nThis may be the reason why Sesa has gone through such painstaking efforts, tapping into a far greater talent so that he too may be able to pick up a grenade launcher.` },
    { title: 'Archive File 4', content: `We found some clues while investigating Sesa and his brother. We found it difficult to believe that such an accident could take place in one of Columbia's most prestigious military laboratories. With this bit of skepticism in mind, we uncovered the greatest doubt of this whole incident: the fact that it was an illegal experiment.\nIn reality, the military giant that Sesa and his brother worked for did not focus on Originium firearms that can only be used by a select few, as the versatility and lethality of such weapons generally fell short of just applying Originium Arts to traditional crossbows. Though the most crucial information can only be understood by Columbian military and government officials, according to some contacts, we have every reason to believe that the project the two brothers pursued is the same one that Sesa has mastered – eliminate the high barrier of entry of using Originium firearms. This can also explain why the company has not faced any backlash from either the government or the private sector despite such a major accident. The person in charge of the ill-fated experiment has even risen through the ranks, becoming a point of resistance that even Rhodes Island cannot continue to investigate.\nIt must be noted that even though Sesa's work has been described with awe on the black market, all he can do is enhance existing weaponry. Though Sesa might come closer to it than most people, the idea of "letting anyone pick up an Originium firearm even without being able to use Arts" is inherently not feasible and not allowed. Originium-based technology might still have its limitations, but if certain people throughout Terra catch wind of these developments and attempt to use this technology to escalate geopolitical conflicts, there is no telling what kind of brutal, all-consuming wars we may face in the future.\n"The power I deliver is growing closer to the real deal, and it is both dangerous and eye-catching... So, uh, that's why it's absolutely necessary to keep this technology under wraps!" He explained it himself.\nBut if this is true, is it possible that the person responsible for the accident that buried Sesa's brother... Sesa himself? Despite attempts to verify this, Rhodes Island has no right to pry into a subject that he seeks to avoid.` },
    { title: 'Promotion Record', content: `"Sesa is not at all some kind of delusional patient. I've seen his meticulous enhancements, masterpieces of minimalist pragmatism. His genius far eclipses what we originally thought."\n"What? But he's always..."\n"This is a bit of a joke, but I think even the jokes he makes are completely serious."\n"Then why's he always spouting that nonsense about souls and true power? Besides, he's the one who can't even keep a straight face. Why not just admit he's a super genius?"\n"He's faking it."\n"Why?"\n"How would I know? He's too good at faking it."` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/artilleryman-branch.png', factionIcon: '/icons/factions/sargon.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/sesa/base.png', chibiSrc: '/operators/sesa/chibi.webm', chibiMoveSrc: '/operators/sesa/chibi-move.webm', chibiFraming: { scale: 1.32, offsetXPercent: 0.9, offsetYPercent: 2.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'e2', label: 'Elite 2', src: '/operators/sesa/e2.png', chibiSrc: '/operators/sesa/chibi.webm', chibiMoveSrc: '/operators/sesa/chibi-move.webm', chibiFraming: { scale: 1.32, offsetXPercent: 0.9, offsetYPercent: 2.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    // fexli/ArknightsResource has no separate dorm Spine build for "To Evoke the Anima" (skin1) —
    // only one char_379_sesa build folder exists in the repo — so this skin reuses the base chibi as a placeholder.
    { id: 'skin1', label: 'To Evoke the Anima', src: '/operators/sesa/skin1.png', chibiSrc: '/operators/sesa/chibi.webm', chibiMoveSrc: '/operators/sesa/chibi-move.webm', chibiFraming: { scale: 1.32, offsetXPercent: 0.9, offsetYPercent: 2.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
  ],
  portrait: '/operators/sesa/portrait.png',
  portraitFocus: { y: 9.3, x: 42.7, zoom: 414 },
}

export default sesa
