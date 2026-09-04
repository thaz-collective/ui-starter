import type { ComponentPropsWithRef } from 'react';

import { Check, Minus } from 'lucide-react';
import { CheckboxButton as RACCheckboxButton, composeRenderProps } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type CheckboxButtonProps = ComponentPropsWithRef<typeof RACCheckboxButton>;

export function CheckboxButton(props: CheckboxButtonProps) {
  const { children, ...buttonProps } = props;

  return (
    <RACCheckboxButton
      {...buttonProps}
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/checkbox-button flex items-center gap-2 text-foreground',

            'data-disabled:cursor-not-allowed data-disabled:opacity-50',

            className,
          ) ?? ''
        );
      })}
    >
      {composeRenderProps(children, (renderedChildren, renderProps) => {
        return (
          <>
            <div
              className={cn(
                'flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current shadow-sm transition-colors',

                // hover / pressed (unselected)
                'group-data-hovered/checkbox-button:border-primary-hover',

                // focus-visible
                'group-data-focus-visible/checkbox-button:outline-none',
                'group-data-focus-visible/checkbox-button:ring-1',
                'group-data-focus-visible/checkbox-button:ring-primary',

                // selected / indeterminate
                'group-data-selected/checkbox-button:bg-primary',
                'group-data-selected/checkbox-button:text-primary-foreground',
                'group-data-selected/checkbox-button:group-data-hovered/checkbox-button:bg-primary-hover',
                'group-data-selected/checkbox-button:group-data-pressed/checkbox-button:brightness-95',

                'group-data-indeterminate/checkbox-button:bg-primary',
                'group-data-indeterminate/checkbox-button:text-primary-foreground',
                'group-data-indeterminate/checkbox-button:group-data-hovered/checkbox-button:bg-primary-hover',
                'group-data-indeterminate/checkbox-button:group-data-pressed/checkbox-button:brightness-95',

                // invalid — wins over primary for border, hover, and focus ring
                'group-data-[invalid="true"]/checkbox-button:border-danger',
                'group-data-[invalid="true"]/checkbox-button:group-data-hovered/checkbox-button:border-danger-hover',
                'group-data-[invalid="true"]/checkbox-button:group-data-focus-visible/checkbox-button:ring-danger',

                'group-data-[invalid="true"]/checkbox-button:group-data-selected/checkbox-button:bg-danger',
                'group-data-[invalid="true"]/checkbox-button:group-data-selected/checkbox-button:text-danger-foreground',
                'group-data-[invalid="true"]/checkbox-button:group-data-selected/checkbox-button:group-data-hovered/checkbox-button:bg-danger-hover',

                'group-data-[invalid="true"]/checkbox-button:group-data-indeterminate/checkbox-button:bg-danger',
                'group-data-[invalid="true"]/checkbox-button:group-data-indeterminate/checkbox-button:text-danger-foreground',
                'group-data-[invalid="true"]/checkbox-button:group-data-indeterminate/checkbox-button:group-data-hovered/checkbox-button:bg-danger-hover',
              )}
            >
              {renderProps.isIndeterminate && <Minus className="size-3.5" />}
              {!renderProps.isIndeterminate && renderProps.isSelected && <Check className="size-3.5" />}
            </div>
            {renderedChildren}
          </>
        );
      })}
    </RACCheckboxButton>
  );
}
