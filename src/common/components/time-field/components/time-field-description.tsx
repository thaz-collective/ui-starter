import type { ReactNode } from 'react';

import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { useTimeFieldContext } from '#src/common/components/time-field/context';

const descriptionVariants = tv({
  base: [
    'group/description',

    'text-xs text-muted-foreground',
  ],
});

type DescriptionVariants = VariantProps<typeof descriptionVariants>;

export interface DescriptionProps extends Omit<RACTextProps, 'slot'>, DescriptionVariants {
  children: ReactNode;
}

export function Description(props: DescriptionProps) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeField.Description must be used within a component that extends a TimeFieldContextProvider');
  }

  const { slots } = context;

  const mergedProps = {
    ...props,
    className: slots.description({ ...props, className: props.className }),
  };

  return (
    <RACText
      {...mergedProps}
      data-slot="description"
      slot="description"
      className={descriptionVariants({ ...mergedProps })}
    />
  );
}
