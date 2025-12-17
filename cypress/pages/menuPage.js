class MenuPage {
    // Define o método que armazena todos os seletores (elementos) da página de Menu
    selectorList() {
        const selector = {
            admimButton: "[href='/web/index.php/admin/viewAdminModule']", // Seletor do botão Admin
            pimButton: "[href='/web/index.php/pim/viewPimModule']", // Seletor do botão PIM
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']", // Seletor do botão Leave (Folgas)
            timeButton: "[href='/web/index.php/time/viewTimeModule']", // Seletor do botão Time
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']", // Seletor do botão Recruitment
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']", // Seletor do botão My Info
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']", // Seletor do botão Performance
            dashboardButton: "[href='/web/index.php/dashboard/index']", // Seletor do botão Dashboard
            directoryButton: "[href='/web/index.php/directory/viewDirectory']", // Seletor do botão Directory
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']", // Seletor do botão Maintenance
            clainButton: "[href='/web/index.php/claim/viewClaimModule']", // Seletor do botão Claim (Reclamações/Pedidos)
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']", // Seletor do botão Buzz
            
            }

        return selector // Retorna o objeto com todos os seletores
    }

// Método para clicar no botão Admin
acessAdminButton() {
    cy.get(this.selectorList().admimButton).click()
}

// Método para clicar no botão PIM
acessPinButton() {
    cy.get(this.selectorList().pimButton).click()
}

// Método para clicar no botão Leave
acessLeaveButton() {
    cy.get(this.selectorList().leaveButton).click()
}

// Método para clicar no botão Time
acessTimeButton() {
    cy.get(this.selectorList().timeButton).click()
}

// Método para clicar no botão Recruitment
acessRecruitmentButton() {
    cy.get(this.selectorList().recruitmentButton).click()
}

// Método para clicar no botão My Info
acessMyinfoButton() {
    cy.get(this.selectorList().myInfoButton).click()
}

// Método para clicar no botão Performance
acessPerformanceButton() {
    cy.get(this.selectorList().performanceButton).click()
}

// Método para clicar no botão Dashboard
acessDashboardButton() {
    cy.get(this.selectorList().dashboardButton).click()
}

// Método para clicar no botão Directory
acessDirectoryButton() {
    cy.get(this.selectorList().directoryButton).click()
}

// Método para clicar no botão Maintenance
acessMaintenanceButton() {
    cy.get(this.selectorList().maintenanceButton).click()
}

// Método para clicar no botão Claim
acessClainmaintenanceButton() {
    cy.get(this.selectorList().clainButton).click()
}

// Método para clicar no botão Buzz
acessBuzzButton() {
    cy.get(this.selectorList().buzzButton).click()
}
}

export default MenuPage // Exporta a classe para ser utilizada em outros arquivos de teste