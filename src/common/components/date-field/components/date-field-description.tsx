import type { DescriptionProps as InternalDescriptionProps } from '#src/common/components/description';
import { useDateFieldContext } from '#src/common/components/date-field/context';
import { Description as InternalDescription } from '#src/common/components/description';

export function Description(props: InternalDescriptionProps) {
  const context = useDateFieldContext();

  if (context === undefined) {
    throw new Error('DateField.Description must be used within a component that extends a DateFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalDescription
      {...props}
      className={slots.description({ ...props, className: props.className })}
    />
  );
}
