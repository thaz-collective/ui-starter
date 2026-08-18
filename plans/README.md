# Migration Plans Index

Migration plans for the 26 not-yet-migrated jolly-ui components, adapted to this library's copy-paste / compound-object / `tailwind-variants` conventions. Each `<name>.md` covers one jolly-ui source file (or, for `field` and `color`, documents a mapping/split instead of a 1:1 folder).

## Groups & suggested build order

### 0. Foundations to (re-)confirm first
- **[field.md](./field.md)** — not a new component; documents that jolly's shared `Label`/`FieldGroup`/`FieldError`/`FormDescription` primitives have **no shared-folder equivalent** in this library anymore — each composite inlines its own copy of each pattern, following `text-field`'s per-part files. Read this before starting any form-field-shaped component below.

### 1. Simple standalone leaves (no dependencies — build anytime, good warm-ups)
- **[separator.md](./separator.md)** — thin divider line.
- **[toolbar.md](./toolbar.md)** — layout container for grouping controls with arrow-key nav.
- **[dropzone.md](./dropzone.md)** — drag-and-drop target area.
- **[tabs.md](./tabs.md)** — tabbed interface (list/tab/panel).
- **[breadcrumbs.md](./breadcrumbs.md)** — navigation trail with separators.
- **[disclosure.md](./disclosure.md)** — expand/collapse section + accordion group.
- **[tree.md](./tree.md)** — hierarchical expandable list (flags RAC's `UNSTABLE_Tree` API).
- **[table.md](./table.md)** — full data table (header/column/body/row/cell).

### 2. Selection controls (pair up — near-identical group/label/error shape)
- **[checkbox.md](./checkbox.md)** — checkbox + group. Build with `radio-group`.
- **[radio-group.md](./radio-group.md)** — radio group. Build with `checkbox`.
- **[switch.md](./switch.md)** — boolean toggle switch. Build with `toggle`.
- **[toggle.md](./toggle.md)** — toggle button + group. Build with `switch`.

### 3. Value display (pair up — copy-identical markup)
- **[meter.md](./meter.md)** — bounded-value bar. Build with `progress`.
- **[progress.md](./progress.md)** — task-completion bar. Build with `meter`.
- **[slider.md](./slider.md)** — draggable-thumb range input.

### 4. Link/button-adjacent
- **[link.md](./link.md)** — anchor styled as text-link or button variant (depends on `button`, already migrated).

### 5. Overlays
- **[tooltip.md](./tooltip.md)** — hover/focus floating hint (inlines its own overlay animation classes, following the pattern used internally by `date-time-picker/components/popover.tsx`, rather than importing a shared `popover` folder).

### 6. Collections & pickers (build in this order — each later one ports patterns from the one before)
1. **[list-box.md](./list-box.md)** — foundation selectable list; item/section/header/collection shape reused by everything below.
2. **[select.md](./select.md)** — single-select dropdown (trigger + popover + listbox). Build after `list-box`.
3. **[combobox.md](./combobox.md)** — typeable/filterable select. Build after `select`, ports its trigger+popover+listbox styling.
4. **[menu.md](./menu.md)** — trigger-activated action menu with submenus. Build after `select`, ports item/section/header rendering.
5. **[grid-list.md](./grid-list.md)** — richer selectable/draggable row list. **Depends on `checkbox`** (section 2) for inline row-selection control.
6. **[tag-group.md](./tag-group.md)** — removable chip group. Build after `checkbox`/`radio-group` (section 2) for the well-worn group/label/description/error context pattern.

### 7. Fields (text-field-shaped)
- **[searchfield.md](./searchfield.md)** — search input with icon + clear button. Directly mirrors the already-migrated `text-field` folder shape.

### 8. Needs a splitting decision before coding
- **[color.md](./color.md)** — jolly's `color.tsx` bundles 5-6 unrelated color-picking primitives (field, area, slider, wheel, swatch/swatch-picker, top-level picker). Recommends splitting into separate top-level folders (`color-field`, `color-area`, `color-slider`, `color-wheel`, `color-swatch`, `color-picker`) rather than one compound, mirroring how this library already splits `date-field`/`date-picker`/`calendar`/`time-field` instead of one giant `Date` compound. **Confirm the split with the user before building any of it.**

## Judgment-call flags (double-check these)
- **`field.md`** — determined jolly's `field.tsx` needs no new folder at all; there's no shared `label`/`description`/`field-error`/`group` folder to map it onto anymore, so it documents the inlining pattern (per `text-field`'s own files) that every form-field-shaped component should copy instead. Worth a sanity check that this inlined pattern really does cover every jolly `field.tsx` use-site referenced by the other 25 plans.
- **`color.md`** — the one source file that doesn't map to a single concept; needs a 5-6-way folder split, described above.
- **`menu.md`** — deliberately drops jolly's `JollyMenu` all-in-one convenience wrapper (label + Button trigger + Menu bundled) in favor of exposing composable `Trigger`/`Root`/`Popover` parts only, consistent with this library not shipping "Jolly*"-style all-in-one wrappers elsewhere.
- **`tree.md`** — built on RAC's `UNSTABLE_Tree*` exports; confirm they're still present under that name in the installed `react-aria-components` version before starting.
