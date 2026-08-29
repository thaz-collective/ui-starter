import type { ComponentPropsWithRef, MouseEvent } from 'react';
import { use } from 'react';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, Group as RACGroup, SelectStateContext } from 'react-aria-components';
import { cn } from 'tailwind-variants';

import { useSelectTriggerRef } from './select-trigger-ref-context';

type SelectTriggerGroupProps = SetRequired<ComponentPropsWithRef<typeof RACGroup>, 'children'>;

export function SelectTriggerGroup(props: SelectTriggerGroupProps) {
  const { ref, ...rest } = props;

  const state = use(SelectStateContext);
  const contextTriggerRef = useSelectTriggerRef();

  return (
    <RACGroup
      {...rest}
      ref={(instance) => {
        contextTriggerRef.current = instance;
        if (typeof ref === 'function') {
          ref(instance);
        } else if (ref !== null && ref !== undefined) {
          ref.current = instance;
        }
      }}
      onClick={(event: MouseEvent<HTMLDivElement>) => {
        props.onClick?.(event);

        if (!(event.target instanceof HTMLElement)) {
          return;
        }

        if (event.target.closest('button') || state === null || event.target.closest('[data-disabled="true"]')) {
          return;
        }

        state.toggle();
      }}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/trigger',

            'flex w-full min-w-0 flex-wrap items-center gap-1.5 rounded-md px-3 text-left text-sm outline-none',

            'text-foreground',

            'bg-field transition-colors duration-150',
            'border border-field-border',
            'data-hovered:border-primary-hover',
            'data-focus-visible:border-primary data-focus-visible:ring-1 data-focus-visible:ring-primary data-focus-visible:ring-inset',

            'data-disabled:cursor-not-allowed data-disabled:opacity-50',

            'group-data-[invalid="true"]/select:border-danger',
            'group-data-[invalid="true"]/select:data-hovered:border-danger-hover',
            'group-data-[invalid="true"]/select:data-focus-visible:border-danger',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
