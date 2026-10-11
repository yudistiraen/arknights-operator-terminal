import type { Operator } from '../../types'

const gummy: Operator = {
  name: 'Gummy', fileNo: 'USS3', class: 'Defender', branch: 'Guardian', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment', 'Starter Pack'],
  faction: 'Ursus Student Self-Governing Group', position: 'Melee', race: 'Ursus', gender: 'Female', birthplace: 'Ursus',
  birthday: 'October 2nd', height: '155 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Skade',
  cv: { JP: 'Natsumi Takamori', CN: 'Liang Ruixue (credited as "Winter" in EN)', EN: 'Cristina Vee', KR: 'Kim Chae-ha' },
  trait: 'Can heal allies by using the skill',
  tags: ['Defense', 'Healing'],
  stats: { hp: 2550, atk: 435, def: 562, res: 10, block: 3, cost: 20, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2]],
    e1: [[2]],
  },
  physicalExam: { 'Physical Strength': 'Excellent', Mobility: 'Normal', Endurance: 'Excellent', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Frying Pan Specialist', desc: 'When attacking, has a 10% chance to deal 150% damage and Stun the target for 0.5 seconds', elite: 'E1' },
    { name: 'Frying Pan Specialist', desc: 'When attacking, has a 13% (+3%) chance to deal 150% damage and Stun the target for 0.5 seconds', elite: 'E1 (Potential 5)' },
    { name: 'Frying Pan Specialist', desc: 'When attacking, has a 15% chance to deal 200% damage and Stun the target for 1 second', elite: 'E2' },
    { name: 'Frying Pan Specialist', desc: 'When attacking, has a 18% (+3%) chance to deal 200% damage and Stun the target for 1 second', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Provisions', icon: '/operators/gummy/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: "Restores the HP of a nearby ally by 160% of Gummy's ATK in the next attack\nCan store 3 charges", spInit: 0, sp: 4, rank: 'M3',
      range: [[1,1,1],[1,2,1],[1,1,1]],
      levels: [
        { level: '1', desc: "Restores the HP of a nearby ally by 95% of Gummy's ATK in the next attack\nCan store 1 charges", spInit: 0, sp: 7 },
        { level: '2', desc: "Restores the HP of a nearby ally by 100% of Gummy's ATK in the next attack\nCan store 1 charges", spInit: 0, sp: 7 },
        { level: '3', desc: "Restores the HP of a nearby ally by 105% of Gummy's ATK in the next attack\nCan store 1 charges", spInit: 0, sp: 7 },
        { level: '4', desc: "Restores the HP of a nearby ally by 115% of Gummy's ATK in the next attack\nCan store 1 charges", spInit: 0, sp: 6 },
        { level: '5', desc: "Restores the HP of a nearby ally by 120% of Gummy's ATK in the next attack\nCan store 1 charges", spInit: 0, sp: 6 },
        { level: '6', desc: "Restores the HP of a nearby ally by 125% of Gummy's ATK in the next attack\nCan store 1 charges", spInit: 0, sp: 6 },
        { level: '7', desc: "Restores the HP of a nearby ally by 130% of Gummy's ATK in the next attack\nCan store 2 charges", spInit: 0, sp: 5 },
        { level: 'M1', desc: "Restores the HP of a nearby ally by 140% of Gummy's ATK in the next attack\nCan store 2 charges", spInit: 0, sp: 5 },
        { level: 'M2', desc: "Restores the HP of a nearby ally by 150% of Gummy's ATK in the next attack\nCan store 2 charges", spInit: 0, sp: 5 },
        { level: 'M3', desc: "Restores the HP of a nearby ally by 160% of Gummy's ATK in the next attack\nCan store 3 charges", spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Cooking', icon: '/operators/gummy/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Start cooking and stops attacking for 10 seconds; DEF +80%\nFocuses on healing nearby allies after finishing cooking; ATK +80%', spInit: 20, sp: 30, dur: '30s', rank: 'M3',
      range: [[1,1,1],[1,2,1],[1,1,1]],
      note: "Gummy is disarmed in the first step of Cooking. Although not stated in-game, Cooking increases Gummy's attack interval by 130%, extending it to 2.76 seconds (before modifiers), in the second step. The duration displayed in-game is inaccurate, as the first step and the second step occurs separately; hence, Cooking lasts for 40 seconds in total.",
      levels: [
        { level: '1', desc: 'Start cooking and stops attacking for 10 seconds; DEF +50%\nFocuses on healing nearby allies after finishing cooking; ATK +30%', spInit: 10, sp: 40, dur: '30s' },
        { level: '2', desc: 'Start cooking and stops attacking for 10 seconds; DEF +50%\nFocuses on healing nearby allies after finishing cooking; ATK +33%', spInit: 10, sp: 39, dur: '30s' },
        { level: '3', desc: 'Start cooking and stops attacking for 10 seconds; DEF +50%\nFocuses on healing nearby allies after finishing cooking; ATK +36%', spInit: 10, sp: 38, dur: '30s' },
        { level: '4', desc: 'Start cooking and stops attacking for 10 seconds; DEF +60%\nFocuses on healing nearby allies after finishing cooking; ATK +40%', spInit: 12, sp: 37, dur: '30s' },
        { level: '5', desc: 'Start cooking and stops attacking for 10 seconds; DEF +60%\nFocuses on healing nearby allies after finishing cooking; ATK +43%', spInit: 12, sp: 36, dur: '30s' },
        { level: '6', desc: 'Start cooking and stops attacking for 10 seconds; DEF +60%\nFocuses on healing nearby allies after finishing cooking; ATK +46%', spInit: 12, sp: 35, dur: '30s' },
        { level: '7', desc: 'Start cooking and stops attacking for 10 seconds; DEF +70%\nFocuses on healing nearby allies after finishing cooking; ATK +50%', spInit: 14, sp: 34, dur: '30s' },
        { level: 'M1', desc: 'Start cooking and stops attacking for 10 seconds; DEF +70%\nFocuses on healing nearby allies after finishing cooking; ATK +60%', spInit: 16, sp: 33, dur: '30s' },
        { level: 'M2', desc: 'Start cooking and stops attacking for 10 seconds; DEF +70%\nFocuses on healing nearby allies after finishing cooking; ATK +70%', spInit: 18, sp: 32, dur: '30s' },
        { level: 'M3', desc: 'Start cooking and stops attacking for 10 seconds; DEF +80%\nFocuses on healing nearby allies after finishing cooking; ATK +80%', spInit: 20, sp: 30, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Gummy's Badge", desc: 'Appointed as Defender Operator to exercise Guardian responsibilities' },
    guax: { code: 'GUA-X', name: 'Медовые Пряники', stages: [
      { stage: 1, hp: '+150', atk: '+40', effect: 'New trait: When healing allied units with less than 50% HP, increases heal amount by 15%' },
      { stage: 2, hp: '+210', atk: '+48', effect: 'Frying Pan Specialist improved: When attacking, has a 20% chance to deal 200% damage and Stun the target for 1.5 seconds' },
      { stage: 3, hp: '+250', atk: '+55', effect: 'Frying Pan Specialist improved: When attacking, has a 23% chance to deal 200% damage and Stun the target for 1.5 seconds' },
    ]},
  },
  profile: `Gummy was once the teenage group runner-up in the Ursus Youth Scout competition. Before the Chernobog incident, Gummy was a middle school student in the city. She is skilled in Ursus-style cooking.\nIn a number of tests, she has exhibited the strength and solid physique characteristic of most Ursus. Gummy has been approved for an internship in a squad of Defender Operators. She also provides logistical support and combat culinary services for Rhodes Island.`,
  story: `An Ursus student and Youth Scout from the Peterheim Middle School in Chernobog, Lada Valyueva was trapped alongside her schoolmates during the Chernobog uprising. The tragedy forced her to kill other students in order to protect herself for survival... at least, she successfully escaped from the chaos alongside Anna Morozova (Istina), Natalya Rostova (Rosa), Rosalind (Leto) and Sonya (Zima) as the Ursus Student Self-Governing Group. Lada, under the codename "Gummy," is making use of her Youth Scout training to fight for Rhodes Island, which has provided the group shelter. Aside from being a combatant, she prefers to spend much time inside the kitchen to provide fresh meals for her allies.\n\nThe trauma of the events that occurred in Peterheim is often overwhelming for Gummy. She must never go hungry lest she starts to fall back into old habits, and she also suffers from nyctophobia, sleeping with the light turned on at all times. Even so, Gummy's optimism will help her against any obstacle so that she will have the chance to reunite with her parents who are currently involved in a secret science project. Only time will tell how strong this little girl will become.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Fusion Rate] 0%\nOperator shows no signs of infection at this time.\n[Blood Crystal Density] 0.12u/L\nThis Operator's Blood Crystal Density is well within acceptable range.` },
    { title: 'Archive File 1', content: `Of the five inductees she joined with, Gummy is the one most energetically trying to integrate into the culture of Rhodes Island. She skillfully converts ingredients into cooking materials and has used her vigorous Ursus manner to convert the kitchen into a battleground of sorts. Gummy's cooking doesn't quite satisfy the tastes of those accustomed to the food of other races and nations, and she has neither the experience nor the interest to be our main chef, but the fresh dynamism of Ursus cooking has become an irreplacable part of Rhodes Island's culinary culture.\nOne day's breakfast menu: Yakulevich red sausage (with garlic), Ursus-style boiled beans, soft oatmeal bread, and fermented yogurt.\nThe taste is said to be exquisite.` },
    { title: 'Archive File 2', content: `Gummy is lively, kind, and pure. She always speaks from the heart and has a genuine desire to please everyone.\nGummy trusts her leader, Zima, implicitly. She has actively tried to create a jubilant atmosphere for the Ursus Student Self-Governing Group and has tried to put to rest some of the unease the Ursus students have felt since the Chernobog incident. Gummy firmly believes that integrating into Rhodes Island is the proper course of action and is amiable towards all of Rhodes Island's Operators.\nPsychological counselors sent by the medical team have confirmed a hypothesis: Gummy is working and making connections as a way of managing her anxiety. Over several consultations, Gummy has not yet disclosed what the other members of the student union experienced during the Chernobog incident.` },
    { title: 'Archive File 3', content: `Gummy was born in the city of Chernobog in the Empire of Ursus. Her parents are currently employed elsewhere. Gummy participated in Chernobog's local Youth Scout group and achieved outstanding results in its events and competitions. There is reason to believe that Gummy's survival and rescue skills have their roots in this experience.\nWhen Gummy first joined Rhodes Island, she carried all kinds of equipment that she had found in ruins following the Chernobog incident.` },
  ],
  classIcon: '/icons/classes/defender-class.png', branchIcon: '/icons/branches/guardian-branch.png', factionIcon: '/icons/factions/ursus-student-self-governing-group.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/gummy/base.png', chibiSrc: '/operators/gummy/chibi.webm', chibiMoveSrc: '/operators/gummy/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'e2', label: 'Elite 2', src: '/operators/gummy/e2.png', chibiSrc: '/operators/gummy/chibi.webm', chibiMoveSrc: '/operators/gummy/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
    { id: 'skin1', label: 'Summer Flowers FA011', src: '/operators/gummy/skin1.png', chibiSrc: '/operators/gummy/chibi-skin1.webm', chibiMoveSrc: '/operators/gummy/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Skade' },
  ],
}

export default gummy
