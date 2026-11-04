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


Stage 10A-1 checkpoint: `cb6c5af65778d26f8ab5021aea27e00770f42853`; CI [41783265465](https://github.com/Xyron22/tenka-nihongo/actions/runs/41783265465) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-2 — Action phases, completion and recency

- Add eight original rich lessons: dictionary-form ところ (about to), ているところ (in progress), たところ (immediately after), たばかり (subjective recency), stem＋始める, 続ける, 終わる and 出す (sudden inception). All seventeen installed N4 grammar lessons have the complete guidance/example/contrast fields and an original contextual question. The N5 experience bridge remains explicitly a prerequisite review.
- Teach subjective recency without a fixed minutes/days limit, preserve the distinction between immediate post-completion and a month-old event that still feels new, and explain that broad ている can also express habits/result states. The compound-verb lessons give stem formation, compatible meanings and common errors; 出す is not generalized to every compound containing that Kanji.
- Extend the staged cross-reference ledger with both publisher topic mappings for the eight new objectives. Source topic counts remain non-official and full N4 reference reconciliation remains pending.
- Strengthen the runtime regression so every installed N4 target is exercised through wrong, real controlled-clock timeout and correct answer/result/save/reload sessions. Each grammar pack is independently checked for idempotence, preserved earlier fields and no changes to other levels, Kaigo or N4 vocabulary/Kanji.
- Syntax/full regressions and the N4/N5/Kaigo browser audits must all pass for this checkpoint. Browser QA covers all seventeen N4 cards at 320/390/720/1280/1440 px, the result/exit/progress flow, and existing N5/Kaigo behavior against the new manifest. The exact final-head CI is recorded in draft PR #16. N4/N3 remain OPEN; vocabulary, Kanji/Bushu, reading/listening and full objective audits still need their own batches.


Stage 10A-2 checkpoint: `c6384b4c1cf18a8d194659a68426a5e681c54278`; CI [41784679214](https://github.com/Xyron22/tenka-nihongo/actions/runs/41784679214) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-3 — Ability, volition, plans and development

- Add eight original rich lessons: potential-form formation, plain volitional formation, volitional＋と思う, 予定だ, ようになる, ようにする, ていく and てくる. All twenty-five installed grammar lessons include the complete guidance, two translated kana examples, contrast and contextual question. The legacy experience bridge is preserved as prerequisite review.
- Potential formation covers godan/ichidan/する/来る, godan verbs ending in る, standard versus conversational variants, and ability versus permission. Volitional formation distinguishes invitation/intention from ability and commands. Plans are not represented as guaranteed outcomes; third-person intentions require actual evidence.
- Change in ability/habit is distinguished from intentional effort to maintain a habit. The directional lessons teach both physical movement relative to a reference point and development relative to an anchor time; てくる is not falsely limited to round trips.
- Extend both publisher mappings for these N4 objectives. Full reference reconciliation remains pending; purpose ために and other unreviewed objectives are not added merely to inflate this batch.
- Before accepting the checkpoint, run local syntax/full regressions, all-target wrong/timeout/correct grammar sessions and all three five-width browser audits. N4/N5/Kaigo reports must match the current manifest. Final-head CI is recorded in draft PR #16. N4/N3 remain OPEN; N2/N1 development stays deferred.


Stage 10A-3 checkpoint: `c5692e75f8842d4dd83ca576037e7d2f950498f2`; CI [41785460447](https://github.com/Xyron22/tenka-nihongo/actions/runs/41785460447) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-4 — Conditions, concessions and scenarios

- Add six original rich lessons: たら, ば, なら, conditional と, ても／でも and 場合は. All thirty-one installed lessons retain the complete guidance/example/contrast fields and original contextual practice; the N5 experience bridge remains prerequisite review.
- Explain conditional formation for verb groups, adjectives and nouns, the non-past uses of たら, automatic/habitual と, premise-based なら including advice before the premise event, and concessions rather than permission. Avoid falsely banning every volitional consequent after ば or claiming that other correctly conjugated conditionals can never overlap.
- Question prompts specify a scenario and retain the actual conjugation boundary. Distractor explanations distinguish a wrong attachment from a differently conjugated pattern that may be valid in another context. 場合は practices everyday workplace instructions without adding medical/legal directives.
- Both publisher inventories support these six N4 objectives. Explanations/examples are original; comparisons were additionally checked against Bunpro's own conditional topic/formation references. The full N4 ledger remains OPEN.
- Accept only after syntax/full regressions, all-target wrong/timeout/correct sessions, five-width N4/N5/Kaigo browser audits and final-head CI pass. N5 and existing Kaigo content, old grammar fields, progress identities and core runtime remain unchanged. Draft PR #16 records the final-head CI; no merge or production deployment is authorized.


Stage 10A-4 checkpoint: `a15fe4779e568c38389f1e4e5bb2cfc991ee5b0d`; CI [41786266864](https://github.com/Xyron22/tenka-nihongo/actions/runs/41786266864) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-5 — Possibility, inference, appearance and characteristic likeness

- Add eight original rich lessons: かもしれない, はずだ／はずがない, appearance/impending-event そう, ようだ with modifier forms, conversational みたい with modifier forms, inference/hearsay らしい, characteristic Nらしい and visual に／く見える. All thirty-nine installed lessons have the complete required fields and contextual practice; conjugated/modifier variants stay within their parent lesson rather than inflating counts.
- Explain possibility versus evidence-based expectation versus obligation, the appearance/hearsay attachment difference in そう, proper noun/na-adjective attachment, and visibility versus visual impression. No fixed confidence percentages are asserted. Inferences and received information do not become verified facts through grammar alone.
- The two らしい lessons teach genuinely different constructions: inferred status from information versus characteristic likeness with adjective behavior. The ledger does not falsely claim that JLPT Sensei's hearsay-only parent gloss independently verifies the characteristic sense; that N4 placement is verified directly against Bunpro's dedicated characteristic lesson.
- Review distractors for more than one plausible answer. The characteristic-らしい question asks meaning in a stated context; it avoids a slot where both adjective and adverbial variants could form valid sentences. Hearsay そう is explained only as a contrast and is not counted as taught coverage in this appearance batch.
- Accept only after syntax/full regressions, all-target wrong/timeout/correct runtime sessions, N4/N5/Kaigo browser audits at all five widths with current hashes, and final-head CI pass. N4/N3 remain OPEN; old identities, other levels, Kaigo and core runtime remain unchanged. Draft PR #16 records final-head CI; no merge/production deployment is authorized.


Stage 10A-5 checkpoint: `06d1112368bcd9f7c0f6bff1c45100d4213a5af1`; CI [41787405263](https://github.com/Xyron22/tenka-nihongo/actions/runs/41787405263) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-6 — Thoughts, information, embedded questions and requests

- Add eight original rich lessons: と思う, と聞いた, かどうか, wh-question＋か, こと nominalization, proposition＋ということ, てほしい and ように言う. All forty-seven installed lessons have complete guidance, two translated kana examples, contrast and contextual practice. Earlier fields/IDs and the N5 experience prerequisite bridge stay preserved.
- Distinguish own thoughts, received information and verified facts. Embedded questions preserve wh-information versus polar yes/no uncertainty, and distinguish 誰が～か from the N5 indefinite 誰か. Nominalization is not misrepresented as full coverage of every experience, decision or hearsay pattern containing こと.
- Teach desired action versus a communicated request, identify who speaks and who is expected to act, and avoid treating a reported instruction as proof of consent or completed action. The reported-request question tests actor comprehension, not only suffix recognition.
- Record direct N4 publisher support for every new objective. Dedicated wh-embedding and ように言う sources are verified at Bunpro; related JLPT Sensei parent entries are not invented as exact matches. Full N4 reference reconciliation remains pending.
- Accept only after syntax/full regressions, all-target wrong/timeout/correct sessions, N4/N5/Kaigo browser audits at all five widths with matching current hashes and final-head CI pass. N4/N3 remain OPEN; N2/N1 stay deferred. Draft PR #16 records the exact final-head CI, with no merge or production deployment.
