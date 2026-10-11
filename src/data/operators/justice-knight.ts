import type { Operator } from '../../types'

const justiceKnight: Operator = {
  name: 'Justice Knight', fileNo: 'KZ15', class: 'Sniper', branch: 'Marksman', rarity: 1, level: 30, elite: 0, trust: 200, how_to_get: ['Recruitment'],
  faction: 'Pinus Sylvestris', position: 'Ranged', race: 'Robot', gender: 'Female', birthplace: 'Columbia',
  birthday: 'January 21st', height: '160 cm', combatExp: '4 years', infectionStatus: 'Small amount of wear on outer casing, structure intact, normal durability. Generator and chassis in good condition. Auxiliary systems operating normally, targeting unit calibrated. Service normal. ECU in good condition.', illustrator: 'NoriZC',
  cv: { JP: 'Satsuki Yukino', CN: 'Da Wang (credited as "Yannie Wang" in EN)', EN: 'Ina Marie Smith', KR: 'Kim Sun-hye' },
  trait: 'Attacks aerial enemies first and ignores the Deployment Limit, but has a long Redeployment Time',
  tags: ['Support', 'Robot'],
  stats: { hp: 595, atk: 217, def: 41, res: 0, block: 1, cost: 3, aspd: '1s', rdp: '200s' },
  range: { base: [[1,1,1,0],[2,1,1,1],[1,1,1,0]], e1: [[1,1,1,0],[2,1,1,1],[1,1,1,0]] },
  physicalExam: { 'Top Speed': '20 km/h', Climb: 'Normal', Brake: 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Structural Integrity': 'Standard' },
  talents: [{ name: 'Justice Drive VI', desc: "For 20 seconds after deployment, all ranged allied units within Attack Range becomes less likely to be attacked and apply 25% Fragile effect to aerial enemies. Justice Drive reduces the affected units' aggression level by 1.", elite: 'E0' }],
  skills: [],
  modules: {},
  story: `"Justice Knight" is a Raythean robot (specifically the now-discontinued Raythean Exister-S1044 model) that Wild Mane fished out of the trash on the streets of Kazimierz, and she has faithfully served her and the other members of Pinus Sylvestris ever since. Considered Wild Mane's pet, she is capable of communicating with symbols. After arriving at Rhodes Island, Justice Knight received modifications from Closure, Mayer, and others in the engineering department. Now, she can assist with several everyday tasks, such as watering flowers, transporting takeout, and recharging game consoles.`,
  profile: `"Justice Knight" is a Raythean Exister-S1044 Model four-wheeled operation platform customized by a Kazimierzian engineer, later remodeled and upgraded by Mayer and Closure. Owing to its main searchlight function lacking use value, and its cover fire capacity being limited in its target market, its production has been halted. Before the Rhodes Island Engineering Department got their hands on her, "Justice Knight" had already gone through a dozen modifications, big and small; her present capabilities are easily a far cry from the original model. Her old operating system and command memory data were damaged, unable to be recovered. After a swap for new core hardware and an expanded memory unit, an updated operating system plus additional artificial voice system, she is now hardly distinguishable from Raythean Industries's latest operation platforms. "Justice Knight" is a member of Pinus Sylvestris Knightclub, and is currently authorized for use by Rhodes Island.`,
  records: [
    { title: 'Archive File', content: `Thanks to all manner of upgrades her original master, Wild Mane, has carried out on her, aside from her initial cover fire capacity, "Justice Knight" has grown a list of everyday abilities, such as watering flowers, transporting takeout, recharging game consoles... For "Justice Knight," providing quick and convenient service is one of her callings. Her previous abandonment very much weighs on her, and ever since her retrieval and rebooting by Wild Mane, outside of recharging and maintenance hours, she'll actively hang around with others.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/pinus-sylvestris.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/justice-knight/base.png', chibiSrc: '/operators/justice-knight/chibi.webm', chibiMoveSrc: '/operators/justice-knight/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'NoriZC' },
    { id: 'skin1', label: 'Tournament Fantasy Retrofit Kit', src: '/operators/justice-knight/skin1.png', chibiSrc: '/operators/justice-knight/chibi-skin1.webm', chibiMoveSrc: '/operators/justice-knight/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '过失帝国' },
  ],
}

export default justiceKnight
