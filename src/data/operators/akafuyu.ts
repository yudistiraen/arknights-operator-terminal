import type { Operator } from '../../types'

const akafuyu: Operator = {
  name: 'Akafuyu', fileNo: 'HK04', class: 'Guard', branch: 'Soloblade', rarity: 5, level: 70, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Higashi', position: 'Melee', race: 'Aegir', gender: 'Female', birthplace: 'Higashi',
  birthday: 'March 27th', height: '176 cm', combatExp: '8 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Kumatangent (credited as "熊太")',
  cv: { JP: 'Yumi Uchiyama', CN: 'Lu Xiaotong (credited as "Thea" in EN)', EN: 'Reiko Narao', KR: 'Kim Yul' },
  trait: "Can't be healed by other units. Recovers 70 self HP every time this operator attacks an enemy",
  tags: ['Survival', 'DPS'],
  stats: { hp: 3635, atk: 758, def: 383, res: 0, block: 1, cost: 25, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Nobukage-ryu - Hatobu', desc: 'Gains up to +50 ASPD Tenacity (reaches maximum bonus when losing 50% Max HP)', elite: 'E0' },
    { name: 'Nobukage-ryu - Hatobu', desc: 'Gains up to +75 ASPD Tenacity (reaches maximum bonus when losing 60% Max HP)', elite: 'E1' },
    { name: 'Nobukage-ryu - Hatobu', desc: 'Gains up to +100 ASPD Tenacity (reaches maximum bonus when losing 70% Max HP)', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Nobukage-ryu - Kaminari Gatana no Zei', icon: '/operators/akafuyu/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Cannot block enemies, ATK +80%, and attacks turn into double strikes', spInit: 0, sp: 16, dur: '12s', rank: 'M3',
      levels: [
        { level: '1', desc: `Cannot block enemies, ATK +20%, and attacks turn into double strikes`, spInit: 0, sp: 20 },
        { level: '2', desc: `Cannot block enemies, ATK +25%, and attacks turn into double strikes`, spInit: 0, sp: 20 },
        { level: '3', desc: `Cannot block enemies, ATK +30%, and attacks turn into double strikes`, spInit: 0, sp: 20 },
        { level: '4', desc: `Cannot block enemies, ATK +35%, and attacks turn into double strikes`, spInit: 0, sp: 20 },
        { level: '5', desc: `Cannot block enemies, ATK +40%, and attacks turn into double strikes`, spInit: 0, sp: 20 },
        { level: '6', desc: `Cannot block enemies, ATK +45%, and attacks turn into double strikes`, spInit: 0, sp: 20 },
        { level: '7', desc: `Cannot block enemies, ATK +50%, and attacks turn into double strikes`, spInit: 0, sp: 19 },
        { level: 'M1', desc: `Cannot block enemies, ATK +60%, and attacks turn into double strikes`, spInit: 0, sp: 18 },
        { level: 'M2', desc: `Cannot block enemies, ATK +70%, and attacks turn into double strikes`, spInit: 0, sp: 17 },
        { level: 'M3', desc: `Cannot block enemies, ATK +80%, and attacks turn into double strikes`, spInit: 0, sp: 16 },
      ],
    },
    {
      name: 'Nobukage-ryu - Juumonji Masaru', icon: '/operators/akafuyu/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +100%, DEF +120%', spInit: 15, sp: 25, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +50%, DEF +70%`, spInit: 15, sp: 35, dur: '16s' },
        { level: '2', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +50%, DEF +70%`, spInit: 15, sp: 34, dur: '16s' },
        { level: '3', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +50%, DEF +70%`, spInit: 15, sp: 33, dur: '16s' },
        { level: '4', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +60%, DEF +80%`, spInit: 15, sp: 32, dur: '18s' },
        { level: '5', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +60%, DEF +80%`, spInit: 15, sp: 31, dur: '18s' },
        { level: '6', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +60%, DEF +80%`, spInit: 15, sp: 30, dur: '18s' },
        { level: '7', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +70%, DEF +90%`, spInit: 15, sp: 28, dur: '20s' },
        { level: 'M1', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +80%, DEF +100%`, spInit: 15, sp: 27, dur: '20s' },
        { level: 'M2', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +90%, DEF +110%`, spInit: 15, sp: 26, dur: '20s' },
        { level: 'M3', desc: `Immediately loses 50% current HP and gain 1 Shield (disappears when the skill ends), ATK +100%, DEF +120%`, spInit: 15, sp: 25, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Akafuyu's Badge", desc: 'Appointed as Guard Operator to exercise Soloblade responsibilities' },
    sblx: { code: 'SBL-X', name: 'Samurai Armor', stages: [
      { stage: 1, atk: '+55', def: '+30', effect: 'New trait: Gains 25% Sanctuary when HP is below 50%' },
      { stage: 2, atk: '+65', def: '+42', effect: 'New trait: +8% DEF when blocking an enemy' },
      { stage: 3, atk: '+70', def: '+50', effect: 'New trait: +12% DEF when blocking an enemy' },
    ]},
  },
  story: `Higashi swordbearer Akafuyu, the Nobukage-ryu disciple.`,
  profile: `Akafuyu, a swordsman from Higashi, is the successor of the Nobukage-ryu Iai-suemonogiri Kenpou. Aside from her mastery of traditional swordsmanship, she also possesses excellent modern combat and tactical abilities. Given how distinctively extraordinary she is as an individual, it will take some time for her to familiarize herself with Rhodes Island's combat style.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Akafuyu shows no signs of Originium infection.\n\n[Blood Originium-Crystal Density] 0.13u/L\nOperator Akafuyu rarely comes into contact with Originium.\n\nThe bitch wakes up before daylight and starts training every day without exception... How can she not be in good shape? Argh, I wanna arm wrestle with her... If I get to fight her, that's even better!\n—Gavial` },
    { title: 'Archive File 1', content: `Regular physical exams show that Akafuyu's vision is much worse than average. Further tests and examinations confirm that this is not a result of Oripathy or other diseases, and current technologies are unable to correct her vision.\nAkafuyu denies her vision is impaired, and, in actuality, her performance on the battlefield is exceptional; she has shown herself to be more perceptive than your average person. Clearly, her other, heightened senses and her combat skills make up for her decreased vision.\nThe benefits they provide in her daily life is evidently minimal, however. If you ever find her in the hallway running into the wall head on, try not to point it out to her, lest she gets angry because of that.` },
    { title: 'Archive File 2', content: `Akafuyu tends to be somewhat old-school with her living habits. She wakes up as soon as the sun rises before practicing her swordsmanship, eating her meals, and heading to bed at nightfall if there is nothing else to attend to.\nWhat is surprising is that she is not the kind of person who is completely removed from modern lifestyles. When she hangs out with her fellow Higashi operators, she would often loudly compliment Utage's trendy nails and defeat everyone else in video games, especially action games.\n"You think I'm the kind of girl who does nothing but battle? Besides ale and grub, we, too, like to hang out and game after training! Action games improve your ability to react as a commander. Don't you know that? What? How do I play games when I can barely see? What is that supposed to mean? I can see fine! And haven't you heard the best action games are all rhythm games?"\nIt seems that, with the right amount of mass appeal, no barriers can stop popular cultural works proliferating, no matter where.` },
    { title: 'Archive File 3', content: `Akafuyu has never attempted to hide her upbringing.\n"Yeah, I'm that asshole's bastard child, and what about it? He's never admitted it anywhere. My name's been Akafuyu since I was five. Whatever my surname is, it hasn't a thing to do with him one bit."\nShe was born into one of Higashi's eight distinguished families. As the illegitimate child of a noble, she was entrusted to and raised in a shrine. She was considered to be a stubborn, unruly child as she rarely obeyed any instructions. As such, she was often punished. When she was five, she met an elder from her family and was subsequently taken in by her. Under her care, she began to receive training in swordsmanship and military tactics, slowly becoming a formidable military leader. For all this time, she has never forgotten who her blood father was, but there was only ever one family member whom she trusted and one master whom she followed.\nOut of consideration that Akafuyu is unwilling to have anything more to do with her blood father, his surname will remain redacted in this record.` },
    { title: 'Archive File 4', content: `[Classified Log]\nAkafuyu is not just a swordsman; she is also a general of the military.\nWhen the Bloodpeak Campaign came to a conclusion, Higashi found itself in another civil conflict. During the conflict, there was a general in service of the Mitsumoto faction of the Southern Court who, unhappy with her brother, the family head, stirring up a new civil conflict, chose to defect to the north and thus helping bring this conflict to a fast conclusion. Though there was a truce, it did not mean there was an everlasting peace. In the twenty years since, the two courts found themselves in frequent clashes, and the flames of war raged incessantly. In particular, the defected general was the target of multiple assassination attempts by the south. This general is Akafuyu's aunt and also the master she serves.\nFor years, Akafuyu led a squadron that has braved through hell and high water on the battlefield until she had a close brush with death when she found herself fallen into the enemy's trap. Although she emerged unscathed, as the commander, she was exiled by the Northern Court for the failure. She left Higashi behind and eventually found her way to Rhodes Island.\nDespite being exiled by the only master she has ever trusted, Akafuyu had no complaints about the punishment she received. She still firmly believes that she will one day return to Higashi to show her master how far she has come and to fight and bring an end to the war for her master's ideals.\nWhat Akafuyu doesn't know, however, is that, contrary to her belief, it was no mere coincidence that she received an invitation to Rhodes Island. As per the client's request, this record shall remain hidden from the operator's eyes.\n\nAdditional remark: Owing to the above, direct, one-on-one contact between Akafuyu and operator Shirayuki should be kept to a minimum.` },
    { title: 'Promotion Record', content: `"She is smart and hard-working.\nI looked after her for all these years not because I wanted her to do battle for me or take my place as my successor.\nI wanted her to not be tied down by the flames of war before her. I wish for her to find her own meaning of battle. I hope she will come to understand that we will one day face even greater perils.\nI ask of you, please help her. I know you can do it."` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/soloblade-branch.png', factionIcon: '/icons/factions/higashi.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/akafuyu/base.png', chibiSrc: '/operators/akafuyu/chibi.webm', illustrator: 'Kumatangent (credited as "熊太")' },
    { id: 'e2', label: 'Elite 2', src: '/operators/akafuyu/e2.png', chibiSrc: '/operators/akafuyu/chibi.webm', illustrator: 'Kumatangent (credited as "熊太")' },
    { id: 'skin1', label: 'Temperament', src: '/operators/akafuyu/skin1.png', chibiSrc: '/operators/akafuyu/chibi-skin1.webm', illustrator: 'Kumatangent (credited as "熊太")' },
  ],
  portrait: '/operators/akafuyu/portrait.png',
  portraitFocus: { y: 6.1, x: 42.6, zoom: 372 },
}

export default akafuyu
