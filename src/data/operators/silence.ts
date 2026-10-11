import type { Operator } from '../../types'

const silence: Operator = {
  name: 'Silence', fileNo: 'RL01', class: 'Medic', branch: 'Medic', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhine Lab', position: 'Ranged', race: 'Liberi', gender: 'Female',
  birthplace: 'Columbia', birthday: 'May 18th', height: '154 cm', combatExp: 'None', infectionStatus: 'Crystals have appeared on her body. Infection confirmed by medical examination.', illustrator: 'NoriZC',
  cv: { JP: 'Akari Kitou', CN: 'Liang Shuang', EN: 'Erica Lindbeck', KR: 'Seo Da-hye' },
  trait: 'Restores the HP of allies',
  tags: ['Healing'],
  stats: { hp: 1595, atk: 557, def: 142, res: 0, block: 1, cost: 19, aspd: '2.85s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 0], [2, 1, 1, 1], [1, 1, 1, 0]],
    e1: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Booster Injection', desc: "All Medic Operators' ASPD +6 when Silence is deployed", elite: 'E1' },
    { name: 'Booster Injection', desc: "All Medic Operators' ASPD +12 when Silence is deployed", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Healing Up γ', icon: '/operators/silence/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +90%', spInit: 20, sp: 30, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +40%', spInit: 20, sp: 40, dur: '30s' },
        { level: '2', desc: 'ATK +45%', spInit: 20, sp: 40, dur: '30s' },
        { level: '3', desc: 'ATK +50%', spInit: 20, sp: 40, dur: '30s' },
        { level: '4', desc: 'ATK +55%', spInit: 20, sp: 35, dur: '30s' },
        { level: '5', desc: 'ATK +60%', spInit: 20, sp: 35, dur: '30s' },
        { level: '6', desc: 'ATK +65%', spInit: 20, sp: 35, dur: '30s' },
        { level: '7', desc: 'ATK +70%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M1', desc: 'ATK +75%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M2', desc: 'ATK +80%', spInit: 20, sp: 32, dur: '30s' },
        { level: 'M3', desc: 'ATK +90%', spInit: 20, sp: 30, dur: '30s' },
      ],
    },
    {
      name: 'Medical Drone', icon: '/operators/silence/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 18, rank: 'M3',
      note: 'The Medical Drone skill will not generate SP when Silence has the Medical Drone available for deployment.',
      levels: [
        { level: '1', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 30 },
        { level: '2', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 29 },
        { level: '3', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 28 },
        { level: '4', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 26 },
        { level: '5', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 25 },
        { level: '6', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 24 },
        { level: '7', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 22 },
        { level: 'M1', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 21 },
        { level: 'M2', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 20 },
        { level: 'M3', desc: 'Obtains a Medical Drone\nCan store at most 1 drone; The drone heals its surrounding allies when entering the battlefield and self-destructs after 10 seconds', spInit: 0, sp: 18 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Silence's Badge", desc: `Operator Silence has demonstrated a remarkable aptitude for healing teammates in the field.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Medic Operator during field operations to exercise Medic responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    phyY: { code: 'PHY-Y', name: 'Emergency Self-Defense Procedures', stages: [
      { stage: 1, hp: '+70', aspd: '+4', effect: 'New trait: Healing increased by 15% when healing a ground unit' },
      { stage: 2, hp: '+100', aspd: '+5', effect: 'Booster Injection improved: When deployed, all Medic Operators gain +15 ASPD' },
      { stage: 3, hp: '+120', aspd: '+6', effect: 'Booster Injection improved: When deployed, all Medic Operators gain +17 ASPD' },
    ]},
  },
  story: `Dr. Olivia Silence is an accomplished Liberi scientist for Rhine Lab and the protégé of Prof. Ahrens Parvis, one of its high-ranking leaders. She was previously involved in studies regarding the application of Originium, leading to the development of an experimental drone capable of providing remote medical support. Dr. Silence contracted Oripathy due to her constant exposure to Originium during her work, causing her to suffer from narcolepsy. Despite her shortcoming, she proves herself to be an excellent researcher who upholds the name of R.L.\nWhile appearing to be a notable R.L. researcher, her relationship with the company is in reality a bitter one. Five years ago, in the year 1095, she was heavily involved in R.L.'s Project Diαbolic as part of Columbia's weaponization of Originium, and in the beginning, she was fully unaware of the consequence Ifrit the test subject would become. When she started questioning R.L.'s inhumane treatment on the child and eventually found out the truth, she attempted to rescue Ifrit by putting her into thanatosis during a routine experiment. However, things went out of control due to Ifrit's unleashed Diablo consciousness that led to the "Diαbolic Crisis," the disaster where R.L. almost faced the same fate with the burnt-down Haydn Pharmaceutical. Not only she put herself into self-blame, but also she vowed to keep the child from the hands of both her mentor Prof. Parvis who wanted to continue the experiment and Saria, the one she blamed the most for initiating the project with Kristen Wright and the one who almost killed the child during the Crisis.\nFollowing the Crisis, Dr. Silence was approved by Kristen to work in Rhodes Island as the leader of of their business cooperation. But her true intention is to provide treatment for Ifrit as well as providing asylum for the girl there. She has since been acting as Ifrit's caretaker who protects the girl from R.L.'s insidious intentions. On the other hand, her overprotection led to her one-sided hostility against Saria by the time the latter arrived there. Following the Trimounts Arc, Silence became executive advisor to Rhine Lab's Components Control Section and acts as Rhine Lab's representative on the Scientific Ethics Consensus Committee. Having put aside her past grievances, she handed over Ifrit's guardianship to Saria.`,
  profile: `Silence was an Originium researcher at Rhine Lab, LLC. She was involved in several unknown applied research projects as well as several clinical trials on Oripathy.\nShe now provides battlefield medical treatments to Rhodes Island.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 6%\nPatient has ore lesion located on the upper left thigh.\n[Blood Originium-Crystal Density] 0.24u/L\nPatient does not exhibit high Blood Crystal Density. Infection is relatively stable at this point.\n[Originium Complications]\nPatient's race is predisposed to heavy sleep patterns that are largely reversed from those of other species. Patient's infection has interrupted the regularity of her sleep patterns.` },
    { title: 'Archive File 1', content: `An outstanding researcher, Silence is as meticulous as her peers. She has a keen eye for detail and single-minded execution. Once she begins an experiment, she runs through the process like a precision machine, flawlessly seeing it through to the end. Her rigorous approach to the scientific method has earned her great acclaim, with the staff under her just as commendable.\nBut when it comes to interpersonal relationships, Silence is not so gifted, particularly when it comes to dealing with crowds. For example, when attending a party, she has a tendency to live up to her name. This is not to say she is universally introverted though. She draws energy from the serenity of intense concentration. That's simply led her to her being being more comfortable observing her surroundings in peaceful silence.\nShe is known for her patience and eagerness to listen to fellow researchers. Silence is happy to discuss any scientific research questions from any and all angles. When someone encounters an obstacle in the scientific method, she will hear them out before providing a well thought out answer. Still, as busy as she is in the laboratory, most people don't get to see the communicative side of Silence, except those select few who participate in her research.` },
    { title: 'Archive File 2', content: `The valuable intelligence we have concerning Silence all comes from her contributions to the medical and life science fields. As a result, every piece of intelligence about her explores the company she used to work for – Rhine Lab.\nThe specific time and duration of her tenure at Rhine Lab is unpublished. The current most valid data comes from Silence's own writings about her experiences as well as other aspects of her life.\nAccording to her memories, her relationship with Rhine Lab and Originium began during her days as a student, when she accompanied her mentor to Rhine Lab.\nAt that time, Rhine Lab was holding a scientific exhibition to show off the results of its research from its tour of Columbia. The new medical equipment she saw optimized Originium transmission efficiency based upon new results obtained from life analysis, making possible a whole new generation of dazzling treatment possibilities.\nAfter completing her studies, Silence's wish came true and she was allowed to join Rhine Lab to work. She had an extraordinary talent in the Originium Arts field, and soon got the opportunity to participate in several experimental projects related to important Originium technology and clinical treatment.\nHowever, even though her career was going well and the upper levels of the company recognized her achievements, Silence never forgot her original dream – to join the Originium Technology and Life Science Applications project.\n"I never thought the opportunity would come so soon."\nLooking back on this time, Silence let slip a sly smile.` },
    { title: 'Archive File 3', content: `The medical drone designed by Silence and produced by the Rhodes Island Base Construction Department fully reflects Silence's philosophy as a doctor.\nThe drone was designed to be unpretentious (as well as highly affordable). It was not fitted with a weapon, instead its only designated function was to provide timely treatment for Operators on the battlefield.\nMedicine that has undergone several rounds of testing by the Rhodes Island Pharmaceutical Team can be assembled into the drone's kits in a variety of ways. The drone can use aerosolized medicine, it can spray medicine, it can deliver medicine, and it can simulate a medic's treatment wand. It can switch between these modes depending on the needs of the terrain and the environment, and the specific situation of the Operator in need of healing.\nHowever, this medical drone is still in its experimental stages. Because it needs to be lightweight and convenient, it needs to be a kind of throwaway and relatively fragile low-value target. Additionally, in areas with strong signal interference and complex terrain, its efficiency will be affected to a certain degree.\nEven so, it still provides Rhodes Island Operators with quality treatment. Better still, this is just the first gift that Silence has brought to Rhodes Island.` },
    { title: 'Archive File 4', content: `[Classified Log]\n"Let's continue on the last topic. Last time we talked about Rhine Lab's tech exhibition."\n"Yes, you said that exhibition made a large impact on you."\n"That's right. With regard to life, that exhibition gave me a whole bunch of new..."\n"Insights?"\n"Questions."\n"...I don't understand."\n"I wanted to know how life is born. Why life is born on this land."\n"Indeed, scholars have yet to produce a unified theory on this matter. But...what does this have to do with Originium?"\n"Why has Originium infected the human life on this continent?"\n"...I'm not sure."\n"I'm not sure, either. That's why I couldn't wait to join Rhine Lab."\n"Go on."\n"I thought about it afterward, and the one that shocked me the most was one of Rhine Lab's business exhibitions.\nAfter joining Rhine Lab, I realized that their best...rather, their most subversive product is still locked deep within the lab, written upon a proposal form.\nThey still can't bring it out yet, not for the people, not for the existing state order, and not for this land.\nPerhaps it's still too soon. Yes, it's still too soon.\nBut...once the right person comes along, a person with these ideals...or, should I say, these ambitions..."\n"Do you mean...?"\n"......\nHeh heh.......\nAll right. You already know too much."` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/rhine-lab.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/silence/base.png', chibiSrc: '/operators/silence/chibi.webm', chibiMoveSrc: '/operators/silence/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    // fexli/ArknightsResource has no separate dorm Spine build for Elite 2 — only base/sweep_1/winter_2
    // builds exist in char_108_silent — so Elite 2 reuses the base chibi as a placeholder.
    { id: 'e2', label: 'Elite 2', src: '/operators/silence/e2.png', chibiSrc: '/operators/silence/chibi.webm', chibiMoveSrc: '/operators/silence/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin1', label: 'Lacquer', src: '/operators/silence/skin1.png', chibiSrc: '/operators/silence/chibi-skin1.webm', chibiMoveSrc: '/operators/silence/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin2', label: 'Frosted Breath', src: '/operators/silence/skin2.png', chibiSrc: '/operators/silence/chibi-skin2.webm', chibiMoveSrc: '/operators/silence/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
  ],
  portrait: '/operators/silence/portrait.png',
  summon: {
    name: 'Medic Drone',
    icon: '/operators/silence/medic-drone.png',
    position: 'Low/High',
    trait: 'Cannot be attacked; restores the HP of nearby friendly units',
    stats: { hp: 1000, atk: 125, def: 0, res: 0, block: 0, cost: 5, aspd: '0.5s', rdp: '5s' },
    range: [[1, 1, 1], [1, 2, 1], [1, 1, 1]],
    note: "Cannot be attacked. Deployed through Silence's Medical Drone skill once charged, can store at most 1 drone, self-destructs after 10 seconds. Redeployment time is only relevant if Silence can charge her skill fast enough to deploy a second drone in quick succession.",
  },
}

export default silence
