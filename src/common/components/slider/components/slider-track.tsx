import type { SliderTrackProps as RACSliderTrackProps } from 'react-aria-components';
import { composeRenderProps, SliderTrack as RACSliderTrack } from 'react-aria-components';

import { sliderVariants } from '#src/common/components/slider/variants';

export type SliderTrackProps = RACSliderTrackProps;

export function Track(props: SliderTrackProps) {
  return (
    <RACSliderTrack
      {...props}
      data-slot="slider-track"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const { track } = sliderVariants({ orientation: renderProps.orientation });

        return track({ className });
      })}
    />
  );
}
