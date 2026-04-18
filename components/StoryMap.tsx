'use client'

import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

type Side = 'god' | 'baal' | 'neutral' | 'absent'
type EventType = 'miracle' | 'confrontation' | 'dialogue' | 'prayer' | 'judgment' | 'travel' | 'setup'

type CastMember = {
  name: string
  role: string
  side: Side
  absent?: boolean
  note?: string
}

type StoryEvent = {
  verseRef: string
  title: string
  description: string
  characters: string[]
  type: EventType
  quote?: string
}

type Connection = {
  direction: 'back' | 'forward' | 'arc'
  label: string
  bookSlug: string
  chapter: number
  description: string
}

type StoryMapData = {
  chapterRef: string
  title: string
  subtitle: string
  themes: string[]
  kingdoms: string
  cast: CastMember[]
  events: StoryEvent[]
  connections: Connection[]
}

// ─── Data: 1 Kings 18 ────────────────────────────────────────────────────────

const STORY_MAP_1K18: StoryMapData = {
  chapterRef: '1 Kings 18',
  title: 'The Contest on Carmel',
  subtitle: 'Elijah forces a national reckoning: Yahweh or Baal?',
  themes: ['The Prophetic Word', 'High Places', 'Covenant Faithfulness'],
  kingdoms: 'Northern Kingdom (Israel) under Ahab',
  cast: [
    {
      name: 'Elijah',
      role: 'Prophet of Yahweh',
      side: 'god',
      note: 'Has been in hiding since the drought began',
    },
    {
      name: 'Ahab',
      role: 'King of Israel',
      side: 'baal',
      note: '"Troubler of Israel" — blames Elijah for the drought',
    },
    {
      name: 'Obadiah',
      role: 'Palace Official',
      side: 'neutral',
      note: 'Secretly hid 100 prophets from Jezebel; torn between loyalty to Ahab and fear of Elijah',
    },
    {
      name: 'Jezebel',
      role: 'Queen · Absent',
      side: 'absent',
      absent: true,
      note: 'Her shadow drives the chapter — she killed God\'s prophets and feeds 850 false prophets',
    },
    {
      name: '450 Prophets of Baal',
      role: 'Baal\'s prophets',
      side: 'baal',
      note: 'Fed at Jezebel\'s table. Humiliated and killed at Kishon',
    },
    {
      name: '400 Prophets of Asherah',
      role: 'Asherah\'s prophets',
      side: 'baal',
      absent: true,
      note: 'Also fed by Jezebel — they don\'t show up to the contest',
    },
  ],
  events: [
    {
      verseRef: 'v.1–2',
      title: 'God breaks the silence',
      description: 'After 3 years of drought, God tells Elijah to go show himself to Ahab.',
      characters: ['Elijah'],
      type: 'setup',
      quote: '"Go, show yourself to Ahab, and I will send rain."',
    },
    {
      verseRef: 'v.3–6',
      title: 'Ahab searches for water',
      description: 'The famine is severe. Ahab and Obadiah split up to search every valley for grass to keep the royal livestock alive.',
      characters: ['Ahab', 'Obadiah'],
      type: 'travel',
    },
    {
      verseRef: 'v.7–15',
      title: 'Obadiah\'s dilemma',
      description: 'Obadiah runs into Elijah. He\'s terrified — the last time he delivered a message about Elijah, Elijah disappeared. He\'s convinced Elijah will vanish again and Ahab will kill him.',
      characters: ['Elijah', 'Obadiah'],
      type: 'dialogue',
      quote: '"Have you not heard what I did when Jezebel killed the prophets? I hid a hundred men in caves."',
    },
    {
      verseRef: 'v.16–19',
      title: 'The confrontation',
      description: 'Elijah and Ahab meet face to face. Ahab calls Elijah the "troubler of Israel." Elijah turns it back: the trouble came from Ahab\'s idolatry. He issues the Carmel challenge.',
      characters: ['Elijah', 'Ahab'],
      type: 'confrontation',
      quote: '"I have not troubled Israel, but you have — you have abandoned God\'s commands and followed the Baals."',
    },
    {
      verseRef: 'v.20–24',
      title: 'The contest is set',
      description: 'All Israel assembles at Mount Carmel along with the 450 Baal prophets. Elijah rebukes the people for wavering. Two bulls, two altars — whichever God answers by fire is the real God.',
      characters: ['Elijah', '450 Prophets of Baal'],
      type: 'setup',
      quote: '"How long will you go limping between two opinions? If the LORD is God, follow him; but if Baal, then follow him."',
    },
    {
      verseRef: 'v.25–29',
      title: 'Baal fails all day',
      description: 'From morning until noon, the Baal prophets cry out, dance, and cut themselves. Nothing. Elijah mocks: "Cry louder — maybe he\'s meditating, or on a trip, or asleep."',
      characters: ['450 Prophets of Baal', 'Elijah'],
      type: 'confrontation',
      quote: '"Cry aloud, for he is a god. Either he is musing, or he has gone aside, or he is on a journey, or perhaps he is asleep."',
    },
    {
      verseRef: 'v.30–35',
      title: 'Elijah rebuilds the altar',
      description: 'Elijah uses twelve stones (one per tribe) to rebuild a broken-down altar of Yahweh. He digs a trench and drenches the sacrifice with four jars of water — three times over.',
      characters: ['Elijah'],
      type: 'setup',
    },
    {
      verseRef: 'v.36–37',
      title: 'Elijah\'s prayer',
      description: 'Simple, quiet, 3 sentences. "Let it be known you are God in Israel, that I am your servant, and that I have done all this at your word. Turn their hearts back."',
      characters: ['Elijah'],
      type: 'prayer',
      quote: '"Answer me, O LORD, answer me, that this people may know that you, O LORD, are God, and that you have turned their hearts back."',
    },
    {
      verseRef: 'v.38–39',
      title: 'Fire falls',
      description: 'Fire from Yahweh falls and consumes the sacrifice, the wood, the stones, the dust, and even the water in the trench. The people fall on their faces.',
      characters: ['Elijah'],
      type: 'miracle',
      quote: '"The LORD, he is God! The LORD, he is God!"',
    },
    {
      verseRef: 'v.40',
      title: 'The prophets of Baal are killed',
      description: 'Elijah commands the people to seize the Baal prophets. All 450 are killed at the brook Kishon.',
      characters: ['Elijah', '450 Prophets of Baal'],
      type: 'judgment',
    },
    {
      verseRef: 'v.41–45',
      title: 'Rain returns',
      description: 'Elijah tells Ahab to eat — rain is coming. Elijah prays seven times. A servant watches from Carmel: a small cloud rises from the sea. Within minutes, a great rain.',
      characters: ['Elijah', 'Ahab'],
      type: 'miracle',
      quote: '"Go up, eat and drink, for there is a sound of the rushing of rain."',
    },
    {
      verseRef: 'v.46',
      title: 'Elijah outruns the chariot',
      description: 'The Spirit of Yahweh comes on Elijah and he runs the 17 miles from Carmel to Jezreel ahead of Ahab\'s chariot. The chapter ends with Ahab arriving home — but Jezebel is waiting.',
      characters: ['Elijah', 'Ahab'],
      type: 'travel',
    },
  ],
  connections: [
    {
      direction: 'back',
      label: '1 Kings 17',
      bookSlug: '1-kings',
      chapter: 17,
      description: 'Elijah announced the drought to Ahab — this chapter is its end',
    },
    {
      direction: 'forward',
      label: '1 Kings 19',
      bookSlug: '1-kings',
      chapter: 19,
      description: 'Jezebel learns what happened and threatens Elijah\'s life. Victory turns to despair.',
    },
    {
      direction: 'arc',
      label: '2 Kings 10',
      bookSlug: '2-kings',
      chapter: 10,
      description: 'Baal worship resurges. Jehu finally destroys the Baal temple — decades later.',
    },
  ],
}

