import type { Operator } from '../../types'
import podencoVoice from '../voices/podenco'

const podenco: Operator = {
  name: 'Podenco', fileNo: 'R157', class: 'Supporter', branch: 'Decel Binder', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Recruitment', 'Headhunting'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Perro', gender: 'Female', birthplace: 'Bolívar',
  birthday: 'March 25th', height: '145 cm', combatExp: 'None', infectionStatus: 'Non-infected', illustrator: 'アシマ',
  cv: { JP: 'Hikaru Ueda', CN: 'Fu Gui', EN: 'Lou Arruti', KR: 'Bang Si-woo' },
  voice: podencoVoice,
  trait: 'Deals Arts damage and Slows the target for a short time (0.8s)',
  tags: ['Slow', 'Healing'],
  stats: { hp: 1163, atk: 492, def: 96, res: 20, block: 1, cost: 14, aspd: '1.9s', rdp: '70s' },
  range: { base: [[1,1,1,1],[1,2,1,1],[1,1,1,1]], e1: [[1,1,1,1],[1,2,1,1],[1,1,1,1]] },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Normal', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Gardener', desc: 'When deployed, all Supporter Operators gain +9% ATK', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Aromatherapy', icon: '/operators/podenco/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +60%, now heals allied units instead of attacking', spInit: 10, sp: 25, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +10%, now heals allied units instead of attacking', spInit: 0, sp: 35, dur: '20s' },
        { level: '2', desc: 'ATK +10%, now heals allied units instead of attacking', spInit: 1, sp: 34, dur: '20s' },
        { level: '3', desc: 'ATK +10%, now heals allied units instead of attacking', spInit: 2, sp: 33, dur: '20s' },
        { level: '4', desc: 'ATK +20%, now heals allied units instead of attacking', spInit: 3, sp: 32, dur: '21s' },
        { level: '5', desc: 'ATK +20%, now heals allied units instead of attacking', spInit: 4, sp: 31, dur: '21s' },
        { level: '6', desc: 'ATK +20%, now heals allied units instead of attacking', spInit: 5, sp: 30, dur: '21s' },
        { level: '7', desc: 'ATK +30%, now heals allied units instead of attacking', spInit: 6, sp: 29, dur: '22s' },
        { level: 'M1', desc: 'ATK +40%, now heals allied units instead of attacking', spInit: 7, sp: 28, dur: '23s' },
        { level: 'M2', desc: 'ATK +50%, now heals allied units instead of attacking', spInit: 8, sp: 27, dur: '24s' },
        { level: 'M3', desc: 'ATK +60%, now heals allied units instead of attacking', spInit: 10, sp: 25, dur: '25s' },
      ],
    },
    {
      name: 'Spread Spores', icon: '/operators/podenco/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Throws a vial that, upon shattering, releases a cloud of spores for 6 seconds. All enemies within the spore cloud are Slowed and silenced, and receive 80% Arts damage every second', spInit: 10, sp: 23, rank: 'M3',
      note: 'Spread Spores has an area-of-effect of 0.9 tiles and can affect aerial enemies.',
      levels: [
        { level: '1', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 5 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 40% Arts damage every second`, spInit: 10, sp: 35 },
        { level: '2', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 5 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 40% Arts damage every second`, spInit: 10, sp: 34 },
        { level: '3', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 5 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 40% Arts damage every second`, spInit: 10, sp: 33 },
        { level: '4', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 5 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 50% Arts damage every second`, spInit: 10, sp: 32 },
        { level: '5', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 5 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 50% Arts damage every second`, spInit: 10, sp: 31 },
        { level: '6', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 5 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 50% Arts damage every second`, spInit: 10, sp: 30 },
        { level: '7', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 5 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 60% Arts damage every second`, spInit: 10, sp: 29 },
        { level: 'M1', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 6 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 65% Arts damage every second`, spInit: 10, sp: 27 },
        { level: 'M2', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 6 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 70% Arts damage every second`, spInit: 10, sp: 25 },
        { level: 'M3', desc: `Throws a vial that, upon shattering, releases a cloud of spores for 6 seconds\nAll enemies within the spore cloud are Slowed and silenced, and receive 80% Arts damage every second`, spInit: 10, sp: 23 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Podenco's Badge", desc: 'Appointed as Supporter Operator to exercise Decel Binder responsibilities' },
    decx: { code: 'DEC-X', name: 'Amaranthine Nursery', stages: [
      { stage: 1, hp: '+70', atk: '+25', effect: 'New trait: SP recovery +0.2/sec when there are enemies within range' },
      { stage: 2, hp: '+90', atk: '+35', effect: 'Gardener improved: When deployed, all Supporter Operators gain +9% ATK and +3 ASPD' },
      { stage: 3, hp: '+110', atk: '+40', effect: 'Gardener improved: When deployed, all Supporter Operators gain +9% ATK and +5 ASPD' },
    ]},
  },
  story: `Podenco was born into a small settlement on the steppes near the border of Bolívar. While this remote settlement was able to escape the flames of war due to its distance from the center of Bolívar, this isolation also created its own problems. To ensure their survival, the people of this settlement delved into their natural talents at evading Catastrophes and cultivating crops. Podenco has been interested in a variety of plants since a young age, likes to make dried flowers, and also tended a small nursery back home. As she grew up, she became involved in the community's farming efforts, gaining rich experience in botanical cultivation for plants both edible and ornamental. When asked which type of plants she prefers, Podenco will quietly tell you that she likes flowers more, but when food and clothing become a scarcity, she will silently stash away her personal preferences deep into her heart.`,
  profile: "Perfumer's apprentice and coworker at the Convalescence Garden, discovered by chance on Podenco's very first day off the steppes of Bolívar. A quiet, flower-obsessed girl steadily growing into a horticulturist in her own right.",
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n\n[Cell-Originium Assimilation] 0%\nOperator Podenco has no signs of Originium infections.\n\n[Blood Originium-Crystal Density] 0.13u/L\nOperator Podenco has very little contact with Originium.\n\n"That scent, it's so good... So refreshing... Ah, ah... Achoo!"\n—A medic operator with a pollen allergy` },
    { title: 'Archive File 2', content: `Not everyone who lives in these remote regions aspires to lead a bustling life in a distant land, but Podenco was one such person who did. The people of her home had little contact with the outside world, but the interactions they did have gradually gave Podenco a rosy impression of the outside world, particularly towards flowers. She had seen all kinds of flora in the world depicted through books and photos, but someone who never left Bolívar would never be able to see these flowers in their entire life. Within her stirred a great anticipation to see the outside world.` },
    { title: 'Archive File 3', content: `After arriving at Rhodes Island, her becoming Perfumer's coworker and apprentice was actually by chance. The young Podenco, like a fledgling leaving the nest, was completely spellbound by the magnificence of the city after arriving at the closest nomadic city from her hometown. She couldn't wait to find some place filled with fragrance and beauty, and soon after, she bumped into Perfumer in the middle of the street. Perfumer immediately noticed Podenco's fondness for flowers, and her own Garden happened to be short of the personnel needed to make her aromatherapy raw materials. And just like that, Podenco ran into someone by mistake, and landed herself the first job of her life.\nCompared to Perfumer, Podenco still is lacking in many ways. Her sense of smell isn't as sensitive as Perfumer's, nor does she have any knowledge of auxiliary professions, but she is quickly approaching Perfumer's skill with the momentum she has. From a single flower, to a garden, and now to an entire greenhouse, Podenco has the skill to independently manage the Convalescent Garden. In addition, she also began to use the flowers she collected to create a wide variety of reagents, constantly adapting to meet the demands of the various medics in the medical facility. In time, she may well become the world's undisputed master of horticulture.\nAnd it all stems from her love for flowers.\nA lifelong love.` },
    { title: 'Promotion Record', content: `"Podenco's Greenhouse – Production Commission Details"\nWe can make floral tea, which is best enjoyed in the greenhouse.\nWith a flower purse, you can always carry a soothing fragrance with you.\nExperience better rest with a flower pillow (please allow extra time for production).\nCome enjoy my flower biscuits, but please supply all the ingredients other than the flowers.\nPlease discuss with me if you would like to request any other items, and I will see if there is a possibility of making it.\nThere are many combinations of the above items to choose from. Please contact me for further details.` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/decel-binder-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/podenco/base.png', chibiSrc: '/operators/podenco/chibi.webm', illustrator: 'アシマ' },
    { id: 'e2', label: 'Elite 2', src: '/operators/podenco/e2.png', chibiSrc: '/operators/podenco/chibi.webm', illustrator: 'アシマ' },
    { id: 'skin1', label: 'Wake Up from a Nap', src: '/operators/podenco/skin1.png', chibiSrc: '/operators/podenco/chibi-skin1.webm', illustrator: 'アシマ' },
  ],
  portrait: '/operators/podenco/portrait.png',
  portraitFocus: { y: -4.6, x: 50.4, zoom: 278 },
}

export default podenco
