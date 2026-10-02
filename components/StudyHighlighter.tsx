'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { addHighlight, HIGHLIGHT_COLORS, restoreHighlights, type StudyHighlight } from '@/lib/study-highlights'

type Props = { text:string; storageId:string; children?:(paint:(text:string,offset:number)=>ReactNode)=>ReactNode }
export default function StudyHighlighter({text, storageId, children}:Props) {
  const key=`scripture-map:highlights:v1:${storageId}`
  const content=useRef<HTMLSpanElement>(null)
  const [highlights,setHighlights]=useState<StudyHighlight[]>([])
  const [selected,setSelected]=useState<{start:number;end:number}|null>(null)
  const [ready,setReady]=useState(false)
  const [message,setMessage]=useState('')
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(()=>{
    try { setHighlights(restoreHighlights(localStorage.getItem(key),text)) }
    catch { setMessage('Saved highlights could not be loaded.') }
    setReady(true)
  },[key,text])
  /* eslint-enable react-hooks/set-state-in-effect */
  useEffect(()=>{
    function selectionChanged() {
      const selection=window.getSelection(), root=content.current
      if (!root || !selection || selection.isCollapsed || !selection.rangeCount) return
      const range=selection.getRangeAt(0)
      if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) { setSelected(null); return }
      const before=range.cloneRange(); before.selectNodeContents(root); before.setEnd(range.startContainer,range.startOffset)
      const start=before.toString().length,end=start+range.toString().length
      if (end>start && end<=text.length) setSelected({start,end})
    }
    document.addEventListener('selectionchange',selectionChanged)
    return ()=>document.removeEventListener('selectionchange',selectionChanged)
  },[text])
  function save(next:StudyHighlight[]) {
    try {localStorage.setItem(key,JSON.stringify(next));setHighlights(next);setMessage('')}
    catch {setMessage('Could not save this highlight. Browser storage may be unavailable.');return}
    setSelected(null);window.getSelection()?.removeAllRanges()
  }
  function paint(chunk:string,offset:number):ReactNode {
    const end=offset+chunk.length
    const pieces:ReactNode[]=[];let cursor=offset
    for (const h of highlights) {
      const from=Math.max(offset,h.start),to=Math.min(end,h.end)
      if (to<=from) continue
      if (from>cursor) pieces.push(chunk.slice(cursor-offset,from-offset))
      pieces.push(<mark key={`${from}:${to}`} style={{background:HIGHLIGHT_COLORS[h.color],color:'#172033',borderRadius:2}}>{chunk.slice(from-offset,to-offset)}</mark>)
      cursor=to
    }
    if (cursor<end) pieces.push(chunk.slice(cursor-offset))
    return pieces
  }
  return <span className="block">
    <span ref={content}>{children ? children(paint) : paint(text,0)}</span>
    {selected && ready && <span role="group" aria-label="Highlight selected text" className="fixed bottom-4 left-1/2 z-[60] flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 flex-wrap items-center gap-2 rounded-xl border border-gold-400/30 bg-navy-900 p-2 text-xs leading-normal shadow-xl">
      <span className="text-muted-400">Highlight:</span>{(Object.keys(HIGHLIGHT_COLORS) as StudyHighlight['color'][]).map(color=><button key={color} type="button" onClick={()=>save(addHighlight(highlights,{...selected,quote:text.slice(selected.start,selected.end),color}))} aria-label={`Highlight selection ${color}`} className="rounded-lg px-3 py-2 font-semibold capitalize" style={{background:HIGHLIGHT_COLORS[color],color:'#172033'}}>{color}</button>)}
      <button type="button" onClick={()=>setSelected(null)} className="rounded-lg px-3 py-2 text-ivory-200">Cancel</button>
    </span>}
    {highlights.length>0 && <details className="mt-1 text-xs leading-normal text-muted-400"><summary className="cursor-pointer py-1">{highlights.length} saved {highlights.length===1?'highlight':'highlights'}</summary><span className="mt-1 block space-y-2">{highlights.map(h=><span key={`${h.start}:${h.end}`} className="flex items-start gap-2 rounded-lg bg-navy-900 p-2"><span className="flex-1">{h.quote}</span><button type="button" className="shrink-0 text-gold-300 underline" aria-label={`Remove highlight: ${h.quote}`} onClick={()=>save(highlights.filter(item=>item!==h))}>Remove</button></span>)}</span></details>}
    {message && <span role="status" className="block text-xs text-gold-300">{message}</span>}
  </span>
}
