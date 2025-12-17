class MyinfoPage {
    // Define os seletores da página de informações pessoais, usando nomes, classes e tipos
    selectorList() {
        const selector = {
            firstName: '[name="firstName"]', // Campo do primeiro nome
            middleName: '[name="middleName"]', // Campo do nome do meio
            lastName: "[name='lastName']", // Campo do sobrenome
            
            genericFiled: ".oxd-input", // Campos genéricos que compartilham a mesma classe (acessados por índice)
            comboBox: ".bi-calendar", // Ícones de calendário (seletores de data)
            closeButtonLicense: ".--close", // Botão para fechar o seletor de data da licença

            nationality: ".oxd-select-text--after", // Dropdown de nacionalidade
            nationalityImput: ":nth-child(27) > span", // Opção específica dentro do dropdown de nacionalidade
            maritinalStatus: ".oxd-select-text--after", // Dropdown de estado civil
            maritinalImput: ":nth-child(4) > span", // Opção específica dentro do dropdown de estado civil
            closeButtonDateBrith: ".oxd-date-input-link", // Botão para fechar o calendário de data de nascimento
            genderButtom: ".oxd-radio-wrapper", // Seletores de gênero (Radio buttons)
            saveButton: "[type='submit']", // Botão de salvar o formulário
        }
        
        return selector
    }

    // Preenche os campos de nome completo, limpando-os antes de digitar
    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstName).clear().type(firstName)
        cy.get(this.selectorList().middleName).clear().type(middleName)
        cy.get(this.selectorList().lastName).clear().type(lastName)
    }
    
    // Preenche dados do funcionário e datas de licença usando índices (eq)
    fillEmployee(imployeeId, otherId, licenseNumber, licenseExpiry) {
        // eq(n) seleciona o elemento na posição N do array de elementos encontrados
        cy.get(this.selectorList().genericFiled).eq(4).clear().type(imployeeId) 
        cy.get(this.selectorList().genericFiled).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericFiled).eq(6).clear().type(licenseNumber)
        cy.get(this.selectorList().comboBox).eq(0).click() // Abre o calendário de expiração
        cy.get(this.selectorList().genericFiled).eq(7).clear().type(licenseExpiry) // Digita a data
        cy.get(this.selectorList().closeButtonLicense).click() // Fecha o calendário
    }

    // Preenche nacionalidade, estado civil, gênero e data de nascimento
    fillStatus(dataBrith) {
        cy.get(this.selectorList().nationality).eq(0).click() // Abre o combo de nacionalidade
        cy.get(this.selectorList().nationalityImput).click({force: true}) // Força o clique na opção (caso esteja sobreposta)
        cy.get(this.selectorList().maritinalStatus).eq(1).click() // Abre o combo de estado civil
        cy.get(this.selectorList().maritinalImput).click() // Seleciona a opção de estado civil
        cy.get(this.selectorList().genderButtom).eq(0).click({force: true}) // Seleciona o primeiro gênero (ex: Male)
        cy.get(this.selectorList().comboBox).eq(1).click() // Abre o calendário de nascimento
        cy.get(this.selectorList().genericFiled).eq(8).clear().type(dataBrith) // Digita a data de nascimento
        cy.get(this.selectorList().closeButtonDateBrith).eq(2).click() // Fecha o calendário de nascimento
        cy.get(this.selectorList().genderButtom).eq(0).click() // Confirma a seleção do gênero
    }

    // Clica no botão de salvar e valida se a mensagem de sucesso apareceu
    fillButtonSave() {
        cy.get(this.selectorList().saveButton).eq(0).click() // Clica no primeiro botão de submit encontrado
        // Valida se o texto de confirmação do sistema está presente no corpo da página
        cy.get('body').should('contain', 'Successfully Update') 
    }
}

export default MyinfoPage