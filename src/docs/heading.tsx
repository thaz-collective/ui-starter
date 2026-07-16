import type { ComponentProps } from 'react';

type HeadingProps<T extends 'h2' | 'h3'> = Omit<ComponentProps<T>, 'id'> & { id: string };

export function H2({ className, children, id, ...props }: HeadingProps<'h2'>) {
  return (
    <h2
      id={id}
      className={`mt-12 mb-4 text-2xl font-semibold ${className ?? ''}`}
      {...props}
    >
      <a
        href={`#${id}`}
        className="no-underline hover:underline"
      >
        {children}
      </a>
    </h2>
  );
}

export function H3({ className, children, id, ...props }: HeadingProps<'h3'>) {
  return (
    <h3
      id={id}
      className={`mt-6 mb-3 text-lg font-medium ${className ?? ''}`}
      {...props}
    >
      <a
        href={`#${id}`}
        className="no-underline hover:underline"
      >
        {children}
      </a>
    </h3>
  );
}
