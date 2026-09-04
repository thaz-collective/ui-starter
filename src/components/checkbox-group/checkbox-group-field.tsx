import type { ComponentPropsWithRef } from 'react';

import type { SetRequired } from 'type-fest';

import { CheckboxFieldBase } from '#src/components/checkbox';

type CheckboxGroupFieldProps = SetRequired<
  Omit<ComponentPropsWithRef<typeof CheckboxFieldBase>, 'isSelected' | 'onChange'>,
  'value'
>;

export function CheckboxGroupField(props: CheckboxGroupFieldProps) {
  return <CheckboxFieldBase {...props} />;
}
