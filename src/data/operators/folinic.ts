import type { Operator } from '../../types'

const folinic: Operator = {
  name: 'Folinic', fileNo: 'R133', class: 'Medic', branch: 'Medic', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Event Reward'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Ursus',
  birthday: 'August 18th', height: '164 cm', combatExp: 'Half-year mock combat training', infectionStatus: 'Infected', illustrator: 'm9nokuro',
  cv: { JP: 'Reina Kondo', CN: 'Fumeng Ruowei', EN: 'Skyler Davenport', KR: 'Lee Bo-hee' },
  trait: 'Restores the HP of allies',
  tags: ['Healing', 'DPS'],
  stats: { hp: 1585, atk: 479, def: 133, res: 0, block: 1, cost: 21, aspd: '2.85s', rdp: '80s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Drug Inhibition Technique', desc: 'Gains status resistance and -40% damage taken from environmental effects', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Max-Dosage Infusion', icon: '/operators/folinic/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Range +2 tiles; ATK +80%', spInit: 20, sp: 30, dur: '40s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Range +1 tiles; ATK +20%', spInit: 10, sp: 40, dur: '40s' },
        { level: '2', desc: 'Range +1 tiles; ATK +25%', spInit: 11, sp: 39, dur: '40s' },
        { level: '3', desc: 'Range +1 tiles; ATK +30%', spInit: 12, sp: 38, dur: '40s' },
        { level: '4', desc: 'Range +1 tiles; ATK +35%', spInit: 13, sp: 37, dur: '40s' },
        { level: '5', desc: 'Range +1 tiles; ATK +40%', spInit: 14, sp: 36, dur: '40s' },
        { level: '6', desc: 'Range +1 tiles; ATK +45%', spInit: 15, sp: 35, dur: '40s' },
        { level: '7', desc: 'Range +1 tiles; ATK +50%', spInit: 16, sp: 34, dur: '40s' },
        { level: 'M1', desc: 'Range +2 tiles; ATK +60%', spInit: 17, sp: 33, dur: '40s' },
        { level: 'M2', desc: 'Range +2 tiles; ATK +70%', spInit: 18, sp: 32, dur: '40s' },
        { level: 'M3', desc: 'Range +2 tiles; ATK +80%', spInit: 20, sp: 30, dur: '40s' },
      ],
    },
    {
      name: 'Compound Drug Shell', icon: '/operators/folinic/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heal surrounding allies by 150% of this unit's ATK, and deals 200% Arts damage to enemies", spInit: 20, sp: 40, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 80% of this unit's ATK, and deals 100% Arts damage to enemies`, spInit: 10, sp: 50, dur: '25s' },
        { level: '2', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 85% of this unit's ATK, and deals 110% Arts damage to enemies`, spInit: 11, sp: 49, dur: '25s' },
        { level: '3', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 90% of this unit's ATK, and deals 120% Arts damage to enemies`, spInit: 12, sp: 48, dur: '25s' },
        { level: '4', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 100% of this unit's ATK, and deals 130% Arts damage to enemies`, spInit: 13, sp: 47, dur: '26s' },
        { level: '5', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 105% of this unit's ATK, and deals 140% Arts damage to enemies`, spInit: 14, sp: 46, dur: '26s' },
        { level: '6', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 110% of this unit's ATK, and deals 150% Arts damage to enemies`, spInit: 15, sp: 45, dur: '26s' },
        { level: '7', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 120% of this unit's ATK, and deals 160% Arts damage to enemies`, spInit: 16, sp: 44, dur: '27s' },
        { level: 'M1', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 130% of this unit's ATK, and deals 170% Arts damage to enemies`, spInit: 17, sp: 43, dur: '28s' },
        { level: 'M2', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 140% of this unit's ATK, and deals 180% Arts damage to enemies`, spInit: 18, sp: 42, dur: '29s' },
        { level: 'M3', desc: `Attacks instead fire a Compound Drug Shell (prioritizes enemies); when the shell hits, heals surrounding allies by 150% of this unit's ATK, and deals 200% Arts damage to enemies`, spInit: 20, sp: 40, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Folinic's Badge", desc: 'Appointed as Medic Operator to exercise Medic responsibilities' },
    phyy: { code: 'PHY-Y', name: "Mother's Cravat", stages: [
      { stage: 1, hp: '+70', aspd: '+4', effect: 'New trait: Healing increased by 15% when healing a ground unit' },
      { stage: 2, hp: '+100', aspd: '+5', effect: 'Drug Inhibition Technique improved: Gains status resistance and -40% damage taken from environmental effects. Other allies within range take -15% damage from environmental effects' },
      { stage: 3, hp: '+120', aspd: '+6', effect: 'Drug Inhibition Technique improved: Gains status resistance and -40% damage taken from environmental effects. Other allies within range take -25% damage from environmental effects' },
    ]},
  },
  story: `Folinic is Kal'tsit's student. Of course, all medic operators have more or less received Kal'tsit's guidance as long as they are involved in medical tasks or experiments; from this perspective, they are all Kal'tsit's students. But Folinic is special. After Kal'tsit gave her passing marks on her Medic Operator certification, she had HR prepare a special certificate of completion for the young Operator. After receiving it, Folinic placed it in the most conspicuous location in her dorm. Over the course of Folinic's two years of study, Kal'tsit has been personally involved in every one of her course subjects and research projects. In fact, very few people can withstand that degree of academic pressure. Just imagine that one of the heads of Rhodes Island is paying close attention to your academic situation, asking about each of your exams and asking why you got certain questions wrong – yes, most people would find that terrifying. But not Folinic. Rather, she seems to be a naturally good student: earnest, meticulous, and attentive to detail. Of course, she would not know that these excellent qualities would one day cause trouble to others.`,
  profile: "Kal'tsit's most dedicated student, a Feline combat medic from Ursus whose ascetic daily routine masks a deep, carefully controlled grief. Her pharmacological skill cuts both ways — she heals as readily as she incapacitates.",
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 4%\nSeveral traces of infection are visible on the surface of the body.\n\n[Blood Originium-Crystal Density] 0.22u/L\nPatient is at high risk, but disease progresion has been slowed under a managed work schedule and regular treatment.\n\n"Not good enough. I can still do better."\n—Folinic` },
    { title: 'Archive File 2', content: `Many operators who came to see Folinic did not have particularly serious illnesses, and many of them simply wanted to tune-up some sub-clinical maladies – to which Folinic would suggest for them to have a healthy lifestyle. But in fact, what most operators want from medics is just a convenient method to feel better, and not all operators have the luxury of emulating Folinic's lifestyle, namely getting up at 6 every morning and being in bed by 9, running around the deck for an hour every morning, then showering and eating before heading to work — even when no operation is going on.\nBut what is behind this borderline ascetic way of life? Does Folinic really do all this so that she can get a sound night of sleep? According to some operators who have worked with Folinic, "her present must be kept busy to the brim, or she will relapse to the terrible events of the past." Specifically, "if she doesn't exhaust herself during the day, she won't be able to sleep at night."` },
    { title: 'Archive File 3', content: `Folinic studied first to become a researcher rather than an operator. Though she had an interest in hunting and was capable of conducting a hunt in the wild and returning safely, she still had too much to learn as a combat operator. After the Chernobog incident began, Folinic made a request to Kal'tsit in hopes that she could make the preparations to transition into a combat operator as quickly as possible, or at least, that Kal'tsit would allow her to join the battlefield as a combat medic or provisional physician. After Folinic took her physical fitness evaluation, Kal'tsit agreed to her request and had Folinic join the reserve operator training camp, where she trained with the other reserve operators. After half a year, Folinic completed her preparatory training and officially joined Rhodes Island's outpost operation team.\nFolinic considered many ways she could offer her support; she could try to become a sniper, or she could balance her work as a medic and guard; but in the end, she decided to become a combat medic and continue to prioritize medical assistance. However, in her half-year of combat training, she realized that most medics were quite frail and had no combat capabilities once they lost the protection of their comrades. To overcome this, Folinic used her pharmacological knowledge to carefully formulate a number of reagents commonly found in readily-available drugs to treat external injuries. With minor modifications such as increasing the dosage or mixing in different compounds, these drugs could become potent toxins that could incapacitate targets in a very short time.` },
    { title: 'Archive File 4', content: `Folinic is from Ursus, but also carries with her an unabashed hatred of Ursus. Her anger and resentment are not directed at individuals, but rather at the vast political entity that is the "Ursus Empire." As a Feline living in Ursus, Folinic used to live under abhorrent conditions, so bad that all she could do was pursue a single full meal each day. After she followed her mother to Chernobog due to her job, Folinic naively thought that she was about to enjoy a better life. Subsequently, she said to her mother on just another ordinary day, "I'll wait until you're back to cook dinner." But on that day, everything disappeared – her family and her friends, all gone without a trace. Only Kal'tsit, her mentor and the woman who would effectively become her only relative, rescued her from peril and entrusted her to an ordinary family in Chernobog.\nFrom sparse evidence and clues, Folinic pieced together the real cause of her mother's death – Ursus. From that point on, she began to dig deeper, to learn, recognize, understand, and internalize every aspect of what kind of country Ursus is, and each bit of knowledge only further fanned the flames of her anger.\n"My home will always be wherever Dr. Kal'tsit is."` },
    { title: 'Promotion Record', content: `"I've finished the bureaucratic stuff. Starting tomorrow, you can formally begin your job."\n"Thank you, Ma'am."\n"One last thing. Your code name."\n"You need to choose a word that will serve as your identification."\n"Hm, let me think...... How about Folinic?"\n"Sure."\n"You're not going to ask me why, Ma'am?"\n"It's the first word in the medical dictionary you couldn't remember. Although I believe it was just a simple mishap from getting burnt out by all the memorization, it was the first time you made a mistake."\n"In the future, if you have any questions, you can always come find me at my office, just like always."\n"Yes, Ma'am."\n"Well then, congratulations on officially joining us, Operator Folinic."` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/folinic/base.png', chibiSrc: '/operators/folinic/chibi.webm', illustrator: 'm9nokuro' },
    { id: 'e2', label: 'Elite 2', src: '/operators/folinic/e2.png', chibiSrc: '/operators/folinic/chibi.webm', illustrator: 'm9nokuro' },
    { id: 'skin1', label: 'Lasting Arrowroot', src: '/operators/folinic/skin1.png', chibiSrc: '/operators/folinic/chibi-skin1.webm', illustrator: 'm9nokuro' },
  ],
  portrait: '/operators/folinic/portrait.png',
  portraitFocus: { y: -8.2, x: 49.4, zoom: 308 },
}

export default folinic
