import { createFileRoute, notFound } from '@tanstack/react-router';

import { MDXContent } from '@content-collections/mdx/react';
import { allComponents } from 'content-collections';

export const Route = createFileRoute('/_docs/components/$componentID')({
  component: RouteComponent,
});

function RouteComponent() {
  const { componentID } = Route.useParams();

  console.info('slug', componentID);
  console.info('_docs/components/$componentID.tsx');
  console.info('allComponents', allComponents);

  const component = allComponents.find((componentCtx) => componentCtx.slug === componentID);
  if (!component) {
    throw notFound();
  }

  return <MDXContent code={component.mdx} />;
}
