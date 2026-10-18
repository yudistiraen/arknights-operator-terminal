import type { Operator } from '../../types'

const durNar: Operator = {
  name: 'Dur-nar', fileNo: 'R124', class: 'Defender', branch: 'Arts Protector', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Credit Store'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Vulpo', gender: 'Female', birthplace: 'Columbia',
  birthday: 'August 11th', height: '160 cm', combatExp: '8 years', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: '下野宏铭',
  cv: { JP: 'Nanako Mori', CN: 'Lu Xiaotong (credited as "Thea" in EN)', EN: 'Triya Leong', KR: 'Yoon A-young' },
  trait: 'Normal attacks deal Arts Damage while the skill is active',
  tags: ['Defense', 'DPS'],
  stats: { hp: 3007, atk: 648, def: 548, res: 15, block: 3, cost: 24, aspd: '1.6s', rdp: '70s' },
  range: { base: [[2]], e1: [[2]] },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Sword and Shield', desc: 'ATK +4%, DEF +4%', elite: 'E1' },
    { name: 'Sword and Shield', desc: 'ATK +7%, DEF +7%', elite: 'E2' },
  ],
  skills: [
    {
      name: 'ATK Up β', icon: '/operators/dur-nar/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +80%', spInit: 10, sp: 35, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +20%`, spInit: 0, sp: 40, dur: '25s' },
        { level: '2', desc: `ATK +25%`, spInit: 0, sp: 40, dur: '25s' },
        { level: '3', desc: `ATK +30%`, spInit: 0, sp: 40, dur: '25s' },
        { level: '4', desc: `ATK +35%`, spInit: 0, sp: 37, dur: '25s' },
        { level: '5', desc: `ATK +40%`, spInit: 0, sp: 37, dur: '25s' },
        { level: '6', desc: `ATK +45%`, spInit: 0, sp: 37, dur: '25s' },
        { level: '7', desc: `ATK +50%`, spInit: 5, sp: 37, dur: '25s' },
        { level: 'M1', desc: `ATK +60%`, spInit: 5, sp: 37, dur: '25s' },
        { level: 'M2', desc: `ATK +70%`, spInit: 5, sp: 37, dur: '25s' },
        { level: 'M3', desc: `ATK +80%`, spInit: 10, sp: 35, dur: '25s' },
      ],
    },
    {
      name: 'Shielded Counterattack', icon: '/operators/dur-nar/skill-2.png', activation: 'Manual', recovery: 'Defensive Recovery',
      desc: 'ATK +80%, attacks all blocked enemies', spInit: 12, sp: 25, dur: '30s', rank: 'M3',
      note: "Contrary to the wording, Dur-nar does not need to block the enemies for her attacks with Shielded Counterattack to hit them. Rather, Dur-nar's attacks hit multiple targets within range equal to her block count.",
      levels: [
        { level: '1', desc: `ATK +20%, attacks all blocked enemies`, spInit: 0, sp: 37, dur: '30s' },
        { level: '2', desc: `ATK +25%, attacks all blocked enemies`, spInit: 0, sp: 36, dur: '30s' },
        { level: '3', desc: `ATK +30%, attacks all blocked enemies`, spInit: 0, sp: 35, dur: '30s' },
        { level: '4', desc: `ATK +35%, attacks all blocked enemies`, spInit: 3, sp: 34, dur: '30s' },
        { level: '5', desc: `ATK +40%, attacks all blocked enemies`, spInit: 3, sp: 33, dur: '30s' },
        { level: '6', desc: `ATK +45%, attacks all blocked enemies`, spInit: 3, sp: 32, dur: '30s' },
        { level: '7', desc: `ATK +50%, attacks all blocked enemies`, spInit: 6, sp: 31, dur: '30s' },
        { level: 'M1', desc: `ATK +60%, attacks all blocked enemies`, spInit: 8, sp: 29, dur: '30s' },
        { level: 'M2', desc: `ATK +70%, attacks all blocked enemies`, spInit: 10, sp: 27, dur: '30s' },
        { level: 'M3', desc: `ATK +80%, attacks all blocked enemies`, spInit: 12, sp: 25, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Dur-nar's Badge", desc: 'Appointed as Defender Operator to exercise Arts Protector responsibilities' },
    astx: { code: 'AST-X', name: "A Guardian's Path", stages: [
      { stage: 1, hp: '+150', atk: '+27', effect: 'Trait improved: On skill activation, normal attacks deal Arts damage. When attacking and being attacked, deals extra 10% of ATK as Arts damage to target' },
      { stage: 2, hp: '+220', atk: '+35', effect: 'Sword and Shield improved: ATK +10%, DEF +10%' },
      { stage: 3, hp: '+270', atk: '+40', effect: 'Sword and Shield improved: ATK +12%, DEF +12%' },
    ]},
  },
  story: `Makayla Springthunder is an ex-lieutenant of the Columbian army who was discharged following an altercation with her superior, triggered by her squad being sent on a suicide mission. Since then, the Vulpo has experienced ups and downs in her life. To ease her pain, Makayla often spent her time in bars. She was laid off from the local police precinct despite her sister's connections, unable to receive more budget for the shoddy security teams she had to lead, and eventually tried to go to the frontiers. After losing the people she brought there, she returned to the city as a disgraced old vet and found that her father had died while her little sister took over his work. She received a letter from Rhodes Island and joined under the codename "Dur-nar,” then became one of their drill instructors alongside Dobermann and Whislash.\n\nOn the battlefield, Dur-nar utilizes a specially crafted tactical shield and electroshock blade infused with Arts against her foes. Outside the battlefield, Dur-nar provides a snack network and remains the heavy drinker she was in the past, and has even befriended Frostleaf, who she once fought with her electric blade.`,
  profile: `Dur-nar was once a lieutenant in Columbia's standing army. For unknown reasons, she was discharged from military service and through regular recruitment channels, she joined Rhodes Island. She has serves as a drill instructor and defensive operator. She excels at using a specially-constructed shield for protection and at finding opportunities to strike enemies with her electric blade.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n\n[Somatic Cell-Originium Fusion Rate] 0%\nPhysical exam shows no signs of Oripathy infection.\n\n[Blood Originium-Crystal Density] 0.16u/L\nPatient has extensive combat experience and bears scars of injuries from Originium. However, there is currently no sign of infection. Periodic examination is recommended.` },
    { title: 'Archive File 1', content: `The upright and candid former soldier is now responsible for mid-level standard courses at Rhodes Island and is also an instructor for introductory courses in heavy armor. Dur-nar previously served in Columbia's army, where she saw plenty of combat and gained a reputation as a highly skilled warfighter. She is something of a foodie, finding the greatest joy in life comes from what she puts in her mouth.` },
    { title: 'Archive File 2', content: `Due to the medical unit's (especially Hibiscus) strict management of provisions in addition to Dobermann's strict requirements for newly inducted operators, even if snacks were placed on Rhodes Island shelves, that does not guarantee that new operators would be able to get their hands on them, much less happily scarf down entire bags. Fortunately for everyone, there is Dur-nar. Through her connections in the logistics department, she has organized a snack network that spans the entirety of Rhodes Island. She spares no effort to provide everyone with the most delicious and cheapest snacks. She cannot hope to compete with "hidden enemies" in a battle of wits and bravery, but her original intention was merely to add some happiness to the lives of those at Rhodes Island, anyway. On this basis, the managers have turned a blind eye to her activities. Besides, Dobermann's favorite food is actually –– (this record has come to an end suddenly and inexplicably)` },
    { title: 'Archive File 3', content: `Dur-nar is acquainted with Frostleaf, and it was clear from their first meeting at Rhodes Island that their memories of each other may not be pleasant. But time heals all wounds, and the two are no longer the warriors crossing swords that they once were. They have agreed to let the past be the past, and hold on tight to the life they had spent their youth chasing. After a period of warming up, and a bit of friction, Frostleaf came forward with a proposal. She invited Dur-nar to join her on a mission; an invitation the latter gladly accepted. Some people might not understand why a loner like Frostleaf would ask for a partner, but Dur-nar knew the reason: only those who are willing to atone for their sins can be trusted to stand together.` },
    { title: 'Archive File 4', content: `Dur-nar was once a most troublesome soldier, a thorn in the side of her commanders: she was an unsurpassed warrior, but would not listen to orders. When the brass had had enough of her stubbornness, they gave her a promotion, sending her to manage a squad of fresh recruits. She trained the kids, with great frustration, and they in turn changed her disposition. In time, she grew to accept the soldiers as her own. For the sake of their training, she traded her dual electric swords for the sword and shield combo she uses today. She put her heart and soul into her men, right up until the point when the brass decided to send them on a suicide mission. Dur-nar was beside herself. She flew into a rage and assaulted a superior officer. She has been unwilling to discuss the events that followed. According to certain documents we've acquired, she was forcibly discharged. She then went through a period of hopping from security to police to mercenary work for short stints, up until she arrived at Rhodes Island. When the Doctor asked her in private why she had come to join Rhodes Island, she produced a letter. It was a letter of thanks from the few survivors of her squad of trainees. At the end of the letter, the Doctor fixated on a particular sentence, "If there were a place where the command actually cared about the grunts, would you give it a try?" After that was an address to send her resume to Rhodes Island, along with all the names of the survivors.\n\n"And that's why I'm here."` },
    { title: 'Promotion Record', content: `"I saw her. If I'm not mistaken, at that time, she was still known as 'Patrick's Spring.' If you mentioned this code name to any of the senior officers, I guarantee you their eyes would light up. She was that famous. You didn't know that? Oh, of course. You're not from Columbia. Have you heard of the Springtime Offensive? Yes, that's right. THAT Springtime Offensive. Both sides were still getting ready for battle. She picked up two electric blades all by herself and went charging at a group of enemies. I've never seen someone with such an outstanding character as that. The enemy never knew what hit them. The rest of our troops followed her lead, and that was that. The enemy was finished. Yes, she's a strong one, all right. She can do anything. She's just not great at obeying discipline. She really gave those old guys a hard time. I still remember the looks on their faces at her award ceremony. It was something to behold. For a period of time, all of Columbia's recruitment materials had her and her alone on them. It's a shame that I never heard much about her after she moved units. Oh man, she's with you guys. How did you manage to recruit her? My companions have been looking for her for a long time. Even after all this time, she probably fetches a huge commission. Oh, it's time to go. Shift's up, I need to withdraw. Come by and talk more the next time you get a chance. It's a date."\n\nSource: Excerpt of recorded conversional between personnel member D335 and Headhunter H. Jr.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/arts-protector-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/dur-nar/base.png', chibiSrc: '/operators/dur-nar/chibi.webm', illustrator: '下野宏铭' },
    { id: 'e2', label: 'Elite 2', src: '/operators/dur-nar/e2.png', chibiSrc: '/operators/dur-nar/chibi.webm', illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Plush Cake', src: '/operators/dur-nar/skin1.png', chibiSrc: '/operators/dur-nar/chibi-skin1.webm', illustrator: '3MO' },
  ],
  portrait: '/operators/dur-nar/portrait.png',
  portraitFocus: { y: -0.9, x: 40.7, zoom: 313 },
}

export default durNar
