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


Stage 10A-6 checkpoint: `407326827d9f1375e5fe2f7a304b3314db2b86dd`; CI [41788294606](https://github.com/Xyron22/tenka-nihongo/actions/runs/41788294606) passed on that exact head. Production-related steps and deployment were skipped; main remained `8139e1eb74fb3d8a51489632c5771eb9f6b06c71`.

## Stage 10A-7 — Time spans, deadlines, past aspect and clause relations

- Add eight original rich lessons: たあとで／Nのあとで, までに, 間／間に, ごろ／Nのころ, ごとに, past ongoing/result-state ていた, reason-listing し and concessive のに. All fifty-five installed lessons retain the complete fields and contextual practice; old identities/fields stay preserved.
- Distinguish sequence from tense, deadline from duration, approximate time point from interval repetition, span-wide continuation from an event inside a span, and a past transition from a state already in effect. 間に is not falsely limited to exactly one event; neither identical actors nor lack of speaker control is made a universal requirement.
- Reason-listing し is not required to occur twice. Concessive のに is separated from its purpose use, while ても is not falsely limited to hypothetical conditions. Meaning questions cover deadlines, interval events and contrary-to-expectation results, alongside attachment/application questions.
- Record publisher scope precisely: Bunpro's N4 ている間に supports ongoing-action intervals, while its broader の間に entry is N3; the basic-duration lesson also follows JLPT Sensei's N4 間／間に grouping and does not claim full broader-entry coverage. ごとに has direct Bunpro N4 support; a related おきに entry is not invented as an exact second-publisher match.
- Accept only after syntax/full regressions, all-target wrong/timeout/correct sessions, N4/N5/Kaigo five-width browser audits with matching current-manifest hashes and final-head CI pass. N4/N3 remain OPEN; N2/N1 remain deferred. Draft PR #16 records exact final-head CI; no merge or production deployment is authorized.


Stage 10A-7 checkpoint: `f2364bca69aaca7205b9b9f967b0e883c65f312e`; CI [41789234955](https://github.com/Xyron22/tenka-nihongo/actions/runs/41789234955) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-8 — Difficulty, methods, manner, change and passive roles

- Add eight original rich lessons: やすい／にくい, づらい, 方（かた）, 直す, adjective adverbs く／に, deliberate state change くする／にする, 他動詞／自動詞 and passive formation/roles. All sixty-three installed lessons have full guidance, two translated kana examples, contrast and contextual questions. Opposite ease/difficulty and predictable form variants stay grouped rather than inflating counts.
- Avoid absolute claims about subjective versus objective difficulty, intentional transitives, agentless intransitives, universal を classification, or passive always conveying distress. Teach the う→われる exception, overlapping potential/passive forms, a positive passive and a neutral publication passive. Actor comprehension is tested explicitly.
- The method lesson fulfills an existing N5 deferral: Bunpro lists N4 while JLPT Sensei lists N5. Keep the closed N5 content unchanged. Basic 直す follows Bunpro N4 while recording JLPT Sensei N3; subsequent N3 work should treat it as a prerequisite, not duplicate new coverage. Adjective-adverb formation has explicit Bunpro N4 support; no nonexistent exact second-publisher row is claimed.
- Separate method 方 from advice ほう, adjective manner from noun modification, and adjective state change from the preserved N5 noun-choice にする. Object/actor role questions supplement conjugation questions.
- Accept only after syntax/full regressions, all-target wrong/timeout/correct sessions, all three browser audits at 320/390/720/1280/1440 px with matching current hashes, and final-head CI pass. N4/N3 remain OPEN; N2/N1 development stays deferred. Draft PR #16 records exact final-head CI; no merge or production deployment is authorized.


Stage 10A-8 checkpoint: `f74e92c24da7c6618c93d923f11ee835660df1f1`; CI [41790334809](https://github.com/Xyron22/tenka-nihongo/actions/runs/41790334809) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-9 — Causation, permission, commands, advice, regret and purpose

- Add eight original rich lessons: causative, causative-passive, causative permission＋ください, imperative formation, なさい, たらどう, ばよかった and purpose ように. All seventy-one installed lessons retain full guidance, two translated kana examples, contrast and contextual practice.
- Teach separate cause-giver/action-actor roles, the limits of に／を heuristics, full and common contracted causative-passive forms, and a permission request rather than an already granted permission. Actor-comprehension questions exercise the causative, causative-passive and permission viewpoints.
- Original exercise instructions teach 選べ／選びなさい and one-answer scope. No actual exam/book question is copied. Register guidance explains why understanding a command does not make it a universal polite request. Regret questions distinguish wishing one had not bought from wishing one had bought.
- Purpose ように is distinct from analogy, habit/effort, changed ability and reported instructions. Source mappings retain exact-versus-parent scope; related publisher rows are not asserted as direct verification. Causative particle choices were also checked against Wasabi's own construction lesson, which is not treated as a level inventory.
- Accept only after syntax/full regressions, all-target wrong/timeout/correct sessions, all three five-width browser audits with current hashes and final-head CI pass. N4/N3 remain OPEN; full reference reconciliation, remaining grammar, vocabulary/Kanji and reading/listening audits are still pending. N2/N1 stay deferred; PR #16 remains draft with no merge/production deployment.


Stage 10A-9 checkpoint: `ca03964947c802d1d47565122af2542f20135265`; CI [41791953148](https://github.com/Xyron22/tenka-nihongo/actions/runs/41791953148) passed on that exact head. Production-related steps and deployment were skipped.

## Stage 10A-9.1 — Reproducible browser audits in CI

- Run the existing N4/N5/Kaigo browser audits automatically before the content/runtime gates, at all five phone-to-laptop widths. Add a mobile capture of the latest N4 lesson; the existing flow/assertion coverage remains in place.
- Use Node 24, pinned Playwright 1.64.1 and Noto Sans JP 5.3.1. Install test dependencies and write screenshots/reports in the runner temporary directory, outside the static-site checkout. No application runtime, curriculum, storage identity or production condition changes.
- Emit complete JSON reports and the latest N4 mobile screenshot in numbered, length-checked log chunks. A reviewer can recover actual runner-produced evidence rather than copying hashes onto an older report. Later content checkpoints must retain current evidence and pass the browser gates as well as syntax/full regressions.
- Accept only when exact-head CI including all three browser audits passes. N4/N3 remain OPEN, PR #16 stays draft and main/deployment remain approval-gated.


Stage 10A-9.1 checkpoint: `088ae9cef1445ac0d8cc5ed21bb9154dc5f1d9dd`; CI [41794147113](https://github.com/Xyron22/tenka-nihongo/actions/runs/41794147113) passed with Node 24, the full syntax/regression suite and all three automatic browser audits. Recovered JSON evidence was identical to committed reports (51/51/64 current source hashes); the actual mobile screenshot was inspected. Production-related steps and deployment were skipped.

## Stage 10A-10 — Honorific, humble and formal-request foundations

- Add eight original rich lessons: お～になる, お／ご～ください, いらっしゃる, なさる, ございます／でございます, お／ご～する, いたす and ていただけませんか. All seventy-nine installed lessons have complete guidance, two Japanese/kana/Indonesian examples, contrast and contextual practice; old fields/IDs remain preserved.
- Distinguish honoring the actor, honoring the party related to an own-side action, and speaking formally to the listener. A respected actor can be a third party; honorifics are not falsely limited to the listener. Context/inside-outside relations matter. Formal ある/copula is not a general replacement for living-person existence.
- Explain conventional お／ご and eligible verbs rather than a universal prefix rule. Teach special polite いらっしゃいます／なさいます, correct する-noun formation, and polite receiving-side requests without treating them as proof of agreement or completion. Actor/recipient questions supplement form recognition.
- Cross-check level placement against publisher inventories and the keigo role/prefix principles against the Agency for Cultural Affairs. The official language guidance is not treated as a JLPT inventory. Dedicated special-verb vocabulary and complete coverage reconciliation are still required before full N4 closure.
- Validate syntax, full regressions and all-target wrong/timeout/correct flows in CI. Run all three browser audits on the actual new manifest at five widths, recover the runner-produced reports/screenshot and persist matching evidence before final acceptance. N4/N3 remain OPEN, N2/N1 stay deferred, PR #16 remains draft, and no merge/production deployment is authorized.


Stage 10A-10 content checkpoint: `76a0fe0afbc0e84ef31d7daaa93dd7bd304216ad`; CI [41795905029](https://github.com/Xyron22/tenka-nihongo/actions/runs/41795905029) passed syntax/full regressions and all three automatic browser audits. The actual runner-produced reports verify 79 N4 cards at all five widths, with 52/52/65 current N4/N5/Kaigo source hashes and 6/7/39 passing flows. The latest mobile keigo card was visually inspected. This evidence-only follow-up persists those generated reports without changing runtime inputs; final-head CI remains required and is recorded in draft PR #16. Production-related steps and deployment were skipped.


Stage 10A-10 final evidence checkpoint: `59386091844226bc90a291a133f98602c4a222f2`; CI [41796853160](https://github.com/Xyron22/tenka-nihongo/actions/runs/41796853160) passed all syntax, regression and browser gates. Recovered reports matched the committed evidence exactly; production steps/deployment were skipped.

## Stage 10A-11 — Full publisher-reference snapshot and honest gap tracking

- Capture every observed N4 row from Bunpro (185) and all four JLPT Sensei pages (132) in [the reference audit](n4-grammar-reference-audit.json). These are overlapping publisher snapshot rows, not unique objectives, required lesson counts or an official JLPT inventory.
- Map each row to current rich N4 teaching, a verified N5 prerequisite, an explicit partial scope, or pending grammar/meaning-specific vocabulary. Keep hearsay/appearance, concession/purpose, quotation/naming and scalar/additive uses distinct. Record publisher level differences without moving harder content into closed N5.
- Preserve every row, stable snapshot identity and actual lesson reference with integrity assertions. Pending/partial rows block any claim of full reference reconciliation. The existing 79 lessons remain intact; N4/N3 stay OPEN.
- Export a read-only compiled curriculum snapshot from Node CI for follow-up prerequisite/lexical reconciliation. This uses the real manifest and does not modify the app, user data, progress, or deployed files.
- Validate syntax/full regressions and all three browser audits in CI; runtime input hashes are unchanged, so compare runner-produced reports to the accepted evidence. PR #16 remains draft; no merge or production deployment.


Stage 10A-11 checkpoint: `11019bd4e7161dbac6969cc181cbe52dcee56dc9`; CI [41801333736](https://github.com/Xyron22/tenka-nihongo/actions/runs/41801333736) passed syntax/full regressions and all three browser audits. Recovered reports exactly matched committed evidence; the real-manifest snapshot confirmed N5 97/820/105 and N4 79/2/1 (grammar/vocabulary/Kanji). Production steps/deployment were skipped.

## Stage 10A-12 — Decisions, reported information and linking functions

- Add eleven original rich lessons: personal decisions/standing habits, arranged decisions, hearsay そうだ, naming/content という and casual っていう, general と言われている, negative なくて connection/reason, causal て／で, means/manner て／で, parallel/contrasting て, relief てよかった／なくてよかった, and apology てすみません／なくてすみません. All 90 installed lessons retain complete guidance, two Japanese/kana/Indonesian examples, contrast and contextual practice.
- Keep decision time separate from action time; distinguish voluntary choice, arrangement and coercion. Hearsay retains full clauses including noun/na-adjective だ; appearance uses a different attachment. Reported claims are not proof of universal agreement or truth.
- Explain each te-form relation by context. Negative requests/without-doing are not blindly replaced with なくて; causal results differ from explicit commands; parallel clauses may have different actors. Relief over actual outcomes differs from regret in both polarities.
- Update the full reference audit only for actual authored scope. Record Sensei N4/Bunpro N3 differences for decisions, hearsay and naming; the N5 closed curriculum remains unchanged. Fix the read-only audit export to include the existing term field for vocabulary reconciliation.
- Require CI syntax/full regressions, all-target wrong/timeout/correct sessions and three current five-width browser audits. Recover and persist actual runner reports before final acceptance. N4/N3 remain OPEN, N2/N1 deferred; PR #16 draft, no merge/deployment.


Stage 10A-12 validation repair: CI [41802439164](https://github.com/Xyron22/tenka-nihongo/actions/runs/41802439164) passed syntax/content checks and all three browser audits, then failed the separate fixed-60-session reachability probe (89 of 90 targets). Each full wrong/timeout/correct mode had already passed its all-target assertion. Replace fixed sample caps with a bounded curriculum-sized budget (at least 80 sessions, otherwise twice the current installed target count), stop as soon as all targets are seen, keep exact all-target assertions and print missing IDs on failure. No application/question/progress behavior changes.

Persist the actual runner-produced 90-card browser reports (53/53/66 source hashes; 6/7/39 flows) and visually inspect the latest mobile apology card. This evidence does not waive the failed regression: the repair must pass the complete CI before the next content stage. Production steps/deployment remain skipped.


Stage 10A-12 final repair/evidence checkpoint: `bf250101ea24d48c2c83b8a1fab90be27a20be52`; CI [41803364174](https://github.com/Xyron22/tenka-nihongo/actions/runs/41803364174) passed all syntax, regressions and browser audits. Recovered reports were identical to persisted 53/53/66-hash evidence; all-target quiz reachability and wrong/timeout/correct progress flows passed. Production steps/deployment skipped.

## Stage 10A-13 — Requests, gratitude, questions and wishes

- Add eleven original rich lessons: bare て／ないで requests, てくれてありがとう, negative-question benefactive requests, recognition of てやる, instructions-seeking たらいいですか, internal questions かな／かしら／のだろうか, familiar かい, qualified judgement と言ってもいい, explanatory consultation んだけど／んですが, wishes といい／ように祈る, and confirming/discovering じゃないか／ではないか.
- Keep request direction, real negation, gratitude, apology and permission distinct. Explain relationship/register; てやる can demean a human recipient and is not modeled as appropriate language toward patients or seniors. Internal-question style tendencies are not grammatical gender prohibitions.
- Treat consultation using N5 んです plus けど／が as a prerequisite application, not a newly discovered base objective. Preserve exact publisher scopes and the narrower N4 instructions question rather than claiming all N3 たらいい uses.
- All 101 installed lessons have full guidance, two Japanese/kana/Indonesian examples, contrasts and contextual questions. Update only the source rows actually taught; all unresolved grammar/lexical/depth work remains OPEN.
- Accept after CI syntax/full regressions, all-target wrong/timeout/correct sessions and all three browser audits at five widths, with actual generated evidence persisted. N5 CLOSED preserved, N4/N3 OPEN, N2/N1 deferred, PR #16 draft and no merge/production deploy.


Stage 10A-13 content checkpoint: `ae14c52bae61d40453997b36cbd1ac0e50a5b7f9`; CI [41803983405](https://github.com/Xyron22/tenka-nihongo/actions/runs/41803983405) passed syntax/full regressions, all-target quiz/progress flows and all three browser audits. Actual runner reports verify 101 N4 cards at five widths, 54/54/67 current source hashes and 6/7/39 flows. The latest mobile confirmation card was visually inspected. This follow-up persists those generated reports without changing runtime inputs; final-head CI is still required. Production steps/deployment were skipped.


Stage 10A-13 final evidence checkpoint: `6b5b28633c09ef04030017184bb79e9f629b7a1b`; CI [41804467876](https://github.com/Xyron22/tenka-nihongo/actions/runs/41804467876) passed syntax/full regressions, all-target quiz/progress and all three browser audits. Recovered reports exactly matched persisted evidence; production steps/deployment skipped.

## Stage 10A-14 — Restriction, quantity and comparison

- Add thirteen original rich lessons: しか～ない, noun-based ばかり, sufficient-condition だけで, additive だけでなく, open examples など／とか, scalar quantity も, lower-bound amount は, numeric 以上／以下／より, 以外, indefinite 何＋counter＋か, membership の一つ, explicit two-way comparison questions, and unexpected additive まで.
- Distinguish one yen only from not even one yen; minimum estimates from maximum limits; inclusive boundary numbers from exclusive comparisons; actual group membership from uniqueness or superlatives. Every lesson has full guidance, two Japanese/kana/Indonesian examples and contextual practice.
- Mark だけで and comparison questions as applications of existing prerequisites rather than inflating base-objective counts. Restrictive ばかり follows the directly verified narrow Sensei N4 noun scope and records Bunpro N3 placement; wider てばかりいる and advanced variants remain separate.
- Resolve only actual source scopes, retaining N5 comparison evidence on the broader Sensei より row. Add the previously missed Sensei かい row to its existing authored lesson. Expand read-only CI export to include full N4 guidance for the remaining depth review; no app or user-storage changes.
- All 114 installed N4 lessons remain part of an OPEN curriculum. Accept after CI syntax/full regressions, all-target wrong/timeout/correct sessions and all three browser audits at five widths, then persist actual current evidence. N5 CLOSED retained; N2/N1 deferred, PR #16 draft and no merge/deployment.


Stage 10A-14 content checkpoint: `ed831e83425136d8cfed6adc054288d14bb4fb90`; CI [41805178901](https://github.com/Xyron22/tenka-nihongo/actions/runs/41805178901) passed all syntax/regressions, all-target quiz/progress and three browser audits. Actual reports verify 114 N4 cards at all five widths, 55/55/68 current source hashes and 6/7/39 flows. The latest mobile scalar まで card was visually inspected. Persist these runner-produced reports without changing runtime inputs; final evidence-head CI remains required. Production steps/deployment were skipped.


Stage 10A-14 final evidence checkpoint: `ac9cec809b0e90c792b589c77e17fa19994b5275`; CI [41805906572](https://github.com/Xyron22/tenka-nihongo/actions/runs/41805906572) passed syntax/full regressions, all-target quiz/progress and all three browser audits. Actual reports exactly matched persisted evidence; production steps/deployment skipped.

## Stage 10A-15 — Observable feelings, descriptions, word formation and unchanged states

- Add eleven original rich lessons: がる／がっている, たがる, tendency nouns がり, sensory がする, feature/accessory をしている, adjective nominalization さ, group suffix ら for personal/demonstrative pronouns, frequent 毎～のように, adjective contrast くは, materials でできている／から作る, and unchanged-state まま.
- Separate observed behavior from a direct quotation and from certainty about another person's private feelings. Desire to act is distinct from the speaker wanting another person to act. Tendency descriptions are not diagnoses; conventional derivatives and clothing verbs are not universal formulas.
- Teach both polarities of くは, inclusive groups without invented exact membership counts, high frequency without invented day counts, and materials without an absolute visibility test. Maintain state and mere action sequence stay distinct.
- Record Sensei N4/Bunpro N3 placement for basic まま. Every one of the 125 installed lessons has complete guidance, two Japanese/kana/Indonesian examples, contrast and contextual practice. Only directly taught source rows are resolved; vocabulary and remaining depth/grammar remain OPEN.
- Accept after CI syntax/full regressions, all-target wrong/timeout/correct sessions and all three phone-to-laptop browser audits, then persist actual runner evidence. N5 CLOSED preserved, N4/N3 OPEN, N2/N1 deferred; draft PR #16, no merge/deployment.

Stage 10A-15 content checkpoint: `c7fad383f88ca629e2d66d97178e6ef265d57aed`; CI [41806635524](https://github.com/Xyron22/tenka-nihongo/actions/runs/41806635524) passed syntax/full regressions, all-target quiz/progress and all three browser audits. Actual runner reports verify 125 cards at five widths, 56/56/69 source hashes and 6/7/39 passing flows. The latest mobile unchanged-state card was visually inspected. Persist these generated reports without changing runtime inputs; final evidence-head CI remains required. Production steps/deployment were skipped.
