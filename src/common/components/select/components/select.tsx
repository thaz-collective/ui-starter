import type { ReactNode } from 'react';

import type { SelectProps as RACSelectProps } from 'react-aria-components';
import { composeRenderProps, Select as RACSelect } from 'react-aria-components';

import type { SelectVariants } from '#src/common/components/select/variants';
import { useSelectContext } from '#src/common/components/select/context';

import { SelectContextProvider } from './select-context-provider';

export interface SelectProps<T extends object> extends RACSelectProps<T>, SelectVariants {
  children: ReactNode;
}

export function Select<T extends object>(props: SelectProps<T>) {
  return (
    <SelectContextProvider {...props}>
      <SelectInner {...props} />
    </SelectContextProvider>
  );
}

function SelectInner<T extends object>(props: SelectProps<T>) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select must be used within a component that extends a SelectContextProvider');
  }

  const { slots } = context;

  return (
    <RACSelect
      {...props}
      data-slot="select"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
