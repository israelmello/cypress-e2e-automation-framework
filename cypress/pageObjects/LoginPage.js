class LoginPage {
  elements = {
    loginForm: () => cy.get('.login-form'),
    newUserSignupForm: () => cy.get('.signup-form')
  }

  visit() {
    cy.visit('/signup')
  }
}

export default LoginPage
