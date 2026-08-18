import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useDateFieldContext } from '#src/common/components/date-field/context';

const labelVariants = tv({
  base: [
    'absolute left-3 z-10',
    'top-1/2 -translate-y-1/2',
    'text-sm leading-none font-medium',
    'text-muted-foreground',
    'pointer-events-none select-none',
    'transition-all duration-150',
  ],
});

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateField.Label must be used within a component that extends a DateFieldContextProvider');
  }

  const { slots } = context;

  const mergedProps = {
    ...props,
    className: slots.label({ ...props, className: props.className }),
  };

  return (
    <RACLabel
      {...mergedProps}
      data-slot="label"
      className={labelVariants({ ...mergedProps })}
    />
  );
}
