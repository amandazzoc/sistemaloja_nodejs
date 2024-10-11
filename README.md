# Sistema de Gestão de Loja 🛒
<p>Um sistema de gestão de loja desenvolvido com Node.js, utilizando Express.js para gerenciamento de rotas, Sequelize como ORM para interagir com o banco de dados MySQL, e Multer para upload de imagens. A aplicação permite o cadastro, edição, remoção e exibição de produtos, além de gerenciamento de pedidos e clientes. A interface é dinâmica e interativa, construída com EJS e Bootstrap Icons.</p>

## 🚀 Funcionalidades
- <b>Gerenciamento de Produtos:</b> Cadastro, edição, remoção e exibição de produtos. Cada produto possui imagem, nome, preço e categoria.
- <b>Upload de Imagens:</b> Utilização de Multer para upload e armazenamento de imagens no servidor.
- <b>Gerenciamento de Pedidos:</b> Cadastro, edição e remoção de pedidos.
- <b>Gerenciamento de Clientes:</b> Controle completo de clientes, com funções para listar, adicionar e remover clientes.
- <b>Interface Dinâmica:</b> Utilização de EJS para renderização de páginas dinâmicas e Bootstrap para responsividade e ícones.
## 📦 Dependências
O projeto utiliza as seguintes dependências:
- <b>Node.js:</b> Plataforma para executar código JavaScript no servidor.
- <b>Express.js:</b> Framework para construção de APIs e rotas.
- <b>Sequelize:</b> ORM para facilitar a comunicação com o banco de dados MySQL.
- <b>MySQL2:</b> Driver para interagir com o banco de dados MySQL.
- <b>Multer:</b> Middleware para upload de arquivos, usado para o upload de imagens dos produtos.
- <b>EJS:</b> Template engine para renderização dinâmica de páginas HTML.
- <b>Bootstrap Icons:</b> Biblioteca de ícones para uma interface visual amigável e moderna.
- <b>Nodemon:</b> Utilizado para reiniciar automaticamente o servidor em desenvolvimento.
## 🛠️ Instalação e Execução
Siga os passos abaixo para rodar o projeto localmente.
### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL (com uma base de dados configurada)
### Passos para rodar o projeto
1. <b>Clone o repositório:</b>
```bash
git clone https://github.com/amandazzoc/sistemaloja_nodejs.git
cd sistemaloja_nodejs
```
2. <b>Instale as dependências:</b>
```bash
npm install
```
3. <b>Configuração do Banco de Dados:</b> Configure as credenciais no arquivo ```config/sequelize-config.js```.
4. Inicie a aplicação:
```
npm start
```
A aplicação estará rodando em ```http://localhost:8080```.

## 📂 Estrutura de Pastas
Abaixo está a estrutura básica do projeto:

```graphql
sistemaloja_nodejs/
├── config/               # Configurações de banco de dados (Sequelize)
├── controllers/          # Controladores de rotas
├── models/               # Modelos do Sequelize
├── public/               # Arquivos estáticos
│   ├── css/              # Arquivos CSS para estilização
│   ├── img/              # Imagens públicas da aplicação
│   └── js/               # Scripts JavaScript utilizados no front-end
├── uploads/              # Pasta para armazenamento de imagens enviadas pelo usuário
├── views/                # Views EJS para renderização
│   ├── partials/         # Partials EJS, como header e footer.
├── index.js              # Arquivo principal da aplicação
├── package.json          # Arquivo de configuração do Node.js
└── README.md             # Documentação do projeto
```
## 📋 Rotas da API
### Produtos
- <b>GET</b> ```/produtos``` - Lista todos os produtos.
- <b>GET</b> ```/produtos/:id``` - Exibe detalhes de um produto específico.
- <b>POST</b> ```/produtos/new``` - Cadastra um novo produto.
- <b>POST</b> ```/produtos/update``` - Atualiza um produto existente.
- <b>GET</b> ```/produtos/edit/:id``` - Redireciona para a pagina de edição de um produto específico.
- <b>GET</b> ```/produtos/delete/:id``` - Remove um produto pelo ID.
### Pedidos
- <b>GET</b> ```/pedidos``` - Lista todos os pedidos.
- <b>POST</b> ```/pedidos/new``` - Cadastra um novo pedido.
- <b>POST</b> ```/pedidos/update``` - Atualiza um pedido existente.
- <b>GET</b> ```/pedidos/edit/:id``` - Redireciona para a pagina de edição de um pedido específico.
- <b>GET</b> ```/pedidos/delete/:id``` - Remove um pedido pelo ID.
### Clientes
- <b>GET</b> ```/clientes``` - Lista todos os clientes.
- <b>POST</b> ```/clientes/new``` - Cadastra um novo cliente.
- <b>POST</b> ```/clientes/update``` - Atualiza um cliente existente.
- <b>GET</b> ```/clientes/edit/:id``` - Redireciona para a pagina de edição de um cliente específico.
- <b>GET</b> ```/clientes/delete/:id``` - Remove um cliente pelo ID.
  
## 🖼️ Upload de Imagens
O upload de imagens é gerenciado pela biblioteca Multer, que salva as imagens enviadas para a pasta ```/uploads```. Ao criar ou editar um produto, é possível enviar uma imagem que será associada ao produto.

## 🚧 Melhorias Futuras
Algumas funcionalidades que podem ser adicionadas no futuro:
- Implementação de autenticação para gerenciar usuários com diferentes níveis de acesso.
- Validação de imagens no upload (tipo e tamanho).
- Validação de inputs para a entrada de dados.
- Dashboard com métricas de vendas e controle de estoque.
- Funcionalidade de filtro e pesquisa de produtos.
- Funcionalidade de fazer um pedido baseado nos produtos disponíveis.
- Funcionalidade de carrinho de compras.
  
## 🤝 Contribuições
Contribuições são sempre bem-vindas! Para contribuir com o projeto:
1. Faça um fork do projeto.
2. Crie uma nova branch para suas modificações: ```git checkout -b minha-modificacao```.
3. Envie suas mudanças: ```git push origin minha-modificacao```.
4. Abra um Pull Request.

## 👩🏻‍💻 Autor
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100137341?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Amanda Oliveira</b></sub>🚀


Feito com ❤️ por Amanda Oliveira 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Amanda-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/amanda-oliveira-970410232/)](https://www.linkedin.com/in/amanda-oliveira-970410232/)
