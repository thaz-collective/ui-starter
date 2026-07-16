import { createFileRoute, redirect } from '@tanstack/react-router';

import { contentOptions } from '#src/services/content/options';

export const Route = createFileRoute('/_docs/components/')({
  beforeLoad: async ({ context: { queryClient } }) => {
    const componentList = await queryClient.ensureQueryData(contentOptions.getComponentSlugListQueryOptions());

    const [first] = componentList;
    if (first) {
      throw redirect({ to: '/components/$componentID', params: { componentID: first.slug } });
    }

    // TODO better default?
    throw redirect({ to: '/components/$componentID', params: { componentID: 'button' } });
  },
});
