# Arknights Portfolio — Project Context

## Overview

Website portfolio bertema **Arknights Operator Terminal** — menampilkan data operator dari game Arknights dalam UI yang terinspirasi dari in-game terminal/lobby. Dibangun dengan React + TypeScript + Vite + Tailwind CSS v4 + GSAP.

## Tech Stack

| Layer       | Tech                                      |
| ----------- | ----------------------------------------- |
| Framework   | React 19 + TypeScript 6                   |
| Build       | Vite 8                                    |
| Styling     | Tailwind CSS v4 (theme via `@theme`)      |
| Animation   | GSAP 3 + `@gsap/react` (`useGSAP` hook)  |
| Linter      | oxlint                                    |
| Package Mgr | pnpm                                      |

## Struktur Project

```
src/
├── App.tsx                  # Root component, state management, page routing (Terminal/Roster)
├── main.tsx                 # React entry point
├── index.css                # Tailwind imports, design tokens (@theme), scrollbar, keyframes
├── constants.ts             # Reusable Tailwind class strings (button styles, exam ratings)
├── types.ts                 # Semua TypeScript interfaces (Operator, OperatorVariant, Skill, Module, dll.)
├── data/
│   ├── operators.ts         # Array OPERATORS[] — semua data operator hardcoded di sini
│   └── factionThemes.ts     # Mapping faction → accent/secondary RGB colors untuk dynamic theming
├── components/
│   ├── SplashScreen.tsx     # Layar pembuka "Click to Enter"
│   ├── CharacterArt.tsx     # Tampilan artwork operator (kiri layar)
│   ├── OperatorHud.tsx      # HUD info operator: level, class, nama, rarity (kiri bawah)
│   ├── SkinSelector.tsx     # Tombol pilih skin operator (kiri atas)
│   ├── TopBar.tsx           # Mute button + "RHODES ISLAND" badge (kanan atas)
│   ├── NavigationArrows.tsx # Tombol navigasi antar operator (panah kiri/kanan)
│   ├── OperatorRoster.tsx   # Halaman roster/grid seleksi operator
│   ├── panels/
│   │   ├── index.ts             # Registry PANEL_CONFIGS — mapping panel id ke component
│   │   ├── AttributePanel.tsx   # Stats HP/ATK/DEF/RES + attack range grid
│   │   ├── SkillsPanel.tsx      # Daftar skill operator
│   │   ├── TalentsPanel.tsx     # Daftar talent
│   │   ├── TraitPanel.tsx       # Trait + class info
│   │   ├── ModulesPanel.tsx     # Module equipment
│   │   ├── ProfilePanel.tsx     # Info personal (race, birthplace, dll.)
│   │   ├── PhysicalExamPanel.tsx# Physical exam ratings
│   │   ├── VoicePanel.tsx       # Voice actor info (JP/CN/EN/KR)
│   │   └── LorePanel.tsx        # Operator lore/story
│   └── ui/
│       ├── Stars.tsx        # Rarity stars component
│       ├── StatBar.tsx      # Animated stat bar
│       ├── ExamBar.tsx      # Physical exam bar
│       └── RangeGrid.tsx    # Attack range grid visualizer
public/
├── favicon.svg
├── icons.svg
├── Arknights_logo.webp
├── audio/
│   ├── Arknights OST.mp3           # BGM loop
│   ├── enter_effect.mp3            # SFX masuk
│   ├── futuristic_click.mp3        # SFX klik
│   └── glitch_transition.mp3       # SFX transisi skin/operator
├── icons/
│   ├── classes/                    # Icon class (caster-class.png, guard-class.png, dll.)
│   ├── branches/                   # Icon branch (core-caster-branch.png, marksman-branch.png, dll.)
│   └── factions/                   # Icon faction (rhodes-island.png, elite-op.png, dll.)
└── operators/
    └── {nama-operator}/            # Satu folder per operator
        ├── base.png                # Artwork base/E0
        ├── e1.png / e2.png         # Artwork elite promotion (jika ada)
        ├── skin1.png, skin2.png    # Artwork skin alternatif
        ├── skill-1.png, skill-2.png, skill-3.png  # Skill icons
        ├── chibi.webm              # Chibi animation base
        └── chibi-skin1.webm        # Chibi animation per skin
```

## Data Model

Semua data operator disimpan di `src/data/operators.ts` sebagai array `OPERATORS[]` bertipe `Operator[]`.

