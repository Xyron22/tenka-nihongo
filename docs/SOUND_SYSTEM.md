# TENKA Sound System V1.2.1

TENKA uses event-based audio. Learning code triggers semantic events; sound packs decide what audio is played.

## Core rule: one action = one reaction

Sound Engine v1.2.1 avoids stacked feedback.

- `correct` is delayed briefly so `combo` can replace it.
- A new reaction cancels any lingering Safari SpeechSynthesis reaction before starting file audio.
- Quiz choices, flashcard ratings, pronunciation buttons and reaction-test buttons are excluded from global tap sound.
- Navigation tap sound is opt-in after the v1.2.1 migration.
- Real audio and oscillator fallback are not layered together.

## Self-healing installation

A sound pack is no longer considered installed merely because one file exists. TENKA compares every built-in source/event count against the deployed manifest.

- Old or partial packs are cleared and rebuilt.
- The local pack-version key is written only after the expected files are present.
- Partial installs are retried automatically.
- Settings shows installed/expected counts and per-event VOICEVOX counts.

## Voice variety

TENKA uses multiple independent voice paths:

- 効果音ラボ — 元気な女の子
- 効果音ラボ — 落ち着いた女性
- VOICEVOX Nemo 女声1 (`10005`)
- VOICEVOX Nemo 女声2 (`10007`)
- VOICEVOX Nemo 女声3 (`10004`)
- Pixabay for game/UI SFX
- Custom local sounds from iPhone Files

The deploy quality gate requires at least two distinct voice styles overall and at least two voice clips for both `correct` and `wrong`. VOICEVOX generation is attempted and cached, but a temporary VOICEVOX build problem no longer prevents TENKA from publishing if the licensed 効果音ラボ voice pack still provides genuine voice variety.

## Events

`greeting`, `correct`, `wrong`, `combo`, `timeout`, `finish`, `perfect`, `click`.

## Architecture rule

Learning features call semantic events only. Audio-source failures must not corrupt flashcards, quiz state, navigation, progress, or SRS data.
