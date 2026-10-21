import type { Operator } from '../../types'
import ebenholzVoice from '../voices/ebenholz'

const ebenholz: Operator = {
  name: 'Ebenholz', fileNo: 'LN05', class: 'Caster', branch: 'Mystic Caster', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting'],
  faction: 'Leithanien', position: 'Ranged', race: 'Caprinae', gender: 'Male', birthplace: 'Leithanien',
  birthday: 'June 5th', height: '173 cm', combatExp: 'None', infectionStatus: 'Confirmed Infected by medical examination.', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Ryota Osaka', CN: 'Che Lie', EN: 'Atilla Akinci', KR: 'Uhm Sang-hyun' },
  voice: ebenholzVoice,
  trait: 'Attacks deal Arts damage; When unable to find a target, attacks can be stored up and fired all at once (Up to 3 charges)',
  tags: ['DPS'],
  stats: { hp: 1678, atk: 1550, def: 135, res: 20, block: 1, cost: 25, aspd: '3s', rdp: '70s' },
  range: {
    base: [
      [0,1,1,0],
      [2,1,1,1],
      [0,1,1,0],
    ],
    e1: [
      [0,1,1,1],
      [2,1,1,1],
      [0,1,1,1],
    ],
    e2: [
      [0,1,1,1],
      [2,1,1,1],
      [0,1,1,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Outstanding' },
  talents: [
    { name: 'Dynamics', desc: 'Stored attacks deal 135% damage; Can store 1 extra charge that is only used when attacking elite or boss enemies', elite: 'E2' },
    { name: 'Appoggiatura', desc: 'If there are no other enemies near the target, attacks deal an additional 15% ATK as Arts damage', elite: 'E2' },
  ],
  skills: [
    {
      name: "Quickening Presto", icon: '/operators/ebenholz/skill-1.png', activation: "Manual", recovery: 'Auto Recovery',
      desc: "Attack Range changes, Attack Interval is massively reduced, and each attack deals 50% ATK as Arts damage", spInit: 5, sp: 15, dur: "5s", rank: 'M3', range: [[2,1,1,1,1]],
      note: "Attack interval is multiplied by 0.17 at M1–M3 (0.2 at Lv1–7), reducing it to 0.51s before modifiers.",
      levels: [
        { level: "1", desc: "Attack range changes, attack interval is significantly reduced, and each attack deals 30% ATK as Arts damage", spInit: 5, sp: 25, dur: "5s" },
        { level: "2", desc: "Attack range changes, attack interval is significantly reduced, and each attack deals 31% ATK as Arts damage", spInit: 5, sp: 24, dur: "5s" },
        { level: "3", desc: "Attack range changes, attack interval is significantly reduced, and each attack deals 32% ATK as Arts damage", spInit: 5, sp: 23, dur: "5s" },
        { level: "4", desc: "Attack range changes, attack interval is significantly reduced, and each attack deals 35% ATK as Arts damage", spInit: 5, sp: 22, dur: "5s" },
        { level: "5", desc: "Attack range changes, attack interval is significantly reduced, and each attack deals 36% ATK as Arts damage", spInit: 5, sp: 21, dur: "5s" },
        { level: "6", desc: "Attack range changes, attack interval is significantly reduced, and each attack deals 37% ATK as Arts damage", spInit: 5, sp: 20, dur: "5s" },
        { level: "7", desc: "Attack range changes, attack interval is significantly reduced, and each attack deals 40% ATK as Arts damage", spInit: 5, sp: 19, dur: "5s" },
        { level: "M1", desc: "Attack Range changes, Attack Interval is massively reduced, and each attack deals 43% ATK as Arts damage", spInit: 5, sp: 18, dur: "5s" },
        { level: "M2", desc: "Attack Range changes, Attack Interval is massively reduced, and each attack deals 46% ATK as Arts damage", spInit: 5, sp: 17, dur: "5s" },
        { level: "M3", desc: "Attack Range changes, Attack Interval is massively reduced, and each attack deals 50% ATK as Arts damage", spInit: 5, sp: 15, dur: "5s" },
      ],
    },
    {
      name: "Desolate Echoes", icon: '/operators/ebenholz/skill-2.png', activation: "Auto", recovery: 'Auto Recovery',
      desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 245% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 13, rank: 'M3',
      note: "Can expend the extra stored attack from Dynamics; counts as an attack and triggers Appoggiatura. Remnants of Days Past are placed on the tile of the enemy with the highest aggression first, then the nearest tile, then randomly; they have a 1.35-tile trigger radius, push enemies with force 1 and detonate 0.93s after triggering. Not activated if no open tiles are in range; all Remnants vanish when Ebenholz leaves the field.",
      levels: [
        { level: "1", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 140% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 16 },
        { level: "2", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 150% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 16 },
        { level: "3", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 160% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 16 },
        { level: "4", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 170% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 15 },
        { level: "5", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 180% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 15 },
        { level: "6", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 190% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 15 },
        { level: "7", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 200% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 14 },
        { level: "M1", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 215% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 14 },
        { level: "M2", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 230% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 13 },
        { level: "M3", desc: "Expends all stored attack charges and summons stored attack charges +1 Old Day Remnants on deployable tiles within Attack Range (lasts for 30 seconds). The Remnants activate when enemies approach, each dealing 245% ATK as Arts damage to nearby enemies and dragging them towards itself moderately", spInit: 0, sp: 13 },
      ],
    },
    {
      name: "Sound of Silence", icon: '/operators/ebenholz/skill-3.png', activation: "Manual", recovery: 'Auto Recovery',
      desc: "ASPD +80, ATK +65% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 140% of the original\nCan manually deactivate skill at will", spInit: 10, sp: 20, dur: "30s", rank: 'M3',
      note: "Stored attacks held at activation and stored during the skill are only used against elites/bosses. When the skill ends, all but 1 stored attack revert to normal.",
      levels: [
        { level: "1", desc: "ASPD +40, ATK +35% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 115% of the original\nCan manually deactivate skill at will", spInit: 5, sp: 25, dur: "30s" },
        { level: "2", desc: "ASPD +50, ATK +38% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 118% of the original\nCan manually deactivate skill at will", spInit: 5, sp: 25, dur: "30s" },
        { level: "3", desc: "ASPD +50, ATK +40% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 120% of the original\nCan manually deactivate skill at will", spInit: 6, sp: 24, dur: "30s" },
        { level: "4", desc: "ASPD +50, ATK +43% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 123% of the original\nCan manually deactivate skill at will", spInit: 6, sp: 24, dur: "30s" },
        { level: "5", desc: "ASPD +60, ATK +45% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 125% of the original\nCan manually deactivate skill at will", spInit: 7, sp: 23, dur: "30s" },
        { level: "6", desc: "ASPD +60, ATK +48% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 128% of the original\nCan manually deactivate skill at will", spInit: 7, sp: 23, dur: "30s" },
        { level: "7", desc: "ASPD +60, ATK +50% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 130% of the original\nCan manually deactivate skill at will", spInit: 8, sp: 22, dur: "30s" },
        { level: "M1", desc: "ASPD +70, ATK +55% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 133% of the original\nCan manually deactivate skill at will", spInit: 9, sp: 22, dur: "30s" },
        { level: "M2", desc: "ASPD +70, ATK +60% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 136% of the original\nCan manually deactivate skill at will", spInit: 9, sp: 21, dur: "30s" },
        { level: "M3", desc: "ASPD +80, ATK +65% and only targets elite or boss enemies. The damage boosting effect of this unit's first Talent increases to 140% of the original\nCan manually deactivate skill at will", spInit: 10, sp: 20, dur: "30s" },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Ebenholz's Badge", desc: 'Appointed as Caster Operator to exercise Mystic Caster responsibilities' },
    mscx: { code: 'MSC-X', name: 'Originium Dice Case', stages: [
      { stage: 1, atk: '+58', aspd: '+3', effect: 'Trait improved: Attacks deal Arts damage; When unable to find a target, attacks can be stored up and fired all at once (Up to 4 charges)' },
      { stage: 2, atk: '+75', aspd: '+4', effect: 'Dynamics improved: Stored attacks deal 140% damage; Can store 1 extra charge that is only used when attacking elite or boss enemies' },
      { stage: 3, atk: '+90', aspd: '+5', effect: 'Dynamics improved: Stored attacks deal 143% damage; Can store 1 extra charge that is only used when attacking elite or boss enemies' },
    ]},
    mscy: { code: 'MSC-Y', name: '"Theory Expositor"', stages: [
      { stage: 1, hp: '+80', atk: '+80', effect: 'New trait: ASPD +30 when there are stored attacks' },
      { stage: 2, hp: '+120', atk: '+112', effect: 'Appoggiatura improved: If there are no other enemies near the target, attacks deal an additional 18% ATK as Arts damage. Otherwise, attacks deal 25% ATK as Arts damage to enemies near the target' },
      { stage: 3, hp: '+175', atk: '+135', effect: 'Appoggiatura improved: If there are no other enemies near the target, attacks deal an additional 20% ATK as Arts damage. Otherwise, attacks deal 36% ATK as Arts damage to enemies near the target' },
    ]},
    mscd: { code: 'MSC-Δ', name: 'Lineage of Decay', stages: [
      { stage: 1, atk: '+76', res: '+4', effect: 'New trait: When dealing Arts damage, deals an additional 8% of damage dealt as Necrosis' },
      { stage: 2, atk: '+102', res: '+5', effect: 'Appoggiatura improved: If there are no other enemies near the target, attacks deal an additional 24% ATK as Arts damage; if the target is under the burst effect from Necrosis, the attack deals an additional 20% ATK as Elemental damage' },
      { stage: 3, atk: '+124', res: '+5', effect: 'Appoggiatura improved: If there are no other enemies near the target, attacks deal an additional 30% ATK as Arts damage; if the target is under the burst effect from Necrosis, the attack deals an additional 30% ATK as Elemental damage' },
    ]},
  },
  story: "The black-haired Caprinae with spiral horns known as Graf Franz von Urtica is the only surviving descendant (though a distant relative) of the evil Witch King of Leithanien. He lost his parents amidst a purge following the Witch King's downfall and then got kidnapped by the King's loyalists. To recreate the power of the Witch King and even attempt to \"resurrect\" him, they forcefully implanted the young boy's head with one of the Witch King's dark legacies, the accursed \"Voice of Mundane\" that is said to possess the Witch King's consciousness. He was nonetheless saved by the Twin Empresses, granted mercy by them out of pity, and groomed to inherit some nobility titles.\n\nHowever, the young Graf was dissatisfied with his \"pleasant\" life. Throughout the years, the Empresses' supporters forced him to praise the Empresses' name. He noticed he had become nothing more than a mere puppet controlled by the Kurfürsten to maintain their support for the Empresses. Instead, he yearned to give up his nobility and live an undisturbed life as a commoner. In fact, under the arrangement of Vyseheim's Lehnsfrau Gertrude Strollo, he was invited to participate in Czerny's farewell musical performance there as \"Ebenholz\" to extract the \"Voice\" from his head and then erase his identity forever. Little did he know that the performance would soon descend into disaster, a scheme by the Witch King's loyalists. It only came to an end through the tragic sacrifice of Kreide, and leaving him with his Oripathy.\n\nFollowing the Vyseheim incident, Ebenholz was brought to Rhodes Island under Hibiscus' recommendation, using his Originium Arts mastery to provide offensive support for R.I. operatives on the battlefield. While the accursed \"Voice\" in his mind is currently dormant because of Kreide's sacrifice, Ebenholz fears it might unleash one day, leading to the same fate as Kreide and his worst nightmare coming true. He declares his intent to sever the shadow of the Witch King in his lifetime.",
  profile: "Ebenholz, a Leithanien commoner who became infected with Oripathy during the Vyseheim incident. Introduced to Rhodes Island for treatment by Operator Hibiscus, he demonstrates an extraordinary talent for Originium Arts. Following examinations, he joined Rhodes Island as a field operator.",
  records: [
    {
      title: "Clinical Analysis",
      content: "Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 5%\nSmall traces of infection are visible on the surface of the body.\n\n[Blood Originium-Crystal Density] 0.22u/L\nDid not receive prompt treatment upon infection. Infection has shown signs of spreading but is currently under control.",
    },
    {
      title: "Archive File 1",
      content: "A seemingly unapproachable Caprinae young man.\nIf you ask him for the time, he will look down at his watch and politely tell you. However, if you try to take the opportunity to make small talk, he will bring the conversation to an abrupt end in the most polite way possible.\nOnly the Doctor and a very few other operators are able to get him to open up. When he shares a conversation with them, he demonstrates a side of himself that he rarely shows anyone else, and expresses his opinions without reserve. However, no matter the topic, his words always seem to carry a hint of gloominess, which is noticeable even when he talks about himself, perhaps even more so.\nEvery now and then, Ebenholz can be seen playing musical instruments. According to the witness descriptions, Ebenholz seems to be proficient with all instruments, but is most frequently seen playing the cello with such sorrow that it reminds listeners of people and events of the past.\nThere are even rumors that one of his specialties is the flute, however he has never been spotted playing one.",
    },
    {
      title: "Archive File 2",
      content: "According to Leithanien's official explanation, Ebenholz used to be an ordinary student studying music and Originium Arts at a certain university in his hometown of Vyseheim, a mid-sized city in Leithanien. During an unfortunate incident, Ebenholz became infected with Oripathy and had no choice but to withdraw and seek medical help at Rhodes Island.\n\n[Classified Log]\nUnfortunately, that document from Leithanien bears little resemblance to the truth.\nEbenholz was not born in Vyseheim. He lived much of his life in Urtica, a small town in disrepair.\nHe is no commoner either, at least not in Urtica. In truth, right up until he left for Rhodes Island, he was Graf Urtica. His appointed guardian issued orders as his representative, even after he came of age.\nLike other children of his social class, Ebenholz received an education indispensable to a Leithanian noble: etiquette, literature, Originium Arts, and–inseparable from and oftentimes even more important than Originium Arts–music.\nMany parents will do their utmost to hire the best music teachers, and these teachers can have a decisive influence on their charges' upbringing. There are even nobles who will judge a person's character solely by the reputation of their first music teacher.\nHowever, according to Ebenholz himself, his guardian was not very keen on following this tradition.\n\"The teacher laid out a few instruments in front of me and asked me with a friendly voice which one I was interested in.\nI picked up the violin and played a little bit. He was so overjoyed by that, and kept calling me a genius, but I didn't respond to his compliments. When I saw the instruments, a barrage of foreign concepts and knowledge of how to play them flooded into my brain, as though someone was there ordering me around.\nEven so, I was pretty happy about it. It was the first time since I came to Urtica that someone showered me with praise so enthusiastically and actually meant it. Heh, even though I'd already heard so much insincere praise. Guess I never learned my lesson.\nThe next day, I met that teacher again, but he looked at me with nothing but scorn. Clearly, my representative had told him part of the truth.\"\nThe HR Operator in charge of recording these logs is not familiar with the situation in Leithanien and nonchalantly asked, \"What truth?\"\n\"That Urtica is a territory passed down in the Witch King's lineage. In which case, what does that make Graf Urtica?\"",
    },
    {
      title: "Archive File 3",
      content: "[Classified Log]\nLeithanien experienced tumultuous upheaval during its regime change. Those who were fed up with the Witch King's massacres turned the flames of their fury on anything and anyone related to the Witch King. Ebenholz's parents died during that period due to their distant blood relationship.\nIn turn, a minority were unhappy with the end of the old era. They resorted to all kinds of methods to resist the Twin Empresses' reign, and the most extreme of them became known as the \"Witch King's Remains.\" It was they who saved Ebenholz from meeting the same fate as his parents, but in doing also dragged him into a greater maelstrom.\nIn a single sentence, Ebenholz explained what they had done to him: \"They force-fed a verse of the Voice of Mundane into my brain.\"\nThe Medical Department has examined Ebenholz's brain on multiple occasions, but are as of yet unable to determine how and in what form the Voice of Mundane was implanted into it. What is certain, however, is that the Voice of Mundane is real, and causes him intense headaches. It is closely linked to Ebenholz's natural-born talent in both music and Originium Arts, but we have been unable to determine exactly what it is.\nThrough Ebenholz's introduction, we obtained copies of a research manuscript from Operator Czerny, and according to its inexact descriptions, the Voice of Mundane is a melody improvised by the Witch King and transcribed by his court musicians.\n\"Then shouldn't the Voice of Mundane be sheet music, or some kind of tape?\"\n\"What do you think? Did they cram paper or plastic into my brain?\"\nIn the end, the Medical Department had no choice but to tentatively accept Ebenholz's own explanation:\n\"It's a melody, a great melody. A melody so great that it makes me worry that I'll be swallowed whole without even noticing.\"\n\"Can a melody really swallow a person?\"\n\"All I can say is... I'll do my best to prevent it from happening again.\"\nEver since, Ebenholz has refused to discuss the topic.",
    },
    {
      title: "Archive File 4",
      content: "[Classified Log]\nWhen he first arrived at Rhodes Island, Ebenholz did not show much of the patronization or verbal aggressiveness that Operators Hibiscus and Czerny had described. Most operators only know him as a quiet yet courteous Leithanian operator new to Rhodes Island. Back then, Ebenholz wasn't very keen on talking to others. When by himself, he often spaced out, looking only at the cello that he always kept near him. Some operators, worried, have asked him if he needed any help, but he always simply shook his head.\nEbenholz changed after his first field operation. The operation itself could not have been more successful. Rhodes Island rescued a dozen children from extremely poor conditions in an orphanage, resettling the non-Infected at trustworthy organizations, while taking in the Infected among them.\nIt's worth noting that Ebenholz was key to the entire operation, from seeing through the orphanage manager's subterfuge to providing Originium Arts support during the actual rescue operation.\nAfter he made it back to Rhodes Island, Ebenholz began to change for the better. He started to proactively talk to those who approached him, to learn everything he could about Rhodes Island, and also to assess acrimoniously the things he could not bear to even look at. Of course, this applies only to the Doctor and a very few other operators.\nOnce, he even attended an operator-organized book club and started to exchange emails with several of them afterward.\nMost of Rhodes Island's operators did not notice this change, but there is one thing that's caught everyone's attention:\nEbenholz has stopped spacing out while looking at his cello. Instead, he often plays it and hums along, almost like talking to an old friend.",
    },
    {
      title: "Promotion Record",
      content: "\"Enough of your self-loathing rhetoric. You cannot hide your short-sightedness from me, my foolish descendant.\"\n\"Thanks for the compliment, old fart.\"\n\"Yet you still doubt yourself. Injustice has you indignant, yet you also doubt the veracity of your anger. In the end, you even accepted these doubts. You told yourself to simply put up an act, and now you must continue this act... Laughable. Absolutely laughable!\"\n\"Thanks for the lesson. Please do give me some time to completely forget your words.\"\n\"Hah...\"\n\"You must be wondering why I don't tell you to shut up when you speak anymore, isn't that right?\"\n\"Do tell.\"\n\"First, I've realized that yelling at you is neither going to make you shut up nor make my headache go away. And by the way, I'm more concerned about the latter.\nSecondly, I still have no idea who you are. I don't know if you're a lingering echo in the Voice of Mundane, or just a hallucination. I don't even know if, for reasons I can't begin to imagine, I'll completely lose myself to that ear-piercing melody like Kreide.\"\n\"But I'm not afraid of you anymore, old fart. It's that simple.\"",
    },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/mystic-caster-branch.png', factionIcon: '/icons/factions/leithanien.png',
  skins: [
    { id: 'base', label: "Base", src: '/operators/ebenholz/base.png', chibiSrc: '/operators/ebenholz/chibi.webm', chibiMoveSrc: '/operators/ebenholz/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.1, offsetYPercent: 3.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "竜崎いち" },
    { id: 'e2', label: "Elite 2", src: '/operators/ebenholz/e2.png', chibiSrc: '/operators/ebenholz/chibi.webm', chibiMoveSrc: '/operators/ebenholz/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.1, offsetYPercent: 3.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "竜崎いち" },
    { id: 'skin1', label: "Eine Variation", src: '/operators/ebenholz/skin1.png', chibiSrc: '/operators/ebenholz/chibi-skin1.webm', chibiMoveSrc: '/operators/ebenholz/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.5, offsetYPercent: 3.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: "竜崎いち" },
  ],
  portrait: '/operators/ebenholz/portrait.png',
}

export default ebenholz
