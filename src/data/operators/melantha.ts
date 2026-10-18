import type { Operator } from '../../types'

const melantha: Operator = {
  name: 'Melantha', fileNo: 'PA41', class: 'Guard', branch: 'Dreadnought', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A4', position: 'Melee', race: 'Feline', gender: 'Female', birthplace: 'Victoria',
  birthday: 'March 19th', height: '161 cm', combatExp: 'Half a year', infectionStatus: 'Infected', illustrator: '一立里子',
  cv: { JP: 'Yuko Hara', CN: 'Yue Xin', EN: 'Penelope Rawlins', KR: 'Yoon Mi-na' },
  trait: 'Blocks 1 enemy',
  tags: ['DPS', 'Survival'],
  stats: { hp: 2745, atk: 803, def: 155, res: 0, block: 1, cost: 15, aspd: '1.5s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'ATK Up', desc: 'ATK +8%', elite: 'E1' }],
  skills: [{
    name: 'ATK Up α', icon: '/operators/melantha/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +50%', spInit: 0, sp: 40, rank: 'Rank 7', dur: '20s',
    levels: [
      { level: '1', desc: 'ATK +10%', spInit: 0, sp: 50, dur: '20s' },
      { level: '2', desc: 'ATK +15%', spInit: 0, sp: 50, dur: '20s' },
      { level: '3', desc: 'ATK +20%', spInit: 0, sp: 50, dur: '20s' },
      { level: '4', desc: 'ATK +30%', spInit: 0, sp: 45, dur: '20s' },
      { level: '5', desc: 'ATK +35%', spInit: 0, sp: 45, dur: '20s' },
      { level: '6', desc: 'ATK +40%', spInit: 0, sp: 45, dur: '20s' },
      { level: '7', desc: 'ATK +50%', spInit: 0, sp: 40, dur: '20s' },
    ],
  }],
  modules: {},
  story: `Melantha is a young Feline from an upper-class family in Victoria, her family's background led to her involvement with spices at a very young age, often assisting her parents in developing new aromatherapy products. She was an intelligent but frail girl with a penchant for arts and literature until she was struck by Oripathy. She came to Rhodes Island for treatment and is now the captain of Op Reserve A4. Although shy and withdrawn, she has a good grasp of how her teammates in A4 behave and how to deal with them, making her an attentive and efficient leader.`,
  profile: `Melantha is the captain of Reserve Op Team A4 and a citizen of Victoria. Before she took up her current post, she was a typical jobless Infected. After an exceptional performance on her tests, she received an offer to join Rhodes Island.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 2%\nSubject is mildly infected. There is a lesion upon the subject's left shoulder, though the infection has largely been contained and is in stable condition.\n[Blood Originium-Crystal Density] 0.25u/L\nResults of internal circulation tests have been positive. Strength training is recommended as part of the course of treatment.\n\n"Melantha is still growing and needs to eat food high in nutrients."\n– Medic Team Intern Hibiscus`,
    },
    {
      title: 'Archive File 1',
      content: `Melantha was born in Londinium, the capital of the Kingdom of Victoria. Her father is a trader engaged in the bulk spice trade. He runs several spice mills of his own. Her mother is the head of the family's aromatherapy flagship store in the heart of Londinium.\n\nFollowing in the footsteps of her parents, Melantha got involved in spices at a very young age, often assisting them in developing new aromatherapy productions. Melantha's experiences have been heavily influenced by her parents.`,
    },
    {
      title: 'Archive File 2',
      content: `Melantha was a student of the Wessex Private Middle School when she was young. She received exceptional marks in all her classes, but because she was soft spoken and lacked communication skills, she was never the center of attention or very popular.\n\nHer lack of friends remains due to her unwillingness to change her personality. With her parents' help, she immersed herself into upper-class academic activities, including art, literature, and poetry. In traditional Victorian society, the arts are an important part of a woman's formal education.\n\nIn addition, in order to strengthen her weak constitution, Melantha's parents arranged for her to study swordsmanship and other popular upper-class sports.\n\nAfter the Infected crisis broke out, Melantha was herself Infected. Her parents arranged for her to receive treatment from Rhodes Island Pharmaceutical's. And before long, she was on the way to the company for treatment.`,
    },
    {
      title: 'Archive File 3',
      content: `Melantha has a close relationship with all the other members of Op Reserve Team A4. Introverted by nature, she initially worried about whether she would be able to serve well in her role as Op Reserve Team A4's captain, but with the help of her companions on the team, she broke through her inner obstacles.\n\nThe lively and cheerful Cardigan is her inseparable friend. In both life and on the battlefield, they maintain a strong and complementary relationship.\n\nMelantha also has great respect for the mature and dependable Operator Steward. She feels both guilty and grateful to Ansel, who is in charge of maintaining her health records as well as providing her with daily treatment. Finally, Adnachiel is the Operator that Melantha understands the least. Since the beginning, she has struggled to figure out what this kid from Laterano might be thinking. Nevertheless, Adnachiel hasn't caused any problems in battle.\n\nDuring her tenure as captain, her subordinates have all spoken highly of her attentive and careful nature. Her serious and disciplined qualities have enabled her to complete all the missions Rhodes Island has entrusted to her.`,
    },
    {
      title: 'Archive File 4',
      content: `So far, both existing archives and the observations of her fellow Operators have failed to grasp just what kind of swordsmanship Melantha employs. This is one of Melantha's few mysteries.\n\nJudging from test records and daily battle videos, her swordsmanship appears to have originated from the Victorian traditional duelist's style, but at some point during her training, she must have picked up some heavy influences from Eastern sword arts.\n\nMelantha's weapon can also be looked at as a kind of circumstantial evidence for this. She uses an exceptionally fine yet extremely sharp straight sword. Current data makes clear that this weapon is only used in Yan and some parts of the Far East.\n\nMelantha's swordsmanship is agile and her skills are outstanding. In terms of combat techniques, Melantha is skilled in tactical assault. Even without support, she can rely upon her mobility to move about the battlefield and hide when necessary.\n\nOn the other hand, Melantha lacks the ability for effective direct confrontation and she displays certain deficiencies in stability during high-intensity operations.\n\nUp until now, Melantha has trained under the guidance of Franka.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/dreadnought-branch.png', factionIcon: '/icons/factions/op-reserve-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/melantha/base.png', chibiSrc: '/operators/melantha/chibi.webm', illustrator: '一立里子' },
    { id: 'skin1', label: 'Letters from Wessex', src: '/operators/melantha/skin1.png', chibiSrc: '/operators/melantha/chibi-skin1.webm', illustrator: '一立里子' },
  ],
  portrait: '/operators/melantha/portrait.png',
  portraitFocus: { y: -4.8, x: 34.1, zoom: 296 },
}

export default melantha
