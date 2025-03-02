import { test, expect } from '@playwright/test';
import HomePage from '../../pageobjects/HomePage/home.page';
import LoginPage from '../../pageobjects/LoginPage/login.page';
import MenuPage from '../../pageobjects/MenuPanelPage/menu.page';
import CommonPage from '../../pageobjects/CommonPage/common.page';
import LoginData from '../../data/LoginData/login.data.json' assert { type: 'json' };
test.describe('Home Page Test', () => {
    test('Validate the count of items', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const homePageObject = new HomePage(page);
        const totalItemsCount = await homePageObject.verifyCountItems();
        expect(totalItemsCount).toBe(6);
    });
    test('Validate that click on each item link from home page navigates to the respective item details page', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const homePageObject = new HomePage(page);
        const actual = await homePageObject.verifyClickAllItemsLink();
        expect(actual).toBeTruthy();
    });
    test('Validate the visibility of cart logo', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const homePageObject = new HomePage(page);
        const actual = await homePageObject.verifyCartLogoVisibility();
        expect(actual).toBeTruthy();
    });
    test('Validate the press of cart logo', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const commonPageObject = new CommonPage(page);
        await commonPageObject.cartLogo.click();
        console.log('cartPageUrl', page.url());
        await expect(page).toHaveURL('https://www.saucedemo.com/v1/cart.html');
    });
    test('Validate the press of Add To Cart button for each items', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const homePageObject = new HomePage(page);
        const actual = await homePageObject.verifyclickallAddToCartBtn();
        expect(actual).toBe('6');
    });
    test('Validate the press of All Items of side menu bar', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const commonPageObject = new CommonPage(page);
        await commonPageObject.sideMenuBar.click();
        const menuPageObject = new MenuPage(page);
        await menuPageObject.allItemsOption.click();
        console.log('pressAllItemsMenuLink', page.url());
        await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
    });
    test('Validate the press of About of side menu bar', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const commonPageObject = new CommonPage(page);
        await commonPageObject.sideMenuBar.click();
        const menuPageObject = new MenuPage(page);
        await menuPageObject.aboutOption.click();
        console.log('pressAboutMenuLink', await page.title());
        await expect(page).toHaveTitle("Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing");
    });
    test('Validate the press of Logout of side menu bar', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const commonPageObject = new CommonPage(page);
        await commonPageObject.sideMenuBar.click();
        const menuPageObject = new MenuPage(page);
        await menuPageObject.logoutOption.click();
        console.log('pressLogoutMenuLink', page.url());
        await expect(page).toHaveURL('https://www.saucedemo.com/v1/index.html');
    });
    test('Validate the visibility of product sort dropdown in home page', async ({ page }) => {
        const loginPageObject = new LoginPage(page);
        await loginPageObject.verifyLogin(LoginData.valid_username, LoginData.valid_password);
        const homePageObject = new HomePage(page);
        const actual = await homePageObject.verifyProductSortDropdownVisibility();
        expect(actual).toBeTruthy();
    });
});