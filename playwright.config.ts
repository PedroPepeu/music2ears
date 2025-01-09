import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Directory where your tests are located
  timeout: 30000,      // Timeout for each test
  use: {
    headless: true,    // Run tests in headless mode (no UI)
    viewport: { width: 1280, height: 720 },  // Set browser viewport size
  },
});
