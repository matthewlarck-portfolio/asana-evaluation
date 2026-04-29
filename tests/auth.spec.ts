import { test, expect } from '@playwright/test';
import { login } from '../utils/auth';

test('user can log in to demo app', async ({ page }) => {
  await login(page);

  await expect(page.getByRole('banner').getByRole('heading', { name: 'Web Application' })).toBeVisible();
});