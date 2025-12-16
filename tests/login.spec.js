const { test, expect } = require('@playwright/test');
const { Login } = require('../Pages/loginpages');
const loginData = require('../TestData/login.json');

let loginPage;

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new Login(page);
    await loginPage.goto();
  });

  test('Login with valid credentials', async () => {
    // await loginPage.login(loginData.username, loginData.password);
  });

  test('Login with invalid credentials', async () => {
    // await loginPage.login('invalidUser', 'invalidPass');
  });

});
