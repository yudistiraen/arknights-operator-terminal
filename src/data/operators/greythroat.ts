import type { Operator } from '../../types'
import greythroatVoice from '../voices/greythroat'

const greythroat: Operator = {
  name: 'GreyThroat', fileNo: 'R110', class: 'Sniper', branch: 'Marksman', rarity: 5, level: 80, elite: 2, trust: 200, how_to_get: ['Kernel Headhunting', 'Recruitment'],
  faction: 'Rhodes Island', position: 'Ranged', race: 'Liberi', gender: 'Female', birthplace: 'Undisclosed',
  birthday: 'November 14th', height: '162 cm', combatExp: '3 years', infectionStatus: 'Confirmed uninfected by medical examination.', illustrator: 'm9nokuro',
  cv: { JP: 'Misato Fukuen', CN: 'Yuan Weng', EN: 'Risa Mei', KR: 'Min Ah' },
  voice: greythroatVoice,
  trait: 'Attacks aerial enemies first',
  tags: ['DPS'],
  stats: { hp: 1493, atk: 513, def: 152, res: 0, block: 1, cost: 13, aspd: '1s', rdp: '70s' },
  range: {
    base: [
      [0,1,1,1,0,0],
      [0,2,1,1,1,0],
      [0,1,1,1,0,0],
    ],
    e1: [
      [0,1,1,1,1,0],
      [0,2,1,1,1,0],
      [0,1,1,1,1,0],
    ],
    e2: [
      [0,1,1,1,1,0],
      [0,2,1,1,1,0],
      [0,1,1,1,1,0],
    ],
  },
  physicalExam: { 'Physical Strength': 'Standard', Mobility: 'Excellent', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Excellent', 'Originium Arts': 'Normal' },
  talents: [
    { name: 'Tailwind', desc: 'ASPD +6', elite: 'E1' },
    { name: 'Tailwind', desc: 'ASPD +6, 15% chance to increase ATK to 150% when attacking', elite: 'E2' },
  ],
  skills: [
    {
      name: 'Flying Feathers', icon: '/operators/greythroat/skill-1.png', activation: 'Auto', recovery: 'Auto Recovery',
      desc: 'The next attack shoots 2 times, each shot dealing 140% ATK as physical damage\nCan store up to 3 charges', spInit: 0, sp: 4, rank: 'M3',
      levels: [
        { level: '1', desc: 'The next attack shoots 2 times, each shot dealing 100% ATK as physical damage\nCan store up to 1 charges', spInit: 0, sp: 6 },
        { level: '2', desc: 'The next attack shoots 2 times, each shot dealing 105% ATK as physical damage\nCan store up to 1 charges', spInit: 0, sp: 6 },
        { level: '3', desc: 'The next attack shoots 2 times, each shot dealing 110% ATK as physical damage\nCan store up to 1 charges', spInit: 0, sp: 6 },
        { level: '4', desc: 'The next attack shoots 2 times, each shot dealing 110% ATK as physical damage\nCan store up to 1 charges', spInit: 0, sp: 5 },
        { level: '5', desc: 'The next attack shoots 2 times, each shot dealing 115% ATK as physical damage\nCan store up to 1 charges', spInit: 0, sp: 5 },
        { level: '6', desc: 'The next attack shoots 2 times, each shot dealing 120% ATK as physical damage\nCan store up to 1 charges', spInit: 0, sp: 5 },
        { level: '7', desc: 'The next attack shoots 2 times, each shot dealing 125% ATK as physical damage\nCan store up to 2 charges', spInit: 0, sp: 5 },
        { level: 'M1', desc: 'The next attack shoots 2 times, each shot dealing 130% ATK as physical damage\nCan store up to 2 charges', spInit: 0, sp: 5 },
        { level: 'M2', desc: 'The next attack shoots 2 times, each shot dealing 135% ATK as physical damage\nCan store up to 3 charges', spInit: 0, sp: 5 },
        { level: 'M3', desc: 'The next attack shoots 2 times, each shot dealing 140% ATK as physical damage\nCan store up to 3 charges', spInit: 0, sp: 4 },
      ],
    },
    {
      name: 'Counterflow', icon: '/operators/greythroat/skill-2.png', activation: 'Manual', recovery: 'Offensive Recovery',
      desc: 'ATK +40%, attacks 3 times consecutively', spInit: 15, sp: 30, dur: '20s', rank: 'M3',
      levels: [
        { level: '1', desc: 'ATK +10%, attacks 3 times consecutively', spInit: 10, sp: 40, dur: '15s' },
        { level: '2', desc: 'ATK +10%, attacks 3 times consecutively', spInit: 10, sp: 39, dur: '15s' },
        { level: '3', desc: 'ATK +10%, attacks 3 times consecutively', spInit: 10, sp: 38, dur: '15s' },
        { level: '4', desc: 'ATK +15%, attacks 3 times consecutively', spInit: 11, sp: 37, dur: '16s' },
        { level: '5', desc: 'ATK +15%, attacks 3 times consecutively', spInit: 11, sp: 36, dur: '16s' },
        { level: '6', desc: 'ATK +15%, attacks 3 times consecutively', spInit: 11, sp: 35, dur: '16s' },
        { level: '7', desc: 'ATK +20%, attacks 3 times consecutively', spInit: 12, sp: 34, dur: '17s' },
        { level: 'M1', desc: 'ATK +25%, attacks 3 times consecutively', spInit: 13, sp: 33, dur: '18s' },
        { level: 'M2', desc: 'ATK +30%, attacks 3 times consecutively', spInit: 14, sp: 32, dur: '19s' },
        { level: 'M3', desc: 'ATK +40%, attacks 3 times consecutively', spInit: 15, sp: 30, dur: '20s' },
      ],
    },
  ],
  modules: {
    original: { code: 'Original', name: "GreyThroat's Badge", desc: 'Appointed as Sniper Operator to exercise Marksman responsibilities' },
    mary: { code: 'MAR-Y', name: "Reflection of a Mother's Love", stages: [
      { stage: 1, hp: '+100', atk: '+24', effect: 'New trait: When there are ground enemies within range, ASPD +8' },
      { stage: 2, hp: '+150', atk: '+29', effect: 'Tailwind improved: ASPD +6, 18% chance to increase ATK to 150% when attacking' },
      { stage: 3, hp: '+180', atk: '+33', effect: 'Tailwind improved: ASPD +6, 21% chance to increase ATK to 150% when attacking' },
    ]},
  },
  story: `GreyThroat the Liberi sharpshooter was the daughter of a wandering couple of Originium researchers, who entrusted her under Rhodes Island's care. Being separated from her parents in a harsh way; her parents passed away during a mix up in a confrontation between the infected and the government, and witnessing discriminations against the Infected first-hand caused GreyThroat to suffer from PTSD and starts to resent Originium for being the culprit of the Infected's misery. To lessen her emotional burden, R.I. gave her the freedom to leave at any time, but she chooses to stay after witnessing the Infected purge in Lungmen and a brief encounter with Faust, so she could continue fighting for the Infected cause.`,
  profile: `Operator GreyThroat, despite only receiving her codename recently, has actually been part of Rhodes Island for much longer than the time she's served as an Operator. Her parents were formerly Oripathy researchers who travelled around. Her mother entrusted GreyThroat to Rhodes Island before disappearing. Now, she has passed the Operator assessment and is a member of Rhodes Island's operation team.`,
  records: [
    { title: 'Clinical Analysis', content: `Imaging tests reveal clear, normal outlines of internal organs, and no abnormal shadows have been detected. Originium granules have not been detected in the circulatory system and there are no other signs of infection. At this time, this operator can be confirmed to be uninfected.\n[Cell-Originium Assimilation] 0%\nOperator GreyThroat shows no signs of Oripathy infection.\n[Blood Originium-Crystal Density] 0.11u/L\nOperator GreyThroat has limited exposure to Originium, and undertakes complete protective measures when potentially coming in contact with Originium in her line of work.\nWhen compiling this report, unusual folds were found on the Operator's previous medical examination report. Presumably, the Operator clenched the report upon receiving it, which in and of itself is not a big deal. In the future, however, you should pay attention to the mental health of the Operator.—— Medical Group Remarks` },
    { title: 'Archive File 1', content: `GreyThroat's parents were both excellent Oripathy researchers and had some academic cooperation with some of Rhodes Island's medic operators. However, after a certain point, her father disappeared completely, and not long afterwards, her mother brought the young GreyThroat to Rhodes Island. She too disappeared after leaving her daughter behind. Her mental condition seemed to be extremely distressed as she left Rhodes Island. Though a messenger was later sent to try to get in contact with her, our efforts were akin to chasing a ghost.\nGreyThroat, at the time she first arrived at Rhodes Island, had a series of worrisome issues, most notably her resentment towards Originium and Oripathy. She didn't even try to hide her hate towards the Infected. At first, the Operator entrusted with taking care of her did not take her mental state to be a serious issue, given that she was still young and might be overwhelmed by her experiences. However, I must admit that the seeds of GreyThroat's subsequent problematic development, as well as the many conflicts she would later cause, were planted during this time long ago.\n(Note: The radical words used in the original file involving discrimination and hate have been redacted, and the Doctor may only refer to this file.)` },
    { title: 'Archive File 2', content: `When Rhodes Island discovered the cause of death of GreyThroat's father, several months had already passed. During this time, GreyThroat remained isolated, trying to avoid contact with the various personnel within Rhodes Island. Someone once witnessed GreyThroat scraping at her own arm with a piece of industrial sandpaper, and was not discovered by staff until her arm had been turned into a bloody mess. The reason was because GreyThroat accidentally touched some Originium-based devices.\nWhile GreyThroat has not taken any radical behavior towards Infected persons, her actions have been a source of discontentment among many younger operators. The ostracized GreyThroat of course takes no issue with this fact, and continues to lead a relatively solitary life in Rhodes Island.\nThe only exception is Amiya, one of the few people she is willing to communicate with. Perhaps due to being separated from her family at a young age, her desire to speak with a peer for support sometimes even eclipses her prejudices. However, even when she is in the same room with Amiya, she carefully maintains her distance, exhibiting mild PTSD at the very beginning. At Amiya's suggestion, and in return for adoption into Rhodes Island, GreyThroat began training for the Operator assessment and learned to use bows and crossbows. Some were skeptical, claiming that it was just an excuse for GreyThroat to leave Rhodes Island, or even try to defect, but Amiya quickly put a halt to this, as well as other unfounded rumors.` },
    { title: 'Archive File 3', content: `After officially passing the Operator assessment exam, GreyThroat acquired her codename. Even those who are vocally opposed to her conduct cannot deny her combat performance. On the battlefield, GreyThroat is far keener than Operators who have served for a similar length of time, her excellent dynamic vision compensating for her lack of marksmanship experience.\nHowever, can a Rhodes Island Operator shoulder her duties while being so hostile and disgusted towards the Infected? In order to address the concerns of others, Amiya personally took the initiative to put GreyThroat on her operation team, and successfully carried out several missions.\nSome people may be hard to change, but many hoped that Amiya would be able to gradually influence this somewhat abrasive girl. But, reality would once again surprise everyone. After a long and harrowing rescue mission, GreyThroat changed dramatically overnight. She began to learn to talk to the Infected, though she still would often touch upon topics that are typically off-limits for the Infected. Her tone was cold, and sometimes even full of barbs, but her frankness began to soften the hearts of many.\nVery few people know about what exactly transpired on that mission, with Amiya and GreyThroat both seldom mentioning it. What is certain, is that GreyThroat is no longer blinded by a myopic hatred. However, is her heart actually free from the shackles of hate? It is not that simple. People who seem to easily let go of a deep-rooted hatred are not trustworthy. After each physical examination following her return for a mission, GreyThroat repeatedly confirms her blood originium-crystal density, accompanied by a near-suffocating fear and subsequent relief, perhaps a reflection of the guilt and ensuing sorrow. GreyThroat still often wakes up with nightmares, and rarely has an opportunity to sleep, whether on a mission or in the Rhodes Island dormitories.\nGreyThroat is still her old self, not like Amiya, not like anyone else. But she will still fight for Rhodes Island, and nobody doubts this anymore.` },
    { title: 'Archive File 4', content: `"Scared? Of course. How could I not be scared?"\n"When my father let go of my hand and was swallowed up by the crowd, I never saw him again. At that time, I didn't dare look directly at my mother, and only felt the heat draining from her hand. I didn't understand what happened, why the patients we rescued turned into rioters overnight. Not until I saw my Infected friend, a greasy wrench in hand, vandalizing the street... like a lunatic. Even today, I sometimes still see her expression. What does that mean? I'm not sure."\n"From then on, I couldn't stay calm when talking to Infected people. Since I probably don't need to hide anything from you, Doctor, I'll be frank. In the worst cases, I felt like vomiting. Amiya is the exception though. I really appreciate her. Oh, but don't tell her I said that."\n"But, I've also seen the Infected across this world. The hungry woman using her own blood to nourish a ghastly, malnourished child, exiled to the scorched soil of the barrens, or admitted to some "clinic" in name only to die. With no treatment and no food, they eat the soil at the base of the walls, surrounded by the inorganic, petrified bodies of those whose ridiculous lives have long expired. And what is on the other side of that wall? A peaceful, prosperous mobile city devoid of hunger."\n"I have seen the exiled Infected rescue travellers, and I have also witnessed travelling doctors who help these Infected crushed by terror. After becoming an Operator, I have also become involved, trying to help those who have not joined a mobile city-state avoid Catastrophes. One incident still is fresh on my mind. One time, in the face of a flood, Infected villagers held back the water with their own flesh, buying just enough time for the evacuation. And so those Infected gave their lives, their bodies now floating on top of the water, but nobody cares. Do you know how the villagers view these heroes? With disgust. Whether they hate these people or the Originium crystals on their skin, I cannot say."\n"And why is this happening? Amiya told me before, because everyone is a living person. Everyone wants to live, and has the right to survive."\n"Did you know? When Amiya said these words, she did not look like a young girl at all. But I am not the same as her, and there is inevitably a difference between the Infected and non-Infected. I just want to find the balance between the Infected and the people we were born to be, for those around me, for who I am inside. Nothing more, Doctor."\n—— GreyThroat's conversation record with the Doctor after a certain medical examination. The recorder believes that this conversation will help the Infected understand GreyThroat, and with GreyThroat's tacit consent, this recording was added to her personal files.` },
    { title: 'Promotion Record', content: `Maybe GreyThroat hasn't realized it yet, but in fact, everyone's impression towards her has changed recently. Though she still tries to avoid contact with the Infected most of the time, one Infected operator recalled an episode in which he had fallen into a trap on a mission due to his own error and was serious injured only to be immediately rescued by GreyThroat, who had been covering them from the jungle. Afterwards, the operator who was most known for her disgust towards the Infected was administering emergency treatments for him, her face contorted and arms trembling as she saved his life. He will never forget GreyThroat's expression as she fought to contain her all-too-visible trembling. At that time, he did not feel discriminated against, and suddenly came to understand GreyThroat.` },
  ],
  classIcon: '/icons/classes/sniper-class.png', branchIcon: '/icons/branches/marksman-branch.png', factionIcon: '/icons/factions/rhodes-island.png',
  skins: [
    { id: 'base', label: 'Base', src: '/operators/greythroat/base.png', chibiSrc: '/operators/greythroat/chibi.webm', chibiMoveSrc: '/operators/greythroat/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.4, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'e2', label: 'Elite 2', src: '/operators/greythroat/e2.png', chibiSrc: '/operators/greythroat/chibi.webm', chibiMoveSrc: '/operators/greythroat/chibi-move.webm', chibiFraming: { scale: 1.29, offsetXPercent: 1.4, offsetYPercent: 2.9 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
    { id: 'skin1', label: 'Homecoming', src: '/operators/greythroat/skin1.png', chibiSrc: '/operators/greythroat/chibi-skin1.webm', chibiMoveSrc: '/operators/greythroat/chibi-move-skin1.webm', chibiFraming: { scale: 1.46, offsetXPercent: -2.2, offsetYPercent: -3.5 }, chibiDetailFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }, illustrator: 'm9nokuro' },
  ],
  portrait: '/operators/greythroat/portrait.png',
  portraitFocus: { y: -3.8, x: 41.6, zoom: 329 },
}

export default greythroat
