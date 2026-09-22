# Stage 6A-3 — four treatment-tool images

## Checkpoint

Eight of thirteen tools now use individual images. This batch adds the syringe,
IV bag/drip set, empty IV pole and suction machine. Each new PNG is 1254 × 1254 px
at its original generated resolution. Cards 09–13 retain their draft atlas.
No app boot, menu, audio, progress, merge or deployment changes are included.

## Repository assets and visual review

| Card | File | Visual review |
| --- | --- | --- |
| tool-05 / 注射器 | `assets/tools/syringe-v2.png` | Clear barrel, plunger, piston and Luer nozzle; illustrated without an attached needle. |
| tool-06 / 点滴 | `assets/tools/iv-drip-v2.png` | Fluid bag, drip chamber, roller clamp and tubing shown together, without a pole. |
| tool-07 / 点滴スタンド | `assets/tools/iv-pole-v2.png` | Empty upright pole, two hooks and five casters; distinct from the IV bag card. |
| tool-08 / 吸引器 | `assets/tools/suction-machine-v2.png` | Pump, collection jar, handle, gauge, filter and tubing visible. |

All four images were visually checked: object identity is recognizable, the main
components fit within the frame, and no letters, numbers, labels or app mockup UI
are visible. These generic object illustrations support vocabulary recognition;
they are not technical diagrams or instructions for treatment.

Each asset uses `spriteIndex:0`, `spriteCols:1`, `spriteRows:1` with its actual
width and height. Data checks pin each card ID to its reviewed image path. Local
PNG verification, all five tools-pack tests, the existing 179-ID data-integrity
test and JavaScript syntax checks passed before saving.

## Remaining images

Tools 09–13: wheelchair, walker, portable toilet, adult diaper and disposable
gloves. Their small draft atlas cells still need replacement before full-size
flashcards. UI integration, mobile asset optimization and educational-content
source verification remain separate work before release.

## Generation record

Created with the built-in ImageGen tool, without input reference images.
Requested size was 1024 square; the tool returned 1254 square and the data uses
that actual size. Files were copied unchanged, without resizing or other edits.
The clinical-white/pale-blue style and white background follow Stage 6A-2.

## Exact generation prompts

### syringe-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE standard disposable clear-plastic medical syringe WITHOUT a needle attached. Show a transparent cylindrical barrel, two finger flanges, a white plunger with a flat circular thumb pad at its far end, one black rubber piston inside the barrel, and a short correctly shaped Luer nozzle at the opposite tip. Plunger partly extended so the construction is recognizable. Empty, no liquid. Large diagonal lower-left to upper-right composition in a slight three-quarter view. No dose numbers or printed graduations, no cap, no disconnected extra pieces. Not an oral dosing spoon or an injection pen.

### iv-drip-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE generic gravity intravenous fluid bag and its connected administration tubing, arranged as a clean isolated product illustration. A transparent flexible rectangular fluid bag is upright at the upper center, has a small hanging eyelet at the top and clear fluid visible inside. At the bottom, an inserted spike connects to a small transparent vertical drip chamber immediately below, and one thin transparent tube runs from the chamber, bends in a loose spacious loop and ends in a small capped connector. Include one small pale-blue roller clamp on the tubing. The chamber is partly filled, with air space visible above the fluid. Show no needle, no patient, no IV pole, no pump, no extra reservoir. Keep every part and the tubing end fully inside the image. No printed bag labels or volume scales. This depicts the bag-and-drip-set associated with the Japanese vocabulary 点滴, not an instruction for treatment.

### iv-pole-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE empty stainless-steel mobile IV pole, full height, upright and centered. A slender telescopic vertical pole with one small adjustment knob, exactly two simple curved hooks at the top, and a stable five-legged star base with small dark caster wheels. Natural tall proportions, clean three-quarter perspective. No hanging bag, no tubing, no pump, no medical accessories, no human. All hooks and caster wheels fully inside the frame with white margin. This must be distinct from an IV bag and from a walking aid.

### suction-machine-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE compact portable electric medical suction aspirator. A white pump housing with pale-blue trim, a carry handle, a simple unmarked control knob and a small analogue gauge with a needle but no numbers. Next to the pump is one large clear EMPTY collection jar with a sealed pale-blue lid and two visible ports. One short clear hose connects the pump to a jar port through a small inline filter; a separate longer clear patient suction hose attaches to the other jar port and lies loosely coiled beside the unit, ending in a simple open connector. Arrange hoses clearly without impossible mergers. Three-quarter product view, all parts visible and inside the frame. No mask, oxygen cylinder, nebulizer cup, patient, biological material, printed markings or text. The large collection jar must make this recognizable as a suction machine, not a nebulizer.