### Interface Operator (src/types.ts)

```typescript
interface OperatorCV {
  JP: string
  CN: string
  EN: string
  KR: string
}

interface OperatorStats {
  hp: number
  atk: number
  def: number
  res: number
  block: number
  cost: number
  aspd: string     // "2.1s"
  rdp: string      // "70s"
}

interface AttackRange {
  base: number[][]  // Grid 2D: 0=kosong, 1=tile, 2=operator position
  e1: number[][]
}

interface Talent {
  name: string
  desc: string
  elite: string    // "E0" | "E1" | "E2"
}

interface Skill {
  name: string
  icon: string     // "/operators/{nama}/skill-1.png"
  activation: string  // "Manual" | "Auto"
  recovery: string    // "Auto" | "Offensive" | "Defensive" | "Auto Recovery" | "Offensive Recovery"
  desc: string
  spInit: number
  sp: number
  rank: string     // "M3" | "Rank 7"
  dur?: string     // "30s" (opsional)
  note?: string    // Catatan tambahan (opsional)
}

interface ModuleStage {
  stage: number
  hp?: string
  atk?: string
  def?: string
  res?: string
  aspd?: string
  effect: string
}

type OperatorModule = BaseModule | StagedModule
// BaseModule: { code, name, desc }
// StagedModule: { code, name, stages: ModuleStage[] }

interface OperatorSkin {
  id: string       // "base" | "e1" | "e2" | "skin1" | "skin2" | ...
  label: string    // "Base" | "Elite 2" | "Nama Skin"
  src: string      // "/operators/{nama}/base.png"
  chibiSrc: string // "/operators/{nama}/chibi.webm"
}

interface OperatorVariant {
  class: string
  branch: string
  position: string
  trait: string
  stats: OperatorStats
  range: AttackRange
  talents: Talent[]
  skills: Skill[]
  modules: Record<string, OperatorModule>
  classIcon: string
  branchIcon: string
  skins: OperatorSkin[]
}

interface Operator {
  name: string
  fileNo: string
  class: string
  branch: string
  rarity: number        // 1-6
  level: number
  elite: number         // 0, 1, atau 2
  trust: number

  faction: string
  position: string      // "Ranged" | "Melee"
  race: string
  gender: string
  birthplace: string
  birthday: string
  height: string
  combatExp: string
  infectionStatus: string
  illustrator: string

  cv: OperatorCV
  trait: string
  stats: OperatorStats
  range: AttackRange
  physicalExam: Record<string, string>
  talents: Talent[]
  skills: Skill[]
  modules: Record<string, OperatorModule>

  lore: string
  classIcon: string     // "/icons/classes/{class}-class.png"
  branchIcon: string    // "/icons/branches/{branch}-branch.png"
  factionIcon: string   // "/icons/factions/{faction}.png"
  skins: OperatorSkin[]
  variants?: OperatorVariant[]  // Untuk operator multi-class (contoh: Amiya Caster/Guard/Medic)
}
```

### Faction Themes (src/data/factionThemes.ts)

Mapping faction name → RGB accent/secondary colors. Digunakan untuk dynamic theming berdasarkan operator aktif.

```typescript
interface FactionTheme {
  accent: [number, number, number]    // RGB tuple
  secondary: [number, number, number]
}

getFactionTheme(faction: string): FactionTheme
```

---

## Cara Scraping Data Operator

Saat ini data operator di-hardcode manual di `src/data/operators.ts`. Untuk menambahkan operator baru, ikuti langkah berikut:

### Sumber Data

1. **Aceship Toolbox** — `https://aceship.github.io/AN-EN-Tags/akhrchars.html`
   - Stats, skills, talents, modules, range, trait
   - Paling lengkap dan akurat

2. **Arknights Wiki (Fandom)** — `https://arknights.fandom.com/wiki/{Operator_Name}`
   - Lore, profile info, voice actor, illustrator
   - Physical exam data

3. **PRTS Wiki** — `https://prts.wiki/w/{Operator_Name_CN}`
   - Data CN/original, bisa cross-check

4. **Penguin Statistics / Gamepress** — sebagai referensi tambahan

### Langkah Menambah Operator Baru

#### 1. Siapkan data dasar
Buka halaman operator di Aceship/Wiki dan catat:
- Nama, File No., class, branch, rarity
- Level/elite/trust yang ingin ditampilkan
  - **6-star**: E2 LV90 Trust 200
  - **5-star**: E2 LV80 Trust 200
  - **4-star**: E2 LV70 Trust 200
  - **3-star**: E1 LV55 Trust 200
