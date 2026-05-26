import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const guidesPath = path.join(__dirname, '../src/stores/landscape/data/guides.ts')
const content = fs.readFileSync(guidesPath, 'utf-8')

const lines = content.split('\n')

const header = lines.slice(0, 3).join('\n')

const guide1 = lines.slice(4, 161).join('\n')
const guide2to6 = lines.slice(161, 896).join('\n')
const guide7to15 = lines.slice(896, lines.length - 1).join('\n')

const guides1Content = `${header}

export const guides1: GlobalGuide[] = [
${guide1}
]
`

const guides2Content = `${header}

export const guides2: GlobalGuide[] = [
${guide2to6}
]
`

const guides3Content = `${header}

export const guides3: GlobalGuide[] = [
${guide7to15}
]
`

const indexContent = `import type { GlobalGuide } from '@/typesOfPages/landscape/data'
import { guides1 } from './guides1'
import { guides2 } from './guides2'
import { guides3 } from './guides3'

export const allGuides: GlobalGuide[] = [...guides1, ...guides2, ...guides3]
`

fs.writeFileSync(path.join(__dirname, '../src/stores/landscape/data/guides1.ts'), guides1Content)
fs.writeFileSync(path.join(__dirname, '../src/stores/landscape/data/guides2.ts'), guides2Content)
fs.writeFileSync(path.join(__dirname, '../src/stores/landscape/data/guides3.ts'), guides3Content)
fs.writeFileSync(path.join(__dirname, '../src/stores/landscape/data/index.ts'), indexContent)

console.log('✅ Guides files split successfully!')
console.log('  - guides1.ts: guide-1')
console.log('  - guides2.ts: guide-2 to guide-6')
console.log('  - guides3.ts: guide-7 to guide-15')
console.log('  - index.ts: exports allGuides')
