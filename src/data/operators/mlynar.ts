import type { Operator } from '../../types'
import mlynarVoice from '../voices/mlynar'

const mlynar: Operator = {
  name: 'Młynar', fileNo: 'KZ08', class: 'Guard', branch: 'Liberator', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Kazimierz', position: 'Melee', race: 'Kuranta', gender: 'Male', birthplace: 'Kazimierz',
  birthday: 'December 3rd', height: '191 cm', combatExp: '17 years', infectionStatus: 'Non-infected', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Rikiya Koyama', CN: 'Wang Yuhang', EN: 'Anthony Howell', KR: 'Choi Hyun-soo' },
  voice: mlynarVoice,
  trait: 'Normally does not attack and has 0 Block; When skill is inactive, ATK gradually increases up to +200% over 40 seconds. ATK is reset when the skill ends',
  tags: ['DPS', 'Nuker'],
  stats: { hp: 4266, atk: 385, def: 502, res: 15, block: 3, cost: 12, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [
      [0,1],
      [2,1],
      [0,1],
    ],
    e1: [
      [0,1],
      [2,1],
      [0,1],
    ],
    e2: [
      [0,1],
      [2,1],
      [0,1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Outstanding', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Wanderer', desc: 'ATK increased to 110% when attacking. If there are 3 or more enemies nearby, ATK increased to 115%, and take 15% less damage', elite: 'E2' },
    { name: 'Unmoved', desc: 'More likely to be attacked while deployed. When any Kazimierz Operator is attacked, reflect 15% of Młynar\'s ATK as True Damage', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Unvoiced Anger', icon: '/operators/mlynar/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Attacks deal 200% ATK as Physical damage, DEF +60%', spInit: 15, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Attacks deal 130% ATK as Physical damage, DEF +20%', spInit: 10, sp: 40, dur: '20s' },
        { level: '2', desc: 'Attacks deal 135% ATK as Physical damage, DEF +20%', spInit: 10, sp: 40, dur: '20s' },
        { level: '3', desc: 'Attacks deal 140% ATK as Physical damage, DEF +20%', spInit: 10, sp: 40, dur: '20s' },
        { level: '4', desc: 'Attacks deal 145% ATK as Physical damage, DEF +30%', spInit: 15, sp: 35, dur: '25s' },
        { level: '5', desc: 'Attacks deal 150% ATK as Physical damage, DEF +30%', spInit: 15, sp: 35, dur: '25s' },
        { level: '6', desc: 'Attacks deal 160% ATK as Physical damage, DEF +30%', spInit: 15, sp: 35, dur: '25s' },
        { level: '7', desc: 'Attacks deal 170% ATK as Physical damage, DEF +40%', spInit: 15, sp: 30, dur: '30s' },
        { level: 'M1', desc: 'Attacks deal 180% ATK as Physical damage, DEF +45%', spInit: 15, sp: 30, dur: '30s' },
        { level: 'M2', desc: 'Attacks deal 190% ATK as Physical damage, DEF +50%', spInit: 15, sp: 30, dur: '30s' },
        { level: 'M3', desc: 'Attacks deal 200% ATK as Physical damage, DEF +60%', spInit: 15, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Unresolved Sorrow', icon: '/operators/mlynar/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Attack interval increases, attack range increased, attacks deal 190% ATK as Physical damage twice. If an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. Can be manually deactivated', spInit: 10, sp: 25, dur: '20s', rank: 'M3',
      note: 'Attack interval increased by 0.3s. Trait lock does not trigger on hostile device kills.',
      levels: [
        { level: '1', desc: `Attack interval increased, attack range increased, attacks deal 100% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 40, dur: '20s' },
        { level: '2', desc: `Attack interval increased, attack range increased, attacks deal 110% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 40, dur: '20s' },
        { level: '3', desc: `Attack interval increased, attack range increased, attacks deal 120% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 40, dur: '20s' },
        { level: '4', desc: `Attack interval increased, attack range increased, attacks deal 130% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 35, dur: '20s' },
        { level: '5', desc: `Attack interval increased, attack range increased, attacks deal 140% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 35, dur: '20s' },
        { level: '6', desc: `Attack interval increased, attack range increased, attacks deal 150% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 35, dur: '20s' },
        { level: '7', desc: `Attack interval increased, attack range increased, attacks deal 160% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 30, dur: '20s' },
        { level: 'M1', desc: `Attack interval increased, attack range increased, attacks deal 170% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 30, dur: '20s' },
        { level: 'M2', desc: `Attack interval increased, attack range increased, attacks deal 180% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 30, dur: '20s' },
        { level: 'M3', desc: `Attack interval increased, attack range increased, attacks deal 190% ATK twice.\nIf an enemy has been defeated while skill is active, Trait effect is not reset when skill expires. This can be manually deactivated. (Skill can be halted at any time while active)`, spInit: 10, sp: 25, dur: '20s' },
      ],
    },
    {
      name: 'Unbrilliant Glory', icon: '/operators/mlynar/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Attack range increased, Trait effect increases by 2x (Trait multiplier -10% per enemy defeated), attacks hit 5 targets for 180% ATK as Physical damage. When enemy in range attacked by Kazimierz Operator, deal extra 12% of Młynar\'s ATK as True damage', spInit: 20, sp: 42, dur: '28s', rank: 'M3',
      note: 'Can target aerial enemies. True damage dealt before attack damage, considered dealt by Młynar.',
      levels: [
        { level: '1', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 110% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 8% of Młynar ATK as True damage.', spInit: 10, sp: 55, dur: '25s' },
        { level: '2', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 115% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 8% of Młynar ATK as True damage.', spInit: 10, sp: 55, dur: '25s' },
        { level: '3', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 120% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 8% of Młynar ATK as True damage.', spInit: 10, sp: 55, dur: '25s' },
        { level: '4', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 125% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 10% of Młynar ATK as True damage.', spInit: 15, sp: 50, dur: '26s' },
        { level: '5', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 130% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 10% of Młynar ATK as True damage.', spInit: 15, sp: 50, dur: '26s' },
        { level: '6', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 140% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 10% of Młynar ATK as True damage.', spInit: 15, sp: 50, dur: '26s' },
        { level: '7', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 150% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 11% of Młynar ATK as True damage.', spInit: 20, sp: 45, dur: '26s' },
        { level: 'M1', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 160% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 11% of Młynar ATK as True damage.', spInit: 20, sp: 45, dur: '27s' },
        { level: 'M2', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 170% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 11% of Młynar ATK as True damage.', spInit: 20, sp: 45, dur: '27s' },
        { level: 'M3', desc: 'Attack range increased, Trait effect increased by 2x (trait multiplier -10% for each enemy defeated), attacks hit 5 targets for 180% ATK as Physical damage. When any enemy within range is attacked by a Kazimierz Operator, deal an extra 12% of Młynar ATK as True damage.', spInit: 20, sp: 42, dur: '28s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Młynar's Badge", desc: 'Appointed as Guard Operator to exercise Liberator responsibilities' },
    libx: { code: 'LIB-X', name: '"Man in Scabbard"', stages: [
      { stage: 1, hp: '+225', atk: '+18', aspd: '+5', effect: 'New trait: Directly gains +100% charge after deployment' },
      { stage: 2, hp: '+270', atk: '+27', aspd: '+6', effect: 'Wanderer improved: ATK increased to 115% when attacking. If 3+ enemies nearby, ATK increased to 120%, and take 20% less damage' },
      { stage: 3, hp: '+360', atk: '+35', aspd: '+7', effect: 'Wanderer improved: ATK increased to 120% when attacking. If 3+ enemies nearby, ATK increased to 125%, and take 25% less damage' },
    ]},
  },
  story: `[An old letter]\n\nI don't care, Father. Must knights prove themselves through victory? The men in the arenas never seem more brilliant simply because they manage to maul more of their opponents.\n\nKnights should stand with those in distress, those with nothing but the clothes on their backs. This alone I will always believe in. When you stand with the weak, failure is hardly unheard of. Rather than relishing in victory, I would rather believe that the spirit of the knighthood also encompasses the endurance of failure.\n\nIt's just as our family motto goes, "Fear neither hardship nor darkness."\n\n...\n\nPerhaps Młynar was merely thinking in silence, or perhaps he mumbled these words to himself.\n\nThanks to the excellent soundproof car windows manufactured by Mieszko, no one heard a word he spoke in that underground garage. He silently returns the sword into its scabbard, and takes out a stack of newspapers that had previously acted as a seat cushion. He reads them without thinking, with no concern for their date, or where he had previously started or stopped reading. He fills himself with their words, like inflating a balloon man.`,
  profile: `Młynar Nearl, the former head of the Nearl household and the uncle of Operators Nearl and Blemishine, has yet to receive a knight title of any kind.\nRoughly two months after the Kazimierz Major came to a close, he accepted Rhodes Island's invitation and is now assisting us with our affairs in Kazimierz.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Młynar shows no signs of Originium infection.\n\n[Blood Originium-Crystal Density] 0.14u/L\nAt one point, Operator Młynar spent an extended period of time in the wilderness. As such, his numbers are slightly higher than average for an office worker in the Grand Knight Territory.\n\nAlthough it is unlikely that he needs a reminder, the Medical Department has nonetheless provided him with recommendations on wilderness protection, per protocol.`,
    },
    {
      title: 'Archive File 1',
      content: `We rarely get the opportunity to see Operator Młynar aboard the landship, but if you are lucky enough to run into him and he happens to have some free time, he might just give you a few words of advice at the training grounds.\n\nMłynar may not have formally been a campaign knight, but his combat techniques clearly take after the traditional style employed by Kazimierz's knights. It can be inferred that the Nearl family's traditional training practices were sufficient to develop his mastery over the weapons commonly used by knights. As a young man, Młynar frequently followed his father, Kirill Nearl, and his team of campaign knights as an apprentice, giving him the opportunity to accumulate combat experience under the wings of a great many outstanding knights.\n\nHowever, whenever he puts down his training knight shield and picks up his sword, it becomes immediately clear to everyone nearby that the sword is his weapon. In most historied knight families, when a young man comes of age, he often chooses to once again leave home to improve his techniques and disposition, before joining a knight order to serve Kazimierz. However, having already mastered the sword during his time as a wanderer, Młynar set himself on a different path.\n\n...As for his Originium Arts, from what I've heard, knights never use Arts during a duel unless their beliefs are on the line. That said, during his test, he did show us his Arts just once.\n\nWe've seen Nearl and Blemishine's Arts. They are always as radiant as can be, possibly scorching, unadulterated. To our surprise, though, Operator Młynar's Arts initially felt gentle, even loving. However, upon realizing the anger the flow of his golden light embodied, we had to immediately stop him from drawing his sword, so as to minimize the repair work needed after his test.`,
    },
    {
      title: 'Archive File 2',
      content: `Unlike the Radiant Knight, Młynar primarily operates outside the Grand Knight Territory. Not long after he came aboard Rhodes Island and signed his agreement, he made his way back to Kazimierz. However, he did not immediately report to Rhodes Island's Kawalerielki office. In addition, he tendered his letter of resignation to his former employer in the Grand Knight Territory by mail.\n\nClearly, there are many in the city who view Młynar as a threat, and we can also surmise from his own account that a number of recent incidents he was involved in have affected the interests of certain individuals. Still, the retrial of a misjudged case, or the downfall of a few companies and nobles, are hardly significant in this city. At this point, rather than being concerned by all the attacks, open or covert, against his family, perhaps it's more fitting to say that having stayed in this city for ten years, he no longer feels that fighting these forces will accomplish anything.\n\n"We were honored to have his help during an operation. He wasn't as difficult to work with as I expected. By which I mean I thought he'd be a bossy, arrogant noble, or maybe someone who strictly followed the traditional rules of chivalry... but he simply listened and promised to give you a hand before you screwed up too badly. The only thing we had to get used to is that he never calls anyone by their codename. I mean, we do have a good number of Kazimierzian operators who use their titles from the Major as their codenames, so maybe he's got a grudge against that, but it's not that weird if you ask me."\n"...That said, it's hard not to feel bad if you make a mistake while working with him. That time, I almost screwed up the entire mission, and after that we let him make all the decisions."\n"He gives smooth, efficient plans. It doesn't seem like he cares whether you can actually follow them or not, though. I remember him asking us to split up to stop a couple commercial knights from tailing us. How were we supposed to find them? How would we stop them? Can we knock them out? Is it okay if we blow the roads up? He didn't discuss any of that with us."\n"I guess he's probably more used to working alone? I mean, all of us did our own thing and finished our own objectives with no communication whatsoever, and somehow it all just worked out... I'm really curious. What kind of man does it take to get used to doing things the way he does? And what got him doing things like that in the first place?"`,
    },
    {
      title: 'Archive File 3',
      content: `[Classified Log]\nBased on available data, the Nearl couple was active on the battlefield for an exceedingly short period of time. The two of them rose to prominence twenty-five years ago when they fought under the same knight order's banner during the campaign knights' invasion of Ursus, with Schnitz taking over command during a crucial battle when the knight captain was gravely injured, and leaving a deep impression on the soldiers from both sides. However, that was their last notable accomplishment. Their disappearance without a trace over a decade ago seems to have marked a turning point in the fate of this generation of the Nearl family. As Rhodes Island has expressed our willingness to help locate them, Młynar agreed to have a conversation with us on the matter.\n\nDuring our conversation, we learned that Yolanta Nearl was also born into an established knight family and had been on good terms with the Nearls since she was young. She had originally intended to join the Silverlance Pegasus when she became a campaign knight, but Schnitz insisted that she would be more effective on the battlefield with a bow than a silverlance.\n\n"He arrived at that conclusion the moment she released her bowstring for the first time," said Młynar, without elaborating further. Yolanta quickly proved Schnitz correct with her performance during the campaign, and her extraordinary talent in and understanding of Originium Arts made her particularly effective when deployed in positions overlooking the entire battlefield.\n\nAs for his brother Schnitz, Młynar had only this to say: "He is my brother."\n\nPerhaps it is because of how well he knew them, but despite the passage of time and the fact that everyone, including their daughters Margaret and Maria, has already accepted that they might be dead, Młynar continues to search for his brother and sister-in-law. When asked if he had any new leads, he shook his head, though it seemed his doubts on the matter were stronger than ever.`,
    },
    {
      title: 'Archive File 4',
      content: `Before joining Rhodes Island, Młynar worked at a medium-sized corporation that primarily sold construction materials. Mieszko Industries is its biggest shareholder, and the company has had a stable fiscal performance. It has not faced any significant charges and has no obvious connections to the nobility. It's merely one of Kazimierz's countless unremarkable companies. While prevailing rumors at the time suggested that the Nearls' younger son would join either the Adeptus Sprawiedliwi or the Knights Association and eventually take over the family's Knight Primus title from the ailing Kirill, the decision that Młynar ultimately made was perhaps influenced by some external factor, or his disappointment with Kazimierz.\n\nBut we've met many disappointed men. The real question is what made him decide to do something now, and how much of his strength he's willing to lend to Rhodes Island.\n\nMłynar joined Rhodes Island after the Infected disturbances across the Dzwonek region. The Adeptus Sprawiedliwi successfully kept the word of the incident from spreading, thus ensuring no other forces could take advantage of this information. Młynar himself did not provide much in the way of his personal perspective on the matter. However, when HR brought this up again while organizing files, he gave an unexpected response: "I've just always thought I needed to prove Kazimierz still has a way out."\n\nMłynar has also never brought up anything to do with Operators Blemishine, Whislash, or Platinum since signing his cooperation agreement with us. Nor does he interact with Flametail and the others while in Kazimierz. There has been only one instance of Młynar, Whislash, and Blemishine having a conversation, after Whislash requested a meeting, and it lasted less than ten minutes. Although the details of that conversation are unknown, our Engineering operators told us that Blemishine suddenly seemed much more energetic, as if a weight had been lifted from her heart. Even then, Młynar didn't appear to pay much more attention to the other Kazimierzian operators than before, even though many of us are just as curious about him as we are about the Radiant Knight herself.\n\nIt is clear that Młynar is not looking for an answer from Rhodes Island, and perhaps he does not even believe that there is an answer out there. But when he assisted us with a string of Infected problems, he displayed a sense of responsibility that definitely did not seem to come from respect towards his work. Some may believe the Land of Knights has no more room for knightly fantasies, and that the endless waves will eventually consume its cities, but how can anyone know how the next story will be written, and where the next city will be built, until they are completed?`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/liberator-branch.png', factionIcon: '/icons/factions/kazimierz.png',

  skins: [
    { id: 'base', label: 'Base', src: '/operators/mlynar/base.png', chibiSrc: '/operators/mlynar/chibi.webm', chibiMoveSrc: '/operators/mlynar/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 5}, chibiDetailFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: -0.3 }, illustrator: '竜崎いち' },
    { id: 'e2', label: 'Elite 2', src: '/operators/mlynar/e2.png', chibiSrc: '/operators/mlynar/chibi.webm', chibiMoveSrc: '/operators/mlynar/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 5}, chibiDetailFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: -0.3 }, illustrator: '竜崎いち' },
    { id: 'skin1', label: 'W Dali', src: '/operators/mlynar/skin1.png', chibiSrc: '/operators/mlynar/chibi-skin1.webm', chibiMoveSrc: '/operators/mlynar/chibi-move-skin1.webm', chibiFraming: { scale: 1.27, offsetXPercent: 0, offsetYPercent: 5}, chibiDetailFraming: { scale: 1.02, offsetXPercent: 0, offsetYPercent: -0.3 }, illustrator: '竜崎いち' },
    { id: 'skin2', label: 'Roar Against The Wilds', src: '/operators/mlynar/skin2.png', chibiSrc: '/operators/mlynar/chibi-skin2.webm', chibiMoveSrc: '/operators/mlynar/chibi-move-skin2.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 5 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: -5, offsetYPercent: -0.3 }, illustrator: '竜崎いち' },
  ],
  portrait: '/operators/mlynar/portrait.png',
  portraitFocus: { y: -0.6, x: 50.3, zoom: 455 },
}

export default mlynar
