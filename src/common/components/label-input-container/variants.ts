import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const labelInputContainerVariants = tv({
  base: [
    'group/label-input-container',
    'relative flex items-stretch',
    'rounded-md',
    'bg-field',
    'transition-colors duration-150',

    'border border-field-border',
    'focus-within:border-primary hover:border-primary-hover',
  ],
});

export type LabelInputContainerVariants = VariantProps<typeof labelInputContainerVariants>;
// export type SlotsLabelInputContainerMessageVariants = ReturnType<typeof LabelInputContainerVariants>;
// export type RequiredLabelInputContainerMessageVariants = Required<SetNonNullable<LabelInputContainerMessageVariants>>;
