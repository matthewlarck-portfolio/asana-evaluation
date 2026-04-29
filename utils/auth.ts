import { Page, expect } from '@playwright/test';

// Reusable login helper used across multiple tests
// Keeps authentication steps in one place instead of repeating them
export async function login(page: Page) {

  // Open the application using the baseURL from Playwright config
  await page.goto('/');

  // Enter demo credentials provided in the evaluation
  await page.getByRole('textbox', { name: /Username/i }).fill('admin');
  await page.getByRole('textbox', { name: /Password/i }).fill('password123');

  // Submit login form
  await page.getByRole('button', { name: /Sign in/i }).click();

  // Confirm login succeeded by checking navigation to the application board
  // Web Application button acts as proof user reached the dashboard
  await expect(page.getByRole('button', { name: /Web Application/i })).toBeVisible();
}