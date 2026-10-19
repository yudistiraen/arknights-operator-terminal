import type { Operator } from '../../types'
import bluePoisonVoice from '../voices/blue-poison'

const bluePoison: Operator = {
  name: 'Blue Poison', fileNo: 'AA03', class: 'Sniper', branch: 'Marksman', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Iberia', position: 'Ranged', race: 'Anura', gender: 'Female', birthplace: 'Unknown',
  birthday: 'January 18th', height: '157 cm', combatExp: 'None', infectionStatus: 'Uninfected as confirmed by medical examination. Also in remarkable physical condition and health.', illustrator: 'LLC',
  cv: { JP: 'Atsumi Tanezaki', CN: 'Chen Yanyi (credited as "Yee Chen" in EN)', EN: 'Alex Tregear', KR: 'Woo Jeong-sin' },
  voice: bluePoisonVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1230, atk: 610, def: 130, res: 5, block: 1, cost: 13, aspd: '1s', rdp: '70s' },
  range: {
    base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]],
    e1: [[1,1,1,1],[2,1,1,1],[1,1,1,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Neurotoxin', desc: 'Poisons the targets when attacking, dealing 30 Arts Damage to them per second, lasting 3 seconds', elite: 'E1' },
    { name: 'Neurotoxin', desc: 'Poisons the targets when attacking, dealing 40 (+10) Arts Damage to them per second, lasting 3 seconds', elite: 'E1 (Potential 5)' },
    { name: 'Neurotoxin', desc: 'Poisons the targets when attacking, dealing 75 Arts Damage to them per second, lasting 3 seconds', elite: 'E2' },
    { name: 'Neurotoxin', desc: 'Poisons the targets when attacking, dealing 85 (+10) Arts Damage to them per second, lasting 3 seconds', elite: 'E2 (Potential 5)' },
  ],
  skills: [
    {
      name: 'Twinshot - Auto', icon: '/operators/blue-poison/skill-1.png', activation: 'Auto', recovery: 'Offensive Recovery',
      desc: 'The next attack hits 1 additional target for 200% of ATK Physical damage', spInit: 0, sp: 2, rank: 'M3',
      note: "The increased ATK applies to the first tick of Neurotoxin.",
      levels: [
        { level: '1', desc: 'The next attack hits 1 additional target for 125% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: '2', desc: 'The next attack hits 1 additional target for 130% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: '3', desc: 'The next attack hits 1 additional target for 135% of ATK Physical damage', spInit: 0, sp: 4 },
        { level: '4', desc: 'The next attack hits 1 additional target for 140% of ATK Physical damage', spInit: 0, sp: 3 },
        { level: '5', desc: 'The next attack hits 1 additional target for 145% of ATK Physical damage', spInit: 0, sp: 3 },
        { level: '6', desc: 'The next attack hits 1 additional target for 150% of ATK Physical damage', spInit: 0, sp: 3 },
        { level: '7', desc: 'The next attack hits 1 additional target for 155% of ATK Physical damage', spInit: 0, sp: 3 },
        { level: 'M1', desc: 'The next attack hits 1 additional target for 170% of ATK Physical damage', spInit: 0, sp: 3 },
        { level: 'M2', desc: 'The next attack hits 1 additional target for 185% of ATK Physical damage', spInit: 0, sp: 3 },
        { level: 'M3', desc: 'The next attack hits 1 additional target for 200% of ATK Physical damage', spInit: 0, sp: 2 },
      ],
    },
    {
      name: 'Venom Spray', icon: '/operators/blue-poison/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +50%, each attack strikes its primary target an additional 1 time, and also hits up to 2 additional targets.', spInit: 25, sp: 40, dur: '30s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +10%, each attack hits 2 additional targets.', spInit: 10, sp: 50, dur: '20s' },
        { level: '2', desc: 'ATK +10%, each attack hits 2 additional targets.', spInit: 10, sp: 50, dur: '21s' },
        { level: '3', desc: 'ATK +10%, each attack hits 2 additional targets.', spInit: 10, sp: 50, dur: '22s' },
        { level: '4', desc: 'ATK +20%, each attack hits 2 additional targets.', spInit: 15, sp: 50, dur: '23s' },
        { level: '5', desc: 'ATK +20%, each attack hits 2 additional targets.', spInit: 15, sp: 50, dur: '24s' },
        { level: '6', desc: 'ATK +20%, each attack hits 2 additional targets.', spInit: 15, sp: 50, dur: '25s' },
        { level: '7', desc: 'ATK +30%, each attack hits 2 additional targets.', spInit: 20, sp: 50, dur: '26s' },
        { level: 'M1', desc: 'ATK +30%, each attack strikes its primary target an additional 1 time, and also hits up to 2 additional targets.', spInit: 21, sp: 47, dur: '27s' },
        { level: 'M2', desc: 'ATK +40%, each attack strikes its primary target an additional 1 time, and also hits up to 2 additional targets.', spInit: 22, sp: 44, dur: '28s' },
        { level: 'M3', desc: 'ATK +50%, each attack strikes its primary target an additional 1 time, and also hits up to 2 additional targets.', spInit: 25, sp: 40, dur: '30s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Blue Poison's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    mary: { code: 'MAR-Y', name: 'Standard Color Chart', stages: [
      { stage: 1, atk: '+20', aspd: '+2', effect: 'New trait: When there are ground enemies within range, ASPD +8' },
      { stage: 2, atk: '+26', aspd: '+3', effect: 'Neurotoxin improved: Poisons the targets when attacking, dealing 85 Arts Damage to them per second, lasting 3 seconds' },
      { stage: 3, atk: '+30', aspd: '+4', effect: 'Neurotoxin improved: Poisons the targets when attacking, dealing 95 Arts Damage to them per second, lasting 3 seconds' },
    ]},
  },
  profile: `Blue Poison's real identity remains unknown and her background a mystery. She is highly skilled at neutralizing targets using toxins.\nNow as a sniper with Rhodes Island, she regularly contributes her expertise in toxicology research.`,
  story: `Blue Poison, the only known representative of the Anurans in Rhodes Island, hails from a family whose ancestors were taken away from their homeland of Kerthun Valley in Sargon as slaves by the Iberians centuries ago in an attempt to weaponize their natural poison against the Seaborn. Blue Poison herself was born in Iberia long after the Profound Silence that freed the Anurans from the Iberians' slavery. The circumstances of her service to Rhodes Island remain a mystery, only that she has been active as their resident toxicologist who sometimes provides fire support on the battlefield using her bow pistol, equipped with bolts laced with potent neurotoxin.\nDue to her natural toxicity, Blue Poison is known for her shyness despite having a lovely attitude. Furthermore, while she likes to bake handmade cakes and offer them to others, she only has a few friends, including Glaucus and Indigo, who can tolerate her toxicity. Fortunately, several Rhodes Island personnel have started trying to befriend her, too (after taking necessary precautions, of course.)`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging test for this operator showed clear outline of internal organs without unusual dark spots. No abnormal traces of Originium particles present in her system. No signs of infection, confirming her as uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Blue Poison shows no symptoms of Oripathy.\n[Blood Originium-Crystal Density] 0.1u/L\nOperator Blue Poison rarely comes into contact with Originium.` },
    { title: 'Archive File 1', content: `Although her personality is quite lovely, Blue Poison's abilities are in fact as terrifying as the rumors say, which has undoubtedly become a hindrance for her when communicating with other operators. But when she finishes her combat work and quietly undertakes the medical task of curing poison, the sincere, peaceful girl behind her deadly abilities shows through.\nThe small crossbow she uses has proven to be a powerful long-range weapon, and the tips coated with her toxic serum make a hit even more lethal. However, Blue Poison never lets an enemy die in agony. She's not a monster.` },
    { title: 'Archive File 2', content: `According to Blue Poison's personal account, she realized the truth behind "poison" when she was little, i.e., any creature, living or not, has weaknesses that can be magnified and exploited to a fatal end.\nThe toxin produced by her venomous abilities is monitored and sampled daily by Dr. Kal'tsit personally. Blue Poison feels better about Rhodes Island's diversity, and the group's open-mindedness to her abilities such that she can use them to her full potential.\nShe is more defensive on the issue of describing herself as "toxic." The question was if would she accept her poisonous nature if the other operators accepted her and no longer kept their distance? Blue Poison didn't give a straight answer, politely deflecting the question as usual.\nDoes she still hate her powers? Or has she accepted them while still feeling about her relationship with other people? It's something only the Doctor can figure out with Blue Poison.` },
    { title: 'Archive File 3', content: `What is certain is that Blue Poison's toxic reputation has grown due to her unique combat techniques, which will no doubt impact her daily life.\nAs for her so-called "poison" power, the Medic Operators have never revealed any of their test results publicly. But it has been determined that normal physical contact with her will not contract the poison. In fact, her "poison power" manifests mostly in her skill with and knowledge of poison.\nIn her spare time, Blue Poison is interested in much more mundane variety things, such as baking. Operator Gummy, currently assigned to kitchen duty in Logistics, has claimed that Blue Poison's desserts are so good, they could "convert someone who hates sweets!" Another unnamed Operator who has also tasted her treats echoed the sentiment that Blue Poison is proficient enough to start a bakery––if she made better choices in visual presentation.\nAside from dessert making, Blue Poison has a keen sense of and passion for fashion, having already made several suggestions about her costume to Logistics and Trade.` },
    { title: 'Archive File 4', content: `According to a report leaked from certain secret sources, Blue Poison has been spotted in several battles against gigantic creatures. There are no images or any concrete evidence to corroborate these accounts, however.\nBlue Poison has indicated no signs of involvement in such battles, nor has she mentioned them.\n[CLASSIFIED]\nAccording to eyewitness accounts, Operator Blue Poison greeted Operator Specter by name when she saw her for the first time. But since Blue Poison is polite to every operator, it was dismissed as insignificant. All similar reports must be scrutinized to avoid unwanted speculations about specific operators.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/iberia.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/blue-poison/base.png', chibiSrc: '/operators/blue-poison/chibi.webm', chibiMoveSrc: '/operators/blue-poison/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'LLC' },
    { id: 'e2', label: 'Elite 2', src: '/operators/blue-poison/e2.png', chibiSrc: '/operators/blue-poison/chibi.webm', chibiMoveSrc: '/operators/blue-poison/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'LLC' },
    { id: 'skin1', label: 'Shoal Beat', src: '/operators/blue-poison/skin1.png', chibiSrc: '/operators/blue-poison/chibi-skin1.webm', chibiMoveSrc: '/operators/blue-poison/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'LLC' },
    { id: 'skin2', label: 'Nocturne of Elysia', src: '/operators/blue-poison/skin2.png', chibiSrc: '/operators/blue-poison/chibi-skin2.webm', chibiMoveSrc: '/operators/blue-poison/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'YUJI' },
  ],
  portrait: '/operators/blue-poison/portrait.png',
  portraitFocus: { y: -6.9, x: 59.4, zoom: 298 },
}

export default bluePoison
