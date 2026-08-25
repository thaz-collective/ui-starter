import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, SelectValue as RACSelectValue } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const valueVariants = tv({
  base: ['min-w-0 flex-1 truncate', 'data-[placeholder]:text-muted-foreground'],
});

type SelectValueProps<T extends object> = ComponentPropsWithRef<typeof RACSelectValue<T>>;

export function SelectValue<T extends object>(props: SelectValueProps<T>) {
  return (
    <RACSelectValue
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return valueVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
