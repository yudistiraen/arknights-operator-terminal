import type { Operator } from '../../types'

const plume: Operator = {
  name: 'Plume', fileNo: 'LT05', class: 'Vanguard', branch: 'Charger', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Laterano', position: 'Melee', race: 'Liberi', gender: 'Female', birthplace: 'Laterano',
  birthday: 'October 28th', height: '158 cm', combatExp: '1 year', infectionStatus: 'Non-infected', illustrator: 'deel',
  cv: { JP: 'Rika Tachibana', CN: 'Vila', EN: 'Rosie Jones', KR: 'Yoon Mi-na' },
  trait: 'Obtain 1 DP after this unit defeats an enemy; Refunds the original DP Cost when retreated',
  tags: ['DPS', 'DP-Recovery'],
  stats: { hp: 1226, atk: 495, def: 279, res: 0, block: 1, cost: 10, aspd: '1s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Normal' },
  talents: [{ name: 'ATK Up', desc: 'ATK +8%', elite: 'E1' }],
  skills: [{
    name: 'Swift Strike α', icon: '/operators/plume/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +25%; ASPD +25', spInit: 0, sp: 45, rank: 'Rank 7', dur: '25s',
    levels: [
      { level: '1', desc: 'ATK +6%; ASPD +10', spInit: 0, sp: 55, dur: '25s' },
      { level: '2', desc: 'ATK +9%; ASPD +10', spInit: 0, sp: 54, dur: '25s' },
      { level: '3', desc: 'ATK +12%; ASPD +10', spInit: 0, sp: 53, dur: '25s' },
      { level: '4', desc: 'ATK +15%; ASPD +15', spInit: 0, sp: 50, dur: '25s' },
      { level: '5', desc: 'ATK +19%; ASPD +15', spInit: 0, sp: 49, dur: '25s' },
      { level: '6', desc: 'ATK +22%; ASPD +15', spInit: 0, sp: 48, dur: '25s' },
      { level: '7', desc: 'ATK +25%; ASPD +25', spInit: 0, sp: 45, dur: '25s' },
    ],
  }],
  modules: {},
  story: `Leia the Lateran Liberi was once a heroic and grateful soldier of the Pontifica Cohors Lateran. However, an Oripathy-related incident surrounding her coworker Backfire forced her to disobey her seniors, which led to her termination from the Pontifica. Leia has since enlisted herself to Rhodes Island in exchange for Backfire's treatment under the codename "Plume" as a security guard as well as one of the Doctor's personal bodyguards.`,
  profile: `Plume is a Liberi from Laterano, and former member of the Laterano Guard who bumbled her way out of Laterano and into Rhodes Island. She performs security, inspection, and loss prevention duties.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests on this Operator show clear outlines of internal organs, with no abnormal dark spots or shadows. No unusual traces of Originium particles present in the circulatory system, no signs of infection, confirming this operator as uninfected.\n\n[Cell-Originium Assimilation] 0%\nNo Oripathy.\n[Blood Originium-Crystal Density] 0.09 u/L\nSubject is rarely exposed to Originium.`,
    },
    {
      title: 'Archive File 1',
      content: `Any Liberi wanting to join the Laterano Guard needs to learn the art of the standard battle axe.\n\nPlume has speed but lacks strength, so swinging an axe was a challenge for her.\n\nWhen she joined the Defense Squad, she tried to build up her strength with regular training. Unfortunately, these exercises didn't make her strong enough for the hefty battle-axe tactics demanded of her. Not only did she fail to earn good marks in her training, she made many high-profile mistakes in her practical lessons, such as mishandling her weapon and destroying public property.\n\nPlume did not let these setbacks get to her. She calmly analyzed her performance to find out where she went wrong. After seeking guidance from other members of the Guard, she took their advice and started doing exercises focused on battle axe technique and attack speed.\n\nAfter abandoning the brute force route and focusing on technique, Plume worked hard to create a simple but effective battle style. She darts swiftly around the battlefield, launching quick offensive strikes, downing her targets just as quickly.\n\nAlthough she is not strong enough for head-on assault missions, Plume can fulfill all the basic duties of an Operator. Whether on offense or defense, Plume can hold her own, all while keeping high spirits and a strong will.`,
    },
    {
      title: 'Archive File 2',
      content: `Plume has no life outside of work. It may be that she is still adjusting to life at Rhodes Island. Either way, she is working hard to reconcile herself as both a Laterano guard and a Rhodes Islander.\n\nIn the former role, she is serious, determined, loyal, and proud. With no distinction between her work and private lives. She could even see her work as a form of entertainment.\n\nBut after joining Rhodes Island, she began to see the appeal of having a life outside of work.\n\nAccording to Plume, Rhodes Island doesn't have some aloof aristocracy she needs to put her life on the line to protect (though she believes such people don't actually need protection), and life is not as regimented and ritualized as she is used to. Diverse individuals with all personality types can fill the halls, and there's no distinguishing rank among them. Everyone has their own lifestyle--this has had a tremendous impact on her.\n\nPlume tried to maintain her Laterano Guard ways of thinking, but her sharp eye is dazzled by all of the colorful characters around her. She has been unable to ignore this diversity.\n\nIn fact, Plume has said she is considering changing her image. We see this sort of thing whenever a new Operator is starting to integrate themselves into Rhodes Island life.\n\nPerhaps she could start by smiling more?`,
    },
    {
      title: 'Archive File 3',
      content: `But why did Plume leave Laterano for Rhodes Island?\n\nShe has never explained why, saying only that she "is not authorized to disclose that information for the time being."\n\nParticularly right before and right after the incident, it seemed she was still involved with two senior Operators who had left Laterano.\n\nAt present, only part of the eyewitness testimony has been provided by those who were working that day. It seems she was dragged along by the two Laterano staffers, and it was purely coincidental.\n\nShe might not have known where she was.\n\nPlume may be acting out of caution or convenience, but no one knows the details of the situation. Her reason for leaving Laterano remains unclear, and no one knows where Laterano stands regarding her story, either.\n\nSometimes she will stand stiffly by the edge of the bridge of Rhodes Island and look out anxiously in Laterano's direction.`,
    },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/charger-branch.png', factionIcon: '/icons/factions/laterano.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/plume/base.png', chibiSrc: '/operators/plume/chibi.webm', illustrator: 'deel' },
    { id: 'skin1', label: 'Easy Time', src: '/operators/plume/skin1.png', chibiSrc: '/operators/plume/chibi-skin1.webm', illustrator: 'deel' },
  ],
  portrait: '/operators/plume/portrait.png',
  portraitFocus: { y: 15, x: 40, zoom: 300 },
}

export default plume
