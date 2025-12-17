import DashboardPage from "./dashboardPage"

class MenuPage {
    selectorList() {
        const selector = {
            admimButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardButton: "[href='/web/index.php/dashboard/index']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            clainButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
            
            }

        return selector
    }

acessAdminButton() {
    cy.get(this.selectorList().admimButton).click()
}

acessPinButton() {
    cy.get(this.selectorList().pimButton).click()
}

acessLeaveButton() {
    cy.get(this.selectorList().leaveButton).click()
}

acessTimeButton() {
    cy.get(this.selectorList().timeButton).click()
}

acessRecruitmentButton() {
    cy.get(this.selectorList().recruitmentButton).click()
}

acessMyinfoButton() {
    cy.get(this.selectorList().myInfoButton).click()
}

acessPerformanceButton() {
    cy.get(this.selectorList().performanceButton).click()
}

acessDashboardButton() {
    cy.get(this.selectorList().dashboardButton).click()
}

acessDirectoryButton() {
    cy.get(this.selectorList().directoryButton).click()
}

acessMaintenanceButton() {
    cy.get(this.selectorList().maintenanceButton).click()
}

acessClainmaintenanceButton() {
    cy.get(this.selectorList().clainButton).click()
}

acessBuzzButton() {
    cy.get(this.selectorList().buzzButton).click()
}
}

export default MenuPage  