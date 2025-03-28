class CheckoutDetailsPage {
    constructor(page) {
        this.page = page;
        this.finishCheckoutBtn = page.locator('.btn_action.cart_button');
    }
}
export default CheckoutDetailsPage;