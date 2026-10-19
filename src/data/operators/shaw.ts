import type { Operator } from '../../types'
import shawVoice from '../voices/shaw'

const shaw: Operator = {
  name: 'Shaw', fileNo: 'LM11', class: 'Specialist', branch: 'Push Stroker', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Lungmen', position: 'Melee', race: 'Zalak', gender: 'Female', birthplace: 'Lungmen',
  birthday: 'January 5th', height: '135 cm', combatExp: 'None', infectionStatus: 'Non-infected as confirmed by medical report.', illustrator: '阿鬼',
  cv: { JP: 'Ryō Hirohashi', CN: 'Xiao Sibai (credited as "Shi Haku" in EN)', EN: 'Harriet Carmichael', KR: 'Seo Eun-bi' },
  voice: shawVoice,
  trait: 'Can attack all blocked enemies\nCan be deployed on Ranged Tiles',
  tags: ['Shift'],
  stats: { hp: 1785, atk: 580, def: 365, res: 15, block: 2, cost: 19, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Fireproof Suit', desc: 'RES +7', elite: 'E1' },
    { name: 'Fireproof Suit', desc: 'RES +15', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Steam Pump', icon: '/operators/shaw/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Pushes the target towards the attack direction greatly in the next attack, dealing 150% of ATK Physical damage', spInit: 0, sp: 5, rank: 'M3',
      levels: [
        { level: '1', desc: 'Pushes the target towards the attack direction slightly in the next attack, dealing 105% of ATK Physical damage', spInit: 0, sp: 6 },
        { level: '2', desc: 'Pushes the target towards the attack direction slightly in the next attack, dealing 110% of ATK Physical damage', spInit: 0, sp: 6 },
        { level: '3', desc: 'Pushes the target towards the attack direction slightly in the next attack, dealing 115% of ATK Physical damage', spInit: 0, sp: 6 },
        { level: '4', desc: 'Pushes the target towards the attack direction moderately in the next attack, dealing 124% of ATK Physical damage', spInit: 0, sp: 6 },
        { level: '5', desc: 'Pushes the target towards the attack direction moderately in the next attack, dealing 127% of ATK Physical damage', spInit: 0, sp: 6 },
        { level: '6', desc: 'Pushes the target towards the attack direction moderately in the next attack, dealing 130% of ATK Physical damage', spInit: 0, sp: 6 },
        { level: '7', desc: 'Pushes the target towards the attack direction moderately in the next attack, dealing 135% of ATK Physical damage', spInit: 0, sp: 6 },
        { level: 'M1', desc: 'Pushes the target towards the attack direction moderately in the next attack, dealing 140% of ATK Physical damage', spInit: 0, sp: 5 },
        { level: 'M2', desc: 'Pushes the target towards the attack direction moderately in the next attack, dealing 145% of ATK Physical damage', spInit: 0, sp: 5 },
        { level: 'M3', desc: 'Pushes the target towards the attack direction greatly in the next attack, dealing 150% of ATK Physical damage', spInit: 0, sp: 5 },
      ],
    },
    {
      name: 'High-Pressure Water Cannon', icon: '/operators/shaw/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately pushes all enemies in the two frontal grids towards the attack direction greatly, dealing 300% of ATK Physical damage to them', spInit: 0, sp: 17, rank: 'M3', range: [[2,1,1]],
      levels: [
        { level: '1', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction slightly, dealing 180% of ATK Physical damage to them', spInit: 0, sp: 20 },
        { level: '2', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction slightly, dealing 190% of ATK Physical damage to them', spInit: 0, sp: 20 },
        { level: '3', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction slightly, dealing 200% of ATK Physical damage to them', spInit: 0, sp: 20 },
        { level: '4', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction moderately, dealing 210% of ATK Physical damage to them', spInit: 0, sp: 20 },
        { level: '5', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction moderately, dealing 220% of ATK Physical damage to them', spInit: 0, sp: 20 },
        { level: '6', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction moderately, dealing 230% of ATK Physical damage to them', spInit: 0, sp: 20 },
        { level: '7', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction greatly, dealing 240% of ATK Physical damage to them', spInit: 0, sp: 20 },
        { level: 'M1', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction greatly, dealing 260% of ATK Physical damage to them', spInit: 0, sp: 19 },
        { level: 'M2', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction greatly, dealing 280% of ATK Physical damage to them', spInit: 0, sp: 18 },
        { level: 'M3', desc: 'Immediately pushes all enemies in the two frontal tiles towards the attack direction greatly, dealing 300% of ATK Physical damage to them', spInit: 0, sp: 17 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Shaw's Badge", desc: 'Appointed as Specialist Operator to exercise Push Stroker responsibilities' },
    pusy: { code: 'PUS-Y', name: 'Customized Firefighting Suit', stages: [
      { stage: 1, hp: '+130', atk: '+21', def: '+12', effect: 'Trait improved: Simultaneously attacks all blocked enemies; When blocking 2 or more enemies, increases shift level by 1. Can be deployed on ranged tiles' },
      { stage: 2, hp: '+160', atk: '+27', def: '+17', effect: 'Fireproof Suit improved: RES +20' },
      { stage: 3, hp: '+190', atk: '+33', def: '+22', effect: 'Fireproof Suit improved: RES +23' },
    ]},
  },
  story: `Don't underestimate this fast-talking Zalak serving as a firefighter in the Lungmen Fire Department; despite her small stature and seemingly harmless job, Shaw serves Rhodes Island as a surprisingly capable combatant, specializing in providing combat support with firefighting equipment such as fire axes and water hoses. She is also responsible for checking any potential fire hazard in the Rhodes Island landship including keeping pyromaniacs like Ifrit and Skyfire in check.`,
  profile: `Shaw, a firefighter of the Lungmen FD, has adapted firefighting skills to actual combat, providing a variety of new tactical options to Rhodes Island. Currently a member of a special ops squad, she offers expertise in firefighting and safety.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests for this Operator show clear outlines of internal organs, with no abnormal dark spots or shadows. No unusual traces of Originium particles present in the circulatory system, no signs of infection, confirming her as uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Shaw showed no signs of infection.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Shaw rarely comes into contact with Originium.`,
    },
    {
      title: 'Archive File 1',
      content: `Operator Shaw tends to get nervous easily. Introverted and slow to speak, she has a tendency to keep running her mouth once she gets going. When engaged in conversation, Shaw spends most of her time struggling to choose the right words, which wears her out quickly. She is a highly dedicated worker, committed to getting the job done, especially in scenarios involving fire or arson.`,
    },
    {
      title: 'Archive File 2',
      content: `The petite Shaw managed to win the trust of her peers with her diligence and professionalism in the field of firefighting. The huge fire rescue operation last winter more than proved Shaw's competence: When the irresponsible use of a space heater eventually set a whole building ablaze, Shaw made numerous incursions inside to rescue trapped victims, orchestrating a successful operation with zero casualties. That earned her a personal invite from Wei Yenwu, Chief Executive of Lungmen, as well as headlines in all the newspapers.\nWith Wei's and the L.G.D's support, Shaw was accepted into Rhodes Island for her expertise in fire safety and prevention. It was an obvious boon to the island, since most Operators have little to no knowledge of or training in firefighting. Shaw handily filled the gap.\nWhen Shaw had the chance to inspect the intricate passageways and firefighting equipment on the island, and after meeting certain Operators who wield fire Arts at will, she realized she faced a daunting task.`,
    },
    {
      title: 'Archive File 3',
      content: `To accommodate Shaw's daily tasks, the installation team at Rhodes Island provided her with convenient, portable firefighting devices and a thermometer, although the latter quickly overloaded and broke down. Operators Skyfire and Ifrit both denied responsibility for the demise of this extremely sensitive tool.\nTo combat this, Shaw decided to implement an effective, if rather old-fashioned technique: Make a list of the Operators most likely to start a fire, and initiate a firefighting program for the entire island. The first seminar commenced with the notable absence of Dr. Kal'tsit, where Shaw presented materials and slides (including various scenes of major fires and warning signs). The presentation was short, thanks to Shaw's famously fast rate of speech, and the raucous applause made it clear the audience had no clue what she had intended to communicate to them. (Some confessed to hearing a voice but being unable to locate the speaker).\nThis disappointing outcome only kept Shaw down for about half a day, when she realized that there are many setbacks in life, depression is the death of passion.`,
    },
    {
      title: 'Archive File 4',
      content: `Shaw reports her first memory of fire came from the tragic loss of a beloved fruit vendor to arson. That was when she realized a person can create a Catastrophe from will alone, but will alone won't resolve it. The idea of becoming a firefighting expert took root in her mind, as she hoped to save all the good things in life from the threat of fire. It also strengthened her resolve as a Rhodes Island Operator. When faced with a malefactor out to cause a Catastrophe, she is always willing to stand against it. To Shaw, safeguarding the people from the suffering of an unexpected crisis is as precious and worth protecting as the feeling she gets from buying a big, round apple.`,
    },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/push-stroker-branch.png', factionIcon: '/icons/factions/lungmen.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/shaw/base.png', chibiSrc: '/operators/shaw/chibi.webm', illustrator: '阿鬼' },
    { id: 'e2', label: 'Elite 2', src: '/operators/shaw/e2.png', chibiSrc: '/operators/shaw/chibi.webm', illustrator: '阿鬼' },
    { id: 'skin1', label: 'Cleansweeper in the Castle', src: '/operators/shaw/skin1.png', chibiSrc: '/operators/shaw/chibi-skin1.webm', illustrator: '阿鬼' },
  ],
  portrait: '/operators/shaw/portrait.png',
  portraitFocus: { y: -12.7, x: 49.7, zoom: 201 },
}

export default shaw
