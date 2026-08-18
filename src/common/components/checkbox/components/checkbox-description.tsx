import type { ReactNode } from 'react';

import type { TextProps as RACTextProps } from 'react-aria-components';
import type { VariantProps } from 'tailwind-variants';
import { Text as RACText } from 'react-aria-components';
import { tv } from 'tailwind-variants';

import { useCheckboxGroupContext } from '#src/common/components/checkbox/context';

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
  const context = useCheckboxGroupContext();

  if (context === undefined) {
    throw new Error('Checkbox.Description must be used within a component that extends a CheckboxGroupContextProvider');
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
