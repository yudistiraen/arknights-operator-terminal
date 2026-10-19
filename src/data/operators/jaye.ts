import type { Operator } from '../../types'
import jayeVoice from '../voices/jaye'

const jaye: Operator = {
  name: 'Jaye', fileNo: 'LM14', class: 'Specialist', branch: 'Merchant', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Lungmen', position: 'Melee', race: 'Ursus', gender: 'Male', birthplace: 'Lungmen',
  birthday: 'September 17th', height: '174 cm', combatExp: 'None', infectionStatus: 'Non-infected', illustrator: '阿鬼',
  cv: { JP: 'Yusuke Shirai', CN: 'Sun Ye', EN: 'Yung-I Chang', KR: 'Lee Hyun' },
  voice: jayeVoice,
  trait: 'Has reduced Redeployment Time, but DP Cost is not refunded upon retreating; While deployed, 3 DP are consumed every 3 seconds (automatically retreats without sufficient DP)',
  tags: ['Fast-Redeploy', 'DPS'],
  stats: { hp: 2284, atk: 674, def: 378, res: 0, block: 1, cost: 7, aspd: '1s', rdp: '25s' },
  range: { base: [[2,1]], e1: [[2,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Anatomy Master', desc: 'Increases ATK to 145% when attacking [Infected Creatures]', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Shell Splitter', icon: '/operators/jaye/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'ATK +70%, attacks Silence the target for 2 second(s)', spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +15%, attacks Silence the target for 1 second(s)\nUnlimited duration`, spInit: 0, sp: 8 },
        { level: '2', desc: `ATK +20%, attacks Silence the target for 1 second(s)\nUnlimited duration`, spInit: 0, sp: 8 },
        { level: '3', desc: `ATK +25%, attacks Silence the target for 1 second(s)\nUnlimited duration`, spInit: 0, sp: 8 },
        { level: '4', desc: `ATK +30%, attacks Silence the target for 1 second(s)\nUnlimited duration`, spInit: 0, sp: 7 },
        { level: '5', desc: `ATK +35%, attacks Silence the target for 1 second(s)\nUnlimited duration`, spInit: 0, sp: 7 },
        { level: '6', desc: `ATK +40%, attacks Silence the target for 1 second(s)\nUnlimited duration`, spInit: 0, sp: 7 },
        { level: '7', desc: `ATK +45%, attacks Silence the target for 1 second(s)\nUnlimited duration`, spInit: 0, sp: 6 },
        { level: 'M1', desc: `ATK +50%, attacks Silence the target for 2 second(s)\nUnlimited duration`, spInit: 0, sp: 5 },
        { level: 'M2', desc: `ATK +60%, attacks Silence the target for 2 second(s)\nUnlimited duration`, spInit: 0, sp: 5 },
        { level: 'M3', desc: `ATK +70%, attacks Silence the target for 2 second(s)\nUnlimited duration`, spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Sashimi Platter', icon: '/operators/jaye/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: "ATK +60%, each attack heals a nearby friendly unit's HP equal to 50% of the damage dealt", spInit: 0, sp: 8, rank: 'M3', note: 'Sashimi Platter can heal Jaye himself as well.',
      levels: [
        { level: '1', desc: `ATK +20%, each attack heals a nearby friendly unit's HP equal to 30% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 12 },
        { level: '2', desc: `ATK +23%, each attack heals a nearby friendly unit's HP equal to 30% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 12 },
        { level: '3', desc: `ATK +26%, each attack heals a nearby friendly unit's HP equal to 30% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 12 },
        { level: '4', desc: `ATK +30%, each attack heals a nearby friendly unit's HP equal to 35% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 12 },
        { level: '5', desc: `ATK +33%, each attack heals a nearby friendly unit's HP equal to 35% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 12 },
        { level: '6', desc: `ATK +36%, each attack heals a nearby friendly unit's HP equal to 35% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 12 },
        { level: '7', desc: `ATK +40%, each attack heals a nearby friendly unit's HP equal to 40% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 11 },
        { level: 'M1', desc: `ATK +50%, each attack heals a nearby friendly unit's HP equal to 40% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 10 },
        { level: 'M2', desc: `ATK +55%, each attack heals a nearby friendly unit's HP equal to 45% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 9 },
        { level: 'M3', desc: `ATK +60%, each attack heals a nearby friendly unit's HP equal to 50% of the damage dealt\nUnlimited duration`, spInit: 0, sp: 8 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Jaye's Badge", desc: 'Appointed as Specialist Operator to exercise Merchant responsibilities' },
    merx: { code: 'MER-X', name: 'Steel Tool Set', stages: [
      { stage: 1, atk: '+35', def: '+35', effect: 'Trait improved: Has reduced Redeployment Time, but DP Cost is not refunded upon retreating; While deployed, 2 DP are consumed every 3 seconds (automatically retreats without sufficient DP)' },
      { stage: 2, atk: '+43', def: '+43', effect: 'Anatomy Master improved: Increases ATK to 150% when attacking [Infected Creatures]' },
      { stage: 3, atk: '+50', def: '+50', effect: 'Anatomy Master improved: Increases ATK to 155% when attacking [Infected Creatures]' },
    ]},
  },
  story: `Seafood hawker with an imposing facade.\nWhen he first arrived, the other operators thought Hoshiguma had brought us a real rough customer. But after getting to know him, it became clear that Jaye is, in fact, very nice.\nAnd he really is nothing more than a seafood hawker.`,
  profile: "A Lungmen seafood hawker with an intimidating build and a quiet, bookish personality. Rumors of his ties to the city's underworld are mostly just rumors — he'd rather cook than fight.",
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Jaye shows no trace of Originium infection.\n\n[Blood Originium-Crystal Density] 0.13u/L\nOperator Jaye rarely comes into contact with Originium.` },
    { title: 'Archive File 2', content: `Despite how he may look at first glance, Jaye has a quiet personality, even coming off a bit stiff. He enjoys reading books and improving his cooking. He would like nothing more than to live a simple life, but, as we all know, you can't always get what you want.\nJaye reports having been sent to the slums to work at a very young age. And thanks to his appearance, as well as his skills with a knife, he was often mistaken for a triad. And since the "triads" of the Lungmen slums often keep a low profile, mixing in with ordinary folk and setting up front businesses, suspicion fell on Jaye. The misunderstandings and misconceptions piled on top of each other, giving Jaye a reputation as a dangerous man, not to be messed with. Some rumors even labeled him the true puppetmaster behind several different gangs.\nBut really, Jaye just wanted to sell his seafood. He'd haul his goods to market, and sometimes help out at the finball shop. The rumors weighed heavily on Jaye. But there was nothing he could do about them.` },
    { title: 'Archive File 3', content: `According to Waai Fu, Jaye is very skilled, and as warm inside as he is cold outside. He is beloved by his regulars, who include Old Lee of Lee's Detective Agency, a fan of both Jaye's stall and the finball shop.\nOne day, after closing up his stall, Jaye came upon Waai Fu in the midst of her fight against injustice. After they got to know one another, Waai Fu realized it was Jaye's stall Old Lee liked so much. And as the old man sent her out on her many errands, she became much closer to Jaye.\nThe upstanding Waai Fu would, from time to time, help Jaye deal with problems here and there. But that only served to confirm his reputation as a dangerous killer to the uninitiated. And Waai Fu became known as a Yan kung fu master in his service.\nWhile there aren't professional assassins to worry about, the situation in the slums is still chaotic and difficult. And the question of Jaye's identity endures through the fights and scuffles around him.` },
    { title: 'Archive File 4', content: `So the rumors persist. But this is not to say they are entirely without benefit.\nFor example, Hoshiguma developed an interest in Jaye based on the talk. Upon uncovering the truth of his identity, she grew concerned for him and ultimately referred him to us at Rhodes Island.\nHoshiguma knows about old Lungmen. And she tells us that although Jaye is not a triad, he is connected with a certain Uncle Tung, who is a known associate of the Rat King. She says that, entirely unbeknownst to Jaye, this old man has worked to help him.\nIt is clear to us that Hoshiguma revealed this information not to bring suspicion upon Jaye, but to prevent any problems or misunderstandings from arising in the future.\nJaye is just Jaye, a normal civilian who has joined Rhodes Island. And that isn't going to change.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/merchant-branch.png', factionIcon: '/icons/factions/lungmen.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/jaye/base.png', chibiSrc: '/operators/jaye/chibi.webm', illustrator: '阿鬼' },
    { id: 'e2', label: 'Elite 2', src: '/operators/jaye/e2.png', chibiSrc: '/operators/jaye/chibi.webm', illustrator: '阿鬼' },
    { id: 'skin1', label: 'Beach Guard GT002', src: '/operators/jaye/skin1.png', chibiSrc: '/operators/jaye/chibi-skin1.webm', illustrator: '阿鬼' },
  ],
  portrait: '/operators/jaye/portrait.png',
  portraitFocus: { y: -9, x: 36.6, zoom: 292 },
}

export default jaye
