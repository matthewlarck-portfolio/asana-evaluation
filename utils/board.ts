import { Page, expect } from '@playwright/test';

export async function navigateToApp(page: Page, appName: string) {
  await page.getByText(appName, { exact: true }).click();
}

export async function verifyTaskInColumn(
  page: Page,
  columnName: string,
  taskName: string
) {
  const column = page
    .locator('div')
    .filter({ hasText: columnName })
    .filter({ hasText: taskName });

  await expect(column.getByText(taskName, { exact: true })).toBeVisible();
}

export async function verifyTaskTags(
  page: Page,
  taskName: string,
  tags: string[]
) {
  const taskCard = page
    .locator('div')
    .filter({ hasText: taskName });

  for (const tag of tags) {
    await expect(taskCard.getByText(tag, { exact: true })).toBeVisible();
  }
}