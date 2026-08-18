# Tooltip

## What it is
A small floating hint shown on hover/focus of a trigger element.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/tooltip.tsx`

## RAC primitives used
`Tooltip`, `TooltipTrigger` from `react-aria-components`.

## Public API
Compound object `Tooltip`:
- `Root` (the `Tooltip` overlay itself, also default export)
- `Trigger` (`TooltipTrigger`, pass-through wrapper — jolly re-exports `AriaTooltipTrigger` unchanged)

## Build steps
1. Create `src/common/components/tooltip/` with `variants.ts`, `index.ts`, `components/tooltip.tsx`, `components/tooltip-trigger.tsx`.
2. `variants.ts`: `tv()` single-slot fn for the overlay box (rounded, small padding, bg, text, entering/exiting animation classes, placement-based slide-in). There's no shared top-level `popover`/`dialog` folder anymore — `popover`/`dialog` now live as internal, non-exported files inside `date-time-picker/components/` (`popover.tsx`, `dialog.tsx`, `date-time-picker-popover.tsx`). Read those for the entering/exiting animation-class pattern already established there and **duplicate** the same convention into `tooltip`'s own `variants.ts` rather than importing anything from `date-time-picker`.
3. `components/tooltip.tsx`: wrap RAC `Tooltip` directly, default `offset={4}` like jolly, `composeRenderProps` + variant fn.
4. `components/tooltip-trigger.tsx`: thin pass-through wrapper around RAC `TooltipTrigger` (no props to intercept, exists only so the compound object has a `Trigger` key consistent with other trigger-based components like `date-picker`).
5. `index.ts`: `export const Tooltip = Object.assign(TooltipRoot, { Root: TooltipRoot, Trigger: TooltipTrigger })`.

## Dependencies
Check `src/common/components/date-time-picker/components/popover.tsx` and `date-time-picker-popover.tsx` first and duplicate their entering/exiting/placement animation utility classes into `tooltip`'s own `variants.ts` for visual consistency across all overlay-style components (tooltip, menu, select, combobox) — each folder inlines its own copy of this pattern; there is no shared `popover` folder to import from.
