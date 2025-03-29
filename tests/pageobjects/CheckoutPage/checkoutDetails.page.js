class CheckoutDetailsPage {
    constructor(page) {
        this.page = page;
        this.finishCheckoutBtn = page.locator('.btn_action.cart_button');
        this.cancelCheckoutBtn = page.locator('.cart_cancel_link.btn_secondary');
    }
}
export default CheckoutDetailsPage;