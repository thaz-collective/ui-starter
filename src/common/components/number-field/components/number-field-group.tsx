import type { GroupProps as RACGroupProps } from 'react-aria-components';
import { composeRenderProps, Group as RACGroup } from 'react-aria-components';

export type NumberFieldGroupProps = RACGroupProps;

export function NumberFieldGroup(props: NumberFieldGroupProps) {
  return (
    <RACGroup
      {...props}
      className={composeRenderProps(props.className, (className) =>
        ['w-full flex items-stretch', className].filter(Boolean).join(' '),
      )}
    />
  );
}
