# Arknights Portfolio — Operator Context

> Dokumentasi khusus tentang **perlakuan/penanganan data operator**: cara scraping, download asset, dan chibi pipeline. Untuk arsitektur & konvensi umum project (tech stack, routing, struktur folder, data model, coding rules), lihat [context.md](context.md).

---

## Sumber Data

1. **Aceship Toolbox** — `https://aceship.github.io/AN-EN-Tags/akhrchars.html`
   - Stats, skills, talents, modules, range, trait — paling lengkap dan akurat
2. **Arknights Wiki** — `https://arknights.wiki.gg/wiki/{Operator_Name}`
   - Lore, profile info, voice actor, illustrator, physical exam
   - Asset gambar (artwork, skill icon) dan supply operation banner images
   - **Bukan lagi sumber chibi** — lihat bagian "Chibi Render Pipeline" di bawah
3. **PRTS Wiki** — `https://prts.wiki/w/{Operator_Name_CN}` — data CN/original, cross-check
4. **`ArknightsAssets/ArknightsGamedata`** (raw JSON di GitHub) — satu-satunya sumber untuk angka skill per-level (lihat langkah 6 di bawah)
5. Penguin Statistics / Gamepress — referensi tambahan opsional

---

## Menambah Operator Baru

Data operator disimpan satu file per operator di `src/data/operators/<slug>.ts` (`export default` bertipe `Operator`, lihat `src/types.ts`), diagregasi oleh `src/data/operators/index.ts` (import + tambah ke array `OPERATORS[]`). Menambah operator baru = buat satu file baru + satu baris import/entry di `index.ts`.

### 1. Data dasar
Nama, File No., class, branch, rarity, faction, position, race, gender, birthplace, birthday, height, combat experience, infection status, illustrator.

Level/elite/trust yang ditampilkan sesuai rarity:
- 6-star: E2 LV90 Trust 200 · 5-star: E2 LV80 Trust 200 · 4-star: E2 LV70 Trust 200 · 3-star: E1 LV55 Trust 200

### 2. Stats pada level target
Dari Aceship: HP, ATK, DEF, RES (angka), Block count, DP cost (angka), ASPD & redeploy time (string, `"2.1s"`, `"70s"`).

### 3. Attack range
Grid 2D: `0` = tile kosong, `1` = tile aktif, `2` = posisi operator.

```
[0,0,1,1,1]     .  .  ■  ■  ■
[0,1,1,1,1]     .  ■  ■  ■  ■
[2,1,1,1,1]  →  ★  ■  ■  ■  ■
[0,1,1,1,1]     .  ■  ■  ■  ■
[0,0,1,1,1]     .  .  ■  ■  ■
```

**Decode grid dari raw HTML wiki.gg (`#Range` section):** `border:1px solid transparent` = tile kosong (0, tidak ditampilkan); `border:1px solid gray; background:none` (dirender `□`) = tile AKTIF (1); tile biru/`#27A6F3` = posisi operator (2). Selalu cross-check hasil decode ke `range_table.json` kalau ragu.

### 4. Physical exam
6 parameter, tiap parameter berupa rating string: `"Flawed"` | `"Normal"` | `"Standard"` | `"Excellent"` | `"Outstanding"` | `"■■"`.
Field: Physical Strength, Mobility, Endurance, Tactical Acumen, Combat Skill, Originium Arts.

### 5. `how_to_get`
**Sumber: row infobox "How to obtain" di halaman wiki utama** (`https://arknights.wiki.gg/wiki/{OperatorName}`) — bukan field JSON `itemObtainApproach`.

Row ini berisi 3 `<div>` berurutan (cek raw HTML kalau markdown ambigu):
1. **Badge pill** (0-2 pill): `Recruitment`, `Headhunting`, `Kernel Headhunting`, atau `Limited Headhunting - {Nama Banner}`.
2. **Gift pack** (teks bebas jika ada), contoh `Coexistence (Purestream Pack)`.
3. **Metode lain** (teks bebas jika ada): nama stage, event/episode, store, atau kondisi starter operator.

