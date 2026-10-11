import type { Operator } from '../../types'

const nearl: Operator = {
  name: 'Nearl', fileNo: 'FO02', class: 'Defender', branch: 'Guardian', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Followers', position: 'Melee', race: 'Kuranta', gender: 'Female',
  birthplace: 'Kazimierz', birthday: 'April 23rd', height: '171 cm', combatExp: '5 years', infectionStatus: 'Infection confirmed by medical report.', illustrator: '竜崎いち',
  cv: { JP: 'Ayane Sakura', CN: 'Xueting Mu', EN: 'Devora Wilde', KR: 'Kim Ye-rim' },
  trait: 'Can heal allies by using the skill',
  tags: ['Defense', 'Healing'],
  stats: { hp: 2780, atk: 502, def: 625, res: 10, block: 3, cost: 21, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2]],
    e1: [[2]],
    e2: [[2]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Excellent', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Healing Boost', desc: "Nearl's healing effect increases by 10%", elite: 'E1' },
    { name: "Pegasus's Halo", desc: 'Increases the healing effect received by all allies in battlefield by 10% when deployed', elite: 'E2' },
  ],
  skills: [
    {
      name: 'First Aid', icon: '/operators/nearl/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: "The next attack restores HP equal to 180% ATK to a nearby friendly unit with less than 50% HP\nCan store 3 charge(s)", spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: "The next attack restores HP equal to 110% ATK to a nearby friendly unit with less than 50% HP\nCan store 1 charge(s)", spInit: 0, sp: 6 },
        { level: '2', desc: "The next attack restores HP equal to 115% ATK to a nearby friendly unit with less than 50% HP\nCan store 1 charge(s)", spInit: 0, sp: 6 },
        { level: '3', desc: "The next attack restores HP equal to 120% ATK to a nearby friendly unit with less than 50% HP\nCan store 1 charge(s)", spInit: 0, sp: 6 },
        { level: '4', desc: "The next attack restores HP equal to 130% ATK to a nearby friendly unit with less than 50% HP\nCan store 1 charge(s)", spInit: 0, sp: 5 },
        { level: '5', desc: "The next attack restores HP equal to 135% ATK to a nearby friendly unit with less than 50% HP\nCan store 1 charge(s)", spInit: 0, sp: 5 },
        { level: '6', desc: "The next attack restores HP equal to 140% ATK to a nearby friendly unit with less than 50% HP\nCan store 1 charge(s)", spInit: 0, sp: 5 },
        { level: '7', desc: "The next attack restores HP equal to 150% ATK to a nearby friendly unit with less than 50% HP\nCan store 2 charge(s)", spInit: 0, sp: 5 },
        { level: 'M1', desc: "The next attack restores HP equal to 160% ATK to a nearby friendly unit with less than 50% HP\nCan store 2 charge(s)", spInit: 0, sp: 4 },
        { level: 'M2', desc: "The next attack restores HP equal to 170% ATK to a nearby friendly unit with less than 50% HP\nCan store 2 charge(s)", spInit: 0, sp: 4 },
        { level: 'M3', desc: "The next attack restores HP equal to 180% ATK to a nearby friendly unit with less than 50% HP\nCan store 3 charge(s)", spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'First Aid Mode', icon: '/operators/nearl/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%; Stops attacking and focuses on healing surrounding allies', spInit: 30, sp: 40, dur: '40s', rank: 'M3',
      note: "Although not stated in-game, First Aid Mode increases Nearl's attack interval by 130%, extending it to 2.76 seconds (before modifiers).",
      levels: [
        { level: '1', desc: 'ATK +20%; Stops attacking and focuses on healing surrounding allies', spInit: 20, sp: 60, dur: '40s' },
        { level: '2', desc: 'ATK +25%; Stops attacking and focuses on healing surrounding allies', spInit: 20, sp: 59, dur: '40s' },
        { level: '3', desc: 'ATK +30%; Stops attacking and focuses on healing surrounding allies', spInit: 20, sp: 58, dur: '40s' },
        { level: '4', desc: 'ATK +35%; Stops attacking and focuses on healing surrounding allies', spInit: 25, sp: 55, dur: '40s' },
        { level: '5', desc: 'ATK +40%; Stops attacking and focuses on healing surrounding allies', spInit: 25, sp: 54, dur: '40s' },
        { level: '6', desc: 'ATK +45%; Stops attacking and focuses on healing surrounding allies', spInit: 25, sp: 53, dur: '40s' },
        { level: '7', desc: 'ATK +50%; Stops attacking and focuses on healing surrounding allies', spInit: 30, sp: 52, dur: '40s' },
        { level: 'M1', desc: 'ATK +60%; Stops attacking and focuses on healing surrounding allies', spInit: 30, sp: 50, dur: '40s' },
        { level: 'M2', desc: 'ATK +70%; Stops attacking and focuses on healing surrounding allies', spInit: 30, sp: 45, dur: '40s' },
        { level: 'M3', desc: 'ATK +80%; Stops attacking and focuses on healing surrounding allies', spInit: 30, sp: 40, dur: '40s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Nearl's Badge", desc: `Operator Nearl has demonstrated the capacity for simultaneously treating allied forces while holding the battlefront.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Defender Operator during field operations to exercise Guardian responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    guax: { code: 'GUA-X', name: 'Improved Knight Shield', stages: [
      { stage: 1, hp: '+130', atk: '+40', effect: 'New trait:\nWhen healing allied units with less than 50% HP, increases heal amount by 15%' },
      { stage: 2, hp: '+230', atk: '+50', effect: "Pegasus's Halo improved:\nWhen deployed, all allies receive 13% more healing" },
      { stage: 3, hp: '+300', atk: '+60', effect: "Pegasus's Halo improved:\nWhen deployed, all allies receive 15% more healing" },
    ]},
  },
  story: `Margaret Nearl, titled the "Radiant Knight," is the granddaughter of Kazimierz's national hero Kirill Nearl. She hails from the Elder Pegasian lineage and was previously a candidate to become the Knight Primus of the Nearl family. As a vocal opponent of the rampant commercialization of the Kazimierz Major, she rose to prominence as one of the Major's most celebrated competitors in an effort to change the country from within. However, Margaret's growing fame eventually threatened the interests of the Major's stakeholders, particularly the General Chamber of Commerce. Six years ago, in 1091, Margaret was announced to be Infected and was shortly exiled from Kazimierz, despite having just won the 22nd season of the Major. Nevertheless, she complied with the decision and later encountered the wandering Sarkaz healers Nightingale and Shining. The three formed the Followers and eventually became part of Rhodes Island. Margaret has since actively participated in major operations, including the Chernobog-Lungmen crisis.\nEmbodying the Nearl family's motto of fearing neither hardship nor the dark, Margaret later returned to Kazimierz to assist her younger sister Maria during the 24th Major season, joining the competition herself under the title of the Radiant Knight. She defeated the Blood Knight, the previous champion, and regained the people's support, even after her Oripathy was revealed to be a forgery. In truth, her grandfather Kirill had arranged the forgery and subsequent exile to protect her. Following the events of Near Light, Margaret chose to remain in Kawalerielki to help quell unrest and improve conditions for the Infected. At one point, she also traveled to Victoria during the Londinium crisis to assist Shining in rescuing Nightingale.`,
  profile: `Nearl, once known as the Radiant Knight of Kazimierz, is a member of the Infected support group, "Followers". She has demonstrated remarkable combat techniques and military discipline, whether it's covering allies, mobile warfare, all-out assault or field battle.\nCurrently a heavy-weapon Operator for Rhodes Island and provides command and combat support in person.`,
  records: [
    { title: 'Clinical Analysis', content: `Don't worry, the Medical Department will monitor Nearl's physical condition. Records are available for review if necessary.\n— Medic Operator Shining` },
    { title: 'Archive File 1', content: `Nearl's title as the Radiant Knight is more than just a title, or even an accolade earned for her noble character and mighty prowess.\nThe title relates directly to her Originium Arts. Her warhammer also doubles as her staff. She is known to radiate light when she uses her Arts. Through her power, Nearl can heal allies and inspire them to keep battling.\nThe Caster evaluator has surmised there are other manifestations and applications for her power, a theory yet to be proven so far.` },
    { title: 'Archive File 2', content: `Nearl was once a knight of Kazimierz, and as such she opposed the commercialization of knightly jousting in that city. It was also when she accidentally contracted Oripathy and subsequently forced to leave Kazimierz under tremendous pressure.\nThe incident greatly changed her fate.\nBefore arriving at Rhodes Island, the wandering Nearl had a chance meeting with the Sarkaz healers who would eventually also join the island––Shining and Nightingale, and traveled with them. They formed the "Followers," a group dedicated to helping the infected. The party traveled and provided healing to the Infected everywhere until they officially joined Rhodes Island and took on an even greater responsibility.` },
    { title: 'Archive File 3', content: `Many live drills have indicated that her current gear is somewhat limiting Nearl's combat utility.\nHowever, she's very fond of the protection it offered, because when it's said and done, Nearl is the shield and shelter for her allies, so she puts the utmost priority on resilient defense.\nAlso, to the author, Nearl's mobility and offense do not decrease because of her attention to her teammates. On the contrary, she deals with the situation almost flawlessly, whether offensive or defensive.\nMany Operators believe if Nearl's allies will not be affected as long as she is at the front, and that as long as she is on the battlefield, no one can snatch victory from Rhodes Island.\nMeanwhile, Miss Closure in charge of improving Nearl's gear has indicated that she modified her armor with many secret features. As to their exact functions, they are still unknown at the time of this writing.` },
    { title: 'Archive File 4', content: `In our time together, Nearl rarely mentioned her life in Kazimierz. I didn't really get anything beyond that she has a grandfather she really admires and a much younger sister.\nShe loved to share news and opinions with us, but when it came to her past, she'd just shake her head and glaze over it with a smile.\nI can guess why she didn't want to talk about it. I mean, I don't say much about my past, either.\nBut I do know that whatever happened won't stop her from chasing her goals and dreams...\nAt the same time, however, I know too that if her past should return again, she'll turn right around, dive straight into the atrocity or sorrow until it is finally over, or her life is.\nI only hope that Liz and I could be there when it does to make sure she isn't alone.\n—Shining` },
    { title: 'Promotion Record', content: `Miss Nearl has contributed so much to both Rhodes Island and the infected.\nWhile I understand her choice and will support her as always, I – and several other Operators – do hope that...\nShe'll get the fair treatment she deserves.\nAnd we should do something for her.\n— Amiya` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/guardian-branch.png', factionIcon: '/icons/factions/followers.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/nearl/base.png', chibiSrc: '/operators/nearl/chibi.webm', chibiMoveSrc: '/operators/nearl/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'e2', label: 'Elite 2', src: '/operators/nearl/e2.png', chibiSrc: '/operators/nearl/chibi.webm', chibiMoveSrc: '/operators/nearl/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
    { id: 'skin1', label: 'Shining Dew SD01', src: '/operators/nearl/skin1.png', chibiSrc: '/operators/nearl/chibi-skin1.webm', chibiMoveSrc: '/operators/nearl/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '竜崎いち' },
  ],
  portrait: '/operators/nearl/portrait.png',
}

export default nearl
