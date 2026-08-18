import type { SliderThumbProps as RACSliderThumbProps } from 'react-aria-components';
import { composeRenderProps, SliderThumb as RACSliderThumb } from 'react-aria-components';

import { sliderVariants } from '#src/common/components/slider/variants';

export type SliderThumbProps = RACSliderThumbProps;

// Render multiple <Slider.Thumb> instances (one per `index`) to build a multi-thumb / range slider —
// RAC's SliderThumb is positioned by its `index` prop, this single-thumb example just doesn't demonstrate it.
export function Thumb(props: SliderThumbProps) {
  return (
    <RACSliderThumb
      {...props}
      data-slot="slider-thumb"
      className={composeRenderProps(props.className, (className) => {
        const { thumb } = sliderVariants();

        return thumb({ className });
      })}
    />
  );
}
