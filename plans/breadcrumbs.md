# Breadcrumbs

## What it is
A horizontal trail of navigation links (`Home / Section / Current Page`) with separators and an optional overflow ellipsis.

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/breadcrumbs.tsx`

## RAC primitives used
`Breadcrumbs`, `Breadcrumb`, `Link` from `react-aria-components`.

## Public API
Compound object `Breadcrumbs`:
- `Root` (`Breadcrumbs`, also default export)
- `Item` (`Breadcrumb`, the `<li>`-equivalent wrapper)
- `Link`
- `Page` (a non-link current-page variant of `Link`, `href` omitted)
- `Separator` (presentational `<span>`, not a RAC primitive)
- `Ellipsis` (presentational `<span>` for collapsed/overflowed items)

## Build steps
1. Create `src/common/components/breadcrumbs/` with `variants.ts`, `index.ts`, and `components/breadcrumbs.tsx` (Root), `-item.tsx`, `-link.tsx`, `-page.tsx`, `-separator.tsx`, `-ellipsis.tsx`.
2. `variants.ts`: `tv()` slots — `root` (`flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground`), `item`, `link` (`data-hovered`, `data-disabled`, `data-current`), `page` (current-page styling, no interactive states), `separator` (`[&>svg]:size-3.5`), `ellipsis`.
3. `components/breadcrumbs.tsx` (Root): wrap RAC `Breadcrumbs` directly, generic `<T extends object>`.
4. `components/breadcrumbs-item.tsx`: thin styled wrap of RAC `Breadcrumb`.
5. `components/breadcrumbs-link.tsx`: wrap RAC `Link` directly (do **not** reuse the `link` folder's compound `Link` component — breadcrumb links need their own minimal hover/current/disabled styling, not the button-variant styling `Link` optionally supports).
6. `components/breadcrumbs-page.tsx`: same as `-link.tsx` but typed `Omit<AriaLinkProps, 'href'>` and styled as static text (current page, non-interactive-looking).
7. `components/breadcrumbs-separator.tsx`, `-ellipsis.tsx`: plain `<span role="presentation" aria-hidden>` wraps; default separator icon `lucide-react` `ChevronRight`, ellipsis icon `MoreHorizontal` with `sr-only` "More" text (swap from jolly's `@radix-ui/react-icons` to match this library's existing `lucide-react` usage in `number-field`/`calendar`).
8. `index.ts`: `Object.assign(BreadcrumbsRoot, { Root, Item, Link, Page, Separator, Ellipsis })`.

## Dependencies
None on other not-yet-migrated components. Simple, good early build.
