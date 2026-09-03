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
          'group/label pointer-events-none absolute top-0 left-0 z-1 block overflow-hidden pt-0 pl-2.5 text-sm leading-none font-medium text-ellipsis whitespace-nowrap text-field-foreground transition-all duration-150 select-none',

          // required indicator
          // 'group-data-[required="true"]/field:after:content-["*"]',
          // 'group-data-[required="true"]/field:after:ml-0.5',

          // hover
          'group-hover/field-container:text-primary-hover',
          // 'group-data-[invalid="true"]/field:group-hover/field-container:text-danger-hover',

          // input focused → float up
          // 'group-has-[input:focus]/field-container:top-1.5',
          // 'group-has-[input:focus]/field-container:translate-x-3',
          'group-has-[input:focus]/field-container:translate-y-2',
          // 'group-has-[input:focus]/field-container:scale-0',
          'group-has-[input:focus]/field-container:text-xs',
          'group-has-[input:focus]/field-container:text-primary',

          // error + focused → error color wins
          // 'group-data-[invalid="true"]/field:group-has-[input:focus]/field-container:text-danger',
          // 'group-data-[invalid="true"]/field:group-has-[textarea:focus]/field-container:text-danger',

          // has value → float up
          // 'group-has-[input:not(:placeholder-shown)]/field-container:top-1.5',
          // 'group-has-[input:not(:placeholder-shown)]/field-container:translate-y-0',
          // 'group-has-[input:not(:placeholder-shown)]/field-container:text-xs',

          // invalid
          // 'group-data-[invalid="true"]/field:text-danger',

          // disabled
          // 'group-data-[disabled="true"]/field:cursor-not-allowed',

          props.className,
        ) ?? ''
      }
      {...props}
    />
  );
}
