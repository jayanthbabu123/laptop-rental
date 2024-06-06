import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copy } from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: '_redirects', dest: 'dist' }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
});
