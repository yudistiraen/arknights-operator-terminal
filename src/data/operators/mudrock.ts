import type { Operator } from '../../types'
import mudrockVoice from '../voices/mudrock'

const mudrock: Operator = {
  name: 'Mudrock', fileNo: 'R159', class: 'Defender', branch: 'Juggernaut', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Sarkaz', gender: 'Female', birthplace: 'Kazdel',
  birthday: 'September 21st', height: '163 cm', combatExp: '4 years', infectionStatus: 'Originium crystals distributed across surface of body, confirmed Infected by medical examination.', illustrator: 'm9nokuro',
  cv: { JP: 'Maaya Uchida', CN: 'Mang Yin', EN: 'Alexandra Boulton', KR: 'Kim Ye-rim' },
  voice: mudrockVoice,
  trait: 'Cannot be healed by allies',
  tags: ['Survival', 'Defense', 'DPS'],
  stats: { hp: 3928, atk: 882, def: 602, res: 10, block: 3, cost: 36, aspd: '1.6s', rdp: '70s' },
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
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Ward of the Fertile Soil', desc: 'Every 9 seconds, gains 1 Shield (Can have up to 3 stacks, with 1 stack granted immediately when deployed). When a Shield is broken, restores 20% of Max HP', elite: 'E2' },
    { name: 'Unshakable Solidarity', desc: 'Takes 30% less damage from Sarkaz enemies', elite: 'E2' },
  ],
  skills: [
    {
      name: "DEF Up γ", icon: '/operators/mudrock/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: "DEF +100%", spInit: 15, sp: 30, dur: '40s', rank: 'M3',
      levels: [
        { level: '1', desc: "DEF +30%", spInit: 0, sp: 45, dur: '40s' },
        { level: '2', desc: "DEF +35%", spInit: 0, sp: 45, dur: '40s' },
        { level: '3', desc: "DEF +40%", spInit: 0, sp: 45, dur: '40s' },
        { level: '4', desc: "DEF +45%", spInit: 5, sp: 40, dur: '40s' },
        { level: '5', desc: "DEF +50%", spInit: 5, sp: 40, dur: '40s' },
        { level: '6', desc: "DEF +55%", spInit: 5, sp: 40, dur: '40s' },
        { level: '7', desc: "DEF +60%", spInit: 10, sp: 35, dur: '40s' },
        { level: 'M1', desc: "DEF +75%", spInit: 10, sp: 34, dur: '40s' },
        { level: 'M2', desc: "DEF +90%", spInit: 10, sp: 33, dur: '40s' },
        { level: 'M3', desc: "DEF +100%", spInit: 15, sp: 30, dur: '40s' },
      ],
    },
    {
      name: "Crag Splitter", icon: '/operators/mudrock/skill-2.png', activation: 'Auto', recovery: 'Defensive',
      desc: "The next attack restores 6% of this unit's Max HP and deals 270% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 1.2 seconds", spInit: 0, sp: 4, rank: 'M3', range: [[1,1,1],[1,2,1],[1,1,1]],
      levels: [
        { level: '1', desc: "The next attack restores 4% of this unit's Max HP and deals 170% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.4 seconds", spInit: 0, sp: 6 },
        { level: '2', desc: "The next attack restores 4% of this unit's Max HP and deals 175% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.4 seconds", spInit: 0, sp: 6 },
        { level: '3', desc: "The next attack restores 4% of this unit's Max HP and deals 180% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.4 seconds", spInit: 0, sp: 6 },
        { level: '4', desc: "The next attack restores 4% of this unit's Max HP and deals 190% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.5 seconds", spInit: 0, sp: 5 },
        { level: '5', desc: "The next attack restores 4% of this unit's Max HP and deals 195% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.5 seconds", spInit: 0, sp: 5 },
        { level: '6', desc: "The next attack restores 4% of this unit's Max HP and deals 200% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.5 seconds", spInit: 0, sp: 5 },
        { level: '7', desc: "The next attack restores 5% of this unit's Max HP and deals 210% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.6 seconds", spInit: 0, sp: 5 },
        { level: 'M1', desc: "The next attack restores 5% of this unit's Max HP and deals 230% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 0.8 seconds", spInit: 0, sp: 4 },
        { level: 'M2', desc: "The next attack restores 5% of this unit's Max HP and deals 250% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 1 seconds", spInit: 0, sp: 4 },
        { level: 'M3', desc: "The next attack restores 6% of this unit's Max HP and deals 270% ATK as Physical damage to all surrounding ground enemies, with a 30% chance to Stun them for 1.2 seconds", spInit: 0, sp: 4 },
      ],
    },
    {
      name: "Bloodline of Desecrated Earth", icon: '/operators/mudrock/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 5 seconds and gains reduced Attack Interval, ATK +140%, DEF +80%, and the ability to attack all blocked enemies", spInit: 15, sp: 25, dur: '30s', rank: 'M3', range: [[0,0,1,0,0],[0,1,1,1,0],[1,1,2,1,1],[0,1,1,1,0],[0,0,1,0,0]],
      levels: [
        { level: '1', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 3 seconds and gains reduced Attack Interval, ATK +70%, DEF +30%, and the ability to attack all blocked enemies", spInit: 10, sp: 35, dur: '30s' },
        { level: '2', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 3 seconds and gains reduced Attack Interval, ATK +75%, DEF +30%, and the ability to attack all blocked enemies", spInit: 10, sp: 34, dur: '30s' },
        { level: '3', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 3 seconds and gains reduced Attack Interval, ATK +80%, DEF +30%, and the ability to attack all blocked enemies", spInit: 10, sp: 33, dur: '30s' },
        { level: '4', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 3 seconds and gains reduced Attack Interval, ATK +85%, DEF +40%, and the ability to attack all blocked enemies", spInit: 11, sp: 32, dur: '30s' },
        { level: '5', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 3 seconds and gains reduced Attack Interval, ATK +90%, DEF +40%, and the ability to attack all blocked enemies", spInit: 11, sp: 31, dur: '30s' },
        { level: '6', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 3 seconds and gains reduced Attack Interval, ATK +95%, DEF +40%, and the ability to attack all blocked enemies", spInit: 11, sp: 30, dur: '30s' },
        { level: '7', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 3.5 seconds and gains reduced Attack Interval, ATK +100%, DEF +50%, and the ability to attack all blocked enemies", spInit: 12, sp: 29, dur: '30s' },
        { level: 'M1', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 4 seconds and gains reduced Attack Interval, ATK +110%, DEF +60%, and the ability to attack all blocked enemies", spInit: 13, sp: 28, dur: '30s' },
        { level: 'M2', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 4.5 seconds and gains reduced Attack Interval, ATK +120%, DEF +70%, and the ability to attack all blocked enemies", spInit: 14, sp: 27, dur: '30s' },
        { level: 'M3', desc: "Upon skill activation, Mudrock stops attacking and does not take damage for 10 seconds, and reduces the Movement Speed of surrounding enemies by -60%; After this state ends, Mudrock Stuns surrounding ground enemies for 5 seconds and gains reduced Attack Interval, ATK +140%, DEF +80%, and the ability to attack all blocked enemies", spInit: 15, sp: 25, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Mudrock's Badge", desc: 'Appointed as Defender Operator during field operations to exercise Juggernaut responsibilities' },
    unyx: { code: 'UNY-X', name: 'Spreading Roots of Soil and Stone', stages: [
      { stage: 1, hp: '+245', atk: '+55', effect: 'New trait: Takes 15% less damage from enemies blocked by this unit' },
      { stage: 2, hp: '+325', atk: '+70', effect: 'Ward of the Fertile Soil improved: When a Shield is broken, restores 22% of Max HP and 1 SP' },
      { stage: 3, hp: '+400', atk: '+80', effect: 'Ward of the Fertile Soil improved: When a Shield is broken, restores 23% of Max HP and 2 SP' },
    ]},
    unyy: { code: 'UNY-Y', name: 'Wish of the Fertile Earth', stages: [
      { stage: 1, atk: '+60', def: '+50', effect: 'New trait: When there are no allies in the surrounding 8 tiles, ATK and DEF +8%' },
      { stage: 2, atk: '+75', def: '+60', effect: 'Unshakable Solidarity improved: Takes 33% less damage from Sarkaz enemies and deals 15% more damage to non-Sarkaz enemies' },
      { stage: 3, atk: '+85', def: '+70', effect: 'Unshakable Solidarity improved: Takes 35% less damage from Sarkaz enemies and deals 20% more damage to non-Sarkaz enemies' },
    ]},
  },
  story: "It seems the saying \"yesterday's enemy is today's friend\" is indeed true! After being saved by Logos from the hands of the Echoes of Herkunftshorn, Mudrock—an ex- Reunion Gargoyle mercenary who once led her band of mercenaries during the uprising in Wolumonde—chose to join R.I. alongside the survivors of her squad. Though she had long fought for the Infected, her time with R.I. allowed her to pursue that cause in a new way. Since her first day on board, Mudrock has fostered good relationships with her former enemies, Folinic and Suzuran, as well as Grani, an acquaintance of Big Bob. This makes Mudrock the third former Reunion member to join R.I., following Ethan and W.\n\nEveryone in R.I., including the Mudrock Squad, was surprised upon seeing Mudrock's true appearance. Beneath the war-torn, bulky armor lies a beautiful Sarkaz woman with crimson eyes and long white hair. Despite her appearance, she remains a formidable combatant owing to her years of experience and her geokinetic Originium Arts, inherited from her ancient Gargoyle bloodline. As the only known representative of her tribe in R.I, she possesses the resilience of stone and wields the earth's power through her army of \"Colossi\".",
  profile: "Sarkaz mercenary Mudrock, formerly a part of the Reunion Movement, led her team far from Ursus after disagreements with the organization. She had no involvement with Reunion whatsoever during the incidents in Chernobog and Lungmen. Searching for a foothold to establish, Mudrock took her team towards Leithanien. After taking in a great number of Leithanian Infected there, Mudrock became a highly esteemed leader, and her team came to be known as the 'Mudrock Squad.' Despite Mudrock's multiple attempts to avoid conflict with other powers, her side was nevertheless drawn into constant disputes. So as to prevent any further meaningless sacrifice, Mudrock chose to head for Kazdel. She came into contact with elite operator Logos within Kazdel's borders, and left with the latter for Rhodes Island.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 12%\nOperator Mudrock bears clearly visible Originium crystals at multiple locations over her body.\n[Blood Originium-Crystal Density] 0.31u/L\nAs a former Sarkaz mercenary, we cannot be optimistic about Mudrock's infection. She requires regular monitoring and examination."
    },
    {
      "title": "Archive File 1",
      "content": "In order to keep her massive suit of armor upright, Mudrock uses Originium Arts between the cushioning materials as padding. One could ask whether her tremendous form actually intimidates the enemy, but in fact, it has already led many to misjudge her build and strength. This Arts transformation of hers is truly 'armed to the teeth,' her visor making her voice seem heavy yet diminished. Until the moment she took off her suit, none of our HR operators could precisely determine her gender. Tangentially, aside from her longtime Sarkaz friends, the astonishment on every Mudrock Squad member's face at the examination site said it all— Not even they knew their leader's true form.\n'But I guess... that explains the mysterious Sarkaz woman showing up from time to time in our team. I always thought I was dreaming.' —A Leithanian Caster from the Mudrock Squad"
    },
    {
      "title": "Archive File 2",
      "content": "Mudrock's Originium Arts manipulate stone and soil. Beyond that, she has a natural gift, having grasped several classic and characteristically Leithanian Arts forms as well as an ancient, bloodline-tied Sarkaz witchcraft. This witchcraft lets her consciousness forcibly \"intervene\" in her constructs' bodies, allowing what was the unthinking stone and soil to become her own four limbs extended. For example, it's like the difference between holding a sword in her hands, and her hands themselves becoming a sword. Put another way, from the angle of combat efficiency, not much difference at all. These special Originium Arts prove Mudrock's Sarkaz blood still flows pure, but aren't effective for strengthening her constructs' fighting capabilities. However, this is only in terms of the Arts Mudrock presently displays. Considering her future growth, as well as innate talent shown in her self-taught use of Leithanian Arts systems, perhaps these ancient bloodborne methods may become a table-turning ace in the hole of hers.\nMeriting additional attention is that Mudrock will occasionally refer to her Originium Arts constructs as 'friends,' both Colossus and small as soil clumps alike. We can be sure that Mudrock does not bestow this title purely from her own individuality or personal interest. Perhaps Mudrock's special Originium Arts make her regard her arisen constructs with emotion, similar to a handy tool one has used for decades. Or, perhaps, her prolonged use of witchcraft has given her some curious affinity with the stone and soil. We request to all Operators that should you find Mudrock alone in her room giving a petite clay figure a sweet smile you've never seen before, please, do not be surprised. In the end, her relationship with the soil is likely far greater than her relationship with most people in its intimacy."
    },
    {
      "title": "Archive File 3",
      "content": "The Infected within Mudrock's group have not had it easy. Mudrock was only 'compelled' to contact Rhodes Island so that they could be given normal care. Mudrock has made it abundantly clear that she refuses to follow the inclinations of other powers. After undergoing initial talks with Rhodes Island, however, Mudrock has been willing to work for us in exchange for her group being able to receive medical treatment.\nConsidering Rhodes Island's precedent of strained contact with 'Sarkaz mercenaries,' The HR Department planned hash out the agreement with her in greater detail,[sic] but so as to not hold up their treatment, Mudrock firmly decided to give up her own position and join Rhodes Island as a cooperative force.\nEven had she not done so, we still would have aided her people, though her persistent attitude is truly rare to see in a 'Sarkaz mercenary.' This has given us a glimpse as to why Mudrock was so welcomed by the Infected of Leithanien.\nBy the way, while Mudrock was weighing whether or not to become a Rhodes Island operator, she happened to run across Grani, who was 'vacationing' at Rhodes. Grani shared with Mudrock a short story about bounty hunters, treasure and misunderstandings, after which Mudrock appeared gave a rare display of visible happiness.[sic] Operators Folinic and Suzuran further helped persuade her to stay with Rhodes Island in the end."
    },
    {
      "title": "Archive File 4",
      "content": "The Mudrock Squad are far from fortunate for what they went through in Leithanien. As a result of her rebelling against Reunion's advocacy of violence, Mudrock had absolutely no involvement with Reunion in the reign of terror that befell Ursus. On the contrary, she led her like-minded Sarkaz for Leithanien long before, hoping that in a nation of highly developed Originium Arts, prosperous yet rotten to the core, they could find some place in which to hide away. Mudrock knew well that Leithanien's cities and Spires wouldn't readily admit bloodstained Sarkaz mercenaries, so they elected to wander between remote cities, attracting more and more of Leithanien's Infected during this time. Her benevolence, rare amongst mercenaries, earned her quite the following. Before she realized it, the reputation of the Mudrock Squad had spread across the Infected though she often trails off, blushing, when the topic comes up. It seems that she doesn’t like to talk about her “glorious” moment of popularity.\nYet all good things come to an end. The vengeful lust of the \"Reunion Movement\" was never contained within reason's reach. While Leithanien as a whole had a milder treatment of the Infected, these conflicts naturally spread through other areas due to ulterior motives. After enduring the calamity led by a string of out-of-control riots, Mudrock despondently decided to return to Kazdel, hoping to establish a shelter for her people there.\nHowever, this plan was also cut short, again by outside forces she couldn't defy. When Elite Operator Logos came across the Mudrock Squad in Kazdel, there were hardly any Sarkaz warriors left by her side, and the minds, spirits, and bodies of the Leithanian Infected who now outnumbered the original members were on the verge of collapse. As for what even happened to the Mudrock Squad between leaving Leithanien and arriving at Rhodes Island, or why Mudrock decided differently at the last minute, we're not at all clear. However, without a doubt, they suffered disastrous losses from some Leithanian power pursued them out of Leithanien. After confirming the opposition was clearly intent on \"slaughtering every last Infected,\" Logos opted to come to their aid."
    },
    {
      "title": "Promotion Record",
      "content": "Mudrock once asked Operator Folinic. 'What happened to Wolumonde afterwards?'\nAccording to operational records, Wolumonde is a nomadic city in the north of Leithanien, which was once brought by a Catastrophe to near-ruin in a matter of days. Rhodes Island Operator Atro lost her life in this incident, and the team of Operators dispatched to investigate the incident came into conflict with the Mudrock Squad. However, asked 'whether Mudrock had engaged in unforgivable conduct,' Operator Folinic hesitated for a brief moment before issuing a denial.\nAs for the 'after,' this refers to what followed Mudrock's decisive battle (this wording is in line with the situation at the time, and can be seen as a deliberate effort on Mudrock's part) with Rhodes Island's operators, her defeat, and subsequent withdrawal from Wolumonde. The sudden fires and revolts gave the Wolumonde officials grounds to recall the Gendarmerie from the nobles. With the Gendarmerie's aid, the afflicted cities successfully established a passage across the Great Rift. Messengers and supply teams arrived soon after at Wolumonde. After the ordeal, Wolumonde was deeply wounded, not just due to the loss during the conflict and rioting. 'Close to a fifth of Wolumonde's people betrayed Leithanien.' This shadow cast itself deep into the hearts of the locals, and even roused whatever conscience still remained in some of their nobles—and the problems they faced were quite convoluted.\nBased on letters sent by Messengers responsible for the follow-up investigations, with the professional evaluation of the Gendarmerie, we can confirm that the main instigator of the Wolumonde incident, Biederman, died in the riots. The local Schultz was taken in due to his acute Oripathy, and whether he is alive or dead remains unclear. Soon after, the nobles withdrew Wolumonde's autonomy, deciding to merge its intact areas with the surrounding cities in the coming spring.\nJudging by the 'experiences' Mudrock described, what the Mudrock Squad and Leithanian Infected saw in Wolumonde was just the tip of the iceberg. You can imagine why the Leithanian Infected within the Mudrock Squad were in such low spirits. We cannot help but recognize that obedience within the Infected's giant cages, giving up freedom may be the only way to eke out an existence in Leithanien.\n[Classified Log]\nOn the first night the local nobles arrived to investigate Wolumonde, there was an assassination attempt. After failing, the suspect fled near the Winterwisp Mountains, where he committed suicide by biting his tongue off. He was identified as the local Schultz's only son, Thorwald, who was thought to have died in the fire. The Gendarmerie found a letter on his person: 'I've changed my mind. I'll die in your stead. But there's one thing you have to do for me. If you recognize him, get rid of him.' Because of this letter, and the token of a Catastrophe Messenger carried on the suspect's person, we can confirm that the suspect was an accomplice to Biederman. The noble did not make things harder on Severin Hawthorn, whose life was already in grave danger, but it was obvious he had no good will to spare, and so left Wolumonde. Considering that several other operators are involved in this matter, only a small number of authorized personal and the Doctor are permitted to view this document."
    }
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/juggernaut-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/mudrock/base.png', chibiSrc: '/operators/mudrock/chibi.webm', chibiMoveSrc: '/operators/mudrock/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 2.5, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "m9nokuro" },
    { id: 'e2', label: "Elite 2", src: '/operators/mudrock/e2.png', chibiSrc: '/operators/mudrock/chibi.webm', chibiMoveSrc: '/operators/mudrock/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 2.5, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "m9nokuro" },
    { id: 'skin1', label: "Silent Night DN06", src: '/operators/mudrock/skin1.png', chibiSrc: '/operators/mudrock/chibi-skin1.webm', chibiMoveSrc: '/operators/mudrock/chibi-move-skin1.webm', chibiFraming: { scale: 1.33, offsetXPercent: 1.2, offsetYPercent: 3.7 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "m9nokuro" },
    { id: 'skin2', label: "Obsidian", src: '/operators/mudrock/skin2.png', chibiSrc: '/operators/mudrock/chibi-skin2.webm', chibiMoveSrc: '/operators/mudrock/chibi-move-skin2.webm', chibiFraming: { scale: 1.29, offsetXPercent: 0.9, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "m9nokuro" },
    { id: 'skin3', label: "Rubble", src: '/operators/mudrock/skin3.png', chibiSrc: '/operators/mudrock/chibi-skin3.webm', chibiMoveSrc: '/operators/mudrock/chibi-move-skin3.webm', chibiFraming: { scale: 1.32, offsetXPercent: -0.8, offsetYPercent: 2 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "Studio Montagne" },
  ],
  portrait: '/operators/mudrock/portrait.png',
  portraitFocus: { y: 0.4, x: 37.9, zoom: 321 },
}

export default mudrock
