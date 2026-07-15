import type { ButtonProps as RACButtonProps } from 'react-aria-components';
import { composeRenderProps, Button as RACButton } from 'react-aria-components';

import type { ButtonVariants } from '#src/common/components/button/variants';
import { buttonVariants } from '#src/common/components/button/variants';

export type ButtonRootProps = RACButtonProps & ButtonVariants;

export function Button(props: ButtonRootProps) {
  return (
    <RACButton
      {...props}
      data-slot="button"
      className={composeRenderProps(props.className, (className, renderProps) => {
        return buttonVariants({ ...props, ...renderProps, className });
      })}
    />
  );
}
