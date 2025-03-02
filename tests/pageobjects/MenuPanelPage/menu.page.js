class MenuPage {
    constructor(page) {
        this.page = page;
        this.allItemsOption = page.locator('#inventory_sidebar_link');
        this.aboutOption = page.locator('#about_sidebar_link');
        this.logoutOption = page.locator('#logout_sidebar_link');
    }
}
export default MenuPage;