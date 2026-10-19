import type { Operator } from '../../types'
import beeswaxVoice from '../voices/beeswax'

const beeswax: Operator = {
  name: 'Beeswax', fileNo: 'R147', class: 'Caster', branch: 'Phalanx Caster', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Sargon', position: 'Ranged', race: 'Caprinae', gender: 'Female', birthplace: 'Sargon',
  birthday: 'September 15th', height: '157 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'カワグチ',
  cv: { JP: 'Eri Kitamura', CN: 'Weng Yuan', EN: 'Natasha Atherton', KR: 'Kim Yeon-woo' },
  voice: beeswaxVoice,
  trait: 'Normally does not attack, but has greatly increased DEF and RES; When skill is active, attacks deal AoE Arts damage',
  tags: ['AoE', 'Defense'],
  stats: { hp: 2005, atk: 735, def: 205, res: 15, block: 1, cost: 23, aspd: '2s', rdp: '70s' },
  range: {
    base: [[1,1,1],[1,2,1],[1,1,1]],
    e1: [[0,0,1,0,0],[0,1,1,1,0],[1,1,2,1,1],[0,1,1,1,0],[0,0,1,0,0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: "Shambhala's Sanctuary", desc: "When this unit's skill is not active, restores 2.5% Max HP per second", elite: 'E1' },
    { name: "Shambhala's Sanctuary", desc: "When this unit's skill is not active, restores 4% Max HP per second", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Growing Sandstorm', icon: '/operators/beeswax/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Range expands, ATK +60%', spInit: 8, sp: 18, dur: '20s', rank: 'M3',
      range: [[0,1,1,1,0],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[0,1,1,1,0]],
      levels: [
        { level: '1', desc: 'Range expands, ATK +10%', spInit: 6, sp: 28, dur: '15s' },
        { level: '2', desc: 'Range expands, ATK +15%', spInit: 6, sp: 28, dur: '15s' },
        { level: '3', desc: 'Range expands, ATK +20%', spInit: 6, sp: 28, dur: '15s' },
        { level: '4', desc: 'Range expands, ATK +25%', spInit: 6, sp: 26, dur: '16s' },
        { level: '5', desc: 'Range expands, ATK +30%', spInit: 6, sp: 26, dur: '16s' },
        { level: '6', desc: 'Range expands, ATK +35%', spInit: 6, sp: 26, dur: '16s' },
        { level: '7', desc: 'Range expands, ATK +40%', spInit: 8, sp: 24, dur: '17s' },
        { level: 'M1', desc: 'Range expands, ATK +45%', spInit: 8, sp: 22, dur: '18s' },
        { level: 'M2', desc: 'Range expands, ATK +50%', spInit: 8, sp: 20, dur: '19s' },
        { level: 'M3', desc: 'Range expands, ATK +60%', spInit: 8, sp: 18, dur: '20s' },
      ],
    },
    {
      name: 'Guardian Obelisk', icon: '/operators/beeswax/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 300% ATK as Arts damage to nearby enemies and Stuns them for 3 seconds", spInit: 10, sp: 20, dur: '20s', rank: 'M3',
      note: 'The Sand Obelisk is prioritized to be summoned on an open melee tile in the following order: Occupied by enemies with the highest aggression level > Closest to one occupied by enemies with the highest aggression level > Random. The Sand Obelisk self-destructs when Guardian Obelisk expires or Beeswax leaves the map.',
      levels: [
        { level: '1', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 170% ATK as Arts damage to nearby enemies and Stuns them for 1 seconds", spInit: 10, sp: 30, dur: '20s' },
        { level: '2', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 180% ATK as Arts damage to nearby enemies and Stuns them for 1 seconds", spInit: 10, sp: 30, dur: '20s' },
        { level: '3', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 190% ATK as Arts damage to nearby enemies and Stuns them for 1 seconds", spInit: 10, sp: 30, dur: '20s' },
        { level: '4', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 200% ATK as Arts damage to nearby enemies and Stuns them for 1 seconds", spInit: 10, sp: 28, dur: '20s' },
        { level: '5', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 210% ATK as Arts damage to nearby enemies and Stuns them for 1 seconds", spInit: 10, sp: 28, dur: '20s' },
        { level: '6', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 220% ATK as Arts damage to nearby enemies and Stuns them for 1 seconds", spInit: 10, sp: 28, dur: '20s' },
        { level: '7', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 230% ATK as Arts damage to nearby enemies and Stuns them for 1.5 seconds", spInit: 10, sp: 26, dur: '20s' },
        { level: 'M1', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 250% ATK as Arts damage to nearby enemies and Stuns them for 2 seconds", spInit: 10, sp: 24, dur: '20s' },
        { level: 'M2', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 270% ATK as Arts damage to nearby enemies and Stuns them for 2.5 seconds", spInit: 10, sp: 22, dur: '20s' },
        { level: 'M3', desc: "Summons an Obelisk upon a melee tile within this unit's Attack Range. When the Obelisk appears, it deals 300% ATK as Arts damage to nearby enemies and Stuns them for 3 seconds", spInit: 10, sp: 20, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Beeswax's Badge", desc: 'Appointed as Caster Operator to exercise Phalanx Caster responsibilities' },
    plxx: { code: 'PLX-X', name: '"Beeswax\'s Blessing"', stages: [
      { stage: 1, hp: '+150', atk: '+55', effect: 'Trait improved: Normally does not attack, but has greatly increased DEF and RES; when skill is active, retains some of the bonus and attacks deal AoE Arts damage' },
      { stage: 2, hp: '+180', atk: '+64', effect: "Shambhala's Sanctuary improved: When this unit's skill is not active, +10% Max HP, and restores 4% Max HP per second" },
      { stage: 3, hp: '+210', atk: '+70', effect: "Shambhala's Sanctuary improved: When this unit's skill is not active, +15% Max HP, and restores 4% Max HP per second" },
    ]},
  },
  profile: `Operator Beeswax, a member of an ancient tribe from the depths of the deserts of Sargon, contacted us of her own initiative and asked to board the ship in order to locate someone. After learning that the person of interest will not be returning to the ship for the time being, Miss Beeswax has applied to join and travel with Rhodes Island, waiting for the time she can reunite with relative.\nBeeswax has passed the entrance examination and has been given the official Operator status, and now serves as a Caster for Rhodes Island. This will be the first stop in her lengthy journey of discovery.`,
  story: `Ankhesena, a Caprinae priestess of a polytheistic religion hailing from the vast, remote deserts of Sargon, approached Rhodes Island in search of her sister, known to Rhodes Island as Carnelian, who had left her homeland to travel around Terra. Since Carnelian has no intention to return for the time being, Beeswax decided to stay in Rhodes Island in the meantime. As an operator under the codename "Beeswax," she utilizes her faith in the gods manifesting in the form of geokinetic Arts.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Beeswax has no signs of Originium infections.\n[Blood Originium-Crystal Density] 0.11u/L\nOperator Beeswax seldom comes in contact with Originium in her living environment.\nAlthough coming into contact with Originium is inevitable through the course of using Originium Arts, not only has she not fallen ill, but she even seems to be quite healthy – healthier than most of us, in fact. Have you seen the color and sheen of her horns? I could tell at a glance that little girl has nothing wrong with her!\n— Warfarin` },
    { title: 'Archive File 1', content: `Miss Beeswax made no attempts to hide her purpose for seeking out Rhodes Island. In fact, she was rather candid throughout the entire meeting, and this straightforward demeanor was consistent with the experiences she had described. In front of us was a young woman who had stepped away from home for the first time, without a deceptive bone in her body or a reason to be wary of others.\nAccording to her statement, Miss Beeswax contacted Rhodes Island in order to find a blood relative who had left the tribe first on a journey. After verification, we found that her relative indeed is an active operator, and belongs to one of our affiliated departments. However, that individual is currently on a secret mission and cannot return to the landship any time soon.\nUpon hearing this, Beeswax was visibly dejected. This young Caprinae from the golden sands does not usually display many expressions, but when her shoulders and eyelids droop, one can see subtle hints of the sense of loss she undoubtedly feels. Fortunately, these depressive bouts rarely last long, and she quickly regains her vitality.\nAt this time, Miss Beeswax made the first important decision since leaving her home to embark on this journey.\nShe decided to become a part of Rhodes Island.` },
    { title: 'Archive File 2', content: `Operator Beeswax cherishes her two horns greatly, and almost all operators who've talked to her are aware of this.\nAmong Caprinae, Forte, and other horned races, the horns are a very important part of one's appearance. Akin to the booming and developing beauty industry here, horn care services arose to meet the demand and are well-received. However, even among the operators who are more concerned about their image, very few will make a conscious effort to focus on their appearance. Operators, like Beeswax, who pay close attention their appearance to the point of mastering skills relevant to those interests are among the minority.\nEvery day, Beeswax sets aside a bit of time to maintain her large, curved horns. This maintenance process usually involves multiple steps such as wiping them down with a fine cloth, applying essential oils, soft brush care, and polish. Beeswax always completes each step meticulously, ensuring that nothing is omitted. Through her persistent effort, her horns have achieved a remarkable state of lustre, shape, and hardness.\nThrough our inquiries with other Caprinae operators, we have established that even by Caprinae standards, Beeswax's horns are magnificent, a rare and beautiful sight to behold.\nAfter finishing her daily care, Beeswax often provides help to operators who need it, making her very popular within certain small circles.` },
    { title: 'Archive File 3', content: `The heart of the Sargon desert is difficult to traverse, and even experienced Messengers find it difficult to reach the deepest portions. In Beeswax's tribe, it is not unusual for young members of the tribe to go on journeys to the outside world and bring back what they see. Because these journeys have become traditions in their own rights, this particular tribe is unlike many others in that it does not totally reject novel things from the outside.\nIn addition to these journeys, one or two veteran Messengers may visit each year at certain times to bring the latest news to clan members, including the most recent music magazines.\nBeeswax does not appear to be someone who is incredibly shrewd; rather, she is straightforward and easy to understand. She loves music as well. When she left home, she brought with her a number of magazines issued by the Music Society, and these new publications became quite popular among the Caster teams. Even Beeswax herself quick integrated, smoothly establishing good relationships with the other operators.\nThough Beeswax doesn't talk much, is quiet most of the time, and tends to lose her train of thought, by no means is she simple-minded. In choosing to officially become an Operator of Rhodes Island, Beeswax did not rush to her decision, but had to weigh a variety of considerations.\nThe fact that she chose to stay to wait for her relative, while certainly her primary reason, is only one of several considerations. After a bit of inquiry, we determined that Beeswax believes that her time at Rhodes Island will serve as valuable experience to help her pass her tribe's rites of passage to adulthood— or rather, she sees working with Rhodes Island as one rung of that trial.\nAfter comprehensive deliberation, we also saw no reason to deny the participation of a talented and powerful Caster. On one hand, the addition of Beeswax is beneficial to us. On the other hand, we believe that such an option will help Beeswax as well, and Rhodes Island will be able to provide her with many further opportunities to understand this land.\nAs an addendum, the young Caprinae waited for several months before picking out her official code name. After writing to her hometown for help, she finally decided on the name she now uses.` },
    { title: 'Archive File 4', content: `The heart of Sargon is a vast region with a harsh environment, home to a large number of small and medium-sized tribes. Among them, some ancient tribes lack means of communicating with the outside world, and often retain their unique customs and traditions. Although the Caprinae tribe to which Beeswax belongs does not fall under this category, it still retains its customs despite regular contact with the outside world.\nThough many view the so-called "pagan" beliefs of these tribes as little more than barbaric vestiges of a primitive legacy, there are a few researchers who have been trying to ascertain the true source of these ancient beliefs.\nOperator Beeswax is not shy about sharing her beliefs. From her descriptions, she tends to use more abstract expressions, trying to depict a conceptual existence rather than a physical object of worship with an actual image. In fact, even though Beeswax claimed to have received the blessings of the gods, she admitted that she had frankly never directly seen these gods.` },
    { title: 'Promotion Record', content: `Every operator has their own journey, and in this case, Rhodes Island is just the first step of Beeswax's journey, not the end.\nWe may be in each others' company for the time being, like-minded and hand-in-hand, but we will all find our own direction one day. There will come a day when we go our separate ways.\nNo two roads completely overlap; while they may intersect at times, an intersection is just that.\nBut do remember that no matter where we go, her blessings will always follow us.` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/phalanx-caster-branch.png', factionIcon: '/icons/factions/sargon.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/beeswax/base.png', chibiSrc: '/operators/beeswax/chibi.webm', chibiMoveSrc: '/operators/beeswax/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'カワグチ' },
    { id: 'e2', label: 'Elite 2', src: '/operators/beeswax/e2.png', chibiSrc: '/operators/beeswax/chibi.webm', chibiMoveSrc: '/operators/beeswax/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'カワグチ' },
    { id: 'skin1', label: 'Weißer Sand', src: '/operators/beeswax/skin1.png', chibiSrc: '/operators/beeswax/chibi-skin1.webm', chibiMoveSrc: '/operators/beeswax/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'カワグチ' },
    { id: 'skin2', label: 'Holiday HD61', src: '/operators/beeswax/skin2.png', chibiSrc: '/operators/beeswax/chibi-skin2.webm', chibiMoveSrc: '/operators/beeswax/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'カワグチ' },
  ],
  portrait: '/operators/beeswax/portrait.png',
  portraitFocus: { y: 16.5, x: 48.8, zoom: 377 },
  summon: {
    name: 'Sand Obelisk',
    icon: '/operators/beeswax/sand-obelisk.png',
    position: 'Low',
    trait: 'Blocks 3 enemies',
    stats: { hp: 5000, atk: 100, def: 560, res: 10, block: 3, cost: 0, aspd: '1s', rdp: '0s' },
    range: [[2]],
    note: "Cannot be actively healed. Deployed through Beeswax's skill Guardian Obelisk, right at the closest ground enemy when activated. Remains until either Beeswax leaves the map or the skill expires.",
  },
}

export default beeswax
