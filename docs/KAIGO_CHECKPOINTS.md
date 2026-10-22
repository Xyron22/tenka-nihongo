# Kaigo workplace expansion after N5

N5 is closed at `e92f15f`. The next agreed focus is Kaigo, including hospital/facility spaces and workplace equipment, before N3. This work does not declare the Kaigo curriculum or national-exam track complete. PR #16 stays draft; merge, auto-merge and production deployment require explicit owner approval.

## Stage 9A-1 — Rooms, facilities and kana foundations

- Add original workplace lessons for wards/rooms, bathing/changing areas, linen/laundry areas, treatment/consultation rooms, circulation/access and staff spaces. Category: **Ruangan & fasilitas**.
- Supply kana for the examples on all 68 legacy Kaigo vocabulary cards. Existing IDs, Japanese sentences, translations, categories and SRS identities remain intact.
- Each new lesson has a Japanese term, kana, Indonesian meaning, original Japanese/kana/Indonesian example, and a usage distinction. Do not equate 病棟 with 病室, or 脱衣室 with 更衣室.
- Rooms with potentially overlapping glosses share a quiz exclusion group. They cannot compete as distractors, while every card stays available for flashcards/SRS and quiz sampling.
- Current-runtime tests preserve every JLPT dataset byte-for-byte, preserve legacy Kaigo content, validate kana, exercise category/SRS integration and require old/new quiz targets to remain reachable.

