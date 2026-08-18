import type { ReactNode } from 'react';

import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { useDateTimePickerContext } from '#src/common/components/date-time-picker/context';

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
  const context = useDateTimePickerContext();

  if (context === undefined) {
    throw new Error(
      'DateTimePicker.FieldError must be used within a component that extends a DateTimePickerContextProvider',
    );
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
