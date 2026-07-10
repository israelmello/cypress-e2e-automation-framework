class LoginPage {
  elements = {
    loginForm: () => cy.get('.login-form'),
    newUserSignupForm: () => cy.get('.signup-form'),

    loginEmailInput: () => cy.get('input[data-qa="login-email"]'),
    loginPasswordInput: () => cy.get('input[data-qa="login-password"]'),
    loginButton: () => cy.get('button[data-qa="login-button"]'),
    newUserNameInput: () => cy.get('input[data-qa="signup-name"]'),
    newUserEmailInput: () => cy.get('input[data-qa="signup-email"]'),
    signupButton: () => cy.get('button[data-qa="signup-button"]')
  }

  visit() {
    cy.visit('/signup')
  }
}

export default LoginPage
