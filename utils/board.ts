import { Page, expect } from '@playwright/test';

export async function navigateToApp(page: Page, appName: string) {
  await page.getByRole('button', { name: new RegExp(appName, 'i') }).click();
}

export async function verifyTaskInColumn(
  page: Page,
  columnName: string,
  taskName: string
) {
  const column = page
    .locator('div')
    .filter({ has: page.getByRole('heading', { name: new RegExp(columnName, 'i') }) });

  await expect(
    column.getByRole('heading', { name: taskName })
  ).toBeVisible();
}

export async function verifyTaskTags(
  page: Page,
  taskName: string,
  tags: string[]
) {
  const taskCard = page
    .locator('div')
    .filter({ has: page.getByRole('heading', { name: taskName }) });

    for (const tag of tags) {
    await expect(
        taskCard.getByText(tag, { exact: true }).first()
    ).toBeVisible();
}
}