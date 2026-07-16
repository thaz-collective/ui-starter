import type { CSSProperties } from 'react';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_docs/colors')({
  component: RouteComponent,
});

// ---------------------------------------------------------------------------
// Swatch data
// ---------------------------------------------------------------------------

interface SwatchDef {
  label: string;
  bg: string;
  fg: string | null;
  hoverBg: string | null;
  borderBg: string | null;
  /** Whether this color has an inv (tinted/transparent) variant */
  hasInv: boolean;
}

const SWATCHES: SwatchDef[] = [
  { label: 'White', bg: '--white', fg: '--black', hoverBg: null, borderBg: null, hasInv: false },
  { label: 'Black', bg: '--black', fg: '--white', hoverBg: null, borderBg: null, hasInv: false },

  {
    label: 'Primary',
    bg: '--primary',
    fg: '--primary-foreground',
    hoverBg: '--primary-hover',
    borderBg: '--primary-border',
    hasInv: true,
  },
  {
    label: 'Secondary',
    bg: '--secondary',
    fg: '--secondary-foreground',
    hoverBg: '--secondary-hover',
    borderBg: '--secondary-border',
    hasInv: true,
  },
  {
    label: 'Success',
    bg: '--success',
    fg: '--success-foreground',
    hoverBg: '--success-hover',
    borderBg: '--success-border',
    hasInv: true,
  },
  {
    label: 'Warning',
    bg: '--warning',
    fg: '--warning-foreground',
    hoverBg: '--warning-hover',
    borderBg: '--warning-border',
    hasInv: true,
  },
  {
    label: 'Danger',
    bg: '--danger',
    fg: '--danger-foreground',
    hoverBg: '--danger-hover',
    borderBg: '--danger-border',
    hasInv: true,
  },

  {
    label: 'Muted',
    bg: '--muted',
    fg: '--muted-foreground',
    hoverBg: '--muted-hover',
    borderBg: '--muted-border',
    hasInv: false,
  },
  { label: 'Background', bg: '--background', fg: '--foreground', hoverBg: null, borderBg: null, hasInv: false },
  {
    label: 'Field',
    bg: '--field',
    fg: '--field-foreground',
    hoverBg: '--field-hover',
    borderBg: '--field-border',
    hasInv: false,
  },

  {
    label: 'Surface Default',
    bg: '--surface-default',
    fg: '--surface-default-foreground',
    hoverBg: '--surface-default-hover',
    borderBg: '--surface-default-border',
    hasInv: false,
  },
  {
    label: 'Surface Secondary',
    bg: '--surface-secondary',
    fg: '--surface-secondary-foreground',
    hoverBg: '--surface-secondary-hover',
    borderBg: '--surface-secondary-border',
    hasInv: false,
  },
  {
    label: 'Surface Tertiary',
    bg: '--surface-tertiary',
    fg: '--surface-tertiary-foreground',
    hoverBg: '--surface-tertiary-hover',
    borderBg: '--surface-tertiary-border',
    hasInv: false,
  },
  {
    label: 'Surface Quaternary',
    bg: '--surface-quaternary',
    fg: '--surface-quaternary-foreground',
    hoverBg: '--surface-quaternary-hover',
    borderBg: '--surface-quaternary-border',
    hasInv: false,
  },
  {
    label: 'Surface Quinary',
    bg: '--surface-quinary',
    fg: '--surface-quinary-foreground',
    hoverBg: '--surface-quinary-hover',
    borderBg: '--surface-quinary-border',
    hasInv: false,
  },
];

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

type SwatchCSSVars = CSSProperties & {
  '--swatch-bg': string;
  '--swatch-fg': string;
  '--swatch-hover'?: string;
  '--swatch-border'?: string;
};

function ChipPair({
  chipClass,
  hoverChipClass,
  hasHover,
}: {
  chipClass: string;
  hoverChipClass: string;
  hasHover: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <div className={chipClass}>{'Aa'}</div>
      {!hasHover && <div className="w-8" />}
      {hasHover && (
        <>
          <span className="text-[0.5rem] opacity-20 select-none">{'→'}</span>
          <div className={hoverChipClass} />
        </>
      )}
    </div>
  );
}

function BorderChip({ hasBorder }: { hasBorder: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      {!hasBorder && <div className="w-9" />}
      {hasBorder && <div className="size-9 rounded border-2 border-(--swatch-border) bg-transparent" />}
      <div className="w-8" />
    </div>
  );
}

function SwatchRow({ label, bg, fg, hoverBg, borderBg, hasInv }: SwatchDef) {
  const cssVars: SwatchCSSVars = {
    '--swatch-bg': `var(${bg})`,
    '--swatch-fg': `var(${fg ?? bg})`,
  };
  let baseChipClass =
    'size-9 rounded border border-black/10 flex items-center justify-center text-[0.6rem] font-bold select-none transition-colors duration-150 bg-(--swatch-bg) text-(color:--swatch-fg)';
  if (hoverBg) {
    cssVars['--swatch-hover'] = `var(${hoverBg})`;
    baseChipClass += ' hover:bg-(--swatch-hover) cursor-pointer';
  }
  if (borderBg) {
    cssVars['--swatch-border'] = `var(${borderBg})`;
  }

  return (
    <div
      style={cssVars}
      className="flex items-start gap-2.5"
    >
      <div className="flex shrink-0 flex-col gap-1">
        <ChipPair
          chipClass={baseChipClass}
          hoverChipClass="size-5 rounded-sm bg-(--swatch-hover) border border-black/10"
          hasHover={hoverBg !== null}
        />
        {hasInv && (
          <ChipPair
            chipClass="size-9 rounded border border-black/10 flex items-center justify-center text-[0.6rem] font-bold select-none transition-colors duration-150 cursor-pointer bg-[color-mix(in_oklab,var(--swatch-bg)_15%,transparent)] text-(color:--swatch-bg) hover:bg-[color-mix(in_oklab,var(--swatch-bg)_20%,transparent)]"
            hoverChipClass="size-5 rounded-sm border border-black/10 bg-[color-mix(in_oklab,var(--swatch-bg)_20%,transparent)]"
            hasHover={true}
          />
        )}
        <BorderChip hasBorder={borderBg !== null} />
      </div>

      <div className="min-w-0 pt-1.5">
        <p className="text-[0.72rem] leading-none font-medium">{label}</p>
        <p className="mt-0.5 font-mono text-[0.6rem] leading-none opacity-35">{`var(${bg})`}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-lg leading-none font-semibold">{'Colors'}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {'Semantic color tokens — base, hover, and inv (tinted) variants.'}
        </p>
      </div>

      <div className="rounded-xl border border-black/10 bg-background p-5 text-foreground">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
          {SWATCHES.map((s) => (
            <SwatchRow
              key={s.label}
              {...s}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
