# Arknights Portfolio — Project Context

## Overview

Website portfolio bertema **Arknights Operator Terminal** — menampilkan data operator dari game Arknights dalam UI yang terinspirasi dari in-game terminal/lobby. Dibangun dengan Next.js + React + TypeScript + Tailwind CSS v4 + GSAP.

## Tech Stack

| Layer       | Tech                                         |
| ----------- | -------------------------------------------- |
| Framework   | Next.js 15 (App Router, Turbopack dev)       |
| UI          | React 19 + TypeScript                        |
| Styling     | Tailwind CSS v4 (theme via `@theme`)         |
| Animation   | GSAP 3 + `@gsap/react` (`useGSAP` hook)     |
| Linter      | oxlint                                       |
| Package Mgr | pnpm                                         |

## Routing (App Router)

```
src/app/
├── layout.tsx               # Root layout — fonts (Rajdhani + Inter), AppShell wrapper
├── globals.css              # Tailwind imports, design tokens (@theme), scrollbar, keyframes
├── page.tsx                 # "/" → Dashboard (Command Center)
├── operator/
│   ├── page.tsx             # "/operator" → SPA: OperatorList atau OperatorTerminal (via ?operator= param)
│   └── [name]/page.tsx      # "/operator/{slug}" → redirect ke "/operator?operator={slug}" (backward compat)
└── calendar/
    └── page.tsx             # "/calendar" → Calendar
```

### SPA Routing Operator

Operator detail ditangani sebagai SPA di `/operator` melalui query param:

- **`/operator`** — tampilkan `OperatorList` (roster grid)
- **`/operator?operator={slug}`** — tampilkan `OperatorTerminal` untuk operator tersebut
- **`/operator?operator={slug}&alter=true`** — tampilkan alter form operator

`OperatorRouter` (`src/components/OperatorRouter.tsx`) adalah client component yang membaca `useSearchParams()` dan merender `OperatorList` atau `OperatorTerminal` berdasarkan ada/tidaknya `?operator=` param.

Navigasi next/prev antar operator menggunakan `window.history.replaceState` untuk update URL tanpa trigger re-render/re-mount — sehingga entrance animation tidak main ulang, hanya glitch art yang muncul.

## Struktur Project

