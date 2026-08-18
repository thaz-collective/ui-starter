import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import { ChevronsUpDown } from 'lucide-react';
import { Button as RACButton, composeRenderProps } from 'react-aria-components';

import { useSelectContext } from '#src/common/components/select/context';

export type TriggerProps = RACButtonProps;

export function Trigger(props: TriggerProps) {
  const context = useSelectContext();

  if (context === undefined) {
    throw new Error('Select.Trigger must be used within a component that extends a SelectContextProvider');
  }

  const { slots } = context;

  return (
    <RACButton
      {...props}
      data-slot="trigger"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.trigger({ ...props, ...renderProps, className });
      })}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <ChevronsUpDown
            aria-hidden="true"
            className="size-4 shrink-0 opacity-50"
          />
        </>
      ))}
    </RACButton>
  );
}
