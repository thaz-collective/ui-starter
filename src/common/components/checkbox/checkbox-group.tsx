import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { CheckboxGroup as RACCheckboxGroup, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const checkboxGroupVariants = tv({
  base: ['group/checkbox-group', 'flex flex-col gap-2'],
});

type CheckboxGroupProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACCheckboxGroup>, 'defaultValue'>,
  'value' | 'onChange' | 'children'
> &
  VariantProps<typeof checkboxGroupVariants>;

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <RACCheckboxGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return checkboxGroupVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
