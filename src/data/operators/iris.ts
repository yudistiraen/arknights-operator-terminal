import type { Operator } from '../../types'

const iris: Operator = {
  name: 'Iris', fileNo: 'VC12', class: 'Caster', branch: 'Mystic Caster', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Victoria', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Victoria',
  birthday: 'April 2nd', height: '147 cm', combatExp: 'None', infectionStatus: 'Medical tests have confirmed that no infection is present.', illustrator: 'Xiaye Hongming',
  cv: { JP: 'Haruka Shiraishi', CN: 'KIYO', EN: 'Molly Jenkins', KR: 'Moon Yoo-jung' },
  trait: 'Attacks deal Arts damage; When unable to find a target, attacks can be stored up and fired all at once (Up to 3 charges)',
  tags: ['DPS'],
  stats: { hp: 1535, atk: 1259, def: 125, res: 20, block: 1, cost: 24, aspd: '3s', rdp: '70s' },
  range: {
    base: [
      [0, 1, 1, 0],
      [2, 1, 1, 1],
      [0, 1, 1, 0],
    ],
    e1: [
      [0, 1, 1, 1],
      [2, 1, 1, 1],
      [0, 1, 1, 1],
    ],
    e2: [
      [0, 1, 1, 1],
      [2, 1, 1, 1],
      [0, 1, 1, 1],
    ],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Excellent' },
  talents: [
    { name: 'Sealed Treasure', desc: 'Stored attacks deal 115% damage', elite: 'E1' },
    { name: 'Sealed Treasure', desc: 'Stored attacks deal 130% damage', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Fairytale Guardian', icon: '/operators/iris/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 50% ATK as Arts damage', spInit: 5, sp: 15, dur: '5s', rank: 'M3',
      range: [[2, 1, 1, 1, 1]],
      note: "Fairytale Guardian multiplies Iris' attack interval by 0.2, lowering it to 0.6 seconds (before modifiers).",
      levels: [
        { level: '1', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 30% ATK as Arts damage', spInit: 5, sp: 25, dur: '5s' },
        { level: '2', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 31% ATK as Arts damage', spInit: 5, sp: 24, dur: '5s' },
        { level: '3', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 32% ATK as Arts damage', spInit: 5, sp: 23, dur: '5s' },
        { level: '4', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 35% ATK as Arts damage', spInit: 5, sp: 22, dur: '5s' },
        { level: '5', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 36% ATK as Arts damage', spInit: 5, sp: 21, dur: '5s' },
        { level: '6', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 37% ATK as Arts damage', spInit: 5, sp: 20, dur: '5s' },
        { level: '7', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 40% ATK as Arts damage', spInit: 5, sp: 19, dur: '5s' },
        { level: 'M1', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 43% ATK as Arts damage', spInit: 5, sp: 18, dur: '5s' },
        { level: 'M2', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 46% ATK as Arts damage', spInit: 5, sp: 17, dur: '5s' },
        { level: 'M3', desc: 'Attack range changes, attack interval is significantly reduced, and each attack deals 50% ATK as Arts damage', spInit: 5, sp: 15, dur: '5s' },
      ],
    },
    {
      name: "Dreamland's Cradle", icon: '/operators/iris/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 300% ATK as Arts damage', spInit: 10, sp: 30, rank: 'M3',
      note: "Dreamland's Cradle will not target enemies that are immune to Sleep or being put to Sleep themselves. The ending burst has a radius of 0.8 tiles.",
      levels: [
        { level: '1', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 170% ATK as Arts damage', spInit: 10, sp: 40 },
        { level: '2', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 180% ATK as Arts damage', spInit: 10, sp: 39 },
        { level: '3', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 190% ATK as Arts damage', spInit: 10, sp: 38 },
        { level: '4', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 200% ATK as Arts damage', spInit: 10, sp: 37 },
        { level: '5', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 210% ATK as Arts damage', spInit: 10, sp: 36 },
        { level: '6', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 220% ATK as Arts damage', spInit: 10, sp: 35 },
        { level: '7', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 230% ATK as Arts damage', spInit: 10, sp: 34 },
        { level: 'M1', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 250% ATK as Arts damage', spInit: 10, sp: 33 },
        { level: 'M2', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 270% ATK as Arts damage', spInit: 10, sp: 32 },
        { level: 'M3', desc: 'Immediately puts up to 2 enemies within Attack Range to Sleep for 7 seconds. Upon waking up, all enemies in their vicinity are dealt 300% ATK as Arts damage', spInit: 10, sp: 30 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Iris's Badge", desc: 'Operator Iris has demonstrated a perennial commitment to Originium Arts.\nThe Field Operations Department has thus passed the following resolution:\nThis operator shall be appointed a Caster Operator during field operations to exercise Mystic Caster responsibilities.\nIn witness whereof,\nThis badge is hereby conferred upon the above named.' },
    mscx: { code: 'MSC-X', name: 'Castle Pop-Up Book', stages: [
      { stage: 1, atk: '+50', res: '+3', effect: 'New trait: Attacks deal Arts damage; When unable to find a target, attacks can be stored up and fired all at once (Up to 4 charges)' },
      { stage: 2, atk: '+68', res: '+4', effect: 'Sealed Treasure improved: Stored attacks deal 135% damage' },
      { stage: 3, atk: '+82', res: '+4', effect: 'Sealed Treasure improved: Stored attacks deal 138% damage' },
    ]},
  },
  story: `Described as the "Master of the Castle of Dreams," Iris the Victorian Feline lady, is seen by many Victorian children as a literal fairy godmother who invites them into "a castle within their dreams" to entertain them with wonderful tales, although it appears to others that she is not yet fully accustomed to her role. Iris approached Rhodes Island after a long search to return a memento once entrusted to her by someone named Mabel Grimm, who is unfortunately Bluishsilver of Rosmontis' squad, who perished during the Chernobog Crisis. After informing Iris of her demise, Rhodes Island sent the memento, an old radio, to a suitable place as per Bluishsilver's will. During her time at Rhodes Island, Iris (later with assistance from Bena) brings peace and joy to the children under Rhodes Island's care through her stories and peculiar Originium Arts, which allow her to induce sleep and control the contents of their dreams.`,
  profile: `A Victorian Caster who came to Rhodes Island to return a certain Operator's safekept items, temporarily residing at Rhodes Island until all related matters are dealt with.\nUses peculiar Originium Arts, able to induce sleep in people and control the contents of their dreams.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there is no sign of infection. At this time, this operator is believed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator Iris shows no signs of Originium infection.\n[Blood Originium-Crystal Density] 0.12u/L\nOperator Iris rarely comes into contact with Originium.\n"Can she really do field work dressed like that?"—Medical Department anonymous remark` },
    { title: 'Archive File 1', content: `Iris came looking for an Operator.\nAt first, we thought this Operator would be Iris's blood relative, or perhaps one removed, or the beneficiary of her will. After deeper discussion, though, Iris informed us that she'd come to return an Operator's safekept item — an old-fashioned radio. The only information she knew was this Operator's real name and external appearance; after all, Iris's true age may be younger than that of the radio before us. As for how she received this from the Operator twenty years ago, and why she's returning it twenty years later, we haven't the faintest clue, but seeing as Iris is here, we have an obligation to her and said Operator in resolving this property's ownership. As this will involve some formalities, processes, and raising of complex personal issues, until these matters are solved, Iris is required to stay aboard in the long-term, and after consulting her own views, we've registered her as an Operator for the time being.` },
    { title: 'Archive File 2', content: `Mabel, the owner of the radio, was — following confirmation — the deceased Operator Bluishsilver of the Rosmontis Squad. After repeated discussion, Rhodes Island accepted this item, and sent it to a suitable place as per Bluishsilver's request for her personal belongings in her will. When we took it on, we also arranged for Iris and Rosmontis to meet. It seemed this was the first time she'd met with such a situation while delivering items, and when she saw Rosmontis, Iris spilled with sorrow and a sense of loss. After first contact, however, she began to narrate to Rosmontis a fairytale from Victoria, doing her utmost to convey to Rosmontis the idea that "Bluishsilver may not be with us any longer, but in the country of the fairies, she'll rest peacefully." Though this wasn't enough to console an elite operator, or better said, Rosmontis herself didn't need such consoling, those words filled with kindness still had some purpose in the end — at least Iris could successfully convince, and console, herself. Not long after, their conversation then ended in a lighter place.\nWe still don't know just what kind of duty Iris shoulders, but out of respect for her, we have not asked her to disclose the details. Perhaps at a more fitting time, she'll pass this information on to the relevant Rhodes Island personnel.` },
    { title: 'Archive File 3', content: `Since becoming an interim Operator, Iris has had free movement privileges in the common areas aboard. Her favorite place is the glistening golden playroom, and she'll accompany the children there in play. For those children receiving treatment aboard Rhodes Island, these times of carefree happiness deserve to be cherished. Outside of when a mission requires her, she's always around the children — she sings songs for them, tells them stories, gives them sweets. She favors spending time with them to the point that for a period, the Security Department's operators were skeptical of Iris's true intentions aboard. After conducting a meticulous investigation, they realized that Iris "tried" no more than to ask the children if they had anything they'd be forced to give up before too long; perhaps this has some relation to her "duty." Most people who've lived in Victoria before have heard a fairytale that goes like this:\nGood children may enter a castle in their dreams, be welcomed by the castle's master, and have a merry time. When waking, about to leave the castle, they may choose to leave their own most precious belongings to the castle and make an agreement with its master, the agreement being something like this: at some precise time when they've grown up, they'll receive this gift from the castle's collection, from their childhood.\nAs for the details, Iris's conduct bears some similarities to this fairytale, but seeing as many parts of Victoria's own fairytales would pain the heart, we have no understanding of this fairytale's full picture, nor secure motive. It may be more appropriate to treat it as Iris's individual behavior for now.` },
    { title: 'Archive File 4', content: `Recently, many young Operators have been discussing what they've run across in their dreams. Each dream's contents are different, but their descriptions all share a magnificent moving castle with an amiable, patient Feline master, and a banquet to bring cheer. This story rooted in Victorian childhood is now sown throughout the hearts of the children of Rhodes Island. No suffering, no regret — all that is left is hopes for a beautiful life, and wishes for the future. Aside from the children, everyone knows who's doing it, but what's the matter with that? Children having distant hopes — is there anything wrong with it? I've already seen a child hand a treasure over to Iris, an ordinary and mundane wooden box, with a silk-wrapped sweet inside. A few days after, a lissom Cautus took that box away. Presumably, their safekeeping techniques are enough to store things without harm until the agreed day.\nI have plenty of misgivings, honestly. Would the children really remember this so many years later? A pretty dream? An amiable young miss? A treasure entrusted? At the least... in Bluishsilver's will, I hadn't seen any clause relating to that radio. Yet that doesn't prove that this agreement left behind was meaningless from the start. If she'd... actually received this "gift," surely she'd be so happy...\nFrom what I see, Iris is totally unused to this "business" of hers, or perhaps she's only just taken over this hereditary sort of "public service" — sorry, I can't find any other way of describing it. It's altruistic, there's no pay, you spend such an extreme amount of resources to do it. Probably, more than the children who take them up, Iris is the one who truly believes in fairytales.\nFor many, fairytale stories languish in the backs of their minds when they've grown up, but Iris? I can put it this way:\nShe's the one who makes fairytales real.` },
    { title: 'Promotion Record', content: `Iris's Originium Arts can induce peaceful sleep in people. Casting with full power, she could very well sink the most focused adult into slumber, but this level of casting takes a lot out of her, and she'll only use it while on missions. At other times, results are about as effective as a decent dose of long-release sleeping aids. She usually casts within cozy environments so that over a quarter of an hour, the target's mood will steadily settle, and they fall asleep safe and snug. After that, Iris may fully apply the most important part of her Originium Arts: operating dreamlands.\nThis ability can put off many people when they first hear it, since falling asleep and giving rise to a dreamland is one internalized expression of the unconscious mind, and if someone could mess around in it, to put it loosely, it wouldn't be much different from indirectly controlling someone.\nBut we believe Iris wouldn't do that — a conclusion we've come to after her arriving at Rhodes Island, and our interaction with her. She's never shown such inclinations in her nature, and going by our surface understanding, her duty and dignity wouldn't allow her to play wantonly with others' dreamlands.\nBesides, Miss Iris's so-called "operating dreamlands" actually has some strict limits. She needs to have had prior contact, prior awareness and prior understanding before she can reconstruct key elements within dreamlands. Moreover, the everyday things Miss Iris comes into contact with are most, if not all, good and nice things. Even her most beloved fairytales — we know Victoria has many that would strike fear into people — are ones she only knows the revisions of, sanitized and upright editions, their contents portraying wonderlands that would never exist upon this world. Thus, what Miss Iris portrays to others likely are, and can only be, in such form. As for why a castle, master and banquet are bound to appear in everyone's dreams?\nIf you may look at the attachments; one photo of Miss Iris herself casting, one of Miss Iris's estate — a small-scale nomadic castle — and one of its interior decoration. I invite any Operators able to recall their dreamlands' contents to compare with these.\nThe conclusion goes without saying.\n"I get it! Miss Iris is a faerie from the stories!"—A certain HR operator's comment\n"And you're a goofball!"—A certain operator's comment on a comment` },
  ],
  classIcon: '/icons/classes/caster-class.png', branchIcon: '/icons/branches/mystic-caster-branch.png', factionIcon: '/icons/factions/victoria.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/iris/base.png', chibiSrc: '/operators/iris/chibi.webm', chibiMoveSrc: '/operators/iris/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
    { id: 'e2', label: 'Elite 2', src: '/operators/iris/e2.png', chibiSrc: '/operators/iris/chibi.webm', chibiMoveSrc: '/operators/iris/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
    { id: 'skin1', label: 'Mirror Visitor', src: '/operators/iris/skin1.png', chibiSrc: '/operators/iris/chibi-skin1.webm', chibiMoveSrc: '/operators/iris/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'Xiaye Hongming' },
  ],
  portrait: '/operators/iris/portrait.png',
}

export default iris
