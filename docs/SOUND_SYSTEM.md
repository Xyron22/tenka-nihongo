# TENKA Sound System V1

TENKA uses event-based audio. Learning code triggers semantic events; sound packs decide what audio is played.

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
| `click` | UI feedback | short button/cursor SFX |

## Source roles

### 効果音ラボ
Primary Japanese voice/reaction source. Use downloaded audio as embedded application feedback, never hotlink MP3 files from the source site.

Preferred built-in reactions for a future bundled pack:
- greeting: 始まるよ～, 準備はいいかな？
- correct: 正解, 大正解, ぴんぽんぴんぽん, グッド, エクセレント
- wrong: 残念, ブッブー, あとちょっとだったね, もう一息です
- combo: すごいすごい, レベルアップしたよ
- timeout: タイムアップ, 時間切れ～
- finish: おめでとう, 頑張ったね, よくできました
- perfect: 満点 + おめでとう (or another licensed combination)

### Pixabay
Game-feel SFX layer: sparkle, success, pop, level-up, whoosh, error and UI clicks. Store source metadata for every downloaded asset so license provenance remains traceable.

### VOICEVOX
Custom TENKA phrases that do not exist in the other packs. Generated files must keep the required VOICEVOX / voice-library credit. Prefer a voice/library with terms suitable for distributing generated audio in TENKA.

Potential custom lines:
- 今日も一緒に頑張ろう！
- 3問連続正解！その調子！
- 5問連続！すごい！
- 全問正解！パーフェクト！
- 今日のミッション、コンプリート！

### Custom local
The user can import anime/meme sounds from iPhone Files. These are saved to IndexedDB on that device and are not uploaded by TENKA to the GitHub repository.

## Playback rules

- Avoid repeating the same clip twice in a row.
- Imported clips are chosen randomly per event.
- Correct streaks trigger combo at milestones.
- Timeout is distinct from a normal wrong answer.
- Perfect score is distinct from normal finish.
- User can preview every reaction from Settings.
- Master volume and quiet/anime mode are persisted locally.
- Audio failure must never block flashcards, quiz, progress or navigation.

## Architecture rule

Learning features must only call semantic sound events (`correct`, `wrong`, etc.). They must never depend on a particular source or filename. This allows 効果音ラボ, Pixabay, VOICEVOX and local sounds to be replaced or expanded without editing the learning engine.
