import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
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

type FieldErrorProps = SetRequired<ComponentPropsWithRef<typeof RACFieldError>, 'children'> &
  VariantProps<typeof fieldErrorVariants>;

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
