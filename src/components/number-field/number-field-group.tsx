import type { ComponentPropsWithRef } from 'react';

import { composeRenderProps, Group as RACGroup } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type NumberFieldGroupProps = ComponentPropsWithRef<typeof RACGroup>;

export function NumberFieldGroup(props: NumberFieldGroupProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return cn('group/number-field-group flex w-full items-stretch', className) ?? '';
      })}
    />
  );
}