// ─── Helper maps ─────────────────────────────────────────────────────────────

const SIDE_STYLE: Record<Side, { bg: string; border: string; label: string; dot: string }> = {
  god:     { bg: 'rgba(201,168,76,0.08)',   border: 'rgba(201,168,76,0.35)',  label: '#C9A84C', dot: '#C9A84C' },
  baal:    { bg: 'rgba(239,68,68,0.08)',    border: 'rgba(239,68,68,0.3)',    label: '#f87171', dot: '#ef4444' },
  neutral: { bg: 'rgba(139,154,181,0.08)',  border: 'rgba(139,154,181,0.25)', label: '#8B9AB5', dot: '#8B9AB5' },
  absent:  { bg: 'rgba(107,114,128,0.06)',  border: 'rgba(107,114,128,0.15)', label: '#6B7A96', dot: '#4B556A' },
}

const EVENT_STYLE: Record<EventType, { line: string; dot: string; badge: string }> = {
  miracle:      { line: '#C9A84C', dot: '#C9A84C', badge: 'rgba(201,168,76,0.15)' },
  confrontation:{ line: '#ef4444', dot: '#ef4444', badge: 'rgba(239,68,68,0.12)' },
  dialogue:     { line: '#60a5fa', dot: '#60a5fa', badge: 'rgba(96,165,250,0.12)' },
  prayer:       { line: '#a78bfa', dot: '#a78bfa', badge: 'rgba(167,139,250,0.12)' },
  judgment:     { line: '#dc2626', dot: '#dc2626', badge: 'rgba(220,38,38,0.12)' },
  travel:       { line: '#6B7A96', dot: '#6B7A96', badge: 'rgba(107,114,128,0.1)' },
  setup:        { line: '#2dd4bf', dot: '#2dd4bf', badge: 'rgba(45,212,191,0.1)' },
}

