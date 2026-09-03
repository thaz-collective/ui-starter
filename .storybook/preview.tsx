/// <reference types="vite-plus/client" />
import type { Decorator, Preview } from '@storybook/react-vite';

// oxlint-disable-next-line import/no-relative-parent-imports -- Importing from #src doesn't work for some reason?
import '../src/global.css';
import './preview.css';

const withThemeAndBrand: Decorator = (Story, { globals }) => {
  const { theme, brand } = globals;

  if (theme) {
    // oxlint-disable-next-line typescript/dot-notation -- Need accessor here for TypeScript
    document.documentElement.dataset['theme'] = String(theme);
  } else {
    // oxlint-disable-next-line typescript/dot-notation -- Need accessor here for TypeScript
    delete document.documentElement.dataset['theme'];
  }

  if (brand) {
    // oxlint-disable-next-line typescript/dot-notation -- Need accessor here for TypeScript
    document.documentElement.dataset['brand'] = String(brand);
  } else {
    // oxlint-disable-next-line typescript/dot-notation -- Need accessor here for TypeScript
    delete document.documentElement.dataset['brand'];
  }

  return <Story />;
};

const preview: Preview = {
  initialGlobals: {
    theme: 'light',
    brand: 'brand-1',
  },
  globalTypes: {
    theme: {
      description: 'Color scheme',
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    brand: {
      description: 'Customer brand theme',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'brand-1', title: 'Brand 1' },
          { value: 'brand-2', title: 'Brand 2' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeAndBrand],
  parameters: {
    /**
     * `<Canvas>`/`<Story>` blocks in MDX docs default to `inline: false`, which mounts each one
     * in its own separate, one-off iframe instead of the docs page's own document. That iframe
     * doesn't stay subscribed to toolbar global updates the way the Story/Canvas tab's iframe
     * does, so switching Mode/Brand there has no visible effect on the docs page. Forcing inline
     * rendering makes every doc canvas share the same document/globals as the rest of the page.
     */
    docs: {
      story: {
        inline: true,
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
