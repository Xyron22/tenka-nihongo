#!/usr/bin/env bash
set -euo pipefail

OUT="assets/audio/voicevox"
mkdir -p "$OUT"

if [[ -s "$OUT/greeting-1.wav" && -s "$OUT/perfect-1.wav" ]]; then
  echo "VOICEVOX Nemo pack already exists; skip generation."
  exit 0
fi

echo "Starting VOICEVOX Nemo engine..."
docker pull voicevox/voicevox_nemo_engine:cpu-ubuntu20.04-latest
docker rm -f tenka-voicevox-nemo >/dev/null 2>&1 || true
docker run -d --name tenka-voicevox-nemo \
  -p 127.0.0.1:50021:50021 \
  -p 127.0.0.1:50121:50121 \
  voicevox/voicevox_nemo_engine:cpu-ubuntu20.04-latest >/dev/null
trap 'docker rm -f tenka-voicevox-nemo >/dev/null 2>&1 || true' EXIT

PORT=''
for _ in $(seq 1 90); do
  for candidate in 50121 50021; do
    if curl -fsS "http://127.0.0.1:${candidate}/version" >/dev/null 2>&1; then PORT="$candidate"; break 2; fi
  done
  sleep 2
done
if [[ -z "$PORT" ]]; then
  echo "VOICEVOX Nemo engine did not become ready on 50121 or 50021" >&2
  docker logs tenka-voicevox-nemo || true
  exit 1
fi

echo "VOICEVOX Nemo ready on port ${PORT}"

# VOICEVOX Nemo 女声1, official style ID from VOICEVOX VVM metadata.
SPEAKER=10005

synth(){
  local event="$1"
  local text="$2"
  local query="/tmp/tenka-${event}-query.json"
  local tuned="/tmp/tenka-${event}-tuned.json"

  curl -fsS -X POST "http://127.0.0.1:${PORT}/audio_query?speaker=${SPEAKER}" \
    --get --data-urlencode "text=${text}" > "$query"

  jq '.speedScale=1.12 | .pitchScale=0.045 | .intonationScale=1.12 | .volumeScale=1.0 | .prePhonemeLength=0.06 | .postPhonemeLength=0.08' "$query" > "$tuned"

  curl -fsS -H 'Content-Type: application/json' -X POST \
    -d @"$tuned" "http://127.0.0.1:${PORT}/synthesis?speaker=${SPEAKER}" \
    > "$OUT/${event}-1.wav"

  test -s "$OUT/${event}-1.wav"
  echo "VOICEVOX Nemo: ${event} -> ${text}"
}

synth greeting '今日も一緒に頑張ろう！'
synth correct '正解！その調子！'
synth wrong '惜しい！もう一回！'
synth combo '三問連続正解！すごい！'
synth timeout 'タイムアップ！'
synth finish 'お疲れさま！今日も頑張ったね！'
synth perfect '全問正解！パーフェクト！'

echo "VOICEVOX Nemo TENKA pack generated."
