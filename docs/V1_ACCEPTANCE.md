# TENKA V1 acceptance — N5 and bounded Kaigo basics

The first-version target combines the closed N5 curriculum and the selected Kaigo workplace units. Full N4–N1 development, a full-length JLPT mock exam and complete Kaigo/certification coverage remain separate scopes. The Kaigo closure audit still needs to reconcile its objective ledgers and record remaining gaps; this document does not declare that audit complete.

## Phone and PC/laptop requirement

Added from the owner's request on 2026-11-04 (Asia/Tokyo). Desktop support is part of the first-version acceptance criteria.

- Use the same web/PWA application and lesson/progress identities on phone and desktop/laptop browsers.
- Verify readable Japanese/kana/Indonesian content and reachable controls at phone/tablet widths 320/390/720 and desktop widths 1280/1440. Desktop interaction checks use 1280×800 and 1440×900 viewports.
- Keep mouse interaction for cards and controls, keyboard navigation of native buttons, Japanese text entry and report revision usable. Verify drawing-canvas pointer behavior as part of the N5 browser audit.
- Run the N5 and Kaigo browser audits alongside the source syntax, content, runtime, tools/audio and CI checks. Preserve phone layouts while checking larger screens.
- Validate actual audio/voice availability and PWA installation on the eventual target browser/device during owner testing. Automated Chromium checks establish the tested browser baseline; they do not substitute for that device check.

## Progress continuity

Current progress is stored in `localStorage` under `tenka-progress`, scoped to the browser and site origin. Opening the application on a laptop starts that browser's own progress; cross-device synchronization is not implemented.

An explicit, tested way to transfer existing progress from phone to laptop is an open acceptance item. It must preserve lesson IDs, SRS schedules, quiz records and report/handoff completions. Record and test that workflow before describing phone-to-laptop continuation as ready. Do not add a new account/backend or change the saved-data schema as part of recording this requirement.

## Current automated evidence

- The [N5 browser audit](n5-ui-audit.json) checks all 925 cards and its existing Bushu, writing-canvas, quiz and reload flows. The [Kaigo browser audit](kaigo-ui-audit.json) checks the installed vocabulary, illustrated tools, reports, handoffs and quizzes. Both layout inventories pass at 320/390/720/1280/1440 px without horizontal overflow or unreachable/clipped content; tool-card backs retain their existing vertical scrolling.
- At 1280×800 and 1440×900, actual controls pass Tab/Enter navigation, keyboard activation of the writing-case menu, Japanese text entry, comparison, Space activation of revision, retained draft text and mouse card-flipping/exit. The desktop writing comparison screenshot was inspected. The Kaigo report records these viewport profiles and 39 UI flow checks; its 55 source/image hashes and the N5 report's 42 source hashes match the tested files.
- Local syntax and the full N5/Kaigo/runtime/tools/audio suite pass. Exact final-head CI and the retained draft/release boundary are recorded in PR #16. This checkpoint changes requirements and QA evidence; lesson data, runtime code and saved progress remain unchanged.

## Remaining first-version gates

1. Finish the bounded Kaigo objective/coverage closure audit and resolve its findings.
2. Resolve and test progress transfer if continuation of existing phone progress is required for the first version.
3. Provide a reviewable test version of the latest branch for owner testing on phone and desktop.
4. Fix confirmed findings, rerun checks, and record the final release checkpoint.

PR #16 remains draft. Merge, auto-merge and production deployment require the owner's explicit approval.
