import type { Operator } from '../../types'
import scavengerVoice from '../voices/scavenger'

const scavenger: Operator = {
  name: 'Scavenger', fileNo: 'SW02', class: 'Vanguard', branch: 'Pioneer', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'S.W.E.E.P.', position: 'Melee', race: 'Zalak', gender: 'Female', birthplace: 'Unknown',
  birthday: 'August 22nd', height: '164 cm', combatExp: '4 years', infectionStatus: 'Infection confirmed by medical examination.', illustrator: '戏言咸咸',
  cv: { JP: 'You Taichi', CN: 'Miao Yang (credited as "Mia Miao" in EN)', EN: 'Jennifer Armour', KR: 'Chong Yu-mi' },
  voice: scavengerVoice,
  trait: 'Blocks 2 enemies',
  tags: ['DP-Recovery', 'DPS'],
  stats: { hp: 1835, atk: 470, def: 310, res: 0, block: 2, cost: 12, aspd: '1.05s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Lone Wolf', desc: 'ATK and DEF +5% when there are no allies in the four adjacent tiles', elite: 'E1' },
    { name: 'Lone Wolf', desc: 'ATK and DEF +7% (+2%) when there are no allies in the four adjacent tiles', elite: 'E1 (Potential 5)' },
    { name: 'Lone Wolf', desc: 'ATK and DEF +11% when there are no allies in the four adjacent tiles', elite: 'E2' },
    { name: 'Lone Wolf', desc: 'ATK and DEF +13% (+2%) when there are no allies in the four adjacent tiles', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Charge β', icon: '/operators/scavenger/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Instantly gains 9 Deployment Points.', spInit: 13, sp: 30, rank: 'M3',
      levels: [
        { level: '1', desc: 'Instantly gains 9 Deployment Points.', spInit: 8, sp: 39 },
        { level: '2', desc: 'Instantly gains 9 Deployment Points.', spInit: 8, sp: 38 },
        { level: '3', desc: 'Instantly gains 9 Deployment Points.', spInit: 8, sp: 37 },
        { level: '4', desc: 'Instantly gains 9 Deployment Points.', spInit: 9, sp: 36 },
        { level: '5', desc: 'Instantly gains 9 Deployment Points.', spInit: 9, sp: 35 },
        { level: '6', desc: 'Instantly gains 9 Deployment Points.', spInit: 9, sp: 34 },
        { level: '7', desc: 'Instantly gains 9 Deployment Points.', spInit: 10, sp: 33 },
        { level: 'M1', desc: 'Instantly gains 9 Deployment Points.', spInit: 11, sp: 32 },
        { level: 'M2', desc: 'Instantly gains 9 Deployment Points.', spInit: 12, sp: 31 },
        { level: 'M3', desc: 'Instantly gains 9 Deployment Points.', spInit: 13, sp: 30 },
      ],
    },
    {
      name: 'Command - Attack', icon: '/operators/scavenger/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately gains 11 Deployment Points\nATK +70%', spInit: 18, sp: 30, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Immediately gains 11 Deployment Points\nATK +20%', spInit: 13, sp: 40, dur: '15s' },
        { level: '2', desc: 'Immediately gains 11 Deployment Points\nATK +23%', spInit: 13, sp: 39, dur: '15s' },
        { level: '3', desc: 'Immediately gains 11 Deployment Points\nATK +26%', spInit: 13, sp: 38, dur: '15s' },
        { level: '4', desc: 'Immediately gains 11 Deployment Points\nATK +30%', spInit: 14, sp: 37, dur: '15s' },
        { level: '5', desc: 'Immediately gains 11 Deployment Points\nATK +33%', spInit: 14, sp: 36, dur: '15s' },
        { level: '6', desc: 'Immediately gains 11 Deployment Points\nATK +36%', spInit: 14, sp: 35, dur: '15s' },
        { level: '7', desc: 'Immediately gains 11 Deployment Points\nATK +40%', spInit: 15, sp: 34, dur: '15s' },
        { level: 'M1', desc: 'Immediately gains 11 Deployment Points\nATK +50%', spInit: 16, sp: 33, dur: '15s' },
        { level: 'M2', desc: 'Immediately gains 11 Deployment Points\nATK +60%', spInit: 17, sp: 32, dur: '15s' },
        { level: 'M3', desc: 'Immediately gains 11 Deployment Points\nATK +70%', spInit: 18, sp: 30, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Scavenger's Badge", desc: 'Appointed as Vanguard Operator to exercise Pioneer responsibilities' },
    solx: { code: 'SOL-X', name: '"Designer Dinnerware"', stages: [
      { stage: 1, atk: '+27', def: '+18', effect: 'Trait improved: Blocks 2 enemies; Gains +8% ATK and DEF while blocking enemies' },
      { stage: 2, atk: '+32', def: '+22', effect: 'Lone Wolf improved: Gains +14% ATK and DEF when there are no allies in the four adjacent tiles' },
      { stage: 3, atk: '+36', def: '+25', effect: 'Lone Wolf improved: Gains +16% ATK and DEF when there are no allies in the four adjacent tiles' },
    ]},
  },
  profile: `Banished from her community for being Infected, she has made a living as a mercenary in the criminal underworld. She is skilled in matters best left unsaid, and as a result of the base nature of the work has become known as "Scavenger." Since her introduction to Rhodes Island through an intermediary, she has given up her mercenary life to become an Operator.`,
  story: `"Scavenger" Hamelin once had a romantic relationship with a woman of her tribe, but the Zalak was exiled from the tribe after contracting Oripathy and did not manage to express her feelings with her girlfriend, who passed away from unknown causes by the time Hamelin was able to get in touch with her again. To forget such trauma, she became a "lone wolf" mercenary until joining Rhodes Island's S.W.E.E.P. division under the codename "Scavenger". During her time in R.I., Hamelin is noted to be romantically attracted to Provence due to her resemblance to another large-tailed Lupo girl who had fed and helped her during one of her mercenary jobs, as stated in her Module story; Provence the Lupo is none the wiser about this.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Fusion Rate] 12%\nOperator has no obvious Originium crystals externally, however, tests have revealed an abundance of crystals internally. The limbic system of the brain has been particularly affected, and the Operator's personality changes are suspected to be related to this.\n[Blood Crystal Density] 0.29u/L\nDue to high presence of Originium within the internal organ's, the Operator's circulatory system has a high Originium content.` },
    { title: 'Archive File 1', content: `Having been exiled by her tribe, betrayed by her client, and experiencing all kinds of hardships, Scavenger prefers to act alone and is weary of others. Moreover, since her personality has been affected by Originium, she has become difficult to talk to. Perhaps she'll open up a little bit after getting used to working at Rhodes Island.` },
    { title: 'Archive File 2', content: `Scavenger moves freely in harsh environments and will eat almost anything as long as she survives. She is one of the most adaptable Operators whose versatility is unparalleled. However, if given the chance she enjoys resting in dark corners or eating food that she prefers.` },
    { title: 'Archive File 3', content: `Scavenger prefers to ignore others when it's not required for her work but pays extra attention to Provence. She tends to sneer at those who ask her about her interest in Provence which is reflective of some sort of attraction. While Provence is considered attractive as many Operators enjoy fluffing her tail, Scavenger seems to be interested in something else....` },
    { title: 'Archive File 4', content: `Scavenger used to be in love with a young woman from her own tribe who also reciprocated these feelings. However for many reasons they did not express their feelings for one another until Scavenger became infected and was banished from her tribe. The next time Scavenger was able to meet the young lady, she had already passed away and with it the knowledge of their forbidden love. This memory is a keepsake that Scavenger will forever hold close to her heart.` },
    { title: 'Promotion Record', content: `No one understands why a covert mercenary would use such a heavy weapon for sneak attacks as it is clearly not suited. Despite this disadvantage, Scavenger still manages to complete her tasks. When others see her pass by, they come under the impression that she is not an assassin but rather an individual who will stop at nothing to eliminate everyone in her path. No one doubts her abilities and as for the actual truth to her choice of weaponry? Who cares.` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/sweep.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/scavenger/base.png', chibiSrc: '/operators/scavenger/chibi.webm', chibiMoveSrc: '/operators/scavenger/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.7, offsetYPercent: 3.6 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '戏言咸咸' },
    { id: 'e2', label: 'Elite 2', src: '/operators/scavenger/e2.png', chibiSrc: '/operators/scavenger/chibi.webm', chibiMoveSrc: '/operators/scavenger/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1.7, offsetYPercent: 3.6 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '戏言咸咸' },
    { id: 'skin1', label: 'Survive', src: '/operators/scavenger/skin1.png', chibiSrc: '/operators/scavenger/chibi-skin1.webm', chibiMoveSrc: '/operators/scavenger/chibi-move-skin1.webm', chibiFraming: { scale: 1.31, offsetXPercent: 0.9, offsetYPercent: 2.8 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '戏言咸咸' },
  ],
  portrait: '/operators/scavenger/portrait.png',
  portraitFocus: { y: -4.4, x: 67.1, zoom: 358 },
}

export default scavenger
