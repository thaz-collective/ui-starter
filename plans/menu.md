# Menu

## What it is
A trigger-activated dropdown action menu, with items, submenus, sections, separators, keyboard-shortcut hints.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/menu.tsx`

## RAC primitives used
`MenuTrigger`, `SubmenuTrigger`, `Menu`, `MenuItem`, `Header`, `Separator`, `Keyboard`, `Popover` from `react-aria-components`.

## Public API
Compound object `Menu`:
- `Root` (`Menu`, the item list itself — also default export)
- `Trigger` (`MenuTrigger`)
- `SubTrigger` (`SubmenuTrigger`)
- `Popover`
- `Item`
- `Header`
- `Separator`
- `Keyboard`
- `Section`, `Collection`

## Build steps
1. Create `src/common/components/menu/` with `variants.ts`, `index.ts`, and `components/menu.tsx` (Root), `-trigger.tsx`, `-sub-trigger.tsx`, `-popover.tsx`, `-item.tsx`, `-header.tsx`, `-separator.tsx`, `-keyboard.tsx`, `-section.tsx`, `-collection.tsx`.
2. `variants.ts`: `tv()` slots — `root` (the menu list container), `item` (`data-disabled`, `data-focused`, `data-selection-mode` left-padding for selection icon), `checkIndicator`/`radioIndicator` (single vs multiple selection icon), `submenuIcon`, `header`, `separator`, `keyboard`, `popover`. No `context.ts` needed — items don't need to read invalid/disabled form state (menu isn't a form field).
3. `components/menu-trigger.tsx`, `-sub-trigger.tsx`: thin pass-throughs of RAC `MenuTrigger`/`SubmenuTrigger` (no styling, structural only, like jolly).
4. `components/menu-popover.tsx`: own inlined wrap of RAC `Popover` (there is no shared top-level `popover` folder anymore — `popover` now lives only as an internal file inside `date-time-picker/components/`; duplicate that pattern into `menu`'s own file rather than importing it), `w-auto`.
5. `components/menu.tsx` (Root): wrap RAC `Menu` directly, generic `<T extends object>`.
6. `components/menu-item.tsx`: wrap RAC `MenuItem`, default `textValue` fallback, render selection indicator (dot for `selectionMode="single"`, check for `"multiple"`) plus a trailing chevron when `hasSubmenu`.
7. `-header.tsx`/`-separator.tsx`/`-keyboard.tsx`/`-section.tsx`/`-collection.tsx`: thin styled wraps.
8. `index.ts`: `Object.assign(MenuRoot, { Root, Trigger, SubTrigger, Popover, Item, Header, Separator, Keyboard, Section, Collection })`.

## Dependencies
- No shared `popover` atom to reuse — inline its own `Popover` wrap, following the pattern used internally by `date-time-picker/components/popover.tsx`.
- Shares its item/section/header rendering approach with `list-box` and `select` — build `select` first (see `plans/select.md`) and port the pattern rather than re-deriving it.
- Does **not** need a `Button` for the trigger by default (jolly's `JollyMenu` convenience wrapper bundles a `Button` trigger, but our convention exposes `Trigger`/`Root`/`Popover` as composable parts instead of one all-in-one `JollyMenu`-style component — consumers compose their own `Button` inside `Menu.Trigger`). Flagged as a deliberate deviation from jolly's `JollyMenu`.
