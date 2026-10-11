import type { Operator } from '../../types'

const kirara: Operator = {
  name: 'Kirara', fileNo: 'HK05', class: 'Specialist', branch: 'Ambusher', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Higashi', position: 'Melee', race: 'Aegir', gender: 'Female', birthplace: 'Higashi',
  birthday: 'November 29th', height: '160 cm', combatExp: 'None', infectionStatus: "Originium crystals are present on the body's surface, confirmed Infected by medical examination.", illustrator: '我妻洛醬',
  cv: { JP: 'Anzu Haruno', CN: 'Chen Tingting', EN: 'Summer Natsuki', KR: 'Yoon Mi-na' },
  trait: 'Deals Damage to all targets within range\n50% chance to dodge Physical and Arts attacks and is less likely to be targeted by enemies',
  tags: ['DPS', 'Survival'],
  stats: { hp: 1980, atk: 858, def: 340, res: 30, block: 0, cost: 20, aspd: '3.5s', rdp: '70s' },
  range: {
    base: [
      [1, 1, 1, 0],
      [1, 2, 1, 1],
      [1, 1, 1, 0],
    ],
    e1: [
      [1, 1, 1, 0],
      [1, 2, 1, 1],
      [1, 1, 1, 0],
    ],
    e2: [
      [1, 1, 1, 0],
      [1, 2, 1, 1],
      [1, 1, 1, 0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Normal', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Lonesome Protector', desc: 'Restores 1% HP per second. If there are no allied Operators in the surrounding 8 tiles, restores 2% HP per second instead', elite: 'E1' },
    { name: 'Lonesome Protector', desc: 'Restores 2% HP per second. If there are no allied Operators in the surrounding 8 tiles, restores 3.5% HP per second instead', elite: 'E2' },
    { name: 'Lonesome Protector', desc: 'Restores 2% HP per second. If there are no allied Operators in the surrounding 8 tiles, restores 4% (+0.5%) HP per second instead', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Anchor Strike', icon: '/operators/kirara/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'The next attack deals an additional hit equal to 150% of ATK as Arts damage', spInit: 0, sp: 2, rank: 'M3',
      levels: [
        { level: '1', desc: 'The next attack deals an additional hit equal to 75% of ATK as Arts damage', spInit: 0, sp: 4 },
        { level: '2', desc: 'The next attack deals an additional hit equal to 80% of ATK as Arts damage', spInit: 0, sp: 4 },
        { level: '3', desc: 'The next attack deals an additional hit equal to 85% of ATK as Arts damage', spInit: 0, sp: 4 },
        { level: '4', desc: 'The next attack deals an additional hit equal to 90% of ATK as Arts damage', spInit: 0, sp: 4 },
        { level: '5', desc: 'The next attack deals an additional hit equal to 95% of ATK as Arts damage', spInit: 0, sp: 4 },
        { level: '6', desc: 'The next attack deals an additional hit equal to 100% of ATK as Arts damage', spInit: 0, sp: 4 },
        { level: '7', desc: 'The next attack deals an additional hit equal to 110% of ATK as Arts damage', spInit: 0, sp: 3 },
        { level: 'M1', desc: 'The next attack deals an additional hit equal to 120% of ATK as Arts damage', spInit: 0, sp: 3 },
        { level: 'M2', desc: 'The next attack deals an additional hit equal to 130% of ATK as Arts damage', spInit: 0, sp: 3 },
        { level: 'M3', desc: 'The next attack deals an additional hit equal to 150% of ATK as Arts damage', spInit: 0, sp: 2 },
      ],
    },
    {
      name: 'Anchor Point Snap', icon: '/operators/kirara/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: "The effect of this unit's Talent increases to 3 times. Deals 100% of ATK as Arts damage to enemies within Attack Range every second", spInit: 10, sp: 30, dur: '8s', rank: 'M3',
      levels: [
        { level: '1', desc: "The effect of this unit's Talent increases to 2.1 times. Deals 45% of ATK as Arts damage to enemies within Attack Range every second", spInit: 0, sp: 30, dur: '8s' },
        { level: '2', desc: "The effect of this unit's Talent increases to 2.2 times. Deals 50% of ATK as Arts damage to enemies within Attack Range every second", spInit: 0, sp: 30, dur: '8s' },
        { level: '3', desc: "The effect of this unit's Talent increases to 2.3 times. Deals 55% of ATK as Arts damage to enemies within Attack Range every second", spInit: 0, sp: 30, dur: '8s' },
        { level: '4', desc: "The effect of this unit's Talent increases to 2.4 times. Deals 60% of ATK as Arts damage to enemies within Attack Range every second", spInit: 0, sp: 30, dur: '8s' },
        { level: '5', desc: "The effect of this unit's Talent increases to 2.5 times. Deals 65% of ATK as Arts damage to enemies within Attack Range every second", spInit: 0, sp: 30, dur: '8s' },
        { level: '6', desc: "The effect of this unit's Talent increases to 2.6 times. Deals 70% of ATK as Arts damage to enemies within Attack Range every second", spInit: 0, sp: 30, dur: '8s' },
        { level: '7', desc: "The effect of this unit's Talent increases to 2.7 times. Deals 75% of ATK as Arts damage to enemies within Attack Range every second", spInit: 5, sp: 30, dur: '8s' },
        { level: 'M1', desc: "The effect of this unit's Talent increases to 2.8 times. Deals 80% of ATK as Arts damage to enemies within Attack Range every second", spInit: 6, sp: 30, dur: '8s' },
        { level: 'M2', desc: "The effect of this unit's Talent increases to 2.9 times. Deals 90% of ATK as Arts damage to enemies within Attack Range every second", spInit: 8, sp: 30, dur: '8s' },
        { level: 'M3', desc: "The effect of this unit's Talent increases to 3 times. Deals 100% of ATK as Arts damage to enemies within Attack Range every second", spInit: 10, sp: 30, dur: '8s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Kirara's Badge", desc: 'Operator Kirara has demonstrated a remarkable aptitude for bodily concealment and enemy ambush.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Specialist Operator during field operations to exercise Ambusher responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.' },
    ambx: { code: 'AMB-X', name: 'We Will Survive 3 Online', stages: [
      { stage: 1, hp: '+180', def: '+35', effect: "New trait:\nSlows the Movement Speed of enemies within this unit's Attack Range by 20%" },
      { stage: 2, hp: '+260', def: '+50', effect: 'Lonesome Protector improved:\nRestores 2.5% HP per second. If there are no allied operators in the surrounding 8 tiles, restores 3.5% HP per second instead' },
      { stage: 3, hp: '+330', def: '+60', effect: 'Lonesome Protector improved:\nRestores 2.5% HP per second. If there are no allied operators in the surrounding 8 tiles, restores 4% HP per second instead' },
    ]},
  },
  story: `A Higashinese student who came from a small-scale nomadic city ruled by the Mitsumoto clan in the south, Kirara chose to leave home due to her Oripathy and sought treatment from Rhodes Island, after Utage's reply to her SOS message, which she sent to her former classmates. As a shut-in, she devotes herself to gaming and other entertainment like novels and music, with her introvert personality being the subject of bullying from her classmates. Due to the ongoing tensions between the Northern and Southern Courts, Kirara's biggest concern back in the day was whether the latest videogame releases from the north would reach the south without problem.\nOriginally, Kirara shut herself in her room and used SMS instead of dialogue for communication, but always ended up helping operators or resolving electronical equipment issues during her occasional outings. Eventually, she accepted the formal invitation and became an operator. Kirara assists Rhodes Island with broadcast communications and equipment maintenance.\nAt one point, Kirara went as far as shutting herself in her living quarters for three days straigth without drinking just to beat a new game she bought, only for her to pass out upon leaving. After undergoing a strict sleeping shcedule recomended by the Medical Department for a month, she formally apologized.`,
  profile: `Higashi student Kirara, chose to leave home due to her Oripathy. After sending out an SOS message to her former classmates, she got a reply from Utage and sought treatment from Rhodes Island following instructions. Has a considerable understanding of electronic equipment. Presently providing assistance to Rhodes Island with broadcast communications and equipment maintenance.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n[Cell-Originium Assimilation] 5%\nOperator Kirara has been infected by Originium, with minor amounts of crystals visible on the surface of her body.\n[Blood Originium-Crystal Density] 0.17u/L\nKirara's infection was only an accident. In daily life, she rarely comes into contact with Originium. So long as her situation holds steady, the chance of her condition worsening is particularly small.` },
    { title: 'Archive File 1', content: `Kirara comes from a small-scale nomadic city in the south of Higashi, falling under the jurisdiction of Mitsumoto, the southern ruling bloc. The town borders the sea, the surrounding land level, rich in resources in all respects, and so a commercial economy has developed, trading fairly closely with its surrounding city regions.\nAt the same time, since it lies far from Higashi's internal two-power line of contention, Kirara's hometown has been less affected by the dispute. Prior to Kirara's own unfortunate contraction of Oripathy, she had been living a proper, stable life as a student should have, her only worry about the tumult of war being whether games produced by the north could make it safely across the chaos zone, for a smooth delivery by their hired shinobi.` },
    { title: 'Archive File 2', content: `As a patient who was introduced by Operator Utage, it never occurred to Kirara at the outset to find work at Rhodes Island, and become a formal Operator like her classmate Utage. For the introverted girl, Rhodes Island offering her treatment for Oripathy also gave her somewhere to stay for a while, and for the money she paid as compensation, it was quite a worthwhile deal. At first, that's all it was.\nHowever, plans are where the little things always go awry. While the Higashi girl would shut herself in her room the majority of the time, using SMS in place of verbal dialogue, and making maximum efforts possible to avoid interacting directly with others, on her occasional "outings," she'd always come back having helped some operators while she was out, at times resolving some minor issues with electronic equipment, or being entrusted ad-hoc with instructing operators on how to work appliances, and once she'd even been pursued with inquiries for a walkthrough of a popular game at the time... In short, before Kirara herself even realized it, she was already on fairly good terms with our operators.\nWe very quickly sent a formal invitation to this Higashi girl, inviting her to become one.\nGratefully, fearful of strangers as she was, she didn't decline.` },
    { title: 'Archive File 3', content: `In Higashi, lineages of Ægir that migrated in and settled down like Kirara's are not uncommon to see. In contrast to our understanding of Iberia's internal situation, Higashi's Ægir by and large have not been faced with overt exclusion, putting down roots in the country without a problem. In the present day, Kirara's own recognition of herself tells the tale–without any weight to it, she can say "I'm just a normal Higashi girl, that's all."\nHowever, as is plain to see, stemming from different environs in upbringing, Kirara and other Higashi operators–for example, Operator Matoimaru–have differing conceptions of many things, despite being fellow Higashi.\n"The north? Uh... I'm not too clued in about what Kougon's like, but I hear everyone's pretty old-timey there?"\nWhen Kirara introduced her homeland Higashi to us, she raised the subject of its two ceaselessly warring powers, each one occupying one half of the country, exerting their governances on familially unified grounds.\n"Mitsumoto didn't seem as heavily armed as the guys over there." When regarding the contrast in power between her own home faction and the opposition, Kirara first skirted around the topic, only conceding after a while that "if the fight started, then on a face-to-face battlefield it'd be pretty hard to win... b–but, direct conflict isn't the only thing that goes into who wins and loses! Besides, it's not like it's just war and life's on pause. When it comes to economy, openness and good atmosphere–livability, that's it–then it's us who come out on top, right? Uh, not that they're bad or anything, just, that's how I feel about it at least."\nBeyond this, the Higashi girl also somewhat regretfully, and somewhat barbedly stated:\n"Honestly, if we could just not fight, then let's not. The past few years have been pretty good. Been peaceful for a while. Sometimes I buy games from over there and shinobi even deliver them straight to me. But after I heard about it, it seemed kind of difficult to say. Um. I'm not really sure, I don't get it much myself."\n"I heard the eight families used to be one, but then they disagreed on something and that's why they've been split across ever since... *sigh* Honestly, isn't it kind of an overdone premise? What's the point? It's just a bunch of brothers infighting, isn't it?"` },
    { title: 'Archive File 4', content: `Operator Kirara's interests and hobbies are startlingly expansive, with a major love for all niche entertainment comprised in novels, manga, games, etc.–though she had no choice but to leave her home, Kirara insisted on bringing more than half her collection with her, leaving people speechless. Aside from that, music is also one of Kirara's passions; before catching Oripathy, Kirara used to have a part-time job at a bar near her home, and putting on music to fit each day's mood was one of her daily joys.\nPer her own absorptions, Kirara has spent considerable time and energy, even at times near the point of foregoing sleep and food, throwing her whole devotion into games or manga. The shut-off manner in which she refused interaction initially worried people, but as we've spent more time knowing her, we've been quick to realize that it's not that Kirara truly opposes interacting with people, but rather, it's a self-defense mechanism of sorts, stemming from a mentality of fearing being hurt.\nThis fear is closely related to Kirara's experiences as a child. During childhood, her reserved character and her interests unlike those of the children around her led to her being bullied. The experience of being ostracized still has an effect on Kirara to this day; she fears that when she bares her own soul and displays her true self, she may well be rejected or attacked, and so she has preemptively avoided contact with others.\nHowever, should you break past Kirara's inner defenses, and be recognized as a close friend, it'll be clear for anyone to see that the true way she treats people is sincere, passionate, and without any reservation.` },
    { title: 'Promotion Record', content: `There is always some way to clear a game.\nSo long as one makes the right choices, the people in the screen will turn to them and smile. So long as one strives hard enough, the enemy can be defeated and a good ending welcomed.\nBut reality...\nThere are no retries in reality. Reality has no choice that reliably wins others over and earns one smiles. Failures in reality cannot be done over, and that is why we dread and are scared of ruining everything.\nBut, if one has companions willing to confront the elements with them, face the trials together...\nJust maybe, things are no longer as scary as when one was all alone.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/ambusher-branch.png', factionIcon: '/icons/factions/higashi.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/kirara/base.png', chibiSrc: '/operators/kirara/chibi.webm', chibiMoveSrc: '/operators/kirara/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '我妻洛醬' },
    { id: 'e2', label: 'Elite 2', src: '/operators/kirara/e2.png', chibiSrc: '/operators/kirara/chibi.webm', chibiMoveSrc: '/operators/kirara/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '我妻洛醬' },
    { id: 'skin1', label: 'Trendsetting Player', src: '/operators/kirara/skin1.png', chibiSrc: '/operators/kirara/chibi-skin1.webm', chibiMoveSrc: '/operators/kirara/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '我妻洛醬' },
    { id: 'skin2', label: 'Leisurely Snapshot', src: '/operators/kirara/skin2.png', chibiSrc: '/operators/kirara/chibi-skin2.webm', chibiMoveSrc: '/operators/kirara/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '我妻洛醬' },
  ],
  portrait: '/operators/kirara/portrait.png',
}

export default kirara
