import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { watch } from 'vite-plugin-watch';

export default defineConfig({
  plugins: [
    watch({
      pattern: 'app/{Data,Enums}/**/*.php',
      command: 'php artisan typescript:transform',
    }),
    laravel({
      input: 'inertia/app.tsx',
      ssr: 'inertia/ssr.tsx',
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './inertia'),
    },
  },
});
