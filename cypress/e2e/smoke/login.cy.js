import LoginPage from '../../pageObjects/LoginPage'

describe('Login Page Smoke tests', () => {
  const loginPage = new LoginPage()

  context('Login functionality', () => {
    beforeEach(() => {
      loginPage.visit()
    })

    it('should show the login form', () => {
      loginPage.elements.loginForm().should('be.visible')
    })

    it('should show the New User Signup! section', () => {
      loginPage.elements.newUserSignupForm().should('be.visible')
    })
  })
})
