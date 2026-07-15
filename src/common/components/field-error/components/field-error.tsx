import type { ReactNode } from 'react';

import type { FieldErrorProps as RACFieldErrorProps } from 'react-aria-components';
import { composeRenderProps, FieldError as RACFieldError } from 'react-aria-components';

import type { FieldErrorVariants } from '#src/common/components/field-error/variants';
import { fieldErrorVariants } from '#src/common/components/field-error/variants';

export interface FieldErrorProps extends RACFieldErrorProps, FieldErrorVariants {
  children: ReactNode;
}

export function FieldError(props: FieldErrorProps) {
  return (
    <RACFieldError
      {...props}
      data-slot="field-error"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return fieldErrorVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
