import type { Operator } from '../../types'

const vulcan: Operator = {
  name: 'Vulcan', fileNo: 'MN02', class: 'Defender', branch: 'Juggernaut', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Vulcan and Indra Recruitment Voucher'],
  faction: 'Minos', position: 'Melee', race: 'Forte', gender: 'Female', birthplace: 'Minos',
  birthday: 'April 30th', height: '170 cm', combatExp: '2 years',
  infectionStatus: 'Shows physical signs of Oripathy, infection confirmed by medical examination.',
  illustrator: 'neco',
  cv: { JP: 'Rina Satō', CN: 'Xiao Mi (credited as "Mimia" in EN)', EN: 'Katelyn Gault', KR: 'Jang Kyung-hee (credited as "Chang Kyung-hee" in EN)' },
  trait: 'Cannot be healed by allies',
  tags: ['Survival', 'Defense', 'DPS'],
  stats: { hp: 4088, atk: 870, def: 585, res: 10, block: 3, cost: 35, aspd: '1.6s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]], e2: [[2]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Self-Defense', desc: 'Restores HP by 4% of Max HP per second when the skill is activated', elite: 'E1' },
    { name: 'Self-Defense', desc: 'Restores HP by 5% (+1%) of Max HP per second when the skill is activated', elite: 'E1 (Potential 5)' },
    { name: 'Self-Defense', desc: 'Restores HP by 4% of Max HP per second and obtains 25% Physical Melee Dodge when the skill is activated', elite: 'E2' },
    { name: 'Self-Defense', desc: 'Restores HP by 5% (+1%) of Max HP per second and obtains 30% (+5%) Physical Melee Dodge when the skill is activated', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Guardian Mode', icon: '/operators/vulcan/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Block +1; DEF +120%; Restores HP by 5% of Max HP per second in addition',
      spInit: 40, sp: 50, dur: '30s', rank: 'M3',
      note: 'The HP regeneration stacks with Self-Defense and is unaffected by healing effect modifiers.',
      levels: [
        { level: '1', desc: 'Block +1; DEF +60%; Restores HP by 2% of Max HP per second in addition', spInit: 20, sp: 50, dur: '20s' },
        { level: '2', desc: 'Block +1; DEF +65%; Restores HP by 2% of Max HP per second in addition', spInit: 21, sp: 50, dur: '21s' },
        { level: '3', desc: 'Block +1; DEF +70%; Restores HP by 2% of Max HP per second in addition', spInit: 22, sp: 50, dur: '22s' },
        { level: '4', desc: 'Block +1; DEF +75%; Restores HP by 3% of Max HP per second in addition', spInit: 25, sp: 50, dur: '23s' },
        { level: '5', desc: 'Block +1; DEF +80%; Restores HP by 3% of Max HP per second in addition', spInit: 26, sp: 50, dur: '24s' },
        { level: '6', desc: 'Block +1; DEF +85%; Restores HP by 3% of Max HP per second in addition', spInit: 27, sp: 50, dur: '25s' },
        { level: '7', desc: 'Block +1; DEF +90%; Restores HP by 4% of Max HP per second in addition', spInit: 30, sp: 50, dur: '26s' },
        { level: 'M1', desc: 'Block +1; DEF +100%; Restores HP by 4% of Max HP per second in addition', spInit: 33, sp: 50, dur: '27s' },
        { level: 'M2', desc: 'Block +1; DEF +110%; Restores HP by 4% of Max HP per second in addition', spInit: 37, sp: 50, dur: '28s' },
        { level: 'M3', desc: 'Block +1; DEF +120%; Restores HP by 5% of Max HP per second in addition', spInit: 40, sp: 50, dur: '30s' },
      ],
    },
    {
      name: 'Combat Mode', icon: '/operators/vulcan/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Block -1; Attack Interval slightly increases; ATK +150%; Restores HP by 10% of Max HP when attacking and attacks all targets blocked',
      spInit: 40, sp: 50, dur: '30s', rank: 'M3',
      note: "Combat Mode increases Vulcan's attack interval by 0.4 seconds.\nContrary to the wording, Vulcan does not need to block the enemies for her attacks with Combat Mode to hit them. Rather, Vulcan's attacks hit multiple targets in range equal to her block count.",
      levels: [
        { level: '1', desc: 'Block -1; Attack Interval slightly increases; ATK +65%; Restores HP by 5% of Max HP when attacking and attacks all targets blocked', spInit: 20, sp: 50, dur: '20s' },
        { level: '2', desc: 'Block -1; Attack Interval slightly increases; ATK +70%; Restores HP by 5% of Max HP when attacking and attacks all targets blocked', spInit: 21, sp: 50, dur: '21s' },
        { level: '3', desc: 'Block -1; Attack Interval slightly increases; ATK +75%; Restores HP by 5% of Max HP when attacking and attacks all targets blocked', spInit: 22, sp: 50, dur: '22s' },
        { level: '4', desc: 'Block -1; Attack Interval slightly increases; ATK +85%; Restores HP by 6% of Max HP when attacking and attacks all targets blocked', spInit: 25, sp: 50, dur: '23s' },
        { level: '5', desc: 'Block -1; Attack Interval slightly increases; ATK +90%; Restores HP by 6% of Max HP when attacking and attacks all targets blocked', spInit: 26, sp: 50, dur: '24s' },
        { level: '6', desc: 'Block -1; Attack Interval slightly increases; ATK +95%; Restores HP by 6% of Max HP when attacking and attacks all targets blocked', spInit: 27, sp: 50, dur: '25s' },
        { level: '7', desc: 'Block -1; Attack Interval slightly increases; ATK +105%; Restores HP by 7% of Max HP when attacking and attacks all targets blocked', spInit: 30, sp: 50, dur: '26s' },
        { level: 'M1', desc: 'Block -1; Attack Interval slightly increases; ATK +120%; Restores HP by 8% of Max HP when attacking and attacks all targets blocked', spInit: 33, sp: 50, dur: '27s' },
        { level: 'M2', desc: 'Block -1; Attack Interval slightly increases; ATK +135%; Restores HP by 9% of Max HP when attacking and attacks all targets blocked', spInit: 37, sp: 50, dur: '28s' },
        { level: 'M3', desc: 'Block -1; Attack Interval slightly increases; ATK +150%; Restores HP by 10% of Max HP when attacking and attacks all targets blocked', spInit: 40, sp: 50, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Vulcan's Badge", desc: 'Appointed as Defender Operator during field operations to exercise Juggernaut responsibilities' },
    unyx: {
      code: 'UNY-X', name: 'The Shaper', stages: [
        { stage: 1, hp: '+210', def: '+35', effect: 'New trait: Takes 15% less damage from enemies blocked by this unit' },
        { stage: 2, hp: '+300', def: '+53', effect: 'Self-Defense improved: When skill is activated, immediately recovers 30% Max HP. Afterward, restores 4% Max HP per second and gains 25% Physical Melee Dodge while skill is active' },
        { stage: 3, hp: '+385', def: '+68', effect: 'Self-Defense improved: When skill is activated, immediately recovers 60% Max HP. Afterward, restores 4% Max HP per second and gains 25% Physical Melee Dodge while skill is active' },
      ],
    },
  },
  story: `Hailing from the land of Minos, Vulcan is a single-minded Forte blacksmith responsible for forging, maintaining, and repairing weapons for other Operators. Her unique fighting style relies heavily on her dependable equipment and prosthetics, which she is constantly repairing. Though she believes that those who cannot keep up with the times are doomed to obsolescence, Vulcan still forges steel at the anvil like blacksmiths of old. She becomes Ceobe's guardian and helps her in investigating a Minoan axe inscribed with her name, also giving her the nickname "Kay."`,
  profile: `Vulcan is a blacksmith from Minos who sought treatment at Rhodes Island after contracting Oripathy, ultimately reaching an agreement to become a part of the team.\nIn charge of smithing and maintaining weapons for other Operators, Vulcan also goes on missions when necessary.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n[Cell-Originium Assimilation] 18%\nHigh level of infection, obvious signs of Originium episodes on face and neck.\n[Blood Originium-Crystal Density] 0.38u/L\nInfection entering mid-stage, but currently unable to diagnose effects on the Operator.`,
    },
    {
      title: 'Archive File 1',
      content: `Vulcan has an unwelcoming attitude for a lady blacksmith.\nShe is not even remotely interested in anything not related to weaponry, and when it comes to armaments she's only a bit more talkative than usual.\nShe made the smithy Rhodes Island provided her into her own bedroom, which she almost never leaves unless she's got a mission.`,
    },
    {
      title: 'Archive File 2',
      content: `No one fights quite like Vulcan does. She relies on her dependable equipment and powerful prosthetics in combat. As such, she is constantly repairing her equipment. Gear gets damaged in battle, that's normal, but Vulcan has mastered the art of quick repair even under fire. Keeping equipment functional is essential to her battle tactics.\nIn contrast, most Medic Operators don't have a clue about blacksmithing.`,
    },
    {
      title: 'Archive File 3',
      content: `Vulcan always says those who can't keep up with the times are doomed to obsolescence.\nThe march of time has changed the smithing trade from the sweaty man hitting an anvil to an advanced automation engineer creating weapons at maximum efficiency.\nIn Vulcan's workshop, for instance, are several of the most advanced machines on the planet that are regularly improved. It is also in this secluded corner that all weapons at Rhodes Island are refined and upgraded.`,
    },
    {
      title: 'Archive File 4',
      content: `Still, the most eye-catching thing in Vulcan's smithy is not any of the advanced robotic machines, but the enormous anvil and furnace. Yes, the very "obsolescence" she spoke of.\nAnd yet, Vulcan still fires up the forge to hammer a piece of steel on the anvil, just like blacksmiths of old.\nOf course, that has nothing to do with making or maintaining our weaponry, and is more like a ritual, though she has never explained its meaning.\nPerhaps to her, those who can't keep up with times should become obsolete, but those who completely forsake tradition should not be called blacksmiths.`,
    },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/juggernaut-branch.png', factionIcon: '/icons/factions/minos.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/vulcan/base.png', chibiSrc: '/operators/vulcan/chibi.webm', chibiMoveSrc: '/operators/vulcan/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'neco' },
    { id: 'e2', label: 'Elite 2', src: '/operators/vulcan/e2.png', chibiSrc: '/operators/vulcan/chibi.webm', chibiMoveSrc: '/operators/vulcan/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'neco' },
    { id: 'skin1', label: 'Ignis', src: '/operators/vulcan/skin1.png', chibiSrc: '/operators/vulcan/chibi-skin1.webm', chibiMoveSrc: '/operators/vulcan/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'neco' },
  ],
  portrait: '/operators/vulcan/portrait.png',
  portraitFocus: { y: -2.4, x: 33.7, zoom: 365 },
}

export default vulcan
