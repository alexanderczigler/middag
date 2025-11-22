import { readdirSync, writeFileSync } from 'node:fs'
import { resolve, basename } from 'node:path'

// Sökvägen till din recipe-mapp
const recipesDir = resolve('src/lib/recipes')

// Hämta alla filnamn i katalogen utan filändelse
const files = readdirSync(recipesDir)
  .filter((file) => file.endsWith('.json'))
  .map((file) => basename(file, '.json'))

// Generera union-typen
const typeFileContent = `// This file is auto-generated. Do not edit manually.

export type Recipe = ${files.map((name) => `'${name}'`).join(' | ')};
`

// Skriv ut resultatet till en TypeScript-fil
const outputPath = resolve('src/lib/types/recipes.ts')
writeFileSync(outputPath, typeFileContent)

console.log(`Recipe types generated successfully at: ${outputPath}`)
