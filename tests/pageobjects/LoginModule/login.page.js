class LoginPage {
    constructor(page) {
        this.page = page;
        this.txtUserName = page.locator('#user-name');
        this.txtUserPassword = page.locator('#password');
        this.btnLogin = page.locator('#login-button');
        this.errorLoginMsg = page.locator("h3[data-test='error']");
    }
async setUserName(username) {
    await this.txtUserName.fill(username);
}
async setUserPassword(password) {
    await this.txtUserPassword.fill(password);
}
async verifyLogin() {
    
}
}