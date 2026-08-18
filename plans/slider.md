# Slider

## What it is
A draggable-thumb range input (single or multi-thumb), horizontal or vertical, with an output label.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/slider.tsx`

## RAC primitives used
`Slider`, `SliderOutput`, `SliderTrack`, `SliderThumb`, `SliderStateContext` from `react-aria-components`.

## Public API
Compound object `Slider`:
- `Root` (`Slider`, also default export)
- `Output`
- `Track`
- `FillTrack` (the colored portion up to the thumb — reads `SliderStateContext` directly, not a RAC-exported primitive)
- `Thumb`

## Build steps
1. Create `src/common/components/slider/` with `variants.ts`, `index.ts`, and `components/slider.tsx` (Root), `-output.tsx`, `-track.tsx`, `-fill-track.tsx`, `-thumb.tsx`.
2. `variants.ts`: `tv()` slots — `root` (`relative flex touch-none select-none items-center`, orientation-based `h-full`/`w-full`), `output` (reuse label text styling), `track` (orientation-based thickness, `data-disabled` opacity), `fillTrack` (orientation-based `h-full`/`w-full bottom-0`), `thumb` (`data-focus-visible` ring, `data-disabled`).
3. `components/slider.tsx` (Root): wrap RAC `Slider` directly, default `orientation="horizontal"`.
4. `components/slider-output.tsx`, `-track.tsx`: thin styled wraps of RAC `SliderOutput`/`SliderTrack`.
5. `components/slider-fill-track.tsx`: reads `useContext(SliderStateContext)` directly (port jolly's approach verbatim — this is standard RAC usage, not a "shared primitive" import), computes `getThumbPercent(0) * 100 + '%'` for inline `style`.
6. `components/slider-thumb.tsx`: thin styled wrap of RAC `SliderThumb` (supports multiple thumbs via multiple `<Slider.Thumb>` instances, per RAC convention — note this in a code comment since jolly's single-thumb example doesn't demonstrate it).
7. `index.ts`: `Object.assign(SliderRoot, { Root, Output, Track, FillTrack, Thumb })`.

## Dependencies
- No shared `label` atom to reuse — inline label-equivalent text styling directly into `slider-output.tsx`'s own base `tv()` (jolly's `labelVariants()` reuse has no shared-folder equivalent here; follow the same inlined-label pattern as `text-field`).
- No dependency on other not-yet-migrated components.
