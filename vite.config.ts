import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { UserConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',  // For React testing
    globals: true, // (optional) enables global test functions like `describe` and `it`
  },
} as UserConfig);
