#!/usr/bin/env bash
set -euo pipefail

OUT="assets/audio/voicevox"
mkdir -p "$OUT"
rm -f "$OUT"/*.wav

echo "Starting VOICEVOX Nemo engine..."
docker pull voicevox/voicevox_nemo_engine:cpu-ubuntu20.04-latest
docker rm -f tenka-voicevox-nemo >/dev/null 2>&1 || true

docker run -d --name tenka-voicevox-nemo \
  -p 127.0.0.1:50021:50021 \
  voicevox/voicevox_nemo_engine:cpu-ubuntu20.04-latest >/dev/null
trap 'docker rm -f tenka-voicevox-nemo >/dev/null 2>&1 || true' EXIT

BASE=""
for _ in $(seq 1 90); do
  if curl -fsS "http://127.0.0.1:50021/version" >/dev/null 2>&1; then
    BASE="http://127.0.0.1:50021"
    break
  fi
  sleep 2
done
if [[ -z "$BASE" ]]; then
  echo "VOICEVOX Nemo engine did not become ready" >&2
  exit 1
fi

# Official VOICEVOX Nemo VVM style IDs:
# 女声1=10005, 女声2=10007, 女声3=10004.
VOICES=("10005:女声1:1.10:0.035:1.10" "10007:女声2:1.16:0.055:1.16" "10004:女声3:1.06:0.020:1.08")

synth() {
  local event="$1"
  local variant="$2"
  local speaker="$3"
  local voice_name="$4"
  local speed="$5"
  local pitch="$6"
  local intonation="$7"
  local text="$8"
  local query="/tmp/tenka-${event}-${variant}-query.json"
  local tuned="/tmp/tenka-${event}-${variant}-tuned.json"

  curl -fsS -X POST "${BASE}/audio_query?speaker=${speaker}" \
    --get --data-urlencode "text=${text}" > "$query"

  jq --argjson speed "$speed" --argjson pitch "$pitch" --argjson intonation "$intonation" \
    '.speedScale=$speed | .pitchScale=$pitch | .intonationScale=$intonation | .volumeScale=1.0 | .prePhonemeLength=0.04 | .postPhonemeLength=0.06' \
    "$query" > "$tuned"

  curl -fsS -H 'Content-Type: application/json' -X POST \
    -d @"$tuned" "${BASE}/synthesis?speaker=${speaker}" \
    > "$OUT/${event}-${variant}.wav"

  test -s "$OUT/${event}-${variant}.wav"
  echo "VOICEVOX Nemo ${voice_name}: ${event}/${variant} -> ${text}"
}

# One clip = one short reaction. Variety comes from different voices/phrases,
# not from chaining two reactions inside one audio file.
phrase_for() {
  local event="$1"
  local idx="$2"
  case "${event}:${idx}" in
    greeting:1) echo '始めよう！' ;;
    greeting:2) echo '準備オーケー？' ;;
    greeting:3) echo '今日も頑張ろう！' ;;
    correct:1) echo '正解！' ;;
    correct:2) echo 'やったー！' ;;
    correct:3) echo 'すごい！' ;;
    wrong:1) echo '惜しい！' ;;
    wrong:2) echo '残念！' ;;
    wrong:3) echo 'ドンマイ！' ;;
    combo:1) echo 'コンボ！' ;;
    combo:2) echo 'その調子！' ;;
    combo:3) echo 'すごい！' ;;
    timeout:1) echo 'タイムアップ！' ;;
    timeout:2) echo '時間切れ！' ;;
    timeout:3) echo 'あー、時間切れ！' ;;
    finish:1) echo 'お疲れさま！' ;;
    finish:2) echo 'おめでとう！' ;;
    finish:3) echo 'よく頑張ったね！' ;;
    perfect:1) echo 'パーフェクト！' ;;
    perfect:2) echo '完璧！' ;;
    perfect:3) echo '満点！' ;;
  esac
}

for event in greeting correct wrong combo timeout finish perfect; do
  idx=0
  for spec in "${VOICES[@]}"; do
    idx=$((idx+1))
    IFS=':' read -r speaker voice_name speed pitch intonation <<< "$spec"
    text="$(phrase_for "$event" "$idx")"
    synth "$event" "f${idx}" "$speaker" "$voice_name" "$speed" "$pitch" "$intonation" "$text"
  done
done

cat > "$OUT/VOICEVOX_CREDIT.txt" <<'EOF'
VOICEVOX Nemo
Voices used: 女声1, 女声2, 女声3
Generated for TENKA 日本語.
EOF

echo "VOICEVOX Nemo TENKA short-reaction pack generated: 21 clips."
