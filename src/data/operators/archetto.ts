import type { Operator } from '../../types'
import archettoVoice from '../voices/archetto'

const archetto: Operator = {
  name: 'Archetto', fileNo: 'LT08', class: 'Sniper', branch: 'Marksman', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Laterano', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Laterano',
  birthday: 'November 16th', height: '152 cm', combatExp: '2 years', infectionStatus: 'Non-infected', illustrator: 'alchemaniac',
  cv: { JP: 'Inori Minase', CN: 'Muyaruilin', EN: 'Rita Angel Taylor', KR: 'Kwon Da-ye' },
  voice: archettoVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1705, atk: 528, def: 172, res: 0, block: 1, cost: 14, aspd: '1s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
    e2: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Landen Tactics', desc: 'Every 2.5 seconds when deployed, restores 1 Skill Point to all deployed Sniper allies that have an Offensive Recovery skill.', elite: 'E2' },
    { name: 'Iron Bowstring', desc: 'When deployed, this unit gains 1 Shield. Restores 7 Skill Points after the Shield breaks', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Dispersing Arrows', icon: '/operators/archetto/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'The next attack deals 230% ATK as Physical damage to the target and 180% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 3, rank: 'M3',
      note: 'Dispersing Arrows has a ricochet range of 1.5 tiles and prioritizes the closest enemies to the target.',
      levels: [
        { level: '1', desc: 'The next attack deals 170% ATK as Physical damage to the target and 120% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 5 },
        { level: '2', desc: 'The next attack deals 175% ATK as Physical damage to the target and 125% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 5 },
        { level: '3', desc: 'The next attack deals 180% ATK as Physical damage to the target and 130% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 5 },
        { level: '4', desc: 'The next attack deals 185% ATK as Physical damage to the target and 135% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 4 },
        { level: '5', desc: 'The next attack deals 190% ATK as Physical damage to the target and 140% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 4 },
        { level: '6', desc: 'The next attack deals 195% ATK as Physical damage to the target and 145% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 4 },
        { level: '7', desc: 'The next attack deals 200% ATK as Physical damage to the target and 150% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'The next attack deals 210% ATK as Physical damage to the target and 160% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 4 },
        { level: 'M2', desc: 'The next attack deals 220% ATK as Physical damage to the target and 170% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 4 },
        { level: 'M3', desc: 'The next attack deals 230% ATK as Physical damage to the target and 180% ATK as Physical damage to up to 3 other nearby enemies', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Pursuing Arrows', icon: '/operators/archetto/skill-2.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'Immediately fire an arrow that deals 140% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 3 charges', spInit: 0, sp: 9, rank: 'M3',
      note: 'Ricochet range of 1.5 tiles, prioritizing the closest enemies, with a delay of 0.15 seconds between each ricochet. Can ricochet up to 4 enemies other than the primary target, with each (including the primary target) taking hits equal to the number of remaining ricochets + 1.',
      levels: [
        { level: '1', desc: 'Immediately fire an arrow that deals 108% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 1 charges', spInit: 0, sp: 14 },
        { level: '2', desc: 'Immediately fire an arrow that deals 110% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 1 charges', spInit: 0, sp: 14 },
        { level: '3', desc: 'Immediately fire an arrow that deals 112% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 1 charges', spInit: 0, sp: 14 },
        { level: '4', desc: 'Immediately fire an arrow that deals 114% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 1 charges', spInit: 0, sp: 13 },
        { level: '5', desc: 'Immediately fire an arrow that deals 116% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 1 charges', spInit: 0, sp: 13 },
        { level: '6', desc: 'Immediately fire an arrow that deals 118% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 1 charges', spInit: 0, sp: 13 },
        { level: '7', desc: 'Immediately fire an arrow that deals 120% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 2 charges', spInit: 0, sp: 12 },
        { level: 'M1', desc: 'Immediately fire an arrow that deals 125% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 2 charges', spInit: 0, sp: 11 },
        { level: 'M2', desc: 'Immediately fire an arrow that deals 130% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 3 charges', spInit: 0, sp: 10 },
        { level: 'M3', desc: 'Immediately fire an arrow that deals 140% ATK damage 5 times in a row. The arrow can repeatedly ricochet to nearby enemies that have not been targeted yet (each ricochet reduces available ricochets by 1); Can store 3 charges', spInit: 0, sp: 9 },
      ],
    },
    {
      name: 'Thundering Arrows', icon: '/operators/archetto/skill-3.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'ATK +30%, attack range +1 tile, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 30, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +5%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 40, dur: '20s' },
        { level: '2', desc: 'ATK +5%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 39, dur: '20s' },
        { level: '3', desc: 'ATK +5%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 38, dur: '20s' },
        { level: '4', desc: 'ATK +10%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 37, dur: '20s' },
        { level: '5', desc: 'ATK +10%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 36, dur: '20s' },
        { level: '6', desc: 'ATK +10%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 35, dur: '20s' },
        { level: '7', desc: 'ATK +15%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 34, dur: '20s' },
        { level: 'M1', desc: 'ATK +20%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 33, dur: '20s' },
        { level: 'M2', desc: 'ATK +25%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 32, dur: '20s' },
        { level: 'M3', desc: 'ATK +30%, attack range +1, attacks hit 3 times in a row and target 2 enemies simultaneously', spInit: 15, sp: 30, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Archetto's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    marx: { code: 'MAR-X', name: 'Yesterday Once More', stages: [
      { stage: 1, hp: '+90', atk: '+32', effect: 'New trait: Increases ATK to 110% when attacking aerial targets' },
      { stage: 2, hp: '+130', atk: '+40', effect: 'Landen Tactics improved: Every 2.3 seconds when deployed, restores 1 Skill Point to all deployed Sniper allies that have an Offensive Recovery skill; this unit restores 1 SP every 2s when there is another Sniper Operator deployed' },
      { stage: 3, hp: '+160', atk: '+48', effect: 'Landen Tactics improved: Every 2.2 seconds when deployed, restores 1 Skill Point to all deployed Sniper allies that have an Offensive Recovery skill; this unit restores 1 SP every 1.8s when there is another Sniper Operator deployed' },
    ]},
    mary: { code: 'MAR-Y', name: '"Seeds of Tomorrow"', stages: [
      { stage: 1, atk: '+17', def: '+17', aspd: '+2', effect: 'New trait: When there are ground enemies within range, ASPD +8' },
      { stage: 2, atk: '+22', def: '+22', aspd: '+3', effect: 'Iron Bowstring improved: When deployed, this unit gains 1 Shield and 5 Skill Points. Restores 7 Skill Points when the Shield breaks' },
      { stage: 3, atk: '+24', def: '+24', aspd: '+4', effect: 'Iron Bowstring improved: When deployed, this unit gains 1 Shield and 9 Skill Points. Restores 7 Skill Points when the Shield breaks' },
    ]},
    iswa: { code: 'ISW-α', name: "Archetto's Specialized Badge", stages: [
      { stage: 1, atk: '+32', aspd: '+6', effect: "Trait improved: In Integrated Strategies, for every deployed Operator with an Offensive Recovery skill, Archetto's Attack Range +1 (Max +3)" },
      { stage: 2, atk: '+45', aspd: '+7', effect: "Landen Tactics improved: Every 2.5 seconds when deployed, restores 1 Skill Point to all deployed Sniper allies that have an Offensive Recovery skill; in Integrated Strategies, all Operators with Offensive Recovery skills will benefit from this effect and will gain SP from Archetto's attacks" },
      { stage: 3, atk: '+55', aspd: '+8', effect: "Landen Tactics improved: Every 2.5 seconds when deployed, restores 1 Skill Point to all deployed Sniper allies that have an Offensive Recovery skill; in Integrated Strategies, all Operators with Offensive Recovery skills will benefit from this effect and will gain SP from Archetto's attacks, and all Operators with Offensive Recovery skills have ATK +50% while their skill is active" },
    ]},
  },
  story: `Hildegard, a Liberi of partial Victorian descent, is a nun from the Landen Monastery in Laterano and a member of the Landen Guards. She has traveled across Terra to sell the Monastery's dairy and wine products to prevent its imminent closure due to monetary concerns. Because of this, she often gets mistaken for a traveling businesswoman rather than a devoted nun.\n\nEventually, Hildegard was brought into the service of Rhodes Island under the recommendation of Emperor and Eurill Pides. There, she operates under the codename "Archetto," making good use of her archery skills courtesy of her mandatory training and experience as the Guard to provide ranged combat support on the battlefield.`,
  profile: `Cleric Hildegard hailing from Landen Monastery, code name: Archetto. Temporarily at Rhodes Island serving certain collaborative business aims, proactive in putting forward all sorts of proposals, urging that both sides open up amicable dealings. Simultaneously displays exceptional combat proficiency across a breadth of operations; at her own request, presently serves as a Rhodes Island Sniper Operator, active on all manner of missions.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Archetto shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.12u/L\nAs a Laterano convent with enduring reputation, Landen Monastery places immense value on its clergy's attention to their health and physical rudiments. Prior to her actual admission checkup, Miss Archetto provided Medical the last five years of her annual health assessments for reference. Aside from the need for Miss Archetto to be aware how her height might challenge her, everything's normal.` },
    { title: 'Archive File 1', content: `A lot of the time, Archetto seems rather like a businesswoman.\nObviously, not a criticism, but compared to sweeping the barren soils, driving out mutated Originium slugs and other such missions, Archetto reserves her fervor for the exploration of business opportunities from every angle. Aside from her specialized bow and arrows, she also keeps on her several dozen pamphlets advertising Landen Monastery. If not for Executor's anecdotes about the monasteries, we may well have thought Landen a fly-by-night company on the verge of bankruptcy...\nArchetto has said that her sisters are scattered all across the land nowadays, trying to look for a way forward for Landen Monastery, but only Archetto has ventured as far as Lungmen, Siracusa and Sargon, with little to show for it. She was impotent alone, and needed to find a trusty collaborative partner. It was bearing all this in mind that Archetto finally came to seek Rhodes Island's cooperation.` },
    { title: 'Archive File 2', content: `Archetto is of half-Victorian, half-Laterano descent. She grew up in Laterano, and deeply loved her free and open homeland. She could've become a scholar and stayed with her alma mater, or succeeded her mother's furniture store, but Hildegard at the tender age of ten chose to join Landen Monastery, becoming one of the honored Landen Guard, devoting her own due power to the defense of Laterano.\nArchetto's archery skills come from her father, an ordinary Victorian hunter. Come fall and through winter, if safety held, he would take Hildegard out of the city, to the great snowcapped mountains. As Hildegard learned the arrow, she displayed incomparable talent, which would serve as a foundation for her outstanding displays at Landen Monastery in the future.\nHowever, every time life at the monastery comes up, the cheery and earnest Archetto takes up a begrudging look. Whether the lax elders or the ever-snoozing Landen bishopry, it seems Landen Monastery is a peerlessly undisciplined, carefree place. "If there weren't a sign on it, you could call it a nursing home and I'd believe you," so Archetto laments. Though by the looks of it, she truly did enjoy her time back there.` },
    { title: 'Archive File 3', content: `Concerning whether it was idleness and negligence that reduced Landen Monastery to its present state—this is fantasy. No matter their financial issues, they still uphold a soldier's basic virtues.\nOf course, we can't forget their Landen Monastery-exclusive secret recipe cystymilk bread either, of which Archetto repeatedly sings the praises. Maybe it's the soil and the feed that give Landen Monastery's cystybeasts such voluminous builds, with milk nothing like the oily, throat-parching stuff from Ursus breeds. They use this cystymilk to make cheese, and pour it over the bread after melting it, producing the exquisite, second-to-none taste of a monastery's special cystymilk bread.\nBeyond that, the monastery also has an in-house brewery. Their beer, with malt concentrations to beat them all, has a distinct aroma, once welcomed by aristocrats lucky enough to sample it. In the early days, the Landen bishopry had no interest in any industrial pipeline for the monastery to scale up production of the beer, it spread only by word of mouth amongst nobles and religious figures, but come Landen Monastery's economic winter, plenty of voices rose up inside. A young bishop declared: "In all honesty, I don't care whether we make the tradition a commodity, or we don't. But taking faith and peddling it–that deserves our wholehearted resistance."\nWhen a monastery fully becomes a mercenary organization, a pasture and a brewhouse all at once, it can be bewildering. Nevertheless, seeing how proud Archetto looks as she markets those goods, surely Laterano's a fine enough place.` },
    { title: 'Archive File 4', content: `Archetto has mastered three unusual ways of utilizing arrows, and her bow is just as unusual, a product of elaborate upgrades.\nNaturally, some were directed by Landen Monastery's older archers. Some suggestions came from the easy-going young Landen bishopry. By the end, even "it can catapult" had made it in, and it was a weapon far beyond the realm of arrows at first glance. However, no matter what it was now, it couldn't fall short with Archetto's excellent firing technique working it. These came from Archetto's childhood winters, when her father would take her to the great snowcapped mountains. He taught her how to hunt, how to draw a bow, how to aim.\nThat said, relying only on a bow and arrow to rejuvenate a monastery would be utter nonsense. Once she left Laterano, Miss Archetto fumbled her way through the bishopry's remaining contacts, one by one visiting a great many cities, signing just as many deals. But Archetto knew deep down the Monastery was hardly an industrial plant, and these business deals hither and thither would less change the Monastery's current condition than it would take the Monastery's growth somewhere strange. Aiming to find the Monastery a true foundation for long-term collaboration, using any means she cares for, Archetto still strives to this day.\nOf course, "almost took a wrong path" describes more than the Monastery, but for now, let's not look too hard into that time someone nearly induced Archetto to become an intercity net idol.` },
    { title: 'Promotion Record', content: `Landen Monastery: unlike general-knowledge Laterano teachings, its core reason for establishment lies in protecting the personal safety of the Apostle and important members of the clergy. The greatest difference between the Monastery and the Notarial Hall, or any other Laterano institution—the Monastery actively accept believers from beyond Laterano, and will offer them the chance to serve the Apostle.\nTime was, the Monastery adopted more of an employer model, receiving the devotion of pious warriors; back then, they earned the moniker "Landen Guard." However, as times changed, the Landen Guard began facing all sorts of problems with their employment framework. With a certain bishop's backing, the Monastery presided over the establishment of a complete educational system, further trialing the admission of a few youths to study at the Monastery. After that, the bishop also suggested that "the Monastery ought to become a buoy of our faith," and advocated admission of persons beyond Laterano. After that, some bishopry even suggested that "justice is as faith," and that Landen Monastery needn't be confined to the security and guarding of large-scale religious activity, as long as they could guard their true love, their Laterano—and so Landen Monastery appeared across every corner of the world.\n"History pushes for Landen Monastery's progress. In other words, we struggle and struggle so as to avoid becoming a relic. Really, we've just been more and more unable to find work, and we've had to expand business, and that's all, isn't it?"` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/laterano.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/archetto/base.png', chibiSrc: '/operators/archetto/chibi.webm', illustrator: 'alchemaniac' },
    { id: 'e2', label: 'Elite 2', src: '/operators/archetto/e2.png', chibiSrc: '/operators/archetto/chibi.webm', illustrator: 'alchemaniac' },
    { id: 'skin1', label: 'Publicity Strategy', src: '/operators/archetto/skin1.png', chibiSrc: '/operators/archetto/chibi-skin1.webm', illustrator: 'alchemaniac' },
    { id: 'skin2', label: 'Glory to the Devout', src: '/operators/archetto/skin2.png', chibiSrc: '/operators/archetto/chibi-skin2.webm', illustrator: 'alchemaniac' },
  ],
  portrait: '/operators/archetto/portrait.png',
  portraitFocus: { y: -4.9, x: 30.5, zoom: 270 },
}

export default archetto
