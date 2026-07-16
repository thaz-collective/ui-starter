import viteJSPluginReact from '@vitejs/plugin-react';
import rsc from '@vitejs/plugin-rsc';
import { defineConfig } from 'vite-plus';

import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

import { oxfmtConfig } from '@thaz/oxfmt-config';
import { nativeConfig, jsPluginConfig } from '@thaz/oxlint-config';

import contentCollections from '@content-collections/vite';
import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

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
      },
      build: {
        command: 'vp pack',
      },
      check: {
        command: 'vp check',
      },
      fmt: {
        command: 'vp fmt',
      },
      lint: {
        command: 'vp lint',
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  base: '/ui-starter',
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
      ...contentCollections({
        // TODO: need to figure out how to generate this at beginning.
        //  If I have this it doesn't work.
        // environment: 'ssr',
        configPath: './content-collections.config.ts',
      }),
    },
    devtools(),
    tailwindcss(),
    tanstackStart({
      rsc: {
        enabled: true,
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        retryCount: 2,
      },
      // spa: {
      //   enabled: true,
      //   prerender: {
      //     crawlLinks: true,
      //     retryCount: 2,
      //   },
      // },
      router: {
        entry: './configs/tanstack-router.tsx',
        generatedRouteTree: './route-tree.gen.ts',
      },
    }),
    rsc(),
    viteJSPluginReact({
      include: [/\.(?<ext>js|jsx|ts|tsx|md|mdx)$/],
    }),
  ],
  fmt: {
    ...oxfmtConfig,
    sortTailwindcss: {
      stylesheet: './src/global.css',
      functions: ['tv', 'twMerge'],
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
