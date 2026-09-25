# Medical / Kaigo Tools — current checkpoint

Current status after Stages 6A-1 through 6A-5 and the later UI integration:

- 13 common medical / kaigo vocabulary cards are loaded by `index.html` through `tools-pack-v1.js`.
- Every card uses its own standalone image asset; no runtime card depends on the old draft atlas.
- Tools 01–08 use standalone PNG illustrations.
- Tools 09–13 use standalone SVG illustrations.
- The legacy `assets/tools/medical-tools-sprite.jpg` atlas has been removed.
- Medical tools are integrated with list/detail views, flashcards, image quiz, SRS/review, progress, category filters, and the Kaigo dashboard.
- The detailed asset mapping is validated by `tests/tools-pack-v1.js`; overall data integrity is also covered by `tests/data-v2.js`.

Historical image-generation checkpoints remain in
[TOOLS_IMAGES_6A2.md](TOOLS_IMAGES_6A2.md) and
[TOOLS_IMAGES_6A3.md](TOOLS_IMAGES_6A3.md).

## Data contract

Each card has:

- unique `id`
- Japanese `term`
- kana `reading`
- Indonesian `meaning`
- `category`
- standalone `image`
- Japanese function, reading, and Indonesian explanation
- example sentence, reading, and Indonesian meaning
- optional safety note with reading and Indonesian meaning

The legacy sprite metadata fields remain as a compatibility shape, but every
current standalone asset uses:

- `spriteIndex: 0`
- `spriteCols: 1`
- `spriteRows: 1`
- `spriteWidth` / `spriteHeight` matching the actual asset dimensions

## Validation

Run from the repository root:

```sh
node --check tools-pack-v1.js
node --test tests/tools-pack-v1.js
node tests/data-v2.js
node tests/system-v2.js
```

The Tools workflow performs syntax, standalone-image asset, and learning-data
checks on the feature branch and pull requests. The main TENKA audit workflow
also validates the pack before deployment.

## Release note

These illustrations are vocabulary-recognition assets, not clinical procedure
instructions. Safety-sensitive descriptions should remain educational and
should not replace workplace protocols, professional training, or facility
procedures.
