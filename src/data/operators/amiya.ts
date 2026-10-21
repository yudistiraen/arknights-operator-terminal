import type { Operator } from '../../types'
import amiyaVoice from '../voices/amiya'

const amiya: Operator = {
  name: 'Amiya', fileNo: 'R001', class: 'Caster', branch: 'Core Caster', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Main Theme Story'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Cautus/Chimera', gender: 'Female', birthplace: 'Rim Billiton',
  birthday: 'December 23rd', height: '142 cm', combatExp: '3 years', infectionStatus: 'Infected', illustrator: '唯@W',
  cv: { JP: 'Tomoyo Kurosawa', CN: 'Dian Tao', EN: 'Emma Ballantine', KR: 'Lee Ji-hyun' },
  voice: amiyaVoice,
  trait: 'Deals Arts damage',
  tags: ['DPS'],
  stats: { hp: 1480, atk: 612, def: 121, res: 20, block: 1, cost: 20, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [
      [1,1,1],
      [2,1,1],
      [1,1,1],
    ],
    e1: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
    e2: [
      [1,1,1,0],
      [2,1,1,1],
      [1,1,1,0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': '■■' },
  talents: [
    { name: '???', desc: '?????', elite: 'E0' },
    { name: 'Emotional Absorption', desc: 'Restores 2 extra Skill Points when attacking an enemy and 8 extra Skill Points when killing an enemy', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Tactical Chant γ', icon: '/operators/amiya/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: 'ASPD +90', spInit: 15, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ASPD +30', spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: 'ASPD +35', spInit: 0, sp: 40, dur: '30s' },
        { level: '3', desc: 'ASPD +40', spInit: 0, sp: 40, dur: '30s' },
        { level: '4', desc: 'ASPD +45', spInit: 5, sp: 35, dur: '30s' },
        { level: '5', desc: 'ASPD +50', spInit: 5, sp: 35, dur: '30s' },
        { level: '6', desc: 'ASPD +55', spInit: 5, sp: 35, dur: '30s' },
        { level: '7', desc: 'ASPD +60', spInit: 10, sp: 32, dur: '30s' },
        { level: 'M1', desc: 'ASPD +70', spInit: 10, sp: 32, dur: '30s' },
        { level: 'M2', desc: 'ASPD +80', spInit: 10, sp: 32, dur: '30s' },
        { level: 'M3', desc: 'ASPD +90', spInit: 15, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Spirit Burst', icon: '/operators/amiya/skill-2.png', activation: 'Auto', recovery: 'Auto',
      desc: 'Fires 8 times with 60% ATK when attacking and attacks random targets within Attack Range. Automatically activated; Amiya is Stunned for 10 seconds after the skill duration', spInit: 0, sp: 100, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: `Fires 6 times with 33% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: '2', desc: `Fires 6 times with 35% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: '3', desc: `Fires 6 times with 37% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: '4', desc: `Fires 7 times with 39% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: '5', desc: `Fires 7 times with 41% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: '6', desc: `Fires 7 times with 43% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: '7', desc: `Fires 7 times with 45% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: 'M1', desc: `Fires 8 times with 50% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: 'M2', desc: `Fires 8 times with 55% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
        { level: 'M3', desc: `Fires 8 times with 60% ATK when attacking and attacks random targets within Attack Range\nAutomatically activated; Amiya is Stunned for 10 seconds after the skill duration`, spInit: 0, sp: 100, dur: '25s' },
      ],
    },
    {
      name: 'Chimera', icon: '/operators/amiya/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: 'ATK +230%, Max HP +100%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s', rank: 'M3', range: [
      [1,1,1,0],
      [1,1,1,1],
      [2,1,1,1],
      [1,1,1,1],
      [1,1,1,0],
    ], note: 'The in-game animation shows Amiya as having been knocked out, but she is indeed forcibly retreated and refunds part of her DP cost in the process.',
      levels: [
        { level: '1', desc: 'ATK +100%, Max HP +25%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: '2', desc: 'ATK +110%, Max HP +25%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: '3', desc: 'ATK +120%, Max HP +25%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: '4', desc: 'ATK +130%, Max HP +50%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: '5', desc: 'ATK +140%, Max HP +50%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: '6', desc: 'ATK +150%, Max HP +50%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: '7', desc: 'ATK +160%, Max HP +75%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: 'M1', desc: 'ATK +180%, Max HP +75%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: 'M2', desc: 'ATK +200%, Max HP +75%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
        { level: 'M3', desc: 'ATK +230%, Max HP +100%, Range expands, damage type changes to True; After the skill ends, Amiya will automatically be retreated', spInit: 0, sp: 120, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Amiya's Badge", desc: 'Appointed as Caster Operator to exercise Core Caster responsibilities' },
    ccry: { code: 'CCR-Y', name: 'DWDB-221E', stages: [
      { stage: 1, hp: '+100', atk: '+30', effect: 'New trait: Gain 1 SP when normal attacks hit an elite or leader enemy' },
      { stage: 2, hp: '+130', atk: '+40', effect: 'Emotional Absorption improved: Restores 3 extra Skill Points when attacking an enemy and 8 extra Skill Points when killing an enemy' },
      { stage: 3, hp: '+150', atk: '+50', effect: 'Emotional Absorption improved: Restores 3 extra Skill Points when attacking an enemy and 10 extra Skill Points when killing an enemy' },
    ]},
  },
  story: `Amiya is a Rim Billitonian Cautus who lost her parents when their convoy was raided by bandits in 1090. She contracted Oripathy due to the incident and was rescued by the Doctor. As orphaned Infected were normally sent to die by the locals, the Doctor decided to take care of her while travelling across Terra before finally returning to Babel after one year, where she was raised by Theresa, the King of Sarkaz.\n\nPrior to her demise, Theresa passed on the Civilight Eterna to Amiya and, along with it, the position of the King of Sarkaz. This resulted in her being classified as a Chimera, making her the only known King of Sarkaz who is not a Sarkaz — an "Outblood King" as the Revenants call her. The extent of Amiya's powers include the ability to tap into others' emotions and exert some level of control over them, and invoke the power of the previous Kings, although much of these abilities are suppressed by her ten rings for her own sake. Her Arts manifest as dark black lines with accents of red, and briefly manifested as blue when she mimicked Qui'lon's Wrathful Cerulean Flame. In the aftermath of the Victorian Crisis, her Arts manifest as threads of white and pink, taking after Theresa's.\n\nAmiya acts as the figurehead of Rhodes Island, Babel's successor, where she demonstrated herself to be a capable leader despite being only around 14 years old at the start of the Chernobog Crisis, and is a capable combatant who normally fights as a caster with fearsome Arts. Although many believed that she is the prophesized tyrannical King of Sarkaz who is set to be a harbinger of apocalypse, Amiya is anything but that; she wishes to use her power to deliver salvation to the world of Terra regardless of racial or national differences. To that end, Amiya leads Rhodes Island through the Chernobog and Victorian Crises alongside Kal'tsit and the Doctor, and stands ready to face the looming threat from within and beyond.`,
  profile: `The public face of Rhodes Island and its top executive. Although Amiya appears to be a young and inexperienced girl, she is universally trusted and highly qualified for her position.
    Amiya now leads the island in fighting for the future of the Infected and striving to exorcise the dark shadow of Originium from the land.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 19%\n■■■■■■■■■■■■■■■■■■■■■■■■■
        ■■■■■■■■■■■■■■■■■■■■■■■■■\n[Blood Originium-Crystal Density] 0.27u/L\n■■■■■■■■■■■■■■■■■■■■■■■■■
        ■■■■■■■■■■■■■■■■■■■■■■■■■`,
    },
    {
      title: 'Class Conversion Record 1',
      content: `According to the records, the saber wielded by the Sarkaz Lord Kollam was between 0.9 and 1.2 meters long, about 5 centimeters thick, made of an unknown material, black in color, and bore a traditional Sarkaz inscription, which read "here the fighting stops".\n\nAfter succeeding to the throne, Kollam reorganized Kazdel and felt that time in the west had been unkind to the people, so he led some Sarkaz tribes to the east, at which point he vanished from history.\n\nAccording to legend, Kollam had the power to rout his enemies without fighting. Some accounts say that Kollam's enemies suffered a weight several times that of their normal weapons when facing him in battle, finding themselves physically and mentally defeated. If they were lucky enough to survive, they were often maimed. But some referred to Kollam as an enlightened despot, saying that cuts from his blade drew no blood, and anyone wise enough to retreat would survive.\n\nHowever, some ancient texts claim that Kollam's saber was destroyed in battle before he even succeeded to the throne, and that the weapon he later wielded was a fragile illusion born of his Arts. Such claims are inconsistent with Kollam's subsequent performance in Sarkaz conflicts, and few can explain why Kollam would not recast his favorite sword under those circumstances. I speculate that Kollam did have the power to shape weapons with Arts, and this theory is centered on the throne. But that Kollam rarely used his Arts in that way, having once been an adventurer.\n\nOf course, it is written that after Kollam's ascension, his saber gave off a greenish light, like a breath of flame. Kollam's famous ferocity led to the blade being dubbed "Wrathful Cerulean Flame".\n\nMost of the Sarkaz legends have been lost in the ongoing ruination of Kazdel, which has tremendously impeded historical research. There have been recent calls from Sarkaz scholars to restore their history, but their own research has been poisoned by propagandistic efforts to paint a noble picture of the Sarkaz race.\n\n— Logos`,
    },
    {
      title: 'Class Conversion Record 2',
      content: `About Her Highness? You sure I'm the best person to answer that, Doctor? I'm just a simple boiler worker. What could I possibly know that the Doctor of Rhodes Island wouldn't? Oh, you wanna hear what an average Rhodes Island Sarkaz thinks of the former King?\n\nWe're standing pretty close to the boiler here, so you'd better sit by the fan while I have a think.\n\nBefore Her Highness's reign, the King who ruled over Kazdel was named Yliš. He wasn't a brutal tyrant or nothing, but he didn't do anything impressive either. None of the Royal Court were loyal to him, but nobody rose up against him. And later, as we all know, there were a pair of mixed-blood twins in his court: one an armed bodyguard for the King, and the other a royal tailor. That's right, the General and Her Highness, exactly as you knew them.\n\nAfter Yliš's death in battle, they rose to the occasion and led the remaining Sarkaz in a counterattack. I still remember how the textbooks would describe it: "Her Highness, not yet coronated, never laid down her needle and thread, weaving tactics and strategy with the other heroes. As the rapacious enemy surged into the Sarkaz capital, they fell into a deadly trap." It wasn't easy, living through such a bloody battle.\n\nThere was this one Goliath warrior who found himself trapped under a pile of enemy corpses as he was dying. At least until Her Highness came to him. He saw her holding a faint ray of light, and she spun it on a colorless spindle to form a barely-visible staff in her hand. His wounds mended, and his shattered limbs returned to their original positions. He'd never seen Arts like that. Like a tailor darning life itself.\n\nWhen Her Highness was formally coronated, many cheered with joy, but others weren't too happy about it. The General chopped off the latter's heads. And for the next two centuries or so, Her Highness tried heal Kazdel.\n\nNow, this is just a cliché, but the soil of Kazdel is always being watered by the blood of the Sarkaz. Her Highness wanted to change that. As the King, she could do a lot of things, but there were always more that required her attention. Damn near never-ending. With Dame Kal'tsit's at her side, she was able to personally save many lives. But Her Highness knew that in the time it took to save ten lives, a hundred would be lost. If she could save a hundred, there'd be a thousand more she couldn't. And even the King was helpless in the face of Oripathy.\n\nFor the first few years of the civil war, more than a few people mocked her for leaving Kazdel. I've heard it plenty myself, but was never sure what to say. Their mothers safely gave birth to them in hospitals built almost a hundred years ago, and they were taught in travelling schools established about fifty years back. That's the only reason they even know fancy phrases like "blind charity," "lacking foresight" or "falling to foreign influences"... Ah, sorry Doctor, caught me ranting a bit there.\n\nI don't dare guess what Her Highness was thinking back then. And I believe you, Amiya, and Dame Kal'tsit will steer this ship towards a brighter future.\n\nBut sometimes I wonder if this ship can really achieve Her Highness's dream one day.`,
    },
    {
      title: '???',
      content: `??????`,
    },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/core-caster-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/amiya/base.png', chibiSrc: '/operators/amiya/chibi.webm', chibiMoveSrc: '/operators/amiya/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: -5, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'e1', label: 'Elite 1', src: '/operators/amiya/e1.png', chibiSrc: '/operators/amiya/chibi.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: -5, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'e2', label: 'Elite 2', src: '/operators/amiya/e2.png', chibiSrc: '/operators/amiya/chibi.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: -5, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'skin1', label: 'Newsgirl', src: '/operators/amiya/skin1.png', chibiSrc: '/operators/amiya/chibi-skin1.webm', chibiMoveSrc: '/operators/amiya/chibi-move-skin1.webm', chibiFraming: { scale: 1.5, offsetXPercent: 1.5, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'skin2', label: 'Fresh Fastener', src: '/operators/amiya/skin2.png', chibiSrc: '/operators/amiya/chibi-skin2.webm', chibiMoveSrc: '/operators/amiya/chibi-move-skin2.webm', chibiFraming: { scale: 1.35, offsetXPercent: 0.6, offsetYPercent: 0.1 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
    { id: 'skin3', label: 'Seedsower', src: '/operators/amiya/skin3.png', chibiSrc: '/operators/amiya/chibi-skin3.webm', chibiMoveSrc: '/operators/amiya/chibi-move-skin3.webm', chibiFraming: { scale: 1.5, offsetXPercent: 2, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '唯@W' },
  ],
  portrait: '/operators/amiya/portrait.png',
  portraitFocus: { y: 7, x: 40, zoom: 280 },
  variants: [
    {
      class: 'Guard', branch: 'Arts Fighter', position: 'Melee',
      trait: 'Deals Arts damage',
      stats: { hp: 2629, atk: 657, def: 376, res: 20, block: 1, cost: 21, aspd: '1.25s', rdp: '70s' },
      range: { base: [[2,1]], e1: [[2,1]], e2: [[2,1]] },
      talents: [
        { name: 'Wrathful Cerulean Flame', desc: 'All allied units on the battlefield gain +7% ATK and DEF, doubled when skill is active', elite: 'E2' },
      ],
      skills: [
        {
          name: 'Ying Xiao - Fleeting Night', icon: '/operators/amiya/guard-skill-1.png', activation: 'Manual', recovery: 'Auto',
          desc: 'ATK +80%, gains 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 35, dur: '30s', rank: 'M3',
          levels: [
            { level: '1', desc: 'ATK +20%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 45, dur: '25s' },
            { level: '2', desc: 'ATK +25%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 44, dur: '25s' },
            { level: '3', desc: 'ATK +30%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 43, dur: '25s' },
            { level: '4', desc: 'ATK +35%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 42, dur: '26s' },
            { level: '5', desc: 'ATK +40%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 41, dur: '26s' },
            { level: '6', desc: 'ATK +45%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 40, dur: '26s' },
            { level: '7', desc: 'ATK +50%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 39, dur: '27s' },
            { level: 'M1', desc: 'ATK +60%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 38, dur: '28s' },
            { level: 'M2', desc: 'ATK +70%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 37, dur: '29s' },
            { level: 'M3', desc: 'ATK +80%, 60% Arts Dodge, and attacks turn into double strikes', spInit: 10, sp: 35, dur: '30s' },
          ],
        },
        {
          name: 'Ying Xiao - Shadowless', icon: '/operators/amiya/guard-skill-2.png', activation: 'Manual', recovery: 'Auto',
          desc: 'Immediately searches for the lowest HP target in front and attacks 10 times for 220% ATK as Arts damage (last hit deals double as True damage); each enemy defeated grants ATK +40% and RES +20, up to 3 stacks; afterwards deals True damage. Can only be used once per battle', spInit: 0, sp: 20, dur: '35s', rank: 'M3',
          note: 'Amiya is invulnerable during slashes. If no enemies in range before 10th slash, slashes stop early.',
          levels: [
            { level: '1', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 120% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +20% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '25s' },
            { level: '2', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 125% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +20% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '26s' },
            { level: '3', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 130% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +20% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '27s' },
            { level: '4', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 140% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +20% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '28s' },
            { level: '5', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 145% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +20% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '29s' },
            { level: '6', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 150% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +20% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '30s' },
            { level: '7', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 160% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +25% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '31s' },
            { level: 'M1', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 180% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +30% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '32s' },
            { level: 'M2', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 200% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +35% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '33s' },
            { level: 'M3', desc: `Immediately searches for the lowest HP target in front of this unit and attacks 10 times for 220% ATK as Arts damage (The last hit deals double damage as True damage); Each enemy defeated during these slashes will increase Amiya's ATK by +40% and RES by +20, stacking up to 3 times; Afterwards, Amiya will deal True damage; This skill can only be used once per battle`, spInit: 0, sp: 20, dur: '35s' },
          ],
        },
      ],
      modules: {
        original: { code: 'Original', name: "Amiya's Badge (Guard)", desc: 'Appointed as Guard Operator to exercise Arts Fighter responsibilities' },
      },
      classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/arts-fighter-branch.png',
      skins: [ 
        { id: 'base', label: 'Base', src: '/operators/amiya/guard-base.png', chibiSrc: '/operators/amiya/chibi.webm', chibiMoveSrc: '/operators/amiya/chibi-move.webm', chibiFraming: { scale: 1.5, offsetXPercent: 0, offsetYPercent: 0 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: -5, offsetYPercent: 0 }, illustrator: '唯@W' },
        { id: 'skin1', label: 'Touch the Stars', src: '/operators/amiya/guard-skin1.png', chibiSrc: '/operators/amiya/guard-chibi.webm', chibiMoveSrc: '/operators/amiya/guard-chibi-move.webm', chibiFraming: { scale: 1.49, offsetXPercent: 1.3, offsetYPercent: 0.2 }, chibiDetailFraming: { scale: 1.2, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Mag42' },
        { id: 'skin2', label: 'In A Myriad of Universes', src: '/operators/amiya/guard-skin2.png', chibiSrc: '/operators/amiya/guard-chibi-skin2.webm', chibiMoveSrc: '/operators/amiya/guard-chibi-move-skin2.webm', chibiFraming: { scale: 1.21, offsetXPercent: -1.2, offsetYPercent: 0.7 }, chibiDetailFraming: { scale: 1, offsetXPercent: -2, offsetYPercent: 0 }, illustrator: '三目YYB', l2d: { skel: '/operators/amiya/l2d/amiya-guard-myriad.skel', atlas: '/operators/amiya/l2d/amiya-guard-myriad.atlas', backdrop: { src: '/operators/amiya/l2d/amiya-guard-myriad-bg.png', x: -1047, y: -18.2, width: 2000, height: 1714.2 }, overlays: [{ src: '/operators/amiya/l2d/amiya-guard-myriad-fg1.png', x: -1061.8, y: 227.4, width: 1036.7, height: 1392.9 }] } },
      ],
    },
    {
      class: 'Medic', branch: 'Incantation Medic', position: 'Ranged',
      trait: 'Attacks deal Arts damage and heal the HP of an ally within Attack Range for 50% of the damage dealt',
      stats: { hp: 1416, atk: 532, def: 106, res: 20, block: 1, cost: 17, aspd: '1.6s', rdp: '70s' },
      range: {
        base: [
          [1,1,1,0],
          [2,1,1,1],
          [1,1,1,0],
        ],
        e1: [
          [1,1,1,1],
          [2,1,1,1],
          [1,1,1,1],
        ],
        e2: [
          [1,1,1,1],
          [2,1,1,1],
          [1,1,1,1],
        ],
      },
      talents: [
        { name: 'Prayer of Sincerity', desc: 'When deployed, all allied units have +8% Max HP, and while skill is active, all allied units recover 2.5% Max HP per second', elite: 'E2' },
      ],
      skills: [
        {
          name: 'Empathy of Grief', icon: '/operators/amiya/medic-skill-1.png', activation: 'Manual', recovery: 'Auto',
          desc: 'ASPD +75, and heals all nearby allies within a certain range by 25% ATK upon each attack', spInit: 40, sp: 70, dur: '50s', rank: 'M3',
          levels: [
            { level: '1', desc: 'ASPD +30, and heals all nearby allies within a certain range by HP equal to 10% ATK upon each attack.', spInit: 20, sp: 70, dur: '50s' },
            { level: '2', desc: 'ASPD +35, and heals all nearby allies within a certain range by HP equal to 10% ATK upon each attack.', spInit: 20, sp: 70, dur: '50s' },
            { level: '3', desc: 'ASPD +40, and heals all nearby allies within a certain range by HP equal to 10% ATK upon each attack.', spInit: 20, sp: 70, dur: '50s' },
            { level: '4', desc: 'ASPD +45, and heals all nearby allies within a certain range by HP equal to 15% ATK upon each attack.', spInit: 25, sp: 70, dur: '50s' },
            { level: '5', desc: 'ASPD +50, and heals all nearby allies within a certain range by HP equal to 15% ATK upon each attack.', spInit: 25, sp: 70, dur: '50s' },
            { level: '6', desc: 'ASPD +55, and heals all nearby allies within a certain range by HP equal to 15% ATK upon each attack.', spInit: 25, sp: 70, dur: '50s' },
            { level: '7', desc: 'ASPD +60, and heals all nearby allies within a certain range by HP equal to 20% ATK upon each attack.', spInit: 30, sp: 70, dur: '50s' },
            { level: 'M1', desc: 'ASPD +65, and heals all nearby allies within a certain range by HP equal to 20% ATK upon each attack.', spInit: 33, sp: 70, dur: '50s' },
            { level: 'M2', desc: 'ASPD +70, and heals all nearby allies within a certain range by HP equal to 20% ATK upon each attack.', spInit: 36, sp: 70, dur: '50s' },
            { level: 'M3', desc: 'ASPD +75, and heals all nearby allies within a certain range by HP equal to 25% ATK upon each attack.', spInit: 40, sp: 70, dur: '50s' },
          ],
        },
        {
          name: 'Vision of Mercy', icon: '/operators/amiya/medic-skill-2.png', activation: 'Manual', recovery: 'Auto',
          desc: 'Performs an attack with 200% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed for 10s. For every enemy hit, ATK +30% (up to 5 stacks), subsequent damage becomes True, attacks 2 enemies at once. Can only be used once per battle', spInit: 10, sp: 20, dur: '32s', rank: 'M3',
          levels: [
            { level: '1', desc: 'Performs an attack with 140% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 5s. For every enemy hit, ATK +15% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 0, sp: 30, dur: '32s' },
            { level: '2', desc: 'Performs an attack with 145% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 5s. For every enemy hit, ATK +15% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 0, sp: 30, dur: '32s' },
            { level: '3', desc: 'Performs an attack with 150% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 5s. For every enemy hit, ATK +15% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 0, sp: 30, dur: '32s' },
            { level: '4', desc: 'Performs an attack with 155% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 6s. For every enemy hit, ATK +20% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 5, sp: 28, dur: '32s' },
            { level: '5', desc: 'Performs an attack with 160% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 6s. For every enemy hit, ATK +20% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 5, sp: 28, dur: '32s' },
            { level: '6', desc: 'Performs an attack with 165% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 6s. For every enemy hit, ATK +20% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 5, sp: 28, dur: '32s' },
            { level: '7', desc: 'Performs an attack with 170% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 7s. For every enemy hit, ATK +25% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 10, sp: 25, dur: '32s' },
            { level: 'M1', desc: 'Performs an attack with 180% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 8s. For every enemy hit, ATK +25% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 10, sp: 25, dur: '32s' },
            { level: 'M2', desc: 'Performs an attack with 190% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 9s. For every enemy hit, ATK +25% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 10, sp: 25, dur: '32s' },
            { level: 'M3', desc: 'Performs an attack with 200% ATK against all enemies in range, inflicting -60 ASPD and -60% Movement Speed on targets for 10s. For every enemy hit, ATK +30% (up to 5 stacks), subsequent damage becomes True, and attacks 2 enemies at once. This skill can only be used once per battle.', spInit: 10, sp: 20, dur: '32s' },
          ],
        },
      ],
      modules: {
        original: { code: 'Original', name: "Amiya's Badge (Medic)", desc: 'Appointed as Medic Operator to exercise Incantation Medic responsibilities' },
      },
      classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/incantation-medic-branch.png',
      skins: [
        { id: 'base', label: 'Base', src: '/operators/amiya/medic-base.png', chibiSrc: '/operators/amiya/medic-chibi.webm', chibiMoveSrc: '/operators/amiya/medic-chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: -3.4, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 0.99, offsetXPercent: -4.2, offsetYPercent: 0 }, illustrator: 'Mag42' },
        { id: 'skin1', label: 'Solo Around The World', src: '/operators/amiya/medic-skin1.png', chibiSrc: '/operators/amiya/medic-chibi-skin1.webm', chibiMoveSrc: '/operators/amiya/medic-chibi-move-skin1.webm', chibiFraming: { scale: 1.49, offsetXPercent: -2.5, offsetYPercent: 0.2 }, chibiDetailFraming: { scale: 0.98, offsetXPercent: -3.1, offsetYPercent: 0.7 }, illustrator: 'min', l2d: { skel: '/operators/amiya/l2d/amiya-medic-solo.skel', atlas: '/operators/amiya/l2d/amiya-medic-solo.atlas', backdrop: { src: '/operators/amiya/l2d/amiya-medic-solo-bg.png', x: -894.9, y: -2.9, width: 1753.2, height: 1875.8 }, overlays: [{ src: '/operators/amiya/l2d/amiya-medic-solo-fg1.png', x: -790.2, y: 854.9, width: 1853.9, height: 1118.4 }] } },
      ],
    },
  ],
}

export default amiya
