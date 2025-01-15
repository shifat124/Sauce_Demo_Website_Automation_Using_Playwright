import TestConfig from '../../../testConfig';
class LoginPage {
    constructor(page) {
        this.page = page;
        this.txtUserName = page.locator('#user-name');
        this.txtUserPassword = page.locator('#password');
        this.btnLogin = page.locator('#login-button');
        this.errorLoginMsg = page.locator("h3[data-test='error']");
    }
    async verifyLogin(username, password) {
        const testConfigPageObject = new TestConfig(); 
        await this.page.goto(testConfigPageObject.url);
        await this.txtUserName.fill(username);
        await this.txtUserPassword.fill(password);
        await this.btnLogin.click();
    }
}
export default LoginPage;