# bellatrix-api

## Comandos

### Instalar dependências

yarn

### Criar migrations

yarn db create **nome**

### Rodar migrations

yarn migrate

### Rodar servidor de desenvolvimento

yarn dev

## Rotas

### Criar usuário

Endpoint: /user POST

Body:

```json
{
  "name": "Axl Rose",
  "email": "guns@roses.com",
  "password": "MySweetChild"
}
```

Response:

Status: 201 Created

```json
{
  "id": "630caa263662b7fe2637d1af",
  "name": "Axl Rose",
  "email": "guns@roses.com"
}
```

### Login

Endpoint: /user POST

Body:

```json
{
  "email": "guns@roses.com",
  "password": "MySweetChild"
}
```

Response:

Status: 200 OK

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bnNAcm9zZXMuY29tIiwiaWF0IjoxNjY1NDQyODAyLCJleHAiOjE2NjU1MjkyMDJ9.JxpA6Xmd0tEHP2VHpcNVQQBbp3iKc3X-njQGJcQ-zec"
}
```

### Buscar revisões

Endpoint: /review GET

Response:

Status: 200 OK

## To-do

### Criar rota para criar revisões

/reviews POST

### Criar rota para modificar uma revisão

/reviews/:id PATCH

Permite alterar as informações de uma revisão

### Criar rota para exluir uma revisão

/reviews/:id DELETE

Será um soft delete, permitindo que o usuário recupere as revisões deletadas, em um versão futura
