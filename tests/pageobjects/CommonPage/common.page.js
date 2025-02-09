class CommonPage {
    constructor(page) {
        this.page = page;
        this.cartLogo = page.locator('path[fill="currentColor"]');
        this.totalNumberItemAddCartPage = page.locator('.fa-layers-counter.shopping_cart_badge');
        this.sideMenuBar = page.locator('.bm-burger-button');
    }
}
export default CommonPage;