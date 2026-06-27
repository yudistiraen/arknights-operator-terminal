import { useState, useRef, useCallback, useLayoutEffect, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const OPERATORS = [
  {
    name: 'Rosmontis', class: 'Sniper', branch: 'Flinger', rarity: 6, level: 90, elite: 2, trust: 200,
    faction: 'Elite Op', position: 'Ranged', race: 'Feline', gender: 'Female', birthplace: 'Columbia',
    birthday: 'July 6th', height: '142 cm', combatExp: '1 year', infectionStatus: 'Infected', illustrator: '唯@W',
    cv: { JP: 'Yui Ogura', CN: 'Zhang Ruoyu', EN: 'Hayden Daviau', KR: 'Yoon Eun-seo' },
    trait: 'Attacks deal two instances of Physical damage to ground enemies in a small area (The second instance is a shockwave that has half the normal ATK)',
    stats: { hp: 1944, atk: 748, def: 275, res: 15, block: 1, cost: 25, aspd: '2.1s', rdp: '70s' },
    range: {
      base: [
        [1,1,1,1],
        [2,1,1,1],
        [1,1,1,1],
      ],
      e1: [
        [0,0,1,1,1],
        [0,1,1,1,1],
        [2,1,1,1,1],
        [0,1,1,1,1],
        [0,0,1,1,1],
      ],
    },
    physicalExam: { 'Physical Strength': 'Normal', Mobility: 'Standard', Endurance: 'Normal', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Normal', 'Originium Arts': 'Outstanding' } as Record<string, string>,
    talents: [
      { name: 'Armaments of Annihilation', desc: 'Attacks ignore 160 DEF', elite: 'E2' },
      { name: 'Stable Esthesia', desc: 'When deployed, grants +8% ATK to this unit and a random deployed Caster Operator', elite: 'E2' },
    ],
    skills: [
      { name: 'Expanded Cognition', icon: '/skill-1.png', activation: 'Auto', recovery: 'Offensive', desc: 'The next attack deals an additional hit equal to 180% ATK as Arts damage', spInit: 0, sp: 2, rank: 'M3' },
      { name: 'Nociceptor Inhibition', icon: '/skill-2.png', activation: 'Manual', recovery: 'Auto', desc: 'ATK +55%, splash area expands, each attack causes 2 additional shockwaves; 20% chance to Stun for 1.5s', spInit: 20, sp: 30, dur: '40s', rank: 'M3', note: 'Increases attack interval by 50% (3.15s). Splash radius extends to 1.5 tiles.' },
      { name: '"As You Wish"', icon: '/skill-3.png', activation: 'Manual', recovery: 'Auto', desc: 'ATK +75%, attacks up to 2 blocked enemies; deploys 2 Tactical Equipment, Stun 3s, DEF -160', spInit: 35, sp: 60, dur: '30s', rank: 'M3', note: 'Reduces attack interval by 50% (1.05s). Can target blocked aerial enemies. Tactical Equipment prioritizes tiles near high-aggression enemies.' },
    ],
    modules: {
      original: { code: 'Original', name: "Rosmontis's Badge", desc: 'Appointed as Sniper Operator to exercise Flinger responsibilities' },
      bomx: { code: 'BOM-X', name: '"Notes"', stages: [
        { stage: 1, hp: '+175', atk: '+55', effect: 'Trait improved: Attacks deal three instances of Physical damage to ground enemies in a small area (The second and third instances are shockwaves that have half the normal ATK)' },
        { stage: 2, hp: '+250', atk: '+65', effect: 'Armaments of Annihilation improved: Attacks ignore 190 DEF' },
        { stage: 3, hp: '+275', atk: '+75', effect: 'Armaments of Annihilation improved: Attacks ignore 220 DEF' },
      ]},
      isw: { code: 'ISW-α', name: "Rosmontis's Specialized Badge", stages: [
        { stage: 1, atk: '+45', aspd: '+5', effect: 'New trait: In Integrated Strategies, attacks deal 1 additional instance of 100% ATK as Arts damage' },
        { stage: 2, atk: '+70', aspd: '+6', effect: 'Stable Esthesia improved: Grants +8% ATK to self and a random Caster; in IS, also benefits from Caster Collectibles, and when any Sniper or Caster is deployed, 1 Tactical Equipment is summoned' },
        { stage: 3, atk: '+90', aspd: '+7', effect: 'Stable Esthesia improved: Grants +8% ATK to self and a random Caster; in IS, also benefits from Caster Collectibles, and when any Sniper or Caster is deployed, 1 stronger Tactical Equipment with special effects is summoned' },
      ]},
    },
    lore: `"Outcast, I'm a little concerned. After returning from the Chernobog core city, Rosmontis has been carrying out her missions with extreme aggression."\n\n"Isn't it normal to adjust the mission objectives in our line of work? Pith, you oughta trust Rosmontis's judgement."\n\n"Have you heard? Surviving witnesses refer to her as the 'Scourge of Minos.' Fortunately, the girl herself doesn't remember any of it."\n\n"Memories aren't always useful experiences, sometimes they can be heavy burdens. Since her opinions aren't colored by her own prejudices, Rosmontis might be even more impartial than we are. She's like a mirror that can't be stained."\n\n"She's awake now, Pith. We can ask her ourselves."\n\nHello Outcast.\n\n"Hello, Rosmontis."\n\nAre you leaving, Outcast?\n\n"Yes, I'm off to Victoria for a little something. But Pith is right, I'll be gone, Kal'tsit will be gone, and someday, we'll all be gone."\n\nWill Amiya be gone too?\n\n"Could be. Nobody knows the future. Judge Rosmontis, Your Little Honor, can you look after yourself for us?"\n\nYes, I promise. I promise everyone that I'll write everything down. I remember the stories you and Pith told me. I won't forget.\n\nIf I ever turn bad... no, no matter what I become in the future. I'll document it all, I'll look over it carefully.\n\nThe last one I will judge will be me, myself.`,
    classIcon: '/sniper-class.png', branchIcon: '/flinger-branch.png', factionIcon: '/elite-op.png',
    skins: [
      { id: 'base', label: 'Base', src: '/rosmontis-base.png' },
      { id: 'e2', label: 'Elite 2', src: '/rosmontis-e2.png' },
      { id: 'skin1', label: 'Become Anew', src: '/rosmontis-skin1.png' },
      { id: 'skin2', label: 'An Airy Dream', src: '/rosmontis-skin2.png' },
    ],
  },
  {
    name: 'Mon3tr', class: 'Medic', branch: 'Chain Medic', rarity: 6, level: 90, elite: 2, trust: 200,
    faction: 'Rhodes Island', position: 'Ranged', race: 'Undisclosed', gender: 'Female', birthplace: 'Rhodes Island',
    birthday: 'July 25th', height: '158 cm', combatExp: 'Undisclosed', infectionStatus: 'Non-infected', illustrator: '伍秋秋秋秋',
    cv: { JP: 'Fūka Izumi', CN: 'Chen Yixuan', EN: 'Molly Harris', KR: 'Lee Myung-ho' },
    trait: 'Restores HP of allies, bouncing between 3 allies. Healing reduced by 25% per bounce.',
    stats: { hp: 2235, atk: 558, def: 221, res: 0, block: 1, cost: 18, aspd: '2.85s', rdp: '70s' },
    range: {
      base: [
        [1,1,1],
        [1,2,1,1],
        [1,1,1],
      ],
      e1: [
        [1,1,1,1],
        [1,2,1,1],
        [1,1,1,1],
      ],
    },
    physicalExam: { 'Physical Strength': 'Flawed', Mobility: 'Outstanding', Endurance: 'Flawed', 'Tactical Acumen': 'Standard', 'Combat Skill': 'Outstanding', 'Originium Arts': 'Flawed' } as Record<string, string>,
    talents: [
      { name: 'Self-Repair', desc: 'Can deploy a Reconstruction on ground within attack range; grants surrounding allies ATK +15%; Reconstruction performs additional healing bounce that does not weaken', elite: 'E2' },
      { name: 'Tactical Coordination', desc: 'Whenever Mon3tr or Reconstruction heals a target, grants Mon3tr and target ASPD +20 for 10 seconds', elite: 'E2' },
    ],
    skills: [
      { name: 'Stratagem: Hyperpressurized Link', icon: '/mon3tr-skill-1.png', activation: 'Auto', recovery: 'Offensive', desc: 'The next heal is increased to 200% of ATK, and bounce count per heal +1', spInit: 0, sp: 2, rank: 'M3' },
      { name: 'Stratagem: Overload', icon: '/mon3tr-skill-2.png', activation: 'Manual', recovery: 'Offensive', desc: 'Prioritizes healing Reconstruction; whenever it is healed, it performs a bouncing heal; Talent 2 effect increases to 2.8 times', spInit: 13, sp: 15, dur: '30s', rank: 'M3', note: 'Reconstruction heal triggers 0.6s after initial heal. Can heal Reconstruction at full HP.' },
      { name: 'Stratagem: Meltdown', icon: '/mon3tr-skill-3.png', activation: 'Manual', recovery: 'Offensive', desc: 'Moves to Reconstruction position. ATK +330%, Block +2, Max HP +5000, attacks all blocked enemies with True damage, heals self for 50% ATK. Loses 80 HP/s. Returns on end or lethal damage.', spInit: 11, sp: 15, dur: '25s', rank: 'M3', note: 'Attack interval reduced by 1.5s. Survives lethal damage with 1 HP. Reconstruction retreats when used.' },
    ],
    modules: {
      original: { code: 'Original', name: "Mon3tr's Badge", desc: 'Appointed as Medic Operator to exercise Chain Medic responsibilities' },
      xahx: { code: 'XAH-X', name: 'Ten Thousand Years of Memories', stages: [
        { stage: 1, atk: '+40', def: '+30', effect: 'Trait improved: Healing reduced by 15% per bounce (instead of 25%)' },
        { stage: 2, atk: '+55', def: '+35', effect: 'Self-Repair improved: Reconstruction grants surrounding allies ATK +20%' },
        { stage: 3, atk: '+65', def: '+40', effect: 'Self-Repair improved: Reconstruction grants surrounding allies ATK +25%; next bounce also does not weaken' },
      ]},
    },
    lore: `"You're hurt."\n\nAs you leaf through the documents, the paper slices open your skin at one particularly tricky angle.\n\nIt's no big deal. You didn't even feel it.\n\nAt least, not until Mon3tr comes in with a new stack of documents.\n\nAt first, she simply stops and looks around, left and right, like she senses something wrong in the office.\n\nWhen she grabs your wrist, snatches away your pen, and flips your hand over, you finally see the cut on your index finger.\n\nAfter using a cotton swab to disinfect the wound, she gently yet deftly plasters on a band-aid. Once done, she cups your hand in hers, mumbling something to herself as she softly pats your palm.\n\n"Does it still hurt?"\n\nYou shake your head, showing her your formerly-injured finger as you give it a good rub with another, doing your best to assuage her worries.\n\n"But my memories tell me that bleeding hurts a lot. What does it feel like?"\n\nHer heart is now calmed, but her tone of voice takes a turn for the strange as she "warns" you that any bodily abnormalities must be reported to her ASAP.`,
    classIcon: '/medic-class.png', branchIcon: '/chain-medic-branch.png', factionIcon: '/rhodes-island.png',
    skins: [
      { id: 'base', label: 'Base', src: '/mon3tr-base.png' },
      { id: 'e2', label: 'Elite 2', src: '/mon3tr-e2.png' },
      { id: 'skin1', label: 'Sharpened Blades', src: '/mon3tr-skin1.png' },
    ],
  },
]

const BTN_BASE = "lobby-btn relative overflow-hidden bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] text-left"
const BTN_HOVER = "hover:bg-white/[0.14] hover:border-white/[0.2] active:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6] transition-transform duration-200 hover:scale-[1.015] active:scale-[0.985] cursor-pointer"
const BTN_CYAN_BASE = "lobby-btn relative overflow-hidden bg-[#3ba4c9]/25 backdrop-blur-md border border-[#3ba4c9]/30 shadow-[0_2px_12px_rgba(59,164,201,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] text-left"
const BTN_CYAN_HOVER = "hover:bg-[#3ba4c9]/35 hover:border-[#3ba4c9]/40 active:bg-[#3ba4c9]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6] transition-transform duration-200 hover:scale-[1.015] active:scale-[0.985] cursor-pointer"

function Stars({ n }: { n: number }) {
  return (<div className="flex gap-0.5">{Array.from({ length: n }, (_, i) => (<svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-ak-gold-bright drop-shadow-[0_0_4px_rgba(212,168,67,0.5)]"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>)
}
function StatBar({ label, value, max, color, delay = 0 }: { label: string; value: number; max: number; color: string; delay?: number }) {
  return (<div className="flex items-center gap-3"><span className="font-display text-[11px] tracking-wider text-white/40 uppercase w-10">{label}</span><div className="flex-1 h-2 bg-white/[0.06] rounded-sm overflow-hidden"><div className={`h-full rounded-sm ${color} animate-[stat-fill_0.8s_ease-out_forwards] origin-left`} style={{ width: `${Math.min((value / max) * 100, 100)}%`, animationDelay: `${delay}s`, transform: 'scaleX(0)' }} /></div><span className="font-display text-sm text-white/80 w-12 text-right tabular-nums font-semibold">{value}</span></div>)
}
function ExamBar({ label, value }: { label: string; value: string }) {
  const n = ({ Flawed: 1, Normal: 2, Standard: 3, Excellent: 4, Outstanding: 5 } as Record<string, number>)[value] || 3
  return (<div className="flex items-center gap-2"><span className="text-[11px] text-white/40 w-28 shrink-0">{label}</span><div className="flex gap-0.5 flex-1">{[1,2,3,4,5].map(i=><div key={i} className={`h-2 flex-1 rounded-sm ${i<=n?'bg-ak-accent/80 shadow-[0_0_4px_rgba(59,164,201,0.3)]':'bg-white/[0.06]'}`}/>)}</div><span className="text-[11px] text-ak-accent-bright w-20 text-right font-display">{value}</span></div>)
}

function buildPanels(OP: typeof OPERATORS[number]): Record<string, { title: string; accent: string; render: () => React.ReactNode }> {
  const moduleEntries = Object.values(OP.modules)
  return {
    attribute: { title: 'Attribute', accent: 'bg-ak-accent', render: () => (<><div className="flex items-center justify-between mb-4"><span className="text-xs text-white/40 font-display">E{OP.elite} LV{OP.level}</span><span className="text-xs text-white/40 font-display">Trust {OP.trust} / 200</span></div><div className="grid gap-3"><StatBar label="HP" value={OP.stats.hp} max={3000} color="bg-gradient-to-r from-[#22c55e] to-[#4ade80]" delay={0.1}/><StatBar label="ATK" value={OP.stats.atk} max={1000} color="bg-gradient-to-r from-[#ef4444] to-[#f87171]" delay={0.2}/><StatBar label="DEF" value={OP.stats.def} max={800} color="bg-gradient-to-r from-ak-accent to-ak-accent-bright" delay={0.3}/><StatBar label="RES" value={OP.stats.res} max={30} color="bg-gradient-to-r from-ak-infected to-[#c084fc]" delay={0.4}/></div><div className="grid grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/[0.08]">{([['Block',OP.stats.block],['Cost',OP.stats.cost],['ASPD',OP.stats.aspd],['RDP',OP.stats.rdp]] as const).map(([l,v])=>(<div key={l} className="text-center"><div className="font-display text-[10px] text-white/40 uppercase tracking-wider mb-1">{l}</div><div className="font-display text-base text-white/80 font-bold">{v}</div></div>))}</div><div className="mt-5 pt-4 border-t border-white/[0.08]"><div className="flex items-center justify-between mb-3"><span className="font-display text-[11px] text-white/40 uppercase tracking-wider">Attack Range</span></div><div className="flex flex-col items-center gap-3"><div className="flex items-center gap-10">{([{grid:OP.range.base},{grid:OP.range.e1}] as const).map((r,idx)=>(<div key={idx} className="inline-grid gap-[3px]">{r.grid.map((row,ri)=>(<div key={ri} className="flex gap-[3px]">{row.map((c,ci)=>(<div key={ci} className={`w-5 h-5 rounded-[2px] ${c===2?'bg-ak-accent shadow-[0_0_6px_rgba(59,164,201,0.5)]':c===1?'bg-white/[0.12] border border-white/[0.08]':'bg-transparent'}`}>{c===2&&<div className="w-full h-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"/></div>}</div>))}</div>))}</div>))}</div><div className="flex gap-10"><span className="font-display text-[10px] text-white/30 tracking-wider w-[92px] text-center">Base</span><span className="font-display text-[10px] text-white/30 tracking-wider w-[112px] text-center">E1 / E2</span></div></div></div></>) },
    skills: { title: 'Skills', accent: 'bg-ak-accent', render: () => (<div className="grid gap-3">{OP.skills.map((s,i)=>(<div key={s.name} className="bg-white/[0.06] border border-white/[0.08] p-4"><div className="flex items-start gap-3"><img src={s.icon} alt={s.name} className="w-12 h-12 shrink-0 rounded object-contain bg-white/[0.04] border border-white/[0.08] p-1"/><div className="flex-1 min-w-0"><div className="flex items-center gap-2 mb-1.5"><h4 className="font-display text-sm font-semibold text-white/85">{s.name}</h4><span className="font-display text-[10px] px-1.5 py-0.5 bg-ak-accent/20 text-ak-accent-bright border border-ak-accent/30 rounded-sm">{s.rank}</span></div><p className="text-[11px] leading-relaxed text-white/45 mb-2">{s.desc}</p><div className="flex flex-wrap gap-x-4 gap-y-1"><span className="text-[10px] font-display text-white/40">{s.recovery} Recovery</span><span className="text-[10px] font-display text-white/40">{s.activation} Trigger</span><span className="text-[10px] font-display text-white/40">SP Init <span className="text-ak-accent-bright font-semibold">{s.spInit}</span></span><span className="text-[10px] font-display text-white/40">SP Cost <span className="text-ak-accent-bright font-semibold">{s.sp}</span></span>{s.dur&&<span className="text-[10px] font-display text-white/40">Duration <span className="text-ak-gold-bright font-semibold">{s.dur}</span></span>}</div>{s.note&&<p className="text-[10px] text-white/30 mt-2 leading-relaxed border-t border-white/[0.06] pt-2">{s.note}</p>}</div></div></div>))}</div>) },
    talents: { title: 'Talents', accent: 'bg-ak-infected', render: () => (<div className="grid gap-3">{OP.talents.map(t=>(<div key={t.name} className="bg-white/[0.06] border border-white/[0.08] p-4"><div className="flex items-center gap-2 mb-2"><h4 className="font-display text-sm font-semibold text-ak-accent-bright">{t.name}</h4><span className="text-[9px] px-1.5 py-0.5 bg-white/[0.06] border border-white/[0.1] text-white/40 font-display">{t.elite}</span></div><p className="text-xs text-white/45 leading-relaxed">{t.desc}</p></div>))}</div>) },
    profile: { title: 'Profile', accent: 'bg-white/60', render: () => (<div className="grid grid-cols-2 gap-x-8 gap-y-3">{([['Race',OP.race],['Gender',OP.gender],['Birthplace',OP.birthplace],['Birthday',OP.birthday],['Height',OP.height],['Combat Exp',OP.combatExp],['Infection',OP.infectionStatus],['Illustrator',OP.illustrator]] as const).map(([l,v])=>(<div key={l} className="flex justify-between items-baseline border-b border-white/[0.06] pb-2"><span className="text-[10px] font-display text-white/40 uppercase tracking-wider">{l}</span><span className={`text-xs font-display font-semibold ${v==='Infected'?'text-ak-infected':'text-white/80'}`}>{v}</span></div>))}</div>) },
    physexam: { title: 'Physical Exam', accent: 'bg-[#22c55e]', render: () => (<div className="grid gap-2.5">{Object.entries(OP.physicalExam).map(([l,v])=><ExamBar key={l} label={l} value={v}/>)}</div>) },
    voice: { title: 'Voice Actors', accent: 'bg-ak-accent', render: () => (<div className="grid gap-3">{Object.entries(OP.cv).map(([lang,name])=>(<div key={lang} className="flex items-center justify-between bg-white/[0.06] border border-white/[0.08] p-3"><span className="font-display text-xs text-white/40 uppercase tracking-wider w-8">{lang}</span><span className="font-display text-sm text-white/85 font-semibold">{name}</span></div>))}</div>) },
    trait: { title: 'Trait', accent: 'bg-ak-gold', render: () => (<><div className="flex items-center gap-2 mb-4"><span className="font-display text-xs text-ak-accent-bright">{OP.branch} {OP.class}</span><span className="text-[10px] text-white/40">· {OP.position}</span></div><div className="bg-white/[0.06] border border-white/[0.08] p-4"><p className="text-sm leading-relaxed text-white/80">{OP.trait}</p></div></>) },
    modules: { title: 'Modules', accent: 'bg-ak-gold', render: () => (<div className="grid gap-5">{moduleEntries.map(mod => {const hasStages = 'stages' in mod; return(<div key={mod.code} className="bg-white/[0.04] border border-white/[0.08] p-4"><div className="flex items-center gap-2 mb-3"><span className="font-display text-[10px] px-2 py-0.5 bg-ak-gold/20 text-ak-gold-bright border border-ak-gold/30 rounded-sm font-bold">{mod.code}</span><span className="font-display text-sm text-white/80 font-semibold">{mod.name}</span></div>{hasStages ? (<div className="grid gap-2">{(mod as any).stages.map((s: any)=>(<div key={s.stage} className="bg-white/[0.06] border border-white/[0.06] p-3"><div className="flex items-center gap-2 mb-2"><span className="font-display text-xs font-bold text-ak-gold-bright">Stage {s.stage}</span><span className="text-[10px] text-white/40">{'hp' in s ? `HP ${s.hp} · ` : ''}{'atk' in s ? `ATK ${s.atk}` : ''}{'def' in s ? ` · DEF ${s.def}` : ''}{'aspd' in s ? ` · ASPD +${s.aspd}` : ''}</span></div><p className="text-[11px] text-white/45 leading-relaxed">{s.effect}</p></div>))}</div>) : (<p className="text-[11px] text-white/45 leading-relaxed">{mod.desc}</p>)}</div>)})}</div>) },
    lore: { title: 'Lore', accent: 'bg-ak-infected', render: () => (<div className="bg-white/[0.04] border border-white/[0.06] p-5"><p className="text-xs leading-[1.8] text-white/50 whitespace-pre-line italic">{OP.lore}</p></div>) },
  }
}

export default function App() {
  const [entered, setEntered] = useState(false)
  const [opIdx, setOpIdx] = useState(0)
  const [xId, setXId] = useState<string | null>(null)
  const [skinIdx, setSkinIdx] = useState(1)
  const [muted, setMuted] = useState(false)
  const [audioReady, setAudioReady] = useState(false)
  const OP = OPERATORS[opIdx]
  const P = buildPanels(OP)
  const splashRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLImageElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const refs = useRef<Record<string, HTMLDivElement | null>>({})
  const orig = useRef<{ top: number; left: number; width: number; height: number } | null>(null)
  const pend = useRef<{ id: string; rect: DOMRect } | null>(null)
  const busy = useRef(false)
  const skinBusy = useRef(false)

  const switchSkin = useCallback((idx: number) => {
    if (idx === skinIdx || skinBusy.current || !artRef.current) return
    skinBusy.current = true
    const sfx = new Audio('/glitch_transition.mp3')
    sfx.volume = 0.6
    sfx.play().catch(() => {})
    const img = artRef.current
    const tl = gsap.timeline({ onComplete: () => { skinBusy.current = false } })
    tl.to(img, { opacity: 0, scale: 1.03, duration: 0.15, ease: 'power2.in' })
      .call(() => setSkinIdx(idx))
      .set(img, { scale: 0.97 })
      .to(img, { opacity: 0.15, duration: 0.04 })
      .to(img, { opacity: 0, duration: 0.03 })
      .to(img, { opacity: 0.5, duration: 0.05 })
      .to(img, { opacity: 0.1, duration: 0.03 })
      .to(img, { opacity: 0.8, duration: 0.06 })
      .to(img, { opacity: 0.4, duration: 0.03 })
      .to(img, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
  }, [skinIdx])

  const expand = useCallback((id: string) => {
    const btn = refs.current[id]; const grid = gridRef.current
    if (!btn || !grid || xId || busy.current) return
    const sfx = new Audio('/futuristic_click.mp3')
    sfx.volume = 0.5
    sfx.play().catch(() => {})
    pend.current = { id, rect: btn.getBoundingClientRect() }
    setXId(id)
  }, [xId])

  const collapse = useCallback(() => {
    if (!xId || busy.current) return
    busy.current = true
    const btn = refs.current[xId]; const o = orig.current
    if (!btn || !o) return
    const pv = btn.querySelector('.btn-preview') as HTMLElement
    const ex = btn.querySelector('.btn-expanded') as HTMLElement
    const tl = gsap.timeline({ onComplete: () => {
      gsap.set(btn, { clearProps: 'position,top,left,width,height,zIndex,overflow' })
      if (pv) gsap.set(pv, { clearProps: 'opacity' })
      if (ex) gsap.set(ex, { clearProps: 'opacity,pointerEvents' })
      setXId(null); busy.current = false
    }})
    if (ex) tl.to(ex, { opacity: 0, duration: 0.2, ease: 'power2.in' })
    tl.to(btn, { top: o.top, left: o.left, width: o.width, height: o.height, duration: 0.45, ease: 'power3.inOut' }, 0.05)
    if (pv) tl.to(pv, { opacity: 1, duration: 0.2 }, 0.35)
    Object.entries(refs.current).forEach(([k, el]) => { if (k !== xId && el) tl.to(el, { opacity: 1, scale: 1, duration: 0.3 }, 0.25) })
  }, [xId])

  useLayoutEffect(() => {
    if (!xId || !pend.current) return
    const { id, rect } = pend.current; pend.current = null; busy.current = true
    const btn = refs.current[id]; const grid = gridRef.current
    if (!btn || !grid) return
    const gr = grid.getBoundingClientRect()
    const t = rect.top - gr.top, l = rect.left - gr.left
    orig.current = { top: t, left: l, width: rect.width, height: rect.height }
    const pv = btn.querySelector('.btn-preview') as HTMLElement
    const ex = btn.querySelector('.btn-expanded') as HTMLElement
    gsap.set(btn, { position: 'absolute', top: t, left: l, width: rect.width, height: rect.height, zIndex: 10, overflow: 'hidden' })
    if (ex) gsap.set(ex, { opacity: 0, pointerEvents: 'none' })
    Object.entries(refs.current).forEach(([k, el]) => { if (k !== id && el) gsap.to(el, { opacity: 0, scale: 0.95, duration: 0.3 }) })
    const tl = gsap.timeline({ onComplete: () => { busy.current = false } })
    tl.to(btn, { top: 0, left: 0, width: gr.width, height: gr.height, duration: 0.5, ease: 'power3.inOut' })
    if (pv) tl.to(pv, { opacity: 0, duration: 0.15 }, 0)
    if (ex) tl.to(ex, { opacity: 1, pointerEvents: 'auto', duration: 0.3 }, 0.25)
  }, [xId])

  useEffect(() => {
    const hk = (e: KeyboardEvent) => { if (e.key === 'Escape' && xId) collapse() }
    const hc = (e: MouseEvent) => {
      if (!xId || busy.current) return
      const btn = refs.current[xId]
      if (btn && !btn.contains(e.target as Node)) collapse()
    }
    window.addEventListener('keydown', hk)
    window.addEventListener('mousedown', hc)
    return () => { window.removeEventListener('keydown', hk); window.removeEventListener('mousedown', hc) }
  }, [xId, collapse])

  const enter = useCallback(() => {
    if (entered) return
    const sfx = new Audio('/enter_effect.mp3')
    sfx.volume = 0.8
    sfx.play().catch(() => {})
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0
      audio.play().then(() => {
        setAudioReady(true)
        const fade = { v: 0 }
        gsap.to(fade, { v: 0.8, duration: 1, ease: 'power2.out', onUpdate: () => { if (!audio.muted) audio.volume = fade.v } })
      }).catch(() => {})
    }
    const splash = splashRef.current
    if (splash) {
      gsap.to(splash, { opacity: 0, duration: 0.6, ease: 'power2.inOut', onComplete: () => setEntered(true) })
    } else {
      setEntered(true)
    }
  }, [entered])


  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !audioReady) return
    const h = () => {
      if (document.hidden) audio.pause()
      else if (!muted) audio.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', h)
    return () => document.removeEventListener('visibilitychange', h)
  }, [audioReady, muted])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (muted) {
      audio.muted = false
      const fade = { v: 0 }
      gsap.to(fade, { v: 0.8, duration: 0.5, ease: 'power2.out', onUpdate: () => { audio.volume = fade.v } })
    } else {
      const fade = { v: audio.volume }
      gsap.to(fade, { v: 0, duration: 0.3, ease: 'power2.in', onUpdate: () => { audio.volume = fade.v }, onComplete: () => { audio.muted = true } })
    }
    setMuted(!muted)
  }, [muted])

  const switchOp = useCallback((dir: -1 | 1) => {
    if (skinBusy.current) return
    const sfx = new Audio('/futuristic_click.mp3')
    sfx.volume = 0.5
    sfx.play().catch(() => {})
    setXId(null)
    skinBusy.current = true
    const img = artRef.current
    if (img) {
      const tl = gsap.timeline({ onComplete: () => { skinBusy.current = false } })
      tl.to(img, { opacity: 0, scale: 1.03, duration: 0.15, ease: 'power2.in' })
        .call(() => {
          setOpIdx(prev => {
            const next = (prev + dir + OPERATORS.length) % OPERATORS.length
            const nextOp = OPERATORS[next]
            setSkinIdx(nextOp.skins.length > 1 ? 1 : 0)
            return next
          })
        })
        .set(img, { scale: 0.97 })
        .to(img, { opacity: 0.15, duration: 0.04 })
        .to(img, { opacity: 0, duration: 0.03 })
        .to(img, { opacity: 0.5, duration: 0.05 })
        .to(img, { opacity: 0.1, duration: 0.03 })
        .to(img, { opacity: 0.8, duration: 0.06 })
        .to(img, { opacity: 0.4, duration: 0.03 })
        .to(img, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
    } else {
      setOpIdx(prev => {
        const next = (prev + dir + OPERATORS.length) % OPERATORS.length
        const nextOp = OPERATORS[next]
        setSkinIdx(nextOp.skins.length > 1 ? 1 : 0)
        return next
      })
      skinBusy.current = false
    }
  }, [])

  useGSAP(() => {
    if (!entered) {
      gsap.set(['.char-art', '.bottom-info', '.lobby-btn', '.hud-item', '.skin-btn'], { opacity: 0 })
      return
    }
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const flicker = gsap.timeline()
    flicker.set('.char-art', { opacity: 0 })
      .to('.char-art', { opacity: 0.15, duration: 0.05, delay: 0.1 })
      .to('.char-art', { opacity: 0, duration: 0.04 })
      .to('.char-art', { opacity: 0.4, duration: 0.06 })
      .to('.char-art', { opacity: 0.05, duration: 0.03 })
      .to('.char-art', { opacity: 0.7, duration: 0.08 })
      .to('.char-art', { opacity: 0.2, duration: 0.04 })
      .to('.char-art', { opacity: 0.9, duration: 0.06 })
      .to('.char-art', { opacity: 0.5, duration: 0.03 })
      .to('.char-art', { opacity: 1, duration: 0.1 })
      .to('.char-art', { opacity: 0.85, duration: 0.04 })
      .to('.char-art', { opacity: 1, duration: 0.15 })
    tl.add(flicker, 0)
    tl.fromTo('.char-art', { x: -60, scale: 1.05 }, { x: 0, scale: 1, duration: 1.2 }, 0)
      .fromTo('.bottom-info', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.7')
      .fromTo('.lobby-btn', { opacity: 0, y: 25, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06 }, '-=0.5')
      .fromTo('.hud-item', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 }, '-=0.3')
      .fromTo('.skin-btn', { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.06 }, '-=0.4')
    gsap.to('.scanline', { y: '100vh', duration: 8, repeat: -1, ease: 'none' })
    gsap.to('.glow-orb', { opacity: 0.3, scale: 1.1, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  }, { scope: containerRef, dependencies: [entered] })

  const card = (id: string, baseCls: string, hoverCls: string, preview: React.ReactNode) => {
    const panel = P[id]
    const isOpen = xId === id
    return (
      <div ref={el => { refs.current[id] = el }} onClick={() => !isOpen && expand(id)} role="button" tabIndex={isOpen ? -1 : 0} onKeyDown={e => { if (!isOpen && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); expand(id) }}} className={`${baseCls} ${isOpen ? '' : hoverCls}`}>
        <div className="btn-preview flex flex-col justify-between h-full">{preview}</div>
        {isOpen && (
          <div className="btn-expanded absolute inset-0 flex flex-col">
            <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-white/[0.1] shrink-0">
              <div className={`w-1 h-5 ${panel.accent} rounded-full`}/>
              <h2 className="font-display text-lg font-bold text-white/90 tracking-wider uppercase">{panel.title}</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6 ak-scroll">{panel.render()}</div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-ak-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_50%,rgba(59,164,201,0.08)_0%,transparent_60%)]"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.04)_0%,transparent_50%)]"/>
      <div className="glow-orb absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-ak-accent/8 rounded-full blur-[120px] opacity-20"/>
      <div className="scanline absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-ak-accent/20 to-transparent pointer-events-none z-50" style={{top:'-1px'}}/>
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none z-40" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>

      <div className="absolute inset-y-0 left-0 w-[58%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ak-bg z-10"/>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ak-bg via-ak-bg/70 to-transparent z-10"/>
        <div className="char-art absolute inset-0 z-0 flex items-center justify-center"><img ref={artRef} src={OP.skins[skinIdx].src} alt={OP.name} className="max-h-[92%] max-w-[90%] w-auto h-auto object-contain drop-shadow-[0_0_40px_rgba(59,164,201,0.1)]"/></div>


        <div className="hud-item absolute bottom-8 right-20 z-20 flex items-center gap-3 bg-ak-panel/60 backdrop-blur-sm border border-ak-border/30 px-4 py-2.5">
          <img src={OP.factionIcon} alt={OP.faction} className="w-6 h-6 object-contain drop-shadow-[0_0_4px_rgba(212,168,67,0.4)]"/>
          <div className="flex flex-col"><span className="font-display text-[11px] text-ak-gold-bright tracking-wider font-semibold">{OP.faction}</span><span className="font-display text-[9px] text-white/35 tracking-wider">{OP.birthplace}</span></div>
        </div>
      </div>

      <div className="bottom-info absolute bottom-6 left-8 z-30">
        <div className="flex items-end gap-2 mb-1"><span className="font-display text-7xl font-bold text-white leading-none tracking-tighter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">{OP.level}</span><span className="font-display text-base text-ak-text-muted uppercase tracking-widest mb-2">LV</span></div>
        <div className="flex items-center gap-2 mb-3"><div className="flex items-center gap-1 bg-ak-panel/80 backdrop-blur-sm px-2.5 py-1 border border-ak-border/40"><span className="font-display text-[10px] text-ak-accent-bright tracking-wider">ELITE</span><span className="font-display text-sm text-ak-gold-bright font-bold">{OP.elite}</span></div><div className="flex items-center gap-1.5 bg-ak-panel/80 backdrop-blur-sm px-2 py-1 border border-ak-border/40"><img src={OP.classIcon} alt={OP.class} className="w-4 h-4 object-contain"/><span className="font-display text-[10px] text-ak-accent-bright tracking-wider">{OP.class.toUpperCase()}</span></div></div>
        <h1 className="font-display text-4xl font-bold text-white tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] mb-1">{OP.name}</h1>
        <div className="flex items-center gap-3"><Stars n={OP.rarity}/><span className="text-[11px] text-ak-text-muted font-display tracking-wider">ID: RE45</span></div>
        <div className="flex items-center gap-2 mt-3 opacity-50"><span className="text-[10px] text-ak-text-muted font-display tracking-wider uppercase">Rhodes Island · {OP.faction}</span></div>
      </div>

      <div className="absolute top-5 left-6 z-30 flex items-center gap-2">
        {OP.skins.map((s,i)=>{const active=i===skinIdx;return(<button key={s.id} onClick={()=>switchSkin(i)} className={`skin-btn group flex items-center gap-2 min-w-9 h-9 px-3 bg-white/[0.08] backdrop-blur-md border shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6] ${active?'border-ak-accent/50 bg-ak-accent/15 shadow-[0_0_12px_rgba(59,164,201,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]':'border-white/[0.12] hover:bg-white/[0.14] hover:border-white/[0.2] cursor-pointer active:scale-[0.97]'}`} style={{transition:'background-color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s'}}><div className={`w-1 h-4 rounded-full shrink-0 ${active?'bg-ak-accent shadow-[0_0_6px_rgba(59,164,201,0.5)]':'bg-white/20 group-hover:bg-white/40'}`} style={{transition:'background-color 0.3s, box-shadow 0.3s'}}/><span className={`font-display text-[10px] tracking-wider whitespace-nowrap overflow-hidden ${active?'max-w-[120px] opacity-100 text-ak-accent-bright':'max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 text-white/60'}`} style={{transition:'max-width 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease 0.1s'}}>{s.label}</span></button>)})}
      </div>
      <audio ref={audioRef} src="/Arknights OST.mp3" loop preload="auto"/>
      <div className="absolute top-5 right-6 z-30 flex items-center gap-3">
        <button onClick={toggleMute} className="hud-item w-9 h-9 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-[0_2px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-white/[0.14] hover:border-white/[0.2] active:scale-[0.97] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ec4e6]" style={{transition:'background-color 0.2s, border-color 0.2s, transform 0.15s'}}><svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white/50">{muted?<><path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></> : <><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></>}</svg></button>
        <div className="hud-item flex items-center gap-2 bg-ak-panel/50 backdrop-blur-sm border border-ak-border/30 px-3 py-1.5"><div className="w-2 h-2 bg-ak-accent rounded-full animate-[pulse-glow_2s_ease-in-out_infinite]"/><span className="font-display text-[11px] text-ak-text-muted tracking-wider">RHODES ISLAND</span></div>
      </div>

      <div className="absolute right-0 top-0 w-[46%] h-full z-20">
        <div className="absolute inset-0 bg-gradient-to-l from-ak-bg/70 via-ak-bg/40 to-transparent pointer-events-none"/>
        <div ref={gridRef} className="relative z-10 h-full flex flex-col justify-center gap-2 pr-6 pl-4 pt-16 pb-6">
          <span className="text-[10px] text-white/25 font-display tracking-[0.2em] uppercase pl-1">Combat Data</span>
          <div className="flex gap-2 flex-[2]">
            {card('attribute',`${BTN_BASE} w-[38%] p-3`,BTN_HOVER,<><div><h2 className="font-display text-xl font-bold text-white/90 tracking-wide leading-none mb-1">Attribute</h2><span className="font-display text-[10px] text-white/40 tracking-wider">Trust {OP.trust} / 200</span></div><div className="flex gap-3 mt-1.5"><span className="text-[9px] text-white/30 font-display">HP {OP.stats.hp}</span><span className="text-[9px] text-white/30 font-display">ATK {OP.stats.atk}</span></div></>)}
            {card('trait',`${BTN_CYAN_BASE} flex-1 p-3`,BTN_CYAN_HOVER,<><div className="flex items-start justify-between"><h2 className="font-display text-xl font-bold text-white/90 tracking-wide">Trait</h2><img src={OP.branchIcon} alt={OP.branch} className="w-6 h-6 shrink-0 object-contain opacity-70 drop-shadow-[0_0_6px_rgba(59,164,201,0.3)]"/></div><div><span className="text-[9px] text-white/40 font-display">{OP.class} · {OP.branch}</span></div></>)}
          </div>
          <div className="flex gap-2 flex-[2.5]">
            {card('skills',`${BTN_BASE} w-[42%] p-3`,BTN_HOVER,<><div><h2 className="font-display text-xl font-bold text-white/90 tracking-wide">Skills</h2><div className="flex gap-1.5 mt-1.5">{OP.skills.map((s,i)=><img key={i} src={s.icon} alt={s.name} className="w-6 h-6 rounded object-contain bg-white/[0.06]"/>)}</div></div><span className="text-[9px] text-white/30 font-display tracking-wider mt-1">3 Equipped · M3</span></>)}
            {card('talents',`${BTN_BASE} flex-1 p-3`,BTN_HOVER,<><h2 className="font-display text-xl font-bold text-white/90 tracking-wide">Talents</h2><div className="mt-1.5"><p className="text-[9px] text-white/35 font-display leading-relaxed truncate">{OP.talents[0].name}</p><p className="text-[9px] text-white/35 font-display leading-relaxed truncate">{OP.talents[1].name}</p></div></>)}
          </div>
          <div className="flex gap-2 flex-[2]">
            {card('modules',`${BTN_BASE} flex-1 p-3`,BTN_HOVER,<><div className="flex items-center justify-between"><h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Modules</h2><div className="flex gap-1">{Object.values(OP.modules).filter(m => 'stages' in m).map(m=><span key={m.code} className="text-[8px] px-1.5 py-0.5 bg-ak-gold/20 text-ak-gold-bright border border-ak-gold/30 font-display rounded-sm">{m.code}</span>)}</div></div><span className="text-[9px] text-white/30 font-display">{Object.keys(OP.modules).length} Equipped</span></>)}
            {card('physexam',`${BTN_BASE} flex-1 p-3`,BTN_HOVER,<><h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Physical</h2><div className="flex gap-0.5 mt-1.5">{Object.values(OP.physicalExam).map((v,i)=>{const n=({Flawed:1,Normal:2,Standard:3,Excellent:4,Outstanding:5} as Record<string,number>)[v]||3;return <div key={i} className={`h-1 flex-1 rounded-full ${n>=4?'bg-ak-accent/60':'bg-white/15'}`}/>})}</div></>)}
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent my-1"/>
          <span className="text-[10px] text-white/25 font-display tracking-[0.2em] uppercase pl-1">Operator Info</span>
          <div className="flex gap-2 flex-[2]">
            {card('profile',`${BTN_BASE} flex-1 p-3`,BTN_HOVER,<><h2 className="font-display text-xl font-bold text-white/90 tracking-wide leading-none mb-1">Profile</h2><div className="flex items-center gap-2 mt-1"><span className="text-[9px] text-white/50 font-display font-semibold">{OP.name}</span><span className="text-[9px] text-white/30">· {OP.faction}</span></div></>)}
            {card('voice',`${BTN_BASE} flex-[0.7] p-3`,BTN_HOVER,<><h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Voice</h2><span className="text-[9px] text-white/25 font-display mt-1">4 Lang</span></>)}
            {card('lore',`${BTN_BASE} flex-1 p-3`,BTN_HOVER,<><h2 className="font-display text-xl font-bold text-white/85 tracking-wide">Lore</h2><p className="text-[9px] text-white/25 font-display leading-relaxed line-clamp-1 italic mt-1">{OP.lore.slice(0, 60)}...</p></>)}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]"/>

      {entered && OPERATORS.length > 1 && (<>
        <button onClick={() => switchOp(-1)} className={`lobby-btn absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center ${BTN_BASE} ${BTN_HOVER} rounded-sm`}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white/60 stroke-2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button onClick={() => switchOp(1)} className={`lobby-btn absolute left-[52%] top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center ${BTN_BASE} ${BTN_HOVER} rounded-sm`}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white/60 stroke-2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </>)}

      {!entered && (
        <div ref={splashRef} className="absolute inset-0 z-[100] bg-ak-bg flex flex-col items-center justify-center cursor-pointer" onClick={enter}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,164,201,0.06)_0%,transparent_70%)]"/>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}/>
          <div className="relative flex flex-col items-center gap-6">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-ak-accent/40 to-transparent"/>
            <img src="/Arknights_logo.webp" alt="Arknights" className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]"/>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-ak-accent/30"/>
              <span className="font-display text-[11px] text-ak-accent-bright/60 tracking-[0.3em] uppercase">Operator Terminal</span>
              <div className="w-8 h-px bg-ak-accent/30"/>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-ak-accent/40 to-transparent"/>
            <span className="font-display text-[10px] text-white/25 tracking-[0.2em] uppercase animate-[pulse-glow_2s_ease-in-out_infinite]">Click to Enter</span>
          </div>
        </div>
      )}
    </div>
  )
}