Tiap bagian yang tidak kosong jadi satu elemen `how_to_get: string[]`, urut sesuai div (1 → 2 → 3). Ambil verbatim persis dari wiki (termasuk tanda baca, en dash `–`) — **jangan diringkas atau diparafrase**. Contoh: `['Headhunting', 'Recruitment']` (standar 3★/4★), `['Kernel Headhunting', 'Recruitment']` (standar 6★), `['Limited Headhunting - Celebration']` (limited).

### 6. Talents
```typescript
{ name: "Nama Talent", desc: "Deskripsi efek", elite: "E2" }
```

### 7. Skills

**Sumber utama: raw JSON dari `ArknightsAssets/ArknightsGamedata`, bukan wiki.** Jangan scrape/paraphrase wiki untuk data skill — nilai SP cost/init/durasi/angka berubah tiap level dan gampang salah kalau ditebak dari halaman wiki. Ambil sekali dari JSON, dapat nilai max-level (buat field top-level) sekaligus breakdown semua level (buat `levels[]`, dipakai fitur "Preview Level" di SkillsPanel) dalam satu langkah.

`Kengxxiao/ArknightsGameData_YoStar` valid sebagai referensi/cross-check, tapi kalau operator kosong di situ, langsung ke `ArknightsAssets/ArknightsGamedata` — jangan turun ke wiki.

Langkah:
1. Download `character_table.json` dan `skill_table.json` dari `https://raw.githubusercontent.com/ArknightsAssets/ArknightsGamedata/master/en/gamedata/excel/{file}.json` (besar — simpan di scratchpad, jangan commit).
2. Di `character_table.json`, cari entry operator by `name`, catat array `skills[].skillId` (contoh `skchr_folnic_1`, atau `skcom_xxx[N]` untuk skill generik/template).
3. Di `skill_table.json`, tiap `skillId` punya array `levels` (biasanya 10 entri: Lv1-7 + M1-M3, atau 7 entri untuk 3-star tanpa mastery). Tiap level punya `name`, `description` (template dengan placeholder), `blackboard` (`{key, value}`), `spData.{initSp,spCost}`, `duration`.
4. Render deskripsi final: substitusi placeholder dari blackboard, strip markup `<@ba.xxx>...</>`, `{key:0%}` → persen, `{key:0}`/`{key}` → integer, `{-key}` → negasi. Key kadang berformat `sumber@key` (bagian setelah `@` = nama key aslinya). Bersihkan spasi ganda/spasi-sebelum-tanda-baca sisa game data.
5. Field top-level (`desc`, `spInit`, `sp`, `dur`, `rank`) diisi dari entri **level terakhir** (M3 untuk operator ber-mastery, atau `7` untuk 3-star).
6. `levels: SkillLevelData[]` diisi dari **semua** entri array `levels`.
7. `icon` (`/operators/{nama}/skill-N.png`) dan `note` (opsional) tetap dicek dari wiki — dua field ini tidak ada di JSON.

`duration: -1` di JSON **tidak otomatis** berarti "Unlimited duration" — cek apakah deskripsi mentahnya benar-benar menyebut frasa itu secara eksplisit; kalau tidak, skip field `dur`.

### 8. Modules
```typescript
// Base module
{ code: "Original", name: "Nama Badge", desc: "Appointed as..." }

// Staged module
{ code: "BOM-X", name: "Nama Module", stages: [
  { stage: 1, hp?: "+175", atk?: "+55", effect: "Deskripsi efek" },
  ...
]}
```
3-star biasanya tidak punya module — gunakan `modules: {}`.