```
src/
├── app/                     # Next.js App Router pages (lihat Routing di atas)
├── components/
│   ├── AppShell.tsx         # Root client shell — context provider (mute, sidebar, hasEntered), splash screen, sidebar, audio
│   ├── SplashScreen.tsx     # Layar pembuka "Click to Enter"
│   ├── Dashboard.tsx        # Halaman utama (Command Center) — stats strip, supply schedule dengan gambar misi
│   ├── SideMenu.tsx         # Sidebar navigasi — icon wiki (Base_icon.svg, Operator_icon.svg), collapsible, mobile responsive
│   ├── Footer.tsx           # Footer disclaimer
│   ├── OperatorRouter.tsx   # SPA router — baca ?operator= param, render OperatorList atau OperatorTerminal
│   ├── OperatorList.tsx     # Halaman roster/grid seleksi operator (pengganti OperatorRoster)
│   ├── OperatorTerminal.tsx # Halaman detail operator — artwork, HUD, panel tabs
│   ├── CharacterArt.tsx     # Tampilan artwork operator (kiri layar)
│   ├── OperatorHud.tsx      # HUD info operator: level, class, nama, rarity (kiri bawah)
│   ├── SkinSelector.tsx     # Tombol pilih skin operator (kiri atas)
│   ├── TopBar.tsx           # Mute button + "RHODES ISLAND" badge (kanan atas)
│   ├── NavigationArrows.tsx # Tombol navigasi antar operator (panah kiri/kanan)
│   ├── IllustratorCredit.tsx# Credit illustrator
│   ├── Calendar.tsx         # Kalender event
│   ├── OperatorRoster.tsx   # (legacy) Grid seleksi operator
│   ├── panels/
│   │   ├── index.ts             # Registry PANEL_CONFIGS — mapping panel id ke component
│   │   ├── AttributePanel.tsx   # Stats HP/ATK/DEF/RES + attack range grid
│   │   ├── SkillsPanel.tsx      # Daftar skill operator
│   │   ├── TalentsPanel.tsx     # Daftar talent + summon unit info
│   │   ├── TraitPanel.tsx       # Trait + class info
│   │   ├── ModulesPanel.tsx     # Module equipment
│   │   ├── ProfilePanel.tsx     # Info personal (race, birthplace, dll.) + lore + operator records (accordion)
│   │   ├── PhysicalExamPanel.tsx# Physical exam ratings
│   │   ├── VoicePanel.tsx       # Voice actor info (JP/CN/EN/KR)
│   │   └── StoryPanel.tsx       # Operator story (wiki background/overview)
│   └── ui/
│       ├── Stars.tsx        # Rarity stars component
│       ├── StatBar.tsx      # Animated stat bar
│       ├── ExamBar.tsx      # Physical exam bar
│       └── RangeGrid.tsx    # Attack range grid visualizer
├── data/
│   ├── operators.ts         # Array OPERATORS[] — semua data operator hardcoded di sini
│   └── factionThemes.ts     # Mapping faction → accent/secondary RGB colors untuk dynamic theming
├── lib/
│   ├── sound.ts             # playClick() — SFX utility
│   ├── operators.ts         # toSlug(), findOperatorIndexBySlug() — URL slug helpers
│   └── calendar.ts          # Calendar utilities
├── types.ts                 # Semua TypeScript interfaces (Operator, OperatorVariant, Skill, Module, dll.)
├── types/
│   └── css.d.ts             # CSS module type declarations
└── constants.ts             # Reusable Tailwind class strings (button styles, exam ratings)

public/
├── Arknights_logo.webp
├── Base_icon.svg            # RIIC icon dari wiki — dipakai di sidebar (Command Center)
├── Operator_icon.svg        # Operator icon dari wiki — dipakai di sidebar (Operator List)
├── favicon.svg
├── icons.svg
├── audio/
│   ├── Arknights OST.mp3           # BGM loop
│   ├── enter_effect.mp3            # SFX masuk
│   ├── futuristic_click.mp3        # SFX klik
│   └── glitch_transition.mp3       # SFX transisi skin/operator
├── icons/
│   ├── classes/                    # Icon class (caster-class.png, guard-class.png, dll.)
│   ├── branches/                   # Icon branch (core-caster-branch.png, marksman-branch.png, dll.)
│   └── factions/                   # Icon faction (rhodes-island.png, elite-op.png, dll.)
├── missions/                       # Supply operation banner images dari wiki
│   ├── Aerial_Threat.png
│   ├── Cargo_Escort.png
│   ├── Fearless_Protection.png
│   ├── Fierce_Attack.png
│   ├── Resource_Search.png
│   ├── Solid_Defense.png
│   ├── Tactical_Drill.png
│   ├── Tough_Siege.png
│   └── Unstoppable_Charge.png
└── operators/
    └── {nama-operator}/            # Satu folder per operator
        ├── base.png                # Artwork base/E0
        ├── e1.png / e2.png         # Artwork elite promotion (jika ada)
        ├── skin1.png, skin2.png    # Artwork skin alternatif
        ├── skill-1.png, skill-2.png, skill-3.png  # Skill icons
        ├── chibi.webm              # Chibi animation base
        └── chibi-skin1.webm        # Chibi animation per skin
```

## AppShell & State Management

`AppShell` (`src/components/AppShell.tsx`) adalah root client component yang membungkus seluruh app. Menyediakan context via `useApp()`:

```typescript
interface AppContextType {
  isMuted: boolean          // Status mute audio
  toggleMute: () => void
  hasEntered: boolean       // Apakah user sudah melewati splash screen
  sidebarOpen: boolean      // Status sidebar desktop
  toggleSidebar: () => void
}
```

