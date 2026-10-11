import type { Operator } from '../../types'

const chongyue: Operator = {
  name: 'Chongyue', fileNo: 'NM04', class: 'Guard', branch: 'Fighter', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Sui', position: 'Melee', race: 'Undisclosed', gender: 'Male', birthplace: 'Yan',
  birthday: 'January 1st', height: '188 cm', combatExp: 'Undisclosed', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'KuroBlood',
  cv: { JP: 'Toshihiko Seki', CN: 'Ling Zhao', EN: 'Yong Yea', KR: 'Goo Ja-hyung' },
  trait: 'Blocks 1 enemy',
  tags: ['Nuker'],
  stats: { hp: 2635, atk: 590, def: 363, res: 0, block: 1, cost: 11, aspd: '0.78s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Outstanding', 'Combat Skill': '■■', 'Originium Arts': 'Flawed' },
  talents: [
    { name: 'An End to War', desc: '23% chance for normal attacks to increase the damage Chongyue deals to the target by 65% for 2.5 seconds', elite: 'E2' },
    { name: 'All Are Guests', desc: 'Chongyue recovers 3 SP if he defeats at least one enemy with a skill', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Abundant', icon: '/operators/chongyue/skill-1.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Deals 400% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed.\nMax 3 charges', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: `Deals 210% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 6 },
        { level: '2', desc: `Deals 220% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 6 },
        { level: '3', desc: `Deals 230% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 6 },
        { level: '4', desc: `Deals 250% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 5 },
        { level: '5', desc: `Deals 260% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 5 },
        { level: '6', desc: `Deals 270% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 5 },
        { level: '7', desc: `Deals 290% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 4 },
        { level: 'M1', desc: `Deals 320% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 4 },
        { level: 'M2', desc: `Deals 350% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 4 },
        { level: 'M3', desc: `Deals 400% ATK as Physical damage to the target. When at maximum charges, removes all charges and deals damage for each charge removed
Max 3 charges`, spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Whisk', icon: '/operators/chongyue/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Deals 450% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 650% ATK as Physical damage.\nMax 2 charges", spInit: 9, sp: 10, rank: 'M3',
      range: [
        [1,1,1],[1,2,1],[1,1,1]
      ],
      levels: [
        { level: '1', desc: `Deals 250% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 350% ATK as Physical damage
Max 2 charges`, spInit: 5, sp: 13 },
        { level: '2', desc: `Deals 260% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 370% ATK as Physical damage
Max 2 charges`, spInit: 5, sp: 13 },
        { level: '3', desc: `Deals 270% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 390% ATK as Physical damage
Max 2 charges`, spInit: 5, sp: 13 },
        { level: '4', desc: `Deals 290% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 410% ATK as Physical damage
Max 2 charges`, spInit: 6, sp: 12 },
        { level: '5', desc: `Deals 310% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 430% ATK as Physical damage
Max 2 charges`, spInit: 6, sp: 12 },
        { level: '6', desc: `Deals 330% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 450% ATK as Physical damage
Max 2 charges`, spInit: 6, sp: 12 },
        { level: '7', desc: `Deals 350% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 480% ATK as Physical damage
Max 2 charges`, spInit: 7, sp: 11 },
        { level: 'M1', desc: `Deals 380% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 530% ATK as Physical damage
Max 2 charges`, spInit: 7, sp: 11 },
        { level: 'M2', desc: `Deals 410% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 580% ATK as Physical damage
Max 2 charges`, spInit: 7, sp: 11 },
        { level: 'M3', desc: `Deals 450% ATK as Physical damage to up to 4 enemies and causes targets affected by Talent 1 to Levitate, then removes Levitate from all enemies with Levitate, activates Talent 1 on them with 100% chance, and deals 650% ATK as Physical damage
Max 2 charges`, spInit: 9, sp: 10 },
      ],
    },
    {
      name: 'Anatta', icon: '/operators/chongyue/skill-3.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: "Deals 380% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times, Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time", spInit: 0, sp: 8, rank: 'M3',
      range: [
        [0,0,1,0,0],[0,0,1,0,0],[1,1,2,1,1],[0,0,1,0,0],[0,0,1,0,0]
      ],
      levels: [
        { level: '1', desc: `Deals 180% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 12 },
        { level: '2', desc: `Deals 200% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 12 },
        { level: '3', desc: `Deals 220% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 12 },
        { level: '4', desc: `Deals 240% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 11 },
        { level: '5', desc: `Deals 260% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 11 },
        { level: '6', desc: `Deals 280% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 11 },
        { level: '7', desc: `Deals 300% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 10 },
        { level: 'M1', desc: `Deals 320% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 10 },
        { level: 'M2', desc: `Deals 350% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 10 },
        { level: 'M3', desc: `Deals 380% ATK as Physical damage to the target and nearby enemies; after this skill has been used 5 times: Chongyue's attack range increases and attacks hit twice; this skill becomes auto-activated and deals damage an extra time.`, spInit: 0, sp: 8 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Chongyue's Badge", desc: 'Appointed as Guard Operator to exercise Fighter responsibilities' },
    fgtx: { code: 'FGT-X', name: '"When to Wake Up"', stages: [
      { stage: 1, hp: '+210', atk: '+25', def: '+20', effect: 'Trait improved: Blocks 1 enemy; Has 15% Physical Dodge' },
      { stage: 2, hp: '+240', atk: '+35', def: '+25', effect: 'All Are Guests improved: Chongyue recovers 4 SP if he defeats at least one enemy with a skill' },
      { stage: 3, hp: '+260', atk: '+45', def: '+30', effect: 'All Are Guests improved: Chongyue recovers 4 SP if he defeats at least one enemy with a skill; if no enemy is defeated, Chongyue recovers 1 SP' },
    ]},
    fgty: { code: 'FGT-Y', name: 'Shuo', stages: [
      { stage: 1, atk: '+52', def: '+25', effect: 'Trait improved: Blocks 1 enemy; Gains +10 ASPD when above 50% HP' },
      { stage: 2, atk: '+65', def: '+30', effect: 'An End to War improved: 23% chance for normal attacks to increase the damage Chongyue deals to the target by 70% for 2.5s' },
      { stage: 3, atk: '+75', def: '+35', effect: 'An End to War improved: 23% chance for normal attacks to increase the damage Chongyue deals to the target by 75% for 2.5s' },
    ]},
  },
  story: `As eldest of all "siblings" of Sui the Yanese Feranmut, Shuo was the first who obtained human conscience following His fragmentation and sought to find his meaning of life in the mortal realm. While witnessing countless wars and bloodshed, he was also amazed by Yan's age-old vicissitude that still retains the empire's might. To seek the true meaning of "wu," whether it be a conflict for war or martial arts for peace, he concealed his Feranmut nature inside his magical sword, remodeling his body into that of a mortal man under the name "Chongyue," a pseudonym given by his deceased comrade and an elegy describing his eternal mission and his amazement of the mortal realm.\n\nNow a human, Chongyue volunteered to serve the imperial court as the Imperial Guards' grandmaster. For ages, he has been quietly defending the garrison city of Yumen from the threats of the northern Collapsals and the surviving Feranmuts. As an excellent martial artist who masters all kung fu and military philosophy across Yan, he also spreads his knowledge to the soldiers through real-life combat and scrolls archived by them. Despite his achievements, the immortal grandmaster could only witness his dear comrades and disciples fading into dust one by one. He is now tired of eternal conflicts, wishing to seek inner peace inside himself, hence his eventual retirement after requesting it from the imperial court.\n\nAs Sui's revival draws nigh thanks to the insidious plot of several factions within the imperial court, such as the notorious Shanhaizhong, Chongyue too embarks on his mission to defy his destiny together with his entrusted sister Ling and his younger siblings Nian and Dusk. In the meantime, he has to stop some of his wicked siblings - notably Wang - and other Feranmuts like Ya from accelerating the plan. While he prefers tranquility, he won't hesitate to stop all conflicts using his blazing, iron fists, just as an ancient proverb goes: "A man can only stop war by weapons."`,
  profile: `Chongyue, the elder brother of landship residents Nian, Dusk, and Ling. He has a close relationship with government organizations such as the Yanese Ministry of War and the Sui Regulator. Previously served as a martial arts instructor at the nomadic city Yumen, a position which he has resigned from. He came to Rhodes Island to visit his family, and after a round of audits, he is temporarily residing onboard the landship as a visitor. Chongyue possesses rich combat experience and has provided Rhodes Island his unique combat suggestions. However, as requested by Dr. Kal'tsit, Chongyue rarely participates in missions directly.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\n[Blood Originium-Crystal Density] 0.01u/L\nGotta say, since we had cases like Dusk and Ling before, I put in tons of prep work for Chongyue's medical examination. Hell, I pulled a couple people off of work just for this, and that's just the theoretical research guys at Medical. It's not often we get the chance, so I figured I'd collect biological data that could have research value... Chongyue was very amenable to the whole thing, but the results were kinda disappointing. True, all the values are terrifyingly high, but it's just a normal guy's body. You can tell he trains a lot... It's too normal.\nHow should I describe it... Like, you make an account in a game. Then, you grind for hours on end day after day to get to level cap. It's amazing, but c'mon! I'm trying to make cheats here, you know?\n– Closure`,
    },
    {
      title: 'Archive File 1',
      content: `Chongyue's routine is frightening. He wakes up at dawn for morning practice: exercising his breathing as well as the kung fu basics, such as legs, waist, and shoulders. Then, for four hours in the middle of day, he familiarizes himself with a variety of weapons and analyzes martial arts techniques. At dusk, he finishes his evening tasks, cultivates his foundations, and writes as well as keeps his martial arts records... and he does so every single day without fail.\nThe problem here is that ever since he agreed to become our interim martial arts instructor, this has become everyone's routine...\n"The key to success in kung fu can be summed up in one word: Diligence." According to his explanation, in addition to training your body, practicing kung fu is more about training your mind and perseverance. I understand the logic, of course. I'm simply complaining. After all, the prospect of learning the legendary "Divine Style" is alluring. To tell the truth, though, I still have some reservations about the authenticity of the "Yumen showdown" account that Waai Fu gave us–how the winds and sand raged, the skies' colors changed, and how two masters rivaled by none in the world battled and settled their score in less than ten rounds–if I had heard this from Mr. Nothing, I'd definitely write it off as a tall tale. Perhaps it just goes to show how we still have much to learn about Yanese martial arts.\nAside from Yanese operators, Chongyue also sees many operators from other regions, such as Ursus and Sargon, attending his martial arts lectures. But when his students talk to each other in private, they seem to all have noticed in his lectures traces of the styles they already know, as well as, perhaps, the theory behind the moves and the methodology he applies force with. It's all very vague, but his methodology is simpler and more powerful... There are only two possibilities. One would be that Chongyue is a prodigy. He has seen more than half of Yan's martial arts styles and even those of other countries, and has improved upon them. The other would be that he is a prodigy, and has been to many places, and many of the styles are based on his... I digress. How would that even be possible?\nIn any case, Chongyue might be even stricter than Instructor Dobermann. Fortunately, Nian all of a sudden roped him into acting as a stunt coordinator for a movie series she is prepping. Come to think of it, though, in private, Chongyue is actually a rather kind person. He's not as difficult to figure out as Ling or as high-strung as Dusk... Just talking about this makes me miss his lessons.`,
    },
    {
      title: 'Archive File 2',
      content: `When Chongyue first came to Rhodes Island, most operators who'd heard of his background and exploits were under the impression that the grandmaster who defended Yan's northern deserts for years must be a strict, stuffy man and thus avoided him. This lasted until a certain operator was pestered by the library to return an overdue book and subsequently found out that the man who had reserved Homesick, Homesick Blues next was Chongyue. Thereafter, we inadvertently stumbled upon his many other interests: woodcarving, pottery, literature, coffee... A few clubs figured they would give it a shot and sent Chongyue an invitation to their events, and most of them received a reply, "I will be there on time," which only gave the event planners anxiety.\nChongyue's knowledge of the world outside the desert is actually very rich. He even shows considerable interest in the ever-changing pop culture all across the lands. At first, we thought he agreed to participate in Nian's movie because of brotherly love for his sister, but thinking back, perhaps he is actually interested in the workmanship and technology that go into filmmaking. It's worthy mentioning that Chongyue is very quick to learn. After only two months with the crew, he already had a basic understanding of technologies, such as how traditional film develops and the digital encoding and storage used in new films. Even though he is receiving training at a professional organization, he is learning at a shockingly fast pace.\nPerhaps we should put this another way. Chongyue may be a respected awe-inspiring grandmaster in both military and martial arts studies, but he is a willing, diligent student in other subjects. When this is brought up, a few of our younger operators thought nothing strange of this: "There are tons of elders who can keep up with young people's topics these days. Maybe someone else's behind the times."`,
    },
    {
      title: 'Archive File 3',
      content: `[Classified Log]\nClosure's asked me this plenty of times already. My dear eldest brother can't do anything over-the-top like melt things down as he pleases like me, nor does he have any way to just diddle a thousand years away in a dream like Ling. He's got the body of a normal guy, what do you want from him?\n...\nOh, I just remembered something funny that I should really tell you. He's been inside Dusk's paintings before.\nA long, long time ago, he went to pay her a visit. She was too scared to see him, but she still had to, so–right, you're pretty good. Smart, aren't you–Dusk drew the mountain she was in, that shack of hers, and herself, all exactly the same. Dusk showed him her latest and greatest paintings, took him on a magnificent journey to tons of amazing sights: an exquisite palace that stretches far into the air beyond the cliff without collapsing, landbeasts crawling across lotuses mere inches wide to cross a great river, and a mountain full of rusted weapons on an old battlefield that have yet to wear away even after a thousand years... Then, she had to listen to him drone on and on for over an hour about how she shouldn't wallow in her inkscapes, and he even tried to persuade her to go to the frontier fortress with him like Ling... Just constant nagging like that.\nSo all in all he spent an entire day and night in that painting with that Dusk. Then, at daybreak, he tided up all the open scrolls there, and went on his morning practice. He executed a few sets, then, boom–the fog settles and the sun rises, and the painting's torn to shreds. Outside the painting, the mountain and the shack were the same as before. Of course, Dusk's dour face, too. Haha.\nHah, when did he figure it out? He probably knew right from the start. The way he put it, "who wouldn't recognize their own sister?" As for why he had to wait a whole day and night, Dusk thought he was taking her for a ride. She can be immature like that. The way I see it, he was playing along with her wishes and cheering her up, haha.\nHow did he break out of the painting? Obviously, he stayed calm and paid attention to the tiniest details... Perhaps this is the "sublimity" that kung fu folks like to talk about? I mean, why else do you think he loves human techniques so much? Instead of using martial arts to refute the old man's existence, it might be more fitting to say he used it to attain ultimate self-affirmation. It is through martial arts that he found to answer to the question, "who am I?"\nAs for how he separated from the old man and molded that body of his, how am I supposed to know? Not like I was gonna learn from him. But now that that basket of blunders has figured out the trick behind it, he's bound to stir up trouble sooner or later. When the time comes, I sure hope our eldest brother will teach him a good lesson!\n...\nAlright, now sign this form for the camera equipment rental! Otherwise, that's all I'm gonna tell you.`,
    },
    {
      title: 'Archive File 4',
      content: `[Classified Log]\nThe Grandmaster has defended Yumen for years, and all of Yan is eternally grateful for his efforts. Likewise, the Sui Regulator would like to express our sincerest gratitude to your company for accepting him aboard your landship for recuperation, now that his years of accumulated stress have caught up to him and forced him to retire from his post.\nWe understand that Nian, Dusk, and Ling are also aboard Rhodes Island. These three are equally as important to Yan as the Grandmaster, and we ask your company to give all relevant matters the most appropriate treatment.\n...\n–Official correspondence from the Yanese Sui Regulator, discovered moments before Nian set it on fire in her furnace.\n"Retirement." When I first heard our eldest brother utter that word, I was still in Yumen.\nHe has been busy, these many years, and far beyond Yumen. Wars in the north, pirates in the south; wheresoever the court doth wish him to be, there he will be. Of all us siblings, he was the first to abhor violence, yet remains the closest to violence. He's made acquaintance of many an interesting fellow, yet the more he meets, the lonelier he becomes. The affairs of man are chaotic. Is this the fault of war, or is it not...? Retirement has ever been on his mind, and the court has likewise guaranteed him one. Yet many springs and autumns have come and gone while I awaken from my drunken stupor, and still he awaited a more opportune moment. 'Twas in part the court's apprehensions, in part his own. And his long wish now fulfilled, as siblings we must rejoice.\n...\nBut is he truly free?\nOver these long years, too closely bound by ties to the military he has become. The Sui Regulator, the Ministry of Rites, the Ministry of War... Many eyes in the court, and few will wish to see him a hermit. Moreover, with days numbered, "Ya" has returned to Yan, and with the sounds of war during that hunt a thousand years ago yet to cease, Its awakening can only draw ever closer. Perhaps there is someone else aside from that basket of blunders pulling strings behind the curtain...\nBy nature, we siblings love this mortal realm, and none of us wish to return to chaos... but this does not concern my eldest brother. Nay, he is no longer "Shuo," and has not been for some time. And thus, he loves this realm more than any of us. After all, Chongyue belongs to the mortal realm.\nAh, never mind. 'Tis nothing worth minding. When the water is turbid, let it be until it clears. When the water boils, take off the lid. Am I scared? What is there to be scared of...? When you sober up, raise another flask.\nRight. Do not trouble yourself going to him. While he is aboard Rhodes Island, let him enjoy his retirement.`,
    },
    {
      title: 'Promotion Record',
      content: `"A beast lets whistle shrill. The mist folds part halo clear\nIt takes its number first. Came so hence all would form\nGlint ebon leaks past scales. Body unbroken hue\nIt hastes yet grasp eludes. Sight sinks earthward to seek\nWhat seals to bid Hui's dark? What parts to bid Ming's light?\nIts gaze goes far. The dayfly feeble there, what shudders grand it strikes\nThe skills of common man. What lengths their limits stretch\nThus arm it strives to vessel make. ■■■■ corpse, ■■■■ selfsame fight\n■■■■. Meld fore and hind as one, like Heaven changed with Earth\nIts grief is marked; man strifes in such extents. Such war should come to halt\nThus quest it has and will, clouds rent and haze begone. In universe, left sole."\n–While the cause is unclear, a portion of the characters midway through the rubbing of this inscription are indistinct and difficult to discern. Reportedly, Sui Regulator scholars have devoted themselves to long-term full restorative work, with headway already made.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/fighter-branch.png', factionIcon: '/icons/factions/sui.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/chongyue/base.png', chibiSrc: '/operators/chongyue/chibi.webm', illustrator: 'KuroBlood' },
    { id: 'e2', label: 'Elite 2', src: '/operators/chongyue/e2.png', chibiSrc: '/operators/chongyue/chibi.webm', illustrator: 'KuroBlood' },
    { id: 'skin1', label: 'Alighting', src: '/operators/chongyue/skin1.png', chibiSrc: '/operators/chongyue/chibi-skin1.webm', illustrator: 'KuroBlood' },
    { id: 'skin2', label: 'All-Round Actor', src: '/operators/chongyue/skin2.png', chibiSrc: '/operators/chongyue/chibi-skin2.webm', illustrator: 'KuroBlood' },
  ],
  portrait: '/operators/chongyue/portrait.png',
  portraitFocus: { y: -1, x: 52, zoom: 300 },
}

export default chongyue
