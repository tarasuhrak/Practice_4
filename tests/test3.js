let LoginPage = require("../page_objects/login_page.js");

describe('If you canceled creating product', function() {

    it('You canceled product after you fill create', async function() {
      let loginPage = new LoginPage();

       await loginPage.open();
     
      let productsPage = await loginPage.login("persevalif@gmail.com", "N<f&nx39V");

       await browser.sleep(3000);

       await productsPage.header.getAdministrationMenu().click();

      await browser.sleep(3000);

      let newProductPage = await productsPage.addProduct(); 

       await browser.sleep(3000);

       await newProductPage.createProductCancel('default name');

       await browser.sleep(3000);

       await newProductPage.searchForProduct('default name');

       await browser.sleep(3000);

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.isNoProductMessageVisible()).toEqual(true);
    });
  });