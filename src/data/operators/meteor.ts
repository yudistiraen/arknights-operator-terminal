import type { Operator } from '../../types'

const meteor: Operator = {
  name: 'Meteor', fileNo: 'ST02', class: 'Sniper', branch: 'Marksman', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Kazimierz', position: 'Ranged', race: 'Kuranta', gender: 'Female', birthplace: 'Kazimierz',
  birthday: 'May 1st', height: '164 cm', combatExp: '6 years', infectionStatus: 'Infection confirmed by medical examination.', illustrator: 'HUG',
  cv: { JP: 'Ayaka Fukuhara', CN: 'Hou Xiaofei (credited as "Fifi" in EN)', EN: 'Samantha Dakin', KR: 'Jo Kyoung-I' },
  trait: 'Attacks aerial enemies first',
  tags: ['DPS', 'Debuff'],
  stats: { hp: 1370, atk: 465, def: 165, res: 0, block: 1, cost: 12, aspd: '1s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Anti-Air Specialist', desc: 'Increases ATK to 120% when attacking aerial targets', elite: 'E1' },
    { name: 'Anti-Air Specialist', desc: 'Increases ATK to 125% (+5%) when attacking aerial targets', elite: 'E1 (Potential 5)' },
    { name: 'Anti-Air Specialist', desc: 'Increases ATK to 135% when attacking aerial targets', elite: 'E2' },
    { name: 'Anti-Air Specialist', desc: 'Increases ATK to 140% (+5%) when attacking aerial targets', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Armor Breaker', icon: '/operators/meteor/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: "The next attack deals 180% of ATK Physical damage and the target's DEF -35% for 5 seconds", spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: "The next attack deals 120% of ATK Physical damage and the target's DEF -20% for 5 seconds", spInit: 0, sp: 5 },
        { level: '2', desc: "The next attack deals 125% of ATK Physical damage and the target's DEF -20% for 5 seconds", spInit: 0, sp: 5 },
        { level: '3', desc: "The next attack deals 130% of ATK Physical damage and the target's DEF -20% for 5 seconds", spInit: 0, sp: 5 },
        { level: '4', desc: "The next attack deals 135% of ATK Physical damage and the target's DEF -25% for 5 seconds", spInit: 0, sp: 5 },
        { level: '5', desc: "The next attack deals 140% of ATK Physical damage and the target's DEF -25% for 5 seconds", spInit: 0, sp: 5 },
        { level: '6', desc: "The next attack deals 145% of ATK Physical damage and the target's DEF -25% for 5 seconds", spInit: 0, sp: 5 },
        { level: '7', desc: "The next attack deals 150% of ATK Physical damage and the target's DEF -30% for 5 seconds", spInit: 0, sp: 4 },
        { level: 'M1', desc: "The next attack deals 160% of ATK Physical damage and the target's DEF -31% for 5 seconds", spInit: 0, sp: 4 },
        { level: 'M2', desc: "The next attack deals 170% of ATK Physical damage and the target's DEF -32% for 5 seconds", spInit: 0, sp: 4 },
        { level: 'M3', desc: "The next attack deals 180% of ATK Physical damage and the target's DEF -35% for 5 seconds", spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Armor Breaker - Spread', icon: '/operators/meteor/skill-2.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'The next attack deals 200% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -40% for 5 seconds', spInit: 0, sp: 15, rank: 'M3',
      levels: [
        { level: '1', desc: 'The next attack deals 140% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -25% for 5 seconds', spInit: 0, sp: 20 },
        { level: '2', desc: 'The next attack deals 145% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -25% for 5 seconds', spInit: 0, sp: 20 },
        { level: '3', desc: 'The next attack deals 150% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -25% for 5 seconds', spInit: 0, sp: 20 },
        { level: '4', desc: 'The next attack deals 155% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -30% for 5 seconds', spInit: 0, sp: 19 },
        { level: '5', desc: 'The next attack deals 160% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -30% for 5 seconds', spInit: 0, sp: 19 },
        { level: '6', desc: 'The next attack deals 165% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -30% for 5 seconds', spInit: 0, sp: 19 },
        { level: '7', desc: 'The next attack deals 170% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -35% for 5 seconds', spInit: 0, sp: 18 },
        { level: 'M1', desc: 'The next attack deals 180% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -35% for 5 seconds', spInit: 0, sp: 17 },
        { level: 'M2', desc: 'The next attack deals 190% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -35% for 5 seconds', spInit: 0, sp: 16 },
        { level: 'M3', desc: 'The next attack deals 200% of ATK Physical damage to at most 5 enemies within range and the DEF of targets hit -40% for 5 seconds', spInit: 0, sp: 15 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Meteor's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    marx: { code: 'MAR-X', name: "Hunter's Knife", stages: [
      { stage: 1, hp: '+100', atk: '+22', effect: 'New trait: Increases ATK to 110% when attacking aerial targets' },
      { stage: 2, hp: '+150', atk: '+27', effect: 'Anti-Air Specialist improved: Increases ATK to 140% when attacking aerial targets' },
      { stage: 3, hp: '+180', atk: '+30', effect: 'Anti-Air Specialist improved: Increases ATK to 150% when attacking aerial targets' },
    ]},
  },
  profile: `Meteor is a former forest warden from Kazimierz, an amazing archer with extensive experience in tracking and wilderness survival.\nShe serves as a frontline sniper for Rhodes Island concurrent with her medical treatment.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n[Cell-Originium Assimilation] 5%\nCurrently no visible symptoms.\n[Blood Originium-Crystal Density] 0.24u/L\nMinor stage of infection, currently no discernible physical effects.` },
    { title: 'Archive File 1', content: `Meteor is an easy-going forest warden.\nTime was, she and her fellow wardens protected the endless forests of Kazimierz, until she contracted Oripathy and was forced into exile. She joined Rhodes Island after several stops in between.\nKind and caring, Meteor loves big get-togethers and often takes the lead herself. Despite her age, she is very reliable.` },
    { title: 'Archive File 2', content: `Meteor doesn't care much for electronic devices.\nTrying to get some gizmo to work is worse than having Oripathy to her. Naturally, coming to our island was quite a culture shock for her; more than most any other new operator.\nEven after all this time, she still avoids electronics.` },
    { title: 'Archive File 3', content: `As composite bows replace the traditional kind, Meteor bucks the trend by sticking to the old ways.\nIt is to her a commemoration of her past, the other forest wardens who fought with her, and her life in the woods.\nGiven her skill, she easily meets expected damage output metrics without the advantages provided by a composite bow.` },
    { title: 'Archive File 4', content: `After leaving the forest, Meteor wandered for a long time. She went endured the hardships of the modern world and saw how much the people feared Oripathy.\nNone of that made her lose faith, though. She finally found Rhodes Island and requested to serve as an operator while undergoing treatment. The island couldn't turn away a talent like her.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/kazimierz.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/meteor/base.png', chibiSrc: '/operators/meteor/chibi.webm', chibiMoveSrc: '/operators/meteor/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'HUG' },
    { id: 'e2', label: 'Elite 2', src: '/operators/meteor/e2.png', chibiSrc: '/operators/meteor/chibi.webm', chibiMoveSrc: '/operators/meteor/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'HUG' },
    { id: 'skin1', label: "Bard's Holiday", src: '/operators/meteor/skin1.png', chibiSrc: '/operators/meteor/chibi-skin1.webm', chibiMoveSrc: '/operators/meteor/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'HUG' },
    { id: 'skin2', label: 'Gwiazdcytrony', src: '/operators/meteor/skin2.png', chibiSrc: '/operators/meteor/chibi-skin2.webm', chibiMoveSrc: '/operators/meteor/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'HUG' },
  ],
}

export default meteor
