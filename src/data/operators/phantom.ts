import type { Operator, OperatorAlter } from '../../types'
import tragodiaVoice from '../voices/phantom/tragodia'
import phantomVoice from '../voices/phantom'

const phantom: Operator = {
  name: 'Phantom', fileNo: 'R109', class: 'Specialist', branch: 'Executor', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Victoria', position: 'Melee', race: 'Feline', gender: 'Male', birthplace: 'Victoria',
  birthday: 'January 19th', height: '185 cm', combatExp: '9 years', infectionStatus: 'Crystals have appeared on his body. Infection confirmed by medical examination.', illustrator: 'Skade',
  cv: { JP: 'Akira Ishida', CN: 'Zhaokun Liu', EN: 'Ben Cura', KR: 'Pyo Young-jae' },
  voice: phantomVoice,
  trait: 'Significantly reduced Redeployment Time',
  tags: ['Fast-Redeploy', 'Crowd-Control', 'DPS'],
  stats: { hp: 1645, atk: 558, def: 322, res: 0, block: 1, cost: 10, aspd: '0.93s', rdp: '18s' },
  range: {
    base: [
      [2,1],
    ],
    e1: [
      [2,1],
    ],
    e2: [
      [2,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Outstanding', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Phantom in the Mirror', desc: 'Can summon a stronger clone with the same abilities as Phantom, but has its own redeployment time', elite: 'E2' },
    { name: 'Phantom Mastery', desc: 'Redeployment time of clone is reduced by 10 seconds', elite: 'E2' },
  ],
  skills: [
    {
      name: "Phantom of the Night", icon: '/operators/phantom/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: "After deployment, immediately gains 50% Physical Dodge and a Barrier that can absorb Physical damage equal to 80% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0, rank: 'M3',
      levels: [
        { level: '1', desc: "After deployment, immediately gains 20% Physical Dodge and a Barrier that can absorb Physical damage equal to 20% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: '2', desc: "After deployment, immediately gains 20% Physical Dodge and a Barrier that can absorb Physical damage equal to 25% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: '3', desc: "After deployment, immediately gains 20% Physical Dodge and a Barrier that can absorb Physical damage equal to 30% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: '4', desc: "After deployment, immediately gains 30% Physical Dodge and a Barrier that can absorb Physical damage equal to 35% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: '5', desc: "After deployment, immediately gains 30% Physical Dodge and a Barrier that can absorb Physical damage equal to 40% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: '6', desc: "After deployment, immediately gains 30% Physical Dodge and a Barrier that can absorb Physical damage equal to 45% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: '7', desc: "After deployment, immediately gains 40% Physical Dodge and a Barrier that can absorb Physical damage equal to 50% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: 'M1', desc: "After deployment, immediately gains 40% Physical Dodge and a Barrier that can absorb Physical damage equal to 60% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: 'M2', desc: "After deployment, immediately gains 40% Physical Dodge and a Barrier that can absorb Physical damage equal to 70% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
        { level: 'M3', desc: "After deployment, immediately gains 50% Physical Dodge and a Barrier that can absorb Physical damage equal to 80% of this unit's Max HP, lasting for 10 seconds", spInit: 0, sp: 0 },
      ],
    },
    {
      name: "Bloody Opus", icon: '/operators/phantom/skill-2.png', activation: 'Passive', recovery: 'Passive',
      desc: "Upon deployment, immediately gains 10 charges of a stacking +20% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0, rank: 'M3',
      levels: [
        { level: '1', desc: "Upon deployment, immediately gains 7 charges of a stacking +10% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: '2', desc: "Upon deployment, immediately gains 7 charges of a stacking +11% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: '3', desc: "Upon deployment, immediately gains 7 charges of a stacking +12% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: '4', desc: "Upon deployment, immediately gains 8 charges of a stacking +13% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: '5', desc: "Upon deployment, immediately gains 8 charges of a stacking +14% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: '6', desc: "Upon deployment, immediately gains 8 charges of a stacking +15% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: '7', desc: "Upon deployment, immediately gains 9 charges of a stacking +16% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: 'M1', desc: "Upon deployment, immediately gains 9 charges of a stacking +17% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: 'M2', desc: "Upon deployment, immediately gains 9 charges of a stacking +18% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
        { level: 'M3', desc: "Upon deployment, immediately gains 10 charges of a stacking +20% ATK buff (each attack consumes one charge)", spInit: 0, sp: 0 },
      ],
    },
    {
      name: "Night Raid", icon: '/operators/phantom/skill-3.png', activation: 'Passive', recovery: 'Passive',
      desc: "Upon deployment, immediately deals 300% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 4.5 seconds", spInit: 0, sp: 0, rank: 'M3', range: [[1,1,1],[1,2,1],[1,1,1]],
      levels: [
        { level: '1', desc: "Upon deployment, immediately deals 180% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 2 seconds", spInit: 0, sp: 0 },
        { level: '2', desc: "Upon deployment, immediately deals 190% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 2 seconds", spInit: 0, sp: 0 },
        { level: '3', desc: "Upon deployment, immediately deals 200% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 2 seconds", spInit: 0, sp: 0 },
        { level: '4', desc: "Upon deployment, immediately deals 210% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 2.5 seconds", spInit: 0, sp: 0 },
        { level: '5', desc: "Upon deployment, immediately deals 220% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 2.5 seconds", spInit: 0, sp: 0 },
        { level: '6', desc: "Upon deployment, immediately deals 230% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 2.5 seconds", spInit: 0, sp: 0 },
        { level: '7', desc: "Upon deployment, immediately deals 240% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 3 seconds", spInit: 0, sp: 0 },
        { level: 'M1', desc: "Upon deployment, immediately deals 260% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 3.5 seconds", spInit: 0, sp: 0 },
        { level: 'M2', desc: "Upon deployment, immediately deals 280% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 4 seconds", spInit: 0, sp: 0 },
        { level: 'M3', desc: "Upon deployment, immediately deals 300% ATK as Physical damage to all nearby enemies, pushes them back slightly, and randomly inflicts one of the following statuses to all targets hit (slow, bind, or stun) for 4.5 seconds", spInit: 0, sp: 0 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Phantom's Badge", desc: 'Appointed as Specialist Operator during field operations to exercise Executor responsibilities' },
    exex: { code: 'EXE-X', name: "Miss Christine's Felt", stages: [
      { stage: 1, hp: '+100', atk: '+50', effect: 'New trait: Refunds a large portion of the current DP Cost when retreated' },
      { stage: 2, hp: '+125', atk: '+62', effect: 'Phantom Mastery improved: Redeployment time of clone is reduced by 14 seconds' },
      { stage: 3, hp: '+140', atk: '+73', effect: 'Phantom Mastery improved: Redeployment time of clone is reduced by 16 seconds' },
    ]},
    exey: { code: 'EXE-Y', name: "'Think of Me'", stages: [
      { stage: 1, atk: '+40', def: '+24', effect: 'New trait: When there are no allied units in the four adjacent tiles, ATK +10%' },
      { stage: 2, atk: '+60', def: '+28', effect: 'Phantom in the Mirror improved: while both Phantom and the clone are present, both have +10% ATK' },
      { stage: 3, atk: '+75', def: '+30', effect: 'Phantom in the Mirror improved: summons an even stronger clone, and grants the clone +100 HP, +60 ATK, +40 DEF' },
    ]},
  },
  story: "Calais-Blason, Victoria (former Gaul territory)\n\nLucian the Victorian Feline hails from the former Gallic territory of Calais-Blason. Following the destruction of his hometown by a disastrous flood, he and other orphans including Shalem were taken in by the passing Crimson Troupe to be trained to be its members. His inborn talent and quick mastery of acting made him a favored student, with the enigmatic Troupe Master personally tutoring him to become the Troupe's \"Solitaire.\" However, such lessons were also a means of brainwashing utilized to make him into the Leader's masterpiece: a person who was both a brilliant master of the arts, and also a soul fully dedicated to the art. Throughout his training, he also had at least three other teachers who influenced his life alongside the Leader: \"Shadow,\" who taught him darkness-related Originium Arts, \"Whiteflower,\" who taught him dance and social skills, and \"Bladedance,\" who taught him combat prowess with twin blades.\n\nIn his dedication and obsession with acting, he began to endanger himself in the name of improving his performance, purposely contracting Oripathy to further understand negative emotions. While the disease altered the nature of his voice, it also allowed him to utilize his Arts, capable of causing damage to anyone listening. On his debut night, he killed most of the Troupe's members, including his mentors, and fled amidst the chaos. For the next nine years, Lucian wandered around Victoria as an independent assassin who eliminated the remnants of the Troupe that followed after him. Being a lone wanderer, his only companion is Miss.Christine, a mysterious black \" kitten.\" He eventually joined Rhodes Island under the codename \"Phantom\" after hearing a mysterious calling in his mind, and as one of R.I.'s personnel, he is notable for his stealth and quick assassinations of his enemies. However, R.I. remains cautious due to his vague past, the shadow of which is still haunting him. Worst of all, he struggles with his past as the \"Blood Diamond\" and suspects that his teacher, the Troupe Master, still lives.\n\nWhile on the trail of the Crimson Troupe, he joins the filming of The Death of Lady Dupont as a minor supporting character. The filming is plagued by serial deaths, and he finally confronts the mastermind behind the events: the Troupe Master, who is revealed to be the Ageless known as Tragodia. Denouncing his teacher's belief of drama, Lucian kills him and inherits his legacy. After his debut as a Wrankwood actor, Lucian declares to Shalem and Playwright that they are free from the Crimson Troupe.",
  profile: "Phantom, who has acted independently in Victoria and surrounding areas, has been difficult to identify in the past, and his previous history has not yet been fully verified.\nHe has now joined Rhodes Island as a specialist and boasts exceptional combat capabilities, but must be treated with caution.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "Imaging tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming him to be infected with Oripathy.\n[Cell-Originium Assimilation] 14%\nSignificant crystal distribution is visible on the surface of the body. Considering the peculiar location of the crystals, the voice of Operator Phantom may have undergone serious changes.\n[Blood Originium-Crystal Density] 0.35u/L\nPhantom's prognosis based upon his current infection status is poor, and there is potential for further deterioration.\nHe has a slightly negative view towards medical treatment. I am afraid that if this continues, there will be little that can be done for him even in the best medical setting.\n– Ansel"
    },
    {
      "title": "Archive File 1",
      "content": "When Phantom first set foot on Rhodes Island, he terrified the logistics personnel who were on duty at the time. He suddenly appeared behind one individual, standing there without a word until the person turned around to discover his presence. After the incident, the ship's monitoring and deterrence facilities were given thorough, all-around upgrades. In the words of a rare angered Closure, \"even if he is just a shadow, he should never be allowed to board the landship without permissions ever again. It's just far too arrogant.\"\nPhantom was quite frank about his work as an independent assassin. As the general public is quite aware of the nature of this profession, this quiet assassin from Victoria usually keeps a low profile and has few words to say, even after becoming an employee. Phantom has also disclosed little about his prior experiences.\nAccompanying Phantom on his arrival to Rhodes Island was a person as mysterious and alluring as the night itself, someone known as \"Miss.Christine.\" Through her demeanor, it was clear that she was a refined and haughty woman. No one knows whether she will remain or leave, and she is not always seen with Phantom, instead happy enough to wander around as if quietly patrolling her turf.\nAppendix\nThree suggestions when encountering Miss.Christine:\n1. Never touch Miss.Christine. Wait for her to approach, and accept when she leaves.\n2. Show a respectful attitude towards her, as if deferring to a beautiful maiden.\n3. Maintain a pleasant demeanor."
    },
    {
      "title": "Archive File 2",
      "content": "Phantom's natural talent for Arts was affected when he contracted Oripathy, after which an astonishing transformation occurred. The metastasis of Originium crystals deep into his throat gave him a unique and dangerous ability.\nAfter receiving his permission, Rhodes Island conducted a series of tests aimed at targeting this ability, basically confirming that Phantom's ability to alter the shadows is related to sound. By using his throat to vocalize certain sounds, he is able to interfere with and severely damage the psyche of a living being. The more intense the emotion in the tone, the deeper the effect is, producing psychological damage that is difficult to repair or reverse.\nConsidering the operator's special circumstances and his personal desires, Phantom's infection monitoring device has been modified by the R&D Department to be equipped with special functions that can suppress his infection symptoms to ensure that he is able to live a normal life in Rhodes Island without hindrances."
    },
    {
      "title": "Archive File 3",
      "content": "Before becoming a lone assassin, Phantom was a part of a travelling performance troupe, touring and putting on shows for a living. We can infer from our investigations that a wave of Oripathy that ripped through parts of Victoria a few years ago destroyed this troupe, and changed the trajectory of Phantom's life. He may have had a wonderful voice in the past, but as he is now, he could not be further from the stage.\nEven in Rhodes Island, there are many operators who have never directly met Phantom, with some insisting that there is no such operator named Phantom at all. Currently, only a small handful of people actually have any understanding of this operator.\nAs an aside, the only time I came in contact with Phantom was when I was looking for the Doctor prior to writing this file. I was only able to find Phantom through the Doctor.\n\"Indeed, I've heard some rumors about this 'troupe' and what happened behind the scenes.\nI can also tell you about the impressions I now have about him, but it may not be of any use to you, because there's a good chance you won't listen.\nBut if you insist? Very well.\nI don't have much to say, but there is one suggestion.\n–Stay away from him. He's still caught in a nightmare, not fully awake yet.\"\n:–A conversation with Schwarz"
    },
    {
      "title": "Archive File 4",
      "content": "[Classified Log]\nWe found the site of the incident that befell the troupe at the time. The site is a small rural town that was destroyed by a wave of Oripathy. Anyone who could have fled did so long ago, and now the area is completely deserted.\nToo much time had passed, so we didn't have much hope in the first place. And indeed, everything here seems to have been forgotten... Seeing this photo should make that clear enough. It's just like one of those fabled ghost towns. All the residences, facilities, and public spaces have been preserved as is, including the troupe's tents stationed in the park, just like in the records – the only thing that's missing are the residents.\nThe live video of the troupe's performance has been completely destroyed, and the machinery left behind is broken beyond repair. However, we did locate a main console far from the stage, where we managed to recover some damaged data that has been sent for external backup.\nDespite our painstaking efforts to restore the damaged data, the contents are just a jumbled mess. The best way to describe it is as if a piece of cake was sealed within a plastic bag, then thrown into a fervent crowd at an Iberian festival. What we managed to recover is pretty similar to whatever would be left in that bag afterwards. As for the portion of the data that we sent out, the path was too vague and could not be tracked.\nIn order to verify the content, we played a portion of the video footage that could be considered somewhat intact. While doing so, three of the investigators present experienced degrees of psychological disturbance, so we were forced to temporarily seal off the remaining files.\nWhat exactly happened back then? And who exactly would want to preserve such a scene, and why?\nI dare not entertain the possibilities in my head, for they would be inconceivable.\n[Video File – Encrypted]\n\\Encrypter – [Kal'tsit]\n[Danger Level – 3]\n\"■■■stage, death■■■■behind■■■loop, song■■,■■■■end, all■begin. \""
    },
    {
      "title": "Promotion Record",
      "content": "Have you truly decided to unmask that man and place your trust in him?"
    }
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/executor-branch.png', factionIcon: '/icons/factions/victoria.png',
  summon: {
    name: 'Phantom in the Mirror',
    icon: '/operators/phantom/summon-clone.png',
    position: 'Melee',
    trait: 'A clone of Phantom with the same abilities, but its own independent redeployment time.',
    stats: { hp: 1416, atk: 548, def: 268, res: 0, block: 1, cost: 5, aspd: '0.93s', rdp: '45s' },
    range: [[2, 1]],
    note: 'Summoned by the Phantom in the Mirror talent at Elite 2. While both Phantom and the clone are on the field, both gain +10% ATK (EXE-Y module).',
  },
  skins: [
    { id: 'base', label: "Base", src: '/operators/phantom/base.png', chibiSrc: '/operators/phantom/chibi.webm', chibiMoveSrc: '/operators/phantom/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 2.2, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'e2', label: "Elite 2", src: '/operators/phantom/e2.png', chibiSrc: '/operators/phantom/chibi.webm', chibiMoveSrc: '/operators/phantom/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 2.2, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'skin1', label: "Dream Within a Dreammare", src: '/operators/phantom/skin1.png', chibiSrc: '/operators/phantom/chibi-skin1.webm', chibiMoveSrc: '/operators/phantom/chibi-move-skin1.webm', chibiFraming: { scale: 1.31, offsetXPercent: 0.9, offsetYPercent: 4.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'skin2', label: "Focus", src: '/operators/phantom/skin2.png', chibiSrc: '/operators/phantom/chibi-skin2.webm', chibiMoveSrc: '/operators/phantom/chibi-move-skin2.webm', chibiFraming: { scale: 1.32, offsetXPercent: 1.4, offsetYPercent: 2.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
  ],
  portrait: '/operators/phantom/portrait.png',
  portraitFocus: { y: 0.2, x: 49.2, zoom: 408 },
}

const tragodia: OperatorAlter = {
  name: 'Tragodia', fileNo: 'CT01', class: 'Supporter', branch: 'Ritualist', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Standard Headhunting'],
  voice: tragodiaVoice,
  position: 'Ranged', trait: 'Attacks deal Arts damage, and can inflict Elemental Injury',
  tags: ['Elemental', 'Crowd-Control'],
  illustrator: 'Skade',
  stats: { hp: 1200, atk: 490, def: 104, res: 15, block: 1, cost: 16, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [
      [1,1,1,1],
      [1,2,1,1],
      [1,1,1,1],
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
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Outstanding', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': 'Outstanding' },
  talents: [
    { name: 'Mind Over Matter', desc: 'Attacks deal an additional 30% of ATK as Nervous Impairment, and deal 20% of ATK as Nervous Impairment to enemies around the target', elite: 'E0' },
    { name: 'Descend into Dream', desc: 'When deployed, all enemies on the field under the burst effect of Nervous Impairment have ASPD -12; when enemies within Attack Range perform normal attacks, they take 70 points of Nervous Impairment', elite: 'E2' },
  ],
  skills: [
    {
      name: "Night Echoes", icon: '/operators/phantom/tragodia/skill-1.png', activation: 'Auto', recovery: 'Offensive',
      desc: "The next attack deals 150% of ATK as Arts damage twice and Binds the target for 3s; target's Nervous Impairment received increases to 1.8x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 2, sp: 2, rank: 'M3',
      levels: [
        { level: '1', desc: "The next attack deals 90% of ATK as Arts damage twice and Binds the target for 1.5s; target's Nervous Impairment received increases to 1.2x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: '2', desc: "The next attack deals 95% of ATK as Arts damage twice and Binds the target for 1.5s; target's Nervous Impairment received increases to 1.2x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: '3', desc: "The next attack deals 100% of ATK as Arts damage twice and Binds the target for 1.5s; target's Nervous Impairment received increases to 1.2x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: '4', desc: "The next attack deals 105% of ATK as Arts damage twice and Binds the target for 2s; target's Nervous Impairment received increases to 1.3x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: '5', desc: "The next attack deals 110% of ATK as Arts damage twice and Binds the target for 2s; target's Nervous Impairment received increases to 1.3x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: '6', desc: "The next attack deals 115% of ATK as Arts damage twice and Binds the target for 2s; target's Nervous Impairment received increases to 1.3x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: '7', desc: "The next attack deals 120% of ATK as Arts damage twice and Binds the target for 3s; target's Nervous Impairment received increases to 1.5x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: 'M1', desc: "The next attack deals 130% of ATK as Arts damage twice and Binds the target for 3s; target's Nervous Impairment received increases to 1.6x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 0, sp: 3 },
        { level: 'M2', desc: "The next attack deals 140% of ATK as Arts damage twice and Binds the target for 3s; target's Nervous Impairment received increases to 1.7x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 1, sp: 3 },
        { level: 'M3', desc: "The next attack deals 150% of ATK as Arts damage twice and Binds the target for 3s; target's Nervous Impairment received increases to 1.8x during the Bind; prioritizes attacking enemies not under a burst effect", spInit: 2, sp: 2 },
      ],
    },
    {
      name: "Folie à Plusieurs", icon: '/operators/phantom/tragodia/skill-2.png', activation: 'Auto', recovery: 'Auto',
      desc: "ASPD +35, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 150% of Tragodia's ATK as Arts damage and 25% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 25, rank: 'M3',
      levels: [
        { level: '1', desc: "ASPD +15, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 85% of Tragodia's ATK as Arts damage and 15% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 36 },
        { level: '2', desc: "ASPD +15, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 90% of Tragodia's ATK as Arts damage and 15% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 35 },
        { level: '3', desc: "ASPD +15, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 95% of Tragodia's ATK as Arts damage and 15% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 34 },
        { level: '4', desc: "ASPD +20, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 100% of Tragodia's ATK as Arts damage and 15% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 33 },
        { level: '5', desc: "ASPD +20, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 105% of Tragodia's ATK as Arts damage and 15% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 32 },
        { level: '6', desc: "ASPD +20, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 110% of Tragodia's ATK as Arts damage and 15% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 31 },
        { level: '7', desc: "ASPD +25, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 120% of Tragodia's ATK as Arts damage and 20% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 30 },
        { level: 'M1', desc: "ASPD +30, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 130% of Tragodia's ATK as Arts damage and 20% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 28 },
        { level: 'M2', desc: "ASPD +30, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 140% of Tragodia's ATK as Arts damage and 20% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 27 },
        { level: 'M3', desc: "ASPD +35, and Talent 1's splash area expands; while skill is active, can deploy a Blood's Whisper, which Lures up to 4 enemies who enter its range and can path to it (prioritizing elite or leader enemies) for 10s after deployment; once the first target arrives at its position, retreats and Slows all surrounding enemies for 6s, dealing 150% of Tragodia's ATK as Arts damage and 25% of Tragodia's ATK as Nervous Impairment every 0.5s\nUnlimited duration; Blood's Whisper has an independent Redeployment Time", spInit: 0, sp: 25 },
      ],
    },
    {
      name: "Le Théâtre du Vide", icon: '/operators/phantom/tragodia/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Attack Range expands, ATK +125%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 30, sp: 40, dur: '30s', rank: 'M3', range: [[1,1,1,1,0],[1,1,1,1,1],[1,2,1,1,1],[1,1,1,1,1],[1,1,1,1,0]],
      levels: [
        { level: '1', desc: "Attack Range expands, ATK +60%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: "Attack Range expands, ATK +65%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 3, sp: 40, dur: '30s' },
        { level: '3', desc: "Attack Range expands, ATK +70%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 6, sp: 40, dur: '30s' },
        { level: '4', desc: "Attack Range expands, ATK +75%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 9, sp: 40, dur: '30s' },
        { level: '5', desc: "Attack Range expands, ATK +80%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 12, sp: 40, dur: '30s' },
        { level: '6', desc: "Attack Range expands, ATK +85%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 15, sp: 40, dur: '30s' },
        { level: '7', desc: "Attack Range expands, ATK +95%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 18, sp: 40, dur: '30s' },
        { level: 'M1', desc: "Attack Range expands, ATK +105%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 22, sp: 40, dur: '30s' },
        { level: 'M2', desc: "Attack Range expands, ATK +115%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 26, sp: 40, dur: '30s' },
        { level: 'M3', desc: "Attack Range expands, ATK +125%, prioritizes attacking enemies not under a burst effect; enemies that have received Nervous Impairment from Tragodia while skill is active take 10% of ATK as Nervous Impairment per second until burst effect is triggered; enemies within attack range have +50% to their Nervous Impairment cooldown recovery rate; enemies entering the burst effect of Nervous Impairment will generate/refresh a Cage of Chaos at their ground position", spInit: 30, sp: 40, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Tragodia's Badge", desc: 'Appointed as Supporter Operator during field operations to exercise Ritualist responsibilities' },
    ritx: { code: 'RIT-X', name: 'Heart of Tragodia', stages: [
      { stage: 1, hp: '+125', atk: '+30', effect: 'New trait: Elemental Injury dealt to Elite and Leader enemies increases by 18%' },
      { stage: 2, hp: '+165', atk: '+37', effect: 'Descend into Dream improved: enemies on the field under the burst effect of Nervous Impairment have ASPD -17; enemies within range take 80 points of Nervous Impairment on normal attack' },
      { stage: 3, hp: '+200', atk: '+42', effect: 'Descend into Dream improved: enemies on the field under the burst effect of Nervous Impairment have ASPD -20; enemies within range take 90 points of Nervous Impairment on normal attack' },
    ]},
  },
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/ritualist-branch.png',
  summon: {
    name: "Blood's Whisper",
    icon: '/operators/phantom/tragodia/summon-bloods-whisper.png',
    position: 'Melee',
    trait: 'Cannot block enemies. Lures up to 4 enemies who enter its range (prioritizing elite or leader enemies); once the first target arrives, retreats and Slows all surrounding enemies, dealing Arts damage and Nervous Impairment.',
    stats: { hp: 100, atk: 100, def: 0, res: 0, block: 0, cost: 5, aspd: '1s', rdp: '25s' },
    range: [[0,0,1,0,0],[0,1,1,1,0],[1,1,2,1,1],[0,1,1,1,0],[0,0,1,0,0]],
    note: 'Deployed by Folie à Plusieurs; has its own independent Redeployment Time.',
  },
  skins: [
    { id: 'base', label: "Base", src: '/operators/phantom/tragodia/base.png', chibiSrc: '/operators/phantom/tragodia/chibi.webm', chibiMoveSrc: '/operators/phantom/tragodia/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 3, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
    { id: 'e2', label: "Elite 2", src: '/operators/phantom/tragodia/e2.png', chibiSrc: '/operators/phantom/tragodia/chibi.webm', chibiMoveSrc: '/operators/phantom/tragodia/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 3, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Skade" },
  ],
  portrait: '/operators/phantom/tragodia/portrait.png',
  portraitFocus: { y: 1.4, x: 36.4, zoom: 414 },
}

phantom.alter = [tragodia]

export default phantom