const EVENT_LABEL: Record<EventType, string> = {
  miracle: 'Miracle', confrontation: 'Confrontation', dialogue: 'Dialogue',
  prayer: 'Prayer', judgment: 'Judgment', travel: 'Movement', setup: 'Setup',
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function StoryMap({ data = STORY_MAP_1K18 }: { data?: StoryMapData }) {
  return (
    <div style={{ background: 'var(--navy-950)', color: 'var(--ivory-100)', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-4 py-8 pb-24">

        {/* ── Header ── */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--gold-400)' }}>
            Story Map · {data.chapterRef}
          </p>
          <h1 className="text-3xl font-medium mb-2 leading-tight" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
            {data.title}
          </h1>
          <p className="text-sm mb-4" style={{ color: 'var(--muted-400)' }}>{data.subtitle}</p>

          {/* Theme badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {data.themes.map(theme => (
              <span key={theme} className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.2)' }}>
                {theme}
              </span>
            ))}
          </div>

          {/* Kingdom context */}
          <p className="text-xs" style={{ color: 'var(--muted-500)' }}>
            <span style={{ color: 'var(--kingdom-north)' }}>●</span> {data.kingdoms}
          </p>
        </div>

        {/* ── Cast of Characters ── */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted-400)' }}>
            Cast of Characters
          </h2>
          <div className="flex flex-col gap-2">
            {data.cast.map(member => {
              const s = SIDE_STYLE[member.side]
              return (
                <div key={member.name}
                  className="rounded-xl px-4 py-3 flex items-start gap-3"
                  style={{ background: s.bg, border: `1px solid ${s.border}`, opacity: member.absent ? 0.65 : 1 }}>
                  {/* Dot */}
                  <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full" style={{ background: s.dot }} />
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm font-semibold" style={{ color: s.label }}>{member.name}</span>
                      <span className="text-xs" style={{ color: 'var(--muted-500)' }}>{member.role}</span>
                    </div>
                    {member.note && (
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--muted-400)' }}>{member.note}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-3">
            {(['god', 'baal', 'neutral', 'absent'] as Side[]).map(side => (
              <div key={side} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: SIDE_STYLE[side].dot }} />
                <span className="text-xs" style={{ color: 'var(--muted-500)' }}>
                  {side === 'god' ? "God's side" : side === 'baal' ? "Baal's side" : side === 'neutral' ? 'Caught between' : 'Absent / mentioned'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Story Flow ── */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted-400)' }}>
            Story Flow
          </h2>

          <div className="relative">
            {/* Vertical spine line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-px" style={{ background: 'rgba(45,58,85,1)' }} />

            <div className="flex flex-col gap-0">
              {data.events.map((event, i) => {
                const s = EVENT_STYLE[event.type]
                const isLast = i === data.events.length - 1
                return (
                  <div key={i} className="flex gap-4 relative" style={{ paddingBottom: isLast ? 0 : '20px' }}>
                    {/* Timeline dot */}
                    <div className="shrink-0 relative z-10">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: 'var(--navy-800)', border: `2px solid ${s.dot}` }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: s.dot }} />
                      </div>
                    </div>

                    {/* Event card */}
                    <div className="flex-1 min-w-0 rounded-xl px-4 py-3"
                      style={{ background: 'var(--navy-800)', border: '1px solid rgba(45,58,85,0.8)' }}>

                      {/* Top row: verse ref + type badge */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded"
                          style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-300)' }}>
                          {event.verseRef}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded font-medium"
                          style={{ background: s.badge, color: s.dot }}>
                          {EVENT_LABEL[event.type]}
                        </span>
                        {/* Character chips */}
                        <div className="flex flex-wrap gap-1">
                          {event.characters.map(c => (
                            <span key={c} className="text-xs px-1.5 py-0.5 rounded"
                              style={{ background: 'rgba(139,154,181,0.1)', color: 'var(--muted-400)' }}>
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Title */}
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory-100)' }}>
                        {event.title}
                      </p>

                      {/* Description */}
                      <p className="text-xs leading-relaxed mb-2" style={{ color: 'var(--muted-400)' }}>
                        {event.description}
                      </p>

                      {/* Quote */}
                      {event.quote && (
                        <p className="text-xs italic leading-relaxed pl-3"
                          style={{ color: 'var(--ivory-200)', borderLeft: `2px solid ${s.dot}` }}>
                          {event.quote}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Connections ── */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--muted-400)' }}>
            Connections
          </h2>
          <div className="flex flex-col gap-2">
            {data.connections.map(conn => {
              const isBack = conn.direction === 'back'
              const isForward = conn.direction === 'forward'
              return (
                <Link key={conn.label} href={`/study/${conn.bookSlug}/${conn.chapter}`}
                  className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors"
                  style={{ background: 'var(--navy-800)', border: '1px solid rgba(45,58,85,0.8)' }}>
                  {/* Arrow */}
                  <div className="shrink-0 mt-0.5 text-base leading-none"
                    style={{ color: isBack ? 'var(--muted-500)' : isForward ? 'var(--gold-400)' : '#a78bfa' }}>
                    {isBack ? '←' : isForward ? '→' : '⊙'}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-xs font-semibold" style={{ color: 'var(--gold-300)' }}>{conn.label}</span>
                      <span className="text-xs" style={{ color: 'var(--muted-500)' }}>
                        {isBack ? 'came before' : isForward ? 'comes next' : 'bigger arc'}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>{conn.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

      </div>
    </div>
  )
}
