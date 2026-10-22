# N5 Kanji: sources, scope and attribution

TENKA compares reference inventories; it does not claim that a particular count is an official current JLPT list. The current JLPT does not publish an exhaustive vocabulary, grammar or kanji specification ([official FAQ](https://www.jlpt.jp/e/faq/)).

The coverage ledger distinguishes the historical Level 4 field in KANJIDIC2 from modern N5, the [JLPT Sensei N5 index](https://jlptsensei.com/jlpt-n5-kanji-list/) and [MLC's 120-kanji study sheet](https://www.mlcjapanese.co.jp/Download/Kanji120.pdf). A word appearing in N5 vocabulary does not automatically establish every character in it as a separate N5 kanji target. Conflicting additions remain deferred with reasons. Existing 朝 and 夜 cards retain their progress IDs as supporting material.

## KANJIDIC2

Selected classical radical numbers, stroke counts and reading checks derive from **KANJIDIC2**, copyright **Electronic Dictionary Research and Development Group (EDRDG)**. Download checked 2026-10-20. Attribution and reuse follow the [EDRDG licence statement](https://www.edrdg.org/edrdg/licence.html), **[Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**. [Project and format documentation](https://www.edrdg.org/wiki/KANJIDIC_Project.html).

`docs/n5-kanji-verified.json` records the selected radical numbers and stroke counts. Readings displayed in lessons are a beginner selection, not the complete dictionary reading inventory. Indonesian meanings, teaching guidance, visual component groupings and memory stories are authored for TENKA. A mnemonic is explicitly a memory aid and makes no historical etymology claim. Radical indexing and visual decomposition serve different purposes.

## KanjiVG

Stroke paths derive from **KanjiVG**, copyright **Ulrich Apel and contributors**, licensed **[Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0/)**. [Project](https://kanjivg.tagaini.net/) · [source pinned at 70a0b7ae0c18ceb5cb358274b029cce0234a43bc](https://github.com/KanjiVG/kanjivg/tree/70a0b7ae0c18ceb5cb358274b029cce0234a43bc/kanji).

`content-pack-v23-strokes.js` extracts the ordered `d` paths unchanged from the standard Unicode SVG for each character. Labels, XML wrappers and unused alternative forms are omitted. The original `0 0 109 109` coordinates are retained. The path count is checked against KANJIDIC2 for every selected character. Original attribution and licence apply to this derived dataset. These data licences do not purport to relicense unrelated application code.

The animation demonstrates stroke order. The freehand canvas is practice paper; it does not grade handwriting or claim to recognize a correct character.
