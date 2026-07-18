import type { LabelInputContainerProps as InternalLabelInputContainerProps } from '#src/common/components/label-input-container';
import { useDateFieldContext } from '#src/common/components/date-field/context';
import { LabelInputContainer as InternalLabelInputContainer } from '#src/common/components/label-input-container';

export function LabelInputContainer(props: InternalLabelInputContainerProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error(
      'DateField.LabelInputContainer must be used within a component that extends a DateFieldContextProvider',
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
