class HomePage {
  elements = {
    navigationMenu: () => cy.get('.navbar-nav'),

    homeMenu: () => this.elements.navigationMenu().contains('a', 'Home'),

    productsMenu: () => this.elements.navigationMenu().contains('a', 'Products'),

    homeFeaturesItems: () => cy.get('.features_items'),

    homeProductCard: () => this.elements.homeFeaturesItems().find('.single-products')
  }

  visit() {
    cy.visit('/')
  }
}

export default HomePage
