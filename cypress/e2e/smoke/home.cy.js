import HomePage from '../../pageObjects/HomePage'

describe('Home Page Smoke tests', () => {
  const homePage = new HomePage()

  context('Home', () => {
    beforeEach(() => {
      homePage.visit()
    })

    it('should load the home page successfully', () => {
      cy.url().should('eq', Cypress.config().baseUrl + '/')

      homePage.elements.homeMenu().should('be.visible').and('contain.text', 'Home')

      homePage.elements.homeProductCard().should('be.visible')
    })
  })
})
