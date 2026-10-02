'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { HIGHLIGHT_COLORS } from '@/lib/study-highlights'

type Color = keyof typeof HIGHLIGHT_COLORS
type Box = { id: string; x: number; y: number; width: number; height: number; color: Color }
type Point = { x: number; y: number }
type Props = { src: string; width: number; height: number; label: string; storageId: string }
const button = 'rounded-lg border border-gold-400/30 px-3 py-2 text-sm text-gold-200 disabled:opacity-40'

export default function PageHighlighter({ src, width, height, label, storageId }: Props) {
  const key = `scripture-map:page-highlights:v1:${storageId}`
  const [boxes, setBoxes] = useState<Box[]>([])
  const [draft, setDraft] = useState<Box | null>(null)
  const [color, setColor] = useState<Color>('yellow')
  const [drawing, setDrawing] = useState(false)
  const [ready, setReady] = useState(false)
  const [warning, setWarning] = useState('')
  const start = useRef<Point | null>(null)
  const surface = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const data: unknown = JSON.parse(localStorage.getItem(key) ?? '[]')
      if (!Array.isArray(data)) throw new Error('Invalid highlights')
      setBoxes(data.filter((b): b is Box => b && typeof b.id === 'string' && Object.hasOwn(HIGHLIGHT_COLORS, b.color) &&
        [b.x, b.y, b.width, b.height].every(n => typeof n === 'number' && Number.isFinite(n)) &&
        b.x >= 0 && b.y >= 0 && b.width > 0 && b.height > 0 && b.x + b.width <= 1.000001 && b.y + b.height <= 1.000001))
    } catch { setWarning('Saved page highlights could not be loaded.') }
    setReady(true)
  }, [key])

  function save(next: Box[]) {
    try { localStorage.setItem(key, JSON.stringify(next)); setBoxes(next); setWarning(''); return true }
    catch { setWarning('Could not save highlights. Browser storage may be unavailable.'); return false }
  }
  function point(e: PointerEvent<HTMLDivElement>): Point {
    const bounds = e.currentTarget.getBoundingClientRect()
    return { x: Math.max(0, Math.min(1, (e.clientX - bounds.left) / bounds.width)), y: Math.max(0, Math.min(1, (e.clientY - bounds.top) / bounds.height)) }
  }
  function rectangle(end: Point): Box {
    const origin = start.current!
    return { id: 'draft', x: Math.min(origin.x, end.x), y: Math.min(origin.y, end.y), width: Math.abs(end.x - origin.x), height: Math.abs(end.y - origin.y), color }
  }
  function cancel() { start.current = null; setDraft(null); setDrawing(false) }
  function finish(e: PointerEvent<HTMLDivElement>) {
    if (!start.current) return
    const box = rectangle(point(e))
    start.current = null
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
    const bounds = e.currentTarget.getBoundingClientRect()
    setDraft(box.width * bounds.width >= 5 && box.height * bounds.height >= 5 ? box : null)
    setDrawing(false)
  }
  return <div>
    <div className="sticky top-0 z-20 space-y-3 border-b border-navy-700 bg-navy-900 p-4">
      <p className="text-sm text-ivory-200">Highlight a block on this page. Choose a color, click Draw a block, then drag over the words or picture.</p>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Page highlight colors">
        {(Object.keys(HIGHLIGHT_COLORS) as Color[]).map(c => <button key={c} type="button" aria-label={`Page highlight ${c}`} aria-pressed={color === c} onClick={() => { setColor(c); setDraft(d => d ? { ...d, color: c } : null) }} style={{ background: HIGHLIGHT_COLORS[c], color: '#172033' }} className={`rounded-lg px-3 py-2 text-xs font-semibold capitalize ${color === c ? 'ring-2 ring-white ring-offset-2 ring-offset-navy-900' : ''}`}>{c}</button>)}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={button} disabled={!ready} aria-pressed={drawing} onClick={() => { setDraft(null); setDrawing(true); surface.current?.focus() }}>Draw a block</button>
        {draft && <button type="button" className="rounded-lg bg-gold-400 px-3 py-2 text-sm font-semibold text-navy-950" onClick={() => { if (save([...boxes, { ...draft, id: crypto.randomUUID() }])) setDraft(null) }}>Save highlight</button>}
        {(drawing || draft) && <button type="button" className={button} onClick={cancel}>Cancel</button>}
        <a href={src} target="_blank" rel="noopener noreferrer" className="ml-auto text-xs text-gold-300 underline">Open image full size</a>
      </div>
      <p role="status" className="text-xs text-muted-400">{warning || (drawing ? 'Drag a rectangle on the page. Press Escape to cancel. On touch screens, cancel drawing to scroll.' : draft ? 'Choose a color and save your block, or draw again.' : 'Highlights save in this browser. Expand Saved page highlights below to remove one.')}</p>
    </div>
    <div ref={surface} tabIndex={0} role="group" aria-label={`${label}: block highlighting area`} className={`relative select-none bg-white outline-offset-2 ${drawing ? 'cursor-crosshair touch-none' : ''}`} onKeyDown={e => { if (e.key === 'Escape') cancel() }}
      onPointerDown={e => { if (!drawing || !ready || e.button !== 0 || !e.isPrimary) return; e.preventDefault(); e.currentTarget.setPointerCapture(e.pointerId); start.current = point(e); setDraft(null) }}
      onPointerMove={e => { if (start.current) setDraft(rectangle(point(e))) }} onPointerUp={finish} onPointerCancel={cancel}>
      <Image src={src} alt={label} width={width} height={height} unoptimized priority draggable={false} className="pointer-events-none block h-auto w-full" />
      {[...boxes, ...(draft ? [draft] : [])].map(b => <span key={b.id} aria-hidden="true" data-page-highlight={b.id} className="pointer-events-none absolute" style={{ left: `${b.x * 100}%`, top: `${b.y * 100}%`, width: `${b.width * 100}%`, height: `${b.height * 100}%`, background: HIGHLIGHT_COLORS[b.color], mixBlendMode: 'multiply', opacity: 0.65, outline: b.id === 'draft' ? '2px dashed #172033' : undefined }} />)}
    </div>
    {boxes.length > 0 && <details className="border-t border-navy-700 p-4 text-sm"><summary className="cursor-pointer text-gold-200">Saved page highlights ({boxes.length})</summary><ol className="mt-3 space-y-2">{boxes.map((b, i) => <li key={b.id} className="flex items-center justify-between gap-3"><span className="text-ivory-200"><span aria-hidden="true" className="mr-2 inline-block h-3 w-3 rounded" style={{ background: HIGHLIGHT_COLORS[b.color] }} />Block {i + 1} · {b.color} · {Math.round(b.y * 100)}% down page</span><button type="button" className={button} aria-label={`Remove page highlight ${i + 1}`} onClick={() => save(boxes.filter(item => item.id !== b.id))}>Remove</button></li>)}</ol></details>}
  </div>
}
