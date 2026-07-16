import * as t from '@thaz/temporal-util/valibot';

import type { WriterHook } from '@content-collections/core';
import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import * as v from 'valibot';

export const components = defineCollection({
  name: 'components',
  directory: './src/pages/components',
  include: ['*.mdx'],
  schema: v.object({
    title: v.string(),
    date: v.pipe(
      v.string(),
      t.toPlainDate(),
      v.transform((date) => date.toJSON()),
    ),
    author: v.array(v.string()),
    content: v.string(),
  }),
  transform: async (data, context) => {
    const { _meta, ...component } = data;
    const mdx = await compileMDX(context, data);

    return {
      ...component,
      ..._meta,
      slug: _meta.path,
      mdx,
    };
  },
});

const serverOnlyHook: WriterHook = ({ fileType, content }) => {
  if (fileType === 'typeDefinition') {
    return { content };
  }
  return {
    content: `import '@tanstack/react-start/server-only';\n\n${content}`,
  };
};

export default defineConfig({
  content: [components],
  hooks: {
    writer: [serverOnlyHook],
  },
});
