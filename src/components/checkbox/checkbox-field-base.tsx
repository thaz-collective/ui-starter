import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { CheckboxField as RACCheckboxField, composeRenderProps } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type CheckboxFieldBaseProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACCheckboxField>, 'defaultSelected'>,
  'children'
>;

export function CheckboxFieldBase(props: CheckboxFieldBaseProps) {
  return (
    <RACCheckboxField
      {...props}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/checkbox-field group/field flex flex-col gap-1',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
