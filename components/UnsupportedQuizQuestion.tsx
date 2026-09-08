type Props = { question: string }

export default function UnsupportedQuizQuestion({ question }: Props) {
  return (
    <div>
      <div className="rounded-2xl px-6 py-6 mb-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--ivory-100)' }}>{question}</p>
      </div>
      <div role="alert" className="rounded-xl px-4 py-3 text-sm flex flex-wrap items-center justify-between gap-3"
        style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--ivory-200)' }}>
        <span>This question format is not available in this version. Reload to continue.</span>
        <button type="button" onClick={() => window.location.reload()} className="rounded-lg px-3 py-2 text-xs font-medium"
          style={{ background: 'rgba(201,168,76,0.14)', color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.35)' }}>
          Reload to continue
        </button>
      </div>
    </div>
  )
}
