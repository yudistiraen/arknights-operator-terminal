import type { Operator } from '../../types'
import mayerVoice from '../voices/mayer'

const mayer: Operator = {
  name: 'Mayer', fileNo: 'RL05', class: 'Supporter', branch: 'Summoner', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhine Lab', position: 'Ranged', race: 'Anaty', gender: 'Female', birthplace: 'Columbia',
  birthday: 'November 20th', height: '159 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: '幻象黑兔',
  cv: { JP: 'Chiwa Saitō', CN: 'Zi Mao (credited as "Kousou Mao" in EN)', EN: 'Anjali Kunapaneni', KR: 'Jung Hye-won' },
  voice: mayerVoice,
  trait: 'Deals Arts damage\nCan use Summons in battles',
  tags: ['Summon', 'Crowd-Control'],
  stats: { hp: 1268, atk: 478, def: 130, res: 20, block: 1, cost: 11, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [
      [1, 1, 1],
      [2, 1, 1],
      [1, 1, 1],
    ],
    e1: [
      [1, 1, 1, 0],
      [2, 1, 1, 1],
      [1, 1, 1, 0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Robotter', desc: 'Can summon 3 Robotters; Enemies have -10 ASPD when blocked by Robotters', elite: 'E0' },
    { name: 'Robotter', desc: 'Can summon 4 Robotters; Enemies have -25 ASPD when blocked by Robotters', elite: 'E1' },
    { name: 'Robotter', desc: 'Can summon 5 Robotters; Enemies have -25 ASPD when blocked by Robotters', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Bionic Device', icon: '/operators/mayer/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: "All Robotters gain 35% Physical and Arts Dodge\nAllies on Robotters' four adjacent tiles also gain the same buff", spInit: 0, sp: 0, rank: 'M3',
      levels: [
        { level: '1', desc: 'All Robotters gain 10% Physical and Arts Dodge', spInit: 0, sp: 0 },
        { level: '2', desc: 'All Robotters gain 13% Physical and Arts Dodge', spInit: 0, sp: 0 },
        { level: '3', desc: 'All Robotters gain 15% Physical and Arts Dodge', spInit: 0, sp: 0 },
        { level: '4', desc: 'All Robotters gain 18% Physical and Arts Dodge', spInit: 0, sp: 0 },
        { level: '5', desc: 'All Robotters gain 20% Physical and Arts Dodge', spInit: 0, sp: 0 },
        { level: '6', desc: 'All Robotters gain 22% Physical and Arts Dodge', spInit: 0, sp: 0 },
        { level: '7', desc: 'All Robotters gain 25% Physical and Arts Dodge', spInit: 0, sp: 0 },
        { level: 'M1', desc: "All Robotters gain 25% Physical and Arts Dodge\nAllies on Robotters' four adjacent tiles also gain the same buff", spInit: 0, sp: 0 },
        { level: 'M2', desc: "All Robotters gain 30% Physical and Arts Dodge\nAllies on Robotters' four adjacent tiles also gain the same buff", spInit: 0, sp: 0 },
        { level: 'M3', desc: "All Robotters gain 35% Physical and Arts Dodge\nAllies on Robotters' four adjacent tiles also gain the same buff", spInit: 0, sp: 0 },
      ],
    },
    {
      name: 'Detonate and Recycle', icon: '/operators/mayer/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Detonates all deployed Robotters immediately, dealing 600% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 2 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 30, rank: 'M3',
      note: 'Detonate and Recycle can only be used when there are at least one Robotter on the map and the explosion can affect aerial enemies.\nRobotters that are being Stunned, Frozen, or suffering from Necrosis when Detonate and Recycle is used will neither explode nor be recovered.',
      levels: [
        { level: '1', desc: "Detonates all deployed Robotters immediately, dealing 300% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 40 },
        { level: '2', desc: "Detonates all deployed Robotters immediately, dealing 320% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 39 },
        { level: '3', desc: "Detonates all deployed Robotters immediately, dealing 350% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 38 },
        { level: '4', desc: "Detonates all deployed Robotters immediately, dealing 380% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 37 },
        { level: '5', desc: "Detonates all deployed Robotters immediately, dealing 400% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 36 },
        { level: '6', desc: "Detonates all deployed Robotters immediately, dealing 420% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 35 },
        { level: '7', desc: "Detonates all deployed Robotters immediately, dealing 450% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 34 },
        { level: 'M1', desc: "Detonates all deployed Robotters immediately, dealing 500% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1.5 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 33 },
        { level: 'M2', desc: "Detonates all deployed Robotters immediately, dealing 550% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 1.5 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 32 },
        { level: 'M3', desc: "Detonates all deployed Robotters immediately, dealing 600% of Mayer's ATK as Arts damage to nearby enemies and Stunning all hit targets for 2 seconds\nThe exploded Robotters will be recycled", spInit: 0, sp: 30 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Mayer's Badge", desc: `Operator Mayer has demonstrated a remarkable aptitude in combat with her multithreaded control of 'Meeboos.'\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Supporter Operator during field operations to exercise Summoner responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    sumx: { code: 'SUM-X', name: '"Meeboo" Control Terminal XP', stages: [
      { stage: 1, hp: '+80', atk: '+25', effect: 'Trait improved:\nThe first summoned unit does not consume deployment slots (The last summoned unit on the field does not return a deployment slot when retreated or defeated)' },
      { stage: 2, hp: '+100', atk: '+35', effect: 'Robotter improved:\nCan summon 5 Robotters; Enemies have -28 ASPD when blocked by Robotters' },
      { stage: 3, hp: '+120', atk: '+40', effect: 'Robotter improved:\nCan summon 5 Robotters; Enemies have -30 ASPD when blocked by Robotters' },
    ]},
  },
  story: `A Columbian Anaty robotics engineer, Mayer Stony joined Rhine Lab out of her wish to develop new technologies for Terra's betterment, achieving a position in the Engineering Section. During her time in R.L. however, Mayer becomes increasingly dissatistfied with the methodological and ideological conflict plaguing the consortium, particularly as several of R.L.'s projects are terminated due to Kristen Wright's opposition. To cope with the inhospitable work enviroment, Mayer created a trick alarm clock on her workshop that causes a "teensy bit of havoc", which is the first prototype of her magnum opus: remote-controlled robots in the shape of otters dubbed "Meeboos". Dr. Olivia Silence eventually noticed Mayer's creations and recommended them to R.L.'s top brass, and her Meeboos are brought into their service which remains to this day.\nFollowing the Diabolic Crisis, Mayer follows Dr. Silence as she left R.L. (while completely left in the dark on the details surrounding the Crisis) and joined Rhodes Island, where she was given a position in the Engineering Department and her very own workshop called the "Lutra Workshop". Mayer cooperated with Closure, another genius in robotics, on various occassions; THRM-EX is one of the results of their cooperation. Still, Mayer wishes to one day develop a self-aware A.I. for her Meeboos to make them more like Closure's Operational Platforms; despite running into several setbacks and failures, Mayer never gives up and continues her effort.`,
  profile: `Mayer was born in Columbia and was a member of the Rhine Lab Research Lab. She is the inventor of the "Meeboo" wire control system. She is outstandingly capable and runs her own workshop called "Lutra." She is currently working with Rhodes Island to provide assistance with construction, planning, and development.`,
  records: [
    { title: 'Clinical Analysis', content: `Medical tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator has been in long-term contact with Originium and frequently works to process it. However, due to strict adherence to safety protocols, Operator has not yet displayed any signs of Oripathy.` },
    { title: 'Archive File 1', content: `Mayer frequently encountered Silence at Rhine headquarters since she was responsible for preparing, installing, and commissioning experimental devices for her. This was up until Silence abruptly disappeared which in turn caused this project to be terminated. Mayer often feels a sense of regret when reminded of this instance but had she known the true goal of the project, she would have pulled the plug herself.` },
    { title: 'Archive File 2', content: `Mayer possesses just the right mixture of a scientist's meticulous thinking and an engineer's hands-on mentality. If there's any downside to this, it's that she never has enough time. If you don't believe it,take a look in her personal dictionary. The word "idle" is missing.` },
    { title: 'Archive File 3', content: `The ideas within Mayer's head are volatile which makes it no surprise when she creates something eccentric. Out of her countless inventions, her prized and most cherished "masterpiece" is "Meeboo." Mayer diligently creates nameplates for each individual "Meeboo" and carefully cleans up its wreckage after it's served its purpose. It is clear that she really pours her heart and soul during the maintenance and operation each Meeboo despite their mechanical origins.` },
    { title: 'Archive File 4', content: `Since Meeboos take up so much space, Mayer's workshop is extremely cramped with causes her to devise ways to expand it. Despite having a room twice as large as anyone else's, she has managed to run out space after increasing Meeboo production. Mayer has begged the Doctor to increase her room's size which was denied by the logistics department due to fairness towards others. Despite this ban on room expansion, the Doctor nonetheless granted her extra space in the hangar to allow her to continue the production of her Meeboos.` },
    { title: 'Promotion Record', content: `So far, a total of 80 Meeboos have been constructed by Mayer. 20 of them are serving in Mayer's squad, while the others have been disassembled for various reasons. All available components have been installed on these models in service and are uniquely named by Mayer by their respective nameplates. Of the 20 Meeboos in service, there's a single on with an unknown serial number that Mayer uses both as a mobile workbench and an experimental prototype. Despite its advanced functioning, it is unarmed and useless for combat.` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/summoner-branch.png', factionIcon: '/icons/factions/rhine-lab.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/mayer/base.png', chibiSrc: '/operators/mayer/chibi.webm', chibiMoveSrc: '/operators/mayer/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 0.3, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'e2', label: 'Elite 2', src: '/operators/mayer/e2.png', chibiSrc: '/operators/mayer/chibi.webm', chibiMoveSrc: '/operators/mayer/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 0.3, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
    { id: 'skin1', label: 'Visionblazer in the Courtyard', src: '/operators/mayer/skin1.png', chibiSrc: '/operators/mayer/chibi-skin1.webm', chibiMoveSrc: '/operators/mayer/chibi-move-skin1.webm', chibiFraming: { scale: 2.23, offsetXPercent: 2.6, offsetYPercent: -18.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '幻象黑兔' },
  ],
  portrait: '/operators/mayer/portrait.png',
  portraitFocus: { y: -10.9, x: 53.2, zoom: 269 },
  summon: {
    name: 'Robotter',
    icon: '/operators/mayer/robotter.png',
    position: 'Melee',
    trait: 'Blocks 1 enemy',
    stats: { hp: 1950, atk: 444, def: 415, res: 0, block: 1, cost: 5, aspd: '1.25s', rdp: '10s' },
    range: [[2]],
    note: "Cannot be actively healed. Deployed through talent Robotter (Mayer can summon up to 5 Robotters at Elite 2). Reduces the ASPD of enemies it blocks by -25 (improved to -28/-30 via Mayer's SUM-X module).",
  },
}

export default mayer
