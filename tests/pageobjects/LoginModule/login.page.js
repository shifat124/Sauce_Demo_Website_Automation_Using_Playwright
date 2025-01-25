import LoginData from '../../data/LoginData/login.data.json' assert { type: 'json' };
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
        await this.page.goto(testConfigPageObject.baseUrl);
        await this.txtUserName.fill(username);
        await this.txtUserPassword.fill(password);
        await this.btnLogin.click();
    }

    async dataDrivenVerifyLogin() {
        const usernames = LoginData.users.map((user) => user.username);
        const passwords = LoginData.users.map((user) => user.password);
        for (let i = 0; i < usernames.length; i++) {
            const testConfigPageObject = new TestConfig();
            await this.page.goto(testConfigPageObject.baseUrl);

            // Interact with the login page
            await this.txtUserName.fill(usernames[i]); // Adjust selectors if necessary
            await this.txtUserPassword.fill(passwords[i]);
            await this.btnLogin.click();

            // Validate login result
            const currentUrl = await page.url();
            if (currentUrl === testConfigPageObject.homePageUrl) {
                console.log('LogIn Passed');
                return true;
                // You can add more assertions here if needed
            }
            else {
                return false;
            }
            // else {
            //   console.log('LogIn Failed');
            //   const errorMessage = await page.locator('[data-test="error"]').textContent(); // Adjust selector if needed
            //   console.log('Error Message:', errorMessage);
            // }

            // Optionally clear fields or reset state
            // await page.evaluate(() => {
            //   localStorage.clear();
            //   sessionStorage.clear();
            // });
        }
    }
}
export default LoginPage;