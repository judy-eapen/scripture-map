# Study highlights

Bible verses and Talmido's Read text pages support selecting words and choosing yellow, green, pink, blue, purple, orange, or teal from a floating toolbar. Expand Saved highlights beneath the passage to remove a highlight. Bible selections must stay within a single verse; Talmido selections stay within a single textbook page. Original PDF page images are not annotated.

Highlights use browser local storage under `scripture-map:highlights:v1:` with learner and passage/page scope. They do not sync between devices. Guest and signed-in highlights are separate. Exact quotes and offsets are validated when loading so changes to source text do not silently mark unrelated words. Overlapping colors replace the selected region and preserve unaffected fragments.

Verse notes continue to use the existing signed-in account flow: open a Bible chapter, click its verse number, enter a note and save. Notes are accessible under My Notes. Highlighting does not change the notes database or quiz content.

Validation: production webpack build and TypeScript check; unit tests for restoration and overlapping ranges; browser checks for selection, saving, reload persistence, and removal in Talmido, plus highlighting text following linked names in Bible verses. Signed-in note saving was not tested in this change.
