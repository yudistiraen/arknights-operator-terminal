import type { Operator } from '../../types'
import cuoraVoice from '../voices/cuora'

const cuora: Operator = {
  name: 'Cuora', fileNo: 'IU05', class: 'Defender', branch: 'Protector', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Columbia', position: 'Melee', race: 'Petram', gender: 'Female', birthplace: 'Undisclosed',
  birthday: 'Undisclosed', height: '148 cm', combatExp: 'None', infectionStatus: 'Showed physical signs of Originium, visible internal blotches, infection confirmed by medical report.', illustrator: 'Skade',
  cv: { JP: 'Ayaka Suwa', CN: 'Gelin Tian', EN: 'Xanthe Huynh', KR: 'Jung Hye-won' },
  voice: cuoraVoice,
  trait: 'Blocks 3 enemies',
  tags: ['Defense'],
  stats: { hp: 3105, atk: 365, def: 765, res: 0, block: 3, cost: 21, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Defense Specialist', desc: 'DEF +6%', elite: 'E1' },
    { name: 'Defense Specialist', desc: 'DEF +12%', elite: 'E2' },
  ],
  skills: [
    {
      name: 'DEF Up β', icon: '/operators/cuora/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'DEF +80%', spInit: 10, sp: 35, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: `DEF +20%`, spInit: 0, sp: 45, dur: '35s' },
        { level: '2', desc: `DEF +25%`, spInit: 0, sp: 45, dur: '35s' },
        { level: '3', desc: `DEF +30%`, spInit: 0, sp: 45, dur: '35s' },
        { level: '4', desc: `DEF +35%`, spInit: 5, sp: 40, dur: '35s' },
        { level: '5', desc: `DEF +40%`, spInit: 5, sp: 40, dur: '35s' },
        { level: '6', desc: `DEF +45%`, spInit: 5, sp: 40, dur: '35s' },
        { level: '7', desc: `DEF +50%`, spInit: 5, sp: 38, dur: '35s' },
        { level: 'M1', desc: `DEF +60%`, spInit: 5, sp: 37, dur: '35s' },
        { level: 'M2', desc: `DEF +70%`, spInit: 5, sp: 36, dur: '35s' },
        { level: 'M3', desc: `DEF +80%`, spInit: 10, sp: 35, dur: '35s' },
      ],
    },
    {
      name: 'Shell Defense', icon: '/operators/cuora/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking; Block +1; DEF +130%; Restores HP by 3% of Max HP per second', spInit: 0, sp: 40, dur: '30s', rank: 'M3',
      note: 'The HP regeneration is unaffected by healing effect modifiers and can still heal Cuora even if she becomes unable to be healed.',
      levels: [
        { level: '1', desc: `Stops attacking; Block +1; DEF +55%; Restores HP by 1% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: `Stops attacking; Block +1; DEF +60%; Restores HP by 1% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: '3', desc: `Stops attacking; Block +1; DEF +65%; Restores HP by 1% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: '4', desc: `Stops attacking; Block +1; DEF +75%; Restores HP by 1% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: '5', desc: `Stops attacking; Block +1; DEF +80%; Restores HP by 1% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: '6', desc: `Stops attacking; Block +1; DEF +85%; Restores HP by 1% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: '7', desc: `Stops attacking; Block +1; DEF +95%; Restores HP by 2% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: 'M1', desc: `Stops attacking; Block +1; DEF +105%; Restores HP by 2% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: 'M2', desc: `Stops attacking; Block +1; DEF +115%; Restores HP by 2% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
        { level: 'M3', desc: `Stops attacking; Block +1; DEF +130%; Restores HP by 3% of Max HP per second`, spInit: 0, sp: 40, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Cuora's Badge", desc: 'Appointed as Defender Operator to exercise Protector responsibilities' },
    prox: { code: 'PRO-X', name: 'Super Baseball Suit', stages: [
      { stage: 1, hp: '+130', def: '+60', effect: 'New trait: DEF +20% when blocking an enemy' },
      { stage: 2, hp: '+150', def: '+70', effect: 'Defense Specialist improved: DEF +15%' },
      { stage: 3, hp: '+170', def: '+80', effect: 'Defense Specialist improved: DEF +18%' },
    ]},
  },
  story: `Talk about hard-headed! An enigmatic and amnesiac Petram and the only known representative of her race in Rhodes Island, nothing is known about Cuora's background except that she is a fan of baseball (to the point of obsession). Currently, she works for R.I. as a defender who utilizes her baseball bat and lightweight but surprisingly very resilient backpack to protect her allies.`,
  profile: `Cuora, real identity unknown, missing history. Demonstrated remarkable defensive ability in battle. Now undertaking many missions for Rhodes Island as a Defender Operator.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulation, indicating signs of infection and confirming her as infected at this stage.\n\n[Cell-Originium Assimilation] 5%\nThe patient's condition is still manageable.\n\n[Blood Originium-Crystal Density] 0.2u/L\nLow level of Oripathy, currently not spreading.` },
    { title: 'Archive File 1', content: `When this enigmatic girl who has forgotten where she came from first became an official Rhodes Island Operator, she had to be taught to write her code name correctly, deliberately and diligently signing it on the dotted line.\nOperator Cuora is so innocent and naive, not even Oripathy could dim her spirits. And no one has the heart to reprimand her when she breaks a window for the hundredth time playing baseball.\nOperator Cuora clearly has an unusual passion for baseball. Her small round ball and black bat are practically her best buddies.\nSo, why baseball?` },
    { title: 'Archive File 2', content: `Baseball is a sport that originated in Victoria, grew massively popular in Columbia and spread out from there. The ordinary folk, especially kids, became diehard fans of the sport very quickly.\nAccording to Cuora, playing baseball strengthens the body and builds teamwork. She fiercely advocated playing the sport at Rhodes Island, even going so far as to hold basic drills, lessons, and even seminars on gamesmanship. It is obvious that she is very proficient and highly experienced with the game of baseball. And yet, observation showed that Cuora possesses very little actual combat experience. With her familiarity with baseball, she has been able to grasp mission plans, objectives and strategies far easier than one would expect from an inexperienced Operator.\nAfter positive responses to Cuora's baseball presentations, she gleefully unpacked her bag and handed every Operator present a baseball.\nHold on. How is it that Cuora uses that ordinary-looking backpack to in all those defensive maneuvers?` },
    { title: 'Archive File 3', content: `After examination by engineering and armory personnel, Cuora's backpack was determined to be an excellent defensive weapon. The protection it provides is on par with the standard tower shield issued to Rhodes Island Operators.\nIn fact, the front side of the backpack is not made from fabric, but an extremely lightweight metal alloy. In addition, the seams are sufficiently resilient that even sustained hammering cannot damage its integrity.\nAs for where she got the backpack, Cuora cheerfully replies that she doesn't remember. The investigation was halted when no lead on the weapon/item's origin could be found.\nFurther tests concluded that Cuora's baseball bat is made of the same alloy, despite being even more ordinary in appearance than the backpack.\nSo, how did the inexperienced Cuora, with her marvelous items, show up at Rhodes Island?` },
    { title: 'Archive File 4', content: `The personnel involved recalled that they found Cuora napping under the sun on the deck of Rhodes Island above the bridge. At the time, Rhodes Island had just finished a supply drop to a small Columbian town before sailing off. After waking up Cuora, interrogation revealed she had absolutely no idea how she got onboard. Later, a physical examination confirmed she had an early stage of Oripathy.\nCuora was accepted into Rhodes Island as an Infected under existing protocols. Her strange talent was discovered at that time.\nRegardless, Operator Cuora is now an official part of Rhodes Island. As for unraveling her past, it's on the to-do list.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/cuora/base.png', chibiSrc: '/operators/cuora/chibi.webm', illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/cuora/e2.png', chibiSrc: '/operators/cuora/chibi.webm', illustrator: 'Skade' },
    { id: 'skin1', label: 'Quadrangle', src: '/operators/cuora/skin1.png', chibiSrc: '/operators/cuora/chibi-skin1.webm', illustrator: 'Skade' },
    { id: 'skin2', label: 'Amongst Lotuses', src: '/operators/cuora/skin2.png', chibiSrc: '/operators/cuora/chibi-skin2.webm', illustrator: 'Studio Montagne' },
  ],
  portrait: '/operators/cuora/portrait.png',
  portraitFocus: { y: -8.1, x: 69.6, zoom: 264 },
}

export default cuora
