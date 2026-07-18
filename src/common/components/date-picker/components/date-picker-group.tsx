import type { GroupProps as RACGroupProps } from 'react-aria-components';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';

import { useDatePickerContext } from '#src/common/components/date-picker/context';

export type DatePickerGroupProps = RACGroupProps;

export function DatePickerGroup(props: DatePickerGroupProps) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error('DatePicker.Group must be used within a component that extends a DatePickerContextProvider');
  }

  const { slots } = context;

  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => {
        return slots.group({ ...props, ...renderProps, className });
      })}
    />
  );
}
