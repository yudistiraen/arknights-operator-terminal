import type { Operator } from '../../types'

const pramanix: Operator = {
  name: 'Pramanix', fileNo: 'JC05', class: 'Supporter', branch: 'Hexer', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Kjerag', position: 'Ranged', race: 'Feline', gender: 'Female',
  birthplace: 'Kjerag', birthday: 'February 13th', height: '161 cm', combatExp: '6 months', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Ryuuzaki Ichi',
  cv: { JP: 'Saori Hayami', CN: 'Xueting Mu', EN: 'Ashleigh Haddad', KR: 'Chun Song-e' },
  trait: 'Deals Arts damage',
  tags: ['Debuff'],
  stats: { hp: 1605, atk: 495, def: 102, res: 25, block: 1, cost: 12, aspd: '1.6s', rdp: '70s' },
  range: {
    base: [[1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1]],
    e1: [[0, 1, 1, 0], [1, 1, 1, 1], [1, 2, 1, 1], [1, 1, 1, 1], [0, 1, 1, 0]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Excellent', 'Combat Skill': 'Standard', 'Originium Arts': 'Outstanding' },
  talents: [
    { name: 'Weakening', desc: 'Apply 15% Fragile effect to enemies within range with less than 40% HP', elite: 'E1' },
    { name: 'Weakening', desc: 'Apply 30% Fragile effect to enemies within range with less than 40% HP', elite: 'E2' },
    { name: 'The Bell Tolls Twice', desc: 'Attacks 2 enemies simultaneously', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Echolocation', icon: '/operators/pramanix/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -60', spInit: 25, sp: 40, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -30', spInit: 10, sp: 40, dur: '10s' },
        { level: '2', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -30', spInit: 10, sp: 40, dur: '11s' },
        { level: '3', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -30', spInit: 10, sp: 40, dur: '12s' },
        { level: '4', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -40', spInit: 15, sp: 40, dur: '13s' },
        { level: '5', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -40', spInit: 15, sp: 40, dur: '14s' },
        { level: '6', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -40', spInit: 15, sp: 40, dur: '15s' },
        { level: '7', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -50', spInit: 20, sp: 40, dur: '16s' },
        { level: 'M1', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -53', spInit: 20, sp: 40, dur: '17s' },
        { level: 'M2', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -56', spInit: 20, sp: 40, dur: '18s' },
        { level: 'M3', desc: 'Simultaneously attacks 2 targets; ASPD of all enemies in range -60', spInit: 25, sp: 40, dur: '20s' },
      ],
    },
    {
      name: 'Natural Deterrent', icon: '/operators/pramanix/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'For all enemies within range, DEF -60% and RES -30%', spInit: 20, sp: 40, dur: '25s', rank: 'M3',
      levels: [
        { level: '1', desc: 'For all enemies within range, DEF -35% and RES -20%', spInit: 10, sp: 40, dur: '10s' },
        { level: '2', desc: 'For all enemies within range, DEF -35% and RES -20%', spInit: 11, sp: 40, dur: '11s' },
        { level: '3', desc: 'For all enemies within range, DEF -35% and RES -20%', spInit: 12, sp: 40, dur: '12s' },
        { level: '4', desc: 'For all enemies within range, DEF -40% and RES -23%', spInit: 13, sp: 40, dur: '14s' },
        { level: '5', desc: 'For all enemies within range, DEF -40% and RES -23%', spInit: 14, sp: 40, dur: '15s' },
        { level: '6', desc: 'For all enemies within range, DEF -40% and RES -23%', spInit: 15, sp: 40, dur: '16s' },
        { level: '7', desc: 'For all enemies within range, DEF -45% and RES -26%', spInit: 16, sp: 40, dur: '18s' },
        { level: 'M1', desc: 'For all enemies within range, DEF -50% and RES -26%', spInit: 17, sp: 40, dur: '20s' },
        { level: 'M2', desc: 'For all enemies within range, DEF -55% and RES -26%', spInit: 18, sp: 40, dur: '22s' },
        { level: 'M3', desc: 'For all enemies within range, DEF -60% and RES -30%', spInit: 20, sp: 40, dur: '25s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Pramanix's Badge", desc: `Operator Pramanix has demonstrated a remarkable aptitude for coercing frailty within the enemy via manipulation of bell tones.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Supporter Operator during field operations to exercise Hexer responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.` },
    umdx: { code: 'UMD-X', name: 'Knitting of a Future', stages: [
      { stage: 1, hp: '+100', aspd: '+4', effect: 'New trait:\nApplies 10% Enfeeble to targets for 2 seconds' },
      { stage: 2, hp: '+140', aspd: '+6', effect: 'The Bell Tolls Twice improved:\nAttacks 2 enemies simultaneously, and has 20% chance to inflict Cold for 1 second' },
      { stage: 3, hp: '+180', aspd: '+8', effect: 'The Bell Tolls Twice improved:\nAttacks 2 enemies simultaneously, and has 25% chance to inflict Cold for 1 second' },
    ]},
  },
  story: `The sister of Enciodes and Ensia Silverash, Enya Silverash was forced to take the grueling test to become the Karlan Saintess, the spiritual leader of Kjerag, under her brother's arrangement. Despite her unwillingness, Enya bore this burden in hopes that she could change the conservative Vine-Bead Court. As the Saintess, she was forbidden from leaving the sacred mountain and spent most of her time conducting religious rituals with the Great Elder. The only person she befriended was Kjarr, the chief maid who is willing to listen to Enya's grudges and sorrows. Unbeknownst to most, Kjarr was actually the human guise of Kjeragandr, the goddess of Kjerag. To remain in contact with Ensia, her younger sister, she often wrote letters and sent them in secret.\nDuring the Snowcap Incident, Enya managed to meet her younger sister. During this time, Enciodes proposed appointing Enya as Kjerag's head of state, causing the Browntail and Paleroche clans to believe he planned to depose them. Not wishing to see bloodshed between the three families, Enya used her role as the Karlan Saintess to end the conflict and accepted her new position.\nAs Kjerag's contact with the outside world became more frequent, Enya wished to learn more about it. She sent Kjarr to Rhodes Island to arrange a meeting with a representative of Kazimierz. Seizing the opportunity, Enya quietly left her homeland for a vacation at Rhodes Island. Although the Rhodes Island staff was shocked by the presence of the Karlan Saintess, they accepted Enya as an Operator under the codename "Pramanix." She uses her bell to invoke cryokinetic Arts to aid her allies and cripple her foes.`,
  profile: `Pramanix is a Karlan Saintess born in Kjerag, the leader of the entire religion of her homeland. She uses the holy bell given to her by the gods to summon the power of wind and snow. She came to Rhodes Island by secret means, and the post she holds as well as how long she's held it are both confidential.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this Operator is believed to be non-infected.\n[Cell-Originium Fusion Rate] 0%\nOperator shows no signs of infection at this time.\n[Blood Crystal Density] 0.11u/L\nThis Operator has not been active in zones with large concentrations of Originium.` },
    { title: 'Archive File 1', content: `The Karlan Saintess, the Enlightened One, and the Praised One...all of these titles belong to Pramanix and Pramanix alone. As the supreme leader of the entire religion of Kjerag, she has a series of special privileges. Even her older brother, nominally Kjerag's most senior official, SilverAsh, must bow to her in public. She is honored, perfect, and divine. She brings glory to Kjerag. Yet nobody knows that in her heart, she is suffering.` },
    { title: 'Archive File 2', content: `The ceremony for canonizing a new saint is sacred, but brutal. After the current saint passes away, girls of the appropriate age all head to the shrine where a saint is chosen. Only the girl hit by the first drop of water from the thawing ice obtains the right to be the saint. Afterward, the chosen one takes the trial bell and sets out from the shrine. They follow Heaven's Road up the mountain to the Residence of the Gods. Once they hang the trial bell upon its hook there, the trial is over. En route, it is customary for the girl to nod her head every three steps and ring the bell every five. Those who break this custom lose their chance to become saints. The new saint is born from the thawing snow on the second day. Because Heaven's Road is long and winding, the trial is very severe. Some give up immediately. Others collapse on the side of the road. Only those who have a solid constitution, strength, piety, and the protection of the gods will have the chance to become the saint.` },
    { title: 'Archive File 3', content: `Aside from the elders of the Vine-Bead Court, Pramanix also has to deal with the everyday affairs of the clergy: visiting statesmen, conducting all manner of religious ceremonies, and deciphering countless scriptures. There are so many tasks that she is sometimes overwhelmed with pressure, to the point of being unable to breathe. Because of this, she has to come up with clever methods to relax. It is then that she unloads her burden and reveals her true nature.` },
    { title: 'Archive File 4', content: `If she hadn't become saint, Pramanix might still be at the old Silverash residence, fiddling with her favorite silks, drinking tea, or reading books into the afternoon. However, her brother made a difficult decision, and they reached a compromise. The two have since broken off contact with one another. Even their blood relation cannot make up for the disappointment Pramanix feels toward SilverAsh. Apart from polite greetings in public, the two haven't had a conversation since.` },
    { title: 'Promotion Record', content: `Pramanix's bell was given to her by the gods. According to legend, its sound can summon ice and snow strong enough to extinguish flames and wrap the world in cold. In reality, it does not live up to such exaggerated stories, but it is still a much stronger weapon than most ordinary staves. It should be noted that when ringing the bell, it must be accompanied by a prayer. If the bell does not sound, then its wielder will be encased in ice. If a mistake is made in the prayer, the Arts will be cast upon the bell-wielder herself. Essentially, no one but Pramanix is capable of using the bell.` },
  ],
  classIcon: '/icons/classes/supporter-class.png', branchIcon: '/icons/branches/hexer-branch.png', factionIcon: '/icons/factions/kjerag.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/pramanix/base.png', chibiSrc: '/operators/pramanix/chibi.webm', chibiMoveSrc: '/operators/pramanix/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'e2', label: 'Elite 2', src: '/operators/pramanix/e2.png', chibiSrc: '/operators/pramanix/chibi.webm', chibiMoveSrc: '/operators/pramanix/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
    { id: 'skin1', label: "Caster's Frost", src: '/operators/pramanix/skin1.png', chibiSrc: '/operators/pramanix/chibi-skin1.webm', chibiMoveSrc: '/operators/pramanix/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Ryuuzaki Ichi' },
  ],
  portrait: '/operators/pramanix/portrait.png',
  portraitFocus: { y: -2, x: 65.9, zoom: 322 },
}

export default pramanix
