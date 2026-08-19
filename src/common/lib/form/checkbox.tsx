import type { FieldWithValue } from '@tanstack/react-form';

import type { CheckboxProps } from '#src/common/components/checkbox';
import { Checkbox } from '#src/common/components/checkbox';

// RAC's boolean toggles are controlled via `isSelected`, not `value`/`onChange(value)`.
export function CheckboxAdapter({
  field,
  ...rootProps
}: {
  field: FieldWithValue<boolean>;
} & Omit<CheckboxProps, 'isSelected' | 'onChange' | 'onBlur'>) {
  return (
    <Checkbox.Root
      {...rootProps}
      isSelected={field.value}
      onChange={field.handleChange}
      onBlur={field.handleBlur}
      isInvalid={field.meta.isInvalid}
    />
  );
}
