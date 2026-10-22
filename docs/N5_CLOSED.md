# N5 CLOSED — TENKA curriculum checkpoint

Checked 2026-10-21 (Asia/Tokyo) on `stage-8a1-n5-kanji`. PR #16 remains **draft**. Merge, auto-merge and production deployment remain unauthorized.

This closes the TENKA N5 content and existing study/practice workflows: Bunpou, Kotoba, Kanji/Bushu, flashcards/SRS, contextual quizzes, and vocabulary listening. It does not mark the learner's progress complete. A full-length JLPT mock exam and separate passage/dialogue comprehension modules are outside this checkpoint's scope.

Closure follows resolved reference coverage and quality gates. The figures below describe the checked curriculum, not an official JLPT specification or a required item count.

## Content and coverage

| Area | Checked inventory | Coverage evidence |
| --- | --- | --- |
| Bunpou | 97 lessons | 216 rows across Bunpro and JLPT Sensei: 214 mapped; 2 deferred with reasons |
| Kotoba | 820 cards | 644 JLPT Sensei and 802 MLC rows fully reconciled; 7 MLC constructions deferred; compositions/variants map to existing lessons |
| Kanji | 105 cards | 103 historical KANJIDIC targets plus 2 retained support cards; all 80 Sensei targets covered; MLC 120 resolved as 105 covered and 15 deferred |

Each Bunpou lesson has meaning, pattern, explanation/function, when-to-use guidance, warnings, a common mistake, two Japanese examples with kana and Indonesian translations, and a contrast. Coverage maps live in [`n5-bunpou-coverage.json`](n5-bunpou-coverage.json), [`n5-vocabulary-coverage.json`](n5-vocabulary-coverage.json), and [`n5-kanji-coverage.json`](n5-kanji-coverage.json).

Every vocabulary card has kana, a Japanese example and its Indonesian meaning. Usage notes address irregular readings, counters, transitivity, register and common confusions. The context-dependent interjection card remains available for study and SRS; it is excluded from single-answer meaning quizzes.

Every Kanji lesson includes selected onyomi/kunyomi, a verified classical Bushu index, visual components, a labelled mnemonic, a concrete word with kana/meaning, and a translated example. Mnemonics are memory aids with no etymology claim. All N5 ordered stroke paths derive from the pinned KanjiVG source and retain the source coordinates; radical/stroke counts are checked against KANJIDIC2. See [`N5_KANJI_SOURCES.md`](N5_KANJI_SOURCES.md) for scope, attribution and licences.

Level disagreements are explicit deferrals. In particular, productive 方 (way of doing), てある, がる/たがる and advanced honorific extensions are not added to inflate N5 coverage. Polite 方 meaning “person” is a separate vocabulary sense. The original 朝/夜 support cards keep their IDs.

## Practice and runtime gates

- All 97 grammar lessons have an original contextual cloze question, a kana scaffold, four authored options, an intent/register cue and an explanation. The full inventory is reachable after shuffling. A final semantic review removed the competing grammatical 寝るほうがいい answer from the affirmative advice question.
- Card quizzes retain all 924 eligible mixed targets and all 819 eligible listening targets. Conservative synonym/umbrella exclusions prevent competing glosses; distractors stay within the selected level. Listening uses an authored kana target followed by its kana example to distinguish homophones. Session review includes the correct answer, the learner's answer, examples and explanations.
- Correct, wrong, timeout, double-tap, result-rerender, navigation and new-session paths pass. Each answer counts once; each completed session saves once; best scores survive lower-scoring attempts; old audio/advance callbacks cannot affect a new session.
- Legacy card and grammar IDs remain present. Old SRS records load, due cards can be reviewed, new lessons can be marked, and saved progress survives reload. Daily Mission reflects those actions. No storage-key migration or automatic learner completion occurs.
- Browser checks inspect all 925 cards at 320, 390 and 720 px, plus Home, N5, Bunpou, Daily and Progress. Bushu notes, a complex kakijun example and a completed quiz/review are inspected visually. The [UI audit](n5-ui-audit.json) records the checked source hashes. Browser testing uses Chromium; speech voices and autoplay availability still come from the user's device/browser.

## Validation and release boundary

Run `bash scripts/check-local.sh` for source syntax and all data/content/runtime/audio regressions. CI runs the same content and runtime gates alongside its existing asset/build checks. The historical 75-item test remains a baseline regression; current closure follows the actual boot manifest and the committed coverage ledgers.

Browser smoke test: `node tests/n5-browser-smoke.cjs` with Playwright installed. Optional environment variables select the Chromium executable (`TENKA_TEST_CHROMIUM`), an installed `@fontsource/noto-sans-jp` directory (`TENKA_TEST_JAPANESE_FONT_DIR`), and an output directory (`TENKA_UI_AUDIT_OUTPUT`). This read-only app test uses a fresh browser context and does not access a signed-in account.

Pre-closure checkpoints are recorded in [`N5_CHECKPOINTS.md`](N5_CHECKPOINTS.md), including their exact commit and CI run. The final PR head must pass CI before this checkpoint is delivered. GitHub Pages configuration, production artifact upload and deployment run only for `main`; the draft PR receives validation only.

Curriculum closure is independent of publication. The public site continues to use `main` until the owner explicitly approves merge and deployment.
