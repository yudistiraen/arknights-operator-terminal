import type { Operator } from '../../types'
import bagpipeVoice from '../voices/bagpipe'

const bagpipe: Operator = {
  name: 'Bagpipe', fileNo: 'RV02', class: 'Vanguard', branch: 'Charger', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Victoria', position: 'Melee', race: 'Vouivre', gender: 'Female', birthplace: 'Victoria',
  birthday: 'July 17th', height: '167 cm', combatExp: '5 years',
  infectionStatus: 'Confirmed uninfected by medical examination.',
  illustrator: 'U介',
  cv: { JP: 'Aki Toyosaki', CN: 'Shen Yue (credited as "Iris" in EN)', EN: 'Lauren Conroy', KR: 'Son Seon-young' },
  voice: bagpipeVoice,
  trait: 'Obtain 1 DP after this unit defeats an enemy; Refunds the original DP Cost when retreated',
  tags: ['DP-Recovery', 'DPS'],
  stats: { hp: 2484, atk: 586, def: 382, res: 0, block: 1, cost: 13, aspd: '1s', rdp: '70s' },
  range: {
    base: [[2, 1]],
    e1: [[2, 1]],
    e2: [[2, 1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Precise Reloading', desc: 'When attacking, has a 25% chance to increase ATK to 110% and strike an additional target', elite: 'E1' },
    { name: 'Precise Reloading', desc: 'When attacking, has a 28% (+3%) chance to increase ATK to 110% and strike an additional target', elite: 'E1 (Potential 3)' },
    { name: 'Precise Reloading', desc: 'When attacking, has a 25% chance to increase ATK to 130% and strike an additional target', elite: 'E2' },
    { name: 'Precise Reloading', desc: 'When attacking, has a 28% (+3%) chance to increase ATK to 130% and strike an additional target', elite: 'E2 (Potential 3)' },
    { name: 'Martial Tradition', desc: 'When this unit is in the squad, all Vanguards gain +6 Starting SP', elite: 'E2' },
    { name: 'Martial Tradition', desc: 'When this unit is in the squad, all Vanguards gain +8 (+2) Starting SP', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Swift Strike γ', icon: '/operators/bagpipe/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +45%; ASPD +45',
      spInit: 15, sp: 35, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%; ASPD +20', spInit: 0, sp: 45, dur: '35s' },
        { level: '2', desc: 'ATK +22%; ASPD +20', spInit: 0, sp: 44, dur: '35s' },
        { level: '3', desc: 'ATK +24%; ASPD +20', spInit: 0, sp: 43, dur: '35s' },
        { level: '4', desc: 'ATK +27%; ASPD +25', spInit: 5, sp: 42, dur: '35s' },
        { level: '5', desc: 'ATK +29%; ASPD +25', spInit: 5, sp: 41, dur: '35s' },
        { level: '6', desc: 'ATK +31%; ASPD +25', spInit: 5, sp: 40, dur: '35s' },
        { level: '7', desc: 'ATK +34%; ASPD +35', spInit: 10, sp: 39, dur: '35s' },
        { level: 'M1', desc: 'ATK +37%; ASPD +35', spInit: 10, sp: 38, dur: '35s' },
        { level: 'M2', desc: 'ATK +40%; ASPD +35', spInit: 10, sp: 37, dur: '35s' },
        { level: 'M3', desc: 'ATK +45%; ASPD +45', spInit: 15, sp: 35, dur: '35s' },
      ],
    },
    {
      name: 'High-Impact Assault', icon: '/operators/bagpipe/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Increases the ATK of the next attack to 200%, and strikes an additional time\nCan store up to 3 charges',
      spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: 'Increases the ATK of the next attack to 130%, and strikes an additional time\nCan store up to 1 charges', spInit: 0, sp: 7 },
        { level: '2', desc: 'Increases the ATK of the next attack to 135%, and strikes an additional time\nCan store up to 1 charges', spInit: 0, sp: 7 },
        { level: '3', desc: 'Increases the ATK of the next attack to 140%, and strikes an additional time\nCan store up to 1 charges', spInit: 0, sp: 7 },
        { level: '4', desc: 'Increases the ATK of the next attack to 145%, and strikes an additional time\nCan store up to 1 charges', spInit: 0, sp: 6 },
        { level: '5', desc: 'Increases the ATK of the next attack to 150%, and strikes an additional time\nCan store up to 1 charges', spInit: 0, sp: 6 },
        { level: '6', desc: 'Increases the ATK of the next attack to 155%, and strikes an additional time\nCan store up to 1 charges', spInit: 0, sp: 6 },
        { level: '7', desc: 'Increases the ATK of the next attack to 160%, and strikes an additional time\nCan store up to 2 charges', spInit: 0, sp: 5 },
        { level: 'M1', desc: 'Increases the ATK of the next attack to 170%, and strikes an additional time\nCan store up to 2 charges', spInit: 0, sp: 5 },
        { level: 'M2', desc: 'Increases the ATK of the next attack to 180%, and strikes an additional time\nCan store up to 3 charges', spInit: 0, sp: 5 },
        { level: 'M3', desc: 'Increases the ATK of the next attack to 200%, and strikes an additional time\nCan store up to 3 charges', spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Locked Breech Burst', icon: '/operators/bagpipe/skill-3.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK interval increases, Block +1, ATK and DEF +120%, and attacks hit 3 times in a row',
      spInit: 25, sp: 40, dur: '20s', rank: 'M3',
      note: "Locked Breech Burst increases Bagpipe's attack interval by 0.7 seconds.",
      levels: [
        { level: '1', desc: 'ATK interval increases, Block +1, ATK and DEF +30%, and attacks hit 3 times in a row', spInit: 9, sp: 40, dur: '20s' },
        { level: '2', desc: 'ATK interval increases, Block +1, ATK and DEF +40%, and attacks hit 3 times in a row', spInit: 10, sp: 40, dur: '20s' },
        { level: '3', desc: 'ATK interval increases, Block +1, ATK and DEF +50%, and attacks hit 3 times in a row', spInit: 11, sp: 40, dur: '20s' },
        { level: '4', desc: 'ATK interval increases, Block +1, ATK and DEF +60%, and attacks hit 3 times in a row', spInit: 12, sp: 40, dur: '20s' },
        { level: '5', desc: 'ATK interval increases, Block +1, ATK and DEF +70%, and attacks hit 3 times in a row', spInit: 13, sp: 40, dur: '20s' },
        { level: '6', desc: 'ATK interval increases, Block +1, ATK and DEF +80%, and attacks hit 3 times in a row', spInit: 14, sp: 40, dur: '20s' },
        { level: '7', desc: 'ATK interval increases, Block +1, ATK and DEF +90%, and attacks hit 3 times in a row', spInit: 15, sp: 40, dur: '20s' },
        { level: 'M1', desc: 'ATK interval increases, Block +1, ATK and DEF +100%, and attacks hit 3 times in a row', spInit: 18, sp: 40, dur: '20s' },
        { level: 'M2', desc: 'ATK interval increases, Block +1, ATK and DEF +110%, and attacks hit 3 times in a row', spInit: 21, sp: 40, dur: '20s' },
        { level: 'M3', desc: 'ATK interval increases, Block +1, ATK and DEF +120%, and attacks hit 3 times in a row', spInit: 25, sp: 40, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Bagpipe's Badge", desc: 'Appointed as Vanguard Operator during field operations to exercise Charger responsibilities' },
    chgx: {
      code: 'CHG-X', name: 'Piledriver Spear Magazine', stages: [
        { stage: 1, hp: '+150', atk: '+50', effect: 'Trait improved: Generates 2 DP after this unit defeats an enemy; Refunds the current DP Cost when retreated' },
        { stage: 2, hp: '+165', atk: '+64', effect: 'Military Tradition improved: When this unit is in the squad, all Vanguard Operators gain +6 Initial SP. When deployed, Bagpipe gains 2 additional SP' },
        { stage: 3, hp: '+180', atk: '+73', effect: 'Military Tradition improved: When this unit is in the squad, all Vanguard Operators gain +6 Initial SP. When deployed, Bagpipe gains 4 additional SP' },
      ],
    },
    chgy: {
      code: 'CHG-Y', name: 'Stick and Sack', stages: [
        { stage: 1, atk: '+65', def: '+13', effect: 'New trait: When attacking enemies with less than 40% of their max HP, increase ATK to 115%' },
        { stage: 2, atk: '+75', def: '+17', effect: 'Precise Reloading improved: Attacks have a 30% chance to increase ATK to 135% and strike an additional target' },
        { stage: 3, atk: '+85', def: '+20', effect: 'Precise Reloading improved: Attacks have a 33% chance to increase ATK to 140% and strike an additional target' },
      ],
    },
  },
  story: `Fiona Young, the cheerful Victorian Vouivre, was raised in a rural environment and had been working on her family's ranch. She later joined the Victorian military and earned commendations for her service record under the codename "Bagpipe." With her excellent racial traits, she became one of the high-ranking soldiers in her regiment.\n\nHowever, everything changed for her during the County Hillock atrocity in 1098. Together with her regiment leader Rita aka. "Horn", and her teammates, Fiona was investigating the missing illegal Originium products in the local warehouses as well as the mysterious Dublinn that fueled the Taran separatist movement in the south. They were also suspicious of the local soldiers who kept interrupting their mission. As it turned out, the soldiers were plotting to massacre Hillock's Tarans amidst the Dublinn insurgence via Originium dirty bomb shelling, resulting in Fiona's regiment getting annihilated. To bear witness, Rita ordered her to stay alive, making her one of the only survivors.\n\nAfter retiring early following the incident, Fiona became a nameless adventurer. She joined Rhodes Island under the recommendation of her former classmate Ch'en, lending her agricultural knowledge to R.I.'s logistics department, and in combat, Fiona acts as a field combatant utilizing a "pile bunker" lance capable of firing short-range explosive munitions from its tip. She is also working with Ch'en to search for clues on Dublinn and reveal the mystery behind the Hillock atrocity, only to find herself involved in a larger conspiracy within the chaotic palace of Londinium.`,
  profile: `After graduating from The Victorian Royal Guard Academy and serving for three years in the Victorian Army, Bagpipe retired and joined Rhodes Island on Superintendent Ch'en's recommendation.\nA professional soldier who has received systematic military training, Bagpipe has already demonstrated her seasoned combat skills and tactical acumen in Rhodes Island's various missions following a period of consultation.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Bagpipe shows no signs of Oripathy infection.\n[Blood Originium-Crystal Density] 0.11u/L\nOperator Bagpipe rarely comes in contact with Originium.\nEven among Vouivre, this girl has one of the most incredible bodies I've ever seen. I'm somewhat curious to see if she even can contract Oripathy at all, if her body can just tough it out... But whatever, that's probably not happening. Test it out? No, that's not an option.\n— Warfarin`,
    },
    {
      title: 'Archive File 1',
      content: `Bagpipe is a spirited young woman from Victoria.\nKnown to other Operators as the outgoing next-door neighbor who can't help but to care for others, Bagpipe established a good relationship with most of the other personnel almost immediately after joining Rhodes Island.\nOne rather charitable description of her personal lifestyle would be "somewhat free-spirited," while a less charitable one would be "sloppy and disorganized." At first glance, her appearance seems to be at odds with the stereotypical imagery of a serious soldier. At least in her personal life, she does not show much of her military side.\nShe previously attended the Victoria Royal Guard Academy with Superintendent Ch'en. According to her account, the two of them developed a deep friendship during their time as students there. While Ch'en did let out a sigh upon hearing Bagpipe's name, the fact that the former would be willing to vouch for the latter suggests that their relationship can't really be all that bad.`,
    },
    {
      title: 'Archive File 2',
      content: `Of course, despite the fact that Miss Bagpipe gives off the impression of a cheery "girl next door," the fact remains that she indeed was an official soldier in the Victorian army – and an excellent one at that.\nThe Victorian Royal Guard Academy is multi-directional in its educational framework. Unlike other systems of military training, this academy has its own educational policy: of the three directions, most graduates serve as guards for the royal family, nobles, or various dignitaries. Officers generally serve as senior-level commanders in the army, while sergeants generally serve as the army's field commanders and first responders.\nAs a graduating sergeant, Miss Bagpipe undoubtedly possess exceptional military talent.\nIn fact, there are significant fundamental differences when comparing the training of Operators and soldiers.\nOperator training places more emphasis on individual and squad operations, cultivating along the lines of their aptitudes in order to maximize their strength. As reflected by Rhodes Island's collection of highly individualized personalities, Operators must capitalize on their uniqueness, cooperating to complete various objectives with the fewest number of elite Operators.\nOn the other hand, military training emphasizes the collective. The development of a corps is comprehensive, stressing the importance of standardization and interchangeability. The military tends to make decisions based upon overall functionality rather than upon individuals in order to ensure the stability and efficiency of the team.\nDue to this need for comprehensive training, a soldier's combat capabilities must be higher than that of an average qualified Operator. Nevertheless, these two roles scarcely warrant a comparison, because an Operator's job should not be applicable to war – this is something that is to be avoided as much as possible.\nAs a result, Miss Bagpipe is unable to directly become a role model for the other Operators when it comes to developing combat abilities. This was evident early on when Dobermann, Liskar[sic], and Nearl, all professional soldiers, joined Rhodes Island. Though they quickly adapted to their new environment, their military training posed many striking contradictions with Rhodes Island's combat principles.\nHowever, Bagpipe, who passed the military training examination with perfect marks and served in the front lines on the battlefield, still is a prime example of what a good soldier in active service looks like. This should be a healthy wake-up call for certain Operators who think they can match the caliber of professional soldiers, or simply have no idea how the military works.\nThough the projectile function has been removed from her piledriver spear, the weapon itself is still a terrifying ordnance of war. Do not let your curiosity get the better of you – or your life.\nAdditionally, it is worth mentioning that whether due to her natural open-mindedness or due to Victoria's exceptional educational system worthy of its name, Miss Bagpipe did not require retraining when transitioning from a soldier to an Operator, adapting quickly to the new position.\nAs an Operator, she demonstrated the resilience and discipline of a soldier; as a soldier, she exhibited the flexibility and fluidity of an Operator. This has led to Dobermann commenting in private: "Victoria's superiority over other countries... starts from the professionalism of their military."`,
    },
    {
      title: 'Archive File 3',
      content: `Even after graduating from Victoria's Royal Guard Academy and being baptized into modern life, Miss Bagpipe, who was born in one of Victoria's nomadic villages, has retained her countryside flair.\nThis seems to be a product of her experiences growing up in a rural setting, as well as a result of the way she was brought up by her mother. As everyone knows, Vouivre women tend to be very strong.\nSince she was a child, she helped her family with farming and animal husbandry. After joining Rhodes Island, she brought those valuable experiences over to the logistics personnel in charge of related matters. Her enthusiasm in these subjects even made some think that she was transferred to the logistics department.\nFurthermore, she is familiar with large-scale agricultural equipment. Unfortunately, due to space constraints, Rhodes Island's agricultural projects only allow for the use of small tractors, much to her dismay. After all, we can't simply hand over the entire ship to her.\nOf course, none of this means that Miss Bagpipe has no knowledge of modern life – she tried it, but failed. This is somewhat evident from her relatively frequent maintenance applications compared to the other Operators.\nAlso, according to her, she tried to learn how to apply makeup from her upper-crust classmates as a student, but the results were hopelessly embarrassing. She gradually gave up on developing herself in these areas, but she of course is still self-conscious about her appearance... Though she is impeccably dressed as a soldier, she seems to be rather anxious about her casual dress and appearance.\nBut those concerns are hardly warranted. After all, several Operators find her to be cute enough as she is.`,
    },
    {
      title: 'Archive File 4',
      content: `This was mentioned above briefly, but in fact, if Bagpipe so desired, she could well obtain an enviable status in Victoria's Second Army. Victoria, as the most prosperous empire in Terra, is inseparable from its vast military might. As a sergeant, Bagpipe can also enjoy better treatment than regular foot soldiers, and that's not even factoring in her personal abilities... If she wished to pave a path from her role as an excellent officer to becoming a noble in the big city, there would be nothing in her way.\nHowever, she rejected that path. Bagpipe chose to leave the army and her comrades-in-arms, even leaving Victoria behind to roam the dangerous land.\nHer decision to leave civilization and step out into the wilderness is a choice that ordinary city-state dwellers cannot comprehend. After all, leaving the security of civilization is practically a death wish. Bagpipe endured her arduous journey, travelling with Messengers, cooperating with mercenaries, catching whatever rides she could and accepting what little hospitality was available. Due to her identity and nationality, she was forcefully kicked out of some cities, drew the hatred of many, and even got pulled into dangerous conspiracies. According to her, "I've seen it all."\nNow, she has arrived at Rhodes Island. The friendly Rhodes Island Operators were willing to join her in her struggles, extending a hand of assistance to this seasoned soldier. However, that was the moment her steps faltered.\nThe more she comes to understand Rhodes Island, the more confused she becomes. After going through a series of tests and information exchanges, she became agitated and unhappy upon learning of Reed's presence.\nWhat is it that is weighing down upon her mind? What kind of problem exists that could not be solved by Victoria's military? What happened in Victoria, and what did she and her regiment encounter?\n"I used to be a soldier of Victoria. This doesn't seem... to be a responsibility of Rhodes Island. Although I'm no longer in the army, I'm sorry. I... I still am responsible for this. This is part of our duty, and also why we left."\nMaybe it's not the right time yet.\nHow long will it take for Bagpipe to tell us exactly what happened?\nMorever, even though everyone looks up to her as a model soldier, the Bagpipe who toils hard in the fields, the Bagpipe who carries three saucepans over to the table, the Bagpipe who sings and spins while wearing a long skirt, the Bagpipe who loses herself in a reverie while reminiscing about her hometown...\nEveryone loves that side of her too.`,
    },
    {
      title: 'Promotion Record',
      content: `Bagpipe, who had kept her distance from the Infected in the past, said that everything in Rhodes Island was strange to her.\nEverything that happens here, as well as everything that happens around Rhodes Island, comes as a difficult pill to swallow to her, as a non-Infected with little exposure to the Infected.\nFortunately, Bagpipe has chosen to not run away – indeed, it would have been simple enough to turn a blind eye to things that didn't seem to have anything to do with her. Instead, she, as an Operator, decided to try to open up, albeit slowly and carefully.\nShe might be scared, but she can't run away forever.\nAt least, if one was to consider "Rhodes Island's Most Likeable Ranking," she and Grani unsurprisingly topped the list. The image of her carrying Grani on her shoulders, running through the halls "harassing" various Operators, remains a fond memory in everyone's hearts.`,
    },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/charger-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/bagpipe/base.png', chibiSrc: '/operators/bagpipe/chibi.webm', chibiMoveSrc: '/operators/bagpipe/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'U介' },
    { id: 'e2', label: 'Elite 2', src: '/operators/bagpipe/e2.png', chibiSrc: '/operators/bagpipe/chibi.webm', chibiMoveSrc: '/operators/bagpipe/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'U介' },
    { id: 'skin1', label: 'Royal Guardswoman', src: '/operators/bagpipe/skin1.png', chibiSrc: '/operators/bagpipe/chibi-skin1.webm', chibiMoveSrc: '/operators/bagpipe/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'U介' },
    { id: 'skin2', label: 'Echo of Bagpipes', src: '/operators/bagpipe/skin2.png', chibiSrc: '/operators/bagpipe/chibi-skin2.webm', chibiMoveSrc: '/operators/bagpipe/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'U介' },
    { id: 'skin3', label: 'Queen, No.1', src: '/operators/bagpipe/skin3.png', chibiSrc: '/operators/bagpipe/chibi-skin3.webm', chibiMoveSrc: '/operators/bagpipe/chibi-move-skin3.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'U介' },
  ],
  portrait: '/operators/bagpipe/portrait.png',
  portraitFocus: { y: 14.8, x: 53.1, zoom: 365 },
}

export default bagpipe
