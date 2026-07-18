import type { LabelInputContainerProps as InternalLabelInputContainerProps } from '#src/common/components/label-input-container';
import { useDatePickerContext } from '#src/common/components/date-picker/context';
import { LabelInputContainer as InternalLabelInputContainer } from '#src/common/components/label-input-container';

export function LabelInputContainer(props: InternalLabelInputContainerProps) {
  const context = useDatePickerContext();

  if (context === undefined) {
    throw new Error(
      'DatePicker.LabelInputContainer must be used within a component that extends a DatePickerContextProvider',
    );
  }

  const { slots } = context;

  return (
    <InternalLabelInputContainer
      {...props}
      className={slots.inputLabelContainer({ ...props, className: props.className })}
    />
  );
}