Stage 9A-1 validation: local syntax/regression and [CI run 39512346807](https://github.com/Xyron22/tenka-nihongo/actions/runs/39512346807) passed at `dec93fd`. Production upload/deploy were skipped.

## Stage 9A-2 — Work equipment and supplies

- Add vocabulary for meal labels/carts, oral-care items, towels/bed linen, wheelchair/bed parts, protective equipment and stock management.
- Distinguish 食札（しょくさつ）from 名札（なふだ）, 配膳 from 下膳, and 物品/備品/消耗品. Closely related labels share distractor exclusions.
- Every entry includes kana, an original translated example and a usage note. Equipment recognition is taught separately from clinical technique.
- Keep the existing 13 illustrated medical-tool cards and their image mapping intact; this batch expands workplace vocabulary rather than substituting unillustrated cards for the image collection.
- Let Kaigo vocabulary flashcards grow with their content. Browser QA found two legacy cards clipping at 320 px after kana was supplied; the scoped grid layout reserves space for the label and both faces. N5 and illustrated-tool card layouts remain separate.

Stage 9A-2 validation: local syntax/regression and [CI run 39513239316](https://github.com/Xyron22/tenka-nihongo/actions/runs/39513239316) passed at `35756b2`. All 140 vocabulary cards pass browser layout checks at 320/390/720 px. Production upload/deploy were skipped.

## Stage 9A-3 — Contextual pronunciation and practice audit

- Use authored kana on Kaigo vocabulary flashcard audio. Listening speaks the target reading followed by its kana example, including explicit readings for 食札 and SpO₂.
- Add conservative semantic exclusions to the workplace quiz: generic supply labels cannot become a second defensible answer; assistance, swallowing and communication glosses with overlap are not paired.
- Written quizzes show Japanese/kana context; result review includes the selected/correct answer, translated example and usage notes. All 140 vocabulary targets remain reachable in written and listening modes.
- Audit timeout, wrong/correct answers, duplicate taps, save-once results and persistence. Existing N5, illustrated tools, SRS and clinical report workflows retain their regression gates.
- Complete the rooms/equipment vocabulary checkpoint after the browser and final-head CI gates. Broader Kaigo and national-exam development remain separate workstreams.

Stage 9A-3 local validation: syntax and the full runtime/content/audio regression suite passed. The [browser audit](kaigo-ui-audit.json) records runtime source hashes, 140 cards at 320/390/720 px, category/usage-note access, authored speech text, written/listening results and SRS/result persistence after reload. Both quiz modes and expanded result reviews have no horizontal overflow at those widths. Screenshots were inspected for a long legacy card, facility usage notes and result review. N5 browser regression also checks all 925 cards plus Bushu, stroke animation, canvas and grammar result/persistence flows on the updated runtime. The exact final commit and CI result are pinned in [draft PR #16](https://github.com/Xyron22/tenka-nihongo/pull/16); production steps must stay skipped.

Reproduce the optional browser check with `node tests/kaigo-browser-smoke.cjs` and Playwright installed. Optional environment variables select Chromium (`TENKA_TEST_CHROMIUM`), an installed `@fontsource/noto-sans-jp` directory (`TENKA_TEST_JAPANESE_FONT_DIR`) and an output directory (`TENKA_UI_AUDIT_OUTPUT`). The test uses a fresh browser context with local assets. It verifies the text sent to speech synthesis; the available Japanese voice and playback remain device/browser dependent.

Additional terminology references:

- [MHLW/Japan Association of Certified Care Workers: 介護の日本語](https://www.mhlw.go.jp/content/12000000/001184460.pdf): basic care vocabulary and bedside equipment terminology; original sentences/illustrations are not copied.
- [Dokkyo Medical University Hospital: meals](https://www.dokkyomed.ac.jp/hosp-m/hospitalization/meals.html): meal-label and cart terminology.
- [Showa Medical University East Hospital: inpatient life](https://www.showa-u.ac.jp/SUHE/patient/inpatient/staying.html): 下膳車 and 食札 terminology.
- [Saitama Medical University International Medical Center: inpatient guide](https://www.international.saitama-med.ac.jp/wp/wp-content/uploads/2025/07/publicity_book_250705.pdf): reading and role of 食札.

## Shared reference policy

Checked 2026-10-21. References establish naming and workplace context; Indonesian explanations and examples are authored for TENKA. Hospital names/room functions vary. These sources are not presented as the learner's own workplace layout or an operational care protocol.

- [Nihon University Hospital floor guide](https://www.nihon-u.ac.jp/hospital/outline/facility/): contemporary hospital room labels, nurse stations, room types and circulation.
- [Fukuoka University Chikushi Hospital floor introduction](https://www.chikushi.fukuoka-u.ac.jp/floor/1-3.html): hospital floor and room labels.
- [MHLW facility guidance](https://www.mhlw.go.jp/web/t_doc?dataId=00ta4206&dataType=1&pageNo=1): attestation of established care-facility vocabulary. This historical guidance is used for terminology context, not as a statement of current building/staffing law.

Workplace vocabulary remains separate from JLPT-level inventories. Room and equipment recognition does not grant authority to perform clinical procedures.


## Stage 9B-1 — Workplace reports in context

- Add eight original report models, `r-13`–`r-20`, using the existing puzzle and self-writing workflows. Topics: meal-card count/identity, clean-linen shortage, wheelchair brake observations, call-system observations, wet floors, storage-location questions and unfinished restocking.
- Every model has a situation, ordered Japanese/kana/Indonesian pieces and a usage distinction. Counts distinguish 42 versus 41 cards and 枚 versus 人; an unlocated item is not automatically labelled out of stock. Scenarios spell out observed facts and unknowns without attributing blame or inventing a cause.
- Preserve all legacy data and progress identities. The curriculum remains workplace language practice, separate from national-exam questions and clinical procedure instruction. The existing `examArea` field is a broad subject tag rather than evidence of exam coverage.
- Current-manifest regression checks every report in both puzzle and writing flows: old completions lead to new cases, wrong/incomplete answers do not mark mastery, duplicate taps count once, models retain kana/translations, sessions end and stored progress survives reload.
- Source context: the [JACCW international-care-worker materials catalogue](https://www.jaccw.or.jp/projects/kokusai) distinguishes workplace language resources from certification study. The accessible [MHLW-hosted 介護の日本語](https://www.mhlw.go.jp/content/12000000/001184460.pdf) supports the basic terminology context. All scenarios, report sentences and explanations here are original; no source lesson or exam question is reproduced.
Stage 9B-1 validation: local syntax/regression and [CI run 39514907076](https://github.com/Xyron22/tenka-nihongo/actions/runs/39514907076) passed at `c0b8b6c`. Production configuration/upload/deploy were skipped.


## Stage 9B-2 — Workplace handoff comprehension and pronunciation

- Add `h-13`–`h-20`: eight original three-sentence operans linked to the report objectives. The [practice ledger](kaigo-workplace-practice.json) records each question's intent and the reason its answer is unambiguous. Practice distinguishes pending/resolved checks, original/current quantities, observations/unknown causes and completed/planned work.
- Keep every old case unchanged. The runtime now contains 20 report models and 20 handoff cases (59 sentences). Sessions present one sentence at a time, then one comprehension question, and end explicitly; all-complete libraries do not silently restart.
- Correct a pronunciation integration gap: report-model audio in both puzzle and writing views, and normal/slow handoff audio, use the authored kana reading with the existing text fallback. This prevents device-dependent guessing of 食札, numerical counts and room numbers. No audio engine, scoring, navigation or progress schema is replaced.
- Clarify that the report puzzle grades the model order; another natural report order is not automatically bad Japanese. Self-writing continues to be explicitly self-assessed rather than automatically scored.
- Audit all old/new reports in both modes and every handoff sentence, including wrong/correct answers, duplicate taps, one feedback event, kana sent to speech synthesis, explicit finish, old completions leading to new cases and persistence.
- Browser QA exposed horizontal overflow in legacy/new report puzzle/model views at 320 and 390 px. Keep grid text columns shrinkable and wrap whole-sentence kana below Japanese text within the report component; retain the authored reading and ruby markup. The writing guide now names people, equipment and tasks as possible report subjects.
Stage 9B-2 local validation: syntax and the full content/runtime/tools/audio regression suite passed. The [browser audit with source hashes](kaigo-ui-audit.json) checks 140 vocabulary cards, both model views for all 20 reports, and all 59 handoff sentences at 320/390/720 px: no clipping or horizontal overflow. Real browser flows also verify puzzle retry/model, writing comparison, kana speech text with normal/slow rates, handoff comprehension, explicit finish and progress after reload. Long report, writing and handoff screenshots were inspected. The exact final commit and CI result are pinned in [draft PR #16](https://github.com/Xyron22/tenka-nihongo/pull/16). This is a workplace-language checkpoint; full Kaigo and national-exam closure remain open.


## Stage 9C-1 — Preferences and clear communication vocabulary

- Add twelve original lessons, `k-v-141`–`k-v-152`, under **Komunikasi & pilihan pribadi**. Each has Japanese, kana, Indonesian meaning/example and usage distinctions. Separate 同意/説明, 意思/希望/選択/拒否, 復唱/聞き返し and 付き添い/見守り/介助.
- The [communication coverage ledger](kaigo-communication-coverage.json) maps six bounded learning objectives to these cards. Practice coverage is still pending at this checkpoint. Neither the inventory count nor this unit declares full Kaigo or national-exam completion.
- Reuse flashcards, category selection, kana listening, conservative distractor exclusions and SRS. No new route, scoring rule, audio engine or storage schema is introduced. Every pre-existing lesson and all JLPT datasets remain intact.
- The MHLW-hosted 介護の日本語 provides basic workplace vocabulary/voice-learning context, and the JACCW resource catalogue distinguishes language learning from exam preparation. The selected objectives, examples and Indonesian explanations are original TENKA teaching choices, not a claim that either source lists these twelve lessons.
- Current-runtime checks validate the new objective mapping, complete content, kana, old-data preservation, categories, SRS and quiz eligibility. The final commit and CI evidence are recorded in draft PR #16.
