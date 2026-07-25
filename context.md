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
│   │   ├── ProfilePanel.tsx     # Info personal (race, birthplace, dll.) + profile + operator records (accordion)
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
  desc: string      // Deskripsi pada level maksimum (M3 untuk 4-star+, Rank 7 untuk 3-star)
  spInit: number
  sp: number
  rank: string     // "M3" | "Rank 7"
  dur?: string     // "30s" (opsional)
  note?: string    // Catatan tambahan (opsional)
  levels?: SkillLevelData[]  // Opsional — breakdown per level (Lv1-7, M1-M3) untuk fitur preview level, lihat bagian di bawah
}

interface SkillLevelData {
  level: '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'M1' | 'M2' | 'M3'
  desc: string
  spInit: number
  sp: number
  dur?: string
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
  how_to_get: string[]  // 1 elemen per metode dari row infobox wiki "How to obtain", lihat langkah 4b — contoh ["Headhunting", "Recruitment"], ["Kernel Headhunting", "Recruitment"], ["Limited Headhunting - Celebration"], ["Credit Store"], dll.

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

  story?: string
  profile?: string
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

#### 4b. Ambil `how_to_get`
**Sumber: row infobox "How to obtain" di halaman wiki utama operator** (`https://arknights.wiki.gg/wiki/{OperatorName}`) — **bukan** field `itemObtainApproach` di `character_table.json` lagi. Row ini tampil langsung di infobox (tabel kanan/atas halaman operator, sebelum tab navigasi Operator/File/Story/dll.), jadi cukup satu scrape halaman utama, tidak perlu buka JSON terpisah untuk field ini.

**Struktur HTML row ini selalu berisi 3 `<div>` berurutan** (lihat raw HTML kalau scrape markdown-nya ambigu/kehilangan struktur):
1. **Div 1 — badge pill** (bisa 0, 1, atau 2 pill, dipisah spasi): `Recruitment` (pill putih), `Headhunting` (pill cyan, untuk operator 3★/4★/5★ non-kernel), `Kernel Headhunting` (pill biru, untuk sebagian besar 6★), atau `Limited Headhunting - {Nama Banner}` (pill merah, contoh `Limited Headhunting - Celebration` untuk Rosmontis/W).
2. **Div 2 — gift pack**, teks bebas kalau ada, contoh `Coexistence (Purestream Pack)` untuk Purestream.
3. **Div 3 — metode lain**, teks bebas kalau ada: nama stage (`TR-8` untuk Kroos), event/episode (`Episode 14 – Secret Place` untuk Civilight Eterna), store (`Purchase Certificate Store` untuk Contrail, `Credit Store` untuk Courier), atau kondisi starter (`Starting Operator; Clear 2-10, 3-8, 4-9, 6-17, and 7-18` untuk Amiya).

**Cara parsing ke `how_to_get: string[]`:** setiap pill di Div 1 jadi satu elemen array, lalu isi Div 2 (kalau tidak kosong) jadi satu elemen, lalu isi Div 3 (kalau tidak kosong) jadi satu elemen — urutan array ikut urutan div (1 → 2 → 3). Ambil teks verbatim persis seperti yang tampil di wiki (termasuk tanda baca, en dash `–`, titel link seperti `TR-8`) — **jangan diringkas, diparafrase, atau digeneralisasi** ke kategori umum. Field ini tetap bertipe `string[]` karena satu operator bisa punya lebih dari satu cara didapat sekaligus (contoh Kroos: `['Headhunting', 'Recruitment', 'TR-8']`, Purestream: `['Recruitment', 'Coexistence (Purestream Pack)']`).

Contoh hasil parsing dari operator yang sudah di-scrape:
- Standar (3★/4★, non-kernel): `['Headhunting', 'Recruitment']` (Kroos, Cuora, Dobermann — plus `'TR-8'` tambahan untuk Kroos)
- Standar 6★ (kernel): `['Kernel Headhunting', 'Recruitment']` (Aak, Mostima)
- Limited: `['Limited Headhunting - Celebration']` (Rosmontis, W)
- Event/story: `['Episode 14 – Secret Place']` (Civilight Eterna), `['Guide Ahead (Notarial Tasks)', 'Record Restoration']` (Enforcer)
- Store: `['Purchase Certificate Store']` (Contrail), `['Credit Store']` (Courier)
- Starting operator: `['Starting Operator; Clear 2-10, 3-8, 4-9, 6-17, and 7-18']` (Amiya)
- Gift pack + recruitment: `['Recruitment', 'Coexistence (Purestream Pack)']` (Purestream)

Karena datanya sekarang diambil langsung dari display resmi wiki (bukan field JSON generik yang pernah kedapatan salah/tidak ter-update, mis. `isLimited: false` untuk W padahal dia Limited), status Limited/Celebration otomatis akurat tanpa perlu cross-check tambahan — pill merah `Limited Headhunting - X` selalu eksplisit di row ini kalau operatornya memang limited.

**Catatan migrasi:** roster yang sudah diisi dari batch `itemObtainApproach` lama (kebanyakan berlabel generik `['Recruitment', 'Headhunting']`, `['Event Reward']`, `['Voucher Exchange']`, `['Credit Store']`, `['Main Theme Story']`, `['Limited Gift Pack']`) **belum di-migrasi ulang** ke format verbatim wiki di atas — itu backfill terpisah, bukan bagian dari alur scraping operator baru ini.

#### 5. Ambil talents
Array objek dengan format:
```typescript
{ name: "Nama Talent", desc: "Deskripsi efek", elite: "E2" }
```

#### 6. Ambil skills

**Sumber utama: raw JSON dari `ArknightsAssets/ArknightsGamedata`, BUKAN wiki.** Jangan scrape/paraphrase wiki buat data skill sama sekali — dulu alurnya scrape wiki dulu buat `desc`/`spInit`/`sp` (nilai max level), lalu scrape lagi terpisah ke JSON buat data per-level (`levels[]`), padahal keduanya ada di sumber yang sama. Sekarang cukup **sekali ambil JSON**, langsung dapat nilai max level (buat field top-level skill) sekaligus breakdown semua level (buat field `levels[]`, dipakai fitur "Preview Level" di SkillsPanel). Alasan kenapa nggak boleh wiki-scrape/AI-paraphrase buat angka ini: nilai SP cost/init/durasi/angka-di-deskripsi berubah tiap level, dan gampang salah kalau ditebak atau diringkas AI dari halaman wiki — beda sama raw JSON yang deterministik (langsung dari file yang dibaca game itu sendiri).

**Kenapa `ArknightsAssets/ArknightsGamedata` (bukan `Kengxxiao/ArknightsGameData_YoStar`):** repo ini di-update otomatis via bot fetcher jadi lebih sering fresh — dipakai juga sebagai sumber data oleh [`MusicOnline/AK-Dataknights`](https://github.com/MusicOnline/AK-Dataknights) (website database Arknights EN/CN/JP/KR; dikonfirmasi user, lihat README-nya bagian `GAME_DATA_ROOT_PATH`). **Catatan penting:** AK-Dataknights sendiri adalah source code website (Nuxt), **bukan** tempat file JSON mentahnya — dia cuma nge-clone `ArknightsAssets/ArknightsGamedata` saat build. Jadi yang benar-benar kita fetch itu langsung dari `ArknightsAssets/ArknightsGamedata`, bukan dari repo AK-Dataknights. `Kengxxiao/ArknightsGameData_YoStar` masih valid dipakai sebagai referensi/cross-check kalau perlu, tapi kalau ada operator yang kosong di situ (kejadian nyata di Akkord/LN22), langsung ke `ArknightsAssets/ArknightsGamedata` — jangan nyerah ke wiki duluan.

Langkah:
1. Download `character_table.json` dan `skill_table.json` dari raw GitHub (`https://raw.githubusercontent.com/ArknightsAssets/ArknightsGamedata/master/en/gamedata/excel/{file}.json`) — ukurannya besar (belasan MB), simpan di scratchpad, jangan commit.
2. Di `character_table.json`, cari entry operator berdasarkan field `name`, catat array `skills[].skillId` (contoh `skchr_folnic_1`). Beberapa operator (terutama yang skill-nya mengikuti template umum, misalnya Vanguard DP-recovery atau Guard quickattack) pakai skill ID generik berformat `skcom_xxx[N]` alih-alih `skchr_{id}_N` — tetap valid, cari langsung di `skill_table.json`.
3. Di `skill_table.json`, tiap `skillId` punya array `levels` (biasanya 10 entri: Lv1-7 lalu M1-M3, atau 7 entri untuk 3-star tanpa mastery). Tiap level punya `name`, `description` (template dengan placeholder `{key}` atau `{key:0%}`), `blackboard` (array `{key, value}` isi angka aktual), `spData.{initSp,spCost}`, dan `duration`.
4. Render deskripsi final dengan substitusi placeholder dari blackboard: strip markup `<@ba.xxx>...</>`, ganti `{key:0%}` dengan `(value*100).toFixed(decimals) + '%'`, `{key:0}`/`{key}` dengan integer, dan `{-key}` berarti negasi nilai (dipakai untuk hal seperti Movement Speed decrease yang di-blackboard sebagai angka negatif). Key kadang berformat `sumber@key` (contoh `attack@heal_scale`) — bagian setelah `@` yang jadi nama key aslinya di blackboard. Bersihkan juga sisa spasi ganda/spasi-sebelum-tanda-baca dari teks sumber (`replace(/ +([,.;])/g, '$1')`, `replace(/ +\n/g, '\n')`) — beberapa entri game data punya trailing space di dalam tag warna.
5. Isi field top-level skill (`desc`, `spInit`, `sp`, `dur`, `rank`) dari entri **level terakhir** di array (`M3` kalau operator punya mastery / 4-star+, atau level `7` kalau 3-star tanpa mastery — `rank` diisi `"M3"` atau `"Rank 7"` sesuai itu).
6. Isi `levels: SkillLevelData[]` dari **semua** entri array `levels`, urut dari `'1'` sampai `'M3'` (skip M1-M3 kalau 3-star).
7. `icon` (`/operators/{nama}/skill-N.png`) dan `note` (opsional, insight tambahan yang nggak keliatan dari raw data) tetap perlu dicek dari wiki — dua field ini yang nggak ada di JSON.
8. **Kalau ada data skill lama yang cuma diisi dari wiki (belum ada `levels[]`)**, boleh divalidasi balik: ambil dari JSON, cocokkan level terakhirnya ke `desc`/`spInit`/`sp`/`dur` yang sudah ada — kalau cocok persis berarti sumbernya konsisten dan `levels[]` bisa langsung ditambahkan tanpa perlu ragu ulang data lama.

Field `levels` di tipe `Skill` bersifat opsional (backward-compat untuk entri lama) — SkillsPanel otomatis fallback ke tampilan single-value kalau field ini kosong. Tapi untuk operator baru, isi selalu sekalian karena datanya didapat gratis dari langkah yang sama, nggak ada alasan buat skip.

**Catatan bug yang pernah kejadian (sudah difix):** `SkillsPanel.tsx` dulu nyimpen `previewLevel` state default `'M3'`. Untuk skill 3-star (yang levelnya cuma `'1'`-`'7'`, nggak ada `'M3'`), ini bikin `activeLevelData` jadi `undefined` di render pertama — akibatnya badge fallback ke teks mentah `skill.rank` ("Rank 7") sementara tombol level yang match malah nggak ke-highlight sama sekali. Fix-nya: hitung `effectiveLevel` yang fallback ke entri **terakhir** `skill.levels` (bukan ke `skill.rank`) kalau `previewLevel` yang tersimpan nggak valid buat skill saat ini — jadi badge & highlight selalu konsisten pakai format `Lv.N`/`M3`, termasuk saat state lama "nyangkut" pas pindah dari operator 6-star (mastery) ke 3-star (non-mastery) tanpa remount panel.

**Cara kerja operator "alter" (koreksi catatan lama):** operator seperti "Fang the Fire-Sharpened", "Hibiscus the Purifier", "Kroos the Keen Glint", "Lava the Purgatory" **bukan** entri terpisah di array `OPERATORS[]` — mereka adalah object `alter` yang nested di dalam entry base operatornya (mis. Fang 3-star punya field `alter: { name: 'Fang the Fire-Sharpened', ..., skills: [...] }`). Diakses lewat URL `?operator={base-slug}&alter=true` (bukan slug nama alter-nya), di-toggle lewat tombol kecil di sebelah avatar utama (`OperatorTerminal.tsx`, mirip switch class Amiya tapi cuma 1 alter per operator). Jadi kalau nanti mau tes/screenshot operator alter, jangan coba akses `?operator=fang-the-fire-sharpened` (nggak ketemu) — pakai `?operator=fang&alter=true`.

**Status rollout (per Juli 2026):**
- **Semua 17 operator 3-star** sudah punya `levels[]` lengkap (Adnachiel, Ansel, Beagle, Cardigan, Catapult, Fang, Hibiscus, Kroos, Lava, Melantha, Midnight, Orchid, Plume, Popukar, Spot, Steward, Vanilla). Beberapa di antaranya (mis. Melantha & Popukar, Orchid & Plume) pakai skill ID `skcom_*` yang identik persis di game data — datanya sama by design, bukan salin-tempel keliru.
- **Semua 18 operator 4-star** sudah punya `levels[]` lengkap (Deepcolor, Matterhorn, Luo Xiaohei, Akkord, Contrail, Dobermann, Frostleaf, Humus, Shaw, Earthspirit, Indigo, Mousse, Vigna, Jaye, Perfumer, Myrtle, Podenco, Purestream). Akkord sempat di-skip karena kosong di `ArknightsGameData_YoStar`, lalu berhasil diisi dari `ArknightsAssets/ArknightsGamedata` (lihat catatan sumber cadangan di atas).
- **Semua 16 operator 5-star** sudah punya `levels[]` lengkap: Amiya (base + variant Guard/Medic), Folinic, Leto, Nightmare (dari batch awal), Cantabile, Gracebearer, Doc, Elysium, Enforcer, Miss.Christine, Harold, Insider (8 operator standalone), plus 4 **alter** dari operator 3-star — Fang the Fire-Sharpened, Hibiscus the Purifier, Kroos the Keen Glint, Lava the Purgatory (lihat catatan cara kerja alter di atas). Doc (operator crossover Rainbow Six Siege) ternyata tetap ada datanya lengkap di GameData, nggak perlu penanganan khusus.
- **Semua 17 operator 6-star** sudah punya `levels[]` lengkap: Rosmontis, Mon3tr, Logos, Młynar (batch sebelumnya) + Penance, Mostima, Ulpianus, Aak, Angelina, Archetto, Chongyue, Civilight Eterna, Fiammetta, Goldenglow, Hellagur, W, Togawa Sakiko (batch Juli 2026). Catatan teknis dari batch ini:
  - Field top-level `desc`/`spInit`/`sp`/`dur`/`rank` yang sudah ada (hasil scrape wiki lama) **tidak diubah** — cukup divalidasi cocok dengan level terakhir (M3) di JSON, lalu `levels[]` ditambahkan apa adanya. Wajar kalau teks `levels[]` (hasil render JSON verbatim, kalimat penuh) beda phrasing dari `desc` top-level (ringkasan gaya wiki) — bukan berarti salah satunya.
  - `duration: -1` di JSON **tidak otomatis** berarti "Unlimited duration" (`dur: '∞'`) — itu juga dipakai buat skill instant/proc tanpa konsep durasi sama sekali (mis. Penance skill 1 charge-attack) yang mestinya nggak punya field `dur` sama sekali. Bedanya: cek apakah teks deskripsi mentahnya benar-benar menyebut frasa "Unlimited duration" secara eksplisit (kejadian di Civilight Eterna, Ulpianus, Fiammetta skill 3) — kalau nggak ada frasa itu, `dur` di-skip.
  - Nama operator di `character_table.json` kadang beda urutan dari yang dipakai di `operators.ts` — Togawa Sakiko tercatat sebagai `"Sakiko Togawa"` (given-name-first) di raw JSON, harus dicari manual by key (`char_4182_oblvns`) kalau lookup by nama gagal.
  - Beberapa skill officialy punya bug teks EN sendiri dari game (bukan salah render kita) — mis. Mostima skill 3 nyebut "the second talent" alih-alih nama talent aslinya ("Subjective Time Dilation"); tetap dipertahankan verbatim karena itu memang isi resmi `skill_table.json`.

Adnachiel jadi contoh kasus 3-star pertama yang dikerjakan: `levels[]`-nya cuma 7 entri (`'1'`-`'7'`, tanpa M1-M3) karena operator itu nggak pernah promosi ke Elite 2 — SkillsPanel otomatis menyembunyikan tombol mastery kalau `levels[]` skill itu nggak punya entri `'M1'`.

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

#### 8. Ambil profile
Scrape halaman File wiki: `https://arknights.wiki.gg/wiki/{OperatorName}/File`
Copy paragraf singkat di bagian **Profile** menjadi field `profile` (opsional tapi disarankan — ini yang ditampilkan di **ProfilePanel**). Gunakan template literal (`backtick`) karena biasanya multi-line dengan line breaks `\n`.

#### 8b. Ambil story (opsional)
Scrape halaman Story wiki: `https://arknights.wiki.gg/wiki/{OperatorName}/Story`
Ambil hanya bagian overview/background di atas (sebelum section "Plot"). Ini adalah ringkasan karakter yang mencakup latar belakang, kekuatan, dan peran mereka. Field `story` ini yang ditampilkan di **StoryPanel** — jangan diisi dengan quote/promotion record dari halaman File, itu masuk ke `profile`/`records`, bukan `story`.

#### 8c. Ambil operator records (opsional)
Scrape halaman File wiki: `https://arknights.wiki.gg/wiki/{OperatorName}/File`
Ambil semua section selain Profile (yang sudah jadi `profile`):
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
1. Scrape halaman wiki operator: `firecrawl scrape "https://arknights.wiki.gg/wiki/{OperatorName}"` — untuk data stats, skills, talents, modules, profile, dan `how_to_get` (row infobox "How to obtain", lihat langkah 4b — kalau markdown hasil scrape ambigu/kehilangan struktur pill, cek raw HTML)
2. Scrape halaman File: `firecrawl scrape "https://arknights.wiki.gg/wiki/{OperatorName}/File"` — untuk profile (Profile section) dan operator records (Clinical Analysis, Class Conversion, dll.)
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
- Profile text (dari Profile section halaman File wiki)
- Accordion untuk operator records (Clinical Analysis, Class Conversion, dll.) — default tertutup, exclusive toggle (buka satu = tutup yang lain, tutup tidak mempengaruhi yang lain)

**StoryPanel** (`src/components/panels/StoryPanel.tsx`):
- Menampilkan story/overview karakter dari halaman Story wiki (background, kekuatan, peran)
- Fallback "Coming Soon" jika operator belum punya story data
- Card button preview: "This section might contain spoiler" jika ada story, "Coming Soon" jika belum

### Status Data Story/Profile/Records — Placeholder vs Wiki Asli

**⚠️ PENTING:** Sejumlah operator (terutama roster 3-star Op Reserve) awalnya ditambahkan dengan field `story` berupa satu paragraf ringkasan buatan (bukan hasil scrape wiki), dan tanpa field `profile`/`records` sama sekali. Field ini sudah diperbaiki satu per satu dengan data asli dari `{Operator}/File` (Profile + records) dan `{Operator}/Story` (overview) di `arknights.wiki.gg`.

**Sudah diperbaiki (story/profile/records asli dari wiki):**
Rosmontis (records ditambah), Hibiscus + alter Hibiscus the Purifier, Kroos + alter Kroos the Keen Glint, Lava + alter Lava the Purgatory, Melantha, Midnight, Orchid, Plume, Popukar, Spot, Steward, Vanilla, Adnachiel, Ansel, Beagle, Cardigan, Catapult, Fang.

**Belum diperbaiki (masih placeholder buatan, tanpa `profile`/`records`):** Deepcolor, Matterhorn.

Jika operator lain di luar daftar "sudah diperbaiki" ditemukan punya `story` satu paragraf pendek berpola `"{Nama} is a {Race} {Class} from {Tempat} who..."` tanpa field `profile`, kemungkinan besar itu juga masih placeholder — perlu di-scrape ulang dari wiki mengikuti langkah 8/8b/8c di atas.

**Catatan khusus operator dengan alter yang Story page-nya redirect/404:** Beberapa alter (Hibiscus the Purifier, Kroos the Keen Glint, Lava the Purgatory) tidak punya halaman `{Alter Name}/Story` sendiri di wiki — halaman tersebut 404 dan overview cerita mereka digabung di halaman `{Base Name}/Story`. Untuk kasus ini, field `story` alter memakai teks overview yang sama persis dengan base form-nya (bukan duplikasi keliru, memang itu sumber datanya). Field `profile` dan `records` tetap diambil terpisah dari `{Alter Name}/File` karena section tersebut memang spesifik per form.

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

Setiap variant punya data combat sendiri (stats, skills, talents, modules, skins) tapi berbagi data identitas (name, faction, race, cv, profile, physicalExam, dll.) dari operator utama.

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
- [ ] Semua skill dengan detail SP, durasi, deskripsi, dan `levels[]` per-level (Lv1-7 + M1-M3) — semua dari `ArknightsAssets/ArknightsGamedata` dalam satu langkah, lihat step 6
- [ ] Modules (original + upgrade) terisi (atau `{}` untuk 3-star)
- [ ] Profile (Profile section dari halaman File) sudah di-copy
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

## Riwayat Penambahan Operator

### Batch terbaru (in progress, belum di-commit)

- **1-star**: Lancet-2, PhonoR-0
- **2-star**: 12F, Durin, Noir Corne, Rangers, Yato
- **4-star**: Luo Xiaohei, Akkord, Contrail, Dobermann
- **6-star**: Aak, Angelina, Archetto
- **5-star**: Cantabile, Gracebearer
- **5-star alter**: Fang the Fire-Sharpened (alter dari Fang, assets di `public/operators/fang/alter/`)
- **5-star**: Almond, Astesia, Astgenne, Breeze, Nowell, Tequila
- **4-star**: Caper, Cutter, Arene, Bubble, Ambriel, Dur-nar, Totter, Shirayuki, Aciddrop, Beanstalk, Beehunter, Chestnut, Click, Courier, Cuora, Conviction
- **5-star**: Texas, Warfarin, Provence, Akafuyu, Andreana, Aosta

Semua sudah lengkap data + asset (artwork, skill icon, chibi webm) mengikuti alur scraping standar di atas. Gracebearer belum punya Operator Modules di wiki (operator baru), jadi `modules: {}`. Halaman Story Gracebearer masih stub (belum ada overview), jadi field `story` sengaja tidak diisi.

**Catatan batch Texas/Warfarin/Provence:**
- Ketiga operator ini adalah 5★ yang dipindah dari Standard headhunting pool ke **Kernel headhunting pool** (patch "All Quiet Under the Thunder") — field `how_to_get` diambil dari row "How to obtain" di HTML render halaman wiki utama (bukan cuma field `|headhunting = kernel` di infobox mentah), hasilnya `['Kernel Headhunting', 'Recruitment', ...]`. Untuk kasus ini terpaksa fetch halaman wiki penuh (bukan cuma `?action=raw`) karena row itu cuma ada di HTML infobox yang di-render, tidak ada representasinya di raw wikitext.
- Texas adalah operator pertama di dataset ini dengan faction primer **Penguin Logistics** — belum ada icon-nya sebelumnya, didownload dari `File:Penguin_Logistics.png` di wiki (`public/icons/factions/penguin-logistics.png`). Theme warna faction-nya sudah ada duluan di `factionThemes.ts`.
- Texas skill 1 ("Charge γ") pakai skill ID generik `skcom_charge_cost[3]` (bukan `skchr_texas_1`) dan icon generik `Skill-C3.png` — pola sama seperti skill umum lain (`skcom_atk_up`, `skcom_def_up`, dll.) yang dipakai banyak Vanguard DP-recovery.
- Texas skill 2 ("Sword Rain") punya range override berbentuk diamond 5×5 dengan isi di kolom pertama/terakhir (`{{Ranges|r|r|s|r|r}}` di baris tengah) — sama sekali tidak di-trim, identik bentuknya dengan Conviction's Genesis dan Cutter's Crimson Crescent sebelumnya.
- Provence talent "Hunter's Arrow" adalah kasus pertama di dataset ini dengan **upgrade dari Potential 5** (`desc1a`/`desc1b`, `desc2a`/`desc2b` di wiki, beda cuma "+10%" ATK) — karena tipe `Talent` cuma punya field `elite: string` (bukan field potential terpisah), ditulis sebagai 4 entry talent dengan label elite `'E1'`, `'E1 (Potential 5)'`, `'E2'`, `'E2 (Potential 5)'` supaya kedua varian tetap tercatat tanpa mengarang field baru di tipe.
- Provence module ARC-X stage 1 punya bonus `rdp` (redeployment time, `att13 = rdp,25`) yang sama seperti kasus Aciddrop sebelumnya — tidak ada field khusus di `ModuleStage`, jadi digabung ke teks `effect` ("New trait: Redeployment Time reduced by 25 seconds").
- Provence tidak punya Promotion Record (dikonfirmasi lewat `grep "title = "` di raw wikitext File-nya, cuma ada 6 section: Profile + Clinical Analysis + Archive File 1-4) — pola yang sama seperti Ambriel/Beehunter/Cuora/Conviction sebelumnya.
- Semua nilai skill (10 level tiap skill) untuk ketiga operator dicross-check ke `character_table.json`/`skill_table.json` — cocok persis dengan wiki di semua kasus, tidak ada discrepancy yang perlu dikoreksi di batch ini.

**Catatan batch Akafuyu/Andreana/Aosta:**
- Ketiganya juga 5★ pindahan ke Kernel headhunting pool (patch 17 Desember 2024) — `how_to_get` sama-sama diambil dari HTML render row "How to obtain", hasilnya `['Kernel Headhunting', 'Recruitment']` untuk semua tiga (tidak ada metode obtain tambahan seperti Pinboard Missions-nya Texas).
- Akafuyu talent "Nobukage-ryu - Hatobu" adalah kasus pertama di batch-batch ini dengan **3 kondisi elite** (`cond1 = Base`, bukan cuma E1/E2) — ditulis sebagai 3 entry talent dengan label elite `'E0'`, `'E1'`, `'E2'` (pola yang sama seperti talent E0 Yato "Fast Redeployment" sebelumnya).
- Akafuyu module SBL-X punya kejanggalan sama seperti Shirayuki ART-Y sebelumnya: field `|talent = new,Nobukage-ryu - Gyakufu` merujuk ke talent "Nobukage-ryu - Gyakufu" yang **tidak ada** di manapun di halaman (talent asli Akafuyu cuma "Nobukage-ryu - Hatobu"). Karena bukan upgrade dari talent yang benar-benar ada, ketiga stage module ditulis sebagai "New trait: ..." (bukan "{Talent} improved: ...").
- Andreana dan Aosta talent-nya (Abyssal Intuition, Sharp Nails) adalah kasus pertama di dataset ini dengan **upgrade dari Potential 5** (`desc1a`/`desc1b`, `desc2a`/`desc2b` di wiki, beda cuma bonus kecil di dalam `{{Color|(+N%)}}`) — karena tipe `Talent` cuma punya field `elite: string` (bukan field potential terpisah), ditulis sebagai 4 entry talent dengan label elite `'E1'`, `'E1 (Potential 5)'`, `'E2'`, `'E2 (Potential 5)'` (pola yang sama dipakai lagi untuk Provence sebelumnya).
- Aosta punya tile range spesial bertanda `t` (bukan `p`/`r`/`s` biasa) di template `{{Ranges}}` — merepresentasikan kotak "merah" tempat trait damage bonus-nya berlaku (beda dari kotak jangkauan biasa `r`). Karena tipe `AttackRange` cuma kenal nilai 0/1/2 dan komponen `RangeGrid.tsx` cuma render 2 (diri sendiri) dan 1 (tile aktif), tile `t` disamakan nilainya dengan `r` (jadi `1`) — informasi bonus damage-nya tetap tersampaikan lewat teks `trait`, bukan lewat grid.
- Aosta module RPR-X stage 1 **tidak** punya field `|trait = new` (beda dari kebanyakan modul X lain di batch-batch sebelumnya) — teks effect1-nya ("Attacks all enemies within range, and deals 160% damage...") jelas-jelas kelanjutan dari trait bawaan Aosta sendiri (150% → 160%), jadi ditulis sebagai "Trait improved: ..." mengikuti konvensi yang sudah didokumentasikan (patokan dari kecocokan teks, bukan ada/tidaknya field `trait` di wiki).
- Aosta tidak punya Promotion Record (dikonfirmasi lewat raw wikitext File-nya, cuma ada 6 section: Profile + Clinical Analysis + Archive File 1-4) — pola yang sama seperti Ambriel/Beehunter/Cuora/Conviction/Provence sebelumnya.
- Aosta faction "Chiave's Gang" secara eksplisit **reuse icon Siracusa** menurut changelog wiki-nya sendiri ("Faction changed from Rhodes Island to Chiave's Gang (which reuses the icon of Siracusa)") — `factionIcon` diisi langsung `/icons/factions/siracusa.png` tanpa bikin file duplikat baru. Theme warna faction "Chiave's Gang" sendiri sudah ada duluan di `factionThemes.ts`.
- Icon baru yang didownload di batch ini: branch **Spreadshooter** (`Spreadshooter_Sniper.png` dari wiki, belum ada sebelumnya). Class Guard/Sniper, branch Soloblade/Deadeye, dan faction Higashi/Abyssal Hunters semuanya sudah ada dari batch-batch sebelumnya, tidak perlu didownload ulang.

**Catatan batch Almond/Astesia/Astgenne/Breeze/Nowell/Tequila/Caper/Cutter/Arene/Bubble/Ambriel/Dur-nar/Totter/Shirayuki/Aciddrop/Beanstalk/Beehunter/Chestnut/Click/Courier/Cuora/Conviction:**
- Firecrawl kehabisan credit saat batch ini dikerjakan (0/1000 tersisa) — semua scraping pakai `curl -A "<UA custom>" "{wiki-url}?action=raw"` (raw wikitext MediaWiki) alih-alih `firecrawl scrape`, dan chibi webm ditemukan langsung dari wikitext section `==Sprites==` halaman `/Gallery` (list filename `.webm` eksplisit di sana), bukan lewat `firecrawl interact`. Kalau nanti masih 0 credit, pola ini bisa dipakai lagi — cukup pastikan pakai custom User-Agent di curl, arknights.wiki.gg rate-limit (429) request tanpa UA.
- Portrait roster icon (180×180, dipakai buat field `portrait` opsional) didownload dari `https://arknights.wiki.gg/images/{OperatorName}_icon.png`, disimpan sebagai `public/operators/{nama}/portrait.png`. Referensi daftar operator yang sudah pernah dikerjakan ada di `.firecrawl/portrait-download-list.json` (belum termasuk batch ini, perlu ditambahkan manual kalau mau pakai list itu lagi).
- Stats (hp/atk/def/res/block/cost/aspd/rdp) untuk seluruh batch ini diverifikasi silang langsung dari `character_table.json` (`phases[].attributesKeyFrames` level E2 max + `favorKeyFrames` buat bonus trust), bukan cuma dari angka wiki — ternyata cocok persis di semua kasus baru. ⚠️ Beberapa operator LAMA di file ini (Cantabile, Insider) staknya **tidak** cocok dengan gamedata terkini (selisih kecil, kemungkinan besar karena rebalance patch Arknights setelah entry lama itu ditambahkan) — itu bukan berarti metodologi lama salah, cuma snapshot lama sudah stale. Belum diperbaiki, di luar scope batch ini.
- Discrepancy wiki vs gamedata JSON (dipakai yang dari JSON, dicross-check ke `ArknightsAssets/ArknightsGamedata` **dan** `Kengxxiao/ArknightsGameData_YoStar`, keduanya sepakat beda dari wiki):
  - Almond skill 2 (Power Traction) M3: wiki "190%", JSON 180% (`atk_scale: 1.8`).
  - Bubble skill 2 ("Beaten Up") M3: wiki "DEF +125%", JSON DEF +120% (`def: 1.2`).
- Astgenne punya alternate operator "Astgenne the Lightchaser" (mekanisme sama seperti Fang/Hibiscus/Kroos/Lava alter) yang **belum** ditambahkan — baru base form Astgenne yang di-scrape sesuai permintaan user. Kalau nanti diminta, ikuti pola alter yang sudah ada (field `alter` nested, bukan entry array terpisah).
- Beberapa skill pakai skill ID generik yang di-share banyak operator (bukan `skchr_{nama}_N`): Caper skill 1 (`skchr_caper_1`, tapi icon wiki-nya `P2` generik → file `Skill-P2.png`), Bubble skill 1 (`skcom_def_up[2]`, icon `D2` → `Skill-D2.png`), Dur-nar skill 1 (`skcom_atk_up[2]`, icon `A2` → `Skill-A2.png`). Ini normal untuk skill template umum ("ATK Up β"/"DEF Up β") yang dipakai puluhan operator lain — cari icon file generik `Skill-{kode}.png` di wiki kalau `Skill-{OperatorName}N.png` 404.
- Bubble skin1 ("The Wind Rider") ternyata **tidak punya** file chibi sendiri di wiki — filenya (`Bubble Skin 1.webm`) disebut di gallery tapi actual file-nya `missing` di MediaWiki API (broken link di wiki itu sendiri, bukan salah kita). Solusinya: skin1 pakai `chibiSrc` yang sama dengan base (`chibi.webm`), sama seperti kasus Breeze sebelumnya.
- Ambriel adalah satu-satunya operator di batch ini tanpa Promotion Record (halaman File-nya cuma punya 6 section: Profile + Clinical Analysis + Archive File 1-4) — dikonfirmasi bukan bug ekstraksi, memang tidak ada section itu di wiki.
- Shirayuki punya kejanggalan di wiki module ART-Y: field `|talent = new,Circling Wind` merujuk ke talent "Circling Wind" yang **tidak ada** di manapun di halaman (talent asli Shirayuki cuma "Heavy Shuriken", locked di E2). Kemungkinan typo/copy-paste error di wiki. Karena stage 2/3 module itu (SP recovery rate on kill) juga tidak berkaitan sama sekali dengan "Heavy Shuriken" (ATK/ASPD tradeoff), ketiga stage module ditulis sebagai "New trait: ..." (bukan "{Talent} improved: ...") karena memang bukan upgrade dari talent manapun yang benar-benar ada.
- Shirayuki adalah operator pertama di project ini dengan **3 tier attack range berbeda** (range0/range1/range2 terpisah per E0/E1/E2, bukan cuma base/e1) — field `range.e2` (opsional di `AttackRange`) dipakai untuk kasus ini.
- Totter dan operator lain dengan template range yang menaruh posisi diri (`s`) di kolom paling kiri (bukan didahului kolom `p` padding) — trimming kolom kosong di kiri/kanan grid TIDAK dilakukan sama sekali kalau kolom pertama/terakhir sudah punya isi (termasuk posisi `2`), jadi kolom `p` di TENGAH pola (antara posisi diri dan tile jangkauan) tetap dipertahankan apa adanya karena itu representasi asli dari bentuk range-nya (bukan padding template).
- Aciddrop module ARC-X stage 1 punya bonus `rdp` (redeployment time) yang **tidak punya field khusus** di tipe `ModuleStage` (cuma ada hp/atk/def/res/aspd) — dituliskan sebagai teks di `effect` ("New trait: Redeployment Time reduced by 25 seconds") alih-alih field numerik terpisah.
- Beanstalk adalah operator pertama di batch-batch ini yang punya `summon` (Metal Crab Guard Team) — stats-nya diambil dari halaman wiki dedicated summon (`Metal_Crab_Guard_Team`), pakai nilai E2-max (`hp2`/`atk2`/`def2` kedua/terakhir dari pasangan) karena target level Beanstalk sendiri E2. `rdp` summon diisi dari waktu respawn talent "Professional Breeder" di level E2 (15s), karena summon tidak punya biaya redeploy DP sungguhan seperti operator biasa.
- Beanstalk skin2 ("Ribbons of Promise") juga kena kasus chibi hilang di wiki sama seperti Bubble sebelumnya (`Beanstalk Skin 2.webm` terdaftar di gallery tapi `missing` di API) — pakai `chibi.webm` base sebagai fallback.
- Beehunter adalah operator pertama di batch-batch ini dengan skill **passive** murni (`type=passive` di wiki, `skillType: "PASSIVE"` di gamedata) — pakai `activation: 'Passive', recovery: 'Passive', spInit: 0, sp: 0` tanpa field `dur` (mengikuti pola yang sudah ada di Contrail/Fang alter/Yato alter).
- Beehunter juga tidak punya Promotion Record di wiki (sama seperti Ambriel), dikonfirmasi bukan bug ekstraksi.
- Chestnut: nama skill di section `==Skills==` ("Little By Little", "Rising Earth") beda dari nama yang dipakai di bagian upgrade material/module wiki ("Tiny Stockpile", "Earthen Surge") — kejanggalan penamaan di wiki itu sendiri (kemungkinan rename yang nggak konsisten di-update ke semua section). Dipakai nama dari `==Skills==` karena itu yang aktif ditampilkan di UI game.
- Script `extract_skill.js` (di scratchpad) diperbaiki lagi untuk placeholder format desimal spesifik seperti `{key:0.0}` (dipakai Click skill 2 buat durasi stun 0.4/0.7/1 detik) — sebelumnya cuma bisa handle `{key:0}` dan `{key:0%}`, sekarang precision-nya mengikuti jumlah digit nol setelah titik di format specifier.
- Click, Courier, Cuora punya trait/skill 1 yang pakai template `{{Tip|teks-tampil|detail-tooltip}}` dengan urutan kebalikan dari kasus sebelumnya (mis. `{{Tip|R&D|research and development}}` di mana param kedua yang lebih deskriptif) — di sini param pertama teks utama, param kedua cuma angka tambahan (mis. "equal to 20% of ATK"). Untuk kasus begini, digabung manual jadi satu kalimat (bukan cuma ambil salah satu param) supaya nggak kehilangan konteks kalimat maupun angka pastinya.
- Cuora dan Conviction juga tidak punya Promotion Record (pola yang sama seperti Ambriel/Beehunter sebelumnya) — dikonfirmasi bukan bug ekstraksi.
- Conviction adalah operator lelucon (April Fools) dengan field-field non-standar di wiki: `gender = Conviction` (bukan gender asli), `race = Unknown (Suspected Liberi)`, `experience = Unknown`, `birthdate = Unknown` — semua disimpan verbatim apa adanya sesuai sumber, bukan ditebak/dinormalisasi.
- Beberapa module X/Y yang wiki-nya nggak eksplisit kasih field `|trait = new` atau `|trait = original` (kosong sama sekali) tetap diperlakukan sebagai "Trait improved: ..." kalau `effect1`-nya jelas-jelas melanjutkan/menambahkan ke teks trait bawaan operator (Courier SOL-X, Chestnut WDM-X sebelumnya) — patokannya bukan ada/tidaknya field itu di wiki, tapi apakah teksnya cocok jadi ekstensi trait yang sudah ada.

---

## Automated Events Sync (Vercel Cron)

Data event di `src/data/events.ts` awalnya diisi manual, tapi sekarang ada pipeline otomatis yang menjaga tanggal & event baru tetap fresh tanpa perlu scrape manual tiap kali.

### Cara kerja

1. **Vercel Cron** ([vercel.json](vercel.json)) memanggil `GET /api/cron/scrape-events` sekali sehari (`0 3 * * *` UTC). Vercel otomatis mengirim header `Authorization: Bearer $CRON_SECRET` — route ini menolak request yang secret-nya tidak cocok.
2. **[src/lib/events/scrapeArknightsEvents.ts](src/lib/events/scrapeArknightsEvents.ts)** fetch `https://arknights.wiki.gg/wiki/Event`, parse tabel "Ongoing" dan "Upcoming" (via `cheerio`), ambil nama, tag (dari bracket `[Tag]` di judul), dan rentang tanggal **Global** saja (event yang belum punya jadwal Global diskip).
3. **[src/lib/events/mergeEvents.ts](src/lib/events/mergeEvents.ts)** membandingkan hasil scrape dengan `EVENTS` yang sedang running (di-import langsung dari `src/data/events.ts`, bukan baca ulang dari GitHub):
   - Event yang namanya cocok (case-insensitive) dengan entry existing → hanya `startDate`/`endDate` yang di-refresh; `id`, `tag`, `banner`, `color` hasil kurasi manual tidak pernah ditimpa.
   - Event yang belum ada → banner-nya didownload dari wiki, warna accent dihitung otomatis (average color via `sharp`, resize ke 1×1 px), lalu ditambahkan sebagai entry baru dengan `id` hasil slugify dari nama.
   - Tidak pernah menghapus event lama yang sudah tidak muncul di tabel wiki (aman dari false negative kalau format halaman berubah).
4. **[src/lib/events/githubEventsRepository.ts](src/lib/events/githubEventsRepository.ts)** — karena site ini statis (tanpa database) dan Vercel serverless function filesystem-nya read-only saat runtime, hasil merge di-commit langsung ke branch `main` lewat GitHub Git Data API (`@octokit/rest`): regenerate `src/data/events.ts` ([generateEventsFileSource.ts](src/lib/events/generateEventsFileSource.ts)) + commit banner PNG baru ke `public/events/{id}/banner.png` dalam satu commit. Vercel otomatis redeploy begitu ada push baru.
5. Kalau tidak ada perubahan (tidak ada event baru/tanggal berubah), route return early tanpa commit — tidak ada commit/deploy sia-sia tiap hari.

### Env vars yang dibutuhkan (lihat [.env.example](.env.example))

| Var | Keterangan |
| --- | --- |
| `CRON_SECRET` | String random, harus sama persis dengan yang di-set di Vercel Project Settings → Environment Variables (Vercel otomatis kirim ini sebagai Bearer token ke cron request). |
| `EVENTS_SYNC_GITHUB_TOKEN` | GitHub PAT (fine-grained, scope `Contents: Read and write` khusus repo ini) supaya cron job bisa commit. |
| `EVENTS_SYNC_GITHUB_OWNER` / `EVENTS_SYNC_GITHUB_REPO` | Default `yudistiraen` / `arknights-operator-terminal`, override kalau fork/rename repo. |
| `EVENTS_SYNC_TARGET_BRANCH` | Default `main`. |

### Batasan yang perlu diketahui

- **Vercel Hobby plan**: cron job hanya jalan sekitar 1x/hari dan waktu eksekusinya bisa meleset dari jadwal persis — cukup untuk kebutuhan sync harian, tapi jangan andalkan untuk sesuatu yang butuh presisi jam.
- **Warna accent event baru dihitung otomatis** (average color banner), bukan hand-picked seperti event lama — kalau hasilnya kurang pas secara visual, boleh diedit manual di `src/data/events.ts` (edit manual pada field `color` **aman**, tidak akan ditimpa lagi selama `name` event tetap sama).
- Kalau butuh trigger manual (bukan nunggu jadwal cron) untuk testing, panggil endpoint-nya langsung dengan header `Authorization: Bearer <CRON_SECRET>`.

### Rencana migrasi ke database (belum diimplementasikan)

Struktur sengaja dipisah: `scrapeArknightsEvents.ts` (scraping murni) dan `mergeEvents.ts` (diff logic) tidak tahu-menahu soal GitHub — keduanya cuma menerima `GameEvent[]` yang sedang berjalan dan mengembalikan hasil merge. Publishing-nya diisolasi di `GitHubEventsRepository`. Kalau nanti pindah ke database (misalnya Supabase), cukup buat `SupabaseEventsRepository` baru dengan method `publish` yang sama, ganti pemanggilannya di [route.ts](src/app/api/cron/scrape-events/route.ts), dan ubah komponen (`OngoingEvents.tsx`, `Calendar.tsx`) supaya baca dari database alih-alih import statis `EVENTS` dari `src/data/events.ts` — logic scraping & merge tidak perlu disentuh sama sekali.

---

## Rencana Pengembangan: Asset Pipeline dari ArknightsResource

**Repo referensi**: [github.com/fexli/ArknightsResource](https://github.com/fexli/ArknightsResource) — berisi raw asset hasil extract dari game (termasuk file Spine chibi: `.skel`/`.json` skeleton, `.atlas`, dan texture `.png`) yang **belum ter-assemble** menjadi video seperti `chibi.webm` yang dipakai sekarang.

**Kapan dipakai:** untuk chibi `Move` (state jalan) — wiki.gg nggak pernah punya ini, cuma render idle tunggal — repo ini **satu-satunya sumber**. Juga jadi sumber utama (bukan fallback lagi) buat idle sekalipun kalau wiki.gg nggak punya asset operator itu sama sekali (kejadian nyata di Togawa Sakiko, lihat catatan Sakiko di bawah) atau kalau firecrawl kehabisan credit (kejadian nyata di Amiya Guard). **Mulai cari di sini duluan** kalau lagi kerjain chibi walking/multi-state buat operator baru — jangan mulai dari wiki.gg lagi untuk kebutuhan ini, karena skema di bawah (idle+move dari sumber yang sama) sudah terbukti lebih konsisten daripada campur wiki.gg (idle) + render sendiri (move). Untuk artwork/skill icon statis, wiki.gg tetap sumber utama seperti biasa (lihat langkah scraping di atas) — bagian ini spesifik buat chibi aja.

**Rencana pipeline (belum diimplementasikan, masih tahap rencana):**

1. Ambil raw spine files (skeleton + atlas + texture) dari repo untuk operator yang chibi-nya belum ada di wiki
2. Render lewat Spine runtime (`spine-ts`) di headless browser (Puppeteer) → capture tiap frame animasi ke canvas dengan background transparan
3. Encode frame-frame tsb ke `.webm` (codec VP9 + alpha channel `yuva420p`) pakai ffmpeg, resolusi/fps disamakan dengan chibi existing
4. Output akhir tetap format `.webm` — drop-in ke `public/operators/{nama}/chibi.webm` tanpa perlu ubah kode (`CharacterArt.tsx` dan konvensi lain di project ini tidak berubah)

**Tooling tambahan yang dibutuhkan (belum ada di project):**
- ffmpeg — belum terinstall di environment
- Puppeteer + `spine-ts` runtime — belum jadi dependency, akan ditambahkan sebagai dev-only tooling untuk script one-off (bukan masuk bundle production)

**Catatan penting:** hasil render sendiri tidak dijamin identik byte-per-byte dengan file wiki (beda encoder/setting), tapi harus identik secara format dan perilaku — transparan, loop, resolusi/kualitas konsisten, dan berfungsi sama persis di `CharacterArt.tsx` seperti chibi webm yang sudah ada.

### Sub-rencana: Multi-state chibi (idle/move/attack/dll.)

Repo `fexli/ArknightsResource` simpan **2 model spine terpisah per operator** di `spine/char_XXX_{code}/` (diverifikasi langsung dengan download & extract string dari `.skel` binary Amiya, contoh `char_002_amiya`):

1. **`build_char_XXX_{code}/Spine/`** — model dorm/base. Animation clip yang ada: `Default`, `Move`, `Sit`, `Relax`, `Interact`, `Sleep`.
2. **`char_XXX_{code}/Front/` dan `char_XXX_{code}/Back/`** — model battle, terpisah per arah hadap, **belum pernah diambil sama sekali** di project ini. Animation clip: `Idle`, `Attack`, `Attack_Begin`, `Attack_End`, `Skill`, `Skill_Begin`, `Skill_End`, `Skill_2`, `Skill_2_Begin`, `Skill_2_End`, `Die`, `Start`.

**Koreksi catatan lama:** sempat dikira `chibi.webm` yang didownload dari wiki.gg adalah loop gabungan semua animasi dorm (Move+Sit+Relax+dll.) — ternyata **salah**, sudah dicek langsung pakai `ffprobe` (`public/operators/amiya/chibi.webm` cuma 31 frame / 1.033 detik @30fps) dan extract frame-nya: itu cuma **satu animasi tunggal** (idle sway ringan, kaki diam di tempat, kemungkinan `Relax` atau `Default`), bukan gabungan. Jadi state "berjalan" **tidak** otomatis sudah ada di asset lama — perlu di-render terpisah dari clip `Move`.

**Pipeline render tervalidasi (2026-07-25, POC berhasil untuk Amiya `Move`):**

1. Deteksi versi Spine dulu — extract printable string dari header `.skel` (`perl -ne 'print "$1\n" while /([\x20-\x7E]{4,})/g' file.skel | head`), versi muncul sebagai string mentah dekat awal file (contoh Amiya: `3.8.99`). **Wajib dicek per-operator** — operator baru kemungkinan pakai versi Spine lebih baru (4.x), yang butuh runtime `spine-ts` berbeda (lihat langkah 2).
2. Ambil runtime `spine-canvas.js` (build Canvas2D, bukan WebGL — lebih simpel buat capture headless, nggak butuh flag GPU) dari branch git `spine-runtimes` yang cocok dengan versi terdeteksi, contoh untuk 3.8: `https://raw.githubusercontent.com/EsotericSoftware/spine-runtimes/3.8/spine-ts/build/spine-canvas.js`. Branch yang tersedia: `3.5`, `3.6`, `3.7`, `3.8`, `4.0`, `4.1`, `4.2`, `4.3`, `4.4`.
3. Download 3 file asset dari `ArknightsResource` (raw.githubusercontent.com resolve LFS otomatis, jadi langsung dapat binary asli, bukan pointer file): `{model}.skel`, `{model}.atlas`, `{model}.png`.
4. Serve file-file ini + `spine-canvas.js` + HTML viewer lewat static HTTP server lokal (fetch asset via `file://` kena CORS di headless Chrome, jadi wajib http server, walaupun cuma Node `http` bawaan tanpa dependency).
5. HTML viewer: pakai `spine.SkeletonBinary` (bukan `SkeletonJson`, karena sumbernya `.skel` binary) + `spine.canvas.AssetManager` (method `loadBinary()` buat skel, `loadText()` buat atlas, `loadTexture()` buat png). **Gotcha:** resolver texture di `new spine.TextureAtlas(atlasText, resolverFn)` jangan pakai `path` argument dari resolver buat lookup ke asset manager — nama file di dalam isi `.atlas` (baris pertama) beda dari nama file lokal yang kita pakai buat load; resolver harus selalu return texture yang sama terlepas dari `path` yang diminta (asumsi 1 atlas = 1 texture page, valid untuk semua chibi operator).
6. Framing/scaling di canvas: anchor ke **posisi kaki** (`bounds.offset.y`, nilai Y terkecil dalam skeleton space Y-up = titik terendah = kaki), **bukan** ke titik tengah bounding box — kalau pakai titik tengah, karakter kepotong (kepala kepotong di atas, kaki kepotong di bawah).
7. Capture frame: expose fungsi `window.__spineStep(dt)` yang manggil `state.update(dt); state.apply(skeleton); skeleton.updateWorldTransform(); skeletonRenderer.draw(skeleton)` dari Puppeteer via `page.evaluate()`, lalu screenshot element canvas dengan `elementHandle.screenshot({ omitBackground: true })` — opsi ini yang bikin background beneran transparan (RGBA alpha=0), bukan cuma soal warna page background.
8. Jumlah frame = `Math.round(animation.duration * fps)`, ambil `animation.duration` dari `skeletonData.findAnimation('Move').duration` (dalam detik) via API spine, bukan ditebak manual.
9. Encode ke webm: `ffmpeg -framerate 30 -i frame_%03d.png -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 28 -auto-alt-ref 0 output.webm` — hasilnya punya tag `alpha_mode=1` sama seperti `chibi.webm` existing dari wiki.gg, jadi format kompatibel dengan konvensi project.
10. **Verifikasi transparansi jangan cuma visual** (viewer gambar bisa salah render alpha jadi warna solid tertentu tergantung tool) — cek byte mentah: pastikan PNG color type = 6 (RGBA, byte ke-25 di header) dan pixel background beneran `alpha=0` (baca IDAT mentah, inflate zlib, cek channel ke-4 tiap pixel).

**Tooling yang kepake (semua dev-only, belum masuk `package.json` project):** `ffmpeg` (diinstall via `winget install Gyan.FFmpeg`, sebelumnya belum ada di environment), Puppeteer (`npm install puppeteer`, terinstall terpisah di scratch folder buat POC — belum dipindah jadi dependency resmi project).

**Status implementasi:**
- Komponen `src/components/WalkingChibi.tsx` — mascot chibi yang jalan random di bagian bawah viewport (fixed position, global, mounted di `AppShell.tsx`, cuma tampil setelah `hasEntered`). Random walk pakai GSAP (`gsap.to` translateX + `ease: 'none'` biar kecepatan konstan kayak jalan beneran, bukan easing), flip horizontal (`scaleX`) sesuai arah gerak, jeda random 1.5–5 detik tiap kali sampai tujuan sebelum jalan lagi.
- Dua layer `<video>` ditumpuk (idle + move), di-toggle opacity via GSAP pas mulai/berhenti jalan — supaya nggak ada reload/flicker video pas switch (ganti `src` langsung bikin video reload).
- **Performance fix penting (2026-07-25):** awalnya kedua video (`autoPlay loop`) jalan TERUS di background biar nggak ada reload pas opacity di-toggle — tapi ini artinya di setiap saat, HALF dari semua video yang di-render (5 dari 10 kalau `MAX_WALKING_CHIBIS`=5 semua aktif) lagi decode padahal nggak pernah kelihatan (opacity 0). Alpha-channel VP9 decode itu mahal (kebanyakan browser nggak bisa hardware-accelerate video ber-alpha), diukur pakai `requestAnimationFrame` counting: **43fps** (13 frame lambat >20ms per 4 detik) turun jadi **134fps** kalau nggak ada mascot sama sekali. Juga ada `filter: drop-shadow(...)` di tiap video — mahal juga karena harus di-rasterize+blur ulang dari alpha channel SETIAP FRAME (isi video-nya berubah tiap frame, beda sama shadow di elemen statis yang cuma dihitung sekali). Kedua penyebab **independen signifikan** (diverifikasi terpisah lewat isolated A/B test per kondisi, reload bersih tiap kondisi biar nggak ada residual state): pause video yang lagi hidden aja → 43→72fps; hapus drop-shadow aja (video tetap semua jalan) → 43→71fps; keduanya sekaligus → 43→90fps (~2x). Fix: `WalkingChibi.tsx` sekarang eksplisit `.pause()`/`.play()` video sesuai visibility-nya (bukan cuma toggle opacity, video-nya beneran discroll play-state-nya) — refs `idleVideoElRef`/`moveVideoElRef` udah ada dari fix currentTime-reset sebelumnya jadi tinggal dipakai lagi. `drop-shadow` filter diganti jadi `<div>` bayangan statis (ellipse blur, `blur-[3px]`) di bawah kaki karakter — visualnya mirip tapi nggak pernah recompute per-frame karena isinya nggak pernah berubah, compositor tinggal reuse rasterized layer yang sama.
- Sistemnya generik lewat `getWalkableChibis()` (`src/lib/operators.ts`) — skin manapun yang punya `chibiMoveSrc` **dan** `chibiFraming` terisi otomatis masuk pool walking chibi, otomatis dapat toggle button di `RosterCard` (kartu roster/grid) dan `CharacterArt` (HUD chibi di halaman detail), tanpa perlu ubah kode. Kalau cookie seleksi belum ada, default-nya ambil 1 skin per operator dari pool ini (urutan sesuai `OPERATORS[]`) sampai `MAX_WALKING_CHIBIS` (5).
- **Amiya** (base + 3 skin + varian Guard skin1/skin2 + varian Medic base/skin1 "Solo Around The World"), **Togawa Sakiko** (base + skin1 "Master of Melodia"), **Logos** (base + skin1 "Radiant Serenity"), **Mon3tr** (base + skin1 "Sharpened Blades"), **Mlynar/Młynar** (base + skin1 "W Dali" + skin2 "Roar Against The Wilds"), **Aak** (base + skin1 "Doctor of Faces" + skin2 "Healing Hand, Evil Heart"), dan **Fiammetta** (base + skin1 "Divine Oath" + skin2 "Judgment Day") sudah punya render `Move` lengkap + `chibiFraming` terkalibrasi + idle di-render dari pipeline yang sama (lihat "Unifikasi sumber idle" di bawah). Amiya varian Guard "base" reuse chibi Amiya biasa (nggak ada model dorm khusus buat itu di `fexli/ArknightsResource`, cuma ada skin folder buat "Touch the Stars"/"Roar"-nya, nggak ada default) — beda sama varian Medic (`char_1037_amiya3`) yang JUSTRU punya build dorm default sendiri (`build_char_1037_amiya3`, nggak perlu reuse chibi Amiya biasa). Operator lain masih pakai idle asset lama aja (nggak walkable) sampai digarap satu-satu — belum ada rencana batch ke semua operator.
- **Char code Aak/Fiammetta beda jauh dari nama tampilan** (kayak kasus Młynar/Sakiko sebelumnya) — Aak = `char_225_haak`, Fiammetta = `char_300_phenxi`. Skin folder suffix (`nian_4`/`nian_5` buat Aak, `boc_9`/`witch_4` buat Fiammetta) nggak ada hint nama skin sama sekali, jadi disambiguasi selalu lewat render-and-compare visual terhadap `skin1.png`/`skin2.png` asli (render satu frame `Interact` per model, cocokin outfit/warna/prop-nya) — bukan asumsi urutan folder API = urutan skin1/skin2.
- **Gotcha ditemukan dari batch Logos/Mon3tr/Mlynar (Juli 2026):** `skel.getBounds()` (dipakai `calculateAnimBounds()` buat auto-fit framing tiap capture) ternyata bisa ketipu oleh attachment yang ter-attach ke skeleton tapi nggak pernah ke-render (invisible/off-model anchor bone) — kejadian di skin2 Mlynar ("Roar Against The Wilds"), semua 5 animasinya kena bounds raksasa TETAP (identik persis di setiap sample point, tanda pasti attachment statis yang nggak animasi) yang bikin karakter asli ke-render kecil banget di tengah frame kosong. Fix: `viewer4.html` (dipakai bareng `capture4.js`) ganti sumber bounds dari `skel.getBounds()` ke **pixel-probe** — render tiap sample pose ke canvas probe besar (2400×2400, world unit 1:1, sengaja generous biar nggak kepotong walau bounds-nya normal), baca alpha channel buat nemuin bounding box yang BENERAN ke-render, baru convert balik ke world coordinate. Lebih lambat (getImageData per sample) tapi immune dari attachment hantu manapun karena cuma percaya piksel yang beneran keliatan. `viewer3.html`/`capture3.js` (skel.getBounds(), lebih cepat) masih valid dipakai default untuk model normal — baru pindah ke `viewer4.html`/`capture4.js` kalau ketemu kasus serupa (ciri-cirinya: bounds identik di semua sample regardless of trackTime, ketauan gampang dengan nge-log `info.bounds` dari `__spineInit()` dan compare across beberapa `anim` yang beda — kalau sama persis, itu bug ini).
- **Gotcha kalibrasi `chibiFraming` (sample tunggal bisa salah):** metode awal (`measure_togawa.js`, dipakai juga buat Amiya) ngukur alpha bounding box idle/move di **satu titik waktu tunggal** (idle@0.3s, move@0.5s). Ini cukup buat walk-cycle biasa (ukuran karakter konsisten sepanjang loop), tapi gagal buat animasi dengan variasi ukuran besar dalam satu clip (kejadian di draft awal kalibrasi skin2 Mlynar sebelum bug bounds di atas ketauan — waktu itu sample tunggal kebetulan nangkep pose kecil/menunduk yang nggak representatif, hasil `scale` jomplang jauh dari base/skin1). Fix di `measure_batch.js`: union alpha bbox dari **banyak sample** (10 buat idle, 20 buat move) sepanjang durasi clip, bukan cuma satu titik waktu — lebih robust buat animasi dengan pose ekstrem.
- **Kalibrasi `chibiFraming`:** dihitung otomatis (bukan tebak visual manual) lewat `measure_batch.js`-style script — load kedua video (idle + move) di browser via Puppeteer, `getImageData` buat nyari alpha bounding box tiap video (union dari banyak sample sepanjang durasi, lihat gotcha di atas), lalu `computeFraming()` menghitung `scale`/`offsetXPercent`/`offsetYPercent`. Sejak idle+move disatuin sumbernya (lihat "Unifikasi sumber idle" di bawah), hasilnya ngumpul ke identity dan diterapkan sebagai SATU transform ke wrapper yang membungkus idle+move sekaligus di `WalkingChibi.tsx` — bukan lagi ke idle doang (lihat detail lengkap di bagian "`chibiFraming` vs `chibiDetailFraming`" di bawah).
- **Togawa Sakiko diambil dari sumber pipeline baru (`fexli/ArknightsResource`), bukan wiki.gg** — chibi lama dia (`chibi.webm`/`chibi-skin1.webm` hasil download wiki) ternyata **broken** (isinya halaman 404 HTML wiki.gg yang disimpan sebagai `.webm`, ketauan pas `ffprobe` gagal parse EBML header). Karena wiki.gg memang nggak punya chibi dia (dikonfirmasi user), base idle sekarang di-render dari clip dorm **`Relax`** (bukan `Default`, yang durasinya 0 alias nggak ada animasi — quirk khusus operator ini, bukan bug pipeline) via model spine `char_4182_oblvns` (kode karakter internal dari `character_table.json`, lihat catatan batch 6★ Juli 2026 di atas). Skin1 pakai model spine terpisah `char_4182_oblvns_avemujica_1`. Selain idle+move, juga di-render 4 clip dorm tambahan (nggak dipakai di UI manapun saat ini, cuma disiapin buat kalau nanti ada fitur dorm-state): `chibi-sit.webm`, `chibi-relax.webm`, `chibi-interact.webm`, `chibi-sleep.webm` (dari model base, bukan skin1).
- **Gotcha baru yang ditemukan dari batch Sakiko:** sample bounds 12 titik (dipakai POC Amiya) nggak cukup buat model dengan prop yang nge-swing jauh (rantai/cambuk di skin1 "Master of Melodia") — antara dua titik sample, prop-nya bisa nge-swing lebih jauh dari kedua sample itu sendiri dan ke-crop di tepi canvas pas capture. Fix: naikin sample jadi 60 titik + margin flat 12% di semua sisi bounding box (`viewer3.html`, bukan `viewer2.html` yang dipakai Amiya) — worth di-apply ulang ke render Amiya kapan-kapan kalau sempat, belum dilakukan.
- Script pipeline (`viewer3.html`, `capture3.js`, `measure_togawa.js`, generalized dari `viewer.html`/`capture.js`/`measure_skins.js` punya Amiya buat terima parameter model+anim+port) masih di scratchpad session, **belum dipindah ke folder project** (`tools/` atau semacamnya) — kalau mau dipakai ulang buat operator lain, perlu direplikasi/dirapikan dulu.

### `chibiFraming` vs `chibiDetailFraming` — dua field kalibrasi chibi, jangan tertukar

**Riwayat singkat (biar nggak keulang):** sempat ada field ketiga, `chibiScale`, dipakai terpisah dari `chibiFraming.scale` buat "biar mascot-nya keliatan lebih gede" tanpa merusak alignment idle↔move. Ternyata itu nggak perlu — begitu idle dan move disatuin sumbernya (lihat bagian di bawah), `chibiFraming.scale` hasil kalkulasi otomatis ngumpul ke ~1 (nggak ada kerjaan alignment beneran buat dilakuin lagi), jadi aman dipakai juga sebagai "master size". **`chibiScale` udah dihapus total (2026-07-25)** — nilainya di-fold ke `chibiFraming.scale` (kalikan keduanya, misal skin yang dulu `scale:1, chibiScale:1.2` sekarang jadi `scale:1.2` doang).

Dua field yang tersisa ada di `OperatorSkin` (`src/types.ts`), sibling, opsional — tapi tujuannya beda total dan **jangan saling gantiin**, ini sumber bug nyata yang udah kejadian (chibi jalan "lompat" posisi pas transisi diam↔jalan gara-gara field ini dipakai buat 2 keperluan sekaligus):

| Field | Dipakai di | Tujuan | Cara dapetin nilainya |
|---|---|---|---|
| `chibiFraming` | `WalkingChibi.tsx` — SATU transform (`scale` + `offsetXPercent` + `offsetYPercent`) diterapkan ke wrapper yang membungkus **kedua** layer (idle & move) sekaligus, bukan ke video manapun secara individual | Ukuran + posisi mascot secara keseluruhan (baik lagi diam maupun jalan) — karena diterapkan ke wrapper yang sama, idle dan move otomatis selalu sama persis, nggak ada 2 angka terpisah yang bisa ke-drift jadi nggak sinkron | **Diukur**, bukan tebak: load idle+move di browser (Puppeteer, bukan ffmpeg CLI — alpha channel VP9 dari webm ini gagal ke-decode ffmpeg meskipun tag `alpha_mode=1` ada, harus lewat `<video>` + canvas `getImageData` di browser asli), cari bounding box alpha tiap video (union dari banyak sample sepanjang durasi clip, bukan cuma 1 titik waktu — lihat gotcha di bawah), hitung `scale`/`offsetXPercent`/`offsetYPercent` biar box karakter di kedua video align di reference box yang sama. Setelah dihitung, boleh dikali manual buat "boost" ukuran (ganti peran `chibiScale` lama) — aman karena tetap keterapkan ke idle+move bareng |
| `chibiDetailFraming` | `CharacterArt.tsx` (HUD chibi di halaman detail operator, cuma nampilin idle, nggak ada state jalan) | Murni kosmetik — biar chibi keliatan center/pas di box HUD yang beda ukuran/tujuan dari walking chibi | Boleh tuning manual visual (trial-and-error liat hasilnya), **independen** dari `chibiFraming` — box-nya beda konteks, nggak ada kebutuhan "align ke video lain" |

**Kenapa harus dipisah:** kalau `chibiFraming` (harusnya murni buat mascot berjalan) dipakai juga buat "biar keliatan center di detail page", nilainya jadi ketarik dua arah — begitu di-tuning biar center di `CharacterArt`, hasil kalibrasi walking jadi berubah juga padahal box-nya beda ukuran/tujuan. **Aturan main:** kalau butuh ngerubah tampilan di `CharacterArt.tsx`, edit `chibiDetailFraming` — JANGAN sentuh `chibiFraming` kecuali emang lagi re-kalibrasi mascot berjalan.

**Prasyarat penting biar `chibiFraming` (satu transform buat idle+move) tetap valid:** idle dan move **harus** dirender dari pipeline/konvensi yang sama (lihat "Unifikasi sumber idle" di bawah). Kalau idle dan move datang dari sumber yang beda-beda crop-nya (misal idle masih hasil download wiki.gg lama, move hasil render Spine baru), satu transform yang sama nggak bisa nge-reconcile keduanya — dulu (sebelum unifikasi) `chibiFraming.scale` diterapkan ke idle doang justru karena alasan ini. Kalau nanti ada operator baru yang idle-nya belum sempat di-render ulang match sama move-nya, JANGAN paksa pakai skema wrapper-shared ini — idle harus di-render ulang dulu (bukan cara framing-nya yang diubah).

**Status data (per 2026-07-25):** setiap skin yang punya `chibiFraming` sekarang **wajib** juga punya `chibiDetailFraming` eksplisit di `operators.ts` (kalau nilainya sama, ya tinggal di-copy) — komponennya (`CharacterArt.tsx`/`OperatorTerminal.tsx`) udah nggak ada fallback runtime (`chibiDetailFraming ?? chibiFraming`) lagi, jadi entry baru yang lupa isi `chibiDetailFraming` bakal jatuh ke default generic treatment (`scale-110 -translate-y-2 md:-translate-y-4`, dikalibrasi buat video landscape lama, **bukan** video 600x600 hasil render sendiri) — kemungkinan keliatan salah kalau lupa.

### Unifikasi sumber idle — idle sekarang di-render dari pipeline yang sama dengan move (2026-07-25)

Sebelumnya, cuma **video move** yang di-render lewat pipeline Spine baru (`fexli/ArknightsResource`) — **video idle** tetap dari sumber lama (download `chibi.webm` dari wiki.gg, resolusi/crop landscape 1024×576). Ini artinya idle dan move selalu punya "natural framing" yang beda, dan `chibiFraming` harus kerja keras ngoreksi idle biar match — itung punya itung, `scale` bisa jomplang jauh dari 1 (Amiya base dulu `1.111`, Mon3tr dulu `0.909`, dll.).

**Root cause diselesaikan (bukan cuma gejalanya):** idle sekarang **juga** di-render dari clip dorm `Relax` lewat pipeline Spine yang sama persis dipakai buat move (viewer3/4 + capture3/4), bukan download wiki.gg lagi — berlaku buat **Amiya** (base + 3 skin + varian Guard skin1/skin2), **Logos**, **Mon3tr**, **Mlynar/Młynar** (base + skin1 + skin2), plus **Togawa Sakiko** yang emang dari awal begitu (chibi wiki-nya broken). Begitu idle+move satu sumber, `chibiFraming` yang diukur otomatis ngumpul ke identity (`scale≈1, offset≈0`) — cek hasil pengukuran: Logos/Mon3tr/Mlynar/Amiya semuanya `scale` antara `0.993`–`1.007` setelah unifikasi, dibanding `0.85`–`1.11` sebelumnya.

**Konsekuensi:** operator lama (chibi.webm masih dari wiki.gg) yang JANGAN buru-buru ditambahin ke walking-chibi pool tanpa re-render idle-nya dulu — kalau maksa pakai video wiki apa adanya, `chibiFraming` (sekarang wrapper-shared, bukan idle-only lagi) nggak akan bisa ngoreksi mismatch antara idle dan move, hasilnya malah lebih parah dari skema lama.

### Dua bug lanjutan yang ketauan setelah unifikasi (masih chibi jalan, khusus Sakiko skin1 "Master of Melodia")

Meskipun idle+move Sakiko udah satu sumber sejak awal (dia nggak pernah punya chibi wiki.gg), skin1-nya ("Master of Melodia") masih nunjukin "lompatan" pas transisi diam↔jalan — beda dari operator lain yang udah keliatan mulus. Dua penyebab terpisah, keduanya spesifik ke operator yang punya prop dinamis (rantai/tail) yang posisinya beda jauh antar animasi:

1. **Video idle & move independen, nggak phase-locked.** `WalkingChibi.tsx` render idle dan move sebagai dua `<video autoPlay loop>` yang JALAN TERUS di background biar nggak ada reload pas di-toggle opacity — tapi ini artinya pas satu layer baru kelihatan (opacity 0→1), dia bisa lagi di titik MANAPUN dalam loop-nya sendiri, random. Buat operator dengan silhouette stabil sepanjang loop nggak kerasa, tapi buat Sakiko skin1 (tail-nya beneran ngayun jauh dalam SATU clip aja) titik acak ini bisa jauh dari pose yang dipakai buat kalibrasi. **Fix:** reset `currentTime = 0` pas PERSIS video itu jadi kelihatan (awal `walk()` buat move, `onComplete` buat idle) — refs `idleVideoElRef`/`moveVideoElRef` ditambah khusus buat nge-akses elemen `<video>` (bukan cuma div pembungkus opacity-nya) di `WalkingChibi.tsx`.
2. **Kalibrasi berbasis union-sample nggak match sama frame spesifik yang sekarang jadi acuan tetap.** Setelah fix #1, idle dan move SELALU mulai dari `t=0` — tapi `chibiFraming` awalnya dihitung dari union bounding box di banyak sample sepanjang durasi clip (rata-rata pergerakan), bukan dari frame `t=0` doang. Buat Sakiko skin1, union-based `offsetXPercent` (-14.7%) ternyata beda cukup jauh dari yang seharusnya dipakai khusus di `t=0` (-16.7%) — beda ~2 poin persentase, cukup kelihatan. **Fix:** re-ukur `chibiFraming` khusus di `t=0` (bukan union) buat operator/skin yang formula reset-currentTime ini berlaku — cukup ambil 1 sample di `t=0` masing-masing video, bukan loop banyak sample. Base Sakiko kebetulan hampir sama antara union vs t=0 (prop-nya nggak terlalu geser), jadi cuma skin1 yang perlu di-update ulang nilainya.

**Pelajaran buat operator baru ke depan:** kalau chibi capture pipeline-nya dipakai buat operator dengan prop yang ngayun jauh (kayak Sakiko), kalibrasi `chibiFraming` harus dilakuin khusus di `t=0` (bukan union-average) SEJAK AWAL — union cuma valid kalau nggak ada currentTime-reset di komponennya, atau kalau karakter nggak punya prop dinamis yang bikin posisi beda jauh antar titik waktu.

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

### Image Optimization

**Selalu gunakan komponen `Image` dari `next/image`, jangan pakai tag `<img>` biasa** — supaya dapat optimasi otomatis dari Next.js (lazy loading, resize/srcset responsif, konversi ke format modern seperti WebP/AVIF, mencegah layout shift).

```tsx
// JANGAN
<img src={operator.factionIcon} alt={operator.faction} className="w-6 h-6" />

// LAKUKAN
import Image from 'next/image'
<Image src={operator.factionIcon} alt={operator.faction} width={24} height={24} className="w-6 h-6 object-contain" />
```

**Kapan pakai `fill` vs `width`/`height`:**
- Container dengan ukuran dinamis/responsive (artwork operator, background) → `fill` + `sizes` (lihat `CharacterArt.tsx`)
- Icon/asset ukuran tetap (class icon, faction icon, skill icon) → `width` + `height` eksplisit

**Tambahan:**
- `priority` hanya untuk gambar above-the-fold yang langsung terlihat (contoh: artwork utama di `CharacterArt.tsx`)
- Selalu isi `alt` — string kosong (`alt=""`) hanya untuk icon dekoratif yang tidak butuh deskripsi

**Status migrasi:** Mayoritas komponen (`OperatorList`, `OperatorHud`, `SkillsPanel`, `TalentsPanel`, `Calendar`, `Dashboard`, `SplashScreen`, `OperatorTerminal`, `CharacterArt`, sebagian `SideMenu`) sudah pakai `next/image`. **Belum dimigrasi:** `OperatorRoster.tsx` (legacy, kandidat dihapus) dan 2 icon SVG kecil di `SideMenu.tsx` (`Base_icon.svg`, `Operator_icon.svg`) — masih pakai `<img>` biasa, perlu diganti ke `next/image` saat disentuh berikutnya.

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
