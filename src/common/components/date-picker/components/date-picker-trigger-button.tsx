import type { ButtonProps } from 'react-aria-components';
import { CalendarIcon } from 'lucide-react';
import { Button } from 'react-aria-components';

import { useDatePickerContext } from '#src/common/components/date-picker/context';

export type DatePickerTriggerButtonProps = Omit<ButtonProps, 'children'>;

export function DatePickerTriggerButton(props: DatePickerTriggerButtonProps) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error(
      'DatePicker.TriggerButton must be used within a component that extends a DatePickerContextProvider',
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
