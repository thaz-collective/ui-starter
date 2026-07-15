import { createFileRoute, redirect } from '@tanstack/react-router';

import { allComponents } from 'content-collections';

export const Route = createFileRoute('/_docs/components/')({
  beforeLoad: () => {
    const [first] = [...allComponents].toSorted((a, b) => a.title.localeCompare(b.title));
    if (!first) {
      return;
    }

    throw redirect({ to: '/components/$componentID', params: { componentID: first.slug } });
  },
});
