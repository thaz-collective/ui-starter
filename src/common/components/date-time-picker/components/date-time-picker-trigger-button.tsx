import type { ButtonProps } from 'react-aria-components';
import { CalendarIcon } from 'lucide-react';
import { Button } from 'react-aria-components';

import { useDateTimePickerContext } from '#src/common/components/date-time-picker/context';

export type DateTimePickerTriggerButtonProps = Omit<ButtonProps, 'children'>;

export function DateTimePickerTriggerButton(props: DateTimePickerTriggerButtonProps) {
  const context = useDateTimePickerContext();

  if (context === undefined) {
    throw new Error(
      'DateTimePicker.TriggerButton must be used within a component that extends a DateTimePickerContextProvider',
    );
  }

  const { slots } = context;

  return (
    <Button
      {...props}
      className={slots.button({})}
    >
      <CalendarIcon className="size-4" />
    </Button>
  );
}
