import type { GroupProps as RACGroupProps } from 'react-aria-components';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';

import { useDateTimePickerContext } from '#src/common/components/date-time-picker/context';

export type DateTimePickerGroupProps = RACGroupProps;

export function DateTimePickerGroup(props: DateTimePickerGroupProps) {
  const context = useDateTimePickerContext();

  if (context === undefined) {
    throw new Error('DateTimePicker.Group must be used within a component that extends a DateTimePickerContextProvider');
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
