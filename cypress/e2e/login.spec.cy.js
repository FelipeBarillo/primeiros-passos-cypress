import userData from '../fixtures/userData.json'

describe('ORANGE', () => { 

  const selectorsList = {
    usernameFiel: "[name='username']",
    userpasswordFiel: "[name='password']",
    loginButton: "button",
    sectionTitleTopBar: ".oxd-layout-context",
    wrongCredentialAlert: ".oxd-alert"
  }

  it('Login - Sucesso', () => { //it.skip ele pula este teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiel).type(userData.userSucess.userName)
    cy.get(selectorsList.userpasswordFiel).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    //location = Saber qual URL está / should = igualar o endereço
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // contains = Confirma elemento na pagina logada!!!
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')

  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiel).type(userData.userFail.userName)
    cy.get(selectorsList.userpasswordFiel).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert) 

  })


})

