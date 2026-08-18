import type { ReactNode } from 'react';

import type { RadioGroupProps as RACRadioGroupProps } from 'react-aria-components';
import { composeRenderProps, RadioGroup as RACRadioGroup } from 'react-aria-components';

import type { RadioGroupVariants } from '#src/common/components/radio-group/variants';
import { useRadioGroupContext } from '#src/common/components/radio-group/context';

import { RadioGroupContextProvider } from './radio-group-context-provider';

export interface RadioGroupProps extends Omit<RACRadioGroupProps, 'orientation'>, RadioGroupVariants {
  children: ReactNode;
}

export function RadioGroup(props: RadioGroupProps) {
  return (
    <RadioGroupContextProvider {...props}>
      <RadioGroupInner {...props} />
    </RadioGroupContextProvider>
  );
}

function RadioGroupInner(props: RadioGroupProps) {
  const context = useRadioGroupContext();

  if (context === undefined) {
    throw new Error('RadioGroup must be used within a component that extends a RadioGroupContextProvider');
  }

  const { slots } = context;
  const { orientation, ...rest } = props;

  const orientationProps: Pick<RACRadioGroupProps, 'orientation'> = {};

  if (orientation) {
    orientationProps.orientation = orientation;
  }

  return (
    <RACRadioGroup
      {...rest}
      {...orientationProps}
      data-slot="radio-group"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.root({ ...props, ...renderProps, className });
      })}
    />
  );
}
