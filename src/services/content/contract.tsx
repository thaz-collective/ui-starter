import { notFound } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

import { allComponents } from 'content-collections';
import * as v from 'valibot';

export const getComponentSlugList = createServerFn({ method: 'GET' }).handler(() => {
  return allComponents
    .toSorted((a, b) => a.title.localeCompare(b.title))
    .map((componentCtx) => {
      return {
        slug: componentCtx.slug,
        title: componentCtx.title,
      };
    });
});

export const getComponentFrontMatterMetaBySlug = createServerFn({ method: 'POST' })
  .validator(
    v.object({
      slug: v.string(),
    }),
  )
  .handler(({ data: { slug } }) => {
    const component = allComponents.find((componentCtx) => componentCtx.slug === slug);
    if (component) {
      return {
        slug: component.slug,
        title: component.title,
        date: component.date,
        author: component.author,
      };
    }

    throw notFound();
  });

export const getComponentMDXBySlug = createServerFn({ method: 'POST' })
  .validator(
    v.object({
      slug: v.string(),
    }),
  )
  .handler(({ data: { slug } }) => {
    const component = allComponents.find((componentCtx) => componentCtx.slug === slug);
    if (component) {
      return {
        mdx: component.mdx,
      };
    }

    throw notFound();
  });
