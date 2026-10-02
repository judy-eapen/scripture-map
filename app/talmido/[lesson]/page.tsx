import Link from 'next/link'
import PageHighlighter from '@/components/PageHighlighter'
import { notFound } from 'next/navigation'
import AppShell from '@/components/AppShell'
import TalmidoProgress from '@/components/TalmidoProgress'
import StudyHighlighter from '@/components/StudyHighlighter'
import curriculum from '@/data/talmido-grade-6.json'
import { TALMIDO_PDF, talmidoPageImage, talmidoPageNumber } from '@/lib/talmido'
import { createClient } from '@/lib/supabase/server'
import { defaultNavData, getNavChapters } from '@/lib/db'
export const dynamic = 'force-dynamic'
export const metadata = { title: 'Talmido lesson | ScriptureMap' }
export default async function TalmidoLessonPage({params, searchParams}: {params: Promise<{lesson:string}>; searchParams:Promise<{page?:string;view?:string}>}) {
  const number = Number((await params).lesson)
  const lesson = curriculum.lessons.find(l => l.number === number)
  if (!lesson) notFound()
  const query = await searchParams
  const current = talmidoPageNumber(query.page,lesson)
  const page = curriculum.pages[current-1]
  const view = query.view === 'pages' || query.view === 'reflect' ? query.view : 'text'
  const href = (p:number,v=view) => `/talmido/${number}?page=${p}&view=${v}`
  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()
  const navData = user ? await getNavChapters(user.id) : defaultNavData()
  const button = 'rounded-lg border border-navy-600 px-3 py-2 text-sm text-gold-200 hover:bg-navy-700'
  return <AppShell navData={navData} isAuthenticated={!!user} currentBook="Mark"><div className="mx-auto max-w-5xl px-4 pb-16 pt-16 md:px-8 md:pt-10">
    <Link href="/talmido" className="text-sm text-gold-300">← Talmido · All lessons</Link>
    <p className="mt-6 text-xs uppercase tracking-widest text-gold-300">Sixth grade · Lesson {number}</p><h1 className="mt-2 font-display text-3xl md:text-4xl">{lesson.title}</h1>
    <p className="mt-3 text-sm text-muted-400">Our Sacramental Life · Textbook pages {lesson.startPage-1}–{lesson.endPage-1}</p>
    {lesson.goals.length>0 && <details className="mt-5 rounded-xl border border-gold-400/20 bg-navy-900 p-4"><summary className="cursor-pointer text-sm text-gold-200">Lesson goals from the curriculum</summary><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-ivory-200">{lesson.goals.map(g=><li key={g}>{g}</li>)}</ul></details>}
    <nav aria-label="Lesson views" className="my-5 flex flex-wrap gap-2">{[{key:'pages',label:'Original pages'},{key:'text',label:'Read & highlight'},{key:'reflect',label:'Reflection questions'}].map(item=><Link key={item.key} href={href(current,item.key)} aria-current={view===item.key?'page':undefined} className={`${button} ${view===item.key?'bg-gold-400/15 border-gold-400/50':''}`}>{item.label}</Link>)}</nav>
    {view==='reflect' ? <section className="rounded-2xl border border-gold-400/20 bg-navy-900 p-5 md:p-7"><h2 className="font-display text-2xl">Reflect together</h2><p className="mt-2 text-sm leading-6 text-muted-400">These questions are taken directly from the curriculum. Discuss them aloud, then revisit the lesson for supporting details.</p><ol className="mt-5 list-decimal space-y-5 pl-6 text-ivory-100">{lesson.reflectionQuestions.map((q,i)=><li key={i} className="pl-2 leading-7">{q}</li>)}</ol><Link href={href(lesson.reflectionPage,'pages')} className="mt-6 inline-block text-sm text-gold-300 underline">View questions on textbook page {lesson.reflectionPage-1}</Link></section> : <section aria-label="Curriculum reader" className="rounded-2xl border border-gold-400/20 bg-navy-900">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-700 p-4"><p className="text-sm text-ivory-200">Textbook page {page.printedPage} <span className="text-muted-400">· {current-lesson.startPage+1} of {lesson.endPage-lesson.startPage+1}</span></p><div className="flex gap-2">{current>lesson.startPage && <Link className={button} href={href(current-1)}>← Previous page</Link>}{current<lesson.endPage && <Link className={button} href={href(current+1)}>Next page →</Link>}</div></div>
      {view==='pages' ? <PageHighlighter key={`${user?.id ?? 'guest'}:${current}`} storageId={`${user?.id ?? 'guest'}:talmido:grade6:page:${current}`} src={talmidoPageImage(current)} label={`Original curriculum page ${page.printedPage}, ${lesson.title}`} width={page.width} height={page.height} /> : <div className="p-5 md:p-8"><p className="mb-5 text-xs text-muted-400">Select words below to highlight them. Highlights save in this browser. Original pages preserve illustrations, tables, and callouts.</p><div className="whitespace-pre-wrap break-words text-base leading-8 text-ivory-100"><StudyHighlighter key={`${user?.id ?? 'guest'}:${current}`} storageId={`${user?.id ?? 'guest'}:talmido:grade6:page:${current}`} text={page.text} /></div></div>}
      <nav aria-label="Lesson pages" className="flex flex-wrap gap-2 p-4">{Array.from({length:lesson.endPage-lesson.startPage+1},(_,i)=>lesson.startPage+i).map(p=><Link key={p} href={href(p)} aria-label={`Textbook page ${p-1}`} aria-current={current===p?'page':undefined} className={`${button} ${current===p?'bg-gold-400/20':''}`}>{p-1}</Link>)}</nav>
    </section>}
    <div className="my-5 flex flex-wrap items-center justify-between gap-4"><TalmidoProgress key={`${user?.id ?? 'guest'}:${number}`} learnerId={user?.id ?? 'guest'} lesson={number} /><a href={`${TALMIDO_PDF}#page=${current}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-300 underline">Open original PDF · 51 MB</a></div>
    <nav aria-label="Adjacent lessons" className="mt-6 flex flex-wrap justify-between gap-4 border-t border-navy-700 pt-5">{number>1?<Link className="text-sm text-gold-300" href={`/talmido/${number-1}`}>← Lesson {number-1}</Link>:<span/>}{number<16 && <Link className="text-sm text-gold-300" href={`/talmido/${number+1}`}>Lesson {number+1} →</Link>}</nav>
    <p className="mt-6 text-xs leading-6 text-muted-400">{curriculum.publisher} · Published {curriculum.edition}. Original curriculum content. Study progress saves in this browser.</p>
  </div></AppShell>
}
