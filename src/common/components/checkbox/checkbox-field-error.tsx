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

    'group-data-[invalid="true"]/checkbox-group:block',
    'group-data-[invalid="true"]/checkbox-field:block',
  ],
});

type FieldErrorProps = SetRequired<ComponentPropsWithRef<typeof RACFieldError>, 'children'> &
  VariantProps<typeof fieldErrorVariants>;

export function FieldError(props: FieldErrorProps) {
  const { className, ...fieldErrorProps } = props;

  return (
    <RACFieldError
      {...fieldErrorProps}
      className={composeRenderProps(className, (resolvedClassName, renderProps) => {
        return fieldErrorVariants({ ...props, ...renderProps, className: resolvedClassName });
      })}
    />
  );
}
