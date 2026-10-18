import type { Operator } from '../../types'

const shamare: Operator = {
  name: 'Shamare', fileNo: 'R148', class: 'Supporter', branch: 'Hexer', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Siracusa', position: 'Ranged', race: 'Vulpo', gender: 'Female',
  birthplace: 'Siracusa', birthday: 'October 29th', height: '138 cm', combatExp: 'None', infectionStatus: 'Confirmed Infected by medical examination.', illustrator: '下野宏铭',
  cv: { JP: 'Akane Fujita', CN: 'Fu Gui (credited as "Rachel" in EN)', EN: 'Kaitlyn Brooke', KR: 'Lee Seul' },
  trait: 'Deals Arts damage',
  tags: ['Debuff'],
  stats: { hp: 1728, atk: 473, def: 105, res: 25, block: 1, cost: 12, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1]],
    e1: [[0, 1, 1, 0], [1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1], [0, 1, 1, 0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Omen of Defeat', desc: 'Apply 10% Fragile effect to enemies within range with less than 40% HP', elite: 'E0' },
    { name: 'Omen of Defeat', desc: 'Apply 20% Fragile effect to enemies within range with less than 40% HP', elite: 'E1' },
    { name: 'Omen of Defeat', desc: 'Apply 30% Fragile effect to enemies within range with less than 40% HP', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Malediction', icon: '/operators/shamare/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: "ATK +60%, increases the damage amplification effect of this unit's Talent to 1.8 times\nUnlimited duration", spInit: 0, sp: 70, dur: '∞', rank: 'M3',
      levels: [
        { level: '1', desc: "ATK +20%, increases the damage amplification effect of this unit's Talent to 1.3 times\nUnlimited duration", spInit: 0, sp: 90, dur: '∞' },
        { level: '2', desc: "ATK +20%, increases the damage amplification effect of this unit's Talent to 1.3 times\nUnlimited duration", spInit: 0, sp: 88, dur: '∞' },
        { level: '3', desc: "ATK +20%, increases the damage amplification effect of this unit's Talent to 1.3 times\nUnlimited duration", spInit: 0, sp: 86, dur: '∞' },
        { level: '4', desc: "ATK +30%, increases the damage amplification effect of this unit's Talent to 1.4 times\nUnlimited duration", spInit: 0, sp: 84, dur: '∞' },
        { level: '5', desc: "ATK +30%, increases the damage amplification effect of this unit's Talent to 1.4 times\nUnlimited duration", spInit: 0, sp: 82, dur: '∞' },
        { level: '6', desc: "ATK +30%, increases the damage amplification effect of this unit's Talent to 1.4 times\nUnlimited duration", spInit: 0, sp: 80, dur: '∞' },
        { level: '7', desc: "ATK +40%, increases the damage amplification effect of this unit's Talent to 1.5 times\nUnlimited duration", spInit: 0, sp: 78, dur: '∞' },
        { level: 'M1', desc: "ATK +45%, increases the damage amplification effect of this unit's Talent to 1.6 times\nUnlimited duration", spInit: 0, sp: 76, dur: '∞' },
        { level: 'M2', desc: "ATK +50%, increases the damage amplification effect of this unit's Talent to 1.7 times\nUnlimited duration", spInit: 0, sp: 74, dur: '∞' },
        { level: 'M3', desc: "ATK +60%, increases the damage amplification effect of this unit's Talent to 1.8 times\nUnlimited duration", spInit: 0, sp: 70, dur: '∞' },
      ],
    },
    {
      name: 'Cursed Doll', icon: '/operators/shamare/skill-2.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -50%, lasts for a maximum of 15 seconds', spInit: 10, sp: 30, rank: 'M3',
      note: 'The Cursed Doll skill will not generate SP when Shamare has the Curse Doll available for deployment.',
      levels: [
        { level: '1', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -20%, lasts for a maximum of 15 seconds', spInit: 10, sp: 50 },
        { level: '2', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -20%, lasts for a maximum of 15 seconds', spInit: 10, sp: 48 },
        { level: '3', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -20%, lasts for a maximum of 15 seconds', spInit: 10, sp: 46 },
        { level: '4', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -25%, lasts for a maximum of 15 seconds', spInit: 10, sp: 44 },
        { level: '5', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -25%, lasts for a maximum of 15 seconds', spInit: 10, sp: 42 },
        { level: '6', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -25%, lasts for a maximum of 15 seconds', spInit: 10, sp: 40 },
        { level: '7', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -30%, lasts for a maximum of 15 seconds', spInit: 10, sp: 38 },
        { level: 'M1', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -40%, lasts for a maximum of 15 seconds', spInit: 10, sp: 36 },
        { level: 'M2', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -45%, lasts for a maximum of 15 seconds', spInit: 10, sp: 34 },
        { level: 'M3', desc: 'Obtains 1 Curse Doll (can store up to 1)\nReduces the ATK and DEF of enemies around the Curse Doll by -50%, lasts for a maximum of 15 seconds', spInit: 10, sp: 30 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Shamare's Badge", desc: `Operator Shamare has demonstrated a remarkable aptitude for coercing frailty within the enemy via manipulation of imprecatory methods.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Supporter Operator during field operations to exercise Hexer responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    umdx: { code: 'UMD-X', name: 'Fabric Apples', stages: [
      { stage: 1, atk: '+10', def: '+15', effect: 'New trait: Applies 10% Enfeeble to targets for 2 seconds' },
      { stage: 2, atk: '+20', def: '+25', effect: "New talent: Bad Tidings' Wake\nBecomes less likely to be targeted by enemies after being deployed for 15 seconds" },
      { stage: 3, atk: '+30', def: '+35', effect: "Bad Tidings' Wake improved:\nBecomes less likely to be targeted by enemies after being deployed for 10 seconds" },
    ]},
  },
  story: `The little Vulpo girl named Shamare was found by Rhodes Island operators during an investigation in her hometown in Siracusa, where her reputation as a cursed child caused her to be ostracized. This was later found to be caused by the amount of active Originium, causing her Arts to go out of control and affecting others. Shamare herself doesn't care much for the accusations, carrying around an odd doll called Morte with little regard for her doll and clothes, and often speaks using antiquated jargon. Strange phenomena often occur around her, and Shamare is able to curse others, usually her enemies or bad people.`,
  profile: `In the Siracusan region, an enigmatic girl had become a bit of a local legend. Further investigation determined that the root cause was an Infected girl who could not control her Originium Arts. She was subsequently taken in by Rhodes Island. She is allowed to take part in some minor tasks as an Operator while receiving treatment to help her learn to control herself.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 9%\nAt Shamare's young age, there are no obvious signs of crystal deposits.\n[Blood Originium-Crystal Density] 0.23u/L\nShamare has spent a long time in Originium-dense environments without adequate protection or treatment.\nBy extrapolating the degree of infection shown in above data to adult patients, the infection is currently under control. However, considering Shamare's young age, the fact that she was infected even earlier, the effects of prolonged exposure, and the tendency for her Originium Arts to get out of control, each department should closely monitor the situation.` },
    { title: 'Archive File 1', content: `"That island is a fearsome place, where the living and the dead are but one door apart."\n"They were all tortured by inexplicable pain. Gouges. Stab wounds. Burn marks. Nobody saw who did this, nor does anyone know why."\n"The island is cursed, its master and servants all despondent to the point of madness."\n"After one night, all that remained was the lunatic who cried and begged for anyone to ferry him back to the mainland. Anyone who refused would be subjected to a flurry of fists, and this went on for so long that in time, few dared approach the island."\nSimilar legends to the above were once sung about a town built around a lake in western Siracusa. This is not a legend in the sense of a superstition passed down, but rather a summary of chilling events that occurred one after another over a period of 3-4 years in a mansion built in the middle of the lake. After fully exploring this "cursed island," a few courageous investigators and explorers were only able to bring back a young girl who seemed to be a blood relative with the island's owner, along with some attendants who had been shocked into a near-comatose state.` },
    { title: 'Archive File 2', content: `The truth behind the curse is simpler than one would think. The island, which was auctioned off as a luxury estate, has a notable underground area. More accurately, this area isn't actually underground, but refers to a depth that can be easily reached through plowing or farming. Present here is a large amount of active Originium. Prolonged exposure to this Originium-dense environment unknowingly awakened Originium Arts within the young girl, and prolonged contact through potable water, food, wound sites, etc., further exacerbated her rampant and uncontrollable Arts. After learning about this situation, Miss Shamare was quickly transferred to the Rhodes Island landship for medical treatment and management. Although the locals were more than happy to send away this "plague god" as if they were saved, we know that Miss Shamare is but another victim of this incident.\nMiss Shamare is still a child, even younger than Amiya is. I hope all of you keep this in mind. Her rampant Originium Arts is vastly more noteworthy than her experiences as an Infected. Originium Arts that can manipulate the consciousness of others often comes with a greater burden upon the user. We would do well to keep thorough records while investigating.` },
    { title: 'Archive File 3', content: `Miss Shamare's personality clearly displays abnormalities. Compared to children of the same age, she is taciturn and indifferent. She often uses the doll she always keeps on her, which she calls "Morte," to express her thoughts. In addition, Shamare also demonstrates interests that are incomprehensible to others, frequently talking to herself using antiquated jargon. At first, Medics thought this was possibly a symptom of contracting Oripathy at such a young age. Later on, when visiting the attendants who were responsible for taking care of Shamare, we found that many of them did not blindly heed the myths and rumors, and even after becoming aware of the various possibilities, still chose to regard Shamare with malice and ill will. While most of them have expressed regret for these sentiments, the truth is that every time they would leave the island, they would quietly plead with the ferrymen to take them away. When they got into town, they were often viewed as accomplices to some horrific crime even though they were merely shopping, a testimony to the unfair treatment they would receive. Understandably, no amount of good intentions can offset the withering bombardment of negativity.\nOver time, the townspeople who didn't know the truth came to establish the dominant narrative, and even the attendants who had stayed with the young girl for many years started to view her in the same light. Overall, it can be said that the effect of the environment and her upbringing played a far greater role in the development of Shamare's character than Oripathy itself.` },
    { title: 'Archive File 4', content: `Shamare's daily activities are a source of concern for many; for example, how she has little regard for when a doll is supposed to be sewn up, or her attire which always appears scorched. She still attributes everything that happens around her to evil spirits, or the words and deeds of "Morte." Gradually, some of the younger Operators began to wonder if the supernatural phenomena that frequently occurred around Shamare actually had some credence... Although our current understanding of Originium is not enough to explain all the secrets of Terra, it is nevertheless highly undesirable to simply categorize the unknown as "curses." We hope that all Operators will try their best to remain sensible and approach Miss Shamare with a normal mindset, as this too provides valuable guidance to her education. We should all think rationally about the "supernatural events" happening around Shamare, and believe that there are naturalistic explanations for these phenomena...\nAddendum: So far, no one has fully elucidated Shamare or the mystery of her Originium Arts. Yet nevertheless... all we can do is believe that these are indeed due to Originium Arts. Looking back, yet more rumors circulate regarding that Siracusan lake... and there are discrepancies between what those stories describe and what we've managed to test Shamare for. The truth... may be further away than expected.` },
    { title: 'Promotion Record', content: `Although Shamare's past is full of misfortune, the more we learn about her Originium Arts – and I once again must apologize for this – the more our curiosity overwhelms our sympathy for her. At first, we thought that her references to "divinations" and "curses" were coping mechanisms to deal with her environment over time or perhaps due to the fact that her Arts subconsciously harmed others in the area, resulting in her attributing everything to the work of evil spirits in order to understand what was happening around her.\nBut based upon Shamare's performance in some missions, as well as bits of data gathered from Originium Arts tests, we were all surprised to find that Shamare's Originium Arts do far more than strongly influence the consciousness of others. Notably, she borrows the spells of "Morte" to inflict observable physical damage to enemies. Are mental suggestions strong enough to cause deviations in a target's brain function, enough so to cause rupture and hemorrhaging? Although this hypothesis is quite tantalizing, it is fundamentally a fantasy from the perspective of modern Originium Arts technological research. Even more strikingly, her predictions and divinations are sometimes surprisingly accurate. For example, the last time we secretly replaced the Originium fiber filling inside Morte with ordinary cotton, she very unhappily divined the misfortunes that would befall a number of us. Some of these predictions included taking a fall from a chair breaking, getting hit by an unknown passing-by Sankta, and getting lacerated by broken test tube fragments – all of which came true! There's a bruise on my head, you say? Hm? And this is because we're supposedly already affected by her spiritual suggestions...?\nThat... can't be right, can it? Ahem... We've got to have a bit more trust in our patients, don't we! Even if Shamare can't fully control her powers at times, there's no way she'd be able to influence the entire research team without our notice, right? At least the recorder should be able to remain objective about this!\nMore importantly, whose dumb idea was it to give her a doll with that weird Originium stuffing anyway? Don't you know it's dangerous to give Originium-based products to Shamare? ...I approved it? Seriously... I did?` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/hexer-branch.png', factionIcon: '/icons/factions/siracusa.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/shamare/base.png', chibiSrc: '/operators/shamare/chibi.webm', chibiMoveSrc: '/operators/shamare/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    // fexli/ArknightsResource has no separate dorm Spine build for Elite 2 — only base/skin1/skin2
    // builds exist in char_254_vodfox — so Elite 2 reuses the base chibi as a placeholder.
    { id: 'e2', label: 'Elite 2', src: '/operators/shamare/e2.png', chibiSrc: '/operators/shamare/chibi.webm', chibiMoveSrc: '/operators/shamare/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'skin1', label: 'Echo of the Horrorlair', src: '/operators/shamare/skin1.png', chibiSrc: '/operators/shamare/chibi-skin1.webm', chibiMoveSrc: '/operators/shamare/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
    { id: 'skin2', label: 'Celestial Crane', src: '/operators/shamare/skin2.png', chibiSrc: '/operators/shamare/chibi-skin2.webm', chibiMoveSrc: '/operators/shamare/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '下野宏铭' },
  ],
  portrait: '/operators/shamare/portrait.png',
  portraitFocus: { y: -0.9, x: 49.5, zoom: 252 },
  summon: {
    name: 'Cursed Doll',
    icon: '/operators/shamare/cursed-doll.png',
    position: 'Low/High',
    trait: 'Reduces the ATK and DEF of enemies within range by -50%',
    stats: { hp: 1000, atk: 100, def: 0, res: 0, block: 0, cost: 5, aspd: '0s', rdp: '5s' },
    range: [[1, 1, 1], [1, 2, 1], [1, 1, 1]],
    note: "Cannot be attacked. Deployed through Shamare's Cursed Doll skill and lasts for a maximum of 15 seconds. Redeployment time is only relevant if Shamare can charge her skill fast enough to deploy a second doll in quick succession.",
  },
}

export default shamare
