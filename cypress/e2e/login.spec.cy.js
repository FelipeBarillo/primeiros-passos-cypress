

describe('ORANGE', () => {
  it('Login - Sucesso', () => { //it.skip ele pula este teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('button').click()
     //location = Saber qual URL está / should = igualar o endereço
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // contains = Confirma elemento na pagina logada!!!
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('test')
    cy.get('button').click()
    cy.get('.oxd-alert')
    
  })


})