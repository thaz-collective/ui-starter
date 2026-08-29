import type { ComponentPropsWithRef } from 'react';
import { useRef } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, Select as RACSelect } from 'react-aria-components';
import { cn } from 'tailwind-variants';

import { SelectTriggerRefContext } from './select-trigger-ref-context';

type SelectionMode = 'single' | 'multiple';

type SelectRootProps<T extends object, M extends SelectionMode = 'single'> = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACSelect<T, M>>, 'defaultValue'>,
  'value' | 'onChange' | 'children'
>;

export function SelectRoot<T extends object, M extends SelectionMode = 'single'>(props: SelectRootProps<T, M>) {
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <SelectTriggerRefContext value={triggerRef}>
      <RACSelect
        {...props}
        className={composeRenderProps(props.className, (className) => {
          return (
            cn(
              'group/select',

              'relative inline-flex flex-col',

              'm-0 w-full min-w-0 border-0 p-0',

              'gap-1',

              className,
            ) ?? ''
          );
        })}
      />
    </SelectTriggerRefContext>
  );
}
