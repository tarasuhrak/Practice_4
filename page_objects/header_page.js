let productsMenuLocator = "#navbar > ul > li:nth-child(1) > a";
let administrationMenuLocator = "#navbar > ul > li:nth-child(2) > a";

class HeaderPage {
    constructor() {}

    getProductsMenu() {
        return element(by.css(productsMenuLocator));
    }

    getAdministrationMenu() {
        return element(by.css(administrationMenuLocator));
    }
    
    async waitForHeaderAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getAdministrationMenu()), 15000);
    }

    async isHeaderVisible() {
        await this.waitForHeaderAvailable();
        return await this.getProductsMenu().isDisplayed() 
        && await this.getAdministrationMenu().isDisplayed();
    }
}



module.exports = HeaderPage;