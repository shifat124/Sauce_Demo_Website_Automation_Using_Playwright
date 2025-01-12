import { test, expect } from '@playwright/test';
test.describe('LogIn Page Test', () => {
  test('Validate LogIn with valid username and password - Positive Testing', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
   
    await expect(page).toHaveTitle(/Playwright/);
  });
});


