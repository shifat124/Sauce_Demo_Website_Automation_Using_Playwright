class HomePage {
    constructor(page) {
        this.page = page;
        this.totalItemsNumber = page.locator('.inventory_item');
        this.allHomePageItemsLink = page.locator('.inventory_item_name');
        this.backButton = page.locator('.inventory_details_back_button');
        this.titleOfItemsDetailsPage = page.locator('.inventory_details_name');
        this.cartLogo = page.locator('path[fill="currentColor"]');
    }
    async verifyCountItems() {
        const count = await this.totalItemsNumber.count();
        console.log('verifyCountItems', count);
        return count;
    }
    async verifyClickAllItemsLink() {
        const homePageItemaLink = await this.allHomePageItemsLink.all();
        for (const item of homePageItemaLink) {
            const itemText = await item.textContent();
            console.log('itemText', itemText);
            await item.click();
            const detailsPageTitle = await this.titleOfItemsDetailsPage.textContent();
            console.log('detailsPageTitle', detailsPageTitle);
            await this.backButton.click();
            if (itemText.trim() !== detailsPageTitle.trim()) {
                return false;
            }
        }
        return true;
    }
    async verifyCartLogoVisibility() {
        const isCartLogoVisible = await this.cartLogo.isVisible();
        console.log('isCartLogoVisible', isCartLogoVisible);
        return isCartLogoVisible;
    }
}
export default HomePage;