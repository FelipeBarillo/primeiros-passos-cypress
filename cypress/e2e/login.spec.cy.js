describe('ORANGE', () => {

  const selectorsList = {
    usernameFiel: "[name='username']",
    userpasswordFiel: "[name='password']",
    loginButton: "button",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: ".oxd-alert"
    }
  
  it('Login - Sucesso', () => { //it.skip ele pula este teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiel).type('Admin')
    cy.get(selectorsList.userpasswordFiel).type('admin123')
    cy.get(selectorsList.loginButton).click()
     //location = Saber qual URL está / should = igualar o endereço
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // contains = Confirma elemento na pagina logada!!!
    cy.get(sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameFiel).type('test')
    cy.get(selectorsList.userpasswordFiel).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsListwrongCredentialAlert)
    
  })


})
