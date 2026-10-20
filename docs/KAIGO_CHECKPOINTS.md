# Kaigo workplace expansion after N5

N5 is closed at `e92f15f`. The next agreed focus is Kaigo, including hospital/facility spaces and workplace equipment, before N3. This work does not declare the Kaigo curriculum or national-exam track complete. PR #16 stays draft; merge, auto-merge and production deployment require explicit owner approval.

## Stage 9A-1 — Rooms, facilities and kana foundations

- Add original workplace lessons for wards/rooms, bathing/changing areas, linen/laundry areas, treatment/consultation rooms, circulation/access and staff spaces. Category: **Ruangan & fasilitas**.
- Supply kana for the examples on all 68 legacy Kaigo vocabulary cards. Existing IDs, Japanese sentences, translations, categories and SRS identities remain intact.
- Each new lesson has a Japanese term, kana, Indonesian meaning, original Japanese/kana/Indonesian example, and a usage distinction. Do not equate 病棟 with 病室, or 脱衣室 with 更衣室.
- Rooms with potentially overlapping glosses share a quiz exclusion group. They cannot compete as distractors, while every card stays available for flashcards/SRS and quiz sampling.
- Current-runtime tests preserve every JLPT dataset byte-for-byte, preserve legacy Kaigo content, validate kana, exercise category/SRS integration and require old/new quiz targets to remain reachable.

## Reference basis

Stage 9A-1 validation: local syntax/regression and [CI run 39512346807](https://github.com/Xyron22/tenka-nihongo/actions/runs/39512346807) passed at `dec93fd`. Production upload/deploy were skipped.

## Stage 9A-2 — Work equipment and supplies

- Add vocabulary for meal labels/carts, oral-care items, towels/bed linen, wheelchair/bed parts, protective equipment and stock management.
- Distinguish 食札（しょくさつ）from 名札（なふだ）, 配膳 from 下膳, and 物品/備品/消耗品. Closely related labels share distractor exclusions.
- Every entry includes kana, an original translated example and a usage note. Equipment recognition is taught separately from clinical technique.
- Keep the existing 13 illustrated medical-tool cards and their image mapping intact; this batch expands workplace vocabulary rather than substituting unillustrated cards for the image collection.
- Let Kaigo vocabulary flashcards grow with their content. Browser QA found two legacy cards clipping at 320 px after kana was supplied; the scoped grid layout reserves space for the label and both faces. N5 and illustrated-tool card layouts remain separate.

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
