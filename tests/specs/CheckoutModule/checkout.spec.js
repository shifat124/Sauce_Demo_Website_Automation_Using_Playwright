import { test, expect } from '@playwright/test';
import LoginPage from '../../pageobjects/LoginPage/login.page';
import HomePage from '../../pageobjects/HomePage/home.page';
import CommonPage from '../../pageobjects/CommonPage/common.page';
import AddToCartPage from '../../pageobjects/AddToCartPage/addtocart.page';
import CheckoutPage from '../../pageobjects/CheckoutPage/checkout.page';
import CheckoutData from '../../data/CheckoutData/checkout.data.json' assert { type: 'json' };
import LoginData from '../../data/LoginData/login.data.json' assert { type: 'json' };
test.describe('Checkout Page Test', () => {
    test('Validate total price in CheckOutPage after adding items from HomePage to AddToCartPage', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const homePageObject = new HomePage(page);
        await homePageObject.verifyclickallAddToCartBtn();
        const commonPageObject = new CommonPage(page);
        await commonPageObject.cartLogo.click();
        const addToCartPageObject = new AddToCartPage(page);
        await addToCartPageObject.checkoutBtn.click();
        const checkoutPageObject = new CheckoutPage(page);
        await checkoutPageObject.setUserCheckoutInfo(CheckoutData.user_first_name, CheckoutData.user_last_name, CheckoutData.postal_code);
        await checkoutPageObject.continueCartInfoBtn.click();
        const actual = await checkoutPageObject.totalPriceLabel.textContent();
        console.log('Total Price', actual);
        expect(actual).toBe('Total: $140.34');
    });
});