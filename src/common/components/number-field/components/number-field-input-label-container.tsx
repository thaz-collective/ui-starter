import type { LabelInputContainerProps as InternalLabelInputContainerProps } from '#src/common/components/label-input-container';
import { LabelInputContainer as InternalLabelInputContainer } from '#src/common/components/label-input-container';
import { useNumberFieldContext } from '#src/common/components/number-field/context';

export function LabelInputContainer(props: InternalLabelInputContainerProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error(
      'NumberField.LabelInputContainer must be used within a component that extends a NumberFieldContextProvider',
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
