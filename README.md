


## Overview

This project is a test automation

## Installation

To set up the project, follow these steps:

1. **Clone the Repository**:
   
   ```bash
   git clone https://github.com/gadiim/01.10.24_playwright_test_project.git
   cd 01.10.24_playwright_test_project
   ```
3. **Install Dependencies**: Run the following command to install the required Node.js packages:

```bash
npm install
```

## Running Tests
Інструкції по запуску тестів локально і на BrowserStack

**Running tests locally**
```bash
npm run test
```

**Running tests on BrowserStack**
```bash
npm run test
```

**Generate Allure Reports**
To generate Allure reports after running the tests, use the following commands:
1. Generate the Allure report:
   ```bash
   npm run allure:generate
   ```

2. Open the Allure report in your default web browser:
   ```bash
   npm run allure
   ```
   
## Налаштування


Додайте свої облікові дані BrowserStack у секрети GitHub:

-  BROWSERSTACK_USERNAME

-  BROWSERSTACK_ACCESS_KEY

-  BROWSERSTACK_ANDROID_APP_ID

## Test Structure

The tests are organized in the following structure:
   ```sql
mobile_native_application_testing/
├── config/
│   ├── wdio.conf.android.bs.ts       -- Configuration for BrowserStack
│   └── wdio.conf.android.ts          -- Local configuration
├── test/
│   ├── specs/
│   │   └── test.e2e.ts               -- End-to-end test cases for the calculator
│   └── pageobjects/
│       └── calculator.ts             -- Page object methods for the calculator
├── reporters/                        -- Directory for Allure and other reports
│   ├── allure-results/               -- Allure results
├── .github/
│   └── workflows/
│       └── test.yml                  -- GitHub Actions CI workflow
├── .gitignore                        -- Git ignore file
├── package.json                      -- Project dependencies and scripts
├── tsconfig.json                     -- TypeScript configuration
└── README.md                         -- Project documentation
```
