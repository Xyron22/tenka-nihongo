# KAIGO BASIC CLOSED — bounded workplace-language unit

Checked 2026-11-04 (Asia/Tokyo). This closes the installed basic workplace-language unit and its selected objectives, not the entire Kaigo curriculum, clinical competence or the 介護福祉士 examination track. It does not mark any learner's progress complete. PR #16 remains draft and release approval is still required.

## Audited scope

- The installed vocabulary covers basic workplace language plus the added rooms/facilities, equipment/supplies and respectful-communication units. All 152 cards have term/kana/meaning and Japanese/kana/Indonesian examples; the count is a snapshot, not an official care-vocabulary inventory.
- All 13 illustrated tools retain their original images, definitions, examples, readings and existing cautions. Detail/flash/review pronunciation uses authored kana with a Japanese fallback.
- All 20 report models retain situation, Japanese/kana/Indonesian pieces, usage distinctions, model-order practice and self-assessed writing. Model review and revision do not award unearned mastery.
- All 26 handoffs (77 sentences) retain one-sentence presentation, normal/slow authored speech, a reviewed comprehension answer and source evidence. Wrong replays preserve earlier completion; sessions end explicitly.
- The [workplace ledger](kaigo-workplace-practice.json) maps eight count/identity/stock/observation/task-progress objectives to report and handoff cases. The [communication ledger](kaigo-communication-coverage.json) maps six consent/preference/choice/privacy/clarification/confirmation objectives to vocabulary and handoffs. Every referenced lesson and answer rationale is present.

## Evidence and limits

The current runtime tests cover vocabulary target reachability, conservative distractors, correct/wrong/timeout behavior, explicit exits, save-once quiz results, SRS/completion reload and old IDs. The new closure gate checks content fields/readings, practice integrity and both objective mappings. Browser evidence covers phone and desktop layouts and actual mouse/keyboard/report-entry controls. Exact final commit/CI are pinned in PR #16.

Closure applies to the language objectives and current workflows. Equipment definitions do not authorize procedures; the scenarios are fictional and do not replace a facility care plan or professional instructions. The ledger flags `fullKaigoClosed: false` and `officialExamCoverage: false` remain accurate.

Progress transfer, actual target-device voice/PWA checks, full Kaigo coverage and the dedicated national-exam track remain separate work. [The active roadmap](PROJECT_ROADMAP.md) now moves to N4, then N3, with N2/N1 deferred.

Primary terminology/context references and original-content policy remain recorded in [Kaigo checkpoints](KAIGO_CHECKPOINTS.md). The current official examination structure and the owner's book-companion plan are recorded separately in [KOKUSHI_TRACK.md](KOKUSHI_TRACK.md).
