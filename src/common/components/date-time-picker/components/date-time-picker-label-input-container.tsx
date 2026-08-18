import type { ComponentPropsWithRef, ReactNode } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

import { useDateTimePickerContext } from '#src/common/components/date-time-picker/context';

const labelInputContainerVariants = tv({
  base: [
    'group/label-input-container',
    'relative flex items-stretch',
    'rounded-md',
    'bg-field',
    'transition-colors duration-150',

    'border border-field-border',
    'focus-within:border-primary hover:border-primary-hover',
  ],
});

type LabelInputContainerVariants = VariantProps<typeof labelInputContainerVariants>;

export interface LabelInputContainerProps extends ComponentPropsWithRef<'div'>, LabelInputContainerVariants {
  children: ReactNode;
}

export function LabelInputContainer(props: LabelInputContainerProps) {
  const context = useDateTimePickerContext();

  if (context === undefined) {
    throw new Error(
      'DateTimePicker.LabelInputContainer must be used within a component that extends a DateTimePickerContextProvider',
    );
  }

  const { slots } = context;

  const mergedProps = {
    ...props,
    className: slots.inputLabelContainer({ ...props, className: props.className }),
  };

  return (
    <div
      {...mergedProps}
      data-slot="label-input-container"
      className={labelInputContainerVariants({ className: mergedProps.className })}
    />
  );
}
