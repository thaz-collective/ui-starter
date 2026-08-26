import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { Check, Minus } from 'lucide-react';
import {
  CheckboxButton as RACCheckboxButton,
  CheckboxField as RACCheckboxField,
  composeRenderProps,
} from 'react-aria-components';

import { boxVariants, checkboxVariants } from './checkbox-variants';

interface CheckboxItemInnerProps
  extends
    SetRequired<
      Omit<ComponentPropsWithRef<typeof RACCheckboxField>, 'defaultSelected' | 'value'>,
      'isSelected' | 'onChange' | 'children'
    >,
    VariantProps<typeof checkboxVariants> {}

export function CheckboxItemInner(props: CheckboxItemInnerProps) {
  const { children, className, ...fieldProps } = props;

  return (
    <RACCheckboxField {...fieldProps}>
      <RACCheckboxButton
        className={composeRenderProps(className, (resolvedClassName, renderProps) => {
          return checkboxVariants({ ...props, ...renderProps, className: resolvedClassName });
        })}
      >
        {composeRenderProps(children, (renderedChildren, renderProps) => {
          return (
            <>
              <span className={boxVariants()}>
                {renderProps.isIndeterminate && <Minus className="size-3.5" />}
                {!renderProps.isIndeterminate && renderProps.isSelected && <Check className="size-3.5" />}
              </span>
              {renderedChildren}
            </>
          );
        })}
      </RACCheckboxButton>
    </RACCheckboxField>
  );
}
