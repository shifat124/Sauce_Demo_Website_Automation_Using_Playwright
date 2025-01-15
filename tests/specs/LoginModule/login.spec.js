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
});


