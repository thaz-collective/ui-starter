import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type FieldErrorProps = SetRequired<ComponentPropsWithRef<typeof RACFieldError>, 'children'>;

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/field-error hidden text-xs text-danger',

            'group-data-[invalid="true"]/field:block',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
