import type { Operator } from '../../types'

const indigo: Operator = {
  name: 'Indigo', fileNo: 'II05', class: 'Caster', branch: 'Mystic Caster', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Iberia', position: 'Ranged', race: 'Phidia', gender: 'Female', birthplace: 'Iberia',
  birthday: 'September 30th', height: '167 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: '织布机loom',
  cv: { JP: 'Kumiko Yokote (credited as "Hyo-sei")', CN: 'Sun Yuting (credited as "Tin" in EN)', EN: 'Nikki García', KR: 'Kim Seo-young' },
  trait: 'Attacks deal Arts damage; When unable to find a target, attacks can be stored up and fired all at once (Up to 3 charges)',
  tags: ['DPS', 'Crowd-Control'],
  stats: { hp: 1435, atk: 1116, def: 117, res: 20, block: 1, cost: 23, aspd: '3s', rdp: '70s' },
  range: {
    base: [[1,1,0,0],[2,1,1,1],[1,1,0,0]],
    e1: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Gentle Binding Gaze', desc: 'When attacking, has a 18% chance to Bind the target for 4 seconds. Will not target Bound enemies', elite: 'E2' }],
  skills: [
    {
      name: 'Lighthouse Guardian', icon: '/operators/indigo/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 50% of ATK as Arts damage', spInit: 5, sp: 15, dur: '4s', rank: 'M3', range: [[2,1,1,1,1]],
      levels: [
        { level: '1', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 30% ATK as Arts damage', spInit: 5, sp: 25, dur: '4s' },
        { level: '2', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 31% ATK as Arts damage', spInit: 5, sp: 24, dur: '4s' },
        { level: '3', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 32% ATK as Arts damage', spInit: 5, sp: 23, dur: '4s' },
        { level: '4', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 35% ATK as Arts damage', spInit: 5, sp: 22, dur: '4s' },
        { level: '5', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 36% ATK as Arts damage', spInit: 5, sp: 21, dur: '4s' },
        { level: '6', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 37% ATK as Arts damage', spInit: 5, sp: 20, dur: '4s' },
        { level: '7', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 40% ATK as Arts damage', spInit: 5, sp: 19, dur: '4s' },
        { level: 'M1', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 43% ATK as Arts damage', spInit: 5, sp: 18, dur: '4s' },
        { level: 'M2', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 46% ATK as Arts damage', spInit: 5, sp: 17, dur: '4s' },
        { level: 'M3', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 50% ATK as Arts damage', spInit: 5, sp: 15, dur: '4s' },
      ],
    },
    {
      name: 'Labyrinth of Light', icon: '/operators/indigo/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Attack Interval reduces and the activation rate of this unit's Talent increases to 3 times. Bound enemies within Attack Range receive Arts damage equal to 20% of Indigo's ATK every 0.5 seconds", spInit: 20, sp: 40, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: `Attack Interval reduces a little and the activation rate of this unit's Talent increases to 1.5 times. Bound enemies within Attack Range receive Arts damage equal to 10% of Indigo's ATK every 0.5 seconds`, spInit: 10, sp: 50, dur: '20s' },
        { level: '2', desc: `Attack Interval reduces a little and the activation rate of this unit's Talent increases to 1.5 times. Bound enemies within Attack Range receive Arts damage equal to 10% of Indigo's ATK every 0.5 seconds`, spInit: 10, sp: 49, dur: '20s' },
        { level: '3', desc: `Attack Interval reduces a little and the activation rate of this unit's Talent increases to 1.5 times. Bound enemies within Attack Range receive Arts damage equal to 10% of Indigo's ATK every 0.5 seconds`, spInit: 10, sp: 48, dur: '20s' },
        { level: '4', desc: `Attack Interval reduces slightly and the activation rate of this unit's Talent increases to 2.0 times. Bound enemies within Attack Range receive Arts damage equal to 12% of Indigo's ATK every 0.5 seconds`, spInit: 10, sp: 47, dur: '20s' },
        { level: '5', desc: `Attack Interval reduces slightly and the activation rate of this unit's Talent increases to 2.0 times. Bound enemies within Attack Range receive Arts damage equal to 12% of Indigo's ATK every 0.5 seconds`, spInit: 10, sp: 46, dur: '20s' },
        { level: '6', desc: `Attack Interval reduces slightly and the activation rate of this unit's Talent increases to 2.0 times. Bound enemies within Attack Range receive Arts damage equal to 12% of Indigo's ATK every 0.5 seconds`, spInit: 10, sp: 45, dur: '20s' },
        { level: '7', desc: `Attack Interval reduces moderately and the activation rate of this unit's Talent increases to 2.5 times. Bound enemies within Attack Range receive Arts damage equal to 15% of Indigo's ATK every 0.5 seconds`, spInit: 15, sp: 44, dur: '20s' },
        { level: 'M1', desc: `Attack Interval reduces moderately and the activation rate of this unit's Talent increases to 2.5 times. Bound enemies within Attack Range receive Arts damage equal to 17% of Indigo's ATK every 0.5 seconds`, spInit: 17, sp: 43, dur: '20s' },
        { level: 'M2', desc: `Attack Interval reduces moderately and the activation rate of this unit's Talent increases to 3.0 times. Bound enemies within Attack Range receive Arts damage equal to 17% of Indigo's ATK every 0.5 seconds`, spInit: 18, sp: 42, dur: '20s' },
        { level: 'M3', desc: `Attack Interval reduces and the activation rate of this unit's Talent increases to 3.0 times. Bound enemies within Attack Range receive Arts damage equal to 20% of Indigo's ATK every 0.5 seconds`, spInit: 20, sp: 40, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Indigo's Badge", desc: 'Appointed as Caster Operator to exercise Mystic Caster responsibilities' },
    mscx: { code: 'MSC-X', name: 'Staff Maintenance Kit', stages: [
      { stage: 1, atk: '+45', aspd: '+3', effect: 'Trait improved: Attacks deal Arts damage; When unable to find a target, attacks can be stored up and fired all at once (Up to 4 charges)' },
      { stage: 2, atk: '+59', aspd: '+4', effect: 'Gentle Binding Gaze improved: When attacking, has a 23% chance to Bind the target for 4 seconds. Will not target Bound enemies' },
      { stage: 3, atk: '+70', aspd: '+4', effect: 'Gentle Binding Gaze improved: When attacking, has a 25% chance to Bind the target for 4 seconds. Will not target Bound enemies' },
    ]},
  },
  story: `A young Iberian Phidia apprentice of a Liberi keeper of an Eye of Iberia on the Rocky Coast, Aria was banished by her master after a tragedy that happened to him and had since traveled throughout Iberia. Notably, she explored a lighthouse that had been destroyed during the Profound Silence, where Aria encountered Blue Poison and Glaucus and was accidentally struck by the former's poisonous bolts after being mistaken as an enemy. Once resolved, she followed them to Rhodes Island. Enlisting under the codename "Indigo", she lends her aid as a former lighthouse keeper apprentice and now as a caster apprentice.`,
  profile: `A wandering Caster from Iberia. Indigo used to be an apprentice lighthouse keeper at a seashore lighthouse. During her travels, she met Blue Poison and Glaucus while they were on a field operation, and came onboard after receiving a referral from Blue Poison.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Indigo shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.12u/L\nBack home, Operator Indigo rarely came into contact with Originium. Although she has come into contact with Originium-based products during her travels. Thankfully she had some decent protection... Uh, had decent luck.\nShut-ins are bound to have a decent health advantage.\n– Tuye`,
    },
    {
      title: 'Archive File 1',
      content: `[Originium Arts Overview]\nThere is something special about Indigo's Originium Arts. That light of hers is not as simple as it seems. My equipment made records of the room's magnetic field when she was casting, and after I removed much of the noise found in normal frequencies, I located a periodical combined waveform transform. This waveform has a certain... effect on the neural system of most living beings. Its effects are very weak, and it is hardly apparent as interference, but it's there. Perhaps this is the reason most of us feel warmth in her light.\nWith her permission, I looked into the inner structure of her Arts Unit. Unlike the Leithanien-made staffs commonly used today, her staff does not have a supporting conduction pathway. Hm... It is actually the Arts Unit on the top of her staff that is really doing the work here. I ran a simulation based on the component's maximum output, and the results show that it could power large facilities such as the massive factories found in Victoria. How did this Unit find itself on Indigo's staff? I discussed this with Thorns, who just happened to be walking by... He seemed to be in a pensive mood after taking a look at my test results and did not say much more. To tell the truth, this isn't like him at all.\nIndigo does not seem to know much more as to the staff's origins as well. All she knows is that it was given to her personally by her teacher when she left her hometown's lighthouse. Therefore, this is as far as my research on this goes for the time being... I really hope that someone will provide me with more information on this in the future.\n–Research recording of Caster Operator Mint`,
    },
    {
      title: 'Archive File 2',
      content: `It happened twice... No, three times. My toxins poisoned Aria three times.\nThe first time happened when we first met. At the time, I thought she was an enemy. It took her about twice as long as a normal Phidia to lose consciousness from the toxins. It didn't take her long to come to either. It's interesting, don't you think?\nNo, please don't get the wrong idea. I'm not planning to run any experiments on her. She's my friend, and I'm not like that either. Of course... I ask you to please not have any funny ideas either.\nAria... is kind of clumsy. Last time, she got her hair stuck on my reagent cabinet. She knocked over a few jars and broke them, and breathed in too much of the toxic gas. As for this time... I guess, between the cake box and the petri dish, she probably picked the wrong thing to eat off of?\nShe told me that, while she was wandering the world, she had by mistake taken on bounties with bounty hunters and dealt in the black markets, where people good and bad alike mingle together. She's made a few "friends" who know their way around poisons because of that, and perhaps the reason she's able to withstand toxins to such degree is because her body has grown used to getting poisoned over and over. We shouldn't underestimate what the human body is capable of–This is something that we toxicologists always like to say.\nOkay, we've talked for a while now. She should be waking up soon. She's waking up sooner and sooner. I have other things to take care of, so could you give her this pair of new gloves?\n–A conversation that Operator Blue Poison had with Doctor Warfarin after a certain time when Operator Indigo was poisoned`,
    },
    {
      title: 'Archive File 3',
      content: `Indigo comes from a small town in Iberia known as the Rocky Coast.\nHer impression is that the lighthouse has always been there. If it's daytime, the doors are always wide open for the residents, though very few residents would willingly make their way to the lighthouse. It was too close to the sea, and the adults all heard of the terrors of the sea from their ancestors, before passing them on to their children. Indigo's mother has taught her this many, many times, too. However, she was nonetheless captivated by the peculiar building. Whenever she had some spare time, the first thing that would come to her mind would be to run inside.\nThe lighthouse was where she met her teacher, a quiet, elderly Liberi who nonetheless showed the occasional sense of humor. At first, she refused to become Indigo's teacher and frequently feigned anger to chase away the girl whom she frequently found lying on the rocks next to the shore or climbing atop the lighthouse. In the end, the old Liberi was moved by her sincerity. The old lighthouse keeper needed a successor, and children who were interested in the lighthouse were few and far between. Year after year, the young girl learned much from her teacher. As she learned how to tend to the lighthouse and how to use Originium Arts to serve as its light source, she caught a glimpse of that golden age. She became obsessed with those sceneries of the past, none of which her parents, her neighbors, and her playmates could understand. Before long, she moved into the lighthouse to stay with her teacher and began to care for the lighthouse alongside her.\nOnce, when she pored over the records from those bygone eras, the girl spotted the term "Guardian of Light." She jokingly called her teacher one such guardian, and, upon hearing this, her teacher immediately fell silent. Enunciating her sentence word by word, the elderly Liberi told her: at this point, they were more like the guardians of the dark night.\nThe days went by much faster inside the lighthouse than the outside. After a rare rainstorm came and passed one night, her teacher forbade her from entering the lighthouse again. She told Indigo that she must leave her hometown, meet more people, and experience more things before she would be qualified to take over. From then on, Indigo has been on a journey, though she herself knows not how long this journey will last.\nWhat must she discover until she is allowed to return home? It was not until she made her way to Rhodes Island that she finally realized what it was–She needs to find out how to restore the radiance that the lighthouse once possessed.`,
    },
    {
      title: 'Archive File 4',
      content: `With more and more Iberian operators joining our ranks, we have also gotten a deeper understanding of Iberia's current situation.\nOne thing that is apparent is the increase in the number of refugees. Some of them are trying to escape the worsening situation inside, while others were forced to leave their disaster-stricken homelands behind. We've noticed that these disasters that occur near the coast are noticeably different than the Catastrophes that frequently occur in other areas. We still have yet to be able to make it into several major Iberian cities, but we've already set up numerous offices within its territory near the borders. Our first and foremost goal is still the treatment of Oripathy patients in the nearby areas, but we will continue to monitor and investigate the abnormalities that occur here.\n[Classified Log]\nPer your wishes, we've recently managed to obtain some leads, and made contact with some pertinent Iberians. Let's start with the conclusion we've arrived at–Although research on the sea may seem to be a de facto taboo on the surface, it is certainly not a subject matter that's been completely ignored. There is a group of people, including Indigo's teacher, who have been following knowledge that has been passed down to them for generations and making preparations for something. Of course, we don't currently have nearly enough information on this matter, but now that we have leads, we will continue our investigation as necessary.`,
    },
    {
      title: 'Promotion Record',
      content: `Operator Indigo's will is just like the light of her staff. It may start out small, but it eventually stabilizes, and it is undoubtedly getting stronger bit by bit.\nFor some people, their strength does not come from their inherent talent, but instead their persistence toward a certain thing. That's the kind of person Indigo is. You can put your trust in her to bring forth that thread of radiance at the darkest hour.`,
    },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/mystic-caster-branch.png', factionIcon: '/icons/factions/iberia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/indigo/base.png', chibiSrc: '/operators/indigo/chibi.webm', illustrator: '织布机loom' },
    { id: 'e2', label: 'Elite 2', src: '/operators/indigo/e2.png', chibiSrc: '/operators/indigo/chibi.webm', illustrator: '织布机loom' },
    { id: 'skin1', label: 'Serene Day', src: '/operators/indigo/skin1.png', chibiSrc: '/operators/indigo/chibi-skin1.webm', illustrator: '织布机loom' },
  ],
  portrait: '/operators/indigo/portrait.png',
  portraitFocus: { y: 8, x: 40, zoom: 290 },
}

export default indigo
