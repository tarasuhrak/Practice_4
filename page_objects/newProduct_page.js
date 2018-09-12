let productNameInputLocator = "#product-name";
let productFamilyDropdownLocator = "dropdown-gds .multiselect-container .dropdown-toggle .caret";

let saveBtnLocator = "#saveProductAdd";
let productFamilyLocator ='#change-product-family-list > dropdown-gds > ss-multiselect-dropdown > div > ul > li:nth-child(7) > a > span';
let productIdLocator = '.section-title.display-mode .section-title__details-id';  
let errorMessageLocator = "div.validation-message.validation-message__name";
let cancelBtnLocator = ".section-heading .section-title__details .btn.gds-btn.gds-btn-default"; 
let validationMessageLocator = "div.validation-message";

let noProductsLocator ='li.preview-list__header .col-md-12 p';
let searchInputLocator =  "body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div.col-xs-12.section-body > search-field > div > input" //"input.form-control.search-input.ng-valid.ng-touched.ng-dirty";

class NewProductPage {
    constructor() {
        browser.waitForAngularEnabled(false);
    }

    getProductNameInput() {
        return element(by.css(productNameInputLocator));
    }

    getProductFamilyDropdown() {
        return element(by.css(productFamilyDropdownLocator));
    }

    getproductFamilyLocator() {
        return element(by.css(productFamilyLocator));
    }

    getCancelBtn() {
        return element(by.css(cancelBtnLocator));
    }

    getsaveBtn() {
        return element(by.css(saveBtnLocator));
    }

    getProductId() {
        return element(by.css(productIdLocator));
    }

    getErrorMessage() {
        return element(by.css(errorMessageLocator));
    }

    getValidationMessage() {
        return element(by.css(validationMessageLocator));
    }
   
    getProductSearch() {
        return element(by.css(searchInputLocator));
    }

    getNoProductsMessage() {
        return element(by.css(noProductsLocator));
    }

    async createProduct(name) {

        await allure.createStep("create new product", async() => {
            await this.getProductNameInput().sendKeys(name);
            await this.getProductFamilyDropdown().click();
            await this.getproductFamilyLocator().click();
            await this.getsaveBtn().click();
        })(); 
    }

    async createProductCancel(name) {

        await allure.createStep("cancel product creating", async() => {
            await this.getProductNameInput().sendKeys(name);
            await this.getProductFamilyDropdown().click();
            await this.getproductFamilyLocator().click();
            await this.getCancelBtn().click();
        })(); 
    }

    async createProductNotComplete(name) {
        
        await allure.createStep("create product with not complete information", async() => {
            await this.getProductNameInput().sendKeys(name);
            await this.getsaveBtn().click();
        })(); 
    }

    async waitForIdAvailable() {
            await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getProductId()), 15000);
        }
    
    async isIdVisible() {
            await this.waitForIdAvailable();
            return await this.getProductId().isDisplayed();
        }

    async searchForProduct(name) {

        await allure.createStep("search for product", async() => {
            await this.getProductSearch().sendKeys(name);
        })(); 
    }   
       
    async waitForProductAvailable() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getNoProductsMessage()), 15000);
        }

    async isNoProductMessageVisible() {
        await this.waitForProductAvailable();
        return await this.getNoProductsMessage().isDisplayed();
        }
}

module.exports = NewProductPage;