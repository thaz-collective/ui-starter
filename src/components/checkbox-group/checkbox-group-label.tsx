import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { Label as RACLabel } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type CheckboxGroupLabelProps = SetRequired<ComponentPropsWithRef<typeof RACLabel>, 'children'>;

export function CheckboxGroupLabel(props: CheckboxGroupLabelProps) {
  return (
    <RACLabel
      {...props}
      className={
        cn(
          'text-sm leading-none font-medium text-foreground',

          // required indicator
          'group-data-[required="true"]/field:after:ml-0.5 group-data-[required="true"]/field:after:content-["*"]',

          // invalid
          'group-data-[invalid="true"]/field:text-danger',

          // disabled
          'group-data-disabled/field:cursor-not-allowed group-data-disabled/field:opacity-50',

          props.className,
        ) ?? ''
      }
    />
  );
}
