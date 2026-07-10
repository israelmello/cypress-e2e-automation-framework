import HomePage from '../../pageObjects/HomePage'
import LoginPage from '../../pageObjects/LoginPage'
import SignupPage from '../../pageObjects/SignupPage'
import AccountCreatedPage from '../../pageObjects/AccountCreatedPage'
import AccountDeletedPage from '../../pageObjects/AccountDeletedPage'

import createUser from '../../factories/userFactory'

describe('Authentication', () => {
  const homePage = new HomePage()
  const loginPage = new LoginPage()
  const signupPage = new SignupPage()
  const accountCreatedPage = new AccountCreatedPage()
  const accountDeletedPage = new AccountDeletedPage()

  const user = createUser()

  context('User registration and authentication', () => {
    it('should register, login and delete a user successfully', () => {
      homePage.visit()
      homePage.elements.loginMenu().click()
      loginPage.elements.newUserSignupForm().should('be.visible')

      // First page of the registration process
      loginPage.elements.newUserNameInput().type(user.name)
      loginPage.elements.newUserEmailInput().type(user.email)
      loginPage.elements.signupButton().click()

      // Second page of the registration process
      signupPage.elements.signupRegistrationForm().should('be.visible')

      // Account Information
      signupPage.elements.titleMrRadio().check()
      signupPage.elements.passwordInput().type(user.password)
      signupPage.elements.daySelect().select('10')
      signupPage.elements.monthSelect().select('March')
      signupPage.elements.yearSelect().select('2000')

      // Address Information and create account
      signupPage.elements.firstNameInput().type(user.firstName)
      signupPage.elements.lastNameInput().type(user.lastName)
      signupPage.elements.companyInput().type(user.company)
      signupPage.elements.adressInput().type(user.address)
      signupPage.elements.countrySelect().select(user.country)
      signupPage.elements.stateInput().type(user.state)
      signupPage.elements.cityInput().type(user.city)
      signupPage.elements.zipcodeInput().type(user.zipcode)
      signupPage.elements.mobileNumberInput().type(user.mobileNumber)
      signupPage.elements.createAccountButton().click()

      // Account created successfully
      accountCreatedPage.elements.titleAccountCreated().should('be.visible')
      accountCreatedPage.elements.continueButton().click()

      // Logout and login with the newly created user
      homePage.elements.logoutMenu().should('be.visible').click()
      homePage.elements.loginMenu().click()
      loginPage.elements.loginForm().should('be.visible')
      loginPage.elements.loginEmailInput().type(user.email)
      loginPage.elements.loginPasswordInput().type(user.password)
      loginPage.elements.loginButton().click()

      // Delete the user account after logging in
      homePage.elements.deleteAccountMenu().should('be.visible').click()
      accountDeletedPage.elements.titleAccountDeleted().should('be.visible')
      accountDeletedPage.elements.continueButton().click()

      homePage.elements.loginMenu().should('be.visible')
    })
  })
})
