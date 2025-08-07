import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isTestPageBuild = mode === 'test';
  const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
  const branchName = process.env.GITHUB_HEAD_REF || '';

  return {
    base: isTestPageBuild && repoName && branchName ? `/${repoName}/pr/${branchName}/` : '/',
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
