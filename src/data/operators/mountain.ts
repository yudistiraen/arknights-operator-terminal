import type { Operator } from '../../types'

const mountain: Operator = {
  name: 'Mountain', fileNo: 'CB05', class: 'Guard', branch: 'Fighter', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Columbia', position: 'Melee', race: 'Feline', gender: 'Male', birthplace: 'Columbia',
  birthday: 'July 16th', height: '195 cm', combatExp: '6 years', infectionStatus: 'Crystals have appeared on his body. Infection confirmed by medical examination.', illustrator: "WincalBlanke",
  cv: { JP: 'Kazuya Nakai', CN: 'Neo Wang', EN: 'Blake Kubena', KR: 'Sung Wan-kyung' },
  trait: 'Blocks 1 enemy',
  tags: ['DPS', 'Survival'],
  stats: { hp: 2745, atk: 587, def: 357, res: 0, block: 1, cost: 11, aspd: '0.78s', rdp: '70s' },
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
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Forceful Fist', desc: "20% chance for attacks to deal 160% damage and reduce the target's ATK by 15% for 3 seconds (Does not stack)", elite: 'E2' },
    { name: 'Sturdy Constitution', desc: 'DEF +10%; Physical Dodge +15%', elite: 'E2' },
  ],
  skills: [
    {
      name: "Left Hook", icon: '/operators/mountain/skill-1.png', activation: 'Auto', recovery: 'Offensive',
      desc: "The next attack deals 230% ATK damage and hits 1 additional target", spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: "The next attack deals 140% ATK damage and hits 1 additional target", spInit: 0, sp: 5 },
        { level: '2', desc: "The next attack deals 150% ATK damage and hits 1 additional target", spInit: 0, sp: 5 },
        { level: '3', desc: "The next attack deals 160% ATK damage and hits 1 additional target", spInit: 0, sp: 5 },
        { level: '4', desc: "The next attack deals 170% ATK damage and hits 1 additional target", spInit: 0, sp: 4 },
        { level: '5', desc: "The next attack deals 180% ATK damage and hits 1 additional target", spInit: 0, sp: 4 },
        { level: '6', desc: "The next attack deals 190% ATK damage and hits 1 additional target", spInit: 0, sp: 4 },
        { level: '7', desc: "The next attack deals 200% ATK damage and hits 1 additional target", spInit: 0, sp: 4 },
        { level: 'M1', desc: "The next attack deals 210% ATK damage and hits 1 additional target", spInit: 0, sp: 4 },
        { level: 'M2', desc: "The next attack deals 220% ATK damage and hits 1 additional target", spInit: 0, sp: 4 },
        { level: 'M3', desc: "The next attack deals 230% ATK damage and hits 1 additional target", spInit: 0, sp: 3 },
      ],
    },
    {
      name: "Sweeping Stance", icon: '/operators/mountain/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: "Can switch between the original state and the following state:\nDEF -20%, Attack Range reduces, ATK +80%, Block +1, attacks all blocked enemies, and restores 7.0% Max HP per second", spInit: 0, sp: 5, rank: 'M3', range: [[2]],
      levels: [
        { level: '1', desc: "Can switch between the original state and the following state:\nDEF -30%, Attack Range reduces, ATK +20%, Block +1, attacks all blocked enemies, and restores 3.0% Max HP per second", spInit: 0, sp: 10 },
        { level: '2', desc: "Can switch between the original state and the following state:\nDEF -30%, Attack Range reduces, ATK +25%, Block +1, attacks all blocked enemies, and restores 3.0% Max HP per second", spInit: 0, sp: 10 },
        { level: '3', desc: "Can switch between the original state and the following state:\nDEF -30%, Attack Range reduces, ATK +30%, Block +1, attacks all blocked enemies, and restores 3.0% Max HP per second", spInit: 0, sp: 10 },
        { level: '4', desc: "Can switch between the original state and the following state:\nDEF -30%, Attack Range reduces, ATK +35%, Block +1, attacks all blocked enemies, and restores 4.0% Max HP per second", spInit: 0, sp: 9 },
        { level: '5', desc: "Can switch between the original state and the following state:\nDEF -30%, Attack Range reduces, ATK +40%, Block +1, attacks all blocked enemies, and restores 4.0% Max HP per second", spInit: 0, sp: 9 },
        { level: '6', desc: "Can switch between the original state and the following state:\nDEF -30%, Attack Range reduces, ATK +45%, Block +1, attacks all blocked enemies, and restores 4.0% Max HP per second", spInit: 0, sp: 9 },
        { level: '7', desc: "Can switch between the original state and the following state:\nDEF -25%, Attack Range reduces, ATK +50%, Block +1, attacks all blocked enemies, and restores 5.0% Max HP per second", spInit: 0, sp: 8 },
        { level: 'M1', desc: "Can switch between the original state and the following state:\nDEF -25%, Attack Range reduces, ATK +60%, Block +1, attacks all blocked enemies, and restores 5.5% Max HP per second", spInit: 0, sp: 7 },
        { level: 'M2', desc: "Can switch between the original state and the following state:\nDEF -25%, Attack Range reduces, ATK +70%, Block +1, attacks all blocked enemies, and restores 6.0% Max HP per second", spInit: 0, sp: 6 },
        { level: 'M3', desc: "Can switch between the original state and the following state:\nDEF -20%, Attack Range reduces, ATK +80%, Block +1, attacks all blocked enemies, and restores 7.0% Max HP per second", spInit: 0, sp: 5 },
      ],
    },
    {
      name: "Earth-Shattering Smash", icon: '/operators/mountain/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Attack interval increases, ATK +100%, attacks hit 2 times, increases the activation rate of the first Talent to 75%, and each attack pushes up to 4 surrounding targets away moderately", spInit: 25, sp: 40, dur: '30s', rank: 'M3', range: [[0,1,0],[1,2,1],[0,1,0]],
      levels: [
        { level: '1', desc: "Attack interval increases, ATK +40%, attacks hit 2 times, increases the activation rate of the first Talent to 40%, and each attack pushes up to 3 surrounding targets away moderately", spInit: 25, sp: 50, dur: '25s' },
        { level: '2', desc: "Attack interval increases, ATK +45%, attacks hit 2 times, increases the activation rate of the first Talent to 42%, and each attack pushes up to 3 surrounding targets away moderately", spInit: 25, sp: 49, dur: '25s' },
        { level: '3', desc: "Attack interval increases, ATK +50%, attacks hit 2 times, increases the activation rate of the first Talent to 44%, and each attack pushes up to 3 surrounding targets away moderately", spInit: 25, sp: 48, dur: '25s' },
        { level: '4', desc: "Attack interval increases, ATK +55%, attacks hit 2 times, increases the activation rate of the first Talent to 48%, and each attack pushes up to 3 surrounding targets away moderately", spInit: 25, sp: 47, dur: '26s' },
        { level: '5', desc: "Attack interval increases, ATK +60%, attacks hit 2 times, increases the activation rate of the first Talent to 50%, and each attack pushes up to 3 surrounding targets away moderately", spInit: 25, sp: 46, dur: '26s' },
        { level: '6', desc: "Attack interval increases, ATK +65%, attacks hit 2 times, increases the activation rate of the first Talent to 52%, and each attack pushes up to 3 surrounding targets away moderately", spInit: 25, sp: 45, dur: '26s' },
        { level: '7', desc: "Attack interval increases, ATK +70%, attacks hit 2 times, increases the activation rate of the first Talent to 55%, and each attack pushes up to 3 surrounding targets away moderately", spInit: 25, sp: 44, dur: '27s' },
        { level: 'M1', desc: "Attack interval increases, ATK +80%, attacks hit 2 times, increases the activation rate of the first Talent to 60%, and each attack pushes up to 4 surrounding targets away moderately", spInit: 25, sp: 43, dur: '28s' },
        { level: 'M2', desc: "Attack interval increases, ATK +90%, attacks hit 2 times, increases the activation rate of the first Talent to 65%, and each attack pushes up to 4 surrounding targets away moderately", spInit: 25, sp: 42, dur: '29s' },
        { level: 'M3', desc: "Attack interval increases, ATK +100%, attacks hit 2 times, increases the activation rate of the first Talent to 75%, and each attack pushes up to 4 surrounding targets away moderately", spInit: 25, sp: 40, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Mountain's Badge", desc: 'Appointed as Guard Operator during field operations to exercise Fighter responsibilities' },
    fgty: { code: 'FGT-Y', name: 'Price of Freedom', stages: [
      { stage: 1, hp: '+160', atk: '+35', def: '+15', effect: 'New trait: Gains +10 ASPD when above 50% HP' },
      { stage: 2, hp: '+175', atk: '+50', def: '+20', effect: "Forceful Fist improved: 23% chance to increase ATK to 165% when attacking, and reduce the target's ATK by 15% for 3 seconds (Does not stack)" },
      { stage: 3, hp: '+200', atk: '+60', def: '+20', effect: "Forceful Fist improved: 25% chance to increase ATK to 170% when attacking, and reduce the target's ATK by 15% for 3 seconds (Does not stack)" },
    ]},
    fgtx: { code: 'FGT-X', name: 'In the Dead of Night', stages: [
      { stage: 1, hp: '+150', atk: '+45', effect: 'New trait: Has 15% Physical Dodge' },
      { stage: 2, hp: '+200', atk: '+60', effect: 'Sturdy Constitution improved: DEF +14%, Physical Dodge +20%; after dodging, the next attack Frightens the target for 1s' },
      { stage: 3, hp: '+250', atk: '+75', effect: 'Sturdy Constitution improved: DEF +20%, Physical Dodge +25%; after dodging, the next attack Frightens the target for 3s' },
    ]},
  },
  story: "Anthony Simon is the only son of Smith Simon, the director of the rising Columbian construction company Simon Co. However, he was convicted for a crime he did not commit and was sentenced for life imprisonment, which was actually a scheme arranged by his father to protect him from the rival company HydeBro (that happened to have dealings with Rhine Lab's Energy Department). While the Simons were incarcerated in Bunkerhill State Prison where they would eventually meet their demise, Anthony was instead sent to Mansfield State Prison which is out of HydeBro's reach, thus ensuring his survival as the last of the Simons. For the next six years, Anthony built up the reputation as Mansfield's strongest inmate through his constitution and wits, and even had some influence over the nomadic penitentiary's staff.\n\nWanting to free him from his unjust imprisonment, Dr. Olivia Silence arranged a daring jailbreak for Anthony by sending her acquaintance Kafka into Mansfield. At the same time, HydeBro also sent two assassins to eliminate him, but the first decides to aid Anthony while the second was defeated by Saria, allowing him to escape. Anthony has since taken refuge in Rhodes Island where the hardened yet insightful and eloquent Feline lends his fighting skills under the codename \"Mountain\" while planning to restore the Simons' reputation someday in the future.",
  profile: "The son of a top Columbian construction CEO, Mountain and his entire family were put in prison after they were framed by a rival corporation. He enlisted in Rhodes Island upon his escape.\nMountain possesses a physique naturally fit for combat, and he is currently active as a Guard Operator and on the frontlines of a variety of missions.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "Imaging tests have shown the outlines of his internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in his circulatory system, confirming his to be infected with Oripathy.\n[Cell-Originium Assimilation] 5%\nSmall amounts of crystals distributed across surface of Operator's body.\n[Blood Originium-Crystal Density] 0.22u/L\nAccording to Mountain's personal account, he contracted Oripathy while he was still in prison. Although the disease's spread has been slow thanks to his physique and the relatively luxurious living conditions he enjoyed, owing to the fact that he only had access to limited, insufficient medical facilities in prison, his condition can hardly be considered optimistic."
    },
    {
      "title": "Archive File 1",
      "content": "A well-composed male Feline with a large build.\nAlthough his fierce appearance may suggest otherwise, he always approaches everyone around him with grace. Thanks to this dissonance, Mountain became quite the talk of the town when he first arrived at Rhodes Island. Furthermore, even though he is by no means a humble man, neither is he arrogant, and this has helped him become fast friends with many of our operators.\nHe doesn't hide the fact that he comes from an affluent background and that he is well-versed in all matters pertaining to high society, but he never takes pride in this fact and rarely brings up the topic himself."
    },
    {
      "title": "Archive File 2",
      "content": "Mountain is very demanding of his own combat abilities, and he is constantly training to better himself. Ever since he first arrived at Rhodes Island, this fact has never failed to catch his fellow operators by surprise.\nIt is certainly understandable why they would think that. After all, with just his natural-born might, Mountain is already able to take on many of our operators, and his combat abilities certainly leave little to be desired. Even prior to his enlistment, Mountain's abilities more than satisfied our mid-to-high-difficulty missions' participation requirements.\nHowever, this was not enough for him.\nThis may be a result of how he personally sees his strength. To him, he still has a long way to go until he is truly strong, and having encountered all these formidable operators at Rhodes Island has only reinforced this thinking.\nOn the other hand, it may also have to do with his own objectives. He hasn't ever revealed his goal to anyone, but it is obvious he is working towards bringing it to fruition and that he needs to become even stronger in order to do so.\nSimply put, you might want to pay the training room a visit in the evenings if he isn't out on missions. You might just be able to catch a breathtaking showdown there."
    },
    {
      "title": "Archive File 3",
      "content": "[Classified Log]\nI've talked to Silence already. During our conversation, she didn't really display the kind of determination she had for her own actions that Kal'tsit said she had. It seems she has gone through quite a bit herself, though that doesn't change the fact there are certain things that I cannot tell her right now.\nKal'tsit didn't agree to help them because she was convinced by Silence's honesty; there likely isn't anyone other than Amiya who could manage to do that.\nKal'tsit agreed because Mountain is worth something to Rhodes Island. This is the biggest reason.\nNow, Kal'tsit didn't really tell me what he's worth, and my guess is she couldn't be bothered to tell me, but it isn't very hard to figure out what exactly it is. Mountain can cut open new paths, and through these new paths, we can get into places that we couldn't have otherwise. He might also be a trump card, especially one that can be used to negotiate with Rhine Lab.\nWell, saying this makes me feel like I'm a baddie... Whatever, only a few people have the clearance to read this anyway.\nTo tell the truth, though, if we don't have to, I'm not sure I'd want to get on Rhine Lab's bad side. Since we're working together, it's better to just stick with the status quo. I'm sure Kal'tsit doesn't want to cross them, either. Which means that while Mountain does have some utility in that sense, she probably isn't thinking of using him that way for the time being.\nThis also means that, to put it in less flattering terms, Mountain is just a refugee that Rhodes Island chose to take in.\nFeels kinda like it's more or less the same thing we always do.\nAfter all, we get a lot of folks with pretty messed up pasts. You could probably say what Mountain's been through was cute, compared to those guys. With traumatic pasts a dime a dozen here, what's the harm in taking him in?\nI'm not trying to be condescending or anything. He's a fine, young man, and he knows what's appropriate and not in all kinds of situations. Most young folks these days aren't sharp like that, tsk tsk.\nAnyway, I've had a little chat with him and everyone else who was involved in the jailbreak. To avoid attracting any unwanted attention, we'll keep everything that has to do with Rhine Lab and the jailbreak classified; anything else is fair game, though—Looking at the information I got afterwards, it looks like all the info about his jailbreak was suppressed, so I suppose all this hush-hush is working.\nHe also promised me that he'll at the very least let us know in advance if he ever decides to do anything against Rhine Lab, so I guess everyone's happy.\n——■■■"
    },
    {
      "title": "Archive File 4",
      "content": "Mountain isn't one to shy from sharing his prison stories. If you're curious about prison life, you could do worse than asking him directly.\nHowever, it would be in our best interest to simply ignore the invitation he extended to the Doctor.\nThis isn't to say he was trying to deceive the Doctor. On the contrary, it was perhaps his way of showing sincerity to one whom he trusts.\nThat may be the case, but that is also exactly why we shouldn't take him seriously. It doesn't matter how powerful he used to be in prison. It doesn't change the fact that he was a felon.\nThe reason he said that was most likely because he had nothing to his name.\nHis family is still serving time elsewhere, and there is nothing he can do to get his revenge right now. He used to be a pampered rich kid, and now he has to go incognito at a pharma company after spending six years behind bars. He may seem very calm, but I can say for sure that this came as a huge shock to him.\nThe only thing that he has is probably the name he made for himself at Mansfield State Prison. His reputation there may just have been an illusion, but it is nonetheless something he built from the ground up himself.\nThis isn't to suggest he's too wrapped up in something that's not real. What I am trying to say is that every time he says that, he's actually making fun of himself as well as reminding himself that this, too, is part of his past.\nOf course, we cannot eliminate the possibility that Mountain will actually reclaim what is rightfully his one day and take over the prison out of nostalgia. He might even invite the Doctor there as a guest.\nHe probably could pull it off."
    },
    {
      "title": "Promotion Record",
      "content": "Many of our operators have seen that other side of Mountain on those missions where he has to truly give it his all. His sharp fangs and his fierce appearance are almost like the embodiment of violence.\nMountain is fully aware of this himself, and he doesn't ever ask those whom he has scared to look at him any other way.\nHowever, contrary to his expectations, he wasn't ostracized by any of our operators because of this.\nThis is undoubtedly because we have other operators who fight in far scarier ways here; everyone has gotten used to this long ago. It likely also has to do with the fact his fierceness on the field hasn't changed how courteous he normally is—\nA person who's brutal on his enemies can still be likable to his friends and family. Once they realize that his graciousness isn't a mere social pretense, most would naturally come to understand that his ferocity and his friendliness are two sides of the same coin.\nHowever, it's likely that he isn't aware of this himself.\nAfter all, he himself claims that his composure, his calm, and his politeness are all just a mask, a facade. Yet there likely wasn't ever a facade; personalities are more complicated than that. His excuse is more like a kind of self-loathe towards his violent side, and he loathes this violent side of his because he strives to be even more calm and polite.\nSuppose he's actually wearing a mask as he says, though. If a person has been wearing a mask each and every day for decades, then who can say for sure that is actually a mask?\nOf course, we aren't trying to say there's anything wrong with Mountain; he isn't abandoning his violent ways as a means of rejecting them, after all. Yet there is perhaps an idea that he's going to need to learn during his time here in Rhodes Island: He needn't feel ashamed for this.\nAfter all, we all know that he never fights anyone undeserving of his rage."
    }
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/fighter-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/mountain/base.png', chibiSrc: '/operators/mountain/chibi.webm', chibiMoveSrc: '/operators/mountain/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "WincalBlanke" },
    { id: 'e2', label: "Elite 2", src: '/operators/mountain/e2.png', chibiSrc: '/operators/mountain/chibi.webm', chibiMoveSrc: '/operators/mountain/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "WincalBlanke" },
    { id: 'skin1', label: "Dark Cloud", src: '/operators/mountain/skin1.png', chibiSrc: '/operators/mountain/chibi-skin1.webm', chibiMoveSrc: '/operators/mountain/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "WincalBlanke" },
    { id: 'skin2', label: "Book Reader", src: '/operators/mountain/skin2.png', chibiSrc: '/operators/mountain/chibi-skin2.webm', chibiMoveSrc: '/operators/mountain/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "WincalBlanke" },
    { id: 'skin3', label: "The Hardcore Rider", src: '/operators/mountain/skin3.png', chibiSrc: '/operators/mountain/chibi-skin3.webm', chibiMoveSrc: '/operators/mountain/chibi-move-skin3.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "WincalBlanke" },
  ],
  portrait: '/operators/mountain/portrait.png',
  portraitFocus: { y: -3, x: 46.5, zoom: 390 },
}

export default mountain
