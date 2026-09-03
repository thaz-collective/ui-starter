import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, TextField as RACTextField } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type TextFieldRootProps = SetRequired<ComponentPropsWithRef<typeof RACTextField>, 'children'>;

export function TextFieldRoot(props: TextFieldRootProps) {
  return (
    <RACTextField
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/text-field group/field relative m-0 inline-flex w-full min-w-0 flex-col gap-1 border-0 p-0',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
