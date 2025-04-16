import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: "Build",
    lib: {
      entry: path.resolve(__dirname, 'Source/index.ts'),
      name: '@cesium/utils',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
  },
});
