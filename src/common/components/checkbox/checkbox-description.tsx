import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Text as RACText } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const descriptionVariants = tv({
  base: [
    'group/description',

    'text-xs text-muted-foreground',

    'group-data-[invalid="true"]/checkbox-group:hidden',
  ],
});

type DescriptionProps = SetRequired<Omit<ComponentPropsWithRef<typeof RACText>, 'slot'>, 'children'> &
  VariantProps<typeof descriptionVariants>;

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
