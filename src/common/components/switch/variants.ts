import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const switchVariants = tv({
  slots: {
    root: [
      'group/switch',
      'inline-flex items-center gap-2',
      'text-sm leading-none font-medium',
      'data-disabled:cursor-not-allowed',
      'data-disabled:opacity-70',
    ],
    track: [
      'inline-flex h-5 w-9 shrink-0 items-center',
      'rounded-full border-2 border-transparent',
      'shadow-sm transition-colors',
      'cursor-pointer',
      'bg-field-border',
      'group-data-selected/switch:bg-primary',
      'group-data-focus-visible/switch:outline-none',
      'group-data-focus-visible/switch:ring-2',
      'group-data-focus-visible/switch:ring-ring',
      'group-data-focus-visible/switch:ring-offset-2',
      'group-data-focus-visible/switch:ring-offset-background',
      'group-data-disabled/switch:cursor-not-allowed',
      'group-data-readonly/switch:cursor-default',
    ],
    thumb: [
      'pointer-events-none block size-4 rounded-full',
      'bg-background shadow-lg ring-0',
      'transition-transform',
      'translate-x-0',
      'group-data-selected/switch:translate-x-4',
    ],
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
export type SlotsSwitchVariants = ReturnType<typeof switchVariants>;
export type RequiredSwitchVariants = Required<SetNonNullable<SwitchVariants>>;
