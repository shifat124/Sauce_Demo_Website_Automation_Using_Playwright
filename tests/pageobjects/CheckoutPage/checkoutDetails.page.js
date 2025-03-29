class CheckoutDetailsPage {
    constructor(page) {
        this.page = page;
        this.totalPriceLabel = page.locator('.summary_total_label');
        this.finishCheckoutBtn = page.locator('.btn_action.cart_button');
        this.cancelCheckoutBtn = page.locator('.cart_cancel_link.btn_secondary');
    }
}
export default CheckoutDetailsPage;