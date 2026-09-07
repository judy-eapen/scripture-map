import fs from 'node:fs'

for (let chapter = 1; chapter <= 16; chapter += 1) {
  const body = `// Mark ${chapter} — NKJV/Orthodox Study Bible verse-anchored quiz bank.\nimport { buildMarkBank } from './mark-builder';\n\nexport default buildMarkBank(${chapter});\n`
  fs.writeFileSync(`scripts/quiz-bank/mark-${chapter}.ts`, body)
}
console.log('Wrote Mark chapter bank entry points 1-16')
