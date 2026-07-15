import type { ReactNode } from 'react';

import type { TextFieldProps as RACTextFieldProps } from 'react-aria-components';
import { composeRenderProps, TextField as RACTextField } from 'react-aria-components';

import type { TextFieldVariants } from '#src/common/components/text-field/variants';
import { useTextFieldContext } from '#src/common/components/text-field/context';

import { TextFieldContextProvider } from './text-field-context-provider';

export interface TextFieldProps extends RACTextFieldProps, TextFieldVariants {
  children: ReactNode;
}

export function TextField(props: TextFieldProps) {
  return (
    <TextFieldContextProvider {...props}>
      <TextFieldInner {...props} />
    </TextFieldContextProvider>
  );
}

function TextFieldInner(props: TextFieldProps) {
  const context = useTextFieldContext();

  if (context === undefined) {
    throw new Error('TextField must be used within a component that extends a TextFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACTextField
      {...props}
      data-slot="text-field"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
