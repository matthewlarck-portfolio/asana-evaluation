import { Page, expect } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('/');

  await page.getByRole('textbox', { name: /Username/i }).fill('admin');
  await page.getByRole('textbox', { name: /Password/i }).fill('password123');
  await page.getByRole('button', { name: /Sign in/i }).click();

  await expect(page.getByRole('button', { name: /Web Application/i })).toBeVisible();
}