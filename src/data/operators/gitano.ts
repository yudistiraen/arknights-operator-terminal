import type { Operator } from '../../types'
import gitanoVoice from '../voices/gitano'

const gitano: Operator = {
  name: 'Gitano', fileNo: 'SI01', class: 'Caster', branch: 'Splash Caster', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Sami', position: 'Ranged', race: 'Elafia', gender: 'Female', birthplace: 'Sami',
  birthday: 'January 15th', height: '171 cm', combatExp: '1 year', infectionStatus: 'Showed physical signs of Originium, infection confirmed by medical examination.', illustrator: '谜肘',
  cv: { JP: 'Kana Yuuki', CN: 'Xu Hui (credited as "Chris Xu" in EN)', EN: 'Sarah Ovens', KR: 'Kim Bo-na' },
  voice: gitanoVoice,
  trait: 'Deals AOE Arts damage',
  tags: ['AoE'],
  stats: { hp: 1598, atk: 715, def: 118, res: 20, block: 1, cost: 32, aspd: '2.9s', rdp: '70s' },
  range: {
    base: [[1,1,0],[2,1,1],[1,1,0]],
    e1: [[1,1,1],[2,1,1],[1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Divination', desc: 'Obtains one of the following buffs permanently when deployed: ATK +7%, ASPD +7, or Max HP +12%', elite: 'E1' },
    { name: 'Divination', desc: 'Obtains one of the following buffs permanently when deployed: ATK +9% (+2%), ASPD +9 (+2), or Max HP +14% (+2%)', elite: 'E1 (Potential 5)' },
    { name: 'Divination', desc: 'Obtains one of the following buffs permanently when deployed: ATK +13%, ASPD +13, or Max HP +20%', elite: 'E2' },
    { name: 'Divination', desc: 'Obtains one of the following buffs permanently when deployed: ATK +15% (+2%), ASPD +15 (+2), or Max HP +22% (+2%)', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Tactical Chant β', icon: '/operators/gitano/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ASPD +75', spInit: 10, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ASPD +15', spInit: 0, sp: 45, dur: '25s' },
        { level: '2', desc: 'ASPD +20', spInit: 0, sp: 45, dur: '25s' },
        { level: '3', desc: 'ASPD +25', spInit: 0, sp: 45, dur: '25s' },
        { level: '4', desc: 'ASPD +30', spInit: 0, sp: 40, dur: '25s' },
        { level: '5', desc: 'ASPD +35', spInit: 0, sp: 40, dur: '25s' },
        { level: '6', desc: 'ASPD +40', spInit: 0, sp: 40, dur: '25s' },
        { level: '7', desc: 'ASPD +45', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M1', desc: 'ASPD +55', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M2', desc: 'ASPD +65', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M3', desc: 'ASPD +75', spInit: 10, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Destiny', icon: '/operators/gitano/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +100%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 10 seconds after using this skill', spInit: 50, sp: 85, dur: '30s', rank: 'M3',
      note: 'Contrary to the wording which implies that Gitano is disarmed when Destiny expires, she is Stunned instead.',
      levels: [
        { level: '1', desc: 'ATK +30%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 15 seconds after using this skill', spInit: 50, sp: 100, dur: '30s' },
        { level: '2', desc: 'ATK +35%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 15 seconds after using this skill', spInit: 50, sp: 100, dur: '30s' },
        { level: '3', desc: 'ATK +40%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 15 seconds after using this skill', spInit: 50, sp: 100, dur: '30s' },
        { level: '4', desc: 'ATK +45%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 14 seconds after using this skill', spInit: 50, sp: 95, dur: '30s' },
        { level: '5', desc: 'ATK +50%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 14 seconds after using this skill', spInit: 50, sp: 95, dur: '30s' },
        { level: '6', desc: 'ATK +55%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 14 seconds after using this skill', spInit: 50, sp: 95, dur: '30s' },
        { level: '7', desc: 'ATK +70%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 13 seconds after using this skill', spInit: 50, sp: 90, dur: '30s' },
        { level: 'M1', desc: 'ATK +80%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 12 seconds after using this skill', spInit: 50, sp: 90, dur: '30s' },
        { level: 'M2', desc: 'ATK +90%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 11 seconds after using this skill', spInit: 50, sp: 90, dur: '30s' },
        { level: 'M3', desc: 'ATK +100%; Range expands; Attacks all targets within range simultaneously\nGitano stops attacking for 10 seconds after using this skill', spInit: 50, sp: 85, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Gitano's Badge", desc: 'Appointed as Caster Operator to exercise Splash Caster responsibilities' },
    spcx: { code: 'SPC-X', name: 'Travel Kit for the Fortune-Teller', stages: [
      { stage: 1, hp: '+80', atk: '+35', effect: 'New trait: Attack Range expands' },
      { stage: 2, hp: '+120', atk: '+50', effect: 'Divination improved: Obtains one of the following buffs permanently when deployed: ATK +17%, ASPD +17, or Max HP +25%' },
      { stage: 3, hp: '+150', atk: '+57', effect: 'Divination improved: Obtains one of the following buffs permanently when deployed: ATK +18%, ASPD +18, or Max HP +28%' },
    ]},
  },
  profile: `Gitano is a mystic from Sami, tarot expert and a great card player. She has never spoken to anyone of her past prior coming to Rhodes Island, and it remains a mystery. All anyone knows is that her readings are very accurate.`,
  story: `"Gitano" Ragna the Samifjod Elafia hails from a tribe that once inhabited the Mrykwood. Seven years ago, the blizzard of the Andskotarnir slowly corroded her homeland, and she and her elder brother Lazal had to determine the tribe's fate as they were one without a leading Snowpriest. The latter chose to march northward and face the demons, but the former, through her divination, preferred to lead them southward for refuge. The two siblings eventually split their ways along the migration. Even her loyal tribesmen began questioning her decision, thinking that they did not need to abandon their homeland. Out of guilt, Ragna left her tribe and the siblings' grudge remains unsettled.\n\nAfter leaving Sami, Ragna became a wandering soothsayer known for her experience with tarot cards and her mystic crystal ball. She was brought under Rhodes Island as Operator "Gitano" to treat her Oripathy, and she continues her career there as fortune teller for her fellow colleagues. However, she learns that her tribe is still threatened by the Collapsals despite settling in the south, and unfortunate news reaches her – her brother died in battle by Collapsal corruption while bravely fighting their enemies in the north. To this day, she still yearns for a final farewell, yet she could no longer receive an answer from her brother's soul.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this Operator showed blurry outline of internal organs with visible unusual dark spots. Unusually high concentration of Originium particles were present in her circulatory system, indicating infection and confirming her as Infected at this stage.\n[Cell-Originium Assimilation] 5%\nThe infection could be related to Operator Gitano's arcane abilities, though this has yet been proven.\n[Blood Originium-Crystal Density] 0.3u/L\nInfection approaching mid-stage, Originium beginning to have physical effects that are not obvious.` },
    { title: 'Archive File 1', content: `A fortune teller cannot tell her own future, but she can read the omens and guide her choices. She has the power to create devastating explosions with her Originium crystal ball, but she must also withstand the backlash.` },
    { title: 'Archive File 2', content: `Divination is a hobby to Gitano that she does almost for free, accepting fruits and cakes as a token payment. Her clients ask for readings on anything from the future to a misplaced key. Just like any soothsayer, Gitano gives ambiguous answers that require some careful thought to decipher.` },
    { title: 'Archive File 3', content: `Unlike her relaxed composure during a reading, Gitano gets anxious easily and becomes very competitive when playing cards. She is never allowed to shuffle the deck out of fear that she'll cheat. Even then, she knows countless other card tricks, and unless she's caught red-handed, she'll never admit to cheating. Still, some people play with her because they either want to catch her in the act, or see a nervous side of her she doesn't otherwise show.` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/splash-caster-branch.png', factionIcon: '/icons/factions/sami.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/gitano/base.png', chibiSrc: '/operators/gitano/chibi.webm', chibiMoveSrc: '/operators/gitano/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '谜肘' },
    { id: 'e2', label: 'Elite 2', src: '/operators/gitano/e2.png', chibiSrc: '/operators/gitano/chibi.webm', chibiMoveSrc: '/operators/gitano/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 1, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '谜肘' },
    { id: 'skin1', label: 'Unknown Journey', src: '/operators/gitano/skin1.png', chibiSrc: '/operators/gitano/chibi-skin1.webm', chibiMoveSrc: '/operators/gitano/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.7, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '谜肘' },
  ],
  portrait: '/operators/gitano/portrait.png',
  portraitFocus: { y: -0.5, x: 51.4, zoom: 364 },
}

export default gitano
