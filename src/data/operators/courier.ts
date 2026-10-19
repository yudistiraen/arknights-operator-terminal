import type { Operator } from '../../types'
import courierVoice from '../voices/courier'

const courier: Operator = {
  name: 'Courier', fileNo: 'JC04', class: 'Vanguard', branch: 'Pioneer', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Credit Store'],
  faction: 'Karlan Trade', position: 'Melee', race: 'Itra', gender: 'Male', birthplace: 'Kjerag',
  birthday: 'March 5th', height: '177 cm', combatExp: '2 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: '竜崎いち',
  cv: { JP: 'Daisuke Hirakawa', CN: 'Xu Xiang (credited as "Ethan" in EN)', EN: 'Joseph May', KR: 'Choi Seung-hun' },
  voice: courierVoice,
  trait: 'Blocks 2 enemies',
  tags: ['DP-Recovery', 'Defense'],
  stats: { hp: 1985, atk: 435, def: 382, res: 0, block: 2, cost: 12, aspd: '1.05s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Karlan Patrol', desc: 'DEF +8% when two or more enemies are blocked', elite: 'E1' },
    { name: 'Karlan Patrol', desc: 'DEF +16% when two or more enemies are blocked', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Charge β', icon: '/operators/courier/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Instantly gains 9 Deployment Points.', spInit: 13, sp: 30, rank: 'M3',
      levels: [
        { level: '1', desc: `Instantly gains 9 Deployment Points.`, spInit: 8, sp: 39 },
        { level: '2', desc: `Instantly gains 9 Deployment Points.`, spInit: 8, sp: 38 },
        { level: '3', desc: `Instantly gains 9 Deployment Points.`, spInit: 8, sp: 37 },
        { level: '4', desc: `Instantly gains 9 Deployment Points.`, spInit: 9, sp: 36 },
        { level: '5', desc: `Instantly gains 9 Deployment Points.`, spInit: 9, sp: 35 },
        { level: '6', desc: `Instantly gains 9 Deployment Points.`, spInit: 9, sp: 34 },
        { level: '7', desc: `Instantly gains 9 Deployment Points.`, spInit: 10, sp: 33 },
        { level: 'M1', desc: `Instantly gains 9 Deployment Points.`, spInit: 11, sp: 32 },
        { level: 'M2', desc: `Instantly gains 9 Deployment Points.`, spInit: 12, sp: 31 },
        { level: 'M3', desc: `Instantly gains 9 Deployment Points.`, spInit: 13, sp: 30 },
      ],
    },
    {
      name: 'Command - Defense', icon: '/operators/courier/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +80%', spInit: 17, sp: 30, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +30%`, spInit: 12, sp: 40, dur: '15s' },
        { level: '2', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +33%`, spInit: 12, sp: 39, dur: '15s' },
        { level: '3', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +37%`, spInit: 12, sp: 38, dur: '15s' },
        { level: '4', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +40%`, spInit: 13, sp: 37, dur: '15s' },
        { level: '5', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +43%`, spInit: 13, sp: 36, dur: '15s' },
        { level: '6', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +47%`, spInit: 13, sp: 35, dur: '15s' },
        { level: '7', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +50%`, spInit: 14, sp: 34, dur: '15s' },
        { level: 'M1', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +60%`, spInit: 15, sp: 33, dur: '15s' },
        { level: 'M2', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +70%`, spInit: 16, sp: 32, dur: '15s' },
        { level: 'M3', desc: `Immediately gains 3 Deployment Points\nGradually obtains 8 DP during the skill duration; DEF +80%`, spInit: 17, sp: 30, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Courier's Badge", desc: 'Appointed as Vanguard Operator to exercise Pioneer responsibilities' },
    solx: { code: 'SOL-X', name: 'Low Temperature Resistant Communication Equipment', stages: [
      { stage: 1, hp: '+135', def: '+24', effect: 'Trait improved: Blocks 2 enemies; Gains +8% ATK and DEF while blocking enemies' },
      { stage: 2, hp: '+170', def: '+27', effect: 'Karlan Patrol improved: Gains +21% DEF when blocking two or more enemies' },
      { stage: 3, hp: '+195', def: '+30', effect: 'Karlan Patrol improved: Gains +24% DEF when blocking two or more enemies' },
    ]},
  },
  story: `The Kjeragian Itra, Weiss, is an employee of Karlan Trade, and he lends his service as part of Karlan Trade's cooperation with Rhodes Island, under the codename "Courier." With his keen sense of the terrain and resilience, Courier is a capable combatant. His cheerful and friendly character, as well as the faint fragrance on his letters, makes him well-liked by many. He is committed to carrying out his duty as a bodyguard for Ensia and his master Enciodes together with Matterhorn and Degenbrecher, having been saved by Enciodes when he got lost in the snow as a child.`,
  profile: `Courier is a member of the Karlan Trade Co. LTD, and was born in Kjerag. He is part of the cooperation agreement between the Karlan Trade Co. and Rhodes Island, by which he helps carry out missions for the latter.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n\n[Cell-Originium Fusion Rate] 0%\nOperator shows no signs of infection at this time.\n\n[Blood Crystal Density] 0.12u/L\nThis Operator has rarely come into contact with Originium.` },
    { title: 'Archive File 1', content: `Courier's keen sense of the terrain and environment is entirely from years of experience. In fact, when he was a child, he was not only unfamiliar with the roads, but he would even get lost. The way he tells it, he once got snowbound when he went out to play and almost didn't make it home alive. Fortunately, SilverAsh was hunting nearby and found him, thus returning him to safety. Because of this, no matter who might try to convince or threaten him to turn his back on SilverAsh, Courier will forever be the man's most faithful supporter.` },
    { title: 'Archive File 2', content: `As a race living in the cold regions of the plateau, the Itra have extraordinary resilience and endurance. Courier is no exception. Still, he likes to keep a low profile. He does everything with skill and with ease, and never lets anyone sees the limits of his abilities. Even SilverAsh is unaware of just what this Itra is capable of.` },
    { title: 'Archive File 3', content: `People enjoy having their letters delivered by Courier. Not only thanks to his attractive face and sunny disposition, but also because the letters he delivers have a faint fragrance about them. When the topic comes up, Courier will immediately change the subject. If pressed on it, he will hem and haw and his face will blush, a side of Courier very rarely seen.` },
    { title: 'Archive File 4', content: `Courier rarely loses his signature faint smile, though it should be noted that he has another side——a calm, tranquil, and peaceful side characteristic of one from the snowlands. Only his enemies and his most trusted friends get the chance to see that side of him. If he loses his smile while talking to you, that can only mean one thing——he regards you as a dear friend.` },
    { title: 'Promotion Record', content: `Most of the scars on Courier's body came from the people of Kjerag rather than beasts. After all, as an important man, SilverAsh has many enemies that want him dead. Courier always confronts these people in the dark. As for the fights with these rebels, only Courier's scars tell the tale——Courier himself says nary a word.` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/karlan-trade.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/courier/base.png', chibiSrc: '/operators/courier/chibi.webm', illustrator: '竜崎いち' },
    { id: 'e2', label: 'Elite 2', src: '/operators/courier/e2.png', chibiSrc: '/operators/courier/chibi.webm', illustrator: '竜崎いち' },
    { id: 'skin1', label: 'New Routes', src: '/operators/courier/skin1.png', chibiSrc: '/operators/courier/chibi-skin1.webm', illustrator: '竜崎いち' },
    { id: 'skin2', label: 'Speechless Sound', src: '/operators/courier/skin2.png', chibiSrc: '/operators/courier/chibi-skin2.webm', illustrator: '竜崎いち' },
  ],
  portrait: '/operators/courier/portrait.png',
  portraitFocus: { y: -3.7, x: 53.2, zoom: 375 },
}

export default courier
