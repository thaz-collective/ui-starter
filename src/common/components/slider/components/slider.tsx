import type { SliderProps as RACSliderProps } from 'react-aria-components';
import { composeRenderProps, Slider as RACSlider } from 'react-aria-components';

import { sliderVariants } from '#src/common/components/slider/variants';

export type SliderProps = RACSliderProps;

export function Slider(props: SliderProps) {
  const { orientation = 'horizontal', ...rest } = props;

  return (
    <RACSlider
      {...rest}
      orientation={orientation}
      data-slot="slider"
      className={composeRenderProps(props.className, (className, renderProps) => {
        const { root } = sliderVariants({ orientation: renderProps.orientation });

        return root({ className });
      })}
    />
  );
}