Flow: SplashScreen → user click → `hasEntered = true` → BGM mulai → content tampil dengan GSAP animation.

## Sidebar Navigation

`SideMenu` (`src/components/SideMenu.tsx`) menggunakan icon dari Arknights wiki:
- **Command Center** (`/`) — `Base_icon.svg` (RIIC icon)
- **Operator List** (`/operator`) — `Operator_icon.svg`
- **Calendar** (`/calendar`) — custom SVG
- Collapsible di desktop, slide-in drawer di mobile

## Dashboard (Command Center)

`Dashboard` (`src/components/Dashboard.tsx`) — halaman utama setelah splash screen:
- **Stats strip**: total operators, classes, factions (dihitung dari `OPERATORS[]`)
- **Supply Schedule**: grid 8 misi harian dengan banner images dari wiki
  - Menampilkan hari buka masing-masing misi (day dots Mon-Sun)
  - Misi yang buka hari ini: gambar terang, accent glow, pulsing dot
  - Misi yang tutup: grayscale, dimmed
  - Futuristic overlays: scan lines, corner HUD marks, gradient fade
  - Data schedule hardcoded di `DAILY_MISSIONS[]`

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

interface OperatorRecord {
  title: string         // "Clinical Analysis", "Class Conversion Record 1", "???", dll.
  content: string       // Isi record
}

