import type { Operator } from '../../types'

const phonor0: Operator = {
  name: 'PhonoR-0', fileNo: 'RCX6', class: 'Supporter', branch: 'Ritualist', rarity: 1, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Robot', gender: 'Female', birthplace: 'Rhodes Island',
  birthday: 'September 2nd', height: '160 cm', combatExp: 'Less than 1 year', infectionStatus: 'Light wear on outer casing, structure intact, normal durability. Generator and chassis in good condition. Weapon systems operating normally. Energy storage fully charged and operating normally. Service normal. ECU in good condition.', illustrator: 'M1917史密斯维森',
  cv: { JP: 'Kumiko Watanabe', CN: 'Yu Tou', EN: 'Marcella Lentz-Pope', KR: 'Shin Song-yi' },
  trait: 'Attacks deal Arts damage, and can inflict Elemental Injury. Not affected by Deployment Limit, but has a long Redeployment Time.',
  tags: ['Robot', 'Elemental'],
  stats: { hp: 395, atk: 205, def: 30, res: 5, block: 1, cost: 3, aspd: '1.6s', rdp: '200s' },
  range: { base: [[1,1,1,1],[1,2,1,1],[1,1,1,1]], e1: [[1,1,1,1],[1,2,1,1],[1,1,1,1]] },
  physicalExam: { 'Top Speed': '22 km/h', Climb: 'Normal', Brake: 'Normal', Mobility: 'Normal', Endurance: 'Standard', 'Structural Integrity': 'Standard' },
  talents: [{ name: 'Chorus of a Distant Valley VI', desc: 'For 40s after deployment, attacks also deal 60 Necrosis damage, and inflicts 10% Arts Fragility and Elemental Fragility on all enemies in attack range.', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `A mobile Banshee witchcraft platform developed as part of a collaboration between Rhodes Island and the Convallis of the Banshees, the first and only R&V Model unit designated PhonoR-0 functions more like a self-propelled witchcraft altar than a robot, operated by an A.I. that is more intelligent than other robots fielded by R.I. Even though its specifications are far below Terran standards, PhonoR-0 is nonetheless capable of providing assistance in the battlefield and acting as an attendant of Logos outside of combat.`,
  profile: `R&V Model witchcraft operation platform PhonoR-0, Rhodes Island's first and only intelligent operation platform equipped with a Banshee incantation Arts device. Unlike the customized Raythean Industries models, she was born from the unbreakable rapport between our most skilled operators and the Banshees. Compared to other wheeled operation platforms, the witchcraft-based components in her operating mechanisms, drive system, and core more closely resemble a mobile altar. Despite being the product of both cutting-edge technology and Sarkaz witchcraft, her basic specs are unimpressive, but she is easy to deploy and able to provide mid-mission assistance to operators. She currently participates in combat missions as a Supporter Operator.`,
  records: [
    { title: 'Archive File', content: `After PhonoR-0 was formally inducted as a member of Rhodes Island, some elite operators aware of the situation made bets in private. They were curious as to how much this emissary of the Banshees would affect Logos's personal life. There were also busybodies like Closure who took an interest in the former Great Banshee. After all, "sending one's voice over" was seen as an incredibly strange act to other Sarkaz.\nIn the end, though, nothing really changed. Logos paid no heed to the unusual "elder" often by his side. At times, they would go on walks on the deck together. While Rhodes Island was preparing to leave Londinium, PhonoR-0 proved to be a big help in our final few operations. She even accepted being the subject of Closure's research without hesitation. Whenever she heard amusing anecdotes about Logos from other operators, she would politely ask them to repeat themselves slowly so she could record their stories and send them back to the Convallis of the Banshees.\nOn occasion, and only on occasion, operators having a few drinks at Just One More Pint would notice that PhonoR-0 had replaced the usual jukebox. Most times, she would simply quietly emit a red light while playing gentle melodies the operators at the bar had never heard. But whenever Logos came by, a melodious Banshee chant would find itself on the playlist. Her voice sounds as though it comes from the other side of this great land, passing through the Convallis and the crystal arches studded across the earth.\nIt was not long before she received an invitation to join Rhodes Island's choir.` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/ritualist-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/phonor-0/base.png', chibiSrc: '/operators/phonor-0/chibi.webm', illustrator: 'M1917史密斯维森' },
    { id: 'skin1', label: 'Primordial Ode', src: '/operators/phonor-0/skin1.png', chibiSrc: '/operators/phonor-0/chibi-skin1.webm', illustrator: '抽象Rotate' },
  ],
  portrait: '/operators/phonor-0/portrait.png',
  portraitFocus: { y: 65, x: 60, zoom: 80 },
}

export default phonor0
