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

function imageSize(bytes) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (!bytes.subarray(0, 8).equals(signature)) return jpegSize(bytes);
  assert.ok(bytes.length >= 45, 'truncated PNG');
  assert.equal(bytes.readUInt32BE(8), 13, 'PNG IHDR length is invalid');
  assert.equal(bytes.toString('ascii', 12, 16), 'IHDR', 'PNG IHDR missing');
  assert.equal(bytes.toString('ascii', bytes.length - 8, bytes.length - 4), 'IEND', 'PNG IEND missing');
  const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
  assert.ok(width > 0 && height > 0, 'PNG dimensions must be positive');
  return { width, height };
}

test('every image cell fits the actual PNG/JPEG and is assigned once', () => {
  const used = new Set();
  const images = new Map();
  for (const card of cards) {
    const file = path.resolve(root, card.image);
    assert.ok(file.startsWith(root + path.sep), 'image must stay inside repository');
    if (!images.has(file)) images.set(file, imageSize(fs.readFileSync(file)));
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

test('reviewed individual images and remaining atlas cells match their tools', () => {
  const expected = [
    ['体温計', 'thermometer-v2.png', 0],
    ['血圧計', 'blood-pressure-monitor-v2.png', 0],
    ['聴診器', 'stethoscope-v2.png', 0],
    ['パルスオキシメーター', 'pulse-oximeter-v2.png', 0],
    ['注射器', 'syringe-v2.png', 0],
    ['点滴', 'iv-drip-v2.png', 0],
    ['点滴スタンド', 'iv-pole-v2.png', 0],
    ['吸引器', 'suction-machine-v2.png', 0],
    ['車椅子', 'medical-tools-sprite.jpg', 8],
    ['歩行器', 'medical-tools-sprite.jpg', 9],
    ['ポータブルトイレ', 'medical-tools-sprite.jpg', 10],
    ['おむつ', 'medical-tools-sprite.jpg', 11],
    ['使い捨て手袋', 'medical-tools-sprite.jpg', 12]
  ];
  expected.forEach(([term, file, index], i) => {
    const id = `tool-${String(i + 1).padStart(2, '0')}`;
    const card = cards.find(x => x.id === id);
    assert.ok(card, `missing ${id}`);
    assert.equal(card.term, term);
    assert.equal(card.image, `assets/tools/${file}`, `${id}: wrong image file`);
    assert.equal(card.spriteIndex, index, `${id}: wrong image cell`);
    if (i < 8) {
      assert.equal(card.spriteCols, 1); assert.equal(card.spriteRows, 1);
      assert.ok(card.spriteWidth >= 1024 && card.spriteHeight >= 1024, `${id}: individual image resolution too small`);
    }
  });
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
