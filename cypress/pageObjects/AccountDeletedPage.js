class AccountDeletedPage {
  elements = {
    titleAccountDeleted: () => cy.get('h2[data-qa="account-deleted"]'),
    continueButton: () => cy.get('a[data-qa="continue-button"]')
  }
}

export default AccountDeletedPage
