import { test, expect } from '@playwright/test';
import LogInPage from '../../pageobjects/LoginModule/login.page';
import LoginData from '../../data/LoginData/login.data.json' assert { type: 'json' };
test.describe('LogIn Page Test', () => {
  test('Validate LogIn with valid username and password - Positive Testing', async ({ page }) => {
    const loginPageObject = new LogInPage(page);
    await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
    console.log('homePageUrl', page.url());
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
  });
  test('Validate LogIn with invalid username and password - Negative Testing', async ({ page }) => {
    const loginPageObject = new LogInPage(page);
    await loginPageObject.verifyLogin(LoginData.invalid_username, LoginData.invalid_password);
    console.log('homePageUrl', page.url());
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
  }); 
  test.only('Validate LogIn by reading usernames and passwords from the JSON file', async ({ page }) => {
    const loginPageObject = new LogInPage(page);
    await loginPageObject.dataDrivenVerifyLogin();
    console.log('homePageUrl', page.url());
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
  });
});


