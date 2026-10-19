import type { Operator } from '../../types'
import vermeilVoice from '../voices/vermeil'

const vermeil: Operator = {
  name: 'Vermeil', fileNo: 'R122', class: 'Sniper', branch: 'Marksman', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Siracusa', position: 'Ranged', race: 'Vulpo', gender: 'Female', birthplace: 'Unknown',
  birthday: 'June 25th', height: '153 cm', combatExp: '2 years', infectionStatus: 'Originium crystals visible on skin, confirmed Infected by medical examination.', illustrator: 'KENTllaall',
  cv: { JP: 'Ayaka Saitō', CN: 'Zhong Ke', EN: 'Lara Jill Miller', KR: 'Kim Seo-young' },
  voice: vermeilVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1230, atk: 550, def: 162, res: 0, block: 1, cost: 12, aspd: '1s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: "Hunter's Wisdom", desc: 'Improves own Skill Point recovery rate by +0.15/second', elite: 'E1' },
    { name: "Hunter's Wisdom", desc: 'Improves own Skill Point recovery rate by +0.3/second', elite: 'E2' },
  ],
  skills: [
    {
      name: 'ATK Up β', icon: '/operators/vermeil/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +20%', spInit: 0, sp: 40, dur: '25s' },
        { level: '2', desc: 'ATK +25%', spInit: 0, sp: 40, dur: '25s' },
        { level: '3', desc: 'ATK +30%', spInit: 0, sp: 40, dur: '25s' },
        { level: '4', desc: 'ATK +35%', spInit: 0, sp: 37, dur: '25s' },
        { level: '5', desc: 'ATK +40%', spInit: 0, sp: 37, dur: '25s' },
        { level: '6', desc: 'ATK +45%', spInit: 0, sp: 37, dur: '25s' },
        { level: '7', desc: 'ATK +50%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M1', desc: 'ATK +60%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M2', desc: 'ATK +70%', spInit: 5, sp: 37, dur: '25s' },
        { level: 'M3', desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Double Shot', icon: '/operators/vermeil/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +45%, each attack hits 1 additional target', spInit: 10, sp: 20, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +10%, each attack hits 1 additional target', spInit: 0, sp: 30, dur: '15s' },
        { level: '2', desc: 'ATK +10%, each attack hits 1 additional target', spInit: 1, sp: 29, dur: '15s' },
        { level: '3', desc: 'ATK +10%, each attack hits 1 additional target', spInit: 2, sp: 28, dur: '15s' },
        { level: '4', desc: 'ATK +20%, each attack hits 1 additional target', spInit: 3, sp: 27, dur: '16s' },
        { level: '5', desc: 'ATK +20%, each attack hits 1 additional target', spInit: 4, sp: 26, dur: '16s' },
        { level: '6', desc: 'ATK +20%, each attack hits 1 additional target', spInit: 5, sp: 25, dur: '16s' },
        { level: '7', desc: 'ATK +30%, each attack hits 1 additional target', spInit: 6, sp: 24, dur: '17s' },
        { level: 'M1', desc: 'ATK +35%, each attack hits 1 additional target', spInit: 7, sp: 23, dur: '18s' },
        { level: 'M2', desc: 'ATK +40%, each attack hits 1 additional target', spInit: 8, sp: 22, dur: '19s' },
        { level: 'M3', desc: 'ATK +45%, each attack hits 1 additional target', spInit: 10, sp: 20, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Vermeil's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    marx: { code: 'MAR-X', name: '"Still Alive"', stages: [
      { stage: 1, hp: '+90', atk: '+23', effect: 'New trait: Increases ATK to 110% when attacking aerial targets' },
      { stage: 2, hp: '+140', atk: '+28', effect: "Hunter's Wisdom improved: Improves own SP recovery rate by +0.35/second" },
      { stage: 3, hp: '+170', atk: '+31', effect: "Hunter's Wisdom improved: Improves own SP recovery rate by +0.4/second" },
    ]},
  },
  story: `A young Vulpo huntress who was found in the wilderness outside Siracusa, Vermeil now serves on a Rhodes Island sniper team. She was the sole survivor of a conflict between her settlement and an Ursus mercenary group. Afterwards, she abandoned her real name and dedicated herself to taking revenge against the mercenaries, losing an arm in the process. She was later aided by a Sankta named Dürrenmatt, who was secretly a wanted fugitive of Laterano. He crafted her a prosthetic arm and named her his heir. Following his death, Executor discovered Vermeil and brought her to Rhodes Island for treatment. Since then, she has suspended her revenge.`,
  profile: `Vermeil's place of birth remains unknown. She was in the wilderness outside Siracusa prior to joining Rhodes Island. We speculate that she was a hunter. She demonstrates extraordinary skill in the fields of hunting, sniping, and guerrilla warfare.\nShe currently serves Rhodes Island on a sniper team, providing force protection and sharpshooting assistance.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal blurry outlines of this operator's internal organs, clouded with abnormal dark spots. Her circulatory system shows an abnormally high rate of Originium particulate matter, with other signs of Oripathy infection, we can confirm that the operator is indeed Infected.\n[Cell-Originium Assimilation] 5%\nOperator Vermeil's skin has begun to crystallize.\n[Blood Originium-Crystal Density] 0.3u/L\nOperator Vermeil's infection has been stabilized.` },
    { title: 'Archive File 1', content: `Operator Vermeil's specific place of birth remains unknown. We know only that it is somewhere under the control of Siracusa and suffers rather few Catastrophes.\nIt is difficult to produce a unified, competitive entity in the wilderness. These sorts of things tend to come out of settlements. Although settlements can see their loose alliances broken down by respective interests, they remain close to each other and keep a similar pace of life.\nVermiel was for the most part a hunter. She hunted animals in the wilderness, collecting junk and other items along the way, to trade in settlements on the edge of the wilderness. She was willing to take all kinds of compensation, assuming the price was fair. Long before the nomadic cities kicked off the modern era, tribal disputes and resource competition spurred conflict in the wilderness for thousands of years, as different groups moved in, changed, merged, and disappeared.\nVermeil's cloak was handmade, a special product of a settlement called Vermeil. The cloak bears the pattern insignia of the town. It helps block the sun and sand. Hand-crafted and finely woven with excellent craftsmanship from locally-grown materials, these cloaks are a local specialty often sold or given as gifts to guests of Vermeil.` },
    { title: 'Archive File 2', content: `Vermeil does not shy away from the topic of losing her companions. According to her own account, the settlement she belonged to had a dispute with an Ursus mercenary group deep in the wilds of Siracusa. That dispute ultimately escalated to the use of force, resulting in the near extermination of the settlement. With the Siracusan government lacking control over (and interest in) the wilderness, the bloody affair was not recorded and soon forgotten.\nAs Vermeil was still young at the time of the incident, the Ursus spared her, but she could not forgive the mercenaries.\nOver the next three years, Vermeil abandoned her name and began to prepare everything she would need to exact her revenge. But found herself seriously injured and knocked unconscious by a wild beast. Fortunately, she was rescued by an elderly hunter passing by. In order to save her life, she had no choice but to give up her wounded arm. When Vermeil awakened and realized the position she was in, she devoted herself to a quick recovery. She overcame her pain, and rapidly adapted to the use of her prosthetic.\nVermeil continued to hunt her goal, down the path of revenge. The only one she spared was an elderly mercenary, long since retired, surrounded by children and grandchildren. She took only his left arm and a medal symbolizing his honor as a mercenary, sparing his life. At this point, Vermeil has suspended her retaliation against the Ursus.` },
    { title: 'Archive File 3', content: `Like many Infected, Vermeil does not know how she came to acquire the disease, nor does she have any knowledge or understanding of Oripathy. At first, she only had a mix of truth and untruths she picked up from a few people who had previously come into contact with the Infected. Not knowing how to deal with the disease, she chose to endure the pain, just as she had endured the pain of losing her arm before. Pain is pain, she assumed.\nThe number of Infected increased day by day, and the term "Infected" seemed to be on everyone's lips. It was only when others began to notice Vermeil's disease that things began to change. Rumors of Oripathy and fear of the Infected gradually evolved into persecution and expulsion. Vermeil lost all ability to handle the situation, overcome with the pain of her disease.\nBut Vermeil did not have any special opinion about her disease. She treated it as just another one of life's difficulties that couldn't be avoided. Even as she became known as Infected, even as she was discriminated against, she did not begrudge those who mistrusted her. She just avoided them.\nIf she could find a cure, she would go to it. If she couldn't, she would endure it until she couldn't walk. Just as she accepted the loss of her arm, Vermeil accepted herself as an Infected.` },
    { title: 'Archive File 4', content: `Regarding Operator Vermeil's prosthetic, after some repair and inspection, it became clear that this particular model does not match any commercially available products from its supposed region. Tangentially, though I would prefer not to say too much, it was a certain individual from the Laterano Notarial Hall who led Vermeil to Rhodes Island, and who at a certain point signed a cooperation agreement with Rhodes Island, and who works for Rhodes Island as an operator.\nTaking into account the information we needed to maintain Vermeil's prosthetic, we made several inquiries. Unexpectedly, the result of our inquiries came back to reveal that a Laterano mechanic was living in the mountain forests of Siracusa, pretending to be a local huntsman. The name of the mechanic matched that on a check covering Vermeil's medical bills. Although she herself has chosen to keep silent about her savior, she has always demonstrated great respect and admiration for Laterano people.\nSince the operator herself has not been willing to reveal the details, let us leave this story buried in Vermeil's memory. That may be for the best.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/vermeil/base.png', chibiSrc: '/operators/vermeil/chibi.webm', chibiMoveSrc: '/operators/vermeil/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'KENTllaall' },
    { id: 'e2', label: 'Elite 2', src: '/operators/vermeil/e2.png', chibiSrc: '/operators/vermeil/chibi.webm', chibiMoveSrc: '/operators/vermeil/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'KENTllaall' },
    { id: 'skin1', label: 'Playfellows', src: '/operators/vermeil/skin1.png', chibiSrc: '/operators/vermeil/chibi-skin1.webm', chibiMoveSrc: '/operators/vermeil/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '二开' },
  ],
  portrait: '/operators/vermeil/portrait.png',
  portraitFocus: { y: -2.2, x: 44.1, zoom: 261 },
}

export default vermeil
