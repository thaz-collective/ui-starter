import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { Label as RACLabel } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type LabelProps = SetRequired<ComponentPropsWithRef<typeof RACLabel>, 'children'>;

export function Label(props: LabelProps) {
  return (
    <RACLabel
      className={
        cn(
          'group/label pointer-events-none absolute top-1/2 left-2.5 z-1 block max-w-[calc(100%-1.25rem)] -translate-y-1/2 overflow-hidden text-sm leading-none font-medium text-ellipsis whitespace-nowrap text-field-foreground transition-all duration-150 select-none',

          // required indicator
          'group-data-required/field:after:ml-0.5 group-data-required/field:after:content-["*"]',

          // float the label
          'group-has-[[data-focused="true"],input[placeholder]:not(:placeholder-shown),[data-type]:not([data-type="literal"]):not([data-placeholder])]/field-container:top-1.5 group-has-[[data-focused="true"],input[placeholder]:not(:placeholder-shown),[data-type]:not([data-type="literal"]):not([data-placeholder])]/field-container:translate-y-0 group-has-[[data-focused="true"],input[placeholder]:not(:placeholder-shown),[data-type]:not([data-type="literal"]):not([data-placeholder])]/field-container:text-xs',

          // focused
          'group-has-[[data-focused="true"]]/field-container:text-primary',

          // disabled
          'group-data-disabled/field:cursor-not-allowed',

          // invalid
          'group-data-invalid/field:text-danger',

          // hover
          'group-data-hovered/field-container:text-primary-hover',
          'group-data-invalid/field:group-data-hovered/field-container:text-danger-hover',

          // error + focused
          'group-data-invalid/field:group-has-[[data-focused="true"]]/field-container:text-danger',

          props.className,
        ) ?? ''
      }
      {...props}
    />
  );
}
