import { queryOptions } from '@tanstack/react-query';

import * as t from '@thaz/temporal-util/valibot';

import { Temporal } from '@js-temporal/polyfill';
import * as v from 'valibot';

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
      gcTime: Temporal.Duration.from({ minutes: 30 }).total({ unit: 'milliseconds' }),
      staleTime: Temporal.Duration.from({ minutes: 5 }).total({ unit: 'milliseconds' }),
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
      gcTime: Temporal.Duration.from({ minutes: 30 }).total({ unit: 'milliseconds' }),
      staleTime: Temporal.Duration.from({ minutes: 5 }).total({ unit: 'milliseconds' }),
      queryKey: [...contentOptions.getComponentFrontMatterMetaBySlug(), data] as const,
      queryFn: async ({ signal }) => {
        return await getComponentFrontMatterMetaBySlug({
          signal,
          data,
        });

        // const response = await getComponentFrontMatterMetaBySlug({
        //   signal,
        //   data,
        // });
        //
        // return v.parse(
        //   v.object({
        //     slug: v.string(),
        //     title: v.string(),
        //     date: v.pipe(v.string(), t.toPlainDate()),
        //     author: v.array(v.string()),
        //   }),
        //   response,
        // );
      },
    });
  },
  selectComponentFrontMatterMetaBySlugParseTypes: (
    response: Awaited<ReturnType<typeof getComponentFrontMatterMetaBySlug>>,
  ) => {
    return v.parse(
      v.object({
        slug: v.string(),
        title: v.string(),
        date: v.pipe(v.string(), t.toPlainDate()),
        author: v.array(v.string()),
      }),
      response,
    );
  },

  getComponentMDXBySlug: () => [...contentOptions.serviceEntity(), 'getComponentMDXBySlug'] as const,
  getComponentMDXBySlugQueryOptions: (data: Parameters<typeof getComponentMDXBySlug>[0]['data']) => {
    return queryOptions({
      gcTime: Temporal.Duration.from({ minutes: 30 }).total({ unit: 'milliseconds' }),
      staleTime: Temporal.Duration.from({ minutes: 5 }).total({ unit: 'milliseconds' }),
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
