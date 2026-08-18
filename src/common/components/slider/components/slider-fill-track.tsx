import type { ComponentPropsWithRef } from 'react';
import { useContext } from 'react';

import { SliderStateContext } from 'react-aria-components';

import { sliderVariants } from '#src/common/components/slider/variants';

export type SliderFillTrackProps = ComponentPropsWithRef<'div'>;

export function FillTrack(props: SliderFillTrackProps) {
  const state = useContext(SliderStateContext);

  if (state === undefined || state === null) {
    throw new Error('Slider.FillTrack must be used within a Slider.Track');
  }

  let dimension: 'height' | 'width' = 'width';

  if (state.orientation === 'vertical') {
    dimension = 'height';
  }

  const { fillTrack } = sliderVariants({ orientation: state.orientation });

  return (
    <div
      {...props}
      data-slot="slider-fill-track"
      style={{ ...props.style, [dimension]: `${state.getThumbPercent(0) * 100}%` }}
      className={fillTrack({ className: props.className })}
    />
  );
}
