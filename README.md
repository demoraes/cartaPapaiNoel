# Backend 

API RESTful para cadastro de cartas cartinhas de Natal, implementada em Node.js/Express.js.

# Deploy

O deploy da aplicação foi feito utilizando o serviço EC2 da aws.


# Autenticação

As rotas são autenticadas usando jsonwebtoken, com excessão da rota `POST /users` usada para castro de usuários.
Para se autenticar na api basta usar a rota `POST /sessions` e utilizar o token nas demais rotas.

## Instalar aplicativo 

Para instalar o aplicativo, insira o comando abaixo:

## `yarn`

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

### PUT `/letters/:id/read`

Marca a carta como lida

### DELETE `/letters/:id`

Deleta a carta

Obs: Todas as rotas estão no arquivo `rotas-to-insomnia.json`, que forão exportadas do Insomnia, no caso basta importar para dentro do seu Insomnia.
