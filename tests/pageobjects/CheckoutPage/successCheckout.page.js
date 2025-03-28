import CheckoutData from '../../data/CheckoutData/checkout.data.json' assert { type: 'json' };
class SuccessCheckoutPage {
    constructor(page) {
        this.page = page;
        this.confirmationLabel = page.locator('.complete-header');
    }
    async verifyCheckoutOperation() {
        const successCheckoutText = await this.confirmationLabel.textContent();
        console.log('successCheckoutText', successCheckoutText);
        if (successCheckoutText === CheckoutData.success_checkout_text) {
            return true;
        }
        else {
            return false;
        }
    }
}
export default SuccessCheckoutPage;