import { defineConfig } from 'vite'
import builtins from 'builtin-modules'
import path, { join } from 'path'
import pkg from './package.json'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig((env) => ({
  build: {
    target: 'node22',
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        app: 'src/backend/index.ts',
      },
      formats: ['cjs'],
    },
    modulePreload: {
      polyfill: false,
    },
    ssr: true,
    rollupOptions: {
      output: {
        entryFileNames: `${pkg.name}-backend.cjs`,
        chunkFileNames: `${pkg.name}-backend.cjs`,
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
