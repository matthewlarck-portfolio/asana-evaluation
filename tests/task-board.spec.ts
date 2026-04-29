import { test } from '@playwright/test';
import { login } from '../utils/auth';
import { taskCases } from '../data/taskCases';
import {
  navigateToApp,
  verifyTaskInColumn,
  verifyTaskTags,
} from '../utils/board';

for (const taskCase of taskCases) {
  test(`${taskCase.app} - ${taskCase.task} appears in ${taskCase.column}`, async ({ page }) => {
    await login(page);

    await navigateToApp(page, taskCase.app);

    await verifyTaskInColumn(page, taskCase.column, taskCase.task);

    await verifyTaskTags(page, taskCase.task, taskCase.tags);
  });
}