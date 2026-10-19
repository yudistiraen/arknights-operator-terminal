import type { Operator } from '../../types'
import nightingaleVoice from '../voices/nightingale'

const nightingale: Operator = {
  name: 'Nightingale', fileNo: 'FO03', class: 'Medic', branch: 'Multi-target', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Followers', position: 'Ranged', race: 'Sarkaz', gender: 'Female', birthplace: 'Kazdel',
  birthday: 'May 4th', height: '164 cm', combatExp: '1 year', infectionStatus: 'Showed physical signs of Originium, infection confirmed by medical report.', illustrator: 'Skade',
  cv: { JP: 'Yui Ishikawa', CN: 'Shi Yin', EN: 'Sophie Colquhoun', KR: 'Lee Hyun-jin' },
  voice: nightingaleVoice,
  trait: 'Restores the HP of 3 allies simultaneously',
  tags: ['Healing', 'Support'],
  stats: { hp: 1705, atk: 350, def: 169, res: 5, block: 1, cost: 18, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [
      [1,1,1,0],
      [1,2,1,1],
      [1,1,1,0],
    ],
    e1: [
      [1,1,1,1],
      [1,2,1,1],
      [1,1,1,1],
    ],
    e2: [
      [1,1,1,1],
      [1,2,1,1],
      [1,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Flawed', Mobility: 'Flawed', Endurance: 'Flawed', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Outstanding' },
  talents: [
    { name: "White Fiend's Protection", desc: 'RES of allies within range +15', elite: 'E2' },
    { name: 'Fleeting Phantom', desc: 'Can summon Phantoms. Phantoms cannot attack or block enemies, but have 75 RES and 30% Physical Dodge and are more likely to be targeted by enemies. Phantoms lose 3% Max HP per second', elite: 'E2' },
  ],
  skills: [
    {
      name: "Healing Up γ", icon: '/operators/nightingale/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: "ATK +90%", spInit: 20, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: "ATK +40%", spInit: 20, sp: 40, dur: '30s' },
        { level: '2', desc: "ATK +45%", spInit: 20, sp: 40, dur: '30s' },
        { level: '3', desc: "ATK +50%", spInit: 20, sp: 40, dur: '30s' },
        { level: '4', desc: "ATK +55%", spInit: 20, sp: 35, dur: '30s' },
        { level: '5', desc: "ATK +60%", spInit: 20, sp: 35, dur: '30s' },
        { level: '6', desc: "ATK +65%", spInit: 20, sp: 35, dur: '30s' },
        { level: '7', desc: "ATK +70%", spInit: 20, sp: 32, dur: '30s' },
        { level: 'M1', desc: "ATK +75%", spInit: 20, sp: 32, dur: '30s' },
        { level: 'M2', desc: "ATK +80%", spInit: 20, sp: 32, dur: '30s' },
        { level: 'M3', desc: "ATK +90%", spInit: 20, sp: 30, dur: '30s' },
      ],
    },
    {
      name: "Arts Shield", icon: '/operators/nightingale/skill-2.png', activation: 'Auto', recovery: 'Auto',
      desc: "The next heal grants all targets a Barrier that lasts for 5 seconds\nThe barrier can absorb Arts damage equal to 90% of Nightingale's ATK and increases the target's RES by +20; Can store 3 charge(s)", spInit: 0, sp: 8, rank: 'M3',
      levels: [
        { level: '1', desc: "The next heal grants all targets a Barrier that lasts for 3 seconds\nThe barrier can absorb Arts damage equal to 40% of Nightingale's ATK and increases the target's RES by +5; Can store 1 charge(s)", spInit: 0, sp: 11 },
        { level: '2', desc: "The next heal grants all targets a Barrier that lasts for 3 seconds\nThe barrier can absorb Arts damage equal to 43% of Nightingale's ATK and increases the target's RES by +5; Can store 1 charge(s)", spInit: 0, sp: 11 },
        { level: '3', desc: "The next heal grants all targets a Barrier that lasts for 3 seconds\nThe barrier can absorb Arts damage equal to 46% of Nightingale's ATK and increases the target's RES by +5; Can store 1 charge(s)", spInit: 0, sp: 11 },
        { level: '4', desc: "The next heal grants all targets a Barrier that lasts for 3.5 seconds\nThe barrier can absorb Arts damage equal to 50% of Nightingale's ATK and increases the target's RES by +10; Can store 2 charge(s)", spInit: 0, sp: 10 },
        { level: '5', desc: "The next heal grants all targets a Barrier that lasts for 3.5 seconds\nThe barrier can absorb Arts damage equal to 53% of Nightingale's ATK and increases the target's RES by +10; Can store 2 charge(s)", spInit: 0, sp: 10 },
        { level: '6', desc: "The next heal grants all targets a Barrier that lasts for 3.5 seconds\nThe barrier can absorb Arts damage equal to 56% of Nightingale's ATK and increases the target's RES by +10; Can store 2 charge(s)", spInit: 0, sp: 10 },
        { level: '7', desc: "The next heal grants all targets a Barrier that lasts for 4 seconds\nThe barrier can absorb Arts damage equal to 60% of Nightingale's ATK and increases the target's RES by +15; Can store 2 charge(s)", spInit: 0, sp: 10 },
        { level: 'M1', desc: "The next heal grants all targets a Barrier that lasts for 4 seconds\nThe barrier can absorb Arts damage equal to 70% of Nightingale's ATK and increases the target's RES by +15; Can store 3 charge(s)", spInit: 0, sp: 9 },
        { level: 'M2', desc: "The next heal grants all targets a Barrier that lasts for 4 seconds\nThe barrier can absorb Arts damage equal to 80% of Nightingale's ATK and increases the target's RES by +15; Can store 3 charge(s)", spInit: 0, sp: 9 },
        { level: 'M3', desc: "The next heal grants all targets a Barrier that lasts for 5 seconds\nThe barrier can absorb Arts damage equal to 90% of Nightingale's ATK and increases the target's RES by +20; Can store 3 charge(s)", spInit: 0, sp: 8 },
      ],
    },
    {
      name: "Sanctuary", icon: '/operators/nightingale/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Range expands; ATK +80%; RES of allies within range +150% and grants them 25% Arts Dodge", spInit: 115, sp: 120, dur: '60s', rank: 'M3', range: [[1,1,1,0,0],[1,1,1,1,0],[1,2,1,1,1],[1,1,1,1,0],[1,1,1,0,0]],
      levels: [
        { level: '1', desc: "Range expands; ATK +30%; RES of allies within range +75% and grants them 10% Arts Dodge", spInit: 100, sp: 120, dur: '60s' },
        { level: '2', desc: "Range expands; ATK +30%; RES of allies within range +80% and grants them 10% Arts Dodge", spInit: 100, sp: 120, dur: '60s' },
        { level: '3', desc: "Range expands; ATK +30%; RES of allies within range +85% and grants them 10% Arts Dodge", spInit: 100, sp: 120, dur: '60s' },
        { level: '4', desc: "Range expands; ATK +40%; RES of allies within range +90% and grants them 15% Arts Dodge", spInit: 105, sp: 120, dur: '60s' },
        { level: '5', desc: "Range expands; ATK +40%; RES of allies within range +95% and grants them 15% Arts Dodge", spInit: 105, sp: 120, dur: '60s' },
        { level: '6', desc: "Range expands; ATK +40%; RES of allies within range +100% and grants them 15% Arts Dodge", spInit: 105, sp: 120, dur: '60s' },
        { level: '7', desc: "Range expands; ATK +50%; RES of allies within range +105% and grants them 20% Arts Dodge", spInit: 110, sp: 120, dur: '60s' },
        { level: 'M1', desc: "Range expands; ATK +60%; RES of allies within range +120% and grants them 20% Arts Dodge", spInit: 110, sp: 120, dur: '60s' },
        { level: 'M2', desc: "Range expands; ATK +70%; RES of allies within range +135% and grants them 20% Arts Dodge", spInit: 110, sp: 120, dur: '60s' },
        { level: 'M3', desc: "Range expands; ATK +80%; RES of allies within range +150% and grants them 25% Arts Dodge", spInit: 115, sp: 120, dur: '60s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Nightingale's Badge", desc: 'Appointed as Medic Operator during field operations to exercise Multi-target Medic responsibilities' },
    rinx: { code: 'RIN-X', name: "'Closed Hope'", stages: [
      { stage: 1, atk: '+40', res: '+5', effect: 'New trait: Attack Range expands' },
      { stage: 2, atk: '+55', res: '+5', effect: "White Fiend's Protection improved: Allies within range gain +15 RES and receive 3% more healing" },
      { stage: 3, atk: '+65', res: '+5', effect: "White Fiend's Protection improved: Allies within range gain +15 RES and receive 5% more healing" },
    ]},
    riny: { code: 'RIN-Y', name: "'Nocturnal Echoes'", stages: [
      { stage: 1, hp: '+160', aspd: '+5', effect: 'New trait: Restores the HP of 4 allied units simultaneously' },
      { stage: 2, hp: '+195', aspd: '+6', effect: 'Fleeting Phantom improved: Nightingale gains 3 Phantoms on deployment (30% Physical Dodge)' },
      { stage: 3, hp: '+220', aspd: '+7', effect: 'Fleeting Phantom improved: Nightingale gains 3 Phantoms on deployment, Phantoms gain 40% Physical Dodge' },
    ]},
  },
  story: "Although appearing to be a frail Sarkaz girl among the Followers, Liz is an unusual being with a rather eerie past. She is an artificial creation of the inhumane Arts experiment of the Confessarii, and her purpose is to act as a vessel for the souls of the Kings of Sarkaz so that a new lord will born again from their line and live eternally. Thus, Liz had been \"a prisoner of her own conscience\" and lacking a true soul of her own. Being disgusted of their ugliness, Qui'saršinnag aka. Shining fought against her fellow Confessarii and escaped together with her. To free her from her bondage, Shining decided to erase her painful memory.\n\nNow reborn anew as \"Nightingale,\" Liz joined Rhodes Island together with the Followers to both seek shelter from the Confessarii and to live as a free man. Despite her physical disability that forced her to stay on a wheelchair most of the time, her outstanding knowledge in medical physiology aids her in treating other Infected, wherever and whoever they are. In the meantime, her uniqueness brings attention to Kal'tsit who swears to help her free from the mental prison of the Confessarii's \"King of Sarkaz\".",
  profile: "Nightingale, Sarkaz, a member of the infected-assistance group Followers, all other history missing. Possessed amazing talent for Originium Arts, field first aid and clinical skills.\nCurrently undergoing treatment at Rhodes Island while offering her service as field medic and Originium Arts support.\nShe now receives treatment in Rhodes Island, as well as provides battlefield medical aid, Originium technical assistance, and other services to Rhodes Island.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "Imaging test for this Operator showed blurry outline of internal organs with unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected.\n[Cell-Originium Assimilation] 9%\nOperator Nightingale showed conspicuous symptoms of infection.\n[Blood Originium-Crystal Density] 0.41u/L\nFar beyond average. Close medical monitoring of Operator Nightingale is recommended.\nNightingale's condition is more severe compared to the average infected, and she has other problems as well. She showed obvious lapse of memory different from that of the Doctor, in that the cause seemed to be medication or possibly even a chemical serum that affected neural transmission. Combined with her endocrine and nervous system, plus traces throughout her body, we could confirm, after internal discussion with the medical staff, that Oripathy is not the sole culprit for Nightingale's condition.\nIt was good that Shining brought Nightingale here, no matter how you cut it. At least at Rhodes Island we can offer the poor girl a relatively free environment for her to deal with the problems.\nSadly, as one of the most skilled healers I know and someone who could easily discern symptoms and their sources, she ironically could not do the same for herself. How mockingly cruel is that?\n— Y.P., Medic Operator"
    },
    {
      "title": "Archive File 1",
      "content": "Nightingale is exceptionally versed in healing through Originium Arts. Unlike most Medic Operators, she did not have a full grasp of the principles and practice of modern medicine, nor did she score well on written exams, but she knew the human body and functions like the back of her hand. Her medical applications of Originium were also profound and left the researchers and observers in awe.\nOperator Nightingale also possessed unique Originium Arts: She can generate an invisible field around herself to mitigate, or even complete neutralize, powerful Originium energy attacks initiated by enemies. Operators not familiar with Originium Arts dubbed this field the \"Sanctuary.\"\nDr. Kal'tsit suspects Nightingale's healing talent shares the same source as the other Originium Arts she displayed, though the conjecture has not been proven to date."
    },
    {
      "title": "Archive File 2",
      "content": "Even at Rhodes Island, Nightingale remains a unique Operator.\nWhen she first arrived on the island alongside Shining and Nearl, Shining expressed her wish for the island to offer Nightingale comprehensive physical exams and a treatment plan.\nMemory loss, deficient mobility in limbs,■■■■，■■■■■■...\nThe Medic Operators all lamented at the test results. In addition to Oripathy, the other debilitating symptoms she suffered have exacerbated her condition and have far graver consequences.\nGiven the situation, Shining quietly answered all of Dr. Kal'tsit's questions--including the revelation of many classified projects.\nFollowing that inquiry, Rhodes Island accepted Nightingale for medical treatment."
    },
    {
      "title": "Archive File 3",
      "content": "When she got better, Nightingale requested going on assignments with Operators Shining and Nearl.\nDr. Kal'tsit and Operator Shining fought over the issue. Their debate changed Dr. Kal'tsit's mind. Despite vehement protests from the medical staff, the Doctor still agreed with Shining and approved Nightingale as an Operator to serve Rhodes Island.\nAlthough Operator Nightingale is still facing many physical problems and is unable to protect herself in combat, she has surprised many with her ability to turn the tide of a battle. During the course of fighting alongside her, Operators have realized that she longs to prove her worth with her actions, and that converted their attitude for her from pity to admiration.\nNightingale's inscrutable disposition and cool personality let many Operators realize the cruel truth of the land, but also the importance of Rhodes Island.\nNow, Miss Nightingale can be seen occasionally speaking with Operators other than Shining or Nearl in the hallway, sometimes even with a faint smile. The author, for one, finds joy in that."
    },
    {
      "title": "Archive File 4",
      "content": "I find myself currently unable to understand Miss Nightingale.\nHer emotions aren't just a blank sheet of paper or a tangled ball of twine. Her mood and thoughts are an impenetrable cell, sealing endless fragments of memory to trap her in herself. I can't even fathom whether she wanted this out of her own will. She probably no longer is able to distinguish herself from her imaginary persona, or reality from illusion.\nWe can go in only when Miss Nightingale chooses to come out.\nIt is near impossible and very sad.\nShining said Miss Nightingale is the sacrificial lamb of a war, a civil war... inside her own mind.\nShe's trapped in a small space, stripped of her identity and robbed of her life...\nIt's happening in places I can't detect even now.\nDr. Kal'tsit didn't want me to get involved, but I felt obligated.\nShining rescued Miss Nightingale from there, but I think Nightingale never really left. She often feels confined, incarcerated, still a bird in a cage.\nI believe I have a duty.\nWith Shining, Nearl, and the Doctor, I'll do everything I can, as I don't think of Miss Nightingale as merely a friend.\n— Amiya"
    },
    {
      "title": "Promotion Record",
      "content": "\"A fleeting illusion is finesse, simple Originium Arts sufficient to distract the enemy in a battle.\"\nYou're doing a great disservice with a description like this in a report.\nI don't know what Nightingale's been through, but as soon I saw the giant bird cage appeared out of the blue, I sensed it.\nIt wasn't a bird cage but a cell. I felt the same indescribable loneliness, or better yet, fear coming over me like the enemy did.\nNightingale saved my life, but I cannot thank her. I just don't have the guts.\nI just think you should... you should...\nStop letting her go on like this, I beg you!\n— Operator J's mission log"
    }
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/multi-target-medic-branch.png', factionIcon: '/icons/factions/followers.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/nightingale/base.png', chibiSrc: '/operators/nightingale/chibi.webm', chibiMoveSrc: '/operators/nightingale/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'e2', label: "Elite 2", src: '/operators/nightingale/e2.png', chibiSrc: '/operators/nightingale/chibi.webm', chibiMoveSrc: '/operators/nightingale/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'skin1', label: "an elegy", src: '/operators/nightingale/skin1.png', chibiSrc: '/operators/nightingale/chibi-skin1.webm', chibiMoveSrc: '/operators/nightingale/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'skin2', label: "Iakhu of Flows", src: '/operators/nightingale/skin2.png', chibiSrc: '/operators/nightingale/chibi-skin2.webm', chibiMoveSrc: '/operators/nightingale/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
  ],
  portrait: '/operators/nightingale/portrait.png',
  portraitFocus: { y: 14.2, x: 49.6, zoom: 371 },
}

export default nightingale
