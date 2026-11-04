# N4 staged completion

Status: **OPEN**. N4 is the next language-development priority before N3. N2/N1 are deferred. PR #16 remains draft; no merge, auto-merge or production deployment is authorized.

## Baseline — 2026-11-04

At `5f2f2c1`, N4 has one grammar sample (`n4-g-01`), two vocabulary cards and one Kanji card. It has no reconciled N4 coverage ledger. The experience pattern already has an N5 prerequisite lesson; preserve the N4 legacy ID and classify that overlap explicitly instead of counting it as a new objective.

Next work: establish original rich grammar lessons and contextual practice, then vocabulary and verified Kanji/Bushu batches, followed by objective coverage and reading/listening/session audits. Counts are implementation snapshots, not official JLPT inventories.

References: official ability/policy descriptions at https://www.jlpt.jp/about/levelsummary.html and https://www.jlpt.jp/e/faq/; cross-reference grammar inventories at https://bunpro.jp/grammar_points and https://jlptsensei.com/jlpt-n4-grammar-list/. Indonesian guidance, examples and questions are authored for TENKA.

## Stage 10A-1 — Action, aspect and benefactive foundations

- Add eight original rich lessons: てみる, ておく, てしまう (completion/regret taught together), てあげる, てくれる, てもらう, ながら and てある. Upgrade the legacy experience lesson with the missing guidance, second translated kana example and contextual question while preserving all its original fields/ID.
- Each of the nine installed grammar lessons has meaning/pattern/explanation, function, when-to-use guidance, warning/common mistake, two Japanese/kana/Indonesian examples, contrast and one reviewed contextual question. Benefactive direction, actor roles and register cautions are explicit; simultaneous actions share an actor; prepared result states distinguish transitive てある from intransitive ている and preparatory ておく.
- The [initial grammar ledger](n4-bunpou-coverage.json) marks the N5 experience prerequisite as review and maps the new objectives. Seven new topics are listed at N4 by both publishers. For てある, Bunpro lists N4 while JLPT Sensei labels N5; retain N4 placement following the already documented N5 deferral and record that disagreement. The full ledger remains OPEN and is not a claim of full N4 coverage.
- The real boot manifest loads the pack without changing N5/N3/N2/N1, Kaigo, N4 vocabulary/Kanji, grading, speech, storage or navigation. Reload is idempotent. Tests check content integrity, all-target reachability, level isolation, wrong/timeout/correct answers, one feedback, finite results, save-once scoring and old progress.
- Local syntax/full regressions and all three browser audits pass. The new N4 audit checks all nine rich grammar cards at 320/390/720/1280/1440 px and real timeout/wrong/correct result review, finite exit and N5/N4 mastery persistence. Existing N5 and Kaigo browser flows remain green against the new manifest. Exact final-head CI is recorded in draft PR #16. N4 and N3 remain OPEN; N2/N1 development stays deferred.
