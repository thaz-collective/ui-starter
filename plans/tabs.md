# Tabs

## What it is

A tabbed interface: tab list, individual tabs, and panels, horizontal or vertical.

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/tabs.tsx`

## RAC primitives used

`Tabs`, `TabList`, `Tab`, `TabPanel` from `react-aria-components`.

## Public API

Compound object `Tabs`:

- `Root` (`Tabs`, also default export)
- `List` (`TabList`)
- `Tab`
- `Panel` (`TabPanel`)

## Build steps

1. Create `src/common/components/tabs/` with `variants.ts`, `index.ts`, and `components/tabs.tsx` (Root), `-list.tsx`, `-tab.tsx`, `-panel.tsx`.
2. `variants.ts`: `tv()` slots — `root` (`flex flex-col gap-2`, `data-[orientation=vertical]:flex-row`), `list` (pill container, `data-[orientation=vertical]:flex-col`), `tab` (`data-selected`, `data-disabled`, `data-focus-visible`, `group-data-[orientation=vertical]:w-full`), `panel` (`data-focus-visible` ring).
3. `components/tabs.tsx` (Root): wrap RAC `Tabs` directly, `data-slot="tabs"`.
4. `components/tabs-list.tsx`: wrap RAC `TabList`, generic `<T extends object>`.
5. `components/tabs-tab.tsx`: wrap RAC `Tab` directly.
6. `components/tabs-panel.tsx`: wrap RAC `TabPanel` directly.
7. `index.ts`: `Object.assign(TabsRoot, { Root, List, Tab, Panel })`.

## Dependencies

None — self-contained, no context needed since RAC's `Tabs` internally manages selected-tab state and CSS data-attributes propagate via plain `group`/`group-data-*` classes (same technique as jolly, no React context required).
