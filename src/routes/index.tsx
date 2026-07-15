import * as fs from 'node:fs';

import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

const filePath = 'count.txt';

const getCount = createServerFn({
  method: 'GET',
}).handler(async () => {
  try {
    return Number(await fs.promises.readFile(filePath, 'utf8'));
  } catch {
    return 0;
  }
});

const updateCount = createServerFn({
  method: 'POST',
})
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await getCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute('/')({
  loader: async () => await getCount(),
  component: Home,
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <button
      type="button"
      onClick={() => {
        void (async () => {
          await updateCount({ data: 1 });
          await router.invalidate();
        })();
      }}
    >
      {`Add 1 to ${state}?`}
    </button>
  );
}
