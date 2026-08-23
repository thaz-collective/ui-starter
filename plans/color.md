# Color

## What it is

**Not one concept** — jolly-ui's `color.tsx` bundles wrappers for five distinct RAC color-picking primitives that don't share a parent/child relationship with each other: a color field (text input), a 2D color area, a 1D slider track (shared by sliders/wheel), a color wheel, a color swatch/swatch-picker, plus the top-level `ColorPicker` composition root. This does **not** fit our "one folder per compound" convention as a single flat compound — it needs to become **several sibling top-level folders**, similar to how `date-time-picker`/`calendar`/`time-field` are already split into separate concepts in this library rather than one giant `Date` compound.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/color.tsx`

## RAC primitives used

`ColorField`, `ColorArea`, `ColorSlider`, `ColorThumb`, `ColorWheel`, `ColorWheelTrack`, `ColorSwatch`, `ColorSwatchPicker`, `ColorSwatchPickerItem`, `ColorPicker`, `SliderTrack`, `SliderOutput` from `react-aria-components`.

## Suggested split (judgment call — confirm with user before building)

1. **`color-field`** — `ColorField` (a `TextField`-shaped hex/color text input). Compound: `Root`, plus its own inlined `Label`/`Description`/`FieldError` files, copied from and matching `text-field`'s exactly (no shared folder to import from — each composite duplicates this pattern). This is the one piece that genuinely mirrors an existing migrated pattern.
2. **`color-area`** — `ColorArea` + a shared `ColorThumb`. Compound: `Root`, `Thumb`.
3. **`color-slider`** — `ColorSlider` + `SliderTrack` + `SliderOutput` + `ColorThumb`. Compound: `Root`, `Track`, `Output`, `Thumb`. Structurally near-identical to the plain `slider` plan (see `plans/slider.md`) — consider whether `ColorThumb`/track styling can be visually unified with `Slider.Thumb`/`Slider.Track` (same border/focus-ring treatment), even though they remain separate folders since they wrap different RAC components.
4. **`color-wheel`** — `ColorWheel` + `ColorWheelTrack` + reused `ColorThumb`. Compound: `Root`, `Track`, `Thumb`.
5. **`color-swatch`** — `ColorSwatch` (single non-interactive swatch), `ColorSwatchPicker` (selectable grid), `ColorSwatchPickerItem`. Compound: could be one `ColorSwatch` object with `Root`/`Picker`/`PickerItem`, or two folders (`color-swatch` + `color-swatch-picker`) if the picker is considered a distinct concept — lean toward one `color-swatch` folder since `ColorSwatchPicker` literally composes `ColorSwatch`-shaped items.
6. **`color-picker`** — `ColorPicker` (the top-level context-provider/composition root that wires an eyedropper trigger + popover of the above pieces together, RAC's `ColorPicker` is analogous to `DialogTrigger`/`Popover` composition, not a leaf). Compound: `Root` only (thin re-export), consumers compose `color-area`/`color-slider`/`color-swatch` inside it.
7. A shared `ColorThumb` visual (small circular drag handle) is reused by `color-area`, `color-slider`, and `color-wheel` in jolly. Since folders must stay self-contained per convention, **duplicate the thumb styling into each of those three folders' own `variants.ts`/component** rather than creating a cross-folder shared "primitive" — accept the small duplication (3 near-identical ~15-line thumb components) as the cost of the self-contained-folder rule.

## Build steps (once the split above is confirmed)

1. For each sub-folder, follow the standard shape: `variants.ts` (tv slots for the wrapped RAC component's states — `data-hovered`, `data-dragging`, `data-focus-visible`, `data-disabled`), `index.ts`, `components/<name>*.tsx`.
2. `color-field` gets the full `text-field`-style treatment: `context.ts`, Root/Label/Input/Description/FieldError, each an own inlined copy of the label/description/field-error pattern (no shared atoms exist to reuse).
3. `color-area`, `color-slider`, `color-wheel`, `color-swatch` are visual/interactive-only (no label/description/error concept) — no `context.ts` needed, plain `tv()` slot fn is enough, mirroring `slider`'s shape.
4. `color-picker` is the thinnest — likely just re-exports `ColorPicker` with minimal styling, since RAC's `ColorPicker` itself renders nothing (it's a state-provider component); actual visual composition happens via consumers nesting `color-swatch`/`color-area`/etc. inside it.

## Dependencies

- `color-field` should be built after `text-field` (already migrated) since it copies that folder's Root/Label/Input/Description/FieldError shape almost verbatim.
- `color-slider` benefits from `slider` (see `plans/slider.md`) being built first, for visual/track/thumb consistency.
- **Flag for user**: this is the one entry in the batch that cannot become a single `plans/color.md`-shaped folder — recommend confirming the 5-6-folder split above before any code is written, and possibly renaming this plan file into `color-field.md`, `color-area.md`, `color-slider.md`, `color-wheel.md`, `color-swatch.md`, `color-picker.md` once agreed.
