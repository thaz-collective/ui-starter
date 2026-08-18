# Link

## What it is
A styled anchor that behaves like a link but can optionally look like a `Button` (variant/size).

## Source
`/home/maethron/codingProjects/opensource/jolly-ui/src/registry/new-york/ui/link.tsx`

## RAC primitives used
`Link` from `react-aria-components`.

## Public API
Single component (not compound): `Link`.
- `LinkProps extends RACLinkProps, ButtonVariants` (reuse `ButtonVariants` from the `button` folder's `variants.ts` rather than redefining variant/size).

## Build steps
1. Create `src/common/components/link/` with `components/link.tsx`, `index.ts`, `variants.ts` (thin — see step 3).
2. `components/link.tsx`: wrap RAC `Link` directly (no shared "primitive" indirection needed — this is a leaf component like `Button`). Use `composeRenderProps` for className.
3. `variants.ts`: do NOT duplicate button styling — import `buttonVariants` (and its `ButtonVariants` type) from `#src/common/components/button/variants` and apply it conditionally when `variant` is passed, exactly like jolly's `variant && buttonVariants({...})`. When no variant given, fall back to simple text-link styles (color, underline-on-hover, focus ring) defined locally.
4. Support `data-current`/`data-hovered`/`data-disabled` RAC render props for style hooks even in the plain-text-link style.
5. `index.ts`: export `Link`, `LinkProps`.

## Dependencies
- Reuses `button`'s `buttonVariants`/`ButtonVariants` (already migrated) — build this after confirming `button` variants are stable, no other component blocks it.
