import type { Operator } from '../../types'

const purestream: Operator = {
  name: 'Purestream', fileNo: 'R160', class: 'Medic', branch: 'Therapist', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Limited Gift Pack'],
  faction: 'Yan', position: 'Ranged', race: 'Aegir', gender: 'Female', birthplace: 'Yan',
  birthday: 'October 24th', height: '155 cm', combatExp: 'None', infectionStatus: 'Non-infected', illustrator: '唯@W',
  cv: { JP: 'Marie Miyake', CN: 'Cheng Li', EN: 'Kristen Li', KR: 'Oh Roah' },
  trait: 'Has a large healing range, but the healing amount on farther targets is reduced to 80%',
  tags: ['Healing', 'Support'],
  stats: { hp: 1365, atk: 454, def: 118, res: 10, block: 1, cost: 19, aspd: '2.85s', rdp: '80s' },
  range: {
    base: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
    e1: [[1,1,1,0],[1,1,1,1],[2,1,1,1],[1,1,1,1],[1,1,1,0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Rapid Restoration', desc: 'Targets healed by this unit gain status resistance for 4 seconds', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Healing Waves', icon: '/operators/purestream/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately restores the HP of all allies within range by 350% of ATK.', spInit: 10, sp: 20, rank: 'M3',
      levels: [
        { level: '1', desc: 'Immediately restores the HP of all allies within range by 200% of ATK.', spInit: 10, sp: 30 },
        { level: '2', desc: 'Immediately restores the HP of all allies within range by 210% of ATK.', spInit: 10, sp: 29 },
        { level: '3', desc: 'Immediately restores the HP of all allies within range by 220% of ATK.', spInit: 10, sp: 28 },
        { level: '4', desc: 'Immediately restores the HP of all allies within range by 230% of ATK.', spInit: 10, sp: 27 },
        { level: '5', desc: 'Immediately restores the HP of all allies within range by 240% of ATK.', spInit: 10, sp: 26 },
        { level: '6', desc: 'Immediately restores the HP of all allies within range by 250% of ATK.', spInit: 10, sp: 25 },
        { level: '7', desc: 'Immediately restores the HP of all allies within range by 260% of ATK.', spInit: 10, sp: 24 },
        { level: 'M1', desc: 'Immediately restores the HP of all allies within range by 290% of ATK.', spInit: 10, sp: 23 },
        { level: 'M2', desc: 'Immediately restores the HP of all allies within range by 320% of ATK.', spInit: 10, sp: 22 },
        { level: 'M3', desc: 'Immediately restores the HP of all allies within range by 350% of ATK.', spInit: 10, sp: 20 },
      ],
    },
    {
      name: 'Lifespring', icon: '/operators/purestream/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 50% of ATK.', spInit: 30, sp: 60, dur: '25s', rank: 'M3',
      note: "Lifespring multiplies Purestream's attack interval by 0.12, reducing it to 0.342 seconds (before modifiers).",
      levels: [
        { level: '1', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 30% of ATK.', spInit: 10, sp: 70, dur: '25s' },
        { level: '2', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 30% of ATK.', spInit: 11, sp: 69, dur: '25s' },
        { level: '3', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 30% of ATK.', spInit: 12, sp: 68, dur: '25s' },
        { level: '4', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 35% of ATK.', spInit: 15, sp: 67, dur: '25s' },
        { level: '5', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 35% of ATK.', spInit: 16, sp: 66, dur: '25s' },
        { level: '6', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 35% of ATK.', spInit: 17, sp: 65, dur: '25s' },
        { level: '7', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 40% of ATK.', spInit: 20, sp: 64, dur: '25s' },
        { level: 'M1', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 43% of ATK.', spInit: 23, sp: 63, dur: '25s' },
        { level: 'M2', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 46% of ATK.', spInit: 26, sp: 62, dur: '25s' },
        { level: 'M3', desc: 'Attack Interval is greatly reduced, and each attack restores the HP of an injured allied unit within range by 50% of ATK.', spInit: 30, sp: 60, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Purestream's Badge", desc: 'Appointed as Medic Operator to exercise Therapist responsibilities' },
    wahy: { code: 'WAH-Y', name: "The River's Lingering Charm", stages: [
      { stage: 1, atk: '+20', def: '+20', effect: 'Trait improved: Has a large healing range and healing is no longer reduced for distant targets' },
      { stage: 2, atk: '+26', def: '+26', effect: 'New talent: Endless Stream — +10% Skill healing effectiveness' },
      { stage: 3, atk: '+32', def: '+32', effect: 'Endless Stream improved: +20% Skill healing effectiveness' },
    ]},
  },
  story: `When Operator Purestream first joined Rhodes Island, many people did not understand the purpose of the things that she insisted upon.\nSuch an outcome was not unexpected. After all, Purestream came off as energetic but naive in the eyes of more experienced Operators. Even though she knew a little bit of Originium Arts, she has never experienced the cruelty of bloodshed or the sorrow of lost lives. This cheerful and lively personality may make her easy to get along with, but earning the trust of others is a much higher hurdle.\nBack then, very few people understood the importance of the "environmental conservation" that Purestream was always talking about. After all, between Catastrophes, Oripathy, and Reunion, there were too many threats that were considered more imminent.\n\nBut after Purestream quietly cleaned the waterway around the area Rhodes Island was stationed as well as handling the after-treatment of Rhodes Island's sewage in the process, some sharper-eyed Operators began to understand – this youthful water treatment worker may not be so good at combat, but the work she does do is more important than anyone would expect.`,
  profile: "A water treatment specialist from a small riverside village in Yan, recruited after helping resolve an Originium pollution incident. Cheerful, conscientious, and quietly more essential to Rhodes Island's day-to-day operation than most operators realize.",
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Purestream shows no signs of Oripathy infection.\n\n[Blood Originium-Crystal Density] 0.15u/L\nDue to the Operator's line of work in water purification, Purestream often comes in contact with Originium-related pollutants. There is no current risk of infection, but regular check-ups are required, and protective measures should be strengthened.` },
    { title: 'Archive File 2', content: `We do not find a lot of information regarding Purestream's hometown.\nThis is not to say that we ran into many difficulties during our investigation, but after reviewing the material, there simply weren't many things worth keeping. Purestream's hometown is a small, simple village located close to a river. Famous for its pure, clear water, this village has retained many customs that reflect the simplicity of the past. Catastrophes rarely affect this area. Relatively isolated from the outside world, the people here have not had exposure to the Infected, have little conception of Oripathy, and are not wary of outsiders.\nWe found that Operator Purestream worked with Rhodes Island personnel to resolve an issue involving an Originium discharge causing downstream pollution in this local river. After this incident, she became the talk of the town, with many seeing her as a bringer of good fortune. Apparently, she felt the limitations of her own abilities during this incident, and decided to contact Rhodes Island with hopes of expanding her horizons.` },
    { title: 'Archive File 3', content: `"Conserve water. Yes, it's good to conserve water, but we still get to keep the large bathtub, right?"\nDue to the characteristics of her race, if Purestream is in a dry environment for extended periods of time, she may experience skin discomfort. In severe cases, allergic reactions, chafing, or other related symptoms may occur. Therefore, Purestream always carries a small spray bottle of purified water with her. She can often be seen taking out this bottle to spray water over her face. Rhodes Island's well-equipped bath facility has quickly become one of her favorite places.\nPurestream holds herself to strict standards in the conservation of resources, her conviction only faltering when it comes to her bathing problem, for which she appears ashamed and apologetic about.\n\n[Classified Records]\nRegarding Operator Purestream's race, it is difficult to find out where they originated from, but we may be able to glean some clues from some local folk songs.\nHer true hometown must be very far, far away, in a distant land.` },
    { title: 'Archive File 4', content: `"To be honest, her background and experience are as pure as the water she treats, and there are not many things worth delving into."\n"Is that so? Since you were gone for so long, I thought... Wait, what's that in your hand?"\n"Hm? This? It's a local delicacy, some kind of pickled game."\n"...What about all that stuff in your backpack?"\n"Oh? Your sense of smell is way too keen if you noticed that! If you promise not to tell Dr. Kal'tsit, I'll share some with you. These are some frozen specialty dishes that I got from a local store. Luckily, my ice-based Originium Arts came in handy, or I wouldn't have been able to bring these back."\n––A conversation between two investigators, as recorded by a hallway security camera\n\nIf she cordially invites you to go visit her hometown, don't refuse the opportunity. Don't even give yourself the chance to regret it later.` },
    { title: 'Promotion Record', content: `Getting people to understand you is sometimes more valuable than a promotion and the salary that comes with it.\nHowever, getting a salary increase is also important. Whatever you do, be very careful of touting lip service while ignoring the pay.` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/therapist-branch.png', factionIcon: '/icons/factions/yan.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/purestream/base.png', chibiSrc: '/operators/purestream/chibi.webm', illustrator: '唯@W' },
    { id: 'e2', label: 'Elite 2', src: '/operators/purestream/e2.png', chibiSrc: '/operators/purestream/chibi.webm', illustrator: '唯@W' },
    { id: 'skin1', label: 'Yearly Present', src: '/operators/purestream/skin1.png', chibiSrc: '/operators/purestream/chibi-skin1.webm', illustrator: '直立行走' },
  ],
  portrait: '/operators/purestream/portrait.png',
  portraitFocus: { y: 2.3, x: 29.4, zoom: 306 },
}

export default purestream
