# Compass Components Folder

This folder contains compass/navigation components.

## Assets Required

Make sure you have the compass image asset at:
- `public/assets/compass/compass.png`

## How to Add a New Compass Component

Follow the same pattern as buttons - create a new file, export a Component object, and add it to `src/components/index.ts`.

See `src/components/buttons/README.md` for the template structure.

## Dependencies

The compass component uses:
- `src/utils/heading.ts` - Utility functions for converting camera angles to compass headings

