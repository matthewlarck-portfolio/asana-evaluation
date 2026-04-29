import { Page, expect } from '@playwright/test';

// Navigate to the correct application board
// Example: Web Application or Mobile Application
export async function navigateToApp(page: Page, appName: string) {

  // Use app name passed from test data to click the matching board button
  await page.getByRole('button', { name: new RegExp(appName, 'i') }).click();
}

// Verify a task appears in the expected board column
// Example: confirm a task exists in To Do, In Progress, or Done
export async function verifyTaskInColumn(
  page: Page,
  columnName: string,
  taskName: string
) {

  // Find the column container using the column heading text
  const column = page
    .locator('div')
    .filter({ has: page.getByRole('heading', { name: new RegExp(columnName, 'i') }) });

  // Confirm the expected task appears inside that column
  await expect(
    column.getByRole('heading', { name: taskName })
  ).toBeVisible();
}

// Verify expected tags exist on a task card
// Example: Feature, Bug, Design, High Priority
export async function verifyTaskTags(
  page: Page,
  taskName: string,
  tags: string[]
) {

    // Locate the task card by task name
  const taskCard = page
    .locator('div')
    .filter({ has: page.getByRole('heading', { name: taskName }) });

    // Loop through each expected tag from the test data
    for (const tag of tags) {
    
        // Verify each tag appears on the task card
        // .first() helps handle repeated tag labels in strict mode
        await expect(
        taskCard.getByText(tag, { exact: true }).first()
    ).toBeVisible();
}
}