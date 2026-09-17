import type { ComponentPropsWithRef } from 'react';

import type { TemporalTimeValue, MapTemporalToInternationalizedTime } from '@thaz/form-util/util';
import { temporalToInternationalizedTime, internationalizedToTemporalTime } from '@thaz/form-util/util';

import type { SetRequired } from 'type-fest';
import { composeRenderProps, TimeField as RACTimeField } from 'react-aria-components';
import { cn } from 'tailwind-variants';

type TimeFieldRootProps<T extends TemporalTimeValue> = SetRequired<
  Omit<
    ComponentPropsWithRef<typeof RACTimeField<MapTemporalToInternationalizedTime<T>>>,
    'defaultValue' | 'value' | 'onChange'
  >,
  'children'
> & {
  value: T | null;
  onChange: (value: T | null) => void;
};

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
      className={composeRenderProps(props.className, (className) => {
        return (
          cn(
            'group/time-field group/field relative m-0 inline-flex w-full min-w-0 flex-col gap-1 border-0 p-0',

            className,
          ) ?? ''
        );
      })}
    />
  );
}
