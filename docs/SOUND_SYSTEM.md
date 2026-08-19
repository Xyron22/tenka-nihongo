# TENKA Sound System V1.2.2

TENKA uses event-based audio. Learning code triggers semantic events; sound packs decide what audio is played.

## Core rule: one action = one reaction

Sound Engine v1.2.2 enforces the rule at the final audio layer, not only in UI hooks.

- Normal correct/wrong answers produce one reaction.
- At combo milestones, `combo` replaces ordinary `correct`.
- On the final quiz question, immediate `correct`, `wrong`, `timeout`, and `combo` reactions are suppressed; the result screen alone plays `perfect` or `finish`.
- A new reaction cancels any lingering Safari SpeechSynthesis reaction before starting file audio.
- Quiz choices, flashcard ratings, pronunciation buttons and reaction-test buttons are excluded from global tap sound.
- Navigation tap sound is opt-in.
- Real audio and oscillator fallback are not layered together.

## Short reaction clips

VOICEVOX reactions are intentionally short: one clip contains one reaction rather than two chained phrases. Examples include `正解！`, `やったー！`, `すごい！`, `惜しい！`, `残念！`, `コンボ！`, `お疲れさま！`, and `パーフェクト！`.

## Self-healing installation

A sound pack is not considered installed merely because one file exists. TENKA compares every built-in source/event count against the deployed manifest.

- Old or partial packs are cleared and rebuilt.
- The local pack-version key is written only after expected files are present.
- Partial installs are retried automatically.
- Settings shows installed/expected counts and per-event VOICEVOX counts.
- v1.2.2 forces reinstall of the shortened reaction pack.

## Voice variety

TENKA uses multiple independent voice paths:

- 効果音ラボ — 元気な女の子
- 効果音ラボ — 落ち着いた女性
- VOICEVOX Nemo 女声1 (`10005`)
- VOICEVOX Nemo 女声2 (`10007`)
- VOICEVOX Nemo 女声3 (`10004`)
- Pixabay for game/UI SFX
- Custom local sounds from iPhone Files

The deploy quality gate requires at least two distinct voice styles overall and at least two voice clips for both `correct` and `wrong`.

## Regression gate

GitHub Actions runs a dedicated quiz-audio test for four real flows: normal correct, combo milestone, final correct, and final wrong. A build fails if one quiz action can produce stacked reactions.

## Events

`greeting`, `correct`, `wrong`, `combo`, `timeout`, `finish`, `perfect`, `click`.

## Architecture rule

Learning features call semantic events only. Audio-source failures must not corrupt flashcards, quiz state, navigation, progress, or SRS data.
