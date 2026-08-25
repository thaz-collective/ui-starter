import { createFileRoute } from '@tanstack/react-router';

import { useSuspenseQueryDeferred } from '@thaz/network-util/react-query';

import { MDXContent } from '@content-collections/mdx/react';

import { H2, H3 } from '#src/common/docs/heading';
import { Preview } from '#src/common/docs/preview';
import { PropsTable } from '#src/common/docs/props-table';
import { buttonExamples } from '#src/examples/button';
import { cardExamples } from '#src/examples/card';
import { dateTimePickerExamples } from '#src/examples/date-time-picker';
import { numberFieldExamples } from '#src/examples/number-field';
import { selectExamples } from '#src/examples/select';
import { separatorExamples } from '#src/examples/separator';
import { surfaceExamples } from '#src/examples/surface';
import { tableExamples } from '#src/examples/table';
import { textFieldExamples } from '#src/examples/text-field';
import { timeFieldExamples } from '#src/examples/time-field';
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
        ...buttonExamples,
        ...cardExamples,
        ...dateTimePickerExamples,
        ...numberFieldExamples,
        ...selectExamples,
        ...separatorExamples,
        ...surfaceExamples,
        ...tableExamples,
        ...textFieldExamples,
        ...timeFieldExamples,
        H2,
        H3,
        Preview,
        PropsTable,
      }}
    />
  );
}
