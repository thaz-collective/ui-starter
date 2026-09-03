import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { Text as RACText } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type DescriptionProps = SetRequired<Omit<ComponentPropsWithRef<typeof RACText>, 'slot'>, 'children'>;

export function Description(props: DescriptionProps) {
  return (
    <RACText
      {...props}
      slot="description"
      className={cn(
        'group/description block text-xs text-field-foreground',

        'group-data-[invalid="true"]/field:hidden',

        props.className,
      )}
    />
  );
}
