import type { DescriptionProps as InternalDescriptionProps } from '#src/common/components/description';
import { useDatePickerContext } from '#src/common/components/date-picker/context';
import { Description as InternalDescription } from '#src/common/components/description';

export function Description(props: InternalDescriptionProps) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error('DatePicker.Description must be used within a component that extends a DatePickerContextProvider');
  }

  const { slots } = context;

  return (
    <InternalDescription
      {...props}
      className={slots.description({ ...props, className: props.className })}
    />
  );
}
