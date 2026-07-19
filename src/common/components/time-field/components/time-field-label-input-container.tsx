import type { LabelInputContainerProps as InternalLabelInputContainerProps } from '#src/common/components/label-input-container';
import { LabelInputContainer as InternalLabelInputContainer } from '#src/common/components/label-input-container';
import { useTimeFieldContext } from '#src/common/components/time-field/context';

export function LabelInputContainer(props: InternalLabelInputContainerProps) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error(
      'TimeField.LabelInputContainer must be used within a component that extends a TimeFieldContextProvider',
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
