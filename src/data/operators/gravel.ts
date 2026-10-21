import type { Operator } from '../../types'
import gravelVoice from '../voices/gravel'

const gravel: Operator = {
  name: 'Gravel', fileNo: 'KZ04', class: 'Specialist', branch: 'Executor', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Kazimierz', position: 'Melee', race: 'Zalak', gender: 'Female', birthplace: 'Kazimierz',
  birthday: 'January 20th', height: '156 cm', combatExp: '4 years', infectionStatus: 'No Originium crystals are visible. Medical examinations confirm her status as non-Infected.', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Rika Tachibana', CN: 'Gui Niang (credited as "D. QQ" in EN)', EN: 'Naomi McDonald', KR: 'Chae Min-ji' },
  voice: gravelVoice,
  trait: 'Significantly reduced Redeployment Time',
  tags: ['Fast-Redeploy', 'Defense'],
  stats: { hp: 1420, atk: 452, def: 335, res: 0, block: 1, cost: 8, aspd: '0.93s', rdp: '18s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Fast Deployment', desc: 'DP Cost -1', elite: 'E1' },
    { name: 'Support of the Little', desc: 'DP Cost -1; All units that cost 10 or less DP gain +6% DEF while Gravel is deployed', elite: 'E2' },
    { name: 'Support of the Little', desc: 'DP Cost -1; All units that cost 10 or less DP gain +8% (+2%) DEF while Gravel is deployed', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Shadow Assault', icon: '/operators/gravel/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: 'DEF +400% after Gravel is deployed; her DEF continually decreases over 12 seconds', spInit: 0, sp: 0, dur: '12s', rank: 'M3',
      levels: [
        { level: '1', desc: 'DEF +200% after Gravel is deployed; her DEF continually decreases over 6 seconds', spInit: 0, sp: 0, dur: '6s' },
        { level: '2', desc: 'DEF +220% after Gravel is deployed; her DEF continually decreases over 6 seconds', spInit: 0, sp: 0, dur: '6s' },
        { level: '3', desc: 'DEF +240% after Gravel is deployed; her DEF continually decreases over 6 seconds', spInit: 0, sp: 0, dur: '6s' },
        { level: '4', desc: 'DEF +270% after Gravel is deployed; her DEF continually decreases over 7 seconds', spInit: 0, sp: 0, dur: '7s' },
        { level: '5', desc: 'DEF +290% after Gravel is deployed; her DEF continually decreases over 7 seconds', spInit: 0, sp: 0, dur: '7s' },
        { level: '6', desc: 'DEF +310% after Gravel is deployed; her DEF continually decreases over 7 seconds', spInit: 0, sp: 0, dur: '7s' },
        { level: '7', desc: 'DEF +340% after Gravel is deployed; her DEF continually decreases over 8 seconds', spInit: 0, sp: 0, dur: '8s' },
        { level: 'M1', desc: 'DEF +360% after Gravel is deployed; her DEF continually decreases over 9 seconds', spInit: 0, sp: 0, dur: '9s' },
        { level: 'M2', desc: 'DEF +380% after Gravel is deployed; her DEF continually decreases over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: 'M3', desc: 'DEF +400% after Gravel is deployed; her DEF continually decreases over 12 seconds', spInit: 0, sp: 0, dur: '12s' },
      ],
    },
    {
      name: 'Rat Swarm', icon: '/operators/gravel/skill-2.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, gains a Barrier that can absorb damage equal to 250% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s', rank: 'M3',
      levels: [
        { level: '1', desc: 'After deployment, gains a Barrier that can absorb damage equal to 100% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: '2', desc: 'After deployment, gains a Barrier that can absorb damage equal to 110% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: '3', desc: 'After deployment, gains a Barrier that can absorb damage equal to 120% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: '4', desc: 'After deployment, gains a Barrier that can absorb damage equal to 140% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: '5', desc: 'After deployment, gains a Barrier that can absorb damage equal to 150% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: '6', desc: 'After deployment, gains a Barrier that can absorb damage equal to 160% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: '7', desc: 'After deployment, gains a Barrier that can absorb damage equal to 180% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: 'M1', desc: 'After deployment, gains a Barrier that can absorb damage equal to 200% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: 'M2', desc: 'After deployment, gains a Barrier that can absorb damage equal to 220% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
        { level: 'M3', desc: 'After deployment, gains a Barrier that can absorb damage equal to 250% of Max HP, decaying over 10 seconds', spInit: 0, sp: 0, dur: '10s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Gravel's Badge", desc: 'Appointed as Specialist Operator to exercise Executor responsibilities' },
    exex: { code: 'EXE-X', name: 'Covert Action Toolkit', stages: [
      { stage: 1, hp: '+100', def: '+40', effect: 'New trait: Refunds a large portion of the current DP Cost when retreated' },
      { stage: 2, hp: '+120', def: '+50', effect: 'New talent: Battlefield Vassal — When deployed, reduce the Redeployment Time of [Kazimierz] Operators currently on cooldown by 3 seconds' },
      { stage: 3, hp: '+135', def: '+60', effect: 'Battlefield Vassal improved: When deployed, reduce the Redeployment Time of [Kazimierz] Operators currently on cooldown by 5 seconds' },
    ]},
  },
  profile: `A Rank 4 Knight of Kazimierz, staying at Rhodes Island for undisclosed reasons.\nProficient in covert ops and assassinations, Gravel volunteered to be the Doctor's personal bodyguard.`,
  story: `Senomy is a Zalak chattel from Kazimierz who could not remember her background and bought into the service of the famous knight family Maypoles. Under the encouragement of her master Gekoski Maypole, she managed to rise into a Rank 4 campaign knightess in the Adeptus Sprawiedliwi Kazimierz under the callsign "Gravel". Even though she was freed later on, Gravel continues to serve the Adeptus as the bodyguard of the Grand Knight Ioleta Russell until she was attracted by the Doctor during Rhodes Island's stay at Kawalerielki. After protecting the Doctor from the nefarious Armorless Union, Senomy decides to join R.I. after the 24th Kazimierz Major as a covert ops and "wetworks" specialist.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests on this Operator show clear outlines of internal organs, with no abnormal dark spots or shadows. No unusual traces of Originium particles present in the circulatory system, no signs of infection, confirming this operator as uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Gravel showed no signs of infection.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Gravel rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `A girl no one would ever believe is a knight, were she not to divulge that fact.\nSome of the things she says about the Doctor have raised questions about her mental state...\nFortunately, no other issues have been reported.\nBlushes easily when excited or emotional.` },
    { title: 'Archive File 2', content: `Gravel is a level-4 knight, barely mid-rank in the hierarchy.\nBut the title "Knight of Kazimierz" is itself a status symbol. It is hard to imagine another knight with such status, other than Miss Nearl, who would stay with a little-known outfit like Rhodes Island.\nOf course, Gravel is a special case, since her reasons for being here are obvious to everyone.` },
    { title: 'Archive File 3', content: `With the passage of time, knighthood has evolved from a title of nobility to a profession. No longer do they maintain a stuffy, goody-two-shoes image.\nKnights versed in covert ops such as Gravel are now fairly common.\nBut to rise to knighthood from such a humble background like Gravel's is still a rarity.\nIndeed, she was sold to Kazimierz as "chattel," with a barcode on her shoulder an indelible reminder of her origins.\nFrom those modest beginnings, she worked her way up the ladder to eventually become a level-4 knight, and just as she refuses to hide her barcode covered, has never hidden her past from her curious comrades.\nWhile we don't speak of people as "chattel" here at Rhodes Island, and knights don't have any special status over anyone else, her honesty and openness is still very much appreciated.` },
    { title: 'Archive File 4', content: `Most Operators at Rhodes Island answer to their codenames as their new names. They leave their pasts behind, and some use those codenames as the first step in their new lives at Rhodes Island. Naturally, to some it is merely a convenience, rather than anything so meaningful.\nTo Gravel, however, divulging her real name to someone she trusts carries a very special meaning––that she is sharing her "chattel" identity and her knight identity with that person.\nThis is a privilege even the Kazimierz family that endowed her with knighthood has not yet enjoyed.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/executor-branch.png', factionIcon: '/icons/factions/kazimierz.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/gravel/base.png', chibiSrc: '/operators/gravel/chibi.webm', chibiMoveSrc: '/operators/gravel/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 2.5, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'e2', label: 'Elite 2', src: '/operators/gravel/e2.png', chibiSrc: '/operators/gravel/chibi.webm', chibiMoveSrc: '/operators/gravel/chibi-move.webm', chibiFraming: { scale: 1.27, offsetXPercent: 2.5, offsetYPercent: 3.1 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'skin1', label: 'Modeling Night', src: '/operators/gravel/skin1.png', chibiSrc: '/operators/gravel/chibi-skin1.webm', chibiMoveSrc: '/operators/gravel/chibi-move-skin1.webm', chibiFraming: { scale: 1.28, offsetXPercent: 1.5, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
  ],
  portrait: '/operators/gravel/portrait.png',
  portraitFocus: { y: -5.9, x: 45.7, zoom: 310 },
}

export default gravel
