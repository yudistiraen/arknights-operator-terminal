// Builds src/data/items.json + public/items/*.webp for the Items (Depot) page.
//
// Names/descriptions come from the EN gamedata (ArknightsAssets/ArknightsGamedata),
// icons from a local clone of fexli/ArknightsResource (its gamedata is CN-only).
//
// Usage: node scripts/items/gen-items.mjs [path/to/ArknightsResource]

import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const resourceRoot = path.resolve(process.argv[2] ?? path.join(projectRoot, '../ArknightsResource'))
const resourceIconDir = path.join(resourceRoot, 'items')
const outputIconDir = path.join(projectRoot, 'public/items')
const outputDataPath = path.join(projectRoot, 'src/data/items.json')
const itemTableUrl = 'https://raw.githubusercontent.com/ArknightsAssets/ArknightsGamedata/master/en/gamedata/excel/item_table.json'
const ICON_SIZE = 128

// Depot tabs in-game are driven by classifyType; NONE never shows in the Depot.
const CATEGORY_BY_CLASSIFY = {
  MATERIAL: 'materials',
  NORMAL: 'basic',
  CONSUME: 'consumables',
  NONE: 'other',
}

const CURRENCY_TYPES = new Set(['GOLD', 'DIAMOND', 'DIAMOND_SHD', 'HGG_SHD', 'LGG_SHD', 'CLASSIC_SHD', 'EXTERMINATION_AGENT'])

function groupOf(item) {
  const { classifyType, iconId } = item
  // A handful of gift-ticket rows have a numeric itemType (e.g. 86).
  const itemType = String(item.itemType)
  if (classifyType === 'MATERIAL') {
    if (itemType === 'CARD_EXP') return 'Battle Records'
    if (itemType === 'VOUCHER_FULL_POTENTIAL') return 'Personal Letters'
    if (iconId.startsWith('MTL_SL') || iconId.startsWith('MTL_SK')) return 'Upgrade Materials'
    if (iconId.startsWith('MTL_ASC')) return 'Chips'
    if (iconId.startsWith('mod_')) return 'Module Materials'
    if (/^(p_char|class_p|tier\d)/.test(iconId)) return 'Operator Tokens'
    return 'Other Materials'
  }
  if (classifyType === 'NORMAL') {
    if (CURRENCY_TYPES.has(itemType) || itemType.endsWith('_COIN')) return 'Currency'
    if (itemType.includes('TKT') || itemType.startsWith('CLASSIC_FES_PICK')) return 'Permits'
    if (itemType === 'MATERIAL') return 'Base Materials'
    return 'Other'
  }
  if (classifyType === 'CONSUME') {
    if (itemType === 'AP_SUPPLY') return 'Sanity Potions'
    if (itemType.includes('VOUCHER')) return 'Vouchers'
    if (itemType === 'RENAMING_CARD') return 'Renaming Cards'
    if (itemType === 'ITEM_PACK') return 'Packs'
    return 'Other'
  }
  if (itemType === 'ACTIVITY_ITEM' || itemType === 'ACTIVITY_COIN') return 'Event Items'
  if (itemType === 'UNI_COLLECTION') return 'Collectibles'
  return 'Misc'
}

// Gamedata text carries rich-text markup like <@ba.kw>...</> or <i>, and literal \n.
function cleanText(text) {
  if (!text) return null
  const cleaned = text.replace(/<\/?[a-z@$][^>]*>|<\/>/gi, '').replace(/\\n/g, '\n').trim()
  return cleaned || null
}

async function main() {
  if (!existsSync(resourceIconDir)) throw new Error(`Icon folder not found: ${resourceIconDir}`)
  const availableIcons = new Set(readdirSync(resourceIconDir).filter(file => file.endsWith('.png')).map(file => file.slice(0, -4)))

  const response = await fetch(itemTableUrl)
  if (!response.ok) throw new Error(`item_table fetch failed: ${response.status}`)
  const itemTable = await response.json()

  const items = Object.values(itemTable.items)
    .map(item => ({
      id: item.itemId,
      name: item.name,
      rarity: Number(item.rarity.replace('TIER_', '')) || 1,
      icon: availableIcons.has(item.iconId) ? item.iconId : null,
      category: CATEGORY_BY_CLASSIFY[item.classifyType] ?? 'other',
      group: groupOf(item),
      usage: cleanText(item.usage),
      description: cleanText(item.description),
      obtain: cleanText(item.obtainApproach),
      sortId: item.sortId,
    }))
    .sort((left, right) => left.sortId - right.sortId)

  mkdirSync(outputIconDir, { recursive: true })
  const existingOutputs = new Set(readdirSync(outputIconDir))
  const iconIds = [...new Set(items.map(item => item.icon).filter(Boolean))]
  let convertedCount = 0
  for (const iconId of iconIds) {
    if (existingOutputs.has(`${iconId}.webp`)) continue
    await sharp(path.join(resourceIconDir, `${iconId}.png`))
      .resize(ICON_SIZE, ICON_SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 82 })
      .toFile(path.join(outputIconDir, `${iconId}.webp`))
    convertedCount++
  }

  writeFileSync(outputDataPath, JSON.stringify(items.map(({ sortId, ...item }) => item)) + '\n')

  const missingIcons = items.filter(item => !item.icon).length
  console.log(`${items.length} items → ${path.relative(projectRoot, outputDataPath)}`)
  console.log(`${iconIds.length} icons (${convertedCount} newly converted), ${missingIcons} items without icon`)
}

main().catch(error => { console.error(error); process.exit(1) })
