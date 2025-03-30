import { test, expect } from '@playwright/test';
import LoginPage from '../../pageobjects/LoginPage/login.page';
import DetailsPage from '../../pageobjects/DetailsPage/details.page';
import LoginData from '../../data/LoginData/login.data.json' assert { type: 'json' };
test.describe('Details Page Test', () => {
    test('Validate pressing of ADD TO CART button from Details Page to AddToCart Page', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const detailsPageObject = new DetailsPage(page);
        const actual = await detailsPageObject.verifyClickSomeItemIndividually();
        expect(actual).toBe('3');
    });
    test('Validate pressing of Remove button from Details Page to AddToCart Page', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const detailsPageObject = new DetailsPage(page);
        const actual = await detailsPageObject.verifyClickAndRemoveSomeItemIndividually();
        expect(actual).toBe('1');
    });
});