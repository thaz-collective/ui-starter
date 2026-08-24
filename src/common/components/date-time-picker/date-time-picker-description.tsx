import type { ReactNode, ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { Text as RACText } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const descriptionVariants = tv({
  base: [
    'group/description',

    'text-xs text-muted-foreground',

    'group-data-[invalid="true"]/date-time-picker:hidden',
  ],
});

interface DescriptionProps
  extends Omit<ComponentPropsWithRef<typeof RACText>, 'slot'>, VariantProps<typeof descriptionVariants> {
  children: ReactNode;
}

export function Description(props: DescriptionProps) {
  return (
    <RACText
      {...props}
      slot="description"
      className={descriptionVariants({
        ...props,
      })}
    />
  );
}
