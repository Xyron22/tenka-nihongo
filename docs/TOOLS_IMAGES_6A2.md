# Stage 6A-2 — four examination-tool images

## Checkpoint

Four of thirteen tools now use new individual images: thermometer, blood-pressure monitor, stethoscope and pulse oximeter. Each PNG is 1254 × 1254 px at its original generated resolution. The remaining nine cards retain their draft atlas mappings. The current app boot, navigation, audio and progress remain outside this stage.

Visual review: each image shows the intended generic tool, all major parts fit within the frame, and no numbers, labels, brands or mockup UI are visible. The blood-pressure monitor includes its cuff and connecting tube; the stethoscope has two eartips and one chestpiece. These are vocabulary illustrations, not diagrams for operating the devices. The displays are intentionally blank.

Generation used the built-in ImageGen tool. Requested size was 1024 square; the tool returned 1254 square, and metadata uses the actual dimensions. Files were copied unchanged; no upscaling or post-generation image edits were applied.

## Repository assets

| Card | File | Geometry |
| --- | --- | --- |
| tool-01 / 体温計 | `assets/tools/thermometer-v2.png` | 1 × 1, index 0 |
| tool-02 / 血圧計 | `assets/tools/blood-pressure-monitor-v2.png` | 1 × 1, index 0 |
| tool-03 / 聴診器 | `assets/tools/stethoscope-v2.png` | 1 × 1, index 0 |
| tool-04 / パルスオキシメーター | `assets/tools/pulse-oximeter-v2.png` | 1 × 1, index 0 |

The 1×1 geometry preserves the existing image-field contract. The checks now validate both PNG and JPEG dimensions and pin tool IDs to the reviewed filenames/cells. All image files were also decoded/verified locally.

## Next small step

Replace the treatment-tool group (tool-05 to tool-08), keeping the same neutral background and illustration style. The nine remaining draft illustrations are still too small for full-size flashcards and include number badges. UI integration, mobile asset optimization and clinical-content source review remain later steps before release.

## Exact generation prompts

### thermometer-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE ordinary digital stick body thermometer used under the arm, a slender white plastic body with a small blank grey LCD window, one plain pale-blue button, a tapered probe ending in a short silver metal sensor tip, and a pale-blue back cap. A clean diagonal lower-left to upper-right orientation, seen from above at a very slight angle. The device should be large and instantly recognizable. Not a forehead thermometer, not a mercury glass thermometer.

### blood-pressure-monitor-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE ordinary automatic upper-arm blood pressure monitor set: compact white tabletop digital monitor with gently slanted front, large blank grey LCD and one round pale-blue unmarked button, plus its dark charcoal fabric upper-arm cuff placed neatly beside it. A single flexible air tube connects the cuff to a visible port on the monitor. A clean three-quarter view. Keep both cuff and monitor fully in frame and anatomically plausible; no human arm. No pressure numbers or printed markings.

### stethoscope-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE ordinary adult stethoscope laid out neatly with exactly two grey soft eartips on two metal ear tubes, connected to a single Y-shaped dark slate flexible tube and a single round silver chestpiece with a flat pale grey diaphragm. The long tube curves smoothly into a loose natural loop, attached correctly to the chestpiece. Viewed mostly from above. Entire object and both eartips visible. Simple accurate hospital stethoscope, no extra tubes or duplicated chestpieces.

### pulse-oximeter-v2

Use case: product-mockup. Asset type: a single reusable raster illustration for TENKA Japanese medical/care vocabulary flashcards. Create a square 1024x1024 image of ONE specified generic device, isolated on a pure white background, centered with about 15 percent clean padding on all sides, fully inside frame. Consistent style: refined realistic digital educational illustration, smooth soft shading, clean edges, subtle grey contact shadow, natural proportions, clinical white / pale blue / dark slate palette, no cartoon face or decorative elements. This is object-recognition art, not a clinical procedure diagram. No people or hands, no packaging, no logos, no brand names, no labels, no numbers, no badges, no captions, no watermark, no app UI. Displays are blank and powered off with no text or digits. Avoid cropped parts, extraneous parts, invented attachments, gradients in the white background.
Subject: ONE ordinary fingertip pulse oximeter, compact hinged clip with a rounded pale-blue top shell, white lower shell, dark blank rectangular display on the top, one small unmarked button and a visible soft dark finger aperture at the front. A clean three-quarter view with the clip slightly ajar so the finger opening is obvious. No finger or hand. No separate monitor, cables, numbers or symbols.

