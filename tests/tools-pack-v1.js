// Run from any directory: node --test tests/tools-pack-v1.js
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'tools-pack-v1.js'), 'utf8');
const baseFiles = ['data.js', 'content-pack-v1.js', 'content-pack-v2.js',
  'content-pack-v3.js', 'houkoku-pack-v1.js', 'houkoku-pack-v2.js'];
function loadBase() {
  const c = { window: null }; c.window = c; vm.createContext(c);
  for (const file of baseFiles) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), c, { filename: file });
  return c;
}
function loadTools(c) { vm.runInContext(source, c, { filename: 'tools-pack-v1.js' }); }
const c = loadBase();
const before = JSON.stringify(c.TENKA_DATA);
const existingIds = new Set();
function collectIds(value) {
  if (!value || typeof value !== 'object') return;
  if (typeof value.id === 'string') existingIds.add(value.id);
  for (const child of Object.values(value)) collectIds(child);
}
collectIds(c.TENKA_DATA);
loadTools(c);
const cards = c.TENKA_DATA.kaigo.tools;

test('13 complete cards with unique IDs, readings, translations and examples', () => {
  assert.equal(cards.length, 13);
  const ids = new Set(existingIds);
  const terms = new Set();
  for (const card of cards) {
    for (const key of ['id', 'term', 'reading', 'meaning', 'category', 'image',
      'functionJP', 'functionReading', 'functionID', 'example', 'exampleReading', 'exampleMeaning']) {
      assert.equal(typeof card[key], 'string', `${card.id}: ${key} must be text`);
      assert.ok(card[key].trim(), `${card.id}: ${key} is empty`);
      assert.ok(!/undefined|null/.test(card[key]), `${card.id}: ${key} has a missing-value placeholder`);
    }
    assert.ok(!ids.has(card.id), `duplicate ID: ${card.id}`); ids.add(card.id);
    assert.ok(!terms.has(card.term), `duplicate term: ${card.term}`); terms.add(card.term);
    for (const key of ['reading', 'functionReading', 'exampleReading']) {
      assert.ok(!/\p{Script=Han}/u.test(card[key]), `${card.id}: kanji remains in ${key}`);
    }
    if (card.safetyNote) {
      assert.ok(card.safetyNoteReading?.trim(), `${card.id}: missing note reading`);
      assert.ok(card.safetyNoteMeaning?.trim(), `${card.id}: missing note translation`);
      assert.ok(!/\p{Script=Han}/u.test(card.safetyNoteReading));
    }
  }
});

// Read JPEG frame dimensions without browser or third-party dependencies.
function jpegSize(bytes) {
  assert.equal(bytes.readUInt16BE(0), 0xffd8, 'JPEG SOI missing');
  assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9, 'JPEG EOI missing');
  let offset = 2;
  while (offset + 4 <= bytes.length) {
    assert.equal(bytes[offset++], 0xff, 'invalid JPEG marker');
    while (bytes[offset] === 0xff) offset++;
    const marker = bytes[offset++];
    if (marker === 0xda || marker === 0xd9) break;
    const length = bytes.readUInt16BE(offset);
    assert.ok(length >= 2 && offset + length <= bytes.length, 'truncated JPEG segment');
    if ([0xc0, 0xc1, 0xc2].includes(marker)) {
      assert.ok(length >= 8, 'invalid JPEG frame');
      return { width: bytes.readUInt16BE(offset + 5), height: bytes.readUInt16BE(offset + 3) };
    }
    offset += length;
  }
  throw new Error('JPEG frame dimensions not found');
}

test('every sprite cell fits the actual JPEG and is assigned once', () => {
  const used = new Set();
  const images = new Map();
  for (const card of cards) {
    const file = path.resolve(root, card.image);
    assert.ok(file.startsWith(root + path.sep), 'image must stay inside repository');
    if (!images.has(file)) images.set(file, jpegSize(fs.readFileSync(file)));
    const actual = images.get(file);
    assert.equal(card.spriteWidth, actual.width, `${card.id}: wrong atlas width`);
    assert.equal(card.spriteHeight, actual.height, `${card.id}: wrong atlas height`);
    for (const key of ['spriteCols', 'spriteRows']) assert.ok(Number.isInteger(card[key]) && card[key] > 0);
    assert.equal(actual.width % card.spriteCols, 0, 'fractional cell width');
    assert.equal(actual.height % card.spriteRows, 0, 'fractional cell height');
    assert.ok(Number.isInteger(card.spriteIndex) && card.spriteIndex >= 0);
    assert.ok(card.spriteIndex < card.spriteCols * card.spriteRows, `${card.id}: cell outside image`);
    const cell = `${file}:${card.spriteIndex}`;
    assert.ok(!used.has(cell), `${card.id}: reused sprite cell`); used.add(cell);
  }
});

test('reviewed image order remains paired with the corresponding tool', () => {
  const expected = ['体温計', '血圧計', '聴診器', 'パルスオキシメーター', '注射器',
    '点滴', '点滴スタンド', '吸引器', '車椅子', '歩行器', 'ポータブルトイレ', 'おむつ', '使い捨て手袋'];
  for (const card of cards) assert.equal(card.term, expected[card.spriteIndex], `${card.id}: wrong image mapping`);
});

test('loading the pack preserves existing JLPT, Kaigo and Houkoku data', () => {
  const after = JSON.parse(JSON.stringify(c.TENKA_DATA));
  delete after.kaigo.tools;
  assert.equal(JSON.stringify(after), before);
  const first = JSON.stringify(cards);
  loadTools(c);
  assert.equal(JSON.stringify(c.TENKA_DATA.kaigo.tools), first, 'reload must not duplicate cards');
});

test('missing base data remains a safe no-op', () => {
  for (const seed of [{}, { TENKA_DATA: {} }]) {
    const sandbox = vm.createContext({ window: seed });
    const before = JSON.stringify(seed);
    assert.doesNotThrow(() => loadTools(sandbox));
    assert.equal(JSON.stringify(seed), before);
  }
});
