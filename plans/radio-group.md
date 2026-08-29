# RadioGroup

## What it is

A group of mutually-exclusive radio buttons with group label/description/error.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/radio-group.tsx`

## RAC primitives used

`RadioGroup`, `Radio` from `react-aria-components`.

## Public API

Compound object `RadioGroup`:

- `Root` (`RadioGroup`, also default export)
- `Radio` (individual radio)
- `Label`, `GroupDescription`, `FieldError` (own inlined copies, following `text-field`'s pattern — no shared atoms exist)

## Build steps

1. Create `src/common/components/radio-group/` with `context.ts`, `variants.ts`, `index.ts`, `components/radio-group.tsx` (Root), `components/radio.tsx`, `components/radio-group-context-provider.tsx`, `components/radio-group-label.tsx`, `components/radio-group-description.tsx`, `components/radio-group-field-error.tsx`.
2. `variants.ts`: `tv()` slots — `root` (flex-col/flex-row via `orientation` variant, `group/radio-group`), `radio` (label row, `group/radio`), `circle` (the round indicator: border, `group-data-selected/radio:border-primary`, `group-data-invalid/radio-group:border-danger` propagated from root, focus-visible ring), `label`, `description`, `fieldError`. Port jolly's `orientation === 'horizontal' ? flex-row : flex-col` into a proper `tv()` `orientation` variant instead of an inline ternary.
3. `context.ts` + `-context-provider.tsx`: same shape as `checkbox`'s group context (`{ slots }`) so `Radio`, `Label`, `GroupDescription`, `FieldError` can react to group-level `data-invalid`/`data-disabled`.
4. `components/radio.tsx`: wrap RAC `Radio` directly, render circle indicator with `lucide-react` `Check` or a filled-dot `<span>` (match jolly's filled circle rather than a check icon, since that's the more conventional radio affordance) — self-contained, works standalone.
5. `components/radio-group.tsx`: wrap RAC `RadioGroup`, wrapped in context provider, `data-slot="radio-group"`.
6. `-label.tsx`/`-description.tsx`/`-field-error.tsx`: thin delegation wrappers exactly like `checkbox`'s.
7. `index.ts`: `Object.assign(RadioGroupRoot, { Root, Radio, Label, Description, FieldError })`.

## Dependencies

- No shared atoms to reuse — follow the same inlined label/description/field-error pattern as `text-field`/`checkbox`.
- Nearly identical group/label/description/error shape to `checkbox` (see `plans/checkbox.md`) — build them together, factoring the shared context/slot-propagation pattern by hand-copying rather than a new cross-folder import (keep each folder self-contained per convention).
