/// <reference types="vite-plus/client" />
import type { Preview } from '@storybook/react-vite';

// oxlint-disable-next-line import/no-relative-parent-imports -- Importing from #src doesn't work for some reason?
import '../src/styles/entry.css';
// import '#src/styles/entry.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: 'oklch(0.98 0.004 240)' },
        dark: { name: 'Dark', value: 'oklch(0.11 0.012 240)' },
      },
    },
    controls: {
      matchers: {
        color: /(?<colorMatch>background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
