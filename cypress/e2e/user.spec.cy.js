import userData from '../fixtures/userData.json'

describe('ORANGE', () => { 
    
  const selectorsList = {
    usernameFiel: '[name="username"]',
    userpasswordFiel: '[name="password"]',
    loginButton: 'button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text', 
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']"
  }

  const myInfoSelector = {
    firstName: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastName: "[name='lastName']",
    genericFiled: ".oxd-input", //4° - 5° - 6°
    dateField: "[placeholder='yyyy-dd-mm']",
    closeButton: ".--close",
    genderButtom: ".oxd-radio-wrapper",
    saveButton: "[type='submit']",
  }

  //it.skip ele pula este teste / it.only ele roda apenas esse it
  it.only('User Info update - Sucesso', () => { 
    cy.visit('/login')
    cy.get(selectorsList.usernameFiel).type(userData.userSucess.userName)
    cy.get(selectorsList.userpasswordFiel).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    //location = Saber qual URL está / should = igualar o endereço
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // contains = Confirma elemento na pagina logada!!!
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()

    cy.get(myInfoSelector.firstName).clear().type('Felipe') // type = Elemento preenchido no imput
    cy.get(myInfoSelector.middleName).clear().type('Santana')
    cy.get(myInfoSelector.lastName).clear().type('Barillo')
    cy.get(myInfoSelector.genericFiled).eq(4).clear().type('Felipe86') // eq = Ele puxa a posição de ARRAY
    cy.get(myInfoSelector.genericFiled).eq(5).clear().type('Felipe-001') // clear = Limpa o campo e deve estar depois da array localizada
    cy.get(myInfoSelector.genericFiled).eq(6).clear().type('Felipe06')
    cy.get(myInfoSelector.dateField).eq(0).clear().type('1986-06-24')
    cy.get(myInfoSelector.closeButton).click()
    cy.get(myInfoSelector.dateField).eq(1).clear().type('1986-06-24')
    cy.get(myInfoSelector.genderButtom).eq(0).click()
    cy.get(myInfoSelector.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
  })

  it('Login - Fail', () => {
    cy.visit('/login')
    cy.get(selectorsList.usernameFiel).type(userData.userFail.userName)
    cy.get(selectorsList.userpasswordFiel).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert) 
  })

})