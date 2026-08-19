import type { HeaderProps as RACHeaderProps } from 'react-aria-components';
import { Header as RACHeader } from 'react-aria-components';

import { listBoxVariants } from '#src/common/components/list-box/variants';

export type HeaderProps = RACHeaderProps;

export function Header(props: HeaderProps) {
  const { header } = listBoxVariants();

  return (
    <RACHeader
      {...props}
      data-slot="header"
      className={header({ className: props.className })}
    />
  );
}
