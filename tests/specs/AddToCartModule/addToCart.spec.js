import { test, expect } from '@playwright/test';
import LoginPage from '../../pageobjects/LoginPage/login.page';
import CommonPage from '../../pageobjects/CommonPage/common.page';
import AddToCartPage from '../../pageobjects/AddToCartPage/addtocart.page';
import LoginData from '../../data/LoginData/login.data.json' assert { type: 'json' };
test.describe('AddToCart Page Test', () => {
    test('Validate press on Continue Shopping button', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const commonPageObject = new CommonPage(page);
        await commonPageObject.cartLogo.click();
        const addToCartPageObject = new AddToCartPage(page);
        await addToCartPageObject.continueShoppingBtn.click();
        console.log('homePageUrl', page.url());
        await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    });
    test('Validate press on Checkout button', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const commonPageObject = new CommonPage(page);
        await commonPageObject.cartLogo.click();
        const addToCartPageObject = new AddToCartPage(page);
        await addToCartPageObject.checkoutBtn.click();
        console.log('checkoutPageUrl', page.url());
        await expect(page).toHaveURL('https://www.saucedemo.com/v1/checkout-step-one.html');
    });
});