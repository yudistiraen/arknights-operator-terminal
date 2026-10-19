import type { Operator } from '../../types'
import tsukinogiVoice from '../voices/tsukinogi'

const tsukinogi: Operator = {
  name: 'Tsukinogi', fileNo: 'R129', class: 'Supporter', branch: 'Abjurer', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Higashi', position: 'Ranged', race: 'Elafia', gender: 'Female', birthplace: 'Taisha, Higashi',
  birthday: 'May 3rd', height: '165 cm', combatExp: '2 years',
  infectionStatus: 'Confirmed infected by medical examination.',
  illustrator: '上埜',
  cv: { JP: 'Sayaka Ohara', CN: 'Liang Shuang', EN: 'Seiko Suzuki', KR: 'Hong Su-jeong' },
  voice: tsukinogiVoice,
  trait: 'Deals Arts damage; When skill is active, attacks instead restore the HP of allies (heal amount is equal to 75% of ATK)',
  tags: ['Support', 'Survival'],
  stats: { hp: 1720, atk: 445, def: 175, res: 25, block: 1, cost: 12, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1]],
    e1: [[0, 1, 1, 0], [1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1], [0, 1, 1, 0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Blessing', desc: 'Apply 12% Sanctuary effect to allies within range with less than 40% HP', elite: 'E1' },
    { name: 'Blessing', desc: 'Apply 14% (+2%) Sanctuary effect to allies within range with less than 40% HP', elite: 'E1 (Potential 5)' },
    { name: 'Blessing', desc: 'Apply 18% Sanctuary effect to allies within range with less than 40% HP', elite: 'E2' },
    { name: 'Blessing', desc: 'Apply 20% (+2%) Sanctuary effect to allies within range with less than 40% HP', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Without a Trace', icon: '/operators/tsukinogi/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Grants 35% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies',
      spInit: 25, sp: 50, dur: '35s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Grants 25% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 15, sp: 50, dur: '25s' },
        { level: '2', desc: 'Grants 25% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 16, sp: 50, dur: '26s' },
        { level: '3', desc: 'Grants 25% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 17, sp: 50, dur: '27s' },
        { level: '4', desc: 'Grants 28% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 18, sp: 50, dur: '28s' },
        { level: '5', desc: 'Grants 28% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 19, sp: 50, dur: '29s' },
        { level: '6', desc: 'Grants 28% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 20, sp: 50, dur: '30s' },
        { level: '7', desc: 'Grants 31% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 21, sp: 50, dur: '31s' },
        { level: 'M1', desc: 'Grants 32% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 22, sp: 50, dur: '32s' },
        { level: 'M2', desc: 'Grants 33% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 23, sp: 50, dur: '33s' },
        { level: 'M3', desc: 'Grants 35% Physical and Arts Dodge to allies within Attack Range, and reveals Invisible enemies', spInit: 25, sp: 50, dur: '35s' },
      ],
    },
    {
      name: "Forest's Embrace", icon: '/operators/tsukinogi/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 60%, and the Sanctuary effect is increased to 2.3 times. Heals all allies within Attack Range for 12% of this unit's ATK every second",
      spInit: 23, sp: 48, dur: '20s', rank: 'M3',
      note: 'The HP restoration starts from the 2 seconds mark, is unaffected by healing effect modifiers, and can still heal affected friendly units even if they becomes unable to/cannot be healed.',
      levels: [
        { level: '1', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 40%, and the Sanctuary effect is increased to 1.4 times. Heals all allies within Attack Range for 6% of this unit's ATK every second", spInit: 10, sp: 57, dur: '15s' },
        { level: '2', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 40%, and the Sanctuary effect is increased to 1.5 times. Heals all allies within Attack Range for 6% of this unit's ATK every second", spInit: 10, sp: 56, dur: '15s' },
        { level: '3', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 40%, and the Sanctuary effect is increased to 1.6 times. Heals all allies within Attack Range for 6% of this unit's ATK every second", spInit: 10, sp: 55, dur: '15s' },
        { level: '4', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 40%, and the Sanctuary effect is increased to 1.7 times. Heals all allies within Attack Range for 8% of this unit's ATK every second", spInit: 15, sp: 54, dur: '16s' },
        { level: '5', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 40%, and the Sanctuary effect is increased to 1.8 times. Heals all allies within Attack Range for 8% of this unit's ATK every second", spInit: 15, sp: 53, dur: '16s' },
        { level: '6', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 40%, and the Sanctuary effect is increased to 1.9 times. Heals all allies within Attack Range for 8% of this unit's ATK every second", spInit: 15, sp: 52, dur: '16s' },
        { level: '7', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 55%, and the Sanctuary effect is increased to 2 times. Heals all allies within Attack Range for 10% of this unit's ATK every second", spInit: 20, sp: 51, dur: '17s' },
        { level: 'M1', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 55%, and the Sanctuary effect is increased to 2.1 times. Heals all allies within Attack Range for 10% of this unit's ATK every second", spInit: 21, sp: 50, dur: '18s' },
        { level: 'M2', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 55%, and the Sanctuary effect is increased to 2.2 times. Heals all allies within Attack Range for 12% of this unit's ATK every second", spInit: 22, sp: 49, dur: '19s' },
        { level: 'M3', desc: "Stops attacking; HP Ratio required to activate this unit's Talent is increased to 60%, and the Sanctuary effect is increased to 2.3 times. Heals all allies within Attack Range for 12% of this unit's ATK every second", spInit: 23, sp: 48, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Tsukinogi's Badge", desc: 'Appointed as Supporter Operator during field operations to exercise Abjurer responsibilities' },
    blsx: {
      code: 'BLS-X', name: 'Rouya Bimei', stages: [
        { stage: 1, atk: '+25', def: '+15', effect: 'Trait improved: Deals Arts damage; When skill is active, attacks instead restore the HP of allies (heal amount is equal to 100% of ATK)' },
        { stage: 2, atk: '+40', def: '+20', effect: 'Blessing improved: Grants a 20% Sanctuary effect and +5% DEF to all friendly units within range with less than 40% HP' },
        { stage: 3, atk: '+50', def: '+25', effect: 'Blessing improved: Grants a 22% Sanctuary effect and +8% DEF to all friendly units within range with less than 40% HP' },
      ],
    },
  },
  story: `Tsukinogi, an Infected Higashinese Elafia, used to be a shrine maiden of Taisha but left following a Catastrophe that struck near her hometown. She managed to evacuate almost everyone except for her own family, as they stubbornly refused to leave during a festival. As a Catastrophe Messenger, Tsukinogi is known for her strong empathy and insight, which stem from her prior experience as a shrine maiden and help her greatly in her work at Rhodes Island as a Catastrophe watcher and field observer.`,
  profile: `A former Catastrophe Messenger from Higashi, Tsukinogi's sensitive perception allows her to detect approaching Catastrophes from the most minute of changes and communicates that information with cities. Her abilities also make her well-suited to locating and tracking hidden enemies. It is recommended to assign her to work requiring reconnaissance and stealth.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 5%\nOriginium is irregularly distributed across the upper portion of the torso, but has not caused any substantial effect upon the operator.\n[Blood Originium-Crystal Density] 0.34u/L\nTraces of sudden Originium metastases can be found on the operator's organs.\n"The symptoms of acute Oripathy have gone into remission, there are unlikely to be further issues with proper care. Speaking of which, why is Miss Tsukinogi so gentle? I'm obviously supposed to be the one taking care of her, but it always seems like it's the other way around. It makes the world seem a bit topsy-turvy... but whatever, it makes me feel pretty happy~"\n— Medic Operator Hibiscus`,
    },
    {
      title: 'Archive File 1',
      content: `Tsukinogi was recommended to Rhodes Island by a group of Catastrophe Messengers. According to Provence, there is a vast communication network among Catastrophe Messengers that spans national borders. Through this network, many people are able to pick up the mantle of Catastrophe Messenger, and it also provides a source of employment for those who are unable to hold steady employment. Tsukinogi is a clear example of the efficiency of this network. Without a hub of communication and information exchange, there is no way that someone in Higashi could connect with Rhodes Island thousands of miles away using a conventional messenger. In any case, she is now with us, acquainting herself with her new environment, building relationships, and dealing with everything related to Catastrophes as usual.`,
    },
    {
      title: 'Archive File 2',
      content: `Before becoming a Catastrophe Messenger, Tsukinogi was a shrine maiden at a Shinto shrine. Due to her strong request, we have hidden the name and exact location of the shrine in the file. The only thing we were allowed to record is that the shrine built atop the mountain maintains a stable, cooperative relationship with a Buddhist temple at the base of the mountain. According to our assessment of the situation, the locals seem to recognize the teachings of both the shrine and the temple, suggesting that the two faiths have been intertwined in practice for some time now. Such a thing is virtually unheard of here. Is this a common practice in Higashi? It has come to our attention that Tsukinogi has disclosed information about what happened afterwards to the Doctor, but the Doctor in turn has not relayed any information to us. This is quite distressing.`,
    },
    {
      title: 'Archive File 3',
      content: `Tsukinogi is skilled in dance. When she wears her elegant, long robes, almost everyone is mesmerized by her moves. When she has free time, she often goes to the dance room to relax or to teach. While her moves are gentle and agile, flourishing her hands through the air, her feet barely make any noise. As long as she is willing, she can happily spend an entire afternoon with someone with even no dance experience, making them feel as if the two are dancing in harmony. She is familiar with most dance styles from both Higashi and Yan, and is very experienced with the ceremonial Kagura dances. However, this is the one type of dance that she refuses to do. According to HR personnel, her reason for this stems from her belief that Kagura dances are antiquated and dull, and only serve to blaspheme the gods while also making the dancers unhappy. Given Tsukinogi's usually gentle words and demeanor, her strong beliefs in this matter are all the more convincing and are perhaps related to her unwillingness to become a shrine maiden.`,
    },
    {
      title: 'Archive File 4',
      content: `Because of her insight into others' emotions and her experience with clergy duties, Tsukinogi can easily touch most tender portions of one's heart. She is certainly not omniscient, but by carefully observing the nuances of words and expressions, she can correctly identify someone's mental state a vast majority of the time. With her mysterious rhetoric, a few simple Originium Arts techniques, and her charming personality, there are many people willing to go out of their way to accommodate her. As a result of almost universal praise and adoration, Tsukinogi naturally was painted with an aura of benevolence, and was able to establish a vast relationship network. Of course, unlike people who network for the sake of money or benefits, Tsukinogi embraced an altruistic and dedicated approach to dealing with others. This was, after all, the reason she became a Catastrophe Messenger in the first place, and is also the reason why her initial probation period was half the duration of most other operators. The operator who compiled Tsukinogi's file was originally distressed about the fact that the Doctor had been keeping secrets regarding Tsukinogi's past, but after talking with Tsukinogi, that operator has since become a firm supporter. By the looks of things, she is even better at earning the trust of others than she is at her own work as a Catastrophe Messenger.\nAs for this trust, Tsukinogi credits all of it to the Doctor.`,
    },
    {
      title: 'Promotion Record',
      content: `"What shrine did Tsukinogi come from anyway? As a person from Higashi, it's too embarrassing that I can't figure it out."\n"A shrine with a Buddhist temple at the foot of the mountain, with a particularly good relationship... There's only one place like that, have you heard of it?"\n"Oh shoot, is it the one that's mentioned in your favorite book?"\n"Yes, that one. Isn't that actually Taisha?!"\n"Yeah."\n"Her family name should be a one-character name then."\n"Yeah."\n"I got it."\n"Her family name is Elafia."\n"(Unknown Higashi dialect)"\n"I don't even know how I'm supposed to greet her anymore."\n"What does she call you now?"\n"Ahaha..."\n"Stop laughing, just tell me."\n"S-sir. Hehe."\n"Well, why not just keep things the way they are?"\n"Yeah, I should."\n......\n"Why do you think she joined a Catastrophe Patrol then?"\n"She says she was tired of the Kagura nonsense, but I don't buy that for a second."\n"It must have something to do with the Catastrophes then. Maybe she felt like trying to save a few more cities was more worthwhile than dancing in a shrine?"\n"Have a little more respect, will you!"\n"Woah, calm down, she doesn't even care."\n"But I care!!"\n"Fine, fine, respect, respect."\n"To be honest, she probably was Higashi's best Catastrophe Messenger. Judging from the files she's provided, her successful early warning ratio is twice as high as ours here."\n"As a Catastrophe Messenger, the most important thing besides being able to warn someone about an impending Catastrophe is having that person believe you. Even if our Messengers report the matter, city officials often do not comply."\n"But not the case with her."\n"After all, she is a daughter of Taisha."\n......\n"Have you checked the approximate location of the Catastrophe that resulted in her contracting Oripathy?"\n"It's not far from her hometown, and Taisha would've been within its affected zone."\n"It happened during a big festival, and there were people everywhere. In the end, it's excusable that they couldn't evacuate the entire region."\n"After all, in order to prevent disaster, it is not just enough to persuade the believers to leave – everyone near the entire site had to be persuaded to evacuated."\n"And she almost pulled it off, except for one little bit."\n"She managed to evacuate the cities of all those bickering nobles, but in the end, it was her own family that would not listen to her?"\n"After all, the public can heed the words of a Kagura-dancing heiress to the shrine, but at the same time..."\n"Yeah......"\n"Man proposes, God disposes, huh?"\n— Excerpt from a recording of a conversation between two HR personnel`,
    },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/abjurer-branch.png', factionIcon: '/icons/factions/higashi.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/tsukinogi/base.png', chibiSrc: '/operators/tsukinogi/chibi.webm', chibiMoveSrc: '/operators/tsukinogi/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '上埜' },
    { id: 'e2', label: 'Elite 2', src: '/operators/tsukinogi/e2.png', chibiSrc: '/operators/tsukinogi/chibi.webm', chibiMoveSrc: '/operators/tsukinogi/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '上埜' },
    { id: 'skin1', label: 'Londinium Style Miko', src: '/operators/tsukinogi/skin1.png', chibiSrc: '/operators/tsukinogi/chibi-skin1.webm', chibiMoveSrc: '/operators/tsukinogi/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '上埜' },
    { id: 'skin2', label: 'Dance', src: '/operators/tsukinogi/skin2.png', chibiSrc: '/operators/tsukinogi/chibi-skin2.webm', chibiMoveSrc: '/operators/tsukinogi/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '上埜' },
  ],
  portrait: '/operators/tsukinogi/portrait.png',
  portraitFocus: { y: 5.1, x: 48.2, zoom: 331 },
}

export default tsukinogi
