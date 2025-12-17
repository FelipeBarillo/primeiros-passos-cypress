class DashboardPage {
    selectorList() {
        const selector = {
            dashBoarGrid: '.oxd-topbar-header-breadcrumb > .oxd-text', 
    
        }
        
    return selector

    }

    checkDashboardPage() {
        //location = Saber qual URL está / should = igualar o endereço
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        // contains = Confirma elemento na pagina logada!!!
        cy.get(this.selectorList().dashBoarGrid).contains('Dashboard')
    
    }
    
}

export default DashboardPage