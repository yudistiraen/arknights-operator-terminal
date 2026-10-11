import type { Operator } from '../../types'

const specter: Operator = {
  name: 'Specter', fileNo: 'AA02', class: 'Guard', branch: 'Centurion', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Abyssal Hunters', position: 'Melee', race: 'Undisclosed', gender: 'Female', birthplace: 'Ægir',
  birthday: 'July 27th', height: '162 cm', combatExp: '7 years',
  infectionStatus: `Showed no outward symptoms of Originium Infection, but Infection was confirmed by medical examination. More clinical research is required to fully diagnose Specter's Oripathy Status.`,
  illustrator: 'Skade',
  cv: { JP: 'Azumi Asakura', CN: 'Zhang Anqi (credited as "Angel Zhang" in EN)', EN: 'Harriet Carmichael', KR: 'Kim Hyeon-sim' },
  trait: 'Attacks all blocked enemies',
  tags: ['AoE', 'Survival'],
  stats: { hp: 2630, atk: 805, def: 355, res: 0, block: 3, cost: 23, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]], e2: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Outstanding', Mobility: 'Normal', Endurance: 'Outstanding', 'Tactical Acumen': 'Flawed', 'Combat Skill': 'Excellent', 'Originium Arts': 'Flawed' },
  talents: [
    { name: 'Stamina Up', desc: 'Max HP +10%', elite: 'E1' },
    { name: 'Abyssal Regeneration', desc: 'Max HP +10%; Restores HP by 2% of Max HP per second', elite: 'E2' },
  ],
  skills: [
    {
      name: 'ATK Up γ', icon: '/operators/specter/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
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
      name: 'Bone Fracture', icon: '/operators/specter/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: `During the skill duration, Specter's HP will not drop below 1; ATK +160%\nSpecter is Stunned for 10 seconds after skill duration`,
      spInit: 35, sp: 40, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +40%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 20, sp: 45, dur: '10s' },
        { level: '2', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +50%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 20, sp: 45, dur: '10s' },
        { level: '3', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +60%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 20, sp: 45, dur: '10s' },
        { level: '4', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +70%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 25, sp: 45, dur: '11s' },
        { level: '5', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +80%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 25, sp: 45, dur: '11s' },
        { level: '6', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +90%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 25, sp: 45, dur: '11s' },
        { level: '7', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +100%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 30, sp: 43, dur: '12s' },
        { level: 'M1', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +120%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 30, sp: 42, dur: '13s' },
        { level: 'M2', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +140%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 30, sp: 41, dur: '14s' },
        { level: 'M3', desc: `During the skill duration, Specter's HP will not drop below 1; ATK +160%\nSpecter is Stunned for 10 seconds after skill duration`, spInit: 35, sp: 40, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Specter's Badge", desc: 'Appointed as Guard Operator during field operations to exercise Centurion responsibilities' },
    cenx: {
      code: 'CEN-X', name: 'Dim Candlelight', stages: [
        { stage: 1, atk: '+34', def: '+30', effect: 'Trait improved: Attacks all blocked enemies; ATK is increased to 110% when attacking blocked enemies' },
        { stage: 2, atk: '+52', def: '+42', effect: 'New talent: Experiences Dissolved in Blood - While deployed, increases the damage dealt by all Abyssal Hunter Operators by 3%' },
        { stage: 3, atk: '+60', def: '+48', effect: 'Experiences Dissolved in Blood improved: While deployed, increases the damage dealt by all Abyssal Hunter Operators by 5%' },
      ],
    },
  },
  story: `Once the daughter of an Aegirian architect who was forced to flee her homeland due to the Seaborn's invasion, the artistic girl named Laurentina voluntarily joined the Abyssal Hunters project that turned her into an Aegir-Seaborn hybrid supersoldier, which she believed to mold herself into her own perfect "masterpiece." After the devastating operation against Ishar-mla, one of the Seaborn "gods," and her subsequent survival and escape towards the shore, she was immediately kidnapped by Amaia, one of the leading bishops of the Church of the Deep. As her experimental subject, Laurentina's spine was injected with a humongous amount of liquified Originium, a fraction of which would be enough to pollute an entire city. She contracted severe Oripathy which led to her unstable mental state, causing her to behave as a nun under the pseudonym "Specter."\n\nLaurentina managed to reach Rhodes Island, and warned them with what sanity she had left, before succumbing again. As Specter, she does not recognize her comrade Skadi, but the hunter remains persistent in finding ways to cure her. Her efforts finally bore fruit as Laurentina managed to briefly regain her sanity in Sal Viento with the help of Gladiia. She fully regained herself in the events of Gran Faro, due to her Seaborn blood becoming stronger the closer to the sea she is, which counteracts her Oripathy.`,
  profile: `Specter, true identity unknown, records missing. Demonstrated extraordinary ability in combating large creatures and destroying sturdy targets, speculated to correlate with extensive prior combat experience.\nNow stationed as a Guard at Rhodes Island.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests done on Specter showed a blurry outline around her internal organs, with visible abnormal dark spots. Unusually high concentrations of Originium particles were present in her circulatory system, indicating signs of Infection and confirming her as Infected at this stage.\n[Cell-Originium Assimilation] 14%\nWhile Specter showed no physical signs of Originium crystals, her nervous system has suffered a case of severe Infection, the cause behind which remains unknown.\n[Blood Originium-Crystal Density] 0.31u/L\nStill within manageable range. Even then, without knowing the specific cause for her Infection, test data cannot accurately reflect her condition and are of little use.\nIn addition, Specter is plagued by severe mental health issues, including but not limited to: memory loss, emotional instability, and lack of self-awareness. Unfortunately, I am not a neurologist nor a psychiatrist and thus unqualified to speculate on the cause or solution, but I wish to make note of her mental condition in her file.\n— Medic Operator Silence`,
    },
    {
      title: 'Archive File 1',
      content: `It was difficult probing into Specter's past. When Rhodes Island took her in, she showed temporary lucidity until she lapsed into psychosis before treatment could be administered.\nIn her day-to-day life, Specter's mental condition remains unstable, thus greatly limiting her social interactions with other Operators.\nMedical staff will continue administering regular tests and treatment, although success has been limited to date.`,
    },
    {
      title: 'Archive File 2',
      content: `Based on intel gathered, Specter was once a nun residing at a convent. The matter was not investigated further due to her current mental state and Rhodes Island's present goals.\nHowever, Dr. Kal'tsit believes Specter's past is closely linked to that convent, which is also likely hiding the truth behind her mysterious past.`,
    },
    {
      title: 'Archive File 3',
      content: `The medical department's in-depth examination revealed Oripathy to be the cause of Specter's deteriorating physical health.\nFurthermore, Specter lacked both the necessary aptitude and knowledge to wield Originium powers. This is puzzling and greatly impacts her combat ability.\nDespite her difficulties, Specter was still devastatingly powerful during her missions, to the point of unsettlement. She undoubtedly has incredible room for growth and improvement.\nEven more important is her polarizing attitudes in combat and in her daily life.\nShe is demure and quiet in battle (other than a few occasional mumbles to herself), with a mindless tendency to follow orders to the end, completely unaware of potential danger and obstacles. Her inability to react has endangered her safety more than once.\nIt can be concluded that Specter is a vital part of the squad, but a commander must also adapt to her single-mindedness and plan accordingly.`,
    },
    {
      title: 'Archive File 4',
      content: `[Classified Log]\nIn actuality, when Specter first approached Rhodes Island, she was articulate and sincere, claiming she had just escaped confinement and wished to deliver a message.\nHowever, she fell silent before she could finish conveying it. In her last moments of sanity, she told the Operator who retrieved her that she has once again gotten entangled in a dark conspiracy.\nAfter she failed to tear off her habit, she then descended into madness.`,
    },
    {
      title: 'Promotion Record',
      content: `Folksong of a Faraway Land:\nWhen she prayed\nThe stars stopped shining\nWhen she wept\nThe night smiled\nWhen she lamented\nPain accelerated her madness\n—From Operator Specter's personal articles`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/centurion-branch.png', factionIcon: '/icons/factions/abyssal-hunters.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/specter/base.png', chibiSrc: '/operators/specter/chibi.webm', chibiMoveSrc: '/operators/specter/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/specter/e2.png', chibiSrc: '/operators/specter/chibi.webm', chibiMoveSrc: '/operators/specter/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'skin1', label: 'Undercurrent', src: '/operators/specter/skin1.png', chibiSrc: '/operators/specter/chibi-skin1.webm', chibiMoveSrc: '/operators/specter/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
  ],
  portrait: '/operators/specter/portrait.png',
  alter: {
    name: 'Specter the Unchained', fileNo: 'CR02', class: 'Specialist', branch: 'Dollkeeper', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Limited Headhunting - Celebration'],
    position: 'Melee',
    trait: 'Does not retreat upon receiving lethal damage, instead swaps to a <Substitute> (Substitute has 0 Block). Swaps back to the original after 20 seconds',
    tags: ['DPS', 'Fast-Redeploy'],
    illustrator: 'Skade',
    stats: { hp: 2803, atk: 817, def: 322, res: 0, block: 2, cost: 16, aspd: '1.2s', rdp: '70s' },
    range: { base: [[2, 1]], e1: [[2, 1]], e2: [[2, 1]] },
    physicalExam: { 'Physical Strength': 'Outstanding', Mobility: 'Excellent', Endurance: 'Outstanding', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Flawed' },
    talents: [
      { name: 'Embraced Self', desc: '<Substitute> reduces Movement Speed of nearby enemies by 20%, and deals 20% ATK as Arts damage to them per second', elite: 'E0' },
      { name: 'Embraced Self', desc: '<Substitute> reduces Movement Speed of nearby enemies by 30%, and deals 30% ATK as Arts damage to them per second', elite: 'E1' },
      { name: 'Embraced Self', desc: '<Substitute> reduces Movement Speed of nearby enemies by 40%, and deals 40% ATK as Arts damage to them per second', elite: 'E2' },
      { name: "Ægir's Depths", desc: 'When this unit is in the squad, all [Abyssal Hunter] Operators gain +20% Max HP', elite: 'E2' },
    ],
    skills: [
      {
        name: 'The Skill to Survive', icon: '/operators/specter/alter/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
        desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +150%',
        spInit: 25, sp: 35, dur: '25s', rank: 'M3', range: [[1, 1, 1], [1, 2, 1], [1, 1, 1]],
        levels: [
          { level: '1', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +60%', spInit: 5, sp: 45, dur: '25s' },
          { level: '2', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +70%', spInit: 5, sp: 45, dur: '25s' },
          { level: '3', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +80%', spInit: 5, sp: 45, dur: '25s' },
          { level: '4', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +90%', spInit: 10, sp: 40, dur: '25s' },
          { level: '5', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +100%', spInit: 10, sp: 40, dur: '25s' },
          { level: '6', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +110%', spInit: 10, sp: 40, dur: '25s' },
          { level: '7', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +120%', spInit: 15, sp: 40, dur: '25s' },
          { level: 'M1', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +130%', spInit: 20, sp: 40, dur: '25s' },
          { level: 'M2', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +140%', spInit: 20, sp: 35, dur: '25s' },
          { level: 'M3', desc: 'When activated, exchange HP percentage with the ally with the lowest HP percentage within range. Specter gains ATK +150%', spInit: 25, sp: 35, dur: '25s' },
        ],
      },
      {
        name: 'The Thirst to Survive', icon: '/operators/specter/alter/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
        desc: `ATK +130%, ASPD +50. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`,
        spInit: 25, sp: 35, dur: '20s', rank: 'M3',
        levels: [
          { level: '1', desc: `ATK +40%, ASPD +10. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 15, sp: 40, dur: '13s' },
          { level: '2', desc: `ATK +50%, ASPD +14. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 15, sp: 40, dur: '13s' },
          { level: '3', desc: `ATK +60%, ASPD +18. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 15, sp: 40, dur: '13s' },
          { level: '4', desc: `ATK +70%, ASPD +22. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 20, sp: 40, dur: '15s' },
          { level: '5', desc: `ATK +80%, ASPD +26. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 20, sp: 40, dur: '15s' },
          { level: '6', desc: `ATK +90%, ASPD +30. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 20, sp: 40, dur: '15s' },
          { level: '7', desc: `ATK +100%, ASPD +34. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 25, sp: 35, dur: '17s' },
          { level: 'M1', desc: `ATK +110%, ASPD +38. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 25, sp: 35, dur: '18s' },
          { level: 'M2', desc: `ATK +120%, ASPD +44. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 25, sp: 35, dur: '19s' },
          { level: 'M3', desc: `ATK +130%, ASPD +50. While skill is active, prevents Specter's HP from falling below 1\nWill be defeated when the skill ends`, spInit: 25, sp: 35, dur: '20s' },
        ],
      },
      {
        name: 'The Pressure to Survive', icon: '/operators/specter/alter/skill-3.png', activation: 'Manual', recovery: 'Auto Recovery',
        desc: 'Attack interval increases, attacks all blocked enemies, ATK +260%, Max HP +200%; deal 70% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP',
        spInit: 25, sp: 40, dur: '25s', rank: 'M3',
        note: `The Pressure to Survive increases Specter the Unchained's attack interval by 1 second. Contrary to the wording, the Unchained does not need to block the enemies for her attacks to hit them — instead, her attacks hit multiple targets within range equal to her block count.`,
        levels: [
          { level: '1', desc: 'Attack interval increases, attacks all blocked enemies, ATK +130%, Max HP +100%; deal 40% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 15, sp: 50, dur: '25s' },
          { level: '2', desc: 'Attack interval increases, attacks all blocked enemies, ATK +140%, Max HP +110%; deal 40% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 15, sp: 50, dur: '25s' },
          { level: '3', desc: 'Attack interval increases, attacks all blocked enemies, ATK +160%, Max HP +120%; deal 40% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 15, sp: 50, dur: '25s' },
          { level: '4', desc: 'Attack interval increases, attacks all blocked enemies, ATK +170%, Max HP +130%; deal 50% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 20, sp: 45, dur: '25s' },
          { level: '5', desc: 'Attack interval increases, attacks all blocked enemies, ATK +180%, Max HP +140%; deal 50% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 20, sp: 45, dur: '25s' },
          { level: '6', desc: 'Attack interval increases, attacks all blocked enemies, ATK +190%, Max HP +150%; deal 50% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 20, sp: 45, dur: '25s' },
          { level: '7', desc: 'Attack interval increases, attacks all blocked enemies, ATK +200%, Max HP +160%; deal 60% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 20, sp: 40, dur: '25s' },
          { level: 'M1', desc: 'Attack interval increases, attacks all blocked enemies, ATK +220%, Max HP +170%; deal 70% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 25, sp: 40, dur: '25s' },
          { level: 'M2', desc: 'Attack interval increases, attacks all blocked enemies, ATK +240%, Max HP +185%; deal 70% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 25, sp: 40, dur: '25s' },
          { level: 'M3', desc: 'Attack interval increases, attacks all blocked enemies, ATK +260%, Max HP +200%; deal 70% ATK as extra Physical damage when attacking enemies with HP percentage equal to or higher than self, otherwise lose 3% of HP', spInit: 25, sp: 40, dur: '25s' },
        ],
      },
    ],
    modules: {
      original: { code: 'Original', name: "Specter the Unchained's Badge", desc: 'Appointed as Specialist Operator during field operations to exercise Dollkeeper responsibilities' },
      pumx: {
        code: 'PUM-X', name: '"Vinyl Record" Box', stages: [
          { stage: 1, hp: '+200', atk: '+50', effect: 'Trait improved: Instead of retreating when defeated, switch to a <Substitute> (Substitute has 0 Block but ATK is increased) for 20 seconds before switching back to the original' },
          { stage: 2, hp: '+230', atk: '+69', def: '+20', effect: 'Embraced Self improved: <Substitute> reduces Movement Speed of nearby ground enemies by 50%, and deals 60% ATK as Arts damage to them per second. When swapping back, gain 8 SP' },
          { stage: 3, hp: '+250', atk: '+83', def: '+30', effect: 'Embraced Self improved: <Substitute> reduces Movement Speed of nearby ground enemies by 60%, and deals 80% ATK as Arts damage to them per second. When swapping back, gain 15 SP' },
        ],
      },
      pumy: {
        code: 'PUM-Y', name: 'The Beauty in the Incomplete', stages: [
          { stage: 1, hp: '+200', atk: '+25', def: '+40', effect: 'Trait improved: Instead of retreating when defeated, switch to a <Substitute> (Substitute has 0 Block, but HP is increased) for 20 seconds before switching back to the original' },
          { stage: 2, hp: '+230', atk: '+33', def: '+48', effect: "Ægir's Depths improved: When this unit is in the squad, all [Abyssal Hunter] Operators gain +25% Max HP and +0.3 SP/second (only the highest effect of this type will be applied)" },
          { stage: 3, hp: '+250', atk: '+40', def: '+55', effect: "Ægir's Depths improved: When this unit is in the squad, all [Abyssal Hunter] Operators gain +30% Max HP and +0.5 SP/second (only the highest effect of this type will be applied)" },
        ],
      },
    },
    story: `Once the daughter of an Aegirian architect who was forced to flee her homeland due to the Seaborn's invasion, the artistic girl named Laurentina voluntarily joined the Abyssal Hunters project that turned her into an Aegir-Seaborn hybrid supersoldier, which she believed to mold herself into her own perfect "masterpiece." After the devastating operation against Ishar-mla, one of the Seaborn "gods," and her subsequent survival and escape towards the shore, she was immediately kidnapped by Amaia, one of the leading bishops of the Church of the Deep. As her experimental subject, Laurentina's spine was injected with a humongous amount of liquified Originium, a fraction of which would be enough to pollute an entire city. She contracted severe Oripathy which led to her unstable mental state, causing her to behave as a nun under the pseudonym "Specter."\n\nLaurentina managed to reach Rhodes Island, and warned them with what sanity she had left, before succumbing again. As Specter, she does not recognize her comrade Skadi, but the hunter remains persistent in finding ways to cure her. Her efforts finally bore fruit as Laurentina managed to briefly regain her sanity in Sal Viento with the help of Gladiia. She fully regained herself in the events of Gran Faro, due to her Seaborn blood becoming stronger the closer to the sea she is, which counteracts her Oripathy.`,
    profile: `Specter, real name Laurentina, is a member of the "Abyssal Hunters," an Ægir military squad. She has demonstrated extreme proficiency in operations such as taking down large-scale organisms and destroying hard targets.\nAfter the "Stultifera Navis" incident, her mental state and mood began to stabilize, and her memories returned.`,
    records: [
      {
        title: 'Clinical Analysis',
        content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n[Cell-Originium Assimilation] 14.5%\nIt has been determined that the source of her nerve infection is due to excessive amounts of Originium concentrate that was forcibly injected into her spinal cord. Current medical technology is unable to deal with this condition, so this operator can only be administered minimal conservative treatment.\n[Blood Originium-Crystal Density] 0.34 u/L\nThe Originium infection progress is extremely slow, and even if this does not conform to our common sense, it is still a welcome thing. We speculate that the reason for this phenomenon may be related to the transformation that Abyssal Hunters undergo.\nOperator Specter's medical files have been moved to an extremely high-clearance database. We ask that relevant medic operators maintain strict confidentiality.\n––Medic Department Internal Notice`,
      },
      {
        title: 'Archive File 1',
        content: `After the tides of her hometown called her memories and personality back to her, Specter quickly came to accept what had happened to her during her amnesiac period. For a free and easy person like her, having another "self" was not a bitter pill to swallow. Rather, her mad "self" merely provided Specter with another angle from which to understand things, greatly broadening her horizons. In this regard, Specter is quite satisfied, although she occasionally regrets that her "self" was unable to use the inspiration of madness on the right path. As for now, she has ample time to process and digest the impact her "self" has on her surroundings, Rhodes Island, and other operators. The suspicion and bewilderment on the faces of the operators who had contact with her before brought her no shortage of novelty and amusement.\nOperator Specter's mental state has continued to stabilize as of now, and in theory, the probability of her main persona being replaced again is extremely low. However, during fierce combat, or certain situations that cause her to have intense outbursts of emotion, certain sudden changes to her behaviors have been observed. We cannot say for sure whether this is a relapse of her condition, or if Specter is deliberately imitating her past self in search of "inspiration." We recommend continuing closely monitoring the operator's mental state as much as possible.\n––Anonymous Operator, Medical Department`,
      },
      {
        title: 'Archive File 2',
        content: `Unlike the elusive Gladiia or the reclusive Skadi, Specter is not only the most approachable Abyssal Hunter, but also the only one who will offer brief descriptions of Ægir for others. After chatting with her, many operators got their first glimpse into this mysterious deep-sea country.\nIn Specter's own words, in the ocean far from land's shores lies a utopian country: there is no Originium, the people do not have to worry about survival, and citizens are assigned to work where they are best suited according to their personal abilities. Light covers the bottom of the sea, and each transparent dome carves out a small piece of paradise. Everyday life is filled with various automatic equipment, and almost all mechanized manual labor is completed by high-end technological products. As a whole, the society is even more ideal than the images conceived in Terra's most cutting-edge science fiction novels.\nSpecter's descriptions undoubtedly satisfied most operators' conception of an exotic, far-flung country, and they naturally ignored the things she mentioned far less often: the immense pressure that the Seaborn posed to the survival of the Ægir people, and the destruction wrought upon Ægir by the Seaborn's followers.\nThe Abyssal Hunters invariably face the same problems on land that they did beneath the waves.\nBut due to their lack of manpower, the Abyssal Hunters are unable to change anything. In the face of the scourge of the seas that cannot be completely driven out even with the Ægir's science and technology, what can the land-dwellers' puny technology accomplish?\nThis is the Abyssal Hunters' status quo. Gladiia has long been concerned about this, and Specter is well aware of it.\nHaving that said, she has no reservations about cooperating with her friends on land. This is not due to some calculus based on ability or practicality, but rather because on an emotional level, she feels that fighting with these soft, vulnerable companions might make miracles.\nThat is the reason she leads the charge into enemy lines, her chainsaw's battle-dance opening up the slimmest of chances for her friends.\nAfter all, she already created a chance for Skadi's team to kill a so-called "Him."\nWhy can't she do it again?`,
      },
      {
        title: 'Archive File 3',
        content: `The operators who take care of Specter on Rhodes Island have found that she tends to stare at sculptures or paintings for a period of time in complete silence. And once Specter returns to herself and expresses her thoughts on these things, the operators finally come to understand that it was her inherent love of art that soothed the scars on her psyche.\nFor Specter, art was the expectation bestowed upon her by Ægir society, as well as her own life's pursuit. Thanks to the nature of her parents' work, she had access to Ægir's bountiful art collection since a young age. Among the various art mediums, sculpture left an indelible imprint within Specter. She still remembers that snow-white sculpture. The moment she laid eyes on it, time seemed to stand still the clock's hand refused to turn. She indulged in the eternal giant displayed before her, coming to realize what true art and beauty is. To this day, she does not understand the idea behind the creation's sculptor, nor has she seen that statute again. However, all the emotional expressivity carried in that piece of stone have long found a home in her heart, and she hopes that one day she can become a sculptor acknowledged by Ægir. One day, she, Laurentina, will be able to create her own sculptures.\nIf she had not become an Abyssal Hunter.`,
      },
      {
        title: 'Archive File 4',
        content: `Specter's metamorphosis from a sculpture apprentice into an Abyssal Hunter may appear to be an accident to some; however, what they do not know is that Ægir's technology and institutions can ensure that their chosen personnel will never deviate from the basic needs of their post. Because of this, citizens generally do not refuse when summoned by state institutions such as the Abyssal Hunters. Specter completed her metamorphosis with ease, quickly mastered what she was trained for, and officially became an Abyssal Hunter, hunting Seaborn along with Gladiia. Thus, her obsession with beauty turned into a deep hatred of the Seaborn. It may be the case that Seaborn evolve into striking forms that leave people awestruck, but this cannot be considered beauty - rather, it is more of a byproduct of evolutionary needs. The Ægirians' most ingenious creations are useless pieces of artifice in these creatures' eyes, a perspective that Specter could not tolerate. The 2nd Abyssal Hunter team to which she belonged was once responsible for clearing out a large Seaborn lair: an entire city that had fallen into the sea, its various buildings turned into breeding nests. When she saw the colors bleeding from torn oil paintings and the desecrated stone statues covered with nests, she no longer had any reservations in her heart about slaying the Seaborn.\nNow that civilization has encountered vermin, Specter is more than happy to play the role of exterminator.\nThrough their deaths, Ægir's survival is forged.`,
      },
      {
        title: 'Promotion Record',
        content: `"You want to know more about the folks who experimented on me?"\n"I pretty much exterminated them all, Gladiia."\n"I need to review the information and combine it with the intel provided by Iberia."\n"Alright, let me try to think back."\n"Quintus, the one you ran circles around, is probably the least worth talking about among the bunch."\n"He couldn't see anything outside of the experiments, living inside a dreamscape he wove for himself, single-mindedly power-hungry and conceited."\n"So, it wasn't hard to deal with him, right?"\n"Mm, next one."\n"Amaia, that damn Liberi. You probably saw her on that Iberian ship."\n"Elegant, and far more dangerous."\n"That's right. She was in charge of recording down my mental state and providing feedback after the experiment. Given how knowledgeable and accomplished she was, it's a pity she was so well-suited for this job."\n"She might've treated me the nicest among the experimenters, but you know what, Gladiia? She never actually liked me. In fact, she had a lot of things to say about the way we refused to follow nature's ordained trajectory."\n"Hmph."\n"In the end, becoming food for the Seaborn perhaps was what suited her heart best. Alas, for someone like her, Terra's future only has enough room for the Seaborn."\n"It's not hard to find crazed cultists like her along the coast."\n"As for the last guy, he... he wasn't a bishop."\n"Hmm?"\n"All I remember is, he was the one who carried out the experiment's procedure... Nngh..."\n"Are you alright, Laurentina?"\n"I'm fine, I'm fine... Just getting some phantom pains..."\n"He rarely showed himself except to conduct the operations... The cultists seemed to call him... 'Sire'..."\n"'Sire,' huh? I'll remember that."\n"Quintus and Amaia are both dead. That guy will probably be watching his back a lot more carefully from now on."\n"You don't need to worry, Laurentina."\n"I will deal with this scourge."`,
      },
    ],
    classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/dollkeeper-branch.png',
    skins: [
      { id: 'base', label: 'Base', src: '/operators/specter/alter/base.png', chibiSrc: '/operators/specter/alter/chibi.webm', chibiMoveSrc: '/operators/specter/alter/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
      { id: 'e2', label: 'Elite 2', src: '/operators/specter/alter/e2.png', chibiSrc: '/operators/specter/alter/chibi.webm', chibiMoveSrc: '/operators/specter/alter/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
      { id: 'skin1', label: 'Born as One', src: '/operators/specter/alter/skin1.png', chibiSrc: '/operators/specter/alter/chibi-skin1.webm', chibiMoveSrc: '/operators/specter/alter/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    ],
    portrait: '/operators/specter/alter/portrait.png',
  },
}

export default specter
