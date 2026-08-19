import type { ReactNode } from 'react';

import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components';
import type { VariantProps } from 'tailwind-variants';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useNumberFieldContext } from '#src/common/components/number-field/context';

const fieldErrorVariants = tv({
  base: [
    'group/field-error',

    'text-xs text-danger',

    'hidden',
  ],
});

type FieldErrorVariants = VariantProps<typeof fieldErrorVariants>;

export interface FieldErrorProps extends RACFieldErrorProps, FieldErrorVariants {
  children: ReactNode;
}

export function FieldError(props: FieldErrorProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error('NumberField.FieldError must be used within a component that extends a NumberFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACFieldError
      {...props}
      data-slot="field-error"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const slotClassName = slots.fieldError({ ...props, ...renderProps, className });

        return fieldErrorVariants({ ...props, ...renderProps, className: slotClassName });
      })}
    />
  );
}
