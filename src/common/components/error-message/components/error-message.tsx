import type { ReactNode } from 'react';

import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';

import type { ErrorMessageVariants } from '#src/common/components/error-message/variants';
import { errorMessageVariants } from '#src/common/components/error-message/variants';

export interface ErrorMessageProps extends Omit<RACTextProps, 'slot'>, ErrorMessageVariants {
  children: ReactNode;
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <RACText
      {...props}
      data-slot="errorMessage"
      slot="errorMessage"
      className={errorMessageVariants({ ...props })}
    />
  );
}
