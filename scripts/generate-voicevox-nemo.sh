#!/usr/bin/env bash
set -euo pipefail

OUT="assets/audio/voicevox"
mkdir -p "$OUT"
rm -f "$OUT"/*.wav

echo "Starting VOICEVOX Nemo engine on explicit host/port..."
docker pull voicevox/voicevox_nemo_engine:cpu-ubuntu20.04-latest
docker rm -f tenka-voicevox-nemo >/dev/null 2>&1 || true

docker run -d --name tenka-voicevox-nemo \
  -e VV_HOST=0.0.0.0 \
  -e VV_PORT=50121 \
  -p 127.0.0.1:50121:50121 \
  voicevox/voicevox_nemo_engine:cpu-ubuntu20.04-latest >/dev/null
trap 'docker rm -f tenka-voicevox-nemo >/dev/null 2>&1 || true' EXIT

BASE="http://127.0.0.1:50121"
READY=0
for _ in $(seq 1 75); do
  if curl -fsS "${BASE}/version" >/dev/null 2>&1; then READY=1; break; fi
  if ! docker ps --format '{{.Names}}' | grep -qx tenka-voicevox-nemo; then
    echo "VOICEVOX Nemo container exited before becoming ready" >&2
    docker logs tenka-voicevox-nemo 2>&1 || true
    exit 1
  fi
  sleep 2
done
if [[ "$READY" != "1" ]]; then
  echo "VOICEVOX Nemo engine did not become ready on ${BASE}" >&2
  docker logs tenka-voicevox-nemo 2>&1 || true
  exit 1
fi

curl -fsS "${BASE}/speakers" > /tmp/tenka-nemo-speakers.json
VOICES=("10005:女声1:1.08:0.025:1.08" "10007:女声2:1.12:0.045:1.12" "10004:女声3:1.04:0.015:1.05")
for speaker in 10005 10007 10004; do
  jq -e --argjson id "$speaker" '[.[].styles[].id] | index($id) != null' /tmp/tenka-nemo-speakers.json >/dev/null || { echo "Required VOICEVOX Nemo style ID missing: ${speaker}" >&2; exit 1; }
done

synth() {
  local event="$1" variant="$2" speaker="$3" voice_name="$4" speed="$5" pitch="$6" intonation="$7" text="$8"
  local query="/tmp/tenka-${event}-${variant}-query.json" tuned="/tmp/tenka-${event}-${variant}-tuned.json"
  curl -fsS -X POST "${BASE}/audio_query?speaker=${speaker}" --get --data-urlencode "text=${text}" > "$query"
  jq --argjson speed "$speed" --argjson pitch "$pitch" --argjson intonation "$intonation" \
    '.speedScale=$speed | .pitchScale=$pitch | .intonationScale=$intonation | .volumeScale=1.0 | .prePhonemeLength=0.04 | .postPhonemeLength=0.08' \
    "$query" > "$tuned"
  curl -fsS -H 'Content-Type: application/json' -X POST -d @"$tuned" "${BASE}/synthesis?speaker=${speaker}" > "$OUT/${event}-${variant}.wav"
  test -s "$OUT/${event}-${variant}.wav"
  echo "VOICEVOX Nemo ${voice_name}: ${event}/${variant} -> ${text}"
}

phrase_for() {
  case "$1:$2" in
    greeting:1) echo '始めよう！' ;;
    greeting:2) echo '準備オーケー？' ;;
    greeting:3) echo '今日も頑張ろう！' ;;
    finish:1) echo 'お疲れさま！' ;;
    finish:2) echo 'おめでとう！' ;;
    finish:3) echo 'よく頑張ったね！' ;;
    perfect:1) echo 'パーフェクト！' ;;
    perfect:2) echo '完璧！' ;;
    perfect:3) echo '満点！' ;;
  esac
}

for event in greeting finish perfect; do
  idx=0
  for spec in "${VOICES[@]}"; do
    idx=$((idx+1)); IFS=':' read -r speaker voice_name speed pitch intonation <<< "$spec"
    synth "$event" "f${idx}" "$speaker" "$voice_name" "$speed" "$pitch" "$intonation" "$(phrase_for "$event" "$idx")"
  done
done

cat > "$OUT/VOICEVOX_CREDIT.txt" <<'EOF'
VOICEVOX Nemo
Voices used: 女声1, 女声2, 女声3
Generated for TENKA 日本語 celebration moments only.
EOF

echo "TENKA celebration voice pack generated: 9 clips."
