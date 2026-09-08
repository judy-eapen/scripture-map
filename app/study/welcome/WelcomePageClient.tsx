'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, CircleCheck, RotateCcw } from 'lucide-react'
import { getBookGuide, type BookGuide } from '@/data/books'
import type { LibraryBook, LibraryProgress } from '@/lib/library'

type Props = { books: LibraryBook[]; isAuthenticated: boolean; progress: LibraryProgress }
const panel = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }

function ProgressBar({ label, value, total }: { label: string; value: number; total: number }) {
  const pct = total ? Math.round(value / total * 100) : 0
  return <div><div className="flex justify-between text-[11px] mb-1" style={{ color: 'var(--muted-400)' }}><span>{label}</span><span>{value}/{total}</span></div><div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)' }}><div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'var(--gold-400)' }} /></div></div>
}

function GuideContent({ guide, body }: { guide: BookGuide; body: BookGuide['guide'][number]['body'] }) {
  if (body.kind === 'text') return <div className="space-y-3">{body.paragraphs.map((p, i) => <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--muted-400)' }}>{p}</p>)}</div>
  if (body.kind === 'concepts') return <div className="space-y-2">{body.items.map(item => <div key={item.title} className="rounded-xl p-3" style={panel}><p className="text-sm font-semibold" style={{ color: 'var(--ivory-100)' }}>{item.title} <span className="text-xs font-normal" style={{ color: 'var(--gold-300)' }}>· {item.subtitle}</span></p><p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--muted-400)' }}>{item.body}</p></div>)}</div>
  const items = body.kind === 'phases'
    ? guide.phases.map((p, i) => ({ href: p.href, eyebrow: `${String(i + 1).padStart(2, '0')} · ${p.range}`, title: p.title, text: p.desc }))
    : guide.spineChapters.map(ch => ({ href: ch.href, eyebrow: ch.ref, title: ch.title, text: ch.reason }))
  return <div className="grid gap-2">{items.map(item => <Link key={`${item.href}-${item.title}`} href={item.href} className="rounded-xl p-3" style={panel}><p className="text-[11px] font-semibold" style={{ color: 'var(--gold-300)' }}>{item.eyebrow}</p><p className="text-sm font-semibold" style={{ color: 'var(--ivory-100)' }}>{item.title}</p><p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--muted-400)' }}>{item.text}</p></Link>)}</div>
}

function BookCard({ book, isAuthenticated, progress }: { book: LibraryBook; isAuthenticated: boolean; progress?: LibraryProgress[string] }) {
  const guide = getBookGuide(book.slug, book.name, book.chapters.length)
  const [open, setOpen] = useState<string | null>(null)
  const readIds = new Set(progress?.readChapterIds ?? [])
  const nextChapter = book.chapters.find(chapter => !readIds.has(chapter.id)) ?? book.chapters.at(-1)
  const totalQuestions = book.chapters.reduce((sum, chapter) => sum + chapter.questionIds.length, 0)
  return <article className="rounded-3xl p-5 sm:p-6 flex flex-col self-start" style={{ ...panel, background: 'rgba(255,255,255,0.035)' }}>
    <div className="flex items-start justify-between gap-3"><div><p className="text-[11px] uppercase tracking-widest" style={{ color: 'var(--muted-500)' }}>{guide.testament}</p><h2 className="text-2xl mt-1" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>{guide.title}</h2></div>{guide.translationLabel && <span className="text-[10px] rounded-full px-2.5 py-1 text-right" style={{ background: 'rgba(201,168,76,0.09)', color: 'var(--muted-400)' }}>{guide.translationLabel}</span>}</div>
    <p className="text-xs mt-1" style={{ color: 'var(--gold-300)' }}>{book.chapters.length} chapters</p><p className="text-sm leading-relaxed mt-3 mb-5 grow" style={{ color: 'var(--muted-400)' }}>{guide.tagline}</p>
    {isAuthenticated && <div className="space-y-3 mb-5"><ProgressBar label="Reading" value={progress?.readChapterIds.length ?? 0} total={book.chapters.length} /><ProgressBar label="Quiz mastery" value={progress?.masteredQuestionIds.length ?? 0} total={totalQuestions} /></div>}
    <div className="grid grid-cols-2 gap-2"><Link href={`/study/${book.slug}/${nextChapter?.number ?? 1}`} className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold" style={{ background: 'var(--gold-400)', color: 'var(--navy-950)' }}>{isAuthenticated && readIds.size ? `Read ${nextChapter?.number ?? 1}` : 'Read'}</Link><Link href={`/quiz?book=${book.slug}`} className="rounded-xl px-4 py-2.5 text-center text-sm font-semibold" style={{ border: '1px solid rgba(201,168,76,0.32)', color: 'var(--gold-300)' }}>Quiz</Link></div>
    {!!guide.guide.length && <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}><p className="text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--muted-500)' }}>Before you begin</p><div className="space-y-2">{guide.guide.map(item => { const id = `${book.slug}-${item.label}`; const expanded = open === id; return <div key={id} className="rounded-xl overflow-hidden" style={panel}><button onClick={() => setOpen(expanded ? null : id)} className="w-full p-3 text-left flex justify-between gap-3" aria-expanded={expanded}><span><span className="block text-xs font-semibold" style={{ color: expanded ? 'var(--gold-300)' : 'var(--ivory-100)' }}>{item.label}</span>{!expanded && <span className="block text-[11px] mt-0.5" style={{ color: 'var(--muted-500)' }}>{item.preview}</span>}</span><span style={{ color: 'var(--gold-300)' }}>{expanded ? '−' : '+'}</span></button>{expanded && <div className="px-3 pb-3"><GuideContent guide={guide} body={item.body} /></div>}</div> })}</div></div>}
  </article>
}

export default function WelcomePageClient({ books, isAuthenticated, progress }: Props) {
  const kingsBook = books.find(book => book.slug === '1-kings')
  const markBook = books.find(book => book.slug === 'mark')
  const tools = [
    kingsBook && { key: 'kings', label: 'Kings', guide: getBookGuide(kingsBook.slug, kingsBook.name, kingsBook.chapters.length) },
    markBook && { key: 'mark', label: 'Mark', guide: getBookGuide(markBook.slug, markBook.name, markBook.chapters.length) },
    ...books.filter(book => !['1-kings', '2-kings', 'mark'].includes(book.slug)).map(book => ({ key: book.id, label: book.name, guide: getBookGuide(book.slug, book.name, book.chapters.length) })),
  ].filter((item): item is NonNullable<typeof item> => !!item && item.guide.tools.length > 0)
  const steps = [
    { icon: BookOpen, title: '1 Read a chapter', text: 'Follow the text with people, places, history, and connections close at hand.' },
    { icon: CircleCheck, title: '2 Take the quiz', text: 'Test what you understood with questions drawn from the chapter.' },
    { icon: RotateCcw, title: '3 Fix your misses at the verse', text: 'Return to the exact passage, then try missed questions again.' },
  ]
  return <main className="min-h-screen px-5 py-12 sm:px-8 md:py-16" style={{ background: 'var(--navy-950)' }}><div className="max-w-6xl mx-auto">
    <header className="text-center max-w-3xl mx-auto"><div className="inline-flex w-16 h-16 rounded-2xl items-center justify-center" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}><BookOpen size={30} strokeWidth={1.4} /></div><h1 className="text-4xl sm:text-5xl mt-5" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>Scripture<span style={{ color: 'var(--gold-300)' }}>Map</span></h1><p className="text-base sm:text-lg leading-relaxed mt-4" style={{ color: 'var(--ivory-200)' }}>Read a book of the Bible the way a scholar does — every person, place, and prophecy connected — then test yourself until you know it.</p></header>
    <section className="mt-12 rounded-3xl p-5 sm:p-6" style={panel} aria-labelledby="study-path"><h2 id="study-path" className="text-xs uppercase tracking-widest text-center mb-5" style={{ color: 'var(--gold-300)' }}>How to study here</h2><div className="grid md:grid-cols-3 gap-5">{steps.map(step => <div key={step.title} className="flex md:block gap-3 text-left md:text-center"><step.icon className="shrink-0 md:mx-auto mb-2" size={21} style={{ color: 'var(--gold-300)' }} /><div><h3 className="text-sm font-semibold" style={{ color: 'var(--ivory-100)' }}>{step.title}</h3><p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--muted-400)' }}>{step.text}</p></div></div>)}</div></section>
    <section className="mt-14" aria-labelledby="library"><p className="text-xs uppercase tracking-widest" style={{ color: 'var(--gold-300)' }}>The library</p><h2 id="library" className="text-3xl mt-1 mb-5" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>Choose a book</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{books.map(book => <BookCard key={book.id} book={book} isAuthenticated={isAuthenticated} progress={progress[book.slug]} />)}<div className="rounded-3xl min-h-48 p-6 flex items-center justify-center text-center" style={{ ...panel, borderStyle: 'dashed' }}><div><p className="text-lg" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--muted-400)' }}>More books coming</p><p className="text-xs mt-1" style={{ color: 'var(--muted-500)' }}>The library will grow here.</p></div></div></div>{!isAuthenticated && <p className="text-sm text-center mt-6" style={{ color: 'var(--muted-400)' }}><Link href="/login" className="underline underline-offset-4" style={{ color: 'var(--gold-300)' }}>Sign in</Link> to save your progress across devices.</p>}</section>
    {!!tools.length && <section className="mt-12 rounded-3xl p-5 sm:p-6" style={panel}><p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--muted-500)' }}>Study tools</p><div className="flex flex-wrap gap-x-8 gap-y-4">{tools.map(({ key, label, guide }) => <div key={key} className="flex flex-wrap items-center gap-2"><span className="text-sm font-semibold" style={{ color: 'var(--ivory-100)' }}>{label}:</span>{guide.tools.map((tool, i) => <span key={tool.href} className="flex items-center gap-2"><Link href={tool.href} className="text-sm underline underline-offset-4" style={{ color: 'var(--gold-300)' }}>{tool.label}</Link>{i < guide.tools.length - 1 && <span style={{ color: 'var(--muted-500)' }}>·</span>}</span>)}</div>)}</div></section>}
  </div></main>
}
