import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import {
  CheckboxButton as RACCheckboxButton,
  CheckboxField as RACCheckboxField,
  composeRenderProps,
} from 'react-aria-components';

import { checkboxButtonChildren } from './checkbox-button-children';
import { checkboxVariants } from './checkbox-variants';

type CheckboxGroupItemProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACCheckboxField>, 'defaultSelected' | 'isSelected' | 'onChange'>,
  'value' | 'children'
> &
  VariantProps<typeof checkboxVariants>;

export function CheckboxGroupItem(props: CheckboxGroupItemProps) {
  const { children, className, ...fieldProps } = props;

  return (
    <RACCheckboxField {...fieldProps}>
      <RACCheckboxButton
        className={composeRenderProps(className, (resolvedClassName, renderProps) => {
          return checkboxVariants({ ...props, ...renderProps, className: resolvedClassName });
        })}
      >
        {checkboxButtonChildren(children)}
      </RACCheckboxButton>
    </RACCheckboxField>
  );
}
