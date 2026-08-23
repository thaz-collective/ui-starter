# Toggle

## What it is

A pressable button with a boolean selected state (toggle button), plus a group container for a row/column of toggles.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/toggle.tsx`

## RAC primitives used

`ToggleButton`, `ToggleButtonGroup` from `react-aria-components`.

## Public API

Compound object `Toggle`:

- `Root` (the `ToggleButton`, also the default export via `Object.assign`)
- `Group` (`ToggleButtonGroup`)

## Build steps

1. Create `src/common/components/toggle/` with `context.ts`, `variants.ts`, `index.ts`, `components/toggle.tsx` (Root), `components/toggle-group.tsx`.
2. `variants.ts`: `tv()` slots for `root` and `group`; port jolly's `variant` (`default`/`outline`) and `size` (`default`/`sm`/`lg`) variants onto the `root` slot; map our `size` scale to match `button`'s (`sm`/`md`/`lg`) for consistency across the library rather than jolly's `default`/`sm`/`lg`.
3. `context.ts` + `components/toggle-group-context-provider.tsx` (optional): only needed if `Root` must react to being inside `Group`'s orientation (jolly uses `group-data-[orientation=vertical]/togglegroup:w-full` via a plain CSS group, no React context needed) — skip React context, use CSS `group/toggle-group` on `Group` like jolly does, keeping this simple like `button`.
4. `components/toggle.tsx`: wrap RAC `ToggleButton` directly, apply `slots.root({variant, size, ...})`.
5. `components/toggle-group.tsx`: wrap RAC `ToggleButtonGroup` directly, `data-slot="toggle-group"`, apply `slots.group`.
6. `index.ts`: `export const Toggle = Object.assign(ToggleRoot, { Root: ToggleRoot, Group: ToggleGroup })`; export prop types + variants.

## Dependencies

Standalone. Behaviorally close to `switch` (boolean selection) — consider building together for shared review of state-variant conventions, but no code dependency either direction.
