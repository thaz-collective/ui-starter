import * as t from '@thaz/temporal-util/valibot';

import type { MDXContent } from 'mdx/types';
import { defineCollection, defineConfig, createDefaultImport } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import * as v from 'valibot';

export const componentsV1 = defineCollection({
  name: 'componentsV1',
  directory: './src/pages',
  include: ['*.mdx'],
  parser: 'frontmatter-only',
  schema: v.object({
    title: v.string(),
    summary: v.string(),
    date: v.pipe(
      v.string(),
      t.toPlainDate(),
      v.transform((date) => date.toJSON()),
    ),
    author: v.string(),
  }),
  transform: ({ _meta, ...post }) => {
    const mdx = createDefaultImport<MDXContent>(`#src/pages/${_meta.filePath}`);

    return {
      ...post,
      slug: _meta.path,
      mdx,
    };
  },
});

export const components = defineCollection({
  name: 'pages',
  directory: './src/pages',
  include: ['*.mdx'],
  schema: v.object({
    title: v.string(),
    summary: v.string(),
    date: v.pipe(
      v.string(),
      t.toPlainDate(),
      v.transform((date) => date.toJSON()),
    ),
    author: v.string(),
  }),
  transform: async (data, context) => {
    const { _meta, ...post } = data;
    const mdx = await compileMDX(context, data);

    return {
      ...post,
      slug: _meta.path,
      mdx,
    };
  },
});

export default defineConfig({
  content: [components],
});
