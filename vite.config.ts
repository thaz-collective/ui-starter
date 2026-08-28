import { defineConfig } from 'vite-plus';
import tailwindcss from '@tailwindcss/vite';
import viteJSPluginReact from '@vitejs/plugin-react';

import { oxfmtConfig } from '@thaz/oxfmt-config';
import { nativeConfig, jsPluginConfig } from '@thaz/oxlint-config';

export default defineConfig({
  staged: {
    '*.{js,ts,tsx}': 'vp check --fix',
  },
  run: {
    cache: {
      scripts: false,
      tasks: true,
    },
    tasks: {
      dev: {
        command: 'vp dev',
        input: [{ auto: true }, '!coverage/**'],
      },
      build: {
        command: 'vp pack',
        input: [{ auto: true }, '!coverage/**'],
      },
      check: {
        command: 'vp check',
        input: [{ auto: true }, '!coverage/**'],
      },
      fmt: {
        command: 'vp fmt',
        input: [{ auto: true }, '!coverage/**'],
      },
      lint: {
        command: 'vp lint',
        input: [{ auto: true }, '!coverage/**'],
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  base: '/ui-starter',
  plugins: [
    tailwindcss(),
    viteJSPluginReact({
      include: [/\.(?<ext>js|jsx|ts|tsx)$/],
    }),
  ],
  fmt: {
    ...oxfmtConfig,
    sortTailwindcss: {
      stylesheet: './src/global.css',
      functions: ['tv', 'cn', 'twMerge'],
    },
  },
  lint: {
    extends: [nativeConfig],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    ignorePatterns: ['src/route-tree.gen.ts', '.content-collections/**'],
    jsPlugins: jsPluginConfig.jsPlugins,
    rules: {
      ...jsPluginConfig.rules,
    },
    overrides: [
      {
        files: ['**/src/routes/**/$*.tsx'],

        rules: {
          'unicorn/filename-case': 'off',
        },
      },
    ],
  },
});
