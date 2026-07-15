import type { LabelInputContainerProps as InternalLabelInputContainerProps } from '#src/common/components/label-input-container';
import { LabelInputContainer as InternalLabelInputContainer } from '#src/common/components/label-input-container';
import { useTextFieldContext } from '#src/common/components/text-field/context';

export function LabelInputContainer(props: InternalLabelInputContainerProps) {
  const context = useTextFieldContext();

  if (context === undefined) {
    throw new Error(
      'TextField.LabelInputContainer must be used within a component that extends a TextFieldContextProvider',
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
