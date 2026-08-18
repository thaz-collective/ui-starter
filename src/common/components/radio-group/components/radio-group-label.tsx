import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useRadioGroupContext } from '#src/common/components/radio-group/context';

const labelVariants = tv({
  base: ['text-sm leading-none font-medium', 'text-foreground'],
});

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  const context = useRadioGroupContext();

  if (context === undefined) {
    throw new Error('RadioGroup.Label must be used within a component that extends a RadioGroupContextProvider');
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
