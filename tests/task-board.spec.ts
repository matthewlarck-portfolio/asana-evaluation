import { test } from '@playwright/test';
import { login } from '../utils/auth';
import { taskCases } from '../data/taskCases';
import {
  navigateToApp,
  verifyTaskInColumn,
  verifyTaskTags,
} from '../utils/board';

// Loop through each test scenario defined in taskCases.ts
// Each object represents one acceptance criteria scenario
for (const taskCase of taskCases) {

    // Dynamically create a test for each scenario using the data above
  test(`${taskCase.app} - ${taskCase.task} appears in ${taskCase.column}`, async ({ page }) => {

    // Reusable login step shared across all scenarios
    await login(page);
    
    // Navigate to the correct application board
    // Example: Web Application or Mobile Application
    await navigateToApp(page, taskCase.app);

    // Verify the task appears in the expected column
    // Example: To Do, In Progress, or Done
    await verifyTaskInColumn(page, taskCase.column, taskCase.task);
    
    // Verify the expected tags exist on the task
    // Example: Feature, Bug, Design, High Priority
    await verifyTaskTags(page, taskCase.task, taskCase.tags);
  });
}