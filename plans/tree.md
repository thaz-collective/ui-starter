# Tree

## What it is
An expandable/collapsible hierarchical list (nested tree of rows), with expand-chevron and optional info-button per row.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/tree.tsx`

## RAC primitives used
`UNSTABLE_Tree`, `UNSTABLE_TreeItem`, `UNSTABLE_TreeItemContent`, `Button` from `react-aria-components` (RAC's tree API is still marked unstable upstream — flag this to the user before relying on it in production).

## Public API
Compound object `Tree`:
- `Root` (`Tree`, also default export)
- `Item`
- `ItemContent`
- `ExpandButton`
- `InfoButton`

## Build steps
1. Create `src/common/components/tree/` with `variants.ts`, `index.ts`, and `components/tree.tsx` (Root), `-item.tsx`, `-item-content.tsx`, `-expand-button.tsx`, `-info-button.tsx`.
2. `variants.ts`: `tv()` slots — `root`, `item` (`data-disabled`, `data-focus-visible`, uses `--tree-item-level` CSS var for indentation, `data-[has-child-rows]` alternate indent), `expandChevron` (`group-data-expanded:rotate-90`), `infoIcon`.
3. `components/tree.tsx` (Root): wrap RAC `UNSTABLE_Tree` directly, generic `<T extends object>` — alias the import as `Tree` internally but keep the `UNSTABLE_` origin noted in a code comment since it may rename on RAC upgrade.
4. `components/tree-item-content.tsx`: thin pass-through of `UNSTABLE_TreeItemContent`.
5. `components/tree-item.tsx`: wrap `UNSTABLE_TreeItem`, apply `item` slot with the indentation logic from jolly's `pl-[calc(...)]`.
6. `components/tree-expand-button.tsx`: RAC `Button slot="chevron"` with a `lucide-react` `ChevronRight` icon rotated on `group-data-expanded`.
7. `components/tree-info-button.tsx`: RAC `Button` with an `Info` icon, `aria-label="Info"`.
8. `index.ts`: `Object.assign(TreeRoot, { Root, Item, ItemContent, ExpandButton, InfoButton })`.

## Dependencies
None on other planned components. Note the RAC `UNSTABLE_*` API surface as a risk/flag item — confirm the installed `react-aria-components` version still exports these names before starting.
