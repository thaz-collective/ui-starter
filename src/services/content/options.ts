import { queryOptions } from '@tanstack/react-query';

import { getComponentSlugList, getComponentBySlug } from '#src/services/content/contract';

export const contentOptions = {
  serviceEntity: () => ['content'] as const,

  getComponentSlugList: () => [...contentOptions.serviceEntity(), 'getComponentSlugList'] as const,
  getComponentSlugListQueryOptions: () => {
    return queryOptions({
      queryKey: [...contentOptions.getComponentSlugList()] as const,
      queryFn: async ({ signal }) => {
        return await getComponentSlugList({
          signal,
        });
      },
    });
  },

  getComponentBySlug: () => [...contentOptions.serviceEntity(), 'getComponentBySlug'] as const,
  getComponentBySlugQueryOptions: (data: Parameters<typeof getComponentBySlug>[0]['data']) => {
    return queryOptions({
      queryKey: [...contentOptions.getComponentBySlug(), data] as const,
      queryFn: async ({ signal }) => {
        return await getComponentBySlug({
          signal,
          data,
        });
      },
    });
  },
};
