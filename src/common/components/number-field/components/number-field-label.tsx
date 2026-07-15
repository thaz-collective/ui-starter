import type { LabelProps as InternalLabelProps } from '#src/common/components/label';
import { Label as InternalLabel } from '#src/common/components/label';
import { useNumberFieldContext } from '#src/common/components/number-field/context';

export function Label(props: InternalLabelProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error('NumberField.Label must be used within a component that extends a NumberFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalLabel
      {...props}
      className={slots.label({ ...props, className: props.className })}
    />
  );
}
