import { tv } from 'tailwind-variants';

export const textAreaVariants = tv({
  base: [
    'min-w-0 flex-1',
    'px-3 pt-5 pb-1.5',
    'leading-normal',
    'bg-transparent',
    'text-sm text-foreground',
    'border-0 outline-none',
    'min-h-24 resize-y',
    'placeholder:text-muted-foreground/50',
    'placeholder:opacity-0',
    'placeholder:transition-opacity placeholder:duration-150',
    'data-[disabled]:cursor-not-allowed',
    'data-[disabled]:text-muted-foreground',
    'data-[readonly]:cursor-default',
    'data-[readonly]:resize-none',
  ],
});

// export type TextAreaVariants = VariantProps<typeof textAreaVariants>;
// export type SlotsTextAreaVariants = ReturnType<typeof textAreaVariants>;
// export type RequiredTextAreaVariants = Required<SetNonNullable<TextAreaVariants>>;
