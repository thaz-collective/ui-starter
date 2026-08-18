# Toolbar

## What it is
A container that groups interactive controls (buttons, toggles) with arrow-key navigation, horizontal or vertical.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/toolbar.tsx`

## RAC primitives used
`Toolbar` from `react-aria-components`.

## Public API
Single component (not compound): `Toolbar`.
- `ToolbarProps extends RACToolbarProps`.

## Build steps
1. Create `src/common/components/toolbar/` with `components/toolbar.tsx`, `index.ts`, `variants.ts`.
2. `variants.ts`: `tv()` base `'flex gap-2'` plus `data-[orientation=vertical]:flex-col`.
3. `components/toolbar.tsx`: wrap RAC `Toolbar` directly, `composeRenderProps` for className.
4. `index.ts`: export `Toolbar`, `ToolbarProps`, variants.

## Dependencies
None. Consumers (e.g. a future toolbar full of `Button`/`Toggle`/`Separator`) just compose already-migrated/planned pieces — no build-order coupling.
