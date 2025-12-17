class MyinfoPage {
    selectorList() {
        const selector = {
    firstName: '[name="firstName"]',
    middleName: '[name="middleName"]',
    lastName: "[name='lastName']",
    
    genericFiled: ".oxd-input", // 4° - 5° - 6° - 7° - 8º
    comboBox: ".bi-calendar", // 0° - 1 (License Expiry e Date of Brith)
    closeButtonLicense: ".--close",

    nationality: ".oxd-select-text--after",
    nationalityImput: ":nth-child(27) > span",
    maritinalStatus: ".oxd-select-text--after",
    maritinalImput: ":nth-child(4) > span",
    closeButtonDateBrith: ".oxd-date-input-link", // 3°
    genderButtom: ".oxd-radio-wrapper",
    saveButton: "[type='submit']",
        }
        
    return selector
        
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstName).clear().type(firstName)
        cy.get(this.selectorList().middleName).clear().type(middleName)
        cy.get(this.selectorList().lastName).clear().type(lastName)
    }
    
    fillEmployee(imployeeId, otherId, licenseNumber, licenseExpiry) {
        // eq = Ele puxa a posição de ARRAY
        cy.get(this.selectorList().genericFiled).eq(4).clear().type(imployeeId) 
         // clear = Limpa o campo e deve estar depois da array localizada
        cy.get(this.selectorList().genericFiled).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericFiled).eq(6).clear().type(licenseNumber)
        cy.get(this.selectorList().comboBox).eq(0).click()
        cy.get(this.selectorList().genericFiled).eq(7).clear().type(licenseExpiry)
        cy.get(this.selectorList().closeButtonLicense).click()
    }

    fillStatus(dataBrith) {
        cy.get(this.selectorList().nationality).eq(0).click()
        cy.get(this.selectorList().nationalityImput).click({force: true})
        cy.get(this.selectorList().maritinalStatus).eq(1).click()
        cy.get(this.selectorList().maritinalImput).click()
        cy.get(this.selectorList().genderButtom).eq(0).click({force: true})
        cy.get(this.selectorList().comboBox).eq(1).click()
        cy.get(this.selectorList().genericFiled).eq(8).clear().type(dataBrith)
        cy.get(this.selectorList().closeButtonDateBrith).eq(2).click()
        cy.get(this.selectorList().genderButtom).eq(0).click()

    }

    fillButtonSave() {
        cy.get(this.selectorList().saveButton).eq(0).click()
        // should = A asserção: verifica se a caixa de seleção AGORA contém o texto 'Successfully Update'.
        cy.get('body').should('contain', 'Successfully Update') 
    }
}

export default MyinfoPage