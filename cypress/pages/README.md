# 🚀 Projeto de Automação QA - OrangeHRM

Este repositório contém os testes automatizados desenvolvidos com foco no sistema **OrangeHRM Open Source**, utilizando o padrão de design **Page Object Model (POM)**.

Como parte dos meus estudos para me tornar um **QA Engineer**, este projeto demonstra a organização e a estrutura de código necessárias para criar testes robustos e de fácil manutenção.

## 🧱 Estrutura do Projeto

O core da automação reside na pasta `pages`, onde cada arquivo representa uma área funcional do sistema OrangeHRM.

### 📌 Pasta: `pages`

A pasta `pages` implementa o **Page Object Model (POM)**. Cada arquivo é uma classe que contém apenas os seletores (localizadores) e os métodos de interação com os elementos de uma página específica.

| Módulo do OrangeHRM | Arquivo | Funcionalidade Principal | Principais Elementos para Mapear |
| :--- | :--- | :--- | :--- |
| Admin | `AdminPage.js` | Gerenciamento de Usuários e Permissões | Campo de busca, Botão "Add", Tabela, Botões "Edit" / "Delete". |
| PIM | `PIMPage.js` | Lista e Criação de Empregados | Campos de filtro (Name, ID), Botão "Search", Botão "Add", Tabela. | 
| Leave | `LeavePage.js` | Pedidos e Aprovações de Licenças/Folgas | Campos de data, Seletor de Status, Botão "Search", Tabela, Botões "Approve" / "Reject". |
| Time |`TimePage.js` | Folhas de Ponto (Timesheets) | Campo de busca (Employee Name), Seletores de data/semana, Tabela. |
| Recruitment | `RecruitmentPage.js` | Gestão de Candidatos e Vagas | Campos de filtro, Botão "Search", Botão "Add", Tabela de candidatos. |
| My Info | `MyInfoPage.js` | Visualização e Edição de Detalhes Pessoais | Campos de texto, Botões "Edit" / "Save", Abas de navegação (Contatos, Emergência). |
| Perfomance | `PerformancePage.js` | Lista e Criação de Empregados | Campos de filtro, Botão "Search", Tabela de avaliações. |
| Dashboard | `DashboardPage.js` | Ponto de entrada após login, atalhos e widgets | Nome do usuário, Widgets de atalhos, Link "Logout". |
| Directory | `DirectoryPage.js` | Diretório de busca de Funcionários | Campos de busca, Botão "Search", Lista de resultados. |
| Maintenance | `MaintenancePage.js` | Manutenção e Limpeza de Dados (Purge) | Campo de autenticação (senha de Admin), Formulário de "Purge Records". |
| Clain | `ClaimPage.js` | Gestão e Atribuição de Reembolsos de Despesas | Campo de busca, Botão "Assign Claim", Tabela de pedidos. |
| Buzz | `BuzzPage.js` | Rede Social Interna (Feed de Notícias) | Campo de texto "Create Post", Botão "Post", Botões "Like" / "Comment". |

<br>

Uma dica para melhorar sua organização é você criar um arquivo para organizar o menu principal da página.

| Módulo do OrangeHRM | Arquivo | Funcionalidade Principal | Principais Elementos para Mapear |
| :--- | :--- | :--- | :--- |
| Menu Principal | `menuPage.js` | Gerenciamento do Menu | Localização da pagina |



