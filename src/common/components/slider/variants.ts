import type { VariantProps } from 'tailwind-variants';
import type { SetNonNullable } from 'type-fest';
import { tv } from 'tailwind-variants';

export const sliderVariants = tv({
  slots: {
    root: ['relative flex touch-none items-center select-none'],
    label: ['text-sm leading-none font-medium', 'text-foreground', 'select-none'],
    output: ['text-sm leading-none font-medium', 'text-foreground', 'select-none'],
    track: ['relative grow rounded-full bg-primary/20', 'data-disabled:opacity-50'],
    fillTrack: ['absolute rounded-full bg-primary'],
    thumb: [
      'block size-4 rounded-full border border-primary/50 bg-background shadow',
      'transition-colors',
      'data-disabled:pointer-events-none',
      'data-focus-visible:ring-ring outline-none data-focus-visible:ring-1',
    ],
  },
  variants: {
    orientation: {
      horizontal: {
        root: 'w-full',
        track: 'h-1.5 w-full',
        fillTrack: 'h-full',
      },
      vertical: {
        root: 'h-full',
        track: 'h-full w-1.5',
        fillTrack: 'bottom-0 w-full',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type SliderVariants = VariantProps<typeof sliderVariants>;
export type SlotsSliderVariants = ReturnType<typeof sliderVariants>;
export type RequiredSliderVariants = Required<SetNonNullable<SliderVariants>>;
