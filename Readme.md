# ⚠️ **IMPORTANT NOTICE**
**🚨 We cannot actually run this script because the SSL connection has an error. 🚨**

# Description
I decided to automate the 'Submit Form' scenario because it is a core scenario for our feature. By automating this test case, we can ensure that the critical path is always functioning correctly, providing confidence in the stability of this key functionality

In this automation script, I will focus only on assertions for the frontend because, when I tried submitting the form, I didn't see any API requests being made. Additionally, the task mentioned that 'the feature is still in development,' so I assume the developer has only implemented the frontend part.

## **Requirements**
- [Node.js](https://nodejs.org/) (version 16+)
- [Playwright](https://playwright.dev/) (latest version)
- A GitHub repository with the required test dependencies installed
- Access to the application under test

## **Setup**

1. **Clone the Repository**
   ```bash
   git clone git@github.com:kantclrx/SC-assignment.git
   cd SC-assignment
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
## **How to Run**
### **Run the Script Locally**
   ```bash
   npx playwright test SCassignment.spec.ts
   ```

### **Run with Headed Mode**
   ```bash
   npx playwright test SCassignment.spec.ts --headed
   ```

### **Run All Tests**
   ```bash
   npx playwright test
   ```