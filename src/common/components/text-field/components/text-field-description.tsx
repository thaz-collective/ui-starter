import type { DescriptionProps as InternalDescriptionProps } from '#src/common/components/description';
import { Description as InternalDescription } from '#src/common/components/description';
import { useTextFieldContext } from '#src/common/components/text-field/context';

export function Description(props: InternalDescriptionProps) {
  const context = useTextFieldContext();

  if (context === undefined) {
    throw new Error('TextField.Description must be used within a component that extends a TextFieldContextProvider');
  }

  const { slots } = context;

  return (
    <InternalDescription
      {...props}
      className={slots.description({ ...props, className: props.className })}
    />
  );
}
