import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { Check, Minus } from 'lucide-react';
import { CheckboxButton as RACCheckboxButton, composeRenderProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const checkboxButtonVariants = tv({
  base: [
    'group/checkbox-button',
    'flex items-center gap-2',
    'text-foreground',
    'data-disabled:cursor-not-allowed data-disabled:opacity-50',
  ],
});

const boxVariants = tv({
  base: [
    'flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current shadow-sm',

    'group-data-focus-visible/checkbox-button:outline-none',
    'group-data-focus-visible/checkbox-button:ring-1',
    'group-data-focus-visible/checkbox-button:ring-ring',

    'group-data-selected/checkbox-button:bg-primary',
    'group-data-selected/checkbox-button:text-primary-foreground',

    'group-data-indeterminate/checkbox-button:bg-primary',
    'group-data-indeterminate/checkbox-button:text-primary-foreground',

    'group-data-invalid/checkbox-button:border-danger',

    'group-data-invalid/checkbox-button:group-data-selected/checkbox-button:bg-danger',
    'group-data-invalid/checkbox-button:group-data-selected/checkbox-button:text-danger-foreground',

    'group-data-invalid/checkbox-button:group-data-indeterminate/checkbox-button:bg-danger',
    'group-data-invalid/checkbox-button:group-data-indeterminate/checkbox-button:text-danger-foreground',
  ],
});

interface CheckboxButtonProps
  extends ComponentPropsWithRef<typeof RACCheckboxButton>, VariantProps<typeof checkboxButtonVariants> {
  inputDisplaySlotProps?: ComponentPropsWithRef<'div'> & VariantProps<typeof boxVariants>;
}

export function CheckboxButton(props: CheckboxButtonProps) {
  const { children, className, inputDisplaySlotProps, ...buttonProps } = props;

  return (
    <RACCheckboxButton
      {...buttonProps}
      className={composeRenderProps(className, (resolvedClassName, renderProps) => {
        return checkboxButtonVariants({ ...props, ...renderProps, className: resolvedClassName });
      })}
    >
      {composeRenderProps(children, (renderedChildren, renderProps) => {
        return (
          <>
            <div
              {...inputDisplaySlotProps}
              className={boxVariants({
                ...inputDisplaySlotProps,
              })}
            >
              {renderProps.isIndeterminate && <Minus className="thaz-checkbox-minus size-3.5" />}
              {!renderProps.isIndeterminate && renderProps.isSelected && (
                <Check className="thaz-checkbox-minus size-3.5" />
              )}
            </div>
            {renderedChildren}
          </>
        );
      })}
    </RACCheckboxButton>
  );
}
