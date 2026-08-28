// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
//
// /// <reference types="@vitest/browser-playwright" />
// /// <reference types="vitest/config" />
// import { defineConfig, lazyPlugins } from 'vite-plus';
// import tailwindcss from '@tailwindcss/vite';
// import viteJSPluginReact from '@vitejs/plugin-react';
// // import { playwright } from '@vitest/browser-playwright';
//
// import { oxfmtConfig } from '@thaz/oxfmt-config';
// import { nativeConfig, jsPluginConfig } from '@thaz/oxlint-config';
//
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
//
// // More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
// export default defineConfig({
//   // staged: {
//   //   '*.{js,ts,tsx}': 'vp check --fix',
//   // },
//   run: {
//     cache: {
//       scripts: false,
//       tasks: true,
//     },
//     tasks: {
//       dev: {
//         command: 'vp dev',
//         input: [
//           {
//             auto: true,
//           },
//           '!coverage/**',
//         ],
//       },
//       build: {
//         command: 'vp pack',
//         input: [
//           {
//             auto: true,
//           },
//           '!coverage/**',
//         ],
//       },
//       check: {
//         command: 'vp check',
//         input: [
//           {
//             auto: true,
//           },
//           '!coverage/**',
//         ],
//       },
//       fmt: {
//         command: 'vp fmt',
//         input: [
//           {
//             auto: true,
//           },
//           '!coverage/**',
//         ],
//       },
//       lint: {
//         command: 'vp lint',
//         input: [
//           {
//             auto: true,
//           },
//           '!coverage/**',
//         ],
//       },
//     },
//   },
//   resolve: {
//     tsconfigPaths: true,
//   },
//   base: '/ui-starter',
//   plugins: lazyPlugins(() => [
//     tailwindcss(),
//     viteJSPluginReact({
//       include: [/\.(?<ext>js|jsx|ts|tsx)$/],
//     }),
//   ]),
//   fmt: {
//     ...oxfmtConfig,
//     sortTailwindcss: {
//       stylesheet: './src/global.css',
//       functions: ['tv', 'cn', 'twMerge'],
//     },
//   },
//   lint: {
//     extends: [nativeConfig],
//     options: {
//       typeAware: true,
//       typeCheck: true,
//     },
//     ignorePatterns: ['src/route-tree.gen.ts', '.content-collections/**'],
//     jsPlugins: jsPluginConfig.jsPlugins,
//     rules: {
//       ...jsPluginConfig.rules,
//     },
//     overrides: [
//       {
//         files: ['**/src/routes/**/$*.tsx'],
//         rules: {
//           'unicorn/filename-case': 'off',
//         },
//       },
//     ],
//   },
//   test: {
//     projects: [
//       {
//         extends: true,
//         plugins: [
//           // The plugin will run tests for the stories defined in your Storybook config
//           // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
//           storybookTest({
//             configDir: path.join(dirname, '.storybook'),
//           }),
//         ],
//         test: {
//           name: 'storybook',
//           browser: {
//             enabled: true,
//             headless: true,
//             provider: playwright({}),
//             instances: [
//               {
//                 browser: 'chromium',
//               },
//             ],
//           },
//         },
//       },
//     ],
//   },
// });

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
      include: [/\.(?<ext>js|jsx|ts|tsx|md|mdx)$/],
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
