import type { LabelProps as InternalLabelProps } from '#src/common/components/label';
import { useDateFieldContext } from '#src/common/components/date-field/context';
import { Label as InternalLabel } from '#src/common/components/label';

export function Label(props: InternalLabelProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateField.Label must be used within a component that extends a DateFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalLabel
      {...props}
      className={slots.label({ ...props, className: props.className })}
    />
  );
}
