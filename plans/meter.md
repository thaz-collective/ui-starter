# Meter

## What it is
A labeled horizontal bar visualizing a bounded value (e.g. disk usage) — semantically distinct from `Progress` (meter = a measurement, not task completion) but visually near-identical in jolly-ui.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/meter.tsx`

## RAC primitives used
`Meter` from `react-aria-components`.

## Public API
Single component (not compound, matches jolly): `Meter`.
- `MeterProps extends RACMeterProps` plus `barClassName`/`fillClassName` escape hatches (port from jolly), `label?: string`, `showValue?: boolean` (jolly's `JollyMeter` convenience wrapper folded directly into the one exported component per our "single exported item" convention rather than keeping a separate bare/`Jolly*` pair).

## Build steps
1. Create `src/common/components/meter/` with `components/meter.tsx`, `index.ts`, `variants.ts`.
2. `variants.ts`: `tv()` slots — `root` (`flex flex-col gap-2`), `labelRow` (flex justify-between), `label`, `value`, `track` (`h-2 w-full rounded-full bg-primary/20`), `fill` (`h-full bg-primary transition-all`, driven by inline `style={{ transform: 'translateX(-{100-percentage}%)' }}` like jolly — not expressible as a static class, keep the inline style).
3. `components/meter.tsx`: wrap RAC `Meter` directly, render `label`/`valueText` row + track/fill div using `composeRenderProps` to access `percentage`/`valueText` render props.
4. `index.ts`: export `Meter`, `MeterProps`, variants.

## Dependencies
- No shared `label` atom to reuse — inline the label row's text styling directly into `meter`'s own component/variants (jolly's `labelVariants` came from its shared `field.tsx`, which has no equivalent shared folder here; follow the same inlined-label pattern as `text-field`).
- **Near-duplicate of `progress`** (see `plans/progress.md`) — build together; the only difference is the RAC primitive (`Meter` vs `ProgressBar`) and semantics, markup/styling is copy-identical.
