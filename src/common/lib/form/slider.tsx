import type { FieldWithValue } from '@tanstack/react-form';

import type { SliderProps } from '#src/common/components/slider';
import { Slider } from '#src/common/components/slider';

// RAC's Slider is overloaded for single (`number`) vs. multi-thumb (`number[]`) values; this adapter
// targets the single-thumb `number` shape, the simplest default until a multi-thumb use case exists.
export function SliderAdapter({
  field,
  ...rootProps
}: {
  field: FieldWithValue<number>;
} & Omit<SliderProps, 'value' | 'onChange' | 'children'>) {
  return (
    <Slider.Root
      {...rootProps}
      value={field.value}
      onChange={(value) => {
        if (typeof value === 'number') {
          field.handleChange(value);
        }
      }}
    >
      <Slider.Output />
      <Slider.Track>
        <Slider.FillTrack />
        <Slider.Thumb index={0} />
      </Slider.Track>
    </Slider.Root>
  );
}
