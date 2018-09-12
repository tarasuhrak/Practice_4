let LoginPage = require("../page_objects/login_page.js");

describe('creating product', function() {
    it('fill all mandatory fields with data', async function() {
      let loginPage = new LoginPage();

      await loginPage.open();     

      let productsPage = await loginPage.login("persevalif@gmail.com", "N<f&nx39V");

      await browser.sleep(3000);

      await productsPage.header.getAdministrationMenu().click();

      await browser.sleep(3000);

      let newProductPage = await productsPage.addProduct(); 

      await newProductPage.createProduct('Taras_Uhrak Product 1');

      expect(await productsPage.header.isHeaderVisible()).toEqual(true);

      expect(await newProductPage.isIdVisible()).toEqual(true);
    });
  });