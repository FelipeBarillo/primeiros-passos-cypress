
import userData from '../fixtures/userData.json' // Importa a massa de dados de teste do arquivo JSON
import LoginPage from '../pages/loginPage.js' // Importa a classe de mapeamento da página de Login
import DashboardPage from '../pages/dashboardPage.js' // Importa a classe de mapeamento da Dashboard

const loginPage = new LoginPage() // Instancia a classe LoginPage para uso no teste
const dashboardPage = new DashboardPage() // Instancia a classe DashboardPage para uso no teste

describe('ORANGE', () => { 

  
  it('Login - Sucess', () => { //it.skip ele pula este teste / it.only ele roda apenas esse it
    
    loginPage.accessLoginPage() // Acessa a URL da página de login do sistema
    loginPage.loginWithAnyUser(userData.userSucess.userName, userData.userSucess.password) // Realiza o login com as credenciais fornecidas
    dashboardPage.checkDashboardPage() // Valida se o redirecionamento para a Dashboard ocorreu com sucesso
    
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.userName, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })

})