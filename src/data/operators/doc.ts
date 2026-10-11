import type { Operator } from '../../types'

const doc: Operator = {
  name: 'Doc', fileNo: 'RS06', class: 'Guard', branch: 'Instructor', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Team Rainbow', position: 'Melee', race: 'Unknown', gender: 'Male', birthplace: 'Unknown',
  birthday: 'September 16th', height: '177 cm', combatExp: 'Unknown', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Ubisoft',
  cv: { JP: '', CN: '', EN: 'Alex Ivanovici', KR: '' },
  trait: 'Can attack enemies from range; When attacking enemies not blocked by self, increase ATK to 120%',
  tags: ['Healing', 'Support', 'Crossover'],
  stats: { hp: 2147, atk: 645, def: 353, res: 0, block: 2, cost: 16, aspd: '1.05s', rdp: '70s' },
  range: { base: [[2,1,1]], e1: [[2,1,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Excellent', 'Originium Arts': '■■' },
  talents: [
    { name: 'Field Medic', desc: 'Max HP +12%, attacks ignore 120 DEF', elite: 'E2' },
    { name: 'Symphaticus Simulation', desc: "When healing an allied unit, any healing in excess of that unit's Max HP will be converted into a decaying Barrier", elite: 'E2' },
  ],
  skills: [
    {
      name: 'Violent Response', icon: '/operators/doc/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately heals self for 400% ATK; afterwards, Attack Interval greatly reduces.\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment', spInit: 15, sp: 25, rank: 'M3',
      levels: [
        { level: '1', desc: `Immediately heals self by 100% of ATK; afterwards, Attack Interval slightly reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 5, sp: 35 },
        { level: '2', desc: `Immediately heals self by 130% of ATK; afterwards, Attack Interval slightly reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 5, sp: 34 },
        { level: '3', desc: `Immediately heals self by 170% of ATK; afterwards, Attack Interval slightly reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 7, sp: 33 },
        { level: '4', desc: `Immediately heals self by 200% of ATK; afterwards, Attack Interval reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 7, sp: 32 },
        { level: '5', desc: `Immediately heals self by 230% of ATK; afterwards, Attack Interval reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 9, sp: 32 },
        { level: '6', desc: `Immediately heals self by 270% of ATK; afterwards, Attack Interval reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 9, sp: 31 },
        { level: '7', desc: `Immediately heals self by 300% of ATK; afterwards, Attack Interval greatly reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 11, sp: 30 },
        { level: 'M1', desc: `Immediately heals self by 350% of ATK; afterwards, Attack Interval greatly reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 11, sp: 28 },
        { level: 'M2', desc: `Immediately heals self by 380% of ATK; afterwards, Attack Interval greatly reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 13, sp: 26 },
        { level: 'M3', desc: `Immediately heals self by 400% of ATK; afterwards, Attack Interval greatly reduces\nSkill activation grants 31 ammo and the skill ends when all ammo is used (Can manually deactivate skill); Can only be used 3 times per deployment`, spInit: 15, sp: 25 },
      ],
    },
    {
      name: 'Stim Pistol', icon: '/operators/doc/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 750% of ATK.\nCan only be used 3 times per deployment', spInit: 15, sp: 20, rank: 'M3', range: [[2,1,1,1,1]],
      levels: [
        { level: '1', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 300% of ATK\nCan only be used 3 times per deployment`, spInit: 0, sp: 30 },
        { level: '2', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 350% of ATK\nCan only be used 3 times per deployment`, spInit: 1, sp: 28 },
        { level: '3', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 400% of ATK\nCan only be used 3 times per deployment`, spInit: 3, sp: 27 },
        { level: '4', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 450% of ATK\nCan only be used 3 times per deployment`, spInit: 5, sp: 25 },
        { level: '5', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 500% of ATK\nCan only be used 3 times per deployment`, spInit: 7, sp: 23 },
        { level: '6', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 550% of ATK\nCan only be used 3 times per deployment`, spInit: 8, sp: 21 },
        { level: '7', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 600% of ATK\nCan only be used 3 times per deployment`, spInit: 9, sp: 20 },
        { level: 'M1', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 650% of ATK\nCan only be used 3 times per deployment`, spInit: 11, sp: 20 },
        { level: 'M2', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 700% of ATK\nCan only be used 3 times per deployment`, spInit: 13, sp: 20 },
        { level: 'M3', desc: `Immediately fires an Epinephrine Shot forward; healing the first allied Operator it hits by 750% of ATK\nCan only be used 3 times per deployment`, spInit: 15, sp: 20 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Doc's Badge", desc: 'Appointed as Guard Operator to exercise Instructor responsibilities' },
    insy: { code: 'INS-Y', name: '"The Third Power"', stages: [
      { stage: 1, hp: '+100', atk: '+25', def: '+15', effect: 'Trait improved: Can also be deployed on Ranged tiles' },
      { stage: 2, hp: '+150', atk: '+30', def: '+20', effect: 'Field Medic improved: Max HP +15%, attacks ignore 150 DEF' },
      { stage: 3, hp: '+180', atk: '+35', def: '+25', effect: 'Field Medic improved: Max HP +18%, attacks ignore 180 DEF' },
    ]},
  },
  story: `Operator Gustave "Doc" Kateb from Rainbow Six Siege now joins Arknights to provide aid with his signature MPD-0 Stim Pistol capable of delivering a medical injection rapidly on the field, ensuring the health of Rhodes Island Operators and allows them to seize the day!`,
  profile: `A member of Team Rainbow, Doc's friendly attitude and willingness to lend a helping hand has earned the trust of his teammates.\nThe MPD-0 Stim Pistol that he carries can inject medicine at a distance, providing aid to injured teammates.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nDoc shows no sign of Originium infection.\n[Blood Originium-Crystal Density] Undisclosed\nThe Medical Department has agreed not to disclose the relevant data.`,
    },
    {
      title: 'Archive File 1',
      content: `Operator Gustav "Doc" Kateb is a member of Team Rainbow. He was involved in the Krysztauowa Incident and became an associate of Rhodes Island following the conclusion of that incident.\nDoc is an expert medical practitioner, and always ready to provide necessary aid to a patient, whether in a spotlessly clean clinic, or in the heat of the front lines.\nDoc has also demonstrated impressive medical knowledge outside of clinical practice, which has quickly earned him the trust and respect of many at Rhodes Island.\nIt is worth mentioning that Team Rainbow members are only working with us temporarily. They are not formally employed by Rhodes Island, and with how much they have on their hands, it would not be advisable to call on their help too often.`,
    },
    {
      title: 'Archive File 2',
      content: `Those who have conversed with Doc inevitably leave impressed by his friendliness, kindness and patience, whether in casual conversation, work, treatment, or academic discussion.\nHe often volunteers at the Medical Department, saying it helps him learn more about our patients while reducing Medical's workload. Medical welcomed the addition of another trained doctor, though they soon realized that Doc was more than just trained.\nHe is well-versed in many fields of medicine, some of which the others have never even heard of, and he has the skilled fingers to match. After a period of acclimation, he has also learned to deal with the various symptoms of Oripathy in accordance with Rhodes Island procedures. Many are hoping that he will spend more time at Rhodes Island.`,
    },
    {
      title: 'Archive File 3',
      content: `Doc is really interested in Oripathy—of course, it would be unusual for a practitioner of medicine to not be—but you really ought to see the notes he made on the newest issue of that Oripathy journal.\nHe has a notebook filled with clippings about the Infected. He's normally such a good-tempered guy, but you could see him seethe with anger at the injustices faced by the Infected. It makes me feel ashamed.\nWhy am I ashamed?\nHis anger makes me realize that I've become numb to the persecution of the Infected. It's a much-needed reminder that injustice is injustice, even if the all the lands are used to it. I have the right... nay, the responsibility to be angry.\n—A Medical Department Operator`,
    },
    {
      title: 'Archive File 4',
      content: `For Rhodes Island, Doc is a collaborator, a helping hand, a respectable man. For Team Rainbow, things are even simpler. In his own words, "My job is to ensure your safety. I don't mind a challenge."\nDoc does not shield everyone like Blitz, cause spectacular explosions like Fuze, achieve his goals with the artistry of Ela, or deliver surprises like Frost, but nothing reassures the members of Team Rainbow like the voice of Doc through their communicator.\nHe says his job is to ensure the safety of his teammates. And he means it.`,
    },
    {
      title: 'Promotion Record',
      content: `[Classified Log]\nI had pulled three all-nighters in a row when Doc's request arrived, and I almost fitted a barrel meant for Originium-Keton ammunition onto the stim pistol.\nIt's still the Team Rainbow weapon that I had the easiest time modifying. It's propelled by high-pressure gas, and works on largely the same principles as standard gas-powered launchers. I modified it to use standard-issue gas canisters, which also necessitated a couple of tweaks to reduce the muzzle velocity, because it's meant to treat the wounded, not to substitute for Gavial's violence.\nOn another note, please stop submitting Doc's applications to Engineering at the same time as anything from the Doctor! It's so confusing. Doc almost went into battle carrying a freshly repaired water boiler rather than his stim pistol, if Closure hadn't realized that something was off.`,
    },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/instructor-branch.png', factionIcon: '/icons/factions/team-rainbow.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/doc/base.png', chibiSrc: '/operators/doc/chibi.webm', illustrator: 'Ubisoft' },
    { id: 'e2', label: 'Elite 2', src: '/operators/doc/e2.png', chibiSrc: '/operators/doc/chibi.webm', illustrator: 'Ubisoft' },
    { id: 'skin1', label: 'Exhibition', src: '/operators/doc/skin1.png', chibiSrc: '/operators/doc/chibi-skin1.webm', illustrator: 'Ubisoft' },
  ],
  portrait: '/operators/doc/portrait.png',
  portraitFocus: { y: -5, x: 40, zoom: 310 },
}

export default doc
