import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, TextField as RACTextField } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type TextFieldRootProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACTextField>, 'defaultValue'>,
  'value' | 'onChange' | 'children'
>;

export function TextFieldRoot(props: TextFieldRootProps) {
  return (
    <RACTextField
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/text-field group/field',
            'relative inline-flex flex-col gap-1',
            'w-full min-w-0',
            'border-0',
            'm-0 p-0',
            className,
          ) ?? ''
        );
      })}
    />
  );
}
