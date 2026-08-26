import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { CheckboxField as RACCheckboxField, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const checkboxFieldVariants = tv({
  base: ['group/checkbox-field'],
});

type CheckboxFieldInnerProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACCheckboxField>, 'defaultSelected'>,
  'children'
> &
  VariantProps<typeof checkboxFieldVariants>;

export function CheckboxFieldInner(props: CheckboxFieldInnerProps) {
  const { className, ...fieldProps } = props;

  return (
    <RACCheckboxField
      {...fieldProps}
      className={composeRenderProps(className, (resolvedClassName, renderProps) => {
        return checkboxFieldVariants({ ...props, ...renderProps, className: resolvedClassName });
      })}
    />
  );
}
