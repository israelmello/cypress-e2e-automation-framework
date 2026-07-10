class ProductPage {
  elements = {
    searchInput: () => cy.get('#search_product'),
    searchButton: () => cy.get('#submit_search'),
    productsList: () => cy.get('.features_items'),
    productCard: () => this.elements.productsList().find('.single-products'),
    productNames: () => this.elements.productCard().find('.productinfo p')
  }

  visit() {
    cy.visit('/')
  }
}
export default ProductPage
