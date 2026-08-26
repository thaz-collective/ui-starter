import type { ComponentPropsWithRef } from 'react';

import type { VariantProps } from 'tailwind-variants';
import { ChevronsUpDown } from 'lucide-react';
import { tv } from 'tailwind-variants';

const chevronVariants = tv({
  base: ['size-4 shrink-0 self-center text-muted-foreground'],
});

type SelectChevronProps = ComponentPropsWithRef<'svg'> & VariantProps<typeof chevronVariants>;

export function SelectChevron(props: SelectChevronProps) {
  return (
    <ChevronsUpDown
      {...props}
      className={chevronVariants({ ...props })}
    />
  );
}
