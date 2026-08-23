# Disclosure

## What it is

A single expand/collapse section (accordion item), plus a `DisclosureGroup` wrapper for stacking several with connected borders (an accordion).

## Source

`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/disclosure.tsx`

## RAC primitives used

`Disclosure`, `DisclosureGroup`, `DisclosurePanel`, `Button`, `Heading`, `DisclosureGroupStateContext` from `react-aria-components`.

## Public API

Compound object `Disclosure`:

- `Root` (`Disclosure`, also default export)
- `Header` (the clickable heading/trigger button, renders `children` + chevron)
- `Panel` (`DisclosurePanel`)
- `Group` (`DisclosureGroup`, for stacking multiple `Disclosure`s as an accordion)

## Build steps

1. Create `src/common/components/disclosure/` with `variants.ts`, `index.ts`, and `components/disclosure.tsx` (Root), `-header.tsx`, `-panel.tsx`, `-group.tsx`.
2. `variants.ts`: `tv()` slots — `root` (`min-w-64`, border-bottom applied only when inside a group — see step 3), `header` (button row: hover underline, `data-disabled`, `data-focus-visible` ring), `chevron` (`group-data-expanded:rotate-180`), `panel` (`overflow-hidden text-sm transition-all`, inner padding), `group`.
3. `components/disclosure.tsx` (Root): wrap RAC `Disclosure` directly. Port jolly's `useContext(DisclosureGroupStateContext) !== null` check to conditionally apply the "connected accordion" border style (`border-0 border-b last:border-b-0`) only when nested in a `Group` — this is standard RAC context consumption, not a violation of the self-contained-folder convention (it's RAC's own context, not a cross-folder shared-primitive import).
4. `components/disclosure-header.tsx`: wrap in RAC `Heading`, inner `Button slot="trigger"`, render `children` + a `lucide-react` `ChevronDown` icon that rotates via `group-data-expanded`.
5. `components/disclosure-panel.tsx`: wrap RAC `DisclosurePanel` directly, inner padded div for content.
6. `components/disclosure-group.tsx`: wrap RAC `DisclosureGroup` directly.
7. `index.ts`: `Object.assign(DisclosureRoot, { Root, Header, Panel, Group })`.

## Dependencies

None on other not-yet-migrated components — self-contained via RAC's own `DisclosureGroupStateContext`.
