import type { Operator } from '../../types'

const indra: Operator = {
  name: 'Indra', fileNo: 'GG03', class: 'Guard', branch: 'Fighter', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Vulcan and Indra Recruitment Voucher'],
  faction: 'Glasgow', position: 'Melee', race: 'Feline', gender: 'Female', birthplace: 'Unknown',
  birthday: 'April 15th', height: '173 cm', combatExp: '7 years', infectionStatus: 'Confirmed Infected by medical examination.', illustrator: 'Infukun',
  cv: { JP: 'Yuko Hara', CN: 'Miao Yang (credited as "Mia Miao" in EN)', EN: 'Polly Eachus', KR: 'Lee Sae-byeok' },
  trait: 'Blocks 1 enemy',
  tags: ['DPS', 'Survival'],
  stats: { hp: 2565, atk: 605, def: 350, res: 0, block: 1, cost: 10, aspd: '0.78s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
    e2: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Quick Fists', desc: "Has a 15% chance to Dodge the enemy's Physical Melee Attack. ATK +80% in the next attack if the Dodge is successful", elite: 'E1' },
    { name: 'Quick Fists', desc: "Has a 30% chance to Dodge the enemy's Physical Melee Attack. ATK +100% in the next attack if the Dodge is successful", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Armorcrusher', icon: '/operators/indra/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: "The ATK of the next hit +140% and ignores 60% of the target's DEF", spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: "The ATK of the next hit +50% and ignores 35% of the target's DEF", spInit: 0, sp: 4 },
        { level: '2', desc: "The ATK of the next hit +60% and ignores 35% of the target's DEF", spInit: 0, sp: 4 },
        { level: '3', desc: "The ATK of the next hit +70% and ignores 35% of the target's DEF", spInit: 0, sp: 4 },
        { level: '4', desc: "The ATK of the next hit +80% and ignores 40% of the target's DEF", spInit: 0, sp: 4 },
        { level: '5', desc: "The ATK of the next hit +90% and ignores 40% of the target's DEF", spInit: 0, sp: 4 },
        { level: '6', desc: "The ATK of the next hit +100% and ignores 40% of the target's DEF", spInit: 0, sp: 4 },
        { level: '7', desc: "The ATK of the next hit +110% and ignores 45% of the target's DEF", spInit: 0, sp: 4 },
        { level: 'M1', desc: "The ATK of the next hit +120% and ignores 50% of the target's DEF", spInit: 0, sp: 4 },
        { level: 'M2', desc: "The ATK of the next hit +130% and ignores 55% of the target's DEF", spInit: 0, sp: 4 },
        { level: 'M3', desc: "The ATK of the next hit +140% and ignores 60% of the target's DEF", spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Sundered Soul', icon: '/operators/indra/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +120%; Damage dealt turns into Arts Damage; Restores HP by 25% of damage dealt when attacking', spInit: 25, sp: 50, dur: '25s', rank: 'M3',
      note: "If the attack did not deal damage to the target (e.g. dodged), the HP recovery will be calculated with Indra's ATK instead of the damage dealt.",
      levels: [
        { level: '1', desc: 'ATK +45%; Damage dealt turns into Arts Damage; Restores HP by 10% of damage dealt when attacking', spInit: 0, sp: 50, dur: '25s' },
        { level: '2', desc: 'ATK +50%; Damage dealt turns into Arts Damage; Restores HP by 10% of damage dealt when attacking', spInit: 0, sp: 50, dur: '25s' },
        { level: '3', desc: 'ATK +55%; Damage dealt turns into Arts Damage; Restores HP by 10% of damage dealt when attacking', spInit: 0, sp: 50, dur: '25s' },
        { level: '4', desc: 'ATK +60%; Damage dealt turns into Arts Damage; Restores HP by 15% of damage dealt when attacking', spInit: 5, sp: 50, dur: '25s' },
        { level: '5', desc: 'ATK +65%; Damage dealt turns into Arts Damage; Restores HP by 15% of damage dealt when attacking', spInit: 5, sp: 50, dur: '25s' },
        { level: '6', desc: 'ATK +70%; Damage dealt turns into Arts Damage; Restores HP by 15% of damage dealt when attacking', spInit: 5, sp: 50, dur: '25s' },
        { level: '7', desc: 'ATK +75%; Damage dealt turns into Arts Damage; Restores HP by 20% of damage dealt when attacking', spInit: 10, sp: 50, dur: '25s' },
        { level: 'M1', desc: 'ATK +90%; Damage dealt turns into Arts Damage; Restores HP by 20% of damage dealt when attacking', spInit: 15, sp: 50, dur: '25s' },
        { level: 'M2', desc: 'ATK +105%; Damage dealt turns into Arts Damage; Restores HP by 20% of damage dealt when attacking', spInit: 20, sp: 50, dur: '25s' },
        { level: 'M3', desc: 'ATK +120%; Damage dealt turns into Arts Damage; Restores HP by 25% of damage dealt when attacking', spInit: 25, sp: 50, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Indra's Badge", desc: 'Operator Indra has demonstrated a remarkable aptitude for asserting the advantage in close-quarters combat.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Guard Operator during field operations to exercise Fighter responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.' },
    fgty: { code: 'FGT-Y', name: "Hannah's Dislocation Rehabilitation Set", stages: [
      { stage: 1, hp: '+120', atk: '+35', effect: 'New trait: Blocks 1 enemy; Gains +10 ASPD when above 50% HP' },
      { stage: 2, hp: '+170', atk: '+45', effect: "Quick Fists improved: Has a 30% chance to Dodge the enemy's Physical Melee Attack. ATK +110% in the next attack if the Dodge is successful" },
      { stage: 3, hp: '+200', atk: '+50', effect: "Quick Fists improved: Has a 30% chance to Dodge the enemy's Physical Melee Attack. ATK +120% in the next attack if the Dodge is successful" },
    ]},
  },
  story: `Indra and Morgan pay a visit to the Lane Brothers' Gang to pay their respects after Lane's injury, though Indra angrily remarks that the cops will not help them and that they should go after the culprit themselves. She is held back by Morgan, who later brings her to a bar, where Indra orders beers for them. Indra remains annoyed that they cannot rely on the cops, who are taking Sudean's side in the conflict. When Morgan reminds Indra that a fight will not solve their problems, Indra hopes that Morgan is right.\nTwo weeks later, Indra and the entire Glasgow Gang are gathered by Siege. Indra paces in circles and demands to know if they are going to get back at the culprits behind Lane's injury, and is shocked to learn that the Lane Brothers are giving up. When Baird says they are taking over the Lane Brothers' territory, Indra questions the plan and asks about Morgan's absence, but is told that it is Morgan's plan. She and Siege later beat four of the seven gangs in Norport into submission. Indra is annoyed when Morgan returns and says she will write down the experience in her memoirs for the others to read. When Siege says that they will not stand by if Londinium casts Norport away, Indra agrees and says that she will punch the fat cats in Central Londinium in the face. Indra then asks Morgan why she did not tell her the plan earlier, causing Morgan to laugh and ask whether the muscles in Indra's brain would have understood.`,
  profile: `The leader of the Glasgow Gang's fighters in Victoria. During the war, she fought courageously alongside Vina Victoria and the Exemplars. After the war, she returned to Norport to continue running the Slobberknocker boxing gym. As one of our main points of contact at Rhodes Island's Victoria office, she is often invited to participate in practical combat training (essentially serving as a sparring partner) and occasionally helps Vina Victoria deliver messages back to Rhodes Island.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n[Cell-Originium Assimilation] 9%\nNo visible Originium crystals have been observed on the surface of Indra's body. Though her disease is currently under control, she needs to be closely monitored.\n[Blood Originium-Crystal Density] 0.19u/L\nIndra was injured during operations in Victoria, and became infected after long-term exposure to high levels of Originium particulate concentration.\nAfter the war, she repeatedly refused the specialized physical exams prepared by Medical. Instead, she directed her colleagues, who had come to volunteer as medics, to treat local citizens first. At least three colleagues have raised objections to her indifference towards her own health.\n"Tons of Londiniers who need help more than I do. 'Sides, I have to book a checkup at some point, else Vina'll duff me up. Again."\n——Operator Indra's reply` },
    { title: 'Archive File 1', content: `Technique was not allowed her to survive for years on the street, but rather raw force and combat instincts. She developed into a great fighter through street brawling since childhood, and her confidence in her own two powerful fists enabled her to defeat countless foes.` },
    { title: 'Archive File 2', content: `Glasgow hung out in the slums of Victoria, getting their start as a street gang led by Morgan and Indra. They carved out their turf and survived in the anarchy, until Siege showed up and handed the supremely confident Indra her first ever defeat.` },
    { title: 'Archive File 3', content: `It wasn't just a simple defeat, since Siege's character and vision converted both Indra and Morgan into loyal friends and cohorts. Even though Siege never liked to pull rank, Indra still saw herself as Siege's most devoted follower and would do anything for her. Who knew a thug too lazy to be bothered with the concept of knighthood would exemplify the spirit far more than the official knights of Kazimierz?` },
    { title: 'Archive File 4', content: `The straightforward Indra hates sly, glib people who play games. Face to face, out in the open, that's what fighting is all about! Only cowards would act like a weasel! Her bold personality has made many like-minded colleagues her buddies at Rhodes Island. They would spar and discuss battles in the gym, then go for a big feast together after a sweaty workout and mock the supposedly "brainy" Operators behind their backs. What else could be better than this in life?` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/fighter-branch.png', factionIcon: '/icons/factions/glasgow.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/indra/base.png', chibiSrc: '/operators/indra/chibi.webm', chibiMoveSrc: '/operators/indra/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
    { id: 'e2', label: 'Elite 2', src: '/operators/indra/e2.png', chibiSrc: '/operators/indra/chibi.webm', chibiMoveSrc: '/operators/indra/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
    { id: 'skin1', label: 'Valiant General', src: '/operators/indra/skin1.png', chibiSrc: '/operators/indra/chibi-skin1.webm', chibiMoveSrc: '/operators/indra/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Infukun' },
  ],
  portrait: '/operators/indra/portrait.png',
}

export default indra
