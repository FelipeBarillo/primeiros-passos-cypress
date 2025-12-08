# primeiros-passos-cypress

### Adicioando primeito teste de login

## 📝 Opção 1: Inicializando um novo Repositório Local
Use esta sequência se você estiver começando um projeto do zero no seu computador e quiser enviá-lo para o GitHub.

Bash

### 1. Cria um arquivo README.md com o título'
echo "# primeiros-passos-cypress" >> README.md

### 2. Inicializa o Git no diretório atual
git init

### 3. Adiciona o arquivo README.md para ser rastreado
git add README.md

### 4. Confirma a primeira alteração com uma mensagem
git commit -m "first commit"

### 5. Renomeia a branch principal para 'main'
git branch -M main

### 6. Conecta o repositório local ao repositório remoto no GitHub
git remote add origin https://github.com/FelipeBarillo/primeiros-passos-cypress.git (Use o seu HTTP)

### 7. Envia o código da branch 'main' para o remoto 'origin'
git push -u origin main

## 🚀 Opção 2: Enviando um Repositório Local Existente
Use esta sequência se você já tem um projeto Git inicializado (você já rodou git init e já tem commits) e só precisa conectá-lo ao GitHub.

Bash

### 1. Conecta o repositório local ao repositório remoto no GitHub
git remote add origin https://github.com/FelipeBarillo/primeiros-passos-cypress.git

### 2. Renomeia a branch principal para 'main' (se necessário)
git branch -M main

### 3. Envia o código da branch 'main' para o remoto 'origin'
git push -u origin main