### 9. Profile / Story / Records (opsional tapi disarankan)
- **Profile**: scrape `https://arknights.wiki.gg/wiki/{OperatorName}/File`, section Profile → field `profile` (template literal, biasanya multi-line).
- **Story**: scrape `https://arknights.wiki.gg/wiki/{OperatorName}/Story`, ambil overview/background di atas (sebelum "Plot") → field `story`.
- **Records**: scrape halaman File yang sama, ambil section selain Profile (Clinical Analysis, Class Conversion Record, `???`, dll.) → `records: OperatorRecord[]`:
  ```typescript
  records: [{ title: 'Clinical Analysis', content: `...` }, ...]
  ```
  Ditampilkan sebagai accordion exclusive-toggle di ProfilePanel.

### 10. Update faction theme (jika faction baru)
Tambahkan entry baru di `src/data/factionThemes.ts`:
```typescript
'Nama Faction': { accent: [R, G, B], secondary: [R, G, B] },
```

### 11. Daftarkan ke `OPERATORS[]`
Buat `src/data/operators/<slug>.ts`, import & tambahkan ke array di `src/data/operators/index.ts`.

---

## Asset Download — WAJIB, jangan hanya isi data

**Setiap operator harus punya file gambar dan chibi yang sudah didownload ke `public/operators/{nama}/`.** Jangan pernah menambahkan entry data tanpa mendownload asset — menyebabkan gambar broken di UI. Jangan pernah pakai placeholder chibi dari operator lain.

### Struktur folder
- `base.png` — artwork base/E0 (wajib), `e1.png`/`e2.png` — elite promotion (jika ada), `skin1.png`, `skin2.png`, dll. — skin alternatif
- `skill-1.png`, `skill-2.png`, `skill-3.png` — skill icons
- `chibi.webm` — idle (wajib), `chibi-move.webm` — walking, `chibi-skin1.webm` dll. — per skin (lihat "Chibi Render Pipeline" di bawah untuk cara membuat file-file ini)

### Sumber & pattern URL (artwork & skill icon, dari `arknights.wiki.gg`)
```bash
curl -sL "https://arknights.wiki.gg/images/{OperatorName}.png" -o public/operators/{nama}/base.png
curl -sL "https://arknights.wiki.gg/images/{OperatorName}_Elite_2.png" -o public/operators/{nama}/e2.png
curl -sL "https://arknights.wiki.gg/images/{OperatorName}_Skin_1.png" -o public/operators/{nama}/skin1.png
curl -sL "https://arknights.wiki.gg/images/Skill-{OperatorName}1.png" -o public/operators/{nama}/skill-1.png
```
Summon icon (jika ada): `https://arknights.wiki.gg/images/{SummonName}.png`. Wiki UI icons (sekali saja, biasanya sudah ada): `Operator_iconv2.svg`, `Base_iconv2.svg`. Supply mission banners: `https://arknights.wiki.gg/images/{Mission_Name}.png` → `public/missions/`.

**Selalu verifikasi ukuran file hasil download > 0 bytes.** Jika 0 atau sangat kecil, URL salah.

### Icon class/branch/faction
Cek dulu apakah sudah ada sebelum download: `public/icons/classes/{class}-class.png`, `public/icons/branches/{branch}-branch.png`, `public/icons/factions/{faction}.png`.

### Path reference dalam data
```typescript
skins: [
  { id: 'base', label: 'Base', src: '/operators/{nama}/base.png', chibiSrc: '/operators/{nama}/chibi.webm' },
]
skills: [{ icon: '/operators/{nama}/skill-1.png', ... }]
classIcon: '/icons/classes/{class}-class.png'
branchIcon: '/icons/branches/{branch}-branch.png'
factionIcon: '/icons/factions/{faction}.png'
```

---

## Operator dengan Summon

