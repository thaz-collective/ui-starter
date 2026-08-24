import type { ReactNode } from 'react';

import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components';
import type { VariantProps } from 'tailwind-variants';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const fieldErrorVariants = tv({
  base: [
    'group/field-error',

    'text-xs text-danger',

    'hidden',

    'group-data-[invalid="true"]/time-field:block',
  ],
});

interface FieldErrorProps extends RACFieldErrorProps, VariantProps<typeof fieldErrorVariants> {
  children: ReactNode;
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return fieldErrorVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
