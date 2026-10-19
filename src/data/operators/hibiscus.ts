import type { Operator } from '../../types'
import hibiscusVoice from '../voices/hibiscus'

const hibiscus: Operator = {
  name: 'Hibiscus', fileNo: 'PA13', class: 'Medic', branch: 'Medic', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A1', position: 'Ranged', race: 'Sarkaz', gender: 'Female', birthplace: 'Victoria',
  birthday: 'June 21st', height: '153 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '下野宏铭',
  cv: { JP: 'Yuka Iguchi', CN: 'Gui Niang', EN: 'Yuuki Luna', KR: 'Bang Yeon-jee' },
  voice: hibiscusVoice,
  trait: 'Restores the HP of allies',
  tags: ['Healing'],
  stats: { hp: 1220, atk: 390, def: 110, res: 0, block: 1, cost: 17, aspd: '2.85s', rdp: '70s' },
  range: { base: [[0,1,1,1],[2,0,1,1],[0,1,1,1]], e1: [[0,1,1,1,1],[2,0,1,1,1],[0,1,1,1,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Healing Up', desc: 'ATK +8%', elite: 'E1' }],
  skills: [{
    name: 'Healing Up α', icon: '/operators/hibiscus/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ATK +50%', spInit: 0, sp: 30, rank: 'Rank 7', dur: '20s',
    levels: [
      { level: '1', desc: 'ATK +10%', spInit: 0, sp: 40, dur: '20s' },
      { level: '2', desc: 'ATK +15%', spInit: 0, sp: 40, dur: '20s' },
      { level: '3', desc: 'ATK +20%', spInit: 0, sp: 40, dur: '20s' },
      { level: '4', desc: 'ATK +30%', spInit: 0, sp: 35, dur: '20s' },
      { level: '5', desc: 'ATK +35%', spInit: 0, sp: 35, dur: '20s' },
      { level: '6', desc: 'ATK +40%', spInit: 0, sp: 35, dur: '20s' },
      { level: '7', desc: 'ATK +50%', spInit: 0, sp: 30, dur: '20s' },
    ],
  }],
  modules: {},
  story: `Born to a middle-class Londinium family and growing up in a multicultural neighborhood, Hibiscus is a Victorian Sarkaz girl with a heart of gold; Kind and hard-working, she likes to take care of the people around her, especially her younger twin sister Lava. The two joined Rhodes Island together to treat their growing Oripathy. Her humanitarian desire leads her to become a medic of the Op Reserve Team A1. But perhaps, she is more well known for preparing "healthy" diets that are really unacceptable to others, even including her sister. If one does not want to disappoint Hibiscus, one should eat her food.`,
  profile: `Born in Londinium in Victoria, Hibiscus is the older twin sister of her fellow Operator, Lava. After contracting Oripathy, she came to Rhodes Island for treatment. While undergoing that treatment, she began to dream of helping others. Her passion for caring for others, as well as her hard work, have led Hibiscus to become a Rhodes Island Medic.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 7.4%\nShe presents no obvious external symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.2 u/L\nDegree of infection is minor and physical symptoms are not yet present.`,
    },
    {
      title: 'Originium Arts Rating',
      content: `Though she possess basic Originium Arts, Hibiscus prefers not to utilize her Originium power. Instead she prefers to use her medical skills in order to care for and treat the wounds of her allies. Given her talents in medicine, Hibiscus has become an outstanding Rhodes Island Medic Operator.`,
    },
    {
      title: 'Archive File 1',
      content: `Born in Londinium, Hibiscus was popular among her neighbors as a child, and for good reason - she is considerate, hardworking, courteous, modest, and is good at taking care of people. Though it appears to outsiders that Lava does not like to deal with Hibiscus and that the two sisters don't share a strong relationship, Hibiscus knows the truth - that Lava just isn't very good at expressing those kinds of feelings.`,
    },
    {
      title: 'Archive File 2',
      content: `After the two sisters were infected with Oripathy, Hibiscus took Lava and left their parents to come to Rhodes Island. The determined Hibiscus decided to work hard for Rhodes Island for her sister, herself, her parents back home, and all the other infected.`,
    },
    {
      title: 'Archive File 3',
      content: `Because of Lava's obstinance, Hibiscus has cultivated a tough attitude from the time they were little. "This food is good for you. You need to eat it every day!" "I threw all your snacks away because they're bad for you!" "It's 10:30. You need to go to bed!" From a bystanders' perspective, Lava seems to have a rough time dealing with her older sister.`,
    },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/op-reserve-a1.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/hibiscus/base.png', chibiSrc: '/operators/hibiscus/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Night Watcher', src: '/operators/hibiscus/skin1.png', chibiSrc: '/operators/hibiscus/chibi-skin1.webm', illustrator: '下野宏铭' },
  ],
  portrait: '/operators/hibiscus/portrait.png',
  portraitFocus: { y: -5, x: 40.7, zoom: 295 },
  alter: {
    name: 'Hibiscus the Purifier', fileNo: 'PA13', class: 'Medic', branch: 'Incantation Medic', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Headhunting'],
    position: 'Ranged', trait: 'Attacks deal Arts damage and heal the HP of an ally within Attack Range for 50% of the damage dealt',
    tags: ['Healing'],
    illustrator: '竜崎いち',
    stats: { hp: 1508, atk: 571, def: 109, res: 20, block: 1, cost: 17, aspd: '1.6s', rdp: '70s' },
    range: {
      base: [[0,1,1,1],[2,1,1,1],[0,1,1,1]],
      e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
      e2: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
    },
    physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
    talents: [
      { name: 'Dusk and Dawn', desc: 'Attacks inflict 12% Arts Fragility to the target for 5 seconds', elite: 'E2' },
    ],
    skills: [
      {
        name: 'ATK Up γ', icon: '/operators/hibiscus/alter/skill-1.png', activation: 'Manual', recovery: 'Auto',
        desc: 'ATK +100%', spInit: 15, sp: 30, dur: '30s', rank: 'M3',
        levels: [
          { level: '1', desc: 'ATK +30%', spInit: 0, sp: 40, dur: '30s' },
          { level: '2', desc: 'ATK +35%', spInit: 0, sp: 40, dur: '30s' },
          { level: '3', desc: 'ATK +40%', spInit: 0, sp: 40, dur: '30s' },
          { level: '4', desc: 'ATK +45%', spInit: 5, sp: 37, dur: '30s' },
          { level: '5', desc: 'ATK +50%', spInit: 5, sp: 37, dur: '30s' },
          { level: '6', desc: 'ATK +55%', spInit: 5, sp: 37, dur: '30s' },
          { level: '7', desc: 'ATK +60%', spInit: 10, sp: 35, dur: '30s' },
          { level: 'M1', desc: 'ATK +75%', spInit: 10, sp: 34, dur: '30s' },
          { level: 'M2', desc: 'ATK +90%', spInit: 10, sp: 33, dur: '30s' },
          { level: 'M3', desc: 'ATK +100%', spInit: 15, sp: 30, dur: '30s' },
        ],
      },
      {
        name: 'Nurturing Touch', icon: '/operators/hibiscus/alter/skill-2.png', activation: 'Manual', recovery: 'Auto',
        desc: 'Reduces the Movement Speed of 2 enemies within range by -45% and deals 170% ATK as Arts damage to them per second', spInit: 10, sp: 18, dur: '8s', rank: 'M3',
        levels: [
          { level: '1', desc: 'Reduces the Movement Speed of 2 enemies within range by -25% and deals 80% ATK as Arts damage to them per second', spInit: 10, sp: 25, dur: '8s' },
          { level: '2', desc: 'Reduces the Movement Speed of 2 enemies within range by -25% and deals 90% ATK as Arts damage to them per second', spInit: 10, sp: 24, dur: '8s' },
          { level: '3', desc: 'Reduces the Movement Speed of 2 enemies within range by -25% and deals 100% ATK as Arts damage to them per second', spInit: 10, sp: 23, dur: '8s' },
          { level: '4', desc: 'Reduces the Movement Speed of 2 enemies within range by -30% and deals 110% ATK as Arts damage to them per second', spInit: 10, sp: 22, dur: '8s' },
          { level: '5', desc: 'Reduces the Movement Speed of 2 enemies within range by -30% and deals 120% ATK as Arts damage to them per second', spInit: 10, sp: 21, dur: '8s' },
          { level: '6', desc: 'Reduces the Movement Speed of 2 enemies within range by -30% and deals 130% ATK as Arts damage to them per second', spInit: 10, sp: 20, dur: '8s' },
          { level: '7', desc: 'Reduces the Movement Speed of 2 enemies within range by -35% and deals 140% ATK as Arts damage to them per second', spInit: 10, sp: 19, dur: '8s' },
          { level: 'M1', desc: 'Reduces the Movement Speed of 2 enemies within range by -40% and deals 150% ATK as Arts damage to them per second', spInit: 10, sp: 19, dur: '8s' },
          { level: 'M2', desc: 'Reduces the Movement Speed of 2 enemies within range by -40% and deals 160% ATK as Arts damage to them per second', spInit: 10, sp: 18, dur: '8s' },
          { level: 'M3', desc: 'Reduces the Movement Speed of 2 enemies within range by -45% and deals 170% ATK as Arts damage to them per second', spInit: 10, sp: 18, dur: '8s' },
        ],
      },
    ],
    modules: {
      original: { code: 'Original', name: "Hibiscus the Purifier's Badge", desc: 'Appointed as Medic Operator to exercise Incantation Medic responsibilities' },
    },
    story: `Born to a middle-class Londinium family and growing up in a multicultural neighborhood, Hibiscus is a Victorian Sarkaz girl with a heart of gold; Kind and hard-working, she likes to take care of the people around her, especially her younger twin sister Lava. The two joined Rhodes Island together to treat their growing Oripathy. Her humanitarian desire leads her to become a medic of the Op Reserve Team A1. But perhaps, she is more well known for preparing "healthy" diets that are really unacceptable to others, even including her sister. If one does not want to disappoint Hibiscus, one should eat her food.`,
    profile: `Following both systematic training in medical theory and long-term training in clinical practice, Hibiscus has graduated from intern doctor to formal Medic Operator, as well as one of the Medical Department's attending physicians. Hibiscus possesses not only ample experience in medical field work, but has made considerable contributions to health management and aftercare as a theoretical researcher.`,
    records: [
      {
        title: 'Clinical Analysis',
        content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 14%\nLarge abnormal shadows located about operator's thoracic cavity.\n[Blood Originium-Crystal Density] 0.30u/L\nCondition provisionally shows no signs of degradation.\n\n"Hibiscus is highly specialized in health management, and she's just as strict on herself as you'd expect. But even so, that battle left a grave impact on her, and the extent of her infection is no cause for optimism. Regular examinations will be needed."\n– Ansel`,
      },
      {
        title: 'Archive File 1',
        content: `We've all borne witness to the growth of the children emerging from Reserve Op Team A1, as a youthful influence and the next generation of Rhodes Island. But among them, the way Hibiscus has changed draws particular attention.\n\nWhile the maturation of her technique goes without saying, the old Hibiscus who made unyielding demands of everyone around her has "vanished," one could say, at some point. How long has it been since anyone's seen her making a grand scene of confiscating a patient's snacks and fiercely requiring them to follow her health schedule to the letter? These days, she need only gently advise them what would be best for their health, and they'll readily comply. We have reason to believe that in her heart lies a kind of innate power to have others warm up to her. She's simply picked up on a better way showing this side of herself to others.\n\nThe young pupil nipping at Operator Pith's heels, asking about this and that, day after day, is now a mentor herself, instructing even younger new interns. Without even realizing it, her work within the Medical Department has taken on a degree of professionalism, and you can often find her by hospital beds, patiently soothing patients who are panicked or afraid. It's something no one but her could accomplish... Time pushes us all onwards, never allowing us much of a look back on what we've lose to the past. But now and again, on seeing what's come of this baptism by time, the wisdom gained, how can we not be relieved?\n\nIf only everyone were still here for it.`,
      },
      {
        title: 'Archive File 2',
        content: `How long does it take to go from an intern lacking any fundamentals to an attending physician in charge of her own interns? Five years? Ten? To the majority who give up on it partway through, it's a goal that's out of reach for one's entire life.\n\nCertainly, many medical personnel aboard Rhodes Island are astounding in terms of professional ability and reserves of knowledge. But for them, finding the time to systematically teach students the vast swathes of modern medical theory is near-impossible. Under those circumstances, Hibiscus simply had to treat every practical as an opportunity to learn. She meticulously summed up her medical experience, earnestly took note of every bit of wisdom her seniors offered, seized nearly every free moment to pour through reference materials, and gradually digested it all until she finally attained a comprehensive mastery.\n\nHibiscus has an exceptional amount of experience in her chosen vocation of patient care, and her gentle personality and delicate mood allows her treatments to proceed without a hitch. Having acquired enough medical knowledge over the years, Hibiscus has been attempting to synthesize a systematic theory of healthcare based on her initial field of expertise, nutrition. The value of her current research results has been recognized even by Dr. Kal'tsit. Guided by her theories, Hibiscus has directed a gradual upgrade of the Medical Department's ward facilities. And judging by the recovery of the patients afterwards, these measures have shown clear results.\n\n"The idea of medical treatment isn't just to bring patients out of life-threatening situations. It's just as important that we provide ample care to the sick, keeping their bodies and minds healthy so they can fend off encroaching illness. It's long-term work, and requires plenty of patience, attention, and concern for your patients from the bottom of your heart."\nAn additional paragraph authored by Hibiscus, from a revision of the Rhodes Island Medical Department handbook.`,
      },
      {
        title: 'Archive File 3',
        content: `When Rhodes Island's Medic Operators are carrying out field missions, they typically have at least one Field Operator accompanying, so as to ensure the safety of medical personnel. We noted a fair degree of disconcerting information in reports from Field Operators who've worked alongside Hibiscus.\n\n"Mission got off to a rocky start. Local Infected was clearly cautious of, even hostile towards us..."\n\n"I was a hair from beating the hell out of him. What reined me in in the end wasn't Rhodes employee regulations, it was Dr. Hibiscus... I know he was Infected. I am too, so is Dr. Hibiscus. He was clearly aware she had saved his life. So how could he say those things to her... No conflict ultimately arose between us."\n\nThe above is an extract from one such Field Operator's mission report. However, similar notes appear in the reports of many other operators that work with Hibiscus. More concerning still is that all incidents of this nature go completely unmentioned in her own mission reports.\n\nHibiscus's consistent silence regarding this has worried more than us: Lava has also repeatedly asked that we pay closer mind to Hibiscus's physical and mental state.\n\n"She's not gonna say anything about it herself. But that doesn't mean it doesn't bother her... I want you to keep an eye on her for me. After all, she's just a dummy who acts like she can take care of herself. That's it. She just acts like it."\n\nRenouncing prejudice and hatred has always been the stance of Rhodes Island, but we cannot deny that such animosity for Infected and the Sarkaz objectively exists, all across the land. While shouldered with such a complex identity, and doing everything she can to fulfill her duties as a doctor, the source of hostility is more often than not the very one she's trying to help. Others can only imagine the pressure she must be bearing, truly empathizing is something else altogether. We very much hope that Hibiscus can open her heart to others. But until she herself seeks help, all we can do is continue to watch over her and give her a degree of choice when assigning missions.\n\nSo far, Hibiscus still has never refused a single field mission.`,
      },
      {
        title: 'Archive File 4',
        content: `Hibiscus often mentions the block of buildings where she used to live.\n\nBased on her descriptions, it was akin to a slum hidden in a corner of bustling Londinium. Many who lived there were of different races and nationalities. There were Feline workers local to Londinium, as well as traders from Sargon and Vouivre. Everyone came from different backgrounds, but their shared experience of "we have to do all we can before we can put down roots here" was enough to bring them together.\n\nAs Hibiscus paints a picture of the peace and harmony there, colored in nostalgia, we can't help but wonder–could such a neighborhood truly exist? Especially now, years on, with the chaos Londinium has been through, we fear that even if that block was once reality, it's long since been reduced to ruins.\n\nPerhaps she's seeing these things through rose-tinted glasses. Perhaps she was simply lucky, and this Sarkaz girl with no concept of prejudice found friendly faces in her first contact outside her household. Regardless, these earliest memories have become the simplest, yet staunchest grounds Hibiscus has for believing in goodwill. Upon these lands exist hatred and prejudice, but so too do love and kindness. As for which outnumbers which, it hardly seems a question at all to her. A lamp in the cold night may not be enough for warmth, but it can be what supports the conviction to keep going. By her own actions, the Hibiscus of today is passing down that lamp.\n\nShe may be far more resilient than we can imagine.`,
      },
      {
        title: 'Promotion Record',
        content: `"...On this mission, Operator Hibiscus displayed exceptional professionalism. She looked after Infected with every ounce of her heart, acted decisively at critical moments, and from an objective lens removed the danger of a large-scale infection in the Afterglow... In summary, based on Hibiscus's outstanding performance, I suggest that she be awarded a corresponding promotion."\n\n"But it's worth mentioning that during the mission, she often acted rashly without regard for her own safety. Though her intent was to better fulfil her duties as a doctor, we cannot condone such risky methods. Nobody requires that Rhodes Island's medical personnel place the safety of their patients ahead of their own; this cannot be considered a proper philosophy. We'd like Operator Hibiscus to make a habit of protecting herself from dangerous situations in the future."\n\n– Extract from Rhodes Island Afterglow Branch Officer-in-Charge Andante's mission report on the Vyseheim incident\n\n"Vyseheim's Afterglow is a very interesting place. The coffee and specialty snacks are absolutely scrumptious, and the people love to sing and dance, not to mention how welcoming they are. During my mission as a Medic, I received plenty of assistance from the locals... I miss it there very much."\n\n– Extract from Hibiscus's mission report on the Vyseheim incident`,
      },
    ],
    classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/incantation-medic-branch.png',
    skins: [
      { id: 'base', label: 'Base', src: '/operators/hibiscus/alter/base.png', chibiSrc: '/operators/hibiscus/alter/chibi.webm', illustrator: '竜崎いち' },
      { id: 'e2', label: 'Elite 2', src: '/operators/hibiscus/alter/e2.png', chibiSrc: '/operators/hibiscus/alter/chibi.webm', illustrator: '竜崎いち' },
    ],
    portrait: '/operators/hibiscus/alter/portrait.png',
    portraitFocus: { y: -3.6, x: 48, zoom: 338 },
  },
}

export default hibiscus
