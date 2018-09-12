let LoginPage = require("../page_objects/login_page.js");

describe('Creating Product', function() {
    it('name validation - Name should be personal', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();
     
      let productsPage = await loginPage.login("persevalif@gmail.com", "N<f&nx39V");

      await browser.sleep(2000);

      await productsPage.header.getAdministrationMenu().click();

      await browser.sleep(2000);

      let newProductPage = await productsPage.addProduct(); 

      await browser.sleep(2000);

      await newProductPage.createProduct('Taras_Product 1');

      await browser.sleep(2000);

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.getErrorMessage().getText()).toEqual('Name should be personal ');
    });
  });