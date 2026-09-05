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

          // hover
          'group-hover/field-container:text-primary-hover',
          'group-data-invalid/field:group-hover/field-container:text-danger-hover',

          // focused OR has a value → float up + shrink
          // (matches a plain <input> in focus/non-empty state, e.g. TextField/NumberField)
          'group-has-[input:focus]/field-container:top-1.5 group-has-[input:focus]/field-container:translate-y-0 group-has-[input:focus]/field-container:text-xs group-has-[input:focus]/field-container:text-primary',
          'group-has-[input:not(:placeholder-shown)]/field-container:top-1.5 group-has-[input:not(:placeholder-shown)]/field-container:translate-y-0 group-has-[input:not(:placeholder-shown)]/field-container:text-xs',
          // (matches a focused/filled date segment, e.g. TimeField, which has no <input>)
          'group-has-[[data-focused="true"]]/field-container:top-1.5 group-has-[[data-focused="true"]]/field-container:translate-y-0 group-has-[[data-focused="true"]]/field-container:text-xs group-has-[[data-focused="true"]]/field-container:text-primary',
          'group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/field-container:top-1.5 group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/field-container:translate-y-0 group-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/field-container:text-xs',

          // error + focused → error color wins over primary
          'group-data-invalid/field:group-has-[input:focus]/field-container:text-danger',
          'group-data-invalid/field:group-has-[[data-focused="true"]]/field-container:text-danger',

          // invalid (floated or not)
          'group-data-invalid/field:text-danger',

          // disabled
          'group-data-disabled/field:cursor-not-allowed',

          props.className,
        ) ?? ''
      }
      {...props}
    />
  );
}
