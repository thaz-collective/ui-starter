# ComboBox

## What it is

A filterable/typeable select: text input + dropdown button, popover with a listbox of options, plus label/description/error.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/combobox.tsx`

## RAC primitives used

`ComboBox`, `Input`, `Button`, `Popover`, `ListBox` (+ item/section/header/collection) from `react-aria-components`.

## Public API

Compound object `ComboBox`:

- `Root` (`ComboBox`, also default export)
- `Label`, `Description`, `FieldError` (own inlined copies, following `text-field`'s pattern — no shared atoms exist)
- `Group` (the field-group wrapping input + trigger button, own inlined RAC `Group` wrap)
- `Input`
- `TriggerButton` (the caret button, reuses `Button` component)
- `Popover` (own inlined RAC `Popover` wrap)
- `ListBox`, `Item`, `Header`, `Section`, `Collection`

## Build steps

1. Create `src/common/components/combo-box/` with `context.ts`, `variants.ts`, `index.ts`, and matching `components/combo-box*.tsx` files (Root, Group, Input, TriggerButton, Popover, ListBox, Item, Header, Section, Collection, Label, Description, FieldError, ContextProvider).
2. `variants.ts`: `tv()` slots mirroring `select`'s (`root`, `group`, `input`, `triggerButton`, `popover`, `listBox`, `item`, `checkIndicator`, `header`, `label`, `description`, `fieldError`) — reuse the same invalid/disabled group-propagation pattern as `text-field`/`select`.
3. `components/combo-box.tsx` (Root): wrap RAC `ComboBox` directly, wrapped in context provider.
4. `components/combo-box-group.tsx`: own inlined wrap of RAC `Group` with its own bordered-box `tv()` base (there is no shared `group` folder anymore — `group` was deleted outright as dead code; follow `text-field-label-input-container.tsx`'s inlining pattern instead) — apply `slots.group`.
5. `components/combo-box-input.tsx`: wrap RAC `Input` directly with its own base `tv()`, matching `text-field-input.tsx`'s approach (no shared `input` atom exists).
6. `components/combo-box-trigger-button.tsx`: use our `Button` component (`variant="ghost"` `size="smIcon"`) with a chevron icon, like jolly's `<Button variant="ghost" size="icon">`.
7. `components/combo-box-popover.tsx`: own inlined wrap of RAC `Popover` (there is no shared top-level `popover` folder anymore — it now lives only internally inside `date-time-picker/components/`; duplicate its animation/positioning pattern here instead of importing it), width `w-[calc(var(--trigger-width)+4px)]`.
8. `-list-box.tsx`/`-item.tsx`/`-header.tsx`/`-section.tsx`/`-collection.tsx`: port from `select`'s equivalents (same visual language).
9. `-label.tsx`/`-description.tsx`/`-field-error.tsx`: same delegation pattern as `text-field`.
10. `index.ts`: `Object.assign(ComboBoxRoot, { Root, Label, Group, Input, TriggerButton, Popover, ListBox, Item, Header, Section, Collection, Description, FieldError })`.

## Dependencies

- Build **after `select`** (see `plans/select.md`) — port its trigger/popover/listbox styling wholesale (by duplicating the pattern into combo-box's own files, not importing), adjusting only for the text-input-plus-button group instead of a single trigger button.
- No shared atoms to reuse (`label`, `description`, `field-error`, `group`, `popover` are all inlined per-component now) — follow the same inlined pattern as `text-field`/`select`, plus reuse the already-migrated `Button` component directly.
