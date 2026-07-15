import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const fieldErrorVariants = tv({
  base: [
    'group/field-error',

    'text-xs text-danger',

    'hidden',
  ],
});

export type FieldErrorVariants = VariantProps<typeof fieldErrorVariants>;
// export type SlotsFieldErrorMessageVariants = ReturnType<typeof fieldErrorMessageVariants>;
// export type RequiredFieldErrorMessageVariants = Required<SetNonNullable<FieldErrorMessageVariants>>;
