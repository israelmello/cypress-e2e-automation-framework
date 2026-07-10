# Cypress E2E Automation Framework

[![Cypress Smoke Tests](https://github.com/israelmello/cypress-e2e-automation-framework/actions/workflows/cypress.yml/badge.svg)](https://github.com/israelmello/cypress-e2e-automation-framework/actions/workflows/cypress.yml)

End-to-end test automation framework built with **Cypress** using the **Page Object Model (POM)** design pattern.

This project was developed as part of my QA Automation portfolio to demonstrate best practices in UI test automation, test organization, dynamic test data generation, and HTML reporting.

---

## Features

- ✅ End-to-end UI automation with Cypress
- ✅ Page Object Model (POM)
- ✅ Dynamic test data using Faker
- ✅ Mochawesome HTML Reports
- ✅ Smoke Test Suite
- ✅ Authentication End-to-End Test Suite
- ✅ Organized and maintainable project structure

---

## Technologies

- Cypress
- JavaScript
- Page Object Model (POM)
- Faker JS
- Mochawesome Reporter
- Prettier

---

## Project Structure

```text
cypress
├── e2e
│   ├── authentication
│   │   └── register-login-delete-user.cy.js
│   │
│   └── smoke
│       ├── home.cy.js
│       ├── login.cy.js
│       └── products.cy.js
│
├── factories
│   └── userFactory.js
│
├── pageObjects
│   ├── AccountCreatedPage.js
│   ├── AccountDeletedPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   └── SignupPage.js
│
├── reports
│
└── support
```

---

## Test Suites

### Smoke Tests

The smoke suite validates the application's main functionality.

Current smoke tests include:

- Home page loading
- Navigation menu validation
- Product listing validation
- Product search
- Login page validation

### Authentication

Complete end-to-end user lifecycle:

- Register a new user
- Fill account information
- Create account
- Logout
- Login with the created user
- Delete account

---

## Dynamic Test Data

User data is generated dynamically using **Faker**.

Example generated data:

- Name
- Email
- Password
- First Name
- Last Name
- Company
- Address
- City
- State
- Zip Code
- Mobile Number

This prevents duplicate user registration and keeps tests independent.

---

## Reports

This project uses **Mochawesome Reporter**.

After each execution an HTML report is generated at:

```text
cypress/reports/index.html
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/israelmello/cypress-e2e-automation-framework.git
```

Navigate to the project

```bash
cd cypress-e2e-automation-framework
```

Install dependencies

```bash
npm install
```

---

## Running Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

### Run all tests

```bash
npm test
```

or

```bash
npx cypress run
```

### Run Smoke Tests

```bash
npm run cypress:smoke
```

### Run Authentication Tests

```bash
npm run cypress:authentication
```

---

## Design Patterns

This framework follows the following design principles:

- Page Object Model (POM)
- Factory Pattern
- Separation of test logic and page logic
- Reusable page elements
- Dynamic test data generation

---

## Future Improvements

- GitHub Actions CI/CD
- Custom Cypress Commands
- API Testing
- Environment variables
- Multiple environments
- Cross-browser execution
- Visual Regression Testing

---

## Author

**Israel Mello**

QA Engineer

GitHub

https://github.com/israelmello

LinkedIn

https://www.linkedin.com/in/israel-mello/
