import type { Operator } from '../../types'

const noirCorne: Operator = {
  name: 'Noir Corne', fileNo: 'A43', class: 'Defender', branch: 'Protector', rarity: 2, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op A4', position: 'Melee', race: 'Oni', gender: 'Male', birthplace: 'Higashi',
  birthday: 'August 30th', height: '180 cm', combatExp: '8 years', infectionStatus: 'Infected', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Kengo Kawanishi', CN: 'Zhaokun Liu', EN: 'Ben Cura', KR: 'Ryu Seung-gon' },
  trait: 'Blocks 3 enemies',
  tags: ['Starter'],
  stats: { hp: 1670, atk: 240, def: 315, res: 0, block: 3, cost: 14, aspd: '1.2s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Improved Armor', desc: 'Max HP and DEF +12%', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `The Oni codenamed "Noir Corne" has a rather up-and-down life journey. He hails from an infamous clan of Higashi who has been trying to dissociate himself of the clan's past. But during the Higashi civil war, he was conscripted to be an assassin who was involved in numerous battles such as the "The Bloody Hunt of Nine," the "Kujin-gari", and he was quite unpleasant with his job. However, his life changed when he encountered his opponent Yato who too shared the same target. Following his surrender over her, there was a rather "romantic" moment – the two decided to desert the army after sparing their target and fled the country forever.\n\nNow a senior combat personnel of Rhodes Island, Noir Corne is currently a member of the Op A4 along with Durin, Rangers and, most importantly, Yato. He is well-known for wearing his mask all the time without taking off, but to him, he is doing that all for Yato's sake likely as a sign of friendship. As it turns out, Noir is a very friendly person who can get along with others, especially his juniors, just fine. Perhaps one day, he is even willing to share with you the mystery behind his mask.`,
  profile: `One of Rhodes Island's core Operators. On the battlefield, Noir Corne rushes to the vanguard to protect his teammates, but back at the Ark, he quietly dedicates himself to logistical duties.`,
  records: [
    { title: 'Clinical Analysis', content: `Radiological scan showed blurred outlines of internal organs with visible abnormalities. Originium Particle Test of circulation system indicated Oripathy. The subject is confirmed to be infected.\n\n[Cell-Originium Assimilation] 11%\nNo major infection symptoms have yet appeared.\n[Blood Originium-Crystal Density] 0.22u/L\nSeverity of infection remains low, with no major hindrance on motor functions.` },
    { title: 'Archive File 1', content: `A veteran Operator of Rhodes Island in both age and experience, Noir Corne's habit of wearing a mask often makes him seem unapproachable. However, those who converse with him quickly find that he is an easygoing, brotherly figure who gets along well with his juniors and never touts his seniority.` },
    { title: 'Archive File 2', content: `Noir Corne keeps a huge collection of masks in his room. He'll wear the most suitable mask for each occasion.\nThe mask he is seen with most frequently also seems to be his favorite. In his own words, "This one best suits Rhodes Island's ambience."\nBy the way, his mask does not hide any terrible secrets.` },
    { title: 'Archive File 3', content: `The most peculiar thing about Noir Corne's personality is his caution around Yato – not fear, but a conspicuous, careful deference so as to avoid angering her – which has spawned plenty of gossip among the operators.\nHowever, neither their backgrounds nor their interactions seem to clarify why.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/protector-branch.png', factionIcon: '/icons/factions/op-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/noir-corne/base.png', chibiSrc: '/operators/noir-corne/chibi.webm', illustrator: 'Ryuuzaki Ichi' },
  ],
  portrait: '/operators/noir-corne/portrait.png',
  portraitFocus: { y: -5, x: 65, zoom: 270 },
}

export default noirCorne
