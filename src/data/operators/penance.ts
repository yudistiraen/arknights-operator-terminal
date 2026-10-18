import type { Operator } from '../../types'

const penance: Operator = {
  name: 'Penance', fileNo: 'SR35', class: 'Defender', branch: 'Juggernaut', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Siracusa', position: 'Melee', race: 'Lupo', gender: 'Female', birthplace: 'Siracusa',
  birthday: 'July 9th', height: '168 cm', combatExp: 'None', infectionStatus: 'Non-infected', illustrator: 'IRIS_口艺',
  cv: { JP: 'Sayaka Ohara', CN: 'Shao Minjia', EN: 'Allegra Clark', KR: 'Bi Ju-eon' },
  trait: 'Cannot be healed by allies',
  tags: ['Survival', 'DPS'],
  stats: { hp: 4655, atk: 916, def: 616, res: 10, block: 3, cost: 36, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [[0,0,2,1,0,0]],
    e1: [[0,0,2,1,0,0]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Guardian of the Law', desc: 'After deployment, immediately gains a Barrier equal to 50% Max HP; When defeating an enemy, gains a Barrier equal to 10% Max HP (Cannot exceed 300% Max HP)', elite: 'E2' },
    { name: 'Wreathed in Thorns', desc: 'Each time this unit is attacked while under the effect of her own Barrier, deals 50% ATK as Arts damage to the attacker', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Last Word', icon: '/operators/penance/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'The next attack deals an additional instance of Arts damage equal to 200% ATK; Charged effect: The next attack deals 200% damage and Stuns the target for 5 seconds', spInit: 0, sp: 3, rank: 'M3',
      levels: [
        { level: '1', desc: `The next attack deals an additional instance of Arts damage equal to 140% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 3 seconds`, spInit: 0, sp: 6 },
        { level: '2', desc: `The next attack deals an additional instance of Arts damage equal to 145% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 3 seconds`, spInit: 0, sp: 6 },
        { level: '3', desc: `The next attack deals an additional instance of Arts damage equal to 150% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 3 seconds`, spInit: 0, sp: 6 },
        { level: '4', desc: `The next attack deals an additional instance of Arts damage equal to 160% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 3 seconds`, spInit: 0, sp: 5 },
        { level: '5', desc: `The next attack deals an additional instance of Arts damage equal to 165% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 3 seconds`, spInit: 0, sp: 5 },
        { level: '6', desc: `The next attack deals an additional instance of Arts damage equal to 170% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 3 seconds`, spInit: 0, sp: 5 },
        { level: '7', desc: `The next attack deals an additional instance of Arts damage equal to 180% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 3 seconds`, spInit: 0, sp: 4 },
        { level: 'M1', desc: `The next attack deals an additional instance of Arts damage equal to 190% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 4 seconds`, spInit: 0, sp: 4 },
        { level: 'M2', desc: `The next attack deals an additional instance of Arts damage equal to 195% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 4 seconds`, spInit: 0, sp: 4 },
        { level: 'M3', desc: `The next attack deals an additional instance of Arts damage equal to 200% ATK
Charged effect: The next attack deals {judge_s_1_enhance_checker.atk_scale:0%} damage and Stuns the target for 5 seconds`, spInit: 0, sp: 3 },
      ],
    },
    {
      name: 'Stoic Atonement', icon: '/operators/penance/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking and gains 60% Sanctuary; deals 140% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Guardian of the Law by 100%', spInit: 20, sp: 30, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Stops attacking and gains 30% Sanctuary; deals 70% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 40%', spInit: 10, sp: 40, dur: '20s' },
        { level: '2', desc: 'Stops attacking and gains 30% Sanctuary; deals 75% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 40%', spInit: 10, sp: 39, dur: '20s' },
        { level: '3', desc: 'Stops attacking and gains 30% Sanctuary; deals 80% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 40%', spInit: 10, sp: 38, dur: '20s' },
        { level: '4', desc: 'Stops attacking and gains 40% Sanctuary; deals 90% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 60%', spInit: 12, sp: 37, dur: '20s' },
        { level: '5', desc: 'Stops attacking and gains 40% Sanctuary; deals 95% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 60%', spInit: 12, sp: 36, dur: '20s' },
        { level: '6', desc: 'Stops attacking and gains 40% Sanctuary; deals 100% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 60%', spInit: 12, sp: 35, dur: '20s' },
        { level: '7', desc: 'Stops attacking and gains 50% Sanctuary; deals 110% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 80%', spInit: 14, sp: 34, dur: '20s' },
        { level: 'M1', desc: 'Stops attacking and gains 55% Sanctuary; deals 120% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 80%', spInit: 16, sp: 32, dur: '20s' },
        { level: 'M2', desc: 'Stops attacking and gains 55% Sanctuary; deals 130% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 80%', spInit: 18, sp: 31, dur: '20s' },
        { level: 'M3', desc: 'Stops attacking and gains 60% Sanctuary; deals 140% Arts damage to all nearby Ground enemies every second; While this skill is active, increases the Barrier effect of Talent 1 by 100%', spInit: 20, sp: 30, dur: '20s' },
      ],
    },
    {
      name: 'Trial of Thorns', icon: '/operators/penance/skill-3.png', activation: 'Manual', recovery: 'Defensive Recovery',
      desc: 'Immediately gains a Barrier equal to 130% Max HP; Attack Interval increases, ATK +400%, and makes enemies more likely to attack this unit', spInit: 0, sp: 20, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Immediately gains a Barrier equal to 40% Max HP; Attack Interval increases, ATK +200%, and makes enemies more likely to attack this unit', spInit: 0, sp: 30, dur: '30s' },
        { level: '2', desc: 'Immediately gains a Barrier equal to 50% Max HP; Attack Interval increases, ATK +220%, and makes enemies more likely to attack this unit', spInit: 0, sp: 29, dur: '30s' },
        { level: '3', desc: 'Immediately gains a Barrier equal to 60% Max HP; Attack Interval increases, ATK +240%, and makes enemies more likely to attack this unit', spInit: 0, sp: 28, dur: '30s' },
        { level: '4', desc: 'Immediately gains a Barrier equal to 70% Max HP; Attack Interval increases, ATK +260%, and makes enemies more likely to attack this unit', spInit: 0, sp: 27, dur: '30s' },
        { level: '5', desc: 'Immediately gains a Barrier equal to 80% Max HP; Attack Interval increases, ATK +280%, and makes enemies more likely to attack this unit', spInit: 0, sp: 26, dur: '30s' },
        { level: '6', desc: 'Immediately gains a Barrier equal to 90% Max HP; Attack Interval increases, ATK +300%, and makes enemies more likely to attack this unit', spInit: 0, sp: 25, dur: '30s' },
        { level: '7', desc: 'Immediately gains a Barrier equal to 100% Max HP; Attack Interval increases, ATK +320%, and makes enemies more likely to attack this unit', spInit: 0, sp: 24, dur: '30s' },
        { level: 'M1', desc: 'Immediately gains a Barrier equal to 110% Max HP; Attack Interval increases, ATK +350%, and makes enemies more likely to attack this unit', spInit: 0, sp: 22, dur: '30s' },
        { level: 'M2', desc: 'Immediately gains a Barrier equal to 120% Max HP; Attack Interval increases, ATK +370%, and makes enemies more likely to attack this unit', spInit: 0, sp: 21, dur: '30s' },
        { level: 'M3', desc: 'Immediately gains a Barrier equal to 130% Max HP; Attack Interval increases, ATK +400%, and makes enemies more likely to attack this unit', spInit: 0, sp: 20, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Penance's Badge", desc: 'Appointed as Defender Operator to exercise Juggernaut responsibilities' },
    unyx: { code: 'UNY-X', name: 'The Thorny Road That Continues', stages: [
      { stage: 1, hp: '+150', atk: '+35', def: '+15', effect: 'New trait: Takes 15% less damage from enemies blocked by this unit' },
      { stage: 2, hp: '+230', atk: '+43', def: '+26', effect: 'Guardian of the Law improved: After deployment, immediately gains a Barrier equal to 60% Max HP; When defeating an enemy, gains a Barrier equal to 11% Max HP (Cannot exceed 300% Max HP)' },
      { stage: 3, hp: '+300', atk: '+50', def: '+33', effect: 'Guardian of the Law improved: After deployment, immediately gains a Barrier equal to 70% Max HP; When defeating an enemy, gains a Barrier equal to 12% Max HP (Cannot exceed 300% Max HP)' },
    ]},
    unyy: { code: 'UNY-Y', name: '"Innocent"', stages: [
      { stage: 1, atk: '+60', def: '+48', effect: 'New trait: When there are no allies in the surrounding 8 tiles, ATK and DEF +8%' },
      { stage: 2, atk: '+75', def: '+60', effect: 'Wreathed in Thorns improved: Each time this unit is attacked while under the effect of her own Barrier, deals 55% ATK as Arts damage to the attacker' },
      { stage: 3, atk: '+85', def: '+70', effect: 'Wreathed in Thorns improved: Each time this unit is attacked while under the effect of her own Barrier, deals 58% ATK as Arts damage to the attacker' },
    ]},
  },
  profile: `Former Siracusan judge who became acquainted with Rhodes Island through Operator Texas. Currently works in the Logistics Department and serves as legal counsel for Rhodes Island.`,
  story: `Lavinia Falcone is a Siracusan judge, renowned for her unwavering fairness and the just verdicts she delivers to every convict she encounters. She harbors a deep disdain for Siracusa's current legal system, which she perceives as ineffective and compromised by mafia influence, forcing the commonfolk into a hopeless situation where they have to rely on the famiglie to resolve legal disputes. However, Lavinia is deeply aware of the perilous risks involved in openly opposing the famiglie, a path that tragically led to the assassination of her lawyer parents. Furthermore, she recognizes that Siracusan law is, in essence, the absolute embodiment of the mafia's sole Capo, Signora Sicilia, and that any rebellion on her part would inevitably invite bloody disaster.\n\nTo protect herself and her career, Lavinia has operated with the support of the Bellone famiglia. Surprisingly, the famiglia's don, Bernardo Bellone, who secretly aims to dismantle Siracusa's mafia tradition, permitted her to exercise her own judgment without interference, even allowing her to issue verdicts against members of his own Bellone famiglia. In turn, she formed an uneasy friendship with the Bellones, maintaining frequent contact with the famiglia's heir Leontuzzo. Nevertheless, Lavinia acknowledges that relying on famiglia support could never truly bring about justice or legal reform; instead, it relegated her to a mere pawn for the Bellones. Her single goal remains the manifestation of true justice for all, mafiosi and commonfolk alike, where legal recourse can be sought without fear of persecution or manipulation.\n\nAfter the Volsinii incident, Lavinia was finally free from the Bellones' influence following their disbandment. She willingly accepted the Signora's challenge to construct an entirely new legal system, without the influence of the famiglie. Consequently, she resigned from her job to become a legal consultant for Leontuzzo in building Nuova Volsinii, the first Siracusan city free from the mafia's influence. By chance, she also registered herself as operator "Penance" with Rhodes Island under its logistic sections, as a student seeking new knowledge. Lavinia places her hope in fulfilling her grand vision for jurisprudence by walking a thorny path.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Penance shows no signs of Originium infection.\n\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Penance rarely comes into contact with Originium.`,
    },
    {
      title: 'Archive File 1',
      content: `Former Siracusan judge.\nDuring her entrance interview, Operator Penance said that she came to make amends for her past mistakes, telling us that she had been made to betray justice against her will.\nOur investigation into events at Siracusa reveals that Penance was made judge with the support of the Bellone family, but unlike other mafia-backed judges, she was not entirely subject to the will of the Bellones, being willing to pronounce guilty sentences for members of the family, something which is almost unheard of in Siracusa. She also maintains a sibling-like relationship with Vigil, leading us to believe that the Bellone family may not be your average Siracusan mafia family. We know little about the former don of the Bellones, however, so more information in this regard must await further discussion with Penance and Vigil.\nThere were doubts as to whether Penance would be able to adapt to Rhodes Island's legal department, given her clear stance on the inviolability of law and justice, as well as the fact that Rhodes Island often operates in legal grey areas. However, she has shown a proper understanding of our true mission; rather than coming into conflict with operators who have different methods from her, they seem to have an implicit understanding, even quietly helping each other out. Perhaps those who are well-versed in the legal world understand that, deep down, they share the common goal of defending justice, no matter what circumstances may have forced them to do, and no matter what means they use now.`,
    },
    {
      title: 'Archive File 2',
      content: `Penance described the Siracusan legal system in detail.\nNomadic cities in Siracusa are ruled by their respective mafia families, and the legal systems of these cities are an extension of family rule. There are no police, only judges who are responsible for public order, speaking the will of Signora Sicilia.\nThe vast majority of incidents are taken care of under the table by the families involved, most of them never making it to court. The judges themselves are often informed after the fact that a case has been resolved, or, in some cases, needs them to resolve it quietly. Even when a case does make it to court, the outcome of the trial is often influenced or outright decided by the family.\nThose who knew Penance during her time as Judge Lavinia called her a "righteous" judge. In Siracusa, judges labeled as such often end up disappearing or losing part of a limb, as a warning to the other judges.\nPenance never ended up that way, though she never thought of herself as particularly righteous.\nShe told us that she became a judge with the help of the Bellone family. When she was first appointed, the former don of the family had promised her a better future, where she would truly deliver the justice of the law. The nature of the Bellone family seemed to have given her more freedom, but also more pain, as she saw such justice delivered by the family as inherently unjust.\nStill, Penance has never allowed her troubles to affect those around her, nor demanded the same of others as she does of herself, as in the case of Vigil, for example. This is mostly because they came from the same place, of course, and Vigil does not exactly lead a healthy lifestyle. As such, most of the other operators show an understanding.`,
    },
    {
      title: 'Archive File 3',
      content: `"We just finished. Won't you congratulate me, Lavinia?"\n"...What is it?"\n"I've always envied your Bellone backing. Things will go much smoother now that I have famiglia support myself."\n"And it feels good to have somebody at your back."\n"I would never have let myself look the way you do now, Lavinia, if I were you."\n"...How many years have you been a judge?"\n"About two."\n"Why do you ask?"\n"I saw Bortolotti today."\n"Who's that?"\n"A... judge."\n"Now an assassin. He died today, right in front of my eyes. An arrow went through him."\n"I'm lucky to be alive."\n"Let's just say I never heard anything..."\n"Did you think it was a good thing? Do you feel better now that you have a famiglia behind you? Having a famiglia support is what you're proudest about, as a judge?"\n"No, it's not my place to reproach you. Bortolotti is dead. He abandoned his ideals before he died, but he held on to his appointment letter. Meanwhile, I'm still here today, breathing and in one piece, because everyone knows that the Bellones are behind Judge Lavinia."\n"How did the rule of law come to this in Siracusa? I sit with the mafiosi every day, listening to them telling me what to do, and I do everything in my power to do it well, because it's 'better' for everyone. Everyone goes about their business as usual the next day, because I did."\n"But I can see the fear in the eyes of the common folk, the way they keep their distance. After the sentence is pronounced, they dare not cry where there are prying eyes, or make their appeals to a judge."\n"What am I doing? Defending the law? Justice? Society? Public order? None of the above. All the judges, all the courts; the entire legal system of Siracusa is designed to be an accomplice for the mafia."\n"The people who had high ideals are dead. But I'm alive, and you're alive. I couldn't do anything, while you boast about having famiglia backing."\n"There but for the grace of the mafia, goes the law of Siracusa."\n"...You're drunk, Lavinia."\n"I'm not."\n"YES, YOU ARE. I'll be going."\n–Recorded in the judges' lounge`,
    },
    {
      title: 'Archive File 4',
      content: `Penance has many hopes for the new city.\nThis is her first step towards being able to truly represent justice. The new city means many things for many people. The mafia fight for control, while the common folk do not have the luxury of caring about where they live. As a judge, she has earned an approval of sorts from Signora Sicilia. It is still justice backed by political power, but for the first time in her life, she finds herself with sufficient freedom, and finds herself facing a question that she never had time to think about:\nWhat should she do as a judge, when all of Siracusa is used to the courts serving the mafia?\nGrowing up in Siracusa, she never had the chance to see how things are done in other places. No matter how much she disapproves of the system, no matter how much she wants to free Siracusa from mafia control–what is the Siracusan legal system without the famiglie?\nIt is always easier to destroy than to build from scratch. Things have not been easy, even with like-minded comrades like Vigil around. Nor have they truly freed Siracusa from mafia control. How, then, are they to build a new order?\nAs a mere judge, Penance knows that her powers are limited, and she knows that building a new order is no easy task. What she learned and experienced over the past several years is far from enough to guide her towards a new legal system that people can accept. Now, she finds herself understanding Bernardo's actions: his mad dream had been a Siracusa without the mafia, while her own mad dream is a city where true justice is upheld. Bernardo gave his life for his dream. How far will she go?\nUnder the influence of alcohol, Penance spoke of the late Bellone don in the presence of the Doctor. She spoke of how she seemed to understand him so well, yet not at all; how he gave her hope, yet never trusted her even unto the end. All she can do is bear witness to the hope he left behind, and devote the rest of her life to realizing it, but there will never come a day when they watch the dream come true together.\n"I hate him so much, but the more I hate him, the more I..." Those were Penance's final words before she passed out and was carried back to her quarters by the Doctor.`,
    },
    {
      title: 'Promotion Record',
      content: `I'm sure you're not blind to how things are. I'm sure many of you think that what I'm about to tell you are just empty words, trying to give you false hope about the future.\nNevertheless, what I want to tell you is this: trust in what you have learned.\nThe cost is a high one, and perhaps it's hypocritical for me to stand here and say this, but if we, as judges, do not hold firm to our beliefs, if we do not hold firm to the law, then there will be no one to uphold justice for those who are weaker than us.\nNever forget why you chose this path.\n–Penance's speech at her alma mater`,
    },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/juggernaut-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/penance/base.png', chibiSrc: '/operators/penance/chibi.webm', illustrator: 'IRIS_口艺' },
    { id: 'e2', label: 'Elite 2', src: '/operators/penance/e2.png', chibiSrc: '/operators/penance/chibi.webm', illustrator: 'IRIS_口艺' },
    { id: 'skin1', label: 'Occasionally Flushed', src: '/operators/penance/skin1.png', chibiSrc: '/operators/penance/chibi-skin1.webm', illustrator: 'IRIS_口艺' },
    { id: 'skin2', label: 'Scribing', src: '/operators/penance/skin2.png', chibiSrc: '/operators/penance/chibi-skin2.webm', illustrator: 'IRIS_口艺' },
  ],
  portrait: '/operators/penance/portrait.png',
  portraitFocus: { y: 1.9, x: 50.5, zoom: 408 },
}

export default penance
