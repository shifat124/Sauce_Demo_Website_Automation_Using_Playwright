class MenuPage {
    constructor(page) {
        this.page = page;
        this.allItemsOption = page.locator('#inventory_sidebar_link');
    }
}
export default MenuPage;