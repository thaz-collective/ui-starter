import type { LabelProps as InternalLabelProps } from '#src/common/components/label';
import { useDatePickerContext } from '#src/common/components/date-picker/context';
import { Label as InternalLabel } from '#src/common/components/label';

export function Label(props: InternalLabelProps) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error('DatePicker.Label must be used within a component that extends a DatePickerContextProvider');
  }

  const { slots } = context;

  return (
    <InternalLabel
      {...props}
      className={slots.label({ ...props, className: props.className })}
    />
  );
}
