import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests in parallel where possible
  fullyParallel: true,

  // Prevent accidental committed test.only calls in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI for more consistent runs
  workers: process.env.CI ? 1 : undefined,

  // Generate an HTML report after test runs
  reporter: 'html',

  use: {
    // Base URL for the demo app under test
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app',

    // Capture trace only when a test retries
    trace: 'on-first-retry',
  },

  // Run tests across major browser engines
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});