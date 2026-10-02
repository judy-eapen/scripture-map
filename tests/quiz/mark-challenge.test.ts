import { describe, it, expect } from 'vitest'
import markSource from '../../data/mark-source.json'
import { markChallengeQuestions as bank } from '../../data/mark-challenge'
import { availableQuestions, challengeTotals, emptyChallenge, recordAnswer, restoreChallenge } from '../../lib/mark-challenge'

describe('Mark Challenge', () => {
  it('preserves the 49 supplied questions and identifies the 39 requested additions', () => {
    expect(bank).toHaveLength(88)
    expect(new Set(bank.map(q=>q.id)).size).toBe(88)
    const original = bank.filter(q=>q.source.kind==='user-provided')
    expect(original).toHaveLength(49)
    expect([6,7,8,9,10].map(c=>original.filter(q=>q.chapter===c).length)).toEqual([25,11,8,5,0])
    expect(original.every(q=>q.source.kind==='user-provided' && q.source.item && q.source.image)).toBe(true)
    const additions = bank.filter(q=>q.source.kind==='user-requested')
    expect(additions).toHaveLength(39)
    expect(additions.every(q=>q.source.kind==='user-requested' && q.source.reference==='data/mark-source.json' && q.source.authorization)).toBe(true)
    expect(bank.every(q=>q.answer && q.explanation && !q.special)).toBe(true)
    for (const chapter of [6,7,8,9,10]) for (const points of [100,200,300,400,500]) {
      expect(availableQuestions(bank,emptyChallenge(),chapter,points).length).toBeGreaterThanOrEqual(3)
    }
    expect(bank.find(q=>q.id==='mark-challenge-8-01')?.question).toContain('Four loaves')
    expect(bank.find(q=>q.id==='mark-challenge-8-03')?.options).toEqual(['Magadan','Dalmanutha','Bethsaida','Capernaum'])
  })
  it('reconstructs every fill-in quotation exactly from the Orthodox Study Bible text', () => {
    for (const q of bank.filter(q => q.type === 'fill_blank')) {
      const answers = q.answer!.split(';').map(part => part.trim())
      const quote = q.question.match(/“(.+)”/)?.[1]
      expect(quote, q.id).toBeDefined()
      expect(quote!.match(/____/g)?.length, q.id).toBe(answers.length)
      let index = 0
      const completed = quote!.replace(/____/g, () => answers[index++])
      const verse = markSource.chapters.find(c => c.chapter === q.chapter)!.verses.find(v => v.verse_number === q.verse_number)!
      expect(verse.text, q.id).toContain(completed)
    }
  })
  it('keeps every feedback passage aligned with its referenced Orthodox Study Bible verses', () => {
    for (const q of bank) {
      const range = q.verse_ref!.split(':')[1].split('–').map(Number)
      const verses = markSource.chapters.find(c => c.chapter === q.chapter)!.verses
      const expected = verses.filter(v => v.verse_number >= range[0] && v.verse_number <= range[range.length - 1]).map(v => v.text).join(' ')
      expect(q.explanation, q.id).toBe(expected)
    }
  })
  it('awards points once, consumes both correct and wrong cards, resets streak without deducting score', () => {
    let state=emptyChallenge()
    for (const q of bank.slice(0,3)) state=recordAnswer(state,bank,q.id,true)
    const score=bank.slice(0,3).reduce((sum,q)=>sum+q.points,0)
    expect(recordAnswer(state,bank,bank[0].id,false)).toBe(state)
    state=recordAnswer(state,bank,bank[3].id,false)
    expect(challengeTotals(bank,state)).toEqual({score,streak:0,bestStreak:3,answered:4})
    expect(availableQuestions(bank,state,6,100).some(q=>q.id===bank[3].id)).toBe(false)
    expect(recordAnswer(state,bank,'unapproved-id',true)).toBe(state)
  })
  it('resumes round and permits more questions in existing point buckets', () => {
    const state=recordAnswer(emptyChallenge(),bank,bank[0].id,true)
    expect(restoreChallenge(JSON.stringify(state),bank)).toEqual(state)
    const expanded=[...bank,{...bank[0],id:'later-user-question'}]
    expect(availableQuestions(expanded,state,6,300).some(q=>q.id==='later-user-question')).toBe(true)
    expect(challengeTotals(bank,emptyChallenge()).answered).toBe(0)
  })
  it('rejects corrupt persistence and discards unknown or duplicate IDs', () => {
    expect(()=>restoreChallenge('{oops',bank)).toThrow()
    expect(()=>restoreChallenge('{"version":2,"attempts":[]}',bank)).toThrow()
    expect(()=>restoreChallenge('{"version":1,"attempts":[{"questionId":"x","correct":"false","at":1}]}',bank)).toThrow()
    const a={questionId:bank[0].id,correct:true,at:1}
    expect(restoreChallenge(JSON.stringify({version:1,attempts:[a,a,{...a,questionId:'unknown'}]}),bank).attempts).toEqual([a])
  })
})
