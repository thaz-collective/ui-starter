import type { ListBoxProps as RACListBoxProps } from 'react-aria-components';
import { composeRenderProps, ListBox as RACListBox } from 'react-aria-components';

import { useSelectContext } from '#src/common/components/select/context';

export type ListBoxProps<T extends object> = RACListBoxProps<T>;

export function ListBox<T extends object>(props: ListBoxProps<T>) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select.ListBox must be used within a component that extends a SelectContextProvider');
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
