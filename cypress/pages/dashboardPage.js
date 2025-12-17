class DashboardPage {
    
    selectorList() {// Define o método que mapeia os elementos específicos da página de Dashboard
        const selector = {
            dashBoarGrid: '.oxd-topbar-header-breadcrumb > .oxd-text', // Seletor do título (breadcrumb) no topo da página
    
        }
        
    return selector // Retorna o objeto com os seletores para ser usado nos métodos abaixo

    }

    // Método responsável por validar se o login foi feito com sucesso e a página carregou
    checkDashboardPage() { 
        // cy.location('pathname') captura a URL atual e .should('equal', ...) valida se o endereço é exatamente o da Dashboard
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        
        // cy.get seleciona o elemento do título e .contains('Dashboard') confirma se o texto "Dashboard" está visível na tela
        cy.get(this.selectorList().dashBoarGrid).contains('Dashboard')
    
    }
    
}

export default DashboardPage // Exporta a classe para que o arquivo de teste possa validar o acesso