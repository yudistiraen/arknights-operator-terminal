import type { Operator } from '../../types'
import astesiaVoice from '../voices/astesia'

const astesia: Operator = {
  name: 'Astesia', fileNo: 'RR01', class: 'Guard', branch: 'Arts Fighter', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Columbia', position: 'Melee', race: 'Liberi', gender: 'Female', birthplace: 'Columbia',
  birthday: 'July 10th', height: '165 cm', combatExp: 'None', infectionStatus: 'Infection confirmed by medical examination.', illustrator: 'YUJI',
  cv: { JP: 'Kaori Nazuka', CN: 'KIYO', EN: 'Lexi Fontaine', KR: 'Kang Eun-ae' },
  voice: astesiaVoice,
  trait: 'Deals Arts damage',
  tags: ['DPS', 'Defense'],
  stats: { hp: 2523, atk: 690, def: 448, res: 15, block: 1, cost: 21, aspd: '1.25s', rdp: '70s' },
  range: { base: [[2, 1]], e1: [[2, 1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Celestial Globe', desc: 'For every 20 seconds Astesia stays on the battlefield, ASPD +3, stacking up to 5 times', elite: 'E1' },
    { name: 'Celestial Globe', desc: 'For every 20 seconds Astesia stays on the battlefield, ASPD +5, stacking up to 5 times', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Astral Protection', icon: '/operators/astesia/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +50%, DEF +80%', spInit: 10, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +20%, DEF +30%`, spInit: 0, sp: 40, dur: '30s' },
        { level: '2', desc: `ATK +20%, DEF +35%`, spInit: 0, sp: 39, dur: '30s' },
        { level: '3', desc: `ATK +20%, DEF +40%`, spInit: 0, sp: 38, dur: '30s' },
        { level: '4', desc: `ATK +30%, DEF +45%`, spInit: 3, sp: 37, dur: '30s' },
        { level: '5', desc: `ATK +30%, DEF +50%`, spInit: 3, sp: 36, dur: '30s' },
        { level: '6', desc: `ATK +30%, DEF +55%`, spInit: 3, sp: 35, dur: '30s' },
        { level: '7', desc: `ATK +40%, DEF +60%`, spInit: 6, sp: 34, dur: '30s' },
        { level: 'M1', desc: `ATK +43%, DEF +65%`, spInit: 7, sp: 33, dur: '30s' },
        { level: 'M2', desc: `ATK +46%, DEF +70%`, spInit: 8, sp: 32, dur: '30s' },
        { level: 'M3', desc: `ATK +50%, DEF +80%`, spInit: 10, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Astral Sword', icon: '/operators/astesia/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%, DEF +80%, Blocked enemies +1, attack all blocked enemies', spInit: 10, sp: 20, dur: '15s', rank: 'M3',
      note: "Contrary to the wording, Astesia does not need to block the enemies for her attacks with Astral Sword to hit them. Rather, Astesia's attacks hit multiple targets in range equal to her block count.",
      levels: [
        { level: '1', desc: `ATK +30%, DEF +30%, Blocked enemies +1, attack all blocked enemies`, spInit: 0, sp: 30, dur: '10s' },
        { level: '2', desc: `ATK +35%, DEF +35%, Blocked enemies +1, attack all blocked enemies`, spInit: 1, sp: 30, dur: '10s' },
        { level: '3', desc: `ATK +40%, DEF +40%, Blocked enemies +1, attack all blocked enemies`, spInit: 2, sp: 30, dur: '10s' },
        { level: '4', desc: `ATK +45%, DEF +45%, Blocked enemies +1, attack all blocked enemies`, spInit: 3, sp: 27, dur: '11s' },
        { level: '5', desc: `ATK +50%, DEF +50%, Blocked enemies +1, attack all blocked enemies`, spInit: 4, sp: 27, dur: '11s' },
        { level: '6', desc: `ATK +55%, DEF +55%, Blocked enemies +1, attack all blocked enemies`, spInit: 5, sp: 27, dur: '11s' },
        { level: '7', desc: `ATK +60%, DEF +60%, Blocked enemies +1, attack all blocked enemies`, spInit: 6, sp: 24, dur: '12s' },
        { level: 'M1', desc: `ATK +65%, DEF +65%, Blocked enemies +1, attack all blocked enemies`, spInit: 7, sp: 23, dur: '13s' },
        { level: 'M2', desc: `ATK +70%, DEF +70%, Blocked enemies +1, attack all blocked enemies`, spInit: 8, sp: 22, dur: '14s' },
        { level: 'M3', desc: `ATK +80%, DEF +80%, Blocked enemies +1, attack all blocked enemies`, spInit: 10, sp: 20, dur: '15s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Astesia's Badge", desc: 'Appointed as Guard Operator to exercise Arts Fighter responsibilities' },
    afty: { code: 'AFT-Y', name: 'Unpredictable Star Chart', stages: [
      { stage: 1, atk: '+25', def: '+25', effect: 'New trait: Enemies blocked by this unit receive 10% Arts Fragility' },
      { stage: 2, atk: '+36', def: '+36', effect: 'Celestial Globe improved: Gains +6 ASPD and +3% DEF for every 20s this unit remains on the battlefield, stacking up to 5 times' },
      { stage: 3, atk: '+42', def: '+42', effect: 'Celestial Globe improved: Gains +7 ASPD and +4% DEF for every 20s this unit remains on the battlefield, stacking up to 5 times' },
    ]},
  },
  story: `Astesia Urbica is the older twin sister of Astgenne Urbica, born from a family of Gaulish Liberi astrologers who emigrated to Columbia after being denounced in their homeland, unwittingly sparing themselves from the aftermath of the Battle of the Four Emperors. She followed her parents' footsteps by becoming an astrologer and joined a Columbian occult group partnered with Rhine Lab.\n\nAstesia accidentally contracted Oripathy while taking care of Astgenne, who got caught in an Originium leak accident after joining Rhine Lab, prompting both to go to Rhodes Island for treatment. After their condition stabilized, Astesia, under her sister's recommendation, decided to lend her service to Rhodes Island, using her Arts swordplay on the battlefield and sharing her extensive knowledge of astronomy with Rhodes Island's researchers.`,
  profile: `Astesia is a member of a Columbian occult organization, serving as a philology consultant for Rhine Lab as part of a cooperation agreement. After contracting Oripathy, she and her sister came to Rhodes Island for treatment, where she qualified to become an operator. She uses unique sword skills to execute close range Arts attacks.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct with abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 4%\nAstesia's lower right ankle shows signs of infection.\n\n[Blood Originium-Crystal Density] 0.2u/L\nPatient has an early stage infection at this point. Originium Crystals have not yet appeared on the surface of her body.\n\nThorough investigation reveals that this operator's expression of Oripathy is special, with very few similar cases. It is recommended that qualified medics perform treatment on a regular basis. Additionally, considering the bigger picture, Warfarin is strictly forbidden from accessing this operator's file and from participating in this operator's treatment.\n—Kal'tsit` },
    { title: 'Archive File 1', content: `Astesia's family has a long history of occult study, with particularly notable skill in astrology. So it's only natural she was invited to join an occult society long ago. That group entered into a cooperation agreement with Rhine Lab, who then took her on as a consultant responsible for facilitating communication and various philology-related projects. In her free time, Astesia uses her own talents and knowledge to enlighten those more skeptical Rhine Lab colleagues. Over time, Astesia has become something of a professional astrologer and master of other occult arts. One fact known only to a few: the agreement between Astesia's occult society and Rhine Lab was of her own making, and due to one very important thing: her younger sister Elena, who works for Rhine Lab.` },
    { title: 'Archive File 2', content: `Astrology is one of the oldest forms of divination. Like all divination arts, it gives insight into the present and can even provide a peek at the future. Astesia spent most of her time studying astrology, accepting its lessons and its burden of responsibility. So when she came face to face with Oripathy, she was frustrated to find this ancient art was of no use. She failed to divine that her own sister would contract the disease in an accident during an experiment, nor did she see that she herself would be infected during contact with that same twin sister. In that moment, all the plans she had laid for her future were smashed to pieces by the cruelty of fate. What she had seen as a shining future as bright as the midday sun was now too cloudy to accurately divine.` },
    { title: 'Archive File 3', content: `Astesia and her sister were quickly taken to Rhodes Island for treatment. Diagnosis showed that while Oripathy had indeed manifested, it was still in early stages, and had not yet caused much damage to their bodies. The psychological damage to Astesia, however, had been quite severe. She began to doubt the stars themselves, and no longer had faith in the abilities she was once so proud of. During the course of treatment, Astesia took her sister's advice to join Rhodes Island.\nAstesia is quite skilled with a sword. Her family has passed down a form of ceremonial swordplay: a ritual in which one hand holds a celestial orb, while the other holds an Originium sword. The dazzling process of advancing, retreating, parrying, and riposting with these items creates the illusion of a starry sky fading in and out of view. This unique style of swordplay combines fencing, astronomy, and Originium Arts into a form usable only by those capable of mastering all three disciplines. She has never before set foot on the battlefield, but with her unique skill set, she is confident she can serve as an effective Guard.` },
    { title: 'Archive File 4', content: `"Over the course of our tests of Astesia's powers, one thing has become clear: her abilities are indeed an expression of originium Arts, as is clear from the readings on most of our instruments. And yet this expression remains quite different from most originium Arts. As far as we know, the connection between astrology and originium Arts is very weak, despite most illustrious astrologers in recent years all agreeing with a level of certainty on a close link between the expression of originium Arts and the celestial bodies. At this point we still have no evidence to support a direct or indirect connection, but we speculate that the emergence of these originium Arts that appear to be linked to the celestial bodies will further convince the common people of these beliefs. Were it not for these techniques, most people would likely return to the scientific explanations for orginium Arts, turning away from astrology.\nBack to Astesia, she has reported that she feels her own abilities are weakening. Our observations show that contracting Oripathy has had an effect on the originium Arts she already possessed. These effects will persist for quite some time, but we cannot say what the outcome will be, and whether it will be good or bad for Astesia. We need more time for observation and research. End of report."\n—A medic operator's report to Dr. Kal'tsit\n\n"There is theoretical value in this stargazing idea, but it has no practical application in modern science. The days when we could see the stars are long gone, and every twinkle of starlight we do get is like a stab in the gut."\n—Appears to be Dr. Kal'tsit's handwriting.` },
    { title: 'Promotion Record', content: `[Excerpts from an anonymous communication channel — Regarding Astesia]\n"Getting a reading from Astesia is great. You're surrounded by all these pretty stars. I could sit there all day."\n"I asked her once how her readings are always so accurate. She said she's just been lucky enough not to run into anyone she read wrong yet. Hm. Is that what all fortune tellers say?"\n"The first time I went to train with Astesia, I thought she was gonna float like a ton of bricks. Boy was I wrong... she's definitely trained before!"\n"Her fighting style, what can I even say about it, she closes the distance with you, then pierces you with those eyes that see straight into your soul... I'm not the kind of person who thinks much of fortune telling, but she definitely has something going on in there."\n"I heard Warfarin's all in a huff since she can't get her hands on Astesia? Is that true? Wild."\n"Her astrology reading pairs well with aromatherapy. I'd like to get her to spend some more time in the Convalescence Garden."\n"How does she do it? How can I make my Originium Arts look as pretty as hers?!"\n"My sister's dumb as a sack of hammers!"` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/arts-fighter-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/astesia/base.png', chibiSrc: '/operators/astesia/chibi.webm', illustrator: 'YUJI' },
    { id: 'e2', label: 'Elite 2', src: '/operators/astesia/e2.png', chibiSrc: '/operators/astesia/chibi.webm', illustrator: 'YUJI' },
    { id: 'skin1', label: 'Starseeker', src: '/operators/astesia/skin1.png', chibiSrc: '/operators/astesia/chibi-skin1.webm', illustrator: 'YUJI' },
    { id: 'skin2', label: 'Frlibe on the Palace', src: '/operators/astesia/skin2.png', chibiSrc: '/operators/astesia/chibi-skin2.webm', illustrator: 'YUJI' },
    { id: 'skin3', label: 'Fantastic Crafts', src: '/operators/astesia/skin3.png', chibiSrc: '/operators/astesia/chibi-skin3.webm', illustrator: 'YUJI' },
  ],
  portrait: '/operators/astesia/portrait.png',
  portraitFocus: { y: -8.5, x: 50.3, zoom: 306 },
}

export default astesia
