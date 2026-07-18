import { tv } from 'tailwind-variants';

export const popoverVariants = tv({
  base: [
    'border-border rounded-lg border bg-surface-default text-surface-default-foreground shadow-lg',
    'outline-none',
    'transition-[opacity,transform] duration-150',
    'data-entering:scale-95 data-entering:opacity-0',
    'data-exiting:scale-95 data-exiting:opacity-0',
  ],
});

// export type PopoverVariants = VariantProps<typeof popoverVariants>;
// export type SlotsPopoverVariants = ReturnType<typeof popoverVariants>;
// export type RequiredPopoverVariants = Required<SetNonNullable<PopoverVariants>>;
