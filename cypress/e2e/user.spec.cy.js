
import userData from '../fixtures/userData.json' // Importa a massa de dados de teste do arquivo JSON
import LoginPage from '../pages/loginPage.js' // Importa a classe de mapeamento da página de Login
import DashboardPage from '../pages/dashboardPage.js' // Importa a classe de mapeamento da Dashboard
import MenuPage from "../pages/menuPage.js" // Importa a classe de mapeamento do Menu lateral
import MyinfoPage from '../pages/myinfoPage.js' // Importa a classe de mapeamento da página "My Info"

const loginPage = new LoginPage() // Instancia a classe LoginPage para uso no teste
const dashboardPage = new DashboardPage() // Instancia a classe DashboardPage para uso no teste
const menuPage = new MenuPage() // Instancia a classe MenuPage para uso no teste
const myinfoPage = new MyinfoPage() // Instancia a classe MyinfoPage para uso no teste

describe('ORANGE', () => { 

  
  it.only('User Info update - Sucesso', () => { //it.skip ele pula este teste / it.only ele roda apenas esse it
    
    loginPage.accessLoginPage() // Acessa a URL da página de login do sistema
    loginPage.loginWithAnyUser('Admin', 'admin123') // Realiza o login com as credenciais fornecidas
    
    dashboardPage.checkDashboardPage() // Valida se o redirecionamento para a Dashboard ocorreu com sucesso

    menuPage.acessMyinfoButton() // Clica no botão "My Info" no menu lateral para acessar o perfil

    myinfoPage.fillPersonalDetails('FelipeTest', 'SantanaTest', 'BarilloTest') // Preenche os campos de nome, nome do meio e sobrenome
    myinfoPage.fillEmployee('001', '002ID', '2025-12-17', '2010-01-19') // Preenche campos de ID do funcionário, ID Alternativo e datas de expiração/nascimento
    myinfoPage.fillStatus('1986-24-06') // Preenche informações de status e data adicional
    myinfoPage.fillButtonSave() // Clica no botão de salvar para confirmar as alterações
    
  })

  it('Login - Fail', () => {
    cy.visit('/login') // Navega diretamente para a rota de login
    cy.get(selectorsList.usernameFiel).type(userData.userFail.userName) // Seleciona o campo de usuário e digita um dado inválido do fixture
    cy.get(selectorsList.userpasswordFiel).type(userData.userFail.password) // Seleciona o campo de senha e digita a senha inválida do fixture
    cy.get(selectorsList.loginButton).click() // Clica no botão de login para submeter o formulário
    cy.get(selectorsList.wrongCredentialAlert) // Verifica se o alerta de "credenciais incorretas" está visível na tela
  })

})