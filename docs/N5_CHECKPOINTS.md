# N5 staged completion

PR #16 remains draft. No merge to main, production deploy, or auto-merge is authorized.
Closure means the audited TENKA curriculum is ready; it is not an official JLPT item list or a guarantee of passing.

## Baseline: Stage 8A-9.1

- Remote head: `e7a0bae57bbad8d06413e1823f941c34c7f7fd68`.
- 80 grammar lessons, 75 vocabulary cards, 50 kanji.
- Existing local regression suite and GitHub Actions run 38274769500 pass.
- Historical tests deliberately load old snapshots; a new test follows the current runtime manifest to catch later integration gaps.

## Stage 8A-9.2

- Add original lessons 81–87: demonstratives, locations, questions and suggestions, polite noun prefixes, approximate quantity/duration, object giving/receiving.
- Preserve every existing ID and progress key. Add a small content pack; do not rewrite the application core.
- Add runtime-wide grammar completeness/reading/ID validation to CI, alongside existing regressions.
- Coverage references checked 2026-10-19: [official JLPT FAQ](https://www.jlpt.jp/e/faq/), [Bunpro grammar library](https://bunpro.jp/grammar_points), [JLPT Sensei N5 index](https://jlptsensei.com/jlpt-n5-grammar-list/) (all three pages).
- Do not import explanatory text or example sentences from references. All Indonesian guidance and examples in the new lessons are original.
- Continue with remaining minor constructions, conjugation clarity, and a complete reference-to-lesson matrix before closing Bunpou.

Validation: local syntax/regression passed; [CI run 39246348396](https://github.com/Xyron22/tenka-nihongo/actions/runs/39246348396) passed at `1c850e7`. Production upload and deployment were skipped.

## Stage 8A-9.3

- Lessons 88–97 close distinct uses of の, recognition of subject が／の, prohibitive な, casual quotation って, なあ, sentence connectors, まだ／もう, and basic adverb placement.
- Focused overlays add casual prohibition, なくてはならない, complete verb-group conjugation guidance, Vまで, existence clauses, and question-word variants.
- Level disagreements are recorded rather than inflated into new N5 lessons. In particular 方 and てある remain deferred; object giving/receiving does not add the N4 Vて benefactive patterns.

Validation: local syntax/regression and [CI run 39246861385](https://github.com/Xyron22/tenka-nihongo/actions/runs/39246861385) passed at `c829450`. The reference matrix resolves 214 topics through grouped lessons and defers 2 with reasons. Every loaded lesson has all required guidance, two translated examples, and kana readings.

## Stage 8A-9.4 — BUNPOU CONTENT CLOSED

- Content closure is based on the committed reference matrix, required fields, semantic distinctions, verb-group guidance, and manual Japanese/reading/translation review; not the lesson count.
- Final exercise/quiz audit remains a separate N5 closure gate.
- Replace one legacy advice example containing the N4 conditional なら with an N5 から example.

## Stage 8A-10.1 — Kotoba foundations

- Add everyday family/person/body/food/place/household/stationery vocabulary with original examples and kana.
- Fill all example kana on the original 75 cards, preserving their IDs.
- Cross-reference sources: [MLC N5 vocabulary](https://www.mlcjapanese.co.jp/n5_04_01.html) and [JLPT Sensei N5 vocabulary](https://jlptsensei.com/jlpt-n5-vocabulary-list/). Their word counts are reference inventories, not an official completion threshold. Classify variants and level disagreements before final vocabulary closure.

Validation: 223 vocabulary cards; local syntax/regression and [CI run 39247322228](https://github.com/Xyron22/tenka-nihongo/actions/runs/39247322228) passed at `2b2989a`.

## Stage 8A-10.2 — Kotoba surroundings and study

- Clothing, household objects, transport, geography, weather, animals, colours, study language and leisure.
- Separate homophones by spelling and meaning (e.g. 箸／橋, 花／鼻, 雨／飴).
- New words use modern beginner senses. Historical devices retained in references are explicitly labelled as such; they do not establish a numeric completion target.
