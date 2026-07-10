class SignupPage {
  elements = {
    //Account Information

    signupRegistrationForm: () => cy.get('.login-form'),

    titleMrRadio: () => cy.get('#id_gender1'),
    titleMrsRadio: () => cy.get('#id_gender2'),

    nameInput: () => cy.get('#name'),
    emailInput: () => cy.get('#email'),

    passwordInput: () => cy.get('#password'),

    daySelect: () => cy.get('#days'),
    monthSelect: () => cy.get('#months'),
    yearSelect: () => cy.get('#years'),

    // Adress Information
    firstNameInput: () => cy.get('#first_name'),
    lastNameInput: () => cy.get('#last_name'),
    companyInput: () => cy.get('#company'),
    adressInput: () => cy.get('#address1'),
    countrySelect: () => cy.get('#country'),
    stateInput: () => cy.get('#state'),
    cityInput: () => cy.get('#city'),
    zipcodeInput: () => cy.get('#zipcode'),
    mobileNumberInput: () => cy.get('#mobile_number'),

    createAccountButton: () => cy.get('button[data-qa="create-account"]')
  }
}

export default SignupPage
