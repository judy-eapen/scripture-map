import mammoth from 'mammoth'

async function main() {
  const result = await mammoth.extractRawText({ path: '/Users/judydarvin/Desktop/STG/1 Kings RSV.docx' })
  const lines = result.value.split('\n').filter(l => l.trim()).slice(0, 40)
  lines.forEach(l => console.log(JSON.stringify(l)))
}
main().catch(console.error)
