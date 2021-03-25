# Backend 

API RESTful para cadastro de cartas cartinhas de Natal, implementada em Node.js/Express.js.

# Autenticação

As rotas são autenticadas usando jsonwebtoken, com excessão da rota `POST /users` usada para castro de usuários.
Para se autenticar na api basta usar a rota `POST /sessions` e utilizar o token nas demais rotas.

## Instalar aplicativo 

Para instalar o aplicativo, insira

### `yarn`

na pasta do aplicativo.

## Rodar aplicativo

Para rodar o aplicativo em modo de desenvolvimento, insira

### `yarn dev:server`

na pasta do aplicativo.

## Rotas de cadastro de usuários

### POST `/users`
Cadastra um novo usuário

### POST `/sessions`
Faz login na api com usuário cadastrado



## Rotas de cadastro da carta

### GET `/letters`

Retorna o resultado da busca pelas cartas

### POST `/letters`

Cria uma nova carta

### PUT `/letters/:id`

Atualiza a carta

### DELETE `/letters/:id`

Deleta a carta
