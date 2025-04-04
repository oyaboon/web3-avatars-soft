import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'demo',
    emptyOutDir: true,
  },
  root: 'src/demo',
  base: './',
  publicDir: false,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}); 