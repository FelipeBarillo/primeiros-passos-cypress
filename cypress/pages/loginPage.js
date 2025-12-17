class LoginPage {
    
    selectorList() { // Define o método que mapeia os elementos da tela de login (Inputs, Botão e Alertas)
        const selector = {
            usernameFiel: '[name="username"]', // Seletor do campo de entrada de nome de usuário
            passwordFiel: '[name="password"]', // Seletor do campo de entrada de senha
            loginButton: 'button', // Seletor genérico do botão de submissão do formulário
            wrongCredentialAlert: '.oxd-alert', // Seletor da mensagem de erro quando o login falha
        }

        return selector // Retorna os seletores para serem usados nos métodos da classe
    }

    
    accessLoginPage() { // Método responsável por navegar até a URL da página de login
        cy.visit('/login') // O comando visit utiliza a baseUrl configurada no cypress.config.js
    }

    
    loginWithAnyUser(userName, password) { // Método reutilizável para realizar o login aceitando qualquer combinação de usuário e senha
        
        cy.get(this.selectorList().usernameFiel).type(userName) // Seleciona o campo de usuário e digita o valor passado por parâmetro
        cy.get(this.selectorList().passwordFiel).type(password) // Seleciona o campo de senha e digita o valor passado por parâmetro
        cy.get(this.selectorList().loginButton).click() // Clica no botão para enviar os dados e tentar o acesso
    }

    checkAcessInvalid() {
        cy.get(this.selectorList().wrongCredentialAlert) // Verifica se o alerta de "credenciais incorretas" está visível na tela
    }
    
}

export default LoginPage // Exporta a classe para permitir a automação do fluxo de autenticação