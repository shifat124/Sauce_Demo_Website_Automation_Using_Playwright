class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.continueShoppingBtn = page.locator('.btn_secondary');
        this.checkoutBtn = page.locator('.btn_action.checkout_button');
    }
}
export default AddToCartPage;