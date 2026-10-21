import type { Operator } from '../../types'
import asbestosVoice from '../voices/asbestos'

const asbestos: Operator = {
  name: 'Asbestos', fileNo: 'RB05', class: 'Defender', branch: 'Arts Protector', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rim Billiton', position: 'Melee', race: 'Savra', gender: 'Female', birthplace: 'Rim Billiton',
  birthday: 'July 30th', height: '156 cm', combatExp: 'None', infectionStatus: 'Confirmed Infected by medical examination.', illustrator: 'TEAM EXPNDR',
  cv: { JP: 'Kei Shindou', CN: 'Luo Yanqian (credited as "Rose" in EN)', EN: 'Phoebe Panaretos', KR: 'Jung Yu-mi' },
  voice: asbestosVoice,
  trait: 'Normal attacks deal Arts Damage while the skill is active',
  tags: ['Defense', 'DPS'],
  stats: { hp: 3135, atk: 633, def: 555, res: 15, block: 3, cost: 25, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [[2]],
    e1: [[2]],
    e2: [[2]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Excellent', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts Assimilation': 'Standard' },
  talents: [
    { name: 'Moist Skin', desc: "RES +5, restores 1 extra SP when hit by an enemy's normal Arts attack", elite: 'E1' },
    { name: 'Moist Skin', desc: "RES +10, restores 3 extra SP when hit by an enemy's normal Arts attack", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Resilient Mode', icon: '/operators/asbestos/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -30% during the skill duration', spInit: 0, sp: 20, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -10% during the skill duration', spInit: 0, sp: 30, dur: '20s' },
        { level: '2', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -10% during the skill duration', spInit: 0, sp: 29, dur: '20s' },
        { level: '3', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -10% during the skill duration', spInit: 0, sp: 28, dur: '20s' },
        { level: '4', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -15% during the skill duration', spInit: 0, sp: 27, dur: '20s' },
        { level: '5', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -15% during the skill duration', spInit: 0, sp: 26, dur: '20s' },
        { level: '6', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -15% during the skill duration', spInit: 0, sp: 25, dur: '20s' },
        { level: '7', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -20% during the skill duration', spInit: 0, sp: 24, dur: '20s' },
        { level: 'M1', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -23% during the skill duration', spInit: 0, sp: 23, dur: '20s' },
        { level: 'M2', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -26% during the skill duration', spInit: 0, sp: 22, dur: '20s' },
        { level: 'M3', desc: 'Dodges the next instance of Arts damage, and reduces Arts damage taken by -30% during the skill duration', spInit: 0, sp: 20, dur: '20s' },
      ],
    },
    {
      name: 'Thermal Power Mode', icon: '/operators/asbestos/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack interval increases, ATK +90%, DEF +60%, Attack Range expands significantly, and normal attacks now deal AoE damage', spInit: 30, sp: 50, dur: '50s', rank: 'M3',
      range: [
        [0,1,1,0],
        [2,1,1,1],
        [0,1,1,0],
      ],
      note: "Thermal Power Mode increases Asbestos' attack interval by 0.4 seconds. Asbestos' attacks with Thermal Power Mode are considered as ranged and can target aerial enemies, and has a splash damage radius of 1 tile.",
      levels: [
        { level: '1', desc: 'Attack interval increases, ATK +30%, DEF +25%, Attack Range expands, and normal attacks now deal AoE damage', spInit: 10, sp: 60, dur: '40s' },
        { level: '2', desc: 'Attack interval increases, ATK +35%, DEF +25%, Attack Range expands, and normal attacks now deal AoE damage', spInit: 12, sp: 59, dur: '41s' },
        { level: '3', desc: 'Attack interval increases, ATK +40%, DEF +25%, Attack Range expands, and normal attacks now deal AoE damage', spInit: 14, sp: 58, dur: '42s' },
        { level: '4', desc: 'Attack interval increases, ATK +45%, DEF +35%, Attack Range expands, and normal attacks now deal AoE damage', spInit: 16, sp: 57, dur: '43s' },
        { level: '5', desc: 'Attack interval increases, ATK +50%, DEF +35%, Attack Range expands, and normal attacks now deal AoE damage', spInit: 18, sp: 56, dur: '44s' },
        { level: '6', desc: 'Attack interval increases, ATK +55%, DEF +35%, Attack Range expands, and normal attacks now deal AoE damage', spInit: 20, sp: 55, dur: '45s' },
        { level: '7', desc: 'Attack interval increases, ATK +60%, DEF +45%, Attack Range expands, and normal attacks now deal AoE damage', spInit: 22, sp: 54, dur: '46s' },
        { level: 'M1', desc: 'Attack interval increases, ATK +70%, DEF +50%, Attack Range expands significantly, and normal attacks now deal AoE damage', spInit: 24, sp: 53, dur: '47s' },
        { level: 'M2', desc: 'Attack interval increases, ATK +80%, DEF +55%, Attack Range expands significantly, and normal attacks now deal AoE damage', spInit: 26, sp: 52, dur: '48s' },
        { level: 'M3', desc: 'Attack interval increases, ATK +90%, DEF +60%, Attack Range expands significantly, and normal attacks now deal AoE damage', spInit: 30, sp: 50, dur: '50s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Asbestos's Badge", desc: 'Appointed as Defender Operator to exercise Arts Protector responsibilities' },
    astx: { code: 'AST-X', name: 'Asbestos vs. Two-headed Gloompincer', stages: [
      { stage: 1, hp: '+80', atk: '+28', def: '+18', effect: "Trait improved: On skill activation, normal attacks deal Arts damage. When attacking and being attacked, deals extra 10% of ATK as Arts damage to target" },
      { stage: 2, hp: '+125', atk: '+35', def: '+25', effect: "Moist Skin improved: RES +12, restores 3 extra SP when hit by an enemy's normal Arts attack" },
      { stage: 3, hp: '+150', atk: '+45', def: '+30', effect: "Moist Skin improved: RES +12, restores 4 extra SP when hit by an enemy's normal Arts attack" },
    ]},
  },
  profile: `One of Rim Billiton's more famous explorers. Asbestos was recommended to Rhodes Island for treatment by Operator Magallan, and signed an agreement to become an operator after negotiation.\nAfter professional training, she uses a large shield that she personally modified to protect other operators on the front lines.`,
  story: `The rude and unruly Rim Billitoner Savra explorer Asbestos contracted Oripathy during one of her expeditions. Under the recommendation of her fellow explorer and best friend Magallan, she went to Rhodes Island for treatment. In return, she (half-heartedly) lends her expertise and knowledge as a field combatant for R.I., utilizing a rather unusual shield that also acts as an Arts catalyst to protect her allies and dispatch her enemies.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 7%\nA small amount of crystals are distributed across the surface of the body, and the disease has caused her eyes to change color. So far, no other complications besides the discoloration have been found.\n[Blood Originium-Crystal Density] 0.22u/L\nThe operator contracted Oripathy at a young age and had not done anything previously to respond to the condition, which means that the original symptoms could be very profound. However, due to her frequent expeditions and excellent physical condition, her symptoms have been relieved to a certain extent, and stabilized further after receiving treatment from Rhodes Island. Requires regular treatment.` },
    { title: 'Archive File 1', content: `Asbestos is an explorer with a foul attitude.\nShe's never friendly with anyone and is the epitome of "doing things my way," but if you can withstand her verbal abuse, you'll find her to be a mature and capable individual.\nShe spends most of her time exploring outdoors, and rarely makes public appearances when she is on Rhodes Island. Occasionally, she is seen forcing the Doctor to drink.` },
    { title: 'Archive File 2', content: `Even though she denies it, it is clear that Asbestos is a true explorer. Of course, she is very different from Magallan.\nOn one hand, Magallan is employed by Rhine Lab. Though the desire to explore the frozen tundra was her own, Rhine Lab obviously took the lion's share of the rewards. Additionally, Magallan's exploration was better planned and thoroughly measured.\nOn the other hand, Asbestos's exploration is completely amateur – nobody asked her to do it, and nobody is backing her financially. She merely follows her own ideas, walking around and recording her observations in her travel notes and publishing them in magazines.\nIn fact, almost all active explorers on Terra are affiliated with either some country or company, such as Magallan is, and explorers with no backing, such as Asbestos, are very rare. Realistically speaking, a desire to explore the world cannot be fulfilled solely through courage, but requires capital as well.\nThough Asbestos is reluctant to reveal her background, we can surmise that there's likely nothing exceedingly bad or traumatic. As for why she decided to become a maverick explorer, Rhodes Island does not intend to pry too much. That is to say, on this point, she differs greatly from Magallan.\nAs for the differences in their views on exploration, Asbestos claims that she's just "in it for the excitement." While it is true that when we mention explorers, we often have an impression of them as being pioneers, trailblazers, delvers into the unknown, or torchbearers for those who come after them, etc., none of these are substantively different.\n"Opening the way for those in the future" is generally the result rather than the cause. For example, while Magallan has always wanted to be an explorer, that desire fundamentally stems from her longing for the frozen tundra. Rather, those who try to act out of one of these clichéd ideals of righteousness usually end up giving up halfway through.\nFrom the footprints that Asbestos has left and the records she has taken, there is no doubt that she is an excellent explorer.` },
    { title: 'Archive File 3', content: `Unlike most operators who are introverted or have trouble managing their interpersonal relationships, we can determine two things from Asbestos's interactions with others: First, she knows how to see a task through to its completion, and second, she knows exactly how to get along with people.\nIt's just that she doesn't want to do it.\nShe doesn't care if she acts in a way that makes others hate her. As a matter of fact, she even revels in that animus, especially when people say it to her face. She understands that the true way to alienate others is not to rudely refuse, but rather to be calculatingly evasive, or to be ambivalent.\nRather than saying she doesn't understand interpersonal relationships, it's more accurate to say that she sees them far too thoroughly and has chosen not to maintain certain norms after recognizing all of this.\nLike Magallan, she knows how to endure loneliness, but a major difference is, one of Magallan's greatest motivating factors is the fact that someone is waiting for her. Asbestos, however, has no need for such motivation, nor is she trying to compensate for that with something else. She simply has learned to draw her motivation from other things.\nIt's little wonder that some operators think she's very cool. She's willing to bear the consequences of her decisions, alone.\nEven though we have no way of finding out about her past without her cooperation, based upon the result, she actively decided to become a self-styled "jerk" who antagonizes everyone, and is intent on staying that way until the end of her life.\nIt is not for us to judge whether her lifestyle is correct, nor do we expect her to change. However, from Rhodes Island's standpoint, we always hope that operators will be able to trust us. In this respect, Asbestos may be one of the most difficult operators we've ever dealt with.\nHowever, thanks to the Doctor's persistent efforts, Asbestos is now willing to recognize Rhodes Island as the company backing her, and that's probably a good sign of progress.` },
    { title: 'Archive File 4', content: `Based upon her own account, Asbestos contracted Oripathy when she went too far into an Originium-rich zone.\nGiven that the possibility of infection through prolonged exposure to Originium is well known, the reality is that she knowingly put herself at risk. But, as mentioned in a previous file, Asbestos's great strength is that she can always accept the consequences for her decisions. Because she accepted this reality, there is no way to really blame her.\nOf course, the life of an explorer also facilitates her liberties in a certain sense. After all, she has very little contact with people except for those needed to refill her supplies.\nBecause Asbestos's autonomy does not infringe upon other people, the biggest victims are probably the Doctor and certain operators who are trying to establish a good relationship with her. Therefore, Rhodes Island will continue to uphold its consistent policy of not interfering with the private lives of its operators.\nBut even if that is the case, just as she insists on living life her own way, Rhodes Island also has something it insists on – we will never let her die as she wishes.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/arts-protector-branch.png', factionIcon: '/icons/factions/rim-billiton.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/asbestos/base.png', chibiSrc: '/operators/asbestos/chibi.webm', chibiMoveSrc: '/operators/asbestos/chibi-move.webm', chibiFraming: { scale: 1.25, offsetXPercent: 1.9, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TEAM EXPNDR' },
    { id: 'e2', label: 'Elite 2', src: '/operators/asbestos/e2.png', chibiSrc: '/operators/asbestos/chibi.webm', chibiMoveSrc: '/operators/asbestos/chibi-move.webm', chibiFraming: { scale: 1.25, offsetXPercent: 1.9, offsetYPercent: 3.3 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TEAM EXPNDR' },
    { id: 'skin1', label: 'Glen Sonata', src: '/operators/asbestos/skin1.png', chibiSrc: '/operators/asbestos/chibi-skin1.webm', chibiMoveSrc: '/operators/asbestos/chibi-move-skin1.webm', chibiFraming: { scale: 1.25, offsetXPercent: -0.5, offsetYPercent: 3.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'TEAM EXPNDR' },
  ],
  portrait: '/operators/asbestos/portrait.png',
  portraitFocus: { y: -6, x: 38.9, zoom: 304 },
}

export default asbestos
