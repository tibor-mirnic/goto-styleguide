/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import * as vite from 'vite';
import * as path from 'path';

export default defineConfig({
  root: __dirname,  
  plugins: [
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.app.json'),
      exclude: [
        '**/*.test.*',        
        '**/*.stories.*',
        'src/stories'
      ]
    }),
    peerDepsExternal() as vite.Plugin,
    {
      ...copy({
        hook: 'writeBundle',
        targets: [
          {
            src: 'src/scss/common/*',
            dest: 'dist/scss/common'
          },
          {
            src: 'src/scss/public/*',
            dest: 'dist/scss/public'
          },
          {
            src: 'src/scss/_index.scss',
            dest: 'dist/scss'
          }
        ]
      }),
      enforce: 'post',
      apply: 'build'
    }
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'StyleGuide',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime']
    }
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: 'coverage',
      provider: 'v8',
    },
  },
});
