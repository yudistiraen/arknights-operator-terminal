import type { Operator } from '../../types'

const click: Operator = {
  name: 'Click', fileNo: 'R140', class: 'Caster', branch: 'Mech-Accord', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Zalak', gender: 'Female', birthplace: 'Undisclosed',
  birthday: 'May 9th', height: '144 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'れおえん',
  cv: { JP: 'Yuuko Kurose', CN: 'Zhang Hong (credited as "Elivia" in EN)', EN: 'Leona Renee', KR: 'Park Seon-young' },
  trait: "Controls a Drone to deal Arts damage to an enemy (equal to 20% of the Mech-Accord Caster's ATK); When the Drone continuously attacks the same enemy, its damage will increase (+15%) (up to 110% of the operator's ATK)",
  tags: ['DPS', 'Crowd-Control'],
  stats: { hp: 1440, atk: 375, def: 120, res: 20, block: 1, cost: 20, aspd: '1.3s', rdp: '70s' },
  range: { base: [[1, 1, 1], [2, 1, 1], [1, 1, 1]], e1: [[1, 1, 1, 0], [2, 1, 1, 1], [1, 1, 1, 0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Coordinated', desc: 'Click and her Drones gain +6 ASPD', elite: 'E1' },
    { name: 'Coordinated', desc: 'Click and her Drones gain +12 ASPD', elite: 'E2' },
  ],
  skills: [
    {
      name: 'ATK Up β', icon: '/operators/click/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +20%`, spInit: 0, sp: 40, dur: '25s' },
        { level: '2', desc: `ATK +25%`, spInit: 0, sp: 40, dur: '25s' },
        { level: '3', desc: `ATK +30%`, spInit: 0, sp: 40, dur: '25s' },
        { level: '4', desc: `ATK +35%`, spInit: 0, sp: 37, dur: '25s' },
        { level: '5', desc: `ATK +40%`, spInit: 0, sp: 37, dur: '25s' },
        { level: '6', desc: `ATK +45%`, spInit: 0, sp: 37, dur: '25s' },
        { level: '7', desc: `ATK +50%`, spInit: 5, sp: 37, dur: '25s' },
        { level: 'M1', desc: `ATK +60%`, spInit: 5, sp: 37, dur: '25s' },
        { level: 'M2', desc: `ATK +70%`, spInit: 5, sp: 37, dur: '25s' },
        { level: 'M3', desc: `ATK +80%`, spInit: 10, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Synchronized Attack', icon: '/operators/click/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack Range expands, ATK +70%. Releases Drone to attack enemies, and grants self and Drone a 27% chance to Stun enemies for 1 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator', spInit: 20, sp: 45, dur: '30s', rank: 'M3', range: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]],
      levels: [
        { level: '1', desc: `Attack Range expands, ATK +40%. Releases Drone to attack enemies, and grants self and Drone a 20% chance to Stun enemies for 0.4 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 0, sp: 45, dur: '20s' },
        { level: '2', desc: `Attack Range expands, ATK +43%. Releases Drone to attack enemies, and grants self and Drone a 20% chance to Stun enemies for 0.4 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 0, sp: 45, dur: '21s' },
        { level: '3', desc: `Attack Range expands, ATK +46%. Releases Drone to attack enemies, and grants self and Drone a 20% chance to Stun enemies for 0.4 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 0, sp: 45, dur: '22s' },
        { level: '4', desc: `Attack Range expands, ATK +49%. Releases Drone to attack enemies, and grants self and Drone a 23% chance to Stun enemies for 0.4 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 5, sp: 45, dur: '23s' },
        { level: '5', desc: `Attack Range expands, ATK +52%. Releases Drone to attack enemies, and grants self and Drone a 23% chance to Stun enemies for 0.4 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 5, sp: 45, dur: '24s' },
        { level: '6', desc: `Attack Range expands, ATK +55%. Releases Drone to attack enemies, and grants self and Drone a 23% chance to Stun enemies for 0.4 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 5, sp: 45, dur: '25s' },
        { level: '7', desc: `Attack Range expands, ATK +58%. Releases Drone to attack enemies, and grants self and Drone a 23% chance to Stun enemies for 0.7 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 10, sp: 45, dur: '26s' },
        { level: 'M1', desc: `Attack Range expands, ATK +62%. Releases Drone to attack enemies, and grants self and Drone a 27% chance to Stun enemies for 0.7 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 13, sp: 45, dur: '27s' },
        { level: 'M2', desc: `Attack Range expands, ATK +66%. Releases Drone to attack enemies, and grants self and Drone a 27% chance to Stun enemies for 0.7 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 16, sp: 45, dur: '28s' },
        { level: 'M3', desc: `Attack Range expands, ATK +70%. Releases Drone to attack enemies, and grants self and Drone a 27% chance to Stun enemies for 1 seconds\nThe Drone locks onto an enemy until the enemy is defeated or until the skill is over, then returns to the Operator`, spInit: 20, sp: 45, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Click's Badge", desc: 'Appointed as Caster Operator to exercise Mech-accord Caster responsibilities' },
    funy: { code: 'FUN-Y', name: 'Big Feline Desensitization Experiment', stages: [
      { stage: 1, atk: '+15', def: '+10', effect: "Trait improved: Attack with Drones to deal Arts damage. Drone deals more damage when it attacks the same enemy again (deals up to 120% of Operator's ATK as damage)" },
      { stage: 2, atk: '+20', def: '+13', effect: 'Coordinated improved: This unit and Drones gain +15 ASPD' },
      { stage: 3, atk: '+25', def: '+15', effect: 'Coordinated improved: This unit and Drones gain +18 ASPD' },
    ]},
  },
  story: `The Zalak girl Click is an independent content creator who films natural scenery and wilderness survival. However, broken equipment and her technician moving to another city caused her projects to fall through, leading to financial troubles. To address these issues, Click joined Rhodes Island, where she provides support from the rear and records battle footage. Although not Infected, Click has a peculiar trait of her eyes turning red, and she also has a phobia of certain Felines she considers frightening.`,
  profile: `Operator Click, an independent video producer who is popular online, mostly shoots content of natural scenery and survival in the wilderness. She decided on her own to join Rhodes Island and serves as a Caster, but primarily works on providing support from the rear and recording battle footage.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Click has no signs of Originium infections.\n\n[Blood Originium-Crystal Density] 0.09u/L\nOperator Click rarely comes in contact with Originium.` },
    { title: 'Archive File 1', content: `Thanks to the emergency of intercity networks and portable photography devices, taking videos and sharing them with friends is not a novel concept. Despite the fact that network transmission range is limited and uploaded videos lack the fidelity of physical photos or videotapes, this new activity has gained traction online and continues to be very trendy. Click was one of the first people to join the ranks of online video producers and launched a wide variety of content. After many attempts, she finally found her niche as an accomplished producer of outdoors videos.` },
    { title: 'Archive File 2', content: `Click hasn't shown any particular animosity towards Felines, but based upon her past experiences, she instinctively keeps her distance. On occasions, she will warn non-Felines to stay away from them, as if every Feline on Terra is her enemy. But in reality, Click is not afraid of Mousse, or Jessica. She'll only go into hiding in the presence of Felines like Indra or SilverAsh. Even if she tries to define her phobia towards Feline, all she can really muster up is, "they look really scary."` },
    { title: 'Archive File 3', content: `Before joining Rhodes Island, Click was struggling through a little financial problem – her photography equipment had broken down. She had hired someone to retrofit the unmanned photography drone she keeps around her. Setting aside the cost of the retrofitting and repair, the technician had moved to work in another nomadic city, and the money she had on hand was not enough to support a venture to another city. Without her drone, not only did her planned shooting sessions fell through, but her living expenses over the coming weeks also became a significant issue. In order to earn a living, Click applied to become a video producer for a pharmaceutical, thinking that she'd make some quick money, find the technician, fix her drone, then continue with her online career.\nThe rest is history – she now stays at Rhodes Island.\n\nThe reason is actually very simple. The people here not only helped repair her drone, but even made a few technical upgrades that she never would've thought about before. Now, the drone is more sensitive, sturdier, and even comes with a small amount of firepower for self-defense purposes. Thus, after renewing her employment contract and adding some filming permission, Click stayed on Rhodes Island and became an operator.` },
    { title: 'Archive File 4', content: `In Terra, producing outdoors videos alone is a daunting task. Outside the relative safety of the cities, even an infant can hear the howling of danger. Therefore, before every filming session, Click spares no expense in doing her homework, assessing the danger level of the area, the weather status, the topography, and other factors. For this reason, after each video is finished, Click will attach highlights of roughly identical length, and in many cases, these highlights are even more popular than the original video. Of course, even all the preparation in the world cannot ensure that the video shoot goes smoothly. In the event that all her preparation is not enough to save her life, she has to resort to the one thing that can – herself, the one brave enough to face the storm.` },
    { title: 'Promotion Record', content: `"Upon further examination of Click's body, we found that the Originium concentration did not meet the criteria for infection. But one thing did catch our attention: when subjected to high levels of emotional stress, her iris pigmentation ratio changes and displays a distinct red color, and along with this, she becomes more aggressive. Therefore, for your safety, if you notice that her eyes have turned red and her behavior has become more aggressive when she's in your office, please press the emergency button immediately and we will... huh? That already happened?! Oh, um, then could you please describe her state at the time? ...Her toned changed, and, mhm, mhm... and no anomalies other than that. You can confirm that she didn't threaten your safety? After all, when we conducted our behavioral study, she... All right, thank you for your assistance. We may need to re-evaluate her status. Oh, that's right, you still have a meeting this afternoon, so please don't be late."\n—A recording related to Click` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/mech-accord-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/click/base.png', chibiSrc: '/operators/click/chibi.webm', illustrator: 'れおえん' },
    { id: 'e2', label: 'Elite 2', src: '/operators/click/e2.png', chibiSrc: '/operators/click/chibi.webm', illustrator: 'れおえん' },
    { id: 'skin1', label: 'Grave Thief', src: '/operators/click/skin1.png', chibiSrc: '/operators/click/chibi-skin1.webm', illustrator: 'れおえん' },
    { id: 'skin2', label: 'Holiday HD59', src: '/operators/click/skin2.png', chibiSrc: '/operators/click/chibi.webm', illustrator: 'れおえん' },
  ],
  portrait: '/operators/click/portrait.png',
  portraitFocus: { y: 1.9, x: 60, zoom: 257 },

}

export default click
