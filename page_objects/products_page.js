let HeaderPage = require("./header_page.js");
let NewProductPage = require("./newProduct_page.js");

let addProdLinkLocator = "a.section-body__actions";


class ProductsPage {
    constructor() {
        this.header = new HeaderPage();
        browser.waitForAngularEnabled(false);
    }

    getAddProduct() {
        return element(by.css(addProdLinkLocator));
    }

    async addProduct() {

        await allure.createStep("click Add Product", async() => {
            await this.getAddProduct().click();
        })(); 
        
        return new NewProductPage();
    }
}

module.exports = ProductsPage;