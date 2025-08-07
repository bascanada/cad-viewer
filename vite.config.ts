import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isTestPageBuild = mode === 'test';

  return {
    plugins: [
      svelte({
        compilerOptions: {
          customElement: true,
        },
      }),
    ],
    build: isTestPageBuild
      ? {
          outDir: 'dist-test',
          rollupOptions: {
            input: {
              main: path.resolve(__dirname, 'public/test.html'),
            },
          },
        }
      : {
          lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            fileName: 'components',
            formats: ['es'],
          },
        },
    publicDir: 'public',
  };
});
