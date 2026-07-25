import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createApiMiddleware } from './src/services/apiMiddleware';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createApiMiddleware()
  ],
});