interface OperatorSummon {
  name: string       // Nama summon unit
  icon: string       // Path ke icon summon ("/operators/{nama}/{summon}.png")
  position: string   // "Melee" | "Ranged"
  trait: string      // Trait summon unit
  stats: OperatorStats  // Stats summon pada level max operator
  range: number[][]  // Attack range grid (format sama dengan operator)
  note?: string      // Info tambahan (healable, invulnerable, dll.)
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
  story?: string
  records?: OperatorRecord[]
  classIcon: string
  branchIcon: string
  factionIcon: string
  skins: OperatorSkin[]
  variants?: OperatorVariant[]
  summon?: OperatorSummon
  alter?: Operator       // Alter version (data operator dengan class berbeda, bukan variant)
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

2. **Arknights Wiki** — `https://arknights.wiki.gg/wiki/{Operator_Name}`
   - Lore, profile info, voice actor, illustrator
   - Physical exam data
   - Asset gambar (artwork, skill icon, chibi)
   - Supply operation banner images

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
Copy lore/story quote dari Wiki (bagian Profile di halaman File). Gunakan template literal (`backtick`) karena biasanya multi-line dengan line breaks `\n`.

#### 8b. Ambil story (opsional)
Scrape halaman Story wiki: `https://arknights.wiki.gg/wiki/{OperatorName}/Story`
Ambil hanya bagian overview/background di atas (sebelum section "Plot"). Ini adalah ringkasan karakter yang mencakup latar belakang, kekuatan, dan peran mereka.

#### 8c. Ambil operator records (opsional)
Scrape halaman File wiki: `https://arknights.wiki.gg/wiki/{OperatorName}/File`
Ambil semua section selain Profile (yang sudah jadi `lore`):
- **Clinical Analysis** — data medis, Cell-Originium Assimilation, Blood Originium-Crystal Density
- **Class Conversion Record 1/2** — cerita latar terkait class conversion (jika ada)
- **???** — record yang belum ter-unlock di game, tetap masukkan apa adanya

Format sebagai array `OperatorRecord[]`:
```typescript
records: [
  { title: 'Clinical Analysis', content: `...` },
  { title: 'Class Conversion Record 1', content: `...` },
  { title: '???', content: `??????` },
]
```

Records ditampilkan sebagai accordion di **ProfilePanel** — default tertutup, hanya satu yang bisa terbuka pada satu waktu.

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

**⚠️ Sumber utama untuk SEMUA asset (artwork, skill icon, chibi): Arknights Wiki (`arknights.wiki.gg`)**

**Operator artwork (PNG):**
URL pattern: `https://arknights.wiki.gg/images/{Nama_File}.png`
- Base: `https://arknights.wiki.gg/images/{OperatorName}.png` (contoh: `Deepcolor.png`)
- E2: `https://arknights.wiki.gg/images/{OperatorName}_Elite_2.png`
- Skin: `https://arknights.wiki.gg/images/{OperatorName}_Skin_1.png`, `_Skin_2.png`, dll.
- URL bisa didapat dari scrape halaman operator utama (`/wiki/{OperatorName}`) — cari link gambar di bagian artwork tabs

**Skill icons (PNG):**
URL pattern: `https://arknights.wiki.gg/images/Skill-{OperatorName}{N}.png`
- Contoh: `Skill-Deepcolor1.png`, `Skill-Deepcolor2.png`
- URL bisa didapat dari scrape halaman operator utama — cari di bagian Skills section

**Chibi animations (WEBM) — WAJIB GUNAKAN `firecrawl interact`:**
Chibi animations TIDAK bisa ditemukan via scrape biasa karena di-render client-side via JavaScript/Spine viewer. Langkah wajib:
1. Scrape halaman Gallery: `firecrawl scrape "https://arknights.wiki.gg/wiki/{OperatorName}/Gallery"`
2. Gunakan `firecrawl interact` untuk menemukan URL webm: `firecrawl interact --prompt "Find the Sprites section. Get the URLs of all sprite/chibi animation webm files."`
3. URL yang didapat biasanya berformat: `https://arknights.wiki.gg/images/{OperatorName}.webm` (base) dan `https://arknights.wiki.gg/images/{OperatorName}_Skin_1.webm` (skin)
4. `firecrawl interact stop` untuk menutup session

**⚠️ JANGAN coba URL chibi dari PRTS Wiki, Aceship, atau URL pattern yang ditebak — hampir selalu 404. Selalu gunakan `firecrawl interact` pada halaman Gallery wiki.gg.**

**Summon unit icon (jika operator punya summon):**
- URL pattern: `https://arknights.wiki.gg/images/{SummonName}.png` (contoh: `Tentacle.png`)
- Didapat dari scrape halaman operator utama atau halaman Summon

**In-game icon (SVG) dari wiki homepage:**
- Operator icon: `https://arknights.wiki.gg/images/Operator_iconv2.svg`
- RIIC/Base icon: `https://arknights.wiki.gg/images/Base_iconv2.svg`
- Supply operation banners: `https://arknights.wiki.gg/images/{Mission_Name}.png` (contoh: `Aerial_Threat.png`)

##### Cara download menggunakan Claude

```bash
# Buat folder operator
mkdir -p public/operators/{nama}

# Download artwork (gunakan curl, bukan Invoke-WebRequest)
curl -sL "https://arknights.wiki.gg/images/{OperatorName}.png" -o public/operators/{nama}/base.png
curl -sL "https://arknights.wiki.gg/images/{OperatorName}_Elite_2.png" -o public/operators/{nama}/e2.png
curl -sL "https://arknights.wiki.gg/images/{OperatorName}_Skin_1.png" -o public/operators/{nama}/skin1.png

# Download skill icons
curl -sL "https://arknights.wiki.gg/images/Skill-{OperatorName}1.png" -o public/operators/{nama}/skill-1.png
curl -sL "https://arknights.wiki.gg/images/Skill-{OperatorName}2.png" -o public/operators/{nama}/skill-2.png

# Download chibi — URL didapat dari firecrawl interact pada halaman Gallery
curl -sL "https://arknights.wiki.gg/images/{OperatorName}.webm" -o public/operators/{nama}/chibi.webm
curl -sL "https://arknights.wiki.gg/images/{OperatorName}_Skin_1.webm" -o public/operators/{nama}/chibi-skin1.webm

# Download summon icon (jika ada)
curl -sL "https://arknights.wiki.gg/images/{SummonName}.png" -o public/operators/{nama}/{summon-name}.png

# Download wiki UI icons
curl -sL "https://arknights.wiki.gg/images/Operator_iconv2.svg" -o public/Operator_icon.svg
curl -sL "https://arknights.wiki.gg/images/Base_iconv2.svg" -o public/Base_icon.svg

# Download supply mission banners
curl -sL "https://arknights.wiki.gg/images/{Mission_Name}.png" -o public/missions/{Mission_Name}.png
```

**Selalu verifikasi ukuran file hasil download > 0 bytes. Jika 0 atau sangat kecil, URL salah.**

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
1. Scrape halaman wiki operator: `firecrawl scrape "https://arknights.wiki.gg/wiki/{OperatorName}"` — untuk data stats, skills, talents, modules, profile
2. Scrape halaman File: `firecrawl scrape "https://arknights.wiki.gg/wiki/{OperatorName}/File"` — untuk lore (Profile section) dan operator records (Clinical Analysis, Class Conversion, dll.)
3. Scrape halaman Story: `firecrawl scrape "https://arknights.wiki.gg/wiki/{OperatorName}/Story"` — untuk story (overview section di atas, BUKAN plot episodes)
4. **Download artwork & skill icons** dari URL yang didapat di langkah 1 (gunakan `curl -sL`)
5. **Download chibi animations via `firecrawl interact`** pada halaman Gallery — ini WAJIB dilakukan terpisah karena URL chibi tidak muncul di scrape biasa
6. Jika operator punya summon, scrape halaman summon: `firecrawl scrape "https://arknights.wiki.gg/wiki/{SummonName}"` — untuk stats summon unit
7. Review data yang di-generate, pastikan angka stats dan deskripsi skill akurat

**⚠️ REMINDER UNTUK CLAUDE: Ketika diminta menambahkan operator baru, SELALU lakukan 4 hal ini:**
1. **Scrape data** dari wiki
2. **Download artwork & skill icons** dari wiki (URL langsung via `curl`)
3. **Download chibi animations** via `firecrawl interact` pada halaman Gallery — JANGAN skip langkah ini, JANGAN tebak URL
4. **Tambahkan entry data** ke `operators.ts`

**Jangan pernah hanya menambahkan data tanpa mendownload asset — ini akan menyebabkan gambar broken di UI.**
**Jangan pernah pakai placeholder chibi dari operator lain — selalu download chibi asli via interact.**

### Operator dengan Summon (Summoner, dll.)

Beberapa operator memiliki summon unit — unit yang bisa di-deploy di battle terpisah dari operator utama (contoh: Deepcolor → Tentacle, Kal'tsit → Mon3tr, Magallan → Soaring Dragon). Untuk operator ini, gunakan field `summon`:

```typescript
{
  name: 'Deepcolor',
  class: 'Supporter',
  branch: 'Summoner',
  trait: 'Deals Arts damage\nCan use Summons in battles',
  // ... data utama ...
  summon: {
    name: 'Tentacle',
    icon: '/operators/deepcolor/tentacle.png',
    position: 'Melee',
    trait: 'Blocks 1 enemy',
    stats: { hp: 2016, atk: 462, def: 335, res: 0, block: 1, cost: 5, aspd: '1.25s', rdp: '10s' },
    range: [[2]],
    note: 'Cannot be actively healed. Deployed through talent Tentacle Summoner.',
  },
}
```

**Sumber data summon:**
- Halaman operator utama di wiki: trait section menyebut summon, talent section menjelaskan mekanisme
- Halaman summon unit dedicated: `https://arknights.wiki.gg/wiki/{SummonName}` — berisi stats, range, trait detail
- Halaman list summon: `https://arknights.wiki.gg/wiki/Summon` — overview semua summon dan operator pemiliknya

**Asset summon:**
- Download icon summon dari wiki: `https://arknights.wiki.gg/images/{SummonName}.png`
- Simpan di folder operator: `public/operators/{nama}/{summon-name-lowercase}.png`

**Rendering:** Info summon ditampilkan di dalam **TalentsPanel** (`src/components/panels/TalentsPanel.tsx`), di bawah daftar talent dengan separator "Summon Unit". Menampilkan icon, nama, position/trait, grid stats 4x2, range grid, dan note.

### Panel Profile & Story

**ProfilePanel** (`src/components/panels/ProfilePanel.tsx`):
- Grid info personal (race, gender, birthplace, dll.)
- Lore text (dari Profile section halaman File wiki)
- Accordion untuk operator records (Clinical Analysis, Class Conversion, dll.) — default tertutup, exclusive toggle (buka satu = tutup yang lain, tutup tidak mempengaruhi yang lain)

**StoryPanel** (`src/components/panels/StoryPanel.tsx`):
- Menampilkan story/overview karakter dari halaman Story wiki (background, kekuatan, peran)
- Fallback "Coming Soon" jika operator belum punya story data
- Card button preview: "This section might contain spoiler" jika ada story, "Coming Soon" jika belum

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

### Operator dengan Alter

Beberapa operator punya alter version — operator terpisah dengan class berbeda yang dibundel dalam satu entry menggunakan field `alter`. Berbeda dengan `variants` (multi-class dalam satu operator), alter adalah operator kedua yang berdiri sendiri tapi ditampilkan bersama (contoh: Amiya base Caster + alter Guard).

```typescript
{
  name: 'Amiya',
  class: 'Caster',
  // ... data utama ...
  alter: {
    name: 'Amiya',
    class: 'Guard',
    // ... data alter lengkap (semua field Operator) ...
  }
}
```

Alter diakses via URL query param: `/operator?operator=amiya&alter=true`

### Checklist Penambahan Operator

- [ ] Data dasar (nama, class, rarity, dll.) terisi lengkap
- [ ] Stats sesuai level target (E2 LV90 / E2 LV80 / E2 LV70 / E1 LV55 tergantung rarity)
- [ ] Attack range base dan E1/E2 benar
- [ ] Physical exam 6 parameter terisi
- [ ] Semua talent tercatat
- [ ] Semua skill dengan detail SP, durasi, deskripsi
- [ ] Modules (original + upgrade) terisi (atau `{}` untuk 3-star)
- [ ] Lore (Profile dari halaman File) sudah di-copy
- [ ] Story (overview dari halaman Story) sudah di-copy (opsional)
- [ ] Operator records (Clinical Analysis, Class Conversion, dll.) sudah di-copy (opsional)
- [ ] **Asset artwork sudah di-download** (base.png, e2.png, skin*.png)
- [ ] **Skill icons sudah di-download** (skill-1.png, skill-2.png, dll.)
- [ ] **Chibi animations sudah di-download via `firecrawl interact`** (chibi.webm, chibi-skin*.webm)
- [ ] **Class/branch/faction icons tersedia di `public/icons/`**
- [ ] Faction theme ditambahkan jika faction baru
- [ ] **Summon data & asset** (jika operator punya summon unit) — icon, stats, range, note
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
- Export named, bukan default
- `forwardRef` untuk component yang perlu expose DOM ref
- Client components harus ditandai `'use client'` di baris pertama

### File Organization

- Pages → `src/app/` (Next.js App Router convention)
- Shared components → `src/components/`
- Data statis → `src/data/`
- Utility functions → `src/lib/`
- Tipe/interface → `src/types.ts`
- Type declarations → `src/types/`
- Konstanta UI → `src/constants.ts`
- Component reusable kecil → `src/components/ui/`
- Panel content → `src/components/panels/`
- Asset statis → `public/` (dengan subdirectory terorganisir)
  - Operator assets → `public/operators/{nama}/`
  - Icon assets → `public/icons/{classes,branches,factions}/`
  - Audio assets → `public/audio/`
  - Mission banners → `public/missions/`
  - Wiki UI icons → `public/*.svg` (Base_icon.svg, Operator_icon.svg)
