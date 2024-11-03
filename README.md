


## Overview

This project is a test automation

### Test Cases

The following test cases are designed to validate the core functionalities of the Android Calculator app:

| **Test Case**                   | **Description**                                | **Steps**                                                                                                            |
|---------------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Addition Test**               | Adds 1 and 2 and verifies the result is 3      | 1. Clear the calculator.<br>2. Press 1.<br>3. Press the addition (+) button.<br>4. Press 2.<br>5. Press the equals (=) button.<br>6. Verify the result is 3. |
| **Subtraction Test**            | Subtracts 3 from 4 and verifies the result is 1| 1. Clear the calculator.<br>2. Press 4.<br>3. Press the subtraction (-) button.<br>4. Press 3.<br>5. Press the equals (=) button.<br>6. Verify the result is 1. |
| **Multiplication Test**         | Multiplies 5 by 6 and verifies the result is 30| 1. Clear the calculator.<br>2. Press 5.<br>3. Press the multiplication (*) button.<br>4. Press 6.<br>5. Press the equals (=) button.<br>6. Verify the result is 30. |
| **Division Test**               | Divides 8 by 2 and verifies the result is 4    | 1. Clear the calculator.<br>2. Press 8.<br>3. Press the division (/) button.<br>4. Press 2.<br>5. Press the equals (=) button.<br>6. Verify the result is 4. |
| **Percentage Calculation Test** | Calculates 10% of 90 and verifies the result is 9 | 1. Clear the calculator.<br>2. Press 1.<br>3. Press 0.<br>4. Press the percentage (%) button.<br>5. Press 9.<br>6. Press 0.<br>7. Press the equals (=) button.<br>8. Verify the result is 9. |
| **Change Sign Test**            | Changes the sign of the number and verifies the result | 1. Clear the calculator.<br>2. Press 5.<br>3. Press the plus/minus (±) button.<br>4. Verify the result is -5. |


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
