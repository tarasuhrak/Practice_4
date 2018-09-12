let ProductsPage = require("./products_page.js");
//let newProductPage = require("./newProduct_page.js");

let loginBtnLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passwordInputLocator = "#userPassword";
let signInBtnLocator = ".iframe-wrap .login-button";

class LoginPage {
    constructor() {}

    getLoginBtn() {
        return element(by.css(loginBtnLocator));
    }

    getEmailInput() {
        return element(by.css(emailInputLocator));
    }

    getPasswordInput() {
        return element(by.css(passwordInputLocator));
    }

    getSignInBtn() {
        return element(by.css(signInBtnLocator));
    }

    async login(email, pass) {

        await allure.createStep("login", async() => {
            await this.getLoginBtn().click();
            await this.getEmailInput().sendKeys(email);
            await this.getPasswordInput().sendKeys(pass);
            await this.getSignInBtn().click();
        })(); 

        return new ProductsPage();
    }
    
    async open() {
        await browser.get('http://eds_university.eleks.com/login');
        return this;
    }

}

module.exports = LoginPage;