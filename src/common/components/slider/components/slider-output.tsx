import type { SliderOutputProps as RACSliderOutputProps } from 'react-aria-components';
import { composeRenderProps, SliderOutput as RACSliderOutput } from 'react-aria-components';

import { sliderVariants } from '#src/common/components/slider/variants';

export type SliderOutputProps = RACSliderOutputProps;

export function Output(props: SliderOutputProps) {
  return (
    <RACSliderOutput
      {...props}
      data-slot="slider-output"
      className={composeRenderProps(props.className, (className) => {
        const { output } = sliderVariants();

        return output({ className });
      })}
    />
  );
}
