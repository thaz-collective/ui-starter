import type { ListBoxProps as RACListBoxProps } from 'react-aria-components';
import { composeRenderProps, ListBox as RACListBox } from 'react-aria-components';

import { useComboBoxContext } from '#src/common/components/combo-box/context';

export type ListBoxProps<T extends object> = RACListBoxProps<T>;

export function ListBox<T extends object>(props: ListBoxProps<T>) {
  const context = useComboBoxContext();

  if (context === undefined) {
    throw new Error('ComboBox.ListBox must be used within a component that extends a ComboBoxContextProvider');
  }

  const { slots } = context;

  return (
    <RACListBox
      {...props}
      data-slot="list-box"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.listBox({ ...props, ...renderProps, className });
      })}
    />
  );
}
