import type { ReactNode } from 'react';

import type { CheckboxGroupProps as RACCheckboxGroupProps } from 'react-aria-components';
import { CheckboxGroup as RACCheckboxGroup, composeRenderProps } from 'react-aria-components';

import type { CheckboxVariants } from '#src/common/components/checkbox/variants';
import { useCheckboxGroupContext } from '#src/common/components/checkbox/context';

import { CheckboxGroupContextProvider } from './checkbox-group-context-provider';

export interface CheckboxGroupProps extends RACCheckboxGroupProps, CheckboxVariants {
  children: ReactNode;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <CheckboxGroupContextProvider {...props}>
      <CheckboxGroupInner {...props} />
    </CheckboxGroupContextProvider>
  );
}

function CheckboxGroupInner(props: CheckboxGroupProps) {
  const context = useCheckboxGroupContext();

  if (context === undefined) {
    throw new Error('CheckboxGroup must be used within a component that extends a CheckboxGroupContextProvider');
  }

  const { slots } = context;

  return (
    <RACCheckboxGroup
      {...props}
      data-slot="checkbox-group"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.group({ ...props, ...renderProps, className });
      })}
    />
  );
}
