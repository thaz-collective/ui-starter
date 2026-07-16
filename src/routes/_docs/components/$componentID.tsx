import type { ComponentProps } from 'react';

import { createFileRoute, notFound } from '@tanstack/react-router';

import { MDXContent } from '@content-collections/mdx/react';
import { allComponents } from 'content-collections';

import { Button } from '#src/common/components/button';
import { Card } from '#src/common/components/card';
import { Surface } from '#src/common/components/surface';
import { Preview } from '#src/docs/preview';
import { PropsTable } from '#src/docs/props-table';

type HeadingProps<T extends 'h2' | 'h3'> = Omit<ComponentProps<T>, 'id'> & { id: string };

function H2({ className, children, id, ...props }: HeadingProps<'h2'>) {
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

function H3({ className, children, id, ...props }: HeadingProps<'h3'>) {
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

// Every custom tag referenced from a components/*.mdx file must be added here.
const mdxComponents = { Button, Card, Surface, Preview, PropsTable, H2, H3 };

export const Route = createFileRoute('/_docs/components/$componentID')({
  component: RouteComponent,
});

function RouteComponent() {
  const { componentID } = Route.useParams();

  const component = allComponents.find((componentCtx) => componentCtx.slug === componentID);
  if (!component) {
    throw notFound();
  }

  return (
    <MDXContent
      code={component.mdx}
      components={mdxComponents}
    />
  );
}
