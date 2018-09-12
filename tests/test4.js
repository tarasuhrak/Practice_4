let LoginPage = require("../page_objects/login_page.js");


describe('creating product with incomplete data', function() {
    it('save product without completing one mandatory field', async function() {
      let loginPage = new LoginPage();

       await loginPage.open();
     
      let productsPage = await loginPage.login("persevalif@gmail.com", "N<f&nx39V");

       await browser.sleep(3000);

       await productsPage.header.getAdministrationMenu().click();

       await browser.sleep(3000);

      let newProductPage = await productsPage.addProduct(); 

       await browser.sleep(3000);

       await newProductPage.createProductNotComplete('Taras_Uhrak_practice_4');

       await browser.sleep(3000);

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.getValidationMessage().getText()).toEqual('Product Required.');
    });
  });