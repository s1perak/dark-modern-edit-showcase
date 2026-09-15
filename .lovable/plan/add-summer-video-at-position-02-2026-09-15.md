# Add "Summer" video at position 02

## What changes

A new project card — **Summer** (Private Project) — is inserted into the "Selected cuts" grid as item **02**, directly after the featured "Cards" showreel. The existing cards automatically shift down one position (Dennis Schwer becomes 03, Kraken 04, and so on) because the card numbering is generated from the list order — no manual renumbering needed.

## Details

New entry in `src/data/portfolio.ts` (in `projects`, second position):

- **Title:** Summer
- **Category:** Private Project
- **Description:** Recap of my vacation in Croatia
- **Video:** YouTube embed — `https://www.youtube-nocookie.com/embed/EJ-OfA1w57E?rel=0&modestbranding=1&playsinline=1` (landscape 16:9, same treatment as the other cards)
- **Thumbnail:** a still frame pulled from the 4th second of the video, saved as `src/assets/thumb-summer.jpg` and imported the same way as the existing thumbnails

The existing video modal already supports YouTube embeds (with autoplay on open, click-outside to close), so no changes are needed there — the new card behaves identically to the Vimeo cards.

## Thumbnail extraction

The frame at 0:04 is fetched from the YouTube video (download the video stream, extract the frame with ffmpeg). If YouTube blocks the download from this environment, the fallback is YouTube's own highest-resolution preview image for the video, so the card still gets a real still from the content.

## Verification

- Build passes.
- Grid shows: 01 Cards (featured, full width), 02 Summer, then the previous projects renumbered 03–08.
- Clicking the Summer card opens the YouTube video in the popup with the new description, same styling as the rest.
