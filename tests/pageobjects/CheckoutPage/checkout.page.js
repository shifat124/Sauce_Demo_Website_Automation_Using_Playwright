class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.userFirstName = page.locator('#first-name');
        this.userLastName = page.locator('#last-name');
        this.userPostalCode = page.locator('#postal-code');
        this.continueCartInfoBtn = page.locator("input[value='CONTINUE']");
        this.totalPriceLabel = page.locator('.summary_total_label');
    }
    async setUserCheckoutInfo(firstname, lastname, postalcode) {
        await this.userFirstName.fill(firstname);
        await this.userLastName.fill(lastname);
        await this.userPostalCode.fill(postalcode);
    }
}
export default CheckoutPage;