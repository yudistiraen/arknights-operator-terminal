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
├── App.tsx                  # Root component, state management, panel expand/collapse logic
├── main.tsx                 # React entry point
├── index.css                # Tailwind imports, design tokens (@theme), scrollbar, keyframes
├── constants.ts             # Reusable Tailwind class strings (button styles, exam ratings)
├── types.ts                 # Semua TypeScript interfaces (Operator, Skill, Module, dll.)
├── data/
│   └── operators.ts         # Array OPERATORS[] — semua data operator hardcoded di sini
├── components/
│   ├── SplashScreen.tsx     # Layar pembuka "Click to Enter"
│   ├── CharacterArt.tsx     # Tampilan artwork operator (kiri layar)
│   ├── OperatorHud.tsx      # HUD info operator: level, class, nama, rarity (kiri bawah)
│   ├── SkinSelector.tsx     # Tombol pilih skin operator (kiri atas)
│   ├── TopBar.tsx           # Mute button + "RHODES ISLAND" badge (kanan atas)
│   ├── NavigationArrows.tsx # Tombol navigasi antar operator (panah kiri/kanan)
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
├── *.png                    # Asset gambar: operator art, skill icons, class icons, faction icons
├── *.mp3                    # Audio: BGM, SFX (click, transition, enter)
└── *.webp                   # Logo Arknights
```

## Data Model

Semua data operator disimpan di `src/data/operators.ts` sebagai array `OPERATORS[]` bertipe `Operator[]`.

### Interface Operator (src/types.ts)

```typescript
interface Operator {
  // Identitas
  name: string              // "Rosmontis"
  fileNo: string            // "RE45"
  class: string             // "Sniper"
  branch: string            // "Flinger"
  rarity: number            // 6 (1-6 stars)
  level: number             // 90
  elite: number             // 2 (0, 1, atau 2)
  trust: number             // 200

  // Personal info
  faction: string           // "Elite Op"
  position: string          // "Ranged" | "Melee"
  race: string              // "Feline"
  gender: string            // "Female" | "Male"
  birthplace: string        // "Columbia"
  birthday: string          // "July 6th"
  height: string            // "142 cm"
  combatExp: string         // "1 year"
  infectionStatus: string   // "Infected" | "Non-infected"
  illustrator: string       // "唯@W"

  // Voice actors
  cv: {
    JP: string
    CN: string
    EN: string
    KR: string
  }

  // Combat data
  trait: string             // Deskripsi trait panjang
  stats: {
    hp: number
    atk: number
    def: number
    res: number
    block: number
    cost: number
    aspd: string            // "2.1s"
    rdp: string             // "70s"
  }
  range: {
    base: number[][]        // Grid 2D: 0=kosong, 1=tile, 2=operator position
    e1: number[][]
  }
  physicalExam: Record<string, string>  // { "Physical Strength": "Normal", ... }
  talents: Talent[]
  skills: Skill[]
  modules: Record<string, OperatorModule>

  // Lore & visuals
  lore: string              // Narasi multi-paragraf
  classIcon: string         // Path ke icon class
  branchIcon: string        // Path ke icon branch
  factionIcon: string       // Path ke icon faction
  skins: OperatorSkin[]     // Array skin: { id, label, src }
}
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
- Level/elite/trust yang ingin ditampilkan (biasanya max: E2 LV90 Trust 200)
- Faction, position, race, gender, birthplace, birthday, height, combat experience
- Infection status, illustrator

#### 2. Ambil stats pada level target
Dari Aceship, ambil stats pada E2 LV90 Trust 200:
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
- `"Flawed"` | `"Normal"` | `"Standard"` | `"Excellent"` | `"Outstanding"`

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
  icon: "/nama-operator-skill-N.png",   // Upload icon ke public/
  activation: "Manual" | "Auto",
  recovery: "Auto" | "Offensive" | "Defensive",
  desc: "Deskripsi efek skill pada rank M3",
  spInit: number,
  sp: number,
  rank: "M3",
  dur?: "30s",                           // Opsional jika skill punya durasi
  note?: "Catatan tambahan efek"         // Opsional
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
    { stage: 1, hp?: "+175", atk?: "+55", def?: string, aspd?: string, effect: "Deskripsi efek" },
    { stage: 2, ... },
    { stage: 3, ... },
  ]
}
```

#### 8. Ambil lore
Copy lore/story quote dari Wiki. Gunakan template literal (`backtick`) karena biasanya multi-line dengan line breaks `\n`.

#### 9. Siapkan asset gambar
Upload ke folder `public/`:
- Operator art untuk setiap skin: `{nama}-base.png`, `{nama}-e2.png`, `{nama}-skin1.png`, dll.
- Skill icons: `{nama}-skill-1.png`, `{nama}-skill-2.png`, `{nama}-skill-3.png`
- Class icon: `/{class}-class.png` (reuse jika sudah ada)
- Branch icon: `/{branch}-branch.png`
- Faction icon: `/{faction}.png` (reuse jika sudah ada)

#### 10. Tambahkan entry ke OPERATORS array
Buka `src/data/operators.ts` dan tambahkan objek baru ke array `OPERATORS[]` mengikuti format operator yang sudah ada.

### Tips Scraping dengan AI/Claude

Ketika menggunakan Claude untuk membantu scraping:
1. Buka halaman wiki operator di browser
2. Minta Claude scrape menggunakan skill `firecrawl-scrape` dengan URL wiki operator
3. Claude akan mengekstrak data dan memformatnya sesuai interface `Operator`
4. Review data yang di-generate, pastikan angka stats dan deskripsi skill akurat
5. Cross-check dengan Aceship untuk akurasi stats

### Checklist Penambahan Operator

- [ ] Data dasar (nama, class, rarity, dll.) terisi lengkap
- [ ] Stats sesuai level target (E2 LV90 Trust 200)
- [ ] Attack range base dan E1/E2 benar
- [ ] Physical exam 6 parameter terisi
- [ ] Semua talent tercatat
- [ ] Semua skill dengan detail SP, durasi, deskripsi M3
- [ ] Modules (original + upgrade) terisi
- [ ] Lore/story quote sudah di-copy
- [ ] Asset gambar sudah di-upload ke `public/`
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
- Asset statis → `public/`
