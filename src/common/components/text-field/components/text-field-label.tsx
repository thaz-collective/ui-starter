import type { LabelProps as InternalLabelProps } from '#src/common/components/label';
import { Label as InternalLabel } from '#src/common/components/label';
import { useTextFieldContext } from '#src/common/components/text-field/context';

export function Label(props: InternalLabelProps) {
  const context = useTextFieldContext();

  if (context === undefined) {
    throw new Error('TextField.Label must be used within a component that extends a TextFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalLabel
      {...props}
      className={slots.label({ ...props, className: props.className })}
    />
  );
}
