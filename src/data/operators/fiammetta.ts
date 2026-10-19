import type { Operator } from '../../types'
import fiammettaVoice from '../voices/fiammetta'

const fiammetta: Operator = {
  name: 'Fiammetta', fileNo: 'LT11', class: 'Sniper', branch: 'Artilleryman', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Laterano', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Laterano',
  birthday: 'April 3rd', height: '171 cm', combatExp: '4 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: '幻象黑兔',
  cv: { JP: 'Fumiko Orikasa', CN: 'Xiaowen Xu', EN: 'Ina Marie Smith', KR: 'Kim Bo-na' },
  voice: fiammettaVoice,
  trait: 'Deals AOE Physical damage',
  tags: ['DPS'],
  stats: { hp: 1926, atk: 861, def: 156, res: 0, block: 1, cost: 29, aspd: '2.8s', rdp: '70s' },
  range: {
    base: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
    e1: [[1,1,1,1,0],[2,1,1,1,1],[1,1,1,1,0]],
    e2: [[1,1,1,1,1],[2,1,1,1,1],[1,1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Sufferer of Tribulations', desc: 'Continually loses HP over time (HP cannot drop to 0 as a result of this effect); When HP is above 50%, this unit gains Vigor, increasing ATK by 25%; this effect is doubled above 80% HP', elite: 'E2' },
    { name: 'Herald of Revelations', desc: 'While this unit has no skill active, ASPD +27', elite: 'E2' },
  ],
  skills: [
    {
      name: '"Provocate"', icon: '/operators/fiammetta/skill-1.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Attack Range +1 tile, ATK +100%', spInit: 5, sp: 10, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Attack range +1, ATK +30%', spInit: 5, sp: 20, dur: '30s' },
        { level: '2', desc: 'Attack range +1, ATK +35%', spInit: 5, sp: 19, dur: '30s' },
        { level: '3', desc: 'Attack range +1, ATK +40%', spInit: 5, sp: 18, dur: '30s' },
        { level: '4', desc: 'Attack range +1, ATK +45%', spInit: 5, sp: 17, dur: '30s' },
        { level: '5', desc: 'Attack range +1, ATK +50%', spInit: 5, sp: 16, dur: '30s' },
        { level: '6', desc: 'Attack range +1, ATK +55%', spInit: 5, sp: 15, dur: '30s' },
        { level: '7', desc: 'Attack range +1, ATK +60%', spInit: 5, sp: 14, dur: '30s' },
        { level: 'M1', desc: 'Attack range +1, ATK +75%', spInit: 5, sp: 13, dur: '30s' },
        { level: 'M2', desc: 'Attack range +1, ATK +90%', spInit: 5, sp: 12, dur: '30s' },
        { level: 'M3', desc: 'Attack range +1, ATK +100%', spInit: 5, sp: 10, dur: '30s' },
      ],
    },
    {
      name: '"Paenitete"', icon: '/operators/fiammetta/skill-2.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Fires scorching bullets that leaves incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum Attack Range, dealing 400% Physical damage and causing incendiary marks to explode in sequence, dealing 200% Physical damage', spInit: 0, sp: 7, rank: 'M3',
      levels: [
        { level: '1', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 200% Physical Damage and causing incendiary marks to explode in sequence, dealing 100% Physical Damage', spInit: 0, sp: 12 },
        { level: '2', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 220% Physical Damage and causing incendiary marks to explode in sequence, dealing 110% Physical Damage', spInit: 0, sp: 12 },
        { level: '3', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 240% Physical Damage and causing incendiary marks to explode in sequence, dealing 120% Physical Damage', spInit: 0, sp: 12 },
        { level: '4', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 260% Physical Damage and causing incendiary marks to explode in sequence, dealing 130% Physical Damage', spInit: 0, sp: 11 },
        { level: '5', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 280% Physical Damage and causing incendiary marks to explode in sequence, dealing 140% Physical Damage', spInit: 0, sp: 11 },
        { level: '6', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 300% Physical Damage and causing incendiary marks to explode in sequence, dealing 150% Physical Damage', spInit: 0, sp: 11 },
        { level: '7', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 320% Physical Damage and causing incendiary marks to explode in sequence, dealing 160% Physical Damage', spInit: 0, sp: 10 },
        { level: 'M1', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 340% Physical Damage and causing incendiary marks to explode in sequence, dealing 170% Physical Damage', spInit: 0, sp: 9 },
        { level: 'M2', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 360% Physical Damage and causing incendiary marks to explode in sequence, dealing 180% Physical Damage', spInit: 0, sp: 8 },
        { level: 'M3', desc: 'Fires scorching bullets that leave incendiary marks at fixed distances as they travel. The bullets explode upon reaching maximum attack range, dealing 400% Physical Damage and causing incendiary marks to explode in sequence, dealing 200% Physical Damage', spInit: 0, sp: 7 },
      ],
    },
    {
      name: '"Reponite"', icon: '/operators/fiammetta/skill-3.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Continuously barrages a fixed area in front of this unit at max Range, expanding explosion area and increasing ATK to 125%. Enemies closer to the impact site in a smaller area will instead take 220% ATK as damage.\nUnlimited duration, can manually deactivate skill', spInit: 0, sp: 15, rank: 'M3',
      levels: [
        { level: '1', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 105%. Enemies closer to the impact site in a smaller area will instead take 150% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 25, dur: '∞' },
        { level: '2', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 105%. Enemies closer to the impact site in a smaller area will instead take 155% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 24, dur: '∞' },
        { level: '3', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 105%. Enemies closer to the impact site in a smaller area will instead take 160% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 23, dur: '∞' },
        { level: '4', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 110%. Enemies closer to the impact site in a smaller area will instead take 170% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 22, dur: '∞' },
        { level: '5', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 110%. Enemies closer to the impact site in a smaller area will instead take 175% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 21, dur: '∞' },
        { level: '6', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 110%. Enemies closer to the impact site in a smaller area will instead take 180% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 20, dur: '∞' },
        { level: '7', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 115%. Enemies closer to the impact site in a smaller area will instead take 185% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 19, dur: '∞' },
        { level: 'M1', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 115%. Enemies closer to the impact site in a smaller area will instead take 190% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 18, dur: '∞' },
        { level: 'M2', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 115%. Enemies closer to the impact site in a smaller area will instead take 200% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 17, dur: '∞' },
        { level: 'M3', desc: `Continuously barrages a fixed area in front of this unit at max range, expanding explosion area and increasing ATK to 125%. Enemies closer to the impact site in a smaller area will instead take 220% ATK as damage.
Unlimited duration, can manually deactivate skill`, spInit: 0, sp: 15, dur: '∞' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Fiammetta's Badge", desc: 'Appointed as Sniper Operator to exercise Artilleryman responsibilities' },
    artx: { code: 'ART-X', name: 'A Long Journey', stages: [
      { stage: 1, atk: '+60', def: '+17', effect: 'New trait: Increases ATK to 110% when attacking blocked enemies' },
      { stage: 2, atk: '+75', def: '+26', effect: "Sufferer of Tribulations improved: Continually loses HP over time (HP cannot drop below 30% as a result of this effect); When HP is above 50%, this unit gains Vigor, increasing ATK by 28%; this effect is doubled above 80% HP" },
      { stage: 3, atk: '+85', def: '+32', effect: "Sufferer of Tribulations improved: Continually loses HP over time (HP cannot drop below 50% as a result of this effect); When HP is above 50%, this unit gains Vigor, increasing ATK by 30%; this effect is doubled above 80% HP" },
    ]},
    arty: { code: 'ART-Y', name: '"Out-Law" Special Ammunition Surplus', stages: [
      { stage: 1, atk: '+48', def: '+26', effect: 'New trait: Attacks ignore 100 DEF' },
      { stage: 2, atk: '+60', def: '+36', effect: 'Herald of Revelations improved: While this unit has no skill active, ASPD +27; While this unit\'s skill is active, ASPD +5' },
      { stage: 3, atk: '+70', def: '+43', effect: 'Herald of Revelations improved: While this unit has no skill active, ASPD +30; While this unit\'s skill is active, ASPD +10' },
    ]},
  },
  story: `Fiammetta is a Lateran special agent serving the Notarial Hall and Mostima's supervisor after the latter became a fallen Sankta. Though not directly involved, she possesses detailed knowledge of the Kazdel tragedy caused by her leader's betrayal, which injured Exusiai's sister Lemuen and contributed to Mostima's downfall.\n\nDespite appearing relaxed, Fiammetta carries the burden of absurd codenames as part of her duties. She wields a destructive firearm obtained from Patrizion, an Apostolic Knight who raised her. She approaches her responsibilities with professional dedication while maintaining concern for her companions.`,
  profile: `Fiammetta is a senior special correspondent of the Lateran Notarial Hall. At her request, her job title will be withheld here. She currently provides Rhodes Island with relevant services while receiving provisions from Rhodes Island in accordance with our cooperation agreement with the Lateran Church.\nApocalypse Punisher? And this is gonna get updated every month, too? If I'm supposed to add this stuff to the terminal archives, you might as well kill me now.\n– HR Operator`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Fiammetta shows no signs of Originium Infection.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Fiammetta frequently ventures into dangerous environments with her coworker, camping in ruins or the barrenlands. Thankfully, she is in excellent physical condition. Perhaps she could take some time off for a holiday to improve her mental health, too.`,
    },
    {
      title: 'Archive File 1',
      content: `As everyone knows, Operator Fiammetta can often be found working with Mostima. She claims to be Mostima's overseer and that she is in charge of making sure Mostima does not leak any critical confidential information about Laterano as she liaises with the outside world. However, we have observed that not all Apostolic Nuncios working outside Laterano have such an "overseer" assigned to them. There is reason to believe that Fiammetta and Mostima's team-up is an exception rather than the norm, and there is no doubt that this has to do with Mostima's status as an fallen angel.\nThat said, Mostima alone is in charge of all the formal diplomatic responsibilities assigned to her as a Nuncio. As the "overseer", Fiammetta never participates in the negotiations or discussions, instead standing by outside the venue. It seems her only diplomatic role is to demonstrate through her identity that the Sankta with horns can be trusted. Their relationship may be more complicated and ambiguous than the "superior and subordinate" and "overseer and executor" they appear on the surface. In her Operator tests, Fiammetta demonstrated impressive combat abilities and mobility. Considering Mostima's extraordinary destructive power, we cannot help but wonder what sort of diplomatic missions require the participation of members such as these.\nWhen questioned further by HR about her responsibilities at the Notarial Hall, Fiammetta refused to answer on the grounds of papal confidentiality.`,
    },
    {
      title: 'Archive File 2',
      content: `Workshop Use Logs:\nA couple days ago, Fiammetta brought a Sankta firearm here and asked us to help repair it. It's not one of her two weapons registered as standard equipment, but her knowledge in firearms was really beyond my expectations. Personally, I'm not very fond of guns, but Fiammetta understood its structure, principles, and how to wield it like the back of her hand. Where'd a Liberi learn all that? With how knowledgeable she was, I wouldn't have been surprised if she'd picked it up and shot down three practice target drones right then and there. Of course, it's also nothing more than knowledge. It's obvious that she can't actually use a Sankta firearm in battle. As to where the gun came from, Fiammetta said it was entrusted to her by someone. She also said something pretty ominous about how this is a kind of "price" that he would have to trade his life for. I didn't want to dig too deep into that. Everyone's got their obsessions.\nWhat's really messed up, though, is that I know this gun. Back when I studied in Laterano all those years ago, I read about it in a book. This is a heritage gun. Or at the least, a very fine replica of one. I can't say for sure. It's been maintained very well. There's a high chance that the internal parts have been replaced before, but it likely isn't used very often.\nThe gun's original owner was very famous. If this is this real deal, it was once held by the saints themselves. The saint that wielded it was known for his generosity and piety. It was supposed to be sealed away under the Lateran Basilica after he passed away, but its whereabouts have been unknown ever since for whatever reasons. Until today, that is. Assuming it's real, I can't fathom how its owner found this old boy, or how Fiammetta got her hands on it, but I feel compelled to at least leave this on record.\nI just hope this isn't some kind of stolen artifact, since it definitely belongs in a museum.`,
    },
    {
      title: 'Archive File 3',
      content: `"Old friend, we agree with your opinion. Now that it has come to this, there is indeed very little chance of salvaging the situation. My intention was to simply give her an opportunity to hone her Arts and to get some achievements under her belt. That way, she would at least have some sway in the future and our two braindead colleagues would shut up. None of us could have predicted that incident, or her choices afterwards, but I still think you're a little too worried nonetheless. This isn't necessarily a bad thing. We were never going to be able to keep an eye on her forever.\nI still support Lemuen's proposal of dispatching her to the pharmaceutical company. She's proven over the last several years that she can take care of most things herself. The best way to assuage your worries would be to give her greater support and a reliable guardian angel. Don't forget. She overcame her racial handicap and became a carabinier candidate solely because she's one of our finest students. We should trust in her, and I hope you can reconsider and retract your opinion.\nYou should rejoice. We would've let her parents down if she'd grown up the way Laterano had intended. We must repay that favor, of course, but not this way. Give her time. She will surprise us both. We're old, and she's still young.\nAlso, you should pick her next codename. Something badass. Show Lemuen who's boss when it comes to picking names."\nThis letter, written on a particularly dignified-looking sheet of paper, was found in the large stack of Lateran Church–Rhodes Island paperwork. It was unsigned.`,
    },
    {
      title: 'Archive File 4',
      content: `From Fiammetta's infrequent mentions of the fallen angel incident and the clues we obtained via other channels, we have managed to piece together a decent picture of what happened during that operation.\nThe elite squad she belonged to was sent to carry out a cleanup mission, aiming to deal with the Sarkaz bandits that had been repeatedly ambushing Sankta caravans. Consisting of four of Laterano's elites, this tactical squad should've easily completed its objective. They followed the trail left behind by the bandits and tracked them down to the remnants of a building. The bandits were clearly using the ruins as a bunker, or perhaps some kind of defensive structure. Yet the team was unable to find any sign of the enemy there. The place was much more eerie than they expected. There were a large number of corpses present, at various stages of decay. The bodies were all in front of a sealed door, as though they came seeking something, only to never find the answer they sought. The deceased were of different races, ages, and even eras, but they all had one thing in common. In Fiammetta's words, "They were all frozen in their own moment in time."\nThere isn't a reliable report as to what happened afterwards. Fiammetta herself claims to have left the scene because of a fake transmission–later found to be a trap set by the bandits–and therefore wasn't present at the crucial moment when events unfolded. What we do know is that squad member Lemuen was bedridden in the hospital until recently, while Mostima became a fallen angel and left Laterano, followed by Fiammetta herself. Relevant intelligence suggests that the squad was led by a Sankta named Andoain at the time, but no information on such a person is contained in any official Lateran documents.\n[Classified Log]\nThere is a rumor that once circulated among the gossip peddlers of Kazdel: somewhere in the barrenlands, there is someone who has exceptional insight into the past and future. His forbidden power and knowledge can guide you beyond the door of the truth, so long as you can pay the price.\nAfter a certain point, this rumor abruptly stopped being spread. Evidence suggests that its source was very likely a certain Sarkaz gang that was suddenly annihilated.`,
    },
    {
      title: 'Promotion Record',
      content: `Fiammetta seems to be weirdly hostile towards certain kinds of movies, especially the high budget, totally rotten flicks made in Wrankwood. The selling point of these movies are the pretentious titles, the excessive explosions, and "Under 17 requires accompanying parent or adult guardian." At a classic movie night held by Nian, Lava, and Robin, Fiammetta–who was just passing by–had some really strong criticisms and unkind words for these movies. Still, it was pretty obvious from the conversation that she had a deep understanding of the genre and had seen an impressive number of films. Her disdainful insight into these trashy films is on another level. She could be complaining about how this kind of cultural filth is having an immeasurable negative influence on people's taste one minute, then reciting classic movie lines the next. She's even got a pretty amazing repertoire of villain quotes.\nThat said, she ultimately refused Lava's invitation to become the movie lover group's special commentator.\nIt doesn't matter whether she admits it or not, she knows her stuff.\n–Lava`,
    },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/artilleryman-branch.png', factionIcon: '/icons/factions/laterano.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/fiammetta/base.png', chibiSrc: '/operators/fiammetta/chibi.webm', chibiMoveSrc: '/operators/fiammetta/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: -0.1, offsetYPercent: -0.1 }, chibiDetailFraming: { scale: 0.99, offsetXPercent: -0.1, offsetYPercent: -0.1 }, illustrator: '幻象黑兔' },
    { id: 'e2', label: 'Elite 2', src: '/operators/fiammetta/e2.png', chibiSrc: '/operators/fiammetta/chibi.webm', chibiMoveSrc: '/operators/fiammetta/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: -0.1, offsetYPercent: -0.1 }, chibiDetailFraming: { scale: 0.99, offsetXPercent: -0.1, offsetYPercent: -0.1 }, illustrator: '幻象黑兔' },
    { id: 'skin1', label: 'Divine Oath', src: '/operators/fiammetta/skin1.png', chibiSrc: '/operators/fiammetta/chibi-skin1.webm', chibiMoveSrc: '/operators/fiammetta/chibi-move-skin1.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0.1, offsetYPercent: 0.3 }, chibiDetailFraming: { scale: 0.988, offsetXPercent: 0.1, offsetYPercent: 0.3 }, illustrator: '三目YYB' },
    { id: 'skin2', label: 'Judgment Day', src: '/operators/fiammetta/skin2.png', chibiSrc: '/operators/fiammetta/chibi-skin2.webm', chibiMoveSrc: '/operators/fiammetta/chibi-move-skin2.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0.6 }, chibiDetailFraming: { scale: 0.966, offsetXPercent: 0, offsetYPercent: 0.6 }, illustrator: '嘎嘎人' },
  ],
  portrait: '/operators/fiammetta/portrait.png',
  portraitFocus: { y: 7.8, x: 50.5, zoom: 355 },
}

export default fiammetta
