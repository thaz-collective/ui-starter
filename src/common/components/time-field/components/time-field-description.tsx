import type { DescriptionProps as InternalDescriptionProps } from '#src/common/components/description';
import { Description as InternalDescription } from '#src/common/components/description';
import { useTimeFieldContext } from '#src/common/components/time-field/context';

export function Description(props: InternalDescriptionProps) {
  const context = useTimeFieldContext();

  if (context === undefined) {
    throw new Error('TimeField.Description must be used within a component that extends a TimeFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalDescription
      {...props}
      className={slots.description({ ...props, className: props.className })}
    />
  );
}
