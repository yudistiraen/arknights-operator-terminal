import type { Operator } from '../../types'

const kaltsit: Operator = {
  name: "Kal'tsit", fileNo: 'B003', class: 'Medic', branch: 'Medic', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Rhodes Island (landship)',
  birthday: 'Undisclosed', height: '169 cm', combatExp: '3 years', infectionStatus: 'Confirmed Infected by medical examination.', illustrator: '唯@W',
  cv: { JP: 'Yōko Hikasa', CN: 'Liu Xue', EN: 'Sura Siu', KR: 'Han Chae-eon' },
  trait: 'Restores the HP of allies',
  tags: ['Summon', 'Healing'],
  stats: { hp: 1633, atk: 490, def: 215, res: 0, block: 1, cost: 20, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
    ],
    e1: [
      [1,1,1,1,0],
      [2,1,1,1,1],
      [1,1,1,1,0],
    ],
    e2: [
      [1,1,1,1,1],
      [2,1,1,1,1],
      [1,1,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': '■■', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Mon3tr', desc: "Can use and heal Mon3tr, and Mon3tr has a 25 second redeployment time. Kal'tsit will prioritize healing herself and Mon3tr; If Mon3tr is not within Kal'tsit's Attack Range, Mon3tr's DEF is reduced to 0", elite: 'E2' },
    { name: 'Non-Damaging Restructuring', desc: 'When Mon3tr is defeated (excluding retreat), all enemies in the surrounding 8 tiles are Stunned for 3 seconds and receive 1200 True damage', elite: 'E2' },
  ],
  skills: [
    {
      name: "Command: Structural Fortification", icon: '/operators/kaltsit/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: "This unit and Mon3tr gains DEF +150%. This unit also gains 50% Physical resist", spInit: 10, sp: 20, dur: '40s', rank: 'M3',
      levels: [
        { level: '1', desc: "This unit and Mon3tr gains DEF +60%. This unit also gains 20% Physical resist", spInit: 0, sp: 30, dur: '30s' },
        { level: '2', desc: "This unit and Mon3tr gains DEF +70%. This unit also gains 20% Physical resist", spInit: 1, sp: 29, dur: '31s' },
        { level: '3', desc: "This unit and Mon3tr gains DEF +80%. This unit also gains 20% Physical resist", spInit: 2, sp: 28, dur: '32s' },
        { level: '4', desc: "This unit and Mon3tr gains DEF +90%. This unit also gains 30% Physical resist", spInit: 3, sp: 27, dur: '33s' },
        { level: '5', desc: "This unit and Mon3tr gains DEF +100%. This unit also gains 30% Physical resist", spInit: 4, sp: 26, dur: '34s' },
        { level: '6', desc: "This unit and Mon3tr gains DEF +110%. This unit also gains 30% Physical resist", spInit: 5, sp: 25, dur: '35s' },
        { level: '7', desc: "This unit and Mon3tr gains DEF +120%. This unit also gains 40% Physical resist", spInit: 6, sp: 24, dur: '36s' },
        { level: 'M1', desc: "This unit and Mon3tr gains DEF +130%. This unit also gains 40% Physical resist", spInit: 7, sp: 23, dur: '37s' },
        { level: 'M2', desc: "This unit and Mon3tr gains DEF +140%. This unit also gains 40% Physical resist", spInit: 8, sp: 22, dur: '38s' },
        { level: 'M3', desc: "This unit and Mon3tr gains DEF +150%. This unit also gains 50% Physical resist", spInit: 10, sp: 20, dur: '40s' },
      ],
    },
    {
      name: "Command: Tactical Coordination", icon: '/operators/kaltsit/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: "This unit gains ASPD +100; Mon3tr gains ATK +90% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 8, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: "This unit gains ASPD +30; Mon3tr gains ATK +20% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 14, dur: '15s' },
        { level: '2', desc: "This unit gains ASPD +35; Mon3tr gains ATK +25% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 14, dur: '15s' },
        { level: '3', desc: "This unit gains ASPD +40; Mon3tr gains ATK +30% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 14, dur: '15s' },
        { level: '4', desc: "This unit gains ASPD +45; Mon3tr gains ATK +35% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 13, dur: '16s' },
        { level: '5', desc: "This unit gains ASPD +50; Mon3tr gains ATK +40% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 13, dur: '16s' },
        { level: '6', desc: "This unit gains ASPD +55; Mon3tr gains ATK +45% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 13, dur: '16s' },
        { level: '7', desc: "This unit gains ASPD +60; Mon3tr gains ATK +50% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 12, dur: '17s' },
        { level: 'M1', desc: "This unit gains ASPD +70; Mon3tr gains ATK +60% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 11, dur: '18s' },
        { level: 'M2', desc: "This unit gains ASPD +80; Mon3tr gains ATK +75% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 10, dur: '19s' },
        { level: 'M3', desc: "This unit gains ASPD +100; Mon3tr gains ATK +90% and attacks all blocked enemies\nThis skill is Tied to Mon3tr", spInit: 0, sp: 8, dur: '20s' },
      ],
    },
    {
      name: "Command: Meltdown", icon: '/operators/kaltsit/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Mon3tr gains DEF +200%, ATK +260% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 15, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: "Mon3tr gains DEF +100%, ATK +130% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 25, dur: '18s' },
        { level: '2', desc: "Mon3tr gains DEF +100%, ATK +140% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 24, dur: '18s' },
        { level: '3', desc: "Mon3tr gains DEF +100%, ATK +150% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 23, dur: '18s' },
        { level: '4', desc: "Mon3tr gains DEF +120%, ATK +160% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 22, dur: '18s' },
        { level: '5', desc: "Mon3tr gains DEF +120%, ATK +170% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 21, dur: '18s' },
        { level: '6', desc: "Mon3tr gains DEF +120%, ATK +180% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 20, dur: '18s' },
        { level: '7', desc: "Mon3tr gains DEF +140%, ATK +190% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 19, dur: '18s' },
        { level: 'M1', desc: "Mon3tr gains DEF +160%, ATK +210% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 18, dur: '18s' },
        { level: 'M2', desc: "Mon3tr gains DEF +180%, ATK +230% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 17, dur: '19s' },
        { level: 'M3', desc: "Mon3tr gains DEF +200%, ATK +260% that gradually decays to +0% over the skill duration and deals True damage. If this skill ends without Mon3tr killing any enemies, Mon3tr loses 50% Max HP. This skill is Tied to Mon3tr", spInit: 0, sp: 15, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Kal'tsit's Badge", desc: 'Appointed as Medic Operator during field operations to exercise Medic responsibilities' },
    phyx: { code: 'PHY-X', name: 'Mon2tr', stages: [
      { stage: 1, atk: '+35', def: '+15', effect: 'New trait: When healing allied units with less than 50% HP, increases heal amount by 15%' },
      { stage: 2, atk: '+50', def: '+20', effect: "Non-Damaging Restructuring improved: Also triggers when Mon3tr's HP drops below 50% for the first time" },
      { stage: 3, atk: '+60', def: '+25', effect: 'Non-Damaging Restructuring improved: Stun duration 3.5 seconds, damage increased to 1500 True damage' },
    ]},
    phyy: { code: 'PHY-Y', name: 'Panacea', stages: [
      { stage: 1, hp: '+115', aspd: '+5', effect: 'New trait: Healing increased by 15% when healing a ground unit' },
      { stage: 2, hp: '+155', aspd: '+6', effect: "Mon3tr improved: Mon3tr gains +12 ASPD and +15% DEF when in Kal'tsit's Attack Range" },
      { stage: 3, hp: '+195', aspd: '+7', effect: "Mon3tr improved: Mon3tr gains +20 ASPD and +20% DEF when in Kal'tsit's Attack Range" },
    ]},
    iswa: { code: 'ISW-A', name: "Kal'tsit's Specialized Badge", stages: [
      { stage: 1, atk: '+24', aspd: '+5', effect: 'New trait: In Integrated Strategies, heals 2 targets simultaneously' },
      { stage: 2, atk: '+38', aspd: '+6', effect: 'Mon3tr improved: In Integrated Strategies, Mon3tr does not take up a deployment slot and has +25% Max HP and ATK' },
      { stage: 3, atk: '+50', aspd: '+7', effect: 'Mon3tr improved: In Integrated Strategies, Mon3tr does not take up a deployment slot and has +50% Max HP and ATK, and receives 50% more healing' },
    ]},
  },
  story: "One of the first members of Rhodes Island and one of the few remaining members of its predecessor, Babel, alongside the Doctor, Closure and W, the Feline named Kal'tsit is the head of the Medical Department and R.I.'s unofficial leader/director – despite Amiya being the de jure leader. Although Kal'tsit seems to be a cold person with a detached and unfriendly attitude, she is an admirable leader with great determination. She is willing to make great sacrifices to protect those important to her, particularly Amiya and the Doctor because of a promise she had made to protect them, despite initially wanting to kill the Doctor herself. While Kal'tsit has been on worse terms with the Doctor since Theresa's death, she eventually cast aside her mistrust to work together with them in the face of greater threats. With the creature that accompanies her at all times, Mon3tr, Kal'tsit is willing to provide help to the Doctor in the most dire situations.\n\nKal'tsit's past is so enigmatic that it is scarcely possible to trace back to it. Twenty years prior to the start of the Main Theme, in the Terran year 1077, Kal'tsit was a brilliant scientist known for her leadership in the study of the Sarcophagus of Chernobog, Ursus. For this research, she was bestowed the title of dame. She has worked as a Leithanien scholar, an advisor and Arts trainer for Westin Security of Columbia and even a cleric in Laterano. She has witnessed countless incidents across Terra such as the Silence of Iberia, the annihilation of Gaul during the Battle of the Four Emperors, and Columbia's independence. She even befriended many long-living mortals like Buldrokkas'tee and the Nachzehrer King.\n\nHowever, the further one attempts to trace Kal'tsit's past, the more confused one would become, because it is revealed that she is a creation of two \"Predecessor\" scientists, Priestess and the Doctor themselves — then named \"Oracle\", christened AMa-10. While little is known about the circumstances surrounding her conception, one thing is certain; Kal'tsit cannot be truly killed, as she will be reborn in a new body upon death, effectively making her immortal. As a result, Kal'tsit is no stranger to the never-ending shift in the Terran civilization, for she had witnessed and involved herself in various events that shaped Terran history, from the third destruction of Kazdel to the Nightzmoras' grand conquest of the Foehn Hotlands; in fact, it would be appropriate to call Kal'tsit history itself. Nevertheless, she has never forgotten her goal and continues to guide the Terrans into casting aside their differences and guiding civilization, for Kal'tsit is aware that there are dangers lurking beyond Terra and they have to be ready for the worst to come.",
  profile: "Kal'tsit, one of Rhodes Island's high-level administrative crew, and leader to Rhodes Island's medical projects. Profoundly learned in metallurgy, sociology, Originium Arts, archaeology, history and genealogy, economics, botany, geology, and other fields. In a portion of Rhodes Island operations, provides medical theory assistance and emergency aid apparatus as medical personnel. Simultaneously, active in many projects as a major constituent of Rhodes Island's command system.",
  records: [
    {
      "title": "Clinical Analysis",
      "content": "\"My diagnostic conclusions are left to my own judgment. Your attention should all be placed on other Infected in need of assistance.\"\nKal'tsit told me this, but from the very first word, I was sure it was a throwaway line meant to throw me off.\nRemember, there are some who require others to go and help them. Kal'tsit is the sort of person who doesn't care about herself; the reason she's still alive is because she's determined there are some things she has to accomplish before she dies. She's set her own baseline too low.\nYes, yes, she's very strong. Everyone believes Kal'tsit deserves to speak for herself in their own specialties–those of us with years of work experience get that, we do. It's just that it's not specialist proposals some need... it's to relax a little.\nAnd some don't need others to extend a helping hand, but that's not to say they should be all alone instead. By help, I mean to tell them–there are others by their side.\nIf you can see this message, that should mean you care about her very much.\nSo, keep it up. Fight on. Don't leave it all up to Closure to make a show.\nAlso, yeah, Kal'tsit really doesn't let people give her physical exams.\n—Mysterious message that appeared at the analysis report's original address, signed by ■■■ of the HR Department."
    },
    {
      "title": "Archive File 1",
      "content": "Columbia, a fresh name.\nVictoria has already decided on retreating; you don't need to pay too close attention to this.\nThe die is cast.\nThe duke of this frontier surely overestimated the accumulated worth of his fervent venture. When has Victoria ever concerned itself with the great nobles' personal interests? This is his stupidity; the other dukes would never run this sort of business in plain sight.\nHe's been embroiled in disputes, assailed back and front. He hasn't even a chance.\nIn time, yes. Gaul has put considerable pressure on Victoria in this; the frontier duke's defeat in this conflict is precisely the machinations of Victoria's strange decision-making. Victoria has sent no assistance to him. Not even a single ship.\nPresumably, they're watching with folding arms, deliberately seeing him to his death. Victoria–does not have just one mind.\nBut no matter what, Victoria will be too busy to concern itself with those cities stopped over in its northwest wastes; this conflict has facilitated the birth of this Columbia.\nAn opportunity? Theresa... hm. Perhaps it is. The founding of a brand new country is always an opportunity.\nBut opportunity often signifies a source of ruin. The next calamity Kazdel faces may very well be brought about by it.\nDon't joke with me. I wouldn't do such things now, I can promise you... wait, you're making fun out of me, aren't you? You know I'm no longer that sort of person. Besides, unlike in the past, annihilating a country now seems hardly a possible thing.\nThings change, and grasping a country is no longer simple–every person has, from the warmth of Originium engines, drawn their own notions. They have found their own persons, and no longer keep to their laissez-faire ways.\nPerhaps it's a good thing? Yes. If they can persevere.\nHardly anyone left could prevent Gaul's realization of hegemony, and Victoria has already lost several cities on end.\nUnless those few empires could, in this interstice, relinquish their past hatred. Impossible. Madmen, lunatics, speculators and slaveowners? Hah. If they truly had such affinity...\n...You have a point too. Whether they truly could find this chance, we can't say. After all, when have we ever dared to assert that we could see the future?"
    },
    {
      "title": "Archive File 2",
      "content": "How could this happen–\nHow could this be?\nBecause of this defection, it's likely I'll be expelled from the university. But I already lack the time to attend to such things now.\nThis is Kal'tsit, a [Leithanien scholar sending out an emergency bulletin. If you receive this message, please pass this news on through the following channels to a Messenger.\nI won't hinder you from learning about this message's contents.\nA major disaster has just occurred.\nPresently, judging from bearing, the epicenter could only be in Iberia. All signals have been cut off, and even the electricity has vanished from my personal channel.\nThere's been a great change in the clouds. The ocean's current? This couldn't have solely been the result of a current and storm.\nNot even for Iberia.\nThe Iberians don't have the capability to cause a disaster like this, and Ægir... Ægir's silence is a form of arrogance. This couldn't be the Ægir's doing either.\nMy conjecture: The creatures we previously witnessed are not Ægir's experimental products. It's likely they signify the ocean's true present state.\nThe data left behind by the islanders is a complete match to them; our sorrowing inferences have come true.\nIberia has sunk into quiet, as if the whole of the south has thus faded away.\nIf we wish to learn the concrete state of things, we can only wait for later signal from the Messengers. Presently, I can only prioritize informing you all of this conclusion.\nA coastal country has suffered the unexpected.\nIf Iberia has become the first sacrifice on the coast, then I fear the present state of Ægir itself... will only amplify in cruelty.\nMay you all be safe.]"
    },
    {
      "title": "Archive File 3",
      "content": "The Lord of Fiends has died.\nBabel has collapsed.\nDo we, on all these ruins, intend to build a new Babel?\nNo... she wouldn't wish for that.\nAm I able to decide... what we should do?\nNo, Ascalon, I have no right to decide.\nI'm not your leader. I don't have the qualification.\nLet alone that Babel's cause is rendered unable to continue. If even Theresa would fail, then who could succeed?\nKazdel wouldn't be destroyed by this, and yet our mission perished too as Babel collapsed. We've lost the strength to unite Sarkaz.\nSo, we... could not simply serve the Sarkaz again.\nNo. Theresa knows. Theresa always knew. It was Theresa who gave me such instruction.\nMoreover, she believes this hasn't meant our failure. She believes Babel's mission has already come to a close.\n......\nI understand.\nSoon, we'll leave Kazdel. Some people won't accept this decision; let them go.\nHardly everyone is like Theresa, able to genuinely leave Kazdel. \"An ideology needs soil,\" and a seed does not necessarily need to sprout in its homeland.\nYes... Oripathy... the problem of treating and managing Oripathy.\nSarkaz suffer it in great measure. Oripathy is one of the major factors Sarkaz are currently met with.\nCorrect.\nIt's not Sarkaz alone.\nJust as Theresa said at the very beginning, the problems of the Sarkaz have never been the Sarkaz's alone.\nThis concern was one of the many means we labeled \"unrealistic\" at the time. Nowadays, a means can become a goal too.\nOripathy, as well as the terrifying prejudice it brings about, require treatment.\nThis will be our new concern. Not only because all present suffer Oripathy's torment, but also because an ideology, one that drives away prejudice... is a thing that needs soil.\nTerminal?\n...No, I don't believe so. Terminal... it can definitely be cured. Terminal illnesses are simply waiting for the day they can be cured to come. I will prove... that on this lone point, she is wrong.\nWe will soon conduct a first round of voting on this concern.\n– Amiya?\nI will raise her."
    },
    {
      "title": "Archive File 4",
      "content": "C'mon, how have things gone critical again? Here I thought that engineering thing came back for another bite... didn't I tweak the new facial recognition warning system to treat Castle-3's new paint job as an intruder?\n...Oh, don't tell me it was the thing where the ground level boiler had its output reworked too high and made all the pipes flow backwards? Nah, couldn't be... is she gonna catch me for this again?\nHeck no, if things are serious this time, my funds are as good as dead.\nWait, no way... no... am I even still useful to Rhodes Island?\nK–Kal'tsit? Don't spook me like this, Kal'tsit, I... I don't have that much meat on me, y'know–\nKal'tsit?\nHow come she's not in... this monitor's way too old, jeez. I gotta get her a new one.\nNo, wait, what is th–863-879? 622-690?\nWhat?\nHold on...\n...Personal records?\nKal'tsit?! Kal'tsit!\nUgh, what does \"You already have full privileges\" mean? I haven't even hacked in yet, y'know?\nPRTS? You there? Can you answer me something?\nHold up, this database system is isolated... there are systems disconnected from PRTS on this ship?\nWaitwaitwait.\nThis Rhodes Island structural diagram isn't right, is it? Where'd this vacant bit up here come from?\n\"Third-generation prophylaxis theoretical plans\"... huh? Do we have a centrifuge of this grade anywhere?\n–\"Total effects of Originium on species and forms of life\"?\nKal'tsit??"
    },
    {
      "title": "Archive File 5",
      "content": "...The Rim Billitonians ultimately chose to name the mountain range after Bank Nuts, their most easily harvested crop. Located at the tip of the southwestern branch of the Targangils ore vein, it is a rare habitable location in Rim Billiton, a nation where Catastrophes occur frequently. Ocean monsoons from the southeast bring rainfall to the area, so given a few years between the two Catastrophes that occurred here, one will be able to see patches of lush broadleaf forests on the mountainside.\nLooking at it now, there is nearly no way for me to match this view to its appearance in my memories: ten thousand years ago, when Originium had yet to spread, this area was a vast, barren plain.\nThat wasteland was the very first scenery I saw on Terra, and where my journey began.\nCenturies after leaving this place, I attempted to find my way back once again, my meaningless efforts nearly for naught. Back then, there was no language capable of describing direction, and the vast barrens lacked any stable reference points, and much like the stars in the night sky were unable to guide the way. In the end, I used several major mountain ranges depicted in the satellite photos stored in my body as landmarks, and pinpointed the plains' location. When I returned, I saw that Ancients had settled here after fleeing a battle with the Teekaz, and their tribe had already grown to over a hundred.\nThat was a trace of life.\nI continued my search as I began my wandering of this land called Terra, but deep down I knew the answer I was looking for could only be found within time itself. Time is solitary, but 'solitary' is not a word applicable to experiencing life. I began to reap joy from my confused journey, although this joy utterly exhausted me.\nI must admit that I occasionally needed to pause for a short rest, and I have realized that these temporary breaks have increased in frequency. Perhaps it is due to my encounters, my companions who I never expected to meet and who allowed me to relax in an almost lazy manner-the trust I could impart in them in return, along with the worries and hesitation that also came into being because of them.\nOn my endless journey, I have never forgotten the finite time alloted to all existence, and I have no intention of fighting this law. Only, before the end comes, I now presumptuously expected my journey to have a much gentler conclusion.\nInevitably, I again feel joy from this.\n......\nWithin the many documents left behind by Kal'tsit, you read several paragraphs just like this one. They do not seem to be a diary or a letter left for anyone, but merely random notes written, intentionally or otherwise, alongside regular files. But if anyone who can truly understand the meaning lying within these words, it is only one particular person."
    },
    {
      "title": "Promotion Record",
      "content": "Kal'tsit:\nThe moment you read this, the ending act must already be played.\nIt only took a moment before I thought to hide this letter in your office desk. If you were not sitting down to reminisce in peace, I'm sure you wouldn't find this letter.\nThese words are written for the you in times like this.\n...Do you still remember all those theories you taught me? I always remembered.\nYou said the earth we knew was but a layer of mud, littering upon a celestial orb.\nYou said our different forms were not created so, we crawled, long before we learned to walk.\nYou said the stars beyond skyveil are arks sailing through the stellar lane...\nThe wonderous things you said... Kal'tsit, I remembered. I remembered them all.\nYou once said, more than seeking sense in our action, you wanted to learn of the answer to yourself; and for so many times you asked, of those I have committed to this landship, of the reason I commit this very much into it.\nI feel the answer is very childlike, so I never directly responded to your question.\n...Kal'tsit, I sense your loneliness. Because you feel you have none of the same kind.\nKal'tsit, you shall have my answer at very last: I hope the Rhodes can be a place you name home: an Island you may always return to.\nOnce I thought too, to witness such future with my own eyes alongside you.\nBut yet, there is no antidote to loneliness, there is no end to nomadic wandering, there is no cure to a terminal illness...\nI already did everything I could do. I won't harbor complaint for my own end.\nBabel's mission is concluded, and you and this landship have only just set sail.\nNow go, unto your initial grand quest. Through the grim perils of the longest night, Rhodes Island shall breach into the promised dawn.\nThat future which sails on the tender earth, it belongs to you all.\nI am not a same kind as you, Kal'tsit. I cannot explain away your puzzlement.\n–But I have always been your companion. And still I will be.\n[Unsigned.]\nHer Majesty once said it was Dr. Kal'tsit who directed the main cabin's follow-up excavation.\nNowadays, occasionally you'll see Kal'tsit hurrying past along the aisle, then stop out of nowhere, and trace her hand across the surface of the wall.\nI wonder just what this landship means to Kal'tsit?"
    }
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  summon: {
    name: 'Mon3tr',
    icon: '/operators/kaltsit/mon3tr-summon.png',
    position: 'Low',
    trait: "Blocks 3 enemies. Deployed through Kal'tsit's Mon3tr talent; can only be actively healed by Kal'tsit, and has 0 DEF while outside her Attack Range.",
    stats: { hp: 5433, atk: 1402, def: 405, res: 0, block: 3, cost: 10, aspd: '2s', rdp: '25s' },
    range: [[2,1]],
    note: "Kal'tsit's SP recovery for Command: Tactical Coordination and Command: Meltdown requires Mon3tr on the field; if Mon3tr leaves, her SP resets to 0. Non-Damaging Restructuring (E2): when defeated (excluding retreat), stuns enemies in the surrounding 8 tiles for 3 seconds (3.5 at Potential 6) and deals 1200 (1400) True damage.",
  },
  skins: [
    { id: 'base', label: "Base", src: '/operators/kaltsit/base.png', chibiSrc: '/operators/kaltsit/chibi.webm', chibiMoveSrc: '/operators/kaltsit/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "唯@W" },
    { id: 'e2', label: "Elite 2", src: '/operators/kaltsit/e2.png', chibiSrc: '/operators/kaltsit/chibi.webm', chibiMoveSrc: '/operators/kaltsit/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "唯@W" },
    { id: 'skin1', label: "Remnant", src: '/operators/kaltsit/skin1.png', chibiSrc: '/operators/kaltsit/chibi-skin1.webm', chibiMoveSrc: '/operators/kaltsit/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "红色彗星" },
    { id: 'skin2', label: "The Remains of Time", src: '/operators/kaltsit/skin2.png', chibiSrc: '/operators/kaltsit/chibi-skin2.webm', chibiMoveSrc: '/operators/kaltsit/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "伍秋秋秋秋" },
  ],
  portrait: '/operators/kaltsit/portrait.png',
}

export default kaltsit
