Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Features](#Features)
   * [Como usar](#Como-usar)
<!--te-->
<h4 align="center">
 <b>Crud no template</b> 🦸‍♂️
</h4>

<br>

### Sobre

<p align="center">Projeto desenvolvido com intenção de treinar em como seria utilizar um template usando a API que desenvolvi em Node. Utilizei o crud que fiz no react e tentei passar nesse template.</p>

<h4 align="center"> 
	🚧  🚀 Em desenvolvimento  🚧
</h4>

### Features

- [x] Cadastro de usuário
- [x] Listagem de cadastros
- [ ] Exclusão de cadastro
- [ ] Edição do cadastro

### Como usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [XAMPP](https://www.apachefriends.org/pt_br/index.html). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o server

```bash
# Estar rodando o XAMPP com o MySQL iniciado

# Clone este repositório
$ git clone <https://github.com/sandrovisky/API-NODE>

# Instale as dependências
$ npm install

# Acesse a pasta do projeto no terminal/cmd
Abra o arquivo /src/config/databse.js
Configure com os dados do seu banco de dados

# Execute o comando que iá criar a tabela "clientes" no banco de dados
$ npx sequelize db:migrate

# Vá para a pasta src
$ cd src 

# Execute a aplicação 
$ node server.js

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

https://sandrovisky.github.io/crud-feito-no-template/

<p align="center">Feito com ❤️ por <strong>Sandrovisky :wave: </p>

