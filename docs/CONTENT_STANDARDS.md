# TENKA Content & System Freeze Rules

This document is the gate between system work (Stage 1) and content expansion (Stage 2).

## Stage 1 — system freeze

Before adding another content batch:
- Every route must render without uncaught errors or `undefined` leakage.
- Quiz sessions are finite. Result screen ends with **Selesai**; no automatic or promoted repeat action.
- 申し送り practice presents **one sentence at a time**.
- After the comprehension answer, the case ends with **Selesai → Kaigo menu**. It must not chain automatically to another case.
- If all currently available 申し送り cases are completed, opening Practice must not silently restart case 1.
- JLPT quiz distractors stay inside the selected level/session.
- JLPT listening uses vocabulary targets, not isolated kanji with multiple possible readings.
- Flashcard SRS ratings remain audio-neutral.
- Correct / wrong / timeout each emit at most one exam feedback sound.
- Existing progress in localStorage must remain readable after version changes.

## Stage 2 — content rules

### JLPT
The modern JLPT does not publish a definitive official vocabulary/kanji/grammar list for each level. TENKA content should therefore be described as **JLPT-level aligned**, not an official item list.

Primary references:
- JLPT FAQ: https://www.jlpt.jp/e/faq/
- JLPT level summary: https://www.jlpt.jp/about/levelsummary.html
- Official sample/practice questions: https://www.jlpt.jp/e/samples/sampleindex.html

Rules:
- Use original examples and original quiz questions.
- Match difficulty and communicative ability to the official level summaries.
- Listening material should use natural, unambiguous words/sentences rather than isolated multi-reading kanji.

### Kaigo / 介護福祉士
Future certification-oriented material must map to the current official 介護福祉士 examination subjects and published 出題基準.

Primary references:
- Social Welfare Promotion and National Examination Center, exam overview:
  https://www.sssc.or.jp/kaigo/tetsuzuki.html
- Official 出題基準:
  https://www.sssc.or.jp/kaigo/kijun/kijun_01.html
- MHLW overview:
  https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/shakai-kaigo-fukushi1/shakai-kaigo-fukushi4.html

Current subject vocabulary used for `examArea` must be one of:
- 人間の尊厳と自立
- 介護の基本
- 社会の理解
- 人間関係とコミュニケーション
- コミュニケーション技術
- 生活支援技術
- こころとからだのしくみ
- 発達と老化の理解
- 認知症の理解
- 障害の理解
- 医療的ケア
- 介護過程
- 総合問題

Certification-style questions added later should normally use **five choices**, matching the current national-exam format, while 申し送り comprehension practice may remain a simpler learning exercise.

Clinical-language rules:
- Prefer observable facts and clear handoff information.
- Preserve dignity, self-determination, safety, and independence-support principles.
- Do not teach staff to invent medical orders. Follow documented plans/instructions and report relevant changes to the appropriate professional.
- Medication, swallowing, falls, skin changes, and other safety-sensitive scenarios must be reviewed for scope and wording before release.