Beberapa operator (Deepcolor → Tentacle, Kal'tsit → Mon3tr, Magallan → Soaring Dragon) punya summon unit — deploy terpisah dari operator utama. Gunakan field `summon`, yang menerima satu objek ATAU array of objects:

```typescript
// Satu bentuk summon tetap (mayoritas kasus)
summon: {
  name: 'Tentacle',
  icon: '/operators/deepcolor/tentacle.png',
  position: 'Melee',
  trait: 'Blocks 1 enemy',
  stats: { hp: 2016, atk: 462, def: 335, res: 0, block: 1, cost: 5, aspd: '1.25s', rdp: '10s' },
  range: [[2]],
  note: 'Cannot be actively healed. Deployed through talent Tentacle Summoner.',
}

// Summon dengan beberapa bentuk tergantung skill aktif (mis. Magallan's Soaring Dragon F/L/A)
summon: [
  { name: 'Soaring Dragon F', icon: '...', position: 'Low/High', trait: '...', stats: {...}, range: [[2]], note: 'Active while Skill 1 is equipped.' },
  { name: 'Soaring Dragon L', icon: '...', position: 'Low', trait: '...', stats: {...}, range: [[2]], note: 'Active while Skill 2 is equipped.' },
  { name: 'Soaring Dragon A', icon: '...', position: 'High', trait: '...', stats: {...}, range: [[2]], note: 'Active while Skill 3 is equipped.' },
]
```

**Sumber data:** trait/talent section halaman operator utama, halaman summon dedicated (`https://arknights.wiki.gg/wiki/{SummonName}`), atau halaman list `https://arknights.wiki.gg/wiki/Summon`. **Asset:** icon dari wiki, simpan di `public/operators/{nama}/{summon-name}.png`. **Rendering:** `TalentsPanel.tsx` menampilkan satu card per entry (single object dibungkus jadi array 1 elemen secara otomatis) di bawah daftar talent — cukup isi array kalau operator punya lebih dari satu bentuk summon, tidak perlu ubah komponen.

## Operator dengan Variants (multi-class)

Contoh: Amiya Caster/Guard/Medic. Setiap variant punya data combat sendiri (stats, skills, talents, modules, skins) tapi berbagi data identitas (name, faction, race, cv, profile, dll.) dari operator utama:

```typescript
variants: [{
  class: 'Guard', branch: 'Arts Fighter', position: 'Melee', trait: '...',
  stats: { ... }, range: { ... }, talents: [...], skills: [...], modules: { ... },
  classIcon: '/icons/classes/guard-class.png', branchIcon: '/icons/branches/arts-fighter-branch.png',
  skins: [{ id: 'base', label: 'Base', src: '/operators/amiya/guard-base.png', chibiSrc: '/operators/amiya/guard-chibi.webm' }],
}]
```

## Operator dengan Alter

Alter adalah operator kedua yang berdiri sendiri (class berbeda) tapi dibundel dalam satu entry via field `alter` — bukan entri terpisah di `OPERATORS[]`, dan bukan `variants` (yang berbagi identitas). `alter` menerima satu objek ATAU array of objects (operator dengan lebih dari satu alter resmi, mis. Ch'en → Holungday + Dawnstreak):

```typescript
// Satu alter (mayoritas kasus)
{ name: 'Amiya', class: 'Caster', /* ... */, alter: { name: 'Amiya', class: 'Guard', /* data alter lengkap, semua field Operator */ } }

// Lebih dari satu alter
{ name: "Ch'en", class: 'Guard', /* ... */, alter: [
  { name: "Ch'en the Holungday", class: 'Sniper', /* ... */ },
  { name: "Ch'en the Dawnstreak", class: 'Warrior', /* ... */ },
] }
```

Diakses via `/operator?operator={base-slug}&alter={n}` dengan `n` 1-based index alter (`alter=1` = alter pertama, `alter=2` = kedua, dst.) — `alter=true` tetap didukung sebagai alias lama untuk alter pertama. Bukan slug nama alter. Ditoggle lewat tombol-tombol di sebelah avatar utama (`OperatorTerminal.tsx`, satu tombol per alter otomatis muncul, tidak perlu ubah komponen kalau nambah alter baru).

---

## Chibi Render Pipeline (idle + walking state)

**`fexli/ArknightsResource` (via `scripts/chibi-pipeline/`) adalah sumber default untuk chibi — idle maupun walking — bukan wiki.gg.** Wiki.gg tidak punya chibi untuk semua operator, dan mencampur sumber (idle dari wiki + move dari render) menyebabkan bug alignment. Static art (splash, skill icon, portrait) tetap dari wiki.gg.

### Model Spine yang tersedia
Repo `fexli/ArknightsResource` menyimpan 2 model per operator di `spine/char_XXX_{code}/`:
1. **`build_char_XXX_{code}/Spine/`** — model dorm/base. Clip: `Default`, `Move`, `Sit`, `Relax`, `Interact`, `Sleep`. Ini yang dipakai project ini.
2. **`char_XXX_{code}/Front/` dan `Back/`** — model battle (per arah hadap), belum pernah dipakai di project ini.

Chibi `.webm` lama dari wiki.gg cuma berisi **satu** animasi idle tunggal (bukan gabungan semua clip dorm) — state "berjalan" harus di-render terpisah dari clip `Move`.

### Cara render
Gunakan tooling committed di `scripts/chibi-pipeline/` (lihat `scripts/chibi-pipeline/README.md` untuk cara pakai lengkap) — bukan lagi script one-off per operator.

```sh
node scripts/chibi-pipeline/render-chibi.mjs --model spine/char_XXX_code/build_char_XXX_code/Spine --anim Relax --out .../chibi.webm
node scripts/chibi-pipeline/render-chibi.mjs --model spine/char_XXX_code/build_char_XXX_code/Spine --anim Move --out .../chibi-move.webm
```

Alur di baliknya: deteksi versi Spine dari header `.skel` → ambil runtime `spine-canvas.js` yang cocok → download `.skel`/`.atlas`/`.png` dari `raw.githubusercontent.com` → serve lewat static server lokal (hindari CORS `file://`) → render tiap frame via Puppeteer (`omitBackground: true` untuk alpha asli) → encode `ffmpeg -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0` ke `.webm` (hasil `alpha_mode=1`, format sama seperti chibi wiki lama).

**Yang tetap manual (butuh judgment, lihat README untuk detail):** menemukan char code (nama tampilan sering tidak mirip nama folder), disambiguasi folder skin (render 1 frame + bandingkan visual ke `skin1.png`/`skin2.png`), cek clip 0-duration dulu (sebagian operator idle di `Relax` bukan `Default`), pilih `--bounds-mode pixel-probe` kalau model punya attachment tak terlihat yang mengacaukan `getBounds()` (gejala: bounding box identik di semua sample regardless of waktu), dan penempatan akhir file ke `public/`.

### `chibiFraming` vs `chibiDetailFraming` — isi default, jangan dikalibrasi

Dua field di `OperatorSkin` (`src/types.ts`), sibling tapi tujuan beda — jangan saling gantikan:

| Field | Dipakai di | Tujuan |
|---|---|---|
| `chibiFraming` | `WalkingChibi.tsx` — satu transform (`scale`+`offsetXPercent`+`offsetYPercent`) diterapkan ke wrapper yang membungkus **kedua** layer (idle & move) sekaligus | Ukuran + posisi mascot secara keseluruhan; karena satu transform untuk keduanya, idle & move otomatis selalu align |
| `chibiDetailFraming` | `CharacterArt.tsx` (HUD chibi halaman detail, cuma idle) | Kosmetik murni — biar center di box HUD |

**Jangan coba mengukur/mengkalibrasi nilai ini supaya pas pixel-perfect di frame** (dulu ada `measure-framing.mjs` + proses sampling untuk itu — sekarang tidak dipakai lagi untuk operator baru). Cukup isi `chibiFraming: { scale: 1, offsetXPercent: 0, offsetYPercent: 0 }` sebagai default di setiap skin yang punya `chibiMoveSrc`. `chibiDetailFraming` tidak perlu diisi sama sekali — `OperatorTerminal.tsx` otomatis fallback ke `chibiFraming` kalau kosong. Fine-tuning visual (kalau memang perlu) dilakukan belakangan oleh user secara manual, bukan bagian dari alur penambahan operator.

**Prasyarat `chibiFraming`:** idle dan move harus dirender dari pipeline/konvensi yang sama. Kalau idle operator belum sempat direndernya ulang lewat pipeline ini (masih chibi wiki.gg lama), jangan paksa masuk skema wrapper-shared — render ulang idle-nya dulu.

`chibiDetailFraming` tidak wajib diisi manual — `OperatorTerminal.tsx` otomatis fallback ke `chibiFraming` kalau field ini kosong tapi `chibiFraming` ada (masuk akal karena keduanya sama-sama menampilkan capture persegi hasil pipeline yang sama). Isi eksplisit hanya kalau box HUD detail memang butuh nilai berbeda dari mascot berjalan. Operator lama yang belum punya `chibiFraming` sama sekali (masih chibi wiki.gg landscape) tetap jatuh ke default generic `CharacterArt.tsx` (`scale-110 -translate-y-2 md:-translate-y-4`) — tidak terpengaruh perubahan ini.

### Perilaku `WalkingChibi.tsx` (mascot berjalan)

- `getWalkableChibis()` (`src/lib/operators.ts`) generik — skin manapun yang punya `chibiMoveSrc` **dan** `chibiFraming` otomatis masuk pool walking chibi, otomatis dapat toggle button di `RosterCard` dan `CharacterArt`, tanpa perlu ubah kode.
- Dua layer `<video>` (idle+move) ditumpuk, opacity di-toggle via GSAP saat mulai/berhenti jalan agar tidak ada reload/flicker.
- Video yang sedang hidden (opacity 0) di-`pause()` eksplisit (bukan cuma opacity), karena decode video alpha-channel VP9 mahal — signifikan untuk performa kalau banyak mascot aktif sekaligus.
- Untuk operator dengan prop dinamis yang berayun jauh (rantai, ekor): reset `currentTime = 0` persis saat layer video itu jadi terlihat (video idle & move berjalan independen di background, titik loop-nya bisa acak kalau tidak direset), dan kalibrasi `chibiFraming` khusus di `t=0` (bukan union-average sepanjang clip) supaya konsisten dengan titik reset itu.

---

## Checklist Penambahan Operator

- [ ] Data dasar, stats, range (base + E1/E2), physical exam
- [ ] Semua talent, semua skill dengan `levels[]` (dari `ArknightsAssets/ArknightsGamedata`)
- [ ] Modules (atau `{}` untuk 3-star)
- [ ] Profile / story / records (opsional, dari halaman File & Story wiki)
- [ ] **Asset artwork didownload** (base.png, e2.png, skin*.png)
- [ ] **Skill icons didownload**
- [ ] **Chibi idle + walking di-render via `scripts/chibi-pipeline/`** (bukan wiki.gg), `chibiFraming` diisi default `{ scale: 1, offsetXPercent: 0, offsetYPercent: 0 }` (jangan dikalibrasi/diverifikasi pas frame — `chibiDetailFraming` tidak perlu diisi, otomatis fallback)
- [ ] Class/branch/faction icon tersedia di `public/icons/` (faction theme baru ditambahkan jika perlu)
- [ ] Summon data & asset (jika ada)
- [ ] Entry ditambahkan ke `OPERATORS[]` (`src/data/operators/<slug>.ts` + `index.ts`)
- [ ] Build berhasil tanpa TypeScript error (`pnpm build`)
- [ ] Tampilan di browser sudah benar (navigasi, skin selector, semua panel)
