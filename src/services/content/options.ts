import { queryOptions } from '@tanstack/react-query';

import {
  getComponentSlugList,
  getComponentFrontMatterMetaBySlug,
  getComponentMDXBySlug,
} from '#src/services/content/contract';

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

  getComponentFrontMatterMetaBySlug: () =>
    [...contentOptions.serviceEntity(), 'getComponentFrontMatterMetaBySlug'] as const,
  getComponentFrontMatterMetaBySlugQueryOptions: (
    data: Parameters<typeof getComponentFrontMatterMetaBySlug>[0]['data'],
  ) => {
    return queryOptions({
      queryKey: [...contentOptions.getComponentFrontMatterMetaBySlug(), data] as const,
      queryFn: async ({ signal }) => {
        return await getComponentFrontMatterMetaBySlug({
          signal,
          data,
        });
      },
    });
  },

  getComponentMDXBySlug: () => [...contentOptions.serviceEntity(), 'getComponentMDXBySlug'] as const,
  getComponentMDXBySlugQueryOptions: (data: Parameters<typeof getComponentMDXBySlug>[0]['data']) => {
    return queryOptions({
      queryKey: [...contentOptions.getComponentMDXBySlug(), data] as const,
      queryFn: async ({ signal }) => {
        return await getComponentMDXBySlug({
          signal,
          data,
        });
      },
    });
  },
};
