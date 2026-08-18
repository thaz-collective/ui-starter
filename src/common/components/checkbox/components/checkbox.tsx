import type { CheckboxProps as RACCheckboxProps, CheckboxRenderProps } from 'react-aria-components';
import { Check, Minus } from 'lucide-react';
import { Checkbox as RACCheckbox, composeRenderProps } from 'react-aria-components';

import { checkboxVariants } from '#src/common/components/checkbox/variants';

export type CheckboxProps = RACCheckboxProps;

function CheckboxIcon({ isIndeterminate, isSelected }: CheckboxRenderProps) {
  if (isIndeterminate) {
    return <Minus className="size-3.5" />;
  }

  if (isSelected) {
    return <Check className="size-3.5" />;
  }

  return null;
}

export function Checkbox(props: CheckboxProps) {
  const slots = checkboxVariants();

  return (
    // oxlint-disable-next-line no-deprecated -- RAC's `Checkbox` is deprecated in favor of a `CheckboxField`/`CheckboxButton` split; this library targets the classic compound-primitive shape used by all its component plans, migrate when that split is adopted here.
    <RACCheckbox
      {...props}
      data-slot="checkbox"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    >
      {composeRenderProps(props.children, (children, renderProps) => (
        <>
          <div
            data-slot="checkbox-box"
            className={slots.box()}
          >
            <CheckboxIcon {...renderProps} />
          </div>
          {children}
        </>
      ))}
    </RACCheckbox>
  );
}
