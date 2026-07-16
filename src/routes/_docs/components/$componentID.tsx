import { createFileRoute } from '@tanstack/react-router';

import { MDXContent } from '@content-collections/mdx/react';

import { Button } from '#src/common/components/button';
import { Card } from '#src/common/components/card';
import { NumberField } from '#src/common/components/number-field';
import { Surface } from '#src/common/components/surface';
import { TextField } from '#src/common/components/text-field';
import { H2, H3 } from '#src/common/docs/heading';
import { Preview } from '#src/common/docs/preview';
import { PropsTable } from '#src/common/docs/props-table';
import { useSuspenseQueryDeferred } from '#src/common/suspense-query-deferred';
import { contentOptions } from '#src/services/content/options';

export const Route = createFileRoute('/_docs/components/$componentID')({
  loader: async ({ params: { componentID }, context: { queryClient } }) => {
    const frontMatterMetaPromise = queryClient.ensureQueryData({
      ...contentOptions.getComponentFrontMatterMetaBySlugQueryOptions({
        slug: componentID,
      }),
      revalidateIfStale: true,
    });
    const mdxPromise = queryClient.ensureQueryData({
      ...contentOptions.getComponentMDXBySlugQueryOptions({
        slug: componentID,
      }),
      revalidateIfStale: true,
    });

    await Promise.all([frontMatterMetaPromise, mdxPromise]);
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { componentID } = Route.useParams();
  // const {
  //   query: {
  //     data,
  //   },
  // } = useSuspenseQueryDeferred({
  //   ...contentOptions.getComponentFrontMatterMetaBySlugQueryOptions({
  //     slug: componentID,
  //   }),
  //   select: contentOptions.selectComponentFrontMatterMetaBySlugParseTypes
  // });
  // console.info('data', data);

  const {
    query: {
      data: { mdx },
    },
  } = useSuspenseQueryDeferred(
    contentOptions.getComponentMDXBySlugQueryOptions({
      slug: componentID,
    }),
  );

  return (
    <MDXContent
      code={mdx}
      components={{
        Button,
        Card,
        NumberField,
        Surface,
        TextField,
        H2,
        H3,
        Preview,
        PropsTable,
      }}
    />
  );
}
