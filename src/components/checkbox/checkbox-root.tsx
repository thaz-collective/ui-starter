import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';

import { CheckboxFieldBase } from './checkbox-field-base';

type CheckboxRootProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof CheckboxFieldBase>, 'value'>,
  'isSelected' | 'onChange'
>;

export function CheckboxRoot(props: CheckboxRootProps) {
  return <CheckboxFieldBase {...props} />;
}
