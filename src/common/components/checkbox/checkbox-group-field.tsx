import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';
import { CheckboxField as RACCheckboxField } from 'react-aria-components';

type CheckboxGroupFieldProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof RACCheckboxField>, 'defaultSelected' | 'isSelected' | 'onChange'>,
  'value' | 'children'
>;

export function CheckboxGroupField(props: CheckboxGroupFieldProps) {
  return <RACCheckboxField {...props} />;
}
