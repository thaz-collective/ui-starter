import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useTagGroupContext } from '#src/common/components/tag-group/context';

const labelVariants = tv({
  base: ['text-sm leading-none font-medium', 'text-foreground', 'select-none'],
});

export type LabelProps = RACLabelProps;

export function Label(props: LabelProps) {
  const context = useTagGroupContext();

  if (context === undefined) {
    throw new Error('TagGroup.Label must be used within a component that extends a TagGroupContextProvider');
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
