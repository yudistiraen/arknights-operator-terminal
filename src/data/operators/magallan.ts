import type { Operator } from '../../types'
import magallanVoice from '../voices/magallan'

const magallan: Operator = {
  name: 'Magallan', fileNo: 'RL06', class: 'Supporter', branch: 'Summoner', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhine Lab', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Columbia',
  birthday: 'October 17th', height: '160 cm', combatExp: 'None', infectionStatus: 'Originium crystals not present on the body. Confirmed uninfected by medical examination.', illustrator: 'NoriZC',
  cv: { JP: 'Mariya Ise', CN: 'Qu Zilan', EN: 'Maddie Matsumoto', KR: 'Kim Bo-na' },
  voice: magallanVoice,
  trait: 'Deals Arts damage\nCan use Summons in battles',
  tags: ['Support', 'Slow', 'DPS'],
  stats: { hp: 1103, atk: 469, def: 140, res: 20, block: 1, cost: 12, aspd: '1.6s', rdp: '70s' },
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
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Support Drone - Soaring Dragon', desc: "Can use up to 5 drones that do not block (max 3 deployed at once). Drones' effect changes based upon Skill.", elite: 'E2' },
    { name: 'Optical Refraction Accessories', desc: 'Drones gain Invisibility for 20 seconds after deployment (cannot be targeted by enemy ranged attacks)', elite: 'E2' },
  ],
  skills: [
    {
      name: 'High-Efficiency Freezing Module', icon: '/operators/magallan/skill-1.png', activation: 'Manual', recovery: 'Auto',
      desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 1 seconds\nActive: Instead of Slowing, Binds targets for 2.5 seconds. Retreats all drones after this effect ends', spInit: 20, sp: 30, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.7 seconds\nActive: Instead of Slowing, Binds targets for 1.6 seconds. Retreats all drones after this effect ends', spInit: 10, sp: 30, dur: '15s' },
        { level: '2', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.7 seconds\nActive: Instead of Slowing, Binds targets for 1.7 seconds. Retreats all drones after this effect ends', spInit: 11, sp: 30, dur: '15s' },
        { level: '3', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.7 seconds\nActive: Instead of Slowing, Binds targets for 1.8 seconds. Retreats all drones after this effect ends', spInit: 12, sp: 30, dur: '15s' },
        { level: '4', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.8 seconds\nActive: Instead of Slowing, Binds targets for 1.9 seconds. Retreats all drones after this effect ends', spInit: 13, sp: 30, dur: '15s' },
        { level: '5', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.8 seconds\nActive: Instead of Slowing, Binds targets for 2 seconds. Retreats all drones after this effect ends', spInit: 14, sp: 30, dur: '15s' },
        { level: '6', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.8 seconds\nActive: Instead of Slowing, Binds targets for 2.1 seconds. Retreats all drones after this effect ends', spInit: 15, sp: 30, dur: '15s' },
        { level: '7', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.9 seconds\nActive: Instead of Slowing, Binds targets for 2.2 seconds. Retreats all drones after this effect ends', spInit: 16, sp: 30, dur: '15s' },
        { level: 'M1', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.9 seconds\nActive: Instead of Slowing, Binds targets for 2.3 seconds. Retreats all drones after this effect ends', spInit: 17, sp: 30, dur: '15s' },
        { level: 'M2', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 0.9 seconds\nActive: Instead of Slowing, Binds targets for 2.4 seconds. Retreats all drones after this effect ends', spInit: 18, sp: 30, dur: '15s' },
        { level: 'M3', desc: 'Passive: Slows enemies within the Attack Range of this unit and drones every 3 seconds for 1 seconds\nActive: Instead of Slowing, Binds targets for 2.5 seconds. Retreats all drones after this effect ends', spInit: 20, sp: 30, dur: '15s' },
      ],
    },
    {
      name: 'Laser Mining Module', icon: '/operators/magallan/skill-2.png', activation: 'Manual', recovery: 'Auto',
      desc: "Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +150 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 38, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +60 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 50, dur: '15s' },
        { level: '2', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +65 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 49, dur: '15s' },
        { level: '3', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +70 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 48, dur: '15s' },
        { level: '4', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +80 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 47, dur: '15s' },
        { level: '5', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +85 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 46, dur: '15s' },
        { level: '6', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +90 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 45, dur: '15s' },
        { level: '7', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +100 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 44, dur: '15s' },
        { level: 'M1', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +115 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 42, dur: '15s' },
        { level: 'M2', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +130 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 40, dur: '15s' },
        { level: 'M3', desc: 'Passive: Drones may be deployed on melee tiles, dealing single-target Arts damage.\nActive: Magallan and her drones gain +150 ASPD, and drones gain AoE attacks. Retreats all drones after this effect ends.', spInit: 25, sp: 38, dur: '15s' },
      ],
    },
    {
      name: 'Armed Combat Module', icon: '/operators/magallan/skill-3.png', activation: 'Manual', recovery: 'Auto',
      desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +150% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 38, dur: '15s', rank: 'M3',
      note: "Armed Combat Module increases the area-of-effect of Soaring Dragon A's attacks to 1.25 tiles.",
      levels: [
        { level: '1', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +60% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 50, dur: '15s' },
        { level: '2', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +65% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 49, dur: '15s' },
        { level: '3', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +70% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 48, dur: '15s' },
        { level: '4', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +80% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 47, dur: '15s' },
        { level: '5', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +85% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 46, dur: '15s' },
        { level: '6', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +90% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 45, dur: '15s' },
        { level: '7', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +100% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 44, dur: '15s' },
        { level: 'M1', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +115% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 42, dur: '15s' },
        { level: 'M2', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +130% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 40, dur: '15s' },
        { level: 'M3', desc: "Passive: Drones may be deployed on ranged tiles, dealing AoE physical damage.\nActive: Magallan and her drones gain +150% ATK, and increases the AoE of drones' attacks. Retreats all drones after this effect ends.", spInit: 25, sp: 38, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Magallan's Badge", desc: 'Appointed as Supporter Operator to exercise Summoner responsibilities' },
    sumx: { code: 'SUM-X', name: 'Drone Control Module.P', stages: [
      { stage: 1, hp: '+100', atk: '+30', effect: 'New trait: The first summoned unit does not consume deployment slots (the last summoned unit on the field does not return a deployment slot when retreated or defeated)' },
      { stage: 2, hp: '+130', atk: '+40', effect: 'Optical Refraction Accessories improved: Drones gain Invisibility for 23 seconds after deployment. If Magallan is adjacent to the drone, she gains the same effect' },
      { stage: 3, hp: '+150', atk: '+50', effect: 'Optical Refraction Accessories improved: Drones gain Invisibility for 26 seconds after deployment. If Magallan is adjacent to the drone, she gains the same effect' },
    ]},
    sumy: { code: 'SUM-Y', name: 'Instructional Soaring Dragon Drone', stages: [
      { stage: 1, atk: '+25', def: '+25', effect: 'New trait: Can hold +3 additional summoned units and summoned unit deployment costs are reduced' },
      { stage: 2, atk: '+34', def: '+34', effect: 'Support Drone - Soaring Dragon improved: Can use up to 5 drones that do not block (max 4 deployed at once)' },
      { stage: 3, atk: '+40', def: '+40', effect: 'Support Drone - Soaring Dragon improved: Can use up to 5 stronger drones that do not block (max 4 deployed at once)' },
    ]},
  },
  story: `Venta Magallan, the Liberi field scientist and explorer of Rhine Lab's Scientific Investigation Section, had dreamed to explore Terra's terra incognita, particularly the Infy Icefield, since her childhood. Her employment to Rhine Lab. gives her the opportunity to realize that dream. During her tenure in R.L, Magallan developed modular flying support drones nicknamed the "Soaring Dragons" which can be used for various combat roles. Her strong curiosity and respect of native culture make her both an excellent scientist and a famous explorer in the Columbian science community.\n\nMagallan has been cooperating with various companies, including Rhodes Island, to prepare for an expedition to the north. As the Ursus route is completely shut down, she has to use the Sami route and cooperate with the Samifjod and their way of living. She is willing to become a part of Sami by exploring more of the land.`,
  profile: `Magallan is a field specialist employed by Rhine Lab, operating under a cooperation agreement with Rhodes Island. She is currently based with us as she prepares to launch a new expedition. Magallan is skilled in the operation of highly modular drones, using them for attack or support as the situation dictates.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Magallan shows no signs of Oripathy infection.\n\n[Blood Originium-Crystal Density] 0.14u/L\nRegularly operates in unknown environments, must take appropriate protective measures.`,
    },
    {
      title: 'Archive File 1',
      content: `[Originium Overview]\n"Lutra Workshop and Rhine Lab Development joined forces to create Magallan's custom-made exploration suit. It includes a wide variety of sensor systems, as well as an Egret-type support drone!"\nMulti-functional survey sensor systems.\nHigh temperature, low temperature, high pressure, all-environment work capability.\nHigh endurance, high efficiency, guaranteed operation time.\nError tolerance <1mm, meets the highest testing standards.\nImproved laser port for measurement/attack/radiation, one tool with many functions.\nInternal systems come with all the latest software for your convenience.\nEgret-type support drone\nPreinstalled modules: 4\nNumber of drones that can be controlled under normal operations: 2\nNumber of drones that can be controlled under [redacted] operations: 5\nBackup drones: 3\nBe sure to equip your drones as appropriate for the situation on the ground.\nModule list:\nR23 module: High efficiency refrigeration module. Default operations impede targets, capable of freezing on activation.\nLRBD module: Laser mining module. Default operations fire an industrial laser at the target, capable of increasing power output for a short time upon activation.\n#66 module: armed attack module, default operations make use of the survey apparatus's assault port. When enabled, attacks a target within range. Activation greatly upgrades the assault port.\n[Redacted] module: effects unknown, please contact the module technician for more information.\nHuh? What's this supposed to be? Am I not a Caster? What's going on?\n— Caster Operator Z.R.'s note upon reading the report.`,
    },
    {
      title: 'Archive File 2',
      content: `As a field specialist for Rhine Lab, Magallan has participated in numerous exploration projects over quite some time. her primary area of interest is sparsely populated ice sheets. Whether this is out of personal fascination or habit at this point, we cannot say.\nNormally, she sets out in early summer so as to return before the start of winter, gathering data herself from the unexplored land to the north of Rhine. During the last round of personnel transfers, Magallan received new orders and she began preparing to move her base of operations to Rhodes Island.\nPrior to arriving at Rhodes Island, Magallan's resupply was largely handled by experienced couriers, thanks mostly to secuirty concerns. As such, she is familiar with a number of logistics firms. Interestingly, Magallan seems to have a good relationship with the boss of Penguin Logistics, "Emperor," such that some operators have expressed envy.\nWhy exactly that is, no one can be certain.`,
    },
    {
      title: 'Archive File 3',
      content: `Magallan's cabin was built with a small secret compartment, which upon getting approval from the operator responsible for corridor engineering was allowed to be expanded, without changing the internal structure of the ship. We won't have any problems with illegal alterations like with Mayer's workshop.\nThe compartment remains rather small, but is big enough for Magallan to conduct her research. One wall was turned into a large display screen, showing the results of her recent expeditions, including her notes and theories, as well as photos of important places taken in the field. Specimens and test results litter the room, and although she has done her best to keep it all organized, one can't help but feel a little overwhelmed by it all.\nRhine Lab's research projects involve a lot of cutting-edge technology, and some projects are beyond the capacity of even Rhodes Island's researchers to analyze. If somebody cried out in the canteen, "are those Rhine Lab people all geniuses?" It wouldn't even raise many eyebrows. But if you climbed up into Magallan's lab compartment, you'd realize it's not just raw talent that produces such results, it's also an entire cabin's worth of effort.\nAnd more.`,
    },
    {
      title: 'Archive File 4',
      content: `Whether the Black Flow of Bolívar, the highland plains of Kazimierz, or the undersea volcanoes of Iberia, the world is full of innumerable places worth exploring. But the otherwise curious eyes of men are blinded by their personal conflicts.\nMagallan stands alone in a desolate ice desert. There, far away from friends and relatives, in an inhospitable environment, she has nothing but ice and snow. And even though she brings back plenty of valuable research data, there are still so many people who cannot understand the choices she makes. But to her, Magallan's goals have always been crystal clear, and she never doubted her choices for a second.\nA song she heard as a child echoes in her ears, a song about the people of the far north now long forgotten. The last verse of the song speaks of the end, when everything was lost, now buried deep, deep under the ice. The ancient facts have since become legend, and failed to engrave themselves into the collective consciousness to be carried forward as the great deeds of the past.\nThese legendary folk songs became the little Magallan's dreams. When she was a child, people praised her; when she was a youth, people doubted her; as an adult, people criticized her. No one could understand her choices, but Magallan remains motivated by her love of knowledge and the pursuit of her dreams.\nRhine Lab opened the door to her and, upon accepting her application, she chose the code name she uses to this day: "Magallan."`,
    },
    {
      title: 'Promotion Record',
      content: `"Magallan? A researcher... I remember her. She's very open-minded, good to all of her colleagues. But you know, survey operators go out on extremely long missions. I imagine there's very few people who could put a face to her name. Maybe Ifrit and Muelsyse are the only exceptions."\n"They get along very well. After all, there aren't many people at Rhine Lab who can settle Ifrit down."\n"And Muelsyse, that Muelsyse... Can you imagine what Magallan and Ifrit call her? Hahaha... Ah, hah. They call her Mewmew."\n"Iffy and Mewmew."\n"Magallan the researcher... all I can say is she's really something special."\n"You could say she's really something different from us science punks."`,
    },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/summoner-branch.png', factionIcon: '/icons/factions/rhine-lab.png',
  summon: [
    {
      name: 'Soaring Dragon F',
      icon: '/operators/magallan/soaring-dragon-f.png',
      position: 'Low/High',
      trait: "Cannot block enemies. Periodically Slows enemies in surrounding tiles; Binds them instead while Magallan's Skill is active. Retreats all drones when the skill ends.",
      stats: { hp: 2000, atk: 0, def: 200, res: 0, block: 0, cost: 3, aspd: '1s', rdp: '10s' },
      range: [[2]],
      note: 'Active while Skill 1 (High-Efficiency Freezing Module) is equipped. Cannot be actively healed or made invulnerable.',
    },
    {
      name: 'Soaring Dragon L',
      icon: '/operators/magallan/soaring-dragon-l.png',
      position: 'Low',
      trait: "Cannot block enemies; attacks in melee dealing single-target Arts damage. Deals splash damage to adjacent tiles while Magallan's Skill is active.",
      stats: { hp: 2000, atk: 509, def: 200, res: 0, block: 0, cost: 7, aspd: '1s', rdp: '10s' },
      range: [[2]],
      note: 'Active while Skill 2 (Laser Mining Module) is equipped; can only be deployed on melee tiles. Cannot be actively healed or made invulnerable.',
    },
    {
      name: 'Soaring Dragon A',
      icon: '/operators/magallan/soaring-dragon-a.png',
      position: 'High',
      trait: "Cannot block enemies; attacks at range dealing AoE Physical damage over a 0.75-tile radius (1.25 tiles while Magallan's Skill is active).",
      stats: { hp: 2000, atk: 753, def: 200, res: 0, block: 0, cost: 8, aspd: '2.3s', rdp: '10s' },
      range: [[2]],
      note: 'Active while Skill 3 (Armed Combat Module) is equipped; can only be deployed on ranged tiles. Cannot be actively healed or made invulnerable.',
    },
  ],
  skins: [
    { id: 'base', label: 'Base', src: '/operators/magallan/base.png', chibiSrc: '/operators/magallan/chibi.webm', chibiMoveSrc: '/operators/magallan/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: -0.8, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'e2', label: 'Elite 2', src: '/operators/magallan/e2.png', chibiSrc: '/operators/magallan/chibi.webm', chibiMoveSrc: '/operators/magallan/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: -0.8, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin1', label: 'Shaved-Ice Memories', src: '/operators/magallan/skin1.png', chibiSrc: '/operators/magallan/chibi-skin1.webm', chibiMoveSrc: '/operators/magallan/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: -0.8, offsetYPercent: 2.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
  ],
  portrait: '/operators/magallan/portrait.png',
  portraitFocus: { y: -5.7, x: 30.1, zoom: 344 },
}

export default magallan
