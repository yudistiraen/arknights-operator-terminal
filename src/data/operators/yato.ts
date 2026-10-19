import type { Operator } from '../../types'
import yatoVoice from '../voices/yato'

const yato = {
  name: 'Yato', fileNo: 'A41', class: 'Vanguard', branch: 'Pioneer', rarity: 2, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op A4', position: 'Melee', race: 'Oni', gender: 'Female', birthplace: 'Higashi',
  birthday: 'May 14th', height: '161 cm', combatExp: '8 years', infectionStatus: 'Infected', illustrator: 'Skade',
  cv: { JP: 'Saki Fujita', CN: 'Hou Xiaofei', EN: 'Jessica McDonald', KR: 'Woo Jeong-sin' },
  voice: yatoVoice,
  trait: 'Blocks 2 enemies',
  tags: ['Starter'],
  stats: { hp: 1030, atk: 232, def: 192, res: 0, block: 2, cost: 7, aspd: '1.05s', rdp: '70s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Fast Redeployment', desc: 'Redeployment Time -30 seconds', elite: 'E0' }],
  skills: [],
  modules: {},
  story: `Yato is an Oni combat personnel of Rhodes Island part of Op A4 along with Noir Corne and Rangers. All about her past is that she was once an assassin hailing from a Higashinese village deep in the mountains. Her village was known for training some of the most powerful mercenaries around, of which her parents were amongst the best. With such a lifestyle forged from the very beginning, Yato eventually left her hometown and accepted her first contract from a tall, green-haired woman, and later conscripted during the Higashi civil war where she defeated Noir Corne on a particular mission, though Yato prefers to keep this past in low profile. The two eventually found their way after a hilarious, "romantic" moment when they decided to desert the army after sparing their target and flee the war-torn country, until they somehow ended in Kazdel and were arrested by Babel.\n\nIn an act of mercy, however, Theresa praised Yato's combat skills and offered her becoming an Operator. From that point onwards she acted as a silent guardian for her Babelite comrades all the way until Theresa's assassination, when she was sent to provide support at the outskirts. But as bitter as it was, Yato didn't mourn Her Highness' passing. Instead, she naturally joined Rhodes Island alongside Noir Corne.\n\nAside from her years of combat experience both during the war and in R.I., Yato is known for her light-sensitive skin that makes it hard to withstand sunlight. As a matter of fact, she has been wearing her mask all the time. While many are curious about her reason, only Noir Corne understands her. Nevertheless, there will be a day when Yato finally takes off her mask and braves herself against her own weakness.`,
  profile: `Yato is the team leader of the core operators. She is a loyal and dependable warrior.`,
  records: [
    { title: 'Clinical Analysis', content: `Radiological scans showed blurred outlines of internal organs with visible abnormalities. Originium Particle Tests of the circulatory system indicate Oripathy. The subject is confirmed as Infected.\n\n[Cell-Originium Assimilation] 8%\nNo major visible symptoms of infection.\n[Blood Originium-Crystal Density] 0.22u/L\nSeverity of infection remains low, with no major hindrance to motor functions.` },
    { title: 'Archive File 1', content: `A quiet warrior with no particularly memorable traits except for the mask she wears.\nAs a result, people tend to overlook the fact that she's there. She doesn't seem to mind though, instead focusing on diligently carrying out every task given to her.\nDr. Kal'tsit has praised her as "the cornerstone of Rhodes Island."` },
    { title: 'Archive File 2', content: `No one knows when Yato joined Rhodes Island, and no one has ever tried to find out.\nHer presence as a Rhodes Island Operator is taken for granted, but if she were to suddenly disappear one day, it's unclear how many people would actually notice.` },
    { title: 'Archive File 3', content: `Some curious Operators once asked Yato about whether she had a history with Noir Corne, but she didn't provide a straightforward answer.\nLike Noir Corne, she is rarely seen without her mask.` },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/pioneer-branch.png', factionIcon: '/icons/factions/op-a4.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/yato/base.png', chibiSrc: '/operators/yato/chibi.webm', illustrator: 'Skade' },
  ],
  portrait: '/operators/yato/portrait.png',
  portraitFocus: { y: -5, x: 70, zoom: 260 },
  alter: {
    name: 'Kirin R Yato', fileNo: 'MH02', class: 'Specialist', branch: 'Executor', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
    position: 'Melee', trait: 'Significantly reduced Redeployment Time',
    tags: ['Fast-Redeploy', 'Nuker', 'Crossover'],
    illustrator: '一千',
    stats: { hp: 1629, atk: 565, def: 318, res: 0, block: 1, cost: 10, aspd: '0.93s', rdp: '18s' },
    range: { base: [[2,1]], e2: [[2,1]] },
    physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
    talents: [
      { name: 'Kirin Bolts', desc: 'Attacks deal an additional 20% ATK as Arts damage', elite: 'E2' },
      { name: 'Archdemon Mode', desc: 'While skill is active and for 10 seconds after skill ends, ATK +13%', elite: 'E2' },
    ],
    skills: [
      { name: 'Demon Mode', icon: '/operators/yato/alter/skill-1.png', activation: 'Passive', recovery: 'Passive', desc: 'ASPD +100, attacks hit 2 times, and every third attack on the same target while the skill is active becomes a 6-hit combo', spInit: 0, sp: 0, dur: '20s', rank: 'M3' },
      { name: 'Blade Dance', icon: '/operators/yato/alter/skill-2.png', activation: 'Passive', recovery: 'Passive', desc: "Talent 1 effect increased to 2.5x, ATK increased to 150%, and slashes all enemies in the frontal tile 16 times. More likely to be targeted by attacks for the duration", spInit: 0, sp: 0, rank: 'M3', note: 'Grants immunity to Stun, Freeze, and Sleep while active, but this unit will be affected by them once the skill duration ends.' },
      { name: 'Midair Spinning Blade Dance', icon: '/operators/yato/alter/skill-3.png', activation: 'Passive', recovery: 'Passive', desc: 'Rushes 2 tiles forward, slashing all surrounding enemies for 300% ATK for every step moved; every enemy attacked in the process extends distance of the rush (max. 5 tiles, can hit aerial units)', spInit: 0, sp: 0, rank: 'M3', note: 'Grants invulnerability and immunity to all Negative Statuses and debuffs while active.' },
    ],
    modules: {
      original: { code: 'Original', name: "Kirin R Yato's Badge", desc: 'Appointed as Specialist Operator to exercise Executor responsibilities' },
      exex: { code: 'EXE-X', name: 'Training Dummy', stages: [
        { stage: 1, hp: '+96', atk: '+36', def: '+20', effect: 'New trait: Refunds a large portion (80%) of the current DP Cost when retreated' },
        { stage: 2, hp: '+112', atk: '+43', def: '+25', effect: 'Archdemon Mode improved: While skill is active and for 10 seconds after skill ends, ATK +14%, further increased by 3% while skill is active' },
        { stage: 3, hp: '+123', atk: '+48', def: '+28', effect: 'Archdemon Mode improved: While skill is active and for 10 seconds after skill ends, ATK +15%, further increased by 5% while skill is active' },
      ]},
      exey: { code: 'EXE-Y', name: 'Rhodes Island Standard Dual Blades', stages: [
        { stage: 1, hp: '+135', atk: '+23', effect: 'New trait: When there are no allied units in the four adjacent tiles, ATK +10%' },
        { stage: 2, hp: '+170', effect: 'Kirin Bolts improved: Attacks deal an additional 23% ATK as Arts damage. When Yato deals Arts damage, gains Arts Damage Supplement +5% (can stack up to 7 times, with 35% max). When retreated for the first time, reduce Redeployment Time to 0.' },
        { stage: 3, hp: '+200', atk: '+50', effect: 'Kirin Bolts improved: Attacks deal an additional 25% ATK as Arts damage. When Yato deals Arts damage, gains Arts Damage Supplement +5% (can stack up to 10 times, with 50% max). When retreated for the first time, reduce Redeployment Time to 0.' },
      ]},
    },
    story: `Yato is an Oni combat personnel of Rhodes Island part of Op A4 along with Noir Corne and Rangers. All about her past is that she was once an assassin hailing from a Higashinese village deep in the mountains. Her village was known for training some of the most powerful mercenaries around, of which her parents were amongst the best. With such a lifestyle forged from the very beginning, Yato eventually left her hometown and accepted her first contract from a tall, green-haired woman, and later conscripted during the Higashi civil war where she defeated Noir Corne on a particular mission, though Yato prefers to keep this past in low profile. The two eventually found their way after a hilarious, "romantic" moment when they decided to desert the army after sparing their target and flee the war-torn country, until they somehow ended in Kazdel and were arrested by Babel.\n\nIn an act of mercy, however, Theresa praised Yato's combat skills and offered her becoming an Operator. From that point onwards she acted as a silent guardian for her Babelite comrades all the way until Theresa's assassination, when she was sent to provide support at the outskirts. But as bitter as it was, Yato didn't mourn Her Highness' passing. Instead, she naturally joined Rhodes Island alongside Noir Corne.\n\nAside from her years of combat experience both during the war and in R.I., Yato is known for her light-sensitive skin that makes it hard to withstand sunlight. As a matter of fact, she has been wearing her mask all the time. While many are curious about her reason, only Noir Corne understands her. Nevertheless, there will be a day when Yato finally takes off her mask and braves herself against her own weakness.`,
    profile: `A crossover alternate version of Yato themed after the Kirin R Armor (Blademaster) from Monster Hunter Generations Ultimate. Bearing dual blades and Arts-charged lightning, this is a Yato who has clearly seen far more ferocious battles than the one Rhodes Island's operators know.`,
    records: [
      { title: 'Clinical Analysis', content: `Radiological scans showed blurred outlines of internal organs with visible abnormalities. Originium Particle Tests of the circulatory system indicate Oripathy. The subject is confirmed as Infected.\n\n[Cell-Originium Assimilation] 8%\nNo major visible symptoms of infection.\n[Blood Originium-Crystal Density] 0.22u/L\nSeverity of infection remains low, with no major hindrance to motor functions.` },
    ],
    classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/executor-branch.png',
    skins: [
      { id: 'base', label: 'Base', src: '/operators/yato/alter/base.png', chibiSrc: '/operators/yato/alter/chibi.webm', illustrator: '一千' },
      { id: 'e2', label: 'Elite 2', src: '/operators/yato/alter/e2.png', chibiSrc: '/operators/yato/alter/chibi.webm', illustrator: '一千' },
    ],
    portrait: '/operators/yato/alter/portrait.png',
    portraitFocus: { y: 5.4, x: 48.5, zoom: 402 },
  },
} as unknown as Operator

export default yato
