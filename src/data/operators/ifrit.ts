import type { Operator } from '../../types'
import ifritVoice from '../voices/ifrit'

const ifrit: Operator = {
  name: 'Ifrit', fileNo: 'RL03', class: 'Caster', branch: 'Blast Caster', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhine Lab', position: 'Ranged', race: 'Sarkaz', gender: 'Female', birthplace: 'Unknown',
  birthday: 'July 22nd', height: '159 cm', combatExp: 'None', infectionStatus: 'Crystals have appeared on her body. Infection confirmed by medical examination.', illustrator: 'NoriZC',
  cv: { JP: 'Yumiri Hanamori', CN: 'Qiwen', EN: 'Jennifer Sun Bell', KR: 'Soyeon' },
  voice: ifritVoice,
  trait: 'Deals AOE Arts damage in a long line',
  tags: ['AoE', 'Debuff'],
  stats: { hp: 1680, atk: 870, def: 130, res: 20, block: 1, cost: 34, aspd: '2.9s', rdp: '70s' },
  range: {
    base: [
      [2,1,1,1,1],
    ],
    e1: [
      [2,1,1,1,1,1],
    ],
    e2: [
      [2,1,1,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Flawed', 'Combat Skill': 'Normal', 'Originium Arts': 'Outstanding' },
  talents: [
    { name: 'Spiritual Dissolution', desc: 'RES of enemies within range -40%', elite: 'E2' },
    { name: 'Rhine Loop', desc: 'Restores 2 extra Skill Points every 6 seconds', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Fanaticism', icon: '/operators/ifrit/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: 'ATK +20%; ASPD +80', spInit: 20, sp: 40, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +10%; ASPD +45', spInit: 0, sp: 50, dur: '20s' },
        { level: '2', desc: 'ATK +10%; ASPD +48', spInit: 0, sp: 49, dur: '20s' },
        { level: '3', desc: 'ATK +10%; ASPD +50', spInit: 0, sp: 48, dur: '20s' },
        { level: '4', desc: 'ATK +10%; ASPD +58', spInit: 10, sp: 47, dur: '20s' },
        { level: '5', desc: 'ATK +10%; ASPD +61', spInit: 10, sp: 46, dur: '20s' },
        { level: '6', desc: 'ATK +10%; ASPD +64', spInit: 10, sp: 45, dur: '20s' },
        { level: '7', desc: 'ATK +20%; ASPD +67', spInit: 15, sp: 44, dur: '20s' },
        { level: 'M1', desc: 'ATK +20%; ASPD +70', spInit: 15, sp: 43, dur: '20s' },
        { level: 'M2', desc: 'ATK +20%; ASPD +75', spInit: 15, sp: 42, dur: '20s' },
        { level: 'M3', desc: 'ATK +20%; ASPD +80', spInit: 20, sp: 40, dur: '20s' },
      ],
    },
    {
      name: 'Pyroclasm', icon: '/operators/ifrit/skill-2.png', activation: 'Auto', recovery: 'Auto',
      desc: "Deals 250% of ATK Arts damage in the next attack; Targets' DEF -300 for 3 seconds; Causes them to take Immolation Damage\nCan store 3 charge(s)", spInit: 0, sp: 7, rank: 'M3',
      note: "Pyroclasm noticeably increases the windup of Ifrit's next attack. Immolation damage is a damage-over-time debuff that lasts for the same duration as the DEF debuff and deals Arts damage equal to 33% of Ifrit's ATK every second.",
      levels: [
        { level: '1', desc: "Deals 130% of ATK Arts damage in the next attack; Targets' DEF -100 for 3 seconds; Causes them to take Immolation Damage\nCan store 2 charge(s)", spInit: 0, sp: 9 },
        { level: '2', desc: "Deals 140% of ATK Arts damage in the next attack; Targets' DEF -100 for 3 seconds; Causes them to take Immolation Damage\nCan store 2 charge(s)", spInit: 0, sp: 9 },
        { level: '3', desc: "Deals 150% of ATK Arts damage in the next attack; Targets' DEF -100 for 3 seconds; Causes them to take Immolation Damage\nCan store 2 charge(s)", spInit: 0, sp: 9 },
        { level: '4', desc: "Deals 160% of ATK Arts damage in the next attack; Targets' DEF -100 for 3 seconds; Causes them to take Immolation Damage\nCan store 2 charge(s)", spInit: 0, sp: 8 },
        { level: '5', desc: "Deals 170% of ATK Arts damage in the next attack; Targets' DEF -100 for 3 seconds; Causes them to take Immolation Damage\nCan store 2 charge(s)", spInit: 0, sp: 8 },
        { level: '6', desc: "Deals 180% of ATK Arts damage in the next attack; Targets' DEF -100 for 3 seconds; Causes them to take Immolation Damage\nCan store 2 charge(s)", spInit: 0, sp: 8 },
        { level: '7', desc: "Deals 190% of ATK Arts damage in the next attack; Targets' DEF -200 for 3 seconds; Causes them to take Immolation Damage\nCan store 3 charge(s)", spInit: 0, sp: 8 },
        { level: 'M1', desc: "Deals 215% of ATK Arts damage in the next attack; Targets' DEF -200 for 3 seconds; Causes them to take Immolation Damage\nCan store 3 charge(s)", spInit: 0, sp: 7 },
        { level: 'M2', desc: "Deals 225% of ATK Arts damage in the next attack; Targets' DEF -200 for 3 seconds; Causes them to take Immolation Damage\nCan store 3 charge(s)", spInit: 0, sp: 7 },
        { level: 'M3', desc: "Deals 250% of ATK Arts damage in the next attack; Targets' DEF -300 for 3 seconds; Causes them to take Immolation Damage\nCan store 3 charge(s)", spInit: 0, sp: 7 },
      ],
    },
    {
      name: 'Scorched Earth', icon: '/operators/ifrit/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Deals 140% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -20\nThis unit loses 2% Max HP every second", spInit: 0, sp: 28, dur: '20s', rank: 'M3',
      note: "The RES debuff lasts for 1 second and is applied before Spiritual Dissolution's. The HP loss only ticks 19 times during the 20 second skill, for a total loss of 38% rather than 40%.",
      levels: [
        { level: '1', desc: 'Deals 75% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -7\nThis unit loses 2% Max HP every second', spInit: 0, sp: 40, dur: '20s' },
        { level: '2', desc: 'Deals 80% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -7\nThis unit loses 2% Max HP every second', spInit: 0, sp: 39, dur: '20s' },
        { level: '3', desc: 'Deals 85% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -7\nThis unit loses 2% Max HP every second', spInit: 0, sp: 38, dur: '20s' },
        { level: '4', desc: 'Deals 90% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -7\nThis unit loses 2% Max HP every second', spInit: 0, sp: 36, dur: '20s' },
        { level: '5', desc: 'Deals 95% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -7\nThis unit loses 2% Max HP every second', spInit: 0, sp: 35, dur: '20s' },
        { level: '6', desc: 'Deals 100% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -7\nThis unit loses 2% Max HP every second', spInit: 0, sp: 34, dur: '20s' },
        { level: '7', desc: 'Deals 110% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -10\nThis unit loses 2% Max HP every second', spInit: 0, sp: 31, dur: '20s' },
        { level: 'M1', desc: 'Deals 120% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -13\nThis unit loses 2% Max HP every second', spInit: 0, sp: 30, dur: '20s' },
        { level: 'M2', desc: 'Deals 130% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -16\nThis unit loses 2% Max HP every second', spInit: 0, sp: 29, dur: '20s' },
        { level: 'M3', desc: 'Deals 140% ATK as Arts damage to ground enemies within Attack Range every second, and reduce their RES by -20\nThis unit loses 2% Max HP every second', spInit: 0, sp: 28, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Ifrit's Badge", desc: 'Appointed as Caster Operator to exercise Blast Caster responsibilities' },
    blax: { code: 'BLA-X', name: 'Syntexis', stages: [
      { stage: 1, atk: '+50', aspd: '+5', effect: 'New trait: Attacks deal extremely long-ranged AoE Arts damage; damage dealt increases with distance, up to 110%' },
      { stage: 2, atk: '+64', aspd: '+6', effect: 'Rhine Loop improved: Restores 2 SP every 6 seconds, with a 20% chance to restore an additional 5 SP' },
      { stage: 3, atk: '+72', aspd: '+7', effect: 'Rhine Loop improved: Restores 2 SP every 6 seconds, with a 30% chance to restore an additional 5 SP' },
    ]},
    blad: { code: 'BLA-D', name: 'Thermoformed Memory', stages: [
      { stage: 1, hp: '+120', atk: '+45', effect: 'New trait: When dealing Arts damage, deals an additional 8% as Burn' },
      { stage: 2, hp: '+165', atk: '+60', effect: 'Spiritual Dissolution improved: if target is under the burst effect of Burn, attacks deal an additional 40% ATK as Elemental Damage' },
      { stage: 3, hp: '+200', atk: '+70', effect: 'Spiritual Dissolution improved: Elemental Damage bonus increased to 50% ATK' },
    ]},
  },
  story: `Ifrit is a test subject of Rhine Lab and Haydn Pharmaceutical created through genetical engineering by implanting the "shards" of the extinct Diablo into her Savran body. Her own presence is the solid evidence of Columbia's attempt to weaponize Originium. Following Haydn's meltdown after her rampage, Prof. Ahrens Parvis of Rhine Lab secretly continued the experiment by intentionally implanting Originium ores inside Ifrit's body under the guise of a therapy. However, the inhumane experiments on her led to a series of events known as the "Diαbolic Crisis" occured in the year 1095 where she repeated her mistake in Haydn by almost burning down R.L.'s facilities. Following the Crisis, Dr. Olivia Silence took care of Ifrit as she joined Rhodes Island to protect her from R.L. Specifically, Silence wants to keep her from the hands of her mentor Prof. Parvis and Saria, the one Silence blamed the most for initiating the project with Kristen Wright and the one who almost killed Ifrit during the Crisis.\n\nIfrit also fights alongside Operators with a flamethrower-like weapon channeling her pyrokinetic Originium Arts in combat. Outside the battlefield, she often exhibits pyromaniac behavior which becomes a problem to many R.I. personnel including the Doctor and Shaw.`,
  profile: `Ifrit was once treated by Rhine Lab. She is suffering from a serious case of the infection. Her Originium adaptability is very high and she has a fiery appearance. There is no record of what she was doing before she entered Rhine Lab.\nCurrently, she is receiving treatment at Rhodes Island. She is being taken care of by Silence.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 19%\nPatient's body has exhibited multiple crystallizations with lesions appearing throughout the body. The patient's infection is currently properly controlled and crystals show no sign of spreading.\n\n[Blood Originium-Crystal Density] 0.51u/L\nBlood Crystal Density is slowly increasing and is currently being managed by a secondary treatment regimen issued by the Medic Team.`,
    },
    {
      title: 'Archive File 1',
      content: `Ifrit is an Operator who is difficult to describe.\nWhat is currently known about her: Before she transferred to Rhodes Island for treatment, she had already received a long period of treatment at Rhine Lab. Judging by Ifrit's current symptoms, we can at least tell that the treatment did not succeed.\nAs one of the Rhodes Island medical team's more critical patients, Ifrit primarily receives care from Silence. This is consistent with information currently available from their time at Rhine Lab. Even after coming to Rhodes Island, the two have maintained the close relationship they built when they were both at Rhine Lab.\nIn terms of personality, Ifrit is a bit... immature. She acts like a 6-10 year old and is rebellious, impetuous, overly confident most of the time, and it could even be said she is egotistical. She is the kind of person to do something the second the idea pops into her mind, regardless of how dangerous it might be.\nOn the other hand, the outstanding form her Originium Arts take must be supported. Rhine Lab even created a flame-casting wand device to complement this talent. This gift pushed Ifrit to show off her abilities with even more bombast.\nIn short, after daily observation, we can say that Ifrit is someone who easily gets caught up in emotions. For now, she doesn't have the ability to distinguish between right and wrong, and she's quite immature. In an extreme environment such as a battlefield, her instincts impel her to fight against and even annihilate all those who get in her way. As a result, even if saving people was not her original intention, she has saved many.`,
    },
    {
      title: 'Archive File 2',
      content: `According to the information we have available, Ifrit is a member of the Sarkaz race. However, the structure of her horns and her tail are quite different from normal Sarkaz. Even though current research on the Sarkaz and their traits is incomplete, at least compared to the other Sarkaz present at Rhodes Island, Ifrit's characteristics are quite unique.\nThe Sarkaz race maintains a certain amount of talent when it comes to Originium Arts, and Ifrit's talent far exceeds that of most Sarkaz.\nAccording to these observations, it is probable that Ifrit's racial characteristics have undergone some superficial changes triggered by her Oripathy. It's also possible that the Originium presence in her circulatory system is interfering with test results. These changes are irreversible and have led to an unexpected obstacle for the medical department's investigation: they are unable to determine which type of Sarkaz Ifrit is.\nIn addition, Ifrit's medical records show that she suffers from chronic muscle pain and even occasional hallucinations. It's possible that her irascible attitude may stem from the anxiety caused by the onset of pain.\nIn summary, Ifrit is an Operator that needs close monitoring, even at Rhodes Island. Anyone who comes into contact with Ifrit should have a full understanding of all this Operator's basic information before their exchange takes place.\n[Classified Log]\nThis record exists because Ifrit's physiological structure has already become quite strange.\nShe was a Sarkaz, but whether she is still indeed Sarkaz, I am unsure... This sudden feeling I have is difficult to sum up...`,
    },
    {
      title: 'Archive File 3',
      content: `Ifrit's Flame Emitter\nManufacturer: Unknown\nProduced at: Unknown\nProduct Number: W-0502\nIdentification Code: Rhine Lab – Department of Life Sciences – RHSKWD117D3983CIR\nProduct Description:\nThis product uses compressed and liquified Originium as fuel. Pathogenicity: Strong.\nHow to use: Paired with an Originium Arts, it uses multiple ignition points to start a flame.\nSpray Distance: 15 meters.\nThis object contains a large amount of energy substance that is flammable and explosive. Experiments cannot be conducted with this object without proper approval. Violators will be dealt with by the Security and Defense Division.\n[Classified Log]\nThe flame emitter used by Ifrit is unquestionably one of Rhine Lab's finest works. What a wretched thing...\nIt's impossible to tell that just a few cubic meters of the Originium contained within this thing would be enough to infect an entire building full of people!\nThe Base Construction Division has already "purified" this object. As for how they did it, you don't need to know.\nPoor child. Who could have given her such a murderous thing?\nWhoever it was, they deserve a vicious beating!`,
    },
    {
      title: 'Archive File 4',
      content: `Transcript of a dispute:\n"I've already learned how to control my power. I'm going to show her. I'm going to show her right now.\nSaria's going to be scared senseless when she sees me now!"\n"You can't — You need to understand—"\n"Haven't I been a big help to the Doctor?\nThere's lots of stuff I know how to do, right?!\nI...I know my power can —\nThe doctor told me so —"\n"......\nIfrit.\nGo back to your room. Now...\n......Okay? Please."\n"I —\n......"\n— June 21st, Rhodes Island Medical Department, Dr. Silence's Office.\n[Classified Log]\nDoctor... I have set this message as private so that only you can read it.\nIfrit, she...\nThat child, she truly does like being around me. Although she causes a lot of trouble, I...\nI'm sorry, Doctor. I know Ifrit can take things too far sometimes.\nBut that child has learned a lot from you, from your guidance.\nShe is trying to get better, because she sensed your expectations of her. You are expecting her to change, right?\nThe way you treat her lets her feel that she isn't so different from everyone else, for the first time in her life.\nShe is no longer a child who has been forcibly separated from others.\nShe... She's learned to laugh. Not the kind of smile intended to scare others. It's not a scary smile.\nThat was the first time I saw her give me and the others a real smile.\nShe's gradually getting used to this life. It's very rare to see her depend on someone like this, even if she hasn't realized it yet.\n......\nThank you, Doctor. And...please.\nHelp this child.\nHelp her find some happiness in life.\nEven if she can only find a little...`,
    },
    {
      title: 'Promotion Record',
      content: `"Uh, about before... When I burned those books in your office... I'm really sorry.\nAlso... I'm sorry for putting all those holes in your uniform.\nIs this how I'm supposed to apologize? This is a good apology, right?\nUh... Well, I'm going back to my room now. Anyway, I won't come see you again until I've got myself under control!"\n— Doctor's Office.\nA rough paper with Ifrit's crooked handwriting, a broken fountain pen, a burnt book, and some candy offered as an apology were left upon the office desk.`,
    },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/blast-caster-branch.png', factionIcon: '/icons/factions/rhine-lab.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/ifrit/base.png', chibiSrc: '/operators/ifrit/chibi.webm', chibiMoveSrc: '/operators/ifrit/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'e2', label: 'Elite 2', src: '/operators/ifrit/e2.png', chibiSrc: '/operators/ifrit/chibi.webm', chibiMoveSrc: '/operators/ifrit/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin1', label: "Children's Party", src: '/operators/ifrit/skin1.png', chibiSrc: '/operators/ifrit/chibi-skin1.webm', chibiMoveSrc: '/operators/ifrit/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin2', label: 'Sunburn SS.SP', src: '/operators/ifrit/skin2.png', chibiSrc: '/operators/ifrit/chibi-skin2.webm', chibiMoveSrc: '/operators/ifrit/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin3', label: 'Relaxing Trip', src: '/operators/ifrit/skin3.png', chibiSrc: '/operators/ifrit/chibi.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '折射镜' },
  ],
  portrait: '/operators/ifrit/portrait.png',
  portraitFocus: { y: -9.2, x: 41.8, zoom: 281 },
}

export default ifrit
