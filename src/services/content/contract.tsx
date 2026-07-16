import { notFound } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

import { allComponents } from 'content-collections';
import * as v from 'valibot';

export const getComponentSlugList = createServerFn({ method: 'GET' }).handler(() => {
  return allComponents
    .toSorted((a, b) => a.title.localeCompare(b.title))
    .map((componentCtx) => {
      return {
        title: componentCtx.title,
        author: componentCtx.author,
        slug: componentCtx.slug,
      };
    });
});

export const getComponentBySlug = createServerFn({ method: 'POST' })
  .validator(
    v.object({
      slug: v.string(),
    }),
  )
  .handler(({ data: { slug } }) => {
    const component = allComponents.find((componentCtx) => componentCtx.slug === slug);
    if (component) {
      return {
        title: component.title,
        date: component.date,
        author: component.author,
        slug: component.slug,
        mdx: component.mdx,
      };
    }

    throw notFound();
  });
