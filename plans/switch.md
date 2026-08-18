# Switch

## What it is
A toggle switch (on/off) with an internal track+thumb visual and a trailing label.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/switch.tsx`

## RAC primitives used
`Switch` from `react-aria-components`.

## Public API
Single component (not compound, like jolly's — the track/thumb are internal render, not separate exported parts): `Switch`.
- `SwitchProps extends RACSwitchProps`.

## Build steps
1. Create `src/common/components/switch/` with `components/switch.tsx`, `index.ts`, `variants.ts`.
2. `variants.ts`: `tv()` slots — `root` (label row), `track` (the pill), `thumb` (the moving circle). Key states off RAC render props: `data-selected`, `data-focus-visible`, `data-disabled`, `data-readonly` on the group/root so `group-data-*` can drive `track`/`thumb` styling (mirrors the `group/text-field`-style pattern used elsewhere).
3. `components/switch.tsx`: wrap RAC `Switch` directly (`data-slot="switch"`), render the `track` div containing the `thumb` div, then children, using `composeRenderProps` + `slots.root/track/thumb`.
4. `index.ts`: export `Switch`, `SwitchProps`, variants.

## Dependencies
None — self-contained leaf, similar shape/complexity to `Toggle` (see `plans/toggle.md`) and a natural pair to build alongside it since both are boolean-selection controls with a group-driven visual indicator.
