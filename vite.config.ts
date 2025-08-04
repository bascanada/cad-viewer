import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte({
      // 1. Compile to a web component (custom element)
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  // 2. Configure the build to output a library
  build: {
    lib: {
      // The main entry file that imports your components
      entry: path.resolve(__dirname, 'src/main.js'),
      // The name of the output bundle
      fileName: 'components',
      // The formats to output (es for modern browsers)
      formats: ['es'],
    },
  },
});
