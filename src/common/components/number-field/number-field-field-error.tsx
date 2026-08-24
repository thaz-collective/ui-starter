import type { ReactNode, ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const fieldErrorVariants = tv({
  base: [
    'group/field-error',

    'text-xs text-danger',

    'hidden',

    'group-data-[invalid="true"]/number-field:block',
  ],
});

interface FieldErrorProps extends ComponentPropsWithRef<typeof RACFieldError>, VariantProps<typeof fieldErrorVariants> {
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
