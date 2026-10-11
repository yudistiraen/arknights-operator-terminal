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
│   ├── operators/            # Satu file per operator (bukan lagi satu file besar operators.ts — direstrukturisasi ~akhir Juli/awal Agustus 2026)
│   │   ├── {slug}.ts         # `const {camelCaseSlug}: Operator = { ... }` + `export default` — satu operator per file
│   │   └── index.ts          # Import semua file operator + agregasi ke array `OPERATORS[]` (di-sort by rarity+name), export `DEFAULT_OPERATOR_INDEX`
│   ├── factionThemes.ts     # Mapping faction → accent/secondary RGB colors untuk dynamic theming
│   └── events.ts             # Data GameEvent[] untuk Calendar
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

Data operator disimpan satu file per operator di `src/data/operators/{slug}.ts` (tiap file `export default` satu object bertipe `Operator`), diagregasi oleh `src/data/operators/index.ts` (import tiap file + gabung jadi array `OPERATORS[]`, di-sort `(a, b) => a.rarity - b.rarity || a.name.localeCompare(b.name)`). Menambah operator baru = buat satu file baru di folder ini + tambah satu import/entry di `index.ts` — lihat [operator_context.md](operator_context.md) untuk alur lengkap scraping/asset/chibi-nya, dokumen ini (context.md) fokus ke arsitektur & data model saja.

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

> **Dokumentasi khusus operator** (cara scraping data, download asset, chibi pipeline, riwayat batch penambahan operator) dipindah ke [operator_context.md](operator_context.md) — dokumen ini fokus ke arsitektur & konvensi umum project.

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
