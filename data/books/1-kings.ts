import type { BookGuide } from './types'

export const kingsSharedGuide = {
  translationLabel: 'RSV',
  testament: 'Old Testament' as const,
  tagline: 'A four-century account of the kingdom’s glory, fracture, decline, and exile, measured by covenant faithfulness.',
  phases: [
    { title: "Solomon's Glory", range: '1 Kings 1–10', href: '/study/1-kings/1', desc: 'The kingdom at its peak — the Temple built, wisdom unmatched, nations coming to listen.' },
    { title: 'The Fracture', range: '1 Kings 11–12', href: '/study/1-kings/11', desc: "Solomon's heart turns. One foolish son's arrogance splits a united kingdom in two forever." },
    { title: 'The Spiral', range: '1 Kings 13 – 2 Kings 16', href: '/study/1-kings/13', desc: 'Parallel kingdoms in parallel decline. Nineteen northern kings — all evil. Elijah and Elisha fight the tide.' },
    { title: 'Fall of Israel', range: '2 Kings 17', href: '/study/2-kings/17', desc: 'Assyria destroys the North. The author stops to deliver the verdict: this happened because they would not listen.' },
    { title: 'Last Hope & Exile', range: '2 Kings 18–25', href: '/study/2-kings/18', desc: 'Hezekiah and Josiah — two good kings, too late. Babylon comes. Jerusalem falls. The story ends in silence.' },
  ],
  spineChapters: [
    { ref: '1 Kings 11', href: '/study/1-kings/11', title: 'The Fracture Point', reason: "Solomon's heart turns. The most important 'why' in the whole story." },
    { ref: '1 Kings 12', href: '/study/1-kings/12', title: 'The Kingdom Splits', reason: "Rehoboam's arrogance creates two kingdoms that never reunite." },
    { ref: '1 Kings 18', href: '/study/1-kings/18', title: 'Elijah on Carmel', reason: 'The most dramatic confrontation in Kings. Elijah as new Moses.' },
    { ref: '2 Kings 17', href: '/study/2-kings/17', title: "Israel's Verdict", reason: 'The author stops the narrative to explain exactly why the North fell.' },
    { ref: '2 Kings 19', href: '/study/2-kings/19', title: "Hezekiah's Prayer", reason: 'What faithful kingship looks like — and how God responds to it.' },
    { ref: '2 Kings 22', href: '/study/2-kings/22', title: "Josiah's Reform", reason: 'The last great king finds a lost Torah scroll and tears his robes.' },
  ],
  guide: [
    { label: 'The Argument of These Books', preview: 'What 1 & 2 Kings is really about', body: { kind: 'text' as const, paragraphs: [
      "1 & 2 Kings is a single theological argument: when Israel kept God's covenant, they flourished. When they broke it — above all through idolatry at the high places — they were stripped away. These books are not history for its own sake. They are a four-century verdict on what happens when a people chosen for faithfulness choose something else instead.",
      'This is the Deuteronomistic framework. Every king you meet will be measured against it.',
    ] } },
    { label: 'The Arc of the Story', preview: 'Five movements across four centuries', body: { kind: 'phases' as const } },
    { label: 'Three Concepts That Unlock Everything', preview: 'Covenant · High Places · Prophetic Word', body: { kind: 'concepts' as const, items: [
      { title: 'Covenant', subtitle: 'The binding agreement', body: 'At Sinai, God promised Israel: obey and I will bless you, disobey and I will exile you (Deuteronomy 28). Every king in 1 & 2 Kings is measured against this — not by political success, but by covenant faithfulness.' },
      { title: 'High Places', subtitle: 'The persistent sin', body: "Hilltop shrines where Baal and Asherah were worshipped — or even where Yahweh was worshipped wrongly. Almost every king is judged by one phrase: 'he did not remove the high places.' This is not a minor offense. It is covenant rupture." },
      { title: 'Prophetic Word', subtitle: 'God always speaks first', body: "Before every major event in Kings — a dynasty rising, a city falling, a king dying — a prophet announced it. And it always came true, sometimes generations later. The books are built to make you notice this pattern: God's word does not fail." },
    ] } },
    { label: 'If You Only Read Six Chapters', preview: 'An expert shortlist of the spine chapters', body: { kind: 'spine' as const } },
  ],
  tools: [
    { href: '/timeline', label: 'Kingdom Timeline' },
    { href: '/genealogy', label: 'Dynasty Web' },
  ],
}

export const firstKingsGuide: BookGuide = {
  slug: '1-kings', title: '1 Kings', shortTitle: '1 Kings', ...kingsSharedGuide,
}
