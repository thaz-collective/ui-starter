import type { ReactNode } from 'react';

import type { NumberFieldProps as RACNumberFieldProps } from 'react-aria-components';
import { composeRenderProps, NumberField as RACNumberField } from 'react-aria-components';

import type { NumberFieldVariants } from '#src/common/components/number-field/variants';
import { useNumberFieldContext } from '#src/common/components/number-field/context';

import { NumberFieldContextProvider } from './number-field-context-provider';

export interface NumberFieldProps extends RACNumberFieldProps, NumberFieldVariants {
  children: ReactNode;
}

export function NumberField(props: NumberFieldProps) {
  return (
    <NumberFieldContextProvider {...props}>
      <NumberFieldInner {...props} />
    </NumberFieldContextProvider>
  );
}

function NumberFieldInner(props: NumberFieldProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error('NumberField must be used within a component that extends a NumberFieldContextProvider');
  }

  const { slots } = context;

  return (
    <RACNumberField
      data-slot="number-field"
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
