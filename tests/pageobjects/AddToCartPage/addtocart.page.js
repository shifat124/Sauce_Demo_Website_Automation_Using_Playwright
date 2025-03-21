class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.checkoutBtn = page.locator('.btn_action.checkout_button');
    }
}
export default AddToCartPage;