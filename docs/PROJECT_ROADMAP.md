# Active completion target through N3

Updated from the owner's instruction on 2026-11-04 (Asia/Tokyo). Work continues in small checkpoints on `stage-8a1-n5-kanji`; PR #16 stays draft. Merge, auto-merge and production deployment still require explicit owner approval.

## Priority and completion boundaries

1. Preserve **N5 CLOSED** and close the selected **Kaigo basic workplace-language unit** with its objective ledgers and current practice gates.
2. Build and audit **N4**: grammar, vocabulary, Kanji/Bushu, contextual practice and level-appropriate reading/listening work. Reconcile references and level disagreements before claiming closure.
3. Build and audit **N3** with the same quality requirements. N4/N3 closure is a curriculum/practice status, not learner mastery or a guarantee of passing an examination.
4. Add a dedicated **介護福祉士国家試験** learning track, using the official subject/criteria framework and guided original practice. Book-companion research is recorded now in [KOKUSHI_TRACK.md](KOKUSHI_TRACK.md); unseen chapters remain unmapped.
5. **N2 and N1 are deferred** until this target is complete. Preserve their existing content and IDs.

## Baseline before N4/N3 expansion

At `5f2f2c1`, N4 contains one grammar sample, two vocabulary cards and one Kanji card; N3 contains one sample in each category. These are **OPEN**, not complete curricula. See [N4 checkpoints](N4_CHECKPOINTS.md) for subsequent batches. N5 remains closed; higher-level expansion must not rewrite its inventory.

The initial N4 experience lesson overlaps an audited N5 prerequisite. Retain its legacy ID and explicitly classify the bridge/review role in the N4 coverage ledger; it must not inflate the number of distinct covered objectives.

## Current implementation checkpoint — 2026-11-05

Stage 10A-19 starts the N4 vocabulary phase after 149 installed rich grammar lessons. N4 has fourteen vocabulary cards (two retained and twelve new sense/application cards) and one legacy Kanji sample. The [first vocabulary ledger](n4-kotoba-coverage.json) records the actual authored scope and N5 prerequisite extensions. Eighteen rows in the captured grammar-library inventories remain unresolved; those inventories are not a complete N4 vocabulary syllabus.

Next: continue lexical reconciliation and capture full independent vocabulary inventories, then build reviewed vocabulary/Kanji/Bushu batches and mature reading/listening/contextual practice. N4 and N3 stay OPEN; N5 and the bounded Kaigo basic unit remain CLOSED. The dedicated certification track remains planned separately.

## Quality gates for each level

- Use multiple reference inventories and official JLPT ability descriptions. Individual vocabulary/Kanji/grammar lists are level-aligned references, not official JLPT completion thresholds.
- Each grammar lesson has meaning, pattern, explanation, function, when to use it, warnings/common mistakes, two Japanese/kana/Indonesian examples, contrast and an unambiguous contextual practice item.
- Vocabulary has kana, a natural Japanese/kana/Indonesian example and useful distinctions. Kanji has verified readings/Bushu, labelled visual components/memory aids and attributed stroke data when provided; memory aids are not asserted as etymology.
- Test level isolation, target reachability, ambiguity exclusions, wrong/correct/timeout behavior, finite exits and old progress. Reading/listening objectives need their own evidence rather than being inferred from card counts.
- Fetch the latest branch/file SHAs before each edit batch, use one writer per file, preserve progress IDs and run syntax/regression/CI before moving to the next checkpoint. Resolve failures before proceeding.
- Retain [phone/desktop acceptance](V1_ACCEPTANCE.md). Progress transfer and target-device checks remain open work; recording them does not implement synchronization.

Primary JLPT policy references checked for this roadmap: https://www.jlpt.jp/e/faq/ and https://www.jlpt.jp/about/levelsummary.html. Content inventories are cross-references only; examples and practice are authored for TENKA.
