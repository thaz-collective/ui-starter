import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useSearchFieldContext } from '#src/common/components/search-field/context';

const labelVariants = tv({
  base: ['text-sm leading-none font-medium', 'text-foreground', 'select-none'],
});

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  const context = useSearchFieldContext();

  if (context === undefined) {
    throw new Error('SearchField.Label must be used within a component that extends a SearchFieldContextProvider');
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
