import { test, expect } from '@playwright/test';
import { login } from '../utils/auth';

// Basic smoke test to confirm login works successfully
test('user can log in to demo app', async ({ page }) => {

  // Reuse shared login helper instead of duplicating login steps here
  await login(page);
  
  // Confirm user lands on the application dashboard after login
  // "Web Application" heading acts as proof login succeeded
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Web Application' })).toBeVisible();
});