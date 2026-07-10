class AccountCreatedPage {
  elements = {
    titleAccountCreated: () => cy.get('h2[data-qa="account-created"]'),
    continueButton: () => cy.get('a[data-qa="continue-button"]')
  }
}

export default AccountCreatedPage
