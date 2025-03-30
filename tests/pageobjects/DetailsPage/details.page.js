import HomePage from '../../pageobjects/HomePage/home.page';
import CommonPage from '../../pageobjects/CommonPage/common.page';
class DetailsPage {
    constructor(page) {
        this.page = page;
        this.detailsAddToCartBtn = page.locator('.btn_primary.btn_inventory');
        this.individualBackBtn = page.locator('.inventory_details_back_button');
        this.removeAddToCartBtn = page.locator('.btn_secondary.btn_inventory');
    }
    async verifyClickSomeItemIndividually() {
        const homePageObject = new HomePage(this.page);
        await homePageObject.sauceLabsBackpackLink.click();
        await this.detailsAddToCartBtn.click();
        await this.individualBackBtn.click();
        await homePageObject.sauceLabsBikeLightLink.click();
        await this.detailsAddToCartBtn.click();
        await this.individualBackBtn.click();
        await homePageObject.sauceLabsBoltTshirtLink.click();
        await this.detailsAddToCartBtn.click();
        await this.individualBackBtn.click();
        const commonPageObject = new CommonPage(this.page);
        await commonPageObject.cartLogo.click();
        const addedCartIconNumber = await commonPageObject.totalNumberItemAddCartPage.textContent();
        console.log('addedCartIconNumber', addedCartIconNumber);
        return addedCartIconNumber;
    }
    async verifyClickAndRemoveSomeItemIndividually() {
        const homePageObject = new HomePage(this.page);
        await homePageObject.sauceLabsBackpackLink.click();
        await this.detailsAddToCartBtn.click();
        await this.individualBackBtn.click();
        await homePageObject.sauceLabsBikeLightLink.click();
        await this.detailsAddToCartBtn.click();
        await this.individualBackBtn.click();
        await homePageObject.sauceLabsBoltTshirtLink.click();
        await this.detailsAddToCartBtn.click();
        await this.individualBackBtn.click();
        await homePageObject.sauceLabsBackpackLink.click();
        await this.removeAddToCartBtn.click();
        await this.individualBackBtn.click();
        await homePageObject.sauceLabsBikeLightLink.click();
        await this.removeAddToCartBtn.click();
        await this.individualBackBtn.click();
        const commonPageObject = new CommonPage(this.page);
        await commonPageObject.cartLogo.click();
        const addedCartIconNumber = await commonPageObject.totalNumberItemAddCartPage.textContent();
        console.log('addedCartIconNumber', addedCartIconNumber);
        return addedCartIconNumber;
    }
}
export default DetailsPage;