# primeiros-passos-cypress

### Adicioando primeito teste de login

## 📝 Opção 1: Inicializando um novo Repositório Local
Use esta sequência se você estiver começando um projeto do zero no seu computador e quiser enviá-lo para o GitHub.

Bash

### 1. Cria um arquivo README.md com o título'
> echo "# primeiros-passos-cypress" >> README.md

### 2. Inicializa o Git no diretório atual
> git init

### 3. Adiciona o arquivo README.md para ser rastreado
> git add README.md

### 4. Confirma a primeira alteração com uma mensagem
> git commit -m "first commit"

### 5. Renomeia a branch principal para 'main'
> git branch -M main

### 6. Conecta o repositório local ao repositório remoto no GitHub
> git remote add origin https://github.com/FelipeBarillo/primeiros-passos-cypress.git (Use o seu HTTP)

### 7. Envia o código da branch 'main' para o remoto 'origin'
> git push -u origin main

## 🚀 Opção 2: Enviando um Repositório Local Existente
Use esta sequência se você já tem um projeto Git inicializado (você já rodou git init e já tem commits) e só precisa conectá-lo ao GitHub.

Bash

### 1. Conecta o repositório local ao repositório remoto no GitHub
> git remote add origin https://github.com/FelipeBarillo/primeiros-passos-cypress.git

### 2. Renomeia a branch principal para 'main' (se necessário)
> git branch -M main

### 3. Envia o código da branch 'main' para o remoto 'origin'
git push -u origin main

## 🔑 Autenticação
Ao rodar o git push, você provavelmente será solicitado a autenticar. O GitHub exige que você use um Token de Acesso Pessoal (Personal Access Token - PAT) no lugar da sua senha da conta para operações via linha de comando (a menos que você esteja usando um gerenciador de credenciais ou SSH).

Se o push falhar devido a problemas de autenticação, você precisará gerar um PAT no GitHub e usá-lo quando a janela de login aparecer ou quando for solicitada a senha no terminal.

Ex:<br>
felipe@mintQA:~/Área de trabalho/primeiros-passos-cypress$ git push origin main<br>
Username for 'https://github.com': (Seu nome do perfil)<br>
Password for 'https://FelipeBarillo@github.com': (Aqui será o token gerado)<br>

<br>

## 🛠️ O Que Fazer se Você Não Tem um Token PAT
Se você ainda não tem um Token de Acesso Pessoal, precisará gerar um no site do GitHub:<br>
<ol>
  <li>Acesse as Configurações do GitHub: Vá para Settings Configurações no seu perfil.</li>
  <li>Vá para as Configurações do Desenvolvedor: Role para baixo até a barra lateral e clique em Developer settings.</li>
  <li>Gere um Novo Token: Clique em Personal access tokens $\rightarrow$ Tokens (classic) $\rightarrow$ Generate new token (classic).</li>
  <li>Configure o Token:</li>
<ul>
  <li>Note: Dê um nome descritivo (ex: "Terminal Access").</li>
  <li>Expiration: Escolha uma data de expiração segura (ex: 30 dias ou 90 dias).</li>
  <li>Scopes (Permissões): Você deve selecionar as permissões necessárias. Para push em repositórios, a permissão repo (controle total sobre repositórios privados) geralmente é suficiente e necessária.</li>
</ul>
  <li>Copie o Token: Após a geração, o GitHub exibirá o token. Copie-o Imediatamente! Ele não será mostrado novamente.</li>
</ol>
  <br>
  Use o Nome de Usuário e este Token copiado na solicitação do terminal para concluir o git push origin main.
  



