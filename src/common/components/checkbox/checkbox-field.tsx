import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';

import { CheckboxFieldInner } from './checkbox-field-inner';

type CheckboxFieldProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof CheckboxFieldInner>, 'value'>,
  'isSelected' | 'onChange'
>;

export function CheckboxField(props: CheckboxFieldProps) {
  return <CheckboxFieldInner {...props} />;
}
