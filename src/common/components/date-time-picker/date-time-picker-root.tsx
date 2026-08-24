import type { ComponentPropsWithRef } from 'react';

import type { TemporalDateValue, MapTemporalToInternationalizedDate } from '@thaz/form-util/util';
import { temporalToInternationalizedDate, internationalizedToTemporalDate } from '@thaz/form-util/util';

import type { VariantProps } from 'tailwind-variants';
import type { SetRequired } from 'type-fest';
import { composeRenderProps, DatePicker as RACDatePicker } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const dateTimePickerVariants = tv({
  base: [
    'group/date-time-picker',

    'relative inline-flex flex-col',

    'm-0 w-full min-w-0 border-0 p-0',

    'gap-1',
  ],
});

type DateTimePickerRootProps<T extends TemporalDateValue> = SetRequired<
  Omit<
    ComponentPropsWithRef<typeof RACDatePicker<MapTemporalToInternationalizedDate<T>>>,
    'defaultValue' | 'value' | 'onChange'
  >,
  'children'
> &
  VariantProps<typeof dateTimePickerVariants> & {
    value: T | null;
    onChange: (value: T | null) => void;
  };

export function DateTimePickerRoot<T extends TemporalDateValue>(props: DateTimePickerRootProps<T>) {
  const { value, onChange, ...rest } = props;

  let valueAdjusted: MapTemporalToInternationalizedDate<T> | null = null;
  if (value) {
    valueAdjusted = temporalToInternationalizedDate(value);
  }

  return (
    <RACDatePicker
      {...rest}
      value={valueAdjusted}
      onChange={(newValue) => {
        if (newValue === null) {
          onChange(null);
          return;
        }

        // oxlint-disable-next-line typescript/consistent-type-assertions typescript/no-unsafe-type-assertion -- Needed to get types working. I believe this should be safe???
        onChange(internationalizedToTemporalDate(newValue) as unknown as T);
      }}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return dateTimePickerVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
