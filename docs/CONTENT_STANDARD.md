# TENKA content standard

## Freeze rule
System behavior is frozen before large content expansion. New material must not change quiz, SRS, audio, navigation, or progress behavior unless a separate system change is explicitly approved.

## Japanese/JLPT content
- Use natural contemporary Japanese.
- Do not label individual vocabulary/kanji as "official JLPT vocabulary" unless an official source explicitly does so.
- Examples must match the stated meaning and level as closely as practical.
- Readings, meanings, and answer keys are checked before merge.
- Every quiz item must have exactly one defensible best answer.

## Kaigo workplace content
- Separate workplace Japanese (介護・申し送り) from national-exam study (介護福祉士).
- Handoff practice is sentence-by-sentence. Each case stores explicit Japanese sentence, reading, Indonesian meaning, comprehension question, and answer.
- Prefer observation/reporting language. Do not teach care workers to independently diagnose, prescribe, or make medication decisions outside their role.
- Avoid ambiguous shorthand when a clearer professional expression is available.
- A completed practice session ends. Repetition is only user-initiated.

## 介護福祉士 national-exam track
Use the current official exam structure as the source of truth. For the 39th national examination (令和8年度), the official exam has 13 subjects across the exam parts, 125 questions, and primarily five-option single-answer multiple-choice questions. 総合問題 uses case-based questions spanning the domains.

Current subject set:
1. 人間の尊厳と自立
2. 介護の基本
3. 社会の理解
4. 人間関係とコミュニケーション
5. コミュニケーション技術
6. 生活支援技術
7. こころとからだのしくみ
8. 発達と老化の理解
9. 認知症の理解
10. 障害の理解
11. 医療的ケア
12. 介護過程
13. 総合問題

Primary references:
- https://www.sssc.or.jp/kaigo/tetsuzuki.html
- https://www.sssc.or.jp/kaigo/kijun/
- https://www.mhlw.go.jp/stf/newpage_74538.html
- https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/seikatsuhogo/shakai-kaigo-fukushi1/shakai-kaigo-fukushi4.html

Before adding a large 介護福祉士 batch, re-check the current year's official 出題基準 and exam format.

## Content QA before merge
- Unique IDs.
- Required text/readings/meanings are present.
- Handoff segment text concatenates exactly to the full handoff text.
- Answer index is valid.
- No duplicate answer choices.
- No empty quiz pools.
- Core regression tests must remain green.
