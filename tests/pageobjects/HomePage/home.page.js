import CommonPage from '../../pageobjects/CommonPage/common.page';
class HomePage {
    constructor(page) {
        this.page = page;
        this.totalItemsNumber = page.locator('.inventory_item');
        this.allHomePageItemsLink = page.locator('.inventory_item_name');
        this.backButton = page.locator('.inventory_details_back_button');
        this.titleOfItemsDetailsPage = page.locator('.inventory_details_name');
        this.allAddToCartBtn = page.locator('button.btn_primary.btn_inventory');
        this.productSortDropdownBox = page.locator('.product_sort_container');
    }
    async verifyCountItems() {
        const count = await this.totalItemsNumber.count();
        console.log('verifyCountItems', count);
        return count;
    }
    async verifyClickAllItemsLink() {
        const homePageItemaLink = await this.allHomePageItemsLink.all();
        for (const homeAllItemLink of homePageItemaLink) {
            const itemText = await homeAllItemLink.textContent();
            console.log('itemText', itemText);
            await homeAllItemLink.click();
            const allItemdetailsPageTitle = await this.titleOfItemsDetailsPage.textContent();
            console.log('allItemdetailsPageTitle', allItemdetailsPageTitle);
            await this.backButton.click();
            if (itemText.trim() !== allItemdetailsPageTitle.trim()) {
                return false;
            }
        }
        return true;
    }
    async verifyCartLogoVisibility() {
        const commonPageObject = new CommonPage(this.page);
        const isCartLogoVisible = await commonPageObject.cartLogo.isVisible();
        console.log('isCartLogoVisible', isCartLogoVisible);
        return isCartLogoVisible;
    }
    async verifyclickallAddToCartBtn() {
        const homeAllItemsCartBtn = await this.allAddToCartBtn.elementHandles();
        for (const allCartBtn of homeAllItemsCartBtn) {
            await allCartBtn.click();
        }
        const commonPageObject = new CommonPage(this.page);
        const addedCartIconNumber = await commonPageObject.totalNumberItemAddCartPage.textContent();
        console.log('addedCartIconNumber', addedCartIconNumber);
        return addedCartIconNumber;
    }
    async verifyProductSortDropdownVisibility() {
        const isProductSortDropdownVisible = await this.productSortDropdownBox.isVisible();
        console.log('isProductSortDropdownVisible', isProductSortDropdownVisible);
        return isProductSortDropdownVisible;
    }
}
export default HomePage;