- Faction, position, race, gender, birthplace, birthday, height, combat experience
- Infection status, illustrator

#### 2. Ambil stats pada level target
Dari Aceship, ambil stats pada level target sesuai rarity:
- HP, ATK, DEF, RES (angka)
- Block count, DP cost (angka)
- ASPD dan redeploy time (string, contoh: `"2.1s"`, `"70s"`)

#### 3. Ambil attack range
Range direpresentasikan sebagai grid 2D:
- `0` = tile kosong (tidak ditampilkan)
- `1` = tile aktif (area attack)
- `2` = posisi operator

Contoh Rosmontis E1:
```
[0,0,1,1,1]     .  .  ■  ■  ■
[0,1,1,1,1]     .  ■  ■  ■  ■
[2,1,1,1,1]  →  ★  ■  ■  ■  ■
[0,1,1,1,1]     .  ■  ■  ■  ■
[0,0,1,1,1]     .  .  ■  ■  ■
```

#### 4. Ambil physical exam
6 parameter, masing-masing berupa rating string:
- `"Flawed"` | `"Normal"` | `"Standard"` | `"Excellent"` | `"Outstanding"` | `"■■"`

Field: Physical Strength, Mobility, Endurance, Tactical Acumen, Combat Skill, Originium Arts

#### 5. Ambil talents
Array objek dengan format:
```typescript
{ name: "Nama Talent", desc: "Deskripsi efek", elite: "E2" }
```

#### 6. Ambil skills
Setiap skill membutuhkan:
```typescript
{
  name: "Nama Skill",
  icon: "/operators/{nama}/skill-N.png",
  activation: "Manual" | "Auto",
  recovery: "Auto" | "Offensive" | "Defensive" | "Auto Recovery" | "Offensive Recovery",
  desc: "Deskripsi efek skill pada rank target",
  spInit: number,
  sp: number,
  rank: "M3" | "Rank 7",      // M3 untuk 4-star+, Rank 7 untuk 3-star
  dur?: "30s",                 // Opsional jika skill punya durasi
  note?: "Catatan tambahan"    // Opsional
}
```

#### 7. Ambil modules
Format module ada 2 tipe:

**Base module (Original):**
```typescript
{ code: "Original", name: "Nama Badge", desc: "Appointed as..." }
```

**Staged module (dengan upgrade):**
```typescript
{
  code: "BOM-X",
  name: "Nama Module",
  stages: [
    { stage: 1, hp?: "+175", atk?: "+55", effect: "Deskripsi efek" },
    { stage: 2, ... },
    { stage: 3, ... },
  ]
}
```

**Catatan:** 3-star operator biasanya tidak punya module, gunakan `modules: {}`.

#### 8. Ambil lore
Copy lore/story quote dari Wiki. Gunakan template literal (`backtick`) karena biasanya multi-line dengan line breaks `\n`.

#### 9. Siapkan asset gambar — WAJIB DOWNLOAD

**⚠️ PENTING: Jangan hanya membuat entry data tanpa mendownload asset. Setiap operator HARUS memiliki file gambar dan chibi yang sudah didownload ke folder `public/operators/{nama}/`.**

##### Struktur folder asset per operator

Buat folder `public/operators/{nama-lowercase}/` dan download semua file berikut:

**Artwork operator (PNG):**
- `base.png` — artwork base/E0 (WAJIB)
- `e1.png` — artwork Elite 1 (jika ada, biasanya hanya 4-star+)
- `e2.png` — artwork Elite 2 (jika ada, biasanya hanya 4-star+)
- `skin1.png`, `skin2.png`, dll. — artwork skin alternatif

**Skill icons (PNG):**
- `skill-1.png`, `skill-2.png`, `skill-3.png` — icon untuk setiap skill

**Chibi animations (WEBM):**
- `chibi.webm` — chibi base animation (WAJIB)
- `chibi-skin1.webm`, `chibi-skin2.webm`, dll. — chibi untuk setiap skin

##### Sumber download asset

**Operator artwork:**
- Aceship: `https://aceship.github.io/AN-EN-Tags/img/characters/{character_id}_1.png` (base), `_2.png` (E2)
- PRTS Wiki: halaman operator → klik gambar artwork
- Arknights Wiki: halaman operator → gallery section

