import type { Operator } from '../../types'
import cantabileVoice from '../voices/cantabile'

const cantabile: Operator = {
  name: 'Cantabile', fileNo: 'R143', class: 'Vanguard', branch: 'Agent', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Headhunting'],
  faction: 'Rhodes Island', position: 'Melee', race: 'Liberi', gender: 'Female', birthplace: 'Bolívar',
  birthday: 'April 7th', height: '169 cm', combatExp: '6 years', infectionStatus: 'Originium crystals distributed across surface of body, confirmed Infected by medical examination.', illustrator: '温泉瓜',
  cv: { JP: 'Yuka Saito', CN: 'Ruo Wu (credited as "Luttefair" in EN)', EN: 'Frankie Kevich', KR: 'Moon Sun-hee' },
  voice: cantabileVoice,
  trait: 'Has reduced Redeployment Time, can use ranged attacks',
  tags: ['DP-Recovery', 'Fast-Redeploy'],
  stats: { hp: 1878, atk: 549, def: 262, res: 0, block: 1, cost: 10, aspd: '1s', rdp: '35s' },
  range: { base: [[2,1,1]], e1: [[2,1,1]] },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Normal', Endurance: 'Standard', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Standard', 'Originium Arts': 'Standard' },
  talents: [{ name: 'Protean', desc: 'ASPD +12 when not blocking an enemy, ATK +12% when blocking an enemy', elite: 'E2' }],
  skills: [
    {
      name: 'Penetrating Gaze', icon: '/operators/cantabile/skill-1.png', activation: 'Passive', recovery: 'Passive',
      desc: 'After deployment, ATK +100%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'After deployment, ATK +35%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '13s' },
        { level: '2', desc: 'After deployment, ATK +40%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '13s' },
        { level: '3', desc: 'After deployment, ATK +45%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '13s' },
        { level: '4', desc: 'After deployment, ATK +50%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '14s' },
        { level: '5', desc: 'After deployment, ATK +55%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '15s' },
        { level: '6', desc: 'After deployment, ATK +60%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '16s' },
        { level: '7', desc: 'After deployment, ATK +70%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '17s' },
        { level: 'M1', desc: 'After deployment, ATK +80%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '18s' },
        { level: 'M2', desc: 'After deployment, ATK +90%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '19s' },
        { level: 'M3', desc: 'After deployment, ATK +100%. Generates 1 DP after each attack', spInit: 0, sp: 0, dur: '20s' },
      ],
    },
    {
      name: 'Specular Reflection', icon: '/operators/cantabile/skill-2.png', activation: 'Manual', recovery: 'Auto Recovery',
      desc: 'ATK +40%, ASPD +50, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 18 ammo and the skill ends when all ammo is used (can manually deactivate skill)', spInit: 20, sp: 25, rank: 'M3',
      levels: [
        { level: '1', desc: `ATK +10%, ASPD +10, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 13 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 10, sp: 34 },
        { level: '2', desc: `ATK +13%, ASPD +14, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 13 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 10, sp: 33 },
        { level: '3', desc: `ATK +16%, ASPD +18, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 13 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 10, sp: 32 },
        { level: '4', desc: `ATK +19%, ASPD +22, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 14 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 15, sp: 31 },
        { level: '5', desc: `ATK +22%, ASPD +26, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 14 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 15, sp: 30 },
        { level: '6', desc: `ATK +25%, ASPD +30, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 14 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 15, sp: 29 },
        { level: '7', desc: `ATK +28%, ASPD +34, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 15 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 20, sp: 28 },
        { level: 'M1', desc: `ATK +32%, ASPD +38, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 16 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 20, sp: 27 },
        { level: 'M2', desc: `ATK +36%, ASPD +44, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 17 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 20, sp: 26 },
        { level: 'M3', desc: `ATK +40%, ASPD +50, gains Camouflage. Generates 1 DP after each attack.\nSkill activation grants 18 ammo and the skill ends when all ammo is used (Can manually deactivate skill)`, spInit: 20, sp: 25 },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "Cantabile's Badge", desc: 'Appointed as Vanguard Operator to exercise Agent responsibilities' },
    agey: { code: 'AGE-Y', name: 'The Voiceless', stages: [
      { stage: 1, hp: '+130', atk: '+18', effect: 'New trait: Redeployment Time -35% on first redeployment' },
      { stage: 2, hp: '+180', atk: '+28', effect: 'Protean improved: ASPD +15 when not blocking an enemy, ATK +15% when blocking an enemy' },
      { stage: 3, hp: '+220', atk: '+30', effect: 'Protean improved: ASPD +18 when not blocking an enemy, ATK +18% when blocking an enemy' },
    ]},
  },
  story: `The mysterious Bolívarian Liberi Cantabile was an assassin under the service of an organization, killing many people but also facing various losses throughout her life, from her family to her best friend. After contracting Oripathy following another assassination, Cantabile was left to die by her employers and ended up in a refugee camp where she was rescued by Rhodes Island. After her recovery, she was put into their service as a field operative, giving Cantabile a chance to redeem herself for her past actions and start a new life.`,
  profile: `Cantabile was rescued from the slums by the Bolívar office of Rhodes Island and sent to the landship for further treatment. She was accepted into Rhodes Island as an operator six months later, at her own request.`,
  records: [
    {
      title: 'Clinical Analysis',
      content: `Imaging tests show the indistinct outlines of internal organs, obscured by abnormal shadows. Originium granules detected in the circulatory system. The subject is confirmed to be infected with Oripathy.\n[Cell-Originium Assimilation] 14%\nCrystals mainly found in the upper-right arm.\n[Blood Originium-Crystal Density] 0.30u/L\nThere are many Infected who lose the will to live. Many patients only tell us about their past once we become more familiar with each other, establishing a degree of mutual trust for further treatment. Cantabile refused to interact with us at the start of her treatment, and at one point wanted to terminate treatment entirely; this was concerning, even though she did not take any drastic measures.\nFortunately, she grew to trust us as her treatment progressed.`,
    },
    {
      title: 'Archive File 1',
      content: `Cantabile was a topic of some discussion among her fellow patients, who wondered why someone like her was found at death's door in the slums. She seemed more like someone from a well-to-do family in Leithanien, rather than a vagrant who had to be rescued by Rhodes Island operators after suffering an Oripathy attack that caused a panic in the area.\nNo one was rude enough to ask her about it directly, of course. As her condition stabilized and she became more open to interaction, the patients learned that she had considerably more knowledge of music and literature than the average person. Some of them said that she seemed like a governess, or perhaps used to be one; she could play a dozen musical instruments, talk about poetry in depth, and demonstrated an impressive command of etiquette. She was particularly open to interacting with younger patients, and some sighed that it was Oripathy that caused her predicament.\nBackground investigations indicate potential past ties to a Bolívarian arms dealer, though it appears that any such ties had been severed by the time she was rescued.`,
    },
    {
      title: 'Archive File 2',
      content: `We recommend that patients visit Lena's garden, and let the aroma and metal crabs soothe their minds and souls. The garden is particularly popular with younger patients, but Cantabile seems to have developed an aversion to it and its metal crabs after her first visit. It was not that she was afraid of Beanstalk's crabs, but rather seemed uncomfortable at the guide's use of the word "pet." She asked whether we have the children pick out their favorite metal crabs, and form an emotional bond with them, only to ultimately kill these same pets. The medic on duty answered clearly in the negative, and Cantabile did not pursue the topic any further.\nAs Cantabile's treatment progressed and she became familiar with more of Rhodes Island, she was observed to react to words such as "instructor" and "training room", though she refused to reveal any more of her past.\nIt is against our policies to force people to reveal their pasts if they are not comfortable doing so, and a background check has confirmed that she does not pose a threat to Rhodes Island. Therefore, we operated on the principle of showing our good faith, building her trust in Rhodes Island, and helping her differentiate us from her previous environment.\nSince becoming an operator, Cantabile has shown interest in adopting a metal crab, though she continues to have reservations about her ability to care for it. She appears to harbor a fear of witnessing the loss of life, though we believe that simply having such concerns implies that she is relatively well suited for the task. In addition, there are many people eager to help her out, Beanstalk foremost amongst them.`,
    },
    {
      title: 'Archive File 3',
      content: `Cantabile has demonstrated a striking interest in the current state of Bolívar since becoming an operator, though her doubts are apparent as well. Her interactions with Dobermann and the Doctor demonstrate a very limited understanding of the true state of the nation. Snippets of her past, garnered from previous conversations, indicate that she learned what she knows from her previous organization, which apparently did not want her well-informed on politics and current events. However, neither Dobermann nor the Doctor would turn down an inquisitive soul, and Cantabile has developed mixed feelings about Bolívar as a result of what she's learned.\nWhile she wrote down Bolívar as her place of birth after some hesitation, she has since mentioned that she was not born there, only that it was where she grew up, the country that she was most familiar with, and the place where everything changed for her. It is hard to assign responsibility for events in the past; Cantabile says that she used to feel like there was no such thing as an innocent Bolívarian, but that she later grew to feel that she herself is the greatest culprit. Tormented by fear and guilt, she wanted atone for her sins with her life.\nShe says, however, that she has realized that dying in the slums would not have changed anything; she would use the life we saved to atone, and to walk a new path that she was only beginning to see. If life was not simply a "goal" or a "tool," she would find out what she needs to do, and what choices she should make.`,
    },
    {
      title: 'Archive File 4',
      content: `When Cantabile first joined Rhodes Island, there was a major difference in how she worked compared to other operators: she was obsessed with every detail of a mission, often to a fault. Although this is not unheard of among new operators and those with a strong sense of responsibility, Cantabile took this beyond all reasonable limits. If a mission involved helping Infected workers, for example, she would look up the family history of the factory owner. She would also write long, non-compliant mission reports afterward, including extraneous details such as her investigation into the previous history of the target. She comes to her own conclusions regarding what is needed of her and how she should complete a mission, listing out various possibilities and compulsively warning herself not to use force except under extreme circumstances.\nCantabile's reports have improved after many corrections and instructions regarding her non-compliant writing style and actions, but her obsessive compulsions did not stop. Her quarters are filled with rejected drafts detailing her thoughts, with various possibilities listed out in increasing detail, and she's even been reprimanded for refusing to carry weapons on a mission.\nHer strongest reaction occurred after she accidentally caused an injury. Although the testimony of other operators at the scene absolved Cantabile of all blame, she chose to punish herself by starvation upon returning to HQ, an act that seems to have special significance for her. She was found by medics who noticed that something was not right and forcibly put her on IV, and was temporarily suspended from field operations.\nAnother noteworthy incident, albeit happier, occurred when Cantabile saved a young child for the first time. She began to tremble uncontrollably as she gave water and food to the malnourished child, and reported feeling that she was fortunate for the first time in her life, trusting in herself and Rhodes Island to help the child, and to give her a better future with freedom of choice.`,
    },
    {
      title: 'Promotion Record',
      content: `Cantabile later told us about her first friend.\nIt was a little girl, about 5-6 years old, whom Cantabile was governess to. Cantabile taught the girl music, read storybooks to her, and helped her make her first pastries. The girl was afraid of her own parents, who rarely showed any emotion on their faces, and the servants limited conversation with their employer's young daughter to a minimum. The governess was both a teacher and a friend to the girl, who quickly grew to rely on her. Cantabile never answered the girl's questions about whether she knew what her parents did, nor did she ever teach the girl anything aside from music. After completing her first mission, Cantabile hurried to the designated location, trembling from fear, the joy of being alive, and revulsion at the blood that she saw. As she was being searched on her way back, her handler found something that she could not bring back with her: a little cloth doll that the girl had left in her pocket.\nThis was where Cantabile ended her story, as she stroked a little fowlbeast that she had adopted.`,
    },
  ],
  classIcon: '/icons/classes/vanguard-class.png', branchIcon: '/icons/branches/agent-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/cantabile/base.png', chibiSrc: '/operators/cantabile/chibi.webm', illustrator: '温泉瓜' },
    { id: 'e2', label: 'Elite 2', src: '/operators/cantabile/e2.png', chibiSrc: '/operators/cantabile/chibi.webm', illustrator: '温泉瓜' },
    { id: 'skin1', label: 'Illumination That of Daylights', src: '/operators/cantabile/skin1.png', chibiSrc: '/operators/cantabile/chibi-skin1.webm', illustrator: '温泉瓜' },
    { id: 'skin2', label: 'Bard by the Lake', src: '/operators/cantabile/skin2.png', chibiSrc: '/operators/cantabile/chibi-skin2.webm', illustrator: '温泉瓜' },
  ],
  portrait: '/operators/cantabile/portrait.png',
  portraitFocus: { y: -3.4, x: 53.4, zoom: 338 },
}

export default cantabile
