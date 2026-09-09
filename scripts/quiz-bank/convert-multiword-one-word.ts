/**
 * Convert multiword `word(...)` chapter-bank calls to `sa(...)` while preserving
 * proper names. Run without --write for a reviewable report, then with --write.
 */
import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const root = path.resolve(process.cwd(), 'scripts/quiz-bank')
const write = process.argv.includes('--write')
const files = fs.readdirSync(root)
  .filter(name => /^(1-kings|2-kings|mark)-\d+\.ts$/.test(name))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

const connectors = new Set(['a', 'an', 'and', 'at', 'by', 'daughter', 'from', 'in', 'king', 'of', 'on', 'son', 'the'])
const namedTitles = new Set([
  'the Father', 'the Jordan', 'the LORD', 'the Spirit', 'the Twelve', 'the Eleven',
  'the LORD’s', 'the Lord', 'Son of David', 'Son of Man', 'Mount Carmel', 'Red Sea', 'Holy Spirit',
])

function literal(node: ts.Expression | undefined) {
  return node && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) ? node.text : null
}

function isProperName(value: string) {
  const answer = value.trim()
  if (namedTitles.has(answer)) return true
  if (/\band\b/i.test(answer) || /^(?:Hear|Lay|Strike|Go|Come|Do|Be)\b/.test(answer)) return false
  const tokens = answer.split(/\s+/)
  if (tokens.length > 4) return false
  if (/^the\s+[A-Z][A-Za-z’'\-]*s(?:’|'s)?$/.test(answer)) return false
  const significant = tokens.filter(token => !connectors.has(token.toLowerCase()))
  if (!significant.length) return false
  return significant.every(token => /^(?:[A-Z][A-Za-z’'\-]*|LORD(?:'s)?|God(?:'s)?)$/.test(token))
}

let total = 0
for (const name of files) {
  const file = path.join(root, name)
  let source = fs.readFileSync(file, 'utf8')
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const replacements: Array<{ start:number; end:number }> = []
  const kept: string[] = []

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'word') {
      const answer = literal(node.arguments[2])
      if (answer && answer.trim().split(/\s+/).length > 1) {
        if (isProperName(answer)) kept.push(answer)
        else replacements.push({ start: node.expression.getStart(ast), end: node.expression.getEnd() })
      }
    }
    ts.forEachChild(node, visit)
  }
  visit(ast)

  if (!replacements.length && !/\bsa\s*\(/.test(source)) continue
  total += replacements.length
  if (replacements.length) console.log(`${name}: convert ${replacements.length}${kept.length ? `; keep ${[...new Set(kept)].join(', ')}` : ''}`)
  if (!write) continue

  for (const replacement of replacements.sort((a, b) => b.start - a.start)) {
    source = `${source.slice(0, replacement.start)}sa${source.slice(replacement.end)}`
  }
  source = source.replace(
    /import \{([^}]*\bword\b[^}]*)\} from '\.\/types';?/,
    (_match, names: string) => {
      const unique = names.split(',').map(value => value.trim()).filter((value, index, all) => value !== 'sa' || all.indexOf(value) === index)
      if (!unique.includes('sa')) unique.push('sa')
      return `import { ${unique.join(', ')} } from './types'`
    },
  )
  fs.writeFileSync(file, source)
}

console.log(`${write ? 'Converted' : 'Would convert'} ${total} multiword one_word rows to short_answer.`)
