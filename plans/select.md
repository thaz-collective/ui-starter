# Select

## What it is

A single-select dropdown: trigger button showing the current value, popover with a listbox of options, plus label/description/error.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/select.tsx`

## RAC primitives used

`Select`, `SelectValue`, `Button`, `Popover`, `ListBox` (+ `ListBoxItem`/`Section`/`Header`/`Collection`) from `react-aria-components`.

## Public API

Compound object `Select`:

- `Root` (`Select`, also default export)
- `Label`, `GroupDescription`, `FieldError` (own inlined copies, same pattern as `TextField` — no shared atoms exist)
- `Trigger` (the button)
- `Value` (`SelectValue`)
- `Popover`
- `ListBox`, `Item`, `Header`, `Section`, `Collection`

## Build steps

1. Create `src/common/components/select/` with `context.ts`, `variants.ts`, `index.ts`, and `components/select.tsx` (Root), `-trigger.tsx`, `-value.tsx`, `-popover.tsx`, `-list-box.tsx`, `-item.tsx`, `-header.tsx`, `-section.tsx`, `-collection.tsx`, `-label.tsx`, `-description.tsx`, `-field-error.tsx`, `-context-provider.tsx`.
2. `variants.ts`: `tv()` slots for `root`, `trigger` (bordered button, `data-[invalid=true]`/`data-[disabled=true]` propagated from root group like `text-field`), `value`, `popover`, `listBox`, `item`, `checkIndicator`, `header`, `label`, `description`, `fieldError`.
3. `context.ts`: `{ slots }`, same shape as `text-field`.
4. `components/select.tsx` (Root): wrap RAC `Select` directly, wrapped in context provider.
5. `components/select-trigger.tsx`: wrap RAC `Button`, render children + a chevron icon (`lucide-react` `ChevronsUpDown`).
6. `components/select-value.tsx`, `-popover.tsx`: own inlined wrap of RAC `Popover` for the popover (there is no shared top-level `popover` folder anymore — `popover` is now internal to `date-time-picker/components/`; duplicate its pattern the way `date-time-picker-popover.tsx` does internally, with a width override `w-[--trigger-width]`).
7. `components/select-list-box.tsx`/`-item.tsx`/`-header.tsx`/`-section.tsx`/`-collection.tsx`: same shape as `plans/list-box.md`'s parts — port the same styling rather than importing that folder, to keep `select` self-contained per convention.
8. `-label.tsx`/`-description.tsx`/`-field-error.tsx`: identical delegation pattern to `text-field`'s.
9. `index.ts`: `Object.assign(SelectRoot, { Root, Label, Trigger, Value, Popover, ListBox, Item, Header, Section, Collection, Description, FieldError })`.

## Dependencies

- No shared atoms to reuse — follow the same inlined label/description/field-error pattern as `text-field`, and inline its own `Popover` wrap following the pattern used internally by `date-time-picker/components/date-time-picker-popover.tsx`.
- Mirrors `list-box`'s item/section/header rendering — build `list-box` first (see `plans/list-box.md`) so its styling/behavior can be ported in without re-deriving it from jolly.
- `combobox` and `menu` (their plans) share this same trigger+popover+listbox shape — natural to build `select` first as the reference, then adapt for `combobox`/`menu`.
