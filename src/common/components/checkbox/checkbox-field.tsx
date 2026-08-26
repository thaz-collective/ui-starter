import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { CheckboxField as RACCheckboxField } from 'react-aria-components';

type CheckboxFieldProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACCheckboxField>, 'defaultSelected' | 'value'>,
  'isSelected' | 'onChange' | 'children'
>;

export function CheckboxField(props: CheckboxFieldProps) {
  return <RACCheckboxField {...props} />;
}
