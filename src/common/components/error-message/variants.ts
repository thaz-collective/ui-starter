import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const errorMessageVariants = tv({
  base: [
    'group/error-message',

    'text-xs text-danger',
  ],
});

export type ErrorMessageVariants = VariantProps<typeof errorMessageVariants>;
// export type SlotsErrorMessageVariants = ReturnType<typeof errorMessageVariants>;
// export type RequiredErrorMessageVariants = Required<SetNonNullable<ErrorMessageVariants>>;
