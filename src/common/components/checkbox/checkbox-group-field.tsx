import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';

import { CheckboxFieldInner } from './checkbox-field-inner';

type CheckboxGroupFieldProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof CheckboxFieldInner>, 'isSelected' | 'onChange'>,
  'value'
>;

export function CheckboxGroupField(props: CheckboxGroupFieldProps) {
  return <CheckboxFieldInner {...props} />;
}
