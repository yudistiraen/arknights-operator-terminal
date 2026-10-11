import type { Operator } from '../../types'

const jackie: Operator = {
  name: 'Jackie', fileNo: 'R166', class: 'Guard', branch: 'Fighter', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Columbia', position: 'Melee', race: 'Perro', gender: 'Female', birthplace: 'Columbia',
  birthday: 'September 15th', height: '157 cm', combatExp: 'None', infectionStatus: "Originium crystals are present on the body's surface, confirmed Infected by medical examination.", illustrator: 'Nagu',
  cv: { JP: 'Sayumi Suzushiro', CN: 'Qiwen (credited as "Ellen Wang" in EN)', EN: 'Jessica Hann', KR: 'Yeo Min-jung' },
  trait: 'Blocks 1 enemy',
  tags: ['DPS'],
  stats: { hp: 2278, atk: 529, def: 308, res: 0, block: 1, cost: 9, aspd: '0.78s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Extreme Evasion', desc: '15% Physical Dodge. After a successful dodge, gains +6 ASPD (lasts for 5s, does not stack)', elite: 'E1' },
    { name: 'Extreme Evasion', desc: '18% (+3%) Physical Dodge. After a successful dodge, gains +6 ASPD (lasts for 5s, does not stack)', elite: 'E1 (Potential 5)' },
    { name: 'Extreme Evasion', desc: '30% Physical Dodge. After a successful dodge, gains +12 ASPD (lasts for 5s, does not stack)', elite: 'E2' },
    { name: 'Extreme Evasion', desc: '33% (+3%) Physical Dodge. After a successful dodge, gains +12 ASPD (lasts for 5s, does not stack)', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Grit Those Teeth!', icon: '/operators/jackie/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'Increases the ATK of next attack to 250%', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: 'Increases the ATK of next attack to 150%', spInit: 0, sp: 5 },
        { level: '2', desc: 'Increases the ATK of next attack to 160%', spInit: 0, sp: 5 },
        { level: '3', desc: 'Increases the ATK of next attack to 170%', spInit: 0, sp: 5 },
        { level: '4', desc: 'Increases the ATK of next attack to 180%', spInit: 0, sp: 4 },
        { level: '5', desc: 'Increases the ATK of next attack to 190%', spInit: 0, sp: 4 },
        { level: '6', desc: 'Increases the ATK of next attack to 200%', spInit: 0, sp: 4 },
        { level: '7', desc: 'Increases the ATK of next attack to 210%', spInit: 0, sp: 3 },
        { level: 'M1', desc: 'Increases the ATK of next attack to 220%', spInit: 0, sp: 3 },
        { level: 'M2', desc: 'Increases the ATK of next attack to 230%', spInit: 0, sp: 3 },
        { level: 'M3', desc: 'Increases the ATK of next attack to 250%', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Pay Close Attention!', icon: '/operators/jackie/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking and gains 70% Physical dodge; After a successful dodge, counterattacks the enemy for 160% ATK as Physical damage (Counterattack frequency cannot be faster than 50% of the attack interval)', spInit: 15, sp: 30, dur: '18s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Stops attacking and gains 40% Physical dodge; After a successful dodge, counterattacks the enemy for 120% ATK as Physical damage (Counterattack frequency cannot be faster than 100% of the attack interval)', spInit: 0, sp: 40, dur: '10s' },
        { level: '2', desc: 'Stops attacking and gains 40% Physical dodge; After a successful dodge, counterattacks the enemy for 125% ATK as Physical damage (Counterattack frequency cannot be faster than 100% of the attack interval)', spInit: 0, sp: 40, dur: '10s' },
        { level: '3', desc: 'Stops attacking and gains 40% Physical dodge; After a successful dodge, counterattacks the enemy for 130% ATK as Physical damage (Counterattack frequency cannot be faster than 100% of the attack interval)', spInit: 0, sp: 40, dur: '10s' },
        { level: '4', desc: 'Stops attacking and gains 50% Physical dodge; After a successful dodge, counterattacks the enemy for 135% ATK as Physical damage (Counterattack frequency cannot be faster than 80% of the attack interval)', spInit: 10, sp: 38, dur: '10s' },
        { level: '5', desc: 'Stops attacking and gains 50% Physical dodge; After a successful dodge, counterattacks the enemy for 140% ATK as Physical damage (Counterattack frequency cannot be faster than 80% of the attack interval)', spInit: 10, sp: 38, dur: '10s' },
        { level: '6', desc: 'Stops attacking and gains 50% Physical dodge; After a successful dodge, counterattacks the enemy for 145% ATK as Physical damage (Counterattack frequency cannot be faster than 80% of the attack interval)', spInit: 10, sp: 38, dur: '10s' },
        { level: '7', desc: 'Stops attacking and gains 60% Physical dodge; After a successful dodge, counterattacks the enemy for 150% ATK as Physical damage (Counterattack frequency cannot be faster than 60% of the attack interval)', spInit: 15, sp: 35, dur: '15s' },
        { level: 'M1', desc: 'Stops attacking and gains 60% Physical dodge; After a successful dodge, counterattacks the enemy for 155% ATK as Physical damage (Counterattack frequency cannot be faster than 60% of the attack interval)', spInit: 15, sp: 30, dur: '16s' },
        { level: 'M2', desc: 'Stops attacking and gains 60% Physical dodge; After a successful dodge, counterattacks the enemy for 160% ATK as Physical damage (Counterattack frequency cannot be faster than 60% of the attack interval)', spInit: 15, sp: 30, dur: '17s' },
        { level: 'M3', desc: 'Stops attacking and gains 70% Physical dodge; After a successful dodge, counterattacks the enemy for 160% ATK as Physical damage (Counterattack frequency cannot be faster than 50% of the attack interval)', spInit: 15, sp: 30, dur: '18s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Jackie's Badge", desc: 'Appointed as Guard Operator to exercise Fighter responsibilities' },
    fgtx: { code: 'FGT-X', name: 'D32 Steel Chair', stages: [
      { stage: 1, hp: '+120', atk: '+20', def: '+10', effect: 'New trait: Blocks 1 enemy; Has 15% Physical Dodge' },
      { stage: 2, hp: '+130', atk: '+25', def: '+15', effect: 'Extreme Evasion improved: Gains 35% Physical Dodge; After a successful dodge, gains +12 ASPD (Lasts for 5s, does not stack)' },
      { stage: 3, hp: '+140', atk: '+30', def: '+20', effect: 'Extreme Evasion improved: Gains 37% Physical Dodge; After a successful dodge, gains +12 ASPD (lasts for 5s, does not stack)' },
    ]},
  },
  profile: `A former Columbian auxiliary police officer who came to Rhodes Island to receive treatment after contracting Oripathy.\nWith her father's consent, she joined Rhodes Island as an operator, displaying above average talent in close combat and participating in various missions.`,
  story: `A former Columbian Perro policewoman, Jackie is the daughter of a distinguished police officer whose deeds she always share with others. She contracted Oripathy while she was aiding distressed citizens off-duty, but thanks to her routine calisthenics and quick treatment, she managed to keep the disease in check. However, Jackie ended up being taken to Rhodes Island by her father for further treatment. Vigorous yet friendly and well-mannered, Jackie is also a capable pugilist. She always carries her trusty PT-29 handgun alongside her —Courtesy of Rhodes Island's Engineering Department— but due to her background as an auxiliary officer, she prefers her fists to do the talking.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 3%\nDue to short infection duration, only small traces of infection are visible on the surface of the body.\n[Blood Originium-Crystal Density] 0.16u/L\nThanks to timely treatment and physical fitness, the current prognosis is optimistic. With regular treatment, there will not be much burden on the body.` },
    { title: 'Archive File 1', content: `An energetic Perro girl.\nShe is always full of vigor and never remains down for long. As she acts friendly to everyone, she is well-liked by most operators and some older operators even treat her as a cherished sister or daughter.\nShe enjoys regaling others with stories of her father's glorious deeds.` },
    { title: 'Archive File 2', content: `As everyone knows, most Infected are able to cast Arts without the help of an Arts Unit.\nOn one hand, this is equivalent to using the Originium within one's body for casting Arts, which is likely to exacerbate one's Oripathy. On the other hand, mildly infected individuals like Jackie aren't able to channel much energy for Arts.\nFor this reason, even Infected Casters often prefer to cast Arts through an Arts Unit whenever possible. Similarly, Rhodes Island provides an Arts Unit to every Caster operator.\n——In fact, the Engineering Department is very passionate about designing Arts Units of all shapes and sizes. One of their favorite pastimes is developing "Arts Units" that look nothing like conventional units— and often don't work at all.\nThe Arts Unit that hangs at Jackie's waist, gun-type Arts Unit PT-29, is the pride of the Engineering Department.\nRegrettably, even though Jackie applied for such an Arts Unit, it is only due to a habit formed while serving as an auxiliary police officer. Jackie herself is incredibly uninterested in the subject of Arts and her scores are very disappointing. Because of this, this Arts Unit is mostly an accessory to this day.` },
    { title: 'Archive File 3', content: `According to Jackie, her mother passed away from complications during her birth and she was single-handedly raised by her father. Jackie greatly reveres her father.\nShe will happily describe in great detail how amazing of a policeman her father is, how many people he's helped and what accolades he's received. Some of her teammates can even recite her entire speech from beginning to end by heart now.\nHer story may be hyperbolic to some extent, but her father was still willing to bring his own infected daughter to Rhodes Island in person. Throughout his short stay in Rhodes Island, he never openly displayed any animosity towards the other Infected, and even remained agreeable to his daughter joining Rhodes Island after learning about some of Rhodes Island's more dubious activities. At the very least, he is not overly biased towards the Infected, even if he is just exercising self-restraint. That alone is already very rare amongst the non-Infected.\nJackie's good manners and lively attitude in daily life is likely also a result of her father's teachings.\nFrom that perspective, her father is indeed a policeman worth respecting, and a good father.` },
    { title: 'Archive File 4', content: `Some people hold on to their hatred of the Infected even when they've become Infected themselves. Contrarily, some never hold much enmity towards the Infected, even while they're still uninfected.\nJackie is one of those people.\nPerhaps as a result of her father's teachings, Jackie has never treated the Infected with hostility, unlike most other people. After overcoming her initial horror, she was able to quickly come to terms with her new identity as an Infected.\nIt is possible that since she was showered in love from a young age, Jackie has a great capacity for love towards others——This can be considered a legitimate ability, as rare as it is. After coming to Rhodes Island, not only did this ability allow her to befriend others easily, it also gave her a new goal——To help the other Infected.\nBesides curing her Oripathy, she also wants to lend a hand to the other Infected. To her, it is only natural to do so.` },
    { title: 'Promotion Record', content: `The things we encounter and the people we meet often leave me with a sense of foreboding, afraid that our efforts towards a brighter future are all for naught.\nHowever, whenever I see a youngster like Jackie brimming with purity, kindness and vigor, I am reminded of my conviction: To guide these youngsters along the path of learning, so that they may gain more knowledge of the world, and help make it a better place.\n––Instructor Guericke's remarks towards Jackie in her Intermediate General Studies class` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/fighter-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/jackie/base.png', chibiSrc: '/operators/jackie/chibi.webm', chibiMoveSrc: '/operators/jackie/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Nagu' },
    { id: 'e2', label: 'Elite 2', src: '/operators/jackie/e2.png', chibiSrc: '/operators/jackie/chibi.webm', chibiMoveSrc: '/operators/jackie/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Nagu' },
    { id: 'skin1', label: 'Take a Leap', src: '/operators/jackie/skin1.png', chibiSrc: '/operators/jackie/chibi-skin1.webm', chibiMoveSrc: '/operators/jackie/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Nagu' },
  ],
}

export default jackie
