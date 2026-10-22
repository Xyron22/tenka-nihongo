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

Validation: 351 vocabulary cards; local syntax/regression and [CI run 39247694838](https://github.com/Xyron22/tenka-nihongo/actions/runs/39247694838) passed at `2460e7b`.

## Stage 8A-10.3 — Kotoba adjectives and verbs

- Distinguish weather 暑い from touch/temperature 熱い and thickness 厚い; distinguish 早い／速い, 易しい／優しい, 着る／切る and 鳴く／泣く.
- Verb examples distinguish transitive and intransitive pairs (開ける／開く, 閉める／閉まる, 消す／消える, 並べる／並ぶ) and giving/receiving direction.
- Kana readings and Indonesian examples remain mandatory for every vocabulary card.

Validation: 505 vocabulary cards; local syntax/regression and [CI run 39248194962](https://github.com/Xyron22/tenka-nihongo/actions/runs/39248194962) passed at `7b79a4b`.

## Stage 8A-10.4 — Kotoba numbers and time

- Calendar, relative time, clock time versus duration, numerals and common counters in concrete examples.
- Explicit readings include 四月／七月／九月, 四時／七時／九時, irregular dates, 一人／二人, 二十歳, and sound changes in 本／匹／杯／階.
- 同形異読 such as 一日（ついたち／いちにち）are separate cards with contextual examples. Generic numeric compositions will map to these counter lessons in the coverage ledger rather than creating filler cards.

Validation: 624 vocabulary cards; local syntax/regression and [CI run 39248587242](https://github.com/Xyron22/tenka-nihongo/actions/runs/39248587242) passed at `302fcc2`.

## Stage 8A-10.5 — Kotoba reference gaps and expressions

- Pronouns and demonstratives, question words, relative locations, adverbs, sentence connectors, and fixed daily expressions.
- Polite 方 meaning “person” is distinct from the deferred N4 suffix 方 meaning “way of doing”.
- Interjections are grouped by communicative use and explicitly marked unsuitable for a single-meaning quiz. Shortened and orthographic variants will be reconciled in the ledger.

Validation: 758 vocabulary cards; local syntax/regression and [CI run 39249165032](https://github.com/Xyron22/tenka-nihongo/actions/runs/39249165032) passed at `bc3b7ae`.

## Stage 8A-10.6 — Kotoba final reconciliation

- Fill the remaining common headword gaps, including exam instructions, plus contextual counter/name compounds.
- Annotate irregular readings, verb-group traps, 同じ and きれい, and register-sensitive forms.
- A complete two-source coverage ledger must contain no unexplained gaps before Kotoba content closure. Level-disputed advanced constructions are deferred with specific reasons.

Validation: 820 vocabulary cards; all 1,446 reference rows are resolved by coverage, grouping, composition or reasoned deferral. Local syntax/regression and [CI run 39249962812](https://github.com/Xyron22/tenka-nihongo/actions/runs/39249962812) passed at `6520ff9`.

## Stage 8A-10.7 — KOTOBA CONTENT CLOSED

- Both reference inventories are reconciled. Seven MLC entries involving disputed/advanced constructions remain deferred, with reasons in the committed ledger.
- Kana, original Japanese examples and Indonesian translations exist on every card. Usage notes cover irregular readings and common confusions; interjections are flagged for exclusion from single-answer meaning quizzes.
- Exercise behaviour remains a separate closure gate.

## Stage 8A-11.1 — Kanji, Bushu and verified stroke foundations

- Enrich all original 50 cards and add the first 28 missing cross-referenced targets, preserving old IDs.
- Provide selected onyomi/kunyomi, verified classical Bushu, visual components, concrete word readings and explicitly non-etymological memory aids.
- Replace approximate N5 stroke diagrams with attributed KanjiVG paths; preserve the original 109-unit coordinate system. Validate path counts against KANJIDIC2.
- Keep notes outside the fixed-height flip card. Content closure follows the next reference reconciliation checkpoint.

Validation: local syntax/regression and [CI run 39453710246](https://github.com/Xyron22/tenka-nihongo/actions/runs/39453710246) passed at `45bb0fe`. Production upload and deployment were skipped.

## Stage 8A-11.2 — Kanji reference reconciliation

- Add the remaining 27 targets, for 103 cross-referenced targets plus two retained supporting cards (朝 and 夜). These are curriculum inventory figures, not an official modern JLPT threshold.
- Resolve every entry in three reference inventories: KANJIDIC2 historical Level 4, JLPT Sensei N5, and MLC Basic Kanji 120. MLC-only targets with conflicting level placement are deferred individually, while their beginner vocabulary remains learnable.
- All loaded N5 kanji have verified radical numbers and stroke counts, selected readings, visual components, a labelled memory aid, a word with kana and Indonesian meaning, and an original translated example.
- Preserve all original kanji IDs. Final exercise and UI audit remains required before N5 CLOSED.

Validation: local syntax/regression and [CI run 39454144822](https://github.com/Xyron22/tenka-nihongo/actions/runs/39454144822) passed at `69b29d4`. **KANJI CONTENT CLOSED**; coverage is reconciled, with 15 MLC-only standalone targets deferred for conflicting level placement and two legacy support cards retained. No fixed count is represented as official JLPT completion.

## Stage 8A-12.1 — Contextual Bunpou quiz

- Replace random meaning distractors for N5 grammar with one original, reviewed cloze question per lesson. Each has a kana scaffold, Indonesian intent cue, four distinct kana choices and an explanation.
- The cue distinguishes intention/register when more than one Japanese form could otherwise be grammatical. Synonymous obligation/prohibition meanings no longer compete as random correct-looking choices.
- Sample ten questions after shuffling the entire grammar inventory. A real-runtime seeded audit verifies all 97 lessons are reachable.
- Add a session review with the learner's answer, correct answer and explanation, while preserving double-tap protection, one feedback event, explicit finish, and save-once scoring.

Validation: local syntax/regression and [CI run 39455257440](https://github.com/Xyron22/tenka-nihongo/actions/runs/39455257440) passed at `34306ac`. Production upload and deployment were skipped.

## Stage 8A-12.2 — Kotoba/Kanji quiz and listening context

- Filter competing synonymous glosses, duplicate meanings and generic umbrella distractors in the N5 card pool. Prefer eligible distractors from the same topic when available.
- Keep context-dependent interjections available in flashcards/SRS while excluding them from single-answer meaning quizzes.
- Use an authored kana reading followed by the kana example for N5 audio. This distinguishes homophones without depending on TTS to guess a kanji reading.
- Include Japanese/kana context in the written quiz and translated examples plus usage notes in the session review.
- Seeded runtime tests require every eligible N5 card to remain reachable, four distinct answers, correct shuffled scoring, kana context and separation from other levels and Kaigo.

Validation: local syntax/regression and [CI run 39456853771](https://github.com/Xyron22/tenka-nihongo/actions/runs/39456853771) passed at `055cff9`. Production upload and deployment were skipped.

## Stage 8A-12.3 — Session, progress and mobile audit

- Review all 97 authored grammar questions. Remove dictionary-form 寝る as a competing choice in the affirmative advice question: 寝るほうがいい is also grammatical as a comparison, so it must not be marked wrong here.
- Exercise correct, wrong and timeout paths through the actual runtime with a controlled clock; require one attempt/feedback per question, one result save, persistent scores, and no stale audio or question advancement after navigating or starting a new session.
- Load legacy SRS and grammar records, review old cards, mark a newly added lesson, and reload the saved progress. Existing IDs and best scores remain intact, and Daily Mission reflects the actual actions.
- Browser validation and final closure evidence follow after this checkpoint's full regression and CI gates.

Validation: local syntax/regression and [CI run 39457481708](https://github.com/Xyron22/tenka-nihongo/actions/runs/39457481708) passed at `b97d195`. Production upload and deployment were skipped.

## Stage 8A-13.1 — N5 CLOSED

- All content, reference coverage, practice, saved-progress and mobile gates are closed for the TENKA curriculum scope described in [N5_CLOSED.md](N5_CLOSED.md).
- Record the closure snapshot separately from learner progress. Preserve all pre-expansion IDs across JLPT levels and keep PR #16 draft.
- Make quiz kana/context easier to read on mobile and label Kanji questions explicitly.
- Check all 925 cards at three viewport widths, inspect Bushu/kakijun/quiz review visually, and verify progress after a real browser reload. The reproducible optional browser script records exact source hashes in `n5-ui-audit.json`.
- Keep historical tests labelled as baseline checks. Current closure and its integration with CI have their own regression gate.
- Final local syntax/regression and the final PR-head CI must pass before delivery. No merge or production deployment is performed.
