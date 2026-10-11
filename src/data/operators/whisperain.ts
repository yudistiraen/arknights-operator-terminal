import type { Operator } from '../../types'

const whisperain: Operator = {
  name: 'Whisperain', fileNo: 'R163', class: 'Medic', branch: 'Therapist', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Iberia', position: 'Ranged', race: 'Aegir', gender: 'Female', birthplace: 'Iberia',
  birthday: 'March 6th', height: '169 cm', combatExp: 'None',
  infectionStatus: 'Medical tests have confirmed that no infection is present.',
  illustrator: 'Chuzenji',
  cv: { JP: 'Saori Goto', CN: 'Liu Shisi (credited as "Jingxia Liu" in EN)', EN: 'Sam Slade', KR: 'Lee Ji-young' },
  trait: 'Has a large healing range, but the healing amount on farther targets is reduced to 80%',
  tags: ['Healing'],
  stats: { hp: 1632, atk: 532, def: 119, res: 10, block: 1, cost: 20, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]],
    e1: [[1, 1, 1, 0], [1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Flawed', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Tower of Life', desc: "Allied units with status resistance within this unit's Attack Range will restore HP per second equal to 3% of Whisperain's ATK (Unaffected by this unit's Trait)", elite: 'E1' },
    { name: 'Tower of Life', desc: "Allied units with status resistance within this unit's Attack Range will restore HP per second equal to 4% (+1%) of Whisperain's ATK (Unaffected by this unit's Trait)", elite: 'E1 (Potential 5)' },
    { name: 'Tower of Life', desc: "Allied units with status resistance within this unit's Attack Range will restore HP per second equal to 6% of Whisperain's ATK (Unaffected by this unit's Trait)", elite: 'E2' },
    { name: 'Tower of Life', desc: "Allied units with status resistance within this unit's Attack Range will restore HP per second equal to 7% (+1%) of Whisperain's ATK (Unaffected by this unit's Trait)", elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Oriented Diagnosis', icon: '/operators/whisperain/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'The next heal is increased to 130% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 5 seconds',
      spInit: 0, sp: 2, rank: 'M3',
      levels: [
        { level: '1', desc: 'The next heal is increased to 105% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 1 seconds', spInit: 0, sp: 5 },
        { level: '2', desc: 'The next heal is increased to 105% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 2 seconds', spInit: 0, sp: 4 },
        { level: '3', desc: 'The next heal is increased to 110% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 2 seconds', spInit: 0, sp: 4 },
        { level: '4', desc: 'The next heal is increased to 110% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 3 seconds', spInit: 0, sp: 4 },
        { level: '5', desc: 'The next heal is increased to 115% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 3 seconds', spInit: 0, sp: 3 },
        { level: '6', desc: 'The next heal is increased to 115% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 4 seconds', spInit: 0, sp: 3 },
        { level: '7', desc: 'The next heal is increased to 120% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 4 seconds', spInit: 0, sp: 3 },
        { level: 'M1', desc: 'The next heal is increased to 120% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 5 seconds', spInit: 0, sp: 2 },
        { level: 'M2', desc: 'The next heal is increased to 125% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 5 seconds', spInit: 0, sp: 2 },
        { level: 'M3', desc: 'The next heal is increased to 130% of ATK, and an additional target will be healed (prioritizes units under abnormal status) and granted status resistance for 5 seconds', spInit: 0, sp: 2 },
      ],
    },
    {
      name: 'Pain Suppression', icon: '/operators/whisperain/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 200%, and each target healed by this unit is granted status resistance for 4 second(s)\nUnlimited duration",
      spInit: 0, sp: 55, dur: '∞', rank: 'M3',
      note: "Pain Suppression reduces Whisperain's attack interval by 20%, lowering it to 2.28 seconds (before modifiers).",
      levels: [
        { level: '1', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 110%, and each target healed by this unit is granted status resistance for 1 second(s)\nUnlimited duration", spInit: 0, sp: 65, dur: '∞' },
        { level: '2', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 120%, and each target healed by this unit is granted status resistance for 1 second(s)\nUnlimited duration", spInit: 0, sp: 64, dur: '∞' },
        { level: '3', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 130%, and each target healed by this unit is granted status resistance for 1 second(s)\nUnlimited duration", spInit: 0, sp: 63, dur: '∞' },
        { level: '4', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 140%, and each target healed by this unit is granted status resistance for 2 second(s)\nUnlimited duration", spInit: 0, sp: 62, dur: '∞' },
        { level: '5', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 150%, and each target healed by this unit is granted status resistance for 2 second(s)\nUnlimited duration", spInit: 0, sp: 61, dur: '∞' },
        { level: '6', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 160%, and each target healed by this unit is granted status resistance for 2 second(s)\nUnlimited duration", spInit: 0, sp: 60, dur: '∞' },
        { level: '7', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 170%, and each target healed by this unit is granted status resistance for 3 second(s)\nUnlimited duration", spInit: 0, sp: 59, dur: '∞' },
        { level: 'M1', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 180%, and each target healed by this unit is granted status resistance for 3 second(s)\nUnlimited duration", spInit: 0, sp: 58, dur: '∞' },
        { level: 'M2', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 190%, and each target healed by this unit is granted status resistance for 3 second(s)\nUnlimited duration", spInit: 0, sp: 57, dur: '∞' },
        { level: 'M3', desc: "Attack Interval reduced. The healing effect of this unit's Talent increases to 200%, and each target healed by this unit is granted status resistance for 4 second(s)\nUnlimited duration", spInit: 0, sp: 55, dur: '∞' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Whisperain's Badge", desc: `Operator Whisperain has demonstrated a remarkable aptitude for wide-range healing in tandem with endowment of effects of benefit upon Operators.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Medic Operator during field operations to exercise Therapist responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    wahx: {
      code: 'WAH-X', name: 'A Quaint First-Aid Kit', stages: [
        { stage: 1, hp: '+100', atk: '+25', effect: 'New trait: Gain status resistance and become less likely to be attacked' },
        { stage: 2, hp: '+120', atk: '+35', effect: "Tower of Life improved: Allied units with status resistance within this unit's Attack Range will restore HP per second equal to 8% of Whisperain's ATK (Unaffected by this unit's Trait)" },
        { stage: 3, hp: '+140', atk: '+40', effect: "Tower of Life improved: Allied units with status resistance within this unit's Attack Range will restore HP per second equal to 9% of Whisperain's ATK (Unaffected by this unit's Trait)" },
      ],
    },
  },
  story: `Whisperain is a wandering Iberian-born doctor who belongs to a rare subgroup of Aegir with a frail constitution and immune system, but who are capable of rejuvenating by relapsing to a younger stage at the cost of their previous memories. Although the memory loss that accompanies her "deaths" makes her reluctant to socialize, Whisperain proves herself to be a highly competent medic and serves as an ad hoc member of the Medical Department. She spends most of her time watching movies, keeping the ticket stubs and writing impressions that are nothing like a critic's. Her sentimental reviews are esteemed by many movie-loving operators and serve as a guidebook for their own viewing.`,
  profile: `The Iberia-born roving doctor, Whisperain, never stays in one place for too long. Records of her work in the area remain all throughout Kazimierz, Sami and the like. Her patients appear to have received treatment from her while she passed by, and in her seemingly aimless wandering, she's rescued more than a few from the brink.\nSince she administered treatment to a mid-mission team of Operators met by chance, she is now an ad hoc member of the Medical Department as an accompanying doctor, journeying together with Rhodes Island for the short-term.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Whisperain shows no signs of Originium infection.\n\n[Blood Originium-Crystal Density] 0.10u/L\nOperator Whisperain is exceptionally attentive—even rigorous—in defending herself, and rarely comes into contact with Originium or related products.\n\nWhat's going on here? How could her body become so frail...? Never mind Oripathy, even a bad fever could cost her her life! Ugh, with her constitution, she had no business running amok outside all this time.\n— Warfarin`,
    },
    {
      title: 'Archive File 1',
      content: `Just like Miss Whisperain said, she's a traveler who happened across Rhodes Island by chance. After aiding a few Rhodes Island operators, her dune buggy malfunctioned and left her stranded in the middle of the barrens. The Rhodes Island landship picked up on the distress signal, and so went to rescue her.\nAs a traveling doctor, Miss Whisperain had no set destination at all. There was no doubt she fulfilled high standards as a Medic, with her expertise above all else being first aid in various emergency situations. Once we considered Miss Whisperain's circumstances, we sent her an invitation. Rhodes Island wouldn't restrict her staying or going, but if her own interests aligned, she could act as a provisional Medic Operator in joint with Rhodes Island's operations before she left.\nAfter several days of hesitation, Miss Whisperain accepted our proposal.`,
    },
    {
      title: 'Archive File 2',
      content: `The Medical Department's routine health inspections have made it clear that Miss Whisperain is not in good condition. In summary, she is in no way suited to activity as a traveling doctor.\nThis verdict is completely objective. Her exam numbers show that every index of Miss Whisperain's health falls below average compared to any healthy person. Her immune system requires particular attention, having reached a dangerous state. Oripathy has not infected her frail body, despite its rampant spread across this world and all its people. Yet, frail is still the only word that appropriately describes Miss Whisperain's constitution.\nWe're not sure why Miss Whisperain doesn't choose to settle down in a city suited to her, but rather continues to walk the world's four corners, never calling a single place home for long. Regardless, while Miss Whisperain lodges for the time being at Rhodes Island, the Medical Department has suggested she be a medical worker onboard the ship, minimizing unnecessary field missions and avoiding further burden on her body.`,
    },
    {
      title: 'Archive File 3',
      content: `Miss Whisperain is hardly ever seen or heard of in social settings. This is not purely due to her reserved, shy nature— rather, she actively takes deliberate pains to avoid contact with others.\nIn response to contact from gregarious operators, Miss Whisperain is typically evasive. From the faint sorrow and vexation in the little talk she makes, and the struggle and expectation seen behind her glasslike eyes, you can tell Miss Whisperain isn't distant by nature. There's just some innate reason she has, and so she chooses to be apart from the crowd, to close herself off from others.\nHowever, there seem to be signs of a turn for the better, in the time since she joined Rhodes Island. Though the roving doctor still avoided any involvement with others at all costs, Rhodes Island's cast of operators isn't short of warmth, and life aboard the ship always seemed to hide all kinds of "accidents" to tie her up in... and after enough "accidents," we can say that our present Miss Whisperain lets much more of a rich array of moods show than the one that first joined us. And by her side, little by little, more familiar faces have started showing up.\nThough it perplexes her and she's helpless in the face of them, one can see that Miss Whisperain doesn't sincerely reject the bubbling, lively little mishaps that happen around her.`,
    },
    {
      title: 'Archive File 4',
      content: `Outside of medical work, Miss Whisperain spends most of her free time at the library or AV cabin. Among those quiet indoor amusements, moving pictures are her most beloved. Her expertise in film appreciation is nigh unparalleled.\nHer angle is nothing like a critic's, fussing and picking and passing judgment. Miss Whisperain throws herself whole into the film, learning a work's characters' emotions by firsthand experience. The sentimental roving doctor's natural heart is fine-woven and sensitive, highly empathetic towards others, and this becomes even more apparent when she's picture-watching. Miss Whisperain can often be influenced by strong emotions, writing out vivid, piercing impressions of what she watches, and these reviews have been well-received across the ship, esteemed by many movie-loving Operators as a viewer's guidebook.\nFor each film she's seen at a regular screening, as a memoir, Miss Whisperain will hold onto the cinema ticket's stub. To the roving doctor, this act seems to hold a special kind of sense, each ticket stub representing some memory she doesn't want to forget.\n\n[Classified Log]\nSetting aside her innate frailty, by her own disclosure, we've ascertained that Miss Whisperain falls under a very rare branch of the Ægir, possessing an extraordinary constitution. Under the effect of the race's characteristics, this type of Ægirian is exceptionally frail. When the body is incapable of enduring its environment or has been gravely wounded, it will relapse to a young stage, losing its prior memories and maturing anew.\nAfter several examinations, the Medical Department arrived at a conclusion, and this rather strange conclusion seemed to fit with Miss Whisperain's own confessions. Her mentions of "rejuvenation" during conversation were not truly in the sense of longevity, but referred to a biological differentiation, transformation and regression.\nIt was precisely because memory loss accompanied each of her "deaths" that Miss Whisperain began to dread forming connections with people, scared that her own deaths and their oblivions would come to harm the people around her. For the keenly sensitive Miss Whisperain, it's hard to bear.`,
    },
    {
      title: 'Promotion Record',
      content: `To want to flee for fear of harm is a very normal thing.\nOur biological instincts bind us to innately fear pain. Perhaps there are people with the willpower to overcome these fears, or perhaps there are people long numbed to them through all their torment, but we must recognize–fear is a normal thing, escaping is a normal thing, and these cannot be criticized.\nThe question is, where does blind escape lead you, and who can truly flee from their pain?\nLuckily, there are people on Rhodes Island who will reach their hand out to her, and people who can make her want to try stepping out of her own world.\nPerhaps, what she lacked right now was only a bit of courage.`,
    },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/therapist-branch.png', factionIcon: '/icons/factions/iberia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/whisperain/base.png', chibiSrc: '/operators/whisperain/chibi.webm', chibiMoveSrc: '/operators/whisperain/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Chuzenji' },
    { id: 'e2', label: 'Elite 2', src: '/operators/whisperain/e2.png', chibiSrc: '/operators/whisperain/chibi.webm', chibiMoveSrc: '/operators/whisperain/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Chuzenji' },
    { id: 'skin1', label: 'Tremble Cold', src: '/operators/whisperain/skin1.png', chibiSrc: '/operators/whisperain/chibi-skin1.webm', chibiMoveSrc: '/operators/whisperain/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Chuzenji' },
    { id: 'skin2', label: 'Priory of Abyss', src: '/operators/whisperain/skin2.png', chibiSrc: '/operators/whisperain/chibi-skin2.webm', chibiMoveSrc: '/operators/whisperain/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Chuzenji' },
  ],
  portrait: '/operators/whisperain/portrait.png',
}

export default whisperain
