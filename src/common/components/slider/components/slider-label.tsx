import type { LabelProps as RACLabelProps } from 'react-aria-components';
import { Label as RACLabel } from 'react-aria-components';

import { sliderVariants } from '#src/common/components/slider/variants';

export type SliderLabelProps = RACLabelProps;

export function Label(props: SliderLabelProps) {
  const { label } = sliderVariants();

  return (
    <RACLabel
      {...props}
      data-slot="slider-label"
      className={label({ className: props.className })}
    />
  );
}
