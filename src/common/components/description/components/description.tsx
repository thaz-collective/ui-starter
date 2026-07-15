import type { ReactNode } from 'react';

import type { TextProps as RACTextProps } from 'react-aria-components';
import { Text as RACText } from 'react-aria-components';

import type { DescriptionVariants } from '#src/common/components/description/variants';
import { descriptionVariants } from '#src/common/components/description/variants';

export interface DescriptionProps extends Omit<RACTextProps, 'slot'>, DescriptionVariants {
  children: ReactNode;
}

export function Description(props: DescriptionProps) {
  return (
    <RACText
      {...props}
      data-slot="description"
      slot="description"
      className={descriptionVariants({ ...props })}
    />
  );
}
