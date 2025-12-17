class LoginPage {
    selectorList() {
        const selector = {
           usernameFiel: '[name="username"]',
            passwordFiel: '[name="password"]',
            loginButton: 'button',
            wrongCredentialAlert: '.oxd-alert',
        }

        return selector
    }

    accessLoginPage() { 

        cy.visit('/login')

    }

    loginWithAnyUser(userName, password) {
        cy.get(this.selectorList().usernameFiel).type(userName) // this. = chamar a função
        cy.get(this.selectorList().passwordFiel).type(password)
        cy.get(this.selectorList().loginButton).click()

    }

}

export default LoginPage  
