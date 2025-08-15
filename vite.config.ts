import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

export default defineConfig({
  plugins: [
    svelte({
      // 1. Compile to a web component (custom element)
      compilerOptions: {
        customElement: true,
      },
    }),
    // Plugin to copy and modify demo files after build
    {
      name: 'copy-demo-files',
      writeBundle() {
        try {
          // Ensure dist directory exists
          fs.mkdirSync('dist', { recursive: true });
          
          // Read the original HTML file
          const htmlContent = fs.readFileSync('index.html', 'utf-8');
          
          // Replace the dev script tag with the built script
          const modifiedHtml = htmlContent.replace(
            '<script type="module" src="/src/main.ts"></script>',
            '<script type="module" src="./components.js"></script>'
          );
          
          // Write the modified HTML to dist
          fs.writeFileSync('dist/index.html', modifiedHtml);
          
          console.log('✅ Demo HTML copied and script paths updated for production');
        } catch (error) {
          console.warn('⚠️ Could not copy demo files:', (error as Error).message);
        }
      }
    }
  ],
  // 2. Configure the build to output a library
  build: {
    lib: {
      // The main entry file that imports your components
      entry: './src/main.ts',
      // The name of the output bundle
      fileName: 'components',
      // The formats to output (es for modern browsers)
      formats: ['es'],
    },
  },
});
