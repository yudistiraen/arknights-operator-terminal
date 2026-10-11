import type { Operator } from '../../types'

const lava: Operator = {
  name: 'Lava', fileNo: 'PA15', class: 'Caster', branch: 'Splash Caster', rarity: 3, level: 55, elite: 1, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Op Reserve A1', position: 'Ranged', race: 'Sarkaz', gender: 'Female', birthplace: 'Victoria',
  birthday: 'June 22nd', height: '154 cm', combatExp: 'Half a year', infectionStatus: 'Infected', illustrator: '下野宏铭',
  cv: { JP: 'Kaori Mizuhashi', CN: 'Ying Xie', EN: 'Díana Bermudez', KR: 'Kim Ha-young' },
  trait: 'Deals AOE Arts damage',
  tags: ['AoE'],
  stats: { hp: 1141, atk: 642, def: 95, res: 15, block: 1, cost: 30, aspd: '2.9s', rdp: '70s' },
  range: { base: [[0,1,1],[2,0,1],[0,1,1]], e1: [[0,1,1,1],[2,0,1,1],[0,1,1,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Quick Skill Usage', desc: 'Immediately obtains 30 Skill Points after deployment', elite: 'E1' }],
  skills: [{
    name: 'Tactical Chant α', icon: '/operators/lava/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
    desc: 'ASPD +50', spInit: 0, sp: 40, rank: 'Rank 7', dur: '20s',
    levels: [
      { level: '1', desc: 'ASPD +10', spInit: 0, sp: 50, dur: '20s' },
      { level: '2', desc: 'ASPD +15', spInit: 0, sp: 50, dur: '20s' },
      { level: '3', desc: 'ASPD +20', spInit: 0, sp: 50, dur: '20s' },
      { level: '4', desc: 'ASPD +30', spInit: 0, sp: 45, dur: '20s' },
      { level: '5', desc: 'ASPD +35', spInit: 0, sp: 45, dur: '20s' },
      { level: '6', desc: 'ASPD +40', spInit: 0, sp: 45, dur: '20s' },
      { level: '7', desc: 'ASPD +50', spInit: 0, sp: 40, dur: '20s' },
    ],
  }],
  modules: {},
  story: `The younger twin sister of Hibiscus, the Victorian Sarkaz Lava grew up in the same middle-class family in Londinium. While sharing the same sense of compassion as her sister, Lava takes things to her own way as she firmly believes in acting against injustice rather than standing still, a mindset influenced by her time helping her poor and orphaned neighbors back in Londinium.\n\nLava and Hibiscus joined Rhodes Island together to treat their Oripathy. In Lava's case she quickly mastered spacial Originium Arts which she utilizes offensively in the battlefield as part of Op Reserve A1. At the same time, she seems to have a chūnibyō behaviour that eventually led her production of a concept B-movie written together with Nian where she acted as the protagonist.\n\nThe aforementioned movie would eventually inspire Lava's further development upon reaching maturity over the years of her service in Rhodes Island; thanks to the intense training under Pith's guidance and the morale support from Hibiscus, she could now unleash her hidden, outstanding potential in Originium Arts. Adopting the outfit she wore in the movie and utilizing "revolutionary" fire-based Arts, Lava is no longer the same as she were used to be; she is now a formidable caster operative that is on par with R.I.'s other veteran casters.`,
  profile: `Born in Londinium in Victoria, Lava is the younger twin sister of her fellow Operator, Hibiscus. After contracting Oripathy, she came to Rhodes Island for treatment. She found the idea of saving lives appealing, and so volunteered for training.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 9.4%\nShe presents no obvious external symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.25 u/L\nDegree of infection is minor and has not had any physical impact.`,
    },
    {
      title: 'Originium Arts Rating',
      content: `Under the guidance of her Originium Arts instructor, Lava learned how to control basic Arts in less than a month despite never touching Originium before. Her methods are still rudimentary, and at present she can still only use simple flame conversions, but her stability and learning speed are astounding. If she trains for a long period of time, she may be able to reach a very high level.`,
    },
    {
      title: 'Archive File 1',
      content: `Unlike other stray children hiding in dark alleys, Lava was born into a relatively normal middle-class Victorian family. Lava believes that one must personally put in effort to help others, rather than stand at a distance. When she was young, she enjoyed working with the poor and the orphaned. She was very aware how much pain they suffered, which planted in her heart the seeds of compassion and justice.`,
    },
    {
      title: 'Archive File 2',
      content: `Lava is tough and ignores the advice of others when she moves into action. In fact, she is gentle and childlike at heart but prefers not to admit it to herself. Whenever anyone brings this up, she immediately changes the subject and tries to play it cool.`,
    },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/splash-caster-branch.png', factionIcon: '/icons/factions/op-reserve-a1.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/lava/base.png', chibiSrc: '/operators/lava/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Bunch of Sunlight', src: '/operators/lava/skin1.png', chibiSrc: '/operators/lava/chibi-skin1.webm', illustrator: '下野宏铭' },
  ],
  portrait: '/operators/lava/portrait.png',
  portraitFocus: { y: -5, x: 10, zoom: 250 },
  alter: {
    name: 'Lava the Purgatory', fileNo: 'R103', class: 'Caster', branch: 'Splash Caster', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Event Reward'],
    position: 'Ranged', trait: 'Deals AOE Arts damage',
    tags: ['DPS'],
    illustrator: 'Skade',
    stats: { hp: 1543, atk: 888, def: 115, res: 20, block: 1, cost: 35, aspd: '2.9s', rdp: '80s' },
    range: {
      base: [[0,1,1],[2,0,1],[0,1,1]],
      e1: [[0,1,1,1],[2,0,1,1],[0,1,1,1]],
      e2: [[0,1,1,1],[2,0,1,1],[0,1,1,1]],
    },
    physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
    talents: [
      { name: 'Spell Formation', desc: 'Immediately obtains 30 SP after first deployment. On each deployment, grants SP +4 to other Caster allies on the field. When deployed, other Caster allies obtain +4 SP after deployment', elite: 'E2' },
    ],
    skills: [
      {
        name: 'Flame Quenched Dagger', icon: '/operators/lava/alter/skill-1.png', activation: 'Manual', recovery: 'Auto',
        desc: 'Attack Range +1 tile, ATK +20%, and attack up to 2 targets simultaneously', spInit: 10, sp: 50, dur: '35s', rank: 'M3',
        levels: [
          { level: '1', desc: 'Attack Range +1 tile, ATK +2%, and attack up to 2 targets simultaneously', spInit: 10, sp: 60, dur: '25s' },
          { level: '2', desc: 'Attack Range +1 tile, ATK +4%, and attack up to 2 targets simultaneously', spInit: 10, sp: 59, dur: '26s' },
          { level: '3', desc: 'Attack Range +1 tile, ATK +6%, and attack up to 2 targets simultaneously', spInit: 10, sp: 58, dur: '27s' },
          { level: '4', desc: 'Attack Range +1 tile, ATK +8%, and attack up to 2 targets simultaneously', spInit: 10, sp: 57, dur: '28s' },
          { level: '5', desc: 'Attack Range +1 tile, ATK +10%, and attack up to 2 targets simultaneously', spInit: 10, sp: 56, dur: '29s' },
          { level: '6', desc: 'Attack Range +1 tile, ATK +12%, and attack up to 2 targets simultaneously', spInit: 10, sp: 55, dur: '30s' },
          { level: '7', desc: 'Attack Range +1 tile, ATK +14%, and attack up to 2 targets simultaneously', spInit: 10, sp: 54, dur: '31s' },
          { level: 'M1', desc: 'Attack Range +1 tile, ATK +16%, and attack up to 2 targets simultaneously', spInit: 10, sp: 53, dur: '32s' },
          { level: 'M2', desc: 'Attack Range +1 tile, ATK +18%, and attack up to 2 targets simultaneously', spInit: 10, sp: 52, dur: '33s' },
          { level: 'M3', desc: 'Attack Range +1 tile, ATK +20%, and attack up to 2 targets simultaneously', spInit: 10, sp: 50, dur: '35s' },
        ],
      },
      {
        name: 'Ring of Hellfire', icon: '/operators/lava/alter/skill-2.png', activation: 'Manual', recovery: 'Auto',
        desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 50% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 70, dur: '40s', rank: 'M3',
        levels: [
          { level: '1', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 30% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 80, dur: '30s' },
          { level: '2', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 30% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 79, dur: '31s' },
          { level: '3', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 30% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 78, dur: '32s' },
          { level: '4', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 35% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 77, dur: '33s' },
          { level: '5', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 35% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 76, dur: '34s' },
          { level: '6', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 35% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 75, dur: '35s' },
          { level: '7', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 40% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 74, dur: '36s' },
          { level: 'M1', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 40% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 73, dur: '37s' },
          { level: 'M2', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 40% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 72, dur: '38s' },
          { level: 'M3', desc: 'Stops attacking and targets the ally with the highest HP within range, enveloping them and herself within a ring of fire. Each ring of fire deals 50% ATK as Arts damage every second to all enemies in the surrounding 8 tiles', spInit: 30, sp: 70, dur: '40s' },
        ],
      },
    ],
    modules: {
      original: { code: 'Original', name: "Lava the Purgatory's Badge", desc: 'Appointed as Caster Operator to exercise Splash Caster responsibilities' },
      spcx: { code: 'SPC-X', name: "Sarkaz's Knife", stages: [
        { stage: 1, hp: '+80', atk: '+43', effect: 'Trait improved: Attack Range expands' },
        { stage: 2, hp: '+130', atk: '+55', effect: 'Spell Formation improved: Immediately obtains 33 SP after the first deployment' },
        { stage: 3, hp: '+165', atk: '+62', effect: 'Spell Formation improved: Immediately obtains 35 SP after the first deployment' },
      ]},
    },
    story: `The younger twin sister of Hibiscus, the Victorian Sarkaz Lava grew up in the same middle-class family in Londinium. While sharing the same sense of compassion as her sister, Lava takes things to her own way as she firmly believes in acting against injustice rather than standing still, a mindset influenced by her time helping her poor and orphaned neighbors back in Londinium.\n\nLava and Hibiscus joined Rhodes Island together to treat their Oripathy. In Lava's case she quickly mastered spacial Originium Arts which she utilizes offensively in the battlefield as part of Op Reserve A1. At the same time, she seems to have a chūnibyō behaviour that eventually led her production of a concept B-movie written together with Nian where she acted as the protagonist.\n\nThe aforementioned movie would eventually inspire Lava's further development upon reaching maturity over the years of her service in Rhodes Island; thanks to the intense training under Pith's guidance and the morale support from Hibiscus, she could now unleash her hidden, outstanding potential in Originium Arts. Adopting the outfit she wore in the movie and utilizing "revolutionary" fire-based Arts, Lava is no longer the same as she were used to be; she is now a formidable caster operative that is on par with R.I.'s other veteran casters.`,
    profile: `Born in Londinium, Victoria, Lava is the younger twin sister of her fellow Operator, Hibiscus. It has been a few years since she contracted Oripathy and came to Rhodes Island for treatment. She has remained ever diligent during her time in Rhodes Island and never wasted even a moment in her quest to hone her Originium Arts prowess.`,
    records: [
      {
        title: 'Clinical Analysis',
        content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 12%\nMild crystallization visible on her left arm.\n[Blood Originium-Crystal Density] 0.28u/L\nThe extended, high-intensity training; high-risk Originium Arts research; and the frequent field operations that Purgatory has taken part in have naturally taken their toll on her condition. Thanks to the meticulous care of her instructor, Pith, and Medic Operator Hibiscus, Purgatory's condition, though deteriorating, is still kept at manageable levels.`,
      },
      {
        title: 'Archive File 1',
        content: `Ever since our Originium Arts instructors took note of Lava's unparalleled talent for Arts, the instructors have formulated a full-fledged curriculum to allow Lava to master her Originium Arts more efficiently and systematically. The results were remarkable, and Lava herself has also become obsessed with her studies in Originium Arts and being able to put them into actual use, to the point that she neglects rest during her own free time. She has had the opportunity to study under the tutelage of many of our casters, including some particularly exceptional elite operators. This has been a source of pride to Lava, and it has given her all the more reason to spend time to improve her skills.\n\nLava has slowly come to realize that there is much more to Originium Arts than the physical damage you inflict on the surface; and they go much deeper than damage alone. Originium Arts is an academic discipline that is constantly being studied by casters, be it the research of the myriad of Arts there is or their origins. Operator Lava is particularly talented in this field of study, and she sought to seek out the truth and the meaning of this power by taking on the calamities that plague our world herself. During her pursuit and her participation of the neutralization of those countless crises, she slowly discovered her destiny, hidden behind the tragedies of Oripathy and war, and she is trying to take control of it.`,
      },
      {
        title: 'Archive File 2',
        content: `Although she may seem to be a rebellious young woman, ignorant of world affairs, Operator Lava is actually very scrupulous. She empathizes with society's underdogs and the insignificant yet most important wishes they have, and she takes it upon herself to help them. As she becomes more powerful, the responsibility she shoulders also becomes greater – This is not limited to the missions that she must complete as a Rhodes Island operator, but also what she asks from herself, her refusal to turn her back on those in need, and her strong desire to correct society's injustices. As Lava was raised in a normal family, poverty and unfairness were never on Lava's mind, yet after she started to live on her own, as a Sarkaz and an Infected, Lava gradually came to be aware of the immense, uncalled-for hatred that society has toward the "oppressed."\n\nBecause there are limits to her power, there are bound to be those who seek her aid that she cannot save. Because of her status as a Sarkaz and an Infected, she will always be antagonized by certain intolerant strangers. In her pursuit of justice, Lava has gradually come to understand that the "right way" she has read in books is nothing like the reality she faces. Having gone through so many incidents during her time at Rhodes Island, she has slowly come to understand its ideals, even choosing to firmly stand on its side. This is a choice that she has made herself – Rhodes Island showed her the way, and she has long become an inseparable member as she continued to grow. In the future, she will undoubtedly be an important key to Rhodes Island's growth and leadership.`,
      },
      {
        title: 'Archive File 3',
        content: `Just as Operator Lava's power continued to improve, so too did her combat equipment. Along with the gradual improvement in its performance, the appearance of her combat uniform is one of the aspects that she pays the most attention to. As can be seen in her language and the way she interacts with others, Lava has become much more mature and approachable. Perhaps this is why she's become somewhat apprehensive about revealing her interests.\n\n"What's that? You're kidding! Lava spent her pay on tweaking her combat outfit again? She always spends her allowance on weird stuff like this, but I really just don't see the difference. Well... Now that you mention it, compared to when she just started out, her outfit's changed quite a bit. She changes it little by little, though. How is anyone supposed to notice?! Last time, she got so mad just because of this, saying I didn't care about her as a sister. That I forced all those healthy meals on her, but I never paid attention to her hairstyle and how she changes her outfit... Sheesh, of course I care about her. I care about her so much, I know what kinds of food she eats, how many times she goes to the bathroom, and when exactly she goes to bed and wakes up each and every day," said Operator Hibiscus, her arms confidently crossed as she unwittingly confessed to abusing her privileges to our record keeping personnel.\n\n"That 'costume?' Eh, that's no costume in the first place, and I definitely didn't make her wear it. That's just what girls like to do. We want to know if anyone notices what's changed about us. That's why she went through all that trouble putting that movie together all while not leaving even a trace. She wanted to show all that off to everyone. It turned out okay. Everyone seemed to like the way she looked. That's why she keeps all those outfits and works on her hair, adding new elements she comes up with bit by bit. Don't you think Lava was boring when she spent all her time picking up those simple Arts tricks? Hobbies like this are what make girls cute," quipped a certain laid-back operator as she waved her fan around, joining in on the message's recording on her own accord.`,
      },
      {
        title: 'Archive File 4',
        content: `Having demonstrated her prowess in our evaluations, Lava left Reserve Op Team A1 she was assigned to after she became a full-fledged member. To Lava, her time as an on-the-job trainee is irreplaceable. She had a group of kind and caring partners she could open her heart to; the effect this has had on her growth is simply beyond measure. Her relationship with Hibiscus has also finally been repaired, and the two sisters have learned to tolerate and understand each other. What a great ending.\n\n"What do you mean, 'what a great ending?' Do you know how what she did right after I 'compromised' with her? Healthy meals, healthy meals, and healthy meals! Not only that, she even gets in the way of my training and makes me go to bed before it's even dark out so to keep me from pulling all-nighters! Hmph, I'm not gonna let her push me around anymore. We get along better than we used to, but I'm not gonna spend any more than time her than I have to."\n\nAhem... After that, Lava began to take part in operations of greater importance, becoming a powerful and dependable Caster.\n\nWe must take care to not underestimate the dangers and ploys that may harm us as we battle the many injustices in our world. This applies not only to Lava, but also Rhodes Island as a whole. Both have faced many seemingly unsurmountable dangers, and often sacrifices had to be made. During the ■■■■ Incident—\n\n[Log Partially Missing]\n\n—Having worked together for so long, this was undoubtedly the most difficult part of the whole incident to those teammates. After the ■■■■ Incident, it was as though Lava became a mature, full-grown adult in the span of a night, having learned to remain calm when it's time to part ways and to treasure the moments when we meet.\n\nI just wish that... the children who grew up in such difficulties and hardships would know how to cherish their own lives after they come to understand the pain of loss.\n\n[Addendum 1]\nPermission has not been granted to access information on related incidents.\n\n[Addendum 2]\nOut of respect for the wishes of the parties involved, access to certain information pertaining to the operator and the pertinent incidents has been restricted.\n\n[Addendum 3]\nCurrently, Operator Lava's psychological condition remains mostly stable.`,
      },
      {
        title: 'Promotion Record',
        content: `As with all Rhodes Island operators, Lava is required to regularly undergo psychological evaluations and counseling. One point worthy of note is that Lava's mental health values are not particularly stable. After she finds herself involved in sudden, unexpected major incidents, Operator Lava always comes out demonstrating a stronger resolve and determination. In contrast, her mental health also deteriorates by a demonstrable degree. The value she sees in her own life decreases after each incident, just as the sacrificing herself to protect others becomes more and more of a viable strategy to her. The braver and stronger she gets, the higher the price she has to pay for her power.\n\nThis has been a source of concern to Medical Operator Hibiscus, who frequently misuses her permissions to retrieve the relevant data.`,
      },
    ],
    classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/splash-caster-branch.png',
    skins: [
      { id: 'base', label: 'Base', src: '/operators/lava/alter/base.png', chibiSrc: '/operators/lava/alter/chibi.webm', illustrator: 'Skade' },
      { id: 'e2', label: 'Elite 2', src: '/operators/lava/alter/e2.png', chibiSrc: '/operators/lava/alter/chibi.webm', illustrator: 'Skade' },
      { id: 'skin1', label: 'Dusk Wisteria', src: '/operators/lava/alter/skin1.png', chibiSrc: '/operators/lava/alter/chibi-skin1.webm', illustrator: 'Skade' },
    ],
    portrait: '/operators/lava/alter/portrait.png',
    portraitFocus: { y: 4, x: 52, zoom: 280 },
  },
}

export default lava
