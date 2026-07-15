import * as t from '@thaz/temporal-util/valibot';

import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import * as v from 'valibot';

export const posts = defineCollection({
  name: 'posts',
  directory: './src/pages/posts',
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
  }),
  transform: async (data, context) => {
    const { _meta, ...component } = data;
    const mdx = await compileMDX(context, data);

    return {
      ...component,
      slug: _meta.path,
      mdx,
    };
  },
});

export default defineConfig({
  content: [posts, components],
});
