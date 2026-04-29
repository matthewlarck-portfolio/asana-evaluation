# Asana Evaluation - Playwright TypeScript Test Suite

Playwright-driven automation suite written in TypeScript using a data-driven test design to reduce duplication and improve scalability.

## Validation Results

- 21 tests passing across Chromium, Firefox, and WebKit
- GitHub Actions workflow passing
- Includes 1 login smoke test and 6 data-driven task verification scenarios

---

## Demo Application

https://animated-gingersnap-8cf7f2.netlify.app/

Login Credentials:

Username: admin  
Password: password123

---

## Tech Stack

- Playwright  
- TypeScript  
- Node.js  
- GitHub Actions  

---

## Test Coverage

This suite validates:

- Successful login
- Web Application task verification
- Mobile Application task verification
- Task placement by board column:
  - To Do
  - In Progress
  - Done
- Task tag validation:
  - Feature
  - Bug
  - Design
  - High Priority

---

## Data-Driven Test Design

Test scenarios are maintained in:

```txt
data/taskCases.ts
```

Each scenario defines:

- Application name
- Expected column
- Task name
- Expected tags

Example:

```ts
{
  app: 'Web Application',
  column: 'To Do',
  task: 'Implement user authentication',
  tags: ['Feature', 'High Priority']
}
```

The test spec loops through this data set to dynamically generate reusable test cases without duplicating test logic.

---

## Project Structure

```txt
data/
  taskCases.ts

tests/
  login.spec.ts
  task-board.spec.ts

utils/
  auth.ts
  board.ts

playwright.config.ts
README.md
```

---

## Installation

```bash
npm install
```

Install browsers (if needed):

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run Chromium only:

```bash
npx playwright test --project=chromium
```

Run board verification tests only:

```bash
npx playwright test "tests/task-board.spec.ts" --project=chromium
```

---

## View HTML Report

```bash
npx playwright show-report
```

---

## Notes

This solution uses:

- Reusable helper functions
- Data-driven scenario coverage
- Role-based selectors where possible
- Minimal duplicated test logic
- Scalable structure for adding additional cases