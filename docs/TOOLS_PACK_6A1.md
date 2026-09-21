# Stage 6A-1 checkpoint

Scope: draft images and data for 13 common medical/kaigo vocabulary cards.
The tools pack is not loaded by `index.html` and has no menu, quiz, audio,
progress-storage, merge or deployment changes in this checkpoint.

## Data validation

- Every card has Japanese, reading, Indonesian meaning, function and example.
- The existing suction note now also has a reading and Indonesian translation.
- Sprite dimensions are explicit: 448 × 336 px, 4 columns and 4 rows.
  Each cell is 112 × 84 px. Preserve this aspect ratio when rendering.
- `spriteIndex` is zero-based, ordered left to right, then top to bottom.
- Load the pack after `data.js` (the same dependency as the other packs).
- Automated checks cover missing fields, ID collisions with the other packs,
  image file headers and dimensions, cell bounds, repeated cells, the reviewed
  tool-to-image order, reloads, and preservation of existing learning data.

Run from the repository root:

```sh
node --test tests/tools-pack-v1.js
node tests/data-v2.js
```

## Image review and remaining work

The current JPEG opens successfully and contains the 13 tools in the expected
order, followed by three unused cells. It is a small draft atlas, not an
approved full-size card asset. The illustrations are tiny and still include
number badges. Do not upscale it and claim that it is a high-resolution asset.

Next image step: recover higher-resolution original tool art or create clean
individual illustrations, without numbers, labels or mockup UI. Review object
identity and update the geometry tests when replacing the draft atlas.

The tests validate data structure and image mapping, not clinical accuracy or
automatic ruby/furigana rendering. Readings are stored as full reading strings;
furigana display and its visual QA remain part of the later UI work. Source
verification of the educational descriptions remains required before release.
