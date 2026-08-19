import type { FieldWithValue } from '@tanstack/react-form';

import type { SwitchProps } from '#src/common/components/switch';
import { Switch } from '#src/common/components/switch';

// Same `isSelected` (not `value`) controlled shape as checkbox.
export function SwitchAdapter({
  field,
  ...rootProps
}: {
  field: FieldWithValue<boolean>;
} & Omit<SwitchProps, 'isSelected' | 'onChange'>) {
  return (
    <Switch
      {...rootProps}
      isSelected={field.value}
      onChange={field.handleChange}
    />
  );
}
