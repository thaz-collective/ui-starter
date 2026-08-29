import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const dynamicGlobalFilterVariants = tv({
  slots: {
    trigger: 'flex items-center gap-1.5',
    triggerCount: 'text-xs opacity-70',
    popover: [
      'border-border w-96 rounded-lg border bg-surface-default text-surface-default-foreground shadow-lg',
      'outline-none',
      'transition-[opacity,transform] duration-150',
      'data-entering:scale-95 data-entering:opacity-0',
      'data-exiting:scale-95 data-exiting:opacity-0',
    ],
    dialog: 'flex flex-col gap-3 p-3 outline-none',
    group: 'flex flex-col gap-2',
    separator: 'my-1',
    row: 'flex items-center gap-1.5',
    rowControls: 'flex flex-1 items-center gap-1.5',
    removeButton: 'shrink-0',
    footer: 'border-border flex items-center justify-between gap-2 border-t pt-3',
    emptyState: 'text-sm opacity-70',
  },
});

export type DynamicGlobalFilterVariants = VariantProps<typeof dynamicGlobalFilterVariants>;
export type SlotsDynamicGlobalFilterVariants = ReturnType<typeof dynamicGlobalFilterVariants>;
export type RequiredDynamicGlobalFilterVariants = Required<SetNonNullable<DynamicGlobalFilterVariants>>;
