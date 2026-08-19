import { Slider as SliderRoot } from './components/slider';
import { FillTrack } from './components/slider-fill-track';
import { Label } from './components/slider-label';
import { Output } from './components/slider-output';
import { Thumb } from './components/slider-thumb';
import { Track } from './components/slider-track';

export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
  Label,
  Output,
  Track,
  FillTrack,
  Thumb,
});

export type { SliderProps } from './components/slider';
export type { SliderLabelProps } from './components/slider-label';

export type { SliderVariants, SlotsSliderVariants, RequiredSliderVariants } from './variants';
export { sliderVariants } from './variants';
