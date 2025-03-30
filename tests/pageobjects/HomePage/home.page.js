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
        this.dropdownBox = page.locator('.product_sort_container');
        this.sauceLabsBackpackLink = page.locator('#item_4_title_link');
        this.sauceLabsBikeLightLink = page.locator('#item_0_title_link');
        this.sauceLabsBoltTshirtLink = page.locator('#item_1_title_link');
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
    async verifyDropdownExpectedOptions() {
        const options = await this.dropdownBox.locator('option').allTextContents(); // Get all option texts
        console.log('options', options);
        const expectedOptions = ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)'];
        return JSON.stringify(options) === JSON.stringify(expectedOptions);
    }
    async verifySelectOfNameZToAOption() {
        const expectedOptionText = 'Name (Z to A)';
        await this.dropdownBox.selectOption('za');
        const nameZToAOptionText = await this.dropdownBox.locator('option[value="za"]').textContent();
        console.log('nameZToAOptionText', nameZToAOptionText);
        if (nameZToAOptionText === expectedOptionText) {
            return true;
        }
        else {
            return false;
        }
    }
    async verifySelectOfPriceLowToHighOption() {
        const expectedOptionText = 'Price (low to high)';
        await this.dropdownBox.selectOption('lohi');
        const priceLowToHighOptionText = await this.dropdownBox.locator('option[value="lohi"]').textContent();
        console.log('priceLowToHighOptionText', priceLowToHighOptionText);
        if (priceLowToHighOptionText === expectedOptionText) {
            return true;
        }
        else {
            return false;
        }
    }
    async verifySelectOfPriceHighToLowOption() {
        const expectedOptionText = 'Price (high to low)';
        await this.dropdownBox.selectOption('hilo');
        const priceHighToLowOptionText = await this.dropdownBox.locator('option[value="hilo"]').textContent();
        console.log('priceHighToLowOptionText', priceHighToLowOptionText);
        if (priceHighToLowOptionText === expectedOptionText) {
            return true;
        }
        else {
            return false;
        }
    }
    async verifySelectOfNameAToZOption() {
        const expectedOptionText = 'Name (A to Z)';
        await this.dropdownBox.selectOption('az');
        const nameAToZOptionText = await this.dropdownBox.locator('option[value="az"]').textContent();
        console.log('nameAToZOptionText', nameAToZOptionText);
        if (nameAToZOptionText === expectedOptionText) {
            return true;
        }
        else {
            return false;
        }
    }
}
export default HomePage;