**Skill icons:**
- Aceship: `https://aceship.github.io/AN-EN-Tags/img/skills/skill_icon_{skill_id}.png`
- PRTS Wiki: halaman skill → icon gambar

**Chibi animations:**
- PRTS Wiki: `https://prts.wiki/` → halaman operator → spine/chibi section
- Alternatif: extract dari game data menggunakan Spine viewer

##### Cara download menggunakan Claude

Gunakan `firecrawl-scrape` untuk scrape halaman wiki yang memiliki URL gambar, lalu gunakan `curl` atau `Invoke-WebRequest` di PowerShell untuk mendownload file:

```powershell
# Buat folder operator
New-Item -ItemType Directory -Force "public/operators/{nama}"

# Download artwork
Invoke-WebRequest -Uri "{URL_GAMBAR}" -OutFile "public/operators/{nama}/base.png"

# Download skill icons
Invoke-WebRequest -Uri "{URL_SKILL_ICON}" -OutFile "public/operators/{nama}/skill-1.png"

# Download chibi (jika tersedia sebagai webm/gif)
Invoke-WebRequest -Uri "{URL_CHIBI}" -OutFile "public/operators/{nama}/chibi.webm"
```

**Jika chibi webm tidak tersedia untuk di-download**, gunakan chibi dari operator lain yang sudah ada sebagai placeholder, dan beri catatan di commit message bahwa chibi perlu diganti.

##### Icon class, branch, dan faction

Cek apakah icon sudah ada sebelum download:
- Class icon: `public/icons/classes/{class}-class.png` — kemungkinan sudah ada
- Branch icon: `public/icons/branches/{branch}-branch.png` — download jika branch baru
- Faction icon: `public/icons/factions/{faction}.png` — download jika faction baru

##### Path reference dalam data

Semua path di data operator menggunakan format path relatif dari `public/`:

```typescript
// Artwork & chibi
skins: [
  { id: 'base', label: 'Base', src: '/operators/{nama}/base.png', chibiSrc: '/operators/{nama}/chibi.webm' },
  { id: 'e2', label: 'Elite 2', src: '/operators/{nama}/e2.png', chibiSrc: '/operators/{nama}/chibi.webm' },
  { id: 'skin1', label: 'Nama Skin', src: '/operators/{nama}/skin1.png', chibiSrc: '/operators/{nama}/chibi-skin1.webm' },
]

// Skill icons
skills: [
  { icon: '/operators/{nama}/skill-1.png', ... },
]

// Class/branch/faction icons
classIcon: '/icons/classes/{class}-class.png'
branchIcon: '/icons/branches/{branch}-branch.png'
factionIcon: '/icons/factions/{faction}.png'
```

#### 10. Update faction theme (jika faction baru)
Jika operator punya faction yang belum ada di `src/data/factionThemes.ts`, tambahkan entry baru:
```typescript
'Nama Faction': { accent: [R, G, B], secondary: [R, G, B] },
```

#### 11. Tambahkan entry ke OPERATORS array
Buka `src/data/operators.ts` dan tambahkan objek baru ke array `OPERATORS[]` mengikuti format operator yang sudah ada.

### Tips Scraping dengan AI/Claude

Ketika menggunakan Claude untuk membantu scraping:
1. Buka halaman wiki operator di browser
2. Minta Claude scrape menggunakan skill `firecrawl-scrape` dengan URL wiki operator
3. Claude akan mengekstrak data dan memformatnya sesuai interface `Operator`
4. **Claude HARUS juga mendownload semua asset** (artwork, skill icons, chibi) ke `public/operators/{nama}/`
5. Review data yang di-generate, pastikan angka stats dan deskripsi skill akurat
6. Cross-check dengan Aceship untuk akurasi stats

**⚠️ REMINDER UNTUK CLAUDE: Ketika diminta menambahkan operator baru, SELALU lakukan 3 hal ini:**
1. **Scrape data** dari wiki/aceship
2. **Download SEMUA asset** (artwork base minimal, skill icons, chibi) ke `public/operators/{nama}/`
3. **Tambahkan entry data** ke `operators.ts`

**Jangan pernah hanya menambahkan data tanpa mendownload asset — ini akan menyebabkan gambar broken di UI.**

### Operator dengan Variants (Multi-class)

Beberapa operator memiliki lebih dari satu class (contoh: Amiya Caster/Guard/Medic). Untuk operator ini, gunakan field `variants`:

