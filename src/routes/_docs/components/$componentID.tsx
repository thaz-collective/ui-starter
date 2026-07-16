import { createFileRoute } from '@tanstack/react-router';

import { MDXContent } from '@content-collections/mdx/react';

import { Button } from '#src/common/components/button';
import { Card } from '#src/common/components/card';
import { Surface } from '#src/common/components/surface';
import { useSuspenseQueryDeferred } from '#src/common/suspense-query-deferred';
import { H2, H3 } from '#src/docs/heading';
import { Preview } from '#src/docs/preview';
import { PropsTable } from '#src/docs/props-table';
import { contentOptions } from '#src/services/content/options';

export const Route = createFileRoute('/_docs/components/$componentID')({
  loader: ({ params: { componentID }, context: { queryClient } }) => {
    void queryClient.prefetchQuery(
      contentOptions.getComponentBySlugQueryOptions({
        slug: componentID,
      }),
    );
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { componentID } = Route.useParams();
  const {
    query: {
      data: { mdx },
    },
  } = useSuspenseQueryDeferred(
    contentOptions.getComponentBySlugQueryOptions({
      slug: componentID,
    }),
  );

  return (
    <MDXContent
      code={mdx}
      components={{
        Button,
        Card,
        Surface,
        H2,
        H3,
        Preview,
        PropsTable,
      }}
    />
  );
}
