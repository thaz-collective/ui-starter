import type { ListBoxProps as RACListBoxProps } from 'react-aria-components';
import { composeRenderProps, ListBox as RACListBox } from 'react-aria-components';

import { listBoxVariants } from '#src/common/components/list-box/variants';

export type ListBoxProps<T extends object> = RACListBoxProps<T>;

export function ListBox<T extends object>(props: ListBoxProps<T>) {
  const { root } = listBoxVariants();

  return (
    <RACListBox
      {...props}
      data-slot="list-box"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return root({ ...renderProps, className });
      })}
    />
  );
}
