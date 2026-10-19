import type { Operator } from '../../types'
import cliffheartVoice from '../voices/cliffheart'

const cliffheart: Operator = {
  name: 'Cliffheart', fileNo: 'JC06', class: 'Specialist', branch: 'Hookmaster', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment', 'Beginner Mission (7-days consecutive login)'],
  faction: 'Kjerag', position: 'Melee', race: 'Feline', gender: 'Female', birthplace: 'Kjerag',
  birthday: 'November 28th', height: '163 cm', combatExp: 'Half a year', infectionStatus: 'Infection confirmed by medical examination.', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Ryoko Shiraishi', CN: 'Fu Gui (credited as "Rachel" in EN)', EN: 'Rebecca Yeo', KR: 'Kim Bo-young' },
  voice: cliffheartVoice,
  trait: 'Can Shift enemies by using skills\nCan be deployed on Ranged Tiles',
  tags: ['Shift', 'DPS'],
  stats: { hp: 1970, atk: 835, def: 340, res: 0, block: 2, cost: 13, aspd: '1.8s', rdp: '70s' },
  range: {
    base: [[2,1,1]],
    e1: [[2,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Standard' },
  talents: [
    { name: 'Karlan Hunter', desc: 'ATK and DEF +6% when Cliffheart is not blocking any enemies', elite: 'E1' },
    { name: 'Karlan Hunter', desc: 'ATK and DEF +8% (+2%) when Cliffheart is not blocking any enemies', elite: 'E1 (Potential 5)' },
    { name: 'Karlan Hunter', desc: 'ATK and DEF +12% when Cliffheart is not blocking any enemies', elite: 'E2' },
    { name: 'Karlan Hunter', desc: 'ATK and DEF +14% (+2%) when Cliffheart is not blocking any enemies', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Chain Hook', icon: '/operators/cliffheart/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'Drags the target to Cliffheart greatly in the next attack, dealing 180% of ATK Arts damage to it', spInit: 0, sp: 4, rank: 'M3',
      note: "Chain Hook's pull has a force of 0/0/0/1/1/1/1/1/1/2.",
      levels: [
        { level: '1', desc: 'Drags the target to Cliffheart slightly in the next attack, dealing 115% of ATK Arts damage to it', spInit: 0, sp: 7 },
        { level: '2', desc: 'Drags the target to Cliffheart slightly in the next attack, dealing 118% of ATK Arts damage to it', spInit: 0, sp: 7 },
        { level: '3', desc: 'Drags the target to Cliffheart slightly in the next attack, dealing 120% of ATK Arts damage to it', spInit: 0, sp: 7 },
        { level: '4', desc: 'Drags the target to Cliffheart moderately in the next attack, dealing 125% of ATK Arts damage to it', spInit: 0, sp: 6 },
        { level: '5', desc: 'Drags the target to Cliffheart moderately in the next attack, dealing 128% of ATK Arts damage to it', spInit: 0, sp: 6 },
        { level: '6', desc: 'Drags the target to Cliffheart moderately in the next attack, dealing 130% of ATK Arts damage to it', spInit: 0, sp: 6 },
        { level: '7', desc: 'Drags the target to Cliffheart moderately in the next attack, dealing 135% of ATK Arts damage to it', spInit: 0, sp: 5 },
        { level: 'M1', desc: 'Drags the target to Cliffheart moderately in the next attack, dealing 150% of ATK Arts damage to it', spInit: 0, sp: 5 },
        { level: 'M2', desc: 'Drags the target to Cliffheart moderately in the next attack, dealing 165% of ATK Arts damage to it', spInit: 0, sp: 5 },
        { level: 'M3', desc: 'Drags the target to Cliffheart greatly in the next attack, dealing 180% of ATK Arts damage to it', spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Binding Chains', icon: '/operators/cliffheart/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately drags up to 3 targets in a large frontal area towards this unit greatly, dealing 200% True damage and Stunning them for 3 seconds', spInit: 10, sp: 15, rank: 'M3',
      range: [[0,1,1,1],[2,1,1,1],[0,1,1,1]],
      note: "Binding Chains' pull has a force of 0/0/0/1/1/1/1/1/1/2. The Stun is inflicted after the target(s) stop being pulled.",
      levels: [
        { level: '1', desc: 'Immediately drags up to 2 targets in a large frontal area towards this unit slightly, dealing 130% True damage and Stunning them for 1.5 seconds', spInit: 10, sp: 25 },
        { level: '2', desc: 'Immediately drags up to 2 targets in a large frontal area towards this unit slightly, dealing 135% True damage and Stunning them for 1.5 seconds', spInit: 10, sp: 24 },
        { level: '3', desc: 'Immediately drags up to 2 targets in a large frontal area towards this unit slightly, dealing 140% True damage and Stunning them for 1.5 seconds', spInit: 10, sp: 23 },
        { level: '4', desc: 'Immediately drags up to 2 targets in a large frontal area towards this unit moderately, dealing 150% True damage and Stunning them for 1.5 seconds', spInit: 10, sp: 22 },
        { level: '5', desc: 'Immediately drags up to 2 targets in a large frontal area towards this unit moderately, dealing 155% True damage and Stunning them for 1.5 seconds', spInit: 10, sp: 21 },
        { level: '6', desc: 'Immediately drags up to 2 targets in a large frontal area towards this unit moderately, dealing 160% True damage and Stunning them for 1.5 seconds', spInit: 10, sp: 20 },
        { level: '7', desc: 'Immediately drags up to 2 targets in a large frontal area towards this unit moderately, dealing 170% True damage and Stunning them for 1.5 seconds', spInit: 10, sp: 19 },
        { level: 'M1', desc: 'Immediately drags up to 3 targets in a large frontal area towards this unit moderately, dealing 180% True damage and Stunning them for 2 seconds', spInit: 10, sp: 18 },
        { level: 'M2', desc: 'Immediately drags up to 3 targets in a large frontal area towards this unit moderately, dealing 190% True damage and Stunning them for 2.5 seconds', spInit: 10, sp: 17 },
        { level: 'M3', desc: 'Immediately drags up to 3 targets in a large frontal area towards this unit greatly, dealing 200% True damage and Stunning them for 3 seconds', spInit: 10, sp: 15 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Cliffheart's Badge", desc: 'Appointed as Specialist Operator to exercise Hookmaster responsibilities' },
    hokx: { code: 'HOK-X', name: '"Reach the Top"', stages: [
      { stage: 1, atk: '+25', def: '+22', effect: 'New trait: While being pulled, enemies take Arts damage proportional to the distance traveled' },
      { stage: 2, atk: '+33', def: '+27', effect: 'Karlan Hunter improved: Gains +16% ATK and DEF when not blocking any enemies' },
      { stage: 3, atk: '+40', def: '+31', effect: 'Karlan Hunter improved: Gains +20% ATK and DEF when not blocking any enemies' },
    ]},
  },
  profile: `Cliffheart is a Rhodes Island Operator who was born in Kjerag. She is a specialist in rock and mountain climbing and is proficient with all kinds of climbing tools. Currently, she is undergoing treatment for Oripathy at Rhodes Island.`,
  story: `Ensia Silverash is the younger sister of Enciodes, the head of Karlan Trade, and Enya, the Karlan Saintess. An ardent hiker, Ensia had spent most of her lifetime trekking Kjerag's mountains until she contracted Oripathy while trying to climb the holy mountain. Despite this, Ensia remains optimistic and passionate, taking clever steps to hide her Oripathy. Now being treated at Rhodes Island, Ensia works as an Operator alongside her bodyguards, Weiss and Matterhorn, under the codename "Cliffheart."\nEver since Enya was anointed saint, Enciodes no longer interacted with Ensia in the open, while Enya could not descend from the mountain. Driven by her helplessness, Ensia continues to communicate with her sister through letters exchanged in secret, and hopes that one day she can climb the sacred Mount Karlan to meet Enya and mend the strained relationship between her siblings. This wish comes to fruition during the Snowcap Incident, though her siblings' relationship still needs more time to return to how it once was.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests have shown the outlines of her internal organs to be indistinct due to abnormal shadows. Originium granules have been detected in her circulatory system, confirming her to be infected with Oripathy.\n[Cell-Originium Assimilation] 7%\nDue to puncturing by an Originium stone, Operator exhibits visible Originium crystals at the puncture site.\n[Blood Originium-Crystal Density] 0.28u/L\nCourse of infection is transitioning to the middle-term but has not yet had a significant impact upon the infected.` },
    { title: 'Archive File 1', content: `Cliffheart is a natural explorer and climber. Her reflexes and endurance far exceed what normal people could think possible. With even the simplest of items, Cliffheart is capable of traversing obstacles that would stop most people in their tracks. Cliffheart is more comfortable using her climbing instruments than a traditional melee weapon. Even on the battlefield, she uses these tools as weapons. Don't question the power of her snow spade or ice pick——in the hands of the right person, even instruments such as these can be lethal.` },
    { title: 'Archive File 2', content: `While attempting to climb the holy mountain, Cliffheart was pierced by an Originium stone during an unexpected landslide and thus became Infected. Fortunately, most of the people of Kjerag hold no prejudice against the Infected, and Cliffheart still managed to lead a normal life. Still, in order to make the Originium crystals on her body not appear so conspicuous, she takes clever steps to hide it. Thus, even outside Kjerag, she is free to move as she pleases.` },
    { title: 'Archive File 3', content: `As a member of the Silverash Family, she garners a lot of attention despite not appearing as elite as her older brother and sister. Unlike her siblings, she is not bound by any official position and thus is free to speak. Therefore, she often mingles with the common people, listening to their stories, learning about their lives, and studying their skills. She then uses these things she's learned to contribute to her clan.` },
    { title: 'Archive File 4', content: `Whatever peace the Silverash Family had came to an end when Pramanix was anointed saint. SilverAsh could no longer interacted[sic] with Cliffheart in the open, and Pramanix couldn't communicate with either of them because of her newfound official position. This made Cliffheart furious, but she understood that there was no way for the three of them to be as they once were. There was nothing she could do to fix the situation, and this feeling of helplessness made her disheartened for the first time in her life. Still, if there were anything she could do to reunite with her brother and sister, she gladly do what it takes.` },
    { title: 'Promotion Record', content: `Cliffheart seems to always instill feelings of cheer and optimism in those she meets, though her soul burns with the desire to inflict mischief. If you bite into a piece of cake only to find it full of beans, or your employee card has gone missing, there's a high probability that Cliffheart is responsible. If not, then she'll likely find out who is. Making mischief and exposing other mischief makers are two of her favorite pastimes.` },
  ],
  classIcon: '/icons/classes/specialist-class.png', branchIcon: '/icons/branches/hookmaster-branch.png', factionIcon: '/icons/factions/kjerag.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/cliffheart/base.png', chibiSrc: '/operators/cliffheart/chibi.webm', chibiMoveSrc: '/operators/cliffheart/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'e2', label: 'Elite 2', src: '/operators/cliffheart/e2.png', chibiSrc: '/operators/cliffheart/chibi.webm', chibiMoveSrc: '/operators/cliffheart/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'skin1', label: 'Lone Climber', src: '/operators/cliffheart/skin1.png', chibiSrc: '/operators/cliffheart/chibi-skin1.webm', chibiMoveSrc: '/operators/cliffheart/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'skin2', label: 'Highlands Visitor', src: '/operators/cliffheart/skin2.png', chibiSrc: '/operators/cliffheart/chibi-skin2.webm', chibiMoveSrc: '/operators/cliffheart/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
  ],
  portrait: '/operators/cliffheart/portrait.png',
  portraitFocus: { y: -4.8, x: 34.5, zoom: 314 },
}

export default cliffheart
