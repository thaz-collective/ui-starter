import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { CheckboxGroup as RACCheckboxGroup, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const checkboxGroupRootVariants = tv({
  base: ['group/checkbox-group group/field flex gap-2'],
  defaultVariants: {
    orientation: 'vertical',
  },
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row flex-wrap items-center gap-x-4',
    },
  },
});

type CheckboxGroupRootProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACCheckboxGroup>, 'defaultValue'>,
  'value' | 'onChange' | 'children'
> &
  VariantProps<typeof checkboxGroupRootVariants>;

export function CheckboxGroupRoot(props: CheckboxGroupRootProps) {
  const { orientation, ...groupProps } = props;

  return (
    <RACCheckboxGroup
      {...groupProps}
      data-orientation={orientation ?? 'vertical'}
      className={composeRenderProps(props.className, (className) => {
        return checkboxGroupRootVariants({ ...props, className });
      })}
    />
  );
}
