🛠️ Documentação Técnica do Projeto
Nesta seção, detalho os comandos do Cypress e os tipos de funções JavaScript que utilizei para construir a arquitetura deste projeto de QA.

### 🚀 Comandos Cypress Utilizados

| Comando | Descrição | Exemplo no Projeto |
| :--- | :--- | :--- |
| **cy.visit()** | Navega para uma URL específica. | `cy.visit('/login')` |
| **cy.get()** | Seleciona um ou mais elementos DOM através de seletores CSS. | `cy.get('.oxd-input')` |
| **cy.type()** | Digita caracteres em um campo de input. | `.type(userName)` |
| **cy.click()** | Clica em um elemento (botão, link, etc). | `.click({force: true})` |
| **cy.clear()** | Limpa o valor de um campo de entrada (input). | `.clear().type(firstName)` |
| **cy.location()** | Captura o objeto de localização da URL atual. | `cy.location('pathname')` |
| **cy.contains()** | Verifica se um elemento contém um texto específico. | `.contains('Dashboard')` |
| **cy.should()** | Cria uma asserção (validação) para o teste. | `.should('equal', '/index')` |
| **eq(index)** | Seleciona um elemento específico em uma lista baseada no índice. | `cy.get(...).eq(4)` |

### 🏗️ Estrutura de Funções e Lógica

| Conceito | Descrição | Exemplo Prático |
| :--- | :--- | :--- |
| **Classes (POM)** | Organiza as páginas do sistema em objetos distintos para facilitar manutenção. | `class MyinfoPage { ... }` |
| **Constructor-like (selectorList)** | Armazena e organiza os mapeamentos de elementos. | `selectorList() { return selector }` |
| **Arrow Functions** | Utilizadas nas suítes de teste do Mocha/Cypress. | `it('teste', () => { ... })` |
| **Parametrizadas** | Permite que uma função receba diferentes dados (Reutilização). | `fillPersonalDetails(firstName, lastName)` |
| **This (Contexto)** | Referencia o contexto da própria classe para acessar seletores. | `this.selectorList().firstName` |
| **Export/Import** | Permite a modularização e compartilhamento de arquivos. | `export default LoginPage` |
| **Methods (Métodos)** | Funções criadas dentro das classes para realizar ações específicas. | `fillPersonalDetails()` |
| **Parameters (Parâmetros)** | Permite enviar dados variáveis para dentro das funções (Massa de Dados). | `loginWithAnyUser(userName, password)` |
| **This Key** | Utilizado para referenciar propriedades ou outros métodos da mesma classe. | `this.selectorList()` |
| **Encapsulamento** | Prática de esconder os seletores dentro de uma função para proteger o código. | `const selector = { ... }` |
| **Modularização** | Divisão do código em múltiplos arquivos usando import e export. | `export default DashboardPage` |

### 📈 Fluxo da Arquitetura
Para garantir a qualidade, o projeto segue o seguinte fluxo de execução:

**Setup**: Instanciação das classes no arquivo de teste.

**Ação**: Métodos das Page Objects interagem com o DOM usando comandos cy.

**Validação**: Uso de should e contains para garantir que o sistema retornou o resultado esperado.