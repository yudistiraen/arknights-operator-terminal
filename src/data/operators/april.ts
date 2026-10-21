import type { Operator } from '../../types'
import aprilVoice from '../voices/april'

const april: Operator = {
  name: 'April', fileNo: 'RB07', class: 'Sniper', branch: 'Marksman', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rim Billiton', position: 'Ranged', race: 'Cautus', gender: 'Female', birthplace: 'Rim Billiton',
  birthday: 'January 27th', height: '157 cm', combatExp: 'None', infectionStatus: "Originium crystals are present on the body's surface, confirmed Infected by medical examination.", illustrator: 'れおえん',
  cv: { JP: 'Minami Tanaka', CN: 'Song Yuanyuan (credited as "Esther" in EN)', EN: 'Tajinae Turner', KR: 'Park Ji-yoon' },
  voice: aprilVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1280, atk: 528, def: 160, res: 0, block: 1, cost: 13, aspd: '1s', rdp: '70s' },
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
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Experienced Hunter', desc: 'Redeployment Time -15 seconds', elite: 'E1' },
    { name: 'Experienced Hunter', desc: 'Redeployment Time -20 seconds, DP Cost -1', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Precise Shooting', icon: '/operators/april/skill-1.png', activation: 'Auto', recovery: 'Offensive',
      desc: 'Increases the ATK of next attack to 230%', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: 'Increases the ATK of next attack to 170%', spInit: 0, sp: 5 },
        { level: '2', desc: 'Increases the ATK of next attack to 175%', spInit: 0, sp: 5 },
        { level: '3', desc: 'Increases the ATK of next attack to 180%', spInit: 0, sp: 5 },
        { level: '4', desc: 'Increases the ATK of next attack to 185%', spInit: 0, sp: 4 },
        { level: '5', desc: 'Increases the ATK of next attack to 190%', spInit: 0, sp: 4 },
        { level: '6', desc: 'Increases the ATK of next attack to 195%', spInit: 0, sp: 4 },
        { level: '7', desc: 'Increases the ATK of next attack to 200%', spInit: 0, sp: 4 },
        { level: 'M1', desc: 'Increases the ATK of next attack to 210%', spInit: 0, sp: 3 },
        { level: 'M2', desc: 'Increases the ATK of next attack to 220%', spInit: 0, sp: 3 },
        { level: 'M3', desc: 'Increases the ATK of next attack to 230%', spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Flexible Camouflage', icon: '/operators/april/skill-2.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, ATK +100% and gain Camouflage', spInit: 0, sp: 0, dur: '26s', rank: 'M3',
      levels: [
        { level: '1', desc: 'After deployment, ATK +20% and gain Camouflage', spInit: 0, sp: 0, dur: '18s' },
        { level: '2', desc: 'After deployment, ATK +25% and gain Camouflage', spInit: 0, sp: 0, dur: '18s' },
        { level: '3', desc: 'After deployment, ATK +30% and gain Camouflage', spInit: 0, sp: 0, dur: '18s' },
        { level: '4', desc: 'After deployment, ATK +40% and gain Camouflage', spInit: 0, sp: 0, dur: '19s' },
        { level: '5', desc: 'After deployment, ATK +50% and gain Camouflage', spInit: 0, sp: 0, dur: '19s' },
        { level: '6', desc: 'After deployment, ATK +60% and gain Camouflage', spInit: 0, sp: 0, dur: '19s' },
        { level: '7', desc: 'After deployment, ATK +70% and gain Camouflage', spInit: 0, sp: 0, dur: '20s' },
        { level: 'M1', desc: 'After deployment, ATK +80% and gain Camouflage', spInit: 0, sp: 0, dur: '22s' },
        { level: 'M2', desc: 'After deployment, ATK +90% and gain Camouflage', spInit: 0, sp: 0, dur: '24s' },
        { level: 'M3', desc: 'After deployment, ATK +100% and gain Camouflage', spInit: 0, sp: 0, dur: '26s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "April's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    mary: { code: 'MAR-Y', name: 'Hi-Fi Headset', stages: [
      { stage: 1, hp: '+110', atk: '+23', effect: 'New trait: When there are ground enemies within range, ASPD +8' },
      { stage: 2, hp: '+160', atk: '+28', effect: 'Experienced Hunter improved: Redeployment Time -25 seconds, DP Cost -2' },
      { stage: 3, hp: '+190', atk: '+32', effect: 'Experienced Hunter improved: Redeployment Time -28 seconds, DP Cost -2' },
    ]},
  },
  story: `The Rim Billitonian Cautus Aerlie was raised by her parents' company after their death in a working accident and was trained in marksmanship, eventually becoming a skilled huntress. After contracting Oripathy, Aerlie was forced to resign and decided to leave her hometown, which she doesn't regret. She then joined Rhodes Island to find a new calling in her life, taking up the codename "April" from the title of her favorite song. She shows interest in fashion and befriended Orchid and Utage who have similar interests.`,
  profile: `A hunter from Rim Billiton, lost her job due to Oripathy before making her way to Rhodes Island.\nHas never received formal training. All indicators read average. Her previous occupation suggested an affinity for sniper training, and she currently serves as a Sniper Operator.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 5%\nSome mild crystallization visible on her back.\n[Blood Originium-Crystal Density] 0.17u/L\nThe Operator reports she avoided dangerous environments with significant Originium exposure risk, but living in such poor conditions for so long ultimately caused her infection to worsen.`,
    },
    {
      title: 'Archive File 1',
      content: `She has a real urban feel to her, always going around with her stereo playing.\nVery extroverted, she gets along with everyone.\nShe is always looking to improve her lot in life, and follows trends closely. She is often seen chatting with Utage and Orchid.`,
    },
    {
      title: 'Archive File 2',
      content: `Because of the highly developed mining industry in Rim Billiton, the population is more likely to be exposed to Originium than in other countries. So most Rim Billiton companies have some kind of benefits structure for employees who get infected on the job to encourage them to work without fear.\nBut April's experience shows that not every company does provide such benefits. Or maybe because of a general revulsion for Infected people, the lower level functionaries of these companies may not have an interest in caring for them, no matter what policies the upper management may put in place to keep people working.\nWhether April was forced out of Rim Billiton because her benefits weren't worth the paper they were printed on, or because a bad actor worked against her, we can't know. And it's clear she hasn't investigated it herself. Of course, it doesn't really matter, in the end. Even if it is the latter, it wouldn't be easy for April to go recover what is owed her, considering the situation of the Infected.`,
    },
    {
      title: 'Archive File 3',
      content: `If Rhodes Island held an interior decorating competition (we won't), then April would likely take the prize.\nRhodes Island dormitories have a very plain design, serving only to provide occupants with a basic standard of living. Most operators have no further interest in design. But the company does not have any regulations against operators making interior modifications, as long as they don't damage the landship. In fact, Rhodes Island encourages them to do just that, in hopes of improving their lives. So while most operators live in very plain surroundings, there are some with a lot of character, and April's are among the best.\nHer room is exquisitely decorated. Posters, knick knacks, flower pots, and such all give the place a lively atmosphere, well-suited to her personality. We're very glad to see her adapting to and even loving life at Rhodes Island.`,
    },
    {
      title: 'Archive File 4',
      content: `There is a common misconception that once someone becomes Infected, they will then speak for the Infected, and always side with the Infected.\nThe truth is obviously different. Sudden changes are always difficult to accept. One who does try to accept such changes should be commended for her open-mindedness. But we shouldn't condemn someone for failing to accept the drastic, sudden change that is Oripathy infection.\nNot everyone would openly accept her identity as an Infected person, and every new Rhodes Island operator will receive psychological counseling about that identity to avoid excessive burdens and conflicts over the course of her work.\nThis is of particular concern for operators who come from civilian backgrounds like April, for whom discrimination against the Infected is deeply rooted. We must acknowledge the reality that some people, completely without malice, grow up in an environment that teaches them to dehumanize the Infected. And that these people, even if they become Infected themselves, do not see the Infected as peers. It is difficult to reverse that perception.\nLuckily, April's cheerful disposition and open-minded personality did her well. While she had some ingrained discrimination against the Infected and some resultant self-loathing, she quickly shed these ideas thanks to our counseling and the general environment of life in Rhodes Island. She immediately began to think about how she could help others who also suffered like her. While she may not be that impressive in combat, April's outlook and thinking are worthy of emulation.`,
    },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/rim-billiton.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/april/base.png', chibiSrc: '/operators/april/chibi.webm', chibiMoveSrc: '/operators/april/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.2, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'れおえん' },
    { id: 'e2', label: 'Elite 2', src: '/operators/april/e2.png', chibiSrc: '/operators/april/chibi.webm', chibiMoveSrc: '/operators/april/chibi-move.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.2, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'れおえん' },
    { id: 'skin1', label: 'Faraway Gaze', src: '/operators/april/skin1.png', chibiSrc: '/operators/april/chibi-skin1.webm', chibiMoveSrc: '/operators/april/chibi-move-skin1.webm', chibiFraming: { scale: 1.26, offsetXPercent: 4.2, offsetYPercent: 3.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'れおえん' },
  ],
  portraitFocus: { y: 10, x: 49.4, zoom: 305 },
}

export default april
