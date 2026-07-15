import { createFileRoute, notFound } from '@tanstack/react-router';

import { MDXContent } from '@content-collections/mdx/react';
import { allPages } from 'content-collections';

export const Route = createFileRoute('/posts/$')({
  component: RouteComponent,
});

function RouteComponent() {
  const { _splat } = Route.useParams();

  console.info('slug', _splat);
  console.info('allPages', allPages);
  const page = allPages.find((pageCtx) => pageCtx.slug === _splat);
  if (!page) {
    throw notFound();
  }

  return (
    <main>
      <h1>{'Posts'}</h1>
      <ul>
        {allPages.map((pageCtx) => (
          <li key={pageCtx.slug}>
            <h2>{pageCtx.title}</h2>
            <MDXContent code={pageCtx.mdx} />
            <br />
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </main>
  );

  // const MDXContent = page.mdx;
  //
  // return (
  //   <article className="post">
  //     <header>
  //       <h2>{page.title}</h2>
  //     </header>
  //     <div className="content">
  //       <MDXContent />
  //     </div>
  //     <footer>
  //       <p>
  //         {'By '}
  //         {page.author}
  //       </p>
  //       <time>{page.date}</time>
  //     </footer>
  //   </article>
  // );

  // return <div>Hello "/posts/$slug"!</div>;
}
