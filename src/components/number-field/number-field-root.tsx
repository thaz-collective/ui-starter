import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, NumberField as RACNumberField } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type NumberFieldRootProps = SetRequired<ComponentPropsWithRef<typeof RACNumberField>, 'children'>;

export function NumberFieldRoot(props: NumberFieldRootProps) {
  return (
    <RACNumberField
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/number-field group/field relative m-0 inline-flex w-full min-w-0 flex-col gap-1 border-0 p-0',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