```typescript
{
  name: 'Amiya',
  class: 'Caster',          // Class utama
  // ... data utama ...
  variants: [
    {
      class: 'Guard',
      branch: 'Arts Fighter',
      position: 'Melee',
      trait: '...',
      stats: { ... },
      range: { ... },
      talents: [...],
      skills: [...],
      modules: { ... },
      classIcon: '/icons/classes/guard-class.png',
      branchIcon: '/icons/branches/arts-fighter-branch.png',
      skins: [
        { id: 'base', label: 'Base', src: '/operators/amiya/guard-base.png', chibiSrc: '/operators/amiya/guard-chibi.webm' },
      ],
    },
  ],
}
```

Setiap variant punya data combat sendiri (stats, skills, talents, modules, skins) tapi berbagi data identitas (name, faction, race, cv, lore, physicalExam, dll.) dari operator utama.

### Checklist Penambahan Operator

- [ ] Data dasar (nama, class, rarity, dll.) terisi lengkap
- [ ] Stats sesuai level target (E2 LV90 / E2 LV80 / E1 LV55 tergantung rarity)
- [ ] Attack range base dan E1/E2 benar
- [ ] Physical exam 6 parameter terisi
- [ ] Semua talent tercatat
- [ ] Semua skill dengan detail SP, durasi, deskripsi
- [ ] Modules (original + upgrade) terisi (atau `{}` untuk 3-star)
- [ ] Lore/story quote sudah di-copy
- [ ] **Asset artwork sudah di-download ke `public/operators/{nama}/`**
- [ ] **Skill icons sudah di-download ke `public/operators/{nama}/`**
- [ ] **Chibi animations sudah di-download ke `public/operators/{nama}/`**
- [ ] **Class/branch/faction icons tersedia di `public/icons/`**
- [ ] Faction theme ditambahkan jika faction baru
- [ ] Entry ditambahkan ke `OPERATORS[]`
- [ ] Build berhasil tanpa TypeScript error (`pnpm build`)
- [ ] Tampilan di browser sudah benar (navigasi, skin selector, semua panel)

---

## Coding Rules

### Naming Convention

**Gunakan nama variabel yang deskriptif dan readable. Hindari single-character naming.**

```typescript
// JANGAN
const o = OPERATORS[0]
const s = operator.skills
const i = 0
arr.map((v, i) => ...)
arr.filter(x => x.rarity > 4)

// LAKUKAN
const activeOperator = OPERATORS[0]
const operatorSkills = operator.skills
const startIndex = 0
skills.map((skill, skillIndex) => ...)
operators.filter(operator => operator.rarity > 4)
```

**Aturan detail:**
- Nama variabel minimal 2 kata atau 1 kata yang jelas maknanya (`count`, `index`, `total` — OK; `c`, `i`, `t` — TIDAK)
- Loop variable: gunakan nama yang mendeskripsikan item (`skill`, `module`, `talent` — bukan `s`, `m`, `t`)
- Index variable: gunakan `{item}Index` (`skillIndex`, `operatorIndex` — bukan `i`, `j`, `k`)
- Boolean: prefix dengan `is`, `has`, `should`, `can` (`isExpanded`, `hasModules`)
- Handler function: prefix dengan `handle` atau aksi (`handleClick`, `expandPanel`, `switchSkin`)
- Ref: suffix dengan `Ref` (`artRef`, `containerRef`, `audioRef`)
- Callback props: prefix dengan `on` (`onSkinChange`, `onToggleMute`, `onEnter`)

### TypeScript

- Selalu definisikan interface untuk props component
- Gunakan `type` import: `import type { Operator } from '../types'`
- Jangan gunakan `any` — definisikan tipe yang proper
- Union types untuk nilai yang terbatas: `"Manual" | "Auto"` bukan `string`

### Component Pattern

- Satu component per file
- Nama file = nama component (PascalCase)
- Props interface di atas component
- Export named, bukan default (kecuali `App.tsx`)
- `forwardRef` untuk component yang perlu expose DOM ref

### File Organization

- Data statis → `src/data/`
- Tipe/interface → `src/types.ts`
- Konstanta UI → `src/constants.ts`
- Component reusable kecil → `src/components/ui/`
- Panel content → `src/components/panels/`
- Asset statis → `public/` (dengan subdirectory terorganisir)
  - Operator assets → `public/operators/{nama}/`
  - Icon assets → `public/icons/{classes,branches,factions}/`
  - Audio assets → `public/audio/`
