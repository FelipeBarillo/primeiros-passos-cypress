import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js' 
import MenuPage from "../pages/menuPage.js"
import MyinfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()

describe('ORANGE', () => { 

  //it.skip ele pula este teste / it.only ele roda apenas esse it
  it.only('User Info update - Sucesso', () => { 
    
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('Admin', 'admin123')
    
    dashboardPage.checkDashboardPage()

    menuPage.acessMyinfoButton()

    myinfoPage.fillPersonalDetails('FelipeTest', 'SantanaTest', 'BarilloTest')
    myinfoPage.fillEmployee('001', '002ID', '2025-12-17', '2010-01-19')
    myinfoPage.fillStatus('1986-24-06')
    myinfoPage.fillButtonSave()
    
  })

  it('Login - Fail', () => {
    cy.visit('/login')
    cy.get(selectorsList.usernameFiel).type(userData.userFail.userName)
    cy.get(selectorsList.userpasswordFiel).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert) 
  })

})