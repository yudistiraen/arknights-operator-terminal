import type { Operator } from '../../types'
import sussurroVoice from '../voices/sussurro'

const sussurro: Operator = {
  name: 'Sussurro', fileNo: 'R107', class: 'Medic', branch: 'Medic', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Siracusa', position: 'Ranged', race: 'Vulpo', gender: 'Female', birthplace: 'Siracusa',
  birthday: 'September 4th', height: '142 cm', combatExp: '1 year', infectionStatus: 'Crystals have appeared on her body. Infection confirmed by medical examination.', illustrator: '将',
  cv: { JP: 'Haruka Terui', CN: 'Yue Xin', EN: 'Cassandra Lee Morris', KR: 'Seo Yu-ri' },
  voice: sussurroVoice,
  trait: 'Restores the HP of allies',
  tags: ['Healing'],
  stats: { hp: 1345, atk: 548, def: 122, res: 0, block: 1, cost: 18, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Minimally Invasive Surgery', desc: 'Increases healing effects by 10% on all Operators with DP Cost no more than 10 when Sussurro is in the squad', elite: 'E1' },
    { name: 'Minimally Invasive Surgery', desc: 'Increases healing effects by 13% (+3%) on all Operators with DP Cost no more than 10 when Sussurro is in the squad', elite: 'E1 (Potential 5)' },
    { name: 'Minimally Invasive Surgery', desc: 'Increases healing effects by 20% on all Operators with DP Cost no more than 10 when Sussurro is in the squad', elite: 'E2' },
    { name: 'Minimally Invasive Surgery', desc: 'Increases healing effects by 23% (+3%) on all Operators with DP Cost no more than 10 when Sussurro is in the squad', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Healing Up β', icon: '/operators/sussurro/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +70%', spInit: 10, sp: 30, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +15%', spInit: 10, sp: 40, dur: '25s' },
        { level: '2', desc: 'ATK +20%', spInit: 10, sp: 40, dur: '25s' },
        { level: '3', desc: 'ATK +25%', spInit: 10, sp: 40, dur: '25s' },
        { level: '4', desc: 'ATK +30%', spInit: 10, sp: 35, dur: '25s' },
        { level: '5', desc: 'ATK +35%', spInit: 10, sp: 35, dur: '25s' },
        { level: '6', desc: 'ATK +40%', spInit: 10, sp: 35, dur: '25s' },
        { level: '7', desc: 'ATK +50%', spInit: 10, sp: 32, dur: '25s' },
        { level: 'M1', desc: 'ATK +55%', spInit: 10, sp: 32, dur: '25s' },
        { level: 'M2', desc: 'ATK +60%', spInit: 10, sp: 32, dur: '25s' },
        { level: 'M3', desc: 'ATK +70%', spInit: 10, sp: 30, dur: '25s' },
      ],
    },
    {
      name: 'Deep Healing', icon: '/operators/sussurro/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +100%, ASPD +100\nCan be used up to twice in one battle', spInit: 0, sp: 15, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +40%, ASPD +40\nCan be used up to twice in one battle', spInit: 0, sp: 25, dur: '20s' },
        { level: '2', desc: 'ATK +45%, ASPD +45\nCan be used up to twice in one battle', spInit: 0, sp: 25, dur: '21s' },
        { level: '3', desc: 'ATK +50%, ASPD +50\nCan be used up to twice in one battle', spInit: 0, sp: 25, dur: '22s' },
        { level: '4', desc: 'ATK +55%, ASPD +55\nCan be used up to twice in one battle', spInit: 0, sp: 22, dur: '25s' },
        { level: '5', desc: 'ATK +60%, ASPD +60\nCan be used up to twice in one battle', spInit: 0, sp: 22, dur: '26s' },
        { level: '6', desc: 'ATK +65%, ASPD +65\nCan be used up to twice in one battle', spInit: 0, sp: 22, dur: '27s' },
        { level: '7', desc: 'ATK +70%, ASPD +70\nCan be used up to twice in one battle', spInit: 0, sp: 19, dur: '30s' },
        { level: 'M1', desc: 'ATK +80%, ASPD +80\nCan be used up to twice in one battle', spInit: 0, sp: 18, dur: '30s' },
        { level: 'M2', desc: 'ATK +90%, ASPD +90\nCan be used up to twice in one battle', spInit: 0, sp: 17, dur: '30s' },
        { level: 'M3', desc: 'ATK +100%, ASPD +100\nCan be used up to twice in one battle', spInit: 0, sp: 15, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Sussurro's Badge", desc: 'Appointed as Medic Operator to exercise Medic responsibilities' },
    phyx: { code: 'PHY-X', name: '...Who Heals Not Herself', stages: [
      { stage: 1, hp: '+50', aspd: '+3', effect: 'New trait: When healing allied units with less than 50% HP, increases heal amount by 15%' },
      { stage: 2, hp: '+80', aspd: '+4', effect: 'Minimally Invasive Surgery improved: Increases healing effects by 23% on all Operators with DP Cost no more than 10 when Sussurro is in the squad' },
      { stage: 3, hp: '+100', aspd: '+5', effect: 'Minimally Invasive Surgery improved: Increases healing effects by 25% on all Operators with DP Cost no more than 10 when Sussurro is in the squad' },
    ]},
  },
  story: `Sussurro is a Siracusan Vulpo graduate in medical field who is driven by the need to find a meaningful life. At one point, Sussurro even became a volunteer to treat an Oripathy plague in her hometown Palermo in the midst of a disastrous industrial accident there. Even though her participation into the rescue mission caused her to become an Infected herself, she is willing to sacrifice her life and calmly face even the most dangerous situation. As a medical and logistical staff of Rhodes Island, her calmness and bravery have been greatly admired by other Operators.`,
  profile: `Sussurro is a graduate of the Siracusa-Palermo Medical Academy. She has a sufficient level of knowledge in basic medical care.\nShe is now a medic at Rhodes Island and is a respected member of the headquarters' logistics system.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 2%\nPatient's oripathy is mild and currently shows no indications of spreading.\n[Blood Originium-Crystal Density] 0.3u/L\nPatient's disease is under control.` },
    { title: 'Archive File 1', content: `Sussurro was born to an ordinary family in a large city in Siracusa. Her parents were ordinary citizens who worked in local public institutions. They had two sons and two daughters. Sussurro was their third child.\nAlthough Sussurro's parents wanted her to be a quiet, obedient child, she did not respond positively to these expectations. Sometimes this was to help her younger sister get back snacks her brothers had stolen, and sometimes this was to help her sister get a hold of a toy she couldn't have. Since her childhood, Sussurro has developed a personality that takes initiative.\nSussurro's two older brothers have already grown up and have gone into business. Her younger sister is studying in kindergarten. Sussurro herself chose to study medicine. She did not do so out of any grand ambition or dream, but because the medical industry in Siracusa holds promise and is a good field to work in.` },
    { title: 'Archive File 2', content: `Sussurro's life as a medical student was uneventful. She busied herself preparing for exams and participating in experiments. Her small figure was often bouncing between the different buildings on campus, and her short stature notwithstanding, all of her abilities steadily progressed.\nLuckily for Sussurro, she got to make a solid group of friends between classes and maintained good relationships with some older students. These medical students all embraced the same dreams, confronted the same challenges, and worked towards the future together. With everyone's help and encouragement, Sussurro managed to press on through the long, dull days in her time as a medical student.\nThough Sussurro originally had no aspirations of her own, through making friends with all kinds of people, she gradually came to understand the reasoning behind their choices. Whether it was to secure a job with a stable salary and life environment, out of a genuine desire to help others, or just out of pure interest in biology, Sussurro found their aspirations infectious. She liked everyone who had a dream and worked hard to fulfill it, and at the same time, her own thinking became clear:\nDoes becoming a doctor hold any special meaning for me?` },
    { title: 'Archive File 3', content: `When the oripathy crisis gradually worsened throughout every major city, people were forced to confront an all-new and unknown illness. Now, both public and private hospitals were packed with patients, and medical resources became strained. Sussurro's clinical instructor as well as her seniors all participated in efforts to combat the disease.\nFaced with a notice that all major hospitals were recruiting medical students to act as volunteers, Sussurro did not think twice about signing up. It was at this moment that she felt she was finally a medical student, and she found genuine purpose.` },
    { title: 'Archive File 4', content: `Sussurro did not think about the fact that she had become infected by volunteering to participate in the treatment of the infected. Even when three days had passed since she herself had been transformed from doctor to infected, she did not feel anything. Everything just seemed to happen so suddenly.\nIt wasn't until she witnessed a patient be declared untreatable and get sent to the intensive care unit with a blank stare that she made the connection between herself and the situation at hand.` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/sussurro/base.png', chibiSrc: '/operators/sussurro/chibi.webm', chibiMoveSrc: '/operators/sussurro/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '将' },
    { id: 'e2', label: 'Elite 2', src: '/operators/sussurro/e2.png', chibiSrc: '/operators/sussurro/chibi.webm', chibiMoveSrc: '/operators/sussurro/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '将' },
    { id: 'skin1', label: 'Summer Flower FA026', src: '/operators/sussurro/skin1.png', chibiSrc: '/operators/sussurro/chibi-skin1.webm', chibiMoveSrc: '/operators/sussurro/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '将' },
    { id: 'skin2', label: 'Travel Freely', src: '/operators/sussurro/skin2.png', chibiSrc: '/operators/sussurro/chibi-skin2.webm', chibiMoveSrc: '/operators/sussurro/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '将' },
  ],
  portrait: '/operators/sussurro/portrait.png',
  portraitFocus: { y: -9.3, x: 41.2, zoom: 258 },
}

export default sussurro
