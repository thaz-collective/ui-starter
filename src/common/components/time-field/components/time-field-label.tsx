import type { LabelProps as InternalLabelProps } from '#src/common/components/label';
import { Label as InternalLabel } from '#src/common/components/label';
import { useTimeFieldContext } from '#src/common/components/time-field/context';

export function Label(props: InternalLabelProps) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeField.Label must be used within a component that extends a TimeFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalLabel
      {...props}
      className={slots.label({ ...props, className: props.className })}
    />
  );
}
