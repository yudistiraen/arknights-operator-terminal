import type { Operator } from '../../types'
import rangersVoice from '../voices/rangers'

const rangers: Operator = {
  name: 'Rangers', fileNo: 'A42', class: 'Sniper', branch: 'Marksman', rarity: 2, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op A4', position: 'Ranged', race: 'Savra', gender: 'Male', birthplace: 'Sargon',
  birthday: 'July 22nd', height: '179 cm', combatExp: '5 years', infectionStatus: 'Non-infected', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Shunsuke Takeuchi', CN: 'Kong Xin', EN: 'David Menkin', KR: 'Kim Ki-hyeon' },
  voice: rangersVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['Starter'],
  stats: { hp: 780, atk: 269, def: 66, res: 0, block: 1, cost: 7, aspd: '1s', rdp: '70s' },
  range: { base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]], e1: [[1,1,1,0],[2,1,1,1],[1,1,1,0]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [{ name: 'Anti-Air Master', desc: 'Increases ATK to 150% when attacking aerial targets', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `Don't underestimate this albino Savra; nicknamed "the Scimitar of the Bloody Valley", the old man was once a member of the Sargonian rangers who battled against the powerful lords. He carries the name of his organization and has a wealth of combat experience learnt from his past. As a skilled archer, Rangers joined Rhodes Island as part of Op A4, a comrade-in-arms to Durin, Noir Corne, and Yato. Outside the battlefield, he will share his adventurous stories to the younger generation so that the legacy of "the Rangers" shall be carried on.`,
  profile: `Rangers serves on Rhodes Island Op Reserve Team A4. A longtime veteran, he has traveled to many different places prior to serving in Rhodes Island's reserves. An expert archer, he still retains the characteristic agility and vigor of the Savras despite his advanced age.`,
  records: [
    { title: 'Clinical Analysis', content: `Radiological scan showed clear outlines of internal organs, with no visible abnormalities. Originium Particle Test of the circulatory system indicates no Oripathy. The subject is confirmed as uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Rangers shows no signs of Oripathy.\n[Blood Originium Crystal Density] 0.12u/L\nOperator Rangers seldom visits regions affected by Oripathy.` },
    { title: 'Archive File 1', content: `A master of camouflage and utilizing the environment to his advantage, Rangers favors pre-emptive strikes using the element of surprise over waiting for his prey.` },
    { title: 'Archive File 2', content: `Rangers is, without doubt, an excellent storyteller whose head is filled with fantastic tales and a desire to share them with others. After each morning class, many younger Operators offer "Grandpa Rangers" a glass of water and beg him to regale them.` },
    { title: 'Archive File 3', content: `Unlike that of most Savras, Rangers's skin provides no natural camouflage at all. But he is also more confident and more open to communication than most of his kin. Whether that is a blessing or a curse is strictly up to him to decide.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/op-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/rangers/base.png', chibiSrc: '/operators/rangers/chibi.webm', illustrator: 'Ryuuzaki Ichi' },
  ],
  portrait: '/operators/rangers/portrait.png',
  portraitFocus: { y: -7, x: 34, zoom: 250 },
}

export default rangers
