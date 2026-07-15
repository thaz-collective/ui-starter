import { composeRenderProps } from 'react-aria-components';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string,
): string | ((v: T) => string) {
  return composeRenderProps(className, (classNameInner) => twMerge(tw, classNameInner));
}

export const testVariants = tv({
  base: [
    // Random Examples for checking stuff
    // Example 1
    'focus-visible:not-focus:bg-primary',
    '[&:focus-visible:not(:focus)]:bg-primary',

    // Example 2
    'hover:not-focus-within:bg-primary',
    'not-focus-within:hover:bg-primary',

    // 'data-hovered:',
    // 'data-focused:',
    // 'data-focus-visible:',
    // 'data-disabled:',
    // 'data-invalid:',
    // 'data-readonly:',
    // 'data-required:',

    // TODO : Copy/Paste Starting States
    // TODO : Map Disabled states
    'data-[disabled="true"]:bg-primary',
    'aria-disabled:bg-primary',

    // TODO : Map invalid states
    'data-[invalid="true"]:bg-primary',
    'aria-invalid:bg-primary',

    // TODO : Map readOnly States
    'data-[readonly="true"]:bg-primary',

    // TODO : Map required states
    'data-[required="true"]:bg-primary',
  ],
});
