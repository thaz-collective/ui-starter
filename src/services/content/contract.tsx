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

const validatorSlug = v.object({
  slug: v.string(),
});

const getComponentBySlug = createServerFn({ method: 'POST' })
  .validator(validatorSlug)
  .handler(({ data: { slug } }) => {
    const component = allComponents.find((componentCtx) => componentCtx.slug === slug);
    if (component) {
      return component;
    }

    console.error(`component slug not found: ${slug}`);
    throw notFound();
  });

export const getComponentFrontMatterMetaBySlug = createServerFn({ method: 'POST' })
  .validator(validatorSlug)
  .handler(async ({ data }) => {
    const component = await getComponentBySlug({
      data,
    });

    return {
      slug: component.slug,
      title: component.title,
      date: component.date,
      author: component.author,
    };
  });

export const getComponentMDXBySlug = createServerFn({ method: 'POST' })
  .validator(validatorSlug)
  .handler(async ({ data }) => {
    const component = await getComponentBySlug({
      data,
    });

    return {
      mdx: component.mdx,
    };
  });
