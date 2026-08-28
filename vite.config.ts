import { defineConfig } from 'vite-plus';
import tailwindcss from '@tailwindcss/vite';
import viteJSPluginReact from '@vitejs/plugin-react';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

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
        input: [
          {
            auto: true,
          },
          '!coverage/**',
        ],
      },
      build: {
        command: 'vp pack',
        input: [
          {
            auto: true,
          },
          '!coverage/**',
        ],
      },
      check: {
        command: 'vp check',
        input: [
          {
            auto: true,
          },
          '!coverage/**',
        ],
      },
      fmt: {
        command: 'vp fmt',
        input: [
          {
            auto: true,
          },
          '!coverage/**',
        ],
      },
      lint: {
        command: 'vp lint',
        input: [
          {
            auto: true,
          },
          '!coverage/**',
        ],
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    externalizeDeps(),
    tailwindcss(),
    viteJSPluginReact({
      include: [/\.(?<ext>js|jsx|ts|tsx)$/],
    }),
  ],
  // test: {
  //   setupFiles: ['test/setup.ts'],
  //   coverage: {
  //     enabled: true,
  //     include: ['src/**/*.ts'],
  //     provider: 'istanbul',
  //     thresholds: {
  //       branches: 80,
  //       functions: 80,
  //       lines: 80,
  //       statements: 80,
  //     },
  //   },
  //   projects: [
  //     // {
  //     //   extends: true,
  //     //   plugins: [
  //     //     storybookTest({
  //     //       configDir: path.join()
  //     //     }),
  //     //   ],
  //     //   test: {
  //     //     name: 'storybook',
  //     //     browser: {
  //     //       enabled: true,
  //     //       headless: true,
  //     //       provider: playwright(),
  //     //       instances: [
  //     //         { browser: 'chromium' },
  //     //       ],
  //     //     },
  //     //   },
  //     // },
  //     // {
  //     //   extends: true,
  //     //   test: {
  //     //     name: 'node',
  //     //     include: ['test/**/*.node.test.ts'],
  //     //   },
  //     // },
  //     // {
  //     //   extends: true,
  //     //   test: {
  //     //     include: ['test/**/*.browser.test.{ts,tsx}'],
  //     //     browser: {
  //     //       enabled: true,
  //     //       provider: playwright(),
  //     //       instances: [
  //     //         { name: 'browser-chromium', browser: 'chromium' },
  //     //         { name: 'browser-firefox', browser: 'firefox' },
  //     //       ],
  //     //     },
  //     //   },
  //     // },
  //     // {
  //     //   extends: true,
  //     //   test: {
  //     //     name: 'types',
  //     //     include: ['test/**/*.test-d.ts'],
  //     //     typecheck: {
  //     //       enabled: true,
  //     //     },
  //     //   },
  //     // },
  //   ],
  // },
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
      {
        files: ['**/src/**/*.stories.{ts,tsx}', '**/.storybook/**'],
        rules: {
          'import/no-default-export': 'off',
        },
      },
    ],
  },
});
