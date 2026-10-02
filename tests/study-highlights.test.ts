import { describe, expect, it } from 'vitest'
import { addHighlight, restoreHighlights, type StudyHighlight } from '../lib/study-highlights'
describe('study highlights',()=>{
  const text='A verse with repeated verse words.'
  it('restores exact offsets and rejects stale or malformed ranges',()=>{
    const h:StudyHighlight={start:2,end:7,quote:'verse',color:'yellow'}
    expect(restoreHighlights(JSON.stringify([h]),text)).toEqual([h])
    expect(restoreHighlights(JSON.stringify([{...h,start:0},{...h,color:'invalid'},{...h,end:99}]),text)).toEqual([])
    expect(restoreHighlights(JSON.stringify([h]),'Changed verse')).toEqual([])
    expect(()=>restoreHighlights('{}',text)).toThrow()
  })
  it('changes overlapping colors without discarding untouched words',()=>{
    const old:StudyHighlight={start:0,end:10,quote:'abcdefghij',color:'yellow'}
    expect(addHighlight([old],{start:3,end:7,quote:'defg',color:'pink'})).toEqual([
      {start:0,end:3,quote:'abc',color:'yellow'},
      {start:3,end:7,quote:'defg',color:'pink'},
      {start:7,end:10,quote:'hij',color:'yellow'},
    ])
  })
})
