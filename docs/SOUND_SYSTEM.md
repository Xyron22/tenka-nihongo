# TENKA Sound System V1.2

TENKA uses event-based audio. Learning code triggers semantic events; sound packs decide what audio is played.

## Core rule: one action = one reaction

Sound Engine v1.2 deliberately avoids stacked feedback. A quiz answer must not play a global tap sound plus a correct/wrong voice plus another built-in beep at the same time.

- `correct` is delayed briefly so a combo event can replace it.
- `combo` replaces ordinary `correct` at combo milestones.
- The final correct answer waits for `finish` / `perfect` instead of stacking another reaction.
- Reaction audio is single-channel: a new reaction stops the previous reaction clip.
- Quiz choices, flashcard rating controls, pronunciation buttons and reaction-test buttons are excluded from the global tap sound.
- Real voice/SFX clips are never layered with the oscillator fallback. Fallback is used only when no clip can play.

## Events

| Event | Purpose | Examples |
|---|---|---|
| `greeting` | Start study/session | よーし、始めよう！ / 準備はいいかな？ |
| `correct` | Correct answer | 正解 / 大正解 / やったー |
| `wrong` | Wrong answer | 残念 / ブッブー / 惜しい |
| `combo` | Correct streak milestone | すごいすごい / レベルアップ |
| `timeout` | 30-second timer expired | タイムアップ / 時間切れ |
| `finish` | Quiz/session complete | おめでとう / 頑張ったね |
| `perfect` | 100% score | 満点 / 全問正解 |
| `click` | Navigation UI feedback | short button/cursor SFX |

## Source roles

### 効果音ラボ
Primary ready-made Japanese voice/reaction source. Downloaded clips are embedded as application feedback rather than hotlinked during study.

Target reactions include:
- greeting: 始まるよ～, 準備はいいかな？
- correct: 正解, 大正解, よくできました, すごいすごい
- wrong: 残念, ブッブー, あとちょっとだったね
- combo: すごいすごい, レベルアップしたよ
- timeout: タイムアップ, 時間切れ～
- finish: おめでとう, 頑張ったね
- perfect: 満点, おめでとうございます

### Pixabay
Game-feel SFX source. In Anime Voice mode these clips alternate with voices; they are not layered on top of a voice reaction.

### VOICEVOX Nemo
TENKA v1.2 generates three distinct female Nemo voices for every main reaction event:

- 女声1 — style ID `10005`
- 女声2 — style ID `10007`
- 女声3 — style ID `10004`

Seven events × three voices = 21 generated clips. Each voice also gets a different phrase/tuning so variety is not just pitch-shifting the same sentence.

Examples:
- correct: 正解！その調子！ / やったー！正解！ / すごい！いい感じ！
- wrong: 惜しい！もう一回！ / ざんねーん！次いこう！ / あとちょっと！ドンマイ！
- combo: 三問連続正解！すごい！ / コンボ！その調子！ / 止まらないね！すごい！

Generated assets keep VOICEVOX Nemo credit metadata in the build.

### Custom local
The user can import anime/meme sounds from iPhone Files. These are saved to IndexedDB on that device and are not uploaded by TENKA to the GitHub repository.

## Selection / anti-repeat

- Every stored clip gets a stable ID.
- The same clip is avoided twice in a row when alternatives exist.
- When multiple sources exist, the engine also tries not to use the same source twice in a row.
- Anime Voice mode chooses one voice **or** one SFX for an event.
- Quiet mode prioritizes SFX.
- Built-in sound pack v1.2 is installed by exact semantic event mapping; filenames are not trusted to classify generated assets.

## Deployment quality gate

GitHub Pages deploy is blocked unless:

- JavaScript / shell syntax checks pass.
- TENKA system smoke tests pass.
- Combo regression test confirms one semantic reaction instead of `correct + combo`.
- VOICEVOX generation produces at least 21 clips.
- Every required VOICEVOX event contains three distinct voices.

Audio-source failures must never corrupt learning progress or navigation; however the required VOICEVOX multi-voice pack is validated before Sound v1.2 can be published.

## Architecture rule

Learning features call only semantic sound events (`correct`, `wrong`, `combo`, etc.). They do not depend on a particular source or filename. This allows 効果音ラボ, Pixabay, VOICEVOX and local sounds to be replaced or expanded without editing the learning engine.
