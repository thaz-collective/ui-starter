# Progress

## What it is

A labeled horizontal bar visualizing task-completion percentage (indeterminate or determinate).

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/progress.tsx`

## RAC primitives used

`ProgressBar` from `react-aria-components`.

## Public API

Single component (not compound, matches jolly): `Progress`.

- `ProgressProps extends RACProgressBarProps` plus `barClassName`/`fillClassName`, `label?: string`, `showValue?: boolean` (folded from jolly's `JollyProgressBar` per our single-exported-item convention).

## Build steps

1. Create `src/common/components/progress/` with `components/progress.tsx`, `index.ts`, `variants.ts`.
2. `variants.ts`: identical slot shape to `meter`'s — `root`, `labelRow`, `label`, `value`, `track`, `fill`.
3. `components/progress.tsx`: wrap RAC `ProgressBar` directly, same render-props-driven inline-style fill technique as `meter`.
4. `index.ts`: export `Progress`, `ProgressProps`, variants.

## Dependencies

- No shared `label` atom to reuse — inline the label text styling directly in `progress`'s own files, following the same inlined-label pattern as `text-field`/`meter`.
- **Near-duplicate of `meter`** (see `plans/meter.md`) — build together, copying the markup/variants and swapping only the RAC import (`ProgressBar` vs `Meter`).
