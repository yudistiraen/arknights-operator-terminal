import type { Operator } from '../../types'
import glaucusVoice from '../voices/glaucus'

const glaucus: Operator = {
  name: 'Glaucus', fileNo: 'R128', class: 'Supporter', branch: 'Decel Binder', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Iberia', position: 'Ranged', race: 'Undisclosed', gender: 'Female', birthplace: 'Ægir Region',
  birthday: 'July 27th', height: '159 cm', combatExp: '4 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: '下野宏铭',
  cv: { JP: 'Ai Nonaka', CN: 'Zhang Wen (credited as "Cuo" in EN)', EN: 'Erica Mendez', KR: 'Jung Hae-eun' },
  voice: glaucusVoice,
  trait: 'Deals Arts damage and Slows the target for a short time',
  tags: ['Slow', 'Crowd-Control'],
  stats: { hp: 1267, atk: 505, def: 100, res: 20, block: 1, cost: 15, aspd: '1.9s', rdp: '70s' },
  range: {
    base: [
      [0,1,1,1,1,0],
      [0,1,2,1,1,0],
      [0,1,1,1,1,0],
    ],
    e1: [
      [0,1,1,1,1,0],
      [0,1,2,1,1,0],
      [0,1,1,1,1,0],
    ],
    e2: [
      [0,1,1,1,1,0],
      [0,1,2,1,1,0],
      [0,1,1,1,1,0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Countermeasure Device', desc: 'Attacks Drone units first, and ATK increases to 125% when attacking Drone units', elite: 'E1' },
    { name: 'Countermeasure Device', desc: 'Attacks Drone units first, and ATK increases to 135% (+5%) when attacking Drone units', elite: 'E1 (Potential 5)' },
    { name: 'Countermeasure Device', desc: 'Attacks Drone units first, and ATK increases to 150% when attacking Drone units', elite: 'E2' },
    { name: 'Countermeasure Device', desc: 'Attacks Drone units first, and ATK increases to 155% (+5%) when attacking Drone units', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Binary Reload', icon: '/operators/glaucus/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +50%, each attack hits extra target', spInit: 20, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%, each attack hits extra target', spInit: 0, sp: 35, dur: '16s' },
        { level: '2', desc: 'ATK +20%, each attack hits extra target', spInit: 2, sp: 35, dur: '17s' },
        { level: '3', desc: 'ATK +20%, each attack hits extra target', spInit: 4, sp: 35, dur: '18s' },
        { level: '4', desc: 'ATK +30%, each attack hits extra target', spInit: 6, sp: 35, dur: '19s' },
        { level: '5', desc: 'ATK +30%, each attack hits extra target', spInit: 8, sp: 35, dur: '20s' },
        { level: '6', desc: 'ATK +30%, each attack hits extra target', spInit: 10, sp: 35, dur: '21s' },
        { level: '7', desc: 'ATK +40%, each attack hits extra target', spInit: 12, sp: 35, dur: '22s' },
        { level: 'M1', desc: 'ATK +43%, each attack hits extra target', spInit: 14, sp: 35, dur: '23s' },
        { level: 'M2', desc: 'ATK +46%, each attack hits extra target', spInit: 16, sp: 35, dur: '24s' },
        { level: 'M3', desc: 'ATK +50%, each attack hits extra target', spInit: 20, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Counter EMP', icon: '/operators/glaucus/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 400% ATK as Arts damage and are Bound for 6 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 20, sp: 30, rank: 'M3',
      range: [
        [0,0,0,1,0,0,0],
        [0,0,1,1,1,0,0],
        [0,1,1,1,1,1,0],
        [1,1,1,2,1,1,1],
        [0,1,1,1,1,1,0],
        [0,0,1,1,1,0,0],
        [0,0,0,1,0,0,0],
      ],
      note: 'The damage dealt against Drones are unaffected by Countermeasure Device.',
      levels: [
        { level: '1', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 200% ATK as Arts damage and are Bound for 3.5 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 10, sp: 40 },
        { level: '2', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 220% ATK as Arts damage and are Bound for 3.5 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 10, sp: 39 },
        { level: '3', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 240% ATK as Arts damage and are Bound for 3.5 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 10, sp: 38 },
        { level: '4', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 260% ATK as Arts damage and are Bound for 4 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 13, sp: 37 },
        { level: '5', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 280% ATK as Arts damage and are Bound for 4 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 13, sp: 36 },
        { level: '6', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 300% ATK as Arts damage and are Bound for 4 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 13, sp: 35 },
        { level: '7', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 320% ATK as Arts damage and are Bound for 4.5 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 16, sp: 34 },
        { level: 'M1', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 340% ATK as Arts damage and are Bound for 5 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 17, sp: 33 },
        { level: 'M2', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 360% ATK as Arts damage and are Bound for 5.5 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 18, sp: 32 },
        { level: 'M3', desc: 'Releases a shockwave in an area around this unit. All hit enemies receive 400% ATK as Arts damage and are Bound for 6 seconds. If the target is a Drone, it will receive double damage and be Stunned', spInit: 20, sp: 30 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Glaucus's Badge", desc: 'Appointed as Supporter Operator to exercise Decel Binder responsibilities' },
    decx: { code: 'DEC-X', name: 'Powered Exoskeleton', stages: [
      { stage: 1, hp: '+90', atk: '+30', effect: 'New trait: SP recovery +0.2/sec when there are enemies within range' },
      { stage: 2, hp: '+110', atk: '+40', effect: 'Countermeasure Device improved: Prioritizes attacking Drones; Increases ATK to 165% when attacking Drones' },
      { stage: 3, hp: '+120', atk: '+45', effect: 'Countermeasure Device improved: Prioritizes attacking Drones; Increases ATK to 175% when attacking Drones' },
    ]},
  },
  story: `An Iberian Aegir who joined Rhodes Island as a Raythean weapon tester, Glaucus suffers from a hereditary disease that causes her lower body to have only half the strength of a normal adult and atrophies her muscles. She has to use a powered exoskeleton to make up for deficiencies in mobility, which sparked her interest in technology. It was through Closure's referral that Glaucus became a Raythean weapon tester. She has displayed astonishing talent in the areas of electrical application and electromagnetism. Her body produces antibodies capable of rendering nerve paralyzers and hallucinogens ineffective, though conventional poisons still work, and she is one of the few Operators willing to try Blue Poison's desserts. She is also noted to be friends with Deepcolor and holds reverence for Skadi, although rumors of her relatives being involved in a heretical organization should be dismissed. Glaucus operates the Raythean Franker, a hand-held EMP device originally used to jam communication equipment but modified to be an effective weapon against drones. Unfortunately, the Raythean Franker also damages surrounding devices. In addition to conducting research on cutting-edge weapon modifications, Glaucus also carries out aerial assault missions when required.`,
  profile: `Glaucus was born in the Ægir Region, but left at an early age to wander about. By chance, she happened to join Rhodes Island and is now a Raythean cutting-edge weapon tester.\nIn addition to performing research on cutting-edge weapon modification, Glaucus also carries out assaults on air missions when required.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nGlaucus shows no signs of Oripathy.\n[Blood Originium-Crystal Density] 0.11u/L\nGlaucus very rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `Glaucus's methods in combat are very unusual. This is probably due to her weapon. She personally doesn't seem to do much. Instead, those vexing enemy drones just drop to the ground wherever she goes, it is unclear how this was achieved. Although she can quite reliably manage the drones, I personally wish she would be more mindful of her surroundings. After all, if she keeps having to dip into her own pockets to help her fellow operators repair the facilities after battle, she's going to run into long-term money issues...\n— Anonymous Operator` },
    { title: 'Archive File 2', content: `Glaucus's internal evaluation is very interesting. It is unknown if this is just her nature or if she's just used to going with the flow, but as a newcomer, Glaucus does not speak much. Though she has quickly integrated herself with other operators, in the majority of situations, she prefers to listen and not speak. When speaking is required of her, she is smooth and evasive, and reveals very little of her actual thinking. She has also been admonished for repeatedly spacing out during meetings. According to the results of her current observation, it is only when discussing technology and machinery with Vulcan, Mayer, and Closure that Glaucus expresses her opinions with any enthusiasm. It is with Closure's referral that Glaucus became a Raythean weapon tester. She has displayed astonishing talent in the areas of electrical application and electromagnetism.` },
    { title: 'Archive File 3', content: `According to her health report, Glaucus's lower body only has half the strength of a normal adult and her muscles continue to atrophy. Naturally, her exoskeletal equipment is designed to make up for deficiencies in mobility.\nAs Glaucus herself tells it, her muscular atrophy is due to a hereditary disease passed down in her family. Even in a special ecological environment such as the Ægir Region, incidence of such hereditary disease is rare and there is currently no treatment available.\nHowever she does not seem dispirited by her situation. On the contrary, her passion for technology seems to come from the exoskeletal equipment designed to help her overcome these hardships.\nSomething worth mentioning is that Glaucus was born with antibodies that fight against irritants and poisons. Apart from conventional poisons, nerve paralyzers and hallucinogens are essentially ineffective. Glaucus is eager to accompany the medics' research. To put it more precisely, she pretends to understand what they're saying and nods along. Sometimes they are concerned whether she is even really following along with what they're saying...` },
    { title: 'Archive File 4', content: `[Observation Supplemental Report]\nGlaucus is one of the few operators willing to try Blue Poison's desserts. She is also friends with Deepcolor, though most of the time she just watches Deepcolor paint. She seems to have some kind of reverence for Skadi. Apart from this, she spends a great amount of time in her room performing weapon maintenance and adjustment. There is very little activity related to things she is personally interested in. Even more rarely does she leave her room.\nIn short, she is a somewhat dull and awkward child who prefers silently doing her own things.\nAs a result, I believe that the allegation that Glaucus and her relatives are involved in a secret heretical organization in the Ægir Region is not related to her current operational performance. I hope that the Justice Division has reservations about acting on this.\n—— ■■■` },
    { title: 'Promotion Record', content: `Glaucus's weapon, "Raythean Franker," didn't in fact originally have such an outrageous function. It could even be said to have been a defective product. When it was originally designed, it was only intended to disrupt enemy communications. Afterawards, it was discovered that this weapon's high frequency electromagnetic spectrum capabilities could not be controlled. The first thing that was damaged was the communications device in the user's own pocket. As a result, it was abandoned. It was Glaucus who took a look at it during an overhaul of her exoskeletal equipment and took it back to Rhodes Island for a very low price. Unexpectedly, after some modifications performed by Glaucus, it was able to inflict powerful destructive power against enemy machines. However, it also damaged a large amount of our own equipment. Is this why Silence and Mayer suggested that Glaucus should work on her own?\nWhether this operator can shoulder the burden of individual missions is judged solely on objective conditions and must never be mixed with personal factors.\n—— Kal'tsit` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/decel-binder-branch.png', factionIcon: '/icons/factions/iberia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/glaucus/base.png', chibiSrc: '/operators/glaucus/chibi.webm', chibiMoveSrc: '/operators/glaucus/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.2, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'e2', label: 'Elite 2', src: '/operators/glaucus/e2.png', chibiSrc: '/operators/glaucus/chibi.webm', chibiMoveSrc: '/operators/glaucus/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.2, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Exterminator in the Square', src: '/operators/glaucus/skin1.png', chibiSrc: '/operators/glaucus/chibi-skin1.webm', chibiMoveSrc: '/operators/glaucus/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: -2.8, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
  ],
  portrait: '/operators/glaucus/portrait.png',
  portraitFocus: { y: 18, x: 59.1, zoom: 340 },
}

export default glaucus
