import type { Operator } from '../../types'
import firewatchVoice from '../voices/firewatch'

const firewatch: Operator = {
  name: 'Firewatch', fileNo: 'ST01', class: 'Sniper', branch: 'Deadeye', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Elafia', gender: 'Female', birthplace: 'Unknown',
  birthday: 'Unknown', height: '158 cm', combatExp: '5 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'aZLing4',
  cv: { JP: 'Ru Thing', CN: 'Liu Shisi (credited as "Jingxia Liu" in EN)', EN: 'Jemma Moore', KR: 'Jang Mi' },
  voice: firewatchVoice,
  trait: 'Prioritizes attacking the enemy with lowest DEF within range first',
  tags: ['DPS', 'Nuker'],
  stats: { hp: 1450, atk: 1175, def: 131, res: 0, block: 1, cost: 21, aspd: '2.7s', rdp: '70s' },
  range: {
    base: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
    e1: [[1,1,1,0,0],[1,1,1,1,0],[2,1,1,1,1],[1,1,1,1,0],[1,1,1,0,0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Assassin', desc: 'ATK increases to 120% when attacking ranged enemies', elite: 'E1' },
    { name: 'Assassin', desc: 'ATK increases to 125% (+5%) when attacking ranged enemies', elite: 'E1 (Potential 5)' },
    { name: 'Assassin', desc: 'ATK increases to 140% when attacking ranged enemies', elite: 'E2' },
    { name: 'Assassin', desc: 'ATK increases to 145% (+5%) when attacking ranged enemies', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Camouflage', icon: '/operators/firewatch/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +70% and gain Invisibility', spInit: 0, sp: 20, rank: 'M3', dur: '50s',
      levels: [
        { level: '1', desc: 'ATK +24% and gain Invisibility', spInit: 0, sp: 30, dur: '25s' },
        { level: '2', desc: 'ATK +26% and gain Invisibility', spInit: 0, sp: 30, dur: '26s' },
        { level: '3', desc: 'ATK +28% and gain Invisibility', spInit: 0, sp: 30, dur: '27s' },
        { level: '4', desc: 'ATK +32% and gain Invisibility', spInit: 0, sp: 28, dur: '30s' },
        { level: '5', desc: 'ATK +34% and gain Invisibility', spInit: 0, sp: 28, dur: '31s' },
        { level: '6', desc: 'ATK +36% and gain Invisibility', spInit: 0, sp: 28, dur: '32s' },
        { level: '7', desc: 'ATK +40% and gain Invisibility', spInit: 0, sp: 26, dur: '35s' },
        { level: 'M1', desc: 'ATK +50% and gain Invisibility', spInit: 0, sp: 24, dur: '40s' },
        { level: 'M2', desc: 'ATK +60% and gain Invisibility', spInit: 0, sp: 22, dur: '45s' },
        { level: 'M3', desc: 'ATK +70% and gain Invisibility', spInit: 0, sp: 20, dur: '50s' },
      ],
    },
    {
      name: 'Tactical Transceiver', icon: '/operators/firewatch/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Randomly drops 3 bombs within range (especially to enemy's position); Every bomb deals 300% of ATK Physical damage to all nearby enemies", spInit: 30, sp: 50, rank: 'M3',
      note: 'The bombs have a blast radius of 1.2 tiles.',
      levels: [
        { level: '1', desc: "Randomly drops 2 bombs within range (especially to enemy's position); Every bomb deals 180% of ATK Physical damage to all nearby enemies", spInit: 10, sp: 50 },
        { level: '2', desc: "Randomly drops 2 bombs within range (especially to enemy's position); Every bomb deals 190% of ATK Physical damage to all nearby enemies", spInit: 10, sp: 50 },
        { level: '3', desc: "Randomly drops 2 bombs within range (especially to enemy's position); Every bomb deals 200% of ATK Physical damage to all nearby enemies", spInit: 10, sp: 50 },
        { level: '4', desc: "Randomly drops 2 bombs within range (especially to enemy's position); Every bomb deals 210% of ATK Physical damage to all nearby enemies", spInit: 15, sp: 50 },
        { level: '5', desc: "Randomly drops 2 bombs within range (especially to enemy's position); Every bomb deals 220% of ATK Physical damage to all nearby enemies", spInit: 15, sp: 50 },
        { level: '6', desc: "Randomly drops 2 bombs within range (especially to enemy's position); Every bomb deals 230% of ATK Physical damage to all nearby enemies", spInit: 15, sp: 50 },
        { level: '7', desc: "Randomly drops 2 bombs within range (especially to enemy's position); Every bomb deals 240% of ATK Physical damage to all nearby enemies", spInit: 20, sp: 50 },
        { level: 'M1', desc: "Randomly drops 3 bombs within range (especially to enemy's position); Every bomb deals 260% of ATK Physical damage to all nearby enemies", spInit: 20, sp: 50 },
        { level: 'M2', desc: "Randomly drops 3 bombs within range (especially to enemy's position); Every bomb deals 280% of ATK Physical damage to all nearby enemies", spInit: 20, sp: 50 },
        { level: 'M3', desc: "Randomly drops 3 bombs within range (especially to enemy's position); Every bomb deals 300% of ATK Physical damage to all nearby enemies", spInit: 30, sp: 50 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Firewatch's Badge", desc: 'Appointed as Sniper Operator to exercise Deadeye responsibilities' },
    deay: { code: 'DEA-Y', name: 'Field Sniper Equipment', stages: [
      { stage: 1, hp: '+80', atk: '+60', effect: 'New trait: If the attacked enemy remains alive, gain 1 additional SP' },
      { stage: 2, hp: '+110', atk: '+75', effect: 'Assassin improved: ATK increases to 145% when attacking ranged enemies and enemies that do not attack' },
      { stage: 3, hp: '+130', atk: '+87', effect: 'Assassin improved: ATK increases to 150% when attacking ranged enemies and enemies that do not attack' },
    ]},
  },
  profile: `Firewatch comes from unknown origins. She fought for many years on the border between Kazimierz and Ursus. It is suspected that she was a guerrilla during this time. She shows deep experience in asymmetric operations like ambushes, sniping, unconventional tactics, and mobile tactics.\nShe currently works as part of the Rhodes Island sniper group to provide protection services.`,
  story: `An Elafian sharpshooter with an enigmatic background, implied to come from somewhere between Kazimierz and Sami, Firewatch holds a desire to avenge the deaths of her comrades and destruction of her hometown under unclear circumstances, with her stoicism and composure giving her unfaltering aim. Firewatch worked together with Meteorite for a while in the past before becoming a bounty huntress operating on her own around Kazimierz until an encounter with a Rhodes Island operative led her to join R.I. to further pursue her vendetta. There, Firewatch uses her experience in guerrilla warfare to provide sniper support for her comrades.`,
  records: [
    { title: 'Clinical Analysis', content: `Medical tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Assimilation] 0%\nOperator shows no signs of infection at this time.\n[Blood Originium-Crystal Density] 0.08u/L\nThis Operator has rarely come into contact with Originium.` },
    { title: 'Archive File 1', content: `Firewatch is everything a normal person would expect a sniper to be: steady, focused, cool-headed, and exceedingly firm. On the other hand, however, Firewatch is not a cold-blooded killer. It's just that very few people get the opportunity to see her show an emotion other than "vengeance."\nFirewatch regards any display of emotion as weakness. And in order to get her revenge, she can never allow herself to become weak.` },
    { title: 'Archive File 2', content: `People who have come face-to-face with Firewatch have felt as though they were coming face-to-face with a forest.\nThe bowstring shakes and the arrow whistles through the air. This is Firewatch's wordless language, like the leaves and the branches rubbing together as the wind blows through the forest.\nFirewatch is tight-lipped when it comes to her past. I have not had an opportunity to learn more about her through her stories.\nBut voices do not make mistakes. Something many people have missed – everyone's got their own unique voice. Some voices come from the throat; others come from the heart.\nThe voice in Firewatch's heart comes from the forest. Moreover, it comes from the deepest depths of the forest.\nOnly in the deepest part of the forest can you hear the quiet and yet deafening silence.\nFirewatch once said that the people of her race and her friends are all buried there.\nJust what has she been through?` },
    { title: 'Archive File 3', content: `The favorite musical instrument of the Elafian people is the harmonica. Most of them are born in the frigid region of Sami. Some live in Ursus and the northern region of Kazimierz. Therefore, they enjoy small and medium-sized instruments. Aside from the harmonica, they also enjoy the flute, the fiddle, and the guitar.\nPlaying these instruments does not require using much energy. Given that the Elafian people spend all year long in autumnal and wintry climates, this makes these instruments suitable for their way of life. Moreover, it only takes one musician to send the whole room into an emotional state of joy or sorrow.\nSometimes, Firewatch will sit alone upon a bridge and play her harmonica. Each time she does this, she sits facing the north.\nWhenever I hear that harmonica and its mellifluous yet sad voice upon the wind, my heart follows as well and drifts towards the mountains and forests of the north.` },
    { title: 'Archive File 4', content: `[Privileged Record]\nMeteorite, the mercenary, is now Meteorite, Rhodes Island Operator. The first time this bowgun-wielding Sarkaz met Firewatch, the two said nary a word to one another. Now that they are on two separate squads, they never make an effort to communicate.\nThe two once fought side-by-side, but after the annihilation of Firewatch's hometown, they parted ways. Meeting by chance again at Rhodes Island, they once more fought with one purpose in mind. Whether the events of the past will play out once again is unknown.\nFor Rhodes Island, no matter what happens in the future, one thing must be avoided at all costs – dangers from within.\nHowever, Rhodes Island does not turn away those who have overcome great difficulty to come here just because of their complicated pasts.\nIf you've read this far, I'd like to implore you to heed a request I have concerning Firewatch.\nPlease guide her. Free her of her tethers. Lead her out of the gloomy forest of her past.\nLet her heavy desire for vengeance be buried amidst the dead leaves of the autumn.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/deadeye-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/firewatch/base.png', chibiSrc: '/operators/firewatch/chibi.webm', chibiMoveSrc: '/operators/firewatch/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.7, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'aZLing4' },
    { id: 'e2', label: 'Elite 2', src: '/operators/firewatch/e2.png', chibiSrc: '/operators/firewatch/chibi.webm', chibiMoveSrc: '/operators/firewatch/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.7, offsetYPercent: 3.4 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'aZLing4' },
    { id: 'skin1', label: 'Wilted Cypress', src: '/operators/firewatch/skin1.png', chibiSrc: '/operators/firewatch/chibi-skin1.webm', chibiMoveSrc: '/operators/firewatch/chibi-move-skin1.webm', chibiFraming: { scale: 1.26, offsetXPercent: 1.1, offsetYPercent: 3.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'aZLing4' },
    { id: 'skin2', label: 'Snowywatch', src: '/operators/firewatch/skin2.png', chibiSrc: '/operators/firewatch/chibi-skin2.webm', chibiMoveSrc: '/operators/firewatch/chibi-move-skin2.webm', chibiFraming: { scale: 1.25, offsetXPercent: 1.6, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'aZLing4' },
  ],
  portrait: '/operators/firewatch/portrait.png',
  portraitFocus: { y: -1.4, x: 49.6, zoom: 283 },
}

export default firewatch
