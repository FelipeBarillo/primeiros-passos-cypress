# Primeiros Passos Cypress

Este projeto, intitulado **primeiros-passos-cypress**, é um repositório dedicado ao estudo e à aplicação prática de conceitos fundamentais de automação de testes de ponta a ponta (E2E) utilizando o **framework Cypress**. Desenvolvido como parte da minha jornada para me tornar um **QA Engineer**, o projeto foca na criação de suítes de testes robustas para fluxos de login e gestão de usuários. A arquitetura foi estruturada sob o padrão **Page Object Model (POM)** para garantir a organização e o reuso de código, além de utilizar Fixtures para o gerenciamento eficiente de massa de dados.

### 🚀 Funcionalidades Automatizadas

Atualmente, o projeto cobre os seguintes fluxos:

- Login: Validação de acesso ao sistema (login.spec.cy.js).

- Gestão de Usuário: Testes relacionados ao perfil e informações do usuário (user.spec.cy.js).

### 🏗️ Arquitetura e Boas Práticas

Para tornar os testes mais sustentáveis e organizados, apliquei os seguintes conceitos:

- Page Object Model (POM): Separação da lógica de interação com a página da lógica dos testes, facilitando a manutenção.

- Data-Driven Testing: Uso de arquivos JSON na pasta fixtures para gerenciar massas de dados.

- Custom Commands: Comandos personalizados para otimizar ações repetitivas (como o login).

### 📂 Estrutura do Projeto

| Pasta | Descrição |
| :--- | :--- |
| **e2e** | Arquivos de teste (.cy.js) |
| **fixtures** | Massa de dados (JSON) |
| **pages** | Camada de Page Objects (POM) |
| **support** | Comandos personalizados e configurações |
| **.gitignore** | Arquivos ignorados pelo Git |
| **cypress.config.js** | Configurações globais do Cypress |
| **package.json** | Dependências e scripts do projeto |
| **README.md** | Documentação do projeto |

### 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js

###  🏁 Como Rodar o Projeto

1. Clone o repositório:
```bash
clone htps://github.com/seu-usuario/primeiros-passos-cypress.git
```
2. Instale as dependências:
```bash
npm install
```
3. Execute os testes:

Via interface (Headed):
```bash
npx cypress open
```

Via terminal (Headless): 
```bash
npx cypress run
```

---

### 💡 Este projeto é um marco na minha jornada para me tornar um QA Engineer de excelência.
