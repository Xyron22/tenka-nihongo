#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
while IFS= read -r file; do node --check "$file"; done < <(git ls-files --cached --others --exclude-standard '*.js' '*.mjs' '*.cjs')
bash -n scripts/generate-voicevox-nemo.sh
for test in tests/data-v2.js tests/bunpou-audit-v4.js tests/bunpou-final-gap-v13.js tests/bunpou-closure-n5.js tests/bunpou-remediation-v14.js tests/n5-content-quality.js tests/n5-kanji-quality.js tests/n5-grammar-quiz.js tests/n5-card-quiz.js tests/n5-session-audit.js tests/n5-closure.js tests/kaigo-workplace.js tests/kaigo-listening.js tests/kaigo-reports.js tests/system-v2.js tests/tools-pack-v1.js tests/audio-v5.js; do
  node "$test"
done
