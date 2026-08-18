# DropZone

## What it is
A drag-and-drop target area (files/data) with drop-target and focus-visible visual states.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/dropzone.tsx`

## RAC primitives used
`DropZone` from `react-aria-components`.

## Public API
Single component (not compound): `DropZone`.
- `DropZoneProps extends RACDropZoneProps`.

## Build steps
1. Create `src/common/components/drop-zone/` with `components/drop-zone.tsx`, `index.ts`, `variants.ts`.
2. `variants.ts`: `tv()` single-slot fn — dashed border box, centered flex content, `data-drop-target:border-solid data-drop-target:border-primary data-drop-target:bg-muted`, `data-focus-visible:ring-2`. Drop the fixed `h-[150px] w-[300px]` jolly hardcodes in favor of `w-full` + a sensible `min-h-*` so it fits our layout conventions (composable, not fixed-size).
3. `components/drop-zone.tsx`: wrap RAC `DropZone` directly, `composeRenderProps` + variant fn, `data-slot="drop-zone"`.
4. `index.ts`: export `DropZone`, `DropZoneProps`, variants.

## Dependencies
None — standalone leaf. Pairs conceptually with a future file-upload flow but has no code dependency on other planned components.
