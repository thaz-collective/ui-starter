import { createFileRoute } from '@tanstack/react-router';

import { useSuspenseQueryDeferred } from '@thaz/network-util/react-query';

import { MDXContent } from '@content-collections/mdx/react';

import { Button } from '#src/common/components/button';
import { Card } from '#src/common/components/card';
// import { Checkbox } from '#src/common/components/checkbox';
// import { ComboBox } from '#src/common/components/combo-box';
// import { ListBox } from '#src/common/components/list-box';
// import { RadioGroup } from '#src/common/components/radio-group';
// import { SearchField } from '#src/common/components/search-field';
// import { Select } from '#src/common/components/select';
// import { Slider } from '#src/common/components/slider';
import { Surface } from '#src/common/components/surface';
// import { Switch } from '#src/common/components/switch';
import { Table } from '#src/common/components/table';
// import { TagGroup } from '#src/common/components/tag-group';
// import { DataTableDemo } from '#src/common/docs/data-table-demo';
import { H2, H3 } from '#src/common/docs/heading';
import { Preview } from '#src/common/docs/preview';
import { PropsTable } from '#src/common/docs/props-table';
import { dateTimePickerExamples } from '#src/examples/date-time-picker';
import { numberFieldExamples } from '#src/examples/number-field';
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
        Button,
        Card,
        // Checkbox,
        // ComboBox,
        // DataTableDemo,
        // ListBox,
        // RadioGroup,
        // SearchField,
        // Select,
        // Slider,
        Surface,
        // Switch,
        Table,
        // TagGroup,
        ...dateTimePickerExamples,
        ...numberFieldExamples,
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
