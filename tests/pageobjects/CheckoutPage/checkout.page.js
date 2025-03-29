class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.userFirstName = page.locator('#first-name');
        this.userLastName = page.locator('#last-name');
        this.userPostalCode = page.locator('#postal-code');
        this.continueCartInfoBtn = page.locator("input[value='CONTINUE']");
        this.cancelCartInfoBtn = page.locator('.cart_cancel_link.btn_secondary');
    }
    async setUserCheckoutInfo(firstname, lastname, postalcode) {
        await this.userFirstName.fill(firstname);
        await this.userLastName.fill(lastname);
        await this.userPostalCode.fill(postalcode);
    }
}
export default CheckoutPage;