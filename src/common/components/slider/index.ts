import { Slider as SliderRoot } from './components/slider';
import { FillTrack } from './components/slider-fill-track';
import { Output } from './components/slider-output';
import { Thumb } from './components/slider-thumb';
import { Track } from './components/slider-track';

export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
  Output,
  Track,
  FillTrack,
  Thumb,
});

export type { SliderProps } from './components/slider';

export type { SliderVariants, SlotsSliderVariants, RequiredSliderVariants } from './variants';
export { sliderVariants } from './variants';
