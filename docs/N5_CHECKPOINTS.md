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
