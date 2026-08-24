import type { ReactNode, ComponentPropsWithRef } from 'react';

import type { TemporalTimeValue, MapTemporalToInternationalizedTime } from '@thaz/form-util/util';
import { temporalToInternationalizedTime, internationalizedToTemporalTime } from '@thaz/form-util/util';

import type { VariantProps } from 'tailwind-variants';
import { composeRenderProps, TimeField as RACTimeField } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const timeFieldVariants = tv({
  base: [
    'group/time-field',

    'relative inline-flex flex-col',

    'm-0 w-full min-w-0 border-0 p-0',

    'gap-1',
  ],
});

interface TimeFieldRootProps<T extends TemporalTimeValue>
  extends
    Omit<
      ComponentPropsWithRef<typeof RACTimeField<MapTemporalToInternationalizedTime<T>>>,
      'defaultValue' | 'value' | 'onChange' | 'children'
    >,
    VariantProps<typeof timeFieldVariants> {
  value: T | null;
  onChange: (value: T | null) => void;
  children: ReactNode;
}

export function TimeFieldRoot<T extends TemporalTimeValue>(props: TimeFieldRootProps<T>) {
  const { value, onChange, ...rest } = props;

  let valueAdjusted: MapTemporalToInternationalizedTime<T> | null = null;
  if (value) {
    valueAdjusted = temporalToInternationalizedTime(value);
  }

  return (
    <RACTimeField
      {...rest}
      value={valueAdjusted}
      onChange={(newValue) => {
        if (newValue === null) {
          onChange(null);
          return;
        }

        // oxlint-disable-next-line typescript/consistent-type-assertions typescript/no-unsafe-type-assertion -- Needed to get types working. I believe this should be safe???
        onChange(internationalizedToTemporalTime(newValue) as unknown as T);
      }}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return timeFieldVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
