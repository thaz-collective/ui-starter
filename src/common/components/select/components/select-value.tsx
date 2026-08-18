import type { SelectValueProps as RACSelectValueProps } from 'react-aria-components';
import { composeRenderProps, SelectValue as RACSelectValue } from 'react-aria-components';

import { useSelectContext } from '#src/common/components/select/context';

export type ValueProps<T extends object> = RACSelectValueProps<T>;

export function Value<T extends object>(props: ValueProps<T>) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select.Value must be used within a component that extends a SelectContextProvider');
  }

  const { slots } = context;

  return (
    <RACSelectValue
      {...props}
      data-slot="value"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.value({ ...props, ...renderProps, className });
      })}
    />
  );
}
