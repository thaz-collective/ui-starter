import { createFileRoute } from '@tanstack/react-router';

import { useSuspenseQueryDeferred } from '#src/common/suspense-query-deferred';
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

  return { mdx };
}
