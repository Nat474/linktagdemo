# Linktag Pro logo

The logo comes from the user-supplied `865699008_29160468626881282_1104724023584033359_n.jpg`. The original download is not modified.

## Files

- `public/images/brand/linktagpro-logo.png`: white logo on a genuine alpha-transparent background, tightly framed with a small transparent margin.
- `public/images/brand/logo-contrast-preview.png`: verification image showing black artwork on a light surface and white artwork on a dark surface.
- `src/app/icon.svg`: adaptive favicon using the same artwork, dark on light browser themes and white on dark browser themes. Its image is embedded, with no external requests.
- `src/app/favicon.ico`: transparent fallback favicon containing 64, 32, and 16 pixel versions of the full logo.

The shared `BrandLogo` component uses the transparent PNG in the header and footer. CSS changes its monochrome presentation for light and dark surfaces, including the fixed sample themes. No separate replacement wordmark or generic link icon is used for the brand.

## Background-removal prompt

The selected transparent cutout was created using the built-in ImageGen tool, referencing the user-supplied JPEG and setting `transparent_background: true`. The output was trimmed and encoded for the app, and resized for favicon formats. The first attempted cutout was discarded.

Prompt: Remove the black background from this logo, leaving only the exact original white LINKTAGPRO letters, white oval outline, and white star. Make every original black area fully transparent, including ALL the generous black gaps separating the letters, the holes inside A/P/R/O, and the space between the letters and oval outline. Preserve the lettering and outline exactly as the original. Do not fill or merge the letter gaps. Do not redraw, enlarge, distress, or distort the logo. No texture, no noise, no glow, no shadow. Keep the original image dimensions and position of the logo, with transparent pixels instead of the black background. Clean white opaque original logo artwork on genuine transparent alpha background.
