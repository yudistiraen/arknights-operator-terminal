import type { Operator } from '../../types'

const aciddrop: Operator = {
  name: 'Aciddrop', fileNo: 'R139', class: 'Sniper', branch: 'Heavyshooter', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Columbia', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Columbia',
  birthday: 'August 13th', height: '150 cm', combatExp: '1 year', infectionStatus: 'Confirmed infected by medical examination.', illustrator: 'Lanzi',
  cv: { JP: 'Yui Nakajima', CN: 'Pixiugang (credited as "Hayami" in EN)', EN: 'Sydney Miede', KR: 'Park Seon-young' },
  trait: 'High accuracy point-blank shot',
  tags: ['DPS'],
  stats: { hp: 1576, atk: 815, def: 209, res: 0, block: 1, cost: 18, aspd: '1.6s', rdp: '70s' },
  range: { base: [[1, 1, 0], [2, 1, 1], [1, 1, 0]], e1: [[1, 1, 1], [2, 1, 1], [1, 1, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Slideshot Style', desc: "Each attack deals at least 20% of this unit's ATK damage (increases to 30% of ATK when the enemy is in the two frontal tiles)", elite: 'E1' },
    { name: 'Slideshot Style', desc: "Each attack deals at least 25% of this unit's ATK damage (increases to 40% of ATK when the enemy is in the two frontal tiles)", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Fancy Shot', icon: '/operators/aciddrop/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ASPD +70', spInit: 20, sp: 35, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: `ASPD +20`, spInit: 0, sp: 50, dur: '20s' },
        { level: '2', desc: `ASPD +25`, spInit: 0, sp: 50, dur: '20s' },
        { level: '3', desc: `ASPD +30`, spInit: 0, sp: 50, dur: '20s' },
        { level: '4', desc: `ASPD +35`, spInit: 10, sp: 45, dur: '20s' },
        { level: '5', desc: `ASPD +40`, spInit: 10, sp: 45, dur: '20s' },
        { level: '6', desc: `ASPD +45`, spInit: 10, sp: 45, dur: '20s' },
        { level: '7', desc: `ASPD +50`, spInit: 15, sp: 40, dur: '20s' },
        { level: 'M1', desc: `ASPD +56`, spInit: 15, sp: 39, dur: '20s' },
        { level: 'M2', desc: `ASPD +62`, spInit: 15, sp: 37, dur: '20s' },
        { level: 'M3', desc: `ASPD +70`, spInit: 20, sp: 35, dur: '20s' },
      ],
    },
    {
      name: 'Trigger Time', icon: '/operators/aciddrop/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +40%, attacks 2 times consecutively', spInit: 35, sp: 50, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +20%, attacks 2 times consecutively`, spInit: 10, sp: 70, dur: '25s' },
        { level: '2', desc: `ATK +22%, attacks 2 times consecutively`, spInit: 10, sp: 68, dur: '25s' },
        { level: '3', desc: `ATK +24%, attacks 2 times consecutively`, spInit: 10, sp: 66, dur: '25s' },
        { level: '4', desc: `ATK +26%, attacks 2 times consecutively`, spInit: 15, sp: 64, dur: '25s' },
        { level: '5', desc: `ATK +28%, attacks 2 times consecutively`, spInit: 15, sp: 62, dur: '25s' },
        { level: '6', desc: `ATK +30%, attacks 2 times consecutively`, spInit: 15, sp: 60, dur: '25s' },
        { level: '7', desc: `ATK +32%, attacks 2 times consecutively`, spInit: 20, sp: 58, dur: '25s' },
        { level: 'M1', desc: `ATK +34%, attacks 2 times consecutively`, spInit: 25, sp: 56, dur: '25s' },
        { level: 'M2', desc: `ATK +37%, attacks 2 times consecutively`, spInit: 30, sp: 53, dur: '25s' },
        { level: 'M3', desc: `ATK +40%, attacks 2 times consecutively`, spInit: 35, sp: 50, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Aciddrop's Badge", desc: 'Appointed as Sniper Operator to exercise Heavyshooter responsibilities' },
    arcx: { code: 'ARC-X', name: '"Freedom, Onion Rings, and Me"', stages: [
      { stage: 1, def: '+30', aspd: '+3', effect: 'New trait: Redeployment Time reduced by 25 seconds' },
      { stage: 2, def: '+40', aspd: '+4', effect: "Slideshot Style improved: Each attack deals at least 30% of this unit's ATK damage (increases to 45% of ATK when the enemy is in the two frontal tiles)" },
      { stage: 3, def: '+50', aspd: '+5', effect: "Slideshot Style improved: Each attack deals at least 35% of this unit's ATK damage (increases to 50% of ATK when the enemy is in the two frontal tiles)" },
    ]},
  },
  story: `A rebellious Columbian Liberi girl of Gaulish descent, Aciddrop is deeply interested in street subculture, especially skateboarding, after meeting a friend of her father, who turned out to be a street warrior known as "Onion Ring Alliance." Under his guidance, she became a well-known professional skateboarder and street icon. However, she contracted Oripathy after getting into trouble with a multinational organized crime syndicate, leading Aciddrop to seek treatment at Rhodes Island. In return, she offered her services as a skirmisher, effortlessly maneuvering the battlefield on her skateboard and engaging enemies in "drive-bys."`,
  profile: `A street girl of Columbia, born to a normal working-class family. Her parents are both truck drivers and often work through the night, pushing Aciddrop out to the streets at a young age. From practicing skateboarding in her spare time after school to becoming a champion at local skateboarding tournaments, Aciddrop has become a renowned street icon throughout the city, and her success has drawn countless haters in the process. During a deliberate fight, Aciddrop was infected with Originium dust, later coming to Rhodes Island to seek treatment.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n\n[Cell-Originium Assimilation] 4%\nOperator Aciddrop's Oripathy is currently still mild, and no Originium crystals have been found on the surface of the body.\n\n[Blood Originium-Crystal Density] 0.15u/L\nAciddrop was infected as the product of manmade accident. Fortunately, the amount of Originium dust she inhaled was minute and the infection is being handled appropriately. No trend of deterioration present.` },
    { title: 'Archive File 1', content: `Miss Aciddrop is an extremely "hip" girl. This is not solely due to her interest in skateboarding, graffiti, and rap, but also due to her strong temperament. This is reflected through her open-minded attitude towards all things in life– even when undergoing a series of examinations for her Oripathy, Miss Aciddrop would only lament that she had to postpone her cycling trip, as if her free-spirited travels were of greater importance than her condition.\nBy the way, Miss Aciddrop is not "interested" in street culture. According to her own account, she was actually quite famous in her hometown prior to becoming infected: she had won many local skating competitions, children all wanted to learn how to skate from her, and she shared sibling-like bonds with some of the street artists there. –Though I first thought this was simply the boasting of a street girl, we discovered that a certain line of a famous, trendy sports brand really had plans to feature her as a mode. This certainly surprised us.` },
    { title: 'Archive File 2', content: `During her operator assessment exam, Miss Aciddrop demonstrated an unexpected talent for sniping– strictly speaking, a very flashy talent. Though the mobility granted from being able to shoot while on a skateboard is of dubious value in actual combat, this Liberi's agility caught many operators off guard. "It's like she's performing for a crowd," one operator from the HR Department remarked.\nHowever, let this not overshadow the fact that Miss Aciddrop's proficiency with a hand crossbow is not inferior to her skill on the skateboard. It is said that she learned these skills from an old local policeman. As a student, Aciddrop was report to the police for "excessive graffiti," and was chased around three blocks by an old, seemingly-weak policeman. Afterwards, she was subjected to a scolding that was dozens of minutes long. After such incidents "accidentally occurred several more times," scolding soon turned into chatter, and the kindhearted old policeman seemed to take pity upon Aciddrop, for her parents were almost never home, leaving her to fend for herself. Intentionally or otherwise, the old policeman let his daughter become friends with Aciddrop, since the two of them were the same age. It is this daughter who first taught Aciddrop how to skate.\n"Of course, the pupil surpassed the teacher, eh?" Miss Aciddrop would happily proclaim.` },
    { title: 'Archive File 3', content: `Aciddrop's hometown is located in a rather remote location in Columbia. The vast land and undeveloped economy there were rich breeding grounds for the gray market to flourish. The Mafia, local gangs, and Siracusan merchants frequently made their way in and out, and though this shady area was kept relatively orderly, the general public security is far from ideal. In order to give the young and energetic children a means to protect themselves, after hesitating again and again, the old policeman taught Aciddrop the basic techniques to operate a hand crossbow, and also made a simple weapon for her– after all, he believed that Aciddrop has a strong sense of justice and was not the kind of child who would do bad things with a weapon.\nUnfortunately, there were some issues with Aciddrop's loose definition of justice. During an unexpected auto accident, the brave Aciddrop unintentionally destroyed a gang's illegal Originium trading plan, triggering retaliation from the affected gang members. During a brawl that was disguised as a case of school bullying, gang members who were even younger than Aciddrop sprinkled Originium dust onto her.` },
    { title: 'Archive File 4', content: `However, Aciddrop is not one to dwell on the past, demonstrating the perseverance and strength that her youth affords her. This perseverance has supported her to face the painful aspects of life, or in other words, allowed her to take her mind off from the pain. Perhaps one day, after Miss Aciddrop's Originium is effectively suppressed, she will choose to return home. Even if she can no longer take off her identity as an Infected, she feels as if she must complete the journey she failed to finish.\n"A toast to freedom, a toast to onion rings, and a toast to myself." –Excerpt from a speech made by Miss Aciddrop on her first day at the dorms, when she threw a cocktail party using carbonated drinks rather than liquor.` },
    { title: 'Promotion Record', content: `Recently... There have been some bizarre rumors aboard Rhodes Island. As we are fairly tolerant of various cultures, pop culture among the youth is, of course, rather interesting. However, due to invisible individuals playing super loud hip-hop, graffiti appearing out of thin air, and a skateboarding trend that has spread like wildfire across younger operators and patients alike... If possible, shouldn't we try to dial things down a bit? What do you all think? –The "suggestion" of a highly-respected logistics operator to young operators such as Ethan, Aciddrop, and Vigna\n\nHowever, after refugees were rescued from the ruins of a Catastrophe area, you all tagged "Never say die" on the walls of the ruins. I can't say I'm not a fan. –A subsequent word of appreciation added by the respected logistics operator` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/heavyshooter-branch.png', factionIcon: '/icons/factions/columbia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/aciddrop/base.png', chibiSrc: '/operators/aciddrop/chibi.webm', illustrator: 'Lanzi' },
    { id: 'e2', label: 'Elite 2', src: '/operators/aciddrop/e2.png', chibiSrc: '/operators/aciddrop/chibi.webm', illustrator: 'Lanzi' },
    { id: 'skin1', label: '"Afternoon Teatime"', src: '/operators/aciddrop/skin1.png', chibiSrc: '/operators/aciddrop/chibi-skin1.webm', illustrator: 'Lanzi' },
    { id: 'skin2', label: 'Holiday HD75', src: '/operators/aciddrop/skin2.png', chibiSrc: '/operators/aciddrop/chibi-skin2.webm', illustrator: 'Lanzi' },
  ],
  portrait: '/operators/aciddrop/portrait.png',
  portraitFocus: { y: -3, x: 48, zoom: 250 }
}

export default aciddrop
