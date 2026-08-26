import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, SelectValue as RACSelectValue } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const valueVariants = tv({
  base: [
    'min-w-0 flex-1 truncate',

    'data-placeholder:text-muted-foreground',

    'transition-opacity duration-150',
    'data-placeholder:opacity-0',
    'group-data-open/select:data-placeholder:opacity-100',
  ],
});

type SelectValueProps<T extends object> = ComponentPropsWithRef<typeof RACSelectValue<T>>;

export function SelectValue<T extends object>(props: SelectValueProps<T>) {
  return (
    <RACSelectValue
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return valueVariants({ ...props, ...renderProps, className });
      })}
    >
      {(renderProps) => (
        <span
          className="contents"
          data-has-value={!renderProps.isPlaceholder}
        >
          {renderProps.defaultChildren}
        </span>
      )}
    </RACSelectValue>
  );
}
