import type { ReactNode } from 'react';

import type { ComboBoxProps as RACComboBoxProps } from 'react-aria-components';
import { ComboBox as RACComboBox, composeRenderProps } from 'react-aria-components';

import type { ComboBoxVariants } from '#src/common/components/combo-box/variants';
import { useComboBoxContext } from '#src/common/components/combo-box/context';

import { ComboBoxContextProvider } from './combo-box-context-provider';

export interface ComboBoxProps<T extends object> extends RACComboBoxProps<T>, ComboBoxVariants {
  children: ReactNode;
}

export function ComboBox<T extends object>(props: ComboBoxProps<T>) {
  return (
    <ComboBoxContextProvider {...props}>
      <ComboBoxInner {...props} />
    </ComboBoxContextProvider>
  );
}

function ComboBoxInner<T extends object>(props: ComboBoxProps<T>) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox must be used within a component that extends a ComboBoxContextProvider');
  }

  const { slots } = context;

  return (
    <RACComboBox
      {...props}
      data-slot="combo-box"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
