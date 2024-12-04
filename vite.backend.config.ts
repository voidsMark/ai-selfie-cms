import { defineConfig } from 'vite'
import builtins from 'builtin-modules'
import path, { join } from 'path'
import pkg from './package.json'

export default defineConfig((env) => ({
  build: {
    target: 'node18',
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        app: 'src/backend/index.ts',
      },
      formats: ['cjs'],
      name: 'app',
    },
    modulePreload: {
      polyfill: false,
    },
    ssr: true,
    rollupOptions: {
      output: {
        chunkFileNames: '[name].cjs',
      },
      external: [
        ...Object.keys(pkg.dependencies),
        /^node:/,
        ...builtins,
      ],
    },
    outDir: join(__dirname, 'dist/backend'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
