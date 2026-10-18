import type { Operator } from '../../types'

const w: Operator = {
  name: 'W', fileNo: 'B214', class: 'Sniper', branch: 'Artilleryman', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Limited Headhunting - Celebration'],
  faction: 'Babel', position: 'Ranged', race: 'Sarkaz', gender: 'Female', birthplace: 'Kazdel',
  birthday: 'Claims to have forgotten', height: '165 cm', combatExp: '11 years', infectionStatus: 'Infected', illustrator: 'Liduke',
  cv: { JP: 'Ayana Taketatsu', CN: 'Ruan Congqing', EN: 'Caitlyn Bairstow', KR: 'Park Go-woon' },
  trait: 'Deals AOE Physical damage',
  tags: ['DPS', 'Crowd-Control'],
  stats: { hp: 1605, atk: 912, def: 133, res: 0, block: 1, cost: 29, aspd: '2.8s', rdp: '70s' },
  range: {
    base: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
    e1: [[1,1,1,1,0],[2,1,1,1,1],[1,1,1,1,0]],
    e2: [[1,1,1,1,1],[2,1,1,1,1],[1,1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Outstanding', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Ambush', desc: 'After remaining deployed for 10 seconds, obtains 60% Physical and Arts Dodge, and is less likely to be targeted by enemies. Reduces aggression level by 1', elite: 'E2' },
    { name: 'Insult to Injury', desc: 'Enemies in range take +18% Physical damage when Stunned', elite: 'E2' },
  ],
  skills: [
    {
      name: 'King of Hearts', icon: '/operators/w/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately launches a grenade, dealing 350% ATK as Physical Damage to all enemies hit and Stunning them for 3 seconds', spInit: 0, sp: 16, rank: 'M3',
      levels: [
        { level: '1', desc: 'Immediately launches a grenade, dealing 230% ATK as Physical damage to all enemies hit and Stunning them for 1.5 seconds', spInit: 0, sp: 25 },
        { level: '2', desc: 'Immediately launches a grenade, dealing 240% ATK as Physical damage to all enemies hit and Stunning them for 1.5 seconds', spInit: 0, sp: 24 },
        { level: '3', desc: 'Immediately launches a grenade, dealing 250% ATK as Physical damage to all enemies hit and Stunning them for 1.5 seconds', spInit: 0, sp: 23 },
        { level: '4', desc: 'Immediately launches a grenade, dealing 270% ATK as Physical damage to all enemies hit and Stunning them for 1.8 seconds', spInit: 0, sp: 22 },
        { level: '5', desc: 'Immediately launches a grenade, dealing 280% ATK as Physical damage to all enemies hit and Stunning them for 1.8 seconds', spInit: 0, sp: 21 },
        { level: '6', desc: 'Immediately launches a grenade, dealing 290% ATK as Physical damage to all enemies hit and Stunning them for 1.8 seconds', spInit: 0, sp: 20 },
        { level: '7', desc: 'Immediately launches a grenade, dealing 310% ATK as Physical damage to all enemies hit and Stunning them for 2.1 seconds', spInit: 0, sp: 19 },
        { level: 'M1', desc: 'Immediately launches a grenade, dealing 320% ATK as Physical damage to all enemies hit and Stunning them for 2.4 seconds', spInit: 0, sp: 18 },
        { level: 'M2', desc: 'Immediately launches a grenade, dealing 330% ATK as Physical damage to all enemies hit and Stunning them for 2.7 seconds', spInit: 0, sp: 17 },
        { level: 'M3', desc: 'Immediately launches a grenade, dealing 350% ATK as Physical damage to all enemies hit and Stunning them for 3 seconds', spInit: 0, sp: 16 },
      ],
    },
    {
      name: 'Jack in the Box', icon: '/operators/w/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit\'s Attack Range; the mine detonates when an enemy passes by it, dealing 280% Physical Damage to all nearby enemies and Stunning them for 2.2 seconds', spInit: 0, sp: 8, rank: 'M3',
      levels: [
        { level: '1', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 190% Physical damage to all nearby enemies and Stunning them for 1.4 seconds`, spInit: 0, sp: 12 },
        { level: '2', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 200% Physical damage to all nearby enemies and Stunning them for 1.4 seconds`, spInit: 0, sp: 12 },
        { level: '3', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 210% Physical damage to all nearby enemies and Stunning them for 1.4 seconds`, spInit: 0, sp: 12 },
        { level: '4', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 220% Physical damage to all nearby enemies and Stunning them for 1.6 seconds`, spInit: 0, sp: 11 },
        { level: '5', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 230% Physical damage to all nearby enemies and Stunning them for 1.6 seconds`, spInit: 0, sp: 11 },
        { level: '6', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 240% Physical damage to all nearby enemies and Stunning them for 1.6 seconds`, spInit: 0, sp: 11 },
        { level: '7', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 250% Physical damage to all nearby enemies and Stunning them for 1.8 seconds`, spInit: 0, sp: 10 },
        { level: 'M1', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 260% Physical damage to all nearby enemies and Stunning them for 1.8 seconds`, spInit: 0, sp: 9 },
        { level: 'M2', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 270% Physical damage to all nearby enemies and Stunning them for 2 seconds`, spInit: 0, sp: 9 },
        { level: 'M3', desc: `The next attack buries a mine (lasts for 120 seconds) in a deployable tile within this unit's Attack Range; The mine will detonate when an enemy passes by it, dealing 280% Physical damage to all nearby enemies and Stunning them for 2.2 seconds`, spInit: 0, sp: 8 },
      ],
    },
    {
      name: 'D12', icon: '/operators/w/skill-3.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Places bombs on up to 4 enemies within Attack Range, prioritizing enemies with the highest HP; after a delay, the bombs detonate, each dealing 310% ATK as Physical Damage to nearby enemies and Stunning them for 5 seconds', spInit: 20, sp: 33, rank: 'M3',
      levels: [
        { level: '1', desc: 'Places bombs on up to 3 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 220% ATK as Physical damage to nearby enemies and Stunning them for 3 seconds', spInit: 11, sp: 45 },
        { level: '2', desc: 'Places bombs on up to 3 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 230% ATK as Physical damage to nearby enemies and Stunning them for 3 seconds', spInit: 12, sp: 44 },
        { level: '3', desc: 'Places bombs on up to 3 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 240% ATK as Physical damage to nearby enemies and Stunning them for 3 seconds', spInit: 13, sp: 43 },
        { level: '4', desc: 'Places bombs on up to 3 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 250% ATK as Physical damage to nearby enemies and Stunning them for 3.5 seconds', spInit: 14, sp: 42 },
        { level: '5', desc: 'Places bombs on up to 3 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 260% ATK as Physical damage to nearby enemies and Stunning them for 3.5 seconds', spInit: 15, sp: 41 },
        { level: '6', desc: 'Places bombs on up to 3 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 270% ATK as Physical damage to nearby enemies and Stunning them for 3.5 seconds', spInit: 16, sp: 40 },
        { level: '7', desc: 'Places bombs on up to 3 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 280% ATK as Physical damage to nearby enemies and Stunning them for 4 seconds', spInit: 17, sp: 39 },
        { level: 'M1', desc: 'Places bombs on up to 4 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 290% ATK as Physical damage to nearby enemies and Stunning them for 4 seconds', spInit: 18, sp: 37 },
        { level: 'M2', desc: 'Places bombs on up to 4 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 300% ATK as Physical damage to nearby enemies and Stunning them for 4.5 seconds', spInit: 19, sp: 35 },
        { level: 'M3', desc: 'Places bombs on up to 4 enemies within Attack Range, prioritizing enemies with the highest HP; After a delay, the bombs will detonate, each dealing 310% ATK as Physical damage to nearby enemies and Stunning them for 5 seconds', spInit: 20, sp: 33 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "W's Badge", desc: 'Appointed as Sniper Operator to exercise Artilleryman responsibilities' },
    artx: { code: 'ART-X', name: "Mercenary's Bag", stages: [
      { stage: 1, hp: '+130', atk: '+54', effect: 'New trait: Increases ATK to 110% when attacking blocked enemies' },
      { stage: 2, hp: '+180', atk: '+68', effect: 'Insult to Injury improved: Enemies in range take +21% Physical Damage when Stunned. Recover 1 SP when defeating an enemy' },
      { stage: 3, hp: '+210', atk: '+78', effect: 'Insult to Injury improved: Enemies in range take +24% Physical Damage when Stunned. Recover 1 SP when defeating an enemy' },
    ]},
    arty: { code: 'ART-Y', name: 'Lost Dull Knife', stages: [
      { stage: 1, hp: '+160', atk: '+45', effect: 'New trait: Attacks ignore 100 DEF' },
      { stage: 2, hp: '+180', atk: '+65', effect: 'Ambush improved: After remaining deployed for 10 seconds, obtains 60% Physical and Arts Dodge, and is less likely to be targeted by enemies. When no damage is taken, ATK gradually increases to +10% over 20 seconds, resetting upon taking damage' },
      { stage: 3, hp: '+200', atk: '+85', effect: 'Ambush improved: After remaining deployed for 8 seconds, obtains 60% Physical and Arts Dodge, and is less likely to be targeted by enemies. When no damage is taken, ATK gradually increases to +20% over 16 seconds, resetting upon taking damage' },
    ]},
  },
  story: `W belonged to an independent mercenary team during the war in Kazdel. The team gained notoriety for its frequent raids on Laterano business convoys, and many of its members have claimed guardian guns as trophies. These guardian guns, often awarded through formal ceremonies, can fetch a very high price at the Scar Market, Kazdel's infamous black market. W herself still has a number of guardian guns in her collection, but this collection was marked as contraband and confiscated following her onboarding in order to avoid inciting the ire of our Laterano operators.\n\nAfter the conclusion of the war, W accepted an offer from Talulah to fight for Reunion as a mercenary, thus becoming one of Reunion's accomplices. Following that, W unilaterally broke off her cooperation with Reunion and reached an agreement with Rhodes Island that continues to this day. From the above, we most likely have no way of determining W's specific role during the Kazdel Civil War, her motivation in joining and then quickly betraying Reunion, or her purpose in cooperating with Rhodes Island.`,
  profile: 'A Sarkaz mercenary of unknown allegiance who reached an independent cooperation agreement with Rhodes Island. Dangerous, unpredictable, and deeply entangled with the pasts of Amiya and the Doctor in ways she has never explained.',
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of W's internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 14%\nMercenary W shows clear signs of infection. No further examinations available.\n\n[Blood Originium-Crystal Density] 0.29u/L\nThere is little reason for optimism regarding W's prognosis due to prolonged exposure in the Kazdel area, as well as unchecked misuse of military-grade Originium products. However, she has never experienced dysphoria regarding her status as an Infected; perhaps, as is true for many Sarkaz, she has become accustomed to persecution for her dual identity.\n\nAs everyone already knows, W has a very disagreeable personality. Even after entering a cooperation agreement with Rhodes Island, she has never complied with our inspection— yes, that's right, inspection, not treatment.\n—A medical department director` },
    { title: 'Archive File 2', content: `Sarkaz mercenaries. Up until the final days of Kazdel's Civil War, mercenaries were the most common armed forces seen in Kazdel's barren lands. Each of them worked in small teams, sometimes being recruited by nobles with vast funds and supplies, other times forming spontaneous coalitions with other mercenary teams. In Kazdel, where allegiances shift like the sands and various groups frequently find themselves at each others' throats, the concepts of life and death take on a different form than compared to any other region.\nAfter the incumbent regent clashed with the orthodox royal family to spark the civil war, the remnants of Kazdel's army which had been scattered among various nobles began to gradually unite with civilian forces, eventually being split into factions. The fighting was brutal and harrowing, but some scholars believed that the Civil War allowed a new process of redistribution and restructuring to take root in the barren and chaotic Kazdel.\n—Struggle and Freedom, Chapter 2 – "Kazdel and the Modern History of Mercenaries," excerpt. This book came from W's personal belongings, and the author's name is unexpectedly abbreviated to only the letter "H." The sentence, "Sarkaz should be free," is highlighted in red.` },
    { title: 'Archive File 3', content: `W and her squad remained largely independent from Rhodes Island, and considering the peculiarities of Sarkaz mercenaries, rarely spent time stationed on the Rhodes Island landship. Even her infrequent sightings on the ship are enough to cause quite an uproar.\nOne need not reiterate W's nasty temperament, and excluding Dr. Kal'tsit and the Doctor, she considers few to be worth her attention.\nOh, right, regarding Amiya.\nAmiya does not seem to know much about W, and W, despite not considering Amiya to be particularly noteworthy, will still defer to her. Isn't that strange? Even despite her grumbling, complaints and tendency to disregard orders and act according to her own judgment, W has complied with Amiya's orders at least when it comes to reporting results. It's as if... W has greater expectations for Amiya, but I don't think that's a good thing.\nBut sometimes, W will stand in front of an empty room, unmoving... as if in a daze. Other times, she'll just watch Amiya while she goes about her daily business.\nImportantly... every time she was observed, she wasn't smiling.` },
    { title: 'Archive File 4', content: `[Classified Log]\nDoctor, surely you must have discovered this as well, but there is actually some relationship between W and Rhodes Island... as well as with your past.\nI wanted to talk about W. I've known W for a long time. Did W mention this to you... while She was still alive? About Her Majesty. Originally, this is a topic that us "old Operators" swore to never bring up, but it's not that we're trying to hide anything from you, Doctor.\nBack to W – in the beginning, she was a child who only knew to follow Her Majesty's commands, and nobody else's. Even among the then-unified Sarkaz, few knew about W's existence.\nBut W is no longer that same person. There aren't actually very many people in Rhodes Island who know about W. But most of the people who W knew are now gone. She wore her disguise... for too long, and let it sink in too deeply.\nWe all want to know what W seeks, and what she plans to do. In her eyes, is Rhodes Island merely a lingering illusion, or a brand new future to carry the hopes of the past?\nHm? You have a question for me? Theresa? You... where'd you hear that name from?\n... Theresa, huh?\nPerhaps the day when you have to truly face your past is not far away either.` },
    { title: 'Promotion Record', content: `"After all, you..."\n"Death is also an effective means of fraud. The idea of escaping to meet you was his idea, nothing more."\n"Then, when can we also go to Victoria? Wouldn't be nice to keep the usurper waiting."\n"The situation in Victoria is much more complicated than you think. We only have the bit of intel from Theresis, right?"\n"Still not enough for you?"\n"For you, perhaps. But for Rhodes Island, far from it. Do you want everyone with you to die?"\n"Goodness, to think that we'd be able to find all these clues about Londinium just by staying over at Rhodes Island for a bit. How could Kal'tsit be this unprepared?"\n"You've done your homework, so stuff like this happens. After all, you also 'get along' very well with the Doctor."\n"That's right. I'm looking forward to seeing what you do next, so try your best to not die outside Victoria. We still have a lot of unfinished business."\n"It's okay, don't worry about it. There will come a day when we tie together all the loose ends."` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/artilleryman-branch.png', factionIcon: '/icons/factions/babel.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/w/base.png', chibiSrc: '/operators/w/chibi.webm', illustrator: 'Liduke' },
    { id: 'e2', label: 'Elite 2', src: '/operators/w/e2.png', chibiSrc: '/operators/w/chibi.webm', illustrator: 'Liduke', l2d: { skel: '/operators/w/l2d/w-e2.skel', atlas: '/operators/w/l2d/w-e2.atlas' } },
    { id: 'skin1', label: 'Fugue', src: '/operators/w/skin1.png', chibiSrc: '/operators/w/chibi-skin1.webm', illustrator: 'Liduke', l2d: { skel: '/operators/w/l2d/w-fugue.skel', atlas: '/operators/w/l2d/w-fugue.atlas', characterSlotPrefix: 'W_', focus: { zoom: 0.62, offsetY: 30, offsetX: 750 } } },
  ],
  portrait: '/operators/w/portrait.png',
  portraitFocus: { y: -4.9, x: 47, zoom: 309 },
}

export default w
