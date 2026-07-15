import type { DescriptionProps as InternalDescriptionProps } from '#src/common/components/description';
import { Description as InternalDescription } from '#src/common/components/description';
import { useNumberFieldContext } from '#src/common/components/number-field/context';

export function Description(props: InternalDescriptionProps) {
  const context = useNumberFieldContext();

  if (context === undefined) {
    throw new Error(
      'NumberField.Description must be used within a component that extends a NumberFieldContextProvider',
    );
  }

  const { slots } = context;

  return (
    <InternalDescription
      {...props}
      className={slots.description({ ...props, className: props.className })}
    />
  );
}
