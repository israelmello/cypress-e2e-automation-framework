class HomePage {
  elements = {
    navigationMenu: () => cy.get('.navbar-nav'),

    homeMenu: () => this.elements.navigationMenu().contains('a', 'Home'),

    productsMenu: () => this.elements.navigationMenu().contains('a', 'Products'),

    loginMenu: () => this.elements.navigationMenu().contains('a', 'Signup / Login'),

    logoutMenu: () => this.elements.navigationMenu().contains('a', 'Logout'),

    deleteAccountMenu: () => this.elements.navigationMenu().contains('a', 'Delete Account'),

    homeFeaturesItems: () => cy.get('.features_items'),

    homeProductCard: () => this.elements.homeFeaturesItems().find('.single-products')
  }

  visit() {
    cy.visit('/')
  }
}

export default HomePage
