import ProductPage from '../../pageObjects/ProductPage'
import HomePage from '../../pageObjects/HomePage'

describe('Products Page Smoke tests', () => {
  const productPage = new ProductPage()
  const homePage = new HomePage()

  context('Search for a product', () => {
    beforeEach(() => {
      homePage.visit()
      homePage.elements.productsMenu().click()
    })

    it('should search for a product by its name', () => {
      cy.url().should('eq', Cypress.config().baseUrl + '/products')
      productPage.elements.productsList().should('be.visible')
      productPage.elements
        .productNames()
        .first()
        .invoke('text')
        .then((productName) => {
          productPage.elements.searchInput().type(productName)
          productPage.elements.searchButton().click()
          productPage.elements.productNames().first().should('contain.text', productName)
        })
    })
  })
})
