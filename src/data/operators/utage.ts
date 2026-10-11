import type { Operator } from '../../types'

const utage: Operator = {
  name: 'Utage', fileNo: 'HK03', class: 'Guard', branch: 'Soloblade', rarity: 4, level: 70, elite: 2, trust: 200, how_to_get: ['Headhunting', 'Recruitment'],
  faction: 'Higashi', position: 'Melee', race: 'Unknown', gender: 'Female', birthplace: 'Higashi',
  birthday: 'April 4th', height: '161 cm', combatExp: 'None', infectionStatus: 'Confirmed infected by medical examination.', illustrator: '釜飯轟々丸',
  cv: { JP: 'Mayu Yoshioka', CN: 'Xu Xu (credited as "Skye" in EN)', EN: 'Ayaka Kyo', KR: 'Choi Ha-ri' },
  trait: "Can't be healed by other units. Recovers 70 self HP every time this operator attacks an enemy",
  tags: ['DPS', 'Survival'],
  stats: { hp: 3444, atk: 723, def: 352, res: 0, block: 1, cost: 24, aspd: '1.2s', rdp: '70s' },
  range: {
    base: [[2,1]],
    e1: [[2,1]],
  },
  physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Normal', Endurance: 'Normal', 'Tactical Acumen': 'Normal', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Serious Mode', desc: 'Gains up to +50 ASPD Tenacity (reaches maximum bonus when losing 50% Max HP)', elite: 'E0' },
    { name: 'Serious Mode', desc: 'Gains up to +75 ASPD Tenacity (reaches maximum bonus when losing 60% Max HP)', elite: 'E1' },
    { name: 'Serious Mode', desc: 'Gains up to +100 ASPD Tenacity (reaches maximum bonus when losing 70% Max HP)', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Space Out', icon: '/operators/utage/skill-1.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'Stops attacking, Block becomes 0, DEF +200%, and restores 10% Max HP every second.', spInit: 10, sp: 15, dur: '8s', rank: 'M3',
      note: 'The HP regeneration is unaffected by healing effect modifiers.',
      levels: [
        { level: '1', desc: 'Stops attacking, Block becomes 0, DEF +100%, and restores 6% Max HP every second.', spInit: 0, sp: 15, dur: '8s' },
        { level: '2', desc: 'Stops attacking, Block becomes 0, DEF +110%, and restores 6% Max HP every second.', spInit: 1, sp: 15, dur: '8s' },
        { level: '3', desc: 'Stops attacking, Block becomes 0, DEF +120%, and restores 6% Max HP every second.', spInit: 2, sp: 15, dur: '8s' },
        { level: '4', desc: 'Stops attacking, Block becomes 0, DEF +130%, and restores 7% Max HP every second.', spInit: 3, sp: 15, dur: '8s' },
        { level: '5', desc: 'Stops attacking, Block becomes 0, DEF +140%, and restores 7% Max HP every second.', spInit: 4, sp: 15, dur: '8s' },
        { level: '6', desc: 'Stops attacking, Block becomes 0, DEF +150%, and restores 7% Max HP every second.', spInit: 5, sp: 15, dur: '8s' },
        { level: '7', desc: 'Stops attacking, Block becomes 0, DEF +160%, and restores 8% Max HP every second.', spInit: 6, sp: 15, dur: '8s' },
        { level: 'M1', desc: 'Stops attacking, Block becomes 0, DEF +170%, and restores 8% Max HP every second.', spInit: 7, sp: 15, dur: '8s' },
        { level: 'M2', desc: 'Stops attacking, Block becomes 0, DEF +180%, and restores 8% Max HP every second.', spInit: 8, sp: 15, dur: '8s' },
        { level: 'M3', desc: 'Stops attacking, Block becomes 0, DEF +200%, and restores 10% Max HP every second.', spInit: 10, sp: 15, dur: '8s' },
      ],
    },
    {
      name: 'Descending Strike - Earth Splitter', icon: '/operators/utage/skill-2.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, immediately loses 50% current HP. For 16 seconds after deployment, ATK +110% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '16s', rank: 'M3',
      note: 'The HP loss cannot knock Utage out and will leave her with at least 1 HP.',
      levels: [
        { level: '1', desc: 'After deployment, immediately loses 50% current HP. For 13 seconds after deployment, ATK +50% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '13s' },
        { level: '2', desc: 'After deployment, immediately loses 50% current HP. For 13 seconds after deployment, ATK +55% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '13s' },
        { level: '3', desc: 'After deployment, immediately loses 50% current HP. For 13 seconds after deployment, ATK +60% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '13s' },
        { level: '4', desc: 'After deployment, immediately loses 50% current HP. For 14 seconds after deployment, ATK +65% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '14s' },
        { level: '5', desc: 'After deployment, immediately loses 50% current HP. For 14 seconds after deployment, ATK +70% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '14s' },
        { level: '6', desc: 'After deployment, immediately loses 50% current HP. For 14 seconds after deployment, ATK +75% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '14s' },
        { level: '7', desc: 'After deployment, immediately loses 50% current HP. For 15 seconds after deployment, ATK +80% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '15s' },
        { level: 'M1', desc: 'After deployment, immediately loses 50% current HP. For 15 seconds after deployment, ATK +90% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '15s' },
        { level: 'M2', desc: 'After deployment, immediately loses 50% current HP. For 15 seconds after deployment, ATK +100% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '15s' },
        { level: 'M3', desc: 'After deployment, immediately loses 50% current HP. For 16 seconds after deployment, ATK +110% and attacks deal Arts damage', spInit: 0, sp: 0, dur: '16s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Utage's Badge", desc: 'Appointed as Guard Operator to exercise Soloblade responsibilities' },
    sblx: { code: 'SBL-X', name: 'Flip Phone', stages: [
      { stage: 1, hp: '+160', atk: '+45', effect: 'New trait: Gains 25% Sanctuary when HP is below 50%' },
      { stage: 2, hp: '+210', atk: '+55', effect: 'New talent: Cold-Blooded — +3% ATK and +3% DEF when HP is below 50%' },
      { stage: 3, hp: '+240', atk: '+60', effect: 'Cold-Blooded improved: +4% ATK and +4% DEF when HP is below 50%' },
    ]},
  },
  story: `While appearing as a normal Higashinese girl who is currently in Rhodes Island after contracting Oripathy during her time in Lungmen, Utage is actually a member of a Higashinese assassin clan, trained since her young days to be the clan's next leader. She was sent undercover as a high-school girl to infiltrate Rhodes Island and assassinate her target, but she ended up liking her undercover life so much that she ended up defecting from her clan. Now, Utage lends her service as a combatant to Rhodes Island, while also keeping everyone at Rhodes Island in the dark about her past.`,
  profile: `An ordinary student from Higashi who came to study in Lungmen, Utage contracted Oripathy after getting pulled into an incident with Infected persons. After coming to Rhodes Island per physician's advice, Utage passed the evaluation to become an Operator.\nShe is level-headed in her view of Oripathy, living life largely the same as before she became Infected. However, when she is working, she exhibits a terrifying demeanor.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal blurry outlines of this operator's internal organs, clouded with abnormal dark spots. Her circulatory system shows an abnormally high rate of Originium particulate matter, with other signs of Oripathy infection, we can confirm that the Operator is Infected.\n[Cell-Originium Assimilation] 2%\nOperator Utage is Infected, but has no external signs of infection.\n[Blood Originium-Crystal Density] 0.18u/L\nOperator Utage rarely comes in contact with Originium. Please maintain that situation.` },
    { title: 'Archive File 1', content: `This exchange student from Higashi loves to eat, chases the latest fashion trends, and likes to have a good time. After contracting Oripathy after getting caught up in an incident, she came to Rhodes Island in accordance with her physician's advice. At first, a non-combat role was planned for her based upon her complete lack of combat experience, but during the evaluation, she demonstrated a considerable talent for fighting. After some discussion, the examiner decided to let her participate in some field missions. Of course, the bulk of her work will still be non-combat related, such as logistics or HR work more suitable for someone her age.` },
    { title: 'Archive File 2', content: `Utage revels in the challenge of new things. As fashion is constantly shifting and lines up with her interests, she naturally pays more attention to these things. Over time, she has become a bit of an authority. What company is gearing up to release a new product, and how does its prospects on the market look? She always has her finger on the pulse of new information, and is ready to share it with any nearby Operators who are interested. Thanks to her, the average fashionability of the Operators here has improved greatly, but their wallets have been proportionally flattened.` },
    { title: 'Archive File 3', content: `I must note that Utage is very good at disguising and manipulating her mental state. As a result, conventional psychological monitoring methods are not reliable in her case. In addition to her strong psychological qualities, I also believe that her race has something to do with the phenomenon. Indeed, we have no idea what her race is, nor do any of the other Operators from Higashi. And unless she decides to disclose this information herself, we might have to commit a lot of effort into this question... Wait, you mean, her blade? Hmm.... perhaps there is a lot we can learn from her blade. This line of tracking may well be more successful than other alternatives. Understood, I'll get in touch with Vulcan. Once I have the information, I'll enter it into the database and make it available to you.` },
    { title: 'Archive File 4', content: `"You're back? Did you get it done? I see. Still couldn't find anything, huh? Guess that's not unexpected... Hey, s-stop hitting me, it's my bad, so stop already!"\n"I know you had good intentions and wanted the Doctor to get to know each Operator better. However, everyone has their own secrets, right? For example, you wouldn't want everyone to find out right now that you're planning to propose to your girlfriend and have an engagement ring in a compartment in your desk. Oh, how'd I find out? Well, uh, ahahaha."\n"What's important is not to air out every nitty gritty detail about an Operator's life, but rather to determine whether or not they are trustworthy, and assign them accordingly. That's already enough. Utage deserves the Doctor's trust, as well as ours, but she may never decide to trust us with her secrets. As for the Doctor, perhaps she will eventually open up, given the right time and place."` },
    { title: 'Promotion Record', content: `[Excerpts from an Encrypted Channel – Regarding Utage]\n"If you want to know what's 'in' with the chicks, then you've come to the right place."\n"She's really good at creating a laid-back atmosphere."\n"She always has her finger on the pulse. Whenever something limited edition hits the market, she's on top of it right away. Being able to strike a business deal was super lucky."\n"D-did she just give me an evil eye? I could feel shivers going down my spine..."\n"I can't figure out what that kid is thinking."\n"When she smiles like that, yes, those vibes, now that's a bit interesting."\n"That's just me faking it~ I don't mind teaching you if you want to learn."` },
  ],
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/soloblade-branch.png', factionIcon: '/icons/factions/higashi.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/utage/base.png', chibiSrc: '/operators/utage/chibi.webm', chibiMoveSrc: '/operators/utage/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '釜飯轟々丸' },
    { id: 'e2', label: 'Elite 2', src: '/operators/utage/e2.png', chibiSrc: '/operators/utage/chibi.webm', chibiMoveSrc: '/operators/utage/chibi-move.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '釜飯轟々丸' },
    { id: 'skin1', label: 'Summer Flowers FA661', src: '/operators/utage/skin1.png', chibiSrc: '/operators/utage/chibi-skin1.webm', chibiMoveSrc: '/operators/utage/chibi-move-skin1.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '釜飯轟々丸' },
    { id: 'skin2', label: 'Disguise', src: '/operators/utage/skin2.png', chibiSrc: '/operators/utage/chibi-skin2.webm', chibiMoveSrc: '/operators/utage/chibi-move-skin2.webm', chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: '釜飯轟々丸' },
  ],
}

export default utage
