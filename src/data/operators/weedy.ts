import type { Operator } from '../../types'

const weedy: Operator = {
  name: 'Weedy', fileNo: 'R117', class: 'Specialist', branch: 'Push Stroker', rarity: 6, level: 90, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Aegir', gender: 'Female', birthplace: 'Iberia',
  birthday: 'January 23rd', height: '155 cm', combatExp: '3 years', infectionStatus: 'Non-infected', illustrator: 'Xiaye Hongming',
  cv: { JP: 'Maria Naganawa', CN: 'Song Yuanyuan', EN: 'Maya Graydon', KR: 'Oh Roah' },
  trait: 'Can attack all blocked enemies\nCan be deployed on Ranged Tiles',
  tags: ['Shift', 'DPS', 'Crowd-Control'],
  stats: { hp: 2133, atk: 722, def: 439, res: 0, block: 2, cost: 21, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
    e2: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Industrial Water Cannon', desc: 'Can deploy a Reserve Water Cannon that lasts for 20s; the Water Cannon can attack 1 target and push it away slightly', elite: 'E2' },
    { name: 'Upgraded Water Cannon', desc: "Increases the shift level of the Water Cannon's normal attacks and skills by 1, and Weedy will restore 1 SP per 3 seconds if the Water Cannon is located within 4 tiles around her", elite: 'E2' },
  ],
  skills: [
    {
      name: "Barrel Burst", icon: '/operators/weedy/skill-1.png', activation: "Auto", recovery: "Auto Recovery",
      desc: "The next attack pushes the targets away along the attack direction greatly, dealing 150% ATK as Physical damage and Stunning them for 1.2 second(s)", spInit: 0, sp: 5, rank: 'M3',
      note: "Push force 0/0/0/1/1/1/1/1/1/2 across levels.",
      levels: [
        { level: "1", desc: "The next attack pushes the targets towards the attack direction slightly, dealing 105% ATK as Physical damage and Stunning them for 0.8 second(s)", spInit: 0, sp: 6 },
        { level: "2", desc: "The next attack pushes the targets towards the attack direction slightly, dealing 110% ATK as Physical damage and Stunning them for 0.8 second(s)", spInit: 0, sp: 6 },
        { level: "3", desc: "The next attack pushes the targets towards the attack direction slightly, dealing 115% ATK as Physical damage and Stunning them for 0.8 second(s)", spInit: 0, sp: 6 },
        { level: "4", desc: "The next attack pushes the targets away along the attack direction moderately, dealing 120% ATK as Physical damage and Stunning them for 0.8 second(s)", spInit: 0, sp: 6 },
        { level: "5", desc: "The next attack pushes the targets away along the attack direction moderately, dealing 125% ATK as Physical damage and Stunning them for 0.8 second(s)", spInit: 0, sp: 6 },
        { level: "6", desc: "The next attack pushes the targets away along the attack direction moderately, dealing 130% ATK as Physical damage and Stunning them for 0.8 second(s)", spInit: 0, sp: 6 },
        { level: "7", desc: "The next attack pushes the targets away along the attack direction moderately, dealing 135% ATK as Physical damage and Stunning them for 0.9 second(s)", spInit: 0, sp: 6 },
        { level: "M1", desc: "The next attack pushes the targets away along the attack direction moderately, dealing 140% ATK as Physical damage and Stunning them for 1 second(s)", spInit: 0, sp: 5 },
        { level: "M2", desc: "The next attack pushes the targets away along the attack direction moderately, dealing 145% ATK as Physical damage and Stunning them for 1.1 second(s)", spInit: 0, sp: 5 },
        { level: "M3", desc: "The next attack pushes the targets away along the attack direction greatly, dealing 150% ATK as Physical damage and Stunning them for 1.2 second(s)", spInit: 0, sp: 5 },
      ],
    },
    {
      name: "Hydraulics Mode", icon: '/operators/weedy/skill-2.png', activation: "Auto", recovery: "Auto Recovery",
      desc: "Attack Interval increases, ATK +200%, Attack Range extends by +2 and becomes a long-range AoE attack, attacks now push enemies away moderately\nUnlimited duration", spInit: 0, sp: 70, dur: "∞", rank: 'M3', range: [[2,1,1,1]],
      note: "Attack interval increased by 220% (3.84s before modifiers); splash radius 0.9 tiles. Range shown at M3 (+2).",
      levels: [
        { level: "1", desc: "Attack Interval increases, ATK +110%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away very slightly\nUnlimited duration", spInit: 0, sp: 90, dur: "∞" },
        { level: "2", desc: "Attack Interval increases, ATK +120%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away very slightly\nUnlimited duration", spInit: 0, sp: 88, dur: "∞" },
        { level: "3", desc: "Attack Interval increases, ATK +130%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away very slightly\nUnlimited duration", spInit: 0, sp: 86, dur: "∞" },
        { level: "4", desc: "Attack Interval increases, ATK +140%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away slightly\nUnlimited duration", spInit: 0, sp: 84, dur: "∞" },
        { level: "5", desc: "Attack Interval increases, ATK +150%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away slightly\nUnlimited duration", spInit: 0, sp: 82, dur: "∞" },
        { level: "6", desc: "Attack Interval increases, ATK +160%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away slightly\nUnlimited duration", spInit: 0, sp: 80, dur: "∞" },
        { level: "7", desc: "Attack Interval increases, ATK +170%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away slightly\nUnlimited duration", spInit: 0, sp: 78, dur: "∞" },
        { level: "M1", desc: "Attack Interval increases, ATK +180%, Attack Range extends by +1 and becomes a long-range AoE attack, attacks now push enemies away slightly\nUnlimited duration", spInit: 0, sp: 76, dur: "∞" },
        { level: "M2", desc: "Attack Interval increases, ATK +190%, Attack Range extends by +2 and becomes a long-range AoE attack, attacks now push enemies away slightly\nUnlimited duration", spInit: 0, sp: 74, dur: "∞" },
        { level: "M3", desc: "Attack Interval increases, ATK +200%, Attack Range extends by +2 and becomes a long-range AoE attack, attacks now push enemies away moderately\nUnlimited duration", spInit: 0, sp: 70, dur: "∞" },
      ],
    },
    {
      name: "Liquid Nitrogen Cannon", icon: '/operators/weedy/skill-3.png', activation: "Manual", recovery: "Auto Recovery",
      desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 350% Arts damage in an area and pushing enemies away significantly; For 8 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 20, sp: 33, rank: 'M3', range: [[2,1,1,1,1]],
      note: "Cannot be activated without enemies in range. Projectile hits aerial enemies, 1.2-tile AoE; distance-based True damage is 1200 per tile traveled.",
      levels: [
        { level: "1", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 260% Arts damage in an area and pushing enemies away moderately; For 4 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 10, sp: 43 },
        { level: "2", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 270% Arts damage in an area and pushing enemies away moderately; For 4 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 11, sp: 42 },
        { level: "3", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 280% Arts damage in an area and pushing enemies away moderately; For 4 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 12, sp: 41 },
        { level: "4", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 290% Arts damage in an area and pushing enemies away moderately; For 5 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 13, sp: 40 },
        { level: "5", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 300% Arts damage in an area and pushing enemies away moderately; For 5 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 14, sp: 39 },
        { level: "6", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 310% Arts damage in an area and pushing enemies away moderately; For 5 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 15, sp: 38 },
        { level: "7", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 320% Arts damage in an area and pushing enemies away greatly; For 6 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 16, sp: 37 },
        { level: "M1", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 330% Arts damage in an area and pushing enemies away greatly; For 6 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 17, sp: 36 },
        { level: "M2", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 340% Arts damage in an area and pushing enemies away greatly; For 7 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 18, sp: 35 },
        { level: "M3", desc: "Immediately fires a compressed liquid nitrogen cannon, dealing 350% Arts damage in an area and pushing enemies away significantly; For 8 seconds, enemies hit by this ability take True Damage proportional to distance traveled; If the Reserve Water Cannon is located within 4 tiles around her, it will also activate this ability", spInit: 20, sp: 33 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Weedy's Badge", desc: 'Appointed as Specialist Operator to exercise Push Stroker responsibilities' },
    pusx: { code: 'PUS-X', name: 'Custom Bionic Seadragon', stages: [
      { stage: 1, hp: '+140', atk: '+50', effect: 'Trait improved: Simultaneously attacks all blocked enemies. Can be deployed on ranged tiles, and refunds half the DP cost of this deployment' },
      { stage: 2, hp: '+180', atk: '+64', effect: "Upgraded Water Cannon improved: Increases the shift level of the Water Cannon's normal attacks and skills by 1; Weedy gains +15% ATK and restores 1 SP per 2.5 seconds if the Water Cannon is located within 4 tiles around her" },
      { stage: 3, hp: '+210', atk: '+72', effect: "Upgraded Water Cannon improved: Increases the shift level of the Water Cannon's normal attacks and skills by 1; Weedy gains +20% ATK and restores 1 SP per 2 seconds if the Water Cannon is located within 4 tiles around her" },
    ]},
    pusy: { code: 'PUS-Y', name: 'New Bionic Prototype', stages: [
      { stage: 1, atk: '+46', def: '+30', effect: 'Trait improved: Simultaneously attacks all blocked enemies; When blocking 2 or more enemies, increases shift level by 1. Can be deployed on ranged tiles' },
      { stage: 2, atk: '+60', def: '+36', effect: 'Industrial Water Cannon improved: Can deploy a Reserve Water Cannon that lasts for 20s; the Water Cannon can attack 1 target and push it away slightly; Water Cannon redeployment time reduced by 5s' },
      { stage: 3, atk: '+68', def: '+40', effect: 'Industrial Water Cannon improved: Can deploy a Reserve Water Cannon that lasts for 20s; the Water Cannon can attack 1 target and push it away slightly; Water Cannon redeployment time reduced by 8s' },
    ]},
  },
  story: "Weedy is an Iberian Aegir bioengineering researcher who comes from a family of scientists specialized in bionic science during the pre-Profound Silence era. She left Iberia to study in Trimounts and see more of Terra with her own eyes, and partly to escape the persecution of Aegir in Iberia. She joined Rhodes Island as one of its first members. At some point in her childhood, the Inquisition shut down her grandfather's research institute and confiscated decades-worth of research materials. He had his research permit revoked and was branded a sinner. Weedy was sent away from Iberia some time later, thanks to her grandfather's connections.\n\nWhile on Rhodes Island, Weedy provides her knowledge as a subordinate of Closure and the leader of the Bioengineering Department. However, she is known to suffer from mysophobia, making her extremely conscious about cleanliness. Weedy is accompanied by a bionic seadragon named Leaf to aid her in her tasks and a portable water cannon that can fire blasts of pressurized, compressed water for both research and combat support.",
  profile: "Weedy, a bioengineering expert who was born into a family of Iberian scientists, is a researcher who has been with Rhodes Island since its establishment.\nAfter a long period of testing and adjustment, she has finally completed a customized weapon for herself. She has chosen to become an operator of her own free will, providing long-ranged support to other operators on the battlefield.",
  records: [
    {
      title: "Clinical Analysis",
      content: "Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Weedy has no signs of Originium infections.\n\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Weedy utilizes comprehensive protection when coming in contact with Originium.\n\nIf Weedy can still get infected despite all these protective measures, then life on Terra can no longer persist.\n—Gavial",
    },
    {
      title: "Archive File 1",
      content: "Weedy is a scientist and a bit of a neat-freak.\nUnder normal circumstances, she is never seen in public. When interacting with others, if she notices anything untidy about her interlocutor's appearance, she will courteously but bluntly point it out with the expectation that it will be fixed immediately. Otherwise, the conversation will come to an abrupt end.\nFor this reason, Miss Closure, Weedy's immediate supervisor and renowned slob, has difficulty lifting her head when talking to Weedy – a rare sight to behold indeed.",
    },
    {
      title: "Archive File 2",
      content: "Bioengineering is a discipline that has emerged only recently. Scientists have found that by combining biological theory with the experience of engineering, they are in a better position to solve various problems encountered in the fields of biology and medicine. This new discipline quickly became closely linked to the practice of medicine.\nEspecially for a company like Rhodes Island that seeks to develop drugs to inhibit and treat Oripathy, a bioengineering laboratory can be said to be a necessity.\nHowever, even if Rhodes Island offers a favorable salary compared to the rest of the industry, it is well-known as a pharmaceutical company that specializes in Originium research and Oripathy treatment. Naturally, these are subjects that would discourage most people.\nBut even setting this point aside, the fact that Rhodes Island needs to be mobile, and the existence of tech companies such as Rhine Lab that can provide a better baseline, has caused Rhodes Island to be at a disadvantage when competing for talent.\nFurthermore, Rhodes Island is not purely a pharmaceutical company, and many prospective employees decide to leave after learning about Rhodes Island's true purpose.\nAll in all, despite the considerable successes of Closure's Engineering Department in attracting a vast amount of talent, Rhodes Island's recruiting efforts are far from enough to meet the scope of the challenges. Closure can often be heard complaining about these difficulties, but she knows that there is little that can be done to improve the situation.\nDespite these conditions, there is, according to Closure, one department that she never has to worry about, and that is the Bioengineering Department led by Weedy.",
    },
    {
      title: "Archive File 3",
      content: "While people have joined Rhodes Island from the various corners of Terra, a bioengineer from Iberia is a strange sight indeed.\nFirst, as everyone knows, Iberia has been blocked off from the rest of the world.\nSecond, though completely unsubstantiated, is the idea that Iberia is some backwards and xenophobic place.\nIn fact, the inverse is true. Setting aside the complicated relationship between Laterano and Ægir, Iberia is a land full of flair and friendly to scientific research, although this friendship is conditional.\nA tacit understanding exists within the scientific community that one is free to conduct whatever research they choose within certain fields; and undeniably, Iberia has made substantial achievements in these fields. However, some fields of research are completely forbidden; or perhaps more accurately, in Iberia, those fields of research do not exist.\nTo do justice to the modern history behind this situation would require an entire encyclopedia's worth of writing, so I will omit that here. However, bioengineering does exist in Iberia, or Weedy would not have been able to become an expert in the field at such a young age. Naturally, this was a result of her continuing her family's research.\nAdmittedly, the above description makes it sound as if Weedy is seeking asylum in Rhodes Island to escape persecution, but this is actually a necessary background explanation based upon existing intelligence.\nWeedy joined Rhodes Island simply because she no longer wanted to stay in Iberia, and wished to see more of the world. According to her own account, there were virtually no barriers to her leaving, but she was also told that it would be significantly more difficult to return to Iberia – to which she had no particular sentiments. She received an offer from Rhodes Island shortly before receiving an offer from Rhine Lab.\nWeedy is not shy about mentioning her belief that Rhine Lab is better suited to her work than Rhodes Island is, but whenever this topic is brought up, she will tack on the phrase, \"but I think Rhodes Island is pretty good too.\"\nOf course it is. Otherwise, she wouldn't have chosen to set foot upon the battlefield either.",
    },
    {
      title: "Archive File 4",
      content: "Scientists who devote themselves to the study of Originium, particularly those who specialize in treating Oripathy, often find themselves at odds with other researchers because they cannot understand how their colleagues can share the same scientific spirit and yet also harbor a deep rejection of infected peoples.\nIn the past, experimenting upon infected persons was not considered immoral. Even now, there are no shortage of scientists who specialize in studying the Infected, but with the intention of proving through various means that they are of inferior birth or even deserving of death.\nEven in Rhodes Island, there are a number of researchers who only recently overcame their fear of the Infected, and still have not reached a point where they can address those individuals with kindness.\nIf this is true even among scientists who are supposed to represent the bleeding edge of knowledge, what are we to think about the beliefs of ordinary people? Sometimes, reality can be crushingly disappointing.\nHowever, there are also people like Weedy.\nHer abilities would have allowed her to find a better work environment, but she chose to stay with Rhodes Island. Her only demand towards people she is communicating with is that they remain tidy, and she does not care if they are infected or not. She is not particularly talkative, but she does attempt to use her technological expertise to help people within her means, such as making small gadgets or toys for them.\nEven her reason for joining the battlefield is as simple as it is moving:\n\"Is there anything I can do for them?\"",
    },
    {
      title: "Promotion Record",
      content: "Weedy's physical qualities are somewhat at odds with our impressions of the Ægirians. In fact, after she successfully passed the other exams, she spent an entire three months before she was able to pass the physical component.\nOther than her physical strength and endurance, her condition is completely normal, her regimented routine with extra attention to hygiene bears mention. She is arguably even healthier than most of her fellow operators.\nTherefore, instead of worrying about her, you should perhaps strive to become more like her, from this day forward.",
    },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/push-stroker-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  summon: {
    name: 'Industrial Water Cannon',
    icon: '/operators/weedy/water-cannon.png',
    position: 'Low/High',
    trait: 'Cannot be attacked',
    stats: { hp: 100, atk: 585, def: 100, res: 0, block: 0, cost: 5, aspd: '2.4s', rdp: '35s' },
    range: [[2,1,1,1]],
    note: "Deployed through Weedy's Industrial Water Cannon talent; self-destructs after 20 seconds, does not count towards the Unit Limit, and also fires Liquid Nitrogen Cannon when Weedy uses Skill 3 while within 4 tiles of her.",
  },
  skins: [
    { id: 'base', label: 'Base', src: '/operators/weedy/base.png', chibiSrc: '/operators/weedy/chibi.webm', chibiMoveSrc: '/operators/weedy/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'e2', label: 'Elite 2', src: '/operators/weedy/e2.png', chibiSrc: '/operators/weedy/chibi.webm', chibiMoveSrc: '/operators/weedy/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Candy Cape', src: '/operators/weedy/skin1.png', chibiSrc: '/operators/weedy/chibi-skin1.webm', chibiMoveSrc: '/operators/weedy/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'skin2', label: 'Sedjem', src: '/operators/weedy/skin2.png', chibiSrc: '/operators/weedy/chibi-skin2.webm', chibiMoveSrc: '/operators/weedy/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
  ],
  portrait: '/operators/weedy/portrait.png',
}

export default weedy
