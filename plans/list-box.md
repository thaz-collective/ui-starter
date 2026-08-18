# ListBox

## What it is
A selectable list of items (single/multiple selection), the shared collection primitive reused by `Select`, `ComboBox`, and `Menu`'s popover content.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/list-box.tsx`

## RAC primitives used
`ListBox`, `ListBoxItem`, `Section`, `Header`, `Collection` from `react-aria-components`.

## Public API
Compound object `ListBox`:
- `Root` (`ListBox`, also default export)
- `Item`
- `Header`
- `Section`
- `Collection`

## Build steps
1. Create `src/common/components/list-box/` with `variants.ts`, `index.ts`, `components/list-box.tsx` (Root), `components/list-box-item.tsx`, `components/list-box-header.tsx`, `components/list-box-section.tsx`, `components/list-box-collection.tsx`.
2. `variants.ts`: `tv()` slots — `root` (scrollable box, `data-empty:` centered empty-state text), `item` (`data-disabled`, `data-focused`, `data-hovered`, `data-selection-mode` padding-right for the checkmark), `checkIndicator`, `header`. This is a standalone `tv()` (no `context.ts` needed — items don't need to read parent invalid/disabled state the way form fields do).
3. `components/list-box.tsx` (Root): wrap RAC `ListBox` directly, generic `<T extends object>`, apply `root` slot.
4. `components/list-box-item.tsx`: wrap RAC `ListBoxItem`, default `textValue` from string children (port jolly's fallback), render a check icon (`lucide-react` `Check`) absolutely positioned when `isSelected`.
5. `components/list-box-header.tsx` / `-section.tsx` / `-collection.tsx`: thin wraps of RAC `Header`/`Section`/`Collection` with `header` slot styling on the header only (`Section`/`Collection` are structural, no styling needed — match jolly which aliases these directly).
6. `index.ts`: `Object.assign(ListBoxRoot, { Root, Item, Header, Section, Collection })`.

## Dependencies
- None inbound. This is a **foundation component** — `select`, `combobox`, and `menu` (see their plans) all reuse the same item/section/collection/header shape and should either import this folder's parts directly (if cross-folder composite imports of a *sibling collection primitive* are acceptable — confirm with the team since the "self-contained" convention is about the label/input/description/error family, not necessarily about heavier collection primitives) or hand-copy the same item-rendering approach into their own folders to stay fully self-contained.
- **Build this first** among `list-box`/`select`/`combobox`/`menu`.
