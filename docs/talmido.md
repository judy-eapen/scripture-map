# Talmido sixth-grade curriculum

Source: the user-selected Downloads file `6th Grade AY2026 (1).pdf`,
51,313,534 bytes, June 2026 edition of **Our Sacramental Life**. Publisher:
Sunday School of the North American Dioceses of the Malankara Orthodox Syrian Church.
The source checksum is recorded in `data/talmido-grade-6.json` and verified by tests.

The original PDF is copied byte-for-byte into `public/talmido/grade-6/curriculum.pdf`.
All 101 pages are rendered at 2x into WebP assets (approximately 19 MB total).
Only the selected page image loads in the reader. Text is extracted with pdfplumber;
original pages remain authoritative for illustrations, callouts, tables, and layout.
Goals and reflection questions are extracted, not generated. Lesson 16's standalone
colon after “Lesson Goals” is excluded from its goal list.

Routes: `/talmido` and `/talmido/1` through `/talmido/16`. The lower sidebar links to
Talmido. Each lesson offers original pages, selectable text, curriculum goals,
reflection questions, adjacent lessons, and the complete original PDF. Printed page
numbers are PDF page numbers minus one, since the cover is unnumbered. Invalid lesson
IDs return 404 and reader page parameters are clamped within their lesson.

All 16 lessons appear as full cards by default. An optional teaching-focus filter
shows lessons 6–10 from the user's earlier plan. The 25% quiz
contribution label comes from the user's request, not from the PDF. This is curriculum
coverage metadata, not a change to Mark Challenge scoring. No new scored questions,
answers, or distractors have been generated or inserted into the existing quiz bank.

Study completion saves in browser localStorage by account ID or guest under its own
namespace, separate from Mark Challenge. It does not sync between devices. The whole
curriculum is available, so a different teaching focus does not hide other chapters.

Validation: tests/talmido.test.ts checks source integrity, image existence, complete
chapter ranges, reflection provenance, page clamping, and progress validation.
