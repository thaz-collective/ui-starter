import { tv } from 'tailwind-variants';

export const dateInputVariants = tv({
  slots: {
    root: [
      'group/date-input',
      'flex min-w-0 flex-1 flex-wrap items-center',
      'px-3 pt-5 pb-1.5',
      'leading-none',
      'bg-transparent',
      'text-sm text-foreground',
      'data-[disabled="true"]:cursor-not-allowed',
      'data-[disabled="true"]:text-muted-foreground',
      'data-[readonly="true"]:cursor-default',
      // 'data-[hovered="true"]'
      // 'data-[focus-within="true"]'
      // 'data-[focus-visible="true"]'
      // 'data-[disabled="true"]'
      // 'data-[invalid="true"]'
    ],
    segment: [
      'rounded-sm px-0.5 tabular-nums outline-none',
      'data-[placeholder]:text-muted-foreground/50',
      'data-[type="literal"]:px-0',
      'data-focused:bg-primary data-focused:text-primary-foreground',
      'data-disabled:cursor-not-allowed',
      'data-invalid:text-danger',
      // hide placeholder segments and literal separators ("/", ":") until the field is focused
      // or a real value has been entered, mirroring text-field's placeholder-opacity trick so
      // the floating label reads as empty — the "not focused and not filled" condition is
      // folded into the hide selector itself so there's only one opacity rule per segment,
      // rather than two rules fighting over the same property
      'transition-opacity duration-150',
      'group-not-focus-within/date-input:group-not-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/date-input:data-[placeholder]:opacity-0',
      'group-not-focus-within/date-input:group-not-has-[[data-type]:not([data-type="literal"]):not([data-placeholder])]/date-input:data-[type="literal"]:opacity-0',
      // 'data-[hovered="true"]'
      // 'data-[focused="true"]'
      // 'data-[focus-visible="true"]'
      // 'data-[placeholder="true"]'
      // 'data-[readonly="true"]'
      // 'data-[disabled="true"]'
      // 'data-[invalid="true"]'
      // 'data-[type="year"]'//DateSegmentType
    ],
  },
});

export type DateInputVariants = ReturnType<typeof dateInputVariants>;
