import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, ListBox as RACListBox } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const listBoxVariants = tv({
  base: [
    'flex max-h-[inherit] w-full min-w-0 flex-col gap-1 overflow-auto p-1 outline-none',
    'data-empty:items-center data-empty:justify-center data-empty:p-6 data-empty:text-sm data-empty:text-muted-foreground',
  ],
});

type SelectListBoxProps<T extends object> = ComponentPropsWithRef<typeof RACListBox<T>>;

export function SelectListBox<T extends object>(props: SelectListBoxProps<T>) {
  return (
    <RACListBox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return listBoxVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
