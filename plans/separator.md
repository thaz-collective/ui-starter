# Separator

## What it is
A thin visual divider line, horizontal or vertical.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/separator.tsx`

## RAC primitives used
`Separator` from `react-aria-components`.

## Public API
Single component (not compound): `Separator`.
- `SeparatorProps extends RACSeparatorProps` (orientation defaults to `horizontal`).

## Build steps
1. Create `src/common/components/separator/` with `components/separator.tsx`, `index.ts`, `variants.ts`.
2. `variants.ts`: `tv()` single-slot fn with `base: 'bg-border'` and an `orientation` variant (`horizontal: 'h-px w-full'`, `vertical: 'w-full h-px'` → actually vertical should be `'w-px h-full'`); default `orientation: 'horizontal'`.
3. `components/separator.tsx`: wrap RAC `Separator` directly, default `orientation="horizontal"`, apply `separatorVariants`.
4. `index.ts`: export `Separator`, `SeparatorProps`, `separatorVariants`, variant types.

## Dependencies
None — simplest leaf component in the batch, good first build to re-validate the single-component (non-compound) pattern established by `button`.
