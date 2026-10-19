import type { Operator } from '../../types'
import warfarinVoice from '../voices/warfarin'

const warfarin: Operator = {
  name: 'Warfarin', fileNo: 'R106', class: 'Medic', branch: 'Medic', rarity: 5, level: 70, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Sarkaz', gender: 'Female', birthplace: 'Kazdel',
  birthday: 'June 27th', height: '157 cm', combatExp: '10 years', infectionStatus: "Non-infected as confirmed by medical report.", illustrator: '时辰',
  cv: { JP: 'Manaka Iwami', CN: 'Gelin Tian', EN: 'Lindsay Morton', KR: 'Shin Song-yi' },
  voice: warfarinVoice,
  trait: 'Restores the HP of allies',
  tags: ['Healing', 'Support'],
  stats: { hp: 1520, atk: 580, def: 125, res: 0, block: 1, cost: 19, aspd: '2.85s', rdp: '70s' },
  range: { base: [[1, 1, 1, 0], [2, 1, 1, 1], [1, 1, 1, 0]], e1: [[1, 1, 1, 1], [2, 1, 1, 1], [1, 1, 1, 1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Standard', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Blood Sample Recycle', desc: 'Restores 1 Skill Point to this Operator and a random ally within range when an enemy within range is killed', elite: 'E1' },
    { name: 'Blood Sample Recycle', desc: 'Restores 2 Skill Points to this Operator and a random ally within range when an enemy within range is killed', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Emergency Triage', icon: '/operators/warfarin/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: "The next heal restores an additional 25% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 4 charge(s)", spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: `The next heal restores an additional 11% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 2 charge(s)`, spInit: 0, sp: 4 },
        { level: '2', desc: `The next heal restores an additional 12% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 2 charge(s)`, spInit: 0, sp: 4 },
        { level: '3', desc: `The next heal restores an additional 13% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 2 charge(s)`, spInit: 0, sp: 4 },
        { level: '4', desc: `The next heal restores an additional 15% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 2 charge(s)`, spInit: 0, sp: 4 },
        { level: '5', desc: `The next heal restores an additional 16% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 2 charge(s)`, spInit: 0, sp: 4 },
        { level: '6', desc: `The next heal restores an additional 17% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 2 charge(s)`, spInit: 0, sp: 4 },
        { level: '7', desc: `The next heal restores an additional 19% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 3 charge(s)`, spInit: 0, sp: 4 },
        { level: 'M1', desc: `The next heal restores an additional 21% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 3 charge(s)`, spInit: 0, sp: 4 },
        { level: 'M2', desc: `The next heal restores an additional 23% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 3 charge(s)`, spInit: 0, sp: 4 },
        { level: 'M3', desc: `The next heal restores an additional 25% of its target's Max HP\nOnly available when the target's HP is lower than 50%; Can store 4 charge(s)`, spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Unstable Plasma', icon: '/operators/warfarin/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Warfarin and a random ally within range obtain the following status:\nATK +90%; Loses 3% of Max HP per second, lasting for 15 seconds', spInit: 50, sp: 60, dur: '15s', rank: 'M3',
      levels: [
        { level: '1', desc: `Warfarin and a random ally within range obtain the following status:\nATK +30%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 35, sp: 60 },
        { level: '2', desc: `Warfarin and a random ally within range obtain the following status:\nATK +35%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 35, sp: 60 },
        { level: '3', desc: `Warfarin and a random ally within range obtain the following status:\nATK +40%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 35, sp: 60 },
        { level: '4', desc: `Warfarin and a random ally within range obtain the following status:\nATK +45%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 40, sp: 60 },
        { level: '5', desc: `Warfarin and a random ally within range obtain the following status:\nATK +50%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 40, sp: 60 },
        { level: '6', desc: `Warfarin and a random ally within range obtain the following status:\nATK +55%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 40, sp: 60 },
        { level: '7', desc: `Warfarin and a random ally within range obtain the following status:\nATK +60%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 45, sp: 60 },
        { level: 'M1', desc: `Warfarin and a random ally within range obtain the following status:\nATK +70%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 45, sp: 60 },
        { level: 'M2', desc: `Warfarin and a random ally within range obtain the following status:\nATK +80%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 45, sp: 60 },
        { level: 'M3', desc: `Warfarin and a random ally within range obtain the following status:\nATK +90%; Loses 3% of Max HP per second, lasting for 15 seconds`, spInit: 50, sp: 60 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Warfarin's Badge", desc: 'Appointed as Medic Operator to exercise Medic responsibilities' },
    phyx: { code: 'PHY-X', name: 'Emergency Reserves', stages: [
      { stage: 1, hp: '+40', atk: '+30', effect: 'New trait: When healing allied units with less than 50% HP, increases heal amount by 15%' },
      { stage: 2, hp: '+65', atk: '+40', effect: 'Restores 2 SP to this Operator and a random ally within range when an enemy within range is killed. Restore 1 more SP if the enemy was an elite or boss' },
      { stage: 3, hp: '+80', atk: '+47', effect: 'Restores 2 SP to this Operator and a random ally within range when an enemy within range is killed. Restore 2 more SP if the enemy was an elite or boss' },
    ]},
  },
  story: `Warfarin, Medic Operator of Rhodes Island, sees the safety of her fellow Operators as her duty.`,
  profile: `A senior figure in the Rhodes Island leadership, Warfarin's background remains unclear.\nShe is the founder and administrator of the Rhodes Island Blood Bank, and very accomplished in the medical field. She laid the foundation of the island's medical system with Dr. Kal'tsit.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests on this Operator show clear outlines of internal organs, with no abnormal dark spots or shadows. No unusual traces of Originium particles present in the circulatory system, no signs of infection, confirming this operator as uninfected.\n\n[Cell-Originium Assimilation] 0%\nSubject shows no symptoms of Oripathy.\n\n[Blood Originium-Crystal Density] 0.12u/L\nSubject in normal condition, no further examination necessary.` },
    { title: 'Archive File 1', content: `It's hard to imagine that this delicate Vampire lady, whose petite figure hardly commands respect, actually has the longest history with Rhodes Island.\nShe doesn't mind being treated beneath her age and status, but Warfarin absolutely won't tolerate anyone straying from her prescribed course of treatment.\nHer age is no secret, but the number she gives has never failed to elicit a gasp.` },
    { title: 'Archive File 2', content: `Vampires are feared even among the often demonized Sarkaz race.\nThey stalk the night, feed on the blood of men, women, and children. They kill, and do who knows what other unspeakably evil things... Such is the legend to which Miss Warfarin is known to matter-of-factly reply, "That's most of my kin, yes."\nOf course, everyone at Rhodes Island knows Warfarin isn't anything like that.\nWe know she does indeed love the taste of blood, but this is proof of her remarkable self-control, since she has never taken advantage of any of her patients.\nAs she says, she can tell the difference between a patient and dinner.` },
    { title: 'Archive File 3', content: `The Doctor's importance to Rhodes Island is well understood, but it has a special meaning to Warfarin.\nFor reasons even Warfarin herself can't explain, she is nigh-fatally attracted to the Doctor's blood. Operators have reported her frequent attempts at, shall we say, rather unladylike behavior towards the Doctor, forcing a restraining order from Dr. Kal'tsit.\nSolving this puzzle will perhaps lift some of the cloud of mystery that surrounds the Doctor. But unfortunately, it continues to confound investigation.` },
    { title: 'Archive File 4', content: `Although everyone knows Warfarin is a senior executive with incredible medical expertise, very few Operators honestly respect her. The problem goes beyond her physical appearance.\nIt may have to do with her vampiric heritage, or the fact she is very reclusive. But also, Warfarin has always been light on morals. She does whatever ideas pop into her head without concern for the ethics or even rationality of the idea. Several Operators reportedly experienced sudden, unexplained blackouts in the early days, only to wake up on a surgical table with sinister laughter ringing in their ears.\nWarfarin felt she had done nothing wrong, and even Dr. Kal'tsit couldn't convince her, leading to several of Warfarin's more outlandish behaviors being banned by the company.\nShe has since cleaned up her act, but still occasionally "scars" an Operator, making it hard for them to trust or respect her.\nIn the end, she still doesn't think she's done anything wrong.` },
    { title: 'Promotion Record', content: `Several authoritative medical books in recent decades were penned by an author under the pseudonym "Blood."\nThe author is a legendary figure in the medical field, known for thorough application of material with unrivaled expertise. Blood's every publication took the medical world by storm.\nAlas, no one knows whether Blood is a man or woman, an individual or a group, discussed only as "Mr. Blood."\nOf course, one only has to look at the comprehensive collection of Blood's work in Warfarin's room to correctly guess that she is the one and only "Mr. Blood."\nShe originally used that name to hide her vampiric identity, but now she thinks it's funny to see her pseudonym on published medical books.` },
  ],
  classIcon: '/icons/classes/medic-class.png', branchIcon: '/icons/branches/medic-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/warfarin/base.png', chibiSrc: '/operators/warfarin/chibi.webm', illustrator: '时辰' },
    { id: 'e2', label: 'Elite 2', src: '/operators/warfarin/e2.png', chibiSrc: '/operators/warfarin/chibi.webm', illustrator: '时辰' },
    { id: 'skin1', label: 'the feast', src: '/operators/warfarin/skin1.png', chibiSrc: '/operators/warfarin/chibi-skin1.webm', illustrator: '时辰' },
    { id: 'skin2', label: 'Holiday HD31', src: '/operators/warfarin/skin2.png', chibiSrc: '/operators/warfarin/chibi-skin2.webm', illustrator: '时辰' },
  ],
  portrait: '/operators/warfarin/portrait.png',
  portraitFocus: { y: -6.2, x: 68.1, zoom: 311 },
}

export default warfarin
